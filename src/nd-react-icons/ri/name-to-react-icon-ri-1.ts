import type {IconType} from "react-icons";

import {
    RiFileAddFill,
    RiFileAddLine,
    RiFileChart2Fill,
    RiFileChart2Line,
    RiFileChartFill,
    RiFileChartLine,
    RiFileCheckFill,
    RiFileCheckLine,
    RiFileCloseFill,
    RiFileCloseLine,
    RiFileCloudFill,
    RiFileCloudLine,
    RiFileCodeFill,
    RiFileCodeLine,
    RiFileCopy2Fill,
    RiFileCopy2Line,
    RiFileCopyFill,
    RiFileCopyLine,
    RiFileDamageFill,
    RiFileDamageLine,
    RiFileDownloadFill,
    RiFileDownloadLine,
    RiFileEditFill,
    RiFileEditLine,
    RiFileExcel2Fill,
    RiFileExcel2Line,
    RiFileExcelFill,
    RiFileExcelLine,
    RiFileFill,
    RiFileForbidFill,
    RiFileForbidLine,
    RiFileGifFill,
    RiFileGifLine,
    RiFileHistoryFill,
    RiFileHistoryLine,
    RiFileHwpFill,
    RiFileHwpLine,
    RiFileImageFill,
    RiFileImageLine,
    RiFileInfoFill,
    RiFileInfoLine,
    RiFileLine,
    RiFileList2Fill,
    RiFileList2Line,
    RiFileList3Fill,
    RiFileList3Line,
    RiFileListFill,
    RiFileListLine,
    RiFileLockFill,
    RiFileLockLine,
    RiFileMarkedFill,
    RiFileMarkedLine,
    RiFileMusicFill,
    RiFileMusicLine,
    RiFilePaper2Fill,
    RiFilePaper2Line,
    RiFilePaperFill,
    RiFilePaperLine,
    RiFilePdf2Fill,
    RiFilePdf2Line,
    RiFilePdfFill,
    RiFilePdfLine,
    RiFilePpt2Fill,
    RiFilePpt2Line,
    RiFilePptFill,
    RiFilePptLine,
    RiFileReduceFill,
    RiFileReduceLine,
    RiFileSearchFill,
    RiFileSearchLine,
    RiFileSettingsFill,
    RiFileSettingsLine,
    RiFileShield2Fill,
    RiFileShield2Line,
    RiFileShieldFill,
    RiFileShieldLine,
    RiFileShredFill,
    RiFileShredLine,
    RiFileTextFill,
    RiFileTextLine,
    RiFileTransferFill,
    RiFileTransferLine,
    RiFileUnknowFill,
    RiFileUnknowLine,
    RiFileUploadFill,
    RiFileUploadLine,
    RiFileUserFill,
    RiFileUserLine,
    RiFileVideoFill,
    RiFileVideoLine,
    RiFileWarningFill,
    RiFileWarningLine,
    RiFileWord2Fill,
    RiFileWord2Line,
    RiFileWordFill,
    RiFileWordLine,
    RiFileZipFill,
    RiFileZipLine,
    RiFolder2Fill,
    RiFolder2Line,
    RiFolder3Fill,
    RiFolder3Line,
    RiFolder4Fill,
    RiFolder4Line,
    RiFolder5Fill,
    RiFolder5Line,
    RiFolder6Fill,
    RiFolder6Line,
    RiFolderAddFill,
    RiFolderAddLine,
    RiFolderChart2Fill,
    RiFolderChart2Line,
    RiFolderChartFill,
    RiFolderChartLine,
    RiFolderCheckFill,
    RiFolderCheckLine,
    RiFolderCloseFill,
    RiFolderCloseLine,
    RiFolderCloudFill,
    RiFolderCloudLine,
    RiFolderDownloadFill,
    RiFolderDownloadLine,
    RiFolderFill,
    RiFolderForbidFill,
    RiFolderForbidLine,
    RiFolderHistoryFill,
    RiFolderHistoryLine,
    RiFolderImageFill,
    RiFolderImageLine,
    RiFolderInfoFill,
    RiFolderInfoLine,
    RiFolderKeyholeFill,
    RiFolderKeyholeLine,
    RiFolderLine,
    RiFolderLockFill,
    RiFolderLockLine,
    RiFolderMusicFill,
    RiFolderMusicLine,
    RiFolderOpenFill,
    RiFolderOpenLine,
    RiFolderReceivedFill,
    RiFolderReceivedLine,
    RiFolderReduceFill,
    RiFolderReduceLine,
    RiFolderSettingsFill,
    RiFolderSettingsLine,
    RiFolderSharedFill,
    RiFolderSharedLine,
    RiFolderShield2Fill,
    RiFolderShield2Line,
    RiFolderShieldFill,
    RiFolderShieldLine,
    RiFolderTransferFill,
    RiFolderTransferLine,
    RiFolderUnknowFill,
    RiFolderUnknowLine,
    RiFolderUploadFill,
    RiFolderUploadLine,
    RiFolderUserFill,
    RiFolderUserLine,
    RiFolderVideoFill,
    RiFolderVideoLine,
    RiFolderWarningFill,
    RiFolderWarningLine,
    RiFolderZipFill,
    RiFolderZipLine,
    RiFoldersFill,
    RiFoldersLine,
    RiKeynoteFill,
    RiKeynoteLine,
    RiMarkdownFill,
    RiMarkdownLine,
    RiNewsFill,
    RiNewsLine,
    RiNewspaperFill,
    RiNewspaperLine,
    RiNumbersFill,
    RiNumbersLine,
    RiPagesFill,
    RiPagesLine,
    RiReceiptFill,
    RiReceiptLine,
    RiStickyNote2Fill,
    RiStickyNote2Line,
    RiStickyNoteAddFill,
    RiStickyNoteAddLine,
    RiStickyNoteFill,
    RiStickyNoteLine,
    RiSurveyFill,
    RiSurveyLine,
    RiTaskFill,
    RiTaskLine,
    RiTodoFill,
    RiTodoLine,
    RiAB,
    RiAiGenerate2,
    RiAiGenerateText,
    RiAiGenerate,
    RiAlignBottom,
    RiAlignCenter,
    RiAlignJustify,
    RiAlignLeft,
    RiAlignRight,
    RiAlignTop,
    RiAlignVertically,
    RiAsterisk,
    RiAttachment2,
    RiBold,
    RiBringForward,
    RiBringToFront,
    RiCalendarView,
    RiCarouselView,
    RiCodeBlock,
    RiCodeView,
    RiCustomSize,
    RiDeleteColumn,
    RiDeleteRow,
    RiDoubleQuotesL,
    RiDoubleQuotesR,
    RiDraggable,
    RiDropdownList,
    RiEmphasisCn,
    RiEmphasis,
    RiEnglishInput,
    RiFlowChart,
    RiFocusMode,
    RiFontColor,
    RiFontFamily,
    RiFontMono,
    RiFontSansSerif,
    RiFontSans,
    RiFontSize2,
    RiFontSizeAi,
    RiFontSize,
    RiFormatClear,
    RiFormula,
    RiFunctions,
    RiGalleryView2,
    RiGalleryView,
    RiH1,
    RiH2,
    RiH3,
    RiH4,
    RiH5,
    RiH6,
    RiHand,
    RiHashtag,
    RiHeading,
    RiIndentDecrease,
    RiIndentIncrease,
    RiInfoI,
    RiInputCursorMove,
    RiInputField,
    RiInsertColumnLeft,
    RiInsertColumnRight,
    RiInsertRowBottom,
    RiInsertRowTop,
    RiItalic,
    RiKanbanView2,
    RiKanbanView,
    RiLetterSpacing2,
    RiLineHeight2,
    RiLineHeight,
    RiLinkM,
    RiLinkUnlinkM,
    RiLinkUnlink,
    RiLink,
    RiListCheck2,
    RiListCheck3,
    RiListCheck,
    RiListIndefinite,
    RiListOrdered2,
    RiListOrdered,
    RiListRadio,
    RiListUnordered,
    RiListView,
    RiMergeCellsHorizontal,
    RiMergeCellsVertical,
    RiMindMap,
    RiNodeTree,
    RiNumber0,
    RiNumber1,
    RiNumber2,
    RiNumber3,
    RiNumber4,
    RiNumber5,
    RiNumber6,
    RiNumber7,
    RiNumber8,
    RiNumber9,
    RiOmega,
    RiOrganizationChart,
    RiOverline,
    RiPageSeparator,
    RiParagraph,
    RiPinyinInput,
    RiQuestionMark,
    RiQuoteText,
    RiRoundedCorner,
    RiSendBackward,
    RiSendToBack,
    RiSeparator,
    RiSingleQuotesL,
    RiSingleQuotesR,
    RiSketching,
    RiSlashCommands2,
    RiSlashCommands,
    RiSlideshowView,
    RiSortAlphabetAsc,
    RiSortAlphabetDesc,
    RiSortAsc,
    RiSortDesc,
    RiSortNumberAsc,
    RiSortNumberDesc,
    RiSpace,
    RiSplitCellsHorizontal,
    RiSplitCellsVertical,
    RiSquareRoot,
    RiStackedView,
    RiStrikethrough2,
    RiStrikethrough,
    RiSubscript2,
    RiSubscript,
    RiSuperscript2,
    RiSuperscript,
    RiTable2,
    RiTable3,
    RiTableView,
    RiTextBlock,
    RiTextDirectionL,
    RiTextDirectionR,
    RiTextSnippet,
    RiTextSpacing,
    RiTextWrap,
    RiText,
    RiTimelineView,
    RiTranslate2,
    RiTranslateAi2,
    RiTranslateAi,
    RiTranslate,
    RiUnderline,
    RiWubiInput,
    Ri24HoursFill,
    Ri24HoursLine,
    RiAuctionFill,
    RiAuctionLine,
    RiBankCard2Fill,
    RiBankCard2Line,
    RiBankCardFill,
    RiBankCardLine,
    RiBitCoinFill,
    RiBitCoinLine,
    RiBnbFill,
    RiBnbLine,
    RiBtcFill,
    RiBtcLine,
    RiCashFill,
    RiCashLine,
    RiCoinFill,
    RiCoinLine,
    RiCoinsFill,
    RiCoinsLine,
    RiCopperCoinFill,
    RiCopperCoinLine,
    RiCopperDiamondFill,
    RiCopperDiamondLine,
    RiCoupon2Fill,
    RiCoupon2Line,
    RiCoupon3Fill,
    RiCoupon3Line,
    RiCoupon4Fill,
    RiCoupon4Line,
    RiCoupon5Fill,
    RiCoupon5Line,
    RiCouponFill,
    RiCouponLine,
    RiCurrencyFill,
    RiCurrencyLine,
    RiDiscountPercentFill,
    RiDiscountPercentLine,
    RiEthFill,
    RiEthLine,
    RiExchange2Fill,
    RiExchange2Line,
    RiExchangeBoxFill,
    RiExchangeBoxLine,
    RiExchangeCnyFill,
    RiExchangeCnyLine,
    RiExchangeDollarFill,
    RiExchangeDollarLine,
    RiExchangeFill,
    RiExchangeFundsFill,
    RiExchangeFundsLine,
    RiExchangeLine,
    RiFundsBoxFill,
    RiFundsBoxLine,
    RiFundsFill,
    RiFundsLine,
    RiGift2Fill,
    RiGift2Line,
    RiGiftFill,
    RiGiftLine,
    RiHandCoinFill,
    RiHandCoinLine,
    RiHandHeartFill,
    RiHandHeartLine,
    RiIncreaseDecreaseFill,
    RiIncreaseDecreaseLine,
    RiMoneyCnyBoxFill,
    RiMoneyCnyBoxLine,
    RiMoneyCnyCircleFill,
    RiMoneyCnyCircleLine,
    RiMoneyDollarBoxFill,
    RiMoneyDollarBoxLine,
    RiMoneyDollarCircleFill,
    RiMoneyDollarCircleLine,
    RiMoneyEuroBoxFill,
    RiMoneyEuroBoxLine,
    RiMoneyEuroCircleFill,
    RiMoneyEuroCircleLine,
    RiMoneyPoundBoxFill,
    RiMoneyPoundBoxLine,
    RiMoneyPoundCircleFill,
    RiMoneyPoundCircleLine,
    RiMoneyRupeeCircleFill,
    RiMoneyRupeeCircleLine,
    RiNftFill,
    RiNftLine,
    RiP2pFill,
    RiP2pLine,
    RiPercentFill,
    RiPercentLine,
    RiPriceTag2Fill,
    RiPriceTag2Line,
    RiPriceTag3Fill,
    RiPriceTag3Line,
    RiPriceTagFill,
    RiPriceTagLine,
    RiRedPacketFill,
    RiRedPacketLine,
    RiRefund2Fill,
    RiRefund2Line,
    RiRefundFill,
    RiRefundLine,
    RiSafe2Fill,
    RiSafe2Line,
    RiSafe3Fill,
    RiSafe3Line,
    RiSafeFill,
    RiSafeLine,
    RiSecurePaymentFill,
    RiSecurePaymentLine,
    RiShoppingBag2Fill,
    RiShoppingBag2Line,
    RiShoppingBag3Fill,
    RiShoppingBag3Line,
    RiShoppingBag4Fill,
    RiShoppingBag4Line,
    RiShoppingBagFill,
    RiShoppingBagLine,
    RiShoppingBasket2Fill,
    RiShoppingBasket2Line,
    RiShoppingBasketFill,
    RiShoppingBasketLine,
    RiShoppingCart2Fill,
    RiShoppingCart2Line,
    RiShoppingCartFill,
    RiShoppingCartLine,
    RiStockFill,
    RiStockLine,
    RiSwap2Fill,
    RiSwap2Line,
    RiSwap3Fill,
    RiSwap3Line,
    RiSwapBoxFill,
    RiSwapBoxLine,
    RiSwapFill,
    RiSwapLine,
    RiTicket2Fill,
    RiTicket2Line,
    RiTicketFill,
    RiTicketLine,
    RiTokenSwapFill,
    RiTokenSwapLine,
    RiTrophyFill,
    RiTrophyLine,
    RiVipCrown2Fill,
    RiVipCrown2Line,
    RiVipCrownFill,
    RiVipCrownLine,
    RiVipDiamondFill,
    RiVipDiamondLine,
    RiVipFill,
    RiVipLine,
    RiWallet2Fill,
    RiWallet2Line,
    RiWallet3Fill,
    RiWallet3Line,
    RiWalletFill,
    RiWalletLine,
    RiWaterFlashFill,
    RiWaterFlashLine,
    RiXrpFill,
    RiXrpLine,
    RiXtzFill,
    RiXtzLine,
    RiBeerFill,
    RiBeerLine,
    RiBowlFill,
    RiBowlLine,
    RiBreadFill,
    RiBreadLine,
    RiCake2Fill,
    RiCake2Line,
    RiCake3Fill,
    RiCake3Line,
    RiCakeFill,
    RiCakeLine,
    RiCupFill,
    RiCupLine,
    RiDrinks2Fill,
    RiDrinks2Line,
    RiDrinksFill,
    RiDrinksLine,
    RiGoblet2Fill,
    RiGoblet2Line,
    RiGobletFill,
    RiGobletLine,
    RiKnifeBloodFill,
    RiKnifeBloodLine,
    RiKnifeFill,
    RiKnifeLine,
    RiRestaurant2Fill,
    RiRestaurant2Line,
    RiRestaurantFill,
    RiRestaurantLine,
    RiAedElectrodesFill,
    RiAedElectrodesLine,
    RiAedFill,
    RiAedLine,
    RiBrain2Fill,
    RiBrain2Line,
    RiBrainFill,
    RiBrainLine,
    RiCapsuleFill,
    RiCapsuleLine,
    RiDislikeFill,
    RiDislikeLine,
    RiDnaFill,
    RiDnaLine,
    RiDossierFill,
    RiDossierLine,
    RiDropperFill,
    RiDropperLine,
    RiEmpathizeFill,
    RiEmpathizeLine,
    RiFirstAidKitFill,
    RiFirstAidKitLine,
    RiFlaskFill,
    RiFlaskLine,
    RiHandSanitizerFill,
    RiHandSanitizerLine,
    RiHealthBookFill,
    RiHealthBookLine,
    RiHeart2Fill,
    RiHeart2Line,
    RiHeart3Fill,
    RiHeart3Line,
    RiHeartAdd2Fill,
    RiHeartAdd2Line,
    RiHeartAddFill,
    RiHeartAddLine,
    RiHeartFill,
    RiHeartLine,
    RiHeartPulseFill,
    RiHeartPulseLine,
    RiHeartsFill,
    RiHeartsLine,
    RiInfraredThermometerFill,
    RiInfraredThermometerLine,
    RiLungsFill,
    RiLungsLine,
    RiMedicineBottleFill,
    RiMedicineBottleLine,
    RiMentalHealthFill,
    RiMentalHealthLine,
    RiMicroscopeFill,
    RiMicroscopeLine,
    RiNurseFill,
    RiNurseLine,
    RiPsychotherapyFill,
    RiPsychotherapyLine,
    RiPulseAiFill,
    RiPulseAiLine,
    RiPulseFill,
    RiPulseLine,
    RiRestTimeFill,
    RiRestTimeLine,
    RiStethoscopeFill,
    RiStethoscopeLine,
    RiSurgicalMaskFill,
    RiSurgicalMaskLine,
    RiSyringeFill,
    RiSyringeLine,
    RiTestTubeFill,
    RiTestTubeLine,
    RiThermometerFill,
    RiThermometerLine,
    RiVirusFill,
    RiVirusLine,
    RiZzzFill,
    RiZzzLine,
    RiAlibabaCloudFill,
    RiAlibabaCloudLine,
    RiAlipayFill,
    RiAlipayLine,
    RiAmazonFill,
    RiAmazonLine,
    RiAndroidFill,
    RiAndroidLine,
    RiAngularjsFill,
    RiAngularjsLine,
    RiAnthropicFill,
    RiAnthropicLine,
    RiAppStoreFill,
    RiAppStoreLine,
    RiAppleFill,
    RiAppleLine,
    RiBaiduFill,
    RiBaiduLine,
    RiBardFill,
    RiBardLine,
    RiBehanceFill,
    RiBehanceLine,
    RiBilibiliFill,
    RiBilibiliLine,
    RiBlenderFill,
    RiBlenderLine,
    RiBloggerFill,
    RiBloggerLine,
    RiBlueskyFill,
    RiBlueskyLine,
    RiBootstrapFill,
    RiBootstrapLine,
    RiCentosFill,
    RiCentosLine,
    RiChromeFill,
    RiChromeLine,
    RiClaudeFill,
    RiClaudeLine,
    RiCodepenFill,
    RiCodepenLine,
    RiCopilotFill,
    RiCopilotLine,
    RiCoreosFill,
    RiCoreosLine,
    RiDingdingFill,
    RiDingdingLine,
    RiDiscordFill,
    RiDiscordLine,
    RiDisqusFill,
    RiDisqusLine,
    RiDoubanFill,
    RiDoubanLine,
    RiDribbbleFill,
    RiDribbbleLine,
    RiDriveFill,
    RiDriveLine,
    RiDropboxFill,
    RiDropboxLine,
    RiEdgeFill,
    RiEdgeLine,
    RiEdgeNewFill,
    RiEdgeNewLine,
    RiEvernoteFill,
    RiEvernoteLine,
    RiFacebookBoxFill,
    RiFacebookBoxLine,
    RiFacebookCircleFill,
    RiFacebookCircleLine,
    RiFacebookFill,
    RiFacebookLine,
    RiFediverseFill,
    RiFediverseLine,
    RiFinderFill,
    RiFinderLine,
    RiFirebaseFill,
    RiFirebaseLine,
    RiFirefoxFill,
    RiFirefoxLine,
    RiFlickrFill,
    RiFlickrLine,
    RiFlutterFill,
    RiFlutterLine,
    RiFriendicaFill,
    RiFriendicaLine,
    RiGatsbyFill,
    RiGatsbyLine,
    RiGeminiFill,
    RiGeminiLine,
    RiGithubFill,
    RiGithubLine,
    RiGitlabFill,
    RiGitlabLine,
    RiGoogleFill,
    RiGoogleLine,
    RiGooglePlayFill,
    RiGooglePlayLine,
    RiHonorOfKingsFill,
    RiHonorOfKingsLine,
    RiIeFill,
    RiIeLine,
    RiInstagramFill,
    RiInstagramLine,
    RiInvisionFill,
    RiInvisionLine,
    RiJavaFill,
    RiJavaLine,
    RiKakaoTalkFill,
    RiKakaoTalkLine,
    RiKickFill,
    RiKickLine,
    RiLineFill,
    RiLineLine,
    RiLinkedinBoxFill,
    RiLinkedinBoxLine,
    RiLinkedinFill,
    RiLinkedinLine,
    RiMastercardFill,
    RiMastercardLine,
    RiMastodonFill,
    RiMastodonLine,
    RiMediumFill,
    RiMediumLine,
    RiMessengerFill,
    RiMessengerLine,
    RiMetaFill,
    RiMetaLine,
    RiMicrosoftFill,
    RiMicrosoftLine,
    RiMicrosoftLoopFill,
    RiMicrosoftLoopLine,
    RiMiniProgramFill,
    RiMiniProgramLine,
    RiMixtralFill,
    RiMixtralLine,
    RiNeteaseCloudMusicFill,
    RiNeteaseCloudMusicLine,
    RiNetflixFill,
    RiNetflixLine,
    RiNextjsFill,
    RiNextjsLine,
    RiNodejsFill,
    RiNodejsLine,
    RiNotionFill,
    RiNotionLine,
    RiNpmjsFill,
    RiNpmjsLine,
    RiOpenSourceFill,
    RiOpenSourceLine,
    RiOpenaiFill,
    RiOpenaiLine,
    RiOpenbaseFill,
    RiOpenbaseLine,
    RiOperaFill,
    RiOperaLine,
    RiPatreonFill,
    RiPatreonLine,
    RiPaypalFill,
    RiPaypalLine,
    RiPerplexityFill,
    RiPerplexityLine,
    RiPinterestFill,
    RiPinterestLine,
    RiPixFill,
    RiPixLine,
    RiPixelfedFill,
    RiPixelfedLine,
    RiPlaystationFill,
    RiPlaystationLine,
    RiProductHuntFill,
    RiProductHuntLine,
    RiQqFill,
    RiQqLine,
    RiReactjsFill,
    RiReactjsLine,
    RiRedditFill,
    RiRedditLine,
    RiRemixRunFill,
    RiRemixRunLine,
    RiRemixiconFill,
    RiRemixiconLine,
    RiSafariFill,
    RiSafariLine,
    RiSkypeFill,
    RiSkypeLine,
    RiSlackFill,
    RiSlackLine,
    RiSnapchatFill,
    RiSnapchatLine,
    RiSoundcloudFill,
    RiSoundcloudLine,
    RiSpectrumFill,
    RiSpectrumLine,
    RiSpotifyFill,
    RiSpotifyLine,
    RiStackOverflowFill,
    RiStackOverflowLine,
    RiStackshareFill,
    RiStackshareLine,
    RiSteamFill,
    RiSteamLine,
    RiSupabaseFill,
    RiSupabaseLine,
    RiSvelteFill,
    RiSvelteLine,
    RiSwitchFill,
    RiSwitchLine,
    RiTailwindCssFill,
    RiTailwindCssLine,
    RiTaobaoFill,
    RiTaobaoLine,
    RiTelegram2Fill,
    RiTelegram2Line,
    RiTelegramFill,
    RiTelegramLine,
    RiThreadsFill,
    RiThreadsLine,
    RiTiktokFill,
    RiTiktokLine,
    RiTrelloFill,
    RiTrelloLine,
    RiTumblrFill,
    RiTumblrLine,
    RiTwitchFill,
    RiTwitchLine,
    RiTwitterFill,
    RiTwitterLine,
    RiTwitterXFill,
    RiTwitterXLine,
    RiUbuntuFill,
    RiUbuntuLine,
    RiUnsplashFill,
    RiUnsplashLine,
    RiVercelFill,
    RiVercelLine,
    RiVimeoFill,
    RiVimeoLine,
    RiVisaFill,
    RiVisaLine,
    RiVkFill,
    RiVkLine,
    RiVuejsFill,
    RiVuejsLine,
    RiWebhookFill,
    RiWebhookLine,
    RiWechat2Fill,
    RiWechat2Line,
    RiWechatChannelsFill,
    RiWechatChannelsLine,
    RiWechatFill,
    RiWechatLine,
    RiWechatPayFill,
    RiWechatPayLine,
    RiWeiboFill,
    RiWeiboLine,
    RiWhatsappFill,
    RiWhatsappLine,
    RiWindowsFill,
    RiWindowsLine,
    RiWordpressFill,
    RiWordpressLine,
    RiXboxFill,
    RiXboxLine,
    RiXingFill,
    RiXingLine,
    RiYoutubeFill,
    RiYoutubeLine,
    RiYuqueFill,
    RiYuqueLine,
    RiZcoolFill,
    RiZcoolLine,
    RiZhihuFill,
    RiZhihuLine,
    RiAnchorFill,
    RiAnchorLine,
    RiBarricadeFill,
    RiBarricadeLine,
    RiBikeFill,
    RiBikeLine,
    RiBus2Fill,
    RiBus2Line,
    RiBusFill,
    RiBusLine,
    RiBusWifiFill,
    RiBusWifiLine,
    RiCarFill,
    RiCarLine,
    RiCarWashingFill,
    RiCarWashingLine,
    RiCaravanFill,
    RiCaravanLine,
    RiChargingPile2Fill,
    RiChargingPile2Line,
    RiChargingPileFill,
    RiChargingPileLine,
    RiChinaRailwayFill,
    RiChinaRailwayLine,
    RiCompass2Fill,
    RiCompass2Line,
    RiCompass3Fill,
    RiCompass3Line,
    RiCompass4Fill,
    RiCompass4Line,
    RiCompassDiscoverFill,
    RiCompassDiscoverLine,
    RiCompassFill,
    RiCompassLine,
    RiDirectionFill,
    RiDirectionLine,
    RiEBike2Fill,
    RiEBike2Line,
    RiEBikeFill,
    RiEBikeLine,
    RiEarthFill,
    RiEarthLine,
    RiFlightLandFill,
    RiFlightLandLine,
    RiFlightTakeoffFill,
    RiFlightTakeoffLine,
    RiFootprintFill,
    RiFootprintLine,
    RiGasStationFill,
    RiGasStationLine,
    RiGlobeFill,
    RiGlobeLine,
    RiGuideFill,
    RiGuideLine,
    RiHotelBedFill,
    RiHotelBedLine,
    RiLifebuoyFill,
    RiLifebuoyLine,
    RiLuggageCartFill,
    RiLuggageCartLine,
    RiLuggageDepositFill,
    RiLuggageDepositLine,
    RiMap2Fill,
    RiMap2Line,
    RiMapFill,
    RiMapLine,
    RiMapPin2Fill,
    RiMapPin2Line,
    RiMapPin3Fill,
    RiMapPin3Line,
    RiMapPin4Fill,
    RiMapPin4Line,
    RiMapPin5Fill,
    RiMapPin5Line,
    RiMapPinAddFill,
    RiMapPinAddLine,
    RiMapPinFill,
    RiMapPinLine,
    RiMapPinRangeFill,
    RiMapPinRangeLine,
    RiMapPinTimeFill,
    RiMapPinTimeLine,
    RiMapPinUserFill,
    RiMapPinUserLine,
    RiMotorbikeFill,
    RiMotorbikeLine,
    RiNavigationFill,
    RiNavigationLine,
    RiOilFill,
    RiOilLine,
    RiParkingBoxFill,
    RiParkingBoxLine,
    RiParkingFill,
    RiParkingLine,
    RiPassportFill,
    RiPassportLine,
    RiPinDistanceFill,
    RiPinDistanceLine,
    RiPlaneFill,
    RiPlaneLine,
    RiPlanetFill,
    RiPlanetLine,
    RiPoliceCarFill,
    RiPoliceCarLine,
    RiPushpin2Fill,
    RiPushpin2Line,
    RiPushpinFill,
    RiPushpinLine,
    RiRidingFill,
    RiRidingLine,
    RiRoadMapFill,
    RiRoadMapLine,
    RiRoadsterFill,
    RiRoadsterLine,
    RiRocket2Fill,
    RiRocket2Line,
} from "react-icons/ri"

