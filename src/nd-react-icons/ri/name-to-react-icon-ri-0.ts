import type {IconType} from "react-icons";

import {
    RiArrowDownBoxFill,
    RiArrowDownBoxLine,
    RiArrowDownCircleFill,
    RiArrowDownCircleLine,
    RiArrowDownDoubleFill,
    RiArrowDownDoubleLine,
    RiArrowDownFill,
    RiArrowDownLine,
    RiArrowDownSFill,
    RiArrowDownSLine,
    RiArrowDownWideFill,
    RiArrowDownWideLine,
    RiArrowDropDownFill,
    RiArrowDropDownLine,
    RiArrowDropLeftFill,
    RiArrowDropLeftLine,
    RiArrowDropRightFill,
    RiArrowDropRightLine,
    RiArrowDropUpFill,
    RiArrowDropUpLine,
    RiArrowGoBackFill,
    RiArrowGoBackLine,
    RiArrowGoForwardFill,
    RiArrowGoForwardLine,
    RiArrowLeftBoxFill,
    RiArrowLeftBoxLine,
    RiArrowLeftCircleFill,
    RiArrowLeftCircleLine,
    RiArrowLeftDoubleFill,
    RiArrowLeftDoubleLine,
    RiArrowLeftDownBoxFill,
    RiArrowLeftDownBoxLine,
    RiArrowLeftDownFill,
    RiArrowLeftDownLine,
    RiArrowLeftFill,
    RiArrowLeftLine,
    RiArrowLeftRightFill,
    RiArrowLeftRightLine,
    RiArrowLeftSFill,
    RiArrowLeftSLine,
    RiArrowLeftUpBoxFill,
    RiArrowLeftUpBoxLine,
    RiArrowLeftUpFill,
    RiArrowLeftUpLine,
    RiArrowLeftWideFill,
    RiArrowLeftWideLine,
    RiArrowRightBoxFill,
    RiArrowRightBoxLine,
    RiArrowRightCircleFill,
    RiArrowRightCircleLine,
    RiArrowRightDoubleFill,
    RiArrowRightDoubleLine,
    RiArrowRightDownBoxFill,
    RiArrowRightDownBoxLine,
    RiArrowRightDownFill,
    RiArrowRightDownLine,
    RiArrowRightFill,
    RiArrowRightLine,
    RiArrowRightSFill,
    RiArrowRightSLine,
    RiArrowRightUpBoxFill,
    RiArrowRightUpBoxLine,
    RiArrowRightUpFill,
    RiArrowRightUpLine,
    RiArrowRightWideFill,
    RiArrowRightWideLine,
    RiArrowTurnBackFill,
    RiArrowTurnBackLine,
    RiArrowTurnForwardFill,
    RiArrowTurnForwardLine,
    RiArrowUpBoxFill,
    RiArrowUpBoxLine,
    RiArrowUpCircleFill,
    RiArrowUpCircleLine,
    RiArrowUpDoubleFill,
    RiArrowUpDoubleLine,
    RiArrowUpDownFill,
    RiArrowUpDownLine,
    RiArrowUpFill,
    RiArrowUpLine,
    RiArrowUpSFill,
    RiArrowUpSLine,
    RiArrowUpWideFill,
    RiArrowUpWideLine,
    RiCollapseDiagonal2Fill,
    RiCollapseDiagonal2Line,
    RiCollapseDiagonalFill,
    RiCollapseDiagonalLine,
    RiCollapseHorizontalFill,
    RiCollapseHorizontalLine,
    RiCollapseVerticalFill,
    RiCollapseVerticalLine,
    RiContractLeftFill,
    RiContractLeftLine,
    RiContractLeftRightFill,
    RiContractLeftRightLine,
    RiContractRightFill,
    RiContractRightLine,
    RiContractUpDownFill,
    RiContractUpDownLine,
    RiCornerDownLeftFill,
    RiCornerDownLeftLine,
    RiCornerDownRightFill,
    RiCornerDownRightLine,
    RiCornerLeftDownFill,
    RiCornerLeftDownLine,
    RiCornerLeftUpFill,
    RiCornerLeftUpLine,
    RiCornerRightDownFill,
    RiCornerRightDownLine,
    RiCornerRightUpFill,
    RiCornerRightUpLine,
    RiCornerUpLeftDoubleFill,
    RiCornerUpLeftDoubleLine,
    RiCornerUpLeftFill,
    RiCornerUpLeftLine,
    RiCornerUpRightDoubleFill,
    RiCornerUpRightDoubleLine,
    RiCornerUpRightFill,
    RiCornerUpRightLine,
    RiDragMove2Fill,
    RiDragMove2Line,
    RiDragMoveFill,
    RiDragMoveLine,
    RiExpandDiagonal2Fill,
    RiExpandDiagonal2Line,
    RiExpandDiagonalFill,
    RiExpandDiagonalLine,
    RiExpandDiagonalS2Fill,
    RiExpandDiagonalS2Line,
    RiExpandDiagonalSFill,
    RiExpandDiagonalSLine,
    RiExpandHeightFill,
    RiExpandHeightLine,
    RiExpandHorizontalFill,
    RiExpandHorizontalLine,
    RiExpandHorizontalSFill,
    RiExpandHorizontalSLine,
    RiExpandLeftFill,
    RiExpandLeftLine,
    RiExpandLeftRightFill,
    RiExpandLeftRightLine,
    RiExpandRightFill,
    RiExpandRightLine,
    RiExpandUpDownFill,
    RiExpandUpDownLine,
    RiExpandVerticalFill,
    RiExpandVerticalLine,
    RiExpandVerticalSFill,
    RiExpandVerticalSLine,
    RiExpandWidthFill,
    RiExpandWidthLine,
    RiScrollToBottomFill,
    RiScrollToBottomLine,
    RiSkipDownFill,
    RiSkipDownLine,
    RiSkipLeftFill,
    RiSkipLeftLine,
    RiSkipRightFill,
    RiSkipRightLine,
    RiSkipUpFill,
    RiSkipUpLine,
    RiAncientGateFill,
    RiAncientGateLine,
    RiAncientPavilionFill,
    RiAncientPavilionLine,
    RiBankFill,
    RiBankLine,
    RiBuilding2Fill,
    RiBuilding2Line,
    RiBuilding3Fill,
    RiBuilding3Line,
    RiBuilding4Fill,
    RiBuilding4Line,
    RiBuildingFill,
    RiBuildingLine,
    RiCommunityFill,
    RiCommunityLine,
    RiGovernmentFill,
    RiGovernmentLine,
    RiHome2Fill,
    RiHome2Line,
    RiHome3Fill,
    RiHome3Line,
    RiHome4Fill,
    RiHome4Line,
    RiHome5Fill,
    RiHome5Line,
    RiHome6Fill,
    RiHome6Line,
    RiHome7Fill,
    RiHome7Line,
    RiHome8Fill,
    RiHome8Line,
    RiHome9Fill,
    RiHome9Line,
    RiHomeFill,
    RiHomeGearFill,
    RiHomeGearLine,
    RiHomeHeartFill,
    RiHomeHeartLine,
    RiHomeLine,
    RiHomeOfficeFill,
    RiHomeOfficeLine,
    RiHomeSmile2Fill,
    RiHomeSmile2Line,
    RiHomeSmileFill,
    RiHomeSmileLine,
    RiHomeWifiFill,
    RiHomeWifiLine,
    RiHospitalFill,
    RiHospitalLine,
    RiHotelFill,
    RiHotelLine,
    RiSchoolFill,
    RiSchoolLine,
    RiStore2Fill,
    RiStore2Line,
    RiStore3Fill,
    RiStore3Line,
    RiStoreFill,
    RiStoreLine,
    RiTentFill,
    RiTentLine,
    RiAdvertisementFill,
    RiAdvertisementLine,
    RiArchive2Fill,
    RiArchive2Line,
    RiArchiveDrawerFill,
    RiArchiveDrawerLine,
    RiArchiveFill,
    RiArchiveLine,
    RiArchiveStackFill,
    RiArchiveStackLine,
    RiAtFill,
    RiAtLine,
    RiAttachmentFill,
    RiAttachmentLine,
    RiAwardFill,
    RiAwardLine,
    RiBarChart2Fill,
    RiBarChart2Line,
    RiBarChartBoxAiFill,
    RiBarChartBoxAiLine,
    RiBarChartBoxFill,
    RiBarChartBoxLine,
    RiBarChartFill,
    RiBarChartGroupedFill,
    RiBarChartGroupedLine,
    RiBarChartHorizontalFill,
    RiBarChartHorizontalLine,
    RiBarChartLine,
    RiBookmark2Fill,
    RiBookmark2Line,
    RiBookmark3Fill,
    RiBookmark3Line,
    RiBookmarkFill,
    RiBookmarkLine,
    RiBriefcase2Fill,
    RiBriefcase2Line,
    RiBriefcase3Fill,
    RiBriefcase3Line,
    RiBriefcase4Fill,
    RiBriefcase4Line,
    RiBriefcase5Fill,
    RiBriefcase5Line,
    RiBriefcaseFill,
    RiBriefcaseLine,
    RiBubbleChartFill,
    RiBubbleChartLine,
    RiCalculatorFill,
    RiCalculatorLine,
    RiCalendar2Fill,
    RiCalendar2Line,
    RiCalendarCheckFill,
    RiCalendarCheckLine,
    RiCalendarCloseFill,
    RiCalendarCloseLine,
    RiCalendarEventFill,
    RiCalendarEventLine,
    RiCalendarFill,
    RiCalendarLine,
    RiCalendarScheduleFill,
    RiCalendarScheduleLine,
    RiCalendarTodoFill,
    RiCalendarTodoLine,
    RiCloudFill,
    RiCloudLine,
    RiCloudOffFill,
    RiCloudOffLine,
    RiCopyleftFill,
    RiCopyleftLine,
    RiCopyrightFill,
    RiCopyrightLine,
    RiCreativeCommonsByFill,
    RiCreativeCommonsByLine,
    RiCreativeCommonsFill,
    RiCreativeCommonsLine,
    RiCreativeCommonsNcFill,
    RiCreativeCommonsNcLine,
    RiCreativeCommonsNdFill,
    RiCreativeCommonsNdLine,
    RiCreativeCommonsSaFill,
    RiCreativeCommonsSaLine,
    RiCreativeCommonsZeroFill,
    RiCreativeCommonsZeroLine,
    RiCustomerService2Fill,
    RiCustomerService2Line,
    RiCustomerServiceFill,
    RiCustomerServiceLine,
    RiDonutChartFill,
    RiDonutChartLine,
    RiFlag2Fill,
    RiFlag2Line,
    RiFlagFill,
    RiFlagLine,
    RiFlagOffFill,
    RiFlagOffLine,
    RiGlobalFill,
    RiGlobalLine,
    RiHonourFill,
    RiHonourLine,
    RiIdCardFill,
    RiIdCardLine,
    RiInbox2Fill,
    RiInbox2Line,
    RiInboxArchiveFill,
    RiInboxArchiveLine,
    RiInboxFill,
    RiInboxLine,
    RiInboxUnarchiveFill,
    RiInboxUnarchiveLine,
    RiInfoCardFill,
    RiInfoCardLine,
    RiLineChartFill,
    RiLineChartLine,
    RiLinksFill,
    RiLinksLine,
    RiMailAddFill,
    RiMailAddLine,
    RiMailAiFill,
    RiMailAiLine,
    RiMailCheckFill,
    RiMailCheckLine,
    RiMailCloseFill,
    RiMailCloseLine,
    RiMailDownloadFill,
    RiMailDownloadLine,
    RiMailFill,
    RiMailForbidFill,
    RiMailForbidLine,
    RiMailLine,
    RiMailLockFill,
    RiMailLockLine,
    RiMailOpenFill,
    RiMailOpenLine,
    RiMailSendFill,
    RiMailSendLine,
    RiMailSettingsFill,
    RiMailSettingsLine,
    RiMailStarFill,
    RiMailStarLine,
    RiMailUnreadFill,
    RiMailUnreadLine,
    RiMailVolumeFill,
    RiMailVolumeLine,
    RiMedal2Fill,
    RiMedal2Line,
    RiMedalFill,
    RiMedalLine,
    RiMegaphoneFill,
    RiMegaphoneLine,
    RiPassExpiredFill,
    RiPassExpiredLine,
    RiPassPendingFill,
    RiPassPendingLine,
    RiPassValidFill,
    RiPassValidLine,
    RiPieChart2Fill,
    RiPieChart2Line,
    RiPieChartBoxFill,
    RiPieChartBoxLine,
    RiPieChartFill,
    RiPieChartLine,
    RiPresentationFill,
    RiPresentationLine,
    RiPrinterCloudFill,
    RiPrinterCloudLine,
    RiPrinterFill,
    RiPrinterLine,
    RiProfileFill,
    RiProfileLine,
    RiProjector2Fill,
    RiProjector2Line,
    RiProjectorFill,
    RiProjectorLine,
    RiRecordMailFill,
    RiRecordMailLine,
    RiRegisteredFill,
    RiRegisteredLine,
    RiReplyAllFill,
    RiReplyAllLine,
    RiReplyFill,
    RiReplyLine,
    RiSendPlane2Fill,
    RiSendPlane2Line,
    RiSendPlaneFill,
    RiSendPlaneLine,
    RiSeoFill,
    RiSeoLine,
    RiServiceFill,
    RiServiceLine,
    RiShakeHandsFill,
    RiShakeHandsLine,
    RiSlideshow2Fill,
    RiSlideshow2Line,
    RiSlideshow3Fill,
    RiSlideshow3Line,
    RiSlideshow4Fill,
    RiSlideshow4Line,
    RiSlideshowFill,
    RiSlideshowLine,
    RiStackFill,
    RiStackLine,
    RiTrademarkFill,
    RiTrademarkLine,
    RiTriangularFlagFill,
    RiTriangularFlagLine,
    RiVerifiedBadgeFill,
    RiVerifiedBadgeLine,
    RiWindow2Fill,
    RiWindow2Line,
    RiWindowFill,
    RiWindowLine,
    RiChat1Fill,
    RiChat1Line,
    RiChat2Fill,
    RiChat2Line,
    RiChat3Fill,
    RiChat3Line,
    RiChat4Fill,
    RiChat4Line,
    RiChatAiFill,
    RiChatAiLine,
    RiChatCheckFill,
    RiChatCheckLine,
    RiChatDeleteFill,
    RiChatDeleteLine,
    RiChatDownloadFill,
    RiChatDownloadLine,
    RiChatFollowUpFill,
    RiChatFollowUpLine,
    RiChatForwardFill,
    RiChatForwardLine,
    RiChatHeartFill,
    RiChatHeartLine,
    RiChatHistoryFill,
    RiChatHistoryLine,
    RiChatNewFill,
    RiChatNewLine,
    RiChatOffFill,
    RiChatOffLine,
    RiChatPollFill,
    RiChatPollLine,
    RiChatPrivateFill,
    RiChatPrivateLine,
    RiChatQuoteFill,
    RiChatQuoteLine,
    RiChatSearchFill,
    RiChatSearchLine,
    RiChatSettingsFill,
    RiChatSettingsLine,
    RiChatSmile2Fill,
    RiChatSmile2Line,
    RiChatSmile3Fill,
    RiChatSmile3Line,
    RiChatSmileAiFill,
    RiChatSmileAiLine,
    RiChatSmileFill,
    RiChatSmileLine,
    RiChatThreadFill,
    RiChatThreadLine,
    RiChatUnreadFill,
    RiChatUnreadLine,
    RiChatUploadFill,
    RiChatUploadLine,
    RiChatVoiceAiFill,
    RiChatVoiceAiLine,
    RiChatVoiceFill,
    RiChatVoiceLine,
    RiDiscussFill,
    RiDiscussLine,
    RiEmojiStickerFill,
    RiEmojiStickerLine,
    RiFeedbackFill,
    RiFeedbackLine,
    RiMessage2Fill,
    RiMessage2Line,
    RiMessage3Fill,
    RiMessage3Line,
    RiMessageFill,
    RiMessageLine,
    RiQuestionAnswerFill,
    RiQuestionAnswerLine,
    RiQuestionnaireFill,
    RiQuestionnaireLine,
    RiSpeakAiFill,
    RiSpeakAiLine,
    RiSpeakFill,
    RiSpeakLine,
    RiVideoChatFill,
    RiVideoChatLine,
    RiAlignItemBottomFill,
    RiAlignItemBottomLine,
    RiAlignItemHorizontalCenterFill,
    RiAlignItemHorizontalCenterLine,
    RiAlignItemLeftFill,
    RiAlignItemLeftLine,
    RiAlignItemRightFill,
    RiAlignItemRightLine,
    RiAlignItemTopFill,
    RiAlignItemTopLine,
    RiAlignItemVerticalCenterFill,
    RiAlignItemVerticalCenterLine,
    RiAnticlockwise2Fill,
    RiAnticlockwise2Line,
    RiAnticlockwiseFill,
    RiAnticlockwiseLine,
    RiArtboard2Fill,
    RiArtboard2Line,
    RiArtboardFill,
    RiArtboardLine,
    RiBallPenFill,
    RiBallPenLine,
    RiBlurOffFill,
    RiBlurOffLine,
    RiBrush2Fill,
    RiBrush2Line,
    RiBrush3Fill,
    RiBrush3Line,
    RiBrush4Fill,
    RiBrush4Line,
    RiBrushAiFill,
    RiBrushAiLine,
    RiBrushFill,
    RiBrushLine,
    RiCircleFill,
    RiCircleLine,
    RiClockwise2Fill,
    RiClockwise2Line,
    RiClockwiseFill,
    RiClockwiseLine,
    RiCollageFill,
    RiCollageLine,
    RiColorFilterAiFill,
    RiColorFilterAiLine,
    RiColorFilterFill,
    RiColorFilterLine,
    RiCompasses2Fill,
    RiCompasses2Line,
    RiCompassesFill,
    RiCompassesLine,
    RiContrast2Fill,
    RiContrast2Line,
    RiContrastDrop2Fill,
    RiContrastDrop2Line,
    RiContrastDropFill,
    RiContrastDropLine,
    RiContrastFill,
    RiContrastLine,
    RiCrop2Fill,
    RiCrop2Line,
    RiCropFill,
    RiCropLine,
    RiCrosshair2Fill,
    RiCrosshair2Line,
    RiCrosshairFill,
    RiCrosshairLine,
    RiDragDropFill,
    RiDragDropLine,
    RiDropFill,
    RiDropLine,
    RiEdit2Fill,
    RiEdit2Line,
    RiEditBoxFill,
    RiEditBoxLine,
    RiEditCircleFill,
    RiEditCircleLine,
    RiEditFill,
    RiEditLine,
    RiEraserFill,
    RiEraserLine,
    RiFlipHorizontal2Fill,
    RiFlipHorizontal2Line,
    RiFlipHorizontalFill,
    RiFlipHorizontalLine,
    RiFlipVertical2Fill,
    RiFlipVertical2Line,
    RiFlipVerticalFill,
    RiFlipVerticalLine,
    RiFocus2Fill,
    RiFocus2Line,
    RiFocus3Fill,
    RiFocus3Line,
    RiFocusFill,
    RiFocusLine,
    RiGridFill,
    RiGridLine,
    RiHammerFill,
    RiHammerLine,
    RiHexagonFill,
    RiHexagonLine,
    RiInkBottleFill,
    RiInkBottleLine,
    RiInputMethodFill,
    RiInputMethodLine,
    RiLayout2Fill,
    RiLayout2Line,
    RiLayout3Fill,
    RiLayout3Line,
    RiLayout4Fill,
    RiLayout4Line,
    RiLayout5Fill,
    RiLayout5Line,
    RiLayout6Fill,
    RiLayout6Line,
    RiLayoutBottom2Fill,
    RiLayoutBottom2Line,
    RiLayoutBottomFill,
    RiLayoutBottomLine,
    RiLayoutColumnFill,
    RiLayoutColumnLine,
    RiLayoutFill,
    RiLayoutGrid2Fill,
    RiLayoutGrid2Line,
    RiLayoutGridFill,
    RiLayoutGridLine,
    RiLayoutHorizontalFill,
    RiLayoutHorizontalLine,
    RiLayoutLeft2Fill,
    RiLayoutLeft2Line,
    RiLayoutLeftFill,
    RiLayoutLeftLine,
    RiLayoutLine,
    RiLayoutMasonryFill,
    RiLayoutMasonryLine,
    RiLayoutRight2Fill,
    RiLayoutRight2Line,
    RiLayoutRightFill,
    RiLayoutRightLine,
    RiLayoutRowFill,
    RiLayoutRowLine,
    RiLayoutTop2Fill,
    RiLayoutTop2Line,
    RiLayoutTopFill,
    RiLayoutTopLine,
    RiLayoutVerticalFill,
    RiLayoutVerticalLine,
    RiMagicFill,
    RiMagicLine,
    RiMarkPenFill,
    RiMarkPenLine,
    RiMarkupFill,
    RiMarkupLine,
    RiOctagonFill,
    RiOctagonLine,
    RiPaintBrushFill,
    RiPaintBrushLine,
    RiPaintFill,
    RiPaintLine,
    RiPaletteFill,
    RiPaletteLine,
    RiPantoneFill,
    RiPantoneLine,
    RiPenNibFill,
    RiPenNibLine,
    RiPencilFill,
    RiPencilLine,
    RiPencilRuler2Fill,
    RiPencilRuler2Line,
    RiPencilRulerFill,
    RiPencilRulerLine,
    RiPentagonFill,
    RiPentagonLine,
    RiQuillPenAiFill,
    RiQuillPenAiLine,
    RiQuillPenFill,
    RiQuillPenLine,
    RiRectangleFill,
    RiRectangleLine,
    RiRuler2Fill,
    RiRuler2Line,
    RiRulerFill,
    RiRulerLine,
    RiScissors2Fill,
    RiScissors2Line,
    RiScissorsCutFill,
    RiScissorsCutLine,
    RiScissorsFill,
    RiScissorsLine,
    RiScreenshot2Fill,
    RiScreenshot2Line,
    RiScreenshotFill,
    RiScreenshotLine,
    RiShadowFill,
    RiShadowLine,
    RiShape2Fill,
    RiShape2Line,
    RiShapeFill,
    RiShapeLine,
    RiShapesFill,
    RiShapesLine,
    RiSipFill,
    RiSipLine,
    RiSliceFill,
    RiSliceLine,
    RiSquareFill,
    RiSquareLine,
    RiTBoxFill,
    RiTBoxLine,
    RiTableAltFill,
    RiTableAltLine,
    RiTableFill,
    RiTableLine,
    RiToolsFill,
    RiToolsLine,
    RiTriangleFill,
    RiTriangleLine,
    RiBracesFill,
    RiBracesLine,
    RiBracketsFill,
    RiBracketsLine,
    RiBug2Fill,
    RiBug2Line,
    RiBugFill,
    RiBugLine,
    RiCodeAiFill,
    RiCodeAiLine,
    RiCodeBoxFill,
    RiCodeBoxLine,
    RiCodeFill,
    RiCodeLine,
    RiCodeSFill,
    RiCodeSLine,
    RiCodeSSlashFill,
    RiCodeSSlashLine,
    RiCommandFill,
    RiCommandLine,
    RiCss3Fill,
    RiCss3Line,
    RiCursorFill,
    RiCursorLine,
    RiGitBranchFill,
    RiGitBranchLine,
    RiGitClosePullRequestFill,
    RiGitClosePullRequestLine,
    RiGitCommitFill,
    RiGitCommitLine,
    RiGitForkFill,
    RiGitForkLine,
    RiGitMergeFill,
    RiGitMergeLine,
    RiGitPrDraftFill,
    RiGitPrDraftLine,
    RiGitPullRequestFill,
    RiGitPullRequestLine,
    RiGitRepositoryCommitsFill,
    RiGitRepositoryCommitsLine,
    RiGitRepositoryFill,
    RiGitRepositoryLine,
    RiGitRepositoryPrivateFill,
    RiGitRepositoryPrivateLine,
    RiHtml5Fill,
    RiHtml5Line,
    RiJavascriptFill,
    RiJavascriptLine,
    RiParenthesesFill,
    RiParenthesesLine,
    RiPhpFill,
    RiPhpLine,
    RiPuzzle2Fill,
    RiPuzzle2Line,
    RiPuzzleFill,
    RiPuzzleLine,
    RiTerminalBoxFill,
    RiTerminalBoxLine,
    RiTerminalFill,
    RiTerminalLine,
    RiTerminalWindowFill,
    RiTerminalWindowLine,
    RiAirplayFill,
    RiAirplayLine,
    RiBarcodeBoxFill,
    RiBarcodeBoxLine,
    RiBarcodeFill,
    RiBarcodeLine,
    RiBaseStationFill,
    RiBaseStationLine,
    RiBattery2ChargeFill,
    RiBattery2ChargeLine,
    RiBattery2Fill,
    RiBattery2Line,
    RiBatteryChargeFill,
    RiBatteryChargeLine,
    RiBatteryFill,
    RiBatteryLine,
    RiBatteryLowFill,
    RiBatteryLowLine,
    RiBatterySaverFill,
    RiBatterySaverLine,
    RiBatteryShareFill,
    RiBatteryShareLine,
    RiBluetoothConnectFill,
    RiBluetoothConnectLine,
    RiBluetoothFill,
    RiBluetoothLine,
    RiCastFill,
    RiCastLine,
    RiCellphoneFill,
    RiCellphoneLine,
    RiComputerFill,
    RiComputerLine,
    RiCpuFill,
    RiCpuLine,
    RiDashboard2Fill,
    RiDashboard2Line,
    RiDashboard3Fill,
    RiDashboard3Line,
    RiDatabase2Fill,
    RiDatabase2Line,
    RiDatabaseFill,
    RiDatabaseLine,
    RiDeviceFill,
    RiDeviceLine,
    RiDeviceRecoverFill,
    RiDeviceRecoverLine,
    RiDualSim1Fill,
    RiDualSim1Line,
    RiDualSim2Fill,
    RiDualSim2Line,
    RiFingerprint2Fill,
    RiFingerprint2Line,
    RiFingerprintFill,
    RiFingerprintLine,
    RiGamepadFill,
    RiGamepadLine,
    RiGpsFill,
    RiGpsLine,
    RiGradienterFill,
    RiGradienterLine,
    RiHardDrive2Fill,
    RiHardDrive2Line,
    RiHardDrive3Fill,
    RiHardDrive3Line,
    RiHardDriveFill,
    RiHardDriveLine,
    RiHotspotFill,
    RiHotspotLine,
    RiInstallFill,
    RiInstallLine,
    RiInstanceFill,
    RiInstanceLine,
    RiKeyboardBoxFill,
    RiKeyboardBoxLine,
    RiKeyboardFill,
    RiKeyboardLine,
    RiMacFill,
    RiMacLine,
    RiMacbookFill,
    RiMacbookLine,
    RiMobileDownloadFill,
    RiMobileDownloadLine,
    RiMouseFill,
    RiMouseLine,
    RiPhoneFill,
    RiPhoneFindFill,
    RiPhoneFindLine,
    RiPhoneLine,
    RiPhoneLockFill,
    RiPhoneLockLine,
    RiQrCodeFill,
    RiQrCodeLine,
    RiQrScan2Fill,
    RiQrScan2Line,
    RiQrScanFill,
    RiQrScanLine,
    RiRadarFill,
    RiRadarLine,
    RiRam2Fill,
    RiRam2Line,
    RiRamFill,
    RiRamLine,
    RiRemoteControl2Fill,
    RiRemoteControl2Line,
    RiRemoteControlFill,
    RiRemoteControlLine,
    RiRestartFill,
    RiRestartLine,
    RiRfidFill,
    RiRfidLine,
    RiRotateLockFill,
    RiRotateLockLine,
    RiRouterFill,
    RiRouterLine,
    RiRssFill,
    RiRssLine,
    RiSave2Fill,
    RiSave2Line,
    RiSave3Fill,
    RiSave3Line,
    RiSaveFill,
    RiSaveLine,
    RiScan2Fill,
    RiScan2Line,
    RiScanFill,
    RiScanLine,
    RiSdCardFill,
    RiSdCardLine,
    RiSdCardMiniFill,
    RiSdCardMiniLine,
    RiSensorFill,
    RiSensorLine,
    RiServerFill,
    RiServerLine,
    RiShutDownFill,
    RiShutDownLine,
    RiSignalWifi1Fill,
    RiSignalWifi1Line,
    RiSignalWifi2Fill,
    RiSignalWifi2Line,
    RiSignalWifi3Fill,
    RiSignalWifi3Line,
    RiSignalWifiErrorFill,
    RiSignalWifiErrorLine,
    RiSignalWifiFill,
    RiSignalWifiLine,
    RiSignalWifiOffFill,
    RiSignalWifiOffLine,
    RiSimCard2Fill,
    RiSimCard2Line,
    RiSimCardFill,
    RiSimCardLine,
    RiSmartphoneFill,
    RiSmartphoneLine,
    RiTabletFill,
    RiTabletLine,
    RiTv2Fill,
    RiTv2Line,
    RiTvFill,
    RiTvLine,
    RiUDiskFill,
    RiUDiskLine,
    RiUninstallFill,
    RiUninstallLine,
    RiUsbFill,
    RiUsbLine,
    RiWifiFill,
    RiWifiLine,
    RiWifiOffFill,
    RiWifiOffLine,
    RiWirelessChargingFill,
    RiWirelessChargingLine,
    RiArticleFill,
    RiArticleLine,
    RiBillFill,
    RiBillLine,
    RiBook2Fill,
    RiBook2Line,
    RiBook3Fill,
    RiBook3Line,
    RiBookFill,
    RiBookLine,
    RiBookMarkedFill,
    RiBookMarkedLine,
    RiBookOpenFill,
    RiBookOpenLine,
    RiBookReadFill,
    RiBookReadLine,
    RiBookletFill,
    RiBookletLine,
    RiClipboardFill,
    RiClipboardLine,
    RiContactsBook2Fill,
    RiContactsBook2Line,
    RiContactsBook3Fill,
    RiContactsBook3Line,
    RiContactsBookFill,
    RiContactsBookLine,
    RiContactsBookUploadFill,
    RiContactsBookUploadLine,
    RiContractFill,
    RiContractLine,
    RiDraftFill,
    RiDraftLine,
    RiFile2Fill,
    RiFile2Line,
    RiFile3Fill,
    RiFile3Line,
    RiFile4Fill,
    RiFile4Line,
} from "react-icons/ri"

