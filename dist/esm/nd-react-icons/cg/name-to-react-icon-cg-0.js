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
export function nameToReactIcon_cg_0(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, CgAbstract, CgAddR, CgAdd, CgAdidas, CgAirplane, CgAlarm, CgAlbum, CgAlignBottom, CgAlignCenter, CgAlignLeft, CgAlignMiddle, CgAlignRight, CgAlignTop, CgAnchor, CgAppleWatch, CgArrangeBack, CgArrangeFront, CgArrowAlignH, CgArrowAlignV, CgArrowBottomLeftO, CgArrowBottomLeftR, CgArrowBottomLeft, CgArrowBottomRightO, CgArrowBottomRightR, CgArrowBottomRight, CgArrowDownO, CgArrowDownR, CgArrowDown, CgArrowLeftO, CgArrowLeftR, CgArrowLeft, CgArrowLongDownC, CgArrowLongDownE, CgArrowLongDownL, CgArrowLongDownR, CgArrowLongDown, CgArrowLongLeftC, CgArrowLongLeftE, CgArrowLongLeftL, CgArrowLongLeftR, CgArrowLongLeft, CgArrowLongRightC, CgArrowLongRightE, CgArrowLongRightL, CgArrowLongRightR, CgArrowLongRight, CgArrowLongUpC, CgArrowLongUpE, CgArrowLongUpL, CgArrowLongUpR, CgArrowLongUp, CgArrowRightO, CgArrowRightR, CgArrowRight, CgArrowTopLeftO, CgArrowTopLeftR, CgArrowTopLeft, CgArrowTopRightO, CgArrowTopRightR, CgArrowTopRight, CgArrowUpO, CgArrowUpR, CgArrowUp, CgArrowsBreakeH, CgArrowsBreakeV, CgArrowsExchangeAltV, CgArrowsExchangeAlt, CgArrowsExchangeV, CgArrowsExchange, CgArrowsExpandDownLeft, CgArrowsExpandDownRight, CgArrowsExpandLeftAlt, CgArrowsExpandLeft, CgArrowsExpandRightAlt, CgArrowsExpandRight, CgArrowsExpandUpLeft, CgArrowsExpandUpRight, CgArrowsHAlt, CgArrowsH, CgArrowsMergeAltH, CgArrowsMergeAltV, CgArrowsScrollH, CgArrowsScrollV, CgArrowsShrinkH, CgArrowsShrinkV, CgArrowsVAlt, CgArrowsV, CgAssign, CgAsterisk, CgAtlasian, CgAttachment, CgAttribution, CgAwards, CgBackspace, CgBandAid, CgBatteryEmpty, CgBatteryFull, CgBattery, CgBee, CgBell, CgBitbucket, CgBlock, CgBmw, CgBoard, CgBolt, CgBookmark, CgBorderAll, CgBorderBottom, CgBorderLeft, CgBorderRight, CgBorderStyleDashed, CgBorderStyleDotted, CgBorderStyleSolid, CgBorderTop, CgBot, CgBowl, CgBox, CgBoy, CgBrackets, CgBriefcase, CgBrowse, CgBrowser, CgBrush, CgBulb, CgCPlusPlus, CgCalculator, CgCalendarDates, CgCalendarDue, CgCalendarNext, CgCalendarToday, CgCalendarTwo, CgCalendar, CgCalibrate, CgCamera, CgCap, CgCaptions, CgCardClubs, CgCardDiamonds, CgCardHearts, CgCardSpades, CgCarousel, CgCast, CgChanel, CgChart, CgCheckO, CgCheckR, CgCheck, CgChevronDoubleDownO, CgChevronDoubleDownR, CgChevronDoubleDown, CgChevronDoubleLeftO, CgChevronDoubleLeftR, CgChevronDoubleLeft, CgChevronDoubleRightO, CgChevronDoubleRightR, CgChevronDoubleRight, CgChevronDoubleUpO, CgChevronDoubleUpR, CgChevronDoubleUp, CgChevronDownO, CgChevronDownR, CgChevronDown, CgChevronLeftO, CgChevronLeftR, CgChevronLeft, CgChevronRightO, CgChevronRightR, CgChevronRight, CgChevronUpO, CgChevronUpR, CgChevronUp, CgCircleci, CgClapperBoard, CgClipboard, CgCloseO, CgCloseR, CgClose, CgCloud, CgCodeClimate, CgCodeSlash, CgCode, CgCoffee, CgCollage, CgColorBucket, CgColorPicker, CgComedyCentral, CgComment, CgCommunity, CgComponents, CgCompressLeft, CgCompressRight, CgCompressV, CgCompress, CgController, CgCopy, CgCopyright, CgCornerDoubleDownLeft, CgCornerDoubleDownRight, CgCornerDoubleLeftDown, CgCornerDoubleLeftUp, CgCornerDoubleRightDown, CgCornerDoubleRightUp, CgCornerDoubleUpLeft, CgCornerDoubleUpRight, CgCornerDownLeft, CgCornerDownRight, CgCornerLeftDown, CgCornerLeftUp, CgCornerRightDown, CgCornerRightUp, CgCornerUpLeft, CgCornerUpRight, CgCreditCard, CgCrop, CgCross, CgCrowdfire, CgCrown, CgDanger, CgDarkMode, CgData, CgDatabase, CgDebug, CgDesignmodo, CgDesktop, CgDetailsLess, CgDetailsMore, CgDialpad, CgDice1, CgDice2, CgDice3, CgDice4, CgDice5, CgDice6, CgDigitalocean, CgDisc, CgDisplayFlex, CgDisplayFullwidth, CgDisplayGrid, CgDisplaySpacing, CgDistributeHorizontal, CgDistributeVertical, CgDockBottom, CgDockLeft, CgDockRight, CgDockWindow, CgDolby, CgDollar, CgDribbble, CgDrive, CgDropInvert, CgDropOpacity, CgDrop, CgDuplicate, CgEditBlackPoint, CgEditContrast, CgEditExposure, CgEditFade, CgEditFlipH, CgEditFlipV, CgEditHighlight, CgEditMarkup, CgEditMask, CgEditNoise, CgEditShadows, CgEditStraight, CgEditUnmask, CgEject, CgEnter, CgErase, CgEreader, CgEricsson, CgEthernet, CgEuro, CgEventbrite, CgExpand, CgExport, CgExtensionAdd, CgExtensionAlt, CgExtensionRemove, CgExtension, CgExternal, CgEyeAlt, CgEye, CgFacebook, CgFeed, CgFigma, CgFileAdd, CgFileDocument, CgFileRemove, CgFile, CgFilm, CgFilters, CgFlagAlt, CgFlag, CgFolderAdd, CgFolderRemove, CgFolder, CgFontHeight, CgFontSpacing, CgFormatBold, CgFormatCenter, CgFormatColor, CgFormatHeading, CgFormatIndentDecrease, CgFormatIndentIncrease, CgFormatItalic, CgFormatJustify, CgFormatLeft, CgFormatLineHeight, CgFormatRight, CgFormatSeparator, CgFormatSlash, CgFormatStrike, CgFormatText, CgFormatUnderline, CgFormatUppercase, CgFramer, CgGames, CgGenderFemale, CgGenderMale, CgGhostCharacter, CgGhost, CgGift, CgGirl, CgGitBranch, CgGitCommit, CgGitFork, CgGitPull, CgGitter, CgGlassAlt, CgGlass, CgGlobeAlt, CgGlobe, CgGoogleTasks, CgGoogle, CgGym, CgHashtag, CgHeadset, CgHeart, CgHello, CgHomeAlt, CgHomeScreen, CgHome, CgIcecream, CgIfDesign, CgImage, CgImport, CgInbox, CgIndieHackers, CgInfinity, CgInfo, CgInpicture, CgInsertAfterO, CgInsertAfterR, CgInsertAfter, CgInsertBeforeO, CgInsertBeforeR, CgInsertBefore, CgInsights, CgInstagram, CgInternal, CgKey, CgKeyboard, CgKeyhole, CgLaptop, CgLastpass, CgLayoutGridSmall, CgLayoutGrid, CgLayoutList, CgLayoutPin, CgLinear, CgLink, CgListTree, CgList, CgLivePhoto, CgLoadbarAlt, CgLoadbarDoc, CgLoadbarSound, CgLoadbar, CgLockUnlock, CgLock, CgLogIn, CgLogOff, CgLogOut, CgLoupe, CgMagnet, CgMailForward, CgMailOpen, CgMailReply, CgMail, CgMathDivide, CgMathEqual, CgMathMinus, CgMathPercent, CgMathPlus, CgMaximizeAlt, CgMaximize, CgMaze, CgMediaLive, CgMediaPodcast, CgMenuBoxed, CgMenuCake, CgMenuCheese, CgMenuGridO, CgMenuGridR, CgMenuHotdog, CgMenuLeftAlt, CgMenuLeft, CgMenuMotion, CgMenuOreos, CgMenuRightAlt, CgMenuRight, CgMenuRound, CgMenu, CgMergeHorizontal, CgMergeVertical, CgMic, CgMicrobit, CgMicrosoft, CgMiniPlayer, CgMinimizeAlt, CgMinimize, CgModem, CgMonday, CgMoon, CgMoreAlt, CgMoreO, CgMoreR, CgMoreVerticalAlt, CgMoreVerticalO, CgMoreVerticalR, CgMoreVertical, CgMore, CgMouse, CgMoveDown, CgMoveLeft, CgMoveRight, CgMoveTask, CgMoveUp, CgMusicNote, CgMusicSpeaker, CgMusic, CgNametag, CgNotes, CgNotifications, CgNpm, CgOculus, CgOpenCollective, CgOptions, CgOrganisation, CgOverflow, CgPacman, CgPassword, CgPathBack, CgPathCrop, CgPathDivide, CgPathExclude, CgPathFront, CgPathIntersect, CgPathOutline, CgPathTrim, CgPathUnite, CgPatreon, CgPaypal, CgPen, CgPentagonBottomLeft, CgPentagonBottomRight, CgPentagonDown, CgPentagonLeft, CgPentagonRight, CgPentagonTopLeft, CgPentagonTopRight, CgPentagonUp, CgPerformance, CgPexels, CgPhone, CgPhotoscan, CgPiano, CgPill, CgPinAlt, CgPinBottom, CgPinTop, CgPin, CgPlayBackwards, CgPlayButtonO, CgPlayButtonR, CgPlayButton, CgPlayForwards, CgPlayListAdd, CgPlayListCheck, CgPlayListRemove, CgPlayListSearch, CgPlayList, CgPlayPauseO, CgPlayPauseR, CgPlayPause, CgPlayStopO, CgPlayStopR, CgPlayStop, CgPlayTrackNextO, CgPlayTrackNextR, CgPlayTrackNext, CgPlayTrackPrevO, CgPlayTrackPrevR, CgPlayTrackPrev, CgPlug, CgPocket, CgPokemon, CgPolaroid, CgPoll, CgPresentation, CgPrinter, CgProductHunt, CgProfile, CgPullClear, CgPushChevronDownO, CgPushChevronDownR, CgPushChevronDown, CgPushChevronLeftO, CgPushChevronLeftR, CgPushChevronLeft, CgPushChevronRightO, CgPushChevronRightR, CgPushChevronRight, CgPushChevronUpO, CgPushChevronUpR, CgPushChevronUp, CgPushDown, CgPushLeft, CgPushRight, CgPushUp, CgQr, CgQuoteO, CgQuote, CgRadioCheck, CgRadioChecked, CgRatio, CgRead, CgReadme, CgRecord, CgRedo, CgRemote, CgRemoveR, CgRemove, CgRename, CgReorder, CgRepeat, CgRing, CgRowFirst, CgRowLast, CgRuler, CgSandClock, CgScan, CgScreenMirror, CgScreenShot, CgScreenWide, CgScreen, CgScrollH, CgScrollV, CgSearchFound, CgSearchLoading, CgSearch, CgSelectO, CgSelectR, CgSelect, CgServer, CgServerless, CgShapeCircle, CgShapeHalfCircle, CgShapeHexagon, CgShapeRhombus, CgShapeSquare, CgShapeTriangle, CgShapeZigzag, CgShare, CgShield, CgShoppingBag, CgShoppingCart, CgShortcut, CgShutterstock, CgSidebarOpen, CgSidebarRight, CgSidebar, CgSignal, CgSize, CgSketch, CgSlack, CgSleep, CgSmartHomeBoiler, CgSmartHomeCooker, CgSmartHomeHeat, CgSmartHomeLight, CgSmartHomeRefrigerator, CgSmartHomeWashMachine, CgSmartphoneChip, CgSmartphoneRam, CgSmartphoneShake, CgSmartphone, CgSmileMouthOpen, CgSmileNeutral, CgSmileNoMouth, CgSmileNone, CgSmileSad, CgSmileUpside, CgSmile, CgSoftwareDownload, CgSoftwareUpload, CgSortAz, CgSortZa, CgSpaceBetweenV, CgSpaceBetween, CgSpectrum, CgSpinnerAlt, CgSpinnerTwoAlt, CgSpinnerTwo, CgSpinner, CgSquare, CgStack, CgStark, CgStopwatch, CgStories, CgStudio, CgStyle, CgSun, CgSupport, CgSwapVertical, CgSwap, CgSweden, CgSwiss, CgSync, CgTab, CgTag, CgTally, CgTapDouble, CgTapSingle, CgTemplate, CgTennis, CgTerminal, CgTerrain, CgThermometer, CgThermostat, CgTikcode, CgTime, CgTimelapse, CgTimer, CgToday, CgToggleOff, CgToggleOn, CgToggleSquareOff, CgToggleSquare, CgToolbarBottom, CgToolbarLeft, CgToolbarRight, CgToolbarTop, CgToolbox, CgTouchpad, CgTrack, CgTranscript, CgTrashEmpty, CgTrash, CgTree, CgTrees, CgTrello, CgTrendingDown, CgTrending, CgTrophy, CgTv, CgTwilio, CgTwitter, CgUiKit, CgUmbrella, CgUnavailable, CgUnblock, CgUndo, CgUnfold, CgUnsplash, CgUsbC, CgUsb, CgUserAdd, CgUserList, CgUserRemove, CgUser, CgUserlane, CgVercel, CgViewCols, CgViewComfortable, CgViewDay, CgViewGrid, CgViewList, CgViewMonth, CgViewSplit, CgVinyl, CgVoicemailO, CgVoicemailR, CgVoicemail, CgVolume, CgWebcam, CgWebsite, CgWindows, CgWorkAlt, CgYinyang, CgYoutube, CgZoomIn, CgZoomOut;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "cg:CgAbstract": return [3 /*break*/, 1];
                        case "cg:CgAddR": return [3 /*break*/, 3];
                        case "cg:CgAdd": return [3 /*break*/, 5];
                        case "cg:CgAdidas": return [3 /*break*/, 7];
                        case "cg:CgAirplane": return [3 /*break*/, 9];
                        case "cg:CgAlarm": return [3 /*break*/, 11];
                        case "cg:CgAlbum": return [3 /*break*/, 13];
                        case "cg:CgAlignBottom": return [3 /*break*/, 15];
                        case "cg:CgAlignCenter": return [3 /*break*/, 17];
                        case "cg:CgAlignLeft": return [3 /*break*/, 19];
                        case "cg:CgAlignMiddle": return [3 /*break*/, 21];
                        case "cg:CgAlignRight": return [3 /*break*/, 23];
                        case "cg:CgAlignTop": return [3 /*break*/, 25];
                        case "cg:CgAnchor": return [3 /*break*/, 27];
                        case "cg:CgAppleWatch": return [3 /*break*/, 29];
                        case "cg:CgArrangeBack": return [3 /*break*/, 31];
                        case "cg:CgArrangeFront": return [3 /*break*/, 33];
                        case "cg:CgArrowAlignH": return [3 /*break*/, 35];
                        case "cg:CgArrowAlignV": return [3 /*break*/, 37];
                        case "cg:CgArrowBottomLeftO": return [3 /*break*/, 39];
                        case "cg:CgArrowBottomLeftR": return [3 /*break*/, 41];
                        case "cg:CgArrowBottomLeft": return [3 /*break*/, 43];
                        case "cg:CgArrowBottomRightO": return [3 /*break*/, 45];
                        case "cg:CgArrowBottomRightR": return [3 /*break*/, 47];
                        case "cg:CgArrowBottomRight": return [3 /*break*/, 49];
                        case "cg:CgArrowDownO": return [3 /*break*/, 51];
                        case "cg:CgArrowDownR": return [3 /*break*/, 53];
                        case "cg:CgArrowDown": return [3 /*break*/, 55];
                        case "cg:CgArrowLeftO": return [3 /*break*/, 57];
                        case "cg:CgArrowLeftR": return [3 /*break*/, 59];
                        case "cg:CgArrowLeft": return [3 /*break*/, 61];
                        case "cg:CgArrowLongDownC": return [3 /*break*/, 63];
                        case "cg:CgArrowLongDownE": return [3 /*break*/, 65];
                        case "cg:CgArrowLongDownL": return [3 /*break*/, 67];
                        case "cg:CgArrowLongDownR": return [3 /*break*/, 69];
                        case "cg:CgArrowLongDown": return [3 /*break*/, 71];
                        case "cg:CgArrowLongLeftC": return [3 /*break*/, 73];
                        case "cg:CgArrowLongLeftE": return [3 /*break*/, 75];
                        case "cg:CgArrowLongLeftL": return [3 /*break*/, 77];
                        case "cg:CgArrowLongLeftR": return [3 /*break*/, 79];
                        case "cg:CgArrowLongLeft": return [3 /*break*/, 81];
                        case "cg:CgArrowLongRightC": return [3 /*break*/, 83];
                        case "cg:CgArrowLongRightE": return [3 /*break*/, 85];
                        case "cg:CgArrowLongRightL": return [3 /*break*/, 87];
                        case "cg:CgArrowLongRightR": return [3 /*break*/, 89];
                        case "cg:CgArrowLongRight": return [3 /*break*/, 91];
                        case "cg:CgArrowLongUpC": return [3 /*break*/, 93];
                        case "cg:CgArrowLongUpE": return [3 /*break*/, 95];
                        case "cg:CgArrowLongUpL": return [3 /*break*/, 97];
                        case "cg:CgArrowLongUpR": return [3 /*break*/, 99];
                        case "cg:CgArrowLongUp": return [3 /*break*/, 101];
                        case "cg:CgArrowRightO": return [3 /*break*/, 103];
                        case "cg:CgArrowRightR": return [3 /*break*/, 105];
                        case "cg:CgArrowRight": return [3 /*break*/, 107];
                        case "cg:CgArrowTopLeftO": return [3 /*break*/, 109];
                        case "cg:CgArrowTopLeftR": return [3 /*break*/, 111];
                        case "cg:CgArrowTopLeft": return [3 /*break*/, 113];
                        case "cg:CgArrowTopRightO": return [3 /*break*/, 115];
                        case "cg:CgArrowTopRightR": return [3 /*break*/, 117];
                        case "cg:CgArrowTopRight": return [3 /*break*/, 119];
                        case "cg:CgArrowUpO": return [3 /*break*/, 121];
                        case "cg:CgArrowUpR": return [3 /*break*/, 123];
                        case "cg:CgArrowUp": return [3 /*break*/, 125];
                        case "cg:CgArrowsBreakeH": return [3 /*break*/, 127];
                        case "cg:CgArrowsBreakeV": return [3 /*break*/, 129];
                        case "cg:CgArrowsExchangeAltV": return [3 /*break*/, 131];
                        case "cg:CgArrowsExchangeAlt": return [3 /*break*/, 133];
                        case "cg:CgArrowsExchangeV": return [3 /*break*/, 135];
                        case "cg:CgArrowsExchange": return [3 /*break*/, 137];
                        case "cg:CgArrowsExpandDownLeft": return [3 /*break*/, 139];
                        case "cg:CgArrowsExpandDownRight": return [3 /*break*/, 141];
                        case "cg:CgArrowsExpandLeftAlt": return [3 /*break*/, 143];
                        case "cg:CgArrowsExpandLeft": return [3 /*break*/, 145];
                        case "cg:CgArrowsExpandRightAlt": return [3 /*break*/, 147];
                        case "cg:CgArrowsExpandRight": return [3 /*break*/, 149];
                        case "cg:CgArrowsExpandUpLeft": return [3 /*break*/, 151];
                        case "cg:CgArrowsExpandUpRight": return [3 /*break*/, 153];
                        case "cg:CgArrowsHAlt": return [3 /*break*/, 155];
                        case "cg:CgArrowsH": return [3 /*break*/, 157];
                        case "cg:CgArrowsMergeAltH": return [3 /*break*/, 159];
                        case "cg:CgArrowsMergeAltV": return [3 /*break*/, 161];
                        case "cg:CgArrowsScrollH": return [3 /*break*/, 163];
                        case "cg:CgArrowsScrollV": return [3 /*break*/, 165];
                        case "cg:CgArrowsShrinkH": return [3 /*break*/, 167];
                        case "cg:CgArrowsShrinkV": return [3 /*break*/, 169];
                        case "cg:CgArrowsVAlt": return [3 /*break*/, 171];
                        case "cg:CgArrowsV": return [3 /*break*/, 173];
                        case "cg:CgAssign": return [3 /*break*/, 175];
                        case "cg:CgAsterisk": return [3 /*break*/, 177];
                        case "cg:CgAtlasian": return [3 /*break*/, 179];
                        case "cg:CgAttachment": return [3 /*break*/, 181];
                        case "cg:CgAttribution": return [3 /*break*/, 183];
                        case "cg:CgAwards": return [3 /*break*/, 185];
                        case "cg:CgBackspace": return [3 /*break*/, 187];
                        case "cg:CgBandAid": return [3 /*break*/, 189];
                        case "cg:CgBatteryEmpty": return [3 /*break*/, 191];
                        case "cg:CgBatteryFull": return [3 /*break*/, 193];
                        case "cg:CgBattery": return [3 /*break*/, 195];
                        case "cg:CgBee": return [3 /*break*/, 197];
                        case "cg:CgBell": return [3 /*break*/, 199];
                        case "cg:CgBitbucket": return [3 /*break*/, 201];
                        case "cg:CgBlock": return [3 /*break*/, 203];
                        case "cg:CgBmw": return [3 /*break*/, 205];
                        case "cg:CgBoard": return [3 /*break*/, 207];
                        case "cg:CgBolt": return [3 /*break*/, 209];
                        case "cg:CgBookmark": return [3 /*break*/, 211];
                        case "cg:CgBorderAll": return [3 /*break*/, 213];
                        case "cg:CgBorderBottom": return [3 /*break*/, 215];
                        case "cg:CgBorderLeft": return [3 /*break*/, 217];
                        case "cg:CgBorderRight": return [3 /*break*/, 219];
                        case "cg:CgBorderStyleDashed": return [3 /*break*/, 221];
                        case "cg:CgBorderStyleDotted": return [3 /*break*/, 223];
                        case "cg:CgBorderStyleSolid": return [3 /*break*/, 225];
                        case "cg:CgBorderTop": return [3 /*break*/, 227];
                        case "cg:CgBot": return [3 /*break*/, 229];
                        case "cg:CgBowl": return [3 /*break*/, 231];
                        case "cg:CgBox": return [3 /*break*/, 233];
                        case "cg:CgBoy": return [3 /*break*/, 235];
                        case "cg:CgBrackets": return [3 /*break*/, 237];
                        case "cg:CgBriefcase": return [3 /*break*/, 239];
                        case "cg:CgBrowse": return [3 /*break*/, 241];
                        case "cg:CgBrowser": return [3 /*break*/, 243];
                        case "cg:CgBrush": return [3 /*break*/, 245];
                        case "cg:CgBulb": return [3 /*break*/, 247];
                        case "cg:CgCPlusPlus": return [3 /*break*/, 249];
                        case "cg:CgCalculator": return [3 /*break*/, 251];
                        case "cg:CgCalendarDates": return [3 /*break*/, 253];
                        case "cg:CgCalendarDue": return [3 /*break*/, 255];
                        case "cg:CgCalendarNext": return [3 /*break*/, 257];
                        case "cg:CgCalendarToday": return [3 /*break*/, 259];
                        case "cg:CgCalendarTwo": return [3 /*break*/, 261];
                        case "cg:CgCalendar": return [3 /*break*/, 263];
                        case "cg:CgCalibrate": return [3 /*break*/, 265];
                        case "cg:CgCamera": return [3 /*break*/, 267];
                        case "cg:CgCap": return [3 /*break*/, 269];
                        case "cg:CgCaptions": return [3 /*break*/, 271];
                        case "cg:CgCardClubs": return [3 /*break*/, 273];
                        case "cg:CgCardDiamonds": return [3 /*break*/, 275];
                        case "cg:CgCardHearts": return [3 /*break*/, 277];
                        case "cg:CgCardSpades": return [3 /*break*/, 279];
                        case "cg:CgCarousel": return [3 /*break*/, 281];
                        case "cg:CgCast": return [3 /*break*/, 283];
                        case "cg:CgChanel": return [3 /*break*/, 285];
                        case "cg:CgChart": return [3 /*break*/, 287];
                        case "cg:CgCheckO": return [3 /*break*/, 289];
                        case "cg:CgCheckR": return [3 /*break*/, 291];
                        case "cg:CgCheck": return [3 /*break*/, 293];
                        case "cg:CgChevronDoubleDownO": return [3 /*break*/, 295];
                        case "cg:CgChevronDoubleDownR": return [3 /*break*/, 297];
                        case "cg:CgChevronDoubleDown": return [3 /*break*/, 299];
                        case "cg:CgChevronDoubleLeftO": return [3 /*break*/, 301];
                        case "cg:CgChevronDoubleLeftR": return [3 /*break*/, 303];
                        case "cg:CgChevronDoubleLeft": return [3 /*break*/, 305];
                        case "cg:CgChevronDoubleRightO": return [3 /*break*/, 307];
                        case "cg:CgChevronDoubleRightR": return [3 /*break*/, 309];
                        case "cg:CgChevronDoubleRight": return [3 /*break*/, 311];
                        case "cg:CgChevronDoubleUpO": return [3 /*break*/, 313];
                        case "cg:CgChevronDoubleUpR": return [3 /*break*/, 315];
                        case "cg:CgChevronDoubleUp": return [3 /*break*/, 317];
                        case "cg:CgChevronDownO": return [3 /*break*/, 319];
                        case "cg:CgChevronDownR": return [3 /*break*/, 321];
                        case "cg:CgChevronDown": return [3 /*break*/, 323];
                        case "cg:CgChevronLeftO": return [3 /*break*/, 325];
                        case "cg:CgChevronLeftR": return [3 /*break*/, 327];
                        case "cg:CgChevronLeft": return [3 /*break*/, 329];
                        case "cg:CgChevronRightO": return [3 /*break*/, 331];
                        case "cg:CgChevronRightR": return [3 /*break*/, 333];
                        case "cg:CgChevronRight": return [3 /*break*/, 335];
                        case "cg:CgChevronUpO": return [3 /*break*/, 337];
                        case "cg:CgChevronUpR": return [3 /*break*/, 339];
                        case "cg:CgChevronUp": return [3 /*break*/, 341];
                        case "cg:CgCircleci": return [3 /*break*/, 343];
                        case "cg:CgClapperBoard": return [3 /*break*/, 345];
                        case "cg:CgClipboard": return [3 /*break*/, 347];
                        case "cg:CgCloseO": return [3 /*break*/, 349];
                        case "cg:CgCloseR": return [3 /*break*/, 351];
                        case "cg:CgClose": return [3 /*break*/, 353];
                        case "cg:CgCloud": return [3 /*break*/, 355];
                        case "cg:CgCodeClimate": return [3 /*break*/, 357];
                        case "cg:CgCodeSlash": return [3 /*break*/, 359];
                        case "cg:CgCode": return [3 /*break*/, 361];
                        case "cg:CgCoffee": return [3 /*break*/, 363];
                        case "cg:CgCollage": return [3 /*break*/, 365];
                        case "cg:CgColorBucket": return [3 /*break*/, 367];
                        case "cg:CgColorPicker": return [3 /*break*/, 369];
                        case "cg:CgComedyCentral": return [3 /*break*/, 371];
                        case "cg:CgComment": return [3 /*break*/, 373];
                        case "cg:CgCommunity": return [3 /*break*/, 375];
                        case "cg:CgComponents": return [3 /*break*/, 377];
                        case "cg:CgCompressLeft": return [3 /*break*/, 379];
                        case "cg:CgCompressRight": return [3 /*break*/, 381];
                        case "cg:CgCompressV": return [3 /*break*/, 383];
                        case "cg:CgCompress": return [3 /*break*/, 385];
                        case "cg:CgController": return [3 /*break*/, 387];
                        case "cg:CgCopy": return [3 /*break*/, 389];
                        case "cg:CgCopyright": return [3 /*break*/, 391];
                        case "cg:CgCornerDoubleDownLeft": return [3 /*break*/, 393];
                        case "cg:CgCornerDoubleDownRight": return [3 /*break*/, 395];
                        case "cg:CgCornerDoubleLeftDown": return [3 /*break*/, 397];
                        case "cg:CgCornerDoubleLeftUp": return [3 /*break*/, 399];
                        case "cg:CgCornerDoubleRightDown": return [3 /*break*/, 401];
                        case "cg:CgCornerDoubleRightUp": return [3 /*break*/, 403];
                        case "cg:CgCornerDoubleUpLeft": return [3 /*break*/, 405];
                        case "cg:CgCornerDoubleUpRight": return [3 /*break*/, 407];
                        case "cg:CgCornerDownLeft": return [3 /*break*/, 409];
                        case "cg:CgCornerDownRight": return [3 /*break*/, 411];
                        case "cg:CgCornerLeftDown": return [3 /*break*/, 413];
                        case "cg:CgCornerLeftUp": return [3 /*break*/, 415];
                        case "cg:CgCornerRightDown": return [3 /*break*/, 417];
                        case "cg:CgCornerRightUp": return [3 /*break*/, 419];
                        case "cg:CgCornerUpLeft": return [3 /*break*/, 421];
                        case "cg:CgCornerUpRight": return [3 /*break*/, 423];
                        case "cg:CgCreditCard": return [3 /*break*/, 425];
                        case "cg:CgCrop": return [3 /*break*/, 427];
                        case "cg:CgCross": return [3 /*break*/, 429];
                        case "cg:CgCrowdfire": return [3 /*break*/, 431];
                        case "cg:CgCrown": return [3 /*break*/, 433];
                        case "cg:CgDanger": return [3 /*break*/, 435];
                        case "cg:CgDarkMode": return [3 /*break*/, 437];
                        case "cg:CgData": return [3 /*break*/, 439];
                        case "cg:CgDatabase": return [3 /*break*/, 441];
                        case "cg:CgDebug": return [3 /*break*/, 443];
                        case "cg:CgDesignmodo": return [3 /*break*/, 445];
                        case "cg:CgDesktop": return [3 /*break*/, 447];
                        case "cg:CgDetailsLess": return [3 /*break*/, 449];
                        case "cg:CgDetailsMore": return [3 /*break*/, 451];
                        case "cg:CgDialpad": return [3 /*break*/, 453];
                        case "cg:CgDice1": return [3 /*break*/, 455];
                        case "cg:CgDice2": return [3 /*break*/, 457];
                        case "cg:CgDice3": return [3 /*break*/, 459];
                        case "cg:CgDice4": return [3 /*break*/, 461];
                        case "cg:CgDice5": return [3 /*break*/, 463];
                        case "cg:CgDice6": return [3 /*break*/, 465];
                        case "cg:CgDigitalocean": return [3 /*break*/, 467];
                        case "cg:CgDisc": return [3 /*break*/, 469];
                        case "cg:CgDisplayFlex": return [3 /*break*/, 471];
                        case "cg:CgDisplayFullwidth": return [3 /*break*/, 473];
                        case "cg:CgDisplayGrid": return [3 /*break*/, 475];
                        case "cg:CgDisplaySpacing": return [3 /*break*/, 477];
                        case "cg:CgDistributeHorizontal": return [3 /*break*/, 479];
                        case "cg:CgDistributeVertical": return [3 /*break*/, 481];
                        case "cg:CgDockBottom": return [3 /*break*/, 483];
                        case "cg:CgDockLeft": return [3 /*break*/, 485];
                        case "cg:CgDockRight": return [3 /*break*/, 487];
                        case "cg:CgDockWindow": return [3 /*break*/, 489];
                        case "cg:CgDolby": return [3 /*break*/, 491];
                        case "cg:CgDollar": return [3 /*break*/, 493];
                        case "cg:CgDribbble": return [3 /*break*/, 495];
                        case "cg:CgDrive": return [3 /*break*/, 497];
                        case "cg:CgDropInvert": return [3 /*break*/, 499];
                        case "cg:CgDropOpacity": return [3 /*break*/, 501];
                        case "cg:CgDrop": return [3 /*break*/, 503];
                        case "cg:CgDuplicate": return [3 /*break*/, 505];
                        case "cg:CgEditBlackPoint": return [3 /*break*/, 507];
                        case "cg:CgEditContrast": return [3 /*break*/, 509];
                        case "cg:CgEditExposure": return [3 /*break*/, 511];
                        case "cg:CgEditFade": return [3 /*break*/, 513];
                        case "cg:CgEditFlipH": return [3 /*break*/, 515];
                        case "cg:CgEditFlipV": return [3 /*break*/, 517];
                        case "cg:CgEditHighlight": return [3 /*break*/, 519];
                        case "cg:CgEditMarkup": return [3 /*break*/, 521];
                        case "cg:CgEditMask": return [3 /*break*/, 523];
                        case "cg:CgEditNoise": return [3 /*break*/, 525];
                        case "cg:CgEditShadows": return [3 /*break*/, 527];
                        case "cg:CgEditStraight": return [3 /*break*/, 529];
                        case "cg:CgEditUnmask": return [3 /*break*/, 531];
                        case "cg:CgEject": return [3 /*break*/, 533];
                        case "cg:CgEnter": return [3 /*break*/, 535];
                        case "cg:CgErase": return [3 /*break*/, 537];
                        case "cg:CgEreader": return [3 /*break*/, 539];
                        case "cg:CgEricsson": return [3 /*break*/, 541];
                        case "cg:CgEthernet": return [3 /*break*/, 543];
                        case "cg:CgEuro": return [3 /*break*/, 545];
                        case "cg:CgEventbrite": return [3 /*break*/, 547];
                        case "cg:CgExpand": return [3 /*break*/, 549];
                        case "cg:CgExport": return [3 /*break*/, 551];
                        case "cg:CgExtensionAdd": return [3 /*break*/, 553];
                        case "cg:CgExtensionAlt": return [3 /*break*/, 555];
                        case "cg:CgExtensionRemove": return [3 /*break*/, 557];
                        case "cg:CgExtension": return [3 /*break*/, 559];
                        case "cg:CgExternal": return [3 /*break*/, 561];
                        case "cg:CgEyeAlt": return [3 /*break*/, 563];
                        case "cg:CgEye": return [3 /*break*/, 565];
                        case "cg:CgFacebook": return [3 /*break*/, 567];
                        case "cg:CgFeed": return [3 /*break*/, 569];
                        case "cg:CgFigma": return [3 /*break*/, 571];
                        case "cg:CgFileAdd": return [3 /*break*/, 573];
                        case "cg:CgFileDocument": return [3 /*break*/, 575];
                        case "cg:CgFileRemove": return [3 /*break*/, 577];
                        case "cg:CgFile": return [3 /*break*/, 579];
                        case "cg:CgFilm": return [3 /*break*/, 581];
                        case "cg:CgFilters": return [3 /*break*/, 583];
                        case "cg:CgFlagAlt": return [3 /*break*/, 585];
                        case "cg:CgFlag": return [3 /*break*/, 587];
                        case "cg:CgFolderAdd": return [3 /*break*/, 589];
                        case "cg:CgFolderRemove": return [3 /*break*/, 591];
                        case "cg:CgFolder": return [3 /*break*/, 593];
                        case "cg:CgFontHeight": return [3 /*break*/, 595];
                        case "cg:CgFontSpacing": return [3 /*break*/, 597];
                        case "cg:CgFormatBold": return [3 /*break*/, 599];
                        case "cg:CgFormatCenter": return [3 /*break*/, 601];
                        case "cg:CgFormatColor": return [3 /*break*/, 603];
                        case "cg:CgFormatHeading": return [3 /*break*/, 605];
                        case "cg:CgFormatIndentDecrease": return [3 /*break*/, 607];
                        case "cg:CgFormatIndentIncrease": return [3 /*break*/, 609];
                        case "cg:CgFormatItalic": return [3 /*break*/, 611];
                        case "cg:CgFormatJustify": return [3 /*break*/, 613];
                        case "cg:CgFormatLeft": return [3 /*break*/, 615];
                        case "cg:CgFormatLineHeight": return [3 /*break*/, 617];
                        case "cg:CgFormatRight": return [3 /*break*/, 619];
                        case "cg:CgFormatSeparator": return [3 /*break*/, 621];
                        case "cg:CgFormatSlash": return [3 /*break*/, 623];
                        case "cg:CgFormatStrike": return [3 /*break*/, 625];
                        case "cg:CgFormatText": return [3 /*break*/, 627];
                        case "cg:CgFormatUnderline": return [3 /*break*/, 629];
                        case "cg:CgFormatUppercase": return [3 /*break*/, 631];
                        case "cg:CgFramer": return [3 /*break*/, 633];
                        case "cg:CgGames": return [3 /*break*/, 635];
                        case "cg:CgGenderFemale": return [3 /*break*/, 637];
                        case "cg:CgGenderMale": return [3 /*break*/, 639];
                        case "cg:CgGhostCharacter": return [3 /*break*/, 641];
                        case "cg:CgGhost": return [3 /*break*/, 643];
                        case "cg:CgGift": return [3 /*break*/, 645];
                        case "cg:CgGirl": return [3 /*break*/, 647];
                        case "cg:CgGitBranch": return [3 /*break*/, 649];
                        case "cg:CgGitCommit": return [3 /*break*/, 651];
                        case "cg:CgGitFork": return [3 /*break*/, 653];
                        case "cg:CgGitPull": return [3 /*break*/, 655];
                        case "cg:CgGitter": return [3 /*break*/, 657];
                        case "cg:CgGlassAlt": return [3 /*break*/, 659];
                        case "cg:CgGlass": return [3 /*break*/, 661];
                        case "cg:CgGlobeAlt": return [3 /*break*/, 663];
                        case "cg:CgGlobe": return [3 /*break*/, 665];
                        case "cg:CgGoogleTasks": return [3 /*break*/, 667];
                        case "cg:CgGoogle": return [3 /*break*/, 669];
                        case "cg:CgGym": return [3 /*break*/, 671];
                        case "cg:CgHashtag": return [3 /*break*/, 673];
                        case "cg:CgHeadset": return [3 /*break*/, 675];
                        case "cg:CgHeart": return [3 /*break*/, 677];
                        case "cg:CgHello": return [3 /*break*/, 679];
                        case "cg:CgHomeAlt": return [3 /*break*/, 681];
                        case "cg:CgHomeScreen": return [3 /*break*/, 683];
                        case "cg:CgHome": return [3 /*break*/, 685];
                        case "cg:CgIcecream": return [3 /*break*/, 687];
                        case "cg:CgIfDesign": return [3 /*break*/, 689];
                        case "cg:CgImage": return [3 /*break*/, 691];
                        case "cg:CgImport": return [3 /*break*/, 693];
                        case "cg:CgInbox": return [3 /*break*/, 695];
                        case "cg:CgIndieHackers": return [3 /*break*/, 697];
                        case "cg:CgInfinity": return [3 /*break*/, 699];
                        case "cg:CgInfo": return [3 /*break*/, 701];
                        case "cg:CgInpicture": return [3 /*break*/, 703];
                        case "cg:CgInsertAfterO": return [3 /*break*/, 705];
                        case "cg:CgInsertAfterR": return [3 /*break*/, 707];
                        case "cg:CgInsertAfter": return [3 /*break*/, 709];
                        case "cg:CgInsertBeforeO": return [3 /*break*/, 711];
                        case "cg:CgInsertBeforeR": return [3 /*break*/, 713];
                        case "cg:CgInsertBefore": return [3 /*break*/, 715];
                        case "cg:CgInsights": return [3 /*break*/, 717];
                        case "cg:CgInstagram": return [3 /*break*/, 719];
                        case "cg:CgInternal": return [3 /*break*/, 721];
                        case "cg:CgKey": return [3 /*break*/, 723];
                        case "cg:CgKeyboard": return [3 /*break*/, 725];
                        case "cg:CgKeyhole": return [3 /*break*/, 727];
                        case "cg:CgLaptop": return [3 /*break*/, 729];
                        case "cg:CgLastpass": return [3 /*break*/, 731];
                        case "cg:CgLayoutGridSmall": return [3 /*break*/, 733];
                        case "cg:CgLayoutGrid": return [3 /*break*/, 735];
                        case "cg:CgLayoutList": return [3 /*break*/, 737];
                        case "cg:CgLayoutPin": return [3 /*break*/, 739];
                        case "cg:CgLinear": return [3 /*break*/, 741];
                        case "cg:CgLink": return [3 /*break*/, 743];
                        case "cg:CgListTree": return [3 /*break*/, 745];
                        case "cg:CgList": return [3 /*break*/, 747];
                        case "cg:CgLivePhoto": return [3 /*break*/, 749];
                        case "cg:CgLoadbarAlt": return [3 /*break*/, 751];
                        case "cg:CgLoadbarDoc": return [3 /*break*/, 753];
                        case "cg:CgLoadbarSound": return [3 /*break*/, 755];
                        case "cg:CgLoadbar": return [3 /*break*/, 757];
                        case "cg:CgLockUnlock": return [3 /*break*/, 759];
                        case "cg:CgLock": return [3 /*break*/, 761];
                        case "cg:CgLogIn": return [3 /*break*/, 763];
                        case "cg:CgLogOff": return [3 /*break*/, 765];
                        case "cg:CgLogOut": return [3 /*break*/, 767];
                        case "cg:CgLoupe": return [3 /*break*/, 769];
                        case "cg:CgMagnet": return [3 /*break*/, 771];
                        case "cg:CgMailForward": return [3 /*break*/, 773];
                        case "cg:CgMailOpen": return [3 /*break*/, 775];
                        case "cg:CgMailReply": return [3 /*break*/, 777];
                        case "cg:CgMail": return [3 /*break*/, 779];
                        case "cg:CgMathDivide": return [3 /*break*/, 781];
                        case "cg:CgMathEqual": return [3 /*break*/, 783];
                        case "cg:CgMathMinus": return [3 /*break*/, 785];
                        case "cg:CgMathPercent": return [3 /*break*/, 787];
                        case "cg:CgMathPlus": return [3 /*break*/, 789];
                        case "cg:CgMaximizeAlt": return [3 /*break*/, 791];
                        case "cg:CgMaximize": return [3 /*break*/, 793];
                        case "cg:CgMaze": return [3 /*break*/, 795];
                        case "cg:CgMediaLive": return [3 /*break*/, 797];
                        case "cg:CgMediaPodcast": return [3 /*break*/, 799];
                        case "cg:CgMenuBoxed": return [3 /*break*/, 801];
                        case "cg:CgMenuCake": return [3 /*break*/, 803];
                        case "cg:CgMenuCheese": return [3 /*break*/, 805];
                        case "cg:CgMenuGridO": return [3 /*break*/, 807];
                        case "cg:CgMenuGridR": return [3 /*break*/, 809];
                        case "cg:CgMenuHotdog": return [3 /*break*/, 811];
                        case "cg:CgMenuLeftAlt": return [3 /*break*/, 813];
                        case "cg:CgMenuLeft": return [3 /*break*/, 815];
                        case "cg:CgMenuMotion": return [3 /*break*/, 817];
                        case "cg:CgMenuOreos": return [3 /*break*/, 819];
                        case "cg:CgMenuRightAlt": return [3 /*break*/, 821];
                        case "cg:CgMenuRight": return [3 /*break*/, 823];
                        case "cg:CgMenuRound": return [3 /*break*/, 825];
                        case "cg:CgMenu": return [3 /*break*/, 827];
                        case "cg:CgMergeHorizontal": return [3 /*break*/, 829];
                        case "cg:CgMergeVertical": return [3 /*break*/, 831];
                        case "cg:CgMic": return [3 /*break*/, 833];
                        case "cg:CgMicrobit": return [3 /*break*/, 835];
                        case "cg:CgMicrosoft": return [3 /*break*/, 837];
                        case "cg:CgMiniPlayer": return [3 /*break*/, 839];
                        case "cg:CgMinimizeAlt": return [3 /*break*/, 841];
                        case "cg:CgMinimize": return [3 /*break*/, 843];
                        case "cg:CgModem": return [3 /*break*/, 845];
                        case "cg:CgMonday": return [3 /*break*/, 847];
                        case "cg:CgMoon": return [3 /*break*/, 849];
                        case "cg:CgMoreAlt": return [3 /*break*/, 851];
                        case "cg:CgMoreO": return [3 /*break*/, 853];
                        case "cg:CgMoreR": return [3 /*break*/, 855];
                        case "cg:CgMoreVerticalAlt": return [3 /*break*/, 857];
                        case "cg:CgMoreVerticalO": return [3 /*break*/, 859];
                        case "cg:CgMoreVerticalR": return [3 /*break*/, 861];
                        case "cg:CgMoreVertical": return [3 /*break*/, 863];
                        case "cg:CgMore": return [3 /*break*/, 865];
                        case "cg:CgMouse": return [3 /*break*/, 867];
                        case "cg:CgMoveDown": return [3 /*break*/, 869];
                        case "cg:CgMoveLeft": return [3 /*break*/, 871];
                        case "cg:CgMoveRight": return [3 /*break*/, 873];
                        case "cg:CgMoveTask": return [3 /*break*/, 875];
                        case "cg:CgMoveUp": return [3 /*break*/, 877];
                        case "cg:CgMusicNote": return [3 /*break*/, 879];
                        case "cg:CgMusicSpeaker": return [3 /*break*/, 881];
                        case "cg:CgMusic": return [3 /*break*/, 883];
                        case "cg:CgNametag": return [3 /*break*/, 885];
                        case "cg:CgNotes": return [3 /*break*/, 887];
                        case "cg:CgNotifications": return [3 /*break*/, 889];
                        case "cg:CgNpm": return [3 /*break*/, 891];
                        case "cg:CgOculus": return [3 /*break*/, 893];
                        case "cg:CgOpenCollective": return [3 /*break*/, 895];
                        case "cg:CgOptions": return [3 /*break*/, 897];
                        case "cg:CgOrganisation": return [3 /*break*/, 899];
                        case "cg:CgOverflow": return [3 /*break*/, 901];
                        case "cg:CgPacman": return [3 /*break*/, 903];
                        case "cg:CgPassword": return [3 /*break*/, 905];
                        case "cg:CgPathBack": return [3 /*break*/, 907];
                        case "cg:CgPathCrop": return [3 /*break*/, 909];
                        case "cg:CgPathDivide": return [3 /*break*/, 911];
                        case "cg:CgPathExclude": return [3 /*break*/, 913];
                        case "cg:CgPathFront": return [3 /*break*/, 915];
                        case "cg:CgPathIntersect": return [3 /*break*/, 917];
                        case "cg:CgPathOutline": return [3 /*break*/, 919];
                        case "cg:CgPathTrim": return [3 /*break*/, 921];
                        case "cg:CgPathUnite": return [3 /*break*/, 923];
                        case "cg:CgPatreon": return [3 /*break*/, 925];
                        case "cg:CgPaypal": return [3 /*break*/, 927];
                        case "cg:CgPen": return [3 /*break*/, 929];
                        case "cg:CgPentagonBottomLeft": return [3 /*break*/, 931];
                        case "cg:CgPentagonBottomRight": return [3 /*break*/, 933];
                        case "cg:CgPentagonDown": return [3 /*break*/, 935];
                        case "cg:CgPentagonLeft": return [3 /*break*/, 937];
                        case "cg:CgPentagonRight": return [3 /*break*/, 939];
                        case "cg:CgPentagonTopLeft": return [3 /*break*/, 941];
                        case "cg:CgPentagonTopRight": return [3 /*break*/, 943];
                        case "cg:CgPentagonUp": return [3 /*break*/, 945];
                        case "cg:CgPerformance": return [3 /*break*/, 947];
                        case "cg:CgPexels": return [3 /*break*/, 949];
                        case "cg:CgPhone": return [3 /*break*/, 951];
                        case "cg:CgPhotoscan": return [3 /*break*/, 953];
                        case "cg:CgPiano": return [3 /*break*/, 955];
                        case "cg:CgPill": return [3 /*break*/, 957];
                        case "cg:CgPinAlt": return [3 /*break*/, 959];
                        case "cg:CgPinBottom": return [3 /*break*/, 961];
                        case "cg:CgPinTop": return [3 /*break*/, 963];
                        case "cg:CgPin": return [3 /*break*/, 965];
                        case "cg:CgPlayBackwards": return [3 /*break*/, 967];
                        case "cg:CgPlayButtonO": return [3 /*break*/, 969];
                        case "cg:CgPlayButtonR": return [3 /*break*/, 971];
                        case "cg:CgPlayButton": return [3 /*break*/, 973];
                        case "cg:CgPlayForwards": return [3 /*break*/, 975];
                        case "cg:CgPlayListAdd": return [3 /*break*/, 977];
                        case "cg:CgPlayListCheck": return [3 /*break*/, 979];
                        case "cg:CgPlayListRemove": return [3 /*break*/, 981];
                        case "cg:CgPlayListSearch": return [3 /*break*/, 983];
                        case "cg:CgPlayList": return [3 /*break*/, 985];
                        case "cg:CgPlayPauseO": return [3 /*break*/, 987];
                        case "cg:CgPlayPauseR": return [3 /*break*/, 989];
                        case "cg:CgPlayPause": return [3 /*break*/, 991];
                        case "cg:CgPlayStopO": return [3 /*break*/, 993];
                        case "cg:CgPlayStopR": return [3 /*break*/, 995];
                        case "cg:CgPlayStop": return [3 /*break*/, 997];
                        case "cg:CgPlayTrackNextO": return [3 /*break*/, 999];
                        case "cg:CgPlayTrackNextR": return [3 /*break*/, 1001];
                        case "cg:CgPlayTrackNext": return [3 /*break*/, 1003];
                        case "cg:CgPlayTrackPrevO": return [3 /*break*/, 1005];
                        case "cg:CgPlayTrackPrevR": return [3 /*break*/, 1007];
                        case "cg:CgPlayTrackPrev": return [3 /*break*/, 1009];
                        case "cg:CgPlug": return [3 /*break*/, 1011];
                        case "cg:CgPocket": return [3 /*break*/, 1013];
                        case "cg:CgPokemon": return [3 /*break*/, 1015];
                        case "cg:CgPolaroid": return [3 /*break*/, 1017];
                        case "cg:CgPoll": return [3 /*break*/, 1019];
                        case "cg:CgPresentation": return [3 /*break*/, 1021];
                        case "cg:CgPrinter": return [3 /*break*/, 1023];
                        case "cg:CgProductHunt": return [3 /*break*/, 1025];
                        case "cg:CgProfile": return [3 /*break*/, 1027];
                        case "cg:CgPullClear": return [3 /*break*/, 1029];
                        case "cg:CgPushChevronDownO": return [3 /*break*/, 1031];
                        case "cg:CgPushChevronDownR": return [3 /*break*/, 1033];
                        case "cg:CgPushChevronDown": return [3 /*break*/, 1035];
                        case "cg:CgPushChevronLeftO": return [3 /*break*/, 1037];
                        case "cg:CgPushChevronLeftR": return [3 /*break*/, 1039];
                        case "cg:CgPushChevronLeft": return [3 /*break*/, 1041];
                        case "cg:CgPushChevronRightO": return [3 /*break*/, 1043];
                        case "cg:CgPushChevronRightR": return [3 /*break*/, 1045];
                        case "cg:CgPushChevronRight": return [3 /*break*/, 1047];
                        case "cg:CgPushChevronUpO": return [3 /*break*/, 1049];
                        case "cg:CgPushChevronUpR": return [3 /*break*/, 1051];
                        case "cg:CgPushChevronUp": return [3 /*break*/, 1053];
                        case "cg:CgPushDown": return [3 /*break*/, 1055];
                        case "cg:CgPushLeft": return [3 /*break*/, 1057];
                        case "cg:CgPushRight": return [3 /*break*/, 1059];
                        case "cg:CgPushUp": return [3 /*break*/, 1061];
                        case "cg:CgQr": return [3 /*break*/, 1063];
                        case "cg:CgQuoteO": return [3 /*break*/, 1065];
                        case "cg:CgQuote": return [3 /*break*/, 1067];
                        case "cg:CgRadioCheck": return [3 /*break*/, 1069];
                        case "cg:CgRadioChecked": return [3 /*break*/, 1071];
                        case "cg:CgRatio": return [3 /*break*/, 1073];
                        case "cg:CgRead": return [3 /*break*/, 1075];
                        case "cg:CgReadme": return [3 /*break*/, 1077];
                        case "cg:CgRecord": return [3 /*break*/, 1079];
                        case "cg:CgRedo": return [3 /*break*/, 1081];
                        case "cg:CgRemote": return [3 /*break*/, 1083];
                        case "cg:CgRemoveR": return [3 /*break*/, 1085];
                        case "cg:CgRemove": return [3 /*break*/, 1087];
                        case "cg:CgRename": return [3 /*break*/, 1089];
                        case "cg:CgReorder": return [3 /*break*/, 1091];
                        case "cg:CgRepeat": return [3 /*break*/, 1093];
                        case "cg:CgRing": return [3 /*break*/, 1095];
                        case "cg:CgRowFirst": return [3 /*break*/, 1097];
                        case "cg:CgRowLast": return [3 /*break*/, 1099];
                        case "cg:CgRuler": return [3 /*break*/, 1101];
                        case "cg:CgSandClock": return [3 /*break*/, 1103];
                        case "cg:CgScan": return [3 /*break*/, 1105];
                        case "cg:CgScreenMirror": return [3 /*break*/, 1107];
                        case "cg:CgScreenShot": return [3 /*break*/, 1109];
                        case "cg:CgScreenWide": return [3 /*break*/, 1111];
                        case "cg:CgScreen": return [3 /*break*/, 1113];
                        case "cg:CgScrollH": return [3 /*break*/, 1115];
                        case "cg:CgScrollV": return [3 /*break*/, 1117];
                        case "cg:CgSearchFound": return [3 /*break*/, 1119];
                        case "cg:CgSearchLoading": return [3 /*break*/, 1121];
                        case "cg:CgSearch": return [3 /*break*/, 1123];
                        case "cg:CgSelectO": return [3 /*break*/, 1125];
                        case "cg:CgSelectR": return [3 /*break*/, 1127];
                        case "cg:CgSelect": return [3 /*break*/, 1129];
                        case "cg:CgServer": return [3 /*break*/, 1131];
                        case "cg:CgServerless": return [3 /*break*/, 1133];
                        case "cg:CgShapeCircle": return [3 /*break*/, 1135];
                        case "cg:CgShapeHalfCircle": return [3 /*break*/, 1137];
                        case "cg:CgShapeHexagon": return [3 /*break*/, 1139];
                        case "cg:CgShapeRhombus": return [3 /*break*/, 1141];
                        case "cg:CgShapeSquare": return [3 /*break*/, 1143];
                        case "cg:CgShapeTriangle": return [3 /*break*/, 1145];
                        case "cg:CgShapeZigzag": return [3 /*break*/, 1147];
                        case "cg:CgShare": return [3 /*break*/, 1149];
                        case "cg:CgShield": return [3 /*break*/, 1151];
                        case "cg:CgShoppingBag": return [3 /*break*/, 1153];
                        case "cg:CgShoppingCart": return [3 /*break*/, 1155];
                        case "cg:CgShortcut": return [3 /*break*/, 1157];
                        case "cg:CgShutterstock": return [3 /*break*/, 1159];
                        case "cg:CgSidebarOpen": return [3 /*break*/, 1161];
                        case "cg:CgSidebarRight": return [3 /*break*/, 1163];
                        case "cg:CgSidebar": return [3 /*break*/, 1165];
                        case "cg:CgSignal": return [3 /*break*/, 1167];
                        case "cg:CgSize": return [3 /*break*/, 1169];
                        case "cg:CgSketch": return [3 /*break*/, 1171];
                        case "cg:CgSlack": return [3 /*break*/, 1173];
                        case "cg:CgSleep": return [3 /*break*/, 1175];
                        case "cg:CgSmartHomeBoiler": return [3 /*break*/, 1177];
                        case "cg:CgSmartHomeCooker": return [3 /*break*/, 1179];
                        case "cg:CgSmartHomeHeat": return [3 /*break*/, 1181];
                        case "cg:CgSmartHomeLight": return [3 /*break*/, 1183];
                        case "cg:CgSmartHomeRefrigerator": return [3 /*break*/, 1185];
                        case "cg:CgSmartHomeWashMachine": return [3 /*break*/, 1187];
                        case "cg:CgSmartphoneChip": return [3 /*break*/, 1189];
                        case "cg:CgSmartphoneRam": return [3 /*break*/, 1191];
                        case "cg:CgSmartphoneShake": return [3 /*break*/, 1193];
                        case "cg:CgSmartphone": return [3 /*break*/, 1195];
                        case "cg:CgSmileMouthOpen": return [3 /*break*/, 1197];
                        case "cg:CgSmileNeutral": return [3 /*break*/, 1199];
                        case "cg:CgSmileNoMouth": return [3 /*break*/, 1201];
                        case "cg:CgSmileNone": return [3 /*break*/, 1203];
                        case "cg:CgSmileSad": return [3 /*break*/, 1205];
                        case "cg:CgSmileUpside": return [3 /*break*/, 1207];
                        case "cg:CgSmile": return [3 /*break*/, 1209];
                        case "cg:CgSoftwareDownload": return [3 /*break*/, 1211];
                        case "cg:CgSoftwareUpload": return [3 /*break*/, 1213];
                        case "cg:CgSortAz": return [3 /*break*/, 1215];
                        case "cg:CgSortZa": return [3 /*break*/, 1217];
                        case "cg:CgSpaceBetweenV": return [3 /*break*/, 1219];
                        case "cg:CgSpaceBetween": return [3 /*break*/, 1221];
                        case "cg:CgSpectrum": return [3 /*break*/, 1223];
                        case "cg:CgSpinnerAlt": return [3 /*break*/, 1225];
                        case "cg:CgSpinnerTwoAlt": return [3 /*break*/, 1227];
                        case "cg:CgSpinnerTwo": return [3 /*break*/, 1229];
                        case "cg:CgSpinner": return [3 /*break*/, 1231];
                        case "cg:CgSquare": return [3 /*break*/, 1233];
                        case "cg:CgStack": return [3 /*break*/, 1235];
                        case "cg:CgStark": return [3 /*break*/, 1237];
                        case "cg:CgStopwatch": return [3 /*break*/, 1239];
                        case "cg:CgStories": return [3 /*break*/, 1241];
                        case "cg:CgStudio": return [3 /*break*/, 1243];
                        case "cg:CgStyle": return [3 /*break*/, 1245];
                        case "cg:CgSun": return [3 /*break*/, 1247];
                        case "cg:CgSupport": return [3 /*break*/, 1249];
                        case "cg:CgSwapVertical": return [3 /*break*/, 1251];
                        case "cg:CgSwap": return [3 /*break*/, 1253];
                        case "cg:CgSweden": return [3 /*break*/, 1255];
                        case "cg:CgSwiss": return [3 /*break*/, 1257];
                        case "cg:CgSync": return [3 /*break*/, 1259];
                        case "cg:CgTab": return [3 /*break*/, 1261];
                        case "cg:CgTag": return [3 /*break*/, 1263];
                        case "cg:CgTally": return [3 /*break*/, 1265];
                        case "cg:CgTapDouble": return [3 /*break*/, 1267];
                        case "cg:CgTapSingle": return [3 /*break*/, 1269];
                        case "cg:CgTemplate": return [3 /*break*/, 1271];
                        case "cg:CgTennis": return [3 /*break*/, 1273];
                        case "cg:CgTerminal": return [3 /*break*/, 1275];
                        case "cg:CgTerrain": return [3 /*break*/, 1277];
                        case "cg:CgThermometer": return [3 /*break*/, 1279];
                        case "cg:CgThermostat": return [3 /*break*/, 1281];
                        case "cg:CgTikcode": return [3 /*break*/, 1283];
                        case "cg:CgTime": return [3 /*break*/, 1285];
                        case "cg:CgTimelapse": return [3 /*break*/, 1287];
                        case "cg:CgTimer": return [3 /*break*/, 1289];
                        case "cg:CgToday": return [3 /*break*/, 1291];
                        case "cg:CgToggleOff": return [3 /*break*/, 1293];
                        case "cg:CgToggleOn": return [3 /*break*/, 1295];
                        case "cg:CgToggleSquareOff": return [3 /*break*/, 1297];
                        case "cg:CgToggleSquare": return [3 /*break*/, 1299];
                        case "cg:CgToolbarBottom": return [3 /*break*/, 1301];
                        case "cg:CgToolbarLeft": return [3 /*break*/, 1303];
                        case "cg:CgToolbarRight": return [3 /*break*/, 1305];
                        case "cg:CgToolbarTop": return [3 /*break*/, 1307];
                        case "cg:CgToolbox": return [3 /*break*/, 1309];
                        case "cg:CgTouchpad": return [3 /*break*/, 1311];
                        case "cg:CgTrack": return [3 /*break*/, 1313];
                        case "cg:CgTranscript": return [3 /*break*/, 1315];
                        case "cg:CgTrashEmpty": return [3 /*break*/, 1317];
                        case "cg:CgTrash": return [3 /*break*/, 1319];
                        case "cg:CgTree": return [3 /*break*/, 1321];
                        case "cg:CgTrees": return [3 /*break*/, 1323];
                        case "cg:CgTrello": return [3 /*break*/, 1325];
                        case "cg:CgTrendingDown": return [3 /*break*/, 1327];
                        case "cg:CgTrending": return [3 /*break*/, 1329];
                        case "cg:CgTrophy": return [3 /*break*/, 1331];
                        case "cg:CgTv": return [3 /*break*/, 1333];
                        case "cg:CgTwilio": return [3 /*break*/, 1335];
                        case "cg:CgTwitter": return [3 /*break*/, 1337];
                        case "cg:CgUiKit": return [3 /*break*/, 1339];
                        case "cg:CgUmbrella": return [3 /*break*/, 1341];
                        case "cg:CgUnavailable": return [3 /*break*/, 1343];
                        case "cg:CgUnblock": return [3 /*break*/, 1345];
                        case "cg:CgUndo": return [3 /*break*/, 1347];
                        case "cg:CgUnfold": return [3 /*break*/, 1349];
                        case "cg:CgUnsplash": return [3 /*break*/, 1351];
                        case "cg:CgUsbC": return [3 /*break*/, 1353];
                        case "cg:CgUsb": return [3 /*break*/, 1355];
                        case "cg:CgUserAdd": return [3 /*break*/, 1357];
                        case "cg:CgUserList": return [3 /*break*/, 1359];
                        case "cg:CgUserRemove": return [3 /*break*/, 1361];
                        case "cg:CgUser": return [3 /*break*/, 1363];
                        case "cg:CgUserlane": return [3 /*break*/, 1365];
                        case "cg:CgVercel": return [3 /*break*/, 1367];
                        case "cg:CgViewCols": return [3 /*break*/, 1369];
                        case "cg:CgViewComfortable": return [3 /*break*/, 1371];
                        case "cg:CgViewDay": return [3 /*break*/, 1373];
                        case "cg:CgViewGrid": return [3 /*break*/, 1375];
                        case "cg:CgViewList": return [3 /*break*/, 1377];
                        case "cg:CgViewMonth": return [3 /*break*/, 1379];
                        case "cg:CgViewSplit": return [3 /*break*/, 1381];
                        case "cg:CgVinyl": return [3 /*break*/, 1383];
                        case "cg:CgVoicemailO": return [3 /*break*/, 1385];
                        case "cg:CgVoicemailR": return [3 /*break*/, 1387];
                        case "cg:CgVoicemail": return [3 /*break*/, 1389];
                        case "cg:CgVolume": return [3 /*break*/, 1391];
                        case "cg:CgWebcam": return [3 /*break*/, 1393];
                        case "cg:CgWebsite": return [3 /*break*/, 1395];
                        case "cg:CgWindows": return [3 /*break*/, 1397];
                        case "cg:CgWorkAlt": return [3 /*break*/, 1399];
                        case "cg:CgYinyang": return [3 /*break*/, 1401];
                        case "cg:CgYoutube": return [3 /*break*/, 1403];
                        case "cg:CgZoomIn": return [3 /*break*/, 1405];
                        case "cg:CgZoomOut": return [3 /*break*/, 1407];
                    }
                    return [3 /*break*/, 1409];
                case 1: return [4 /*yield*/, import("react-icons/cg")];
                case 2:
                    CgAbstract = (_b.sent()).CgAbstract;
                    return [2 /*return*/, CgAbstract];
                case 3: return [4 /*yield*/, import("react-icons/cg")];
                case 4:
                    CgAddR = (_b.sent()).CgAddR;
                    return [2 /*return*/, CgAddR];
                case 5: return [4 /*yield*/, import("react-icons/cg")];
                case 6:
                    CgAdd = (_b.sent()).CgAdd;
                    return [2 /*return*/, CgAdd];
                case 7: return [4 /*yield*/, import("react-icons/cg")];
                case 8:
                    CgAdidas = (_b.sent()).CgAdidas;
                    return [2 /*return*/, CgAdidas];
                case 9: return [4 /*yield*/, import("react-icons/cg")];
                case 10:
                    CgAirplane = (_b.sent()).CgAirplane;
                    return [2 /*return*/, CgAirplane];
                case 11: return [4 /*yield*/, import("react-icons/cg")];
                case 12:
                    CgAlarm = (_b.sent()).CgAlarm;
                    return [2 /*return*/, CgAlarm];
                case 13: return [4 /*yield*/, import("react-icons/cg")];
                case 14:
                    CgAlbum = (_b.sent()).CgAlbum;
                    return [2 /*return*/, CgAlbum];
                case 15: return [4 /*yield*/, import("react-icons/cg")];
                case 16:
                    CgAlignBottom = (_b.sent()).CgAlignBottom;
                    return [2 /*return*/, CgAlignBottom];
                case 17: return [4 /*yield*/, import("react-icons/cg")];
                case 18:
                    CgAlignCenter = (_b.sent()).CgAlignCenter;
                    return [2 /*return*/, CgAlignCenter];
                case 19: return [4 /*yield*/, import("react-icons/cg")];
                case 20:
                    CgAlignLeft = (_b.sent()).CgAlignLeft;
                    return [2 /*return*/, CgAlignLeft];
                case 21: return [4 /*yield*/, import("react-icons/cg")];
                case 22:
                    CgAlignMiddle = (_b.sent()).CgAlignMiddle;
                    return [2 /*return*/, CgAlignMiddle];
                case 23: return [4 /*yield*/, import("react-icons/cg")];
                case 24:
                    CgAlignRight = (_b.sent()).CgAlignRight;
                    return [2 /*return*/, CgAlignRight];
                case 25: return [4 /*yield*/, import("react-icons/cg")];
                case 26:
                    CgAlignTop = (_b.sent()).CgAlignTop;
                    return [2 /*return*/, CgAlignTop];
                case 27: return [4 /*yield*/, import("react-icons/cg")];
                case 28:
                    CgAnchor = (_b.sent()).CgAnchor;
                    return [2 /*return*/, CgAnchor];
                case 29: return [4 /*yield*/, import("react-icons/cg")];
                case 30:
                    CgAppleWatch = (_b.sent()).CgAppleWatch;
                    return [2 /*return*/, CgAppleWatch];
                case 31: return [4 /*yield*/, import("react-icons/cg")];
                case 32:
                    CgArrangeBack = (_b.sent()).CgArrangeBack;
                    return [2 /*return*/, CgArrangeBack];
                case 33: return [4 /*yield*/, import("react-icons/cg")];
                case 34:
                    CgArrangeFront = (_b.sent()).CgArrangeFront;
                    return [2 /*return*/, CgArrangeFront];
                case 35: return [4 /*yield*/, import("react-icons/cg")];
                case 36:
                    CgArrowAlignH = (_b.sent()).CgArrowAlignH;
                    return [2 /*return*/, CgArrowAlignH];
                case 37: return [4 /*yield*/, import("react-icons/cg")];
                case 38:
                    CgArrowAlignV = (_b.sent()).CgArrowAlignV;
                    return [2 /*return*/, CgArrowAlignV];
                case 39: return [4 /*yield*/, import("react-icons/cg")];
                case 40:
                    CgArrowBottomLeftO = (_b.sent()).CgArrowBottomLeftO;
                    return [2 /*return*/, CgArrowBottomLeftO];
                case 41: return [4 /*yield*/, import("react-icons/cg")];
                case 42:
                    CgArrowBottomLeftR = (_b.sent()).CgArrowBottomLeftR;
                    return [2 /*return*/, CgArrowBottomLeftR];
                case 43: return [4 /*yield*/, import("react-icons/cg")];
                case 44:
                    CgArrowBottomLeft = (_b.sent()).CgArrowBottomLeft;
                    return [2 /*return*/, CgArrowBottomLeft];
                case 45: return [4 /*yield*/, import("react-icons/cg")];
                case 46:
                    CgArrowBottomRightO = (_b.sent()).CgArrowBottomRightO;
                    return [2 /*return*/, CgArrowBottomRightO];
                case 47: return [4 /*yield*/, import("react-icons/cg")];
                case 48:
                    CgArrowBottomRightR = (_b.sent()).CgArrowBottomRightR;
                    return [2 /*return*/, CgArrowBottomRightR];
                case 49: return [4 /*yield*/, import("react-icons/cg")];
                case 50:
                    CgArrowBottomRight = (_b.sent()).CgArrowBottomRight;
                    return [2 /*return*/, CgArrowBottomRight];
                case 51: return [4 /*yield*/, import("react-icons/cg")];
                case 52:
                    CgArrowDownO = (_b.sent()).CgArrowDownO;
                    return [2 /*return*/, CgArrowDownO];
                case 53: return [4 /*yield*/, import("react-icons/cg")];
                case 54:
                    CgArrowDownR = (_b.sent()).CgArrowDownR;
                    return [2 /*return*/, CgArrowDownR];
                case 55: return [4 /*yield*/, import("react-icons/cg")];
                case 56:
                    CgArrowDown = (_b.sent()).CgArrowDown;
                    return [2 /*return*/, CgArrowDown];
                case 57: return [4 /*yield*/, import("react-icons/cg")];
                case 58:
                    CgArrowLeftO = (_b.sent()).CgArrowLeftO;
                    return [2 /*return*/, CgArrowLeftO];
                case 59: return [4 /*yield*/, import("react-icons/cg")];
                case 60:
                    CgArrowLeftR = (_b.sent()).CgArrowLeftR;
                    return [2 /*return*/, CgArrowLeftR];
                case 61: return [4 /*yield*/, import("react-icons/cg")];
                case 62:
                    CgArrowLeft = (_b.sent()).CgArrowLeft;
                    return [2 /*return*/, CgArrowLeft];
                case 63: return [4 /*yield*/, import("react-icons/cg")];
                case 64:
                    CgArrowLongDownC = (_b.sent()).CgArrowLongDownC;
                    return [2 /*return*/, CgArrowLongDownC];
                case 65: return [4 /*yield*/, import("react-icons/cg")];
                case 66:
                    CgArrowLongDownE = (_b.sent()).CgArrowLongDownE;
                    return [2 /*return*/, CgArrowLongDownE];
                case 67: return [4 /*yield*/, import("react-icons/cg")];
                case 68:
                    CgArrowLongDownL = (_b.sent()).CgArrowLongDownL;
                    return [2 /*return*/, CgArrowLongDownL];
                case 69: return [4 /*yield*/, import("react-icons/cg")];
                case 70:
                    CgArrowLongDownR = (_b.sent()).CgArrowLongDownR;
                    return [2 /*return*/, CgArrowLongDownR];
                case 71: return [4 /*yield*/, import("react-icons/cg")];
                case 72:
                    CgArrowLongDown = (_b.sent()).CgArrowLongDown;
                    return [2 /*return*/, CgArrowLongDown];
                case 73: return [4 /*yield*/, import("react-icons/cg")];
                case 74:
                    CgArrowLongLeftC = (_b.sent()).CgArrowLongLeftC;
                    return [2 /*return*/, CgArrowLongLeftC];
                case 75: return [4 /*yield*/, import("react-icons/cg")];
                case 76:
                    CgArrowLongLeftE = (_b.sent()).CgArrowLongLeftE;
                    return [2 /*return*/, CgArrowLongLeftE];
                case 77: return [4 /*yield*/, import("react-icons/cg")];
                case 78:
                    CgArrowLongLeftL = (_b.sent()).CgArrowLongLeftL;
                    return [2 /*return*/, CgArrowLongLeftL];
                case 79: return [4 /*yield*/, import("react-icons/cg")];
                case 80:
                    CgArrowLongLeftR = (_b.sent()).CgArrowLongLeftR;
                    return [2 /*return*/, CgArrowLongLeftR];
                case 81: return [4 /*yield*/, import("react-icons/cg")];
                case 82:
                    CgArrowLongLeft = (_b.sent()).CgArrowLongLeft;
                    return [2 /*return*/, CgArrowLongLeft];
                case 83: return [4 /*yield*/, import("react-icons/cg")];
                case 84:
                    CgArrowLongRightC = (_b.sent()).CgArrowLongRightC;
                    return [2 /*return*/, CgArrowLongRightC];
                case 85: return [4 /*yield*/, import("react-icons/cg")];
                case 86:
                    CgArrowLongRightE = (_b.sent()).CgArrowLongRightE;
                    return [2 /*return*/, CgArrowLongRightE];
                case 87: return [4 /*yield*/, import("react-icons/cg")];
                case 88:
                    CgArrowLongRightL = (_b.sent()).CgArrowLongRightL;
                    return [2 /*return*/, CgArrowLongRightL];
                case 89: return [4 /*yield*/, import("react-icons/cg")];
                case 90:
                    CgArrowLongRightR = (_b.sent()).CgArrowLongRightR;
                    return [2 /*return*/, CgArrowLongRightR];
                case 91: return [4 /*yield*/, import("react-icons/cg")];
                case 92:
                    CgArrowLongRight = (_b.sent()).CgArrowLongRight;
                    return [2 /*return*/, CgArrowLongRight];
                case 93: return [4 /*yield*/, import("react-icons/cg")];
                case 94:
                    CgArrowLongUpC = (_b.sent()).CgArrowLongUpC;
                    return [2 /*return*/, CgArrowLongUpC];
                case 95: return [4 /*yield*/, import("react-icons/cg")];
                case 96:
                    CgArrowLongUpE = (_b.sent()).CgArrowLongUpE;
                    return [2 /*return*/, CgArrowLongUpE];
                case 97: return [4 /*yield*/, import("react-icons/cg")];
                case 98:
                    CgArrowLongUpL = (_b.sent()).CgArrowLongUpL;
                    return [2 /*return*/, CgArrowLongUpL];
                case 99: return [4 /*yield*/, import("react-icons/cg")];
                case 100:
                    CgArrowLongUpR = (_b.sent()).CgArrowLongUpR;
                    return [2 /*return*/, CgArrowLongUpR];
                case 101: return [4 /*yield*/, import("react-icons/cg")];
                case 102:
                    CgArrowLongUp = (_b.sent()).CgArrowLongUp;
                    return [2 /*return*/, CgArrowLongUp];
                case 103: return [4 /*yield*/, import("react-icons/cg")];
                case 104:
                    CgArrowRightO = (_b.sent()).CgArrowRightO;
                    return [2 /*return*/, CgArrowRightO];
                case 105: return [4 /*yield*/, import("react-icons/cg")];
                case 106:
                    CgArrowRightR = (_b.sent()).CgArrowRightR;
                    return [2 /*return*/, CgArrowRightR];
                case 107: return [4 /*yield*/, import("react-icons/cg")];
                case 108:
                    CgArrowRight = (_b.sent()).CgArrowRight;
                    return [2 /*return*/, CgArrowRight];
                case 109: return [4 /*yield*/, import("react-icons/cg")];
                case 110:
                    CgArrowTopLeftO = (_b.sent()).CgArrowTopLeftO;
                    return [2 /*return*/, CgArrowTopLeftO];
                case 111: return [4 /*yield*/, import("react-icons/cg")];
                case 112:
                    CgArrowTopLeftR = (_b.sent()).CgArrowTopLeftR;
                    return [2 /*return*/, CgArrowTopLeftR];
                case 113: return [4 /*yield*/, import("react-icons/cg")];
                case 114:
                    CgArrowTopLeft = (_b.sent()).CgArrowTopLeft;
                    return [2 /*return*/, CgArrowTopLeft];
                case 115: return [4 /*yield*/, import("react-icons/cg")];
                case 116:
                    CgArrowTopRightO = (_b.sent()).CgArrowTopRightO;
                    return [2 /*return*/, CgArrowTopRightO];
                case 117: return [4 /*yield*/, import("react-icons/cg")];
                case 118:
                    CgArrowTopRightR = (_b.sent()).CgArrowTopRightR;
                    return [2 /*return*/, CgArrowTopRightR];
                case 119: return [4 /*yield*/, import("react-icons/cg")];
                case 120:
                    CgArrowTopRight = (_b.sent()).CgArrowTopRight;
                    return [2 /*return*/, CgArrowTopRight];
                case 121: return [4 /*yield*/, import("react-icons/cg")];
                case 122:
                    CgArrowUpO = (_b.sent()).CgArrowUpO;
                    return [2 /*return*/, CgArrowUpO];
                case 123: return [4 /*yield*/, import("react-icons/cg")];
                case 124:
                    CgArrowUpR = (_b.sent()).CgArrowUpR;
                    return [2 /*return*/, CgArrowUpR];
                case 125: return [4 /*yield*/, import("react-icons/cg")];
                case 126:
                    CgArrowUp = (_b.sent()).CgArrowUp;
                    return [2 /*return*/, CgArrowUp];
                case 127: return [4 /*yield*/, import("react-icons/cg")];
                case 128:
                    CgArrowsBreakeH = (_b.sent()).CgArrowsBreakeH;
                    return [2 /*return*/, CgArrowsBreakeH];
                case 129: return [4 /*yield*/, import("react-icons/cg")];
                case 130:
                    CgArrowsBreakeV = (_b.sent()).CgArrowsBreakeV;
                    return [2 /*return*/, CgArrowsBreakeV];
                case 131: return [4 /*yield*/, import("react-icons/cg")];
                case 132:
                    CgArrowsExchangeAltV = (_b.sent()).CgArrowsExchangeAltV;
                    return [2 /*return*/, CgArrowsExchangeAltV];
                case 133: return [4 /*yield*/, import("react-icons/cg")];
                case 134:
                    CgArrowsExchangeAlt = (_b.sent()).CgArrowsExchangeAlt;
                    return [2 /*return*/, CgArrowsExchangeAlt];
                case 135: return [4 /*yield*/, import("react-icons/cg")];
                case 136:
                    CgArrowsExchangeV = (_b.sent()).CgArrowsExchangeV;
                    return [2 /*return*/, CgArrowsExchangeV];
                case 137: return [4 /*yield*/, import("react-icons/cg")];
                case 138:
                    CgArrowsExchange = (_b.sent()).CgArrowsExchange;
                    return [2 /*return*/, CgArrowsExchange];
                case 139: return [4 /*yield*/, import("react-icons/cg")];
                case 140:
                    CgArrowsExpandDownLeft = (_b.sent()).CgArrowsExpandDownLeft;
                    return [2 /*return*/, CgArrowsExpandDownLeft];
                case 141: return [4 /*yield*/, import("react-icons/cg")];
                case 142:
                    CgArrowsExpandDownRight = (_b.sent()).CgArrowsExpandDownRight;
                    return [2 /*return*/, CgArrowsExpandDownRight];
                case 143: return [4 /*yield*/, import("react-icons/cg")];
                case 144:
                    CgArrowsExpandLeftAlt = (_b.sent()).CgArrowsExpandLeftAlt;
                    return [2 /*return*/, CgArrowsExpandLeftAlt];
                case 145: return [4 /*yield*/, import("react-icons/cg")];
                case 146:
                    CgArrowsExpandLeft = (_b.sent()).CgArrowsExpandLeft;
                    return [2 /*return*/, CgArrowsExpandLeft];
                case 147: return [4 /*yield*/, import("react-icons/cg")];
                case 148:
                    CgArrowsExpandRightAlt = (_b.sent()).CgArrowsExpandRightAlt;
                    return [2 /*return*/, CgArrowsExpandRightAlt];
                case 149: return [4 /*yield*/, import("react-icons/cg")];
                case 150:
                    CgArrowsExpandRight = (_b.sent()).CgArrowsExpandRight;
                    return [2 /*return*/, CgArrowsExpandRight];
                case 151: return [4 /*yield*/, import("react-icons/cg")];
                case 152:
                    CgArrowsExpandUpLeft = (_b.sent()).CgArrowsExpandUpLeft;
                    return [2 /*return*/, CgArrowsExpandUpLeft];
                case 153: return [4 /*yield*/, import("react-icons/cg")];
                case 154:
                    CgArrowsExpandUpRight = (_b.sent()).CgArrowsExpandUpRight;
                    return [2 /*return*/, CgArrowsExpandUpRight];
                case 155: return [4 /*yield*/, import("react-icons/cg")];
                case 156:
                    CgArrowsHAlt = (_b.sent()).CgArrowsHAlt;
                    return [2 /*return*/, CgArrowsHAlt];
                case 157: return [4 /*yield*/, import("react-icons/cg")];
                case 158:
                    CgArrowsH = (_b.sent()).CgArrowsH;
                    return [2 /*return*/, CgArrowsH];
                case 159: return [4 /*yield*/, import("react-icons/cg")];
                case 160:
                    CgArrowsMergeAltH = (_b.sent()).CgArrowsMergeAltH;
                    return [2 /*return*/, CgArrowsMergeAltH];
                case 161: return [4 /*yield*/, import("react-icons/cg")];
                case 162:
                    CgArrowsMergeAltV = (_b.sent()).CgArrowsMergeAltV;
                    return [2 /*return*/, CgArrowsMergeAltV];
                case 163: return [4 /*yield*/, import("react-icons/cg")];
                case 164:
                    CgArrowsScrollH = (_b.sent()).CgArrowsScrollH;
                    return [2 /*return*/, CgArrowsScrollH];
                case 165: return [4 /*yield*/, import("react-icons/cg")];
                case 166:
                    CgArrowsScrollV = (_b.sent()).CgArrowsScrollV;
                    return [2 /*return*/, CgArrowsScrollV];
                case 167: return [4 /*yield*/, import("react-icons/cg")];
                case 168:
                    CgArrowsShrinkH = (_b.sent()).CgArrowsShrinkH;
                    return [2 /*return*/, CgArrowsShrinkH];
                case 169: return [4 /*yield*/, import("react-icons/cg")];
                case 170:
                    CgArrowsShrinkV = (_b.sent()).CgArrowsShrinkV;
                    return [2 /*return*/, CgArrowsShrinkV];
                case 171: return [4 /*yield*/, import("react-icons/cg")];
                case 172:
                    CgArrowsVAlt = (_b.sent()).CgArrowsVAlt;
                    return [2 /*return*/, CgArrowsVAlt];
                case 173: return [4 /*yield*/, import("react-icons/cg")];
                case 174:
                    CgArrowsV = (_b.sent()).CgArrowsV;
                    return [2 /*return*/, CgArrowsV];
                case 175: return [4 /*yield*/, import("react-icons/cg")];
                case 176:
                    CgAssign = (_b.sent()).CgAssign;
                    return [2 /*return*/, CgAssign];
                case 177: return [4 /*yield*/, import("react-icons/cg")];
                case 178:
                    CgAsterisk = (_b.sent()).CgAsterisk;
                    return [2 /*return*/, CgAsterisk];
                case 179: return [4 /*yield*/, import("react-icons/cg")];
                case 180:
                    CgAtlasian = (_b.sent()).CgAtlasian;
                    return [2 /*return*/, CgAtlasian];
                case 181: return [4 /*yield*/, import("react-icons/cg")];
                case 182:
                    CgAttachment = (_b.sent()).CgAttachment;
                    return [2 /*return*/, CgAttachment];
                case 183: return [4 /*yield*/, import("react-icons/cg")];
                case 184:
                    CgAttribution = (_b.sent()).CgAttribution;
                    return [2 /*return*/, CgAttribution];
                case 185: return [4 /*yield*/, import("react-icons/cg")];
                case 186:
                    CgAwards = (_b.sent()).CgAwards;
                    return [2 /*return*/, CgAwards];
                case 187: return [4 /*yield*/, import("react-icons/cg")];
                case 188:
                    CgBackspace = (_b.sent()).CgBackspace;
                    return [2 /*return*/, CgBackspace];
                case 189: return [4 /*yield*/, import("react-icons/cg")];
                case 190:
                    CgBandAid = (_b.sent()).CgBandAid;
                    return [2 /*return*/, CgBandAid];
                case 191: return [4 /*yield*/, import("react-icons/cg")];
                case 192:
                    CgBatteryEmpty = (_b.sent()).CgBatteryEmpty;
                    return [2 /*return*/, CgBatteryEmpty];
                case 193: return [4 /*yield*/, import("react-icons/cg")];
                case 194:
                    CgBatteryFull = (_b.sent()).CgBatteryFull;
                    return [2 /*return*/, CgBatteryFull];
                case 195: return [4 /*yield*/, import("react-icons/cg")];
                case 196:
                    CgBattery = (_b.sent()).CgBattery;
                    return [2 /*return*/, CgBattery];
                case 197: return [4 /*yield*/, import("react-icons/cg")];
                case 198:
                    CgBee = (_b.sent()).CgBee;
                    return [2 /*return*/, CgBee];
                case 199: return [4 /*yield*/, import("react-icons/cg")];
                case 200:
                    CgBell = (_b.sent()).CgBell;
                    return [2 /*return*/, CgBell];
                case 201: return [4 /*yield*/, import("react-icons/cg")];
                case 202:
                    CgBitbucket = (_b.sent()).CgBitbucket;
                    return [2 /*return*/, CgBitbucket];
                case 203: return [4 /*yield*/, import("react-icons/cg")];
                case 204:
                    CgBlock = (_b.sent()).CgBlock;
                    return [2 /*return*/, CgBlock];
                case 205: return [4 /*yield*/, import("react-icons/cg")];
                case 206:
                    CgBmw = (_b.sent()).CgBmw;
                    return [2 /*return*/, CgBmw];
                case 207: return [4 /*yield*/, import("react-icons/cg")];
                case 208:
                    CgBoard = (_b.sent()).CgBoard;
                    return [2 /*return*/, CgBoard];
                case 209: return [4 /*yield*/, import("react-icons/cg")];
                case 210:
                    CgBolt = (_b.sent()).CgBolt;
                    return [2 /*return*/, CgBolt];
                case 211: return [4 /*yield*/, import("react-icons/cg")];
                case 212:
                    CgBookmark = (_b.sent()).CgBookmark;
                    return [2 /*return*/, CgBookmark];
                case 213: return [4 /*yield*/, import("react-icons/cg")];
                case 214:
                    CgBorderAll = (_b.sent()).CgBorderAll;
                    return [2 /*return*/, CgBorderAll];
                case 215: return [4 /*yield*/, import("react-icons/cg")];
                case 216:
                    CgBorderBottom = (_b.sent()).CgBorderBottom;
                    return [2 /*return*/, CgBorderBottom];
                case 217: return [4 /*yield*/, import("react-icons/cg")];
                case 218:
                    CgBorderLeft = (_b.sent()).CgBorderLeft;
                    return [2 /*return*/, CgBorderLeft];
                case 219: return [4 /*yield*/, import("react-icons/cg")];
                case 220:
                    CgBorderRight = (_b.sent()).CgBorderRight;
                    return [2 /*return*/, CgBorderRight];
                case 221: return [4 /*yield*/, import("react-icons/cg")];
                case 222:
                    CgBorderStyleDashed = (_b.sent()).CgBorderStyleDashed;
                    return [2 /*return*/, CgBorderStyleDashed];
                case 223: return [4 /*yield*/, import("react-icons/cg")];
                case 224:
                    CgBorderStyleDotted = (_b.sent()).CgBorderStyleDotted;
                    return [2 /*return*/, CgBorderStyleDotted];
                case 225: return [4 /*yield*/, import("react-icons/cg")];
                case 226:
                    CgBorderStyleSolid = (_b.sent()).CgBorderStyleSolid;
                    return [2 /*return*/, CgBorderStyleSolid];
                case 227: return [4 /*yield*/, import("react-icons/cg")];
                case 228:
                    CgBorderTop = (_b.sent()).CgBorderTop;
                    return [2 /*return*/, CgBorderTop];
                case 229: return [4 /*yield*/, import("react-icons/cg")];
                case 230:
                    CgBot = (_b.sent()).CgBot;
                    return [2 /*return*/, CgBot];
                case 231: return [4 /*yield*/, import("react-icons/cg")];
                case 232:
                    CgBowl = (_b.sent()).CgBowl;
                    return [2 /*return*/, CgBowl];
                case 233: return [4 /*yield*/, import("react-icons/cg")];
                case 234:
                    CgBox = (_b.sent()).CgBox;
                    return [2 /*return*/, CgBox];
                case 235: return [4 /*yield*/, import("react-icons/cg")];
                case 236:
                    CgBoy = (_b.sent()).CgBoy;
                    return [2 /*return*/, CgBoy];
                case 237: return [4 /*yield*/, import("react-icons/cg")];
                case 238:
                    CgBrackets = (_b.sent()).CgBrackets;
                    return [2 /*return*/, CgBrackets];
                case 239: return [4 /*yield*/, import("react-icons/cg")];
                case 240:
                    CgBriefcase = (_b.sent()).CgBriefcase;
                    return [2 /*return*/, CgBriefcase];
                case 241: return [4 /*yield*/, import("react-icons/cg")];
                case 242:
                    CgBrowse = (_b.sent()).CgBrowse;
                    return [2 /*return*/, CgBrowse];
                case 243: return [4 /*yield*/, import("react-icons/cg")];
                case 244:
                    CgBrowser = (_b.sent()).CgBrowser;
                    return [2 /*return*/, CgBrowser];
                case 245: return [4 /*yield*/, import("react-icons/cg")];
                case 246:
                    CgBrush = (_b.sent()).CgBrush;
                    return [2 /*return*/, CgBrush];
                case 247: return [4 /*yield*/, import("react-icons/cg")];
                case 248:
                    CgBulb = (_b.sent()).CgBulb;
                    return [2 /*return*/, CgBulb];
                case 249: return [4 /*yield*/, import("react-icons/cg")];
                case 250:
                    CgCPlusPlus = (_b.sent()).CgCPlusPlus;
                    return [2 /*return*/, CgCPlusPlus];
                case 251: return [4 /*yield*/, import("react-icons/cg")];
                case 252:
                    CgCalculator = (_b.sent()).CgCalculator;
                    return [2 /*return*/, CgCalculator];
                case 253: return [4 /*yield*/, import("react-icons/cg")];
                case 254:
                    CgCalendarDates = (_b.sent()).CgCalendarDates;
                    return [2 /*return*/, CgCalendarDates];
                case 255: return [4 /*yield*/, import("react-icons/cg")];
                case 256:
                    CgCalendarDue = (_b.sent()).CgCalendarDue;
                    return [2 /*return*/, CgCalendarDue];
                case 257: return [4 /*yield*/, import("react-icons/cg")];
                case 258:
                    CgCalendarNext = (_b.sent()).CgCalendarNext;
                    return [2 /*return*/, CgCalendarNext];
                case 259: return [4 /*yield*/, import("react-icons/cg")];
                case 260:
                    CgCalendarToday = (_b.sent()).CgCalendarToday;
                    return [2 /*return*/, CgCalendarToday];
                case 261: return [4 /*yield*/, import("react-icons/cg")];
                case 262:
                    CgCalendarTwo = (_b.sent()).CgCalendarTwo;
                    return [2 /*return*/, CgCalendarTwo];
                case 263: return [4 /*yield*/, import("react-icons/cg")];
                case 264:
                    CgCalendar = (_b.sent()).CgCalendar;
                    return [2 /*return*/, CgCalendar];
                case 265: return [4 /*yield*/, import("react-icons/cg")];
                case 266:
                    CgCalibrate = (_b.sent()).CgCalibrate;
                    return [2 /*return*/, CgCalibrate];
                case 267: return [4 /*yield*/, import("react-icons/cg")];
                case 268:
                    CgCamera = (_b.sent()).CgCamera;
                    return [2 /*return*/, CgCamera];
                case 269: return [4 /*yield*/, import("react-icons/cg")];
                case 270:
                    CgCap = (_b.sent()).CgCap;
                    return [2 /*return*/, CgCap];
                case 271: return [4 /*yield*/, import("react-icons/cg")];
                case 272:
                    CgCaptions = (_b.sent()).CgCaptions;
                    return [2 /*return*/, CgCaptions];
                case 273: return [4 /*yield*/, import("react-icons/cg")];
                case 274:
                    CgCardClubs = (_b.sent()).CgCardClubs;
                    return [2 /*return*/, CgCardClubs];
                case 275: return [4 /*yield*/, import("react-icons/cg")];
                case 276:
                    CgCardDiamonds = (_b.sent()).CgCardDiamonds;
                    return [2 /*return*/, CgCardDiamonds];
                case 277: return [4 /*yield*/, import("react-icons/cg")];
                case 278:
                    CgCardHearts = (_b.sent()).CgCardHearts;
                    return [2 /*return*/, CgCardHearts];
                case 279: return [4 /*yield*/, import("react-icons/cg")];
                case 280:
                    CgCardSpades = (_b.sent()).CgCardSpades;
                    return [2 /*return*/, CgCardSpades];
                case 281: return [4 /*yield*/, import("react-icons/cg")];
                case 282:
                    CgCarousel = (_b.sent()).CgCarousel;
                    return [2 /*return*/, CgCarousel];
                case 283: return [4 /*yield*/, import("react-icons/cg")];
                case 284:
                    CgCast = (_b.sent()).CgCast;
                    return [2 /*return*/, CgCast];
                case 285: return [4 /*yield*/, import("react-icons/cg")];
                case 286:
                    CgChanel = (_b.sent()).CgChanel;
                    return [2 /*return*/, CgChanel];
                case 287: return [4 /*yield*/, import("react-icons/cg")];
                case 288:
                    CgChart = (_b.sent()).CgChart;
                    return [2 /*return*/, CgChart];
                case 289: return [4 /*yield*/, import("react-icons/cg")];
                case 290:
                    CgCheckO = (_b.sent()).CgCheckO;
                    return [2 /*return*/, CgCheckO];
                case 291: return [4 /*yield*/, import("react-icons/cg")];
                case 292:
                    CgCheckR = (_b.sent()).CgCheckR;
                    return [2 /*return*/, CgCheckR];
                case 293: return [4 /*yield*/, import("react-icons/cg")];
                case 294:
                    CgCheck = (_b.sent()).CgCheck;
                    return [2 /*return*/, CgCheck];
                case 295: return [4 /*yield*/, import("react-icons/cg")];
                case 296:
                    CgChevronDoubleDownO = (_b.sent()).CgChevronDoubleDownO;
                    return [2 /*return*/, CgChevronDoubleDownO];
                case 297: return [4 /*yield*/, import("react-icons/cg")];
                case 298:
                    CgChevronDoubleDownR = (_b.sent()).CgChevronDoubleDownR;
                    return [2 /*return*/, CgChevronDoubleDownR];
                case 299: return [4 /*yield*/, import("react-icons/cg")];
                case 300:
                    CgChevronDoubleDown = (_b.sent()).CgChevronDoubleDown;
                    return [2 /*return*/, CgChevronDoubleDown];
                case 301: return [4 /*yield*/, import("react-icons/cg")];
                case 302:
                    CgChevronDoubleLeftO = (_b.sent()).CgChevronDoubleLeftO;
                    return [2 /*return*/, CgChevronDoubleLeftO];
                case 303: return [4 /*yield*/, import("react-icons/cg")];
                case 304:
                    CgChevronDoubleLeftR = (_b.sent()).CgChevronDoubleLeftR;
                    return [2 /*return*/, CgChevronDoubleLeftR];
                case 305: return [4 /*yield*/, import("react-icons/cg")];
                case 306:
                    CgChevronDoubleLeft = (_b.sent()).CgChevronDoubleLeft;
                    return [2 /*return*/, CgChevronDoubleLeft];
                case 307: return [4 /*yield*/, import("react-icons/cg")];
                case 308:
                    CgChevronDoubleRightO = (_b.sent()).CgChevronDoubleRightO;
                    return [2 /*return*/, CgChevronDoubleRightO];
                case 309: return [4 /*yield*/, import("react-icons/cg")];
                case 310:
                    CgChevronDoubleRightR = (_b.sent()).CgChevronDoubleRightR;
                    return [2 /*return*/, CgChevronDoubleRightR];
                case 311: return [4 /*yield*/, import("react-icons/cg")];
                case 312:
                    CgChevronDoubleRight = (_b.sent()).CgChevronDoubleRight;
                    return [2 /*return*/, CgChevronDoubleRight];
                case 313: return [4 /*yield*/, import("react-icons/cg")];
                case 314:
                    CgChevronDoubleUpO = (_b.sent()).CgChevronDoubleUpO;
                    return [2 /*return*/, CgChevronDoubleUpO];
                case 315: return [4 /*yield*/, import("react-icons/cg")];
                case 316:
                    CgChevronDoubleUpR = (_b.sent()).CgChevronDoubleUpR;
                    return [2 /*return*/, CgChevronDoubleUpR];
                case 317: return [4 /*yield*/, import("react-icons/cg")];
                case 318:
                    CgChevronDoubleUp = (_b.sent()).CgChevronDoubleUp;
                    return [2 /*return*/, CgChevronDoubleUp];
                case 319: return [4 /*yield*/, import("react-icons/cg")];
                case 320:
                    CgChevronDownO = (_b.sent()).CgChevronDownO;
                    return [2 /*return*/, CgChevronDownO];
                case 321: return [4 /*yield*/, import("react-icons/cg")];
                case 322:
                    CgChevronDownR = (_b.sent()).CgChevronDownR;
                    return [2 /*return*/, CgChevronDownR];
                case 323: return [4 /*yield*/, import("react-icons/cg")];
                case 324:
                    CgChevronDown = (_b.sent()).CgChevronDown;
                    return [2 /*return*/, CgChevronDown];
                case 325: return [4 /*yield*/, import("react-icons/cg")];
                case 326:
                    CgChevronLeftO = (_b.sent()).CgChevronLeftO;
                    return [2 /*return*/, CgChevronLeftO];
                case 327: return [4 /*yield*/, import("react-icons/cg")];
                case 328:
                    CgChevronLeftR = (_b.sent()).CgChevronLeftR;
                    return [2 /*return*/, CgChevronLeftR];
                case 329: return [4 /*yield*/, import("react-icons/cg")];
                case 330:
                    CgChevronLeft = (_b.sent()).CgChevronLeft;
                    return [2 /*return*/, CgChevronLeft];
                case 331: return [4 /*yield*/, import("react-icons/cg")];
                case 332:
                    CgChevronRightO = (_b.sent()).CgChevronRightO;
                    return [2 /*return*/, CgChevronRightO];
                case 333: return [4 /*yield*/, import("react-icons/cg")];
                case 334:
                    CgChevronRightR = (_b.sent()).CgChevronRightR;
                    return [2 /*return*/, CgChevronRightR];
                case 335: return [4 /*yield*/, import("react-icons/cg")];
                case 336:
                    CgChevronRight = (_b.sent()).CgChevronRight;
                    return [2 /*return*/, CgChevronRight];
                case 337: return [4 /*yield*/, import("react-icons/cg")];
                case 338:
                    CgChevronUpO = (_b.sent()).CgChevronUpO;
                    return [2 /*return*/, CgChevronUpO];
                case 339: return [4 /*yield*/, import("react-icons/cg")];
                case 340:
                    CgChevronUpR = (_b.sent()).CgChevronUpR;
                    return [2 /*return*/, CgChevronUpR];
                case 341: return [4 /*yield*/, import("react-icons/cg")];
                case 342:
                    CgChevronUp = (_b.sent()).CgChevronUp;
                    return [2 /*return*/, CgChevronUp];
                case 343: return [4 /*yield*/, import("react-icons/cg")];
                case 344:
                    CgCircleci = (_b.sent()).CgCircleci;
                    return [2 /*return*/, CgCircleci];
                case 345: return [4 /*yield*/, import("react-icons/cg")];
                case 346:
                    CgClapperBoard = (_b.sent()).CgClapperBoard;
                    return [2 /*return*/, CgClapperBoard];
                case 347: return [4 /*yield*/, import("react-icons/cg")];
                case 348:
                    CgClipboard = (_b.sent()).CgClipboard;
                    return [2 /*return*/, CgClipboard];
                case 349: return [4 /*yield*/, import("react-icons/cg")];
                case 350:
                    CgCloseO = (_b.sent()).CgCloseO;
                    return [2 /*return*/, CgCloseO];
                case 351: return [4 /*yield*/, import("react-icons/cg")];
                case 352:
                    CgCloseR = (_b.sent()).CgCloseR;
                    return [2 /*return*/, CgCloseR];
                case 353: return [4 /*yield*/, import("react-icons/cg")];
                case 354:
                    CgClose = (_b.sent()).CgClose;
                    return [2 /*return*/, CgClose];
                case 355: return [4 /*yield*/, import("react-icons/cg")];
                case 356:
                    CgCloud = (_b.sent()).CgCloud;
                    return [2 /*return*/, CgCloud];
                case 357: return [4 /*yield*/, import("react-icons/cg")];
                case 358:
                    CgCodeClimate = (_b.sent()).CgCodeClimate;
                    return [2 /*return*/, CgCodeClimate];
                case 359: return [4 /*yield*/, import("react-icons/cg")];
                case 360:
                    CgCodeSlash = (_b.sent()).CgCodeSlash;
                    return [2 /*return*/, CgCodeSlash];
                case 361: return [4 /*yield*/, import("react-icons/cg")];
                case 362:
                    CgCode = (_b.sent()).CgCode;
                    return [2 /*return*/, CgCode];
                case 363: return [4 /*yield*/, import("react-icons/cg")];
                case 364:
                    CgCoffee = (_b.sent()).CgCoffee;
                    return [2 /*return*/, CgCoffee];
                case 365: return [4 /*yield*/, import("react-icons/cg")];
                case 366:
                    CgCollage = (_b.sent()).CgCollage;
                    return [2 /*return*/, CgCollage];
                case 367: return [4 /*yield*/, import("react-icons/cg")];
                case 368:
                    CgColorBucket = (_b.sent()).CgColorBucket;
                    return [2 /*return*/, CgColorBucket];
                case 369: return [4 /*yield*/, import("react-icons/cg")];
                case 370:
                    CgColorPicker = (_b.sent()).CgColorPicker;
                    return [2 /*return*/, CgColorPicker];
                case 371: return [4 /*yield*/, import("react-icons/cg")];
                case 372:
                    CgComedyCentral = (_b.sent()).CgComedyCentral;
                    return [2 /*return*/, CgComedyCentral];
                case 373: return [4 /*yield*/, import("react-icons/cg")];
                case 374:
                    CgComment = (_b.sent()).CgComment;
                    return [2 /*return*/, CgComment];
                case 375: return [4 /*yield*/, import("react-icons/cg")];
                case 376:
                    CgCommunity = (_b.sent()).CgCommunity;
                    return [2 /*return*/, CgCommunity];
                case 377: return [4 /*yield*/, import("react-icons/cg")];
                case 378:
                    CgComponents = (_b.sent()).CgComponents;
                    return [2 /*return*/, CgComponents];
                case 379: return [4 /*yield*/, import("react-icons/cg")];
                case 380:
                    CgCompressLeft = (_b.sent()).CgCompressLeft;
                    return [2 /*return*/, CgCompressLeft];
                case 381: return [4 /*yield*/, import("react-icons/cg")];
                case 382:
                    CgCompressRight = (_b.sent()).CgCompressRight;
                    return [2 /*return*/, CgCompressRight];
                case 383: return [4 /*yield*/, import("react-icons/cg")];
                case 384:
                    CgCompressV = (_b.sent()).CgCompressV;
                    return [2 /*return*/, CgCompressV];
                case 385: return [4 /*yield*/, import("react-icons/cg")];
                case 386:
                    CgCompress = (_b.sent()).CgCompress;
                    return [2 /*return*/, CgCompress];
                case 387: return [4 /*yield*/, import("react-icons/cg")];
                case 388:
                    CgController = (_b.sent()).CgController;
                    return [2 /*return*/, CgController];
                case 389: return [4 /*yield*/, import("react-icons/cg")];
                case 390:
                    CgCopy = (_b.sent()).CgCopy;
                    return [2 /*return*/, CgCopy];
                case 391: return [4 /*yield*/, import("react-icons/cg")];
                case 392:
                    CgCopyright = (_b.sent()).CgCopyright;
                    return [2 /*return*/, CgCopyright];
                case 393: return [4 /*yield*/, import("react-icons/cg")];
                case 394:
                    CgCornerDoubleDownLeft = (_b.sent()).CgCornerDoubleDownLeft;
                    return [2 /*return*/, CgCornerDoubleDownLeft];
                case 395: return [4 /*yield*/, import("react-icons/cg")];
                case 396:
                    CgCornerDoubleDownRight = (_b.sent()).CgCornerDoubleDownRight;
                    return [2 /*return*/, CgCornerDoubleDownRight];
                case 397: return [4 /*yield*/, import("react-icons/cg")];
                case 398:
                    CgCornerDoubleLeftDown = (_b.sent()).CgCornerDoubleLeftDown;
                    return [2 /*return*/, CgCornerDoubleLeftDown];
                case 399: return [4 /*yield*/, import("react-icons/cg")];
                case 400:
                    CgCornerDoubleLeftUp = (_b.sent()).CgCornerDoubleLeftUp;
                    return [2 /*return*/, CgCornerDoubleLeftUp];
                case 401: return [4 /*yield*/, import("react-icons/cg")];
                case 402:
                    CgCornerDoubleRightDown = (_b.sent()).CgCornerDoubleRightDown;
                    return [2 /*return*/, CgCornerDoubleRightDown];
                case 403: return [4 /*yield*/, import("react-icons/cg")];
                case 404:
                    CgCornerDoubleRightUp = (_b.sent()).CgCornerDoubleRightUp;
                    return [2 /*return*/, CgCornerDoubleRightUp];
                case 405: return [4 /*yield*/, import("react-icons/cg")];
                case 406:
                    CgCornerDoubleUpLeft = (_b.sent()).CgCornerDoubleUpLeft;
                    return [2 /*return*/, CgCornerDoubleUpLeft];
                case 407: return [4 /*yield*/, import("react-icons/cg")];
                case 408:
                    CgCornerDoubleUpRight = (_b.sent()).CgCornerDoubleUpRight;
                    return [2 /*return*/, CgCornerDoubleUpRight];
                case 409: return [4 /*yield*/, import("react-icons/cg")];
                case 410:
                    CgCornerDownLeft = (_b.sent()).CgCornerDownLeft;
                    return [2 /*return*/, CgCornerDownLeft];
                case 411: return [4 /*yield*/, import("react-icons/cg")];
                case 412:
                    CgCornerDownRight = (_b.sent()).CgCornerDownRight;
                    return [2 /*return*/, CgCornerDownRight];
                case 413: return [4 /*yield*/, import("react-icons/cg")];
                case 414:
                    CgCornerLeftDown = (_b.sent()).CgCornerLeftDown;
                    return [2 /*return*/, CgCornerLeftDown];
                case 415: return [4 /*yield*/, import("react-icons/cg")];
                case 416:
                    CgCornerLeftUp = (_b.sent()).CgCornerLeftUp;
                    return [2 /*return*/, CgCornerLeftUp];
                case 417: return [4 /*yield*/, import("react-icons/cg")];
                case 418:
                    CgCornerRightDown = (_b.sent()).CgCornerRightDown;
                    return [2 /*return*/, CgCornerRightDown];
                case 419: return [4 /*yield*/, import("react-icons/cg")];
                case 420:
                    CgCornerRightUp = (_b.sent()).CgCornerRightUp;
                    return [2 /*return*/, CgCornerRightUp];
                case 421: return [4 /*yield*/, import("react-icons/cg")];
                case 422:
                    CgCornerUpLeft = (_b.sent()).CgCornerUpLeft;
                    return [2 /*return*/, CgCornerUpLeft];
                case 423: return [4 /*yield*/, import("react-icons/cg")];
                case 424:
                    CgCornerUpRight = (_b.sent()).CgCornerUpRight;
                    return [2 /*return*/, CgCornerUpRight];
                case 425: return [4 /*yield*/, import("react-icons/cg")];
                case 426:
                    CgCreditCard = (_b.sent()).CgCreditCard;
                    return [2 /*return*/, CgCreditCard];
                case 427: return [4 /*yield*/, import("react-icons/cg")];
                case 428:
                    CgCrop = (_b.sent()).CgCrop;
                    return [2 /*return*/, CgCrop];
                case 429: return [4 /*yield*/, import("react-icons/cg")];
                case 430:
                    CgCross = (_b.sent()).CgCross;
                    return [2 /*return*/, CgCross];
                case 431: return [4 /*yield*/, import("react-icons/cg")];
                case 432:
                    CgCrowdfire = (_b.sent()).CgCrowdfire;
                    return [2 /*return*/, CgCrowdfire];
                case 433: return [4 /*yield*/, import("react-icons/cg")];
                case 434:
                    CgCrown = (_b.sent()).CgCrown;
                    return [2 /*return*/, CgCrown];
                case 435: return [4 /*yield*/, import("react-icons/cg")];
                case 436:
                    CgDanger = (_b.sent()).CgDanger;
                    return [2 /*return*/, CgDanger];
                case 437: return [4 /*yield*/, import("react-icons/cg")];
                case 438:
                    CgDarkMode = (_b.sent()).CgDarkMode;
                    return [2 /*return*/, CgDarkMode];
                case 439: return [4 /*yield*/, import("react-icons/cg")];
                case 440:
                    CgData = (_b.sent()).CgData;
                    return [2 /*return*/, CgData];
                case 441: return [4 /*yield*/, import("react-icons/cg")];
                case 442:
                    CgDatabase = (_b.sent()).CgDatabase;
                    return [2 /*return*/, CgDatabase];
                case 443: return [4 /*yield*/, import("react-icons/cg")];
                case 444:
                    CgDebug = (_b.sent()).CgDebug;
                    return [2 /*return*/, CgDebug];
                case 445: return [4 /*yield*/, import("react-icons/cg")];
                case 446:
                    CgDesignmodo = (_b.sent()).CgDesignmodo;
                    return [2 /*return*/, CgDesignmodo];
                case 447: return [4 /*yield*/, import("react-icons/cg")];
                case 448:
                    CgDesktop = (_b.sent()).CgDesktop;
                    return [2 /*return*/, CgDesktop];
                case 449: return [4 /*yield*/, import("react-icons/cg")];
                case 450:
                    CgDetailsLess = (_b.sent()).CgDetailsLess;
                    return [2 /*return*/, CgDetailsLess];
                case 451: return [4 /*yield*/, import("react-icons/cg")];
                case 452:
                    CgDetailsMore = (_b.sent()).CgDetailsMore;
                    return [2 /*return*/, CgDetailsMore];
                case 453: return [4 /*yield*/, import("react-icons/cg")];
                case 454:
                    CgDialpad = (_b.sent()).CgDialpad;
                    return [2 /*return*/, CgDialpad];
                case 455: return [4 /*yield*/, import("react-icons/cg")];
                case 456:
                    CgDice1 = (_b.sent()).CgDice1;
                    return [2 /*return*/, CgDice1];
                case 457: return [4 /*yield*/, import("react-icons/cg")];
                case 458:
                    CgDice2 = (_b.sent()).CgDice2;
                    return [2 /*return*/, CgDice2];
                case 459: return [4 /*yield*/, import("react-icons/cg")];
                case 460:
                    CgDice3 = (_b.sent()).CgDice3;
                    return [2 /*return*/, CgDice3];
                case 461: return [4 /*yield*/, import("react-icons/cg")];
                case 462:
                    CgDice4 = (_b.sent()).CgDice4;
                    return [2 /*return*/, CgDice4];
                case 463: return [4 /*yield*/, import("react-icons/cg")];
                case 464:
                    CgDice5 = (_b.sent()).CgDice5;
                    return [2 /*return*/, CgDice5];
                case 465: return [4 /*yield*/, import("react-icons/cg")];
                case 466:
                    CgDice6 = (_b.sent()).CgDice6;
                    return [2 /*return*/, CgDice6];
                case 467: return [4 /*yield*/, import("react-icons/cg")];
                case 468:
                    CgDigitalocean = (_b.sent()).CgDigitalocean;
                    return [2 /*return*/, CgDigitalocean];
                case 469: return [4 /*yield*/, import("react-icons/cg")];
                case 470:
                    CgDisc = (_b.sent()).CgDisc;
                    return [2 /*return*/, CgDisc];
                case 471: return [4 /*yield*/, import("react-icons/cg")];
                case 472:
                    CgDisplayFlex = (_b.sent()).CgDisplayFlex;
                    return [2 /*return*/, CgDisplayFlex];
                case 473: return [4 /*yield*/, import("react-icons/cg")];
                case 474:
                    CgDisplayFullwidth = (_b.sent()).CgDisplayFullwidth;
                    return [2 /*return*/, CgDisplayFullwidth];
                case 475: return [4 /*yield*/, import("react-icons/cg")];
                case 476:
                    CgDisplayGrid = (_b.sent()).CgDisplayGrid;
                    return [2 /*return*/, CgDisplayGrid];
                case 477: return [4 /*yield*/, import("react-icons/cg")];
                case 478:
                    CgDisplaySpacing = (_b.sent()).CgDisplaySpacing;
                    return [2 /*return*/, CgDisplaySpacing];
                case 479: return [4 /*yield*/, import("react-icons/cg")];
                case 480:
                    CgDistributeHorizontal = (_b.sent()).CgDistributeHorizontal;
                    return [2 /*return*/, CgDistributeHorizontal];
                case 481: return [4 /*yield*/, import("react-icons/cg")];
                case 482:
                    CgDistributeVertical = (_b.sent()).CgDistributeVertical;
                    return [2 /*return*/, CgDistributeVertical];
                case 483: return [4 /*yield*/, import("react-icons/cg")];
                case 484:
                    CgDockBottom = (_b.sent()).CgDockBottom;
                    return [2 /*return*/, CgDockBottom];
                case 485: return [4 /*yield*/, import("react-icons/cg")];
                case 486:
                    CgDockLeft = (_b.sent()).CgDockLeft;
                    return [2 /*return*/, CgDockLeft];
                case 487: return [4 /*yield*/, import("react-icons/cg")];
                case 488:
                    CgDockRight = (_b.sent()).CgDockRight;
                    return [2 /*return*/, CgDockRight];
                case 489: return [4 /*yield*/, import("react-icons/cg")];
                case 490:
                    CgDockWindow = (_b.sent()).CgDockWindow;
                    return [2 /*return*/, CgDockWindow];
                case 491: return [4 /*yield*/, import("react-icons/cg")];
                case 492:
                    CgDolby = (_b.sent()).CgDolby;
                    return [2 /*return*/, CgDolby];
                case 493: return [4 /*yield*/, import("react-icons/cg")];
                case 494:
                    CgDollar = (_b.sent()).CgDollar;
                    return [2 /*return*/, CgDollar];
                case 495: return [4 /*yield*/, import("react-icons/cg")];
                case 496:
                    CgDribbble = (_b.sent()).CgDribbble;
                    return [2 /*return*/, CgDribbble];
                case 497: return [4 /*yield*/, import("react-icons/cg")];
                case 498:
                    CgDrive = (_b.sent()).CgDrive;
                    return [2 /*return*/, CgDrive];
                case 499: return [4 /*yield*/, import("react-icons/cg")];
                case 500:
                    CgDropInvert = (_b.sent()).CgDropInvert;
                    return [2 /*return*/, CgDropInvert];
                case 501: return [4 /*yield*/, import("react-icons/cg")];
                case 502:
                    CgDropOpacity = (_b.sent()).CgDropOpacity;
                    return [2 /*return*/, CgDropOpacity];
                case 503: return [4 /*yield*/, import("react-icons/cg")];
                case 504:
                    CgDrop = (_b.sent()).CgDrop;
                    return [2 /*return*/, CgDrop];
                case 505: return [4 /*yield*/, import("react-icons/cg")];
                case 506:
                    CgDuplicate = (_b.sent()).CgDuplicate;
                    return [2 /*return*/, CgDuplicate];
                case 507: return [4 /*yield*/, import("react-icons/cg")];
                case 508:
                    CgEditBlackPoint = (_b.sent()).CgEditBlackPoint;
                    return [2 /*return*/, CgEditBlackPoint];
                case 509: return [4 /*yield*/, import("react-icons/cg")];
                case 510:
                    CgEditContrast = (_b.sent()).CgEditContrast;
                    return [2 /*return*/, CgEditContrast];
                case 511: return [4 /*yield*/, import("react-icons/cg")];
                case 512:
                    CgEditExposure = (_b.sent()).CgEditExposure;
                    return [2 /*return*/, CgEditExposure];
                case 513: return [4 /*yield*/, import("react-icons/cg")];
                case 514:
                    CgEditFade = (_b.sent()).CgEditFade;
                    return [2 /*return*/, CgEditFade];
                case 515: return [4 /*yield*/, import("react-icons/cg")];
                case 516:
                    CgEditFlipH = (_b.sent()).CgEditFlipH;
                    return [2 /*return*/, CgEditFlipH];
                case 517: return [4 /*yield*/, import("react-icons/cg")];
                case 518:
                    CgEditFlipV = (_b.sent()).CgEditFlipV;
                    return [2 /*return*/, CgEditFlipV];
                case 519: return [4 /*yield*/, import("react-icons/cg")];
                case 520:
                    CgEditHighlight = (_b.sent()).CgEditHighlight;
                    return [2 /*return*/, CgEditHighlight];
                case 521: return [4 /*yield*/, import("react-icons/cg")];
                case 522:
                    CgEditMarkup = (_b.sent()).CgEditMarkup;
                    return [2 /*return*/, CgEditMarkup];
                case 523: return [4 /*yield*/, import("react-icons/cg")];
                case 524:
                    CgEditMask = (_b.sent()).CgEditMask;
                    return [2 /*return*/, CgEditMask];
                case 525: return [4 /*yield*/, import("react-icons/cg")];
                case 526:
                    CgEditNoise = (_b.sent()).CgEditNoise;
                    return [2 /*return*/, CgEditNoise];
                case 527: return [4 /*yield*/, import("react-icons/cg")];
                case 528:
                    CgEditShadows = (_b.sent()).CgEditShadows;
                    return [2 /*return*/, CgEditShadows];
                case 529: return [4 /*yield*/, import("react-icons/cg")];
                case 530:
                    CgEditStraight = (_b.sent()).CgEditStraight;
                    return [2 /*return*/, CgEditStraight];
                case 531: return [4 /*yield*/, import("react-icons/cg")];
                case 532:
                    CgEditUnmask = (_b.sent()).CgEditUnmask;
                    return [2 /*return*/, CgEditUnmask];
                case 533: return [4 /*yield*/, import("react-icons/cg")];
                case 534:
                    CgEject = (_b.sent()).CgEject;
                    return [2 /*return*/, CgEject];
                case 535: return [4 /*yield*/, import("react-icons/cg")];
                case 536:
                    CgEnter = (_b.sent()).CgEnter;
                    return [2 /*return*/, CgEnter];
                case 537: return [4 /*yield*/, import("react-icons/cg")];
                case 538:
                    CgErase = (_b.sent()).CgErase;
                    return [2 /*return*/, CgErase];
                case 539: return [4 /*yield*/, import("react-icons/cg")];
                case 540:
                    CgEreader = (_b.sent()).CgEreader;
                    return [2 /*return*/, CgEreader];
                case 541: return [4 /*yield*/, import("react-icons/cg")];
                case 542:
                    CgEricsson = (_b.sent()).CgEricsson;
                    return [2 /*return*/, CgEricsson];
                case 543: return [4 /*yield*/, import("react-icons/cg")];
                case 544:
                    CgEthernet = (_b.sent()).CgEthernet;
                    return [2 /*return*/, CgEthernet];
                case 545: return [4 /*yield*/, import("react-icons/cg")];
                case 546:
                    CgEuro = (_b.sent()).CgEuro;
                    return [2 /*return*/, CgEuro];
                case 547: return [4 /*yield*/, import("react-icons/cg")];
                case 548:
                    CgEventbrite = (_b.sent()).CgEventbrite;
                    return [2 /*return*/, CgEventbrite];
                case 549: return [4 /*yield*/, import("react-icons/cg")];
                case 550:
                    CgExpand = (_b.sent()).CgExpand;
                    return [2 /*return*/, CgExpand];
                case 551: return [4 /*yield*/, import("react-icons/cg")];
                case 552:
                    CgExport = (_b.sent()).CgExport;
                    return [2 /*return*/, CgExport];
                case 553: return [4 /*yield*/, import("react-icons/cg")];
                case 554:
                    CgExtensionAdd = (_b.sent()).CgExtensionAdd;
                    return [2 /*return*/, CgExtensionAdd];
                case 555: return [4 /*yield*/, import("react-icons/cg")];
                case 556:
                    CgExtensionAlt = (_b.sent()).CgExtensionAlt;
                    return [2 /*return*/, CgExtensionAlt];
                case 557: return [4 /*yield*/, import("react-icons/cg")];
                case 558:
                    CgExtensionRemove = (_b.sent()).CgExtensionRemove;
                    return [2 /*return*/, CgExtensionRemove];
                case 559: return [4 /*yield*/, import("react-icons/cg")];
                case 560:
                    CgExtension = (_b.sent()).CgExtension;
                    return [2 /*return*/, CgExtension];
                case 561: return [4 /*yield*/, import("react-icons/cg")];
                case 562:
                    CgExternal = (_b.sent()).CgExternal;
                    return [2 /*return*/, CgExternal];
                case 563: return [4 /*yield*/, import("react-icons/cg")];
                case 564:
                    CgEyeAlt = (_b.sent()).CgEyeAlt;
                    return [2 /*return*/, CgEyeAlt];
                case 565: return [4 /*yield*/, import("react-icons/cg")];
                case 566:
                    CgEye = (_b.sent()).CgEye;
                    return [2 /*return*/, CgEye];
                case 567: return [4 /*yield*/, import("react-icons/cg")];
                case 568:
                    CgFacebook = (_b.sent()).CgFacebook;
                    return [2 /*return*/, CgFacebook];
                case 569: return [4 /*yield*/, import("react-icons/cg")];
                case 570:
                    CgFeed = (_b.sent()).CgFeed;
                    return [2 /*return*/, CgFeed];
                case 571: return [4 /*yield*/, import("react-icons/cg")];
                case 572:
                    CgFigma = (_b.sent()).CgFigma;
                    return [2 /*return*/, CgFigma];
                case 573: return [4 /*yield*/, import("react-icons/cg")];
                case 574:
                    CgFileAdd = (_b.sent()).CgFileAdd;
                    return [2 /*return*/, CgFileAdd];
                case 575: return [4 /*yield*/, import("react-icons/cg")];
                case 576:
                    CgFileDocument = (_b.sent()).CgFileDocument;
                    return [2 /*return*/, CgFileDocument];
                case 577: return [4 /*yield*/, import("react-icons/cg")];
                case 578:
                    CgFileRemove = (_b.sent()).CgFileRemove;
                    return [2 /*return*/, CgFileRemove];
                case 579: return [4 /*yield*/, import("react-icons/cg")];
                case 580:
                    CgFile = (_b.sent()).CgFile;
                    return [2 /*return*/, CgFile];
                case 581: return [4 /*yield*/, import("react-icons/cg")];
                case 582:
                    CgFilm = (_b.sent()).CgFilm;
                    return [2 /*return*/, CgFilm];
                case 583: return [4 /*yield*/, import("react-icons/cg")];
                case 584:
                    CgFilters = (_b.sent()).CgFilters;
                    return [2 /*return*/, CgFilters];
                case 585: return [4 /*yield*/, import("react-icons/cg")];
                case 586:
                    CgFlagAlt = (_b.sent()).CgFlagAlt;
                    return [2 /*return*/, CgFlagAlt];
                case 587: return [4 /*yield*/, import("react-icons/cg")];
                case 588:
                    CgFlag = (_b.sent()).CgFlag;
                    return [2 /*return*/, CgFlag];
                case 589: return [4 /*yield*/, import("react-icons/cg")];
                case 590:
                    CgFolderAdd = (_b.sent()).CgFolderAdd;
                    return [2 /*return*/, CgFolderAdd];
                case 591: return [4 /*yield*/, import("react-icons/cg")];
                case 592:
                    CgFolderRemove = (_b.sent()).CgFolderRemove;
                    return [2 /*return*/, CgFolderRemove];
                case 593: return [4 /*yield*/, import("react-icons/cg")];
                case 594:
                    CgFolder = (_b.sent()).CgFolder;
                    return [2 /*return*/, CgFolder];
                case 595: return [4 /*yield*/, import("react-icons/cg")];
                case 596:
                    CgFontHeight = (_b.sent()).CgFontHeight;
                    return [2 /*return*/, CgFontHeight];
                case 597: return [4 /*yield*/, import("react-icons/cg")];
                case 598:
                    CgFontSpacing = (_b.sent()).CgFontSpacing;
                    return [2 /*return*/, CgFontSpacing];
                case 599: return [4 /*yield*/, import("react-icons/cg")];
                case 600:
                    CgFormatBold = (_b.sent()).CgFormatBold;
                    return [2 /*return*/, CgFormatBold];
                case 601: return [4 /*yield*/, import("react-icons/cg")];
                case 602:
                    CgFormatCenter = (_b.sent()).CgFormatCenter;
                    return [2 /*return*/, CgFormatCenter];
                case 603: return [4 /*yield*/, import("react-icons/cg")];
                case 604:
                    CgFormatColor = (_b.sent()).CgFormatColor;
                    return [2 /*return*/, CgFormatColor];
                case 605: return [4 /*yield*/, import("react-icons/cg")];
                case 606:
                    CgFormatHeading = (_b.sent()).CgFormatHeading;
                    return [2 /*return*/, CgFormatHeading];
                case 607: return [4 /*yield*/, import("react-icons/cg")];
                case 608:
                    CgFormatIndentDecrease = (_b.sent()).CgFormatIndentDecrease;
                    return [2 /*return*/, CgFormatIndentDecrease];
                case 609: return [4 /*yield*/, import("react-icons/cg")];
                case 610:
                    CgFormatIndentIncrease = (_b.sent()).CgFormatIndentIncrease;
                    return [2 /*return*/, CgFormatIndentIncrease];
                case 611: return [4 /*yield*/, import("react-icons/cg")];
                case 612:
                    CgFormatItalic = (_b.sent()).CgFormatItalic;
                    return [2 /*return*/, CgFormatItalic];
                case 613: return [4 /*yield*/, import("react-icons/cg")];
                case 614:
                    CgFormatJustify = (_b.sent()).CgFormatJustify;
                    return [2 /*return*/, CgFormatJustify];
                case 615: return [4 /*yield*/, import("react-icons/cg")];
                case 616:
                    CgFormatLeft = (_b.sent()).CgFormatLeft;
                    return [2 /*return*/, CgFormatLeft];
                case 617: return [4 /*yield*/, import("react-icons/cg")];
                case 618:
                    CgFormatLineHeight = (_b.sent()).CgFormatLineHeight;
                    return [2 /*return*/, CgFormatLineHeight];
                case 619: return [4 /*yield*/, import("react-icons/cg")];
                case 620:
                    CgFormatRight = (_b.sent()).CgFormatRight;
                    return [2 /*return*/, CgFormatRight];
                case 621: return [4 /*yield*/, import("react-icons/cg")];
                case 622:
                    CgFormatSeparator = (_b.sent()).CgFormatSeparator;
                    return [2 /*return*/, CgFormatSeparator];
                case 623: return [4 /*yield*/, import("react-icons/cg")];
                case 624:
                    CgFormatSlash = (_b.sent()).CgFormatSlash;
                    return [2 /*return*/, CgFormatSlash];
                case 625: return [4 /*yield*/, import("react-icons/cg")];
                case 626:
                    CgFormatStrike = (_b.sent()).CgFormatStrike;
                    return [2 /*return*/, CgFormatStrike];
                case 627: return [4 /*yield*/, import("react-icons/cg")];
                case 628:
                    CgFormatText = (_b.sent()).CgFormatText;
                    return [2 /*return*/, CgFormatText];
                case 629: return [4 /*yield*/, import("react-icons/cg")];
                case 630:
                    CgFormatUnderline = (_b.sent()).CgFormatUnderline;
                    return [2 /*return*/, CgFormatUnderline];
                case 631: return [4 /*yield*/, import("react-icons/cg")];
                case 632:
                    CgFormatUppercase = (_b.sent()).CgFormatUppercase;
                    return [2 /*return*/, CgFormatUppercase];
                case 633: return [4 /*yield*/, import("react-icons/cg")];
                case 634:
                    CgFramer = (_b.sent()).CgFramer;
                    return [2 /*return*/, CgFramer];
                case 635: return [4 /*yield*/, import("react-icons/cg")];
                case 636:
                    CgGames = (_b.sent()).CgGames;
                    return [2 /*return*/, CgGames];
                case 637: return [4 /*yield*/, import("react-icons/cg")];
                case 638:
                    CgGenderFemale = (_b.sent()).CgGenderFemale;
                    return [2 /*return*/, CgGenderFemale];
                case 639: return [4 /*yield*/, import("react-icons/cg")];
                case 640:
                    CgGenderMale = (_b.sent()).CgGenderMale;
                    return [2 /*return*/, CgGenderMale];
                case 641: return [4 /*yield*/, import("react-icons/cg")];
                case 642:
                    CgGhostCharacter = (_b.sent()).CgGhostCharacter;
                    return [2 /*return*/, CgGhostCharacter];
                case 643: return [4 /*yield*/, import("react-icons/cg")];
                case 644:
                    CgGhost = (_b.sent()).CgGhost;
                    return [2 /*return*/, CgGhost];
                case 645: return [4 /*yield*/, import("react-icons/cg")];
                case 646:
                    CgGift = (_b.sent()).CgGift;
                    return [2 /*return*/, CgGift];
                case 647: return [4 /*yield*/, import("react-icons/cg")];
                case 648:
                    CgGirl = (_b.sent()).CgGirl;
                    return [2 /*return*/, CgGirl];
                case 649: return [4 /*yield*/, import("react-icons/cg")];
                case 650:
                    CgGitBranch = (_b.sent()).CgGitBranch;
                    return [2 /*return*/, CgGitBranch];
                case 651: return [4 /*yield*/, import("react-icons/cg")];
                case 652:
                    CgGitCommit = (_b.sent()).CgGitCommit;
                    return [2 /*return*/, CgGitCommit];
                case 653: return [4 /*yield*/, import("react-icons/cg")];
                case 654:
                    CgGitFork = (_b.sent()).CgGitFork;
                    return [2 /*return*/, CgGitFork];
                case 655: return [4 /*yield*/, import("react-icons/cg")];
                case 656:
                    CgGitPull = (_b.sent()).CgGitPull;
                    return [2 /*return*/, CgGitPull];
                case 657: return [4 /*yield*/, import("react-icons/cg")];
                case 658:
                    CgGitter = (_b.sent()).CgGitter;
                    return [2 /*return*/, CgGitter];
                case 659: return [4 /*yield*/, import("react-icons/cg")];
                case 660:
                    CgGlassAlt = (_b.sent()).CgGlassAlt;
                    return [2 /*return*/, CgGlassAlt];
                case 661: return [4 /*yield*/, import("react-icons/cg")];
                case 662:
                    CgGlass = (_b.sent()).CgGlass;
                    return [2 /*return*/, CgGlass];
                case 663: return [4 /*yield*/, import("react-icons/cg")];
                case 664:
                    CgGlobeAlt = (_b.sent()).CgGlobeAlt;
                    return [2 /*return*/, CgGlobeAlt];
                case 665: return [4 /*yield*/, import("react-icons/cg")];
                case 666:
                    CgGlobe = (_b.sent()).CgGlobe;
                    return [2 /*return*/, CgGlobe];
                case 667: return [4 /*yield*/, import("react-icons/cg")];
                case 668:
                    CgGoogleTasks = (_b.sent()).CgGoogleTasks;
                    return [2 /*return*/, CgGoogleTasks];
                case 669: return [4 /*yield*/, import("react-icons/cg")];
                case 670:
                    CgGoogle = (_b.sent()).CgGoogle;
                    return [2 /*return*/, CgGoogle];
                case 671: return [4 /*yield*/, import("react-icons/cg")];
                case 672:
                    CgGym = (_b.sent()).CgGym;
                    return [2 /*return*/, CgGym];
                case 673: return [4 /*yield*/, import("react-icons/cg")];
                case 674:
                    CgHashtag = (_b.sent()).CgHashtag;
                    return [2 /*return*/, CgHashtag];
                case 675: return [4 /*yield*/, import("react-icons/cg")];
                case 676:
                    CgHeadset = (_b.sent()).CgHeadset;
                    return [2 /*return*/, CgHeadset];
                case 677: return [4 /*yield*/, import("react-icons/cg")];
                case 678:
                    CgHeart = (_b.sent()).CgHeart;
                    return [2 /*return*/, CgHeart];
                case 679: return [4 /*yield*/, import("react-icons/cg")];
                case 680:
                    CgHello = (_b.sent()).CgHello;
                    return [2 /*return*/, CgHello];
                case 681: return [4 /*yield*/, import("react-icons/cg")];
                case 682:
                    CgHomeAlt = (_b.sent()).CgHomeAlt;
                    return [2 /*return*/, CgHomeAlt];
                case 683: return [4 /*yield*/, import("react-icons/cg")];
                case 684:
                    CgHomeScreen = (_b.sent()).CgHomeScreen;
                    return [2 /*return*/, CgHomeScreen];
                case 685: return [4 /*yield*/, import("react-icons/cg")];
                case 686:
                    CgHome = (_b.sent()).CgHome;
                    return [2 /*return*/, CgHome];
                case 687: return [4 /*yield*/, import("react-icons/cg")];
                case 688:
                    CgIcecream = (_b.sent()).CgIcecream;
                    return [2 /*return*/, CgIcecream];
                case 689: return [4 /*yield*/, import("react-icons/cg")];
                case 690:
                    CgIfDesign = (_b.sent()).CgIfDesign;
                    return [2 /*return*/, CgIfDesign];
                case 691: return [4 /*yield*/, import("react-icons/cg")];
                case 692:
                    CgImage = (_b.sent()).CgImage;
                    return [2 /*return*/, CgImage];
                case 693: return [4 /*yield*/, import("react-icons/cg")];
                case 694:
                    CgImport = (_b.sent()).CgImport;
                    return [2 /*return*/, CgImport];
                case 695: return [4 /*yield*/, import("react-icons/cg")];
                case 696:
                    CgInbox = (_b.sent()).CgInbox;
                    return [2 /*return*/, CgInbox];
                case 697: return [4 /*yield*/, import("react-icons/cg")];
                case 698:
                    CgIndieHackers = (_b.sent()).CgIndieHackers;
                    return [2 /*return*/, CgIndieHackers];
                case 699: return [4 /*yield*/, import("react-icons/cg")];
                case 700:
                    CgInfinity = (_b.sent()).CgInfinity;
                    return [2 /*return*/, CgInfinity];
                case 701: return [4 /*yield*/, import("react-icons/cg")];
                case 702:
                    CgInfo = (_b.sent()).CgInfo;
                    return [2 /*return*/, CgInfo];
                case 703: return [4 /*yield*/, import("react-icons/cg")];
                case 704:
                    CgInpicture = (_b.sent()).CgInpicture;
                    return [2 /*return*/, CgInpicture];
                case 705: return [4 /*yield*/, import("react-icons/cg")];
                case 706:
                    CgInsertAfterO = (_b.sent()).CgInsertAfterO;
                    return [2 /*return*/, CgInsertAfterO];
                case 707: return [4 /*yield*/, import("react-icons/cg")];
                case 708:
                    CgInsertAfterR = (_b.sent()).CgInsertAfterR;
                    return [2 /*return*/, CgInsertAfterR];
                case 709: return [4 /*yield*/, import("react-icons/cg")];
                case 710:
                    CgInsertAfter = (_b.sent()).CgInsertAfter;
                    return [2 /*return*/, CgInsertAfter];
                case 711: return [4 /*yield*/, import("react-icons/cg")];
                case 712:
                    CgInsertBeforeO = (_b.sent()).CgInsertBeforeO;
                    return [2 /*return*/, CgInsertBeforeO];
                case 713: return [4 /*yield*/, import("react-icons/cg")];
                case 714:
                    CgInsertBeforeR = (_b.sent()).CgInsertBeforeR;
                    return [2 /*return*/, CgInsertBeforeR];
                case 715: return [4 /*yield*/, import("react-icons/cg")];
                case 716:
                    CgInsertBefore = (_b.sent()).CgInsertBefore;
                    return [2 /*return*/, CgInsertBefore];
                case 717: return [4 /*yield*/, import("react-icons/cg")];
                case 718:
                    CgInsights = (_b.sent()).CgInsights;
                    return [2 /*return*/, CgInsights];
                case 719: return [4 /*yield*/, import("react-icons/cg")];
                case 720:
                    CgInstagram = (_b.sent()).CgInstagram;
                    return [2 /*return*/, CgInstagram];
                case 721: return [4 /*yield*/, import("react-icons/cg")];
                case 722:
                    CgInternal = (_b.sent()).CgInternal;
                    return [2 /*return*/, CgInternal];
                case 723: return [4 /*yield*/, import("react-icons/cg")];
                case 724:
                    CgKey = (_b.sent()).CgKey;
                    return [2 /*return*/, CgKey];
                case 725: return [4 /*yield*/, import("react-icons/cg")];
                case 726:
                    CgKeyboard = (_b.sent()).CgKeyboard;
                    return [2 /*return*/, CgKeyboard];
                case 727: return [4 /*yield*/, import("react-icons/cg")];
                case 728:
                    CgKeyhole = (_b.sent()).CgKeyhole;
                    return [2 /*return*/, CgKeyhole];
                case 729: return [4 /*yield*/, import("react-icons/cg")];
                case 730:
                    CgLaptop = (_b.sent()).CgLaptop;
                    return [2 /*return*/, CgLaptop];
                case 731: return [4 /*yield*/, import("react-icons/cg")];
                case 732:
                    CgLastpass = (_b.sent()).CgLastpass;
                    return [2 /*return*/, CgLastpass];
                case 733: return [4 /*yield*/, import("react-icons/cg")];
                case 734:
                    CgLayoutGridSmall = (_b.sent()).CgLayoutGridSmall;
                    return [2 /*return*/, CgLayoutGridSmall];
                case 735: return [4 /*yield*/, import("react-icons/cg")];
                case 736:
                    CgLayoutGrid = (_b.sent()).CgLayoutGrid;
                    return [2 /*return*/, CgLayoutGrid];
                case 737: return [4 /*yield*/, import("react-icons/cg")];
                case 738:
                    CgLayoutList = (_b.sent()).CgLayoutList;
                    return [2 /*return*/, CgLayoutList];
                case 739: return [4 /*yield*/, import("react-icons/cg")];
                case 740:
                    CgLayoutPin = (_b.sent()).CgLayoutPin;
                    return [2 /*return*/, CgLayoutPin];
                case 741: return [4 /*yield*/, import("react-icons/cg")];
                case 742:
                    CgLinear = (_b.sent()).CgLinear;
                    return [2 /*return*/, CgLinear];
                case 743: return [4 /*yield*/, import("react-icons/cg")];
                case 744:
                    CgLink = (_b.sent()).CgLink;
                    return [2 /*return*/, CgLink];
                case 745: return [4 /*yield*/, import("react-icons/cg")];
                case 746:
                    CgListTree = (_b.sent()).CgListTree;
                    return [2 /*return*/, CgListTree];
                case 747: return [4 /*yield*/, import("react-icons/cg")];
                case 748:
                    CgList = (_b.sent()).CgList;
                    return [2 /*return*/, CgList];
                case 749: return [4 /*yield*/, import("react-icons/cg")];
                case 750:
                    CgLivePhoto = (_b.sent()).CgLivePhoto;
                    return [2 /*return*/, CgLivePhoto];
                case 751: return [4 /*yield*/, import("react-icons/cg")];
                case 752:
                    CgLoadbarAlt = (_b.sent()).CgLoadbarAlt;
                    return [2 /*return*/, CgLoadbarAlt];
                case 753: return [4 /*yield*/, import("react-icons/cg")];
                case 754:
                    CgLoadbarDoc = (_b.sent()).CgLoadbarDoc;
                    return [2 /*return*/, CgLoadbarDoc];
                case 755: return [4 /*yield*/, import("react-icons/cg")];
                case 756:
                    CgLoadbarSound = (_b.sent()).CgLoadbarSound;
                    return [2 /*return*/, CgLoadbarSound];
                case 757: return [4 /*yield*/, import("react-icons/cg")];
                case 758:
                    CgLoadbar = (_b.sent()).CgLoadbar;
                    return [2 /*return*/, CgLoadbar];
                case 759: return [4 /*yield*/, import("react-icons/cg")];
                case 760:
                    CgLockUnlock = (_b.sent()).CgLockUnlock;
                    return [2 /*return*/, CgLockUnlock];
                case 761: return [4 /*yield*/, import("react-icons/cg")];
                case 762:
                    CgLock = (_b.sent()).CgLock;
                    return [2 /*return*/, CgLock];
                case 763: return [4 /*yield*/, import("react-icons/cg")];
                case 764:
                    CgLogIn = (_b.sent()).CgLogIn;
                    return [2 /*return*/, CgLogIn];
                case 765: return [4 /*yield*/, import("react-icons/cg")];
                case 766:
                    CgLogOff = (_b.sent()).CgLogOff;
                    return [2 /*return*/, CgLogOff];
                case 767: return [4 /*yield*/, import("react-icons/cg")];
                case 768:
                    CgLogOut = (_b.sent()).CgLogOut;
                    return [2 /*return*/, CgLogOut];
                case 769: return [4 /*yield*/, import("react-icons/cg")];
                case 770:
                    CgLoupe = (_b.sent()).CgLoupe;
                    return [2 /*return*/, CgLoupe];
                case 771: return [4 /*yield*/, import("react-icons/cg")];
                case 772:
                    CgMagnet = (_b.sent()).CgMagnet;
                    return [2 /*return*/, CgMagnet];
                case 773: return [4 /*yield*/, import("react-icons/cg")];
                case 774:
                    CgMailForward = (_b.sent()).CgMailForward;
                    return [2 /*return*/, CgMailForward];
                case 775: return [4 /*yield*/, import("react-icons/cg")];
                case 776:
                    CgMailOpen = (_b.sent()).CgMailOpen;
                    return [2 /*return*/, CgMailOpen];
                case 777: return [4 /*yield*/, import("react-icons/cg")];
                case 778:
                    CgMailReply = (_b.sent()).CgMailReply;
                    return [2 /*return*/, CgMailReply];
                case 779: return [4 /*yield*/, import("react-icons/cg")];
                case 780:
                    CgMail = (_b.sent()).CgMail;
                    return [2 /*return*/, CgMail];
                case 781: return [4 /*yield*/, import("react-icons/cg")];
                case 782:
                    CgMathDivide = (_b.sent()).CgMathDivide;
                    return [2 /*return*/, CgMathDivide];
                case 783: return [4 /*yield*/, import("react-icons/cg")];
                case 784:
                    CgMathEqual = (_b.sent()).CgMathEqual;
                    return [2 /*return*/, CgMathEqual];
                case 785: return [4 /*yield*/, import("react-icons/cg")];
                case 786:
                    CgMathMinus = (_b.sent()).CgMathMinus;
                    return [2 /*return*/, CgMathMinus];
                case 787: return [4 /*yield*/, import("react-icons/cg")];
                case 788:
                    CgMathPercent = (_b.sent()).CgMathPercent;
                    return [2 /*return*/, CgMathPercent];
                case 789: return [4 /*yield*/, import("react-icons/cg")];
                case 790:
                    CgMathPlus = (_b.sent()).CgMathPlus;
                    return [2 /*return*/, CgMathPlus];
                case 791: return [4 /*yield*/, import("react-icons/cg")];
                case 792:
                    CgMaximizeAlt = (_b.sent()).CgMaximizeAlt;
                    return [2 /*return*/, CgMaximizeAlt];
                case 793: return [4 /*yield*/, import("react-icons/cg")];
                case 794:
                    CgMaximize = (_b.sent()).CgMaximize;
                    return [2 /*return*/, CgMaximize];
                case 795: return [4 /*yield*/, import("react-icons/cg")];
                case 796:
                    CgMaze = (_b.sent()).CgMaze;
                    return [2 /*return*/, CgMaze];
                case 797: return [4 /*yield*/, import("react-icons/cg")];
                case 798:
                    CgMediaLive = (_b.sent()).CgMediaLive;
                    return [2 /*return*/, CgMediaLive];
                case 799: return [4 /*yield*/, import("react-icons/cg")];
                case 800:
                    CgMediaPodcast = (_b.sent()).CgMediaPodcast;
                    return [2 /*return*/, CgMediaPodcast];
                case 801: return [4 /*yield*/, import("react-icons/cg")];
                case 802:
                    CgMenuBoxed = (_b.sent()).CgMenuBoxed;
                    return [2 /*return*/, CgMenuBoxed];
                case 803: return [4 /*yield*/, import("react-icons/cg")];
                case 804:
                    CgMenuCake = (_b.sent()).CgMenuCake;
                    return [2 /*return*/, CgMenuCake];
                case 805: return [4 /*yield*/, import("react-icons/cg")];
                case 806:
                    CgMenuCheese = (_b.sent()).CgMenuCheese;
                    return [2 /*return*/, CgMenuCheese];
                case 807: return [4 /*yield*/, import("react-icons/cg")];
                case 808:
                    CgMenuGridO = (_b.sent()).CgMenuGridO;
                    return [2 /*return*/, CgMenuGridO];
                case 809: return [4 /*yield*/, import("react-icons/cg")];
                case 810:
                    CgMenuGridR = (_b.sent()).CgMenuGridR;
                    return [2 /*return*/, CgMenuGridR];
                case 811: return [4 /*yield*/, import("react-icons/cg")];
                case 812:
                    CgMenuHotdog = (_b.sent()).CgMenuHotdog;
                    return [2 /*return*/, CgMenuHotdog];
                case 813: return [4 /*yield*/, import("react-icons/cg")];
                case 814:
                    CgMenuLeftAlt = (_b.sent()).CgMenuLeftAlt;
                    return [2 /*return*/, CgMenuLeftAlt];
                case 815: return [4 /*yield*/, import("react-icons/cg")];
                case 816:
                    CgMenuLeft = (_b.sent()).CgMenuLeft;
                    return [2 /*return*/, CgMenuLeft];
                case 817: return [4 /*yield*/, import("react-icons/cg")];
                case 818:
                    CgMenuMotion = (_b.sent()).CgMenuMotion;
                    return [2 /*return*/, CgMenuMotion];
                case 819: return [4 /*yield*/, import("react-icons/cg")];
                case 820:
                    CgMenuOreos = (_b.sent()).CgMenuOreos;
                    return [2 /*return*/, CgMenuOreos];
                case 821: return [4 /*yield*/, import("react-icons/cg")];
                case 822:
                    CgMenuRightAlt = (_b.sent()).CgMenuRightAlt;
                    return [2 /*return*/, CgMenuRightAlt];
                case 823: return [4 /*yield*/, import("react-icons/cg")];
                case 824:
                    CgMenuRight = (_b.sent()).CgMenuRight;
                    return [2 /*return*/, CgMenuRight];
                case 825: return [4 /*yield*/, import("react-icons/cg")];
                case 826:
                    CgMenuRound = (_b.sent()).CgMenuRound;
                    return [2 /*return*/, CgMenuRound];
                case 827: return [4 /*yield*/, import("react-icons/cg")];
                case 828:
                    CgMenu = (_b.sent()).CgMenu;
                    return [2 /*return*/, CgMenu];
                case 829: return [4 /*yield*/, import("react-icons/cg")];
                case 830:
                    CgMergeHorizontal = (_b.sent()).CgMergeHorizontal;
                    return [2 /*return*/, CgMergeHorizontal];
                case 831: return [4 /*yield*/, import("react-icons/cg")];
                case 832:
                    CgMergeVertical = (_b.sent()).CgMergeVertical;
                    return [2 /*return*/, CgMergeVertical];
                case 833: return [4 /*yield*/, import("react-icons/cg")];
                case 834:
                    CgMic = (_b.sent()).CgMic;
                    return [2 /*return*/, CgMic];
                case 835: return [4 /*yield*/, import("react-icons/cg")];
                case 836:
                    CgMicrobit = (_b.sent()).CgMicrobit;
                    return [2 /*return*/, CgMicrobit];
                case 837: return [4 /*yield*/, import("react-icons/cg")];
                case 838:
                    CgMicrosoft = (_b.sent()).CgMicrosoft;
                    return [2 /*return*/, CgMicrosoft];
                case 839: return [4 /*yield*/, import("react-icons/cg")];
                case 840:
                    CgMiniPlayer = (_b.sent()).CgMiniPlayer;
                    return [2 /*return*/, CgMiniPlayer];
                case 841: return [4 /*yield*/, import("react-icons/cg")];
                case 842:
                    CgMinimizeAlt = (_b.sent()).CgMinimizeAlt;
                    return [2 /*return*/, CgMinimizeAlt];
                case 843: return [4 /*yield*/, import("react-icons/cg")];
                case 844:
                    CgMinimize = (_b.sent()).CgMinimize;
                    return [2 /*return*/, CgMinimize];
                case 845: return [4 /*yield*/, import("react-icons/cg")];
                case 846:
                    CgModem = (_b.sent()).CgModem;
                    return [2 /*return*/, CgModem];
                case 847: return [4 /*yield*/, import("react-icons/cg")];
                case 848:
                    CgMonday = (_b.sent()).CgMonday;
                    return [2 /*return*/, CgMonday];
                case 849: return [4 /*yield*/, import("react-icons/cg")];
                case 850:
                    CgMoon = (_b.sent()).CgMoon;
                    return [2 /*return*/, CgMoon];
                case 851: return [4 /*yield*/, import("react-icons/cg")];
                case 852:
                    CgMoreAlt = (_b.sent()).CgMoreAlt;
                    return [2 /*return*/, CgMoreAlt];
                case 853: return [4 /*yield*/, import("react-icons/cg")];
                case 854:
                    CgMoreO = (_b.sent()).CgMoreO;
                    return [2 /*return*/, CgMoreO];
                case 855: return [4 /*yield*/, import("react-icons/cg")];
                case 856:
                    CgMoreR = (_b.sent()).CgMoreR;
                    return [2 /*return*/, CgMoreR];
                case 857: return [4 /*yield*/, import("react-icons/cg")];
                case 858:
                    CgMoreVerticalAlt = (_b.sent()).CgMoreVerticalAlt;
                    return [2 /*return*/, CgMoreVerticalAlt];
                case 859: return [4 /*yield*/, import("react-icons/cg")];
                case 860:
                    CgMoreVerticalO = (_b.sent()).CgMoreVerticalO;
                    return [2 /*return*/, CgMoreVerticalO];
                case 861: return [4 /*yield*/, import("react-icons/cg")];
                case 862:
                    CgMoreVerticalR = (_b.sent()).CgMoreVerticalR;
                    return [2 /*return*/, CgMoreVerticalR];
                case 863: return [4 /*yield*/, import("react-icons/cg")];
                case 864:
                    CgMoreVertical = (_b.sent()).CgMoreVertical;
                    return [2 /*return*/, CgMoreVertical];
                case 865: return [4 /*yield*/, import("react-icons/cg")];
                case 866:
                    CgMore = (_b.sent()).CgMore;
                    return [2 /*return*/, CgMore];
                case 867: return [4 /*yield*/, import("react-icons/cg")];
                case 868:
                    CgMouse = (_b.sent()).CgMouse;
                    return [2 /*return*/, CgMouse];
                case 869: return [4 /*yield*/, import("react-icons/cg")];
                case 870:
                    CgMoveDown = (_b.sent()).CgMoveDown;
                    return [2 /*return*/, CgMoveDown];
                case 871: return [4 /*yield*/, import("react-icons/cg")];
                case 872:
                    CgMoveLeft = (_b.sent()).CgMoveLeft;
                    return [2 /*return*/, CgMoveLeft];
                case 873: return [4 /*yield*/, import("react-icons/cg")];
                case 874:
                    CgMoveRight = (_b.sent()).CgMoveRight;
                    return [2 /*return*/, CgMoveRight];
                case 875: return [4 /*yield*/, import("react-icons/cg")];
                case 876:
                    CgMoveTask = (_b.sent()).CgMoveTask;
                    return [2 /*return*/, CgMoveTask];
                case 877: return [4 /*yield*/, import("react-icons/cg")];
                case 878:
                    CgMoveUp = (_b.sent()).CgMoveUp;
                    return [2 /*return*/, CgMoveUp];
                case 879: return [4 /*yield*/, import("react-icons/cg")];
                case 880:
                    CgMusicNote = (_b.sent()).CgMusicNote;
                    return [2 /*return*/, CgMusicNote];
                case 881: return [4 /*yield*/, import("react-icons/cg")];
                case 882:
                    CgMusicSpeaker = (_b.sent()).CgMusicSpeaker;
                    return [2 /*return*/, CgMusicSpeaker];
                case 883: return [4 /*yield*/, import("react-icons/cg")];
                case 884:
                    CgMusic = (_b.sent()).CgMusic;
                    return [2 /*return*/, CgMusic];
                case 885: return [4 /*yield*/, import("react-icons/cg")];
                case 886:
                    CgNametag = (_b.sent()).CgNametag;
                    return [2 /*return*/, CgNametag];
                case 887: return [4 /*yield*/, import("react-icons/cg")];
                case 888:
                    CgNotes = (_b.sent()).CgNotes;
                    return [2 /*return*/, CgNotes];
                case 889: return [4 /*yield*/, import("react-icons/cg")];
                case 890:
                    CgNotifications = (_b.sent()).CgNotifications;
                    return [2 /*return*/, CgNotifications];
                case 891: return [4 /*yield*/, import("react-icons/cg")];
                case 892:
                    CgNpm = (_b.sent()).CgNpm;
                    return [2 /*return*/, CgNpm];
                case 893: return [4 /*yield*/, import("react-icons/cg")];
                case 894:
                    CgOculus = (_b.sent()).CgOculus;
                    return [2 /*return*/, CgOculus];
                case 895: return [4 /*yield*/, import("react-icons/cg")];
                case 896:
                    CgOpenCollective = (_b.sent()).CgOpenCollective;
                    return [2 /*return*/, CgOpenCollective];
                case 897: return [4 /*yield*/, import("react-icons/cg")];
                case 898:
                    CgOptions = (_b.sent()).CgOptions;
                    return [2 /*return*/, CgOptions];
                case 899: return [4 /*yield*/, import("react-icons/cg")];
                case 900:
                    CgOrganisation = (_b.sent()).CgOrganisation;
                    return [2 /*return*/, CgOrganisation];
                case 901: return [4 /*yield*/, import("react-icons/cg")];
                case 902:
                    CgOverflow = (_b.sent()).CgOverflow;
                    return [2 /*return*/, CgOverflow];
                case 903: return [4 /*yield*/, import("react-icons/cg")];
                case 904:
                    CgPacman = (_b.sent()).CgPacman;
                    return [2 /*return*/, CgPacman];
                case 905: return [4 /*yield*/, import("react-icons/cg")];
                case 906:
                    CgPassword = (_b.sent()).CgPassword;
                    return [2 /*return*/, CgPassword];
                case 907: return [4 /*yield*/, import("react-icons/cg")];
                case 908:
                    CgPathBack = (_b.sent()).CgPathBack;
                    return [2 /*return*/, CgPathBack];
                case 909: return [4 /*yield*/, import("react-icons/cg")];
                case 910:
                    CgPathCrop = (_b.sent()).CgPathCrop;
                    return [2 /*return*/, CgPathCrop];
                case 911: return [4 /*yield*/, import("react-icons/cg")];
                case 912:
                    CgPathDivide = (_b.sent()).CgPathDivide;
                    return [2 /*return*/, CgPathDivide];
                case 913: return [4 /*yield*/, import("react-icons/cg")];
                case 914:
                    CgPathExclude = (_b.sent()).CgPathExclude;
                    return [2 /*return*/, CgPathExclude];
                case 915: return [4 /*yield*/, import("react-icons/cg")];
                case 916:
                    CgPathFront = (_b.sent()).CgPathFront;
                    return [2 /*return*/, CgPathFront];
                case 917: return [4 /*yield*/, import("react-icons/cg")];
                case 918:
                    CgPathIntersect = (_b.sent()).CgPathIntersect;
                    return [2 /*return*/, CgPathIntersect];
                case 919: return [4 /*yield*/, import("react-icons/cg")];
                case 920:
                    CgPathOutline = (_b.sent()).CgPathOutline;
                    return [2 /*return*/, CgPathOutline];
                case 921: return [4 /*yield*/, import("react-icons/cg")];
                case 922:
                    CgPathTrim = (_b.sent()).CgPathTrim;
                    return [2 /*return*/, CgPathTrim];
                case 923: return [4 /*yield*/, import("react-icons/cg")];
                case 924:
                    CgPathUnite = (_b.sent()).CgPathUnite;
                    return [2 /*return*/, CgPathUnite];
                case 925: return [4 /*yield*/, import("react-icons/cg")];
                case 926:
                    CgPatreon = (_b.sent()).CgPatreon;
                    return [2 /*return*/, CgPatreon];
                case 927: return [4 /*yield*/, import("react-icons/cg")];
                case 928:
                    CgPaypal = (_b.sent()).CgPaypal;
                    return [2 /*return*/, CgPaypal];
                case 929: return [4 /*yield*/, import("react-icons/cg")];
                case 930:
                    CgPen = (_b.sent()).CgPen;
                    return [2 /*return*/, CgPen];
                case 931: return [4 /*yield*/, import("react-icons/cg")];
                case 932:
                    CgPentagonBottomLeft = (_b.sent()).CgPentagonBottomLeft;
                    return [2 /*return*/, CgPentagonBottomLeft];
                case 933: return [4 /*yield*/, import("react-icons/cg")];
                case 934:
                    CgPentagonBottomRight = (_b.sent()).CgPentagonBottomRight;
                    return [2 /*return*/, CgPentagonBottomRight];
                case 935: return [4 /*yield*/, import("react-icons/cg")];
                case 936:
                    CgPentagonDown = (_b.sent()).CgPentagonDown;
                    return [2 /*return*/, CgPentagonDown];
                case 937: return [4 /*yield*/, import("react-icons/cg")];
                case 938:
                    CgPentagonLeft = (_b.sent()).CgPentagonLeft;
                    return [2 /*return*/, CgPentagonLeft];
                case 939: return [4 /*yield*/, import("react-icons/cg")];
                case 940:
                    CgPentagonRight = (_b.sent()).CgPentagonRight;
                    return [2 /*return*/, CgPentagonRight];
                case 941: return [4 /*yield*/, import("react-icons/cg")];
                case 942:
                    CgPentagonTopLeft = (_b.sent()).CgPentagonTopLeft;
                    return [2 /*return*/, CgPentagonTopLeft];
                case 943: return [4 /*yield*/, import("react-icons/cg")];
                case 944:
                    CgPentagonTopRight = (_b.sent()).CgPentagonTopRight;
                    return [2 /*return*/, CgPentagonTopRight];
                case 945: return [4 /*yield*/, import("react-icons/cg")];
                case 946:
                    CgPentagonUp = (_b.sent()).CgPentagonUp;
                    return [2 /*return*/, CgPentagonUp];
                case 947: return [4 /*yield*/, import("react-icons/cg")];
                case 948:
                    CgPerformance = (_b.sent()).CgPerformance;
                    return [2 /*return*/, CgPerformance];
                case 949: return [4 /*yield*/, import("react-icons/cg")];
                case 950:
                    CgPexels = (_b.sent()).CgPexels;
                    return [2 /*return*/, CgPexels];
                case 951: return [4 /*yield*/, import("react-icons/cg")];
                case 952:
                    CgPhone = (_b.sent()).CgPhone;
                    return [2 /*return*/, CgPhone];
                case 953: return [4 /*yield*/, import("react-icons/cg")];
                case 954:
                    CgPhotoscan = (_b.sent()).CgPhotoscan;
                    return [2 /*return*/, CgPhotoscan];
                case 955: return [4 /*yield*/, import("react-icons/cg")];
                case 956:
                    CgPiano = (_b.sent()).CgPiano;
                    return [2 /*return*/, CgPiano];
                case 957: return [4 /*yield*/, import("react-icons/cg")];
                case 958:
                    CgPill = (_b.sent()).CgPill;
                    return [2 /*return*/, CgPill];
                case 959: return [4 /*yield*/, import("react-icons/cg")];
                case 960:
                    CgPinAlt = (_b.sent()).CgPinAlt;
                    return [2 /*return*/, CgPinAlt];
                case 961: return [4 /*yield*/, import("react-icons/cg")];
                case 962:
                    CgPinBottom = (_b.sent()).CgPinBottom;
                    return [2 /*return*/, CgPinBottom];
                case 963: return [4 /*yield*/, import("react-icons/cg")];
                case 964:
                    CgPinTop = (_b.sent()).CgPinTop;
                    return [2 /*return*/, CgPinTop];
                case 965: return [4 /*yield*/, import("react-icons/cg")];
                case 966:
                    CgPin = (_b.sent()).CgPin;
                    return [2 /*return*/, CgPin];
                case 967: return [4 /*yield*/, import("react-icons/cg")];
                case 968:
                    CgPlayBackwards = (_b.sent()).CgPlayBackwards;
                    return [2 /*return*/, CgPlayBackwards];
                case 969: return [4 /*yield*/, import("react-icons/cg")];
                case 970:
                    CgPlayButtonO = (_b.sent()).CgPlayButtonO;
                    return [2 /*return*/, CgPlayButtonO];
                case 971: return [4 /*yield*/, import("react-icons/cg")];
                case 972:
                    CgPlayButtonR = (_b.sent()).CgPlayButtonR;
                    return [2 /*return*/, CgPlayButtonR];
                case 973: return [4 /*yield*/, import("react-icons/cg")];
                case 974:
                    CgPlayButton = (_b.sent()).CgPlayButton;
                    return [2 /*return*/, CgPlayButton];
                case 975: return [4 /*yield*/, import("react-icons/cg")];
                case 976:
                    CgPlayForwards = (_b.sent()).CgPlayForwards;
                    return [2 /*return*/, CgPlayForwards];
                case 977: return [4 /*yield*/, import("react-icons/cg")];
                case 978:
                    CgPlayListAdd = (_b.sent()).CgPlayListAdd;
                    return [2 /*return*/, CgPlayListAdd];
                case 979: return [4 /*yield*/, import("react-icons/cg")];
                case 980:
                    CgPlayListCheck = (_b.sent()).CgPlayListCheck;
                    return [2 /*return*/, CgPlayListCheck];
                case 981: return [4 /*yield*/, import("react-icons/cg")];
                case 982:
                    CgPlayListRemove = (_b.sent()).CgPlayListRemove;
                    return [2 /*return*/, CgPlayListRemove];
                case 983: return [4 /*yield*/, import("react-icons/cg")];
                case 984:
                    CgPlayListSearch = (_b.sent()).CgPlayListSearch;
                    return [2 /*return*/, CgPlayListSearch];
                case 985: return [4 /*yield*/, import("react-icons/cg")];
                case 986:
                    CgPlayList = (_b.sent()).CgPlayList;
                    return [2 /*return*/, CgPlayList];
                case 987: return [4 /*yield*/, import("react-icons/cg")];
                case 988:
                    CgPlayPauseO = (_b.sent()).CgPlayPauseO;
                    return [2 /*return*/, CgPlayPauseO];
                case 989: return [4 /*yield*/, import("react-icons/cg")];
                case 990:
                    CgPlayPauseR = (_b.sent()).CgPlayPauseR;
                    return [2 /*return*/, CgPlayPauseR];
                case 991: return [4 /*yield*/, import("react-icons/cg")];
                case 992:
                    CgPlayPause = (_b.sent()).CgPlayPause;
                    return [2 /*return*/, CgPlayPause];
                case 993: return [4 /*yield*/, import("react-icons/cg")];
                case 994:
                    CgPlayStopO = (_b.sent()).CgPlayStopO;
                    return [2 /*return*/, CgPlayStopO];
                case 995: return [4 /*yield*/, import("react-icons/cg")];
                case 996:
                    CgPlayStopR = (_b.sent()).CgPlayStopR;
                    return [2 /*return*/, CgPlayStopR];
                case 997: return [4 /*yield*/, import("react-icons/cg")];
                case 998:
                    CgPlayStop = (_b.sent()).CgPlayStop;
                    return [2 /*return*/, CgPlayStop];
                case 999: return [4 /*yield*/, import("react-icons/cg")];
                case 1000:
                    CgPlayTrackNextO = (_b.sent()).CgPlayTrackNextO;
                    return [2 /*return*/, CgPlayTrackNextO];
                case 1001: return [4 /*yield*/, import("react-icons/cg")];
                case 1002:
                    CgPlayTrackNextR = (_b.sent()).CgPlayTrackNextR;
                    return [2 /*return*/, CgPlayTrackNextR];
                case 1003: return [4 /*yield*/, import("react-icons/cg")];
                case 1004:
                    CgPlayTrackNext = (_b.sent()).CgPlayTrackNext;
                    return [2 /*return*/, CgPlayTrackNext];
                case 1005: return [4 /*yield*/, import("react-icons/cg")];
                case 1006:
                    CgPlayTrackPrevO = (_b.sent()).CgPlayTrackPrevO;
                    return [2 /*return*/, CgPlayTrackPrevO];
                case 1007: return [4 /*yield*/, import("react-icons/cg")];
                case 1008:
                    CgPlayTrackPrevR = (_b.sent()).CgPlayTrackPrevR;
                    return [2 /*return*/, CgPlayTrackPrevR];
                case 1009: return [4 /*yield*/, import("react-icons/cg")];
                case 1010:
                    CgPlayTrackPrev = (_b.sent()).CgPlayTrackPrev;
                    return [2 /*return*/, CgPlayTrackPrev];
                case 1011: return [4 /*yield*/, import("react-icons/cg")];
                case 1012:
                    CgPlug = (_b.sent()).CgPlug;
                    return [2 /*return*/, CgPlug];
                case 1013: return [4 /*yield*/, import("react-icons/cg")];
                case 1014:
                    CgPocket = (_b.sent()).CgPocket;
                    return [2 /*return*/, CgPocket];
                case 1015: return [4 /*yield*/, import("react-icons/cg")];
                case 1016:
                    CgPokemon = (_b.sent()).CgPokemon;
                    return [2 /*return*/, CgPokemon];
                case 1017: return [4 /*yield*/, import("react-icons/cg")];
                case 1018:
                    CgPolaroid = (_b.sent()).CgPolaroid;
                    return [2 /*return*/, CgPolaroid];
                case 1019: return [4 /*yield*/, import("react-icons/cg")];
                case 1020:
                    CgPoll = (_b.sent()).CgPoll;
                    return [2 /*return*/, CgPoll];
                case 1021: return [4 /*yield*/, import("react-icons/cg")];
                case 1022:
                    CgPresentation = (_b.sent()).CgPresentation;
                    return [2 /*return*/, CgPresentation];
                case 1023: return [4 /*yield*/, import("react-icons/cg")];
                case 1024:
                    CgPrinter = (_b.sent()).CgPrinter;
                    return [2 /*return*/, CgPrinter];
                case 1025: return [4 /*yield*/, import("react-icons/cg")];
                case 1026:
                    CgProductHunt = (_b.sent()).CgProductHunt;
                    return [2 /*return*/, CgProductHunt];
                case 1027: return [4 /*yield*/, import("react-icons/cg")];
                case 1028:
                    CgProfile = (_b.sent()).CgProfile;
                    return [2 /*return*/, CgProfile];
                case 1029: return [4 /*yield*/, import("react-icons/cg")];
                case 1030:
                    CgPullClear = (_b.sent()).CgPullClear;
                    return [2 /*return*/, CgPullClear];
                case 1031: return [4 /*yield*/, import("react-icons/cg")];
                case 1032:
                    CgPushChevronDownO = (_b.sent()).CgPushChevronDownO;
                    return [2 /*return*/, CgPushChevronDownO];
                case 1033: return [4 /*yield*/, import("react-icons/cg")];
                case 1034:
                    CgPushChevronDownR = (_b.sent()).CgPushChevronDownR;
                    return [2 /*return*/, CgPushChevronDownR];
                case 1035: return [4 /*yield*/, import("react-icons/cg")];
                case 1036:
                    CgPushChevronDown = (_b.sent()).CgPushChevronDown;
                    return [2 /*return*/, CgPushChevronDown];
                case 1037: return [4 /*yield*/, import("react-icons/cg")];
                case 1038:
                    CgPushChevronLeftO = (_b.sent()).CgPushChevronLeftO;
                    return [2 /*return*/, CgPushChevronLeftO];
                case 1039: return [4 /*yield*/, import("react-icons/cg")];
                case 1040:
                    CgPushChevronLeftR = (_b.sent()).CgPushChevronLeftR;
                    return [2 /*return*/, CgPushChevronLeftR];
                case 1041: return [4 /*yield*/, import("react-icons/cg")];
                case 1042:
                    CgPushChevronLeft = (_b.sent()).CgPushChevronLeft;
                    return [2 /*return*/, CgPushChevronLeft];
                case 1043: return [4 /*yield*/, import("react-icons/cg")];
                case 1044:
                    CgPushChevronRightO = (_b.sent()).CgPushChevronRightO;
                    return [2 /*return*/, CgPushChevronRightO];
                case 1045: return [4 /*yield*/, import("react-icons/cg")];
                case 1046:
                    CgPushChevronRightR = (_b.sent()).CgPushChevronRightR;
                    return [2 /*return*/, CgPushChevronRightR];
                case 1047: return [4 /*yield*/, import("react-icons/cg")];
                case 1048:
                    CgPushChevronRight = (_b.sent()).CgPushChevronRight;
                    return [2 /*return*/, CgPushChevronRight];
                case 1049: return [4 /*yield*/, import("react-icons/cg")];
                case 1050:
                    CgPushChevronUpO = (_b.sent()).CgPushChevronUpO;
                    return [2 /*return*/, CgPushChevronUpO];
                case 1051: return [4 /*yield*/, import("react-icons/cg")];
                case 1052:
                    CgPushChevronUpR = (_b.sent()).CgPushChevronUpR;
                    return [2 /*return*/, CgPushChevronUpR];
                case 1053: return [4 /*yield*/, import("react-icons/cg")];
                case 1054:
                    CgPushChevronUp = (_b.sent()).CgPushChevronUp;
                    return [2 /*return*/, CgPushChevronUp];
                case 1055: return [4 /*yield*/, import("react-icons/cg")];
                case 1056:
                    CgPushDown = (_b.sent()).CgPushDown;
                    return [2 /*return*/, CgPushDown];
                case 1057: return [4 /*yield*/, import("react-icons/cg")];
                case 1058:
                    CgPushLeft = (_b.sent()).CgPushLeft;
                    return [2 /*return*/, CgPushLeft];
                case 1059: return [4 /*yield*/, import("react-icons/cg")];
                case 1060:
                    CgPushRight = (_b.sent()).CgPushRight;
                    return [2 /*return*/, CgPushRight];
                case 1061: return [4 /*yield*/, import("react-icons/cg")];
                case 1062:
                    CgPushUp = (_b.sent()).CgPushUp;
                    return [2 /*return*/, CgPushUp];
                case 1063: return [4 /*yield*/, import("react-icons/cg")];
                case 1064:
                    CgQr = (_b.sent()).CgQr;
                    return [2 /*return*/, CgQr];
                case 1065: return [4 /*yield*/, import("react-icons/cg")];
                case 1066:
                    CgQuoteO = (_b.sent()).CgQuoteO;
                    return [2 /*return*/, CgQuoteO];
                case 1067: return [4 /*yield*/, import("react-icons/cg")];
                case 1068:
                    CgQuote = (_b.sent()).CgQuote;
                    return [2 /*return*/, CgQuote];
                case 1069: return [4 /*yield*/, import("react-icons/cg")];
                case 1070:
                    CgRadioCheck = (_b.sent()).CgRadioCheck;
                    return [2 /*return*/, CgRadioCheck];
                case 1071: return [4 /*yield*/, import("react-icons/cg")];
                case 1072:
                    CgRadioChecked = (_b.sent()).CgRadioChecked;
                    return [2 /*return*/, CgRadioChecked];
                case 1073: return [4 /*yield*/, import("react-icons/cg")];
                case 1074:
                    CgRatio = (_b.sent()).CgRatio;
                    return [2 /*return*/, CgRatio];
                case 1075: return [4 /*yield*/, import("react-icons/cg")];
                case 1076:
                    CgRead = (_b.sent()).CgRead;
                    return [2 /*return*/, CgRead];
                case 1077: return [4 /*yield*/, import("react-icons/cg")];
                case 1078:
                    CgReadme = (_b.sent()).CgReadme;
                    return [2 /*return*/, CgReadme];
                case 1079: return [4 /*yield*/, import("react-icons/cg")];
                case 1080:
                    CgRecord = (_b.sent()).CgRecord;
                    return [2 /*return*/, CgRecord];
                case 1081: return [4 /*yield*/, import("react-icons/cg")];
                case 1082:
                    CgRedo = (_b.sent()).CgRedo;
                    return [2 /*return*/, CgRedo];
                case 1083: return [4 /*yield*/, import("react-icons/cg")];
                case 1084:
                    CgRemote = (_b.sent()).CgRemote;
                    return [2 /*return*/, CgRemote];
                case 1085: return [4 /*yield*/, import("react-icons/cg")];
                case 1086:
                    CgRemoveR = (_b.sent()).CgRemoveR;
                    return [2 /*return*/, CgRemoveR];
                case 1087: return [4 /*yield*/, import("react-icons/cg")];
                case 1088:
                    CgRemove = (_b.sent()).CgRemove;
                    return [2 /*return*/, CgRemove];
                case 1089: return [4 /*yield*/, import("react-icons/cg")];
                case 1090:
                    CgRename = (_b.sent()).CgRename;
                    return [2 /*return*/, CgRename];
                case 1091: return [4 /*yield*/, import("react-icons/cg")];
                case 1092:
                    CgReorder = (_b.sent()).CgReorder;
                    return [2 /*return*/, CgReorder];
                case 1093: return [4 /*yield*/, import("react-icons/cg")];
                case 1094:
                    CgRepeat = (_b.sent()).CgRepeat;
                    return [2 /*return*/, CgRepeat];
                case 1095: return [4 /*yield*/, import("react-icons/cg")];
                case 1096:
                    CgRing = (_b.sent()).CgRing;
                    return [2 /*return*/, CgRing];
                case 1097: return [4 /*yield*/, import("react-icons/cg")];
                case 1098:
                    CgRowFirst = (_b.sent()).CgRowFirst;
                    return [2 /*return*/, CgRowFirst];
                case 1099: return [4 /*yield*/, import("react-icons/cg")];
                case 1100:
                    CgRowLast = (_b.sent()).CgRowLast;
                    return [2 /*return*/, CgRowLast];
                case 1101: return [4 /*yield*/, import("react-icons/cg")];
                case 1102:
                    CgRuler = (_b.sent()).CgRuler;
                    return [2 /*return*/, CgRuler];
                case 1103: return [4 /*yield*/, import("react-icons/cg")];
                case 1104:
                    CgSandClock = (_b.sent()).CgSandClock;
                    return [2 /*return*/, CgSandClock];
                case 1105: return [4 /*yield*/, import("react-icons/cg")];
                case 1106:
                    CgScan = (_b.sent()).CgScan;
                    return [2 /*return*/, CgScan];
                case 1107: return [4 /*yield*/, import("react-icons/cg")];
                case 1108:
                    CgScreenMirror = (_b.sent()).CgScreenMirror;
                    return [2 /*return*/, CgScreenMirror];
                case 1109: return [4 /*yield*/, import("react-icons/cg")];
                case 1110:
                    CgScreenShot = (_b.sent()).CgScreenShot;
                    return [2 /*return*/, CgScreenShot];
                case 1111: return [4 /*yield*/, import("react-icons/cg")];
                case 1112:
                    CgScreenWide = (_b.sent()).CgScreenWide;
                    return [2 /*return*/, CgScreenWide];
                case 1113: return [4 /*yield*/, import("react-icons/cg")];
                case 1114:
                    CgScreen = (_b.sent()).CgScreen;
                    return [2 /*return*/, CgScreen];
                case 1115: return [4 /*yield*/, import("react-icons/cg")];
                case 1116:
                    CgScrollH = (_b.sent()).CgScrollH;
                    return [2 /*return*/, CgScrollH];
                case 1117: return [4 /*yield*/, import("react-icons/cg")];
                case 1118:
                    CgScrollV = (_b.sent()).CgScrollV;
                    return [2 /*return*/, CgScrollV];
                case 1119: return [4 /*yield*/, import("react-icons/cg")];
                case 1120:
                    CgSearchFound = (_b.sent()).CgSearchFound;
                    return [2 /*return*/, CgSearchFound];
                case 1121: return [4 /*yield*/, import("react-icons/cg")];
                case 1122:
                    CgSearchLoading = (_b.sent()).CgSearchLoading;
                    return [2 /*return*/, CgSearchLoading];
                case 1123: return [4 /*yield*/, import("react-icons/cg")];
                case 1124:
                    CgSearch = (_b.sent()).CgSearch;
                    return [2 /*return*/, CgSearch];
                case 1125: return [4 /*yield*/, import("react-icons/cg")];
                case 1126:
                    CgSelectO = (_b.sent()).CgSelectO;
                    return [2 /*return*/, CgSelectO];
                case 1127: return [4 /*yield*/, import("react-icons/cg")];
                case 1128:
                    CgSelectR = (_b.sent()).CgSelectR;
                    return [2 /*return*/, CgSelectR];
                case 1129: return [4 /*yield*/, import("react-icons/cg")];
                case 1130:
                    CgSelect = (_b.sent()).CgSelect;
                    return [2 /*return*/, CgSelect];
                case 1131: return [4 /*yield*/, import("react-icons/cg")];
                case 1132:
                    CgServer = (_b.sent()).CgServer;
                    return [2 /*return*/, CgServer];
                case 1133: return [4 /*yield*/, import("react-icons/cg")];
                case 1134:
                    CgServerless = (_b.sent()).CgServerless;
                    return [2 /*return*/, CgServerless];
                case 1135: return [4 /*yield*/, import("react-icons/cg")];
                case 1136:
                    CgShapeCircle = (_b.sent()).CgShapeCircle;
                    return [2 /*return*/, CgShapeCircle];
                case 1137: return [4 /*yield*/, import("react-icons/cg")];
                case 1138:
                    CgShapeHalfCircle = (_b.sent()).CgShapeHalfCircle;
                    return [2 /*return*/, CgShapeHalfCircle];
                case 1139: return [4 /*yield*/, import("react-icons/cg")];
                case 1140:
                    CgShapeHexagon = (_b.sent()).CgShapeHexagon;
                    return [2 /*return*/, CgShapeHexagon];
                case 1141: return [4 /*yield*/, import("react-icons/cg")];
                case 1142:
                    CgShapeRhombus = (_b.sent()).CgShapeRhombus;
                    return [2 /*return*/, CgShapeRhombus];
                case 1143: return [4 /*yield*/, import("react-icons/cg")];
                case 1144:
                    CgShapeSquare = (_b.sent()).CgShapeSquare;
                    return [2 /*return*/, CgShapeSquare];
                case 1145: return [4 /*yield*/, import("react-icons/cg")];
                case 1146:
                    CgShapeTriangle = (_b.sent()).CgShapeTriangle;
                    return [2 /*return*/, CgShapeTriangle];
                case 1147: return [4 /*yield*/, import("react-icons/cg")];
                case 1148:
                    CgShapeZigzag = (_b.sent()).CgShapeZigzag;
                    return [2 /*return*/, CgShapeZigzag];
                case 1149: return [4 /*yield*/, import("react-icons/cg")];
                case 1150:
                    CgShare = (_b.sent()).CgShare;
                    return [2 /*return*/, CgShare];
                case 1151: return [4 /*yield*/, import("react-icons/cg")];
                case 1152:
                    CgShield = (_b.sent()).CgShield;
                    return [2 /*return*/, CgShield];
                case 1153: return [4 /*yield*/, import("react-icons/cg")];
                case 1154:
                    CgShoppingBag = (_b.sent()).CgShoppingBag;
                    return [2 /*return*/, CgShoppingBag];
                case 1155: return [4 /*yield*/, import("react-icons/cg")];
                case 1156:
                    CgShoppingCart = (_b.sent()).CgShoppingCart;
                    return [2 /*return*/, CgShoppingCart];
                case 1157: return [4 /*yield*/, import("react-icons/cg")];
                case 1158:
                    CgShortcut = (_b.sent()).CgShortcut;
                    return [2 /*return*/, CgShortcut];
                case 1159: return [4 /*yield*/, import("react-icons/cg")];
                case 1160:
                    CgShutterstock = (_b.sent()).CgShutterstock;
                    return [2 /*return*/, CgShutterstock];
                case 1161: return [4 /*yield*/, import("react-icons/cg")];
                case 1162:
                    CgSidebarOpen = (_b.sent()).CgSidebarOpen;
                    return [2 /*return*/, CgSidebarOpen];
                case 1163: return [4 /*yield*/, import("react-icons/cg")];
                case 1164:
                    CgSidebarRight = (_b.sent()).CgSidebarRight;
                    return [2 /*return*/, CgSidebarRight];
                case 1165: return [4 /*yield*/, import("react-icons/cg")];
                case 1166:
                    CgSidebar = (_b.sent()).CgSidebar;
                    return [2 /*return*/, CgSidebar];
                case 1167: return [4 /*yield*/, import("react-icons/cg")];
                case 1168:
                    CgSignal = (_b.sent()).CgSignal;
                    return [2 /*return*/, CgSignal];
                case 1169: return [4 /*yield*/, import("react-icons/cg")];
                case 1170:
                    CgSize = (_b.sent()).CgSize;
                    return [2 /*return*/, CgSize];
                case 1171: return [4 /*yield*/, import("react-icons/cg")];
                case 1172:
                    CgSketch = (_b.sent()).CgSketch;
                    return [2 /*return*/, CgSketch];
                case 1173: return [4 /*yield*/, import("react-icons/cg")];
                case 1174:
                    CgSlack = (_b.sent()).CgSlack;
                    return [2 /*return*/, CgSlack];
                case 1175: return [4 /*yield*/, import("react-icons/cg")];
                case 1176:
                    CgSleep = (_b.sent()).CgSleep;
                    return [2 /*return*/, CgSleep];
                case 1177: return [4 /*yield*/, import("react-icons/cg")];
                case 1178:
                    CgSmartHomeBoiler = (_b.sent()).CgSmartHomeBoiler;
                    return [2 /*return*/, CgSmartHomeBoiler];
                case 1179: return [4 /*yield*/, import("react-icons/cg")];
                case 1180:
                    CgSmartHomeCooker = (_b.sent()).CgSmartHomeCooker;
                    return [2 /*return*/, CgSmartHomeCooker];
                case 1181: return [4 /*yield*/, import("react-icons/cg")];
                case 1182:
                    CgSmartHomeHeat = (_b.sent()).CgSmartHomeHeat;
                    return [2 /*return*/, CgSmartHomeHeat];
                case 1183: return [4 /*yield*/, import("react-icons/cg")];
                case 1184:
                    CgSmartHomeLight = (_b.sent()).CgSmartHomeLight;
                    return [2 /*return*/, CgSmartHomeLight];
                case 1185: return [4 /*yield*/, import("react-icons/cg")];
                case 1186:
                    CgSmartHomeRefrigerator = (_b.sent()).CgSmartHomeRefrigerator;
                    return [2 /*return*/, CgSmartHomeRefrigerator];
                case 1187: return [4 /*yield*/, import("react-icons/cg")];
                case 1188:
                    CgSmartHomeWashMachine = (_b.sent()).CgSmartHomeWashMachine;
                    return [2 /*return*/, CgSmartHomeWashMachine];
                case 1189: return [4 /*yield*/, import("react-icons/cg")];
                case 1190:
                    CgSmartphoneChip = (_b.sent()).CgSmartphoneChip;
                    return [2 /*return*/, CgSmartphoneChip];
                case 1191: return [4 /*yield*/, import("react-icons/cg")];
                case 1192:
                    CgSmartphoneRam = (_b.sent()).CgSmartphoneRam;
                    return [2 /*return*/, CgSmartphoneRam];
                case 1193: return [4 /*yield*/, import("react-icons/cg")];
                case 1194:
                    CgSmartphoneShake = (_b.sent()).CgSmartphoneShake;
                    return [2 /*return*/, CgSmartphoneShake];
                case 1195: return [4 /*yield*/, import("react-icons/cg")];
                case 1196:
                    CgSmartphone = (_b.sent()).CgSmartphone;
                    return [2 /*return*/, CgSmartphone];
                case 1197: return [4 /*yield*/, import("react-icons/cg")];
                case 1198:
                    CgSmileMouthOpen = (_b.sent()).CgSmileMouthOpen;
                    return [2 /*return*/, CgSmileMouthOpen];
                case 1199: return [4 /*yield*/, import("react-icons/cg")];
                case 1200:
                    CgSmileNeutral = (_b.sent()).CgSmileNeutral;
                    return [2 /*return*/, CgSmileNeutral];
                case 1201: return [4 /*yield*/, import("react-icons/cg")];
                case 1202:
                    CgSmileNoMouth = (_b.sent()).CgSmileNoMouth;
                    return [2 /*return*/, CgSmileNoMouth];
                case 1203: return [4 /*yield*/, import("react-icons/cg")];
                case 1204:
                    CgSmileNone = (_b.sent()).CgSmileNone;
                    return [2 /*return*/, CgSmileNone];
                case 1205: return [4 /*yield*/, import("react-icons/cg")];
                case 1206:
                    CgSmileSad = (_b.sent()).CgSmileSad;
                    return [2 /*return*/, CgSmileSad];
                case 1207: return [4 /*yield*/, import("react-icons/cg")];
                case 1208:
                    CgSmileUpside = (_b.sent()).CgSmileUpside;
                    return [2 /*return*/, CgSmileUpside];
                case 1209: return [4 /*yield*/, import("react-icons/cg")];
                case 1210:
                    CgSmile = (_b.sent()).CgSmile;
                    return [2 /*return*/, CgSmile];
                case 1211: return [4 /*yield*/, import("react-icons/cg")];
                case 1212:
                    CgSoftwareDownload = (_b.sent()).CgSoftwareDownload;
                    return [2 /*return*/, CgSoftwareDownload];
                case 1213: return [4 /*yield*/, import("react-icons/cg")];
                case 1214:
                    CgSoftwareUpload = (_b.sent()).CgSoftwareUpload;
                    return [2 /*return*/, CgSoftwareUpload];
                case 1215: return [4 /*yield*/, import("react-icons/cg")];
                case 1216:
                    CgSortAz = (_b.sent()).CgSortAz;
                    return [2 /*return*/, CgSortAz];
                case 1217: return [4 /*yield*/, import("react-icons/cg")];
                case 1218:
                    CgSortZa = (_b.sent()).CgSortZa;
                    return [2 /*return*/, CgSortZa];
                case 1219: return [4 /*yield*/, import("react-icons/cg")];
                case 1220:
                    CgSpaceBetweenV = (_b.sent()).CgSpaceBetweenV;
                    return [2 /*return*/, CgSpaceBetweenV];
                case 1221: return [4 /*yield*/, import("react-icons/cg")];
                case 1222:
                    CgSpaceBetween = (_b.sent()).CgSpaceBetween;
                    return [2 /*return*/, CgSpaceBetween];
                case 1223: return [4 /*yield*/, import("react-icons/cg")];
                case 1224:
                    CgSpectrum = (_b.sent()).CgSpectrum;
                    return [2 /*return*/, CgSpectrum];
                case 1225: return [4 /*yield*/, import("react-icons/cg")];
                case 1226:
                    CgSpinnerAlt = (_b.sent()).CgSpinnerAlt;
                    return [2 /*return*/, CgSpinnerAlt];
                case 1227: return [4 /*yield*/, import("react-icons/cg")];
                case 1228:
                    CgSpinnerTwoAlt = (_b.sent()).CgSpinnerTwoAlt;
                    return [2 /*return*/, CgSpinnerTwoAlt];
                case 1229: return [4 /*yield*/, import("react-icons/cg")];
                case 1230:
                    CgSpinnerTwo = (_b.sent()).CgSpinnerTwo;
                    return [2 /*return*/, CgSpinnerTwo];
                case 1231: return [4 /*yield*/, import("react-icons/cg")];
                case 1232:
                    CgSpinner = (_b.sent()).CgSpinner;
                    return [2 /*return*/, CgSpinner];
                case 1233: return [4 /*yield*/, import("react-icons/cg")];
                case 1234:
                    CgSquare = (_b.sent()).CgSquare;
                    return [2 /*return*/, CgSquare];
                case 1235: return [4 /*yield*/, import("react-icons/cg")];
                case 1236:
                    CgStack = (_b.sent()).CgStack;
                    return [2 /*return*/, CgStack];
                case 1237: return [4 /*yield*/, import("react-icons/cg")];
                case 1238:
                    CgStark = (_b.sent()).CgStark;
                    return [2 /*return*/, CgStark];
                case 1239: return [4 /*yield*/, import("react-icons/cg")];
                case 1240:
                    CgStopwatch = (_b.sent()).CgStopwatch;
                    return [2 /*return*/, CgStopwatch];
                case 1241: return [4 /*yield*/, import("react-icons/cg")];
                case 1242:
                    CgStories = (_b.sent()).CgStories;
                    return [2 /*return*/, CgStories];
                case 1243: return [4 /*yield*/, import("react-icons/cg")];
                case 1244:
                    CgStudio = (_b.sent()).CgStudio;
                    return [2 /*return*/, CgStudio];
                case 1245: return [4 /*yield*/, import("react-icons/cg")];
                case 1246:
                    CgStyle = (_b.sent()).CgStyle;
                    return [2 /*return*/, CgStyle];
                case 1247: return [4 /*yield*/, import("react-icons/cg")];
                case 1248:
                    CgSun = (_b.sent()).CgSun;
                    return [2 /*return*/, CgSun];
                case 1249: return [4 /*yield*/, import("react-icons/cg")];
                case 1250:
                    CgSupport = (_b.sent()).CgSupport;
                    return [2 /*return*/, CgSupport];
                case 1251: return [4 /*yield*/, import("react-icons/cg")];
                case 1252:
                    CgSwapVertical = (_b.sent()).CgSwapVertical;
                    return [2 /*return*/, CgSwapVertical];
                case 1253: return [4 /*yield*/, import("react-icons/cg")];
                case 1254:
                    CgSwap = (_b.sent()).CgSwap;
                    return [2 /*return*/, CgSwap];
                case 1255: return [4 /*yield*/, import("react-icons/cg")];
                case 1256:
                    CgSweden = (_b.sent()).CgSweden;
                    return [2 /*return*/, CgSweden];
                case 1257: return [4 /*yield*/, import("react-icons/cg")];
                case 1258:
                    CgSwiss = (_b.sent()).CgSwiss;
                    return [2 /*return*/, CgSwiss];
                case 1259: return [4 /*yield*/, import("react-icons/cg")];
                case 1260:
                    CgSync = (_b.sent()).CgSync;
                    return [2 /*return*/, CgSync];
                case 1261: return [4 /*yield*/, import("react-icons/cg")];
                case 1262:
                    CgTab = (_b.sent()).CgTab;
                    return [2 /*return*/, CgTab];
                case 1263: return [4 /*yield*/, import("react-icons/cg")];
                case 1264:
                    CgTag = (_b.sent()).CgTag;
                    return [2 /*return*/, CgTag];
                case 1265: return [4 /*yield*/, import("react-icons/cg")];
                case 1266:
                    CgTally = (_b.sent()).CgTally;
                    return [2 /*return*/, CgTally];
                case 1267: return [4 /*yield*/, import("react-icons/cg")];
                case 1268:
                    CgTapDouble = (_b.sent()).CgTapDouble;
                    return [2 /*return*/, CgTapDouble];
                case 1269: return [4 /*yield*/, import("react-icons/cg")];
                case 1270:
                    CgTapSingle = (_b.sent()).CgTapSingle;
                    return [2 /*return*/, CgTapSingle];
                case 1271: return [4 /*yield*/, import("react-icons/cg")];
                case 1272:
                    CgTemplate = (_b.sent()).CgTemplate;
                    return [2 /*return*/, CgTemplate];
                case 1273: return [4 /*yield*/, import("react-icons/cg")];
                case 1274:
                    CgTennis = (_b.sent()).CgTennis;
                    return [2 /*return*/, CgTennis];
                case 1275: return [4 /*yield*/, import("react-icons/cg")];
                case 1276:
                    CgTerminal = (_b.sent()).CgTerminal;
                    return [2 /*return*/, CgTerminal];
                case 1277: return [4 /*yield*/, import("react-icons/cg")];
                case 1278:
                    CgTerrain = (_b.sent()).CgTerrain;
                    return [2 /*return*/, CgTerrain];
                case 1279: return [4 /*yield*/, import("react-icons/cg")];
                case 1280:
                    CgThermometer = (_b.sent()).CgThermometer;
                    return [2 /*return*/, CgThermometer];
                case 1281: return [4 /*yield*/, import("react-icons/cg")];
                case 1282:
                    CgThermostat = (_b.sent()).CgThermostat;
                    return [2 /*return*/, CgThermostat];
                case 1283: return [4 /*yield*/, import("react-icons/cg")];
                case 1284:
                    CgTikcode = (_b.sent()).CgTikcode;
                    return [2 /*return*/, CgTikcode];
                case 1285: return [4 /*yield*/, import("react-icons/cg")];
                case 1286:
                    CgTime = (_b.sent()).CgTime;
                    return [2 /*return*/, CgTime];
                case 1287: return [4 /*yield*/, import("react-icons/cg")];
                case 1288:
                    CgTimelapse = (_b.sent()).CgTimelapse;
                    return [2 /*return*/, CgTimelapse];
                case 1289: return [4 /*yield*/, import("react-icons/cg")];
                case 1290:
                    CgTimer = (_b.sent()).CgTimer;
                    return [2 /*return*/, CgTimer];
                case 1291: return [4 /*yield*/, import("react-icons/cg")];
                case 1292:
                    CgToday = (_b.sent()).CgToday;
                    return [2 /*return*/, CgToday];
                case 1293: return [4 /*yield*/, import("react-icons/cg")];
                case 1294:
                    CgToggleOff = (_b.sent()).CgToggleOff;
                    return [2 /*return*/, CgToggleOff];
                case 1295: return [4 /*yield*/, import("react-icons/cg")];
                case 1296:
                    CgToggleOn = (_b.sent()).CgToggleOn;
                    return [2 /*return*/, CgToggleOn];
                case 1297: return [4 /*yield*/, import("react-icons/cg")];
                case 1298:
                    CgToggleSquareOff = (_b.sent()).CgToggleSquareOff;
                    return [2 /*return*/, CgToggleSquareOff];
                case 1299: return [4 /*yield*/, import("react-icons/cg")];
                case 1300:
                    CgToggleSquare = (_b.sent()).CgToggleSquare;
                    return [2 /*return*/, CgToggleSquare];
                case 1301: return [4 /*yield*/, import("react-icons/cg")];
                case 1302:
                    CgToolbarBottom = (_b.sent()).CgToolbarBottom;
                    return [2 /*return*/, CgToolbarBottom];
                case 1303: return [4 /*yield*/, import("react-icons/cg")];
                case 1304:
                    CgToolbarLeft = (_b.sent()).CgToolbarLeft;
                    return [2 /*return*/, CgToolbarLeft];
                case 1305: return [4 /*yield*/, import("react-icons/cg")];
                case 1306:
                    CgToolbarRight = (_b.sent()).CgToolbarRight;
                    return [2 /*return*/, CgToolbarRight];
                case 1307: return [4 /*yield*/, import("react-icons/cg")];
                case 1308:
                    CgToolbarTop = (_b.sent()).CgToolbarTop;
                    return [2 /*return*/, CgToolbarTop];
                case 1309: return [4 /*yield*/, import("react-icons/cg")];
                case 1310:
                    CgToolbox = (_b.sent()).CgToolbox;
                    return [2 /*return*/, CgToolbox];
                case 1311: return [4 /*yield*/, import("react-icons/cg")];
                case 1312:
                    CgTouchpad = (_b.sent()).CgTouchpad;
                    return [2 /*return*/, CgTouchpad];
                case 1313: return [4 /*yield*/, import("react-icons/cg")];
                case 1314:
                    CgTrack = (_b.sent()).CgTrack;
                    return [2 /*return*/, CgTrack];
                case 1315: return [4 /*yield*/, import("react-icons/cg")];
                case 1316:
                    CgTranscript = (_b.sent()).CgTranscript;
                    return [2 /*return*/, CgTranscript];
                case 1317: return [4 /*yield*/, import("react-icons/cg")];
                case 1318:
                    CgTrashEmpty = (_b.sent()).CgTrashEmpty;
                    return [2 /*return*/, CgTrashEmpty];
                case 1319: return [4 /*yield*/, import("react-icons/cg")];
                case 1320:
                    CgTrash = (_b.sent()).CgTrash;
                    return [2 /*return*/, CgTrash];
                case 1321: return [4 /*yield*/, import("react-icons/cg")];
                case 1322:
                    CgTree = (_b.sent()).CgTree;
                    return [2 /*return*/, CgTree];
                case 1323: return [4 /*yield*/, import("react-icons/cg")];
                case 1324:
                    CgTrees = (_b.sent()).CgTrees;
                    return [2 /*return*/, CgTrees];
                case 1325: return [4 /*yield*/, import("react-icons/cg")];
                case 1326:
                    CgTrello = (_b.sent()).CgTrello;
                    return [2 /*return*/, CgTrello];
                case 1327: return [4 /*yield*/, import("react-icons/cg")];
                case 1328:
                    CgTrendingDown = (_b.sent()).CgTrendingDown;
                    return [2 /*return*/, CgTrendingDown];
                case 1329: return [4 /*yield*/, import("react-icons/cg")];
                case 1330:
                    CgTrending = (_b.sent()).CgTrending;
                    return [2 /*return*/, CgTrending];
                case 1331: return [4 /*yield*/, import("react-icons/cg")];
                case 1332:
                    CgTrophy = (_b.sent()).CgTrophy;
                    return [2 /*return*/, CgTrophy];
                case 1333: return [4 /*yield*/, import("react-icons/cg")];
                case 1334:
                    CgTv = (_b.sent()).CgTv;
                    return [2 /*return*/, CgTv];
                case 1335: return [4 /*yield*/, import("react-icons/cg")];
                case 1336:
                    CgTwilio = (_b.sent()).CgTwilio;
                    return [2 /*return*/, CgTwilio];
                case 1337: return [4 /*yield*/, import("react-icons/cg")];
                case 1338:
                    CgTwitter = (_b.sent()).CgTwitter;
                    return [2 /*return*/, CgTwitter];
                case 1339: return [4 /*yield*/, import("react-icons/cg")];
                case 1340:
                    CgUiKit = (_b.sent()).CgUiKit;
                    return [2 /*return*/, CgUiKit];
                case 1341: return [4 /*yield*/, import("react-icons/cg")];
                case 1342:
                    CgUmbrella = (_b.sent()).CgUmbrella;
                    return [2 /*return*/, CgUmbrella];
                case 1343: return [4 /*yield*/, import("react-icons/cg")];
                case 1344:
                    CgUnavailable = (_b.sent()).CgUnavailable;
                    return [2 /*return*/, CgUnavailable];
                case 1345: return [4 /*yield*/, import("react-icons/cg")];
                case 1346:
                    CgUnblock = (_b.sent()).CgUnblock;
                    return [2 /*return*/, CgUnblock];
                case 1347: return [4 /*yield*/, import("react-icons/cg")];
                case 1348:
                    CgUndo = (_b.sent()).CgUndo;
                    return [2 /*return*/, CgUndo];
                case 1349: return [4 /*yield*/, import("react-icons/cg")];
                case 1350:
                    CgUnfold = (_b.sent()).CgUnfold;
                    return [2 /*return*/, CgUnfold];
                case 1351: return [4 /*yield*/, import("react-icons/cg")];
                case 1352:
                    CgUnsplash = (_b.sent()).CgUnsplash;
                    return [2 /*return*/, CgUnsplash];
                case 1353: return [4 /*yield*/, import("react-icons/cg")];
                case 1354:
                    CgUsbC = (_b.sent()).CgUsbC;
                    return [2 /*return*/, CgUsbC];
                case 1355: return [4 /*yield*/, import("react-icons/cg")];
                case 1356:
                    CgUsb = (_b.sent()).CgUsb;
                    return [2 /*return*/, CgUsb];
                case 1357: return [4 /*yield*/, import("react-icons/cg")];
                case 1358:
                    CgUserAdd = (_b.sent()).CgUserAdd;
                    return [2 /*return*/, CgUserAdd];
                case 1359: return [4 /*yield*/, import("react-icons/cg")];
                case 1360:
                    CgUserList = (_b.sent()).CgUserList;
                    return [2 /*return*/, CgUserList];
                case 1361: return [4 /*yield*/, import("react-icons/cg")];
                case 1362:
                    CgUserRemove = (_b.sent()).CgUserRemove;
                    return [2 /*return*/, CgUserRemove];
                case 1363: return [4 /*yield*/, import("react-icons/cg")];
                case 1364:
                    CgUser = (_b.sent()).CgUser;
                    return [2 /*return*/, CgUser];
                case 1365: return [4 /*yield*/, import("react-icons/cg")];
                case 1366:
                    CgUserlane = (_b.sent()).CgUserlane;
                    return [2 /*return*/, CgUserlane];
                case 1367: return [4 /*yield*/, import("react-icons/cg")];
                case 1368:
                    CgVercel = (_b.sent()).CgVercel;
                    return [2 /*return*/, CgVercel];
                case 1369: return [4 /*yield*/, import("react-icons/cg")];
                case 1370:
                    CgViewCols = (_b.sent()).CgViewCols;
                    return [2 /*return*/, CgViewCols];
                case 1371: return [4 /*yield*/, import("react-icons/cg")];
                case 1372:
                    CgViewComfortable = (_b.sent()).CgViewComfortable;
                    return [2 /*return*/, CgViewComfortable];
                case 1373: return [4 /*yield*/, import("react-icons/cg")];
                case 1374:
                    CgViewDay = (_b.sent()).CgViewDay;
                    return [2 /*return*/, CgViewDay];
                case 1375: return [4 /*yield*/, import("react-icons/cg")];
                case 1376:
                    CgViewGrid = (_b.sent()).CgViewGrid;
                    return [2 /*return*/, CgViewGrid];
                case 1377: return [4 /*yield*/, import("react-icons/cg")];
                case 1378:
                    CgViewList = (_b.sent()).CgViewList;
                    return [2 /*return*/, CgViewList];
                case 1379: return [4 /*yield*/, import("react-icons/cg")];
                case 1380:
                    CgViewMonth = (_b.sent()).CgViewMonth;
                    return [2 /*return*/, CgViewMonth];
                case 1381: return [4 /*yield*/, import("react-icons/cg")];
                case 1382:
                    CgViewSplit = (_b.sent()).CgViewSplit;
                    return [2 /*return*/, CgViewSplit];
                case 1383: return [4 /*yield*/, import("react-icons/cg")];
                case 1384:
                    CgVinyl = (_b.sent()).CgVinyl;
                    return [2 /*return*/, CgVinyl];
                case 1385: return [4 /*yield*/, import("react-icons/cg")];
                case 1386:
                    CgVoicemailO = (_b.sent()).CgVoicemailO;
                    return [2 /*return*/, CgVoicemailO];
                case 1387: return [4 /*yield*/, import("react-icons/cg")];
                case 1388:
                    CgVoicemailR = (_b.sent()).CgVoicemailR;
                    return [2 /*return*/, CgVoicemailR];
                case 1389: return [4 /*yield*/, import("react-icons/cg")];
                case 1390:
                    CgVoicemail = (_b.sent()).CgVoicemail;
                    return [2 /*return*/, CgVoicemail];
                case 1391: return [4 /*yield*/, import("react-icons/cg")];
                case 1392:
                    CgVolume = (_b.sent()).CgVolume;
                    return [2 /*return*/, CgVolume];
                case 1393: return [4 /*yield*/, import("react-icons/cg")];
                case 1394:
                    CgWebcam = (_b.sent()).CgWebcam;
                    return [2 /*return*/, CgWebcam];
                case 1395: return [4 /*yield*/, import("react-icons/cg")];
                case 1396:
                    CgWebsite = (_b.sent()).CgWebsite;
                    return [2 /*return*/, CgWebsite];
                case 1397: return [4 /*yield*/, import("react-icons/cg")];
                case 1398:
                    CgWindows = (_b.sent()).CgWindows;
                    return [2 /*return*/, CgWindows];
                case 1399: return [4 /*yield*/, import("react-icons/cg")];
                case 1400:
                    CgWorkAlt = (_b.sent()).CgWorkAlt;
                    return [2 /*return*/, CgWorkAlt];
                case 1401: return [4 /*yield*/, import("react-icons/cg")];
                case 1402:
                    CgYinyang = (_b.sent()).CgYinyang;
                    return [2 /*return*/, CgYinyang];
                case 1403: return [4 /*yield*/, import("react-icons/cg")];
                case 1404:
                    CgYoutube = (_b.sent()).CgYoutube;
                    return [2 /*return*/, CgYoutube];
                case 1405: return [4 /*yield*/, import("react-icons/cg")];
                case 1406:
                    CgZoomIn = (_b.sent()).CgZoomIn;
                    return [2 /*return*/, CgZoomIn];
                case 1407: return [4 /*yield*/, import("react-icons/cg")];
                case 1408:
                    CgZoomOut = (_b.sent()).CgZoomOut;
                    return [2 /*return*/, CgZoomOut];
                case 1409: return [2 /*return*/];
            }
        });
    });
}
