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
export function nameToReactIcon_ri_1(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, RiFileAddFill, RiFileAddLine, RiFileChart2Fill, RiFileChart2Line, RiFileChartFill, RiFileChartLine, RiFileCheckFill, RiFileCheckLine, RiFileCloseFill, RiFileCloseLine, RiFileCloudFill, RiFileCloudLine, RiFileCodeFill, RiFileCodeLine, RiFileCopy2Fill, RiFileCopy2Line, RiFileCopyFill, RiFileCopyLine, RiFileDamageFill, RiFileDamageLine, RiFileDownloadFill, RiFileDownloadLine, RiFileEditFill, RiFileEditLine, RiFileExcel2Fill, RiFileExcel2Line, RiFileExcelFill, RiFileExcelLine, RiFileFill, RiFileForbidFill, RiFileForbidLine, RiFileGifFill, RiFileGifLine, RiFileHistoryFill, RiFileHistoryLine, RiFileHwpFill, RiFileHwpLine, RiFileImageFill, RiFileImageLine, RiFileInfoFill, RiFileInfoLine, RiFileLine, RiFileList2Fill, RiFileList2Line, RiFileList3Fill, RiFileList3Line, RiFileListFill, RiFileListLine, RiFileLockFill, RiFileLockLine, RiFileMarkedFill, RiFileMarkedLine, RiFileMusicFill, RiFileMusicLine, RiFilePaper2Fill, RiFilePaper2Line, RiFilePaperFill, RiFilePaperLine, RiFilePdf2Fill, RiFilePdf2Line, RiFilePdfFill, RiFilePdfLine, RiFilePpt2Fill, RiFilePpt2Line, RiFilePptFill, RiFilePptLine, RiFileReduceFill, RiFileReduceLine, RiFileSearchFill, RiFileSearchLine, RiFileSettingsFill, RiFileSettingsLine, RiFileShield2Fill, RiFileShield2Line, RiFileShieldFill, RiFileShieldLine, RiFileShredFill, RiFileShredLine, RiFileTextFill, RiFileTextLine, RiFileTransferFill, RiFileTransferLine, RiFileUnknowFill, RiFileUnknowLine, RiFileUploadFill, RiFileUploadLine, RiFileUserFill, RiFileUserLine, RiFileVideoFill, RiFileVideoLine, RiFileWarningFill, RiFileWarningLine, RiFileWord2Fill, RiFileWord2Line, RiFileWordFill, RiFileWordLine, RiFileZipFill, RiFileZipLine, RiFolder2Fill, RiFolder2Line, RiFolder3Fill, RiFolder3Line, RiFolder4Fill, RiFolder4Line, RiFolder5Fill, RiFolder5Line, RiFolder6Fill, RiFolder6Line, RiFolderAddFill, RiFolderAddLine, RiFolderChart2Fill, RiFolderChart2Line, RiFolderChartFill, RiFolderChartLine, RiFolderCheckFill, RiFolderCheckLine, RiFolderCloseFill, RiFolderCloseLine, RiFolderCloudFill, RiFolderCloudLine, RiFolderDownloadFill, RiFolderDownloadLine, RiFolderFill, RiFolderForbidFill, RiFolderForbidLine, RiFolderHistoryFill, RiFolderHistoryLine, RiFolderImageFill, RiFolderImageLine, RiFolderInfoFill, RiFolderInfoLine, RiFolderKeyholeFill, RiFolderKeyholeLine, RiFolderLine, RiFolderLockFill, RiFolderLockLine, RiFolderMusicFill, RiFolderMusicLine, RiFolderOpenFill, RiFolderOpenLine, RiFolderReceivedFill, RiFolderReceivedLine, RiFolderReduceFill, RiFolderReduceLine, RiFolderSettingsFill, RiFolderSettingsLine, RiFolderSharedFill, RiFolderSharedLine, RiFolderShield2Fill, RiFolderShield2Line, RiFolderShieldFill, RiFolderShieldLine, RiFolderTransferFill, RiFolderTransferLine, RiFolderUnknowFill, RiFolderUnknowLine, RiFolderUploadFill, RiFolderUploadLine, RiFolderUserFill, RiFolderUserLine, RiFolderVideoFill, RiFolderVideoLine, RiFolderWarningFill, RiFolderWarningLine, RiFolderZipFill, RiFolderZipLine, RiFoldersFill, RiFoldersLine, RiKeynoteFill, RiKeynoteLine, RiMarkdownFill, RiMarkdownLine, RiNewsFill, RiNewsLine, RiNewspaperFill, RiNewspaperLine, RiNumbersFill, RiNumbersLine, RiPagesFill, RiPagesLine, RiReceiptFill, RiReceiptLine, RiStickyNote2Fill, RiStickyNote2Line, RiStickyNoteAddFill, RiStickyNoteAddLine, RiStickyNoteFill, RiStickyNoteLine, RiSurveyFill, RiSurveyLine, RiTaskFill, RiTaskLine, RiTodoFill, RiTodoLine, RiAB, RiAiGenerate2, RiAiGenerateText, RiAiGenerate, RiAlignBottom, RiAlignCenter, RiAlignJustify, RiAlignLeft, RiAlignRight, RiAlignTop, RiAlignVertically, RiAsterisk, RiAttachment2, RiBold, RiBringForward, RiBringToFront, RiCalendarView, RiCarouselView, RiCodeBlock, RiCodeView, RiCustomSize, RiDeleteColumn, RiDeleteRow, RiDoubleQuotesL, RiDoubleQuotesR, RiDraggable, RiDropdownList, RiEmphasisCn, RiEmphasis, RiEnglishInput, RiFlowChart, RiFocusMode, RiFontColor, RiFontFamily, RiFontMono, RiFontSansSerif, RiFontSans, RiFontSize2, RiFontSizeAi, RiFontSize, RiFormatClear, RiFormula, RiFunctions, RiGalleryView2, RiGalleryView, RiH1, RiH2, RiH3, RiH4, RiH5, RiH6, RiHand, RiHashtag, RiHeading, RiIndentDecrease, RiIndentIncrease, RiInfoI, RiInputCursorMove, RiInputField, RiInsertColumnLeft, RiInsertColumnRight, RiInsertRowBottom, RiInsertRowTop, RiItalic, RiKanbanView2, RiKanbanView, RiLetterSpacing2, RiLineHeight2, RiLineHeight, RiLinkM, RiLinkUnlinkM, RiLinkUnlink, RiLink, RiListCheck2, RiListCheck3, RiListCheck, RiListIndefinite, RiListOrdered2, RiListOrdered, RiListRadio, RiListUnordered, RiListView, RiMergeCellsHorizontal, RiMergeCellsVertical, RiMindMap, RiNodeTree, RiNumber0, RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6, RiNumber7, RiNumber8, RiNumber9, RiOmega, RiOrganizationChart, RiOverline, RiPageSeparator, RiParagraph, RiPinyinInput, RiQuestionMark, RiQuoteText, RiRoundedCorner, RiSendBackward, RiSendToBack, RiSeparator, RiSingleQuotesL, RiSingleQuotesR, RiSketching, RiSlashCommands2, RiSlashCommands, RiSlideshowView, RiSortAlphabetAsc, RiSortAlphabetDesc, RiSortAsc, RiSortDesc, RiSortNumberAsc, RiSortNumberDesc, RiSpace, RiSplitCellsHorizontal, RiSplitCellsVertical, RiSquareRoot, RiStackedView, RiStrikethrough2, RiStrikethrough, RiSubscript2, RiSubscript, RiSuperscript2, RiSuperscript, RiTable2, RiTable3, RiTableView, RiTextBlock, RiTextDirectionL, RiTextDirectionR, RiTextSnippet, RiTextSpacing, RiTextWrap, RiText, RiTimelineView, RiTranslate2, RiTranslateAi2, RiTranslateAi, RiTranslate, RiUnderline, RiWubiInput, Ri24HoursFill, Ri24HoursLine, RiAuctionFill, RiAuctionLine, RiBankCard2Fill, RiBankCard2Line, RiBankCardFill, RiBankCardLine, RiBitCoinFill, RiBitCoinLine, RiBnbFill, RiBnbLine, RiBtcFill, RiBtcLine, RiCashFill, RiCashLine, RiCoinFill, RiCoinLine, RiCoinsFill, RiCoinsLine, RiCopperCoinFill, RiCopperCoinLine, RiCopperDiamondFill, RiCopperDiamondLine, RiCoupon2Fill, RiCoupon2Line, RiCoupon3Fill, RiCoupon3Line, RiCoupon4Fill, RiCoupon4Line, RiCoupon5Fill, RiCoupon5Line, RiCouponFill, RiCouponLine, RiCurrencyFill, RiCurrencyLine, RiDiscountPercentFill, RiDiscountPercentLine, RiEthFill, RiEthLine, RiExchange2Fill, RiExchange2Line, RiExchangeBoxFill, RiExchangeBoxLine, RiExchangeCnyFill, RiExchangeCnyLine, RiExchangeDollarFill, RiExchangeDollarLine, RiExchangeFill, RiExchangeFundsFill, RiExchangeFundsLine, RiExchangeLine, RiFundsBoxFill, RiFundsBoxLine, RiFundsFill, RiFundsLine, RiGift2Fill, RiGift2Line, RiGiftFill, RiGiftLine, RiHandCoinFill, RiHandCoinLine, RiHandHeartFill, RiHandHeartLine, RiIncreaseDecreaseFill, RiIncreaseDecreaseLine, RiMoneyCnyBoxFill, RiMoneyCnyBoxLine, RiMoneyCnyCircleFill, RiMoneyCnyCircleLine, RiMoneyDollarBoxFill, RiMoneyDollarBoxLine, RiMoneyDollarCircleFill, RiMoneyDollarCircleLine, RiMoneyEuroBoxFill, RiMoneyEuroBoxLine, RiMoneyEuroCircleFill, RiMoneyEuroCircleLine, RiMoneyPoundBoxFill, RiMoneyPoundBoxLine, RiMoneyPoundCircleFill, RiMoneyPoundCircleLine, RiMoneyRupeeCircleFill, RiMoneyRupeeCircleLine, RiNftFill, RiNftLine, RiP2pFill, RiP2pLine, RiPercentFill, RiPercentLine, RiPriceTag2Fill, RiPriceTag2Line, RiPriceTag3Fill, RiPriceTag3Line, RiPriceTagFill, RiPriceTagLine, RiRedPacketFill, RiRedPacketLine, RiRefund2Fill, RiRefund2Line, RiRefundFill, RiRefundLine, RiSafe2Fill, RiSafe2Line, RiSafe3Fill, RiSafe3Line, RiSafeFill, RiSafeLine, RiSecurePaymentFill, RiSecurePaymentLine, RiShoppingBag2Fill, RiShoppingBag2Line, RiShoppingBag3Fill, RiShoppingBag3Line, RiShoppingBag4Fill, RiShoppingBag4Line, RiShoppingBagFill, RiShoppingBagLine, RiShoppingBasket2Fill, RiShoppingBasket2Line, RiShoppingBasketFill, RiShoppingBasketLine, RiShoppingCart2Fill, RiShoppingCart2Line, RiShoppingCartFill, RiShoppingCartLine, RiStockFill, RiStockLine, RiSwap2Fill, RiSwap2Line, RiSwap3Fill, RiSwap3Line, RiSwapBoxFill, RiSwapBoxLine, RiSwapFill, RiSwapLine, RiTicket2Fill, RiTicket2Line, RiTicketFill, RiTicketLine, RiTokenSwapFill, RiTokenSwapLine, RiTrophyFill, RiTrophyLine, RiVipCrown2Fill, RiVipCrown2Line, RiVipCrownFill, RiVipCrownLine, RiVipDiamondFill, RiVipDiamondLine, RiVipFill, RiVipLine, RiWallet2Fill, RiWallet2Line, RiWallet3Fill, RiWallet3Line, RiWalletFill, RiWalletLine, RiWaterFlashFill, RiWaterFlashLine, RiXrpFill, RiXrpLine, RiXtzFill, RiXtzLine, RiBeerFill, RiBeerLine, RiBowlFill, RiBowlLine, RiBreadFill, RiBreadLine, RiCake2Fill, RiCake2Line, RiCake3Fill, RiCake3Line, RiCakeFill, RiCakeLine, RiCupFill, RiCupLine, RiDrinks2Fill, RiDrinks2Line, RiDrinksFill, RiDrinksLine, RiGoblet2Fill, RiGoblet2Line, RiGobletFill, RiGobletLine, RiKnifeBloodFill, RiKnifeBloodLine, RiKnifeFill, RiKnifeLine, RiRestaurant2Fill, RiRestaurant2Line, RiRestaurantFill, RiRestaurantLine, RiAedElectrodesFill, RiAedElectrodesLine, RiAedFill, RiAedLine, RiBrain2Fill, RiBrain2Line, RiBrainFill, RiBrainLine, RiCapsuleFill, RiCapsuleLine, RiDislikeFill, RiDislikeLine, RiDnaFill, RiDnaLine, RiDossierFill, RiDossierLine, RiDropperFill, RiDropperLine, RiEmpathizeFill, RiEmpathizeLine, RiFirstAidKitFill, RiFirstAidKitLine, RiFlaskFill, RiFlaskLine, RiHandSanitizerFill, RiHandSanitizerLine, RiHealthBookFill, RiHealthBookLine, RiHeart2Fill, RiHeart2Line, RiHeart3Fill, RiHeart3Line, RiHeartAdd2Fill, RiHeartAdd2Line, RiHeartAddFill, RiHeartAddLine, RiHeartFill, RiHeartLine, RiHeartPulseFill, RiHeartPulseLine, RiHeartsFill, RiHeartsLine, RiInfraredThermometerFill, RiInfraredThermometerLine, RiLungsFill, RiLungsLine, RiMedicineBottleFill, RiMedicineBottleLine, RiMentalHealthFill, RiMentalHealthLine, RiMicroscopeFill, RiMicroscopeLine, RiNurseFill, RiNurseLine, RiPsychotherapyFill, RiPsychotherapyLine, RiPulseAiFill, RiPulseAiLine, RiPulseFill, RiPulseLine, RiRestTimeFill, RiRestTimeLine, RiStethoscopeFill, RiStethoscopeLine, RiSurgicalMaskFill, RiSurgicalMaskLine, RiSyringeFill, RiSyringeLine, RiTestTubeFill, RiTestTubeLine, RiThermometerFill, RiThermometerLine, RiVirusFill, RiVirusLine, RiZzzFill, RiZzzLine, RiAlibabaCloudFill, RiAlibabaCloudLine, RiAlipayFill, RiAlipayLine, RiAmazonFill, RiAmazonLine, RiAndroidFill, RiAndroidLine, RiAngularjsFill, RiAngularjsLine, RiAnthropicFill, RiAnthropicLine, RiAppStoreFill, RiAppStoreLine, RiAppleFill, RiAppleLine, RiBaiduFill, RiBaiduLine, RiBardFill, RiBardLine, RiBehanceFill, RiBehanceLine, RiBilibiliFill, RiBilibiliLine, RiBlenderFill, RiBlenderLine, RiBloggerFill, RiBloggerLine, RiBlueskyFill, RiBlueskyLine, RiBootstrapFill, RiBootstrapLine, RiCentosFill, RiCentosLine, RiChromeFill, RiChromeLine, RiClaudeFill, RiClaudeLine, RiCodepenFill, RiCodepenLine, RiCopilotFill, RiCopilotLine, RiCoreosFill, RiCoreosLine, RiDingdingFill, RiDingdingLine, RiDiscordFill, RiDiscordLine, RiDisqusFill, RiDisqusLine, RiDoubanFill, RiDoubanLine, RiDribbbleFill, RiDribbbleLine, RiDriveFill, RiDriveLine, RiDropboxFill, RiDropboxLine, RiEdgeFill, RiEdgeLine, RiEdgeNewFill, RiEdgeNewLine, RiEvernoteFill, RiEvernoteLine, RiFacebookBoxFill, RiFacebookBoxLine, RiFacebookCircleFill, RiFacebookCircleLine, RiFacebookFill, RiFacebookLine, RiFediverseFill, RiFediverseLine, RiFinderFill, RiFinderLine, RiFirebaseFill, RiFirebaseLine, RiFirefoxFill, RiFirefoxLine, RiFlickrFill, RiFlickrLine, RiFlutterFill, RiFlutterLine, RiFriendicaFill, RiFriendicaLine, RiGatsbyFill, RiGatsbyLine, RiGeminiFill, RiGeminiLine, RiGithubFill, RiGithubLine, RiGitlabFill, RiGitlabLine, RiGoogleFill, RiGoogleLine, RiGooglePlayFill, RiGooglePlayLine, RiHonorOfKingsFill, RiHonorOfKingsLine, RiIeFill, RiIeLine, RiInstagramFill, RiInstagramLine, RiInvisionFill, RiInvisionLine, RiJavaFill, RiJavaLine, RiKakaoTalkFill, RiKakaoTalkLine, RiKickFill, RiKickLine, RiLineFill, RiLineLine, RiLinkedinBoxFill, RiLinkedinBoxLine, RiLinkedinFill, RiLinkedinLine, RiMastercardFill, RiMastercardLine, RiMastodonFill, RiMastodonLine, RiMediumFill, RiMediumLine, RiMessengerFill, RiMessengerLine, RiMetaFill, RiMetaLine, RiMicrosoftFill, RiMicrosoftLine, RiMicrosoftLoopFill, RiMicrosoftLoopLine, RiMiniProgramFill, RiMiniProgramLine, RiMixtralFill, RiMixtralLine, RiNeteaseCloudMusicFill, RiNeteaseCloudMusicLine, RiNetflixFill, RiNetflixLine, RiNextjsFill, RiNextjsLine, RiNodejsFill, RiNodejsLine, RiNotionFill, RiNotionLine, RiNpmjsFill, RiNpmjsLine, RiOpenSourceFill, RiOpenSourceLine, RiOpenaiFill, RiOpenaiLine, RiOpenbaseFill, RiOpenbaseLine, RiOperaFill, RiOperaLine, RiPatreonFill, RiPatreonLine, RiPaypalFill, RiPaypalLine, RiPerplexityFill, RiPerplexityLine, RiPinterestFill, RiPinterestLine, RiPixFill, RiPixLine, RiPixelfedFill, RiPixelfedLine, RiPlaystationFill, RiPlaystationLine, RiProductHuntFill, RiProductHuntLine, RiQqFill, RiQqLine, RiReactjsFill, RiReactjsLine, RiRedditFill, RiRedditLine, RiRemixRunFill, RiRemixRunLine, RiRemixiconFill, RiRemixiconLine, RiSafariFill, RiSafariLine, RiSkypeFill, RiSkypeLine, RiSlackFill, RiSlackLine, RiSnapchatFill, RiSnapchatLine, RiSoundcloudFill, RiSoundcloudLine, RiSpectrumFill, RiSpectrumLine, RiSpotifyFill, RiSpotifyLine, RiStackOverflowFill, RiStackOverflowLine, RiStackshareFill, RiStackshareLine, RiSteamFill, RiSteamLine, RiSupabaseFill, RiSupabaseLine, RiSvelteFill, RiSvelteLine, RiSwitchFill, RiSwitchLine, RiTailwindCssFill, RiTailwindCssLine, RiTaobaoFill, RiTaobaoLine, RiTelegram2Fill, RiTelegram2Line, RiTelegramFill, RiTelegramLine, RiThreadsFill, RiThreadsLine, RiTiktokFill, RiTiktokLine, RiTrelloFill, RiTrelloLine, RiTumblrFill, RiTumblrLine, RiTwitchFill, RiTwitchLine, RiTwitterFill, RiTwitterLine, RiTwitterXFill, RiTwitterXLine, RiUbuntuFill, RiUbuntuLine, RiUnsplashFill, RiUnsplashLine, RiVercelFill, RiVercelLine, RiVimeoFill, RiVimeoLine, RiVisaFill, RiVisaLine, RiVkFill, RiVkLine, RiVuejsFill, RiVuejsLine, RiWebhookFill, RiWebhookLine, RiWechat2Fill, RiWechat2Line, RiWechatChannelsFill, RiWechatChannelsLine, RiWechatFill, RiWechatLine, RiWechatPayFill, RiWechatPayLine, RiWeiboFill, RiWeiboLine, RiWhatsappFill, RiWhatsappLine, RiWindowsFill, RiWindowsLine, RiWordpressFill, RiWordpressLine, RiXboxFill, RiXboxLine, RiXingFill, RiXingLine, RiYoutubeFill, RiYoutubeLine, RiYuqueFill, RiYuqueLine, RiZcoolFill, RiZcoolLine, RiZhihuFill, RiZhihuLine, RiAnchorFill, RiAnchorLine, RiBarricadeFill, RiBarricadeLine, RiBikeFill, RiBikeLine, RiBus2Fill, RiBus2Line, RiBusFill, RiBusLine, RiBusWifiFill, RiBusWifiLine, RiCarFill, RiCarLine, RiCarWashingFill, RiCarWashingLine, RiCaravanFill, RiCaravanLine, RiChargingPile2Fill, RiChargingPile2Line, RiChargingPileFill, RiChargingPileLine, RiChinaRailwayFill, RiChinaRailwayLine, RiCompass2Fill, RiCompass2Line, RiCompass3Fill, RiCompass3Line, RiCompass4Fill, RiCompass4Line, RiCompassDiscoverFill, RiCompassDiscoverLine, RiCompassFill, RiCompassLine, RiDirectionFill, RiDirectionLine, RiEBike2Fill, RiEBike2Line, RiEBikeFill, RiEBikeLine, RiEarthFill, RiEarthLine, RiFlightLandFill, RiFlightLandLine, RiFlightTakeoffFill, RiFlightTakeoffLine, RiFootprintFill, RiFootprintLine, RiGasStationFill, RiGasStationLine, RiGlobeFill, RiGlobeLine, RiGuideFill, RiGuideLine, RiHotelBedFill, RiHotelBedLine, RiLifebuoyFill, RiLifebuoyLine, RiLuggageCartFill, RiLuggageCartLine, RiLuggageDepositFill, RiLuggageDepositLine, RiMap2Fill, RiMap2Line, RiMapFill, RiMapLine, RiMapPin2Fill, RiMapPin2Line, RiMapPin3Fill, RiMapPin3Line, RiMapPin4Fill, RiMapPin4Line, RiMapPin5Fill, RiMapPin5Line, RiMapPinAddFill, RiMapPinAddLine, RiMapPinFill, RiMapPinLine, RiMapPinRangeFill, RiMapPinRangeLine, RiMapPinTimeFill, RiMapPinTimeLine, RiMapPinUserFill, RiMapPinUserLine, RiMotorbikeFill, RiMotorbikeLine, RiNavigationFill, RiNavigationLine, RiOilFill, RiOilLine, RiParkingBoxFill, RiParkingBoxLine, RiParkingFill, RiParkingLine, RiPassportFill, RiPassportLine, RiPinDistanceFill, RiPinDistanceLine, RiPlaneFill, RiPlaneLine, RiPlanetFill, RiPlanetLine, RiPoliceCarFill, RiPoliceCarLine, RiPushpin2Fill, RiPushpin2Line, RiPushpinFill, RiPushpinLine, RiRidingFill, RiRidingLine, RiRoadMapFill, RiRoadMapLine, RiRoadsterFill, RiRoadsterLine, RiRocket2Fill, RiRocket2Line;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "ri:RiFileAddFill": return [3 /*break*/, 1];
                        case "ri:RiFileAddLine": return [3 /*break*/, 3];
                        case "ri:RiFileChart2Fill": return [3 /*break*/, 5];
                        case "ri:RiFileChart2Line": return [3 /*break*/, 7];
                        case "ri:RiFileChartFill": return [3 /*break*/, 9];
                        case "ri:RiFileChartLine": return [3 /*break*/, 11];
                        case "ri:RiFileCheckFill": return [3 /*break*/, 13];
                        case "ri:RiFileCheckLine": return [3 /*break*/, 15];
                        case "ri:RiFileCloseFill": return [3 /*break*/, 17];
                        case "ri:RiFileCloseLine": return [3 /*break*/, 19];
                        case "ri:RiFileCloudFill": return [3 /*break*/, 21];
                        case "ri:RiFileCloudLine": return [3 /*break*/, 23];
                        case "ri:RiFileCodeFill": return [3 /*break*/, 25];
                        case "ri:RiFileCodeLine": return [3 /*break*/, 27];
                        case "ri:RiFileCopy2Fill": return [3 /*break*/, 29];
                        case "ri:RiFileCopy2Line": return [3 /*break*/, 31];
                        case "ri:RiFileCopyFill": return [3 /*break*/, 33];
                        case "ri:RiFileCopyLine": return [3 /*break*/, 35];
                        case "ri:RiFileDamageFill": return [3 /*break*/, 37];
                        case "ri:RiFileDamageLine": return [3 /*break*/, 39];
                        case "ri:RiFileDownloadFill": return [3 /*break*/, 41];
                        case "ri:RiFileDownloadLine": return [3 /*break*/, 43];
                        case "ri:RiFileEditFill": return [3 /*break*/, 45];
                        case "ri:RiFileEditLine": return [3 /*break*/, 47];
                        case "ri:RiFileExcel2Fill": return [3 /*break*/, 49];
                        case "ri:RiFileExcel2Line": return [3 /*break*/, 51];
                        case "ri:RiFileExcelFill": return [3 /*break*/, 53];
                        case "ri:RiFileExcelLine": return [3 /*break*/, 55];
                        case "ri:RiFileFill": return [3 /*break*/, 57];
                        case "ri:RiFileForbidFill": return [3 /*break*/, 59];
                        case "ri:RiFileForbidLine": return [3 /*break*/, 61];
                        case "ri:RiFileGifFill": return [3 /*break*/, 63];
                        case "ri:RiFileGifLine": return [3 /*break*/, 65];
                        case "ri:RiFileHistoryFill": return [3 /*break*/, 67];
                        case "ri:RiFileHistoryLine": return [3 /*break*/, 69];
                        case "ri:RiFileHwpFill": return [3 /*break*/, 71];
                        case "ri:RiFileHwpLine": return [3 /*break*/, 73];
                        case "ri:RiFileImageFill": return [3 /*break*/, 75];
                        case "ri:RiFileImageLine": return [3 /*break*/, 77];
                        case "ri:RiFileInfoFill": return [3 /*break*/, 79];
                        case "ri:RiFileInfoLine": return [3 /*break*/, 81];
                        case "ri:RiFileLine": return [3 /*break*/, 83];
                        case "ri:RiFileList2Fill": return [3 /*break*/, 85];
                        case "ri:RiFileList2Line": return [3 /*break*/, 87];
                        case "ri:RiFileList3Fill": return [3 /*break*/, 89];
                        case "ri:RiFileList3Line": return [3 /*break*/, 91];
                        case "ri:RiFileListFill": return [3 /*break*/, 93];
                        case "ri:RiFileListLine": return [3 /*break*/, 95];
                        case "ri:RiFileLockFill": return [3 /*break*/, 97];
                        case "ri:RiFileLockLine": return [3 /*break*/, 99];
                        case "ri:RiFileMarkedFill": return [3 /*break*/, 101];
                        case "ri:RiFileMarkedLine": return [3 /*break*/, 103];
                        case "ri:RiFileMusicFill": return [3 /*break*/, 105];
                        case "ri:RiFileMusicLine": return [3 /*break*/, 107];
                        case "ri:RiFilePaper2Fill": return [3 /*break*/, 109];
                        case "ri:RiFilePaper2Line": return [3 /*break*/, 111];
                        case "ri:RiFilePaperFill": return [3 /*break*/, 113];
                        case "ri:RiFilePaperLine": return [3 /*break*/, 115];
                        case "ri:RiFilePdf2Fill": return [3 /*break*/, 117];
                        case "ri:RiFilePdf2Line": return [3 /*break*/, 119];
                        case "ri:RiFilePdfFill": return [3 /*break*/, 121];
                        case "ri:RiFilePdfLine": return [3 /*break*/, 123];
                        case "ri:RiFilePpt2Fill": return [3 /*break*/, 125];
                        case "ri:RiFilePpt2Line": return [3 /*break*/, 127];
                        case "ri:RiFilePptFill": return [3 /*break*/, 129];
                        case "ri:RiFilePptLine": return [3 /*break*/, 131];
                        case "ri:RiFileReduceFill": return [3 /*break*/, 133];
                        case "ri:RiFileReduceLine": return [3 /*break*/, 135];
                        case "ri:RiFileSearchFill": return [3 /*break*/, 137];
                        case "ri:RiFileSearchLine": return [3 /*break*/, 139];
                        case "ri:RiFileSettingsFill": return [3 /*break*/, 141];
                        case "ri:RiFileSettingsLine": return [3 /*break*/, 143];
                        case "ri:RiFileShield2Fill": return [3 /*break*/, 145];
                        case "ri:RiFileShield2Line": return [3 /*break*/, 147];
                        case "ri:RiFileShieldFill": return [3 /*break*/, 149];
                        case "ri:RiFileShieldLine": return [3 /*break*/, 151];
                        case "ri:RiFileShredFill": return [3 /*break*/, 153];
                        case "ri:RiFileShredLine": return [3 /*break*/, 155];
                        case "ri:RiFileTextFill": return [3 /*break*/, 157];
                        case "ri:RiFileTextLine": return [3 /*break*/, 159];
                        case "ri:RiFileTransferFill": return [3 /*break*/, 161];
                        case "ri:RiFileTransferLine": return [3 /*break*/, 163];
                        case "ri:RiFileUnknowFill": return [3 /*break*/, 165];
                        case "ri:RiFileUnknowLine": return [3 /*break*/, 167];
                        case "ri:RiFileUploadFill": return [3 /*break*/, 169];
                        case "ri:RiFileUploadLine": return [3 /*break*/, 171];
                        case "ri:RiFileUserFill": return [3 /*break*/, 173];
                        case "ri:RiFileUserLine": return [3 /*break*/, 175];
                        case "ri:RiFileVideoFill": return [3 /*break*/, 177];
                        case "ri:RiFileVideoLine": return [3 /*break*/, 179];
                        case "ri:RiFileWarningFill": return [3 /*break*/, 181];
                        case "ri:RiFileWarningLine": return [3 /*break*/, 183];
                        case "ri:RiFileWord2Fill": return [3 /*break*/, 185];
                        case "ri:RiFileWord2Line": return [3 /*break*/, 187];
                        case "ri:RiFileWordFill": return [3 /*break*/, 189];
                        case "ri:RiFileWordLine": return [3 /*break*/, 191];
                        case "ri:RiFileZipFill": return [3 /*break*/, 193];
                        case "ri:RiFileZipLine": return [3 /*break*/, 195];
                        case "ri:RiFolder2Fill": return [3 /*break*/, 197];
                        case "ri:RiFolder2Line": return [3 /*break*/, 199];
                        case "ri:RiFolder3Fill": return [3 /*break*/, 201];
                        case "ri:RiFolder3Line": return [3 /*break*/, 203];
                        case "ri:RiFolder4Fill": return [3 /*break*/, 205];
                        case "ri:RiFolder4Line": return [3 /*break*/, 207];
                        case "ri:RiFolder5Fill": return [3 /*break*/, 209];
                        case "ri:RiFolder5Line": return [3 /*break*/, 211];
                        case "ri:RiFolder6Fill": return [3 /*break*/, 213];
                        case "ri:RiFolder6Line": return [3 /*break*/, 215];
                        case "ri:RiFolderAddFill": return [3 /*break*/, 217];
                        case "ri:RiFolderAddLine": return [3 /*break*/, 219];
                        case "ri:RiFolderChart2Fill": return [3 /*break*/, 221];
                        case "ri:RiFolderChart2Line": return [3 /*break*/, 223];
                        case "ri:RiFolderChartFill": return [3 /*break*/, 225];
                        case "ri:RiFolderChartLine": return [3 /*break*/, 227];
                        case "ri:RiFolderCheckFill": return [3 /*break*/, 229];
                        case "ri:RiFolderCheckLine": return [3 /*break*/, 231];
                        case "ri:RiFolderCloseFill": return [3 /*break*/, 233];
                        case "ri:RiFolderCloseLine": return [3 /*break*/, 235];
                        case "ri:RiFolderCloudFill": return [3 /*break*/, 237];
                        case "ri:RiFolderCloudLine": return [3 /*break*/, 239];
                        case "ri:RiFolderDownloadFill": return [3 /*break*/, 241];
                        case "ri:RiFolderDownloadLine": return [3 /*break*/, 243];
                        case "ri:RiFolderFill": return [3 /*break*/, 245];
                        case "ri:RiFolderForbidFill": return [3 /*break*/, 247];
                        case "ri:RiFolderForbidLine": return [3 /*break*/, 249];
                        case "ri:RiFolderHistoryFill": return [3 /*break*/, 251];
                        case "ri:RiFolderHistoryLine": return [3 /*break*/, 253];
                        case "ri:RiFolderImageFill": return [3 /*break*/, 255];
                        case "ri:RiFolderImageLine": return [3 /*break*/, 257];
                        case "ri:RiFolderInfoFill": return [3 /*break*/, 259];
                        case "ri:RiFolderInfoLine": return [3 /*break*/, 261];
                        case "ri:RiFolderKeyholeFill": return [3 /*break*/, 263];
                        case "ri:RiFolderKeyholeLine": return [3 /*break*/, 265];
                        case "ri:RiFolderLine": return [3 /*break*/, 267];
                        case "ri:RiFolderLockFill": return [3 /*break*/, 269];
                        case "ri:RiFolderLockLine": return [3 /*break*/, 271];
                        case "ri:RiFolderMusicFill": return [3 /*break*/, 273];
                        case "ri:RiFolderMusicLine": return [3 /*break*/, 275];
                        case "ri:RiFolderOpenFill": return [3 /*break*/, 277];
                        case "ri:RiFolderOpenLine": return [3 /*break*/, 279];
                        case "ri:RiFolderReceivedFill": return [3 /*break*/, 281];
                        case "ri:RiFolderReceivedLine": return [3 /*break*/, 283];
                        case "ri:RiFolderReduceFill": return [3 /*break*/, 285];
                        case "ri:RiFolderReduceLine": return [3 /*break*/, 287];
                        case "ri:RiFolderSettingsFill": return [3 /*break*/, 289];
                        case "ri:RiFolderSettingsLine": return [3 /*break*/, 291];
                        case "ri:RiFolderSharedFill": return [3 /*break*/, 293];
                        case "ri:RiFolderSharedLine": return [3 /*break*/, 295];
                        case "ri:RiFolderShield2Fill": return [3 /*break*/, 297];
                        case "ri:RiFolderShield2Line": return [3 /*break*/, 299];
                        case "ri:RiFolderShieldFill": return [3 /*break*/, 301];
                        case "ri:RiFolderShieldLine": return [3 /*break*/, 303];
                        case "ri:RiFolderTransferFill": return [3 /*break*/, 305];
                        case "ri:RiFolderTransferLine": return [3 /*break*/, 307];
                        case "ri:RiFolderUnknowFill": return [3 /*break*/, 309];
                        case "ri:RiFolderUnknowLine": return [3 /*break*/, 311];
                        case "ri:RiFolderUploadFill": return [3 /*break*/, 313];
                        case "ri:RiFolderUploadLine": return [3 /*break*/, 315];
                        case "ri:RiFolderUserFill": return [3 /*break*/, 317];
                        case "ri:RiFolderUserLine": return [3 /*break*/, 319];
                        case "ri:RiFolderVideoFill": return [3 /*break*/, 321];
                        case "ri:RiFolderVideoLine": return [3 /*break*/, 323];
                        case "ri:RiFolderWarningFill": return [3 /*break*/, 325];
                        case "ri:RiFolderWarningLine": return [3 /*break*/, 327];
                        case "ri:RiFolderZipFill": return [3 /*break*/, 329];
                        case "ri:RiFolderZipLine": return [3 /*break*/, 331];
                        case "ri:RiFoldersFill": return [3 /*break*/, 333];
                        case "ri:RiFoldersLine": return [3 /*break*/, 335];
                        case "ri:RiKeynoteFill": return [3 /*break*/, 337];
                        case "ri:RiKeynoteLine": return [3 /*break*/, 339];
                        case "ri:RiMarkdownFill": return [3 /*break*/, 341];
                        case "ri:RiMarkdownLine": return [3 /*break*/, 343];
                        case "ri:RiNewsFill": return [3 /*break*/, 345];
                        case "ri:RiNewsLine": return [3 /*break*/, 347];
                        case "ri:RiNewspaperFill": return [3 /*break*/, 349];
                        case "ri:RiNewspaperLine": return [3 /*break*/, 351];
                        case "ri:RiNumbersFill": return [3 /*break*/, 353];
                        case "ri:RiNumbersLine": return [3 /*break*/, 355];
                        case "ri:RiPagesFill": return [3 /*break*/, 357];
                        case "ri:RiPagesLine": return [3 /*break*/, 359];
                        case "ri:RiReceiptFill": return [3 /*break*/, 361];
                        case "ri:RiReceiptLine": return [3 /*break*/, 363];
                        case "ri:RiStickyNote2Fill": return [3 /*break*/, 365];
                        case "ri:RiStickyNote2Line": return [3 /*break*/, 367];
                        case "ri:RiStickyNoteAddFill": return [3 /*break*/, 369];
                        case "ri:RiStickyNoteAddLine": return [3 /*break*/, 371];
                        case "ri:RiStickyNoteFill": return [3 /*break*/, 373];
                        case "ri:RiStickyNoteLine": return [3 /*break*/, 375];
                        case "ri:RiSurveyFill": return [3 /*break*/, 377];
                        case "ri:RiSurveyLine": return [3 /*break*/, 379];
                        case "ri:RiTaskFill": return [3 /*break*/, 381];
                        case "ri:RiTaskLine": return [3 /*break*/, 383];
                        case "ri:RiTodoFill": return [3 /*break*/, 385];
                        case "ri:RiTodoLine": return [3 /*break*/, 387];
                        case "ri:RiAB": return [3 /*break*/, 389];
                        case "ri:RiAiGenerate2": return [3 /*break*/, 391];
                        case "ri:RiAiGenerateText": return [3 /*break*/, 393];
                        case "ri:RiAiGenerate": return [3 /*break*/, 395];
                        case "ri:RiAlignBottom": return [3 /*break*/, 397];
                        case "ri:RiAlignCenter": return [3 /*break*/, 399];
                        case "ri:RiAlignJustify": return [3 /*break*/, 401];
                        case "ri:RiAlignLeft": return [3 /*break*/, 403];
                        case "ri:RiAlignRight": return [3 /*break*/, 405];
                        case "ri:RiAlignTop": return [3 /*break*/, 407];
                        case "ri:RiAlignVertically": return [3 /*break*/, 409];
                        case "ri:RiAsterisk": return [3 /*break*/, 411];
                        case "ri:RiAttachment2": return [3 /*break*/, 413];
                        case "ri:RiBold": return [3 /*break*/, 415];
                        case "ri:RiBringForward": return [3 /*break*/, 417];
                        case "ri:RiBringToFront": return [3 /*break*/, 419];
                        case "ri:RiCalendarView": return [3 /*break*/, 421];
                        case "ri:RiCarouselView": return [3 /*break*/, 423];
                        case "ri:RiCodeBlock": return [3 /*break*/, 425];
                        case "ri:RiCodeView": return [3 /*break*/, 427];
                        case "ri:RiCustomSize": return [3 /*break*/, 429];
                        case "ri:RiDeleteColumn": return [3 /*break*/, 431];
                        case "ri:RiDeleteRow": return [3 /*break*/, 433];
                        case "ri:RiDoubleQuotesL": return [3 /*break*/, 435];
                        case "ri:RiDoubleQuotesR": return [3 /*break*/, 437];
                        case "ri:RiDraggable": return [3 /*break*/, 439];
                        case "ri:RiDropdownList": return [3 /*break*/, 441];
                        case "ri:RiEmphasisCn": return [3 /*break*/, 443];
                        case "ri:RiEmphasis": return [3 /*break*/, 445];
                        case "ri:RiEnglishInput": return [3 /*break*/, 447];
                        case "ri:RiFlowChart": return [3 /*break*/, 449];
                        case "ri:RiFocusMode": return [3 /*break*/, 451];
                        case "ri:RiFontColor": return [3 /*break*/, 453];
                        case "ri:RiFontFamily": return [3 /*break*/, 455];
                        case "ri:RiFontMono": return [3 /*break*/, 457];
                        case "ri:RiFontSansSerif": return [3 /*break*/, 459];
                        case "ri:RiFontSans": return [3 /*break*/, 461];
                        case "ri:RiFontSize2": return [3 /*break*/, 463];
                        case "ri:RiFontSizeAi": return [3 /*break*/, 465];
                        case "ri:RiFontSize": return [3 /*break*/, 467];
                        case "ri:RiFormatClear": return [3 /*break*/, 469];
                        case "ri:RiFormula": return [3 /*break*/, 471];
                        case "ri:RiFunctions": return [3 /*break*/, 473];
                        case "ri:RiGalleryView2": return [3 /*break*/, 475];
                        case "ri:RiGalleryView": return [3 /*break*/, 477];
                        case "ri:RiH1": return [3 /*break*/, 479];
                        case "ri:RiH2": return [3 /*break*/, 481];
                        case "ri:RiH3": return [3 /*break*/, 483];
                        case "ri:RiH4": return [3 /*break*/, 485];
                        case "ri:RiH5": return [3 /*break*/, 487];
                        case "ri:RiH6": return [3 /*break*/, 489];
                        case "ri:RiHand": return [3 /*break*/, 491];
                        case "ri:RiHashtag": return [3 /*break*/, 493];
                        case "ri:RiHeading": return [3 /*break*/, 495];
                        case "ri:RiIndentDecrease": return [3 /*break*/, 497];
                        case "ri:RiIndentIncrease": return [3 /*break*/, 499];
                        case "ri:RiInfoI": return [3 /*break*/, 501];
                        case "ri:RiInputCursorMove": return [3 /*break*/, 503];
                        case "ri:RiInputField": return [3 /*break*/, 505];
                        case "ri:RiInsertColumnLeft": return [3 /*break*/, 507];
                        case "ri:RiInsertColumnRight": return [3 /*break*/, 509];
                        case "ri:RiInsertRowBottom": return [3 /*break*/, 511];
                        case "ri:RiInsertRowTop": return [3 /*break*/, 513];
                        case "ri:RiItalic": return [3 /*break*/, 515];
                        case "ri:RiKanbanView2": return [3 /*break*/, 517];
                        case "ri:RiKanbanView": return [3 /*break*/, 519];
                        case "ri:RiLetterSpacing2": return [3 /*break*/, 521];
                        case "ri:RiLineHeight2": return [3 /*break*/, 523];
                        case "ri:RiLineHeight": return [3 /*break*/, 525];
                        case "ri:RiLinkM": return [3 /*break*/, 527];
                        case "ri:RiLinkUnlinkM": return [3 /*break*/, 529];
                        case "ri:RiLinkUnlink": return [3 /*break*/, 531];
                        case "ri:RiLink": return [3 /*break*/, 533];
                        case "ri:RiListCheck2": return [3 /*break*/, 535];
                        case "ri:RiListCheck3": return [3 /*break*/, 537];
                        case "ri:RiListCheck": return [3 /*break*/, 539];
                        case "ri:RiListIndefinite": return [3 /*break*/, 541];
                        case "ri:RiListOrdered2": return [3 /*break*/, 543];
                        case "ri:RiListOrdered": return [3 /*break*/, 545];
                        case "ri:RiListRadio": return [3 /*break*/, 547];
                        case "ri:RiListUnordered": return [3 /*break*/, 549];
                        case "ri:RiListView": return [3 /*break*/, 551];
                        case "ri:RiMergeCellsHorizontal": return [3 /*break*/, 553];
                        case "ri:RiMergeCellsVertical": return [3 /*break*/, 555];
                        case "ri:RiMindMap": return [3 /*break*/, 557];
                        case "ri:RiNodeTree": return [3 /*break*/, 559];
                        case "ri:RiNumber0": return [3 /*break*/, 561];
                        case "ri:RiNumber1": return [3 /*break*/, 563];
                        case "ri:RiNumber2": return [3 /*break*/, 565];
                        case "ri:RiNumber3": return [3 /*break*/, 567];
                        case "ri:RiNumber4": return [3 /*break*/, 569];
                        case "ri:RiNumber5": return [3 /*break*/, 571];
                        case "ri:RiNumber6": return [3 /*break*/, 573];
                        case "ri:RiNumber7": return [3 /*break*/, 575];
                        case "ri:RiNumber8": return [3 /*break*/, 577];
                        case "ri:RiNumber9": return [3 /*break*/, 579];
                        case "ri:RiOmega": return [3 /*break*/, 581];
                        case "ri:RiOrganizationChart": return [3 /*break*/, 583];
                        case "ri:RiOverline": return [3 /*break*/, 585];
                        case "ri:RiPageSeparator": return [3 /*break*/, 587];
                        case "ri:RiParagraph": return [3 /*break*/, 589];
                        case "ri:RiPinyinInput": return [3 /*break*/, 591];
                        case "ri:RiQuestionMark": return [3 /*break*/, 593];
                        case "ri:RiQuoteText": return [3 /*break*/, 595];
                        case "ri:RiRoundedCorner": return [3 /*break*/, 597];
                        case "ri:RiSendBackward": return [3 /*break*/, 599];
                        case "ri:RiSendToBack": return [3 /*break*/, 601];
                        case "ri:RiSeparator": return [3 /*break*/, 603];
                        case "ri:RiSingleQuotesL": return [3 /*break*/, 605];
                        case "ri:RiSingleQuotesR": return [3 /*break*/, 607];
                        case "ri:RiSketching": return [3 /*break*/, 609];
                        case "ri:RiSlashCommands2": return [3 /*break*/, 611];
                        case "ri:RiSlashCommands": return [3 /*break*/, 613];
                        case "ri:RiSlideshowView": return [3 /*break*/, 615];
                        case "ri:RiSortAlphabetAsc": return [3 /*break*/, 617];
                        case "ri:RiSortAlphabetDesc": return [3 /*break*/, 619];
                        case "ri:RiSortAsc": return [3 /*break*/, 621];
                        case "ri:RiSortDesc": return [3 /*break*/, 623];
                        case "ri:RiSortNumberAsc": return [3 /*break*/, 625];
                        case "ri:RiSortNumberDesc": return [3 /*break*/, 627];
                        case "ri:RiSpace": return [3 /*break*/, 629];
                        case "ri:RiSplitCellsHorizontal": return [3 /*break*/, 631];
                        case "ri:RiSplitCellsVertical": return [3 /*break*/, 633];
                        case "ri:RiSquareRoot": return [3 /*break*/, 635];
                        case "ri:RiStackedView": return [3 /*break*/, 637];
                        case "ri:RiStrikethrough2": return [3 /*break*/, 639];
                        case "ri:RiStrikethrough": return [3 /*break*/, 641];
                        case "ri:RiSubscript2": return [3 /*break*/, 643];
                        case "ri:RiSubscript": return [3 /*break*/, 645];
                        case "ri:RiSuperscript2": return [3 /*break*/, 647];
                        case "ri:RiSuperscript": return [3 /*break*/, 649];
                        case "ri:RiTable2": return [3 /*break*/, 651];
                        case "ri:RiTable3": return [3 /*break*/, 653];
                        case "ri:RiTableView": return [3 /*break*/, 655];
                        case "ri:RiTextBlock": return [3 /*break*/, 657];
                        case "ri:RiTextDirectionL": return [3 /*break*/, 659];
                        case "ri:RiTextDirectionR": return [3 /*break*/, 661];
                        case "ri:RiTextSnippet": return [3 /*break*/, 663];
                        case "ri:RiTextSpacing": return [3 /*break*/, 665];
                        case "ri:RiTextWrap": return [3 /*break*/, 667];
                        case "ri:RiText": return [3 /*break*/, 669];
                        case "ri:RiTimelineView": return [3 /*break*/, 671];
                        case "ri:RiTranslate2": return [3 /*break*/, 673];
                        case "ri:RiTranslateAi2": return [3 /*break*/, 675];
                        case "ri:RiTranslateAi": return [3 /*break*/, 677];
                        case "ri:RiTranslate": return [3 /*break*/, 679];
                        case "ri:RiUnderline": return [3 /*break*/, 681];
                        case "ri:RiWubiInput": return [3 /*break*/, 683];
                        case "ri:Ri24HoursFill": return [3 /*break*/, 685];
                        case "ri:Ri24HoursLine": return [3 /*break*/, 687];
                        case "ri:RiAuctionFill": return [3 /*break*/, 689];
                        case "ri:RiAuctionLine": return [3 /*break*/, 691];
                        case "ri:RiBankCard2Fill": return [3 /*break*/, 693];
                        case "ri:RiBankCard2Line": return [3 /*break*/, 695];
                        case "ri:RiBankCardFill": return [3 /*break*/, 697];
                        case "ri:RiBankCardLine": return [3 /*break*/, 699];
                        case "ri:RiBitCoinFill": return [3 /*break*/, 701];
                        case "ri:RiBitCoinLine": return [3 /*break*/, 703];
                        case "ri:RiBnbFill": return [3 /*break*/, 705];
                        case "ri:RiBnbLine": return [3 /*break*/, 707];
                        case "ri:RiBtcFill": return [3 /*break*/, 709];
                        case "ri:RiBtcLine": return [3 /*break*/, 711];
                        case "ri:RiCashFill": return [3 /*break*/, 713];
                        case "ri:RiCashLine": return [3 /*break*/, 715];
                        case "ri:RiCoinFill": return [3 /*break*/, 717];
                        case "ri:RiCoinLine": return [3 /*break*/, 719];
                        case "ri:RiCoinsFill": return [3 /*break*/, 721];
                        case "ri:RiCoinsLine": return [3 /*break*/, 723];
                        case "ri:RiCopperCoinFill": return [3 /*break*/, 725];
                        case "ri:RiCopperCoinLine": return [3 /*break*/, 727];
                        case "ri:RiCopperDiamondFill": return [3 /*break*/, 729];
                        case "ri:RiCopperDiamondLine": return [3 /*break*/, 731];
                        case "ri:RiCoupon2Fill": return [3 /*break*/, 733];
                        case "ri:RiCoupon2Line": return [3 /*break*/, 735];
                        case "ri:RiCoupon3Fill": return [3 /*break*/, 737];
                        case "ri:RiCoupon3Line": return [3 /*break*/, 739];
                        case "ri:RiCoupon4Fill": return [3 /*break*/, 741];
                        case "ri:RiCoupon4Line": return [3 /*break*/, 743];
                        case "ri:RiCoupon5Fill": return [3 /*break*/, 745];
                        case "ri:RiCoupon5Line": return [3 /*break*/, 747];
                        case "ri:RiCouponFill": return [3 /*break*/, 749];
                        case "ri:RiCouponLine": return [3 /*break*/, 751];
                        case "ri:RiCurrencyFill": return [3 /*break*/, 753];
                        case "ri:RiCurrencyLine": return [3 /*break*/, 755];
                        case "ri:RiDiscountPercentFill": return [3 /*break*/, 757];
                        case "ri:RiDiscountPercentLine": return [3 /*break*/, 759];
                        case "ri:RiEthFill": return [3 /*break*/, 761];
                        case "ri:RiEthLine": return [3 /*break*/, 763];
                        case "ri:RiExchange2Fill": return [3 /*break*/, 765];
                        case "ri:RiExchange2Line": return [3 /*break*/, 767];
                        case "ri:RiExchangeBoxFill": return [3 /*break*/, 769];
                        case "ri:RiExchangeBoxLine": return [3 /*break*/, 771];
                        case "ri:RiExchangeCnyFill": return [3 /*break*/, 773];
                        case "ri:RiExchangeCnyLine": return [3 /*break*/, 775];
                        case "ri:RiExchangeDollarFill": return [3 /*break*/, 777];
                        case "ri:RiExchangeDollarLine": return [3 /*break*/, 779];
                        case "ri:RiExchangeFill": return [3 /*break*/, 781];
                        case "ri:RiExchangeFundsFill": return [3 /*break*/, 783];
                        case "ri:RiExchangeFundsLine": return [3 /*break*/, 785];
                        case "ri:RiExchangeLine": return [3 /*break*/, 787];
                        case "ri:RiFundsBoxFill": return [3 /*break*/, 789];
                        case "ri:RiFundsBoxLine": return [3 /*break*/, 791];
                        case "ri:RiFundsFill": return [3 /*break*/, 793];
                        case "ri:RiFundsLine": return [3 /*break*/, 795];
                        case "ri:RiGift2Fill": return [3 /*break*/, 797];
                        case "ri:RiGift2Line": return [3 /*break*/, 799];
                        case "ri:RiGiftFill": return [3 /*break*/, 801];
                        case "ri:RiGiftLine": return [3 /*break*/, 803];
                        case "ri:RiHandCoinFill": return [3 /*break*/, 805];
                        case "ri:RiHandCoinLine": return [3 /*break*/, 807];
                        case "ri:RiHandHeartFill": return [3 /*break*/, 809];
                        case "ri:RiHandHeartLine": return [3 /*break*/, 811];
                        case "ri:RiIncreaseDecreaseFill": return [3 /*break*/, 813];
                        case "ri:RiIncreaseDecreaseLine": return [3 /*break*/, 815];
                        case "ri:RiMoneyCnyBoxFill": return [3 /*break*/, 817];
                        case "ri:RiMoneyCnyBoxLine": return [3 /*break*/, 819];
                        case "ri:RiMoneyCnyCircleFill": return [3 /*break*/, 821];
                        case "ri:RiMoneyCnyCircleLine": return [3 /*break*/, 823];
                        case "ri:RiMoneyDollarBoxFill": return [3 /*break*/, 825];
                        case "ri:RiMoneyDollarBoxLine": return [3 /*break*/, 827];
                        case "ri:RiMoneyDollarCircleFill": return [3 /*break*/, 829];
                        case "ri:RiMoneyDollarCircleLine": return [3 /*break*/, 831];
                        case "ri:RiMoneyEuroBoxFill": return [3 /*break*/, 833];
                        case "ri:RiMoneyEuroBoxLine": return [3 /*break*/, 835];
                        case "ri:RiMoneyEuroCircleFill": return [3 /*break*/, 837];
                        case "ri:RiMoneyEuroCircleLine": return [3 /*break*/, 839];
                        case "ri:RiMoneyPoundBoxFill": return [3 /*break*/, 841];
                        case "ri:RiMoneyPoundBoxLine": return [3 /*break*/, 843];
                        case "ri:RiMoneyPoundCircleFill": return [3 /*break*/, 845];
                        case "ri:RiMoneyPoundCircleLine": return [3 /*break*/, 847];
                        case "ri:RiMoneyRupeeCircleFill": return [3 /*break*/, 849];
                        case "ri:RiMoneyRupeeCircleLine": return [3 /*break*/, 851];
                        case "ri:RiNftFill": return [3 /*break*/, 853];
                        case "ri:RiNftLine": return [3 /*break*/, 855];
                        case "ri:RiP2pFill": return [3 /*break*/, 857];
                        case "ri:RiP2pLine": return [3 /*break*/, 859];
                        case "ri:RiPercentFill": return [3 /*break*/, 861];
                        case "ri:RiPercentLine": return [3 /*break*/, 863];
                        case "ri:RiPriceTag2Fill": return [3 /*break*/, 865];
                        case "ri:RiPriceTag2Line": return [3 /*break*/, 867];
                        case "ri:RiPriceTag3Fill": return [3 /*break*/, 869];
                        case "ri:RiPriceTag3Line": return [3 /*break*/, 871];
                        case "ri:RiPriceTagFill": return [3 /*break*/, 873];
                        case "ri:RiPriceTagLine": return [3 /*break*/, 875];
                        case "ri:RiRedPacketFill": return [3 /*break*/, 877];
                        case "ri:RiRedPacketLine": return [3 /*break*/, 879];
                        case "ri:RiRefund2Fill": return [3 /*break*/, 881];
                        case "ri:RiRefund2Line": return [3 /*break*/, 883];
                        case "ri:RiRefundFill": return [3 /*break*/, 885];
                        case "ri:RiRefundLine": return [3 /*break*/, 887];
                        case "ri:RiSafe2Fill": return [3 /*break*/, 889];
                        case "ri:RiSafe2Line": return [3 /*break*/, 891];
                        case "ri:RiSafe3Fill": return [3 /*break*/, 893];
                        case "ri:RiSafe3Line": return [3 /*break*/, 895];
                        case "ri:RiSafeFill": return [3 /*break*/, 897];
                        case "ri:RiSafeLine": return [3 /*break*/, 899];
                        case "ri:RiSecurePaymentFill": return [3 /*break*/, 901];
                        case "ri:RiSecurePaymentLine": return [3 /*break*/, 903];
                        case "ri:RiShoppingBag2Fill": return [3 /*break*/, 905];
                        case "ri:RiShoppingBag2Line": return [3 /*break*/, 907];
                        case "ri:RiShoppingBag3Fill": return [3 /*break*/, 909];
                        case "ri:RiShoppingBag3Line": return [3 /*break*/, 911];
                        case "ri:RiShoppingBag4Fill": return [3 /*break*/, 913];
                        case "ri:RiShoppingBag4Line": return [3 /*break*/, 915];
                        case "ri:RiShoppingBagFill": return [3 /*break*/, 917];
                        case "ri:RiShoppingBagLine": return [3 /*break*/, 919];
                        case "ri:RiShoppingBasket2Fill": return [3 /*break*/, 921];
                        case "ri:RiShoppingBasket2Line": return [3 /*break*/, 923];
                        case "ri:RiShoppingBasketFill": return [3 /*break*/, 925];
                        case "ri:RiShoppingBasketLine": return [3 /*break*/, 927];
                        case "ri:RiShoppingCart2Fill": return [3 /*break*/, 929];
                        case "ri:RiShoppingCart2Line": return [3 /*break*/, 931];
                        case "ri:RiShoppingCartFill": return [3 /*break*/, 933];
                        case "ri:RiShoppingCartLine": return [3 /*break*/, 935];
                        case "ri:RiStockFill": return [3 /*break*/, 937];
                        case "ri:RiStockLine": return [3 /*break*/, 939];
                        case "ri:RiSwap2Fill": return [3 /*break*/, 941];
                        case "ri:RiSwap2Line": return [3 /*break*/, 943];
                        case "ri:RiSwap3Fill": return [3 /*break*/, 945];
                        case "ri:RiSwap3Line": return [3 /*break*/, 947];
                        case "ri:RiSwapBoxFill": return [3 /*break*/, 949];
                        case "ri:RiSwapBoxLine": return [3 /*break*/, 951];
                        case "ri:RiSwapFill": return [3 /*break*/, 953];
                        case "ri:RiSwapLine": return [3 /*break*/, 955];
                        case "ri:RiTicket2Fill": return [3 /*break*/, 957];
                        case "ri:RiTicket2Line": return [3 /*break*/, 959];
                        case "ri:RiTicketFill": return [3 /*break*/, 961];
                        case "ri:RiTicketLine": return [3 /*break*/, 963];
                        case "ri:RiTokenSwapFill": return [3 /*break*/, 965];
                        case "ri:RiTokenSwapLine": return [3 /*break*/, 967];
                        case "ri:RiTrophyFill": return [3 /*break*/, 969];
                        case "ri:RiTrophyLine": return [3 /*break*/, 971];
                        case "ri:RiVipCrown2Fill": return [3 /*break*/, 973];
                        case "ri:RiVipCrown2Line": return [3 /*break*/, 975];
                        case "ri:RiVipCrownFill": return [3 /*break*/, 977];
                        case "ri:RiVipCrownLine": return [3 /*break*/, 979];
                        case "ri:RiVipDiamondFill": return [3 /*break*/, 981];
                        case "ri:RiVipDiamondLine": return [3 /*break*/, 983];
                        case "ri:RiVipFill": return [3 /*break*/, 985];
                        case "ri:RiVipLine": return [3 /*break*/, 987];
                        case "ri:RiWallet2Fill": return [3 /*break*/, 989];
                        case "ri:RiWallet2Line": return [3 /*break*/, 991];
                        case "ri:RiWallet3Fill": return [3 /*break*/, 993];
                        case "ri:RiWallet3Line": return [3 /*break*/, 995];
                        case "ri:RiWalletFill": return [3 /*break*/, 997];
                        case "ri:RiWalletLine": return [3 /*break*/, 999];
                        case "ri:RiWaterFlashFill": return [3 /*break*/, 1001];
                        case "ri:RiWaterFlashLine": return [3 /*break*/, 1003];
                        case "ri:RiXrpFill": return [3 /*break*/, 1005];
                        case "ri:RiXrpLine": return [3 /*break*/, 1007];
                        case "ri:RiXtzFill": return [3 /*break*/, 1009];
                        case "ri:RiXtzLine": return [3 /*break*/, 1011];
                        case "ri:RiBeerFill": return [3 /*break*/, 1013];
                        case "ri:RiBeerLine": return [3 /*break*/, 1015];
                        case "ri:RiBowlFill": return [3 /*break*/, 1017];
                        case "ri:RiBowlLine": return [3 /*break*/, 1019];
                        case "ri:RiBreadFill": return [3 /*break*/, 1021];
                        case "ri:RiBreadLine": return [3 /*break*/, 1023];
                        case "ri:RiCake2Fill": return [3 /*break*/, 1025];
                        case "ri:RiCake2Line": return [3 /*break*/, 1027];
                        case "ri:RiCake3Fill": return [3 /*break*/, 1029];
                        case "ri:RiCake3Line": return [3 /*break*/, 1031];
                        case "ri:RiCakeFill": return [3 /*break*/, 1033];
                        case "ri:RiCakeLine": return [3 /*break*/, 1035];
                        case "ri:RiCupFill": return [3 /*break*/, 1037];
                        case "ri:RiCupLine": return [3 /*break*/, 1039];
                        case "ri:RiDrinks2Fill": return [3 /*break*/, 1041];
                        case "ri:RiDrinks2Line": return [3 /*break*/, 1043];
                        case "ri:RiDrinksFill": return [3 /*break*/, 1045];
                        case "ri:RiDrinksLine": return [3 /*break*/, 1047];
                        case "ri:RiGoblet2Fill": return [3 /*break*/, 1049];
                        case "ri:RiGoblet2Line": return [3 /*break*/, 1051];
                        case "ri:RiGobletFill": return [3 /*break*/, 1053];
                        case "ri:RiGobletLine": return [3 /*break*/, 1055];
                        case "ri:RiKnifeBloodFill": return [3 /*break*/, 1057];
                        case "ri:RiKnifeBloodLine": return [3 /*break*/, 1059];
                        case "ri:RiKnifeFill": return [3 /*break*/, 1061];
                        case "ri:RiKnifeLine": return [3 /*break*/, 1063];
                        case "ri:RiRestaurant2Fill": return [3 /*break*/, 1065];
                        case "ri:RiRestaurant2Line": return [3 /*break*/, 1067];
                        case "ri:RiRestaurantFill": return [3 /*break*/, 1069];
                        case "ri:RiRestaurantLine": return [3 /*break*/, 1071];
                        case "ri:RiAedElectrodesFill": return [3 /*break*/, 1073];
                        case "ri:RiAedElectrodesLine": return [3 /*break*/, 1075];
                        case "ri:RiAedFill": return [3 /*break*/, 1077];
                        case "ri:RiAedLine": return [3 /*break*/, 1079];
                        case "ri:RiBrain2Fill": return [3 /*break*/, 1081];
                        case "ri:RiBrain2Line": return [3 /*break*/, 1083];
                        case "ri:RiBrainFill": return [3 /*break*/, 1085];
                        case "ri:RiBrainLine": return [3 /*break*/, 1087];
                        case "ri:RiCapsuleFill": return [3 /*break*/, 1089];
                        case "ri:RiCapsuleLine": return [3 /*break*/, 1091];
                        case "ri:RiDislikeFill": return [3 /*break*/, 1093];
                        case "ri:RiDislikeLine": return [3 /*break*/, 1095];
                        case "ri:RiDnaFill": return [3 /*break*/, 1097];
                        case "ri:RiDnaLine": return [3 /*break*/, 1099];
                        case "ri:RiDossierFill": return [3 /*break*/, 1101];
                        case "ri:RiDossierLine": return [3 /*break*/, 1103];
                        case "ri:RiDropperFill": return [3 /*break*/, 1105];
                        case "ri:RiDropperLine": return [3 /*break*/, 1107];
                        case "ri:RiEmpathizeFill": return [3 /*break*/, 1109];
                        case "ri:RiEmpathizeLine": return [3 /*break*/, 1111];
                        case "ri:RiFirstAidKitFill": return [3 /*break*/, 1113];
                        case "ri:RiFirstAidKitLine": return [3 /*break*/, 1115];
                        case "ri:RiFlaskFill": return [3 /*break*/, 1117];
                        case "ri:RiFlaskLine": return [3 /*break*/, 1119];
                        case "ri:RiHandSanitizerFill": return [3 /*break*/, 1121];
                        case "ri:RiHandSanitizerLine": return [3 /*break*/, 1123];
                        case "ri:RiHealthBookFill": return [3 /*break*/, 1125];
                        case "ri:RiHealthBookLine": return [3 /*break*/, 1127];
                        case "ri:RiHeart2Fill": return [3 /*break*/, 1129];
                        case "ri:RiHeart2Line": return [3 /*break*/, 1131];
                        case "ri:RiHeart3Fill": return [3 /*break*/, 1133];
                        case "ri:RiHeart3Line": return [3 /*break*/, 1135];
                        case "ri:RiHeartAdd2Fill": return [3 /*break*/, 1137];
                        case "ri:RiHeartAdd2Line": return [3 /*break*/, 1139];
                        case "ri:RiHeartAddFill": return [3 /*break*/, 1141];
                        case "ri:RiHeartAddLine": return [3 /*break*/, 1143];
                        case "ri:RiHeartFill": return [3 /*break*/, 1145];
                        case "ri:RiHeartLine": return [3 /*break*/, 1147];
                        case "ri:RiHeartPulseFill": return [3 /*break*/, 1149];
                        case "ri:RiHeartPulseLine": return [3 /*break*/, 1151];
                        case "ri:RiHeartsFill": return [3 /*break*/, 1153];
                        case "ri:RiHeartsLine": return [3 /*break*/, 1155];
                        case "ri:RiInfraredThermometerFill": return [3 /*break*/, 1157];
                        case "ri:RiInfraredThermometerLine": return [3 /*break*/, 1159];
                        case "ri:RiLungsFill": return [3 /*break*/, 1161];
                        case "ri:RiLungsLine": return [3 /*break*/, 1163];
                        case "ri:RiMedicineBottleFill": return [3 /*break*/, 1165];
                        case "ri:RiMedicineBottleLine": return [3 /*break*/, 1167];
                        case "ri:RiMentalHealthFill": return [3 /*break*/, 1169];
                        case "ri:RiMentalHealthLine": return [3 /*break*/, 1171];
                        case "ri:RiMicroscopeFill": return [3 /*break*/, 1173];
                        case "ri:RiMicroscopeLine": return [3 /*break*/, 1175];
                        case "ri:RiNurseFill": return [3 /*break*/, 1177];
                        case "ri:RiNurseLine": return [3 /*break*/, 1179];
                        case "ri:RiPsychotherapyFill": return [3 /*break*/, 1181];
                        case "ri:RiPsychotherapyLine": return [3 /*break*/, 1183];
                        case "ri:RiPulseAiFill": return [3 /*break*/, 1185];
                        case "ri:RiPulseAiLine": return [3 /*break*/, 1187];
                        case "ri:RiPulseFill": return [3 /*break*/, 1189];
                        case "ri:RiPulseLine": return [3 /*break*/, 1191];
                        case "ri:RiRestTimeFill": return [3 /*break*/, 1193];
                        case "ri:RiRestTimeLine": return [3 /*break*/, 1195];
                        case "ri:RiStethoscopeFill": return [3 /*break*/, 1197];
                        case "ri:RiStethoscopeLine": return [3 /*break*/, 1199];
                        case "ri:RiSurgicalMaskFill": return [3 /*break*/, 1201];
                        case "ri:RiSurgicalMaskLine": return [3 /*break*/, 1203];
                        case "ri:RiSyringeFill": return [3 /*break*/, 1205];
                        case "ri:RiSyringeLine": return [3 /*break*/, 1207];
                        case "ri:RiTestTubeFill": return [3 /*break*/, 1209];
                        case "ri:RiTestTubeLine": return [3 /*break*/, 1211];
                        case "ri:RiThermometerFill": return [3 /*break*/, 1213];
                        case "ri:RiThermometerLine": return [3 /*break*/, 1215];
                        case "ri:RiVirusFill": return [3 /*break*/, 1217];
                        case "ri:RiVirusLine": return [3 /*break*/, 1219];
                        case "ri:RiZzzFill": return [3 /*break*/, 1221];
                        case "ri:RiZzzLine": return [3 /*break*/, 1223];
                        case "ri:RiAlibabaCloudFill": return [3 /*break*/, 1225];
                        case "ri:RiAlibabaCloudLine": return [3 /*break*/, 1227];
                        case "ri:RiAlipayFill": return [3 /*break*/, 1229];
                        case "ri:RiAlipayLine": return [3 /*break*/, 1231];
                        case "ri:RiAmazonFill": return [3 /*break*/, 1233];
                        case "ri:RiAmazonLine": return [3 /*break*/, 1235];
                        case "ri:RiAndroidFill": return [3 /*break*/, 1237];
                        case "ri:RiAndroidLine": return [3 /*break*/, 1239];
                        case "ri:RiAngularjsFill": return [3 /*break*/, 1241];
                        case "ri:RiAngularjsLine": return [3 /*break*/, 1243];
                        case "ri:RiAnthropicFill": return [3 /*break*/, 1245];
                        case "ri:RiAnthropicLine": return [3 /*break*/, 1247];
                        case "ri:RiAppStoreFill": return [3 /*break*/, 1249];
                        case "ri:RiAppStoreLine": return [3 /*break*/, 1251];
                        case "ri:RiAppleFill": return [3 /*break*/, 1253];
                        case "ri:RiAppleLine": return [3 /*break*/, 1255];
                        case "ri:RiBaiduFill": return [3 /*break*/, 1257];
                        case "ri:RiBaiduLine": return [3 /*break*/, 1259];
                        case "ri:RiBardFill": return [3 /*break*/, 1261];
                        case "ri:RiBardLine": return [3 /*break*/, 1263];
                        case "ri:RiBehanceFill": return [3 /*break*/, 1265];
                        case "ri:RiBehanceLine": return [3 /*break*/, 1267];
                        case "ri:RiBilibiliFill": return [3 /*break*/, 1269];
                        case "ri:RiBilibiliLine": return [3 /*break*/, 1271];
                        case "ri:RiBlenderFill": return [3 /*break*/, 1273];
                        case "ri:RiBlenderLine": return [3 /*break*/, 1275];
                        case "ri:RiBloggerFill": return [3 /*break*/, 1277];
                        case "ri:RiBloggerLine": return [3 /*break*/, 1279];
                        case "ri:RiBlueskyFill": return [3 /*break*/, 1281];
                        case "ri:RiBlueskyLine": return [3 /*break*/, 1283];
                        case "ri:RiBootstrapFill": return [3 /*break*/, 1285];
                        case "ri:RiBootstrapLine": return [3 /*break*/, 1287];
                        case "ri:RiCentosFill": return [3 /*break*/, 1289];
                        case "ri:RiCentosLine": return [3 /*break*/, 1291];
                        case "ri:RiChromeFill": return [3 /*break*/, 1293];
                        case "ri:RiChromeLine": return [3 /*break*/, 1295];
                        case "ri:RiClaudeFill": return [3 /*break*/, 1297];
                        case "ri:RiClaudeLine": return [3 /*break*/, 1299];
                        case "ri:RiCodepenFill": return [3 /*break*/, 1301];
                        case "ri:RiCodepenLine": return [3 /*break*/, 1303];
                        case "ri:RiCopilotFill": return [3 /*break*/, 1305];
                        case "ri:RiCopilotLine": return [3 /*break*/, 1307];
                        case "ri:RiCoreosFill": return [3 /*break*/, 1309];
                        case "ri:RiCoreosLine": return [3 /*break*/, 1311];
                        case "ri:RiDingdingFill": return [3 /*break*/, 1313];
                        case "ri:RiDingdingLine": return [3 /*break*/, 1315];
                        case "ri:RiDiscordFill": return [3 /*break*/, 1317];
                        case "ri:RiDiscordLine": return [3 /*break*/, 1319];
                        case "ri:RiDisqusFill": return [3 /*break*/, 1321];
                        case "ri:RiDisqusLine": return [3 /*break*/, 1323];
                        case "ri:RiDoubanFill": return [3 /*break*/, 1325];
                        case "ri:RiDoubanLine": return [3 /*break*/, 1327];
                        case "ri:RiDribbbleFill": return [3 /*break*/, 1329];
                        case "ri:RiDribbbleLine": return [3 /*break*/, 1331];
                        case "ri:RiDriveFill": return [3 /*break*/, 1333];
                        case "ri:RiDriveLine": return [3 /*break*/, 1335];
                        case "ri:RiDropboxFill": return [3 /*break*/, 1337];
                        case "ri:RiDropboxLine": return [3 /*break*/, 1339];
                        case "ri:RiEdgeFill": return [3 /*break*/, 1341];
                        case "ri:RiEdgeLine": return [3 /*break*/, 1343];
                        case "ri:RiEdgeNewFill": return [3 /*break*/, 1345];
                        case "ri:RiEdgeNewLine": return [3 /*break*/, 1347];
                        case "ri:RiEvernoteFill": return [3 /*break*/, 1349];
                        case "ri:RiEvernoteLine": return [3 /*break*/, 1351];
                        case "ri:RiFacebookBoxFill": return [3 /*break*/, 1353];
                        case "ri:RiFacebookBoxLine": return [3 /*break*/, 1355];
                        case "ri:RiFacebookCircleFill": return [3 /*break*/, 1357];
                        case "ri:RiFacebookCircleLine": return [3 /*break*/, 1359];
                        case "ri:RiFacebookFill": return [3 /*break*/, 1361];
                        case "ri:RiFacebookLine": return [3 /*break*/, 1363];
                        case "ri:RiFediverseFill": return [3 /*break*/, 1365];
                        case "ri:RiFediverseLine": return [3 /*break*/, 1367];
                        case "ri:RiFinderFill": return [3 /*break*/, 1369];
                        case "ri:RiFinderLine": return [3 /*break*/, 1371];
                        case "ri:RiFirebaseFill": return [3 /*break*/, 1373];
                        case "ri:RiFirebaseLine": return [3 /*break*/, 1375];
                        case "ri:RiFirefoxFill": return [3 /*break*/, 1377];
                        case "ri:RiFirefoxLine": return [3 /*break*/, 1379];
                        case "ri:RiFlickrFill": return [3 /*break*/, 1381];
                        case "ri:RiFlickrLine": return [3 /*break*/, 1383];
                        case "ri:RiFlutterFill": return [3 /*break*/, 1385];
                        case "ri:RiFlutterLine": return [3 /*break*/, 1387];
                        case "ri:RiFriendicaFill": return [3 /*break*/, 1389];
                        case "ri:RiFriendicaLine": return [3 /*break*/, 1391];
                        case "ri:RiGatsbyFill": return [3 /*break*/, 1393];
                        case "ri:RiGatsbyLine": return [3 /*break*/, 1395];
                        case "ri:RiGeminiFill": return [3 /*break*/, 1397];
                        case "ri:RiGeminiLine": return [3 /*break*/, 1399];
                        case "ri:RiGithubFill": return [3 /*break*/, 1401];
                        case "ri:RiGithubLine": return [3 /*break*/, 1403];
                        case "ri:RiGitlabFill": return [3 /*break*/, 1405];
                        case "ri:RiGitlabLine": return [3 /*break*/, 1407];
                        case "ri:RiGoogleFill": return [3 /*break*/, 1409];
                        case "ri:RiGoogleLine": return [3 /*break*/, 1411];
                        case "ri:RiGooglePlayFill": return [3 /*break*/, 1413];
                        case "ri:RiGooglePlayLine": return [3 /*break*/, 1415];
                        case "ri:RiHonorOfKingsFill": return [3 /*break*/, 1417];
                        case "ri:RiHonorOfKingsLine": return [3 /*break*/, 1419];
                        case "ri:RiIeFill": return [3 /*break*/, 1421];
                        case "ri:RiIeLine": return [3 /*break*/, 1423];
                        case "ri:RiInstagramFill": return [3 /*break*/, 1425];
                        case "ri:RiInstagramLine": return [3 /*break*/, 1427];
                        case "ri:RiInvisionFill": return [3 /*break*/, 1429];
                        case "ri:RiInvisionLine": return [3 /*break*/, 1431];
                        case "ri:RiJavaFill": return [3 /*break*/, 1433];
                        case "ri:RiJavaLine": return [3 /*break*/, 1435];
                        case "ri:RiKakaoTalkFill": return [3 /*break*/, 1437];
                        case "ri:RiKakaoTalkLine": return [3 /*break*/, 1439];
                        case "ri:RiKickFill": return [3 /*break*/, 1441];
                        case "ri:RiKickLine": return [3 /*break*/, 1443];
                        case "ri:RiLineFill": return [3 /*break*/, 1445];
                        case "ri:RiLineLine": return [3 /*break*/, 1447];
                        case "ri:RiLinkedinBoxFill": return [3 /*break*/, 1449];
                        case "ri:RiLinkedinBoxLine": return [3 /*break*/, 1451];
                        case "ri:RiLinkedinFill": return [3 /*break*/, 1453];
                        case "ri:RiLinkedinLine": return [3 /*break*/, 1455];
                        case "ri:RiMastercardFill": return [3 /*break*/, 1457];
                        case "ri:RiMastercardLine": return [3 /*break*/, 1459];
                        case "ri:RiMastodonFill": return [3 /*break*/, 1461];
                        case "ri:RiMastodonLine": return [3 /*break*/, 1463];
                        case "ri:RiMediumFill": return [3 /*break*/, 1465];
                        case "ri:RiMediumLine": return [3 /*break*/, 1467];
                        case "ri:RiMessengerFill": return [3 /*break*/, 1469];
                        case "ri:RiMessengerLine": return [3 /*break*/, 1471];
                        case "ri:RiMetaFill": return [3 /*break*/, 1473];
                        case "ri:RiMetaLine": return [3 /*break*/, 1475];
                        case "ri:RiMicrosoftFill": return [3 /*break*/, 1477];
                        case "ri:RiMicrosoftLine": return [3 /*break*/, 1479];
                        case "ri:RiMicrosoftLoopFill": return [3 /*break*/, 1481];
                        case "ri:RiMicrosoftLoopLine": return [3 /*break*/, 1483];
                        case "ri:RiMiniProgramFill": return [3 /*break*/, 1485];
                        case "ri:RiMiniProgramLine": return [3 /*break*/, 1487];
                        case "ri:RiMixtralFill": return [3 /*break*/, 1489];
                        case "ri:RiMixtralLine": return [3 /*break*/, 1491];
                        case "ri:RiNeteaseCloudMusicFill": return [3 /*break*/, 1493];
                        case "ri:RiNeteaseCloudMusicLine": return [3 /*break*/, 1495];
                        case "ri:RiNetflixFill": return [3 /*break*/, 1497];
                        case "ri:RiNetflixLine": return [3 /*break*/, 1499];
                        case "ri:RiNextjsFill": return [3 /*break*/, 1501];
                        case "ri:RiNextjsLine": return [3 /*break*/, 1503];
                        case "ri:RiNodejsFill": return [3 /*break*/, 1505];
                        case "ri:RiNodejsLine": return [3 /*break*/, 1507];
                        case "ri:RiNotionFill": return [3 /*break*/, 1509];
                        case "ri:RiNotionLine": return [3 /*break*/, 1511];
                        case "ri:RiNpmjsFill": return [3 /*break*/, 1513];
                        case "ri:RiNpmjsLine": return [3 /*break*/, 1515];
                        case "ri:RiOpenSourceFill": return [3 /*break*/, 1517];
                        case "ri:RiOpenSourceLine": return [3 /*break*/, 1519];
                        case "ri:RiOpenaiFill": return [3 /*break*/, 1521];
                        case "ri:RiOpenaiLine": return [3 /*break*/, 1523];
                        case "ri:RiOpenbaseFill": return [3 /*break*/, 1525];
                        case "ri:RiOpenbaseLine": return [3 /*break*/, 1527];
                        case "ri:RiOperaFill": return [3 /*break*/, 1529];
                        case "ri:RiOperaLine": return [3 /*break*/, 1531];
                        case "ri:RiPatreonFill": return [3 /*break*/, 1533];
                        case "ri:RiPatreonLine": return [3 /*break*/, 1535];
                        case "ri:RiPaypalFill": return [3 /*break*/, 1537];
                        case "ri:RiPaypalLine": return [3 /*break*/, 1539];
                        case "ri:RiPerplexityFill": return [3 /*break*/, 1541];
                        case "ri:RiPerplexityLine": return [3 /*break*/, 1543];
                        case "ri:RiPinterestFill": return [3 /*break*/, 1545];
                        case "ri:RiPinterestLine": return [3 /*break*/, 1547];
                        case "ri:RiPixFill": return [3 /*break*/, 1549];
                        case "ri:RiPixLine": return [3 /*break*/, 1551];
                        case "ri:RiPixelfedFill": return [3 /*break*/, 1553];
                        case "ri:RiPixelfedLine": return [3 /*break*/, 1555];
                        case "ri:RiPlaystationFill": return [3 /*break*/, 1557];
                        case "ri:RiPlaystationLine": return [3 /*break*/, 1559];
                        case "ri:RiProductHuntFill": return [3 /*break*/, 1561];
                        case "ri:RiProductHuntLine": return [3 /*break*/, 1563];
                        case "ri:RiQqFill": return [3 /*break*/, 1565];
                        case "ri:RiQqLine": return [3 /*break*/, 1567];
                        case "ri:RiReactjsFill": return [3 /*break*/, 1569];
                        case "ri:RiReactjsLine": return [3 /*break*/, 1571];
                        case "ri:RiRedditFill": return [3 /*break*/, 1573];
                        case "ri:RiRedditLine": return [3 /*break*/, 1575];
                        case "ri:RiRemixRunFill": return [3 /*break*/, 1577];
                        case "ri:RiRemixRunLine": return [3 /*break*/, 1579];
                        case "ri:RiRemixiconFill": return [3 /*break*/, 1581];
                        case "ri:RiRemixiconLine": return [3 /*break*/, 1583];
                        case "ri:RiSafariFill": return [3 /*break*/, 1585];
                        case "ri:RiSafariLine": return [3 /*break*/, 1587];
                        case "ri:RiSkypeFill": return [3 /*break*/, 1589];
                        case "ri:RiSkypeLine": return [3 /*break*/, 1591];
                        case "ri:RiSlackFill": return [3 /*break*/, 1593];
                        case "ri:RiSlackLine": return [3 /*break*/, 1595];
                        case "ri:RiSnapchatFill": return [3 /*break*/, 1597];
                        case "ri:RiSnapchatLine": return [3 /*break*/, 1599];
                        case "ri:RiSoundcloudFill": return [3 /*break*/, 1601];
                        case "ri:RiSoundcloudLine": return [3 /*break*/, 1603];
                        case "ri:RiSpectrumFill": return [3 /*break*/, 1605];
                        case "ri:RiSpectrumLine": return [3 /*break*/, 1607];
                        case "ri:RiSpotifyFill": return [3 /*break*/, 1609];
                        case "ri:RiSpotifyLine": return [3 /*break*/, 1611];
                        case "ri:RiStackOverflowFill": return [3 /*break*/, 1613];
                        case "ri:RiStackOverflowLine": return [3 /*break*/, 1615];
                        case "ri:RiStackshareFill": return [3 /*break*/, 1617];
                        case "ri:RiStackshareLine": return [3 /*break*/, 1619];
                        case "ri:RiSteamFill": return [3 /*break*/, 1621];
                        case "ri:RiSteamLine": return [3 /*break*/, 1623];
                        case "ri:RiSupabaseFill": return [3 /*break*/, 1625];
                        case "ri:RiSupabaseLine": return [3 /*break*/, 1627];
                        case "ri:RiSvelteFill": return [3 /*break*/, 1629];
                        case "ri:RiSvelteLine": return [3 /*break*/, 1631];
                        case "ri:RiSwitchFill": return [3 /*break*/, 1633];
                        case "ri:RiSwitchLine": return [3 /*break*/, 1635];
                        case "ri:RiTailwindCssFill": return [3 /*break*/, 1637];
                        case "ri:RiTailwindCssLine": return [3 /*break*/, 1639];
                        case "ri:RiTaobaoFill": return [3 /*break*/, 1641];
                        case "ri:RiTaobaoLine": return [3 /*break*/, 1643];
                        case "ri:RiTelegram2Fill": return [3 /*break*/, 1645];
                        case "ri:RiTelegram2Line": return [3 /*break*/, 1647];
                        case "ri:RiTelegramFill": return [3 /*break*/, 1649];
                        case "ri:RiTelegramLine": return [3 /*break*/, 1651];
                        case "ri:RiThreadsFill": return [3 /*break*/, 1653];
                        case "ri:RiThreadsLine": return [3 /*break*/, 1655];
                        case "ri:RiTiktokFill": return [3 /*break*/, 1657];
                        case "ri:RiTiktokLine": return [3 /*break*/, 1659];
                        case "ri:RiTrelloFill": return [3 /*break*/, 1661];
                        case "ri:RiTrelloLine": return [3 /*break*/, 1663];
                        case "ri:RiTumblrFill": return [3 /*break*/, 1665];
                        case "ri:RiTumblrLine": return [3 /*break*/, 1667];
                        case "ri:RiTwitchFill": return [3 /*break*/, 1669];
                        case "ri:RiTwitchLine": return [3 /*break*/, 1671];
                        case "ri:RiTwitterFill": return [3 /*break*/, 1673];
                        case "ri:RiTwitterLine": return [3 /*break*/, 1675];
                        case "ri:RiTwitterXFill": return [3 /*break*/, 1677];
                        case "ri:RiTwitterXLine": return [3 /*break*/, 1679];
                        case "ri:RiUbuntuFill": return [3 /*break*/, 1681];
                        case "ri:RiUbuntuLine": return [3 /*break*/, 1683];
                        case "ri:RiUnsplashFill": return [3 /*break*/, 1685];
                        case "ri:RiUnsplashLine": return [3 /*break*/, 1687];
                        case "ri:RiVercelFill": return [3 /*break*/, 1689];
                        case "ri:RiVercelLine": return [3 /*break*/, 1691];
                        case "ri:RiVimeoFill": return [3 /*break*/, 1693];
                        case "ri:RiVimeoLine": return [3 /*break*/, 1695];
                        case "ri:RiVisaFill": return [3 /*break*/, 1697];
                        case "ri:RiVisaLine": return [3 /*break*/, 1699];
                        case "ri:RiVkFill": return [3 /*break*/, 1701];
                        case "ri:RiVkLine": return [3 /*break*/, 1703];
                        case "ri:RiVuejsFill": return [3 /*break*/, 1705];
                        case "ri:RiVuejsLine": return [3 /*break*/, 1707];
                        case "ri:RiWebhookFill": return [3 /*break*/, 1709];
                        case "ri:RiWebhookLine": return [3 /*break*/, 1711];
                        case "ri:RiWechat2Fill": return [3 /*break*/, 1713];
                        case "ri:RiWechat2Line": return [3 /*break*/, 1715];
                        case "ri:RiWechatChannelsFill": return [3 /*break*/, 1717];
                        case "ri:RiWechatChannelsLine": return [3 /*break*/, 1719];
                        case "ri:RiWechatFill": return [3 /*break*/, 1721];
                        case "ri:RiWechatLine": return [3 /*break*/, 1723];
                        case "ri:RiWechatPayFill": return [3 /*break*/, 1725];
                        case "ri:RiWechatPayLine": return [3 /*break*/, 1727];
                        case "ri:RiWeiboFill": return [3 /*break*/, 1729];
                        case "ri:RiWeiboLine": return [3 /*break*/, 1731];
                        case "ri:RiWhatsappFill": return [3 /*break*/, 1733];
                        case "ri:RiWhatsappLine": return [3 /*break*/, 1735];
                        case "ri:RiWindowsFill": return [3 /*break*/, 1737];
                        case "ri:RiWindowsLine": return [3 /*break*/, 1739];
                        case "ri:RiWordpressFill": return [3 /*break*/, 1741];
                        case "ri:RiWordpressLine": return [3 /*break*/, 1743];
                        case "ri:RiXboxFill": return [3 /*break*/, 1745];
                        case "ri:RiXboxLine": return [3 /*break*/, 1747];
                        case "ri:RiXingFill": return [3 /*break*/, 1749];
                        case "ri:RiXingLine": return [3 /*break*/, 1751];
                        case "ri:RiYoutubeFill": return [3 /*break*/, 1753];
                        case "ri:RiYoutubeLine": return [3 /*break*/, 1755];
                        case "ri:RiYuqueFill": return [3 /*break*/, 1757];
                        case "ri:RiYuqueLine": return [3 /*break*/, 1759];
                        case "ri:RiZcoolFill": return [3 /*break*/, 1761];
                        case "ri:RiZcoolLine": return [3 /*break*/, 1763];
                        case "ri:RiZhihuFill": return [3 /*break*/, 1765];
                        case "ri:RiZhihuLine": return [3 /*break*/, 1767];
                        case "ri:RiAnchorFill": return [3 /*break*/, 1769];
                        case "ri:RiAnchorLine": return [3 /*break*/, 1771];
                        case "ri:RiBarricadeFill": return [3 /*break*/, 1773];
                        case "ri:RiBarricadeLine": return [3 /*break*/, 1775];
                        case "ri:RiBikeFill": return [3 /*break*/, 1777];
                        case "ri:RiBikeLine": return [3 /*break*/, 1779];
                        case "ri:RiBus2Fill": return [3 /*break*/, 1781];
                        case "ri:RiBus2Line": return [3 /*break*/, 1783];
                        case "ri:RiBusFill": return [3 /*break*/, 1785];
                        case "ri:RiBusLine": return [3 /*break*/, 1787];
                        case "ri:RiBusWifiFill": return [3 /*break*/, 1789];
                        case "ri:RiBusWifiLine": return [3 /*break*/, 1791];
                        case "ri:RiCarFill": return [3 /*break*/, 1793];
                        case "ri:RiCarLine": return [3 /*break*/, 1795];
                        case "ri:RiCarWashingFill": return [3 /*break*/, 1797];
                        case "ri:RiCarWashingLine": return [3 /*break*/, 1799];
                        case "ri:RiCaravanFill": return [3 /*break*/, 1801];
                        case "ri:RiCaravanLine": return [3 /*break*/, 1803];
                        case "ri:RiChargingPile2Fill": return [3 /*break*/, 1805];
                        case "ri:RiChargingPile2Line": return [3 /*break*/, 1807];
                        case "ri:RiChargingPileFill": return [3 /*break*/, 1809];
                        case "ri:RiChargingPileLine": return [3 /*break*/, 1811];
                        case "ri:RiChinaRailwayFill": return [3 /*break*/, 1813];
                        case "ri:RiChinaRailwayLine": return [3 /*break*/, 1815];
                        case "ri:RiCompass2Fill": return [3 /*break*/, 1817];
                        case "ri:RiCompass2Line": return [3 /*break*/, 1819];
                        case "ri:RiCompass3Fill": return [3 /*break*/, 1821];
                        case "ri:RiCompass3Line": return [3 /*break*/, 1823];
                        case "ri:RiCompass4Fill": return [3 /*break*/, 1825];
                        case "ri:RiCompass4Line": return [3 /*break*/, 1827];
                        case "ri:RiCompassDiscoverFill": return [3 /*break*/, 1829];
                        case "ri:RiCompassDiscoverLine": return [3 /*break*/, 1831];
                        case "ri:RiCompassFill": return [3 /*break*/, 1833];
                        case "ri:RiCompassLine": return [3 /*break*/, 1835];
                        case "ri:RiDirectionFill": return [3 /*break*/, 1837];
                        case "ri:RiDirectionLine": return [3 /*break*/, 1839];
                        case "ri:RiEBike2Fill": return [3 /*break*/, 1841];
                        case "ri:RiEBike2Line": return [3 /*break*/, 1843];
                        case "ri:RiEBikeFill": return [3 /*break*/, 1845];
                        case "ri:RiEBikeLine": return [3 /*break*/, 1847];
                        case "ri:RiEarthFill": return [3 /*break*/, 1849];
                        case "ri:RiEarthLine": return [3 /*break*/, 1851];
                        case "ri:RiFlightLandFill": return [3 /*break*/, 1853];
                        case "ri:RiFlightLandLine": return [3 /*break*/, 1855];
                        case "ri:RiFlightTakeoffFill": return [3 /*break*/, 1857];
                        case "ri:RiFlightTakeoffLine": return [3 /*break*/, 1859];
                        case "ri:RiFootprintFill": return [3 /*break*/, 1861];
                        case "ri:RiFootprintLine": return [3 /*break*/, 1863];
                        case "ri:RiGasStationFill": return [3 /*break*/, 1865];
                        case "ri:RiGasStationLine": return [3 /*break*/, 1867];
                        case "ri:RiGlobeFill": return [3 /*break*/, 1869];
                        case "ri:RiGlobeLine": return [3 /*break*/, 1871];
                        case "ri:RiGuideFill": return [3 /*break*/, 1873];
                        case "ri:RiGuideLine": return [3 /*break*/, 1875];
                        case "ri:RiHotelBedFill": return [3 /*break*/, 1877];
                        case "ri:RiHotelBedLine": return [3 /*break*/, 1879];
                        case "ri:RiLifebuoyFill": return [3 /*break*/, 1881];
                        case "ri:RiLifebuoyLine": return [3 /*break*/, 1883];
                        case "ri:RiLuggageCartFill": return [3 /*break*/, 1885];
                        case "ri:RiLuggageCartLine": return [3 /*break*/, 1887];
                        case "ri:RiLuggageDepositFill": return [3 /*break*/, 1889];
                        case "ri:RiLuggageDepositLine": return [3 /*break*/, 1891];
                        case "ri:RiMap2Fill": return [3 /*break*/, 1893];
                        case "ri:RiMap2Line": return [3 /*break*/, 1895];
                        case "ri:RiMapFill": return [3 /*break*/, 1897];
                        case "ri:RiMapLine": return [3 /*break*/, 1899];
                        case "ri:RiMapPin2Fill": return [3 /*break*/, 1901];
                        case "ri:RiMapPin2Line": return [3 /*break*/, 1903];
                        case "ri:RiMapPin3Fill": return [3 /*break*/, 1905];
                        case "ri:RiMapPin3Line": return [3 /*break*/, 1907];
                        case "ri:RiMapPin4Fill": return [3 /*break*/, 1909];
                        case "ri:RiMapPin4Line": return [3 /*break*/, 1911];
                        case "ri:RiMapPin5Fill": return [3 /*break*/, 1913];
                        case "ri:RiMapPin5Line": return [3 /*break*/, 1915];
                        case "ri:RiMapPinAddFill": return [3 /*break*/, 1917];
                        case "ri:RiMapPinAddLine": return [3 /*break*/, 1919];
                        case "ri:RiMapPinFill": return [3 /*break*/, 1921];
                        case "ri:RiMapPinLine": return [3 /*break*/, 1923];
                        case "ri:RiMapPinRangeFill": return [3 /*break*/, 1925];
                        case "ri:RiMapPinRangeLine": return [3 /*break*/, 1927];
                        case "ri:RiMapPinTimeFill": return [3 /*break*/, 1929];
                        case "ri:RiMapPinTimeLine": return [3 /*break*/, 1931];
                        case "ri:RiMapPinUserFill": return [3 /*break*/, 1933];
                        case "ri:RiMapPinUserLine": return [3 /*break*/, 1935];
                        case "ri:RiMotorbikeFill": return [3 /*break*/, 1937];
                        case "ri:RiMotorbikeLine": return [3 /*break*/, 1939];
                        case "ri:RiNavigationFill": return [3 /*break*/, 1941];
                        case "ri:RiNavigationLine": return [3 /*break*/, 1943];
                        case "ri:RiOilFill": return [3 /*break*/, 1945];
                        case "ri:RiOilLine": return [3 /*break*/, 1947];
                        case "ri:RiParkingBoxFill": return [3 /*break*/, 1949];
                        case "ri:RiParkingBoxLine": return [3 /*break*/, 1951];
                        case "ri:RiParkingFill": return [3 /*break*/, 1953];
                        case "ri:RiParkingLine": return [3 /*break*/, 1955];
                        case "ri:RiPassportFill": return [3 /*break*/, 1957];
                        case "ri:RiPassportLine": return [3 /*break*/, 1959];
                        case "ri:RiPinDistanceFill": return [3 /*break*/, 1961];
                        case "ri:RiPinDistanceLine": return [3 /*break*/, 1963];
                        case "ri:RiPlaneFill": return [3 /*break*/, 1965];
                        case "ri:RiPlaneLine": return [3 /*break*/, 1967];
                        case "ri:RiPlanetFill": return [3 /*break*/, 1969];
                        case "ri:RiPlanetLine": return [3 /*break*/, 1971];
                        case "ri:RiPoliceCarFill": return [3 /*break*/, 1973];
                        case "ri:RiPoliceCarLine": return [3 /*break*/, 1975];
                        case "ri:RiPushpin2Fill": return [3 /*break*/, 1977];
                        case "ri:RiPushpin2Line": return [3 /*break*/, 1979];
                        case "ri:RiPushpinFill": return [3 /*break*/, 1981];
                        case "ri:RiPushpinLine": return [3 /*break*/, 1983];
                        case "ri:RiRidingFill": return [3 /*break*/, 1985];
                        case "ri:RiRidingLine": return [3 /*break*/, 1987];
                        case "ri:RiRoadMapFill": return [3 /*break*/, 1989];
                        case "ri:RiRoadMapLine": return [3 /*break*/, 1991];
                        case "ri:RiRoadsterFill": return [3 /*break*/, 1993];
                        case "ri:RiRoadsterLine": return [3 /*break*/, 1995];
                        case "ri:RiRocket2Fill": return [3 /*break*/, 1997];
                        case "ri:RiRocket2Line": return [3 /*break*/, 1999];
                    }
                    return [3 /*break*/, 2001];
                case 1: return [4 /*yield*/, import("react-icons/ri")];
                case 2:
                    RiFileAddFill = (_b.sent()).RiFileAddFill;
                    return [2 /*return*/, RiFileAddFill];
                case 3: return [4 /*yield*/, import("react-icons/ri")];
                case 4:
                    RiFileAddLine = (_b.sent()).RiFileAddLine;
                    return [2 /*return*/, RiFileAddLine];
                case 5: return [4 /*yield*/, import("react-icons/ri")];
                case 6:
                    RiFileChart2Fill = (_b.sent()).RiFileChart2Fill;
                    return [2 /*return*/, RiFileChart2Fill];
                case 7: return [4 /*yield*/, import("react-icons/ri")];
                case 8:
                    RiFileChart2Line = (_b.sent()).RiFileChart2Line;
                    return [2 /*return*/, RiFileChart2Line];
                case 9: return [4 /*yield*/, import("react-icons/ri")];
                case 10:
                    RiFileChartFill = (_b.sent()).RiFileChartFill;
                    return [2 /*return*/, RiFileChartFill];
                case 11: return [4 /*yield*/, import("react-icons/ri")];
                case 12:
                    RiFileChartLine = (_b.sent()).RiFileChartLine;
                    return [2 /*return*/, RiFileChartLine];
                case 13: return [4 /*yield*/, import("react-icons/ri")];
                case 14:
                    RiFileCheckFill = (_b.sent()).RiFileCheckFill;
                    return [2 /*return*/, RiFileCheckFill];
                case 15: return [4 /*yield*/, import("react-icons/ri")];
                case 16:
                    RiFileCheckLine = (_b.sent()).RiFileCheckLine;
                    return [2 /*return*/, RiFileCheckLine];
                case 17: return [4 /*yield*/, import("react-icons/ri")];
                case 18:
                    RiFileCloseFill = (_b.sent()).RiFileCloseFill;
                    return [2 /*return*/, RiFileCloseFill];
                case 19: return [4 /*yield*/, import("react-icons/ri")];
                case 20:
                    RiFileCloseLine = (_b.sent()).RiFileCloseLine;
                    return [2 /*return*/, RiFileCloseLine];
                case 21: return [4 /*yield*/, import("react-icons/ri")];
                case 22:
                    RiFileCloudFill = (_b.sent()).RiFileCloudFill;
                    return [2 /*return*/, RiFileCloudFill];
                case 23: return [4 /*yield*/, import("react-icons/ri")];
                case 24:
                    RiFileCloudLine = (_b.sent()).RiFileCloudLine;
                    return [2 /*return*/, RiFileCloudLine];
                case 25: return [4 /*yield*/, import("react-icons/ri")];
                case 26:
                    RiFileCodeFill = (_b.sent()).RiFileCodeFill;
                    return [2 /*return*/, RiFileCodeFill];
                case 27: return [4 /*yield*/, import("react-icons/ri")];
                case 28:
                    RiFileCodeLine = (_b.sent()).RiFileCodeLine;
                    return [2 /*return*/, RiFileCodeLine];
                case 29: return [4 /*yield*/, import("react-icons/ri")];
                case 30:
                    RiFileCopy2Fill = (_b.sent()).RiFileCopy2Fill;
                    return [2 /*return*/, RiFileCopy2Fill];
                case 31: return [4 /*yield*/, import("react-icons/ri")];
                case 32:
                    RiFileCopy2Line = (_b.sent()).RiFileCopy2Line;
                    return [2 /*return*/, RiFileCopy2Line];
                case 33: return [4 /*yield*/, import("react-icons/ri")];
                case 34:
                    RiFileCopyFill = (_b.sent()).RiFileCopyFill;
                    return [2 /*return*/, RiFileCopyFill];
                case 35: return [4 /*yield*/, import("react-icons/ri")];
                case 36:
                    RiFileCopyLine = (_b.sent()).RiFileCopyLine;
                    return [2 /*return*/, RiFileCopyLine];
                case 37: return [4 /*yield*/, import("react-icons/ri")];
                case 38:
                    RiFileDamageFill = (_b.sent()).RiFileDamageFill;
                    return [2 /*return*/, RiFileDamageFill];
                case 39: return [4 /*yield*/, import("react-icons/ri")];
                case 40:
                    RiFileDamageLine = (_b.sent()).RiFileDamageLine;
                    return [2 /*return*/, RiFileDamageLine];
                case 41: return [4 /*yield*/, import("react-icons/ri")];
                case 42:
                    RiFileDownloadFill = (_b.sent()).RiFileDownloadFill;
                    return [2 /*return*/, RiFileDownloadFill];
                case 43: return [4 /*yield*/, import("react-icons/ri")];
                case 44:
                    RiFileDownloadLine = (_b.sent()).RiFileDownloadLine;
                    return [2 /*return*/, RiFileDownloadLine];
                case 45: return [4 /*yield*/, import("react-icons/ri")];
                case 46:
                    RiFileEditFill = (_b.sent()).RiFileEditFill;
                    return [2 /*return*/, RiFileEditFill];
                case 47: return [4 /*yield*/, import("react-icons/ri")];
                case 48:
                    RiFileEditLine = (_b.sent()).RiFileEditLine;
                    return [2 /*return*/, RiFileEditLine];
                case 49: return [4 /*yield*/, import("react-icons/ri")];
                case 50:
                    RiFileExcel2Fill = (_b.sent()).RiFileExcel2Fill;
                    return [2 /*return*/, RiFileExcel2Fill];
                case 51: return [4 /*yield*/, import("react-icons/ri")];
                case 52:
                    RiFileExcel2Line = (_b.sent()).RiFileExcel2Line;
                    return [2 /*return*/, RiFileExcel2Line];
                case 53: return [4 /*yield*/, import("react-icons/ri")];
                case 54:
                    RiFileExcelFill = (_b.sent()).RiFileExcelFill;
                    return [2 /*return*/, RiFileExcelFill];
                case 55: return [4 /*yield*/, import("react-icons/ri")];
                case 56:
                    RiFileExcelLine = (_b.sent()).RiFileExcelLine;
                    return [2 /*return*/, RiFileExcelLine];
                case 57: return [4 /*yield*/, import("react-icons/ri")];
                case 58:
                    RiFileFill = (_b.sent()).RiFileFill;
                    return [2 /*return*/, RiFileFill];
                case 59: return [4 /*yield*/, import("react-icons/ri")];
                case 60:
                    RiFileForbidFill = (_b.sent()).RiFileForbidFill;
                    return [2 /*return*/, RiFileForbidFill];
                case 61: return [4 /*yield*/, import("react-icons/ri")];
                case 62:
                    RiFileForbidLine = (_b.sent()).RiFileForbidLine;
                    return [2 /*return*/, RiFileForbidLine];
                case 63: return [4 /*yield*/, import("react-icons/ri")];
                case 64:
                    RiFileGifFill = (_b.sent()).RiFileGifFill;
                    return [2 /*return*/, RiFileGifFill];
                case 65: return [4 /*yield*/, import("react-icons/ri")];
                case 66:
                    RiFileGifLine = (_b.sent()).RiFileGifLine;
                    return [2 /*return*/, RiFileGifLine];
                case 67: return [4 /*yield*/, import("react-icons/ri")];
                case 68:
                    RiFileHistoryFill = (_b.sent()).RiFileHistoryFill;
                    return [2 /*return*/, RiFileHistoryFill];
                case 69: return [4 /*yield*/, import("react-icons/ri")];
                case 70:
                    RiFileHistoryLine = (_b.sent()).RiFileHistoryLine;
                    return [2 /*return*/, RiFileHistoryLine];
                case 71: return [4 /*yield*/, import("react-icons/ri")];
                case 72:
                    RiFileHwpFill = (_b.sent()).RiFileHwpFill;
                    return [2 /*return*/, RiFileHwpFill];
                case 73: return [4 /*yield*/, import("react-icons/ri")];
                case 74:
                    RiFileHwpLine = (_b.sent()).RiFileHwpLine;
                    return [2 /*return*/, RiFileHwpLine];
                case 75: return [4 /*yield*/, import("react-icons/ri")];
                case 76:
                    RiFileImageFill = (_b.sent()).RiFileImageFill;
                    return [2 /*return*/, RiFileImageFill];
                case 77: return [4 /*yield*/, import("react-icons/ri")];
                case 78:
                    RiFileImageLine = (_b.sent()).RiFileImageLine;
                    return [2 /*return*/, RiFileImageLine];
                case 79: return [4 /*yield*/, import("react-icons/ri")];
                case 80:
                    RiFileInfoFill = (_b.sent()).RiFileInfoFill;
                    return [2 /*return*/, RiFileInfoFill];
                case 81: return [4 /*yield*/, import("react-icons/ri")];
                case 82:
                    RiFileInfoLine = (_b.sent()).RiFileInfoLine;
                    return [2 /*return*/, RiFileInfoLine];
                case 83: return [4 /*yield*/, import("react-icons/ri")];
                case 84:
                    RiFileLine = (_b.sent()).RiFileLine;
                    return [2 /*return*/, RiFileLine];
                case 85: return [4 /*yield*/, import("react-icons/ri")];
                case 86:
                    RiFileList2Fill = (_b.sent()).RiFileList2Fill;
                    return [2 /*return*/, RiFileList2Fill];
                case 87: return [4 /*yield*/, import("react-icons/ri")];
                case 88:
                    RiFileList2Line = (_b.sent()).RiFileList2Line;
                    return [2 /*return*/, RiFileList2Line];
                case 89: return [4 /*yield*/, import("react-icons/ri")];
                case 90:
                    RiFileList3Fill = (_b.sent()).RiFileList3Fill;
                    return [2 /*return*/, RiFileList3Fill];
                case 91: return [4 /*yield*/, import("react-icons/ri")];
                case 92:
                    RiFileList3Line = (_b.sent()).RiFileList3Line;
                    return [2 /*return*/, RiFileList3Line];
                case 93: return [4 /*yield*/, import("react-icons/ri")];
                case 94:
                    RiFileListFill = (_b.sent()).RiFileListFill;
                    return [2 /*return*/, RiFileListFill];
                case 95: return [4 /*yield*/, import("react-icons/ri")];
                case 96:
                    RiFileListLine = (_b.sent()).RiFileListLine;
                    return [2 /*return*/, RiFileListLine];
                case 97: return [4 /*yield*/, import("react-icons/ri")];
                case 98:
                    RiFileLockFill = (_b.sent()).RiFileLockFill;
                    return [2 /*return*/, RiFileLockFill];
                case 99: return [4 /*yield*/, import("react-icons/ri")];
                case 100:
                    RiFileLockLine = (_b.sent()).RiFileLockLine;
                    return [2 /*return*/, RiFileLockLine];
                case 101: return [4 /*yield*/, import("react-icons/ri")];
                case 102:
                    RiFileMarkedFill = (_b.sent()).RiFileMarkedFill;
                    return [2 /*return*/, RiFileMarkedFill];
                case 103: return [4 /*yield*/, import("react-icons/ri")];
                case 104:
                    RiFileMarkedLine = (_b.sent()).RiFileMarkedLine;
                    return [2 /*return*/, RiFileMarkedLine];
                case 105: return [4 /*yield*/, import("react-icons/ri")];
                case 106:
                    RiFileMusicFill = (_b.sent()).RiFileMusicFill;
                    return [2 /*return*/, RiFileMusicFill];
                case 107: return [4 /*yield*/, import("react-icons/ri")];
                case 108:
                    RiFileMusicLine = (_b.sent()).RiFileMusicLine;
                    return [2 /*return*/, RiFileMusicLine];
                case 109: return [4 /*yield*/, import("react-icons/ri")];
                case 110:
                    RiFilePaper2Fill = (_b.sent()).RiFilePaper2Fill;
                    return [2 /*return*/, RiFilePaper2Fill];
                case 111: return [4 /*yield*/, import("react-icons/ri")];
                case 112:
                    RiFilePaper2Line = (_b.sent()).RiFilePaper2Line;
                    return [2 /*return*/, RiFilePaper2Line];
                case 113: return [4 /*yield*/, import("react-icons/ri")];
                case 114:
                    RiFilePaperFill = (_b.sent()).RiFilePaperFill;
                    return [2 /*return*/, RiFilePaperFill];
                case 115: return [4 /*yield*/, import("react-icons/ri")];
                case 116:
                    RiFilePaperLine = (_b.sent()).RiFilePaperLine;
                    return [2 /*return*/, RiFilePaperLine];
                case 117: return [4 /*yield*/, import("react-icons/ri")];
                case 118:
                    RiFilePdf2Fill = (_b.sent()).RiFilePdf2Fill;
                    return [2 /*return*/, RiFilePdf2Fill];
                case 119: return [4 /*yield*/, import("react-icons/ri")];
                case 120:
                    RiFilePdf2Line = (_b.sent()).RiFilePdf2Line;
                    return [2 /*return*/, RiFilePdf2Line];
                case 121: return [4 /*yield*/, import("react-icons/ri")];
                case 122:
                    RiFilePdfFill = (_b.sent()).RiFilePdfFill;
                    return [2 /*return*/, RiFilePdfFill];
                case 123: return [4 /*yield*/, import("react-icons/ri")];
                case 124:
                    RiFilePdfLine = (_b.sent()).RiFilePdfLine;
                    return [2 /*return*/, RiFilePdfLine];
                case 125: return [4 /*yield*/, import("react-icons/ri")];
                case 126:
                    RiFilePpt2Fill = (_b.sent()).RiFilePpt2Fill;
                    return [2 /*return*/, RiFilePpt2Fill];
                case 127: return [4 /*yield*/, import("react-icons/ri")];
                case 128:
                    RiFilePpt2Line = (_b.sent()).RiFilePpt2Line;
                    return [2 /*return*/, RiFilePpt2Line];
                case 129: return [4 /*yield*/, import("react-icons/ri")];
                case 130:
                    RiFilePptFill = (_b.sent()).RiFilePptFill;
                    return [2 /*return*/, RiFilePptFill];
                case 131: return [4 /*yield*/, import("react-icons/ri")];
                case 132:
                    RiFilePptLine = (_b.sent()).RiFilePptLine;
                    return [2 /*return*/, RiFilePptLine];
                case 133: return [4 /*yield*/, import("react-icons/ri")];
                case 134:
                    RiFileReduceFill = (_b.sent()).RiFileReduceFill;
                    return [2 /*return*/, RiFileReduceFill];
                case 135: return [4 /*yield*/, import("react-icons/ri")];
                case 136:
                    RiFileReduceLine = (_b.sent()).RiFileReduceLine;
                    return [2 /*return*/, RiFileReduceLine];
                case 137: return [4 /*yield*/, import("react-icons/ri")];
                case 138:
                    RiFileSearchFill = (_b.sent()).RiFileSearchFill;
                    return [2 /*return*/, RiFileSearchFill];
                case 139: return [4 /*yield*/, import("react-icons/ri")];
                case 140:
                    RiFileSearchLine = (_b.sent()).RiFileSearchLine;
                    return [2 /*return*/, RiFileSearchLine];
                case 141: return [4 /*yield*/, import("react-icons/ri")];
                case 142:
                    RiFileSettingsFill = (_b.sent()).RiFileSettingsFill;
                    return [2 /*return*/, RiFileSettingsFill];
                case 143: return [4 /*yield*/, import("react-icons/ri")];
                case 144:
                    RiFileSettingsLine = (_b.sent()).RiFileSettingsLine;
                    return [2 /*return*/, RiFileSettingsLine];
                case 145: return [4 /*yield*/, import("react-icons/ri")];
                case 146:
                    RiFileShield2Fill = (_b.sent()).RiFileShield2Fill;
                    return [2 /*return*/, RiFileShield2Fill];
                case 147: return [4 /*yield*/, import("react-icons/ri")];
                case 148:
                    RiFileShield2Line = (_b.sent()).RiFileShield2Line;
                    return [2 /*return*/, RiFileShield2Line];
                case 149: return [4 /*yield*/, import("react-icons/ri")];
                case 150:
                    RiFileShieldFill = (_b.sent()).RiFileShieldFill;
                    return [2 /*return*/, RiFileShieldFill];
                case 151: return [4 /*yield*/, import("react-icons/ri")];
                case 152:
                    RiFileShieldLine = (_b.sent()).RiFileShieldLine;
                    return [2 /*return*/, RiFileShieldLine];
                case 153: return [4 /*yield*/, import("react-icons/ri")];
                case 154:
                    RiFileShredFill = (_b.sent()).RiFileShredFill;
                    return [2 /*return*/, RiFileShredFill];
                case 155: return [4 /*yield*/, import("react-icons/ri")];
                case 156:
                    RiFileShredLine = (_b.sent()).RiFileShredLine;
                    return [2 /*return*/, RiFileShredLine];
                case 157: return [4 /*yield*/, import("react-icons/ri")];
                case 158:
                    RiFileTextFill = (_b.sent()).RiFileTextFill;
                    return [2 /*return*/, RiFileTextFill];
                case 159: return [4 /*yield*/, import("react-icons/ri")];
                case 160:
                    RiFileTextLine = (_b.sent()).RiFileTextLine;
                    return [2 /*return*/, RiFileTextLine];
                case 161: return [4 /*yield*/, import("react-icons/ri")];
                case 162:
                    RiFileTransferFill = (_b.sent()).RiFileTransferFill;
                    return [2 /*return*/, RiFileTransferFill];
                case 163: return [4 /*yield*/, import("react-icons/ri")];
                case 164:
                    RiFileTransferLine = (_b.sent()).RiFileTransferLine;
                    return [2 /*return*/, RiFileTransferLine];
                case 165: return [4 /*yield*/, import("react-icons/ri")];
                case 166:
                    RiFileUnknowFill = (_b.sent()).RiFileUnknowFill;
                    return [2 /*return*/, RiFileUnknowFill];
                case 167: return [4 /*yield*/, import("react-icons/ri")];
                case 168:
                    RiFileUnknowLine = (_b.sent()).RiFileUnknowLine;
                    return [2 /*return*/, RiFileUnknowLine];
                case 169: return [4 /*yield*/, import("react-icons/ri")];
                case 170:
                    RiFileUploadFill = (_b.sent()).RiFileUploadFill;
                    return [2 /*return*/, RiFileUploadFill];
                case 171: return [4 /*yield*/, import("react-icons/ri")];
                case 172:
                    RiFileUploadLine = (_b.sent()).RiFileUploadLine;
                    return [2 /*return*/, RiFileUploadLine];
                case 173: return [4 /*yield*/, import("react-icons/ri")];
                case 174:
                    RiFileUserFill = (_b.sent()).RiFileUserFill;
                    return [2 /*return*/, RiFileUserFill];
                case 175: return [4 /*yield*/, import("react-icons/ri")];
                case 176:
                    RiFileUserLine = (_b.sent()).RiFileUserLine;
                    return [2 /*return*/, RiFileUserLine];
                case 177: return [4 /*yield*/, import("react-icons/ri")];
                case 178:
                    RiFileVideoFill = (_b.sent()).RiFileVideoFill;
                    return [2 /*return*/, RiFileVideoFill];
                case 179: return [4 /*yield*/, import("react-icons/ri")];
                case 180:
                    RiFileVideoLine = (_b.sent()).RiFileVideoLine;
                    return [2 /*return*/, RiFileVideoLine];
                case 181: return [4 /*yield*/, import("react-icons/ri")];
                case 182:
                    RiFileWarningFill = (_b.sent()).RiFileWarningFill;
                    return [2 /*return*/, RiFileWarningFill];
                case 183: return [4 /*yield*/, import("react-icons/ri")];
                case 184:
                    RiFileWarningLine = (_b.sent()).RiFileWarningLine;
                    return [2 /*return*/, RiFileWarningLine];
                case 185: return [4 /*yield*/, import("react-icons/ri")];
                case 186:
                    RiFileWord2Fill = (_b.sent()).RiFileWord2Fill;
                    return [2 /*return*/, RiFileWord2Fill];
                case 187: return [4 /*yield*/, import("react-icons/ri")];
                case 188:
                    RiFileWord2Line = (_b.sent()).RiFileWord2Line;
                    return [2 /*return*/, RiFileWord2Line];
                case 189: return [4 /*yield*/, import("react-icons/ri")];
                case 190:
                    RiFileWordFill = (_b.sent()).RiFileWordFill;
                    return [2 /*return*/, RiFileWordFill];
                case 191: return [4 /*yield*/, import("react-icons/ri")];
                case 192:
                    RiFileWordLine = (_b.sent()).RiFileWordLine;
                    return [2 /*return*/, RiFileWordLine];
                case 193: return [4 /*yield*/, import("react-icons/ri")];
                case 194:
                    RiFileZipFill = (_b.sent()).RiFileZipFill;
                    return [2 /*return*/, RiFileZipFill];
                case 195: return [4 /*yield*/, import("react-icons/ri")];
                case 196:
                    RiFileZipLine = (_b.sent()).RiFileZipLine;
                    return [2 /*return*/, RiFileZipLine];
                case 197: return [4 /*yield*/, import("react-icons/ri")];
                case 198:
                    RiFolder2Fill = (_b.sent()).RiFolder2Fill;
                    return [2 /*return*/, RiFolder2Fill];
                case 199: return [4 /*yield*/, import("react-icons/ri")];
                case 200:
                    RiFolder2Line = (_b.sent()).RiFolder2Line;
                    return [2 /*return*/, RiFolder2Line];
                case 201: return [4 /*yield*/, import("react-icons/ri")];
                case 202:
                    RiFolder3Fill = (_b.sent()).RiFolder3Fill;
                    return [2 /*return*/, RiFolder3Fill];
                case 203: return [4 /*yield*/, import("react-icons/ri")];
                case 204:
                    RiFolder3Line = (_b.sent()).RiFolder3Line;
                    return [2 /*return*/, RiFolder3Line];
                case 205: return [4 /*yield*/, import("react-icons/ri")];
                case 206:
                    RiFolder4Fill = (_b.sent()).RiFolder4Fill;
                    return [2 /*return*/, RiFolder4Fill];
                case 207: return [4 /*yield*/, import("react-icons/ri")];
                case 208:
                    RiFolder4Line = (_b.sent()).RiFolder4Line;
                    return [2 /*return*/, RiFolder4Line];
                case 209: return [4 /*yield*/, import("react-icons/ri")];
                case 210:
                    RiFolder5Fill = (_b.sent()).RiFolder5Fill;
                    return [2 /*return*/, RiFolder5Fill];
                case 211: return [4 /*yield*/, import("react-icons/ri")];
                case 212:
                    RiFolder5Line = (_b.sent()).RiFolder5Line;
                    return [2 /*return*/, RiFolder5Line];
                case 213: return [4 /*yield*/, import("react-icons/ri")];
                case 214:
                    RiFolder6Fill = (_b.sent()).RiFolder6Fill;
                    return [2 /*return*/, RiFolder6Fill];
                case 215: return [4 /*yield*/, import("react-icons/ri")];
                case 216:
                    RiFolder6Line = (_b.sent()).RiFolder6Line;
                    return [2 /*return*/, RiFolder6Line];
                case 217: return [4 /*yield*/, import("react-icons/ri")];
                case 218:
                    RiFolderAddFill = (_b.sent()).RiFolderAddFill;
                    return [2 /*return*/, RiFolderAddFill];
                case 219: return [4 /*yield*/, import("react-icons/ri")];
                case 220:
                    RiFolderAddLine = (_b.sent()).RiFolderAddLine;
                    return [2 /*return*/, RiFolderAddLine];
                case 221: return [4 /*yield*/, import("react-icons/ri")];
                case 222:
                    RiFolderChart2Fill = (_b.sent()).RiFolderChart2Fill;
                    return [2 /*return*/, RiFolderChart2Fill];
                case 223: return [4 /*yield*/, import("react-icons/ri")];
                case 224:
                    RiFolderChart2Line = (_b.sent()).RiFolderChart2Line;
                    return [2 /*return*/, RiFolderChart2Line];
                case 225: return [4 /*yield*/, import("react-icons/ri")];
                case 226:
                    RiFolderChartFill = (_b.sent()).RiFolderChartFill;
                    return [2 /*return*/, RiFolderChartFill];
                case 227: return [4 /*yield*/, import("react-icons/ri")];
                case 228:
                    RiFolderChartLine = (_b.sent()).RiFolderChartLine;
                    return [2 /*return*/, RiFolderChartLine];
                case 229: return [4 /*yield*/, import("react-icons/ri")];
                case 230:
                    RiFolderCheckFill = (_b.sent()).RiFolderCheckFill;
                    return [2 /*return*/, RiFolderCheckFill];
                case 231: return [4 /*yield*/, import("react-icons/ri")];
                case 232:
                    RiFolderCheckLine = (_b.sent()).RiFolderCheckLine;
                    return [2 /*return*/, RiFolderCheckLine];
                case 233: return [4 /*yield*/, import("react-icons/ri")];
                case 234:
                    RiFolderCloseFill = (_b.sent()).RiFolderCloseFill;
                    return [2 /*return*/, RiFolderCloseFill];
                case 235: return [4 /*yield*/, import("react-icons/ri")];
                case 236:
                    RiFolderCloseLine = (_b.sent()).RiFolderCloseLine;
                    return [2 /*return*/, RiFolderCloseLine];
                case 237: return [4 /*yield*/, import("react-icons/ri")];
                case 238:
                    RiFolderCloudFill = (_b.sent()).RiFolderCloudFill;
                    return [2 /*return*/, RiFolderCloudFill];
                case 239: return [4 /*yield*/, import("react-icons/ri")];
                case 240:
                    RiFolderCloudLine = (_b.sent()).RiFolderCloudLine;
                    return [2 /*return*/, RiFolderCloudLine];
                case 241: return [4 /*yield*/, import("react-icons/ri")];
                case 242:
                    RiFolderDownloadFill = (_b.sent()).RiFolderDownloadFill;
                    return [2 /*return*/, RiFolderDownloadFill];
                case 243: return [4 /*yield*/, import("react-icons/ri")];
                case 244:
                    RiFolderDownloadLine = (_b.sent()).RiFolderDownloadLine;
                    return [2 /*return*/, RiFolderDownloadLine];
                case 245: return [4 /*yield*/, import("react-icons/ri")];
                case 246:
                    RiFolderFill = (_b.sent()).RiFolderFill;
                    return [2 /*return*/, RiFolderFill];
                case 247: return [4 /*yield*/, import("react-icons/ri")];
                case 248:
                    RiFolderForbidFill = (_b.sent()).RiFolderForbidFill;
                    return [2 /*return*/, RiFolderForbidFill];
                case 249: return [4 /*yield*/, import("react-icons/ri")];
                case 250:
                    RiFolderForbidLine = (_b.sent()).RiFolderForbidLine;
                    return [2 /*return*/, RiFolderForbidLine];
                case 251: return [4 /*yield*/, import("react-icons/ri")];
                case 252:
                    RiFolderHistoryFill = (_b.sent()).RiFolderHistoryFill;
                    return [2 /*return*/, RiFolderHistoryFill];
                case 253: return [4 /*yield*/, import("react-icons/ri")];
                case 254:
                    RiFolderHistoryLine = (_b.sent()).RiFolderHistoryLine;
                    return [2 /*return*/, RiFolderHistoryLine];
                case 255: return [4 /*yield*/, import("react-icons/ri")];
                case 256:
                    RiFolderImageFill = (_b.sent()).RiFolderImageFill;
                    return [2 /*return*/, RiFolderImageFill];
                case 257: return [4 /*yield*/, import("react-icons/ri")];
                case 258:
                    RiFolderImageLine = (_b.sent()).RiFolderImageLine;
                    return [2 /*return*/, RiFolderImageLine];
                case 259: return [4 /*yield*/, import("react-icons/ri")];
                case 260:
                    RiFolderInfoFill = (_b.sent()).RiFolderInfoFill;
                    return [2 /*return*/, RiFolderInfoFill];
                case 261: return [4 /*yield*/, import("react-icons/ri")];
                case 262:
                    RiFolderInfoLine = (_b.sent()).RiFolderInfoLine;
                    return [2 /*return*/, RiFolderInfoLine];
                case 263: return [4 /*yield*/, import("react-icons/ri")];
                case 264:
                    RiFolderKeyholeFill = (_b.sent()).RiFolderKeyholeFill;
                    return [2 /*return*/, RiFolderKeyholeFill];
                case 265: return [4 /*yield*/, import("react-icons/ri")];
                case 266:
                    RiFolderKeyholeLine = (_b.sent()).RiFolderKeyholeLine;
                    return [2 /*return*/, RiFolderKeyholeLine];
                case 267: return [4 /*yield*/, import("react-icons/ri")];
                case 268:
                    RiFolderLine = (_b.sent()).RiFolderLine;
                    return [2 /*return*/, RiFolderLine];
                case 269: return [4 /*yield*/, import("react-icons/ri")];
                case 270:
                    RiFolderLockFill = (_b.sent()).RiFolderLockFill;
                    return [2 /*return*/, RiFolderLockFill];
                case 271: return [4 /*yield*/, import("react-icons/ri")];
                case 272:
                    RiFolderLockLine = (_b.sent()).RiFolderLockLine;
                    return [2 /*return*/, RiFolderLockLine];
                case 273: return [4 /*yield*/, import("react-icons/ri")];
                case 274:
                    RiFolderMusicFill = (_b.sent()).RiFolderMusicFill;
                    return [2 /*return*/, RiFolderMusicFill];
                case 275: return [4 /*yield*/, import("react-icons/ri")];
                case 276:
                    RiFolderMusicLine = (_b.sent()).RiFolderMusicLine;
                    return [2 /*return*/, RiFolderMusicLine];
                case 277: return [4 /*yield*/, import("react-icons/ri")];
                case 278:
                    RiFolderOpenFill = (_b.sent()).RiFolderOpenFill;
                    return [2 /*return*/, RiFolderOpenFill];
                case 279: return [4 /*yield*/, import("react-icons/ri")];
                case 280:
                    RiFolderOpenLine = (_b.sent()).RiFolderOpenLine;
                    return [2 /*return*/, RiFolderOpenLine];
                case 281: return [4 /*yield*/, import("react-icons/ri")];
                case 282:
                    RiFolderReceivedFill = (_b.sent()).RiFolderReceivedFill;
                    return [2 /*return*/, RiFolderReceivedFill];
                case 283: return [4 /*yield*/, import("react-icons/ri")];
                case 284:
                    RiFolderReceivedLine = (_b.sent()).RiFolderReceivedLine;
                    return [2 /*return*/, RiFolderReceivedLine];
                case 285: return [4 /*yield*/, import("react-icons/ri")];
                case 286:
                    RiFolderReduceFill = (_b.sent()).RiFolderReduceFill;
                    return [2 /*return*/, RiFolderReduceFill];
                case 287: return [4 /*yield*/, import("react-icons/ri")];
                case 288:
                    RiFolderReduceLine = (_b.sent()).RiFolderReduceLine;
                    return [2 /*return*/, RiFolderReduceLine];
                case 289: return [4 /*yield*/, import("react-icons/ri")];
                case 290:
                    RiFolderSettingsFill = (_b.sent()).RiFolderSettingsFill;
                    return [2 /*return*/, RiFolderSettingsFill];
                case 291: return [4 /*yield*/, import("react-icons/ri")];
                case 292:
                    RiFolderSettingsLine = (_b.sent()).RiFolderSettingsLine;
                    return [2 /*return*/, RiFolderSettingsLine];
                case 293: return [4 /*yield*/, import("react-icons/ri")];
                case 294:
                    RiFolderSharedFill = (_b.sent()).RiFolderSharedFill;
                    return [2 /*return*/, RiFolderSharedFill];
                case 295: return [4 /*yield*/, import("react-icons/ri")];
                case 296:
                    RiFolderSharedLine = (_b.sent()).RiFolderSharedLine;
                    return [2 /*return*/, RiFolderSharedLine];
                case 297: return [4 /*yield*/, import("react-icons/ri")];
                case 298:
                    RiFolderShield2Fill = (_b.sent()).RiFolderShield2Fill;
                    return [2 /*return*/, RiFolderShield2Fill];
                case 299: return [4 /*yield*/, import("react-icons/ri")];
                case 300:
                    RiFolderShield2Line = (_b.sent()).RiFolderShield2Line;
                    return [2 /*return*/, RiFolderShield2Line];
                case 301: return [4 /*yield*/, import("react-icons/ri")];
                case 302:
                    RiFolderShieldFill = (_b.sent()).RiFolderShieldFill;
                    return [2 /*return*/, RiFolderShieldFill];
                case 303: return [4 /*yield*/, import("react-icons/ri")];
                case 304:
                    RiFolderShieldLine = (_b.sent()).RiFolderShieldLine;
                    return [2 /*return*/, RiFolderShieldLine];
                case 305: return [4 /*yield*/, import("react-icons/ri")];
                case 306:
                    RiFolderTransferFill = (_b.sent()).RiFolderTransferFill;
                    return [2 /*return*/, RiFolderTransferFill];
                case 307: return [4 /*yield*/, import("react-icons/ri")];
                case 308:
                    RiFolderTransferLine = (_b.sent()).RiFolderTransferLine;
                    return [2 /*return*/, RiFolderTransferLine];
                case 309: return [4 /*yield*/, import("react-icons/ri")];
                case 310:
                    RiFolderUnknowFill = (_b.sent()).RiFolderUnknowFill;
                    return [2 /*return*/, RiFolderUnknowFill];
                case 311: return [4 /*yield*/, import("react-icons/ri")];
                case 312:
                    RiFolderUnknowLine = (_b.sent()).RiFolderUnknowLine;
                    return [2 /*return*/, RiFolderUnknowLine];
                case 313: return [4 /*yield*/, import("react-icons/ri")];
                case 314:
                    RiFolderUploadFill = (_b.sent()).RiFolderUploadFill;
                    return [2 /*return*/, RiFolderUploadFill];
                case 315: return [4 /*yield*/, import("react-icons/ri")];
                case 316:
                    RiFolderUploadLine = (_b.sent()).RiFolderUploadLine;
                    return [2 /*return*/, RiFolderUploadLine];
                case 317: return [4 /*yield*/, import("react-icons/ri")];
                case 318:
                    RiFolderUserFill = (_b.sent()).RiFolderUserFill;
                    return [2 /*return*/, RiFolderUserFill];
                case 319: return [4 /*yield*/, import("react-icons/ri")];
                case 320:
                    RiFolderUserLine = (_b.sent()).RiFolderUserLine;
                    return [2 /*return*/, RiFolderUserLine];
                case 321: return [4 /*yield*/, import("react-icons/ri")];
                case 322:
                    RiFolderVideoFill = (_b.sent()).RiFolderVideoFill;
                    return [2 /*return*/, RiFolderVideoFill];
                case 323: return [4 /*yield*/, import("react-icons/ri")];
                case 324:
                    RiFolderVideoLine = (_b.sent()).RiFolderVideoLine;
                    return [2 /*return*/, RiFolderVideoLine];
                case 325: return [4 /*yield*/, import("react-icons/ri")];
                case 326:
                    RiFolderWarningFill = (_b.sent()).RiFolderWarningFill;
                    return [2 /*return*/, RiFolderWarningFill];
                case 327: return [4 /*yield*/, import("react-icons/ri")];
                case 328:
                    RiFolderWarningLine = (_b.sent()).RiFolderWarningLine;
                    return [2 /*return*/, RiFolderWarningLine];
                case 329: return [4 /*yield*/, import("react-icons/ri")];
                case 330:
                    RiFolderZipFill = (_b.sent()).RiFolderZipFill;
                    return [2 /*return*/, RiFolderZipFill];
                case 331: return [4 /*yield*/, import("react-icons/ri")];
                case 332:
                    RiFolderZipLine = (_b.sent()).RiFolderZipLine;
                    return [2 /*return*/, RiFolderZipLine];
                case 333: return [4 /*yield*/, import("react-icons/ri")];
                case 334:
                    RiFoldersFill = (_b.sent()).RiFoldersFill;
                    return [2 /*return*/, RiFoldersFill];
                case 335: return [4 /*yield*/, import("react-icons/ri")];
                case 336:
                    RiFoldersLine = (_b.sent()).RiFoldersLine;
                    return [2 /*return*/, RiFoldersLine];
                case 337: return [4 /*yield*/, import("react-icons/ri")];
                case 338:
                    RiKeynoteFill = (_b.sent()).RiKeynoteFill;
                    return [2 /*return*/, RiKeynoteFill];
                case 339: return [4 /*yield*/, import("react-icons/ri")];
                case 340:
                    RiKeynoteLine = (_b.sent()).RiKeynoteLine;
                    return [2 /*return*/, RiKeynoteLine];
                case 341: return [4 /*yield*/, import("react-icons/ri")];
                case 342:
                    RiMarkdownFill = (_b.sent()).RiMarkdownFill;
                    return [2 /*return*/, RiMarkdownFill];
                case 343: return [4 /*yield*/, import("react-icons/ri")];
                case 344:
                    RiMarkdownLine = (_b.sent()).RiMarkdownLine;
                    return [2 /*return*/, RiMarkdownLine];
                case 345: return [4 /*yield*/, import("react-icons/ri")];
                case 346:
                    RiNewsFill = (_b.sent()).RiNewsFill;
                    return [2 /*return*/, RiNewsFill];
                case 347: return [4 /*yield*/, import("react-icons/ri")];
                case 348:
                    RiNewsLine = (_b.sent()).RiNewsLine;
                    return [2 /*return*/, RiNewsLine];
                case 349: return [4 /*yield*/, import("react-icons/ri")];
                case 350:
                    RiNewspaperFill = (_b.sent()).RiNewspaperFill;
                    return [2 /*return*/, RiNewspaperFill];
                case 351: return [4 /*yield*/, import("react-icons/ri")];
                case 352:
                    RiNewspaperLine = (_b.sent()).RiNewspaperLine;
                    return [2 /*return*/, RiNewspaperLine];
                case 353: return [4 /*yield*/, import("react-icons/ri")];
                case 354:
                    RiNumbersFill = (_b.sent()).RiNumbersFill;
                    return [2 /*return*/, RiNumbersFill];
                case 355: return [4 /*yield*/, import("react-icons/ri")];
                case 356:
                    RiNumbersLine = (_b.sent()).RiNumbersLine;
                    return [2 /*return*/, RiNumbersLine];
                case 357: return [4 /*yield*/, import("react-icons/ri")];
                case 358:
                    RiPagesFill = (_b.sent()).RiPagesFill;
                    return [2 /*return*/, RiPagesFill];
                case 359: return [4 /*yield*/, import("react-icons/ri")];
                case 360:
                    RiPagesLine = (_b.sent()).RiPagesLine;
                    return [2 /*return*/, RiPagesLine];
                case 361: return [4 /*yield*/, import("react-icons/ri")];
                case 362:
                    RiReceiptFill = (_b.sent()).RiReceiptFill;
                    return [2 /*return*/, RiReceiptFill];
                case 363: return [4 /*yield*/, import("react-icons/ri")];
                case 364:
                    RiReceiptLine = (_b.sent()).RiReceiptLine;
                    return [2 /*return*/, RiReceiptLine];
                case 365: return [4 /*yield*/, import("react-icons/ri")];
                case 366:
                    RiStickyNote2Fill = (_b.sent()).RiStickyNote2Fill;
                    return [2 /*return*/, RiStickyNote2Fill];
                case 367: return [4 /*yield*/, import("react-icons/ri")];
                case 368:
                    RiStickyNote2Line = (_b.sent()).RiStickyNote2Line;
                    return [2 /*return*/, RiStickyNote2Line];
                case 369: return [4 /*yield*/, import("react-icons/ri")];
                case 370:
                    RiStickyNoteAddFill = (_b.sent()).RiStickyNoteAddFill;
                    return [2 /*return*/, RiStickyNoteAddFill];
                case 371: return [4 /*yield*/, import("react-icons/ri")];
                case 372:
                    RiStickyNoteAddLine = (_b.sent()).RiStickyNoteAddLine;
                    return [2 /*return*/, RiStickyNoteAddLine];
                case 373: return [4 /*yield*/, import("react-icons/ri")];
                case 374:
                    RiStickyNoteFill = (_b.sent()).RiStickyNoteFill;
                    return [2 /*return*/, RiStickyNoteFill];
                case 375: return [4 /*yield*/, import("react-icons/ri")];
                case 376:
                    RiStickyNoteLine = (_b.sent()).RiStickyNoteLine;
                    return [2 /*return*/, RiStickyNoteLine];
                case 377: return [4 /*yield*/, import("react-icons/ri")];
                case 378:
                    RiSurveyFill = (_b.sent()).RiSurveyFill;
                    return [2 /*return*/, RiSurveyFill];
                case 379: return [4 /*yield*/, import("react-icons/ri")];
                case 380:
                    RiSurveyLine = (_b.sent()).RiSurveyLine;
                    return [2 /*return*/, RiSurveyLine];
                case 381: return [4 /*yield*/, import("react-icons/ri")];
                case 382:
                    RiTaskFill = (_b.sent()).RiTaskFill;
                    return [2 /*return*/, RiTaskFill];
                case 383: return [4 /*yield*/, import("react-icons/ri")];
                case 384:
                    RiTaskLine = (_b.sent()).RiTaskLine;
                    return [2 /*return*/, RiTaskLine];
                case 385: return [4 /*yield*/, import("react-icons/ri")];
                case 386:
                    RiTodoFill = (_b.sent()).RiTodoFill;
                    return [2 /*return*/, RiTodoFill];
                case 387: return [4 /*yield*/, import("react-icons/ri")];
                case 388:
                    RiTodoLine = (_b.sent()).RiTodoLine;
                    return [2 /*return*/, RiTodoLine];
                case 389: return [4 /*yield*/, import("react-icons/ri")];
                case 390:
                    RiAB = (_b.sent()).RiAB;
                    return [2 /*return*/, RiAB];
                case 391: return [4 /*yield*/, import("react-icons/ri")];
                case 392:
                    RiAiGenerate2 = (_b.sent()).RiAiGenerate2;
                    return [2 /*return*/, RiAiGenerate2];
                case 393: return [4 /*yield*/, import("react-icons/ri")];
                case 394:
                    RiAiGenerateText = (_b.sent()).RiAiGenerateText;
                    return [2 /*return*/, RiAiGenerateText];
                case 395: return [4 /*yield*/, import("react-icons/ri")];
                case 396:
                    RiAiGenerate = (_b.sent()).RiAiGenerate;
                    return [2 /*return*/, RiAiGenerate];
                case 397: return [4 /*yield*/, import("react-icons/ri")];
                case 398:
                    RiAlignBottom = (_b.sent()).RiAlignBottom;
                    return [2 /*return*/, RiAlignBottom];
                case 399: return [4 /*yield*/, import("react-icons/ri")];
                case 400:
                    RiAlignCenter = (_b.sent()).RiAlignCenter;
                    return [2 /*return*/, RiAlignCenter];
                case 401: return [4 /*yield*/, import("react-icons/ri")];
                case 402:
                    RiAlignJustify = (_b.sent()).RiAlignJustify;
                    return [2 /*return*/, RiAlignJustify];
                case 403: return [4 /*yield*/, import("react-icons/ri")];
                case 404:
                    RiAlignLeft = (_b.sent()).RiAlignLeft;
                    return [2 /*return*/, RiAlignLeft];
                case 405: return [4 /*yield*/, import("react-icons/ri")];
                case 406:
                    RiAlignRight = (_b.sent()).RiAlignRight;
                    return [2 /*return*/, RiAlignRight];
                case 407: return [4 /*yield*/, import("react-icons/ri")];
                case 408:
                    RiAlignTop = (_b.sent()).RiAlignTop;
                    return [2 /*return*/, RiAlignTop];
                case 409: return [4 /*yield*/, import("react-icons/ri")];
                case 410:
                    RiAlignVertically = (_b.sent()).RiAlignVertically;
                    return [2 /*return*/, RiAlignVertically];
                case 411: return [4 /*yield*/, import("react-icons/ri")];
                case 412:
                    RiAsterisk = (_b.sent()).RiAsterisk;
                    return [2 /*return*/, RiAsterisk];
                case 413: return [4 /*yield*/, import("react-icons/ri")];
                case 414:
                    RiAttachment2 = (_b.sent()).RiAttachment2;
                    return [2 /*return*/, RiAttachment2];
                case 415: return [4 /*yield*/, import("react-icons/ri")];
                case 416:
                    RiBold = (_b.sent()).RiBold;
                    return [2 /*return*/, RiBold];
                case 417: return [4 /*yield*/, import("react-icons/ri")];
                case 418:
                    RiBringForward = (_b.sent()).RiBringForward;
                    return [2 /*return*/, RiBringForward];
                case 419: return [4 /*yield*/, import("react-icons/ri")];
                case 420:
                    RiBringToFront = (_b.sent()).RiBringToFront;
                    return [2 /*return*/, RiBringToFront];
                case 421: return [4 /*yield*/, import("react-icons/ri")];
                case 422:
                    RiCalendarView = (_b.sent()).RiCalendarView;
                    return [2 /*return*/, RiCalendarView];
                case 423: return [4 /*yield*/, import("react-icons/ri")];
                case 424:
                    RiCarouselView = (_b.sent()).RiCarouselView;
                    return [2 /*return*/, RiCarouselView];
                case 425: return [4 /*yield*/, import("react-icons/ri")];
                case 426:
                    RiCodeBlock = (_b.sent()).RiCodeBlock;
                    return [2 /*return*/, RiCodeBlock];
                case 427: return [4 /*yield*/, import("react-icons/ri")];
                case 428:
                    RiCodeView = (_b.sent()).RiCodeView;
                    return [2 /*return*/, RiCodeView];
                case 429: return [4 /*yield*/, import("react-icons/ri")];
                case 430:
                    RiCustomSize = (_b.sent()).RiCustomSize;
                    return [2 /*return*/, RiCustomSize];
                case 431: return [4 /*yield*/, import("react-icons/ri")];
                case 432:
                    RiDeleteColumn = (_b.sent()).RiDeleteColumn;
                    return [2 /*return*/, RiDeleteColumn];
                case 433: return [4 /*yield*/, import("react-icons/ri")];
                case 434:
                    RiDeleteRow = (_b.sent()).RiDeleteRow;
                    return [2 /*return*/, RiDeleteRow];
                case 435: return [4 /*yield*/, import("react-icons/ri")];
                case 436:
                    RiDoubleQuotesL = (_b.sent()).RiDoubleQuotesL;
                    return [2 /*return*/, RiDoubleQuotesL];
                case 437: return [4 /*yield*/, import("react-icons/ri")];
                case 438:
                    RiDoubleQuotesR = (_b.sent()).RiDoubleQuotesR;
                    return [2 /*return*/, RiDoubleQuotesR];
                case 439: return [4 /*yield*/, import("react-icons/ri")];
                case 440:
                    RiDraggable = (_b.sent()).RiDraggable;
                    return [2 /*return*/, RiDraggable];
                case 441: return [4 /*yield*/, import("react-icons/ri")];
                case 442:
                    RiDropdownList = (_b.sent()).RiDropdownList;
                    return [2 /*return*/, RiDropdownList];
                case 443: return [4 /*yield*/, import("react-icons/ri")];
                case 444:
                    RiEmphasisCn = (_b.sent()).RiEmphasisCn;
                    return [2 /*return*/, RiEmphasisCn];
                case 445: return [4 /*yield*/, import("react-icons/ri")];
                case 446:
                    RiEmphasis = (_b.sent()).RiEmphasis;
                    return [2 /*return*/, RiEmphasis];
                case 447: return [4 /*yield*/, import("react-icons/ri")];
                case 448:
                    RiEnglishInput = (_b.sent()).RiEnglishInput;
                    return [2 /*return*/, RiEnglishInput];
                case 449: return [4 /*yield*/, import("react-icons/ri")];
                case 450:
                    RiFlowChart = (_b.sent()).RiFlowChart;
                    return [2 /*return*/, RiFlowChart];
                case 451: return [4 /*yield*/, import("react-icons/ri")];
                case 452:
                    RiFocusMode = (_b.sent()).RiFocusMode;
                    return [2 /*return*/, RiFocusMode];
                case 453: return [4 /*yield*/, import("react-icons/ri")];
                case 454:
                    RiFontColor = (_b.sent()).RiFontColor;
                    return [2 /*return*/, RiFontColor];
                case 455: return [4 /*yield*/, import("react-icons/ri")];
                case 456:
                    RiFontFamily = (_b.sent()).RiFontFamily;
                    return [2 /*return*/, RiFontFamily];
                case 457: return [4 /*yield*/, import("react-icons/ri")];
                case 458:
                    RiFontMono = (_b.sent()).RiFontMono;
                    return [2 /*return*/, RiFontMono];
                case 459: return [4 /*yield*/, import("react-icons/ri")];
                case 460:
                    RiFontSansSerif = (_b.sent()).RiFontSansSerif;
                    return [2 /*return*/, RiFontSansSerif];
                case 461: return [4 /*yield*/, import("react-icons/ri")];
                case 462:
                    RiFontSans = (_b.sent()).RiFontSans;
                    return [2 /*return*/, RiFontSans];
                case 463: return [4 /*yield*/, import("react-icons/ri")];
                case 464:
                    RiFontSize2 = (_b.sent()).RiFontSize2;
                    return [2 /*return*/, RiFontSize2];
                case 465: return [4 /*yield*/, import("react-icons/ri")];
                case 466:
                    RiFontSizeAi = (_b.sent()).RiFontSizeAi;
                    return [2 /*return*/, RiFontSizeAi];
                case 467: return [4 /*yield*/, import("react-icons/ri")];
                case 468:
                    RiFontSize = (_b.sent()).RiFontSize;
                    return [2 /*return*/, RiFontSize];
                case 469: return [4 /*yield*/, import("react-icons/ri")];
                case 470:
                    RiFormatClear = (_b.sent()).RiFormatClear;
                    return [2 /*return*/, RiFormatClear];
                case 471: return [4 /*yield*/, import("react-icons/ri")];
                case 472:
                    RiFormula = (_b.sent()).RiFormula;
                    return [2 /*return*/, RiFormula];
                case 473: return [4 /*yield*/, import("react-icons/ri")];
                case 474:
                    RiFunctions = (_b.sent()).RiFunctions;
                    return [2 /*return*/, RiFunctions];
                case 475: return [4 /*yield*/, import("react-icons/ri")];
                case 476:
                    RiGalleryView2 = (_b.sent()).RiGalleryView2;
                    return [2 /*return*/, RiGalleryView2];
                case 477: return [4 /*yield*/, import("react-icons/ri")];
                case 478:
                    RiGalleryView = (_b.sent()).RiGalleryView;
                    return [2 /*return*/, RiGalleryView];
                case 479: return [4 /*yield*/, import("react-icons/ri")];
                case 480:
                    RiH1 = (_b.sent()).RiH1;
                    return [2 /*return*/, RiH1];
                case 481: return [4 /*yield*/, import("react-icons/ri")];
                case 482:
                    RiH2 = (_b.sent()).RiH2;
                    return [2 /*return*/, RiH2];
                case 483: return [4 /*yield*/, import("react-icons/ri")];
                case 484:
                    RiH3 = (_b.sent()).RiH3;
                    return [2 /*return*/, RiH3];
                case 485: return [4 /*yield*/, import("react-icons/ri")];
                case 486:
                    RiH4 = (_b.sent()).RiH4;
                    return [2 /*return*/, RiH4];
                case 487: return [4 /*yield*/, import("react-icons/ri")];
                case 488:
                    RiH5 = (_b.sent()).RiH5;
                    return [2 /*return*/, RiH5];
                case 489: return [4 /*yield*/, import("react-icons/ri")];
                case 490:
                    RiH6 = (_b.sent()).RiH6;
                    return [2 /*return*/, RiH6];
                case 491: return [4 /*yield*/, import("react-icons/ri")];
                case 492:
                    RiHand = (_b.sent()).RiHand;
                    return [2 /*return*/, RiHand];
                case 493: return [4 /*yield*/, import("react-icons/ri")];
                case 494:
                    RiHashtag = (_b.sent()).RiHashtag;
                    return [2 /*return*/, RiHashtag];
                case 495: return [4 /*yield*/, import("react-icons/ri")];
                case 496:
                    RiHeading = (_b.sent()).RiHeading;
                    return [2 /*return*/, RiHeading];
                case 497: return [4 /*yield*/, import("react-icons/ri")];
                case 498:
                    RiIndentDecrease = (_b.sent()).RiIndentDecrease;
                    return [2 /*return*/, RiIndentDecrease];
                case 499: return [4 /*yield*/, import("react-icons/ri")];
                case 500:
                    RiIndentIncrease = (_b.sent()).RiIndentIncrease;
                    return [2 /*return*/, RiIndentIncrease];
                case 501: return [4 /*yield*/, import("react-icons/ri")];
                case 502:
                    RiInfoI = (_b.sent()).RiInfoI;
                    return [2 /*return*/, RiInfoI];
                case 503: return [4 /*yield*/, import("react-icons/ri")];
                case 504:
                    RiInputCursorMove = (_b.sent()).RiInputCursorMove;
                    return [2 /*return*/, RiInputCursorMove];
                case 505: return [4 /*yield*/, import("react-icons/ri")];
                case 506:
                    RiInputField = (_b.sent()).RiInputField;
                    return [2 /*return*/, RiInputField];
                case 507: return [4 /*yield*/, import("react-icons/ri")];
                case 508:
                    RiInsertColumnLeft = (_b.sent()).RiInsertColumnLeft;
                    return [2 /*return*/, RiInsertColumnLeft];
                case 509: return [4 /*yield*/, import("react-icons/ri")];
                case 510:
                    RiInsertColumnRight = (_b.sent()).RiInsertColumnRight;
                    return [2 /*return*/, RiInsertColumnRight];
                case 511: return [4 /*yield*/, import("react-icons/ri")];
                case 512:
                    RiInsertRowBottom = (_b.sent()).RiInsertRowBottom;
                    return [2 /*return*/, RiInsertRowBottom];
                case 513: return [4 /*yield*/, import("react-icons/ri")];
                case 514:
                    RiInsertRowTop = (_b.sent()).RiInsertRowTop;
                    return [2 /*return*/, RiInsertRowTop];
                case 515: return [4 /*yield*/, import("react-icons/ri")];
                case 516:
                    RiItalic = (_b.sent()).RiItalic;
                    return [2 /*return*/, RiItalic];
                case 517: return [4 /*yield*/, import("react-icons/ri")];
                case 518:
                    RiKanbanView2 = (_b.sent()).RiKanbanView2;
                    return [2 /*return*/, RiKanbanView2];
                case 519: return [4 /*yield*/, import("react-icons/ri")];
                case 520:
                    RiKanbanView = (_b.sent()).RiKanbanView;
                    return [2 /*return*/, RiKanbanView];
                case 521: return [4 /*yield*/, import("react-icons/ri")];
                case 522:
                    RiLetterSpacing2 = (_b.sent()).RiLetterSpacing2;
                    return [2 /*return*/, RiLetterSpacing2];
                case 523: return [4 /*yield*/, import("react-icons/ri")];
                case 524:
                    RiLineHeight2 = (_b.sent()).RiLineHeight2;
                    return [2 /*return*/, RiLineHeight2];
                case 525: return [4 /*yield*/, import("react-icons/ri")];
                case 526:
                    RiLineHeight = (_b.sent()).RiLineHeight;
                    return [2 /*return*/, RiLineHeight];
                case 527: return [4 /*yield*/, import("react-icons/ri")];
                case 528:
                    RiLinkM = (_b.sent()).RiLinkM;
                    return [2 /*return*/, RiLinkM];
                case 529: return [4 /*yield*/, import("react-icons/ri")];
                case 530:
                    RiLinkUnlinkM = (_b.sent()).RiLinkUnlinkM;
                    return [2 /*return*/, RiLinkUnlinkM];
                case 531: return [4 /*yield*/, import("react-icons/ri")];
                case 532:
                    RiLinkUnlink = (_b.sent()).RiLinkUnlink;
                    return [2 /*return*/, RiLinkUnlink];
                case 533: return [4 /*yield*/, import("react-icons/ri")];
                case 534:
                    RiLink = (_b.sent()).RiLink;
                    return [2 /*return*/, RiLink];
                case 535: return [4 /*yield*/, import("react-icons/ri")];
                case 536:
                    RiListCheck2 = (_b.sent()).RiListCheck2;
                    return [2 /*return*/, RiListCheck2];
                case 537: return [4 /*yield*/, import("react-icons/ri")];
                case 538:
                    RiListCheck3 = (_b.sent()).RiListCheck3;
                    return [2 /*return*/, RiListCheck3];
                case 539: return [4 /*yield*/, import("react-icons/ri")];
                case 540:
                    RiListCheck = (_b.sent()).RiListCheck;
                    return [2 /*return*/, RiListCheck];
                case 541: return [4 /*yield*/, import("react-icons/ri")];
                case 542:
                    RiListIndefinite = (_b.sent()).RiListIndefinite;
                    return [2 /*return*/, RiListIndefinite];
                case 543: return [4 /*yield*/, import("react-icons/ri")];
                case 544:
                    RiListOrdered2 = (_b.sent()).RiListOrdered2;
                    return [2 /*return*/, RiListOrdered2];
                case 545: return [4 /*yield*/, import("react-icons/ri")];
                case 546:
                    RiListOrdered = (_b.sent()).RiListOrdered;
                    return [2 /*return*/, RiListOrdered];
                case 547: return [4 /*yield*/, import("react-icons/ri")];
                case 548:
                    RiListRadio = (_b.sent()).RiListRadio;
                    return [2 /*return*/, RiListRadio];
                case 549: return [4 /*yield*/, import("react-icons/ri")];
                case 550:
                    RiListUnordered = (_b.sent()).RiListUnordered;
                    return [2 /*return*/, RiListUnordered];
                case 551: return [4 /*yield*/, import("react-icons/ri")];
                case 552:
                    RiListView = (_b.sent()).RiListView;
                    return [2 /*return*/, RiListView];
                case 553: return [4 /*yield*/, import("react-icons/ri")];
                case 554:
                    RiMergeCellsHorizontal = (_b.sent()).RiMergeCellsHorizontal;
                    return [2 /*return*/, RiMergeCellsHorizontal];
                case 555: return [4 /*yield*/, import("react-icons/ri")];
                case 556:
                    RiMergeCellsVertical = (_b.sent()).RiMergeCellsVertical;
                    return [2 /*return*/, RiMergeCellsVertical];
                case 557: return [4 /*yield*/, import("react-icons/ri")];
                case 558:
                    RiMindMap = (_b.sent()).RiMindMap;
                    return [2 /*return*/, RiMindMap];
                case 559: return [4 /*yield*/, import("react-icons/ri")];
                case 560:
                    RiNodeTree = (_b.sent()).RiNodeTree;
                    return [2 /*return*/, RiNodeTree];
                case 561: return [4 /*yield*/, import("react-icons/ri")];
                case 562:
                    RiNumber0 = (_b.sent()).RiNumber0;
                    return [2 /*return*/, RiNumber0];
                case 563: return [4 /*yield*/, import("react-icons/ri")];
                case 564:
                    RiNumber1 = (_b.sent()).RiNumber1;
                    return [2 /*return*/, RiNumber1];
                case 565: return [4 /*yield*/, import("react-icons/ri")];
                case 566:
                    RiNumber2 = (_b.sent()).RiNumber2;
                    return [2 /*return*/, RiNumber2];
                case 567: return [4 /*yield*/, import("react-icons/ri")];
                case 568:
                    RiNumber3 = (_b.sent()).RiNumber3;
                    return [2 /*return*/, RiNumber3];
                case 569: return [4 /*yield*/, import("react-icons/ri")];
                case 570:
                    RiNumber4 = (_b.sent()).RiNumber4;
                    return [2 /*return*/, RiNumber4];
                case 571: return [4 /*yield*/, import("react-icons/ri")];
                case 572:
                    RiNumber5 = (_b.sent()).RiNumber5;
                    return [2 /*return*/, RiNumber5];
                case 573: return [4 /*yield*/, import("react-icons/ri")];
                case 574:
                    RiNumber6 = (_b.sent()).RiNumber6;
                    return [2 /*return*/, RiNumber6];
                case 575: return [4 /*yield*/, import("react-icons/ri")];
                case 576:
                    RiNumber7 = (_b.sent()).RiNumber7;
                    return [2 /*return*/, RiNumber7];
                case 577: return [4 /*yield*/, import("react-icons/ri")];
                case 578:
                    RiNumber8 = (_b.sent()).RiNumber8;
                    return [2 /*return*/, RiNumber8];
                case 579: return [4 /*yield*/, import("react-icons/ri")];
                case 580:
                    RiNumber9 = (_b.sent()).RiNumber9;
                    return [2 /*return*/, RiNumber9];
                case 581: return [4 /*yield*/, import("react-icons/ri")];
                case 582:
                    RiOmega = (_b.sent()).RiOmega;
                    return [2 /*return*/, RiOmega];
                case 583: return [4 /*yield*/, import("react-icons/ri")];
                case 584:
                    RiOrganizationChart = (_b.sent()).RiOrganizationChart;
                    return [2 /*return*/, RiOrganizationChart];
                case 585: return [4 /*yield*/, import("react-icons/ri")];
                case 586:
                    RiOverline = (_b.sent()).RiOverline;
                    return [2 /*return*/, RiOverline];
                case 587: return [4 /*yield*/, import("react-icons/ri")];
                case 588:
                    RiPageSeparator = (_b.sent()).RiPageSeparator;
                    return [2 /*return*/, RiPageSeparator];
                case 589: return [4 /*yield*/, import("react-icons/ri")];
                case 590:
                    RiParagraph = (_b.sent()).RiParagraph;
                    return [2 /*return*/, RiParagraph];
                case 591: return [4 /*yield*/, import("react-icons/ri")];
                case 592:
                    RiPinyinInput = (_b.sent()).RiPinyinInput;
                    return [2 /*return*/, RiPinyinInput];
                case 593: return [4 /*yield*/, import("react-icons/ri")];
                case 594:
                    RiQuestionMark = (_b.sent()).RiQuestionMark;
                    return [2 /*return*/, RiQuestionMark];
                case 595: return [4 /*yield*/, import("react-icons/ri")];
                case 596:
                    RiQuoteText = (_b.sent()).RiQuoteText;
                    return [2 /*return*/, RiQuoteText];
                case 597: return [4 /*yield*/, import("react-icons/ri")];
                case 598:
                    RiRoundedCorner = (_b.sent()).RiRoundedCorner;
                    return [2 /*return*/, RiRoundedCorner];
                case 599: return [4 /*yield*/, import("react-icons/ri")];
                case 600:
                    RiSendBackward = (_b.sent()).RiSendBackward;
                    return [2 /*return*/, RiSendBackward];
                case 601: return [4 /*yield*/, import("react-icons/ri")];
                case 602:
                    RiSendToBack = (_b.sent()).RiSendToBack;
                    return [2 /*return*/, RiSendToBack];
                case 603: return [4 /*yield*/, import("react-icons/ri")];
                case 604:
                    RiSeparator = (_b.sent()).RiSeparator;
                    return [2 /*return*/, RiSeparator];
                case 605: return [4 /*yield*/, import("react-icons/ri")];
                case 606:
                    RiSingleQuotesL = (_b.sent()).RiSingleQuotesL;
                    return [2 /*return*/, RiSingleQuotesL];
                case 607: return [4 /*yield*/, import("react-icons/ri")];
                case 608:
                    RiSingleQuotesR = (_b.sent()).RiSingleQuotesR;
                    return [2 /*return*/, RiSingleQuotesR];
                case 609: return [4 /*yield*/, import("react-icons/ri")];
                case 610:
                    RiSketching = (_b.sent()).RiSketching;
                    return [2 /*return*/, RiSketching];
                case 611: return [4 /*yield*/, import("react-icons/ri")];
                case 612:
                    RiSlashCommands2 = (_b.sent()).RiSlashCommands2;
                    return [2 /*return*/, RiSlashCommands2];
                case 613: return [4 /*yield*/, import("react-icons/ri")];
                case 614:
                    RiSlashCommands = (_b.sent()).RiSlashCommands;
                    return [2 /*return*/, RiSlashCommands];
                case 615: return [4 /*yield*/, import("react-icons/ri")];
                case 616:
                    RiSlideshowView = (_b.sent()).RiSlideshowView;
                    return [2 /*return*/, RiSlideshowView];
                case 617: return [4 /*yield*/, import("react-icons/ri")];
                case 618:
                    RiSortAlphabetAsc = (_b.sent()).RiSortAlphabetAsc;
                    return [2 /*return*/, RiSortAlphabetAsc];
                case 619: return [4 /*yield*/, import("react-icons/ri")];
                case 620:
                    RiSortAlphabetDesc = (_b.sent()).RiSortAlphabetDesc;
                    return [2 /*return*/, RiSortAlphabetDesc];
                case 621: return [4 /*yield*/, import("react-icons/ri")];
                case 622:
                    RiSortAsc = (_b.sent()).RiSortAsc;
                    return [2 /*return*/, RiSortAsc];
                case 623: return [4 /*yield*/, import("react-icons/ri")];
                case 624:
                    RiSortDesc = (_b.sent()).RiSortDesc;
                    return [2 /*return*/, RiSortDesc];
                case 625: return [4 /*yield*/, import("react-icons/ri")];
                case 626:
                    RiSortNumberAsc = (_b.sent()).RiSortNumberAsc;
                    return [2 /*return*/, RiSortNumberAsc];
                case 627: return [4 /*yield*/, import("react-icons/ri")];
                case 628:
                    RiSortNumberDesc = (_b.sent()).RiSortNumberDesc;
                    return [2 /*return*/, RiSortNumberDesc];
                case 629: return [4 /*yield*/, import("react-icons/ri")];
                case 630:
                    RiSpace = (_b.sent()).RiSpace;
                    return [2 /*return*/, RiSpace];
                case 631: return [4 /*yield*/, import("react-icons/ri")];
                case 632:
                    RiSplitCellsHorizontal = (_b.sent()).RiSplitCellsHorizontal;
                    return [2 /*return*/, RiSplitCellsHorizontal];
                case 633: return [4 /*yield*/, import("react-icons/ri")];
                case 634:
                    RiSplitCellsVertical = (_b.sent()).RiSplitCellsVertical;
                    return [2 /*return*/, RiSplitCellsVertical];
                case 635: return [4 /*yield*/, import("react-icons/ri")];
                case 636:
                    RiSquareRoot = (_b.sent()).RiSquareRoot;
                    return [2 /*return*/, RiSquareRoot];
                case 637: return [4 /*yield*/, import("react-icons/ri")];
                case 638:
                    RiStackedView = (_b.sent()).RiStackedView;
                    return [2 /*return*/, RiStackedView];
                case 639: return [4 /*yield*/, import("react-icons/ri")];
                case 640:
                    RiStrikethrough2 = (_b.sent()).RiStrikethrough2;
                    return [2 /*return*/, RiStrikethrough2];
                case 641: return [4 /*yield*/, import("react-icons/ri")];
                case 642:
                    RiStrikethrough = (_b.sent()).RiStrikethrough;
                    return [2 /*return*/, RiStrikethrough];
                case 643: return [4 /*yield*/, import("react-icons/ri")];
                case 644:
                    RiSubscript2 = (_b.sent()).RiSubscript2;
                    return [2 /*return*/, RiSubscript2];
                case 645: return [4 /*yield*/, import("react-icons/ri")];
                case 646:
                    RiSubscript = (_b.sent()).RiSubscript;
                    return [2 /*return*/, RiSubscript];
                case 647: return [4 /*yield*/, import("react-icons/ri")];
                case 648:
                    RiSuperscript2 = (_b.sent()).RiSuperscript2;
                    return [2 /*return*/, RiSuperscript2];
                case 649: return [4 /*yield*/, import("react-icons/ri")];
                case 650:
                    RiSuperscript = (_b.sent()).RiSuperscript;
                    return [2 /*return*/, RiSuperscript];
                case 651: return [4 /*yield*/, import("react-icons/ri")];
                case 652:
                    RiTable2 = (_b.sent()).RiTable2;
                    return [2 /*return*/, RiTable2];
                case 653: return [4 /*yield*/, import("react-icons/ri")];
                case 654:
                    RiTable3 = (_b.sent()).RiTable3;
                    return [2 /*return*/, RiTable3];
                case 655: return [4 /*yield*/, import("react-icons/ri")];
                case 656:
                    RiTableView = (_b.sent()).RiTableView;
                    return [2 /*return*/, RiTableView];
                case 657: return [4 /*yield*/, import("react-icons/ri")];
                case 658:
                    RiTextBlock = (_b.sent()).RiTextBlock;
                    return [2 /*return*/, RiTextBlock];
                case 659: return [4 /*yield*/, import("react-icons/ri")];
                case 660:
                    RiTextDirectionL = (_b.sent()).RiTextDirectionL;
                    return [2 /*return*/, RiTextDirectionL];
                case 661: return [4 /*yield*/, import("react-icons/ri")];
                case 662:
                    RiTextDirectionR = (_b.sent()).RiTextDirectionR;
                    return [2 /*return*/, RiTextDirectionR];
                case 663: return [4 /*yield*/, import("react-icons/ri")];
                case 664:
                    RiTextSnippet = (_b.sent()).RiTextSnippet;
                    return [2 /*return*/, RiTextSnippet];
                case 665: return [4 /*yield*/, import("react-icons/ri")];
                case 666:
                    RiTextSpacing = (_b.sent()).RiTextSpacing;
                    return [2 /*return*/, RiTextSpacing];
                case 667: return [4 /*yield*/, import("react-icons/ri")];
                case 668:
                    RiTextWrap = (_b.sent()).RiTextWrap;
                    return [2 /*return*/, RiTextWrap];
                case 669: return [4 /*yield*/, import("react-icons/ri")];
                case 670:
                    RiText = (_b.sent()).RiText;
                    return [2 /*return*/, RiText];
                case 671: return [4 /*yield*/, import("react-icons/ri")];
                case 672:
                    RiTimelineView = (_b.sent()).RiTimelineView;
                    return [2 /*return*/, RiTimelineView];
                case 673: return [4 /*yield*/, import("react-icons/ri")];
                case 674:
                    RiTranslate2 = (_b.sent()).RiTranslate2;
                    return [2 /*return*/, RiTranslate2];
                case 675: return [4 /*yield*/, import("react-icons/ri")];
                case 676:
                    RiTranslateAi2 = (_b.sent()).RiTranslateAi2;
                    return [2 /*return*/, RiTranslateAi2];
                case 677: return [4 /*yield*/, import("react-icons/ri")];
                case 678:
                    RiTranslateAi = (_b.sent()).RiTranslateAi;
                    return [2 /*return*/, RiTranslateAi];
                case 679: return [4 /*yield*/, import("react-icons/ri")];
                case 680:
                    RiTranslate = (_b.sent()).RiTranslate;
                    return [2 /*return*/, RiTranslate];
                case 681: return [4 /*yield*/, import("react-icons/ri")];
                case 682:
                    RiUnderline = (_b.sent()).RiUnderline;
                    return [2 /*return*/, RiUnderline];
                case 683: return [4 /*yield*/, import("react-icons/ri")];
                case 684:
                    RiWubiInput = (_b.sent()).RiWubiInput;
                    return [2 /*return*/, RiWubiInput];
                case 685: return [4 /*yield*/, import("react-icons/ri")];
                case 686:
                    Ri24HoursFill = (_b.sent()).Ri24HoursFill;
                    return [2 /*return*/, Ri24HoursFill];
                case 687: return [4 /*yield*/, import("react-icons/ri")];
                case 688:
                    Ri24HoursLine = (_b.sent()).Ri24HoursLine;
                    return [2 /*return*/, Ri24HoursLine];
                case 689: return [4 /*yield*/, import("react-icons/ri")];
                case 690:
                    RiAuctionFill = (_b.sent()).RiAuctionFill;
                    return [2 /*return*/, RiAuctionFill];
                case 691: return [4 /*yield*/, import("react-icons/ri")];
                case 692:
                    RiAuctionLine = (_b.sent()).RiAuctionLine;
                    return [2 /*return*/, RiAuctionLine];
                case 693: return [4 /*yield*/, import("react-icons/ri")];
                case 694:
                    RiBankCard2Fill = (_b.sent()).RiBankCard2Fill;
                    return [2 /*return*/, RiBankCard2Fill];
                case 695: return [4 /*yield*/, import("react-icons/ri")];
                case 696:
                    RiBankCard2Line = (_b.sent()).RiBankCard2Line;
                    return [2 /*return*/, RiBankCard2Line];
                case 697: return [4 /*yield*/, import("react-icons/ri")];
                case 698:
                    RiBankCardFill = (_b.sent()).RiBankCardFill;
                    return [2 /*return*/, RiBankCardFill];
                case 699: return [4 /*yield*/, import("react-icons/ri")];
                case 700:
                    RiBankCardLine = (_b.sent()).RiBankCardLine;
                    return [2 /*return*/, RiBankCardLine];
                case 701: return [4 /*yield*/, import("react-icons/ri")];
                case 702:
                    RiBitCoinFill = (_b.sent()).RiBitCoinFill;
                    return [2 /*return*/, RiBitCoinFill];
                case 703: return [4 /*yield*/, import("react-icons/ri")];
                case 704:
                    RiBitCoinLine = (_b.sent()).RiBitCoinLine;
                    return [2 /*return*/, RiBitCoinLine];
                case 705: return [4 /*yield*/, import("react-icons/ri")];
                case 706:
                    RiBnbFill = (_b.sent()).RiBnbFill;
                    return [2 /*return*/, RiBnbFill];
                case 707: return [4 /*yield*/, import("react-icons/ri")];
                case 708:
                    RiBnbLine = (_b.sent()).RiBnbLine;
                    return [2 /*return*/, RiBnbLine];
                case 709: return [4 /*yield*/, import("react-icons/ri")];
                case 710:
                    RiBtcFill = (_b.sent()).RiBtcFill;
                    return [2 /*return*/, RiBtcFill];
                case 711: return [4 /*yield*/, import("react-icons/ri")];
                case 712:
                    RiBtcLine = (_b.sent()).RiBtcLine;
                    return [2 /*return*/, RiBtcLine];
                case 713: return [4 /*yield*/, import("react-icons/ri")];
                case 714:
                    RiCashFill = (_b.sent()).RiCashFill;
                    return [2 /*return*/, RiCashFill];
                case 715: return [4 /*yield*/, import("react-icons/ri")];
                case 716:
                    RiCashLine = (_b.sent()).RiCashLine;
                    return [2 /*return*/, RiCashLine];
                case 717: return [4 /*yield*/, import("react-icons/ri")];
                case 718:
                    RiCoinFill = (_b.sent()).RiCoinFill;
                    return [2 /*return*/, RiCoinFill];
                case 719: return [4 /*yield*/, import("react-icons/ri")];
                case 720:
                    RiCoinLine = (_b.sent()).RiCoinLine;
                    return [2 /*return*/, RiCoinLine];
                case 721: return [4 /*yield*/, import("react-icons/ri")];
                case 722:
                    RiCoinsFill = (_b.sent()).RiCoinsFill;
                    return [2 /*return*/, RiCoinsFill];
                case 723: return [4 /*yield*/, import("react-icons/ri")];
                case 724:
                    RiCoinsLine = (_b.sent()).RiCoinsLine;
                    return [2 /*return*/, RiCoinsLine];
                case 725: return [4 /*yield*/, import("react-icons/ri")];
                case 726:
                    RiCopperCoinFill = (_b.sent()).RiCopperCoinFill;
                    return [2 /*return*/, RiCopperCoinFill];
                case 727: return [4 /*yield*/, import("react-icons/ri")];
                case 728:
                    RiCopperCoinLine = (_b.sent()).RiCopperCoinLine;
                    return [2 /*return*/, RiCopperCoinLine];
                case 729: return [4 /*yield*/, import("react-icons/ri")];
                case 730:
                    RiCopperDiamondFill = (_b.sent()).RiCopperDiamondFill;
                    return [2 /*return*/, RiCopperDiamondFill];
                case 731: return [4 /*yield*/, import("react-icons/ri")];
                case 732:
                    RiCopperDiamondLine = (_b.sent()).RiCopperDiamondLine;
                    return [2 /*return*/, RiCopperDiamondLine];
                case 733: return [4 /*yield*/, import("react-icons/ri")];
                case 734:
                    RiCoupon2Fill = (_b.sent()).RiCoupon2Fill;
                    return [2 /*return*/, RiCoupon2Fill];
                case 735: return [4 /*yield*/, import("react-icons/ri")];
                case 736:
                    RiCoupon2Line = (_b.sent()).RiCoupon2Line;
                    return [2 /*return*/, RiCoupon2Line];
                case 737: return [4 /*yield*/, import("react-icons/ri")];
                case 738:
                    RiCoupon3Fill = (_b.sent()).RiCoupon3Fill;
                    return [2 /*return*/, RiCoupon3Fill];
                case 739: return [4 /*yield*/, import("react-icons/ri")];
                case 740:
                    RiCoupon3Line = (_b.sent()).RiCoupon3Line;
                    return [2 /*return*/, RiCoupon3Line];
                case 741: return [4 /*yield*/, import("react-icons/ri")];
                case 742:
                    RiCoupon4Fill = (_b.sent()).RiCoupon4Fill;
                    return [2 /*return*/, RiCoupon4Fill];
                case 743: return [4 /*yield*/, import("react-icons/ri")];
                case 744:
                    RiCoupon4Line = (_b.sent()).RiCoupon4Line;
                    return [2 /*return*/, RiCoupon4Line];
                case 745: return [4 /*yield*/, import("react-icons/ri")];
                case 746:
                    RiCoupon5Fill = (_b.sent()).RiCoupon5Fill;
                    return [2 /*return*/, RiCoupon5Fill];
                case 747: return [4 /*yield*/, import("react-icons/ri")];
                case 748:
                    RiCoupon5Line = (_b.sent()).RiCoupon5Line;
                    return [2 /*return*/, RiCoupon5Line];
                case 749: return [4 /*yield*/, import("react-icons/ri")];
                case 750:
                    RiCouponFill = (_b.sent()).RiCouponFill;
                    return [2 /*return*/, RiCouponFill];
                case 751: return [4 /*yield*/, import("react-icons/ri")];
                case 752:
                    RiCouponLine = (_b.sent()).RiCouponLine;
                    return [2 /*return*/, RiCouponLine];
                case 753: return [4 /*yield*/, import("react-icons/ri")];
                case 754:
                    RiCurrencyFill = (_b.sent()).RiCurrencyFill;
                    return [2 /*return*/, RiCurrencyFill];
                case 755: return [4 /*yield*/, import("react-icons/ri")];
                case 756:
                    RiCurrencyLine = (_b.sent()).RiCurrencyLine;
                    return [2 /*return*/, RiCurrencyLine];
                case 757: return [4 /*yield*/, import("react-icons/ri")];
                case 758:
                    RiDiscountPercentFill = (_b.sent()).RiDiscountPercentFill;
                    return [2 /*return*/, RiDiscountPercentFill];
                case 759: return [4 /*yield*/, import("react-icons/ri")];
                case 760:
                    RiDiscountPercentLine = (_b.sent()).RiDiscountPercentLine;
                    return [2 /*return*/, RiDiscountPercentLine];
                case 761: return [4 /*yield*/, import("react-icons/ri")];
                case 762:
                    RiEthFill = (_b.sent()).RiEthFill;
                    return [2 /*return*/, RiEthFill];
                case 763: return [4 /*yield*/, import("react-icons/ri")];
                case 764:
                    RiEthLine = (_b.sent()).RiEthLine;
                    return [2 /*return*/, RiEthLine];
                case 765: return [4 /*yield*/, import("react-icons/ri")];
                case 766:
                    RiExchange2Fill = (_b.sent()).RiExchange2Fill;
                    return [2 /*return*/, RiExchange2Fill];
                case 767: return [4 /*yield*/, import("react-icons/ri")];
                case 768:
                    RiExchange2Line = (_b.sent()).RiExchange2Line;
                    return [2 /*return*/, RiExchange2Line];
                case 769: return [4 /*yield*/, import("react-icons/ri")];
                case 770:
                    RiExchangeBoxFill = (_b.sent()).RiExchangeBoxFill;
                    return [2 /*return*/, RiExchangeBoxFill];
                case 771: return [4 /*yield*/, import("react-icons/ri")];
                case 772:
                    RiExchangeBoxLine = (_b.sent()).RiExchangeBoxLine;
                    return [2 /*return*/, RiExchangeBoxLine];
                case 773: return [4 /*yield*/, import("react-icons/ri")];
                case 774:
                    RiExchangeCnyFill = (_b.sent()).RiExchangeCnyFill;
                    return [2 /*return*/, RiExchangeCnyFill];
                case 775: return [4 /*yield*/, import("react-icons/ri")];
                case 776:
                    RiExchangeCnyLine = (_b.sent()).RiExchangeCnyLine;
                    return [2 /*return*/, RiExchangeCnyLine];
                case 777: return [4 /*yield*/, import("react-icons/ri")];
                case 778:
                    RiExchangeDollarFill = (_b.sent()).RiExchangeDollarFill;
                    return [2 /*return*/, RiExchangeDollarFill];
                case 779: return [4 /*yield*/, import("react-icons/ri")];
                case 780:
                    RiExchangeDollarLine = (_b.sent()).RiExchangeDollarLine;
                    return [2 /*return*/, RiExchangeDollarLine];
                case 781: return [4 /*yield*/, import("react-icons/ri")];
                case 782:
                    RiExchangeFill = (_b.sent()).RiExchangeFill;
                    return [2 /*return*/, RiExchangeFill];
                case 783: return [4 /*yield*/, import("react-icons/ri")];
                case 784:
                    RiExchangeFundsFill = (_b.sent()).RiExchangeFundsFill;
                    return [2 /*return*/, RiExchangeFundsFill];
                case 785: return [4 /*yield*/, import("react-icons/ri")];
                case 786:
                    RiExchangeFundsLine = (_b.sent()).RiExchangeFundsLine;
                    return [2 /*return*/, RiExchangeFundsLine];
                case 787: return [4 /*yield*/, import("react-icons/ri")];
                case 788:
                    RiExchangeLine = (_b.sent()).RiExchangeLine;
                    return [2 /*return*/, RiExchangeLine];
                case 789: return [4 /*yield*/, import("react-icons/ri")];
                case 790:
                    RiFundsBoxFill = (_b.sent()).RiFundsBoxFill;
                    return [2 /*return*/, RiFundsBoxFill];
                case 791: return [4 /*yield*/, import("react-icons/ri")];
                case 792:
                    RiFundsBoxLine = (_b.sent()).RiFundsBoxLine;
                    return [2 /*return*/, RiFundsBoxLine];
                case 793: return [4 /*yield*/, import("react-icons/ri")];
                case 794:
                    RiFundsFill = (_b.sent()).RiFundsFill;
                    return [2 /*return*/, RiFundsFill];
                case 795: return [4 /*yield*/, import("react-icons/ri")];
                case 796:
                    RiFundsLine = (_b.sent()).RiFundsLine;
                    return [2 /*return*/, RiFundsLine];
                case 797: return [4 /*yield*/, import("react-icons/ri")];
                case 798:
                    RiGift2Fill = (_b.sent()).RiGift2Fill;
                    return [2 /*return*/, RiGift2Fill];
                case 799: return [4 /*yield*/, import("react-icons/ri")];
                case 800:
                    RiGift2Line = (_b.sent()).RiGift2Line;
                    return [2 /*return*/, RiGift2Line];
                case 801: return [4 /*yield*/, import("react-icons/ri")];
                case 802:
                    RiGiftFill = (_b.sent()).RiGiftFill;
                    return [2 /*return*/, RiGiftFill];
                case 803: return [4 /*yield*/, import("react-icons/ri")];
                case 804:
                    RiGiftLine = (_b.sent()).RiGiftLine;
                    return [2 /*return*/, RiGiftLine];
                case 805: return [4 /*yield*/, import("react-icons/ri")];
                case 806:
                    RiHandCoinFill = (_b.sent()).RiHandCoinFill;
                    return [2 /*return*/, RiHandCoinFill];
                case 807: return [4 /*yield*/, import("react-icons/ri")];
                case 808:
                    RiHandCoinLine = (_b.sent()).RiHandCoinLine;
                    return [2 /*return*/, RiHandCoinLine];
                case 809: return [4 /*yield*/, import("react-icons/ri")];
                case 810:
                    RiHandHeartFill = (_b.sent()).RiHandHeartFill;
                    return [2 /*return*/, RiHandHeartFill];
                case 811: return [4 /*yield*/, import("react-icons/ri")];
                case 812:
                    RiHandHeartLine = (_b.sent()).RiHandHeartLine;
                    return [2 /*return*/, RiHandHeartLine];
                case 813: return [4 /*yield*/, import("react-icons/ri")];
                case 814:
                    RiIncreaseDecreaseFill = (_b.sent()).RiIncreaseDecreaseFill;
                    return [2 /*return*/, RiIncreaseDecreaseFill];
                case 815: return [4 /*yield*/, import("react-icons/ri")];
                case 816:
                    RiIncreaseDecreaseLine = (_b.sent()).RiIncreaseDecreaseLine;
                    return [2 /*return*/, RiIncreaseDecreaseLine];
                case 817: return [4 /*yield*/, import("react-icons/ri")];
                case 818:
                    RiMoneyCnyBoxFill = (_b.sent()).RiMoneyCnyBoxFill;
                    return [2 /*return*/, RiMoneyCnyBoxFill];
                case 819: return [4 /*yield*/, import("react-icons/ri")];
                case 820:
                    RiMoneyCnyBoxLine = (_b.sent()).RiMoneyCnyBoxLine;
                    return [2 /*return*/, RiMoneyCnyBoxLine];
                case 821: return [4 /*yield*/, import("react-icons/ri")];
                case 822:
                    RiMoneyCnyCircleFill = (_b.sent()).RiMoneyCnyCircleFill;
                    return [2 /*return*/, RiMoneyCnyCircleFill];
                case 823: return [4 /*yield*/, import("react-icons/ri")];
                case 824:
                    RiMoneyCnyCircleLine = (_b.sent()).RiMoneyCnyCircleLine;
                    return [2 /*return*/, RiMoneyCnyCircleLine];
                case 825: return [4 /*yield*/, import("react-icons/ri")];
                case 826:
                    RiMoneyDollarBoxFill = (_b.sent()).RiMoneyDollarBoxFill;
                    return [2 /*return*/, RiMoneyDollarBoxFill];
                case 827: return [4 /*yield*/, import("react-icons/ri")];
                case 828:
                    RiMoneyDollarBoxLine = (_b.sent()).RiMoneyDollarBoxLine;
                    return [2 /*return*/, RiMoneyDollarBoxLine];
                case 829: return [4 /*yield*/, import("react-icons/ri")];
                case 830:
                    RiMoneyDollarCircleFill = (_b.sent()).RiMoneyDollarCircleFill;
                    return [2 /*return*/, RiMoneyDollarCircleFill];
                case 831: return [4 /*yield*/, import("react-icons/ri")];
                case 832:
                    RiMoneyDollarCircleLine = (_b.sent()).RiMoneyDollarCircleLine;
                    return [2 /*return*/, RiMoneyDollarCircleLine];
                case 833: return [4 /*yield*/, import("react-icons/ri")];
                case 834:
                    RiMoneyEuroBoxFill = (_b.sent()).RiMoneyEuroBoxFill;
                    return [2 /*return*/, RiMoneyEuroBoxFill];
                case 835: return [4 /*yield*/, import("react-icons/ri")];
                case 836:
                    RiMoneyEuroBoxLine = (_b.sent()).RiMoneyEuroBoxLine;
                    return [2 /*return*/, RiMoneyEuroBoxLine];
                case 837: return [4 /*yield*/, import("react-icons/ri")];
                case 838:
                    RiMoneyEuroCircleFill = (_b.sent()).RiMoneyEuroCircleFill;
                    return [2 /*return*/, RiMoneyEuroCircleFill];
                case 839: return [4 /*yield*/, import("react-icons/ri")];
                case 840:
                    RiMoneyEuroCircleLine = (_b.sent()).RiMoneyEuroCircleLine;
                    return [2 /*return*/, RiMoneyEuroCircleLine];
                case 841: return [4 /*yield*/, import("react-icons/ri")];
                case 842:
                    RiMoneyPoundBoxFill = (_b.sent()).RiMoneyPoundBoxFill;
                    return [2 /*return*/, RiMoneyPoundBoxFill];
                case 843: return [4 /*yield*/, import("react-icons/ri")];
                case 844:
                    RiMoneyPoundBoxLine = (_b.sent()).RiMoneyPoundBoxLine;
                    return [2 /*return*/, RiMoneyPoundBoxLine];
                case 845: return [4 /*yield*/, import("react-icons/ri")];
                case 846:
                    RiMoneyPoundCircleFill = (_b.sent()).RiMoneyPoundCircleFill;
                    return [2 /*return*/, RiMoneyPoundCircleFill];
                case 847: return [4 /*yield*/, import("react-icons/ri")];
                case 848:
                    RiMoneyPoundCircleLine = (_b.sent()).RiMoneyPoundCircleLine;
                    return [2 /*return*/, RiMoneyPoundCircleLine];
                case 849: return [4 /*yield*/, import("react-icons/ri")];
                case 850:
                    RiMoneyRupeeCircleFill = (_b.sent()).RiMoneyRupeeCircleFill;
                    return [2 /*return*/, RiMoneyRupeeCircleFill];
                case 851: return [4 /*yield*/, import("react-icons/ri")];
                case 852:
                    RiMoneyRupeeCircleLine = (_b.sent()).RiMoneyRupeeCircleLine;
                    return [2 /*return*/, RiMoneyRupeeCircleLine];
                case 853: return [4 /*yield*/, import("react-icons/ri")];
                case 854:
                    RiNftFill = (_b.sent()).RiNftFill;
                    return [2 /*return*/, RiNftFill];
                case 855: return [4 /*yield*/, import("react-icons/ri")];
                case 856:
                    RiNftLine = (_b.sent()).RiNftLine;
                    return [2 /*return*/, RiNftLine];
                case 857: return [4 /*yield*/, import("react-icons/ri")];
                case 858:
                    RiP2pFill = (_b.sent()).RiP2pFill;
                    return [2 /*return*/, RiP2pFill];
                case 859: return [4 /*yield*/, import("react-icons/ri")];
                case 860:
                    RiP2pLine = (_b.sent()).RiP2pLine;
                    return [2 /*return*/, RiP2pLine];
                case 861: return [4 /*yield*/, import("react-icons/ri")];
                case 862:
                    RiPercentFill = (_b.sent()).RiPercentFill;
                    return [2 /*return*/, RiPercentFill];
                case 863: return [4 /*yield*/, import("react-icons/ri")];
                case 864:
                    RiPercentLine = (_b.sent()).RiPercentLine;
                    return [2 /*return*/, RiPercentLine];
                case 865: return [4 /*yield*/, import("react-icons/ri")];
                case 866:
                    RiPriceTag2Fill = (_b.sent()).RiPriceTag2Fill;
                    return [2 /*return*/, RiPriceTag2Fill];
                case 867: return [4 /*yield*/, import("react-icons/ri")];
                case 868:
                    RiPriceTag2Line = (_b.sent()).RiPriceTag2Line;
                    return [2 /*return*/, RiPriceTag2Line];
                case 869: return [4 /*yield*/, import("react-icons/ri")];
                case 870:
                    RiPriceTag3Fill = (_b.sent()).RiPriceTag3Fill;
                    return [2 /*return*/, RiPriceTag3Fill];
                case 871: return [4 /*yield*/, import("react-icons/ri")];
                case 872:
                    RiPriceTag3Line = (_b.sent()).RiPriceTag3Line;
                    return [2 /*return*/, RiPriceTag3Line];
                case 873: return [4 /*yield*/, import("react-icons/ri")];
                case 874:
                    RiPriceTagFill = (_b.sent()).RiPriceTagFill;
                    return [2 /*return*/, RiPriceTagFill];
                case 875: return [4 /*yield*/, import("react-icons/ri")];
                case 876:
                    RiPriceTagLine = (_b.sent()).RiPriceTagLine;
                    return [2 /*return*/, RiPriceTagLine];
                case 877: return [4 /*yield*/, import("react-icons/ri")];
                case 878:
                    RiRedPacketFill = (_b.sent()).RiRedPacketFill;
                    return [2 /*return*/, RiRedPacketFill];
                case 879: return [4 /*yield*/, import("react-icons/ri")];
                case 880:
                    RiRedPacketLine = (_b.sent()).RiRedPacketLine;
                    return [2 /*return*/, RiRedPacketLine];
                case 881: return [4 /*yield*/, import("react-icons/ri")];
                case 882:
                    RiRefund2Fill = (_b.sent()).RiRefund2Fill;
                    return [2 /*return*/, RiRefund2Fill];
                case 883: return [4 /*yield*/, import("react-icons/ri")];
                case 884:
                    RiRefund2Line = (_b.sent()).RiRefund2Line;
                    return [2 /*return*/, RiRefund2Line];
                case 885: return [4 /*yield*/, import("react-icons/ri")];
                case 886:
                    RiRefundFill = (_b.sent()).RiRefundFill;
                    return [2 /*return*/, RiRefundFill];
                case 887: return [4 /*yield*/, import("react-icons/ri")];
                case 888:
                    RiRefundLine = (_b.sent()).RiRefundLine;
                    return [2 /*return*/, RiRefundLine];
                case 889: return [4 /*yield*/, import("react-icons/ri")];
                case 890:
                    RiSafe2Fill = (_b.sent()).RiSafe2Fill;
                    return [2 /*return*/, RiSafe2Fill];
                case 891: return [4 /*yield*/, import("react-icons/ri")];
                case 892:
                    RiSafe2Line = (_b.sent()).RiSafe2Line;
                    return [2 /*return*/, RiSafe2Line];
                case 893: return [4 /*yield*/, import("react-icons/ri")];
                case 894:
                    RiSafe3Fill = (_b.sent()).RiSafe3Fill;
                    return [2 /*return*/, RiSafe3Fill];
                case 895: return [4 /*yield*/, import("react-icons/ri")];
                case 896:
                    RiSafe3Line = (_b.sent()).RiSafe3Line;
                    return [2 /*return*/, RiSafe3Line];
                case 897: return [4 /*yield*/, import("react-icons/ri")];
                case 898:
                    RiSafeFill = (_b.sent()).RiSafeFill;
                    return [2 /*return*/, RiSafeFill];
                case 899: return [4 /*yield*/, import("react-icons/ri")];
                case 900:
                    RiSafeLine = (_b.sent()).RiSafeLine;
                    return [2 /*return*/, RiSafeLine];
                case 901: return [4 /*yield*/, import("react-icons/ri")];
                case 902:
                    RiSecurePaymentFill = (_b.sent()).RiSecurePaymentFill;
                    return [2 /*return*/, RiSecurePaymentFill];
                case 903: return [4 /*yield*/, import("react-icons/ri")];
                case 904:
                    RiSecurePaymentLine = (_b.sent()).RiSecurePaymentLine;
                    return [2 /*return*/, RiSecurePaymentLine];
                case 905: return [4 /*yield*/, import("react-icons/ri")];
                case 906:
                    RiShoppingBag2Fill = (_b.sent()).RiShoppingBag2Fill;
                    return [2 /*return*/, RiShoppingBag2Fill];
                case 907: return [4 /*yield*/, import("react-icons/ri")];
                case 908:
                    RiShoppingBag2Line = (_b.sent()).RiShoppingBag2Line;
                    return [2 /*return*/, RiShoppingBag2Line];
                case 909: return [4 /*yield*/, import("react-icons/ri")];
                case 910:
                    RiShoppingBag3Fill = (_b.sent()).RiShoppingBag3Fill;
                    return [2 /*return*/, RiShoppingBag3Fill];
                case 911: return [4 /*yield*/, import("react-icons/ri")];
                case 912:
                    RiShoppingBag3Line = (_b.sent()).RiShoppingBag3Line;
                    return [2 /*return*/, RiShoppingBag3Line];
                case 913: return [4 /*yield*/, import("react-icons/ri")];
                case 914:
                    RiShoppingBag4Fill = (_b.sent()).RiShoppingBag4Fill;
                    return [2 /*return*/, RiShoppingBag4Fill];
                case 915: return [4 /*yield*/, import("react-icons/ri")];
                case 916:
                    RiShoppingBag4Line = (_b.sent()).RiShoppingBag4Line;
                    return [2 /*return*/, RiShoppingBag4Line];
                case 917: return [4 /*yield*/, import("react-icons/ri")];
                case 918:
                    RiShoppingBagFill = (_b.sent()).RiShoppingBagFill;
                    return [2 /*return*/, RiShoppingBagFill];
                case 919: return [4 /*yield*/, import("react-icons/ri")];
                case 920:
                    RiShoppingBagLine = (_b.sent()).RiShoppingBagLine;
                    return [2 /*return*/, RiShoppingBagLine];
                case 921: return [4 /*yield*/, import("react-icons/ri")];
                case 922:
                    RiShoppingBasket2Fill = (_b.sent()).RiShoppingBasket2Fill;
                    return [2 /*return*/, RiShoppingBasket2Fill];
                case 923: return [4 /*yield*/, import("react-icons/ri")];
                case 924:
                    RiShoppingBasket2Line = (_b.sent()).RiShoppingBasket2Line;
                    return [2 /*return*/, RiShoppingBasket2Line];
                case 925: return [4 /*yield*/, import("react-icons/ri")];
                case 926:
                    RiShoppingBasketFill = (_b.sent()).RiShoppingBasketFill;
                    return [2 /*return*/, RiShoppingBasketFill];
                case 927: return [4 /*yield*/, import("react-icons/ri")];
                case 928:
                    RiShoppingBasketLine = (_b.sent()).RiShoppingBasketLine;
                    return [2 /*return*/, RiShoppingBasketLine];
                case 929: return [4 /*yield*/, import("react-icons/ri")];
                case 930:
                    RiShoppingCart2Fill = (_b.sent()).RiShoppingCart2Fill;
                    return [2 /*return*/, RiShoppingCart2Fill];
                case 931: return [4 /*yield*/, import("react-icons/ri")];
                case 932:
                    RiShoppingCart2Line = (_b.sent()).RiShoppingCart2Line;
                    return [2 /*return*/, RiShoppingCart2Line];
                case 933: return [4 /*yield*/, import("react-icons/ri")];
                case 934:
                    RiShoppingCartFill = (_b.sent()).RiShoppingCartFill;
                    return [2 /*return*/, RiShoppingCartFill];
                case 935: return [4 /*yield*/, import("react-icons/ri")];
                case 936:
                    RiShoppingCartLine = (_b.sent()).RiShoppingCartLine;
                    return [2 /*return*/, RiShoppingCartLine];
                case 937: return [4 /*yield*/, import("react-icons/ri")];
                case 938:
                    RiStockFill = (_b.sent()).RiStockFill;
                    return [2 /*return*/, RiStockFill];
                case 939: return [4 /*yield*/, import("react-icons/ri")];
                case 940:
                    RiStockLine = (_b.sent()).RiStockLine;
                    return [2 /*return*/, RiStockLine];
                case 941: return [4 /*yield*/, import("react-icons/ri")];
                case 942:
                    RiSwap2Fill = (_b.sent()).RiSwap2Fill;
                    return [2 /*return*/, RiSwap2Fill];
                case 943: return [4 /*yield*/, import("react-icons/ri")];
                case 944:
                    RiSwap2Line = (_b.sent()).RiSwap2Line;
                    return [2 /*return*/, RiSwap2Line];
                case 945: return [4 /*yield*/, import("react-icons/ri")];
                case 946:
                    RiSwap3Fill = (_b.sent()).RiSwap3Fill;
                    return [2 /*return*/, RiSwap3Fill];
                case 947: return [4 /*yield*/, import("react-icons/ri")];
                case 948:
                    RiSwap3Line = (_b.sent()).RiSwap3Line;
                    return [2 /*return*/, RiSwap3Line];
                case 949: return [4 /*yield*/, import("react-icons/ri")];
                case 950:
                    RiSwapBoxFill = (_b.sent()).RiSwapBoxFill;
                    return [2 /*return*/, RiSwapBoxFill];
                case 951: return [4 /*yield*/, import("react-icons/ri")];
                case 952:
                    RiSwapBoxLine = (_b.sent()).RiSwapBoxLine;
                    return [2 /*return*/, RiSwapBoxLine];
                case 953: return [4 /*yield*/, import("react-icons/ri")];
                case 954:
                    RiSwapFill = (_b.sent()).RiSwapFill;
                    return [2 /*return*/, RiSwapFill];
                case 955: return [4 /*yield*/, import("react-icons/ri")];
                case 956:
                    RiSwapLine = (_b.sent()).RiSwapLine;
                    return [2 /*return*/, RiSwapLine];
                case 957: return [4 /*yield*/, import("react-icons/ri")];
                case 958:
                    RiTicket2Fill = (_b.sent()).RiTicket2Fill;
                    return [2 /*return*/, RiTicket2Fill];
                case 959: return [4 /*yield*/, import("react-icons/ri")];
                case 960:
                    RiTicket2Line = (_b.sent()).RiTicket2Line;
                    return [2 /*return*/, RiTicket2Line];
                case 961: return [4 /*yield*/, import("react-icons/ri")];
                case 962:
                    RiTicketFill = (_b.sent()).RiTicketFill;
                    return [2 /*return*/, RiTicketFill];
                case 963: return [4 /*yield*/, import("react-icons/ri")];
                case 964:
                    RiTicketLine = (_b.sent()).RiTicketLine;
                    return [2 /*return*/, RiTicketLine];
                case 965: return [4 /*yield*/, import("react-icons/ri")];
                case 966:
                    RiTokenSwapFill = (_b.sent()).RiTokenSwapFill;
                    return [2 /*return*/, RiTokenSwapFill];
                case 967: return [4 /*yield*/, import("react-icons/ri")];
                case 968:
                    RiTokenSwapLine = (_b.sent()).RiTokenSwapLine;
                    return [2 /*return*/, RiTokenSwapLine];
                case 969: return [4 /*yield*/, import("react-icons/ri")];
                case 970:
                    RiTrophyFill = (_b.sent()).RiTrophyFill;
                    return [2 /*return*/, RiTrophyFill];
                case 971: return [4 /*yield*/, import("react-icons/ri")];
                case 972:
                    RiTrophyLine = (_b.sent()).RiTrophyLine;
                    return [2 /*return*/, RiTrophyLine];
                case 973: return [4 /*yield*/, import("react-icons/ri")];
                case 974:
                    RiVipCrown2Fill = (_b.sent()).RiVipCrown2Fill;
                    return [2 /*return*/, RiVipCrown2Fill];
                case 975: return [4 /*yield*/, import("react-icons/ri")];
                case 976:
                    RiVipCrown2Line = (_b.sent()).RiVipCrown2Line;
                    return [2 /*return*/, RiVipCrown2Line];
                case 977: return [4 /*yield*/, import("react-icons/ri")];
                case 978:
                    RiVipCrownFill = (_b.sent()).RiVipCrownFill;
                    return [2 /*return*/, RiVipCrownFill];
                case 979: return [4 /*yield*/, import("react-icons/ri")];
                case 980:
                    RiVipCrownLine = (_b.sent()).RiVipCrownLine;
                    return [2 /*return*/, RiVipCrownLine];
                case 981: return [4 /*yield*/, import("react-icons/ri")];
                case 982:
                    RiVipDiamondFill = (_b.sent()).RiVipDiamondFill;
                    return [2 /*return*/, RiVipDiamondFill];
                case 983: return [4 /*yield*/, import("react-icons/ri")];
                case 984:
                    RiVipDiamondLine = (_b.sent()).RiVipDiamondLine;
                    return [2 /*return*/, RiVipDiamondLine];
                case 985: return [4 /*yield*/, import("react-icons/ri")];
                case 986:
                    RiVipFill = (_b.sent()).RiVipFill;
                    return [2 /*return*/, RiVipFill];
                case 987: return [4 /*yield*/, import("react-icons/ri")];
                case 988:
                    RiVipLine = (_b.sent()).RiVipLine;
                    return [2 /*return*/, RiVipLine];
                case 989: return [4 /*yield*/, import("react-icons/ri")];
                case 990:
                    RiWallet2Fill = (_b.sent()).RiWallet2Fill;
                    return [2 /*return*/, RiWallet2Fill];
                case 991: return [4 /*yield*/, import("react-icons/ri")];
                case 992:
                    RiWallet2Line = (_b.sent()).RiWallet2Line;
                    return [2 /*return*/, RiWallet2Line];
                case 993: return [4 /*yield*/, import("react-icons/ri")];
                case 994:
                    RiWallet3Fill = (_b.sent()).RiWallet3Fill;
                    return [2 /*return*/, RiWallet3Fill];
                case 995: return [4 /*yield*/, import("react-icons/ri")];
                case 996:
                    RiWallet3Line = (_b.sent()).RiWallet3Line;
                    return [2 /*return*/, RiWallet3Line];
                case 997: return [4 /*yield*/, import("react-icons/ri")];
                case 998:
                    RiWalletFill = (_b.sent()).RiWalletFill;
                    return [2 /*return*/, RiWalletFill];
                case 999: return [4 /*yield*/, import("react-icons/ri")];
                case 1000:
                    RiWalletLine = (_b.sent()).RiWalletLine;
                    return [2 /*return*/, RiWalletLine];
                case 1001: return [4 /*yield*/, import("react-icons/ri")];
                case 1002:
                    RiWaterFlashFill = (_b.sent()).RiWaterFlashFill;
                    return [2 /*return*/, RiWaterFlashFill];
                case 1003: return [4 /*yield*/, import("react-icons/ri")];
                case 1004:
                    RiWaterFlashLine = (_b.sent()).RiWaterFlashLine;
                    return [2 /*return*/, RiWaterFlashLine];
                case 1005: return [4 /*yield*/, import("react-icons/ri")];
                case 1006:
                    RiXrpFill = (_b.sent()).RiXrpFill;
                    return [2 /*return*/, RiXrpFill];
                case 1007: return [4 /*yield*/, import("react-icons/ri")];
                case 1008:
                    RiXrpLine = (_b.sent()).RiXrpLine;
                    return [2 /*return*/, RiXrpLine];
                case 1009: return [4 /*yield*/, import("react-icons/ri")];
                case 1010:
                    RiXtzFill = (_b.sent()).RiXtzFill;
                    return [2 /*return*/, RiXtzFill];
                case 1011: return [4 /*yield*/, import("react-icons/ri")];
                case 1012:
                    RiXtzLine = (_b.sent()).RiXtzLine;
                    return [2 /*return*/, RiXtzLine];
                case 1013: return [4 /*yield*/, import("react-icons/ri")];
                case 1014:
                    RiBeerFill = (_b.sent()).RiBeerFill;
                    return [2 /*return*/, RiBeerFill];
                case 1015: return [4 /*yield*/, import("react-icons/ri")];
                case 1016:
                    RiBeerLine = (_b.sent()).RiBeerLine;
                    return [2 /*return*/, RiBeerLine];
                case 1017: return [4 /*yield*/, import("react-icons/ri")];
                case 1018:
                    RiBowlFill = (_b.sent()).RiBowlFill;
                    return [2 /*return*/, RiBowlFill];
                case 1019: return [4 /*yield*/, import("react-icons/ri")];
                case 1020:
                    RiBowlLine = (_b.sent()).RiBowlLine;
                    return [2 /*return*/, RiBowlLine];
                case 1021: return [4 /*yield*/, import("react-icons/ri")];
                case 1022:
                    RiBreadFill = (_b.sent()).RiBreadFill;
                    return [2 /*return*/, RiBreadFill];
                case 1023: return [4 /*yield*/, import("react-icons/ri")];
                case 1024:
                    RiBreadLine = (_b.sent()).RiBreadLine;
                    return [2 /*return*/, RiBreadLine];
                case 1025: return [4 /*yield*/, import("react-icons/ri")];
                case 1026:
                    RiCake2Fill = (_b.sent()).RiCake2Fill;
                    return [2 /*return*/, RiCake2Fill];
                case 1027: return [4 /*yield*/, import("react-icons/ri")];
                case 1028:
                    RiCake2Line = (_b.sent()).RiCake2Line;
                    return [2 /*return*/, RiCake2Line];
                case 1029: return [4 /*yield*/, import("react-icons/ri")];
                case 1030:
                    RiCake3Fill = (_b.sent()).RiCake3Fill;
                    return [2 /*return*/, RiCake3Fill];
                case 1031: return [4 /*yield*/, import("react-icons/ri")];
                case 1032:
                    RiCake3Line = (_b.sent()).RiCake3Line;
                    return [2 /*return*/, RiCake3Line];
                case 1033: return [4 /*yield*/, import("react-icons/ri")];
                case 1034:
                    RiCakeFill = (_b.sent()).RiCakeFill;
                    return [2 /*return*/, RiCakeFill];
                case 1035: return [4 /*yield*/, import("react-icons/ri")];
                case 1036:
                    RiCakeLine = (_b.sent()).RiCakeLine;
                    return [2 /*return*/, RiCakeLine];
                case 1037: return [4 /*yield*/, import("react-icons/ri")];
                case 1038:
                    RiCupFill = (_b.sent()).RiCupFill;
                    return [2 /*return*/, RiCupFill];
                case 1039: return [4 /*yield*/, import("react-icons/ri")];
                case 1040:
                    RiCupLine = (_b.sent()).RiCupLine;
                    return [2 /*return*/, RiCupLine];
                case 1041: return [4 /*yield*/, import("react-icons/ri")];
                case 1042:
                    RiDrinks2Fill = (_b.sent()).RiDrinks2Fill;
                    return [2 /*return*/, RiDrinks2Fill];
                case 1043: return [4 /*yield*/, import("react-icons/ri")];
                case 1044:
                    RiDrinks2Line = (_b.sent()).RiDrinks2Line;
                    return [2 /*return*/, RiDrinks2Line];
                case 1045: return [4 /*yield*/, import("react-icons/ri")];
                case 1046:
                    RiDrinksFill = (_b.sent()).RiDrinksFill;
                    return [2 /*return*/, RiDrinksFill];
                case 1047: return [4 /*yield*/, import("react-icons/ri")];
                case 1048:
                    RiDrinksLine = (_b.sent()).RiDrinksLine;
                    return [2 /*return*/, RiDrinksLine];
                case 1049: return [4 /*yield*/, import("react-icons/ri")];
                case 1050:
                    RiGoblet2Fill = (_b.sent()).RiGoblet2Fill;
                    return [2 /*return*/, RiGoblet2Fill];
                case 1051: return [4 /*yield*/, import("react-icons/ri")];
                case 1052:
                    RiGoblet2Line = (_b.sent()).RiGoblet2Line;
                    return [2 /*return*/, RiGoblet2Line];
                case 1053: return [4 /*yield*/, import("react-icons/ri")];
                case 1054:
                    RiGobletFill = (_b.sent()).RiGobletFill;
                    return [2 /*return*/, RiGobletFill];
                case 1055: return [4 /*yield*/, import("react-icons/ri")];
                case 1056:
                    RiGobletLine = (_b.sent()).RiGobletLine;
                    return [2 /*return*/, RiGobletLine];
                case 1057: return [4 /*yield*/, import("react-icons/ri")];
                case 1058:
                    RiKnifeBloodFill = (_b.sent()).RiKnifeBloodFill;
                    return [2 /*return*/, RiKnifeBloodFill];
                case 1059: return [4 /*yield*/, import("react-icons/ri")];
                case 1060:
                    RiKnifeBloodLine = (_b.sent()).RiKnifeBloodLine;
                    return [2 /*return*/, RiKnifeBloodLine];
                case 1061: return [4 /*yield*/, import("react-icons/ri")];
                case 1062:
                    RiKnifeFill = (_b.sent()).RiKnifeFill;
                    return [2 /*return*/, RiKnifeFill];
                case 1063: return [4 /*yield*/, import("react-icons/ri")];
                case 1064:
                    RiKnifeLine = (_b.sent()).RiKnifeLine;
                    return [2 /*return*/, RiKnifeLine];
                case 1065: return [4 /*yield*/, import("react-icons/ri")];
                case 1066:
                    RiRestaurant2Fill = (_b.sent()).RiRestaurant2Fill;
                    return [2 /*return*/, RiRestaurant2Fill];
                case 1067: return [4 /*yield*/, import("react-icons/ri")];
                case 1068:
                    RiRestaurant2Line = (_b.sent()).RiRestaurant2Line;
                    return [2 /*return*/, RiRestaurant2Line];
                case 1069: return [4 /*yield*/, import("react-icons/ri")];
                case 1070:
                    RiRestaurantFill = (_b.sent()).RiRestaurantFill;
                    return [2 /*return*/, RiRestaurantFill];
                case 1071: return [4 /*yield*/, import("react-icons/ri")];
                case 1072:
                    RiRestaurantLine = (_b.sent()).RiRestaurantLine;
                    return [2 /*return*/, RiRestaurantLine];
                case 1073: return [4 /*yield*/, import("react-icons/ri")];
                case 1074:
                    RiAedElectrodesFill = (_b.sent()).RiAedElectrodesFill;
                    return [2 /*return*/, RiAedElectrodesFill];
                case 1075: return [4 /*yield*/, import("react-icons/ri")];
                case 1076:
                    RiAedElectrodesLine = (_b.sent()).RiAedElectrodesLine;
                    return [2 /*return*/, RiAedElectrodesLine];
                case 1077: return [4 /*yield*/, import("react-icons/ri")];
                case 1078:
                    RiAedFill = (_b.sent()).RiAedFill;
                    return [2 /*return*/, RiAedFill];
                case 1079: return [4 /*yield*/, import("react-icons/ri")];
                case 1080:
                    RiAedLine = (_b.sent()).RiAedLine;
                    return [2 /*return*/, RiAedLine];
                case 1081: return [4 /*yield*/, import("react-icons/ri")];
                case 1082:
                    RiBrain2Fill = (_b.sent()).RiBrain2Fill;
                    return [2 /*return*/, RiBrain2Fill];
                case 1083: return [4 /*yield*/, import("react-icons/ri")];
                case 1084:
                    RiBrain2Line = (_b.sent()).RiBrain2Line;
                    return [2 /*return*/, RiBrain2Line];
                case 1085: return [4 /*yield*/, import("react-icons/ri")];
                case 1086:
                    RiBrainFill = (_b.sent()).RiBrainFill;
                    return [2 /*return*/, RiBrainFill];
                case 1087: return [4 /*yield*/, import("react-icons/ri")];
                case 1088:
                    RiBrainLine = (_b.sent()).RiBrainLine;
                    return [2 /*return*/, RiBrainLine];
                case 1089: return [4 /*yield*/, import("react-icons/ri")];
                case 1090:
                    RiCapsuleFill = (_b.sent()).RiCapsuleFill;
                    return [2 /*return*/, RiCapsuleFill];
                case 1091: return [4 /*yield*/, import("react-icons/ri")];
                case 1092:
                    RiCapsuleLine = (_b.sent()).RiCapsuleLine;
                    return [2 /*return*/, RiCapsuleLine];
                case 1093: return [4 /*yield*/, import("react-icons/ri")];
                case 1094:
                    RiDislikeFill = (_b.sent()).RiDislikeFill;
                    return [2 /*return*/, RiDislikeFill];
                case 1095: return [4 /*yield*/, import("react-icons/ri")];
                case 1096:
                    RiDislikeLine = (_b.sent()).RiDislikeLine;
                    return [2 /*return*/, RiDislikeLine];
                case 1097: return [4 /*yield*/, import("react-icons/ri")];
                case 1098:
                    RiDnaFill = (_b.sent()).RiDnaFill;
                    return [2 /*return*/, RiDnaFill];
                case 1099: return [4 /*yield*/, import("react-icons/ri")];
                case 1100:
                    RiDnaLine = (_b.sent()).RiDnaLine;
                    return [2 /*return*/, RiDnaLine];
                case 1101: return [4 /*yield*/, import("react-icons/ri")];
                case 1102:
                    RiDossierFill = (_b.sent()).RiDossierFill;
                    return [2 /*return*/, RiDossierFill];
                case 1103: return [4 /*yield*/, import("react-icons/ri")];
                case 1104:
                    RiDossierLine = (_b.sent()).RiDossierLine;
                    return [2 /*return*/, RiDossierLine];
                case 1105: return [4 /*yield*/, import("react-icons/ri")];
                case 1106:
                    RiDropperFill = (_b.sent()).RiDropperFill;
                    return [2 /*return*/, RiDropperFill];
                case 1107: return [4 /*yield*/, import("react-icons/ri")];
                case 1108:
                    RiDropperLine = (_b.sent()).RiDropperLine;
                    return [2 /*return*/, RiDropperLine];
                case 1109: return [4 /*yield*/, import("react-icons/ri")];
                case 1110:
                    RiEmpathizeFill = (_b.sent()).RiEmpathizeFill;
                    return [2 /*return*/, RiEmpathizeFill];
                case 1111: return [4 /*yield*/, import("react-icons/ri")];
                case 1112:
                    RiEmpathizeLine = (_b.sent()).RiEmpathizeLine;
                    return [2 /*return*/, RiEmpathizeLine];
                case 1113: return [4 /*yield*/, import("react-icons/ri")];
                case 1114:
                    RiFirstAidKitFill = (_b.sent()).RiFirstAidKitFill;
                    return [2 /*return*/, RiFirstAidKitFill];
                case 1115: return [4 /*yield*/, import("react-icons/ri")];
                case 1116:
                    RiFirstAidKitLine = (_b.sent()).RiFirstAidKitLine;
                    return [2 /*return*/, RiFirstAidKitLine];
                case 1117: return [4 /*yield*/, import("react-icons/ri")];
                case 1118:
                    RiFlaskFill = (_b.sent()).RiFlaskFill;
                    return [2 /*return*/, RiFlaskFill];
                case 1119: return [4 /*yield*/, import("react-icons/ri")];
                case 1120:
                    RiFlaskLine = (_b.sent()).RiFlaskLine;
                    return [2 /*return*/, RiFlaskLine];
                case 1121: return [4 /*yield*/, import("react-icons/ri")];
                case 1122:
                    RiHandSanitizerFill = (_b.sent()).RiHandSanitizerFill;
                    return [2 /*return*/, RiHandSanitizerFill];
                case 1123: return [4 /*yield*/, import("react-icons/ri")];
                case 1124:
                    RiHandSanitizerLine = (_b.sent()).RiHandSanitizerLine;
                    return [2 /*return*/, RiHandSanitizerLine];
                case 1125: return [4 /*yield*/, import("react-icons/ri")];
                case 1126:
                    RiHealthBookFill = (_b.sent()).RiHealthBookFill;
                    return [2 /*return*/, RiHealthBookFill];
                case 1127: return [4 /*yield*/, import("react-icons/ri")];
                case 1128:
                    RiHealthBookLine = (_b.sent()).RiHealthBookLine;
                    return [2 /*return*/, RiHealthBookLine];
                case 1129: return [4 /*yield*/, import("react-icons/ri")];
                case 1130:
                    RiHeart2Fill = (_b.sent()).RiHeart2Fill;
                    return [2 /*return*/, RiHeart2Fill];
                case 1131: return [4 /*yield*/, import("react-icons/ri")];
                case 1132:
                    RiHeart2Line = (_b.sent()).RiHeart2Line;
                    return [2 /*return*/, RiHeart2Line];
                case 1133: return [4 /*yield*/, import("react-icons/ri")];
                case 1134:
                    RiHeart3Fill = (_b.sent()).RiHeart3Fill;
                    return [2 /*return*/, RiHeart3Fill];
                case 1135: return [4 /*yield*/, import("react-icons/ri")];
                case 1136:
                    RiHeart3Line = (_b.sent()).RiHeart3Line;
                    return [2 /*return*/, RiHeart3Line];
                case 1137: return [4 /*yield*/, import("react-icons/ri")];
                case 1138:
                    RiHeartAdd2Fill = (_b.sent()).RiHeartAdd2Fill;
                    return [2 /*return*/, RiHeartAdd2Fill];
                case 1139: return [4 /*yield*/, import("react-icons/ri")];
                case 1140:
                    RiHeartAdd2Line = (_b.sent()).RiHeartAdd2Line;
                    return [2 /*return*/, RiHeartAdd2Line];
                case 1141: return [4 /*yield*/, import("react-icons/ri")];
                case 1142:
                    RiHeartAddFill = (_b.sent()).RiHeartAddFill;
                    return [2 /*return*/, RiHeartAddFill];
                case 1143: return [4 /*yield*/, import("react-icons/ri")];
                case 1144:
                    RiHeartAddLine = (_b.sent()).RiHeartAddLine;
                    return [2 /*return*/, RiHeartAddLine];
                case 1145: return [4 /*yield*/, import("react-icons/ri")];
                case 1146:
                    RiHeartFill = (_b.sent()).RiHeartFill;
                    return [2 /*return*/, RiHeartFill];
                case 1147: return [4 /*yield*/, import("react-icons/ri")];
                case 1148:
                    RiHeartLine = (_b.sent()).RiHeartLine;
                    return [2 /*return*/, RiHeartLine];
                case 1149: return [4 /*yield*/, import("react-icons/ri")];
                case 1150:
                    RiHeartPulseFill = (_b.sent()).RiHeartPulseFill;
                    return [2 /*return*/, RiHeartPulseFill];
                case 1151: return [4 /*yield*/, import("react-icons/ri")];
                case 1152:
                    RiHeartPulseLine = (_b.sent()).RiHeartPulseLine;
                    return [2 /*return*/, RiHeartPulseLine];
                case 1153: return [4 /*yield*/, import("react-icons/ri")];
                case 1154:
                    RiHeartsFill = (_b.sent()).RiHeartsFill;
                    return [2 /*return*/, RiHeartsFill];
                case 1155: return [4 /*yield*/, import("react-icons/ri")];
                case 1156:
                    RiHeartsLine = (_b.sent()).RiHeartsLine;
                    return [2 /*return*/, RiHeartsLine];
                case 1157: return [4 /*yield*/, import("react-icons/ri")];
                case 1158:
                    RiInfraredThermometerFill = (_b.sent()).RiInfraredThermometerFill;
                    return [2 /*return*/, RiInfraredThermometerFill];
                case 1159: return [4 /*yield*/, import("react-icons/ri")];
                case 1160:
                    RiInfraredThermometerLine = (_b.sent()).RiInfraredThermometerLine;
                    return [2 /*return*/, RiInfraredThermometerLine];
                case 1161: return [4 /*yield*/, import("react-icons/ri")];
                case 1162:
                    RiLungsFill = (_b.sent()).RiLungsFill;
                    return [2 /*return*/, RiLungsFill];
                case 1163: return [4 /*yield*/, import("react-icons/ri")];
                case 1164:
                    RiLungsLine = (_b.sent()).RiLungsLine;
                    return [2 /*return*/, RiLungsLine];
                case 1165: return [4 /*yield*/, import("react-icons/ri")];
                case 1166:
                    RiMedicineBottleFill = (_b.sent()).RiMedicineBottleFill;
                    return [2 /*return*/, RiMedicineBottleFill];
                case 1167: return [4 /*yield*/, import("react-icons/ri")];
                case 1168:
                    RiMedicineBottleLine = (_b.sent()).RiMedicineBottleLine;
                    return [2 /*return*/, RiMedicineBottleLine];
                case 1169: return [4 /*yield*/, import("react-icons/ri")];
                case 1170:
                    RiMentalHealthFill = (_b.sent()).RiMentalHealthFill;
                    return [2 /*return*/, RiMentalHealthFill];
                case 1171: return [4 /*yield*/, import("react-icons/ri")];
                case 1172:
                    RiMentalHealthLine = (_b.sent()).RiMentalHealthLine;
                    return [2 /*return*/, RiMentalHealthLine];
                case 1173: return [4 /*yield*/, import("react-icons/ri")];
                case 1174:
                    RiMicroscopeFill = (_b.sent()).RiMicroscopeFill;
                    return [2 /*return*/, RiMicroscopeFill];
                case 1175: return [4 /*yield*/, import("react-icons/ri")];
                case 1176:
                    RiMicroscopeLine = (_b.sent()).RiMicroscopeLine;
                    return [2 /*return*/, RiMicroscopeLine];
                case 1177: return [4 /*yield*/, import("react-icons/ri")];
                case 1178:
                    RiNurseFill = (_b.sent()).RiNurseFill;
                    return [2 /*return*/, RiNurseFill];
                case 1179: return [4 /*yield*/, import("react-icons/ri")];
                case 1180:
                    RiNurseLine = (_b.sent()).RiNurseLine;
                    return [2 /*return*/, RiNurseLine];
                case 1181: return [4 /*yield*/, import("react-icons/ri")];
                case 1182:
                    RiPsychotherapyFill = (_b.sent()).RiPsychotherapyFill;
                    return [2 /*return*/, RiPsychotherapyFill];
                case 1183: return [4 /*yield*/, import("react-icons/ri")];
                case 1184:
                    RiPsychotherapyLine = (_b.sent()).RiPsychotherapyLine;
                    return [2 /*return*/, RiPsychotherapyLine];
                case 1185: return [4 /*yield*/, import("react-icons/ri")];
                case 1186:
                    RiPulseAiFill = (_b.sent()).RiPulseAiFill;
                    return [2 /*return*/, RiPulseAiFill];
                case 1187: return [4 /*yield*/, import("react-icons/ri")];
                case 1188:
                    RiPulseAiLine = (_b.sent()).RiPulseAiLine;
                    return [2 /*return*/, RiPulseAiLine];
                case 1189: return [4 /*yield*/, import("react-icons/ri")];
                case 1190:
                    RiPulseFill = (_b.sent()).RiPulseFill;
                    return [2 /*return*/, RiPulseFill];
                case 1191: return [4 /*yield*/, import("react-icons/ri")];
                case 1192:
                    RiPulseLine = (_b.sent()).RiPulseLine;
                    return [2 /*return*/, RiPulseLine];
                case 1193: return [4 /*yield*/, import("react-icons/ri")];
                case 1194:
                    RiRestTimeFill = (_b.sent()).RiRestTimeFill;
                    return [2 /*return*/, RiRestTimeFill];
                case 1195: return [4 /*yield*/, import("react-icons/ri")];
                case 1196:
                    RiRestTimeLine = (_b.sent()).RiRestTimeLine;
                    return [2 /*return*/, RiRestTimeLine];
                case 1197: return [4 /*yield*/, import("react-icons/ri")];
                case 1198:
                    RiStethoscopeFill = (_b.sent()).RiStethoscopeFill;
                    return [2 /*return*/, RiStethoscopeFill];
                case 1199: return [4 /*yield*/, import("react-icons/ri")];
                case 1200:
                    RiStethoscopeLine = (_b.sent()).RiStethoscopeLine;
                    return [2 /*return*/, RiStethoscopeLine];
                case 1201: return [4 /*yield*/, import("react-icons/ri")];
                case 1202:
                    RiSurgicalMaskFill = (_b.sent()).RiSurgicalMaskFill;
                    return [2 /*return*/, RiSurgicalMaskFill];
                case 1203: return [4 /*yield*/, import("react-icons/ri")];
                case 1204:
                    RiSurgicalMaskLine = (_b.sent()).RiSurgicalMaskLine;
                    return [2 /*return*/, RiSurgicalMaskLine];
                case 1205: return [4 /*yield*/, import("react-icons/ri")];
                case 1206:
                    RiSyringeFill = (_b.sent()).RiSyringeFill;
                    return [2 /*return*/, RiSyringeFill];
                case 1207: return [4 /*yield*/, import("react-icons/ri")];
                case 1208:
                    RiSyringeLine = (_b.sent()).RiSyringeLine;
                    return [2 /*return*/, RiSyringeLine];
                case 1209: return [4 /*yield*/, import("react-icons/ri")];
                case 1210:
                    RiTestTubeFill = (_b.sent()).RiTestTubeFill;
                    return [2 /*return*/, RiTestTubeFill];
                case 1211: return [4 /*yield*/, import("react-icons/ri")];
                case 1212:
                    RiTestTubeLine = (_b.sent()).RiTestTubeLine;
                    return [2 /*return*/, RiTestTubeLine];
                case 1213: return [4 /*yield*/, import("react-icons/ri")];
                case 1214:
                    RiThermometerFill = (_b.sent()).RiThermometerFill;
                    return [2 /*return*/, RiThermometerFill];
                case 1215: return [4 /*yield*/, import("react-icons/ri")];
                case 1216:
                    RiThermometerLine = (_b.sent()).RiThermometerLine;
                    return [2 /*return*/, RiThermometerLine];
                case 1217: return [4 /*yield*/, import("react-icons/ri")];
                case 1218:
                    RiVirusFill = (_b.sent()).RiVirusFill;
                    return [2 /*return*/, RiVirusFill];
                case 1219: return [4 /*yield*/, import("react-icons/ri")];
                case 1220:
                    RiVirusLine = (_b.sent()).RiVirusLine;
                    return [2 /*return*/, RiVirusLine];
                case 1221: return [4 /*yield*/, import("react-icons/ri")];
                case 1222:
                    RiZzzFill = (_b.sent()).RiZzzFill;
                    return [2 /*return*/, RiZzzFill];
                case 1223: return [4 /*yield*/, import("react-icons/ri")];
                case 1224:
                    RiZzzLine = (_b.sent()).RiZzzLine;
                    return [2 /*return*/, RiZzzLine];
                case 1225: return [4 /*yield*/, import("react-icons/ri")];
                case 1226:
                    RiAlibabaCloudFill = (_b.sent()).RiAlibabaCloudFill;
                    return [2 /*return*/, RiAlibabaCloudFill];
                case 1227: return [4 /*yield*/, import("react-icons/ri")];
                case 1228:
                    RiAlibabaCloudLine = (_b.sent()).RiAlibabaCloudLine;
                    return [2 /*return*/, RiAlibabaCloudLine];
                case 1229: return [4 /*yield*/, import("react-icons/ri")];
                case 1230:
                    RiAlipayFill = (_b.sent()).RiAlipayFill;
                    return [2 /*return*/, RiAlipayFill];
                case 1231: return [4 /*yield*/, import("react-icons/ri")];
                case 1232:
                    RiAlipayLine = (_b.sent()).RiAlipayLine;
                    return [2 /*return*/, RiAlipayLine];
                case 1233: return [4 /*yield*/, import("react-icons/ri")];
                case 1234:
                    RiAmazonFill = (_b.sent()).RiAmazonFill;
                    return [2 /*return*/, RiAmazonFill];
                case 1235: return [4 /*yield*/, import("react-icons/ri")];
                case 1236:
                    RiAmazonLine = (_b.sent()).RiAmazonLine;
                    return [2 /*return*/, RiAmazonLine];
                case 1237: return [4 /*yield*/, import("react-icons/ri")];
                case 1238:
                    RiAndroidFill = (_b.sent()).RiAndroidFill;
                    return [2 /*return*/, RiAndroidFill];
                case 1239: return [4 /*yield*/, import("react-icons/ri")];
                case 1240:
                    RiAndroidLine = (_b.sent()).RiAndroidLine;
                    return [2 /*return*/, RiAndroidLine];
                case 1241: return [4 /*yield*/, import("react-icons/ri")];
                case 1242:
                    RiAngularjsFill = (_b.sent()).RiAngularjsFill;
                    return [2 /*return*/, RiAngularjsFill];
                case 1243: return [4 /*yield*/, import("react-icons/ri")];
                case 1244:
                    RiAngularjsLine = (_b.sent()).RiAngularjsLine;
                    return [2 /*return*/, RiAngularjsLine];
                case 1245: return [4 /*yield*/, import("react-icons/ri")];
                case 1246:
                    RiAnthropicFill = (_b.sent()).RiAnthropicFill;
                    return [2 /*return*/, RiAnthropicFill];
                case 1247: return [4 /*yield*/, import("react-icons/ri")];
                case 1248:
                    RiAnthropicLine = (_b.sent()).RiAnthropicLine;
                    return [2 /*return*/, RiAnthropicLine];
                case 1249: return [4 /*yield*/, import("react-icons/ri")];
                case 1250:
                    RiAppStoreFill = (_b.sent()).RiAppStoreFill;
                    return [2 /*return*/, RiAppStoreFill];
                case 1251: return [4 /*yield*/, import("react-icons/ri")];
                case 1252:
                    RiAppStoreLine = (_b.sent()).RiAppStoreLine;
                    return [2 /*return*/, RiAppStoreLine];
                case 1253: return [4 /*yield*/, import("react-icons/ri")];
                case 1254:
                    RiAppleFill = (_b.sent()).RiAppleFill;
                    return [2 /*return*/, RiAppleFill];
                case 1255: return [4 /*yield*/, import("react-icons/ri")];
                case 1256:
                    RiAppleLine = (_b.sent()).RiAppleLine;
                    return [2 /*return*/, RiAppleLine];
                case 1257: return [4 /*yield*/, import("react-icons/ri")];
                case 1258:
                    RiBaiduFill = (_b.sent()).RiBaiduFill;
                    return [2 /*return*/, RiBaiduFill];
                case 1259: return [4 /*yield*/, import("react-icons/ri")];
                case 1260:
                    RiBaiduLine = (_b.sent()).RiBaiduLine;
                    return [2 /*return*/, RiBaiduLine];
                case 1261: return [4 /*yield*/, import("react-icons/ri")];
                case 1262:
                    RiBardFill = (_b.sent()).RiBardFill;
                    return [2 /*return*/, RiBardFill];
                case 1263: return [4 /*yield*/, import("react-icons/ri")];
                case 1264:
                    RiBardLine = (_b.sent()).RiBardLine;
                    return [2 /*return*/, RiBardLine];
                case 1265: return [4 /*yield*/, import("react-icons/ri")];
                case 1266:
                    RiBehanceFill = (_b.sent()).RiBehanceFill;
                    return [2 /*return*/, RiBehanceFill];
                case 1267: return [4 /*yield*/, import("react-icons/ri")];
                case 1268:
                    RiBehanceLine = (_b.sent()).RiBehanceLine;
                    return [2 /*return*/, RiBehanceLine];
                case 1269: return [4 /*yield*/, import("react-icons/ri")];
                case 1270:
                    RiBilibiliFill = (_b.sent()).RiBilibiliFill;
                    return [2 /*return*/, RiBilibiliFill];
                case 1271: return [4 /*yield*/, import("react-icons/ri")];
                case 1272:
                    RiBilibiliLine = (_b.sent()).RiBilibiliLine;
                    return [2 /*return*/, RiBilibiliLine];
                case 1273: return [4 /*yield*/, import("react-icons/ri")];
                case 1274:
                    RiBlenderFill = (_b.sent()).RiBlenderFill;
                    return [2 /*return*/, RiBlenderFill];
                case 1275: return [4 /*yield*/, import("react-icons/ri")];
                case 1276:
                    RiBlenderLine = (_b.sent()).RiBlenderLine;
                    return [2 /*return*/, RiBlenderLine];
                case 1277: return [4 /*yield*/, import("react-icons/ri")];
                case 1278:
                    RiBloggerFill = (_b.sent()).RiBloggerFill;
                    return [2 /*return*/, RiBloggerFill];
                case 1279: return [4 /*yield*/, import("react-icons/ri")];
                case 1280:
                    RiBloggerLine = (_b.sent()).RiBloggerLine;
                    return [2 /*return*/, RiBloggerLine];
                case 1281: return [4 /*yield*/, import("react-icons/ri")];
                case 1282:
                    RiBlueskyFill = (_b.sent()).RiBlueskyFill;
                    return [2 /*return*/, RiBlueskyFill];
                case 1283: return [4 /*yield*/, import("react-icons/ri")];
                case 1284:
                    RiBlueskyLine = (_b.sent()).RiBlueskyLine;
                    return [2 /*return*/, RiBlueskyLine];
                case 1285: return [4 /*yield*/, import("react-icons/ri")];
                case 1286:
                    RiBootstrapFill = (_b.sent()).RiBootstrapFill;
                    return [2 /*return*/, RiBootstrapFill];
                case 1287: return [4 /*yield*/, import("react-icons/ri")];
                case 1288:
                    RiBootstrapLine = (_b.sent()).RiBootstrapLine;
                    return [2 /*return*/, RiBootstrapLine];
                case 1289: return [4 /*yield*/, import("react-icons/ri")];
                case 1290:
                    RiCentosFill = (_b.sent()).RiCentosFill;
                    return [2 /*return*/, RiCentosFill];
                case 1291: return [4 /*yield*/, import("react-icons/ri")];
                case 1292:
                    RiCentosLine = (_b.sent()).RiCentosLine;
                    return [2 /*return*/, RiCentosLine];
                case 1293: return [4 /*yield*/, import("react-icons/ri")];
                case 1294:
                    RiChromeFill = (_b.sent()).RiChromeFill;
                    return [2 /*return*/, RiChromeFill];
                case 1295: return [4 /*yield*/, import("react-icons/ri")];
                case 1296:
                    RiChromeLine = (_b.sent()).RiChromeLine;
                    return [2 /*return*/, RiChromeLine];
                case 1297: return [4 /*yield*/, import("react-icons/ri")];
                case 1298:
                    RiClaudeFill = (_b.sent()).RiClaudeFill;
                    return [2 /*return*/, RiClaudeFill];
                case 1299: return [4 /*yield*/, import("react-icons/ri")];
                case 1300:
                    RiClaudeLine = (_b.sent()).RiClaudeLine;
                    return [2 /*return*/, RiClaudeLine];
                case 1301: return [4 /*yield*/, import("react-icons/ri")];
                case 1302:
                    RiCodepenFill = (_b.sent()).RiCodepenFill;
                    return [2 /*return*/, RiCodepenFill];
                case 1303: return [4 /*yield*/, import("react-icons/ri")];
                case 1304:
                    RiCodepenLine = (_b.sent()).RiCodepenLine;
                    return [2 /*return*/, RiCodepenLine];
                case 1305: return [4 /*yield*/, import("react-icons/ri")];
                case 1306:
                    RiCopilotFill = (_b.sent()).RiCopilotFill;
                    return [2 /*return*/, RiCopilotFill];
                case 1307: return [4 /*yield*/, import("react-icons/ri")];
                case 1308:
                    RiCopilotLine = (_b.sent()).RiCopilotLine;
                    return [2 /*return*/, RiCopilotLine];
                case 1309: return [4 /*yield*/, import("react-icons/ri")];
                case 1310:
                    RiCoreosFill = (_b.sent()).RiCoreosFill;
                    return [2 /*return*/, RiCoreosFill];
                case 1311: return [4 /*yield*/, import("react-icons/ri")];
                case 1312:
                    RiCoreosLine = (_b.sent()).RiCoreosLine;
                    return [2 /*return*/, RiCoreosLine];
                case 1313: return [4 /*yield*/, import("react-icons/ri")];
                case 1314:
                    RiDingdingFill = (_b.sent()).RiDingdingFill;
                    return [2 /*return*/, RiDingdingFill];
                case 1315: return [4 /*yield*/, import("react-icons/ri")];
                case 1316:
                    RiDingdingLine = (_b.sent()).RiDingdingLine;
                    return [2 /*return*/, RiDingdingLine];
                case 1317: return [4 /*yield*/, import("react-icons/ri")];
                case 1318:
                    RiDiscordFill = (_b.sent()).RiDiscordFill;
                    return [2 /*return*/, RiDiscordFill];
                case 1319: return [4 /*yield*/, import("react-icons/ri")];
                case 1320:
                    RiDiscordLine = (_b.sent()).RiDiscordLine;
                    return [2 /*return*/, RiDiscordLine];
                case 1321: return [4 /*yield*/, import("react-icons/ri")];
                case 1322:
                    RiDisqusFill = (_b.sent()).RiDisqusFill;
                    return [2 /*return*/, RiDisqusFill];
                case 1323: return [4 /*yield*/, import("react-icons/ri")];
                case 1324:
                    RiDisqusLine = (_b.sent()).RiDisqusLine;
                    return [2 /*return*/, RiDisqusLine];
                case 1325: return [4 /*yield*/, import("react-icons/ri")];
                case 1326:
                    RiDoubanFill = (_b.sent()).RiDoubanFill;
                    return [2 /*return*/, RiDoubanFill];
                case 1327: return [4 /*yield*/, import("react-icons/ri")];
                case 1328:
                    RiDoubanLine = (_b.sent()).RiDoubanLine;
                    return [2 /*return*/, RiDoubanLine];
                case 1329: return [4 /*yield*/, import("react-icons/ri")];
                case 1330:
                    RiDribbbleFill = (_b.sent()).RiDribbbleFill;
                    return [2 /*return*/, RiDribbbleFill];
                case 1331: return [4 /*yield*/, import("react-icons/ri")];
                case 1332:
                    RiDribbbleLine = (_b.sent()).RiDribbbleLine;
                    return [2 /*return*/, RiDribbbleLine];
                case 1333: return [4 /*yield*/, import("react-icons/ri")];
                case 1334:
                    RiDriveFill = (_b.sent()).RiDriveFill;
                    return [2 /*return*/, RiDriveFill];
                case 1335: return [4 /*yield*/, import("react-icons/ri")];
                case 1336:
                    RiDriveLine = (_b.sent()).RiDriveLine;
                    return [2 /*return*/, RiDriveLine];
                case 1337: return [4 /*yield*/, import("react-icons/ri")];
                case 1338:
                    RiDropboxFill = (_b.sent()).RiDropboxFill;
                    return [2 /*return*/, RiDropboxFill];
                case 1339: return [4 /*yield*/, import("react-icons/ri")];
                case 1340:
                    RiDropboxLine = (_b.sent()).RiDropboxLine;
                    return [2 /*return*/, RiDropboxLine];
                case 1341: return [4 /*yield*/, import("react-icons/ri")];
                case 1342:
                    RiEdgeFill = (_b.sent()).RiEdgeFill;
                    return [2 /*return*/, RiEdgeFill];
                case 1343: return [4 /*yield*/, import("react-icons/ri")];
                case 1344:
                    RiEdgeLine = (_b.sent()).RiEdgeLine;
                    return [2 /*return*/, RiEdgeLine];
                case 1345: return [4 /*yield*/, import("react-icons/ri")];
                case 1346:
                    RiEdgeNewFill = (_b.sent()).RiEdgeNewFill;
                    return [2 /*return*/, RiEdgeNewFill];
                case 1347: return [4 /*yield*/, import("react-icons/ri")];
                case 1348:
                    RiEdgeNewLine = (_b.sent()).RiEdgeNewLine;
                    return [2 /*return*/, RiEdgeNewLine];
                case 1349: return [4 /*yield*/, import("react-icons/ri")];
                case 1350:
                    RiEvernoteFill = (_b.sent()).RiEvernoteFill;
                    return [2 /*return*/, RiEvernoteFill];
                case 1351: return [4 /*yield*/, import("react-icons/ri")];
                case 1352:
                    RiEvernoteLine = (_b.sent()).RiEvernoteLine;
                    return [2 /*return*/, RiEvernoteLine];
                case 1353: return [4 /*yield*/, import("react-icons/ri")];
                case 1354:
                    RiFacebookBoxFill = (_b.sent()).RiFacebookBoxFill;
                    return [2 /*return*/, RiFacebookBoxFill];
                case 1355: return [4 /*yield*/, import("react-icons/ri")];
                case 1356:
                    RiFacebookBoxLine = (_b.sent()).RiFacebookBoxLine;
                    return [2 /*return*/, RiFacebookBoxLine];
                case 1357: return [4 /*yield*/, import("react-icons/ri")];
                case 1358:
                    RiFacebookCircleFill = (_b.sent()).RiFacebookCircleFill;
                    return [2 /*return*/, RiFacebookCircleFill];
                case 1359: return [4 /*yield*/, import("react-icons/ri")];
                case 1360:
                    RiFacebookCircleLine = (_b.sent()).RiFacebookCircleLine;
                    return [2 /*return*/, RiFacebookCircleLine];
                case 1361: return [4 /*yield*/, import("react-icons/ri")];
                case 1362:
                    RiFacebookFill = (_b.sent()).RiFacebookFill;
                    return [2 /*return*/, RiFacebookFill];
                case 1363: return [4 /*yield*/, import("react-icons/ri")];
                case 1364:
                    RiFacebookLine = (_b.sent()).RiFacebookLine;
                    return [2 /*return*/, RiFacebookLine];
                case 1365: return [4 /*yield*/, import("react-icons/ri")];
                case 1366:
                    RiFediverseFill = (_b.sent()).RiFediverseFill;
                    return [2 /*return*/, RiFediverseFill];
                case 1367: return [4 /*yield*/, import("react-icons/ri")];
                case 1368:
                    RiFediverseLine = (_b.sent()).RiFediverseLine;
                    return [2 /*return*/, RiFediverseLine];
                case 1369: return [4 /*yield*/, import("react-icons/ri")];
                case 1370:
                    RiFinderFill = (_b.sent()).RiFinderFill;
                    return [2 /*return*/, RiFinderFill];
                case 1371: return [4 /*yield*/, import("react-icons/ri")];
                case 1372:
                    RiFinderLine = (_b.sent()).RiFinderLine;
                    return [2 /*return*/, RiFinderLine];
                case 1373: return [4 /*yield*/, import("react-icons/ri")];
                case 1374:
                    RiFirebaseFill = (_b.sent()).RiFirebaseFill;
                    return [2 /*return*/, RiFirebaseFill];
                case 1375: return [4 /*yield*/, import("react-icons/ri")];
                case 1376:
                    RiFirebaseLine = (_b.sent()).RiFirebaseLine;
                    return [2 /*return*/, RiFirebaseLine];
                case 1377: return [4 /*yield*/, import("react-icons/ri")];
                case 1378:
                    RiFirefoxFill = (_b.sent()).RiFirefoxFill;
                    return [2 /*return*/, RiFirefoxFill];
                case 1379: return [4 /*yield*/, import("react-icons/ri")];
                case 1380:
                    RiFirefoxLine = (_b.sent()).RiFirefoxLine;
                    return [2 /*return*/, RiFirefoxLine];
                case 1381: return [4 /*yield*/, import("react-icons/ri")];
                case 1382:
                    RiFlickrFill = (_b.sent()).RiFlickrFill;
                    return [2 /*return*/, RiFlickrFill];
                case 1383: return [4 /*yield*/, import("react-icons/ri")];
                case 1384:
                    RiFlickrLine = (_b.sent()).RiFlickrLine;
                    return [2 /*return*/, RiFlickrLine];
                case 1385: return [4 /*yield*/, import("react-icons/ri")];
                case 1386:
                    RiFlutterFill = (_b.sent()).RiFlutterFill;
                    return [2 /*return*/, RiFlutterFill];
                case 1387: return [4 /*yield*/, import("react-icons/ri")];
                case 1388:
                    RiFlutterLine = (_b.sent()).RiFlutterLine;
                    return [2 /*return*/, RiFlutterLine];
                case 1389: return [4 /*yield*/, import("react-icons/ri")];
                case 1390:
                    RiFriendicaFill = (_b.sent()).RiFriendicaFill;
                    return [2 /*return*/, RiFriendicaFill];
                case 1391: return [4 /*yield*/, import("react-icons/ri")];
                case 1392:
                    RiFriendicaLine = (_b.sent()).RiFriendicaLine;
                    return [2 /*return*/, RiFriendicaLine];
                case 1393: return [4 /*yield*/, import("react-icons/ri")];
                case 1394:
                    RiGatsbyFill = (_b.sent()).RiGatsbyFill;
                    return [2 /*return*/, RiGatsbyFill];
                case 1395: return [4 /*yield*/, import("react-icons/ri")];
                case 1396:
                    RiGatsbyLine = (_b.sent()).RiGatsbyLine;
                    return [2 /*return*/, RiGatsbyLine];
                case 1397: return [4 /*yield*/, import("react-icons/ri")];
                case 1398:
                    RiGeminiFill = (_b.sent()).RiGeminiFill;
                    return [2 /*return*/, RiGeminiFill];
                case 1399: return [4 /*yield*/, import("react-icons/ri")];
                case 1400:
                    RiGeminiLine = (_b.sent()).RiGeminiLine;
                    return [2 /*return*/, RiGeminiLine];
                case 1401: return [4 /*yield*/, import("react-icons/ri")];
                case 1402:
                    RiGithubFill = (_b.sent()).RiGithubFill;
                    return [2 /*return*/, RiGithubFill];
                case 1403: return [4 /*yield*/, import("react-icons/ri")];
                case 1404:
                    RiGithubLine = (_b.sent()).RiGithubLine;
                    return [2 /*return*/, RiGithubLine];
                case 1405: return [4 /*yield*/, import("react-icons/ri")];
                case 1406:
                    RiGitlabFill = (_b.sent()).RiGitlabFill;
                    return [2 /*return*/, RiGitlabFill];
                case 1407: return [4 /*yield*/, import("react-icons/ri")];
                case 1408:
                    RiGitlabLine = (_b.sent()).RiGitlabLine;
                    return [2 /*return*/, RiGitlabLine];
                case 1409: return [4 /*yield*/, import("react-icons/ri")];
                case 1410:
                    RiGoogleFill = (_b.sent()).RiGoogleFill;
                    return [2 /*return*/, RiGoogleFill];
                case 1411: return [4 /*yield*/, import("react-icons/ri")];
                case 1412:
                    RiGoogleLine = (_b.sent()).RiGoogleLine;
                    return [2 /*return*/, RiGoogleLine];
                case 1413: return [4 /*yield*/, import("react-icons/ri")];
                case 1414:
                    RiGooglePlayFill = (_b.sent()).RiGooglePlayFill;
                    return [2 /*return*/, RiGooglePlayFill];
                case 1415: return [4 /*yield*/, import("react-icons/ri")];
                case 1416:
                    RiGooglePlayLine = (_b.sent()).RiGooglePlayLine;
                    return [2 /*return*/, RiGooglePlayLine];
                case 1417: return [4 /*yield*/, import("react-icons/ri")];
                case 1418:
                    RiHonorOfKingsFill = (_b.sent()).RiHonorOfKingsFill;
                    return [2 /*return*/, RiHonorOfKingsFill];
                case 1419: return [4 /*yield*/, import("react-icons/ri")];
                case 1420:
                    RiHonorOfKingsLine = (_b.sent()).RiHonorOfKingsLine;
                    return [2 /*return*/, RiHonorOfKingsLine];
                case 1421: return [4 /*yield*/, import("react-icons/ri")];
                case 1422:
                    RiIeFill = (_b.sent()).RiIeFill;
                    return [2 /*return*/, RiIeFill];
                case 1423: return [4 /*yield*/, import("react-icons/ri")];
                case 1424:
                    RiIeLine = (_b.sent()).RiIeLine;
                    return [2 /*return*/, RiIeLine];
                case 1425: return [4 /*yield*/, import("react-icons/ri")];
                case 1426:
                    RiInstagramFill = (_b.sent()).RiInstagramFill;
                    return [2 /*return*/, RiInstagramFill];
                case 1427: return [4 /*yield*/, import("react-icons/ri")];
                case 1428:
                    RiInstagramLine = (_b.sent()).RiInstagramLine;
                    return [2 /*return*/, RiInstagramLine];
                case 1429: return [4 /*yield*/, import("react-icons/ri")];
                case 1430:
                    RiInvisionFill = (_b.sent()).RiInvisionFill;
                    return [2 /*return*/, RiInvisionFill];
                case 1431: return [4 /*yield*/, import("react-icons/ri")];
                case 1432:
                    RiInvisionLine = (_b.sent()).RiInvisionLine;
                    return [2 /*return*/, RiInvisionLine];
                case 1433: return [4 /*yield*/, import("react-icons/ri")];
                case 1434:
                    RiJavaFill = (_b.sent()).RiJavaFill;
                    return [2 /*return*/, RiJavaFill];
                case 1435: return [4 /*yield*/, import("react-icons/ri")];
                case 1436:
                    RiJavaLine = (_b.sent()).RiJavaLine;
                    return [2 /*return*/, RiJavaLine];
                case 1437: return [4 /*yield*/, import("react-icons/ri")];
                case 1438:
                    RiKakaoTalkFill = (_b.sent()).RiKakaoTalkFill;
                    return [2 /*return*/, RiKakaoTalkFill];
                case 1439: return [4 /*yield*/, import("react-icons/ri")];
                case 1440:
                    RiKakaoTalkLine = (_b.sent()).RiKakaoTalkLine;
                    return [2 /*return*/, RiKakaoTalkLine];
                case 1441: return [4 /*yield*/, import("react-icons/ri")];
                case 1442:
                    RiKickFill = (_b.sent()).RiKickFill;
                    return [2 /*return*/, RiKickFill];
                case 1443: return [4 /*yield*/, import("react-icons/ri")];
                case 1444:
                    RiKickLine = (_b.sent()).RiKickLine;
                    return [2 /*return*/, RiKickLine];
                case 1445: return [4 /*yield*/, import("react-icons/ri")];
                case 1446:
                    RiLineFill = (_b.sent()).RiLineFill;
                    return [2 /*return*/, RiLineFill];
                case 1447: return [4 /*yield*/, import("react-icons/ri")];
                case 1448:
                    RiLineLine = (_b.sent()).RiLineLine;
                    return [2 /*return*/, RiLineLine];
                case 1449: return [4 /*yield*/, import("react-icons/ri")];
                case 1450:
                    RiLinkedinBoxFill = (_b.sent()).RiLinkedinBoxFill;
                    return [2 /*return*/, RiLinkedinBoxFill];
                case 1451: return [4 /*yield*/, import("react-icons/ri")];
                case 1452:
                    RiLinkedinBoxLine = (_b.sent()).RiLinkedinBoxLine;
                    return [2 /*return*/, RiLinkedinBoxLine];
                case 1453: return [4 /*yield*/, import("react-icons/ri")];
                case 1454:
                    RiLinkedinFill = (_b.sent()).RiLinkedinFill;
                    return [2 /*return*/, RiLinkedinFill];
                case 1455: return [4 /*yield*/, import("react-icons/ri")];
                case 1456:
                    RiLinkedinLine = (_b.sent()).RiLinkedinLine;
                    return [2 /*return*/, RiLinkedinLine];
                case 1457: return [4 /*yield*/, import("react-icons/ri")];
                case 1458:
                    RiMastercardFill = (_b.sent()).RiMastercardFill;
                    return [2 /*return*/, RiMastercardFill];
                case 1459: return [4 /*yield*/, import("react-icons/ri")];
                case 1460:
                    RiMastercardLine = (_b.sent()).RiMastercardLine;
                    return [2 /*return*/, RiMastercardLine];
                case 1461: return [4 /*yield*/, import("react-icons/ri")];
                case 1462:
                    RiMastodonFill = (_b.sent()).RiMastodonFill;
                    return [2 /*return*/, RiMastodonFill];
                case 1463: return [4 /*yield*/, import("react-icons/ri")];
                case 1464:
                    RiMastodonLine = (_b.sent()).RiMastodonLine;
                    return [2 /*return*/, RiMastodonLine];
                case 1465: return [4 /*yield*/, import("react-icons/ri")];
                case 1466:
                    RiMediumFill = (_b.sent()).RiMediumFill;
                    return [2 /*return*/, RiMediumFill];
                case 1467: return [4 /*yield*/, import("react-icons/ri")];
                case 1468:
                    RiMediumLine = (_b.sent()).RiMediumLine;
                    return [2 /*return*/, RiMediumLine];
                case 1469: return [4 /*yield*/, import("react-icons/ri")];
                case 1470:
                    RiMessengerFill = (_b.sent()).RiMessengerFill;
                    return [2 /*return*/, RiMessengerFill];
                case 1471: return [4 /*yield*/, import("react-icons/ri")];
                case 1472:
                    RiMessengerLine = (_b.sent()).RiMessengerLine;
                    return [2 /*return*/, RiMessengerLine];
                case 1473: return [4 /*yield*/, import("react-icons/ri")];
                case 1474:
                    RiMetaFill = (_b.sent()).RiMetaFill;
                    return [2 /*return*/, RiMetaFill];
                case 1475: return [4 /*yield*/, import("react-icons/ri")];
                case 1476:
                    RiMetaLine = (_b.sent()).RiMetaLine;
                    return [2 /*return*/, RiMetaLine];
                case 1477: return [4 /*yield*/, import("react-icons/ri")];
                case 1478:
                    RiMicrosoftFill = (_b.sent()).RiMicrosoftFill;
                    return [2 /*return*/, RiMicrosoftFill];
                case 1479: return [4 /*yield*/, import("react-icons/ri")];
                case 1480:
                    RiMicrosoftLine = (_b.sent()).RiMicrosoftLine;
                    return [2 /*return*/, RiMicrosoftLine];
                case 1481: return [4 /*yield*/, import("react-icons/ri")];
                case 1482:
                    RiMicrosoftLoopFill = (_b.sent()).RiMicrosoftLoopFill;
                    return [2 /*return*/, RiMicrosoftLoopFill];
                case 1483: return [4 /*yield*/, import("react-icons/ri")];
                case 1484:
                    RiMicrosoftLoopLine = (_b.sent()).RiMicrosoftLoopLine;
                    return [2 /*return*/, RiMicrosoftLoopLine];
                case 1485: return [4 /*yield*/, import("react-icons/ri")];
                case 1486:
                    RiMiniProgramFill = (_b.sent()).RiMiniProgramFill;
                    return [2 /*return*/, RiMiniProgramFill];
                case 1487: return [4 /*yield*/, import("react-icons/ri")];
                case 1488:
                    RiMiniProgramLine = (_b.sent()).RiMiniProgramLine;
                    return [2 /*return*/, RiMiniProgramLine];
                case 1489: return [4 /*yield*/, import("react-icons/ri")];
                case 1490:
                    RiMixtralFill = (_b.sent()).RiMixtralFill;
                    return [2 /*return*/, RiMixtralFill];
                case 1491: return [4 /*yield*/, import("react-icons/ri")];
                case 1492:
                    RiMixtralLine = (_b.sent()).RiMixtralLine;
                    return [2 /*return*/, RiMixtralLine];
                case 1493: return [4 /*yield*/, import("react-icons/ri")];
                case 1494:
                    RiNeteaseCloudMusicFill = (_b.sent()).RiNeteaseCloudMusicFill;
                    return [2 /*return*/, RiNeteaseCloudMusicFill];
                case 1495: return [4 /*yield*/, import("react-icons/ri")];
                case 1496:
                    RiNeteaseCloudMusicLine = (_b.sent()).RiNeteaseCloudMusicLine;
                    return [2 /*return*/, RiNeteaseCloudMusicLine];
                case 1497: return [4 /*yield*/, import("react-icons/ri")];
                case 1498:
                    RiNetflixFill = (_b.sent()).RiNetflixFill;
                    return [2 /*return*/, RiNetflixFill];
                case 1499: return [4 /*yield*/, import("react-icons/ri")];
                case 1500:
                    RiNetflixLine = (_b.sent()).RiNetflixLine;
                    return [2 /*return*/, RiNetflixLine];
                case 1501: return [4 /*yield*/, import("react-icons/ri")];
                case 1502:
                    RiNextjsFill = (_b.sent()).RiNextjsFill;
                    return [2 /*return*/, RiNextjsFill];
                case 1503: return [4 /*yield*/, import("react-icons/ri")];
                case 1504:
                    RiNextjsLine = (_b.sent()).RiNextjsLine;
                    return [2 /*return*/, RiNextjsLine];
                case 1505: return [4 /*yield*/, import("react-icons/ri")];
                case 1506:
                    RiNodejsFill = (_b.sent()).RiNodejsFill;
                    return [2 /*return*/, RiNodejsFill];
                case 1507: return [4 /*yield*/, import("react-icons/ri")];
                case 1508:
                    RiNodejsLine = (_b.sent()).RiNodejsLine;
                    return [2 /*return*/, RiNodejsLine];
                case 1509: return [4 /*yield*/, import("react-icons/ri")];
                case 1510:
                    RiNotionFill = (_b.sent()).RiNotionFill;
                    return [2 /*return*/, RiNotionFill];
                case 1511: return [4 /*yield*/, import("react-icons/ri")];
                case 1512:
                    RiNotionLine = (_b.sent()).RiNotionLine;
                    return [2 /*return*/, RiNotionLine];
                case 1513: return [4 /*yield*/, import("react-icons/ri")];
                case 1514:
                    RiNpmjsFill = (_b.sent()).RiNpmjsFill;
                    return [2 /*return*/, RiNpmjsFill];
                case 1515: return [4 /*yield*/, import("react-icons/ri")];
                case 1516:
                    RiNpmjsLine = (_b.sent()).RiNpmjsLine;
                    return [2 /*return*/, RiNpmjsLine];
                case 1517: return [4 /*yield*/, import("react-icons/ri")];
                case 1518:
                    RiOpenSourceFill = (_b.sent()).RiOpenSourceFill;
                    return [2 /*return*/, RiOpenSourceFill];
                case 1519: return [4 /*yield*/, import("react-icons/ri")];
                case 1520:
                    RiOpenSourceLine = (_b.sent()).RiOpenSourceLine;
                    return [2 /*return*/, RiOpenSourceLine];
                case 1521: return [4 /*yield*/, import("react-icons/ri")];
                case 1522:
                    RiOpenaiFill = (_b.sent()).RiOpenaiFill;
                    return [2 /*return*/, RiOpenaiFill];
                case 1523: return [4 /*yield*/, import("react-icons/ri")];
                case 1524:
                    RiOpenaiLine = (_b.sent()).RiOpenaiLine;
                    return [2 /*return*/, RiOpenaiLine];
                case 1525: return [4 /*yield*/, import("react-icons/ri")];
                case 1526:
                    RiOpenbaseFill = (_b.sent()).RiOpenbaseFill;
                    return [2 /*return*/, RiOpenbaseFill];
                case 1527: return [4 /*yield*/, import("react-icons/ri")];
                case 1528:
                    RiOpenbaseLine = (_b.sent()).RiOpenbaseLine;
                    return [2 /*return*/, RiOpenbaseLine];
                case 1529: return [4 /*yield*/, import("react-icons/ri")];
                case 1530:
                    RiOperaFill = (_b.sent()).RiOperaFill;
                    return [2 /*return*/, RiOperaFill];
                case 1531: return [4 /*yield*/, import("react-icons/ri")];
                case 1532:
                    RiOperaLine = (_b.sent()).RiOperaLine;
                    return [2 /*return*/, RiOperaLine];
                case 1533: return [4 /*yield*/, import("react-icons/ri")];
                case 1534:
                    RiPatreonFill = (_b.sent()).RiPatreonFill;
                    return [2 /*return*/, RiPatreonFill];
                case 1535: return [4 /*yield*/, import("react-icons/ri")];
                case 1536:
                    RiPatreonLine = (_b.sent()).RiPatreonLine;
                    return [2 /*return*/, RiPatreonLine];
                case 1537: return [4 /*yield*/, import("react-icons/ri")];
                case 1538:
                    RiPaypalFill = (_b.sent()).RiPaypalFill;
                    return [2 /*return*/, RiPaypalFill];
                case 1539: return [4 /*yield*/, import("react-icons/ri")];
                case 1540:
                    RiPaypalLine = (_b.sent()).RiPaypalLine;
                    return [2 /*return*/, RiPaypalLine];
                case 1541: return [4 /*yield*/, import("react-icons/ri")];
                case 1542:
                    RiPerplexityFill = (_b.sent()).RiPerplexityFill;
                    return [2 /*return*/, RiPerplexityFill];
                case 1543: return [4 /*yield*/, import("react-icons/ri")];
                case 1544:
                    RiPerplexityLine = (_b.sent()).RiPerplexityLine;
                    return [2 /*return*/, RiPerplexityLine];
                case 1545: return [4 /*yield*/, import("react-icons/ri")];
                case 1546:
                    RiPinterestFill = (_b.sent()).RiPinterestFill;
                    return [2 /*return*/, RiPinterestFill];
                case 1547: return [4 /*yield*/, import("react-icons/ri")];
                case 1548:
                    RiPinterestLine = (_b.sent()).RiPinterestLine;
                    return [2 /*return*/, RiPinterestLine];
                case 1549: return [4 /*yield*/, import("react-icons/ri")];
                case 1550:
                    RiPixFill = (_b.sent()).RiPixFill;
                    return [2 /*return*/, RiPixFill];
                case 1551: return [4 /*yield*/, import("react-icons/ri")];
                case 1552:
                    RiPixLine = (_b.sent()).RiPixLine;
                    return [2 /*return*/, RiPixLine];
                case 1553: return [4 /*yield*/, import("react-icons/ri")];
                case 1554:
                    RiPixelfedFill = (_b.sent()).RiPixelfedFill;
                    return [2 /*return*/, RiPixelfedFill];
                case 1555: return [4 /*yield*/, import("react-icons/ri")];
                case 1556:
                    RiPixelfedLine = (_b.sent()).RiPixelfedLine;
                    return [2 /*return*/, RiPixelfedLine];
                case 1557: return [4 /*yield*/, import("react-icons/ri")];
                case 1558:
                    RiPlaystationFill = (_b.sent()).RiPlaystationFill;
                    return [2 /*return*/, RiPlaystationFill];
                case 1559: return [4 /*yield*/, import("react-icons/ri")];
                case 1560:
                    RiPlaystationLine = (_b.sent()).RiPlaystationLine;
                    return [2 /*return*/, RiPlaystationLine];
                case 1561: return [4 /*yield*/, import("react-icons/ri")];
                case 1562:
                    RiProductHuntFill = (_b.sent()).RiProductHuntFill;
                    return [2 /*return*/, RiProductHuntFill];
                case 1563: return [4 /*yield*/, import("react-icons/ri")];
                case 1564:
                    RiProductHuntLine = (_b.sent()).RiProductHuntLine;
                    return [2 /*return*/, RiProductHuntLine];
                case 1565: return [4 /*yield*/, import("react-icons/ri")];
                case 1566:
                    RiQqFill = (_b.sent()).RiQqFill;
                    return [2 /*return*/, RiQqFill];
                case 1567: return [4 /*yield*/, import("react-icons/ri")];
                case 1568:
                    RiQqLine = (_b.sent()).RiQqLine;
                    return [2 /*return*/, RiQqLine];
                case 1569: return [4 /*yield*/, import("react-icons/ri")];
                case 1570:
                    RiReactjsFill = (_b.sent()).RiReactjsFill;
                    return [2 /*return*/, RiReactjsFill];
                case 1571: return [4 /*yield*/, import("react-icons/ri")];
                case 1572:
                    RiReactjsLine = (_b.sent()).RiReactjsLine;
                    return [2 /*return*/, RiReactjsLine];
                case 1573: return [4 /*yield*/, import("react-icons/ri")];
                case 1574:
                    RiRedditFill = (_b.sent()).RiRedditFill;
                    return [2 /*return*/, RiRedditFill];
                case 1575: return [4 /*yield*/, import("react-icons/ri")];
                case 1576:
                    RiRedditLine = (_b.sent()).RiRedditLine;
                    return [2 /*return*/, RiRedditLine];
                case 1577: return [4 /*yield*/, import("react-icons/ri")];
                case 1578:
                    RiRemixRunFill = (_b.sent()).RiRemixRunFill;
                    return [2 /*return*/, RiRemixRunFill];
                case 1579: return [4 /*yield*/, import("react-icons/ri")];
                case 1580:
                    RiRemixRunLine = (_b.sent()).RiRemixRunLine;
                    return [2 /*return*/, RiRemixRunLine];
                case 1581: return [4 /*yield*/, import("react-icons/ri")];
                case 1582:
                    RiRemixiconFill = (_b.sent()).RiRemixiconFill;
                    return [2 /*return*/, RiRemixiconFill];
                case 1583: return [4 /*yield*/, import("react-icons/ri")];
                case 1584:
                    RiRemixiconLine = (_b.sent()).RiRemixiconLine;
                    return [2 /*return*/, RiRemixiconLine];
                case 1585: return [4 /*yield*/, import("react-icons/ri")];
                case 1586:
                    RiSafariFill = (_b.sent()).RiSafariFill;
                    return [2 /*return*/, RiSafariFill];
                case 1587: return [4 /*yield*/, import("react-icons/ri")];
                case 1588:
                    RiSafariLine = (_b.sent()).RiSafariLine;
                    return [2 /*return*/, RiSafariLine];
                case 1589: return [4 /*yield*/, import("react-icons/ri")];
                case 1590:
                    RiSkypeFill = (_b.sent()).RiSkypeFill;
                    return [2 /*return*/, RiSkypeFill];
                case 1591: return [4 /*yield*/, import("react-icons/ri")];
                case 1592:
                    RiSkypeLine = (_b.sent()).RiSkypeLine;
                    return [2 /*return*/, RiSkypeLine];
                case 1593: return [4 /*yield*/, import("react-icons/ri")];
                case 1594:
                    RiSlackFill = (_b.sent()).RiSlackFill;
                    return [2 /*return*/, RiSlackFill];
                case 1595: return [4 /*yield*/, import("react-icons/ri")];
                case 1596:
                    RiSlackLine = (_b.sent()).RiSlackLine;
                    return [2 /*return*/, RiSlackLine];
                case 1597: return [4 /*yield*/, import("react-icons/ri")];
                case 1598:
                    RiSnapchatFill = (_b.sent()).RiSnapchatFill;
                    return [2 /*return*/, RiSnapchatFill];
                case 1599: return [4 /*yield*/, import("react-icons/ri")];
                case 1600:
                    RiSnapchatLine = (_b.sent()).RiSnapchatLine;
                    return [2 /*return*/, RiSnapchatLine];
                case 1601: return [4 /*yield*/, import("react-icons/ri")];
                case 1602:
                    RiSoundcloudFill = (_b.sent()).RiSoundcloudFill;
                    return [2 /*return*/, RiSoundcloudFill];
                case 1603: return [4 /*yield*/, import("react-icons/ri")];
                case 1604:
                    RiSoundcloudLine = (_b.sent()).RiSoundcloudLine;
                    return [2 /*return*/, RiSoundcloudLine];
                case 1605: return [4 /*yield*/, import("react-icons/ri")];
                case 1606:
                    RiSpectrumFill = (_b.sent()).RiSpectrumFill;
                    return [2 /*return*/, RiSpectrumFill];
                case 1607: return [4 /*yield*/, import("react-icons/ri")];
                case 1608:
                    RiSpectrumLine = (_b.sent()).RiSpectrumLine;
                    return [2 /*return*/, RiSpectrumLine];
                case 1609: return [4 /*yield*/, import("react-icons/ri")];
                case 1610:
                    RiSpotifyFill = (_b.sent()).RiSpotifyFill;
                    return [2 /*return*/, RiSpotifyFill];
                case 1611: return [4 /*yield*/, import("react-icons/ri")];
                case 1612:
                    RiSpotifyLine = (_b.sent()).RiSpotifyLine;
                    return [2 /*return*/, RiSpotifyLine];
                case 1613: return [4 /*yield*/, import("react-icons/ri")];
                case 1614:
                    RiStackOverflowFill = (_b.sent()).RiStackOverflowFill;
                    return [2 /*return*/, RiStackOverflowFill];
                case 1615: return [4 /*yield*/, import("react-icons/ri")];
                case 1616:
                    RiStackOverflowLine = (_b.sent()).RiStackOverflowLine;
                    return [2 /*return*/, RiStackOverflowLine];
                case 1617: return [4 /*yield*/, import("react-icons/ri")];
                case 1618:
                    RiStackshareFill = (_b.sent()).RiStackshareFill;
                    return [2 /*return*/, RiStackshareFill];
                case 1619: return [4 /*yield*/, import("react-icons/ri")];
                case 1620:
                    RiStackshareLine = (_b.sent()).RiStackshareLine;
                    return [2 /*return*/, RiStackshareLine];
                case 1621: return [4 /*yield*/, import("react-icons/ri")];
                case 1622:
                    RiSteamFill = (_b.sent()).RiSteamFill;
                    return [2 /*return*/, RiSteamFill];
                case 1623: return [4 /*yield*/, import("react-icons/ri")];
                case 1624:
                    RiSteamLine = (_b.sent()).RiSteamLine;
                    return [2 /*return*/, RiSteamLine];
                case 1625: return [4 /*yield*/, import("react-icons/ri")];
                case 1626:
                    RiSupabaseFill = (_b.sent()).RiSupabaseFill;
                    return [2 /*return*/, RiSupabaseFill];
                case 1627: return [4 /*yield*/, import("react-icons/ri")];
                case 1628:
                    RiSupabaseLine = (_b.sent()).RiSupabaseLine;
                    return [2 /*return*/, RiSupabaseLine];
                case 1629: return [4 /*yield*/, import("react-icons/ri")];
                case 1630:
                    RiSvelteFill = (_b.sent()).RiSvelteFill;
                    return [2 /*return*/, RiSvelteFill];
                case 1631: return [4 /*yield*/, import("react-icons/ri")];
                case 1632:
                    RiSvelteLine = (_b.sent()).RiSvelteLine;
                    return [2 /*return*/, RiSvelteLine];
                case 1633: return [4 /*yield*/, import("react-icons/ri")];
                case 1634:
                    RiSwitchFill = (_b.sent()).RiSwitchFill;
                    return [2 /*return*/, RiSwitchFill];
                case 1635: return [4 /*yield*/, import("react-icons/ri")];
                case 1636:
                    RiSwitchLine = (_b.sent()).RiSwitchLine;
                    return [2 /*return*/, RiSwitchLine];
                case 1637: return [4 /*yield*/, import("react-icons/ri")];
                case 1638:
                    RiTailwindCssFill = (_b.sent()).RiTailwindCssFill;
                    return [2 /*return*/, RiTailwindCssFill];
                case 1639: return [4 /*yield*/, import("react-icons/ri")];
                case 1640:
                    RiTailwindCssLine = (_b.sent()).RiTailwindCssLine;
                    return [2 /*return*/, RiTailwindCssLine];
                case 1641: return [4 /*yield*/, import("react-icons/ri")];
                case 1642:
                    RiTaobaoFill = (_b.sent()).RiTaobaoFill;
                    return [2 /*return*/, RiTaobaoFill];
                case 1643: return [4 /*yield*/, import("react-icons/ri")];
                case 1644:
                    RiTaobaoLine = (_b.sent()).RiTaobaoLine;
                    return [2 /*return*/, RiTaobaoLine];
                case 1645: return [4 /*yield*/, import("react-icons/ri")];
                case 1646:
                    RiTelegram2Fill = (_b.sent()).RiTelegram2Fill;
                    return [2 /*return*/, RiTelegram2Fill];
                case 1647: return [4 /*yield*/, import("react-icons/ri")];
                case 1648:
                    RiTelegram2Line = (_b.sent()).RiTelegram2Line;
                    return [2 /*return*/, RiTelegram2Line];
                case 1649: return [4 /*yield*/, import("react-icons/ri")];
                case 1650:
                    RiTelegramFill = (_b.sent()).RiTelegramFill;
                    return [2 /*return*/, RiTelegramFill];
                case 1651: return [4 /*yield*/, import("react-icons/ri")];
                case 1652:
                    RiTelegramLine = (_b.sent()).RiTelegramLine;
                    return [2 /*return*/, RiTelegramLine];
                case 1653: return [4 /*yield*/, import("react-icons/ri")];
                case 1654:
                    RiThreadsFill = (_b.sent()).RiThreadsFill;
                    return [2 /*return*/, RiThreadsFill];
                case 1655: return [4 /*yield*/, import("react-icons/ri")];
                case 1656:
                    RiThreadsLine = (_b.sent()).RiThreadsLine;
                    return [2 /*return*/, RiThreadsLine];
                case 1657: return [4 /*yield*/, import("react-icons/ri")];
                case 1658:
                    RiTiktokFill = (_b.sent()).RiTiktokFill;
                    return [2 /*return*/, RiTiktokFill];
                case 1659: return [4 /*yield*/, import("react-icons/ri")];
                case 1660:
                    RiTiktokLine = (_b.sent()).RiTiktokLine;
                    return [2 /*return*/, RiTiktokLine];
                case 1661: return [4 /*yield*/, import("react-icons/ri")];
                case 1662:
                    RiTrelloFill = (_b.sent()).RiTrelloFill;
                    return [2 /*return*/, RiTrelloFill];
                case 1663: return [4 /*yield*/, import("react-icons/ri")];
                case 1664:
                    RiTrelloLine = (_b.sent()).RiTrelloLine;
                    return [2 /*return*/, RiTrelloLine];
                case 1665: return [4 /*yield*/, import("react-icons/ri")];
                case 1666:
                    RiTumblrFill = (_b.sent()).RiTumblrFill;
                    return [2 /*return*/, RiTumblrFill];
                case 1667: return [4 /*yield*/, import("react-icons/ri")];
                case 1668:
                    RiTumblrLine = (_b.sent()).RiTumblrLine;
                    return [2 /*return*/, RiTumblrLine];
                case 1669: return [4 /*yield*/, import("react-icons/ri")];
                case 1670:
                    RiTwitchFill = (_b.sent()).RiTwitchFill;
                    return [2 /*return*/, RiTwitchFill];
                case 1671: return [4 /*yield*/, import("react-icons/ri")];
                case 1672:
                    RiTwitchLine = (_b.sent()).RiTwitchLine;
                    return [2 /*return*/, RiTwitchLine];
                case 1673: return [4 /*yield*/, import("react-icons/ri")];
                case 1674:
                    RiTwitterFill = (_b.sent()).RiTwitterFill;
                    return [2 /*return*/, RiTwitterFill];
                case 1675: return [4 /*yield*/, import("react-icons/ri")];
                case 1676:
                    RiTwitterLine = (_b.sent()).RiTwitterLine;
                    return [2 /*return*/, RiTwitterLine];
                case 1677: return [4 /*yield*/, import("react-icons/ri")];
                case 1678:
                    RiTwitterXFill = (_b.sent()).RiTwitterXFill;
                    return [2 /*return*/, RiTwitterXFill];
                case 1679: return [4 /*yield*/, import("react-icons/ri")];
                case 1680:
                    RiTwitterXLine = (_b.sent()).RiTwitterXLine;
                    return [2 /*return*/, RiTwitterXLine];
                case 1681: return [4 /*yield*/, import("react-icons/ri")];
                case 1682:
                    RiUbuntuFill = (_b.sent()).RiUbuntuFill;
                    return [2 /*return*/, RiUbuntuFill];
                case 1683: return [4 /*yield*/, import("react-icons/ri")];
                case 1684:
                    RiUbuntuLine = (_b.sent()).RiUbuntuLine;
                    return [2 /*return*/, RiUbuntuLine];
                case 1685: return [4 /*yield*/, import("react-icons/ri")];
                case 1686:
                    RiUnsplashFill = (_b.sent()).RiUnsplashFill;
                    return [2 /*return*/, RiUnsplashFill];
                case 1687: return [4 /*yield*/, import("react-icons/ri")];
                case 1688:
                    RiUnsplashLine = (_b.sent()).RiUnsplashLine;
                    return [2 /*return*/, RiUnsplashLine];
                case 1689: return [4 /*yield*/, import("react-icons/ri")];
                case 1690:
                    RiVercelFill = (_b.sent()).RiVercelFill;
                    return [2 /*return*/, RiVercelFill];
                case 1691: return [4 /*yield*/, import("react-icons/ri")];
                case 1692:
                    RiVercelLine = (_b.sent()).RiVercelLine;
                    return [2 /*return*/, RiVercelLine];
                case 1693: return [4 /*yield*/, import("react-icons/ri")];
                case 1694:
                    RiVimeoFill = (_b.sent()).RiVimeoFill;
                    return [2 /*return*/, RiVimeoFill];
                case 1695: return [4 /*yield*/, import("react-icons/ri")];
                case 1696:
                    RiVimeoLine = (_b.sent()).RiVimeoLine;
                    return [2 /*return*/, RiVimeoLine];
                case 1697: return [4 /*yield*/, import("react-icons/ri")];
                case 1698:
                    RiVisaFill = (_b.sent()).RiVisaFill;
                    return [2 /*return*/, RiVisaFill];
                case 1699: return [4 /*yield*/, import("react-icons/ri")];
                case 1700:
                    RiVisaLine = (_b.sent()).RiVisaLine;
                    return [2 /*return*/, RiVisaLine];
                case 1701: return [4 /*yield*/, import("react-icons/ri")];
                case 1702:
                    RiVkFill = (_b.sent()).RiVkFill;
                    return [2 /*return*/, RiVkFill];
                case 1703: return [4 /*yield*/, import("react-icons/ri")];
                case 1704:
                    RiVkLine = (_b.sent()).RiVkLine;
                    return [2 /*return*/, RiVkLine];
                case 1705: return [4 /*yield*/, import("react-icons/ri")];
                case 1706:
                    RiVuejsFill = (_b.sent()).RiVuejsFill;
                    return [2 /*return*/, RiVuejsFill];
                case 1707: return [4 /*yield*/, import("react-icons/ri")];
                case 1708:
                    RiVuejsLine = (_b.sent()).RiVuejsLine;
                    return [2 /*return*/, RiVuejsLine];
                case 1709: return [4 /*yield*/, import("react-icons/ri")];
                case 1710:
                    RiWebhookFill = (_b.sent()).RiWebhookFill;
                    return [2 /*return*/, RiWebhookFill];
                case 1711: return [4 /*yield*/, import("react-icons/ri")];
                case 1712:
                    RiWebhookLine = (_b.sent()).RiWebhookLine;
                    return [2 /*return*/, RiWebhookLine];
                case 1713: return [4 /*yield*/, import("react-icons/ri")];
                case 1714:
                    RiWechat2Fill = (_b.sent()).RiWechat2Fill;
                    return [2 /*return*/, RiWechat2Fill];
                case 1715: return [4 /*yield*/, import("react-icons/ri")];
                case 1716:
                    RiWechat2Line = (_b.sent()).RiWechat2Line;
                    return [2 /*return*/, RiWechat2Line];
                case 1717: return [4 /*yield*/, import("react-icons/ri")];
                case 1718:
                    RiWechatChannelsFill = (_b.sent()).RiWechatChannelsFill;
                    return [2 /*return*/, RiWechatChannelsFill];
                case 1719: return [4 /*yield*/, import("react-icons/ri")];
                case 1720:
                    RiWechatChannelsLine = (_b.sent()).RiWechatChannelsLine;
                    return [2 /*return*/, RiWechatChannelsLine];
                case 1721: return [4 /*yield*/, import("react-icons/ri")];
                case 1722:
                    RiWechatFill = (_b.sent()).RiWechatFill;
                    return [2 /*return*/, RiWechatFill];
                case 1723: return [4 /*yield*/, import("react-icons/ri")];
                case 1724:
                    RiWechatLine = (_b.sent()).RiWechatLine;
                    return [2 /*return*/, RiWechatLine];
                case 1725: return [4 /*yield*/, import("react-icons/ri")];
                case 1726:
                    RiWechatPayFill = (_b.sent()).RiWechatPayFill;
                    return [2 /*return*/, RiWechatPayFill];
                case 1727: return [4 /*yield*/, import("react-icons/ri")];
                case 1728:
                    RiWechatPayLine = (_b.sent()).RiWechatPayLine;
                    return [2 /*return*/, RiWechatPayLine];
                case 1729: return [4 /*yield*/, import("react-icons/ri")];
                case 1730:
                    RiWeiboFill = (_b.sent()).RiWeiboFill;
                    return [2 /*return*/, RiWeiboFill];
                case 1731: return [4 /*yield*/, import("react-icons/ri")];
                case 1732:
                    RiWeiboLine = (_b.sent()).RiWeiboLine;
                    return [2 /*return*/, RiWeiboLine];
                case 1733: return [4 /*yield*/, import("react-icons/ri")];
                case 1734:
                    RiWhatsappFill = (_b.sent()).RiWhatsappFill;
                    return [2 /*return*/, RiWhatsappFill];
                case 1735: return [4 /*yield*/, import("react-icons/ri")];
                case 1736:
                    RiWhatsappLine = (_b.sent()).RiWhatsappLine;
                    return [2 /*return*/, RiWhatsappLine];
                case 1737: return [4 /*yield*/, import("react-icons/ri")];
                case 1738:
                    RiWindowsFill = (_b.sent()).RiWindowsFill;
                    return [2 /*return*/, RiWindowsFill];
                case 1739: return [4 /*yield*/, import("react-icons/ri")];
                case 1740:
                    RiWindowsLine = (_b.sent()).RiWindowsLine;
                    return [2 /*return*/, RiWindowsLine];
                case 1741: return [4 /*yield*/, import("react-icons/ri")];
                case 1742:
                    RiWordpressFill = (_b.sent()).RiWordpressFill;
                    return [2 /*return*/, RiWordpressFill];
                case 1743: return [4 /*yield*/, import("react-icons/ri")];
                case 1744:
                    RiWordpressLine = (_b.sent()).RiWordpressLine;
                    return [2 /*return*/, RiWordpressLine];
                case 1745: return [4 /*yield*/, import("react-icons/ri")];
                case 1746:
                    RiXboxFill = (_b.sent()).RiXboxFill;
                    return [2 /*return*/, RiXboxFill];
                case 1747: return [4 /*yield*/, import("react-icons/ri")];
                case 1748:
                    RiXboxLine = (_b.sent()).RiXboxLine;
                    return [2 /*return*/, RiXboxLine];
                case 1749: return [4 /*yield*/, import("react-icons/ri")];
                case 1750:
                    RiXingFill = (_b.sent()).RiXingFill;
                    return [2 /*return*/, RiXingFill];
                case 1751: return [4 /*yield*/, import("react-icons/ri")];
                case 1752:
                    RiXingLine = (_b.sent()).RiXingLine;
                    return [2 /*return*/, RiXingLine];
                case 1753: return [4 /*yield*/, import("react-icons/ri")];
                case 1754:
                    RiYoutubeFill = (_b.sent()).RiYoutubeFill;
                    return [2 /*return*/, RiYoutubeFill];
                case 1755: return [4 /*yield*/, import("react-icons/ri")];
                case 1756:
                    RiYoutubeLine = (_b.sent()).RiYoutubeLine;
                    return [2 /*return*/, RiYoutubeLine];
                case 1757: return [4 /*yield*/, import("react-icons/ri")];
                case 1758:
                    RiYuqueFill = (_b.sent()).RiYuqueFill;
                    return [2 /*return*/, RiYuqueFill];
                case 1759: return [4 /*yield*/, import("react-icons/ri")];
                case 1760:
                    RiYuqueLine = (_b.sent()).RiYuqueLine;
                    return [2 /*return*/, RiYuqueLine];
                case 1761: return [4 /*yield*/, import("react-icons/ri")];
                case 1762:
                    RiZcoolFill = (_b.sent()).RiZcoolFill;
                    return [2 /*return*/, RiZcoolFill];
                case 1763: return [4 /*yield*/, import("react-icons/ri")];
                case 1764:
                    RiZcoolLine = (_b.sent()).RiZcoolLine;
                    return [2 /*return*/, RiZcoolLine];
                case 1765: return [4 /*yield*/, import("react-icons/ri")];
                case 1766:
                    RiZhihuFill = (_b.sent()).RiZhihuFill;
                    return [2 /*return*/, RiZhihuFill];
                case 1767: return [4 /*yield*/, import("react-icons/ri")];
                case 1768:
                    RiZhihuLine = (_b.sent()).RiZhihuLine;
                    return [2 /*return*/, RiZhihuLine];
                case 1769: return [4 /*yield*/, import("react-icons/ri")];
                case 1770:
                    RiAnchorFill = (_b.sent()).RiAnchorFill;
                    return [2 /*return*/, RiAnchorFill];
                case 1771: return [4 /*yield*/, import("react-icons/ri")];
                case 1772:
                    RiAnchorLine = (_b.sent()).RiAnchorLine;
                    return [2 /*return*/, RiAnchorLine];
                case 1773: return [4 /*yield*/, import("react-icons/ri")];
                case 1774:
                    RiBarricadeFill = (_b.sent()).RiBarricadeFill;
                    return [2 /*return*/, RiBarricadeFill];
                case 1775: return [4 /*yield*/, import("react-icons/ri")];
                case 1776:
                    RiBarricadeLine = (_b.sent()).RiBarricadeLine;
                    return [2 /*return*/, RiBarricadeLine];
                case 1777: return [4 /*yield*/, import("react-icons/ri")];
                case 1778:
                    RiBikeFill = (_b.sent()).RiBikeFill;
                    return [2 /*return*/, RiBikeFill];
                case 1779: return [4 /*yield*/, import("react-icons/ri")];
                case 1780:
                    RiBikeLine = (_b.sent()).RiBikeLine;
                    return [2 /*return*/, RiBikeLine];
                case 1781: return [4 /*yield*/, import("react-icons/ri")];
                case 1782:
                    RiBus2Fill = (_b.sent()).RiBus2Fill;
                    return [2 /*return*/, RiBus2Fill];
                case 1783: return [4 /*yield*/, import("react-icons/ri")];
                case 1784:
                    RiBus2Line = (_b.sent()).RiBus2Line;
                    return [2 /*return*/, RiBus2Line];
                case 1785: return [4 /*yield*/, import("react-icons/ri")];
                case 1786:
                    RiBusFill = (_b.sent()).RiBusFill;
                    return [2 /*return*/, RiBusFill];
                case 1787: return [4 /*yield*/, import("react-icons/ri")];
                case 1788:
                    RiBusLine = (_b.sent()).RiBusLine;
                    return [2 /*return*/, RiBusLine];
                case 1789: return [4 /*yield*/, import("react-icons/ri")];
                case 1790:
                    RiBusWifiFill = (_b.sent()).RiBusWifiFill;
                    return [2 /*return*/, RiBusWifiFill];
                case 1791: return [4 /*yield*/, import("react-icons/ri")];
                case 1792:
                    RiBusWifiLine = (_b.sent()).RiBusWifiLine;
                    return [2 /*return*/, RiBusWifiLine];
                case 1793: return [4 /*yield*/, import("react-icons/ri")];
                case 1794:
                    RiCarFill = (_b.sent()).RiCarFill;
                    return [2 /*return*/, RiCarFill];
                case 1795: return [4 /*yield*/, import("react-icons/ri")];
                case 1796:
                    RiCarLine = (_b.sent()).RiCarLine;
                    return [2 /*return*/, RiCarLine];
                case 1797: return [4 /*yield*/, import("react-icons/ri")];
                case 1798:
                    RiCarWashingFill = (_b.sent()).RiCarWashingFill;
                    return [2 /*return*/, RiCarWashingFill];
                case 1799: return [4 /*yield*/, import("react-icons/ri")];
                case 1800:
                    RiCarWashingLine = (_b.sent()).RiCarWashingLine;
                    return [2 /*return*/, RiCarWashingLine];
                case 1801: return [4 /*yield*/, import("react-icons/ri")];
                case 1802:
                    RiCaravanFill = (_b.sent()).RiCaravanFill;
                    return [2 /*return*/, RiCaravanFill];
                case 1803: return [4 /*yield*/, import("react-icons/ri")];
                case 1804:
                    RiCaravanLine = (_b.sent()).RiCaravanLine;
                    return [2 /*return*/, RiCaravanLine];
                case 1805: return [4 /*yield*/, import("react-icons/ri")];
                case 1806:
                    RiChargingPile2Fill = (_b.sent()).RiChargingPile2Fill;
                    return [2 /*return*/, RiChargingPile2Fill];
                case 1807: return [4 /*yield*/, import("react-icons/ri")];
                case 1808:
                    RiChargingPile2Line = (_b.sent()).RiChargingPile2Line;
                    return [2 /*return*/, RiChargingPile2Line];
                case 1809: return [4 /*yield*/, import("react-icons/ri")];
                case 1810:
                    RiChargingPileFill = (_b.sent()).RiChargingPileFill;
                    return [2 /*return*/, RiChargingPileFill];
                case 1811: return [4 /*yield*/, import("react-icons/ri")];
                case 1812:
                    RiChargingPileLine = (_b.sent()).RiChargingPileLine;
                    return [2 /*return*/, RiChargingPileLine];
                case 1813: return [4 /*yield*/, import("react-icons/ri")];
                case 1814:
                    RiChinaRailwayFill = (_b.sent()).RiChinaRailwayFill;
                    return [2 /*return*/, RiChinaRailwayFill];
                case 1815: return [4 /*yield*/, import("react-icons/ri")];
                case 1816:
                    RiChinaRailwayLine = (_b.sent()).RiChinaRailwayLine;
                    return [2 /*return*/, RiChinaRailwayLine];
                case 1817: return [4 /*yield*/, import("react-icons/ri")];
                case 1818:
                    RiCompass2Fill = (_b.sent()).RiCompass2Fill;
                    return [2 /*return*/, RiCompass2Fill];
                case 1819: return [4 /*yield*/, import("react-icons/ri")];
                case 1820:
                    RiCompass2Line = (_b.sent()).RiCompass2Line;
                    return [2 /*return*/, RiCompass2Line];
                case 1821: return [4 /*yield*/, import("react-icons/ri")];
                case 1822:
                    RiCompass3Fill = (_b.sent()).RiCompass3Fill;
                    return [2 /*return*/, RiCompass3Fill];
                case 1823: return [4 /*yield*/, import("react-icons/ri")];
                case 1824:
                    RiCompass3Line = (_b.sent()).RiCompass3Line;
                    return [2 /*return*/, RiCompass3Line];
                case 1825: return [4 /*yield*/, import("react-icons/ri")];
                case 1826:
                    RiCompass4Fill = (_b.sent()).RiCompass4Fill;
                    return [2 /*return*/, RiCompass4Fill];
                case 1827: return [4 /*yield*/, import("react-icons/ri")];
                case 1828:
                    RiCompass4Line = (_b.sent()).RiCompass4Line;
                    return [2 /*return*/, RiCompass4Line];
                case 1829: return [4 /*yield*/, import("react-icons/ri")];
                case 1830:
                    RiCompassDiscoverFill = (_b.sent()).RiCompassDiscoverFill;
                    return [2 /*return*/, RiCompassDiscoverFill];
                case 1831: return [4 /*yield*/, import("react-icons/ri")];
                case 1832:
                    RiCompassDiscoverLine = (_b.sent()).RiCompassDiscoverLine;
                    return [2 /*return*/, RiCompassDiscoverLine];
                case 1833: return [4 /*yield*/, import("react-icons/ri")];
                case 1834:
                    RiCompassFill = (_b.sent()).RiCompassFill;
                    return [2 /*return*/, RiCompassFill];
                case 1835: return [4 /*yield*/, import("react-icons/ri")];
                case 1836:
                    RiCompassLine = (_b.sent()).RiCompassLine;
                    return [2 /*return*/, RiCompassLine];
                case 1837: return [4 /*yield*/, import("react-icons/ri")];
                case 1838:
                    RiDirectionFill = (_b.sent()).RiDirectionFill;
                    return [2 /*return*/, RiDirectionFill];
                case 1839: return [4 /*yield*/, import("react-icons/ri")];
                case 1840:
                    RiDirectionLine = (_b.sent()).RiDirectionLine;
                    return [2 /*return*/, RiDirectionLine];
                case 1841: return [4 /*yield*/, import("react-icons/ri")];
                case 1842:
                    RiEBike2Fill = (_b.sent()).RiEBike2Fill;
                    return [2 /*return*/, RiEBike2Fill];
                case 1843: return [4 /*yield*/, import("react-icons/ri")];
                case 1844:
                    RiEBike2Line = (_b.sent()).RiEBike2Line;
                    return [2 /*return*/, RiEBike2Line];
                case 1845: return [4 /*yield*/, import("react-icons/ri")];
                case 1846:
                    RiEBikeFill = (_b.sent()).RiEBikeFill;
                    return [2 /*return*/, RiEBikeFill];
                case 1847: return [4 /*yield*/, import("react-icons/ri")];
                case 1848:
                    RiEBikeLine = (_b.sent()).RiEBikeLine;
                    return [2 /*return*/, RiEBikeLine];
                case 1849: return [4 /*yield*/, import("react-icons/ri")];
                case 1850:
                    RiEarthFill = (_b.sent()).RiEarthFill;
                    return [2 /*return*/, RiEarthFill];
                case 1851: return [4 /*yield*/, import("react-icons/ri")];
                case 1852:
                    RiEarthLine = (_b.sent()).RiEarthLine;
                    return [2 /*return*/, RiEarthLine];
                case 1853: return [4 /*yield*/, import("react-icons/ri")];
                case 1854:
                    RiFlightLandFill = (_b.sent()).RiFlightLandFill;
                    return [2 /*return*/, RiFlightLandFill];
                case 1855: return [4 /*yield*/, import("react-icons/ri")];
                case 1856:
                    RiFlightLandLine = (_b.sent()).RiFlightLandLine;
                    return [2 /*return*/, RiFlightLandLine];
                case 1857: return [4 /*yield*/, import("react-icons/ri")];
                case 1858:
                    RiFlightTakeoffFill = (_b.sent()).RiFlightTakeoffFill;
                    return [2 /*return*/, RiFlightTakeoffFill];
                case 1859: return [4 /*yield*/, import("react-icons/ri")];
                case 1860:
                    RiFlightTakeoffLine = (_b.sent()).RiFlightTakeoffLine;
                    return [2 /*return*/, RiFlightTakeoffLine];
                case 1861: return [4 /*yield*/, import("react-icons/ri")];
                case 1862:
                    RiFootprintFill = (_b.sent()).RiFootprintFill;
                    return [2 /*return*/, RiFootprintFill];
                case 1863: return [4 /*yield*/, import("react-icons/ri")];
                case 1864:
                    RiFootprintLine = (_b.sent()).RiFootprintLine;
                    return [2 /*return*/, RiFootprintLine];
                case 1865: return [4 /*yield*/, import("react-icons/ri")];
                case 1866:
                    RiGasStationFill = (_b.sent()).RiGasStationFill;
                    return [2 /*return*/, RiGasStationFill];
                case 1867: return [4 /*yield*/, import("react-icons/ri")];
                case 1868:
                    RiGasStationLine = (_b.sent()).RiGasStationLine;
                    return [2 /*return*/, RiGasStationLine];
                case 1869: return [4 /*yield*/, import("react-icons/ri")];
                case 1870:
                    RiGlobeFill = (_b.sent()).RiGlobeFill;
                    return [2 /*return*/, RiGlobeFill];
                case 1871: return [4 /*yield*/, import("react-icons/ri")];
                case 1872:
                    RiGlobeLine = (_b.sent()).RiGlobeLine;
                    return [2 /*return*/, RiGlobeLine];
                case 1873: return [4 /*yield*/, import("react-icons/ri")];
                case 1874:
                    RiGuideFill = (_b.sent()).RiGuideFill;
                    return [2 /*return*/, RiGuideFill];
                case 1875: return [4 /*yield*/, import("react-icons/ri")];
                case 1876:
                    RiGuideLine = (_b.sent()).RiGuideLine;
                    return [2 /*return*/, RiGuideLine];
                case 1877: return [4 /*yield*/, import("react-icons/ri")];
                case 1878:
                    RiHotelBedFill = (_b.sent()).RiHotelBedFill;
                    return [2 /*return*/, RiHotelBedFill];
                case 1879: return [4 /*yield*/, import("react-icons/ri")];
                case 1880:
                    RiHotelBedLine = (_b.sent()).RiHotelBedLine;
                    return [2 /*return*/, RiHotelBedLine];
                case 1881: return [4 /*yield*/, import("react-icons/ri")];
                case 1882:
                    RiLifebuoyFill = (_b.sent()).RiLifebuoyFill;
                    return [2 /*return*/, RiLifebuoyFill];
                case 1883: return [4 /*yield*/, import("react-icons/ri")];
                case 1884:
                    RiLifebuoyLine = (_b.sent()).RiLifebuoyLine;
                    return [2 /*return*/, RiLifebuoyLine];
                case 1885: return [4 /*yield*/, import("react-icons/ri")];
                case 1886:
                    RiLuggageCartFill = (_b.sent()).RiLuggageCartFill;
                    return [2 /*return*/, RiLuggageCartFill];
                case 1887: return [4 /*yield*/, import("react-icons/ri")];
                case 1888:
                    RiLuggageCartLine = (_b.sent()).RiLuggageCartLine;
                    return [2 /*return*/, RiLuggageCartLine];
                case 1889: return [4 /*yield*/, import("react-icons/ri")];
                case 1890:
                    RiLuggageDepositFill = (_b.sent()).RiLuggageDepositFill;
                    return [2 /*return*/, RiLuggageDepositFill];
                case 1891: return [4 /*yield*/, import("react-icons/ri")];
                case 1892:
                    RiLuggageDepositLine = (_b.sent()).RiLuggageDepositLine;
                    return [2 /*return*/, RiLuggageDepositLine];
                case 1893: return [4 /*yield*/, import("react-icons/ri")];
                case 1894:
                    RiMap2Fill = (_b.sent()).RiMap2Fill;
                    return [2 /*return*/, RiMap2Fill];
                case 1895: return [4 /*yield*/, import("react-icons/ri")];
                case 1896:
                    RiMap2Line = (_b.sent()).RiMap2Line;
                    return [2 /*return*/, RiMap2Line];
                case 1897: return [4 /*yield*/, import("react-icons/ri")];
                case 1898:
                    RiMapFill = (_b.sent()).RiMapFill;
                    return [2 /*return*/, RiMapFill];
                case 1899: return [4 /*yield*/, import("react-icons/ri")];
                case 1900:
                    RiMapLine = (_b.sent()).RiMapLine;
                    return [2 /*return*/, RiMapLine];
                case 1901: return [4 /*yield*/, import("react-icons/ri")];
                case 1902:
                    RiMapPin2Fill = (_b.sent()).RiMapPin2Fill;
                    return [2 /*return*/, RiMapPin2Fill];
                case 1903: return [4 /*yield*/, import("react-icons/ri")];
                case 1904:
                    RiMapPin2Line = (_b.sent()).RiMapPin2Line;
                    return [2 /*return*/, RiMapPin2Line];
                case 1905: return [4 /*yield*/, import("react-icons/ri")];
                case 1906:
                    RiMapPin3Fill = (_b.sent()).RiMapPin3Fill;
                    return [2 /*return*/, RiMapPin3Fill];
                case 1907: return [4 /*yield*/, import("react-icons/ri")];
                case 1908:
                    RiMapPin3Line = (_b.sent()).RiMapPin3Line;
                    return [2 /*return*/, RiMapPin3Line];
                case 1909: return [4 /*yield*/, import("react-icons/ri")];
                case 1910:
                    RiMapPin4Fill = (_b.sent()).RiMapPin4Fill;
                    return [2 /*return*/, RiMapPin4Fill];
                case 1911: return [4 /*yield*/, import("react-icons/ri")];
                case 1912:
                    RiMapPin4Line = (_b.sent()).RiMapPin4Line;
                    return [2 /*return*/, RiMapPin4Line];
                case 1913: return [4 /*yield*/, import("react-icons/ri")];
                case 1914:
                    RiMapPin5Fill = (_b.sent()).RiMapPin5Fill;
                    return [2 /*return*/, RiMapPin5Fill];
                case 1915: return [4 /*yield*/, import("react-icons/ri")];
                case 1916:
                    RiMapPin5Line = (_b.sent()).RiMapPin5Line;
                    return [2 /*return*/, RiMapPin5Line];
                case 1917: return [4 /*yield*/, import("react-icons/ri")];
                case 1918:
                    RiMapPinAddFill = (_b.sent()).RiMapPinAddFill;
                    return [2 /*return*/, RiMapPinAddFill];
                case 1919: return [4 /*yield*/, import("react-icons/ri")];
                case 1920:
                    RiMapPinAddLine = (_b.sent()).RiMapPinAddLine;
                    return [2 /*return*/, RiMapPinAddLine];
                case 1921: return [4 /*yield*/, import("react-icons/ri")];
                case 1922:
                    RiMapPinFill = (_b.sent()).RiMapPinFill;
                    return [2 /*return*/, RiMapPinFill];
                case 1923: return [4 /*yield*/, import("react-icons/ri")];
                case 1924:
                    RiMapPinLine = (_b.sent()).RiMapPinLine;
                    return [2 /*return*/, RiMapPinLine];
                case 1925: return [4 /*yield*/, import("react-icons/ri")];
                case 1926:
                    RiMapPinRangeFill = (_b.sent()).RiMapPinRangeFill;
                    return [2 /*return*/, RiMapPinRangeFill];
                case 1927: return [4 /*yield*/, import("react-icons/ri")];
                case 1928:
                    RiMapPinRangeLine = (_b.sent()).RiMapPinRangeLine;
                    return [2 /*return*/, RiMapPinRangeLine];
                case 1929: return [4 /*yield*/, import("react-icons/ri")];
                case 1930:
                    RiMapPinTimeFill = (_b.sent()).RiMapPinTimeFill;
                    return [2 /*return*/, RiMapPinTimeFill];
                case 1931: return [4 /*yield*/, import("react-icons/ri")];
                case 1932:
                    RiMapPinTimeLine = (_b.sent()).RiMapPinTimeLine;
                    return [2 /*return*/, RiMapPinTimeLine];
                case 1933: return [4 /*yield*/, import("react-icons/ri")];
                case 1934:
                    RiMapPinUserFill = (_b.sent()).RiMapPinUserFill;
                    return [2 /*return*/, RiMapPinUserFill];
                case 1935: return [4 /*yield*/, import("react-icons/ri")];
                case 1936:
                    RiMapPinUserLine = (_b.sent()).RiMapPinUserLine;
                    return [2 /*return*/, RiMapPinUserLine];
                case 1937: return [4 /*yield*/, import("react-icons/ri")];
                case 1938:
                    RiMotorbikeFill = (_b.sent()).RiMotorbikeFill;
                    return [2 /*return*/, RiMotorbikeFill];
                case 1939: return [4 /*yield*/, import("react-icons/ri")];
                case 1940:
                    RiMotorbikeLine = (_b.sent()).RiMotorbikeLine;
                    return [2 /*return*/, RiMotorbikeLine];
                case 1941: return [4 /*yield*/, import("react-icons/ri")];
                case 1942:
                    RiNavigationFill = (_b.sent()).RiNavigationFill;
                    return [2 /*return*/, RiNavigationFill];
                case 1943: return [4 /*yield*/, import("react-icons/ri")];
                case 1944:
                    RiNavigationLine = (_b.sent()).RiNavigationLine;
                    return [2 /*return*/, RiNavigationLine];
                case 1945: return [4 /*yield*/, import("react-icons/ri")];
                case 1946:
                    RiOilFill = (_b.sent()).RiOilFill;
                    return [2 /*return*/, RiOilFill];
                case 1947: return [4 /*yield*/, import("react-icons/ri")];
                case 1948:
                    RiOilLine = (_b.sent()).RiOilLine;
                    return [2 /*return*/, RiOilLine];
                case 1949: return [4 /*yield*/, import("react-icons/ri")];
                case 1950:
                    RiParkingBoxFill = (_b.sent()).RiParkingBoxFill;
                    return [2 /*return*/, RiParkingBoxFill];
                case 1951: return [4 /*yield*/, import("react-icons/ri")];
                case 1952:
                    RiParkingBoxLine = (_b.sent()).RiParkingBoxLine;
                    return [2 /*return*/, RiParkingBoxLine];
                case 1953: return [4 /*yield*/, import("react-icons/ri")];
                case 1954:
                    RiParkingFill = (_b.sent()).RiParkingFill;
                    return [2 /*return*/, RiParkingFill];
                case 1955: return [4 /*yield*/, import("react-icons/ri")];
                case 1956:
                    RiParkingLine = (_b.sent()).RiParkingLine;
                    return [2 /*return*/, RiParkingLine];
                case 1957: return [4 /*yield*/, import("react-icons/ri")];
                case 1958:
                    RiPassportFill = (_b.sent()).RiPassportFill;
                    return [2 /*return*/, RiPassportFill];
                case 1959: return [4 /*yield*/, import("react-icons/ri")];
                case 1960:
                    RiPassportLine = (_b.sent()).RiPassportLine;
                    return [2 /*return*/, RiPassportLine];
                case 1961: return [4 /*yield*/, import("react-icons/ri")];
                case 1962:
                    RiPinDistanceFill = (_b.sent()).RiPinDistanceFill;
                    return [2 /*return*/, RiPinDistanceFill];
                case 1963: return [4 /*yield*/, import("react-icons/ri")];
                case 1964:
                    RiPinDistanceLine = (_b.sent()).RiPinDistanceLine;
                    return [2 /*return*/, RiPinDistanceLine];
                case 1965: return [4 /*yield*/, import("react-icons/ri")];
                case 1966:
                    RiPlaneFill = (_b.sent()).RiPlaneFill;
                    return [2 /*return*/, RiPlaneFill];
                case 1967: return [4 /*yield*/, import("react-icons/ri")];
                case 1968:
                    RiPlaneLine = (_b.sent()).RiPlaneLine;
                    return [2 /*return*/, RiPlaneLine];
                case 1969: return [4 /*yield*/, import("react-icons/ri")];
                case 1970:
                    RiPlanetFill = (_b.sent()).RiPlanetFill;
                    return [2 /*return*/, RiPlanetFill];
                case 1971: return [4 /*yield*/, import("react-icons/ri")];
                case 1972:
                    RiPlanetLine = (_b.sent()).RiPlanetLine;
                    return [2 /*return*/, RiPlanetLine];
                case 1973: return [4 /*yield*/, import("react-icons/ri")];
                case 1974:
                    RiPoliceCarFill = (_b.sent()).RiPoliceCarFill;
                    return [2 /*return*/, RiPoliceCarFill];
                case 1975: return [4 /*yield*/, import("react-icons/ri")];
                case 1976:
                    RiPoliceCarLine = (_b.sent()).RiPoliceCarLine;
                    return [2 /*return*/, RiPoliceCarLine];
                case 1977: return [4 /*yield*/, import("react-icons/ri")];
                case 1978:
                    RiPushpin2Fill = (_b.sent()).RiPushpin2Fill;
                    return [2 /*return*/, RiPushpin2Fill];
                case 1979: return [4 /*yield*/, import("react-icons/ri")];
                case 1980:
                    RiPushpin2Line = (_b.sent()).RiPushpin2Line;
                    return [2 /*return*/, RiPushpin2Line];
                case 1981: return [4 /*yield*/, import("react-icons/ri")];
                case 1982:
                    RiPushpinFill = (_b.sent()).RiPushpinFill;
                    return [2 /*return*/, RiPushpinFill];
                case 1983: return [4 /*yield*/, import("react-icons/ri")];
                case 1984:
                    RiPushpinLine = (_b.sent()).RiPushpinLine;
                    return [2 /*return*/, RiPushpinLine];
                case 1985: return [4 /*yield*/, import("react-icons/ri")];
                case 1986:
                    RiRidingFill = (_b.sent()).RiRidingFill;
                    return [2 /*return*/, RiRidingFill];
                case 1987: return [4 /*yield*/, import("react-icons/ri")];
                case 1988:
                    RiRidingLine = (_b.sent()).RiRidingLine;
                    return [2 /*return*/, RiRidingLine];
                case 1989: return [4 /*yield*/, import("react-icons/ri")];
                case 1990:
                    RiRoadMapFill = (_b.sent()).RiRoadMapFill;
                    return [2 /*return*/, RiRoadMapFill];
                case 1991: return [4 /*yield*/, import("react-icons/ri")];
                case 1992:
                    RiRoadMapLine = (_b.sent()).RiRoadMapLine;
                    return [2 /*return*/, RiRoadMapLine];
                case 1993: return [4 /*yield*/, import("react-icons/ri")];
                case 1994:
                    RiRoadsterFill = (_b.sent()).RiRoadsterFill;
                    return [2 /*return*/, RiRoadsterFill];
                case 1995: return [4 /*yield*/, import("react-icons/ri")];
                case 1996:
                    RiRoadsterLine = (_b.sent()).RiRoadsterLine;
                    return [2 /*return*/, RiRoadsterLine];
                case 1997: return [4 /*yield*/, import("react-icons/ri")];
                case 1998:
                    RiRocket2Fill = (_b.sent()).RiRocket2Fill;
                    return [2 /*return*/, RiRocket2Fill];
                case 1999: return [4 /*yield*/, import("react-icons/ri")];
                case 2000:
                    RiRocket2Line = (_b.sent()).RiRocket2Line;
                    return [2 /*return*/, RiRocket2Line];
                case 2001: return [2 /*return*/];
            }
        });
    });
}