export function nameToReactIcon_ri_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "ri:RiArrowDownBoxFill":
            return RiArrowDownBoxFill;
        case "ri:RiArrowDownBoxLine":
            return RiArrowDownBoxLine;
        case "ri:RiArrowDownCircleFill":
            return RiArrowDownCircleFill;
        case "ri:RiArrowDownCircleLine":
            return RiArrowDownCircleLine;
        case "ri:RiArrowDownDoubleFill":
            return RiArrowDownDoubleFill;
        case "ri:RiArrowDownDoubleLine":
            return RiArrowDownDoubleLine;
        case "ri:RiArrowDownFill":
            return RiArrowDownFill;
        case "ri:RiArrowDownLine":
            return RiArrowDownLine;
        case "ri:RiArrowDownSFill":
            return RiArrowDownSFill;
        case "ri:RiArrowDownSLine":
            return RiArrowDownSLine;
        case "ri:RiArrowDownWideFill":
            return RiArrowDownWideFill;
        case "ri:RiArrowDownWideLine":
            return RiArrowDownWideLine;
        case "ri:RiArrowDropDownFill":
            return RiArrowDropDownFill;
        case "ri:RiArrowDropDownLine":
            return RiArrowDropDownLine;
        case "ri:RiArrowDropLeftFill":
            return RiArrowDropLeftFill;
        case "ri:RiArrowDropLeftLine":
            return RiArrowDropLeftLine;
        case "ri:RiArrowDropRightFill":
            return RiArrowDropRightFill;
        case "ri:RiArrowDropRightLine":
            return RiArrowDropRightLine;
        case "ri:RiArrowDropUpFill":
            return RiArrowDropUpFill;
        case "ri:RiArrowDropUpLine":
            return RiArrowDropUpLine;
        case "ri:RiArrowGoBackFill":
            return RiArrowGoBackFill;
        case "ri:RiArrowGoBackLine":
            return RiArrowGoBackLine;
        case "ri:RiArrowGoForwardFill":
            return RiArrowGoForwardFill;
        case "ri:RiArrowGoForwardLine":
            return RiArrowGoForwardLine;
        case "ri:RiArrowLeftBoxFill":
            return RiArrowLeftBoxFill;
        case "ri:RiArrowLeftBoxLine":
            return RiArrowLeftBoxLine;
        case "ri:RiArrowLeftCircleFill":
            return RiArrowLeftCircleFill;
        case "ri:RiArrowLeftCircleLine":
            return RiArrowLeftCircleLine;
        case "ri:RiArrowLeftDoubleFill":
            return RiArrowLeftDoubleFill;
        case "ri:RiArrowLeftDoubleLine":
            return RiArrowLeftDoubleLine;
        case "ri:RiArrowLeftDownBoxFill":
            return RiArrowLeftDownBoxFill;
        case "ri:RiArrowLeftDownBoxLine":
            return RiArrowLeftDownBoxLine;
        case "ri:RiArrowLeftDownFill":
            return RiArrowLeftDownFill;
        case "ri:RiArrowLeftDownLine":
            return RiArrowLeftDownLine;
        case "ri:RiArrowLeftFill":
            return RiArrowLeftFill;
        case "ri:RiArrowLeftLine":
            return RiArrowLeftLine;
        case "ri:RiArrowLeftRightFill":
            return RiArrowLeftRightFill;
        case "ri:RiArrowLeftRightLine":
            return RiArrowLeftRightLine;
        case "ri:RiArrowLeftSFill":
            return RiArrowLeftSFill;
        case "ri:RiArrowLeftSLine":
            return RiArrowLeftSLine;
        case "ri:RiArrowLeftUpBoxFill":
            return RiArrowLeftUpBoxFill;
        case "ri:RiArrowLeftUpBoxLine":
            return RiArrowLeftUpBoxLine;
        case "ri:RiArrowLeftUpFill":
            return RiArrowLeftUpFill;
        case "ri:RiArrowLeftUpLine":
            return RiArrowLeftUpLine;
        case "ri:RiArrowLeftWideFill":
            return RiArrowLeftWideFill;
        case "ri:RiArrowLeftWideLine":
            return RiArrowLeftWideLine;
        case "ri:RiArrowRightBoxFill":
            return RiArrowRightBoxFill;
        case "ri:RiArrowRightBoxLine":
            return RiArrowRightBoxLine;
        case "ri:RiArrowRightCircleFill":
            return RiArrowRightCircleFill;
        case "ri:RiArrowRightCircleLine":
            return RiArrowRightCircleLine;
        case "ri:RiArrowRightDoubleFill":
            return RiArrowRightDoubleFill;
        case "ri:RiArrowRightDoubleLine":
            return RiArrowRightDoubleLine;
        case "ri:RiArrowRightDownBoxFill":
            return RiArrowRightDownBoxFill;
        case "ri:RiArrowRightDownBoxLine":
            return RiArrowRightDownBoxLine;
        case "ri:RiArrowRightDownFill":
            return RiArrowRightDownFill;
        case "ri:RiArrowRightDownLine":
            return RiArrowRightDownLine;
        case "ri:RiArrowRightFill":
            return RiArrowRightFill;
        case "ri:RiArrowRightLine":
            return RiArrowRightLine;
        case "ri:RiArrowRightSFill":
            return RiArrowRightSFill;
        case "ri:RiArrowRightSLine":
            return RiArrowRightSLine;
        case "ri:RiArrowRightUpBoxFill":
            return RiArrowRightUpBoxFill;
        case "ri:RiArrowRightUpBoxLine":
            return RiArrowRightUpBoxLine;
        case "ri:RiArrowRightUpFill":
            return RiArrowRightUpFill;
        case "ri:RiArrowRightUpLine":
            return RiArrowRightUpLine;
        case "ri:RiArrowRightWideFill":
            return RiArrowRightWideFill;
        case "ri:RiArrowRightWideLine":
            return RiArrowRightWideLine;
        case "ri:RiArrowTurnBackFill":
            return RiArrowTurnBackFill;
        case "ri:RiArrowTurnBackLine":
            return RiArrowTurnBackLine;
        case "ri:RiArrowTurnForwardFill":
            return RiArrowTurnForwardFill;
        case "ri:RiArrowTurnForwardLine":
            return RiArrowTurnForwardLine;
        case "ri:RiArrowUpBoxFill":
            return RiArrowUpBoxFill;
        case "ri:RiArrowUpBoxLine":
            return RiArrowUpBoxLine;
        case "ri:RiArrowUpCircleFill":
            return RiArrowUpCircleFill;
        case "ri:RiArrowUpCircleLine":
            return RiArrowUpCircleLine;
        case "ri:RiArrowUpDoubleFill":
            return RiArrowUpDoubleFill;
        case "ri:RiArrowUpDoubleLine":
            return RiArrowUpDoubleLine;
        case "ri:RiArrowUpDownFill":
            return RiArrowUpDownFill;
        case "ri:RiArrowUpDownLine":
            return RiArrowUpDownLine;
        case "ri:RiArrowUpFill":
            return RiArrowUpFill;
        case "ri:RiArrowUpLine":
            return RiArrowUpLine;
        case "ri:RiArrowUpSFill":
            return RiArrowUpSFill;
        case "ri:RiArrowUpSLine":
            return RiArrowUpSLine;
        case "ri:RiArrowUpWideFill":
            return RiArrowUpWideFill;
        case "ri:RiArrowUpWideLine":
            return RiArrowUpWideLine;
        case "ri:RiCollapseDiagonal2Fill":
            return RiCollapseDiagonal2Fill;
        case "ri:RiCollapseDiagonal2Line":
            return RiCollapseDiagonal2Line;
        case "ri:RiCollapseDiagonalFill":
            return RiCollapseDiagonalFill;
        case "ri:RiCollapseDiagonalLine":
            return RiCollapseDiagonalLine;
        case "ri:RiCollapseHorizontalFill":
            return RiCollapseHorizontalFill;
        case "ri:RiCollapseHorizontalLine":
            return RiCollapseHorizontalLine;
        case "ri:RiCollapseVerticalFill":
            return RiCollapseVerticalFill;
        case "ri:RiCollapseVerticalLine":
            return RiCollapseVerticalLine;
        case "ri:RiContractLeftFill":
            return RiContractLeftFill;
        case "ri:RiContractLeftLine":
            return RiContractLeftLine;
        case "ri:RiContractLeftRightFill":
            return RiContractLeftRightFill;
        case "ri:RiContractLeftRightLine":
            return RiContractLeftRightLine;
        case "ri:RiContractRightFill":
            return RiContractRightFill;
        case "ri:RiContractRightLine":
            return RiContractRightLine;
        case "ri:RiContractUpDownFill":
            return RiContractUpDownFill;
        case "ri:RiContractUpDownLine":
            return RiContractUpDownLine;
        case "ri:RiCornerDownLeftFill":
            return RiCornerDownLeftFill;
        case "ri:RiCornerDownLeftLine":
            return RiCornerDownLeftLine;
        case "ri:RiCornerDownRightFill":
            return RiCornerDownRightFill;
        case "ri:RiCornerDownRightLine":
            return RiCornerDownRightLine;
        case "ri:RiCornerLeftDownFill":
            return RiCornerLeftDownFill;
        case "ri:RiCornerLeftDownLine":
            return RiCornerLeftDownLine;
        case "ri:RiCornerLeftUpFill":
            return RiCornerLeftUpFill;
        case "ri:RiCornerLeftUpLine":
            return RiCornerLeftUpLine;
        case "ri:RiCornerRightDownFill":
            return RiCornerRightDownFill;
        case "ri:RiCornerRightDownLine":
            return RiCornerRightDownLine;
        case "ri:RiCornerRightUpFill":
            return RiCornerRightUpFill;
        case "ri:RiCornerRightUpLine":
            return RiCornerRightUpLine;
        case "ri:RiCornerUpLeftDoubleFill":
            return RiCornerUpLeftDoubleFill;
        case "ri:RiCornerUpLeftDoubleLine":
            return RiCornerUpLeftDoubleLine;
        case "ri:RiCornerUpLeftFill":
            return RiCornerUpLeftFill;
        case "ri:RiCornerUpLeftLine":
            return RiCornerUpLeftLine;
        case "ri:RiCornerUpRightDoubleFill":
            return RiCornerUpRightDoubleFill;
        case "ri:RiCornerUpRightDoubleLine":
            return RiCornerUpRightDoubleLine;
        case "ri:RiCornerUpRightFill":
            return RiCornerUpRightFill;
        case "ri:RiCornerUpRightLine":
            return RiCornerUpRightLine;
        case "ri:RiDragMove2Fill":
            return RiDragMove2Fill;
        case "ri:RiDragMove2Line":
            return RiDragMove2Line;
        case "ri:RiDragMoveFill":
            return RiDragMoveFill;
        case "ri:RiDragMoveLine":
            return RiDragMoveLine;
        case "ri:RiExpandDiagonal2Fill":
            return RiExpandDiagonal2Fill;
        case "ri:RiExpandDiagonal2Line":
            return RiExpandDiagonal2Line;
        case "ri:RiExpandDiagonalFill":
            return RiExpandDiagonalFill;
        case "ri:RiExpandDiagonalLine":
            return RiExpandDiagonalLine;
        case "ri:RiExpandDiagonalS2Fill":
            return RiExpandDiagonalS2Fill;
        case "ri:RiExpandDiagonalS2Line":
            return RiExpandDiagonalS2Line;
        case "ri:RiExpandDiagonalSFill":
            return RiExpandDiagonalSFill;
        case "ri:RiExpandDiagonalSLine":
            return RiExpandDiagonalSLine;
        case "ri:RiExpandHeightFill":
            return RiExpandHeightFill;
        case "ri:RiExpandHeightLine":
            return RiExpandHeightLine;
        case "ri:RiExpandHorizontalFill":
            return RiExpandHorizontalFill;
        case "ri:RiExpandHorizontalLine":
            return RiExpandHorizontalLine;
        case "ri:RiExpandHorizontalSFill":
            return RiExpandHorizontalSFill;
        case "ri:RiExpandHorizontalSLine":
            return RiExpandHorizontalSLine;
        case "ri:RiExpandLeftFill":
            return RiExpandLeftFill;
        case "ri:RiExpandLeftLine":
            return RiExpandLeftLine;
        case "ri:RiExpandLeftRightFill":
            return RiExpandLeftRightFill;
        case "ri:RiExpandLeftRightLine":
            return RiExpandLeftRightLine;
        case "ri:RiExpandRightFill":
            return RiExpandRightFill;
        case "ri:RiExpandRightLine":
            return RiExpandRightLine;
        case "ri:RiExpandUpDownFill":
            return RiExpandUpDownFill;
        case "ri:RiExpandUpDownLine":
            return RiExpandUpDownLine;
        case "ri:RiExpandVerticalFill":
            return RiExpandVerticalFill;
        case "ri:RiExpandVerticalLine":
            return RiExpandVerticalLine;
        case "ri:RiExpandVerticalSFill":
            return RiExpandVerticalSFill;
        case "ri:RiExpandVerticalSLine":
            return RiExpandVerticalSLine;
        case "ri:RiExpandWidthFill":
            return RiExpandWidthFill;
        case "ri:RiExpandWidthLine":
            return RiExpandWidthLine;
        case "ri:RiScrollToBottomFill":
            return RiScrollToBottomFill;
        case "ri:RiScrollToBottomLine":
            return RiScrollToBottomLine;
        case "ri:RiSkipDownFill":
            return RiSkipDownFill;
        case "ri:RiSkipDownLine":
            return RiSkipDownLine;
        case "ri:RiSkipLeftFill":
            return RiSkipLeftFill;
        case "ri:RiSkipLeftLine":
            return RiSkipLeftLine;
        case "ri:RiSkipRightFill":
            return RiSkipRightFill;
        case "ri:RiSkipRightLine":
            return RiSkipRightLine;
        case "ri:RiSkipUpFill":
            return RiSkipUpFill;
        case "ri:RiSkipUpLine":
            return RiSkipUpLine;
        case "ri:RiAncientGateFill":
            return RiAncientGateFill;
        case "ri:RiAncientGateLine":
            return RiAncientGateLine;
        case "ri:RiAncientPavilionFill":
            return RiAncientPavilionFill;
        case "ri:RiAncientPavilionLine":
            return RiAncientPavilionLine;
        case "ri:RiBankFill":
            return RiBankFill;
        case "ri:RiBankLine":
            return RiBankLine;
        case "ri:RiBuilding2Fill":
            return RiBuilding2Fill;
        case "ri:RiBuilding2Line":
            return RiBuilding2Line;
        case "ri:RiBuilding3Fill":
            return RiBuilding3Fill;
        case "ri:RiBuilding3Line":
            return RiBuilding3Line;
        case "ri:RiBuilding4Fill":
            return RiBuilding4Fill;
        case "ri:RiBuilding4Line":
            return RiBuilding4Line;
        case "ri:RiBuildingFill":
            return RiBuildingFill;
        case "ri:RiBuildingLine":
            return RiBuildingLine;
        case "ri:RiCommunityFill":
            return RiCommunityFill;
        case "ri:RiCommunityLine":
            return RiCommunityLine;
        case "ri:RiGovernmentFill":
            return RiGovernmentFill;
        case "ri:RiGovernmentLine":
            return RiGovernmentLine;
        case "ri:RiHome2Fill":
            return RiHome2Fill;
        case "ri:RiHome2Line":
            return RiHome2Line;
        case "ri:RiHome3Fill":
            return RiHome3Fill;
        case "ri:RiHome3Line":
            return RiHome3Line;
        case "ri:RiHome4Fill":
            return RiHome4Fill;
        case "ri:RiHome4Line":
            return RiHome4Line;
        case "ri:RiHome5Fill":
            return RiHome5Fill;
        case "ri:RiHome5Line":
            return RiHome5Line;
        case "ri:RiHome6Fill":
            return RiHome6Fill;
        case "ri:RiHome6Line":
            return RiHome6Line;
        case "ri:RiHome7Fill":
            return RiHome7Fill;
        case "ri:RiHome7Line":
            return RiHome7Line;
        case "ri:RiHome8Fill":
            return RiHome8Fill;
        case "ri:RiHome8Line":
            return RiHome8Line;
        case "ri:RiHome9Fill":
            return RiHome9Fill;
        case "ri:RiHome9Line":
            return RiHome9Line;
        case "ri:RiHomeFill":
            return RiHomeFill;
        case "ri:RiHomeGearFill":
            return RiHomeGearFill;
        case "ri:RiHomeGearLine":
            return RiHomeGearLine;
        case "ri:RiHomeHeartFill":
            return RiHomeHeartFill;
        case "ri:RiHomeHeartLine":
            return RiHomeHeartLine;
        case "ri:RiHomeLine":
            return RiHomeLine;
        case "ri:RiHomeOfficeFill":
            return RiHomeOfficeFill;
        case "ri:RiHomeOfficeLine":
            return RiHomeOfficeLine;
        case "ri:RiHomeSmile2Fill":
            return RiHomeSmile2Fill;
        case "ri:RiHomeSmile2Line":
            return RiHomeSmile2Line;
        case "ri:RiHomeSmileFill":
            return RiHomeSmileFill;
        case "ri:RiHomeSmileLine":
            return RiHomeSmileLine;
        case "ri:RiHomeWifiFill":
            return RiHomeWifiFill;
        case "ri:RiHomeWifiLine":
            return RiHomeWifiLine;
        case "ri:RiHospitalFill":
            return RiHospitalFill;
        case "ri:RiHospitalLine":
            return RiHospitalLine;
        case "ri:RiHotelFill":
            return RiHotelFill;
        case "ri:RiHotelLine":
            return RiHotelLine;
        case "ri:RiSchoolFill":
            return RiSchoolFill;
        case "ri:RiSchoolLine":
            return RiSchoolLine;
        case "ri:RiStore2Fill":
            return RiStore2Fill;
        case "ri:RiStore2Line":
            return RiStore2Line;
        case "ri:RiStore3Fill":
            return RiStore3Fill;
        case "ri:RiStore3Line":
            return RiStore3Line;
        case "ri:RiStoreFill":
            return RiStoreFill;
        case "ri:RiStoreLine":
            return RiStoreLine;
        case "ri:RiTentFill":
            return RiTentFill;
        case "ri:RiTentLine":
            return RiTentLine;
        case "ri:RiAdvertisementFill":
            return RiAdvertisementFill;
        case "ri:RiAdvertisementLine":
            return RiAdvertisementLine;
        case "ri:RiArchive2Fill":
            return RiArchive2Fill;
        case "ri:RiArchive2Line":
            return RiArchive2Line;
        case "ri:RiArchiveDrawerFill":
            return RiArchiveDrawerFill;
        case "ri:RiArchiveDrawerLine":
            return RiArchiveDrawerLine;
        case "ri:RiArchiveFill":
            return RiArchiveFill;
        case "ri:RiArchiveLine":
            return RiArchiveLine;
        case "ri:RiArchiveStackFill":
            return RiArchiveStackFill;
        case "ri:RiArchiveStackLine":
            return RiArchiveStackLine;
        case "ri:RiAtFill":
            return RiAtFill;
        case "ri:RiAtLine":
            return RiAtLine;
        case "ri:RiAttachmentFill":
            return RiAttachmentFill;
        case "ri:RiAttachmentLine":
            return RiAttachmentLine;
        case "ri:RiAwardFill":
            return RiAwardFill;
        case "ri:RiAwardLine":
            return RiAwardLine;
        case "ri:RiBarChart2Fill":
            return RiBarChart2Fill;
        case "ri:RiBarChart2Line":
            return RiBarChart2Line;
        case "ri:RiBarChartBoxAiFill":
            return RiBarChartBoxAiFill;
        case "ri:RiBarChartBoxAiLine":
            return RiBarChartBoxAiLine;
        case "ri:RiBarChartBoxFill":
            return RiBarChartBoxFill;
        case "ri:RiBarChartBoxLine":
            return RiBarChartBoxLine;
        case "ri:RiBarChartFill":
            return RiBarChartFill;
        case "ri:RiBarChartGroupedFill":
            return RiBarChartGroupedFill;
        case "ri:RiBarChartGroupedLine":
            return RiBarChartGroupedLine;
        case "ri:RiBarChartHorizontalFill":
            return RiBarChartHorizontalFill;
        case "ri:RiBarChartHorizontalLine":
            return RiBarChartHorizontalLine;
        case "ri:RiBarChartLine":
            return RiBarChartLine;
        case "ri:RiBookmark2Fill":
            return RiBookmark2Fill;
        case "ri:RiBookmark2Line":
            return RiBookmark2Line;
        case "ri:RiBookmark3Fill":
            return RiBookmark3Fill;
        case "ri:RiBookmark3Line":
            return RiBookmark3Line;
        case "ri:RiBookmarkFill":
            return RiBookmarkFill;
        case "ri:RiBookmarkLine":
            return RiBookmarkLine;
        case "ri:RiBriefcase2Fill":
            return RiBriefcase2Fill;
        case "ri:RiBriefcase2Line":
            return RiBriefcase2Line;
        case "ri:RiBriefcase3Fill":
            return RiBriefcase3Fill;
        case "ri:RiBriefcase3Line":
            return RiBriefcase3Line;
        case "ri:RiBriefcase4Fill":
            return RiBriefcase4Fill;
        case "ri:RiBriefcase4Line":
            return RiBriefcase4Line;
        case "ri:RiBriefcase5Fill":
            return RiBriefcase5Fill;
        case "ri:RiBriefcase5Line":
            return RiBriefcase5Line;
        case "ri:RiBriefcaseFill":
            return RiBriefcaseFill;
        case "ri:RiBriefcaseLine":
            return RiBriefcaseLine;
        case "ri:RiBubbleChartFill":
            return RiBubbleChartFill;
        case "ri:RiBubbleChartLine":
            return RiBubbleChartLine;
        case "ri:RiCalculatorFill":
            return RiCalculatorFill;
        case "ri:RiCalculatorLine":
            return RiCalculatorLine;
        case "ri:RiCalendar2Fill":
            return RiCalendar2Fill;
        case "ri:RiCalendar2Line":
            return RiCalendar2Line;
        case "ri:RiCalendarCheckFill":
            return RiCalendarCheckFill;
        case "ri:RiCalendarCheckLine":
            return RiCalendarCheckLine;
        case "ri:RiCalendarCloseFill":
            return RiCalendarCloseFill;
        case "ri:RiCalendarCloseLine":
            return RiCalendarCloseLine;
        case "ri:RiCalendarEventFill":
            return RiCalendarEventFill;
        case "ri:RiCalendarEventLine":
            return RiCalendarEventLine;
        case "ri:RiCalendarFill":
            return RiCalendarFill;
        case "ri:RiCalendarLine":
            return RiCalendarLine;
        case "ri:RiCalendarScheduleFill":
            return RiCalendarScheduleFill;
        case "ri:RiCalendarScheduleLine":
            return RiCalendarScheduleLine;
        case "ri:RiCalendarTodoFill":
            return RiCalendarTodoFill;
        case "ri:RiCalendarTodoLine":
            return RiCalendarTodoLine;
        case "ri:RiCloudFill":
            return RiCloudFill;
        case "ri:RiCloudLine":
            return RiCloudLine;
        case "ri:RiCloudOffFill":
            return RiCloudOffFill;
        case "ri:RiCloudOffLine":
            return RiCloudOffLine;
        case "ri:RiCopyleftFill":
            return RiCopyleftFill;
        case "ri:RiCopyleftLine":
            return RiCopyleftLine;
        case "ri:RiCopyrightFill":
            return RiCopyrightFill;
        case "ri:RiCopyrightLine":
            return RiCopyrightLine;
        case "ri:RiCreativeCommonsByFill":
            return RiCreativeCommonsByFill;
        case "ri:RiCreativeCommonsByLine":
            return RiCreativeCommonsByLine;
        case "ri:RiCreativeCommonsFill":
            return RiCreativeCommonsFill;
        case "ri:RiCreativeCommonsLine":
            return RiCreativeCommonsLine;
        case "ri:RiCreativeCommonsNcFill":
            return RiCreativeCommonsNcFill;
        case "ri:RiCreativeCommonsNcLine":
            return RiCreativeCommonsNcLine;
        case "ri:RiCreativeCommonsNdFill":
            return RiCreativeCommonsNdFill;
        case "ri:RiCreativeCommonsNdLine":
            return RiCreativeCommonsNdLine;
        case "ri:RiCreativeCommonsSaFill":
            return RiCreativeCommonsSaFill;
        case "ri:RiCreativeCommonsSaLine":
            return RiCreativeCommonsSaLine;
        case "ri:RiCreativeCommonsZeroFill":
            return RiCreativeCommonsZeroFill;
        case "ri:RiCreativeCommonsZeroLine":
            return RiCreativeCommonsZeroLine;
        case "ri:RiCustomerService2Fill":
            return RiCustomerService2Fill;
        case "ri:RiCustomerService2Line":
            return RiCustomerService2Line;
        case "ri:RiCustomerServiceFill":
            return RiCustomerServiceFill;
        case "ri:RiCustomerServiceLine":
            return RiCustomerServiceLine;
        case "ri:RiDonutChartFill":
            return RiDonutChartFill;
        case "ri:RiDonutChartLine":
            return RiDonutChartLine;
        case "ri:RiFlag2Fill":
            return RiFlag2Fill;
        case "ri:RiFlag2Line":
            return RiFlag2Line;
        case "ri:RiFlagFill":
            return RiFlagFill;
        case "ri:RiFlagLine":
            return RiFlagLine;
        case "ri:RiFlagOffFill":
            return RiFlagOffFill;
        case "ri:RiFlagOffLine":
            return RiFlagOffLine;
        case "ri:RiGlobalFill":
            return RiGlobalFill;
        case "ri:RiGlobalLine":
            return RiGlobalLine;
        case "ri:RiHonourFill":
            return RiHonourFill;
        case "ri:RiHonourLine":
            return RiHonourLine;
        case "ri:RiIdCardFill":
            return RiIdCardFill;
        case "ri:RiIdCardLine":
            return RiIdCardLine;
        case "ri:RiInbox2Fill":
            return RiInbox2Fill;
        case "ri:RiInbox2Line":
            return RiInbox2Line;
        case "ri:RiInboxArchiveFill":
            return RiInboxArchiveFill;
        case "ri:RiInboxArchiveLine":
            return RiInboxArchiveLine;
        case "ri:RiInboxFill":
            return RiInboxFill;
        case "ri:RiInboxLine":
            return RiInboxLine;
        case "ri:RiInboxUnarchiveFill":
            return RiInboxUnarchiveFill;
        case "ri:RiInboxUnarchiveLine":
            return RiInboxUnarchiveLine;
        case "ri:RiInfoCardFill":
            return RiInfoCardFill;
        case "ri:RiInfoCardLine":
            return RiInfoCardLine;
        case "ri:RiLineChartFill":
            return RiLineChartFill;
        case "ri:RiLineChartLine":
            return RiLineChartLine;
        case "ri:RiLinksFill":
            return RiLinksFill;
        case "ri:RiLinksLine":
            return RiLinksLine;
        case "ri:RiMailAddFill":
            return RiMailAddFill;
        case "ri:RiMailAddLine":
            return RiMailAddLine;
        case "ri:RiMailAiFill":
            return RiMailAiFill;
        case "ri:RiMailAiLine":
            return RiMailAiLine;
        case "ri:RiMailCheckFill":
            return RiMailCheckFill;
        case "ri:RiMailCheckLine":
            return RiMailCheckLine;
        case "ri:RiMailCloseFill":
            return RiMailCloseFill;
        case "ri:RiMailCloseLine":
            return RiMailCloseLine;
        case "ri:RiMailDownloadFill":
            return RiMailDownloadFill;
        case "ri:RiMailDownloadLine":
            return RiMailDownloadLine;
        case "ri:RiMailFill":
            return RiMailFill;
        case "ri:RiMailForbidFill":
            return RiMailForbidFill;
        case "ri:RiMailForbidLine":
            return RiMailForbidLine;
        case "ri:RiMailLine":
            return RiMailLine;
        case "ri:RiMailLockFill":
            return RiMailLockFill;
        case "ri:RiMailLockLine":
            return RiMailLockLine;
        case "ri:RiMailOpenFill":
            return RiMailOpenFill;
        case "ri:RiMailOpenLine":
            return RiMailOpenLine;
        case "ri:RiMailSendFill":
            return RiMailSendFill;
        case "ri:RiMailSendLine":
            return RiMailSendLine;
        case "ri:RiMailSettingsFill":
            return RiMailSettingsFill;
        case "ri:RiMailSettingsLine":
            return RiMailSettingsLine;
        case "ri:RiMailStarFill":
            return RiMailStarFill;
        case "ri:RiMailStarLine":
            return RiMailStarLine;
        case "ri:RiMailUnreadFill":
            return RiMailUnreadFill;
        case "ri:RiMailUnreadLine":
            return RiMailUnreadLine;
        case "ri:RiMailVolumeFill":
            return RiMailVolumeFill;
        case "ri:RiMailVolumeLine":
            return RiMailVolumeLine;
        case "ri:RiMedal2Fill":
            return RiMedal2Fill;
        case "ri:RiMedal2Line":
            return RiMedal2Line;
        case "ri:RiMedalFill":
            return RiMedalFill;
        case "ri:RiMedalLine":
            return RiMedalLine;
        case "ri:RiMegaphoneFill":
            return RiMegaphoneFill;
        case "ri:RiMegaphoneLine":
            return RiMegaphoneLine;
        case "ri:RiPassExpiredFill":
            return RiPassExpiredFill;
        case "ri:RiPassExpiredLine":
            return RiPassExpiredLine;
        case "ri:RiPassPendingFill":
            return RiPassPendingFill;
        case "ri:RiPassPendingLine":
            return RiPassPendingLine;
        case "ri:RiPassValidFill":
            return RiPassValidFill;
        case "ri:RiPassValidLine":
            return RiPassValidLine;
        case "ri:RiPieChart2Fill":
            return RiPieChart2Fill;
        case "ri:RiPieChart2Line":
            return RiPieChart2Line;
        case "ri:RiPieChartBoxFill":
            return RiPieChartBoxFill;
        case "ri:RiPieChartBoxLine":
            return RiPieChartBoxLine;
        case "ri:RiPieChartFill":
            return RiPieChartFill;
        case "ri:RiPieChartLine":
            return RiPieChartLine;
        case "ri:RiPresentationFill":
            return RiPresentationFill;
        case "ri:RiPresentationLine":
            return RiPresentationLine;
        case "ri:RiPrinterCloudFill":
            return RiPrinterCloudFill;
        case "ri:RiPrinterCloudLine":
            return RiPrinterCloudLine;
        case "ri:RiPrinterFill":
            return RiPrinterFill;
        case "ri:RiPrinterLine":
            return RiPrinterLine;
        case "ri:RiProfileFill":
            return RiProfileFill;
        case "ri:RiProfileLine":
            return RiProfileLine;
        case "ri:RiProjector2Fill":
            return RiProjector2Fill;
        case "ri:RiProjector2Line":
            return RiProjector2Line;
        case "ri:RiProjectorFill":
            return RiProjectorFill;
        case "ri:RiProjectorLine":
            return RiProjectorLine;
        case "ri:RiRecordMailFill":
            return RiRecordMailFill;
        case "ri:RiRecordMailLine":
            return RiRecordMailLine;
        case "ri:RiRegisteredFill":
            return RiRegisteredFill;
        case "ri:RiRegisteredLine":
            return RiRegisteredLine;
        case "ri:RiReplyAllFill":
            return RiReplyAllFill;
        case "ri:RiReplyAllLine":
            return RiReplyAllLine;
        case "ri:RiReplyFill":
            return RiReplyFill;
        case "ri:RiReplyLine":
            return RiReplyLine;
        case "ri:RiSendPlane2Fill":
            return RiSendPlane2Fill;
        case "ri:RiSendPlane2Line":
            return RiSendPlane2Line;
        case "ri:RiSendPlaneFill":
            return RiSendPlaneFill;
        case "ri:RiSendPlaneLine":
            return RiSendPlaneLine;
        case "ri:RiSeoFill":
            return RiSeoFill;
        case "ri:RiSeoLine":
            return RiSeoLine;
        case "ri:RiServiceFill":
            return RiServiceFill;
        case "ri:RiServiceLine":
            return RiServiceLine;
        case "ri:RiShakeHandsFill":
            return RiShakeHandsFill;
        case "ri:RiShakeHandsLine":
            return RiShakeHandsLine;
        case "ri:RiSlideshow2Fill":
            return RiSlideshow2Fill;
        case "ri:RiSlideshow2Line":
            return RiSlideshow2Line;
        case "ri:RiSlideshow3Fill":
            return RiSlideshow3Fill;
        case "ri:RiSlideshow3Line":
            return RiSlideshow3Line;
        case "ri:RiSlideshow4Fill":
            return RiSlideshow4Fill;
        case "ri:RiSlideshow4Line":
            return RiSlideshow4Line;
        case "ri:RiSlideshowFill":
            return RiSlideshowFill;
        case "ri:RiSlideshowLine":
            return RiSlideshowLine;
        case "ri:RiStackFill":
            return RiStackFill;
        case "ri:RiStackLine":
            return RiStackLine;
        case "ri:RiTrademarkFill":
            return RiTrademarkFill;
        case "ri:RiTrademarkLine":
            return RiTrademarkLine;
        case "ri:RiTriangularFlagFill":
            return RiTriangularFlagFill;
        case "ri:RiTriangularFlagLine":
            return RiTriangularFlagLine;
        case "ri:RiVerifiedBadgeFill":
            return RiVerifiedBadgeFill;
        case "ri:RiVerifiedBadgeLine":
            return RiVerifiedBadgeLine;
        case "ri:RiWindow2Fill":
            return RiWindow2Fill;
        case "ri:RiWindow2Line":
            return RiWindow2Line;
        case "ri:RiWindowFill":
            return RiWindowFill;
        case "ri:RiWindowLine":
            return RiWindowLine;
        case "ri:RiChat1Fill":
            return RiChat1Fill;
        case "ri:RiChat1Line":
            return RiChat1Line;
        case "ri:RiChat2Fill":
            return RiChat2Fill;
        case "ri:RiChat2Line":
            return RiChat2Line;
        case "ri:RiChat3Fill":
            return RiChat3Fill;
        case "ri:RiChat3Line":
            return RiChat3Line;
        case "ri:RiChat4Fill":
            return RiChat4Fill;
        case "ri:RiChat4Line":
            return RiChat4Line;
        case "ri:RiChatAiFill":
            return RiChatAiFill;
        case "ri:RiChatAiLine":
            return RiChatAiLine;
        case "ri:RiChatCheckFill":
            return RiChatCheckFill;
        case "ri:RiChatCheckLine":
            return RiChatCheckLine;
        case "ri:RiChatDeleteFill":
            return RiChatDeleteFill;
        case "ri:RiChatDeleteLine":
            return RiChatDeleteLine;
        case "ri:RiChatDownloadFill":
            return RiChatDownloadFill;
        case "ri:RiChatDownloadLine":
            return RiChatDownloadLine;
        case "ri:RiChatFollowUpFill":
            return RiChatFollowUpFill;
        case "ri:RiChatFollowUpLine":
            return RiChatFollowUpLine;
        case "ri:RiChatForwardFill":
            return RiChatForwardFill;
        case "ri:RiChatForwardLine":
            return RiChatForwardLine;
        case "ri:RiChatHeartFill":
            return RiChatHeartFill;
        case "ri:RiChatHeartLine":
            return RiChatHeartLine;
        case "ri:RiChatHistoryFill":
            return RiChatHistoryFill;
        case "ri:RiChatHistoryLine":
            return RiChatHistoryLine;
        case "ri:RiChatNewFill":
            return RiChatNewFill;
        case "ri:RiChatNewLine":
            return RiChatNewLine;
        case "ri:RiChatOffFill":
            return RiChatOffFill;
        case "ri:RiChatOffLine":
            return RiChatOffLine;
        case "ri:RiChatPollFill":
            return RiChatPollFill;
        case "ri:RiChatPollLine":
            return RiChatPollLine;
        case "ri:RiChatPrivateFill":
            return RiChatPrivateFill;
        case "ri:RiChatPrivateLine":
            return RiChatPrivateLine;
        case "ri:RiChatQuoteFill":
            return RiChatQuoteFill;
        case "ri:RiChatQuoteLine":
            return RiChatQuoteLine;
        case "ri:RiChatSearchFill":
            return RiChatSearchFill;
        case "ri:RiChatSearchLine":
            return RiChatSearchLine;
        case "ri:RiChatSettingsFill":
            return RiChatSettingsFill;
        case "ri:RiChatSettingsLine":
            return RiChatSettingsLine;
        case "ri:RiChatSmile2Fill":
            return RiChatSmile2Fill;
        case "ri:RiChatSmile2Line":
            return RiChatSmile2Line;
        case "ri:RiChatSmile3Fill":
            return RiChatSmile3Fill;
        case "ri:RiChatSmile3Line":
            return RiChatSmile3Line;
        case "ri:RiChatSmileAiFill":
            return RiChatSmileAiFill;
        case "ri:RiChatSmileAiLine":
            return RiChatSmileAiLine;
        case "ri:RiChatSmileFill":
            return RiChatSmileFill;
        case "ri:RiChatSmileLine":
            return RiChatSmileLine;
        case "ri:RiChatThreadFill":
            return RiChatThreadFill;
        case "ri:RiChatThreadLine":
            return RiChatThreadLine;
        case "ri:RiChatUnreadFill":
            return RiChatUnreadFill;
        case "ri:RiChatUnreadLine":
            return RiChatUnreadLine;
        case "ri:RiChatUploadFill":
            return RiChatUploadFill;
        case "ri:RiChatUploadLine":
            return RiChatUploadLine;
        case "ri:RiChatVoiceAiFill":
            return RiChatVoiceAiFill;
        case "ri:RiChatVoiceAiLine":
            return RiChatVoiceAiLine;
        case "ri:RiChatVoiceFill":
            return RiChatVoiceFill;
        case "ri:RiChatVoiceLine":
            return RiChatVoiceLine;
        case "ri:RiDiscussFill":
            return RiDiscussFill;
        case "ri:RiDiscussLine":
            return RiDiscussLine;
        case "ri:RiEmojiStickerFill":
            return RiEmojiStickerFill;
        case "ri:RiEmojiStickerLine":
            return RiEmojiStickerLine;
        case "ri:RiFeedbackFill":
            return RiFeedbackFill;
        case "ri:RiFeedbackLine":
            return RiFeedbackLine;
        case "ri:RiMessage2Fill":
            return RiMessage2Fill;
        case "ri:RiMessage2Line":
            return RiMessage2Line;
        case "ri:RiMessage3Fill":
            return RiMessage3Fill;
        case "ri:RiMessage3Line":
            return RiMessage3Line;
        case "ri:RiMessageFill":
            return RiMessageFill;
        case "ri:RiMessageLine":
            return RiMessageLine;
        case "ri:RiQuestionAnswerFill":
            return RiQuestionAnswerFill;
        case "ri:RiQuestionAnswerLine":
            return RiQuestionAnswerLine;
        case "ri:RiQuestionnaireFill":
            return RiQuestionnaireFill;
        case "ri:RiQuestionnaireLine":
            return RiQuestionnaireLine;
        case "ri:RiSpeakAiFill":
            return RiSpeakAiFill;
        case "ri:RiSpeakAiLine":
            return RiSpeakAiLine;
        case "ri:RiSpeakFill":
            return RiSpeakFill;
        case "ri:RiSpeakLine":
            return RiSpeakLine;
        case "ri:RiVideoChatFill":
            return RiVideoChatFill;
        case "ri:RiVideoChatLine":
            return RiVideoChatLine;
        case "ri:RiAlignItemBottomFill":
            return RiAlignItemBottomFill;
        case "ri:RiAlignItemBottomLine":
            return RiAlignItemBottomLine;
        case "ri:RiAlignItemHorizontalCenterFill":
            return RiAlignItemHorizontalCenterFill;
        case "ri:RiAlignItemHorizontalCenterLine":
            return RiAlignItemHorizontalCenterLine;
        case "ri:RiAlignItemLeftFill":
            return RiAlignItemLeftFill;
        case "ri:RiAlignItemLeftLine":
            return RiAlignItemLeftLine;
        case "ri:RiAlignItemRightFill":
            return RiAlignItemRightFill;
        case "ri:RiAlignItemRightLine":
            return RiAlignItemRightLine;
        case "ri:RiAlignItemTopFill":
            return RiAlignItemTopFill;
        case "ri:RiAlignItemTopLine":
            return RiAlignItemTopLine;
        case "ri:RiAlignItemVerticalCenterFill":
            return RiAlignItemVerticalCenterFill;
        case "ri:RiAlignItemVerticalCenterLine":
            return RiAlignItemVerticalCenterLine;
        case "ri:RiAnticlockwise2Fill":
            return RiAnticlockwise2Fill;
        case "ri:RiAnticlockwise2Line":
            return RiAnticlockwise2Line;
        case "ri:RiAnticlockwiseFill":
            return RiAnticlockwiseFill;
        case "ri:RiAnticlockwiseLine":
            return RiAnticlockwiseLine;
        case "ri:RiArtboard2Fill":
            return RiArtboard2Fill;
        case "ri:RiArtboard2Line":
            return RiArtboard2Line;
        case "ri:RiArtboardFill":
            return RiArtboardFill;
        case "ri:RiArtboardLine":
            return RiArtboardLine;
        case "ri:RiBallPenFill":
            return RiBallPenFill;
        case "ri:RiBallPenLine":
            return RiBallPenLine;
        case "ri:RiBlurOffFill":
            return RiBlurOffFill;
        case "ri:RiBlurOffLine":
            return RiBlurOffLine;
        case "ri:RiBrush2Fill":
            return RiBrush2Fill;
        case "ri:RiBrush2Line":
            return RiBrush2Line;
        case "ri:RiBrush3Fill":
            return RiBrush3Fill;
        case "ri:RiBrush3Line":
            return RiBrush3Line;
        case "ri:RiBrush4Fill":
            return RiBrush4Fill;
        case "ri:RiBrush4Line":
            return RiBrush4Line;
        case "ri:RiBrushAiFill":
            return RiBrushAiFill;
        case "ri:RiBrushAiLine":
            return RiBrushAiLine;
        case "ri:RiBrushFill":
            return RiBrushFill;
        case "ri:RiBrushLine":
            return RiBrushLine;
        case "ri:RiCircleFill":
            return RiCircleFill;
        case "ri:RiCircleLine":
            return RiCircleLine;
        case "ri:RiClockwise2Fill":
            return RiClockwise2Fill;
        case "ri:RiClockwise2Line":
            return RiClockwise2Line;
        case "ri:RiClockwiseFill":
            return RiClockwiseFill;
        case "ri:RiClockwiseLine":
            return RiClockwiseLine;
        case "ri:RiCollageFill":
            return RiCollageFill;
        case "ri:RiCollageLine":
            return RiCollageLine;
        case "ri:RiColorFilterAiFill":
            return RiColorFilterAiFill;
        case "ri:RiColorFilterAiLine":
            return RiColorFilterAiLine;
        case "ri:RiColorFilterFill":
            return RiColorFilterFill;
        case "ri:RiColorFilterLine":
            return RiColorFilterLine;
        case "ri:RiCompasses2Fill":
            return RiCompasses2Fill;
        case "ri:RiCompasses2Line":
            return RiCompasses2Line;
        case "ri:RiCompassesFill":
            return RiCompassesFill;
        case "ri:RiCompassesLine":
            return RiCompassesLine;
        case "ri:RiContrast2Fill":
            return RiContrast2Fill;
        case "ri:RiContrast2Line":
            return RiContrast2Line;
        case "ri:RiContrastDrop2Fill":
            return RiContrastDrop2Fill;
        case "ri:RiContrastDrop2Line":
            return RiContrastDrop2Line;
        case "ri:RiContrastDropFill":
            return RiContrastDropFill;
        case "ri:RiContrastDropLine":
            return RiContrastDropLine;
        case "ri:RiContrastFill":
            return RiContrastFill;
        case "ri:RiContrastLine":
            return RiContrastLine;
        case "ri:RiCrop2Fill":
            return RiCrop2Fill;
        case "ri:RiCrop2Line":
            return RiCrop2Line;
        case "ri:RiCropFill":
            return RiCropFill;
        case "ri:RiCropLine":
            return RiCropLine;
        case "ri:RiCrosshair2Fill":
            return RiCrosshair2Fill;
        case "ri:RiCrosshair2Line":
            return RiCrosshair2Line;
        case "ri:RiCrosshairFill":
            return RiCrosshairFill;
        case "ri:RiCrosshairLine":
            return RiCrosshairLine;
        case "ri:RiDragDropFill":
            return RiDragDropFill;
        case "ri:RiDragDropLine":
            return RiDragDropLine;
        case "ri:RiDropFill":
            return RiDropFill;
        case "ri:RiDropLine":
            return RiDropLine;
        case "ri:RiEdit2Fill":
            return RiEdit2Fill;
        case "ri:RiEdit2Line":
            return RiEdit2Line;
        case "ri:RiEditBoxFill":
            return RiEditBoxFill;
        case "ri:RiEditBoxLine":
            return RiEditBoxLine;
        case "ri:RiEditCircleFill":
            return RiEditCircleFill;
        case "ri:RiEditCircleLine":
            return RiEditCircleLine;
        case "ri:RiEditFill":
            return RiEditFill;
        case "ri:RiEditLine":
            return RiEditLine;
        case "ri:RiEraserFill":
            return RiEraserFill;
        case "ri:RiEraserLine":
            return RiEraserLine;
        case "ri:RiFlipHorizontal2Fill":
            return RiFlipHorizontal2Fill;
        case "ri:RiFlipHorizontal2Line":
            return RiFlipHorizontal2Line;
        case "ri:RiFlipHorizontalFill":
            return RiFlipHorizontalFill;
        case "ri:RiFlipHorizontalLine":
            return RiFlipHorizontalLine;
        case "ri:RiFlipVertical2Fill":
            return RiFlipVertical2Fill;
        case "ri:RiFlipVertical2Line":
            return RiFlipVertical2Line;
        case "ri:RiFlipVerticalFill":
            return RiFlipVerticalFill;
        case "ri:RiFlipVerticalLine":
            return RiFlipVerticalLine;
        case "ri:RiFocus2Fill":
            return RiFocus2Fill;
        case "ri:RiFocus2Line":
            return RiFocus2Line;
        case "ri:RiFocus3Fill":
            return RiFocus3Fill;
        case "ri:RiFocus3Line":
            return RiFocus3Line;
        case "ri:RiFocusFill":
            return RiFocusFill;
        case "ri:RiFocusLine":
            return RiFocusLine;
        case "ri:RiGridFill":
            return RiGridFill;
        case "ri:RiGridLine":
            return RiGridLine;
        case "ri:RiHammerFill":
            return RiHammerFill;
        case "ri:RiHammerLine":
            return RiHammerLine;
        case "ri:RiHexagonFill":
            return RiHexagonFill;
        case "ri:RiHexagonLine":
            return RiHexagonLine;
        case "ri:RiInkBottleFill":
            return RiInkBottleFill;
        case "ri:RiInkBottleLine":
            return RiInkBottleLine;
        case "ri:RiInputMethodFill":
            return RiInputMethodFill;
        case "ri:RiInputMethodLine":
            return RiInputMethodLine;
        case "ri:RiLayout2Fill":
            return RiLayout2Fill;
        case "ri:RiLayout2Line":
            return RiLayout2Line;
        case "ri:RiLayout3Fill":
            return RiLayout3Fill;
        case "ri:RiLayout3Line":
            return RiLayout3Line;
        case "ri:RiLayout4Fill":
            return RiLayout4Fill;
        case "ri:RiLayout4Line":
            return RiLayout4Line;
        case "ri:RiLayout5Fill":
            return RiLayout5Fill;
        case "ri:RiLayout5Line":
            return RiLayout5Line;
        case "ri:RiLayout6Fill":
            return RiLayout6Fill;
        case "ri:RiLayout6Line":
            return RiLayout6Line;
        case "ri:RiLayoutBottom2Fill":
            return RiLayoutBottom2Fill;
        case "ri:RiLayoutBottom2Line":
            return RiLayoutBottom2Line;
        case "ri:RiLayoutBottomFill":
            return RiLayoutBottomFill;
        case "ri:RiLayoutBottomLine":
            return RiLayoutBottomLine;
        case "ri:RiLayoutColumnFill":
            return RiLayoutColumnFill;
        case "ri:RiLayoutColumnLine":
            return RiLayoutColumnLine;
        case "ri:RiLayoutFill":
            return RiLayoutFill;
        case "ri:RiLayoutGrid2Fill":
            return RiLayoutGrid2Fill;
        case "ri:RiLayoutGrid2Line":
            return RiLayoutGrid2Line;
        case "ri:RiLayoutGridFill":
            return RiLayoutGridFill;
        case "ri:RiLayoutGridLine":
            return RiLayoutGridLine;
        case "ri:RiLayoutHorizontalFill":
            return RiLayoutHorizontalFill;
        case "ri:RiLayoutHorizontalLine":
            return RiLayoutHorizontalLine;
        case "ri:RiLayoutLeft2Fill":
            return RiLayoutLeft2Fill;
        case "ri:RiLayoutLeft2Line":
            return RiLayoutLeft2Line;
        case "ri:RiLayoutLeftFill":
            return RiLayoutLeftFill;
        case "ri:RiLayoutLeftLine":
            return RiLayoutLeftLine;
        case "ri:RiLayoutLine":
            return RiLayoutLine;
        case "ri:RiLayoutMasonryFill":
            return RiLayoutMasonryFill;
        case "ri:RiLayoutMasonryLine":
            return RiLayoutMasonryLine;
        case "ri:RiLayoutRight2Fill":
            return RiLayoutRight2Fill;
        case "ri:RiLayoutRight2Line":
            return RiLayoutRight2Line;
        case "ri:RiLayoutRightFill":
            return RiLayoutRightFill;
        case "ri:RiLayoutRightLine":
            return RiLayoutRightLine;
        case "ri:RiLayoutRowFill":
            return RiLayoutRowFill;
        case "ri:RiLayoutRowLine":
            return RiLayoutRowLine;
        case "ri:RiLayoutTop2Fill":
            return RiLayoutTop2Fill;
        case "ri:RiLayoutTop2Line":
            return RiLayoutTop2Line;
        case "ri:RiLayoutTopFill":
            return RiLayoutTopFill;
        case "ri:RiLayoutTopLine":
            return RiLayoutTopLine;
        case "ri:RiLayoutVerticalFill":
            return RiLayoutVerticalFill;
        case "ri:RiLayoutVerticalLine":
            return RiLayoutVerticalLine;
        case "ri:RiMagicFill":
            return RiMagicFill;
        case "ri:RiMagicLine":
            return RiMagicLine;
        case "ri:RiMarkPenFill":
            return RiMarkPenFill;
        case "ri:RiMarkPenLine":
            return RiMarkPenLine;
        case "ri:RiMarkupFill":
            return RiMarkupFill;
        case "ri:RiMarkupLine":
            return RiMarkupLine;
        case "ri:RiOctagonFill":
            return RiOctagonFill;
        case "ri:RiOctagonLine":
            return RiOctagonLine;
        case "ri:RiPaintBrushFill":
            return RiPaintBrushFill;
        case "ri:RiPaintBrushLine":
            return RiPaintBrushLine;
        case "ri:RiPaintFill":
            return RiPaintFill;
        case "ri:RiPaintLine":
            return RiPaintLine;
        case "ri:RiPaletteFill":
            return RiPaletteFill;
        case "ri:RiPaletteLine":
            return RiPaletteLine;
        case "ri:RiPantoneFill":
            return RiPantoneFill;
        case "ri:RiPantoneLine":
            return RiPantoneLine;
        case "ri:RiPenNibFill":
            return RiPenNibFill;
        case "ri:RiPenNibLine":
            return RiPenNibLine;
        case "ri:RiPencilFill":
            return RiPencilFill;
        case "ri:RiPencilLine":
            return RiPencilLine;
        case "ri:RiPencilRuler2Fill":
            return RiPencilRuler2Fill;
        case "ri:RiPencilRuler2Line":
            return RiPencilRuler2Line;
        case "ri:RiPencilRulerFill":
            return RiPencilRulerFill;
        case "ri:RiPencilRulerLine":
            return RiPencilRulerLine;
        case "ri:RiPentagonFill":
            return RiPentagonFill;
        case "ri:RiPentagonLine":
            return RiPentagonLine;
        case "ri:RiQuillPenAiFill":
            return RiQuillPenAiFill;
        case "ri:RiQuillPenAiLine":
            return RiQuillPenAiLine;
        case "ri:RiQuillPenFill":
            return RiQuillPenFill;
        case "ri:RiQuillPenLine":
            return RiQuillPenLine;
        case "ri:RiRectangleFill":
            return RiRectangleFill;
        case "ri:RiRectangleLine":
            return RiRectangleLine;
        case "ri:RiRuler2Fill":
            return RiRuler2Fill;
        case "ri:RiRuler2Line":
            return RiRuler2Line;
        case "ri:RiRulerFill":
            return RiRulerFill;
        case "ri:RiRulerLine":
            return RiRulerLine;
        case "ri:RiScissors2Fill":
            return RiScissors2Fill;
        case "ri:RiScissors2Line":
            return RiScissors2Line;
        case "ri:RiScissorsCutFill":
            return RiScissorsCutFill;
        case "ri:RiScissorsCutLine":
            return RiScissorsCutLine;
        case "ri:RiScissorsFill":
            return RiScissorsFill;
        case "ri:RiScissorsLine":
            return RiScissorsLine;
        case "ri:RiScreenshot2Fill":
            return RiScreenshot2Fill;
        case "ri:RiScreenshot2Line":
            return RiScreenshot2Line;
        case "ri:RiScreenshotFill":
            return RiScreenshotFill;
        case "ri:RiScreenshotLine":
            return RiScreenshotLine;
        case "ri:RiShadowFill":
            return RiShadowFill;
        case "ri:RiShadowLine":
            return RiShadowLine;
        case "ri:RiShape2Fill":
            return RiShape2Fill;
        case "ri:RiShape2Line":
            return RiShape2Line;
        case "ri:RiShapeFill":
            return RiShapeFill;
        case "ri:RiShapeLine":
            return RiShapeLine;
        case "ri:RiShapesFill":
            return RiShapesFill;
        case "ri:RiShapesLine":
            return RiShapesLine;
        case "ri:RiSipFill":
            return RiSipFill;
        case "ri:RiSipLine":
            return RiSipLine;
        case "ri:RiSliceFill":
            return RiSliceFill;
        case "ri:RiSliceLine":
            return RiSliceLine;
        case "ri:RiSquareFill":
            return RiSquareFill;
        case "ri:RiSquareLine":
            return RiSquareLine;
        case "ri:RiTBoxFill":
            return RiTBoxFill;
        case "ri:RiTBoxLine":
            return RiTBoxLine;
        case "ri:RiTableAltFill":
            return RiTableAltFill;
        case "ri:RiTableAltLine":
            return RiTableAltLine;
        case "ri:RiTableFill":
            return RiTableFill;
        case "ri:RiTableLine":
            return RiTableLine;
        case "ri:RiToolsFill":
            return RiToolsFill;
        case "ri:RiToolsLine":
            return RiToolsLine;
        case "ri:RiTriangleFill":
            return RiTriangleFill;
        case "ri:RiTriangleLine":
            return RiTriangleLine;
        case "ri:RiBracesFill":
            return RiBracesFill;
        case "ri:RiBracesLine":
            return RiBracesLine;
        case "ri:RiBracketsFill":
            return RiBracketsFill;
        case "ri:RiBracketsLine":
            return RiBracketsLine;
        case "ri:RiBug2Fill":
            return RiBug2Fill;
        case "ri:RiBug2Line":
            return RiBug2Line;
        case "ri:RiBugFill":
            return RiBugFill;
        case "ri:RiBugLine":
            return RiBugLine;
        case "ri:RiCodeAiFill":
            return RiCodeAiFill;
        case "ri:RiCodeAiLine":
            return RiCodeAiLine;
        case "ri:RiCodeBoxFill":
            return RiCodeBoxFill;
        case "ri:RiCodeBoxLine":
            return RiCodeBoxLine;
        case "ri:RiCodeFill":
            return RiCodeFill;
        case "ri:RiCodeLine":
            return RiCodeLine;
        case "ri:RiCodeSFill":
            return RiCodeSFill;
        case "ri:RiCodeSLine":
            return RiCodeSLine;
        case "ri:RiCodeSSlashFill":
            return RiCodeSSlashFill;
        case "ri:RiCodeSSlashLine":
            return RiCodeSSlashLine;
        case "ri:RiCommandFill":
            return RiCommandFill;
        case "ri:RiCommandLine":
            return RiCommandLine;
        case "ri:RiCss3Fill":
            return RiCss3Fill;
        case "ri:RiCss3Line":
            return RiCss3Line;
        case "ri:RiCursorFill":
            return RiCursorFill;
        case "ri:RiCursorLine":
            return RiCursorLine;
        case "ri:RiGitBranchFill":
            return RiGitBranchFill;
        case "ri:RiGitBranchLine":
            return RiGitBranchLine;
        case "ri:RiGitClosePullRequestFill":
            return RiGitClosePullRequestFill;
        case "ri:RiGitClosePullRequestLine":
            return RiGitClosePullRequestLine;
        case "ri:RiGitCommitFill":
            return RiGitCommitFill;
        case "ri:RiGitCommitLine":
            return RiGitCommitLine;
        case "ri:RiGitForkFill":
            return RiGitForkFill;
        case "ri:RiGitForkLine":
            return RiGitForkLine;
        case "ri:RiGitMergeFill":
            return RiGitMergeFill;
        case "ri:RiGitMergeLine":
            return RiGitMergeLine;
        case "ri:RiGitPrDraftFill":
            return RiGitPrDraftFill;
        case "ri:RiGitPrDraftLine":
            return RiGitPrDraftLine;
        case "ri:RiGitPullRequestFill":
            return RiGitPullRequestFill;
        case "ri:RiGitPullRequestLine":
            return RiGitPullRequestLine;
        case "ri:RiGitRepositoryCommitsFill":
            return RiGitRepositoryCommitsFill;
        case "ri:RiGitRepositoryCommitsLine":
            return RiGitRepositoryCommitsLine;
        case "ri:RiGitRepositoryFill":
            return RiGitRepositoryFill;
        case "ri:RiGitRepositoryLine":
            return RiGitRepositoryLine;
        case "ri:RiGitRepositoryPrivateFill":
            return RiGitRepositoryPrivateFill;
        case "ri:RiGitRepositoryPrivateLine":
            return RiGitRepositoryPrivateLine;
        case "ri:RiHtml5Fill":
            return RiHtml5Fill;
        case "ri:RiHtml5Line":
            return RiHtml5Line;
        case "ri:RiJavascriptFill":
            return RiJavascriptFill;
        case "ri:RiJavascriptLine":
            return RiJavascriptLine;
        case "ri:RiParenthesesFill":
            return RiParenthesesFill;
        case "ri:RiParenthesesLine":
            return RiParenthesesLine;
        case "ri:RiPhpFill":
            return RiPhpFill;
        case "ri:RiPhpLine":
            return RiPhpLine;
        case "ri:RiPuzzle2Fill":
            return RiPuzzle2Fill;
        case "ri:RiPuzzle2Line":
            return RiPuzzle2Line;
        case "ri:RiPuzzleFill":
            return RiPuzzleFill;
        case "ri:RiPuzzleLine":
            return RiPuzzleLine;
        case "ri:RiTerminalBoxFill":
            return RiTerminalBoxFill;
        case "ri:RiTerminalBoxLine":
            return RiTerminalBoxLine;
        case "ri:RiTerminalFill":
            return RiTerminalFill;
        case "ri:RiTerminalLine":
            return RiTerminalLine;
        case "ri:RiTerminalWindowFill":
            return RiTerminalWindowFill;
        case "ri:RiTerminalWindowLine":
            return RiTerminalWindowLine;
        case "ri:RiAirplayFill":
            return RiAirplayFill;
        case "ri:RiAirplayLine":
            return RiAirplayLine;
        case "ri:RiBarcodeBoxFill":
            return RiBarcodeBoxFill;
        case "ri:RiBarcodeBoxLine":
            return RiBarcodeBoxLine;
        case "ri:RiBarcodeFill":
            return RiBarcodeFill;
        case "ri:RiBarcodeLine":
            return RiBarcodeLine;
        case "ri:RiBaseStationFill":
            return RiBaseStationFill;
        case "ri:RiBaseStationLine":
            return RiBaseStationLine;
        case "ri:RiBattery2ChargeFill":
            return RiBattery2ChargeFill;
        case "ri:RiBattery2ChargeLine":
            return RiBattery2ChargeLine;
        case "ri:RiBattery2Fill":
            return RiBattery2Fill;
        case "ri:RiBattery2Line":
            return RiBattery2Line;
        case "ri:RiBatteryChargeFill":
            return RiBatteryChargeFill;
        case "ri:RiBatteryChargeLine":
            return RiBatteryChargeLine;
        case "ri:RiBatteryFill":
            return RiBatteryFill;
        case "ri:RiBatteryLine":
            return RiBatteryLine;
        case "ri:RiBatteryLowFill":
            return RiBatteryLowFill;
        case "ri:RiBatteryLowLine":
            return RiBatteryLowLine;
        case "ri:RiBatterySaverFill":
            return RiBatterySaverFill;
        case "ri:RiBatterySaverLine":
            return RiBatterySaverLine;
        case "ri:RiBatteryShareFill":
            return RiBatteryShareFill;
        case "ri:RiBatteryShareLine":
            return RiBatteryShareLine;
        case "ri:RiBluetoothConnectFill":
            return RiBluetoothConnectFill;
        case "ri:RiBluetoothConnectLine":
            return RiBluetoothConnectLine;
        case "ri:RiBluetoothFill":
            return RiBluetoothFill;
        case "ri:RiBluetoothLine":
            return RiBluetoothLine;
        case "ri:RiCastFill":
            return RiCastFill;
        case "ri:RiCastLine":
            return RiCastLine;
        case "ri:RiCellphoneFill":
            return RiCellphoneFill;
        case "ri:RiCellphoneLine":
            return RiCellphoneLine;
        case "ri:RiComputerFill":
            return RiComputerFill;
        case "ri:RiComputerLine":
            return RiComputerLine;
        case "ri:RiCpuFill":
            return RiCpuFill;
        case "ri:RiCpuLine":
            return RiCpuLine;
        case "ri:RiDashboard2Fill":
            return RiDashboard2Fill;
        case "ri:RiDashboard2Line":
            return RiDashboard2Line;
        case "ri:RiDashboard3Fill":
            return RiDashboard3Fill;
        case "ri:RiDashboard3Line":
            return RiDashboard3Line;
        case "ri:RiDatabase2Fill":
            return RiDatabase2Fill;
        case "ri:RiDatabase2Line":
            return RiDatabase2Line;
        case "ri:RiDatabaseFill":
            return RiDatabaseFill;
        case "ri:RiDatabaseLine":
            return RiDatabaseLine;
        case "ri:RiDeviceFill":
            return RiDeviceFill;
        case "ri:RiDeviceLine":
            return RiDeviceLine;
        case "ri:RiDeviceRecoverFill":
            return RiDeviceRecoverFill;
        case "ri:RiDeviceRecoverLine":
            return RiDeviceRecoverLine;
        case "ri:RiDualSim1Fill":
            return RiDualSim1Fill;
        case "ri:RiDualSim1Line":
            return RiDualSim1Line;
        case "ri:RiDualSim2Fill":
            return RiDualSim2Fill;
        case "ri:RiDualSim2Line":
            return RiDualSim2Line;
        case "ri:RiFingerprint2Fill":
            return RiFingerprint2Fill;
        case "ri:RiFingerprint2Line":
            return RiFingerprint2Line;
        case "ri:RiFingerprintFill":
            return RiFingerprintFill;
        case "ri:RiFingerprintLine":
            return RiFingerprintLine;
        case "ri:RiGamepadFill":
            return RiGamepadFill;
        case "ri:RiGamepadLine":
            return RiGamepadLine;
        case "ri:RiGpsFill":
            return RiGpsFill;
        case "ri:RiGpsLine":
            return RiGpsLine;
        case "ri:RiGradienterFill":
            return RiGradienterFill;
        case "ri:RiGradienterLine":
            return RiGradienterLine;
        case "ri:RiHardDrive2Fill":
            return RiHardDrive2Fill;
        case "ri:RiHardDrive2Line":
            return RiHardDrive2Line;
        case "ri:RiHardDrive3Fill":
            return RiHardDrive3Fill;
        case "ri:RiHardDrive3Line":
            return RiHardDrive3Line;
        case "ri:RiHardDriveFill":
            return RiHardDriveFill;
        case "ri:RiHardDriveLine":
            return RiHardDriveLine;
        case "ri:RiHotspotFill":
            return RiHotspotFill;
        case "ri:RiHotspotLine":
            return RiHotspotLine;
        case "ri:RiInstallFill":
            return RiInstallFill;
        case "ri:RiInstallLine":
            return RiInstallLine;
        case "ri:RiInstanceFill":
            return RiInstanceFill;
        case "ri:RiInstanceLine":
            return RiInstanceLine;
        case "ri:RiKeyboardBoxFill":
            return RiKeyboardBoxFill;
        case "ri:RiKeyboardBoxLine":
            return RiKeyboardBoxLine;
        case "ri:RiKeyboardFill":
            return RiKeyboardFill;
        case "ri:RiKeyboardLine":
            return RiKeyboardLine;
        case "ri:RiMacFill":
            return RiMacFill;
        case "ri:RiMacLine":
            return RiMacLine;
        case "ri:RiMacbookFill":
            return RiMacbookFill;
        case "ri:RiMacbookLine":
            return RiMacbookLine;
        case "ri:RiMobileDownloadFill":
            return RiMobileDownloadFill;
        case "ri:RiMobileDownloadLine":
            return RiMobileDownloadLine;
        case "ri:RiMouseFill":
            return RiMouseFill;
        case "ri:RiMouseLine":
            return RiMouseLine;
        case "ri:RiPhoneFill":
            return RiPhoneFill;
        case "ri:RiPhoneFindFill":
            return RiPhoneFindFill;
        case "ri:RiPhoneFindLine":
            return RiPhoneFindLine;
        case "ri:RiPhoneLine":
            return RiPhoneLine;
        case "ri:RiPhoneLockFill":
            return RiPhoneLockFill;
        case "ri:RiPhoneLockLine":
            return RiPhoneLockLine;
        case "ri:RiQrCodeFill":
            return RiQrCodeFill;
        case "ri:RiQrCodeLine":
            return RiQrCodeLine;
        case "ri:RiQrScan2Fill":
            return RiQrScan2Fill;
        case "ri:RiQrScan2Line":
            return RiQrScan2Line;
        case "ri:RiQrScanFill":
            return RiQrScanFill;
        case "ri:RiQrScanLine":
            return RiQrScanLine;
        case "ri:RiRadarFill":
            return RiRadarFill;
        case "ri:RiRadarLine":
            return RiRadarLine;
        case "ri:RiRam2Fill":
            return RiRam2Fill;
        case "ri:RiRam2Line":
            return RiRam2Line;
        case "ri:RiRamFill":
            return RiRamFill;
        case "ri:RiRamLine":
            return RiRamLine;
        case "ri:RiRemoteControl2Fill":
            return RiRemoteControl2Fill;
        case "ri:RiRemoteControl2Line":
            return RiRemoteControl2Line;
        case "ri:RiRemoteControlFill":
            return RiRemoteControlFill;
        case "ri:RiRemoteControlLine":
            return RiRemoteControlLine;
        case "ri:RiRestartFill":
            return RiRestartFill;
        case "ri:RiRestartLine":
            return RiRestartLine;
        case "ri:RiRfidFill":
            return RiRfidFill;
        case "ri:RiRfidLine":
            return RiRfidLine;
        case "ri:RiRotateLockFill":
            return RiRotateLockFill;
        case "ri:RiRotateLockLine":
            return RiRotateLockLine;
        case "ri:RiRouterFill":
            return RiRouterFill;
        case "ri:RiRouterLine":
            return RiRouterLine;
        case "ri:RiRssFill":
            return RiRssFill;
        case "ri:RiRssLine":
            return RiRssLine;
        case "ri:RiSave2Fill":
            return RiSave2Fill;
        case "ri:RiSave2Line":
            return RiSave2Line;
        case "ri:RiSave3Fill":
            return RiSave3Fill;
        case "ri:RiSave3Line":
            return RiSave3Line;
        case "ri:RiSaveFill":
            return RiSaveFill;
        case "ri:RiSaveLine":
            return RiSaveLine;
        case "ri:RiScan2Fill":
            return RiScan2Fill;
        case "ri:RiScan2Line":
            return RiScan2Line;
        case "ri:RiScanFill":
            return RiScanFill;
        case "ri:RiScanLine":
            return RiScanLine;
        case "ri:RiSdCardFill":
            return RiSdCardFill;
        case "ri:RiSdCardLine":
            return RiSdCardLine;
        case "ri:RiSdCardMiniFill":
            return RiSdCardMiniFill;
        case "ri:RiSdCardMiniLine":
            return RiSdCardMiniLine;
        case "ri:RiSensorFill":
            return RiSensorFill;
        case "ri:RiSensorLine":
            return RiSensorLine;
        case "ri:RiServerFill":
            return RiServerFill;
        case "ri:RiServerLine":
            return RiServerLine;
        case "ri:RiShutDownFill":
            return RiShutDownFill;
        case "ri:RiShutDownLine":
            return RiShutDownLine;
        case "ri:RiSignalWifi1Fill":
            return RiSignalWifi1Fill;
        case "ri:RiSignalWifi1Line":
            return RiSignalWifi1Line;
        case "ri:RiSignalWifi2Fill":
            return RiSignalWifi2Fill;
        case "ri:RiSignalWifi2Line":
            return RiSignalWifi2Line;
        case "ri:RiSignalWifi3Fill":
            return RiSignalWifi3Fill;
        case "ri:RiSignalWifi3Line":
            return RiSignalWifi3Line;
        case "ri:RiSignalWifiErrorFill":
            return RiSignalWifiErrorFill;
        case "ri:RiSignalWifiErrorLine":
            return RiSignalWifiErrorLine;
        case "ri:RiSignalWifiFill":
            return RiSignalWifiFill;
        case "ri:RiSignalWifiLine":
            return RiSignalWifiLine;
        case "ri:RiSignalWifiOffFill":
            return RiSignalWifiOffFill;
        case "ri:RiSignalWifiOffLine":
            return RiSignalWifiOffLine;
        case "ri:RiSimCard2Fill":
            return RiSimCard2Fill;
        case "ri:RiSimCard2Line":
            return RiSimCard2Line;
        case "ri:RiSimCardFill":
            return RiSimCardFill;
        case "ri:RiSimCardLine":
            return RiSimCardLine;
        case "ri:RiSmartphoneFill":
            return RiSmartphoneFill;
        case "ri:RiSmartphoneLine":
            return RiSmartphoneLine;
        case "ri:RiTabletFill":
            return RiTabletFill;
        case "ri:RiTabletLine":
            return RiTabletLine;
        case "ri:RiTv2Fill":
            return RiTv2Fill;
        case "ri:RiTv2Line":
            return RiTv2Line;
        case "ri:RiTvFill":
            return RiTvFill;
        case "ri:RiTvLine":
            return RiTvLine;
        case "ri:RiUDiskFill":
            return RiUDiskFill;
        case "ri:RiUDiskLine":
            return RiUDiskLine;
        case "ri:RiUninstallFill":
            return RiUninstallFill;
        case "ri:RiUninstallLine":
            return RiUninstallLine;
        case "ri:RiUsbFill":
            return RiUsbFill;
        case "ri:RiUsbLine":
            return RiUsbLine;
        case "ri:RiWifiFill":
            return RiWifiFill;
        case "ri:RiWifiLine":
            return RiWifiLine;
        case "ri:RiWifiOffFill":
            return RiWifiOffFill;
        case "ri:RiWifiOffLine":
            return RiWifiOffLine;
        case "ri:RiWirelessChargingFill":
            return RiWirelessChargingFill;
        case "ri:RiWirelessChargingLine":
            return RiWirelessChargingLine;
        case "ri:RiArticleFill":
            return RiArticleFill;
        case "ri:RiArticleLine":
            return RiArticleLine;
        case "ri:RiBillFill":
            return RiBillFill;
        case "ri:RiBillLine":
            return RiBillLine;
        case "ri:RiBook2Fill":
            return RiBook2Fill;
        case "ri:RiBook2Line":
            return RiBook2Line;
        case "ri:RiBook3Fill":
            return RiBook3Fill;
        case "ri:RiBook3Line":
            return RiBook3Line;
        case "ri:RiBookFill":
            return RiBookFill;
        case "ri:RiBookLine":
            return RiBookLine;
        case "ri:RiBookMarkedFill":
            return RiBookMarkedFill;
        case "ri:RiBookMarkedLine":
            return RiBookMarkedLine;
        case "ri:RiBookOpenFill":
            return RiBookOpenFill;
        case "ri:RiBookOpenLine":
            return RiBookOpenLine;
        case "ri:RiBookReadFill":
            return RiBookReadFill;
        case "ri:RiBookReadLine":
            return RiBookReadLine;
        case "ri:RiBookletFill":
            return RiBookletFill;
        case "ri:RiBookletLine":
            return RiBookletLine;
        case "ri:RiClipboardFill":
            return RiClipboardFill;
        case "ri:RiClipboardLine":
            return RiClipboardLine;
        case "ri:RiContactsBook2Fill":
            return RiContactsBook2Fill;
        case "ri:RiContactsBook2Line":
            return RiContactsBook2Line;
        case "ri:RiContactsBook3Fill":
            return RiContactsBook3Fill;
        case "ri:RiContactsBook3Line":
            return RiContactsBook3Line;
        case "ri:RiContactsBookFill":
            return RiContactsBookFill;
        case "ri:RiContactsBookLine":
            return RiContactsBookLine;
        case "ri:RiContactsBookUploadFill":
            return RiContactsBookUploadFill;
        case "ri:RiContactsBookUploadLine":
            return RiContactsBookUploadLine;
        case "ri:RiContractFill":
            return RiContractFill;
        case "ri:RiContractLine":
            return RiContractLine;
        case "ri:RiDraftFill":
            return RiDraftFill;
        case "ri:RiDraftLine":
            return RiDraftLine;
        case "ri:RiFile2Fill":
            return RiFile2Fill;
        case "ri:RiFile2Line":
            return RiFile2Line;
        case "ri:RiFile3Fill":
            return RiFile3Fill;
        case "ri:RiFile3Line":
            return RiFile3Line;
        case "ri:RiFile4Fill":
            return RiFile4Fill;
        case "ri:RiFile4Line":
            return RiFile4Line;
    }
}