export function nameToReactIcon_ri_1(iconName: string): IconType | undefined {

    switch(iconName) {
        case "ri:RiFileAddFill":
            return RiFileAddFill;
        case "ri:RiFileAddLine":
            return RiFileAddLine;
        case "ri:RiFileChart2Fill":
            return RiFileChart2Fill;
        case "ri:RiFileChart2Line":
            return RiFileChart2Line;
        case "ri:RiFileChartFill":
            return RiFileChartFill;
        case "ri:RiFileChartLine":
            return RiFileChartLine;
        case "ri:RiFileCheckFill":
            return RiFileCheckFill;
        case "ri:RiFileCheckLine":
            return RiFileCheckLine;
        case "ri:RiFileCloseFill":
            return RiFileCloseFill;
        case "ri:RiFileCloseLine":
            return RiFileCloseLine;
        case "ri:RiFileCloudFill":
            return RiFileCloudFill;
        case "ri:RiFileCloudLine":
            return RiFileCloudLine;
        case "ri:RiFileCodeFill":
            return RiFileCodeFill;
        case "ri:RiFileCodeLine":
            return RiFileCodeLine;
        case "ri:RiFileCopy2Fill":
            return RiFileCopy2Fill;
        case "ri:RiFileCopy2Line":
            return RiFileCopy2Line;
        case "ri:RiFileCopyFill":
            return RiFileCopyFill;
        case "ri:RiFileCopyLine":
            return RiFileCopyLine;
        case "ri:RiFileDamageFill":
            return RiFileDamageFill;
        case "ri:RiFileDamageLine":
            return RiFileDamageLine;
        case "ri:RiFileDownloadFill":
            return RiFileDownloadFill;
        case "ri:RiFileDownloadLine":
            return RiFileDownloadLine;
        case "ri:RiFileEditFill":
            return RiFileEditFill;
        case "ri:RiFileEditLine":
            return RiFileEditLine;
        case "ri:RiFileExcel2Fill":
            return RiFileExcel2Fill;
        case "ri:RiFileExcel2Line":
            return RiFileExcel2Line;
        case "ri:RiFileExcelFill":
            return RiFileExcelFill;
        case "ri:RiFileExcelLine":
            return RiFileExcelLine;
        case "ri:RiFileFill":
            return RiFileFill;
        case "ri:RiFileForbidFill":
            return RiFileForbidFill;
        case "ri:RiFileForbidLine":
            return RiFileForbidLine;
        case "ri:RiFileGifFill":
            return RiFileGifFill;
        case "ri:RiFileGifLine":
            return RiFileGifLine;
        case "ri:RiFileHistoryFill":
            return RiFileHistoryFill;
        case "ri:RiFileHistoryLine":
            return RiFileHistoryLine;
        case "ri:RiFileHwpFill":
            return RiFileHwpFill;
        case "ri:RiFileHwpLine":
            return RiFileHwpLine;
        case "ri:RiFileImageFill":
            return RiFileImageFill;
        case "ri:RiFileImageLine":
            return RiFileImageLine;
        case "ri:RiFileInfoFill":
            return RiFileInfoFill;
        case "ri:RiFileInfoLine":
            return RiFileInfoLine;
        case "ri:RiFileLine":
            return RiFileLine;
        case "ri:RiFileList2Fill":
            return RiFileList2Fill;
        case "ri:RiFileList2Line":
            return RiFileList2Line;
        case "ri:RiFileList3Fill":
            return RiFileList3Fill;
        case "ri:RiFileList3Line":
            return RiFileList3Line;
        case "ri:RiFileListFill":
            return RiFileListFill;
        case "ri:RiFileListLine":
            return RiFileListLine;
        case "ri:RiFileLockFill":
            return RiFileLockFill;
        case "ri:RiFileLockLine":
            return RiFileLockLine;
        case "ri:RiFileMarkedFill":
            return RiFileMarkedFill;
        case "ri:RiFileMarkedLine":
            return RiFileMarkedLine;
        case "ri:RiFileMusicFill":
            return RiFileMusicFill;
        case "ri:RiFileMusicLine":
            return RiFileMusicLine;
        case "ri:RiFilePaper2Fill":
            return RiFilePaper2Fill;
        case "ri:RiFilePaper2Line":
            return RiFilePaper2Line;
        case "ri:RiFilePaperFill":
            return RiFilePaperFill;
        case "ri:RiFilePaperLine":
            return RiFilePaperLine;
        case "ri:RiFilePdf2Fill":
            return RiFilePdf2Fill;
        case "ri:RiFilePdf2Line":
            return RiFilePdf2Line;
        case "ri:RiFilePdfFill":
            return RiFilePdfFill;
        case "ri:RiFilePdfLine":
            return RiFilePdfLine;
        case "ri:RiFilePpt2Fill":
            return RiFilePpt2Fill;
        case "ri:RiFilePpt2Line":
            return RiFilePpt2Line;
        case "ri:RiFilePptFill":
            return RiFilePptFill;
        case "ri:RiFilePptLine":
            return RiFilePptLine;
        case "ri:RiFileReduceFill":
            return RiFileReduceFill;
        case "ri:RiFileReduceLine":
            return RiFileReduceLine;
        case "ri:RiFileSearchFill":
            return RiFileSearchFill;
        case "ri:RiFileSearchLine":
            return RiFileSearchLine;
        case "ri:RiFileSettingsFill":
            return RiFileSettingsFill;
        case "ri:RiFileSettingsLine":
            return RiFileSettingsLine;
        case "ri:RiFileShield2Fill":
            return RiFileShield2Fill;
        case "ri:RiFileShield2Line":
            return RiFileShield2Line;
        case "ri:RiFileShieldFill":
            return RiFileShieldFill;
        case "ri:RiFileShieldLine":
            return RiFileShieldLine;
        case "ri:RiFileShredFill":
            return RiFileShredFill;
        case "ri:RiFileShredLine":
            return RiFileShredLine;
        case "ri:RiFileTextFill":
            return RiFileTextFill;
        case "ri:RiFileTextLine":
            return RiFileTextLine;
        case "ri:RiFileTransferFill":
            return RiFileTransferFill;
        case "ri:RiFileTransferLine":
            return RiFileTransferLine;
        case "ri:RiFileUnknowFill":
            return RiFileUnknowFill;
        case "ri:RiFileUnknowLine":
            return RiFileUnknowLine;
        case "ri:RiFileUploadFill":
            return RiFileUploadFill;
        case "ri:RiFileUploadLine":
            return RiFileUploadLine;
        case "ri:RiFileUserFill":
            return RiFileUserFill;
        case "ri:RiFileUserLine":
            return RiFileUserLine;
        case "ri:RiFileVideoFill":
            return RiFileVideoFill;
        case "ri:RiFileVideoLine":
            return RiFileVideoLine;
        case "ri:RiFileWarningFill":
            return RiFileWarningFill;
        case "ri:RiFileWarningLine":
            return RiFileWarningLine;
        case "ri:RiFileWord2Fill":
            return RiFileWord2Fill;
        case "ri:RiFileWord2Line":
            return RiFileWord2Line;
        case "ri:RiFileWordFill":
            return RiFileWordFill;
        case "ri:RiFileWordLine":
            return RiFileWordLine;
        case "ri:RiFileZipFill":
            return RiFileZipFill;
        case "ri:RiFileZipLine":
            return RiFileZipLine;
        case "ri:RiFolder2Fill":
            return RiFolder2Fill;
        case "ri:RiFolder2Line":
            return RiFolder2Line;
        case "ri:RiFolder3Fill":
            return RiFolder3Fill;
        case "ri:RiFolder3Line":
            return RiFolder3Line;
        case "ri:RiFolder4Fill":
            return RiFolder4Fill;
        case "ri:RiFolder4Line":
            return RiFolder4Line;
        case "ri:RiFolder5Fill":
            return RiFolder5Fill;
        case "ri:RiFolder5Line":
            return RiFolder5Line;
        case "ri:RiFolder6Fill":
            return RiFolder6Fill;
        case "ri:RiFolder6Line":
            return RiFolder6Line;
        case "ri:RiFolderAddFill":
            return RiFolderAddFill;
        case "ri:RiFolderAddLine":
            return RiFolderAddLine;
        case "ri:RiFolderChart2Fill":
            return RiFolderChart2Fill;
        case "ri:RiFolderChart2Line":
            return RiFolderChart2Line;
        case "ri:RiFolderChartFill":
            return RiFolderChartFill;
        case "ri:RiFolderChartLine":
            return RiFolderChartLine;
        case "ri:RiFolderCheckFill":
            return RiFolderCheckFill;
        case "ri:RiFolderCheckLine":
            return RiFolderCheckLine;
        case "ri:RiFolderCloseFill":
            return RiFolderCloseFill;
        case "ri:RiFolderCloseLine":
            return RiFolderCloseLine;
        case "ri:RiFolderCloudFill":
            return RiFolderCloudFill;
        case "ri:RiFolderCloudLine":
            return RiFolderCloudLine;
        case "ri:RiFolderDownloadFill":
            return RiFolderDownloadFill;
        case "ri:RiFolderDownloadLine":
            return RiFolderDownloadLine;
        case "ri:RiFolderFill":
            return RiFolderFill;
        case "ri:RiFolderForbidFill":
            return RiFolderForbidFill;
        case "ri:RiFolderForbidLine":
            return RiFolderForbidLine;
        case "ri:RiFolderHistoryFill":
            return RiFolderHistoryFill;
        case "ri:RiFolderHistoryLine":
            return RiFolderHistoryLine;
        case "ri:RiFolderImageFill":
            return RiFolderImageFill;
        case "ri:RiFolderImageLine":
            return RiFolderImageLine;
        case "ri:RiFolderInfoFill":
            return RiFolderInfoFill;
        case "ri:RiFolderInfoLine":
            return RiFolderInfoLine;
        case "ri:RiFolderKeyholeFill":
            return RiFolderKeyholeFill;
        case "ri:RiFolderKeyholeLine":
            return RiFolderKeyholeLine;
        case "ri:RiFolderLine":
            return RiFolderLine;
        case "ri:RiFolderLockFill":
            return RiFolderLockFill;
        case "ri:RiFolderLockLine":
            return RiFolderLockLine;
        case "ri:RiFolderMusicFill":
            return RiFolderMusicFill;
        case "ri:RiFolderMusicLine":
            return RiFolderMusicLine;
        case "ri:RiFolderOpenFill":
            return RiFolderOpenFill;
        case "ri:RiFolderOpenLine":
            return RiFolderOpenLine;
        case "ri:RiFolderReceivedFill":
            return RiFolderReceivedFill;
        case "ri:RiFolderReceivedLine":
            return RiFolderReceivedLine;
        case "ri:RiFolderReduceFill":
            return RiFolderReduceFill;
        case "ri:RiFolderReduceLine":
            return RiFolderReduceLine;
        case "ri:RiFolderSettingsFill":
            return RiFolderSettingsFill;
        case "ri:RiFolderSettingsLine":
            return RiFolderSettingsLine;
        case "ri:RiFolderSharedFill":
            return RiFolderSharedFill;
        case "ri:RiFolderSharedLine":
            return RiFolderSharedLine;
        case "ri:RiFolderShield2Fill":
            return RiFolderShield2Fill;
        case "ri:RiFolderShield2Line":
            return RiFolderShield2Line;
        case "ri:RiFolderShieldFill":
            return RiFolderShieldFill;
        case "ri:RiFolderShieldLine":
            return RiFolderShieldLine;
        case "ri:RiFolderTransferFill":
            return RiFolderTransferFill;
        case "ri:RiFolderTransferLine":
            return RiFolderTransferLine;
        case "ri:RiFolderUnknowFill":
            return RiFolderUnknowFill;
        case "ri:RiFolderUnknowLine":
            return RiFolderUnknowLine;
        case "ri:RiFolderUploadFill":
            return RiFolderUploadFill;
        case "ri:RiFolderUploadLine":
            return RiFolderUploadLine;
        case "ri:RiFolderUserFill":
            return RiFolderUserFill;
        case "ri:RiFolderUserLine":
            return RiFolderUserLine;
        case "ri:RiFolderVideoFill":
            return RiFolderVideoFill;
        case "ri:RiFolderVideoLine":
            return RiFolderVideoLine;
        case "ri:RiFolderWarningFill":
            return RiFolderWarningFill;
        case "ri:RiFolderWarningLine":
            return RiFolderWarningLine;
        case "ri:RiFolderZipFill":
            return RiFolderZipFill;
        case "ri:RiFolderZipLine":
            return RiFolderZipLine;
        case "ri:RiFoldersFill":
            return RiFoldersFill;
        case "ri:RiFoldersLine":
            return RiFoldersLine;
        case "ri:RiKeynoteFill":
            return RiKeynoteFill;
        case "ri:RiKeynoteLine":
            return RiKeynoteLine;
        case "ri:RiMarkdownFill":
            return RiMarkdownFill;
        case "ri:RiMarkdownLine":
            return RiMarkdownLine;
        case "ri:RiNewsFill":
            return RiNewsFill;
        case "ri:RiNewsLine":
            return RiNewsLine;
        case "ri:RiNewspaperFill":
            return RiNewspaperFill;
        case "ri:RiNewspaperLine":
            return RiNewspaperLine;
        case "ri:RiNumbersFill":
            return RiNumbersFill;
        case "ri:RiNumbersLine":
            return RiNumbersLine;
        case "ri:RiPagesFill":
            return RiPagesFill;
        case "ri:RiPagesLine":
            return RiPagesLine;
        case "ri:RiReceiptFill":
            return RiReceiptFill;
        case "ri:RiReceiptLine":
            return RiReceiptLine;
        case "ri:RiStickyNote2Fill":
            return RiStickyNote2Fill;
        case "ri:RiStickyNote2Line":
            return RiStickyNote2Line;
        case "ri:RiStickyNoteAddFill":
            return RiStickyNoteAddFill;
        case "ri:RiStickyNoteAddLine":
            return RiStickyNoteAddLine;
        case "ri:RiStickyNoteFill":
            return RiStickyNoteFill;
        case "ri:RiStickyNoteLine":
            return RiStickyNoteLine;
        case "ri:RiSurveyFill":
            return RiSurveyFill;
        case "ri:RiSurveyLine":
            return RiSurveyLine;
        case "ri:RiTaskFill":
            return RiTaskFill;
        case "ri:RiTaskLine":
            return RiTaskLine;
        case "ri:RiTodoFill":
            return RiTodoFill;
        case "ri:RiTodoLine":
            return RiTodoLine;
        case "ri:RiAB":
            return RiAB;
        case "ri:RiAiGenerate2":
            return RiAiGenerate2;
        case "ri:RiAiGenerateText":
            return RiAiGenerateText;
        case "ri:RiAiGenerate":
            return RiAiGenerate;
        case "ri:RiAlignBottom":
            return RiAlignBottom;
        case "ri:RiAlignCenter":
            return RiAlignCenter;
        case "ri:RiAlignJustify":
            return RiAlignJustify;
        case "ri:RiAlignLeft":
            return RiAlignLeft;
        case "ri:RiAlignRight":
            return RiAlignRight;
        case "ri:RiAlignTop":
            return RiAlignTop;
        case "ri:RiAlignVertically":
            return RiAlignVertically;
        case "ri:RiAsterisk":
            return RiAsterisk;
        case "ri:RiAttachment2":
            return RiAttachment2;
        case "ri:RiBold":
            return RiBold;
        case "ri:RiBringForward":
            return RiBringForward;
        case "ri:RiBringToFront":
            return RiBringToFront;
        case "ri:RiCalendarView":
            return RiCalendarView;
        case "ri:RiCarouselView":
            return RiCarouselView;
        case "ri:RiCodeBlock":
            return RiCodeBlock;
        case "ri:RiCodeView":
            return RiCodeView;
        case "ri:RiCustomSize":
            return RiCustomSize;
        case "ri:RiDeleteColumn":
            return RiDeleteColumn;
        case "ri:RiDeleteRow":
            return RiDeleteRow;
        case "ri:RiDoubleQuotesL":
            return RiDoubleQuotesL;
        case "ri:RiDoubleQuotesR":
            return RiDoubleQuotesR;
        case "ri:RiDraggable":
            return RiDraggable;
        case "ri:RiDropdownList":
            return RiDropdownList;
        case "ri:RiEmphasisCn":
            return RiEmphasisCn;
        case "ri:RiEmphasis":
            return RiEmphasis;
        case "ri:RiEnglishInput":
            return RiEnglishInput;
        case "ri:RiFlowChart":
            return RiFlowChart;
        case "ri:RiFocusMode":
            return RiFocusMode;
        case "ri:RiFontColor":
            return RiFontColor;
        case "ri:RiFontFamily":
            return RiFontFamily;
        case "ri:RiFontMono":
            return RiFontMono;
        case "ri:RiFontSansSerif":
            return RiFontSansSerif;
        case "ri:RiFontSans":
            return RiFontSans;
        case "ri:RiFontSize2":
            return RiFontSize2;
        case "ri:RiFontSizeAi":
            return RiFontSizeAi;
        case "ri:RiFontSize":
            return RiFontSize;
        case "ri:RiFormatClear":
            return RiFormatClear;
        case "ri:RiFormula":
            return RiFormula;
        case "ri:RiFunctions":
            return RiFunctions;
        case "ri:RiGalleryView2":
            return RiGalleryView2;
        case "ri:RiGalleryView":
            return RiGalleryView;
        case "ri:RiH1":
            return RiH1;
        case "ri:RiH2":
            return RiH2;
        case "ri:RiH3":
            return RiH3;
        case "ri:RiH4":
            return RiH4;
        case "ri:RiH5":
            return RiH5;
        case "ri:RiH6":
            return RiH6;
        case "ri:RiHand":
            return RiHand;
        case "ri:RiHashtag":
            return RiHashtag;
        case "ri:RiHeading":
            return RiHeading;
        case "ri:RiIndentDecrease":
            return RiIndentDecrease;
        case "ri:RiIndentIncrease":
            return RiIndentIncrease;
        case "ri:RiInfoI":
            return RiInfoI;
        case "ri:RiInputCursorMove":
            return RiInputCursorMove;
        case "ri:RiInputField":
            return RiInputField;
        case "ri:RiInsertColumnLeft":
            return RiInsertColumnLeft;
        case "ri:RiInsertColumnRight":
            return RiInsertColumnRight;
        case "ri:RiInsertRowBottom":
            return RiInsertRowBottom;
        case "ri:RiInsertRowTop":
            return RiInsertRowTop;
        case "ri:RiItalic":
            return RiItalic;
        case "ri:RiKanbanView2":
            return RiKanbanView2;
        case "ri:RiKanbanView":
            return RiKanbanView;
        case "ri:RiLetterSpacing2":
            return RiLetterSpacing2;
        case "ri:RiLineHeight2":
            return RiLineHeight2;
        case "ri:RiLineHeight":
            return RiLineHeight;
        case "ri:RiLinkM":
            return RiLinkM;
        case "ri:RiLinkUnlinkM":
            return RiLinkUnlinkM;
        case "ri:RiLinkUnlink":
            return RiLinkUnlink;
        case "ri:RiLink":
            return RiLink;
        case "ri:RiListCheck2":
            return RiListCheck2;
        case "ri:RiListCheck3":
            return RiListCheck3;
        case "ri:RiListCheck":
            return RiListCheck;
        case "ri:RiListIndefinite":
            return RiListIndefinite;
        case "ri:RiListOrdered2":
            return RiListOrdered2;
        case "ri:RiListOrdered":
            return RiListOrdered;
        case "ri:RiListRadio":
            return RiListRadio;
        case "ri:RiListUnordered":
            return RiListUnordered;
        case "ri:RiListView":
            return RiListView;
        case "ri:RiMergeCellsHorizontal":
            return RiMergeCellsHorizontal;
        case "ri:RiMergeCellsVertical":
            return RiMergeCellsVertical;
        case "ri:RiMindMap":
            return RiMindMap;
        case "ri:RiNodeTree":
            return RiNodeTree;
        case "ri:RiNumber0":
            return RiNumber0;
        case "ri:RiNumber1":
            return RiNumber1;
        case "ri:RiNumber2":
            return RiNumber2;
        case "ri:RiNumber3":
            return RiNumber3;
        case "ri:RiNumber4":
            return RiNumber4;
        case "ri:RiNumber5":
            return RiNumber5;
        case "ri:RiNumber6":
            return RiNumber6;
        case "ri:RiNumber7":
            return RiNumber7;
        case "ri:RiNumber8":
            return RiNumber8;
        case "ri:RiNumber9":
            return RiNumber9;
        case "ri:RiOmega":
            return RiOmega;
        case "ri:RiOrganizationChart":
            return RiOrganizationChart;
        case "ri:RiOverline":
            return RiOverline;
        case "ri:RiPageSeparator":
            return RiPageSeparator;
        case "ri:RiParagraph":
            return RiParagraph;
        case "ri:RiPinyinInput":
            return RiPinyinInput;
        case "ri:RiQuestionMark":
            return RiQuestionMark;
        case "ri:RiQuoteText":
            return RiQuoteText;
        case "ri:RiRoundedCorner":
            return RiRoundedCorner;
        case "ri:RiSendBackward":
            return RiSendBackward;
        case "ri:RiSendToBack":
            return RiSendToBack;
        case "ri:RiSeparator":
            return RiSeparator;
        case "ri:RiSingleQuotesL":
            return RiSingleQuotesL;
        case "ri:RiSingleQuotesR":
            return RiSingleQuotesR;
        case "ri:RiSketching":
            return RiSketching;
        case "ri:RiSlashCommands2":
            return RiSlashCommands2;
        case "ri:RiSlashCommands":
            return RiSlashCommands;
        case "ri:RiSlideshowView":
            return RiSlideshowView;
        case "ri:RiSortAlphabetAsc":
            return RiSortAlphabetAsc;
        case "ri:RiSortAlphabetDesc":
            return RiSortAlphabetDesc;
        case "ri:RiSortAsc":
            return RiSortAsc;
        case "ri:RiSortDesc":
            return RiSortDesc;
        case "ri:RiSortNumberAsc":
            return RiSortNumberAsc;
        case "ri:RiSortNumberDesc":
            return RiSortNumberDesc;
        case "ri:RiSpace":
            return RiSpace;
        case "ri:RiSplitCellsHorizontal":
            return RiSplitCellsHorizontal;
        case "ri:RiSplitCellsVertical":
            return RiSplitCellsVertical;
        case "ri:RiSquareRoot":
            return RiSquareRoot;
        case "ri:RiStackedView":
            return RiStackedView;
        case "ri:RiStrikethrough2":
            return RiStrikethrough2;
        case "ri:RiStrikethrough":
            return RiStrikethrough;
        case "ri:RiSubscript2":
            return RiSubscript2;
        case "ri:RiSubscript":
            return RiSubscript;
        case "ri:RiSuperscript2":
            return RiSuperscript2;
        case "ri:RiSuperscript":
            return RiSuperscript;
        case "ri:RiTable2":
            return RiTable2;
        case "ri:RiTable3":
            return RiTable3;
        case "ri:RiTableView":
            return RiTableView;
        case "ri:RiTextBlock":
            return RiTextBlock;
        case "ri:RiTextDirectionL":
            return RiTextDirectionL;
        case "ri:RiTextDirectionR":
            return RiTextDirectionR;
        case "ri:RiTextSnippet":
            return RiTextSnippet;
        case "ri:RiTextSpacing":
            return RiTextSpacing;
        case "ri:RiTextWrap":
            return RiTextWrap;
        case "ri:RiText":
            return RiText;
        case "ri:RiTimelineView":
            return RiTimelineView;
        case "ri:RiTranslate2":
            return RiTranslate2;
        case "ri:RiTranslateAi2":
            return RiTranslateAi2;
        case "ri:RiTranslateAi":
            return RiTranslateAi;
        case "ri:RiTranslate":
            return RiTranslate;
        case "ri:RiUnderline":
            return RiUnderline;
        case "ri:RiWubiInput":
            return RiWubiInput;
        case "ri:Ri24HoursFill":
            return Ri24HoursFill;
        case "ri:Ri24HoursLine":
            return Ri24HoursLine;
        case "ri:RiAuctionFill":
            return RiAuctionFill;
        case "ri:RiAuctionLine":
            return RiAuctionLine;
        case "ri:RiBankCard2Fill":
            return RiBankCard2Fill;
        case "ri:RiBankCard2Line":
            return RiBankCard2Line;
        case "ri:RiBankCardFill":
            return RiBankCardFill;
        case "ri:RiBankCardLine":
            return RiBankCardLine;
        case "ri:RiBitCoinFill":
            return RiBitCoinFill;
        case "ri:RiBitCoinLine":
            return RiBitCoinLine;
        case "ri:RiBnbFill":
            return RiBnbFill;
        case "ri:RiBnbLine":
            return RiBnbLine;
        case "ri:RiBtcFill":
            return RiBtcFill;
        case "ri:RiBtcLine":
            return RiBtcLine;
        case "ri:RiCashFill":
            return RiCashFill;
        case "ri:RiCashLine":
            return RiCashLine;
        case "ri:RiCoinFill":
            return RiCoinFill;
        case "ri:RiCoinLine":
            return RiCoinLine;
        case "ri:RiCoinsFill":
            return RiCoinsFill;
        case "ri:RiCoinsLine":
            return RiCoinsLine;
        case "ri:RiCopperCoinFill":
            return RiCopperCoinFill;
        case "ri:RiCopperCoinLine":
            return RiCopperCoinLine;
        case "ri:RiCopperDiamondFill":
            return RiCopperDiamondFill;
        case "ri:RiCopperDiamondLine":
            return RiCopperDiamondLine;
        case "ri:RiCoupon2Fill":
            return RiCoupon2Fill;
        case "ri:RiCoupon2Line":
            return RiCoupon2Line;
        case "ri:RiCoupon3Fill":
            return RiCoupon3Fill;
        case "ri:RiCoupon3Line":
            return RiCoupon3Line;
        case "ri:RiCoupon4Fill":
            return RiCoupon4Fill;
        case "ri:RiCoupon4Line":
            return RiCoupon4Line;
        case "ri:RiCoupon5Fill":
            return RiCoupon5Fill;
        case "ri:RiCoupon5Line":
            return RiCoupon5Line;
        case "ri:RiCouponFill":
            return RiCouponFill;
        case "ri:RiCouponLine":
            return RiCouponLine;
        case "ri:RiCurrencyFill":
            return RiCurrencyFill;
        case "ri:RiCurrencyLine":
            return RiCurrencyLine;
        case "ri:RiDiscountPercentFill":
            return RiDiscountPercentFill;
        case "ri:RiDiscountPercentLine":
            return RiDiscountPercentLine;
        case "ri:RiEthFill":
            return RiEthFill;
        case "ri:RiEthLine":
            return RiEthLine;
        case "ri:RiExchange2Fill":
            return RiExchange2Fill;
        case "ri:RiExchange2Line":
            return RiExchange2Line;
        case "ri:RiExchangeBoxFill":
            return RiExchangeBoxFill;
        case "ri:RiExchangeBoxLine":
            return RiExchangeBoxLine;
        case "ri:RiExchangeCnyFill":
            return RiExchangeCnyFill;
        case "ri:RiExchangeCnyLine":
            return RiExchangeCnyLine;
        case "ri:RiExchangeDollarFill":
            return RiExchangeDollarFill;
        case "ri:RiExchangeDollarLine":
            return RiExchangeDollarLine;
        case "ri:RiExchangeFill":
            return RiExchangeFill;
        case "ri:RiExchangeFundsFill":
            return RiExchangeFundsFill;
        case "ri:RiExchangeFundsLine":
            return RiExchangeFundsLine;
        case "ri:RiExchangeLine":
            return RiExchangeLine;
        case "ri:RiFundsBoxFill":
            return RiFundsBoxFill;
        case "ri:RiFundsBoxLine":
            return RiFundsBoxLine;
        case "ri:RiFundsFill":
            return RiFundsFill;
        case "ri:RiFundsLine":
            return RiFundsLine;
        case "ri:RiGift2Fill":
            return RiGift2Fill;
        case "ri:RiGift2Line":
            return RiGift2Line;
        case "ri:RiGiftFill":
            return RiGiftFill;
        case "ri:RiGiftLine":
            return RiGiftLine;
        case "ri:RiHandCoinFill":
            return RiHandCoinFill;
        case "ri:RiHandCoinLine":
            return RiHandCoinLine;
        case "ri:RiHandHeartFill":
            return RiHandHeartFill;
        case "ri:RiHandHeartLine":
            return RiHandHeartLine;
        case "ri:RiIncreaseDecreaseFill":
            return RiIncreaseDecreaseFill;
        case "ri:RiIncreaseDecreaseLine":
            return RiIncreaseDecreaseLine;
        case "ri:RiMoneyCnyBoxFill":
            return RiMoneyCnyBoxFill;
        case "ri:RiMoneyCnyBoxLine":
            return RiMoneyCnyBoxLine;
        case "ri:RiMoneyCnyCircleFill":
            return RiMoneyCnyCircleFill;
        case "ri:RiMoneyCnyCircleLine":
            return RiMoneyCnyCircleLine;
        case "ri:RiMoneyDollarBoxFill":
            return RiMoneyDollarBoxFill;
        case "ri:RiMoneyDollarBoxLine":
            return RiMoneyDollarBoxLine;
        case "ri:RiMoneyDollarCircleFill":
            return RiMoneyDollarCircleFill;
        case "ri:RiMoneyDollarCircleLine":
            return RiMoneyDollarCircleLine;
        case "ri:RiMoneyEuroBoxFill":
            return RiMoneyEuroBoxFill;
        case "ri:RiMoneyEuroBoxLine":
            return RiMoneyEuroBoxLine;
        case "ri:RiMoneyEuroCircleFill":
            return RiMoneyEuroCircleFill;
        case "ri:RiMoneyEuroCircleLine":
            return RiMoneyEuroCircleLine;
        case "ri:RiMoneyPoundBoxFill":
            return RiMoneyPoundBoxFill;
        case "ri:RiMoneyPoundBoxLine":
            return RiMoneyPoundBoxLine;
        case "ri:RiMoneyPoundCircleFill":
            return RiMoneyPoundCircleFill;
        case "ri:RiMoneyPoundCircleLine":
            return RiMoneyPoundCircleLine;
        case "ri:RiMoneyRupeeCircleFill":
            return RiMoneyRupeeCircleFill;
        case "ri:RiMoneyRupeeCircleLine":
            return RiMoneyRupeeCircleLine;
        case "ri:RiNftFill":
            return RiNftFill;
        case "ri:RiNftLine":
            return RiNftLine;
        case "ri:RiP2pFill":
            return RiP2pFill;
        case "ri:RiP2pLine":
            return RiP2pLine;
        case "ri:RiPercentFill":
            return RiPercentFill;
        case "ri:RiPercentLine":
            return RiPercentLine;
        case "ri:RiPriceTag2Fill":
            return RiPriceTag2Fill;
        case "ri:RiPriceTag2Line":
            return RiPriceTag2Line;
        case "ri:RiPriceTag3Fill":
            return RiPriceTag3Fill;
        case "ri:RiPriceTag3Line":
            return RiPriceTag3Line;
        case "ri:RiPriceTagFill":
            return RiPriceTagFill;
        case "ri:RiPriceTagLine":
            return RiPriceTagLine;
        case "ri:RiRedPacketFill":
            return RiRedPacketFill;
        case "ri:RiRedPacketLine":
            return RiRedPacketLine;
        case "ri:RiRefund2Fill":
            return RiRefund2Fill;
        case "ri:RiRefund2Line":
            return RiRefund2Line;
        case "ri:RiRefundFill":
            return RiRefundFill;
        case "ri:RiRefundLine":
            return RiRefundLine;
        case "ri:RiSafe2Fill":
            return RiSafe2Fill;
        case "ri:RiSafe2Line":
            return RiSafe2Line;
        case "ri:RiSafe3Fill":
            return RiSafe3Fill;
        case "ri:RiSafe3Line":
            return RiSafe3Line;
        case "ri:RiSafeFill":
            return RiSafeFill;
        case "ri:RiSafeLine":
            return RiSafeLine;
        case "ri:RiSecurePaymentFill":
            return RiSecurePaymentFill;
        case "ri:RiSecurePaymentLine":
            return RiSecurePaymentLine;
        case "ri:RiShoppingBag2Fill":
            return RiShoppingBag2Fill;
        case "ri:RiShoppingBag2Line":
            return RiShoppingBag2Line;
        case "ri:RiShoppingBag3Fill":
            return RiShoppingBag3Fill;
        case "ri:RiShoppingBag3Line":
            return RiShoppingBag3Line;
        case "ri:RiShoppingBag4Fill":
            return RiShoppingBag4Fill;
        case "ri:RiShoppingBag4Line":
            return RiShoppingBag4Line;
        case "ri:RiShoppingBagFill":
            return RiShoppingBagFill;
        case "ri:RiShoppingBagLine":
            return RiShoppingBagLine;
        case "ri:RiShoppingBasket2Fill":
            return RiShoppingBasket2Fill;
        case "ri:RiShoppingBasket2Line":
            return RiShoppingBasket2Line;
        case "ri:RiShoppingBasketFill":
            return RiShoppingBasketFill;
        case "ri:RiShoppingBasketLine":
            return RiShoppingBasketLine;
        case "ri:RiShoppingCart2Fill":
            return RiShoppingCart2Fill;
        case "ri:RiShoppingCart2Line":
            return RiShoppingCart2Line;
        case "ri:RiShoppingCartFill":
            return RiShoppingCartFill;
        case "ri:RiShoppingCartLine":
            return RiShoppingCartLine;
        case "ri:RiStockFill":
            return RiStockFill;
        case "ri:RiStockLine":
            return RiStockLine;
        case "ri:RiSwap2Fill":
            return RiSwap2Fill;
        case "ri:RiSwap2Line":
            return RiSwap2Line;
        case "ri:RiSwap3Fill":
            return RiSwap3Fill;
        case "ri:RiSwap3Line":
            return RiSwap3Line;
        case "ri:RiSwapBoxFill":
            return RiSwapBoxFill;
        case "ri:RiSwapBoxLine":
            return RiSwapBoxLine;
        case "ri:RiSwapFill":
            return RiSwapFill;
        case "ri:RiSwapLine":
            return RiSwapLine;
        case "ri:RiTicket2Fill":
            return RiTicket2Fill;
        case "ri:RiTicket2Line":
            return RiTicket2Line;
        case "ri:RiTicketFill":
            return RiTicketFill;
        case "ri:RiTicketLine":
            return RiTicketLine;
        case "ri:RiTokenSwapFill":
            return RiTokenSwapFill;
        case "ri:RiTokenSwapLine":
            return RiTokenSwapLine;
        case "ri:RiTrophyFill":
            return RiTrophyFill;
        case "ri:RiTrophyLine":
            return RiTrophyLine;
        case "ri:RiVipCrown2Fill":
            return RiVipCrown2Fill;
        case "ri:RiVipCrown2Line":
            return RiVipCrown2Line;
        case "ri:RiVipCrownFill":
            return RiVipCrownFill;
        case "ri:RiVipCrownLine":
            return RiVipCrownLine;
        case "ri:RiVipDiamondFill":
            return RiVipDiamondFill;
        case "ri:RiVipDiamondLine":
            return RiVipDiamondLine;
        case "ri:RiVipFill":
            return RiVipFill;
        case "ri:RiVipLine":
            return RiVipLine;
        case "ri:RiWallet2Fill":
            return RiWallet2Fill;
        case "ri:RiWallet2Line":
            return RiWallet2Line;
        case "ri:RiWallet3Fill":
            return RiWallet3Fill;
        case "ri:RiWallet3Line":
            return RiWallet3Line;
        case "ri:RiWalletFill":
            return RiWalletFill;
        case "ri:RiWalletLine":
            return RiWalletLine;
        case "ri:RiWaterFlashFill":
            return RiWaterFlashFill;
        case "ri:RiWaterFlashLine":
            return RiWaterFlashLine;
        case "ri:RiXrpFill":
            return RiXrpFill;
        case "ri:RiXrpLine":
            return RiXrpLine;
        case "ri:RiXtzFill":
            return RiXtzFill;
        case "ri:RiXtzLine":
            return RiXtzLine;
        case "ri:RiBeerFill":
            return RiBeerFill;
        case "ri:RiBeerLine":
            return RiBeerLine;
        case "ri:RiBowlFill":
            return RiBowlFill;
        case "ri:RiBowlLine":
            return RiBowlLine;
        case "ri:RiBreadFill":
            return RiBreadFill;
        case "ri:RiBreadLine":
            return RiBreadLine;
        case "ri:RiCake2Fill":
            return RiCake2Fill;
        case "ri:RiCake2Line":
            return RiCake2Line;
        case "ri:RiCake3Fill":
            return RiCake3Fill;
        case "ri:RiCake3Line":
            return RiCake3Line;
        case "ri:RiCakeFill":
            return RiCakeFill;
        case "ri:RiCakeLine":
            return RiCakeLine;
        case "ri:RiCupFill":
            return RiCupFill;
        case "ri:RiCupLine":
            return RiCupLine;
        case "ri:RiDrinks2Fill":
            return RiDrinks2Fill;
        case "ri:RiDrinks2Line":
            return RiDrinks2Line;
        case "ri:RiDrinksFill":
            return RiDrinksFill;
        case "ri:RiDrinksLine":
            return RiDrinksLine;
        case "ri:RiGoblet2Fill":
            return RiGoblet2Fill;
        case "ri:RiGoblet2Line":
            return RiGoblet2Line;
        case "ri:RiGobletFill":
            return RiGobletFill;
        case "ri:RiGobletLine":
            return RiGobletLine;
        case "ri:RiKnifeBloodFill":
            return RiKnifeBloodFill;
        case "ri:RiKnifeBloodLine":
            return RiKnifeBloodLine;
        case "ri:RiKnifeFill":
            return RiKnifeFill;
        case "ri:RiKnifeLine":
            return RiKnifeLine;
        case "ri:RiRestaurant2Fill":
            return RiRestaurant2Fill;
        case "ri:RiRestaurant2Line":
            return RiRestaurant2Line;
        case "ri:RiRestaurantFill":
            return RiRestaurantFill;
        case "ri:RiRestaurantLine":
            return RiRestaurantLine;
        case "ri:RiAedElectrodesFill":
            return RiAedElectrodesFill;
        case "ri:RiAedElectrodesLine":
            return RiAedElectrodesLine;
        case "ri:RiAedFill":
            return RiAedFill;
        case "ri:RiAedLine":
            return RiAedLine;
        case "ri:RiBrain2Fill":
            return RiBrain2Fill;
        case "ri:RiBrain2Line":
            return RiBrain2Line;
        case "ri:RiBrainFill":
            return RiBrainFill;
        case "ri:RiBrainLine":
            return RiBrainLine;
        case "ri:RiCapsuleFill":
            return RiCapsuleFill;
        case "ri:RiCapsuleLine":
            return RiCapsuleLine;
        case "ri:RiDislikeFill":
            return RiDislikeFill;
        case "ri:RiDislikeLine":
            return RiDislikeLine;
        case "ri:RiDnaFill":
            return RiDnaFill;
        case "ri:RiDnaLine":
            return RiDnaLine;
        case "ri:RiDossierFill":
            return RiDossierFill;
        case "ri:RiDossierLine":
            return RiDossierLine;
        case "ri:RiDropperFill":
            return RiDropperFill;
        case "ri:RiDropperLine":
            return RiDropperLine;
        case "ri:RiEmpathizeFill":
            return RiEmpathizeFill;
        case "ri:RiEmpathizeLine":
            return RiEmpathizeLine;
        case "ri:RiFirstAidKitFill":
            return RiFirstAidKitFill;
        case "ri:RiFirstAidKitLine":
            return RiFirstAidKitLine;
        case "ri:RiFlaskFill":
            return RiFlaskFill;
        case "ri:RiFlaskLine":
            return RiFlaskLine;
        case "ri:RiHandSanitizerFill":
            return RiHandSanitizerFill;
        case "ri:RiHandSanitizerLine":
            return RiHandSanitizerLine;
        case "ri:RiHealthBookFill":
            return RiHealthBookFill;
        case "ri:RiHealthBookLine":
            return RiHealthBookLine;
        case "ri:RiHeart2Fill":
            return RiHeart2Fill;
        case "ri:RiHeart2Line":
            return RiHeart2Line;
        case "ri:RiHeart3Fill":
            return RiHeart3Fill;
        case "ri:RiHeart3Line":
            return RiHeart3Line;
        case "ri:RiHeartAdd2Fill":
            return RiHeartAdd2Fill;
        case "ri:RiHeartAdd2Line":
            return RiHeartAdd2Line;
        case "ri:RiHeartAddFill":
            return RiHeartAddFill;
        case "ri:RiHeartAddLine":
            return RiHeartAddLine;
        case "ri:RiHeartFill":
            return RiHeartFill;
        case "ri:RiHeartLine":
            return RiHeartLine;
        case "ri:RiHeartPulseFill":
            return RiHeartPulseFill;
        case "ri:RiHeartPulseLine":
            return RiHeartPulseLine;
        case "ri:RiHeartsFill":
            return RiHeartsFill;
        case "ri:RiHeartsLine":
            return RiHeartsLine;
        case "ri:RiInfraredThermometerFill":
            return RiInfraredThermometerFill;
        case "ri:RiInfraredThermometerLine":
            return RiInfraredThermometerLine;
        case "ri:RiLungsFill":
            return RiLungsFill;
        case "ri:RiLungsLine":
            return RiLungsLine;
        case "ri:RiMedicineBottleFill":
            return RiMedicineBottleFill;
        case "ri:RiMedicineBottleLine":
            return RiMedicineBottleLine;
        case "ri:RiMentalHealthFill":
            return RiMentalHealthFill;
        case "ri:RiMentalHealthLine":
            return RiMentalHealthLine;
        case "ri:RiMicroscopeFill":
            return RiMicroscopeFill;
        case "ri:RiMicroscopeLine":
            return RiMicroscopeLine;
        case "ri:RiNurseFill":
            return RiNurseFill;
        case "ri:RiNurseLine":
            return RiNurseLine;
        case "ri:RiPsychotherapyFill":
            return RiPsychotherapyFill;
        case "ri:RiPsychotherapyLine":
            return RiPsychotherapyLine;
        case "ri:RiPulseAiFill":
            return RiPulseAiFill;
        case "ri:RiPulseAiLine":
            return RiPulseAiLine;
        case "ri:RiPulseFill":
            return RiPulseFill;
        case "ri:RiPulseLine":
            return RiPulseLine;
        case "ri:RiRestTimeFill":
            return RiRestTimeFill;
        case "ri:RiRestTimeLine":
            return RiRestTimeLine;
        case "ri:RiStethoscopeFill":
            return RiStethoscopeFill;
        case "ri:RiStethoscopeLine":
            return RiStethoscopeLine;
        case "ri:RiSurgicalMaskFill":
            return RiSurgicalMaskFill;
        case "ri:RiSurgicalMaskLine":
            return RiSurgicalMaskLine;
        case "ri:RiSyringeFill":
            return RiSyringeFill;
        case "ri:RiSyringeLine":
            return RiSyringeLine;
        case "ri:RiTestTubeFill":
            return RiTestTubeFill;
        case "ri:RiTestTubeLine":
            return RiTestTubeLine;
        case "ri:RiThermometerFill":
            return RiThermometerFill;
        case "ri:RiThermometerLine":
            return RiThermometerLine;
        case "ri:RiVirusFill":
            return RiVirusFill;
        case "ri:RiVirusLine":
            return RiVirusLine;
        case "ri:RiZzzFill":
            return RiZzzFill;
        case "ri:RiZzzLine":
            return RiZzzLine;
        case "ri:RiAlibabaCloudFill":
            return RiAlibabaCloudFill;
        case "ri:RiAlibabaCloudLine":
            return RiAlibabaCloudLine;
        case "ri:RiAlipayFill":
            return RiAlipayFill;
        case "ri:RiAlipayLine":
            return RiAlipayLine;
        case "ri:RiAmazonFill":
            return RiAmazonFill;
        case "ri:RiAmazonLine":
            return RiAmazonLine;
        case "ri:RiAndroidFill":
            return RiAndroidFill;
        case "ri:RiAndroidLine":
            return RiAndroidLine;
        case "ri:RiAngularjsFill":
            return RiAngularjsFill;
        case "ri:RiAngularjsLine":
            return RiAngularjsLine;
        case "ri:RiAnthropicFill":
            return RiAnthropicFill;
        case "ri:RiAnthropicLine":
            return RiAnthropicLine;
        case "ri:RiAppStoreFill":
            return RiAppStoreFill;
        case "ri:RiAppStoreLine":
            return RiAppStoreLine;
        case "ri:RiAppleFill":
            return RiAppleFill;
        case "ri:RiAppleLine":
            return RiAppleLine;
        case "ri:RiBaiduFill":
            return RiBaiduFill;
        case "ri:RiBaiduLine":
            return RiBaiduLine;
        case "ri:RiBardFill":
            return RiBardFill;
        case "ri:RiBardLine":
            return RiBardLine;
        case "ri:RiBehanceFill":
            return RiBehanceFill;
        case "ri:RiBehanceLine":
            return RiBehanceLine;
        case "ri:RiBilibiliFill":
            return RiBilibiliFill;
        case "ri:RiBilibiliLine":
            return RiBilibiliLine;
        case "ri:RiBlenderFill":
            return RiBlenderFill;
        case "ri:RiBlenderLine":
            return RiBlenderLine;
        case "ri:RiBloggerFill":
            return RiBloggerFill;
        case "ri:RiBloggerLine":
            return RiBloggerLine;
        case "ri:RiBlueskyFill":
            return RiBlueskyFill;
        case "ri:RiBlueskyLine":
            return RiBlueskyLine;
        case "ri:RiBootstrapFill":
            return RiBootstrapFill;
        case "ri:RiBootstrapLine":
            return RiBootstrapLine;
        case "ri:RiCentosFill":
            return RiCentosFill;
        case "ri:RiCentosLine":
            return RiCentosLine;
        case "ri:RiChromeFill":
            return RiChromeFill;
        case "ri:RiChromeLine":
            return RiChromeLine;
        case "ri:RiClaudeFill":
            return RiClaudeFill;
        case "ri:RiClaudeLine":
            return RiClaudeLine;
        case "ri:RiCodepenFill":
            return RiCodepenFill;
        case "ri:RiCodepenLine":
            return RiCodepenLine;
        case "ri:RiCopilotFill":
            return RiCopilotFill;
        case "ri:RiCopilotLine":
            return RiCopilotLine;
        case "ri:RiCoreosFill":
            return RiCoreosFill;
        case "ri:RiCoreosLine":
            return RiCoreosLine;
        case "ri:RiDingdingFill":
            return RiDingdingFill;
        case "ri:RiDingdingLine":
            return RiDingdingLine;
        case "ri:RiDiscordFill":
            return RiDiscordFill;
        case "ri:RiDiscordLine":
            return RiDiscordLine;
        case "ri:RiDisqusFill":
            return RiDisqusFill;
        case "ri:RiDisqusLine":
            return RiDisqusLine;
        case "ri:RiDoubanFill":
            return RiDoubanFill;
        case "ri:RiDoubanLine":
            return RiDoubanLine;
        case "ri:RiDribbbleFill":
            return RiDribbbleFill;
        case "ri:RiDribbbleLine":
            return RiDribbbleLine;
        case "ri:RiDriveFill":
            return RiDriveFill;
        case "ri:RiDriveLine":
            return RiDriveLine;
        case "ri:RiDropboxFill":
            return RiDropboxFill;
        case "ri:RiDropboxLine":
            return RiDropboxLine;
        case "ri:RiEdgeFill":
            return RiEdgeFill;
        case "ri:RiEdgeLine":
            return RiEdgeLine;
        case "ri:RiEdgeNewFill":
            return RiEdgeNewFill;
        case "ri:RiEdgeNewLine":
            return RiEdgeNewLine;
        case "ri:RiEvernoteFill":
            return RiEvernoteFill;
        case "ri:RiEvernoteLine":
            return RiEvernoteLine;
        case "ri:RiFacebookBoxFill":
            return RiFacebookBoxFill;
        case "ri:RiFacebookBoxLine":
            return RiFacebookBoxLine;
        case "ri:RiFacebookCircleFill":
            return RiFacebookCircleFill;
        case "ri:RiFacebookCircleLine":
            return RiFacebookCircleLine;
        case "ri:RiFacebookFill":
            return RiFacebookFill;
        case "ri:RiFacebookLine":
            return RiFacebookLine;
        case "ri:RiFediverseFill":
            return RiFediverseFill;
        case "ri:RiFediverseLine":
            return RiFediverseLine;
        case "ri:RiFinderFill":
            return RiFinderFill;
        case "ri:RiFinderLine":
            return RiFinderLine;
        case "ri:RiFirebaseFill":
            return RiFirebaseFill;
        case "ri:RiFirebaseLine":
            return RiFirebaseLine;
        case "ri:RiFirefoxFill":
            return RiFirefoxFill;
        case "ri:RiFirefoxLine":
            return RiFirefoxLine;
        case "ri:RiFlickrFill":
            return RiFlickrFill;
        case "ri:RiFlickrLine":
            return RiFlickrLine;
        case "ri:RiFlutterFill":
            return RiFlutterFill;
        case "ri:RiFlutterLine":
            return RiFlutterLine;
        case "ri:RiFriendicaFill":
            return RiFriendicaFill;
        case "ri:RiFriendicaLine":
            return RiFriendicaLine;
        case "ri:RiGatsbyFill":
            return RiGatsbyFill;
        case "ri:RiGatsbyLine":
            return RiGatsbyLine;
        case "ri:RiGeminiFill":
            return RiGeminiFill;
        case "ri:RiGeminiLine":
            return RiGeminiLine;
        case "ri:RiGithubFill":
            return RiGithubFill;
        case "ri:RiGithubLine":
            return RiGithubLine;
        case "ri:RiGitlabFill":
            return RiGitlabFill;
        case "ri:RiGitlabLine":
            return RiGitlabLine;
        case "ri:RiGoogleFill":
            return RiGoogleFill;
        case "ri:RiGoogleLine":
            return RiGoogleLine;
        case "ri:RiGooglePlayFill":
            return RiGooglePlayFill;
        case "ri:RiGooglePlayLine":
            return RiGooglePlayLine;
        case "ri:RiHonorOfKingsFill":
            return RiHonorOfKingsFill;
        case "ri:RiHonorOfKingsLine":
            return RiHonorOfKingsLine;
        case "ri:RiIeFill":
            return RiIeFill;
        case "ri:RiIeLine":
            return RiIeLine;
        case "ri:RiInstagramFill":
            return RiInstagramFill;
        case "ri:RiInstagramLine":
            return RiInstagramLine;
        case "ri:RiInvisionFill":
            return RiInvisionFill;
        case "ri:RiInvisionLine":
            return RiInvisionLine;
        case "ri:RiJavaFill":
            return RiJavaFill;
        case "ri:RiJavaLine":
            return RiJavaLine;
        case "ri:RiKakaoTalkFill":
            return RiKakaoTalkFill;
        case "ri:RiKakaoTalkLine":
            return RiKakaoTalkLine;
        case "ri:RiKickFill":
            return RiKickFill;
        case "ri:RiKickLine":
            return RiKickLine;
        case "ri:RiLineFill":
            return RiLineFill;
        case "ri:RiLineLine":
            return RiLineLine;
        case "ri:RiLinkedinBoxFill":
            return RiLinkedinBoxFill;
        case "ri:RiLinkedinBoxLine":
            return RiLinkedinBoxLine;
        case "ri:RiLinkedinFill":
            return RiLinkedinFill;
        case "ri:RiLinkedinLine":
            return RiLinkedinLine;
        case "ri:RiMastercardFill":
            return RiMastercardFill;
        case "ri:RiMastercardLine":
            return RiMastercardLine;
        case "ri:RiMastodonFill":
            return RiMastodonFill;
        case "ri:RiMastodonLine":
            return RiMastodonLine;
        case "ri:RiMediumFill":
            return RiMediumFill;
        case "ri:RiMediumLine":
            return RiMediumLine;
        case "ri:RiMessengerFill":
            return RiMessengerFill;
        case "ri:RiMessengerLine":
            return RiMessengerLine;
        case "ri:RiMetaFill":
            return RiMetaFill;
        case "ri:RiMetaLine":
            return RiMetaLine;
        case "ri:RiMicrosoftFill":
            return RiMicrosoftFill;
        case "ri:RiMicrosoftLine":
            return RiMicrosoftLine;
        case "ri:RiMicrosoftLoopFill":
            return RiMicrosoftLoopFill;
        case "ri:RiMicrosoftLoopLine":
            return RiMicrosoftLoopLine;
        case "ri:RiMiniProgramFill":
            return RiMiniProgramFill;
        case "ri:RiMiniProgramLine":
            return RiMiniProgramLine;
        case "ri:RiMixtralFill":
            return RiMixtralFill;
        case "ri:RiMixtralLine":
            return RiMixtralLine;
        case "ri:RiNeteaseCloudMusicFill":
            return RiNeteaseCloudMusicFill;
        case "ri:RiNeteaseCloudMusicLine":
            return RiNeteaseCloudMusicLine;
        case "ri:RiNetflixFill":
            return RiNetflixFill;
        case "ri:RiNetflixLine":
            return RiNetflixLine;
        case "ri:RiNextjsFill":
            return RiNextjsFill;
        case "ri:RiNextjsLine":
            return RiNextjsLine;
        case "ri:RiNodejsFill":
            return RiNodejsFill;
        case "ri:RiNodejsLine":
            return RiNodejsLine;
        case "ri:RiNotionFill":
            return RiNotionFill;
        case "ri:RiNotionLine":
            return RiNotionLine;
        case "ri:RiNpmjsFill":
            return RiNpmjsFill;
        case "ri:RiNpmjsLine":
            return RiNpmjsLine;
        case "ri:RiOpenSourceFill":
            return RiOpenSourceFill;
        case "ri:RiOpenSourceLine":
            return RiOpenSourceLine;
        case "ri:RiOpenaiFill":
            return RiOpenaiFill;
        case "ri:RiOpenaiLine":
            return RiOpenaiLine;
        case "ri:RiOpenbaseFill":
            return RiOpenbaseFill;
        case "ri:RiOpenbaseLine":
            return RiOpenbaseLine;
        case "ri:RiOperaFill":
            return RiOperaFill;
        case "ri:RiOperaLine":
            return RiOperaLine;
        case "ri:RiPatreonFill":
            return RiPatreonFill;
        case "ri:RiPatreonLine":
            return RiPatreonLine;
        case "ri:RiPaypalFill":
            return RiPaypalFill;
        case "ri:RiPaypalLine":
            return RiPaypalLine;
        case "ri:RiPerplexityFill":
            return RiPerplexityFill;
        case "ri:RiPerplexityLine":
            return RiPerplexityLine;
        case "ri:RiPinterestFill":
            return RiPinterestFill;
        case "ri:RiPinterestLine":
            return RiPinterestLine;
        case "ri:RiPixFill":
            return RiPixFill;
        case "ri:RiPixLine":
            return RiPixLine;
        case "ri:RiPixelfedFill":
            return RiPixelfedFill;
        case "ri:RiPixelfedLine":
            return RiPixelfedLine;
        case "ri:RiPlaystationFill":
            return RiPlaystationFill;
        case "ri:RiPlaystationLine":
            return RiPlaystationLine;
        case "ri:RiProductHuntFill":
            return RiProductHuntFill;
        case "ri:RiProductHuntLine":
            return RiProductHuntLine;
        case "ri:RiQqFill":
            return RiQqFill;
        case "ri:RiQqLine":
            return RiQqLine;
        case "ri:RiReactjsFill":
            return RiReactjsFill;
        case "ri:RiReactjsLine":
            return RiReactjsLine;
        case "ri:RiRedditFill":
            return RiRedditFill;
        case "ri:RiRedditLine":
            return RiRedditLine;
        case "ri:RiRemixRunFill":
            return RiRemixRunFill;
        case "ri:RiRemixRunLine":
            return RiRemixRunLine;
        case "ri:RiRemixiconFill":
            return RiRemixiconFill;
        case "ri:RiRemixiconLine":
            return RiRemixiconLine;
        case "ri:RiSafariFill":
            return RiSafariFill;
        case "ri:RiSafariLine":
            return RiSafariLine;
        case "ri:RiSkypeFill":
            return RiSkypeFill;
        case "ri:RiSkypeLine":
            return RiSkypeLine;
        case "ri:RiSlackFill":
            return RiSlackFill;
        case "ri:RiSlackLine":
            return RiSlackLine;
        case "ri:RiSnapchatFill":
            return RiSnapchatFill;
        case "ri:RiSnapchatLine":
            return RiSnapchatLine;
        case "ri:RiSoundcloudFill":
            return RiSoundcloudFill;
        case "ri:RiSoundcloudLine":
            return RiSoundcloudLine;
        case "ri:RiSpectrumFill":
            return RiSpectrumFill;
        case "ri:RiSpectrumLine":
            return RiSpectrumLine;
        case "ri:RiSpotifyFill":
            return RiSpotifyFill;
        case "ri:RiSpotifyLine":
            return RiSpotifyLine;
        case "ri:RiStackOverflowFill":
            return RiStackOverflowFill;
        case "ri:RiStackOverflowLine":
            return RiStackOverflowLine;
        case "ri:RiStackshareFill":
            return RiStackshareFill;
        case "ri:RiStackshareLine":
            return RiStackshareLine;
        case "ri:RiSteamFill":
            return RiSteamFill;
        case "ri:RiSteamLine":
            return RiSteamLine;
        case "ri:RiSupabaseFill":
            return RiSupabaseFill;
        case "ri:RiSupabaseLine":
            return RiSupabaseLine;
        case "ri:RiSvelteFill":
            return RiSvelteFill;
        case "ri:RiSvelteLine":
            return RiSvelteLine;
        case "ri:RiSwitchFill":
            return RiSwitchFill;
        case "ri:RiSwitchLine":
            return RiSwitchLine;
        case "ri:RiTailwindCssFill":
            return RiTailwindCssFill;
        case "ri:RiTailwindCssLine":
            return RiTailwindCssLine;
        case "ri:RiTaobaoFill":
            return RiTaobaoFill;
        case "ri:RiTaobaoLine":
            return RiTaobaoLine;
        case "ri:RiTelegram2Fill":
            return RiTelegram2Fill;
        case "ri:RiTelegram2Line":
            return RiTelegram2Line;
        case "ri:RiTelegramFill":
            return RiTelegramFill;
        case "ri:RiTelegramLine":
            return RiTelegramLine;
        case "ri:RiThreadsFill":
            return RiThreadsFill;
        case "ri:RiThreadsLine":
            return RiThreadsLine;
        case "ri:RiTiktokFill":
            return RiTiktokFill;
        case "ri:RiTiktokLine":
            return RiTiktokLine;
        case "ri:RiTrelloFill":
            return RiTrelloFill;
        case "ri:RiTrelloLine":
            return RiTrelloLine;
        case "ri:RiTumblrFill":
            return RiTumblrFill;
        case "ri:RiTumblrLine":
            return RiTumblrLine;
        case "ri:RiTwitchFill":
            return RiTwitchFill;
        case "ri:RiTwitchLine":
            return RiTwitchLine;
        case "ri:RiTwitterFill":
            return RiTwitterFill;
        case "ri:RiTwitterLine":
            return RiTwitterLine;
        case "ri:RiTwitterXFill":
            return RiTwitterXFill;
        case "ri:RiTwitterXLine":
            return RiTwitterXLine;
        case "ri:RiUbuntuFill":
            return RiUbuntuFill;
        case "ri:RiUbuntuLine":
            return RiUbuntuLine;
        case "ri:RiUnsplashFill":
            return RiUnsplashFill;
        case "ri:RiUnsplashLine":
            return RiUnsplashLine;
        case "ri:RiVercelFill":
            return RiVercelFill;
        case "ri:RiVercelLine":
            return RiVercelLine;
        case "ri:RiVimeoFill":
            return RiVimeoFill;
        case "ri:RiVimeoLine":
            return RiVimeoLine;
        case "ri:RiVisaFill":
            return RiVisaFill;
        case "ri:RiVisaLine":
            return RiVisaLine;
        case "ri:RiVkFill":
            return RiVkFill;
        case "ri:RiVkLine":
            return RiVkLine;
        case "ri:RiVuejsFill":
            return RiVuejsFill;
        case "ri:RiVuejsLine":
            return RiVuejsLine;
        case "ri:RiWebhookFill":
            return RiWebhookFill;
        case "ri:RiWebhookLine":
            return RiWebhookLine;
        case "ri:RiWechat2Fill":
            return RiWechat2Fill;
        case "ri:RiWechat2Line":
            return RiWechat2Line;
        case "ri:RiWechatChannelsFill":
            return RiWechatChannelsFill;
        case "ri:RiWechatChannelsLine":
            return RiWechatChannelsLine;
        case "ri:RiWechatFill":
            return RiWechatFill;
        case "ri:RiWechatLine":
            return RiWechatLine;
        case "ri:RiWechatPayFill":
            return RiWechatPayFill;
        case "ri:RiWechatPayLine":
            return RiWechatPayLine;
        case "ri:RiWeiboFill":
            return RiWeiboFill;
        case "ri:RiWeiboLine":
            return RiWeiboLine;
        case "ri:RiWhatsappFill":
            return RiWhatsappFill;
        case "ri:RiWhatsappLine":
            return RiWhatsappLine;
        case "ri:RiWindowsFill":
            return RiWindowsFill;
        case "ri:RiWindowsLine":
            return RiWindowsLine;
        case "ri:RiWordpressFill":
            return RiWordpressFill;
        case "ri:RiWordpressLine":
            return RiWordpressLine;
        case "ri:RiXboxFill":
            return RiXboxFill;
        case "ri:RiXboxLine":
            return RiXboxLine;
        case "ri:RiXingFill":
            return RiXingFill;
        case "ri:RiXingLine":
            return RiXingLine;
        case "ri:RiYoutubeFill":
            return RiYoutubeFill;
        case "ri:RiYoutubeLine":
            return RiYoutubeLine;
        case "ri:RiYuqueFill":
            return RiYuqueFill;
        case "ri:RiYuqueLine":
            return RiYuqueLine;
        case "ri:RiZcoolFill":
            return RiZcoolFill;
        case "ri:RiZcoolLine":
            return RiZcoolLine;
        case "ri:RiZhihuFill":
            return RiZhihuFill;
        case "ri:RiZhihuLine":
            return RiZhihuLine;
        case "ri:RiAnchorFill":
            return RiAnchorFill;
        case "ri:RiAnchorLine":
            return RiAnchorLine;
        case "ri:RiBarricadeFill":
            return RiBarricadeFill;
        case "ri:RiBarricadeLine":
            return RiBarricadeLine;
        case "ri:RiBikeFill":
            return RiBikeFill;
        case "ri:RiBikeLine":
            return RiBikeLine;
        case "ri:RiBus2Fill":
            return RiBus2Fill;
        case "ri:RiBus2Line":
            return RiBus2Line;
        case "ri:RiBusFill":
            return RiBusFill;
        case "ri:RiBusLine":
            return RiBusLine;
        case "ri:RiBusWifiFill":
            return RiBusWifiFill;
        case "ri:RiBusWifiLine":
            return RiBusWifiLine;
        case "ri:RiCarFill":
            return RiCarFill;
        case "ri:RiCarLine":
            return RiCarLine;
        case "ri:RiCarWashingFill":
            return RiCarWashingFill;
        case "ri:RiCarWashingLine":
            return RiCarWashingLine;
        case "ri:RiCaravanFill":
            return RiCaravanFill;
        case "ri:RiCaravanLine":
            return RiCaravanLine;
        case "ri:RiChargingPile2Fill":
            return RiChargingPile2Fill;
        case "ri:RiChargingPile2Line":
            return RiChargingPile2Line;
        case "ri:RiChargingPileFill":
            return RiChargingPileFill;
        case "ri:RiChargingPileLine":
            return RiChargingPileLine;
        case "ri:RiChinaRailwayFill":
            return RiChinaRailwayFill;
        case "ri:RiChinaRailwayLine":
            return RiChinaRailwayLine;
        case "ri:RiCompass2Fill":
            return RiCompass2Fill;
        case "ri:RiCompass2Line":
            return RiCompass2Line;
        case "ri:RiCompass3Fill":
            return RiCompass3Fill;
        case "ri:RiCompass3Line":
            return RiCompass3Line;
        case "ri:RiCompass4Fill":
            return RiCompass4Fill;
        case "ri:RiCompass4Line":
            return RiCompass4Line;
        case "ri:RiCompassDiscoverFill":
            return RiCompassDiscoverFill;
        case "ri:RiCompassDiscoverLine":
            return RiCompassDiscoverLine;
        case "ri:RiCompassFill":
            return RiCompassFill;
        case "ri:RiCompassLine":
            return RiCompassLine;
        case "ri:RiDirectionFill":
            return RiDirectionFill;
        case "ri:RiDirectionLine":
            return RiDirectionLine;
        case "ri:RiEBike2Fill":
            return RiEBike2Fill;
        case "ri:RiEBike2Line":
            return RiEBike2Line;
        case "ri:RiEBikeFill":
            return RiEBikeFill;
        case "ri:RiEBikeLine":
            return RiEBikeLine;
        case "ri:RiEarthFill":
            return RiEarthFill;
        case "ri:RiEarthLine":
            return RiEarthLine;
        case "ri:RiFlightLandFill":
            return RiFlightLandFill;
        case "ri:RiFlightLandLine":
            return RiFlightLandLine;
        case "ri:RiFlightTakeoffFill":
            return RiFlightTakeoffFill;
        case "ri:RiFlightTakeoffLine":
            return RiFlightTakeoffLine;
        case "ri:RiFootprintFill":
            return RiFootprintFill;
        case "ri:RiFootprintLine":
            return RiFootprintLine;
        case "ri:RiGasStationFill":
            return RiGasStationFill;
        case "ri:RiGasStationLine":
            return RiGasStationLine;
        case "ri:RiGlobeFill":
            return RiGlobeFill;
        case "ri:RiGlobeLine":
            return RiGlobeLine;
        case "ri:RiGuideFill":
            return RiGuideFill;
        case "ri:RiGuideLine":
            return RiGuideLine;
        case "ri:RiHotelBedFill":
            return RiHotelBedFill;
        case "ri:RiHotelBedLine":
            return RiHotelBedLine;
        case "ri:RiLifebuoyFill":
            return RiLifebuoyFill;
        case "ri:RiLifebuoyLine":
            return RiLifebuoyLine;
        case "ri:RiLuggageCartFill":
            return RiLuggageCartFill;
        case "ri:RiLuggageCartLine":
            return RiLuggageCartLine;
        case "ri:RiLuggageDepositFill":
            return RiLuggageDepositFill;
        case "ri:RiLuggageDepositLine":
            return RiLuggageDepositLine;
        case "ri:RiMap2Fill":
            return RiMap2Fill;
        case "ri:RiMap2Line":
            return RiMap2Line;
        case "ri:RiMapFill":
            return RiMapFill;
        case "ri:RiMapLine":
            return RiMapLine;
        case "ri:RiMapPin2Fill":
            return RiMapPin2Fill;
        case "ri:RiMapPin2Line":
            return RiMapPin2Line;
        case "ri:RiMapPin3Fill":
            return RiMapPin3Fill;
        case "ri:RiMapPin3Line":
            return RiMapPin3Line;
        case "ri:RiMapPin4Fill":
            return RiMapPin4Fill;
        case "ri:RiMapPin4Line":
            return RiMapPin4Line;
        case "ri:RiMapPin5Fill":
            return RiMapPin5Fill;
        case "ri:RiMapPin5Line":
            return RiMapPin5Line;
        case "ri:RiMapPinAddFill":
            return RiMapPinAddFill;
        case "ri:RiMapPinAddLine":
            return RiMapPinAddLine;
        case "ri:RiMapPinFill":
            return RiMapPinFill;
        case "ri:RiMapPinLine":
            return RiMapPinLine;
        case "ri:RiMapPinRangeFill":
            return RiMapPinRangeFill;
        case "ri:RiMapPinRangeLine":
            return RiMapPinRangeLine;
        case "ri:RiMapPinTimeFill":
            return RiMapPinTimeFill;
        case "ri:RiMapPinTimeLine":
            return RiMapPinTimeLine;
        case "ri:RiMapPinUserFill":
            return RiMapPinUserFill;
        case "ri:RiMapPinUserLine":
            return RiMapPinUserLine;
        case "ri:RiMotorbikeFill":
            return RiMotorbikeFill;
        case "ri:RiMotorbikeLine":
            return RiMotorbikeLine;
        case "ri:RiNavigationFill":
            return RiNavigationFill;
        case "ri:RiNavigationLine":
            return RiNavigationLine;
        case "ri:RiOilFill":
            return RiOilFill;
        case "ri:RiOilLine":
            return RiOilLine;
        case "ri:RiParkingBoxFill":
            return RiParkingBoxFill;
        case "ri:RiParkingBoxLine":
            return RiParkingBoxLine;
        case "ri:RiParkingFill":
            return RiParkingFill;
        case "ri:RiParkingLine":
            return RiParkingLine;
        case "ri:RiPassportFill":
            return RiPassportFill;
        case "ri:RiPassportLine":
            return RiPassportLine;
        case "ri:RiPinDistanceFill":
            return RiPinDistanceFill;
        case "ri:RiPinDistanceLine":
            return RiPinDistanceLine;
        case "ri:RiPlaneFill":
            return RiPlaneFill;
        case "ri:RiPlaneLine":
            return RiPlaneLine;
        case "ri:RiPlanetFill":
            return RiPlanetFill;
        case "ri:RiPlanetLine":
            return RiPlanetLine;
        case "ri:RiPoliceCarFill":
            return RiPoliceCarFill;
        case "ri:RiPoliceCarLine":
            return RiPoliceCarLine;
        case "ri:RiPushpin2Fill":
            return RiPushpin2Fill;
        case "ri:RiPushpin2Line":
            return RiPushpin2Line;
        case "ri:RiPushpinFill":
            return RiPushpinFill;
        case "ri:RiPushpinLine":
            return RiPushpinLine;
        case "ri:RiRidingFill":
            return RiRidingFill;
        case "ri:RiRidingLine":
            return RiRidingLine;
        case "ri:RiRoadMapFill":
            return RiRoadMapFill;
        case "ri:RiRoadMapLine":
            return RiRoadMapLine;
        case "ri:RiRoadsterFill":
            return RiRoadsterFill;
        case "ri:RiRoadsterLine":
            return RiRoadsterLine;
        case "ri:RiRocket2Fill":
            return RiRocket2Fill;
        case "ri:RiRocket2Line":
            return RiRocket2Line;
    }
}
