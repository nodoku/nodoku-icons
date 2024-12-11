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
export function nameToReactIcon_ri_0(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, RiArrowDownBoxFill, RiArrowDownBoxLine, RiArrowDownCircleFill, RiArrowDownCircleLine, RiArrowDownDoubleFill, RiArrowDownDoubleLine, RiArrowDownFill, RiArrowDownLine, RiArrowDownSFill, RiArrowDownSLine, RiArrowDownWideFill, RiArrowDownWideLine, RiArrowDropDownFill, RiArrowDropDownLine, RiArrowDropLeftFill, RiArrowDropLeftLine, RiArrowDropRightFill, RiArrowDropRightLine, RiArrowDropUpFill, RiArrowDropUpLine, RiArrowGoBackFill, RiArrowGoBackLine, RiArrowGoForwardFill, RiArrowGoForwardLine, RiArrowLeftBoxFill, RiArrowLeftBoxLine, RiArrowLeftCircleFill, RiArrowLeftCircleLine, RiArrowLeftDoubleFill, RiArrowLeftDoubleLine, RiArrowLeftDownBoxFill, RiArrowLeftDownBoxLine, RiArrowLeftDownFill, RiArrowLeftDownLine, RiArrowLeftFill, RiArrowLeftLine, RiArrowLeftRightFill, RiArrowLeftRightLine, RiArrowLeftSFill, RiArrowLeftSLine, RiArrowLeftUpBoxFill, RiArrowLeftUpBoxLine, RiArrowLeftUpFill, RiArrowLeftUpLine, RiArrowLeftWideFill, RiArrowLeftWideLine, RiArrowRightBoxFill, RiArrowRightBoxLine, RiArrowRightCircleFill, RiArrowRightCircleLine, RiArrowRightDoubleFill, RiArrowRightDoubleLine, RiArrowRightDownBoxFill, RiArrowRightDownBoxLine, RiArrowRightDownFill, RiArrowRightDownLine, RiArrowRightFill, RiArrowRightLine, RiArrowRightSFill, RiArrowRightSLine, RiArrowRightUpBoxFill, RiArrowRightUpBoxLine, RiArrowRightUpFill, RiArrowRightUpLine, RiArrowRightWideFill, RiArrowRightWideLine, RiArrowTurnBackFill, RiArrowTurnBackLine, RiArrowTurnForwardFill, RiArrowTurnForwardLine, RiArrowUpBoxFill, RiArrowUpBoxLine, RiArrowUpCircleFill, RiArrowUpCircleLine, RiArrowUpDoubleFill, RiArrowUpDoubleLine, RiArrowUpDownFill, RiArrowUpDownLine, RiArrowUpFill, RiArrowUpLine, RiArrowUpSFill, RiArrowUpSLine, RiArrowUpWideFill, RiArrowUpWideLine, RiCollapseDiagonal2Fill, RiCollapseDiagonal2Line, RiCollapseDiagonalFill, RiCollapseDiagonalLine, RiCollapseHorizontalFill, RiCollapseHorizontalLine, RiCollapseVerticalFill, RiCollapseVerticalLine, RiContractLeftFill, RiContractLeftLine, RiContractLeftRightFill, RiContractLeftRightLine, RiContractRightFill, RiContractRightLine, RiContractUpDownFill, RiContractUpDownLine, RiCornerDownLeftFill, RiCornerDownLeftLine, RiCornerDownRightFill, RiCornerDownRightLine, RiCornerLeftDownFill, RiCornerLeftDownLine, RiCornerLeftUpFill, RiCornerLeftUpLine, RiCornerRightDownFill, RiCornerRightDownLine, RiCornerRightUpFill, RiCornerRightUpLine, RiCornerUpLeftDoubleFill, RiCornerUpLeftDoubleLine, RiCornerUpLeftFill, RiCornerUpLeftLine, RiCornerUpRightDoubleFill, RiCornerUpRightDoubleLine, RiCornerUpRightFill, RiCornerUpRightLine, RiDragMove2Fill, RiDragMove2Line, RiDragMoveFill, RiDragMoveLine, RiExpandDiagonal2Fill, RiExpandDiagonal2Line, RiExpandDiagonalFill, RiExpandDiagonalLine, RiExpandDiagonalS2Fill, RiExpandDiagonalS2Line, RiExpandDiagonalSFill, RiExpandDiagonalSLine, RiExpandHeightFill, RiExpandHeightLine, RiExpandHorizontalFill, RiExpandHorizontalLine, RiExpandHorizontalSFill, RiExpandHorizontalSLine, RiExpandLeftFill, RiExpandLeftLine, RiExpandLeftRightFill, RiExpandLeftRightLine, RiExpandRightFill, RiExpandRightLine, RiExpandUpDownFill, RiExpandUpDownLine, RiExpandVerticalFill, RiExpandVerticalLine, RiExpandVerticalSFill, RiExpandVerticalSLine, RiExpandWidthFill, RiExpandWidthLine, RiScrollToBottomFill, RiScrollToBottomLine, RiSkipDownFill, RiSkipDownLine, RiSkipLeftFill, RiSkipLeftLine, RiSkipRightFill, RiSkipRightLine, RiSkipUpFill, RiSkipUpLine, RiAncientGateFill, RiAncientGateLine, RiAncientPavilionFill, RiAncientPavilionLine, RiBankFill, RiBankLine, RiBuilding2Fill, RiBuilding2Line, RiBuilding3Fill, RiBuilding3Line, RiBuilding4Fill, RiBuilding4Line, RiBuildingFill, RiBuildingLine, RiCommunityFill, RiCommunityLine, RiGovernmentFill, RiGovernmentLine, RiHome2Fill, RiHome2Line, RiHome3Fill, RiHome3Line, RiHome4Fill, RiHome4Line, RiHome5Fill, RiHome5Line, RiHome6Fill, RiHome6Line, RiHome7Fill, RiHome7Line, RiHome8Fill, RiHome8Line, RiHome9Fill, RiHome9Line, RiHomeFill, RiHomeGearFill, RiHomeGearLine, RiHomeHeartFill, RiHomeHeartLine, RiHomeLine, RiHomeOfficeFill, RiHomeOfficeLine, RiHomeSmile2Fill, RiHomeSmile2Line, RiHomeSmileFill, RiHomeSmileLine, RiHomeWifiFill, RiHomeWifiLine, RiHospitalFill, RiHospitalLine, RiHotelFill, RiHotelLine, RiSchoolFill, RiSchoolLine, RiStore2Fill, RiStore2Line, RiStore3Fill, RiStore3Line, RiStoreFill, RiStoreLine, RiTentFill, RiTentLine, RiAdvertisementFill, RiAdvertisementLine, RiArchive2Fill, RiArchive2Line, RiArchiveDrawerFill, RiArchiveDrawerLine, RiArchiveFill, RiArchiveLine, RiArchiveStackFill, RiArchiveStackLine, RiAtFill, RiAtLine, RiAttachmentFill, RiAttachmentLine, RiAwardFill, RiAwardLine, RiBarChart2Fill, RiBarChart2Line, RiBarChartBoxAiFill, RiBarChartBoxAiLine, RiBarChartBoxFill, RiBarChartBoxLine, RiBarChartFill, RiBarChartGroupedFill, RiBarChartGroupedLine, RiBarChartHorizontalFill, RiBarChartHorizontalLine, RiBarChartLine, RiBookmark2Fill, RiBookmark2Line, RiBookmark3Fill, RiBookmark3Line, RiBookmarkFill, RiBookmarkLine, RiBriefcase2Fill, RiBriefcase2Line, RiBriefcase3Fill, RiBriefcase3Line, RiBriefcase4Fill, RiBriefcase4Line, RiBriefcase5Fill, RiBriefcase5Line, RiBriefcaseFill, RiBriefcaseLine, RiBubbleChartFill, RiBubbleChartLine, RiCalculatorFill, RiCalculatorLine, RiCalendar2Fill, RiCalendar2Line, RiCalendarCheckFill, RiCalendarCheckLine, RiCalendarCloseFill, RiCalendarCloseLine, RiCalendarEventFill, RiCalendarEventLine, RiCalendarFill, RiCalendarLine, RiCalendarScheduleFill, RiCalendarScheduleLine, RiCalendarTodoFill, RiCalendarTodoLine, RiCloudFill, RiCloudLine, RiCloudOffFill, RiCloudOffLine, RiCopyleftFill, RiCopyleftLine, RiCopyrightFill, RiCopyrightLine, RiCreativeCommonsByFill, RiCreativeCommonsByLine, RiCreativeCommonsFill, RiCreativeCommonsLine, RiCreativeCommonsNcFill, RiCreativeCommonsNcLine, RiCreativeCommonsNdFill, RiCreativeCommonsNdLine, RiCreativeCommonsSaFill, RiCreativeCommonsSaLine, RiCreativeCommonsZeroFill, RiCreativeCommonsZeroLine, RiCustomerService2Fill, RiCustomerService2Line, RiCustomerServiceFill, RiCustomerServiceLine, RiDonutChartFill, RiDonutChartLine, RiFlag2Fill, RiFlag2Line, RiFlagFill, RiFlagLine, RiFlagOffFill, RiFlagOffLine, RiGlobalFill, RiGlobalLine, RiHonourFill, RiHonourLine, RiIdCardFill, RiIdCardLine, RiInbox2Fill, RiInbox2Line, RiInboxArchiveFill, RiInboxArchiveLine, RiInboxFill, RiInboxLine, RiInboxUnarchiveFill, RiInboxUnarchiveLine, RiInfoCardFill, RiInfoCardLine, RiLineChartFill, RiLineChartLine, RiLinksFill, RiLinksLine, RiMailAddFill, RiMailAddLine, RiMailAiFill, RiMailAiLine, RiMailCheckFill, RiMailCheckLine, RiMailCloseFill, RiMailCloseLine, RiMailDownloadFill, RiMailDownloadLine, RiMailFill, RiMailForbidFill, RiMailForbidLine, RiMailLine, RiMailLockFill, RiMailLockLine, RiMailOpenFill, RiMailOpenLine, RiMailSendFill, RiMailSendLine, RiMailSettingsFill, RiMailSettingsLine, RiMailStarFill, RiMailStarLine, RiMailUnreadFill, RiMailUnreadLine, RiMailVolumeFill, RiMailVolumeLine, RiMedal2Fill, RiMedal2Line, RiMedalFill, RiMedalLine, RiMegaphoneFill, RiMegaphoneLine, RiPassExpiredFill, RiPassExpiredLine, RiPassPendingFill, RiPassPendingLine, RiPassValidFill, RiPassValidLine, RiPieChart2Fill, RiPieChart2Line, RiPieChartBoxFill, RiPieChartBoxLine, RiPieChartFill, RiPieChartLine, RiPresentationFill, RiPresentationLine, RiPrinterCloudFill, RiPrinterCloudLine, RiPrinterFill, RiPrinterLine, RiProfileFill, RiProfileLine, RiProjector2Fill, RiProjector2Line, RiProjectorFill, RiProjectorLine, RiRecordMailFill, RiRecordMailLine, RiRegisteredFill, RiRegisteredLine, RiReplyAllFill, RiReplyAllLine, RiReplyFill, RiReplyLine, RiSendPlane2Fill, RiSendPlane2Line, RiSendPlaneFill, RiSendPlaneLine, RiSeoFill, RiSeoLine, RiServiceFill, RiServiceLine, RiShakeHandsFill, RiShakeHandsLine, RiSlideshow2Fill, RiSlideshow2Line, RiSlideshow3Fill, RiSlideshow3Line, RiSlideshow4Fill, RiSlideshow4Line, RiSlideshowFill, RiSlideshowLine, RiStackFill, RiStackLine, RiTrademarkFill, RiTrademarkLine, RiTriangularFlagFill, RiTriangularFlagLine, RiVerifiedBadgeFill, RiVerifiedBadgeLine, RiWindow2Fill, RiWindow2Line, RiWindowFill, RiWindowLine, RiChat1Fill, RiChat1Line, RiChat2Fill, RiChat2Line, RiChat3Fill, RiChat3Line, RiChat4Fill, RiChat4Line, RiChatAiFill, RiChatAiLine, RiChatCheckFill, RiChatCheckLine, RiChatDeleteFill, RiChatDeleteLine, RiChatDownloadFill, RiChatDownloadLine, RiChatFollowUpFill, RiChatFollowUpLine, RiChatForwardFill, RiChatForwardLine, RiChatHeartFill, RiChatHeartLine, RiChatHistoryFill, RiChatHistoryLine, RiChatNewFill, RiChatNewLine, RiChatOffFill, RiChatOffLine, RiChatPollFill, RiChatPollLine, RiChatPrivateFill, RiChatPrivateLine, RiChatQuoteFill, RiChatQuoteLine, RiChatSearchFill, RiChatSearchLine, RiChatSettingsFill, RiChatSettingsLine, RiChatSmile2Fill, RiChatSmile2Line, RiChatSmile3Fill, RiChatSmile3Line, RiChatSmileAiFill, RiChatSmileAiLine, RiChatSmileFill, RiChatSmileLine, RiChatThreadFill, RiChatThreadLine, RiChatUnreadFill, RiChatUnreadLine, RiChatUploadFill, RiChatUploadLine, RiChatVoiceAiFill, RiChatVoiceAiLine, RiChatVoiceFill, RiChatVoiceLine, RiDiscussFill, RiDiscussLine, RiEmojiStickerFill, RiEmojiStickerLine, RiFeedbackFill, RiFeedbackLine, RiMessage2Fill, RiMessage2Line, RiMessage3Fill, RiMessage3Line, RiMessageFill, RiMessageLine, RiQuestionAnswerFill, RiQuestionAnswerLine, RiQuestionnaireFill, RiQuestionnaireLine, RiSpeakAiFill, RiSpeakAiLine, RiSpeakFill, RiSpeakLine, RiVideoChatFill, RiVideoChatLine, RiAlignItemBottomFill, RiAlignItemBottomLine, RiAlignItemHorizontalCenterFill, RiAlignItemHorizontalCenterLine, RiAlignItemLeftFill, RiAlignItemLeftLine, RiAlignItemRightFill, RiAlignItemRightLine, RiAlignItemTopFill, RiAlignItemTopLine, RiAlignItemVerticalCenterFill, RiAlignItemVerticalCenterLine, RiAnticlockwise2Fill, RiAnticlockwise2Line, RiAnticlockwiseFill, RiAnticlockwiseLine, RiArtboard2Fill, RiArtboard2Line, RiArtboardFill, RiArtboardLine, RiBallPenFill, RiBallPenLine, RiBlurOffFill, RiBlurOffLine, RiBrush2Fill, RiBrush2Line, RiBrush3Fill, RiBrush3Line, RiBrush4Fill, RiBrush4Line, RiBrushAiFill, RiBrushAiLine, RiBrushFill, RiBrushLine, RiCircleFill, RiCircleLine, RiClockwise2Fill, RiClockwise2Line, RiClockwiseFill, RiClockwiseLine, RiCollageFill, RiCollageLine, RiColorFilterAiFill, RiColorFilterAiLine, RiColorFilterFill, RiColorFilterLine, RiCompasses2Fill, RiCompasses2Line, RiCompassesFill, RiCompassesLine, RiContrast2Fill, RiContrast2Line, RiContrastDrop2Fill, RiContrastDrop2Line, RiContrastDropFill, RiContrastDropLine, RiContrastFill, RiContrastLine, RiCrop2Fill, RiCrop2Line, RiCropFill, RiCropLine, RiCrosshair2Fill, RiCrosshair2Line, RiCrosshairFill, RiCrosshairLine, RiDragDropFill, RiDragDropLine, RiDropFill, RiDropLine, RiEdit2Fill, RiEdit2Line, RiEditBoxFill, RiEditBoxLine, RiEditCircleFill, RiEditCircleLine, RiEditFill, RiEditLine, RiEraserFill, RiEraserLine, RiFlipHorizontal2Fill, RiFlipHorizontal2Line, RiFlipHorizontalFill, RiFlipHorizontalLine, RiFlipVertical2Fill, RiFlipVertical2Line, RiFlipVerticalFill, RiFlipVerticalLine, RiFocus2Fill, RiFocus2Line, RiFocus3Fill, RiFocus3Line, RiFocusFill, RiFocusLine, RiGridFill, RiGridLine, RiHammerFill, RiHammerLine, RiHexagonFill, RiHexagonLine, RiInkBottleFill, RiInkBottleLine, RiInputMethodFill, RiInputMethodLine, RiLayout2Fill, RiLayout2Line, RiLayout3Fill, RiLayout3Line, RiLayout4Fill, RiLayout4Line, RiLayout5Fill, RiLayout5Line, RiLayout6Fill, RiLayout6Line, RiLayoutBottom2Fill, RiLayoutBottom2Line, RiLayoutBottomFill, RiLayoutBottomLine, RiLayoutColumnFill, RiLayoutColumnLine, RiLayoutFill, RiLayoutGrid2Fill, RiLayoutGrid2Line, RiLayoutGridFill, RiLayoutGridLine, RiLayoutHorizontalFill, RiLayoutHorizontalLine, RiLayoutLeft2Fill, RiLayoutLeft2Line, RiLayoutLeftFill, RiLayoutLeftLine, RiLayoutLine, RiLayoutMasonryFill, RiLayoutMasonryLine, RiLayoutRight2Fill, RiLayoutRight2Line, RiLayoutRightFill, RiLayoutRightLine, RiLayoutRowFill, RiLayoutRowLine, RiLayoutTop2Fill, RiLayoutTop2Line, RiLayoutTopFill, RiLayoutTopLine, RiLayoutVerticalFill, RiLayoutVerticalLine, RiMagicFill, RiMagicLine, RiMarkPenFill, RiMarkPenLine, RiMarkupFill, RiMarkupLine, RiOctagonFill, RiOctagonLine, RiPaintBrushFill, RiPaintBrushLine, RiPaintFill, RiPaintLine, RiPaletteFill, RiPaletteLine, RiPantoneFill, RiPantoneLine, RiPenNibFill, RiPenNibLine, RiPencilFill, RiPencilLine, RiPencilRuler2Fill, RiPencilRuler2Line, RiPencilRulerFill, RiPencilRulerLine, RiPentagonFill, RiPentagonLine, RiQuillPenAiFill, RiQuillPenAiLine, RiQuillPenFill, RiQuillPenLine, RiRectangleFill, RiRectangleLine, RiRuler2Fill, RiRuler2Line, RiRulerFill, RiRulerLine, RiScissors2Fill, RiScissors2Line, RiScissorsCutFill, RiScissorsCutLine, RiScissorsFill, RiScissorsLine, RiScreenshot2Fill, RiScreenshot2Line, RiScreenshotFill, RiScreenshotLine, RiShadowFill, RiShadowLine, RiShape2Fill, RiShape2Line, RiShapeFill, RiShapeLine, RiShapesFill, RiShapesLine, RiSipFill, RiSipLine, RiSliceFill, RiSliceLine, RiSquareFill, RiSquareLine, RiTBoxFill, RiTBoxLine, RiTableAltFill, RiTableAltLine, RiTableFill, RiTableLine, RiToolsFill, RiToolsLine, RiTriangleFill, RiTriangleLine, RiBracesFill, RiBracesLine, RiBracketsFill, RiBracketsLine, RiBug2Fill, RiBug2Line, RiBugFill, RiBugLine, RiCodeAiFill, RiCodeAiLine, RiCodeBoxFill, RiCodeBoxLine, RiCodeFill, RiCodeLine, RiCodeSFill, RiCodeSLine, RiCodeSSlashFill, RiCodeSSlashLine, RiCommandFill, RiCommandLine, RiCss3Fill, RiCss3Line, RiCursorFill, RiCursorLine, RiGitBranchFill, RiGitBranchLine, RiGitClosePullRequestFill, RiGitClosePullRequestLine, RiGitCommitFill, RiGitCommitLine, RiGitForkFill, RiGitForkLine, RiGitMergeFill, RiGitMergeLine, RiGitPrDraftFill, RiGitPrDraftLine, RiGitPullRequestFill, RiGitPullRequestLine, RiGitRepositoryCommitsFill, RiGitRepositoryCommitsLine, RiGitRepositoryFill, RiGitRepositoryLine, RiGitRepositoryPrivateFill, RiGitRepositoryPrivateLine, RiHtml5Fill, RiHtml5Line, RiJavascriptFill, RiJavascriptLine, RiParenthesesFill, RiParenthesesLine, RiPhpFill, RiPhpLine, RiPuzzle2Fill, RiPuzzle2Line, RiPuzzleFill, RiPuzzleLine, RiTerminalBoxFill, RiTerminalBoxLine, RiTerminalFill, RiTerminalLine, RiTerminalWindowFill, RiTerminalWindowLine, RiAirplayFill, RiAirplayLine, RiBarcodeBoxFill, RiBarcodeBoxLine, RiBarcodeFill, RiBarcodeLine, RiBaseStationFill, RiBaseStationLine, RiBattery2ChargeFill, RiBattery2ChargeLine, RiBattery2Fill, RiBattery2Line, RiBatteryChargeFill, RiBatteryChargeLine, RiBatteryFill, RiBatteryLine, RiBatteryLowFill, RiBatteryLowLine, RiBatterySaverFill, RiBatterySaverLine, RiBatteryShareFill, RiBatteryShareLine, RiBluetoothConnectFill, RiBluetoothConnectLine, RiBluetoothFill, RiBluetoothLine, RiCastFill, RiCastLine, RiCellphoneFill, RiCellphoneLine, RiComputerFill, RiComputerLine, RiCpuFill, RiCpuLine, RiDashboard2Fill, RiDashboard2Line, RiDashboard3Fill, RiDashboard3Line, RiDatabase2Fill, RiDatabase2Line, RiDatabaseFill, RiDatabaseLine, RiDeviceFill, RiDeviceLine, RiDeviceRecoverFill, RiDeviceRecoverLine, RiDualSim1Fill, RiDualSim1Line, RiDualSim2Fill, RiDualSim2Line, RiFingerprint2Fill, RiFingerprint2Line, RiFingerprintFill, RiFingerprintLine, RiGamepadFill, RiGamepadLine, RiGpsFill, RiGpsLine, RiGradienterFill, RiGradienterLine, RiHardDrive2Fill, RiHardDrive2Line, RiHardDrive3Fill, RiHardDrive3Line, RiHardDriveFill, RiHardDriveLine, RiHotspotFill, RiHotspotLine, RiInstallFill, RiInstallLine, RiInstanceFill, RiInstanceLine, RiKeyboardBoxFill, RiKeyboardBoxLine, RiKeyboardFill, RiKeyboardLine, RiMacFill, RiMacLine, RiMacbookFill, RiMacbookLine, RiMobileDownloadFill, RiMobileDownloadLine, RiMouseFill, RiMouseLine, RiPhoneFill, RiPhoneFindFill, RiPhoneFindLine, RiPhoneLine, RiPhoneLockFill, RiPhoneLockLine, RiQrCodeFill, RiQrCodeLine, RiQrScan2Fill, RiQrScan2Line, RiQrScanFill, RiQrScanLine, RiRadarFill, RiRadarLine, RiRam2Fill, RiRam2Line, RiRamFill, RiRamLine, RiRemoteControl2Fill, RiRemoteControl2Line, RiRemoteControlFill, RiRemoteControlLine, RiRestartFill, RiRestartLine, RiRfidFill, RiRfidLine, RiRotateLockFill, RiRotateLockLine, RiRouterFill, RiRouterLine, RiRssFill, RiRssLine, RiSave2Fill, RiSave2Line, RiSave3Fill, RiSave3Line, RiSaveFill, RiSaveLine, RiScan2Fill, RiScan2Line, RiScanFill, RiScanLine, RiSdCardFill, RiSdCardLine, RiSdCardMiniFill, RiSdCardMiniLine, RiSensorFill, RiSensorLine, RiServerFill, RiServerLine, RiShutDownFill, RiShutDownLine, RiSignalWifi1Fill, RiSignalWifi1Line, RiSignalWifi2Fill, RiSignalWifi2Line, RiSignalWifi3Fill, RiSignalWifi3Line, RiSignalWifiErrorFill, RiSignalWifiErrorLine, RiSignalWifiFill, RiSignalWifiLine, RiSignalWifiOffFill, RiSignalWifiOffLine, RiSimCard2Fill, RiSimCard2Line, RiSimCardFill, RiSimCardLine, RiSmartphoneFill, RiSmartphoneLine, RiTabletFill, RiTabletLine, RiTv2Fill, RiTv2Line, RiTvFill, RiTvLine, RiUDiskFill, RiUDiskLine, RiUninstallFill, RiUninstallLine, RiUsbFill, RiUsbLine, RiWifiFill, RiWifiLine, RiWifiOffFill, RiWifiOffLine, RiWirelessChargingFill, RiWirelessChargingLine, RiArticleFill, RiArticleLine, RiBillFill, RiBillLine, RiBook2Fill, RiBook2Line, RiBook3Fill, RiBook3Line, RiBookFill, RiBookLine, RiBookMarkedFill, RiBookMarkedLine, RiBookOpenFill, RiBookOpenLine, RiBookReadFill, RiBookReadLine, RiBookletFill, RiBookletLine, RiClipboardFill, RiClipboardLine, RiContactsBook2Fill, RiContactsBook2Line, RiContactsBook3Fill, RiContactsBook3Line, RiContactsBookFill, RiContactsBookLine, RiContactsBookUploadFill, RiContactsBookUploadLine, RiContractFill, RiContractLine, RiDraftFill, RiDraftLine, RiFile2Fill, RiFile2Line, RiFile3Fill, RiFile3Line, RiFile4Fill, RiFile4Line;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "ri:RiArrowDownBoxFill": return [3 /*break*/, 1];
                        case "ri:RiArrowDownBoxLine": return [3 /*break*/, 3];
                        case "ri:RiArrowDownCircleFill": return [3 /*break*/, 5];
                        case "ri:RiArrowDownCircleLine": return [3 /*break*/, 7];
                        case "ri:RiArrowDownDoubleFill": return [3 /*break*/, 9];
                        case "ri:RiArrowDownDoubleLine": return [3 /*break*/, 11];
                        case "ri:RiArrowDownFill": return [3 /*break*/, 13];
                        case "ri:RiArrowDownLine": return [3 /*break*/, 15];
                        case "ri:RiArrowDownSFill": return [3 /*break*/, 17];
                        case "ri:RiArrowDownSLine": return [3 /*break*/, 19];
                        case "ri:RiArrowDownWideFill": return [3 /*break*/, 21];
                        case "ri:RiArrowDownWideLine": return [3 /*break*/, 23];
                        case "ri:RiArrowDropDownFill": return [3 /*break*/, 25];
                        case "ri:RiArrowDropDownLine": return [3 /*break*/, 27];
                        case "ri:RiArrowDropLeftFill": return [3 /*break*/, 29];
                        case "ri:RiArrowDropLeftLine": return [3 /*break*/, 31];
                        case "ri:RiArrowDropRightFill": return [3 /*break*/, 33];
                        case "ri:RiArrowDropRightLine": return [3 /*break*/, 35];
                        case "ri:RiArrowDropUpFill": return [3 /*break*/, 37];
                        case "ri:RiArrowDropUpLine": return [3 /*break*/, 39];
                        case "ri:RiArrowGoBackFill": return [3 /*break*/, 41];
                        case "ri:RiArrowGoBackLine": return [3 /*break*/, 43];
                        case "ri:RiArrowGoForwardFill": return [3 /*break*/, 45];
                        case "ri:RiArrowGoForwardLine": return [3 /*break*/, 47];
                        case "ri:RiArrowLeftBoxFill": return [3 /*break*/, 49];
                        case "ri:RiArrowLeftBoxLine": return [3 /*break*/, 51];
                        case "ri:RiArrowLeftCircleFill": return [3 /*break*/, 53];
                        case "ri:RiArrowLeftCircleLine": return [3 /*break*/, 55];
                        case "ri:RiArrowLeftDoubleFill": return [3 /*break*/, 57];
                        case "ri:RiArrowLeftDoubleLine": return [3 /*break*/, 59];
                        case "ri:RiArrowLeftDownBoxFill": return [3 /*break*/, 61];
                        case "ri:RiArrowLeftDownBoxLine": return [3 /*break*/, 63];
                        case "ri:RiArrowLeftDownFill": return [3 /*break*/, 65];
                        case "ri:RiArrowLeftDownLine": return [3 /*break*/, 67];
                        case "ri:RiArrowLeftFill": return [3 /*break*/, 69];
                        case "ri:RiArrowLeftLine": return [3 /*break*/, 71];
                        case "ri:RiArrowLeftRightFill": return [3 /*break*/, 73];
                        case "ri:RiArrowLeftRightLine": return [3 /*break*/, 75];
                        case "ri:RiArrowLeftSFill": return [3 /*break*/, 77];
                        case "ri:RiArrowLeftSLine": return [3 /*break*/, 79];
                        case "ri:RiArrowLeftUpBoxFill": return [3 /*break*/, 81];
                        case "ri:RiArrowLeftUpBoxLine": return [3 /*break*/, 83];
                        case "ri:RiArrowLeftUpFill": return [3 /*break*/, 85];
                        case "ri:RiArrowLeftUpLine": return [3 /*break*/, 87];
                        case "ri:RiArrowLeftWideFill": return [3 /*break*/, 89];
                        case "ri:RiArrowLeftWideLine": return [3 /*break*/, 91];
                        case "ri:RiArrowRightBoxFill": return [3 /*break*/, 93];
                        case "ri:RiArrowRightBoxLine": return [3 /*break*/, 95];
                        case "ri:RiArrowRightCircleFill": return [3 /*break*/, 97];
                        case "ri:RiArrowRightCircleLine": return [3 /*break*/, 99];
                        case "ri:RiArrowRightDoubleFill": return [3 /*break*/, 101];
                        case "ri:RiArrowRightDoubleLine": return [3 /*break*/, 103];
                        case "ri:RiArrowRightDownBoxFill": return [3 /*break*/, 105];
                        case "ri:RiArrowRightDownBoxLine": return [3 /*break*/, 107];
                        case "ri:RiArrowRightDownFill": return [3 /*break*/, 109];
                        case "ri:RiArrowRightDownLine": return [3 /*break*/, 111];
                        case "ri:RiArrowRightFill": return [3 /*break*/, 113];
                        case "ri:RiArrowRightLine": return [3 /*break*/, 115];
                        case "ri:RiArrowRightSFill": return [3 /*break*/, 117];
                        case "ri:RiArrowRightSLine": return [3 /*break*/, 119];
                        case "ri:RiArrowRightUpBoxFill": return [3 /*break*/, 121];
                        case "ri:RiArrowRightUpBoxLine": return [3 /*break*/, 123];
                        case "ri:RiArrowRightUpFill": return [3 /*break*/, 125];
                        case "ri:RiArrowRightUpLine": return [3 /*break*/, 127];
                        case "ri:RiArrowRightWideFill": return [3 /*break*/, 129];
                        case "ri:RiArrowRightWideLine": return [3 /*break*/, 131];
                        case "ri:RiArrowTurnBackFill": return [3 /*break*/, 133];
                        case "ri:RiArrowTurnBackLine": return [3 /*break*/, 135];
                        case "ri:RiArrowTurnForwardFill": return [3 /*break*/, 137];
                        case "ri:RiArrowTurnForwardLine": return [3 /*break*/, 139];
                        case "ri:RiArrowUpBoxFill": return [3 /*break*/, 141];
                        case "ri:RiArrowUpBoxLine": return [3 /*break*/, 143];
                        case "ri:RiArrowUpCircleFill": return [3 /*break*/, 145];
                        case "ri:RiArrowUpCircleLine": return [3 /*break*/, 147];
                        case "ri:RiArrowUpDoubleFill": return [3 /*break*/, 149];
                        case "ri:RiArrowUpDoubleLine": return [3 /*break*/, 151];
                        case "ri:RiArrowUpDownFill": return [3 /*break*/, 153];
                        case "ri:RiArrowUpDownLine": return [3 /*break*/, 155];
                        case "ri:RiArrowUpFill": return [3 /*break*/, 157];
                        case "ri:RiArrowUpLine": return [3 /*break*/, 159];
                        case "ri:RiArrowUpSFill": return [3 /*break*/, 161];
                        case "ri:RiArrowUpSLine": return [3 /*break*/, 163];
                        case "ri:RiArrowUpWideFill": return [3 /*break*/, 165];
                        case "ri:RiArrowUpWideLine": return [3 /*break*/, 167];
                        case "ri:RiCollapseDiagonal2Fill": return [3 /*break*/, 169];
                        case "ri:RiCollapseDiagonal2Line": return [3 /*break*/, 171];
                        case "ri:RiCollapseDiagonalFill": return [3 /*break*/, 173];
                        case "ri:RiCollapseDiagonalLine": return [3 /*break*/, 175];
                        case "ri:RiCollapseHorizontalFill": return [3 /*break*/, 177];
                        case "ri:RiCollapseHorizontalLine": return [3 /*break*/, 179];
                        case "ri:RiCollapseVerticalFill": return [3 /*break*/, 181];
                        case "ri:RiCollapseVerticalLine": return [3 /*break*/, 183];
                        case "ri:RiContractLeftFill": return [3 /*break*/, 185];
                        case "ri:RiContractLeftLine": return [3 /*break*/, 187];
                        case "ri:RiContractLeftRightFill": return [3 /*break*/, 189];
                        case "ri:RiContractLeftRightLine": return [3 /*break*/, 191];
                        case "ri:RiContractRightFill": return [3 /*break*/, 193];
                        case "ri:RiContractRightLine": return [3 /*break*/, 195];
                        case "ri:RiContractUpDownFill": return [3 /*break*/, 197];
                        case "ri:RiContractUpDownLine": return [3 /*break*/, 199];
                        case "ri:RiCornerDownLeftFill": return [3 /*break*/, 201];
                        case "ri:RiCornerDownLeftLine": return [3 /*break*/, 203];
                        case "ri:RiCornerDownRightFill": return [3 /*break*/, 205];
                        case "ri:RiCornerDownRightLine": return [3 /*break*/, 207];
                        case "ri:RiCornerLeftDownFill": return [3 /*break*/, 209];
                        case "ri:RiCornerLeftDownLine": return [3 /*break*/, 211];
                        case "ri:RiCornerLeftUpFill": return [3 /*break*/, 213];
                        case "ri:RiCornerLeftUpLine": return [3 /*break*/, 215];
                        case "ri:RiCornerRightDownFill": return [3 /*break*/, 217];
                        case "ri:RiCornerRightDownLine": return [3 /*break*/, 219];
                        case "ri:RiCornerRightUpFill": return [3 /*break*/, 221];
                        case "ri:RiCornerRightUpLine": return [3 /*break*/, 223];
                        case "ri:RiCornerUpLeftDoubleFill": return [3 /*break*/, 225];
                        case "ri:RiCornerUpLeftDoubleLine": return [3 /*break*/, 227];
                        case "ri:RiCornerUpLeftFill": return [3 /*break*/, 229];
                        case "ri:RiCornerUpLeftLine": return [3 /*break*/, 231];
                        case "ri:RiCornerUpRightDoubleFill": return [3 /*break*/, 233];
                        case "ri:RiCornerUpRightDoubleLine": return [3 /*break*/, 235];
                        case "ri:RiCornerUpRightFill": return [3 /*break*/, 237];
                        case "ri:RiCornerUpRightLine": return [3 /*break*/, 239];
                        case "ri:RiDragMove2Fill": return [3 /*break*/, 241];
                        case "ri:RiDragMove2Line": return [3 /*break*/, 243];
                        case "ri:RiDragMoveFill": return [3 /*break*/, 245];
                        case "ri:RiDragMoveLine": return [3 /*break*/, 247];
                        case "ri:RiExpandDiagonal2Fill": return [3 /*break*/, 249];
                        case "ri:RiExpandDiagonal2Line": return [3 /*break*/, 251];
                        case "ri:RiExpandDiagonalFill": return [3 /*break*/, 253];
                        case "ri:RiExpandDiagonalLine": return [3 /*break*/, 255];
                        case "ri:RiExpandDiagonalS2Fill": return [3 /*break*/, 257];
                        case "ri:RiExpandDiagonalS2Line": return [3 /*break*/, 259];
                        case "ri:RiExpandDiagonalSFill": return [3 /*break*/, 261];
                        case "ri:RiExpandDiagonalSLine": return [3 /*break*/, 263];
                        case "ri:RiExpandHeightFill": return [3 /*break*/, 265];
                        case "ri:RiExpandHeightLine": return [3 /*break*/, 267];
                        case "ri:RiExpandHorizontalFill": return [3 /*break*/, 269];
                        case "ri:RiExpandHorizontalLine": return [3 /*break*/, 271];
                        case "ri:RiExpandHorizontalSFill": return [3 /*break*/, 273];
                        case "ri:RiExpandHorizontalSLine": return [3 /*break*/, 275];
                        case "ri:RiExpandLeftFill": return [3 /*break*/, 277];
                        case "ri:RiExpandLeftLine": return [3 /*break*/, 279];
                        case "ri:RiExpandLeftRightFill": return [3 /*break*/, 281];
                        case "ri:RiExpandLeftRightLine": return [3 /*break*/, 283];
                        case "ri:RiExpandRightFill": return [3 /*break*/, 285];
                        case "ri:RiExpandRightLine": return [3 /*break*/, 287];
                        case "ri:RiExpandUpDownFill": return [3 /*break*/, 289];
                        case "ri:RiExpandUpDownLine": return [3 /*break*/, 291];
                        case "ri:RiExpandVerticalFill": return [3 /*break*/, 293];
                        case "ri:RiExpandVerticalLine": return [3 /*break*/, 295];
                        case "ri:RiExpandVerticalSFill": return [3 /*break*/, 297];
                        case "ri:RiExpandVerticalSLine": return [3 /*break*/, 299];
                        case "ri:RiExpandWidthFill": return [3 /*break*/, 301];
                        case "ri:RiExpandWidthLine": return [3 /*break*/, 303];
                        case "ri:RiScrollToBottomFill": return [3 /*break*/, 305];
                        case "ri:RiScrollToBottomLine": return [3 /*break*/, 307];
                        case "ri:RiSkipDownFill": return [3 /*break*/, 309];
                        case "ri:RiSkipDownLine": return [3 /*break*/, 311];
                        case "ri:RiSkipLeftFill": return [3 /*break*/, 313];
                        case "ri:RiSkipLeftLine": return [3 /*break*/, 315];
                        case "ri:RiSkipRightFill": return [3 /*break*/, 317];
                        case "ri:RiSkipRightLine": return [3 /*break*/, 319];
                        case "ri:RiSkipUpFill": return [3 /*break*/, 321];
                        case "ri:RiSkipUpLine": return [3 /*break*/, 323];
                        case "ri:RiAncientGateFill": return [3 /*break*/, 325];
                        case "ri:RiAncientGateLine": return [3 /*break*/, 327];
                        case "ri:RiAncientPavilionFill": return [3 /*break*/, 329];
                        case "ri:RiAncientPavilionLine": return [3 /*break*/, 331];
                        case "ri:RiBankFill": return [3 /*break*/, 333];
                        case "ri:RiBankLine": return [3 /*break*/, 335];
                        case "ri:RiBuilding2Fill": return [3 /*break*/, 337];
                        case "ri:RiBuilding2Line": return [3 /*break*/, 339];
                        case "ri:RiBuilding3Fill": return [3 /*break*/, 341];
                        case "ri:RiBuilding3Line": return [3 /*break*/, 343];
                        case "ri:RiBuilding4Fill": return [3 /*break*/, 345];
                        case "ri:RiBuilding4Line": return [3 /*break*/, 347];
                        case "ri:RiBuildingFill": return [3 /*break*/, 349];
                        case "ri:RiBuildingLine": return [3 /*break*/, 351];
                        case "ri:RiCommunityFill": return [3 /*break*/, 353];
                        case "ri:RiCommunityLine": return [3 /*break*/, 355];
                        case "ri:RiGovernmentFill": return [3 /*break*/, 357];
                        case "ri:RiGovernmentLine": return [3 /*break*/, 359];
                        case "ri:RiHome2Fill": return [3 /*break*/, 361];
                        case "ri:RiHome2Line": return [3 /*break*/, 363];
                        case "ri:RiHome3Fill": return [3 /*break*/, 365];
                        case "ri:RiHome3Line": return [3 /*break*/, 367];
                        case "ri:RiHome4Fill": return [3 /*break*/, 369];
                        case "ri:RiHome4Line": return [3 /*break*/, 371];
                        case "ri:RiHome5Fill": return [3 /*break*/, 373];
                        case "ri:RiHome5Line": return [3 /*break*/, 375];
                        case "ri:RiHome6Fill": return [3 /*break*/, 377];
                        case "ri:RiHome6Line": return [3 /*break*/, 379];
                        case "ri:RiHome7Fill": return [3 /*break*/, 381];
                        case "ri:RiHome7Line": return [3 /*break*/, 383];
                        case "ri:RiHome8Fill": return [3 /*break*/, 385];
                        case "ri:RiHome8Line": return [3 /*break*/, 387];
                        case "ri:RiHome9Fill": return [3 /*break*/, 389];
                        case "ri:RiHome9Line": return [3 /*break*/, 391];
                        case "ri:RiHomeFill": return [3 /*break*/, 393];
                        case "ri:RiHomeGearFill": return [3 /*break*/, 395];
                        case "ri:RiHomeGearLine": return [3 /*break*/, 397];
                        case "ri:RiHomeHeartFill": return [3 /*break*/, 399];
                        case "ri:RiHomeHeartLine": return [3 /*break*/, 401];
                        case "ri:RiHomeLine": return [3 /*break*/, 403];
                        case "ri:RiHomeOfficeFill": return [3 /*break*/, 405];
                        case "ri:RiHomeOfficeLine": return [3 /*break*/, 407];
                        case "ri:RiHomeSmile2Fill": return [3 /*break*/, 409];
                        case "ri:RiHomeSmile2Line": return [3 /*break*/, 411];
                        case "ri:RiHomeSmileFill": return [3 /*break*/, 413];
                        case "ri:RiHomeSmileLine": return [3 /*break*/, 415];
                        case "ri:RiHomeWifiFill": return [3 /*break*/, 417];
                        case "ri:RiHomeWifiLine": return [3 /*break*/, 419];
                        case "ri:RiHospitalFill": return [3 /*break*/, 421];
                        case "ri:RiHospitalLine": return [3 /*break*/, 423];
                        case "ri:RiHotelFill": return [3 /*break*/, 425];
                        case "ri:RiHotelLine": return [3 /*break*/, 427];
                        case "ri:RiSchoolFill": return [3 /*break*/, 429];
                        case "ri:RiSchoolLine": return [3 /*break*/, 431];
                        case "ri:RiStore2Fill": return [3 /*break*/, 433];
                        case "ri:RiStore2Line": return [3 /*break*/, 435];
                        case "ri:RiStore3Fill": return [3 /*break*/, 437];
                        case "ri:RiStore3Line": return [3 /*break*/, 439];
                        case "ri:RiStoreFill": return [3 /*break*/, 441];
                        case "ri:RiStoreLine": return [3 /*break*/, 443];
                        case "ri:RiTentFill": return [3 /*break*/, 445];
                        case "ri:RiTentLine": return [3 /*break*/, 447];
                        case "ri:RiAdvertisementFill": return [3 /*break*/, 449];
                        case "ri:RiAdvertisementLine": return [3 /*break*/, 451];
                        case "ri:RiArchive2Fill": return [3 /*break*/, 453];
                        case "ri:RiArchive2Line": return [3 /*break*/, 455];
                        case "ri:RiArchiveDrawerFill": return [3 /*break*/, 457];
                        case "ri:RiArchiveDrawerLine": return [3 /*break*/, 459];
                        case "ri:RiArchiveFill": return [3 /*break*/, 461];
                        case "ri:RiArchiveLine": return [3 /*break*/, 463];
                        case "ri:RiArchiveStackFill": return [3 /*break*/, 465];
                        case "ri:RiArchiveStackLine": return [3 /*break*/, 467];
                        case "ri:RiAtFill": return [3 /*break*/, 469];
                        case "ri:RiAtLine": return [3 /*break*/, 471];
                        case "ri:RiAttachmentFill": return [3 /*break*/, 473];
                        case "ri:RiAttachmentLine": return [3 /*break*/, 475];
                        case "ri:RiAwardFill": return [3 /*break*/, 477];
                        case "ri:RiAwardLine": return [3 /*break*/, 479];
                        case "ri:RiBarChart2Fill": return [3 /*break*/, 481];
                        case "ri:RiBarChart2Line": return [3 /*break*/, 483];
                        case "ri:RiBarChartBoxAiFill": return [3 /*break*/, 485];
                        case "ri:RiBarChartBoxAiLine": return [3 /*break*/, 487];
                        case "ri:RiBarChartBoxFill": return [3 /*break*/, 489];
                        case "ri:RiBarChartBoxLine": return [3 /*break*/, 491];
                        case "ri:RiBarChartFill": return [3 /*break*/, 493];
                        case "ri:RiBarChartGroupedFill": return [3 /*break*/, 495];
                        case "ri:RiBarChartGroupedLine": return [3 /*break*/, 497];
                        case "ri:RiBarChartHorizontalFill": return [3 /*break*/, 499];
                        case "ri:RiBarChartHorizontalLine": return [3 /*break*/, 501];
                        case "ri:RiBarChartLine": return [3 /*break*/, 503];
                        case "ri:RiBookmark2Fill": return [3 /*break*/, 505];
                        case "ri:RiBookmark2Line": return [3 /*break*/, 507];
                        case "ri:RiBookmark3Fill": return [3 /*break*/, 509];
                        case "ri:RiBookmark3Line": return [3 /*break*/, 511];
                        case "ri:RiBookmarkFill": return [3 /*break*/, 513];
                        case "ri:RiBookmarkLine": return [3 /*break*/, 515];
                        case "ri:RiBriefcase2Fill": return [3 /*break*/, 517];
                        case "ri:RiBriefcase2Line": return [3 /*break*/, 519];
                        case "ri:RiBriefcase3Fill": return [3 /*break*/, 521];
                        case "ri:RiBriefcase3Line": return [3 /*break*/, 523];
                        case "ri:RiBriefcase4Fill": return [3 /*break*/, 525];
                        case "ri:RiBriefcase4Line": return [3 /*break*/, 527];
                        case "ri:RiBriefcase5Fill": return [3 /*break*/, 529];
                        case "ri:RiBriefcase5Line": return [3 /*break*/, 531];
                        case "ri:RiBriefcaseFill": return [3 /*break*/, 533];
                        case "ri:RiBriefcaseLine": return [3 /*break*/, 535];
                        case "ri:RiBubbleChartFill": return [3 /*break*/, 537];
                        case "ri:RiBubbleChartLine": return [3 /*break*/, 539];
                        case "ri:RiCalculatorFill": return [3 /*break*/, 541];
                        case "ri:RiCalculatorLine": return [3 /*break*/, 543];
                        case "ri:RiCalendar2Fill": return [3 /*break*/, 545];
                        case "ri:RiCalendar2Line": return [3 /*break*/, 547];
                        case "ri:RiCalendarCheckFill": return [3 /*break*/, 549];
                        case "ri:RiCalendarCheckLine": return [3 /*break*/, 551];
                        case "ri:RiCalendarCloseFill": return [3 /*break*/, 553];
                        case "ri:RiCalendarCloseLine": return [3 /*break*/, 555];
                        case "ri:RiCalendarEventFill": return [3 /*break*/, 557];
                        case "ri:RiCalendarEventLine": return [3 /*break*/, 559];
                        case "ri:RiCalendarFill": return [3 /*break*/, 561];
                        case "ri:RiCalendarLine": return [3 /*break*/, 563];
                        case "ri:RiCalendarScheduleFill": return [3 /*break*/, 565];
                        case "ri:RiCalendarScheduleLine": return [3 /*break*/, 567];
                        case "ri:RiCalendarTodoFill": return [3 /*break*/, 569];
                        case "ri:RiCalendarTodoLine": return [3 /*break*/, 571];
                        case "ri:RiCloudFill": return [3 /*break*/, 573];
                        case "ri:RiCloudLine": return [3 /*break*/, 575];
                        case "ri:RiCloudOffFill": return [3 /*break*/, 577];
                        case "ri:RiCloudOffLine": return [3 /*break*/, 579];
                        case "ri:RiCopyleftFill": return [3 /*break*/, 581];
                        case "ri:RiCopyleftLine": return [3 /*break*/, 583];
                        case "ri:RiCopyrightFill": return [3 /*break*/, 585];
                        case "ri:RiCopyrightLine": return [3 /*break*/, 587];
                        case "ri:RiCreativeCommonsByFill": return [3 /*break*/, 589];
                        case "ri:RiCreativeCommonsByLine": return [3 /*break*/, 591];
                        case "ri:RiCreativeCommonsFill": return [3 /*break*/, 593];
                        case "ri:RiCreativeCommonsLine": return [3 /*break*/, 595];
                        case "ri:RiCreativeCommonsNcFill": return [3 /*break*/, 597];
                        case "ri:RiCreativeCommonsNcLine": return [3 /*break*/, 599];
                        case "ri:RiCreativeCommonsNdFill": return [3 /*break*/, 601];
                        case "ri:RiCreativeCommonsNdLine": return [3 /*break*/, 603];
                        case "ri:RiCreativeCommonsSaFill": return [3 /*break*/, 605];
                        case "ri:RiCreativeCommonsSaLine": return [3 /*break*/, 607];
                        case "ri:RiCreativeCommonsZeroFill": return [3 /*break*/, 609];
                        case "ri:RiCreativeCommonsZeroLine": return [3 /*break*/, 611];
                        case "ri:RiCustomerService2Fill": return [3 /*break*/, 613];
                        case "ri:RiCustomerService2Line": return [3 /*break*/, 615];
                        case "ri:RiCustomerServiceFill": return [3 /*break*/, 617];
                        case "ri:RiCustomerServiceLine": return [3 /*break*/, 619];
                        case "ri:RiDonutChartFill": return [3 /*break*/, 621];
                        case "ri:RiDonutChartLine": return [3 /*break*/, 623];
                        case "ri:RiFlag2Fill": return [3 /*break*/, 625];
                        case "ri:RiFlag2Line": return [3 /*break*/, 627];
                        case "ri:RiFlagFill": return [3 /*break*/, 629];
                        case "ri:RiFlagLine": return [3 /*break*/, 631];
                        case "ri:RiFlagOffFill": return [3 /*break*/, 633];
                        case "ri:RiFlagOffLine": return [3 /*break*/, 635];
                        case "ri:RiGlobalFill": return [3 /*break*/, 637];
                        case "ri:RiGlobalLine": return [3 /*break*/, 639];
                        case "ri:RiHonourFill": return [3 /*break*/, 641];
                        case "ri:RiHonourLine": return [3 /*break*/, 643];
                        case "ri:RiIdCardFill": return [3 /*break*/, 645];
                        case "ri:RiIdCardLine": return [3 /*break*/, 647];
                        case "ri:RiInbox2Fill": return [3 /*break*/, 649];
                        case "ri:RiInbox2Line": return [3 /*break*/, 651];
                        case "ri:RiInboxArchiveFill": return [3 /*break*/, 653];
                        case "ri:RiInboxArchiveLine": return [3 /*break*/, 655];
                        case "ri:RiInboxFill": return [3 /*break*/, 657];
                        case "ri:RiInboxLine": return [3 /*break*/, 659];
                        case "ri:RiInboxUnarchiveFill": return [3 /*break*/, 661];
                        case "ri:RiInboxUnarchiveLine": return [3 /*break*/, 663];
                        case "ri:RiInfoCardFill": return [3 /*break*/, 665];
                        case "ri:RiInfoCardLine": return [3 /*break*/, 667];
                        case "ri:RiLineChartFill": return [3 /*break*/, 669];
                        case "ri:RiLineChartLine": return [3 /*break*/, 671];
                        case "ri:RiLinksFill": return [3 /*break*/, 673];
                        case "ri:RiLinksLine": return [3 /*break*/, 675];
                        case "ri:RiMailAddFill": return [3 /*break*/, 677];
                        case "ri:RiMailAddLine": return [3 /*break*/, 679];
                        case "ri:RiMailAiFill": return [3 /*break*/, 681];
                        case "ri:RiMailAiLine": return [3 /*break*/, 683];
                        case "ri:RiMailCheckFill": return [3 /*break*/, 685];
                        case "ri:RiMailCheckLine": return [3 /*break*/, 687];
                        case "ri:RiMailCloseFill": return [3 /*break*/, 689];
                        case "ri:RiMailCloseLine": return [3 /*break*/, 691];
                        case "ri:RiMailDownloadFill": return [3 /*break*/, 693];
                        case "ri:RiMailDownloadLine": return [3 /*break*/, 695];
                        case "ri:RiMailFill": return [3 /*break*/, 697];
                        case "ri:RiMailForbidFill": return [3 /*break*/, 699];
                        case "ri:RiMailForbidLine": return [3 /*break*/, 701];
                        case "ri:RiMailLine": return [3 /*break*/, 703];
                        case "ri:RiMailLockFill": return [3 /*break*/, 705];
                        case "ri:RiMailLockLine": return [3 /*break*/, 707];
                        case "ri:RiMailOpenFill": return [3 /*break*/, 709];
                        case "ri:RiMailOpenLine": return [3 /*break*/, 711];
                        case "ri:RiMailSendFill": return [3 /*break*/, 713];
                        case "ri:RiMailSendLine": return [3 /*break*/, 715];
                        case "ri:RiMailSettingsFill": return [3 /*break*/, 717];
                        case "ri:RiMailSettingsLine": return [3 /*break*/, 719];
                        case "ri:RiMailStarFill": return [3 /*break*/, 721];
                        case "ri:RiMailStarLine": return [3 /*break*/, 723];
                        case "ri:RiMailUnreadFill": return [3 /*break*/, 725];
                        case "ri:RiMailUnreadLine": return [3 /*break*/, 727];
                        case "ri:RiMailVolumeFill": return [3 /*break*/, 729];
                        case "ri:RiMailVolumeLine": return [3 /*break*/, 731];
                        case "ri:RiMedal2Fill": return [3 /*break*/, 733];
                        case "ri:RiMedal2Line": return [3 /*break*/, 735];
                        case "ri:RiMedalFill": return [3 /*break*/, 737];
                        case "ri:RiMedalLine": return [3 /*break*/, 739];
                        case "ri:RiMegaphoneFill": return [3 /*break*/, 741];
                        case "ri:RiMegaphoneLine": return [3 /*break*/, 743];
                        case "ri:RiPassExpiredFill": return [3 /*break*/, 745];
                        case "ri:RiPassExpiredLine": return [3 /*break*/, 747];
                        case "ri:RiPassPendingFill": return [3 /*break*/, 749];
                        case "ri:RiPassPendingLine": return [3 /*break*/, 751];
                        case "ri:RiPassValidFill": return [3 /*break*/, 753];
                        case "ri:RiPassValidLine": return [3 /*break*/, 755];
                        case "ri:RiPieChart2Fill": return [3 /*break*/, 757];
                        case "ri:RiPieChart2Line": return [3 /*break*/, 759];
                        case "ri:RiPieChartBoxFill": return [3 /*break*/, 761];
                        case "ri:RiPieChartBoxLine": return [3 /*break*/, 763];
                        case "ri:RiPieChartFill": return [3 /*break*/, 765];
                        case "ri:RiPieChartLine": return [3 /*break*/, 767];
                        case "ri:RiPresentationFill": return [3 /*break*/, 769];
                        case "ri:RiPresentationLine": return [3 /*break*/, 771];
                        case "ri:RiPrinterCloudFill": return [3 /*break*/, 773];
                        case "ri:RiPrinterCloudLine": return [3 /*break*/, 775];
                        case "ri:RiPrinterFill": return [3 /*break*/, 777];
                        case "ri:RiPrinterLine": return [3 /*break*/, 779];
                        case "ri:RiProfileFill": return [3 /*break*/, 781];
                        case "ri:RiProfileLine": return [3 /*break*/, 783];
                        case "ri:RiProjector2Fill": return [3 /*break*/, 785];
                        case "ri:RiProjector2Line": return [3 /*break*/, 787];
                        case "ri:RiProjectorFill": return [3 /*break*/, 789];
                        case "ri:RiProjectorLine": return [3 /*break*/, 791];
                        case "ri:RiRecordMailFill": return [3 /*break*/, 793];
                        case "ri:RiRecordMailLine": return [3 /*break*/, 795];
                        case "ri:RiRegisteredFill": return [3 /*break*/, 797];
                        case "ri:RiRegisteredLine": return [3 /*break*/, 799];
                        case "ri:RiReplyAllFill": return [3 /*break*/, 801];
                        case "ri:RiReplyAllLine": return [3 /*break*/, 803];
                        case "ri:RiReplyFill": return [3 /*break*/, 805];
                        case "ri:RiReplyLine": return [3 /*break*/, 807];
                        case "ri:RiSendPlane2Fill": return [3 /*break*/, 809];
                        case "ri:RiSendPlane2Line": return [3 /*break*/, 811];
                        case "ri:RiSendPlaneFill": return [3 /*break*/, 813];
                        case "ri:RiSendPlaneLine": return [3 /*break*/, 815];
                        case "ri:RiSeoFill": return [3 /*break*/, 817];
                        case "ri:RiSeoLine": return [3 /*break*/, 819];
                        case "ri:RiServiceFill": return [3 /*break*/, 821];
                        case "ri:RiServiceLine": return [3 /*break*/, 823];
                        case "ri:RiShakeHandsFill": return [3 /*break*/, 825];
                        case "ri:RiShakeHandsLine": return [3 /*break*/, 827];
                        case "ri:RiSlideshow2Fill": return [3 /*break*/, 829];
                        case "ri:RiSlideshow2Line": return [3 /*break*/, 831];
                        case "ri:RiSlideshow3Fill": return [3 /*break*/, 833];
                        case "ri:RiSlideshow3Line": return [3 /*break*/, 835];
                        case "ri:RiSlideshow4Fill": return [3 /*break*/, 837];
                        case "ri:RiSlideshow4Line": return [3 /*break*/, 839];
                        case "ri:RiSlideshowFill": return [3 /*break*/, 841];
                        case "ri:RiSlideshowLine": return [3 /*break*/, 843];
                        case "ri:RiStackFill": return [3 /*break*/, 845];
                        case "ri:RiStackLine": return [3 /*break*/, 847];
                        case "ri:RiTrademarkFill": return [3 /*break*/, 849];
                        case "ri:RiTrademarkLine": return [3 /*break*/, 851];
                        case "ri:RiTriangularFlagFill": return [3 /*break*/, 853];
                        case "ri:RiTriangularFlagLine": return [3 /*break*/, 855];
                        case "ri:RiVerifiedBadgeFill": return [3 /*break*/, 857];
                        case "ri:RiVerifiedBadgeLine": return [3 /*break*/, 859];
                        case "ri:RiWindow2Fill": return [3 /*break*/, 861];
                        case "ri:RiWindow2Line": return [3 /*break*/, 863];
                        case "ri:RiWindowFill": return [3 /*break*/, 865];
                        case "ri:RiWindowLine": return [3 /*break*/, 867];
                        case "ri:RiChat1Fill": return [3 /*break*/, 869];
                        case "ri:RiChat1Line": return [3 /*break*/, 871];
                        case "ri:RiChat2Fill": return [3 /*break*/, 873];
                        case "ri:RiChat2Line": return [3 /*break*/, 875];
                        case "ri:RiChat3Fill": return [3 /*break*/, 877];
                        case "ri:RiChat3Line": return [3 /*break*/, 879];
                        case "ri:RiChat4Fill": return [3 /*break*/, 881];
                        case "ri:RiChat4Line": return [3 /*break*/, 883];
                        case "ri:RiChatAiFill": return [3 /*break*/, 885];
                        case "ri:RiChatAiLine": return [3 /*break*/, 887];
                        case "ri:RiChatCheckFill": return [3 /*break*/, 889];
                        case "ri:RiChatCheckLine": return [3 /*break*/, 891];
                        case "ri:RiChatDeleteFill": return [3 /*break*/, 893];
                        case "ri:RiChatDeleteLine": return [3 /*break*/, 895];
                        case "ri:RiChatDownloadFill": return [3 /*break*/, 897];
                        case "ri:RiChatDownloadLine": return [3 /*break*/, 899];
                        case "ri:RiChatFollowUpFill": return [3 /*break*/, 901];
                        case "ri:RiChatFollowUpLine": return [3 /*break*/, 903];
                        case "ri:RiChatForwardFill": return [3 /*break*/, 905];
                        case "ri:RiChatForwardLine": return [3 /*break*/, 907];
                        case "ri:RiChatHeartFill": return [3 /*break*/, 909];
                        case "ri:RiChatHeartLine": return [3 /*break*/, 911];
                        case "ri:RiChatHistoryFill": return [3 /*break*/, 913];
                        case "ri:RiChatHistoryLine": return [3 /*break*/, 915];
                        case "ri:RiChatNewFill": return [3 /*break*/, 917];
                        case "ri:RiChatNewLine": return [3 /*break*/, 919];
                        case "ri:RiChatOffFill": return [3 /*break*/, 921];
                        case "ri:RiChatOffLine": return [3 /*break*/, 923];
                        case "ri:RiChatPollFill": return [3 /*break*/, 925];
                        case "ri:RiChatPollLine": return [3 /*break*/, 927];
                        case "ri:RiChatPrivateFill": return [3 /*break*/, 929];
                        case "ri:RiChatPrivateLine": return [3 /*break*/, 931];
                        case "ri:RiChatQuoteFill": return [3 /*break*/, 933];
                        case "ri:RiChatQuoteLine": return [3 /*break*/, 935];
                        case "ri:RiChatSearchFill": return [3 /*break*/, 937];
                        case "ri:RiChatSearchLine": return [3 /*break*/, 939];
                        case "ri:RiChatSettingsFill": return [3 /*break*/, 941];
                        case "ri:RiChatSettingsLine": return [3 /*break*/, 943];
                        case "ri:RiChatSmile2Fill": return [3 /*break*/, 945];
                        case "ri:RiChatSmile2Line": return [3 /*break*/, 947];
                        case "ri:RiChatSmile3Fill": return [3 /*break*/, 949];
                        case "ri:RiChatSmile3Line": return [3 /*break*/, 951];
                        case "ri:RiChatSmileAiFill": return [3 /*break*/, 953];
                        case "ri:RiChatSmileAiLine": return [3 /*break*/, 955];
                        case "ri:RiChatSmileFill": return [3 /*break*/, 957];
                        case "ri:RiChatSmileLine": return [3 /*break*/, 959];
                        case "ri:RiChatThreadFill": return [3 /*break*/, 961];
                        case "ri:RiChatThreadLine": return [3 /*break*/, 963];
                        case "ri:RiChatUnreadFill": return [3 /*break*/, 965];
                        case "ri:RiChatUnreadLine": return [3 /*break*/, 967];
                        case "ri:RiChatUploadFill": return [3 /*break*/, 969];
                        case "ri:RiChatUploadLine": return [3 /*break*/, 971];
                        case "ri:RiChatVoiceAiFill": return [3 /*break*/, 973];
                        case "ri:RiChatVoiceAiLine": return [3 /*break*/, 975];
                        case "ri:RiChatVoiceFill": return [3 /*break*/, 977];
                        case "ri:RiChatVoiceLine": return [3 /*break*/, 979];
                        case "ri:RiDiscussFill": return [3 /*break*/, 981];
                        case "ri:RiDiscussLine": return [3 /*break*/, 983];
                        case "ri:RiEmojiStickerFill": return [3 /*break*/, 985];
                        case "ri:RiEmojiStickerLine": return [3 /*break*/, 987];
                        case "ri:RiFeedbackFill": return [3 /*break*/, 989];
                        case "ri:RiFeedbackLine": return [3 /*break*/, 991];
                        case "ri:RiMessage2Fill": return [3 /*break*/, 993];
                        case "ri:RiMessage2Line": return [3 /*break*/, 995];
                        case "ri:RiMessage3Fill": return [3 /*break*/, 997];
                        case "ri:RiMessage3Line": return [3 /*break*/, 999];
                        case "ri:RiMessageFill": return [3 /*break*/, 1001];
                        case "ri:RiMessageLine": return [3 /*break*/, 1003];
                        case "ri:RiQuestionAnswerFill": return [3 /*break*/, 1005];
                        case "ri:RiQuestionAnswerLine": return [3 /*break*/, 1007];
                        case "ri:RiQuestionnaireFill": return [3 /*break*/, 1009];
                        case "ri:RiQuestionnaireLine": return [3 /*break*/, 1011];
                        case "ri:RiSpeakAiFill": return [3 /*break*/, 1013];
                        case "ri:RiSpeakAiLine": return [3 /*break*/, 1015];
                        case "ri:RiSpeakFill": return [3 /*break*/, 1017];
                        case "ri:RiSpeakLine": return [3 /*break*/, 1019];
                        case "ri:RiVideoChatFill": return [3 /*break*/, 1021];
                        case "ri:RiVideoChatLine": return [3 /*break*/, 1023];
                        case "ri:RiAlignItemBottomFill": return [3 /*break*/, 1025];
                        case "ri:RiAlignItemBottomLine": return [3 /*break*/, 1027];
                        case "ri:RiAlignItemHorizontalCenterFill": return [3 /*break*/, 1029];
                        case "ri:RiAlignItemHorizontalCenterLine": return [3 /*break*/, 1031];
                        case "ri:RiAlignItemLeftFill": return [3 /*break*/, 1033];
                        case "ri:RiAlignItemLeftLine": return [3 /*break*/, 1035];
                        case "ri:RiAlignItemRightFill": return [3 /*break*/, 1037];
                        case "ri:RiAlignItemRightLine": return [3 /*break*/, 1039];
                        case "ri:RiAlignItemTopFill": return [3 /*break*/, 1041];
                        case "ri:RiAlignItemTopLine": return [3 /*break*/, 1043];
                        case "ri:RiAlignItemVerticalCenterFill": return [3 /*break*/, 1045];
                        case "ri:RiAlignItemVerticalCenterLine": return [3 /*break*/, 1047];
                        case "ri:RiAnticlockwise2Fill": return [3 /*break*/, 1049];
                        case "ri:RiAnticlockwise2Line": return [3 /*break*/, 1051];
                        case "ri:RiAnticlockwiseFill": return [3 /*break*/, 1053];
                        case "ri:RiAnticlockwiseLine": return [3 /*break*/, 1055];
                        case "ri:RiArtboard2Fill": return [3 /*break*/, 1057];
                        case "ri:RiArtboard2Line": return [3 /*break*/, 1059];
                        case "ri:RiArtboardFill": return [3 /*break*/, 1061];
                        case "ri:RiArtboardLine": return [3 /*break*/, 1063];
                        case "ri:RiBallPenFill": return [3 /*break*/, 1065];
                        case "ri:RiBallPenLine": return [3 /*break*/, 1067];
                        case "ri:RiBlurOffFill": return [3 /*break*/, 1069];
                        case "ri:RiBlurOffLine": return [3 /*break*/, 1071];
                        case "ri:RiBrush2Fill": return [3 /*break*/, 1073];
                        case "ri:RiBrush2Line": return [3 /*break*/, 1075];
                        case "ri:RiBrush3Fill": return [3 /*break*/, 1077];
                        case "ri:RiBrush3Line": return [3 /*break*/, 1079];
                        case "ri:RiBrush4Fill": return [3 /*break*/, 1081];
                        case "ri:RiBrush4Line": return [3 /*break*/, 1083];
                        case "ri:RiBrushAiFill": return [3 /*break*/, 1085];
                        case "ri:RiBrushAiLine": return [3 /*break*/, 1087];
                        case "ri:RiBrushFill": return [3 /*break*/, 1089];
                        case "ri:RiBrushLine": return [3 /*break*/, 1091];
                        case "ri:RiCircleFill": return [3 /*break*/, 1093];
                        case "ri:RiCircleLine": return [3 /*break*/, 1095];
                        case "ri:RiClockwise2Fill": return [3 /*break*/, 1097];
                        case "ri:RiClockwise2Line": return [3 /*break*/, 1099];
                        case "ri:RiClockwiseFill": return [3 /*break*/, 1101];
                        case "ri:RiClockwiseLine": return [3 /*break*/, 1103];
                        case "ri:RiCollageFill": return [3 /*break*/, 1105];
                        case "ri:RiCollageLine": return [3 /*break*/, 1107];
                        case "ri:RiColorFilterAiFill": return [3 /*break*/, 1109];
                        case "ri:RiColorFilterAiLine": return [3 /*break*/, 1111];
                        case "ri:RiColorFilterFill": return [3 /*break*/, 1113];
                        case "ri:RiColorFilterLine": return [3 /*break*/, 1115];
                        case "ri:RiCompasses2Fill": return [3 /*break*/, 1117];
                        case "ri:RiCompasses2Line": return [3 /*break*/, 1119];
                        case "ri:RiCompassesFill": return [3 /*break*/, 1121];
                        case "ri:RiCompassesLine": return [3 /*break*/, 1123];
                        case "ri:RiContrast2Fill": return [3 /*break*/, 1125];
                        case "ri:RiContrast2Line": return [3 /*break*/, 1127];
                        case "ri:RiContrastDrop2Fill": return [3 /*break*/, 1129];
                        case "ri:RiContrastDrop2Line": return [3 /*break*/, 1131];
                        case "ri:RiContrastDropFill": return [3 /*break*/, 1133];
                        case "ri:RiContrastDropLine": return [3 /*break*/, 1135];
                        case "ri:RiContrastFill": return [3 /*break*/, 1137];
                        case "ri:RiContrastLine": return [3 /*break*/, 1139];
                        case "ri:RiCrop2Fill": return [3 /*break*/, 1141];
                        case "ri:RiCrop2Line": return [3 /*break*/, 1143];
                        case "ri:RiCropFill": return [3 /*break*/, 1145];
                        case "ri:RiCropLine": return [3 /*break*/, 1147];
                        case "ri:RiCrosshair2Fill": return [3 /*break*/, 1149];
                        case "ri:RiCrosshair2Line": return [3 /*break*/, 1151];
                        case "ri:RiCrosshairFill": return [3 /*break*/, 1153];
                        case "ri:RiCrosshairLine": return [3 /*break*/, 1155];
                        case "ri:RiDragDropFill": return [3 /*break*/, 1157];
                        case "ri:RiDragDropLine": return [3 /*break*/, 1159];
                        case "ri:RiDropFill": return [3 /*break*/, 1161];
                        case "ri:RiDropLine": return [3 /*break*/, 1163];
                        case "ri:RiEdit2Fill": return [3 /*break*/, 1165];
                        case "ri:RiEdit2Line": return [3 /*break*/, 1167];
                        case "ri:RiEditBoxFill": return [3 /*break*/, 1169];
                        case "ri:RiEditBoxLine": return [3 /*break*/, 1171];
                        case "ri:RiEditCircleFill": return [3 /*break*/, 1173];
                        case "ri:RiEditCircleLine": return [3 /*break*/, 1175];
                        case "ri:RiEditFill": return [3 /*break*/, 1177];
                        case "ri:RiEditLine": return [3 /*break*/, 1179];
                        case "ri:RiEraserFill": return [3 /*break*/, 1181];
                        case "ri:RiEraserLine": return [3 /*break*/, 1183];
                        case "ri:RiFlipHorizontal2Fill": return [3 /*break*/, 1185];
                        case "ri:RiFlipHorizontal2Line": return [3 /*break*/, 1187];
                        case "ri:RiFlipHorizontalFill": return [3 /*break*/, 1189];
                        case "ri:RiFlipHorizontalLine": return [3 /*break*/, 1191];
                        case "ri:RiFlipVertical2Fill": return [3 /*break*/, 1193];
                        case "ri:RiFlipVertical2Line": return [3 /*break*/, 1195];
                        case "ri:RiFlipVerticalFill": return [3 /*break*/, 1197];
                        case "ri:RiFlipVerticalLine": return [3 /*break*/, 1199];
                        case "ri:RiFocus2Fill": return [3 /*break*/, 1201];
                        case "ri:RiFocus2Line": return [3 /*break*/, 1203];
                        case "ri:RiFocus3Fill": return [3 /*break*/, 1205];
                        case "ri:RiFocus3Line": return [3 /*break*/, 1207];
                        case "ri:RiFocusFill": return [3 /*break*/, 1209];
                        case "ri:RiFocusLine": return [3 /*break*/, 1211];
                        case "ri:RiGridFill": return [3 /*break*/, 1213];
                        case "ri:RiGridLine": return [3 /*break*/, 1215];
                        case "ri:RiHammerFill": return [3 /*break*/, 1217];
                        case "ri:RiHammerLine": return [3 /*break*/, 1219];
                        case "ri:RiHexagonFill": return [3 /*break*/, 1221];
                        case "ri:RiHexagonLine": return [3 /*break*/, 1223];
                        case "ri:RiInkBottleFill": return [3 /*break*/, 1225];
                        case "ri:RiInkBottleLine": return [3 /*break*/, 1227];
                        case "ri:RiInputMethodFill": return [3 /*break*/, 1229];
                        case "ri:RiInputMethodLine": return [3 /*break*/, 1231];
                        case "ri:RiLayout2Fill": return [3 /*break*/, 1233];
                        case "ri:RiLayout2Line": return [3 /*break*/, 1235];
                        case "ri:RiLayout3Fill": return [3 /*break*/, 1237];
                        case "ri:RiLayout3Line": return [3 /*break*/, 1239];
                        case "ri:RiLayout4Fill": return [3 /*break*/, 1241];
                        case "ri:RiLayout4Line": return [3 /*break*/, 1243];
                        case "ri:RiLayout5Fill": return [3 /*break*/, 1245];
                        case "ri:RiLayout5Line": return [3 /*break*/, 1247];
                        case "ri:RiLayout6Fill": return [3 /*break*/, 1249];
                        case "ri:RiLayout6Line": return [3 /*break*/, 1251];
                        case "ri:RiLayoutBottom2Fill": return [3 /*break*/, 1253];
                        case "ri:RiLayoutBottom2Line": return [3 /*break*/, 1255];
                        case "ri:RiLayoutBottomFill": return [3 /*break*/, 1257];
                        case "ri:RiLayoutBottomLine": return [3 /*break*/, 1259];
                        case "ri:RiLayoutColumnFill": return [3 /*break*/, 1261];
                        case "ri:RiLayoutColumnLine": return [3 /*break*/, 1263];
                        case "ri:RiLayoutFill": return [3 /*break*/, 1265];
                        case "ri:RiLayoutGrid2Fill": return [3 /*break*/, 1267];
                        case "ri:RiLayoutGrid2Line": return [3 /*break*/, 1269];
                        case "ri:RiLayoutGridFill": return [3 /*break*/, 1271];
                        case "ri:RiLayoutGridLine": return [3 /*break*/, 1273];
                        case "ri:RiLayoutHorizontalFill": return [3 /*break*/, 1275];
                        case "ri:RiLayoutHorizontalLine": return [3 /*break*/, 1277];
                        case "ri:RiLayoutLeft2Fill": return [3 /*break*/, 1279];
                        case "ri:RiLayoutLeft2Line": return [3 /*break*/, 1281];
                        case "ri:RiLayoutLeftFill": return [3 /*break*/, 1283];
                        case "ri:RiLayoutLeftLine": return [3 /*break*/, 1285];
                        case "ri:RiLayoutLine": return [3 /*break*/, 1287];
                        case "ri:RiLayoutMasonryFill": return [3 /*break*/, 1289];
                        case "ri:RiLayoutMasonryLine": return [3 /*break*/, 1291];
                        case "ri:RiLayoutRight2Fill": return [3 /*break*/, 1293];
                        case "ri:RiLayoutRight2Line": return [3 /*break*/, 1295];
                        case "ri:RiLayoutRightFill": return [3 /*break*/, 1297];
                        case "ri:RiLayoutRightLine": return [3 /*break*/, 1299];
                        case "ri:RiLayoutRowFill": return [3 /*break*/, 1301];
                        case "ri:RiLayoutRowLine": return [3 /*break*/, 1303];
                        case "ri:RiLayoutTop2Fill": return [3 /*break*/, 1305];
                        case "ri:RiLayoutTop2Line": return [3 /*break*/, 1307];
                        case "ri:RiLayoutTopFill": return [3 /*break*/, 1309];
                        case "ri:RiLayoutTopLine": return [3 /*break*/, 1311];
                        case "ri:RiLayoutVerticalFill": return [3 /*break*/, 1313];
                        case "ri:RiLayoutVerticalLine": return [3 /*break*/, 1315];
                        case "ri:RiMagicFill": return [3 /*break*/, 1317];
                        case "ri:RiMagicLine": return [3 /*break*/, 1319];
                        case "ri:RiMarkPenFill": return [3 /*break*/, 1321];
                        case "ri:RiMarkPenLine": return [3 /*break*/, 1323];
                        case "ri:RiMarkupFill": return [3 /*break*/, 1325];
                        case "ri:RiMarkupLine": return [3 /*break*/, 1327];
                        case "ri:RiOctagonFill": return [3 /*break*/, 1329];
                        case "ri:RiOctagonLine": return [3 /*break*/, 1331];
                        case "ri:RiPaintBrushFill": return [3 /*break*/, 1333];
                        case "ri:RiPaintBrushLine": return [3 /*break*/, 1335];
                        case "ri:RiPaintFill": return [3 /*break*/, 1337];
                        case "ri:RiPaintLine": return [3 /*break*/, 1339];
                        case "ri:RiPaletteFill": return [3 /*break*/, 1341];
                        case "ri:RiPaletteLine": return [3 /*break*/, 1343];
                        case "ri:RiPantoneFill": return [3 /*break*/, 1345];
                        case "ri:RiPantoneLine": return [3 /*break*/, 1347];
                        case "ri:RiPenNibFill": return [3 /*break*/, 1349];
                        case "ri:RiPenNibLine": return [3 /*break*/, 1351];
                        case "ri:RiPencilFill": return [3 /*break*/, 1353];
                        case "ri:RiPencilLine": return [3 /*break*/, 1355];
                        case "ri:RiPencilRuler2Fill": return [3 /*break*/, 1357];
                        case "ri:RiPencilRuler2Line": return [3 /*break*/, 1359];
                        case "ri:RiPencilRulerFill": return [3 /*break*/, 1361];
                        case "ri:RiPencilRulerLine": return [3 /*break*/, 1363];
                        case "ri:RiPentagonFill": return [3 /*break*/, 1365];
                        case "ri:RiPentagonLine": return [3 /*break*/, 1367];
                        case "ri:RiQuillPenAiFill": return [3 /*break*/, 1369];
                        case "ri:RiQuillPenAiLine": return [3 /*break*/, 1371];
                        case "ri:RiQuillPenFill": return [3 /*break*/, 1373];
                        case "ri:RiQuillPenLine": return [3 /*break*/, 1375];
                        case "ri:RiRectangleFill": return [3 /*break*/, 1377];
                        case "ri:RiRectangleLine": return [3 /*break*/, 1379];
                        case "ri:RiRuler2Fill": return [3 /*break*/, 1381];
                        case "ri:RiRuler2Line": return [3 /*break*/, 1383];
                        case "ri:RiRulerFill": return [3 /*break*/, 1385];
                        case "ri:RiRulerLine": return [3 /*break*/, 1387];
                        case "ri:RiScissors2Fill": return [3 /*break*/, 1389];
                        case "ri:RiScissors2Line": return [3 /*break*/, 1391];
                        case "ri:RiScissorsCutFill": return [3 /*break*/, 1393];
                        case "ri:RiScissorsCutLine": return [3 /*break*/, 1395];
                        case "ri:RiScissorsFill": return [3 /*break*/, 1397];
                        case "ri:RiScissorsLine": return [3 /*break*/, 1399];
                        case "ri:RiScreenshot2Fill": return [3 /*break*/, 1401];
                        case "ri:RiScreenshot2Line": return [3 /*break*/, 1403];
                        case "ri:RiScreenshotFill": return [3 /*break*/, 1405];
                        case "ri:RiScreenshotLine": return [3 /*break*/, 1407];
                        case "ri:RiShadowFill": return [3 /*break*/, 1409];
                        case "ri:RiShadowLine": return [3 /*break*/, 1411];
                        case "ri:RiShape2Fill": return [3 /*break*/, 1413];
                        case "ri:RiShape2Line": return [3 /*break*/, 1415];
                        case "ri:RiShapeFill": return [3 /*break*/, 1417];
                        case "ri:RiShapeLine": return [3 /*break*/, 1419];
                        case "ri:RiShapesFill": return [3 /*break*/, 1421];
                        case "ri:RiShapesLine": return [3 /*break*/, 1423];
                        case "ri:RiSipFill": return [3 /*break*/, 1425];
                        case "ri:RiSipLine": return [3 /*break*/, 1427];
                        case "ri:RiSliceFill": return [3 /*break*/, 1429];
                        case "ri:RiSliceLine": return [3 /*break*/, 1431];
                        case "ri:RiSquareFill": return [3 /*break*/, 1433];
                        case "ri:RiSquareLine": return [3 /*break*/, 1435];
                        case "ri:RiTBoxFill": return [3 /*break*/, 1437];
                        case "ri:RiTBoxLine": return [3 /*break*/, 1439];
                        case "ri:RiTableAltFill": return [3 /*break*/, 1441];
                        case "ri:RiTableAltLine": return [3 /*break*/, 1443];
                        case "ri:RiTableFill": return [3 /*break*/, 1445];
                        case "ri:RiTableLine": return [3 /*break*/, 1447];
                        case "ri:RiToolsFill": return [3 /*break*/, 1449];
                        case "ri:RiToolsLine": return [3 /*break*/, 1451];
                        case "ri:RiTriangleFill": return [3 /*break*/, 1453];
                        case "ri:RiTriangleLine": return [3 /*break*/, 1455];
                        case "ri:RiBracesFill": return [3 /*break*/, 1457];
                        case "ri:RiBracesLine": return [3 /*break*/, 1459];
                        case "ri:RiBracketsFill": return [3 /*break*/, 1461];
                        case "ri:RiBracketsLine": return [3 /*break*/, 1463];
                        case "ri:RiBug2Fill": return [3 /*break*/, 1465];
                        case "ri:RiBug2Line": return [3 /*break*/, 1467];
                        case "ri:RiBugFill": return [3 /*break*/, 1469];
                        case "ri:RiBugLine": return [3 /*break*/, 1471];
                        case "ri:RiCodeAiFill": return [3 /*break*/, 1473];
                        case "ri:RiCodeAiLine": return [3 /*break*/, 1475];
                        case "ri:RiCodeBoxFill": return [3 /*break*/, 1477];
                        case "ri:RiCodeBoxLine": return [3 /*break*/, 1479];
                        case "ri:RiCodeFill": return [3 /*break*/, 1481];
                        case "ri:RiCodeLine": return [3 /*break*/, 1483];
                        case "ri:RiCodeSFill": return [3 /*break*/, 1485];
                        case "ri:RiCodeSLine": return [3 /*break*/, 1487];
                        case "ri:RiCodeSSlashFill": return [3 /*break*/, 1489];
                        case "ri:RiCodeSSlashLine": return [3 /*break*/, 1491];
                        case "ri:RiCommandFill": return [3 /*break*/, 1493];
                        case "ri:RiCommandLine": return [3 /*break*/, 1495];
                        case "ri:RiCss3Fill": return [3 /*break*/, 1497];
                        case "ri:RiCss3Line": return [3 /*break*/, 1499];
                        case "ri:RiCursorFill": return [3 /*break*/, 1501];
                        case "ri:RiCursorLine": return [3 /*break*/, 1503];
                        case "ri:RiGitBranchFill": return [3 /*break*/, 1505];
                        case "ri:RiGitBranchLine": return [3 /*break*/, 1507];
                        case "ri:RiGitClosePullRequestFill": return [3 /*break*/, 1509];
                        case "ri:RiGitClosePullRequestLine": return [3 /*break*/, 1511];
                        case "ri:RiGitCommitFill": return [3 /*break*/, 1513];
                        case "ri:RiGitCommitLine": return [3 /*break*/, 1515];
                        case "ri:RiGitForkFill": return [3 /*break*/, 1517];
                        case "ri:RiGitForkLine": return [3 /*break*/, 1519];
                        case "ri:RiGitMergeFill": return [3 /*break*/, 1521];
                        case "ri:RiGitMergeLine": return [3 /*break*/, 1523];
                        case "ri:RiGitPrDraftFill": return [3 /*break*/, 1525];
                        case "ri:RiGitPrDraftLine": return [3 /*break*/, 1527];
                        case "ri:RiGitPullRequestFill": return [3 /*break*/, 1529];
                        case "ri:RiGitPullRequestLine": return [3 /*break*/, 1531];
                        case "ri:RiGitRepositoryCommitsFill": return [3 /*break*/, 1533];
                        case "ri:RiGitRepositoryCommitsLine": return [3 /*break*/, 1535];
                        case "ri:RiGitRepositoryFill": return [3 /*break*/, 1537];
                        case "ri:RiGitRepositoryLine": return [3 /*break*/, 1539];
                        case "ri:RiGitRepositoryPrivateFill": return [3 /*break*/, 1541];
                        case "ri:RiGitRepositoryPrivateLine": return [3 /*break*/, 1543];
                        case "ri:RiHtml5Fill": return [3 /*break*/, 1545];
                        case "ri:RiHtml5Line": return [3 /*break*/, 1547];
                        case "ri:RiJavascriptFill": return [3 /*break*/, 1549];
                        case "ri:RiJavascriptLine": return [3 /*break*/, 1551];
                        case "ri:RiParenthesesFill": return [3 /*break*/, 1553];
                        case "ri:RiParenthesesLine": return [3 /*break*/, 1555];
                        case "ri:RiPhpFill": return [3 /*break*/, 1557];
                        case "ri:RiPhpLine": return [3 /*break*/, 1559];
                        case "ri:RiPuzzle2Fill": return [3 /*break*/, 1561];
                        case "ri:RiPuzzle2Line": return [3 /*break*/, 1563];
                        case "ri:RiPuzzleFill": return [3 /*break*/, 1565];
                        case "ri:RiPuzzleLine": return [3 /*break*/, 1567];
                        case "ri:RiTerminalBoxFill": return [3 /*break*/, 1569];
                        case "ri:RiTerminalBoxLine": return [3 /*break*/, 1571];
                        case "ri:RiTerminalFill": return [3 /*break*/, 1573];
                        case "ri:RiTerminalLine": return [3 /*break*/, 1575];
                        case "ri:RiTerminalWindowFill": return [3 /*break*/, 1577];
                        case "ri:RiTerminalWindowLine": return [3 /*break*/, 1579];
                        case "ri:RiAirplayFill": return [3 /*break*/, 1581];
                        case "ri:RiAirplayLine": return [3 /*break*/, 1583];
                        case "ri:RiBarcodeBoxFill": return [3 /*break*/, 1585];
                        case "ri:RiBarcodeBoxLine": return [3 /*break*/, 1587];
                        case "ri:RiBarcodeFill": return [3 /*break*/, 1589];
                        case "ri:RiBarcodeLine": return [3 /*break*/, 1591];
                        case "ri:RiBaseStationFill": return [3 /*break*/, 1593];
                        case "ri:RiBaseStationLine": return [3 /*break*/, 1595];
                        case "ri:RiBattery2ChargeFill": return [3 /*break*/, 1597];
                        case "ri:RiBattery2ChargeLine": return [3 /*break*/, 1599];
                        case "ri:RiBattery2Fill": return [3 /*break*/, 1601];
                        case "ri:RiBattery2Line": return [3 /*break*/, 1603];
                        case "ri:RiBatteryChargeFill": return [3 /*break*/, 1605];
                        case "ri:RiBatteryChargeLine": return [3 /*break*/, 1607];
                        case "ri:RiBatteryFill": return [3 /*break*/, 1609];
                        case "ri:RiBatteryLine": return [3 /*break*/, 1611];
                        case "ri:RiBatteryLowFill": return [3 /*break*/, 1613];
                        case "ri:RiBatteryLowLine": return [3 /*break*/, 1615];
                        case "ri:RiBatterySaverFill": return [3 /*break*/, 1617];
                        case "ri:RiBatterySaverLine": return [3 /*break*/, 1619];
                        case "ri:RiBatteryShareFill": return [3 /*break*/, 1621];
                        case "ri:RiBatteryShareLine": return [3 /*break*/, 1623];
                        case "ri:RiBluetoothConnectFill": return [3 /*break*/, 1625];
                        case "ri:RiBluetoothConnectLine": return [3 /*break*/, 1627];
                        case "ri:RiBluetoothFill": return [3 /*break*/, 1629];
                        case "ri:RiBluetoothLine": return [3 /*break*/, 1631];
                        case "ri:RiCastFill": return [3 /*break*/, 1633];
                        case "ri:RiCastLine": return [3 /*break*/, 1635];
                        case "ri:RiCellphoneFill": return [3 /*break*/, 1637];
                        case "ri:RiCellphoneLine": return [3 /*break*/, 1639];
                        case "ri:RiComputerFill": return [3 /*break*/, 1641];
                        case "ri:RiComputerLine": return [3 /*break*/, 1643];
                        case "ri:RiCpuFill": return [3 /*break*/, 1645];
                        case "ri:RiCpuLine": return [3 /*break*/, 1647];
                        case "ri:RiDashboard2Fill": return [3 /*break*/, 1649];
                        case "ri:RiDashboard2Line": return [3 /*break*/, 1651];
                        case "ri:RiDashboard3Fill": return [3 /*break*/, 1653];
                        case "ri:RiDashboard3Line": return [3 /*break*/, 1655];
                        case "ri:RiDatabase2Fill": return [3 /*break*/, 1657];
                        case "ri:RiDatabase2Line": return [3 /*break*/, 1659];
                        case "ri:RiDatabaseFill": return [3 /*break*/, 1661];
                        case "ri:RiDatabaseLine": return [3 /*break*/, 1663];
                        case "ri:RiDeviceFill": return [3 /*break*/, 1665];
                        case "ri:RiDeviceLine": return [3 /*break*/, 1667];
                        case "ri:RiDeviceRecoverFill": return [3 /*break*/, 1669];
                        case "ri:RiDeviceRecoverLine": return [3 /*break*/, 1671];
                        case "ri:RiDualSim1Fill": return [3 /*break*/, 1673];
                        case "ri:RiDualSim1Line": return [3 /*break*/, 1675];
                        case "ri:RiDualSim2Fill": return [3 /*break*/, 1677];
                        case "ri:RiDualSim2Line": return [3 /*break*/, 1679];
                        case "ri:RiFingerprint2Fill": return [3 /*break*/, 1681];
                        case "ri:RiFingerprint2Line": return [3 /*break*/, 1683];
                        case "ri:RiFingerprintFill": return [3 /*break*/, 1685];
                        case "ri:RiFingerprintLine": return [3 /*break*/, 1687];
                        case "ri:RiGamepadFill": return [3 /*break*/, 1689];
                        case "ri:RiGamepadLine": return [3 /*break*/, 1691];
                        case "ri:RiGpsFill": return [3 /*break*/, 1693];
                        case "ri:RiGpsLine": return [3 /*break*/, 1695];
                        case "ri:RiGradienterFill": return [3 /*break*/, 1697];
                        case "ri:RiGradienterLine": return [3 /*break*/, 1699];
                        case "ri:RiHardDrive2Fill": return [3 /*break*/, 1701];
                        case "ri:RiHardDrive2Line": return [3 /*break*/, 1703];
                        case "ri:RiHardDrive3Fill": return [3 /*break*/, 1705];
                        case "ri:RiHardDrive3Line": return [3 /*break*/, 1707];
                        case "ri:RiHardDriveFill": return [3 /*break*/, 1709];
                        case "ri:RiHardDriveLine": return [3 /*break*/, 1711];
                        case "ri:RiHotspotFill": return [3 /*break*/, 1713];
                        case "ri:RiHotspotLine": return [3 /*break*/, 1715];
                        case "ri:RiInstallFill": return [3 /*break*/, 1717];
                        case "ri:RiInstallLine": return [3 /*break*/, 1719];
                        case "ri:RiInstanceFill": return [3 /*break*/, 1721];
                        case "ri:RiInstanceLine": return [3 /*break*/, 1723];
                        case "ri:RiKeyboardBoxFill": return [3 /*break*/, 1725];
                        case "ri:RiKeyboardBoxLine": return [3 /*break*/, 1727];
                        case "ri:RiKeyboardFill": return [3 /*break*/, 1729];
                        case "ri:RiKeyboardLine": return [3 /*break*/, 1731];
                        case "ri:RiMacFill": return [3 /*break*/, 1733];
                        case "ri:RiMacLine": return [3 /*break*/, 1735];
                        case "ri:RiMacbookFill": return [3 /*break*/, 1737];
                        case "ri:RiMacbookLine": return [3 /*break*/, 1739];
                        case "ri:RiMobileDownloadFill": return [3 /*break*/, 1741];
                        case "ri:RiMobileDownloadLine": return [3 /*break*/, 1743];
                        case "ri:RiMouseFill": return [3 /*break*/, 1745];
                        case "ri:RiMouseLine": return [3 /*break*/, 1747];
                        case "ri:RiPhoneFill": return [3 /*break*/, 1749];
                        case "ri:RiPhoneFindFill": return [3 /*break*/, 1751];
                        case "ri:RiPhoneFindLine": return [3 /*break*/, 1753];
                        case "ri:RiPhoneLine": return [3 /*break*/, 1755];
                        case "ri:RiPhoneLockFill": return [3 /*break*/, 1757];
                        case "ri:RiPhoneLockLine": return [3 /*break*/, 1759];
                        case "ri:RiQrCodeFill": return [3 /*break*/, 1761];
                        case "ri:RiQrCodeLine": return [3 /*break*/, 1763];
                        case "ri:RiQrScan2Fill": return [3 /*break*/, 1765];
                        case "ri:RiQrScan2Line": return [3 /*break*/, 1767];
                        case "ri:RiQrScanFill": return [3 /*break*/, 1769];
                        case "ri:RiQrScanLine": return [3 /*break*/, 1771];
                        case "ri:RiRadarFill": return [3 /*break*/, 1773];
                        case "ri:RiRadarLine": return [3 /*break*/, 1775];
                        case "ri:RiRam2Fill": return [3 /*break*/, 1777];
                        case "ri:RiRam2Line": return [3 /*break*/, 1779];
                        case "ri:RiRamFill": return [3 /*break*/, 1781];
                        case "ri:RiRamLine": return [3 /*break*/, 1783];
                        case "ri:RiRemoteControl2Fill": return [3 /*break*/, 1785];
                        case "ri:RiRemoteControl2Line": return [3 /*break*/, 1787];
                        case "ri:RiRemoteControlFill": return [3 /*break*/, 1789];
                        case "ri:RiRemoteControlLine": return [3 /*break*/, 1791];
                        case "ri:RiRestartFill": return [3 /*break*/, 1793];
                        case "ri:RiRestartLine": return [3 /*break*/, 1795];
                        case "ri:RiRfidFill": return [3 /*break*/, 1797];
                        case "ri:RiRfidLine": return [3 /*break*/, 1799];
                        case "ri:RiRotateLockFill": return [3 /*break*/, 1801];
                        case "ri:RiRotateLockLine": return [3 /*break*/, 1803];
                        case "ri:RiRouterFill": return [3 /*break*/, 1805];
                        case "ri:RiRouterLine": return [3 /*break*/, 1807];
                        case "ri:RiRssFill": return [3 /*break*/, 1809];
                        case "ri:RiRssLine": return [3 /*break*/, 1811];
                        case "ri:RiSave2Fill": return [3 /*break*/, 1813];
                        case "ri:RiSave2Line": return [3 /*break*/, 1815];
                        case "ri:RiSave3Fill": return [3 /*break*/, 1817];
                        case "ri:RiSave3Line": return [3 /*break*/, 1819];
                        case "ri:RiSaveFill": return [3 /*break*/, 1821];
                        case "ri:RiSaveLine": return [3 /*break*/, 1823];
                        case "ri:RiScan2Fill": return [3 /*break*/, 1825];
                        case "ri:RiScan2Line": return [3 /*break*/, 1827];
                        case "ri:RiScanFill": return [3 /*break*/, 1829];
                        case "ri:RiScanLine": return [3 /*break*/, 1831];
                        case "ri:RiSdCardFill": return [3 /*break*/, 1833];
                        case "ri:RiSdCardLine": return [3 /*break*/, 1835];
                        case "ri:RiSdCardMiniFill": return [3 /*break*/, 1837];
                        case "ri:RiSdCardMiniLine": return [3 /*break*/, 1839];
                        case "ri:RiSensorFill": return [3 /*break*/, 1841];
                        case "ri:RiSensorLine": return [3 /*break*/, 1843];
                        case "ri:RiServerFill": return [3 /*break*/, 1845];
                        case "ri:RiServerLine": return [3 /*break*/, 1847];
                        case "ri:RiShutDownFill": return [3 /*break*/, 1849];
                        case "ri:RiShutDownLine": return [3 /*break*/, 1851];
                        case "ri:RiSignalWifi1Fill": return [3 /*break*/, 1853];
                        case "ri:RiSignalWifi1Line": return [3 /*break*/, 1855];
                        case "ri:RiSignalWifi2Fill": return [3 /*break*/, 1857];
                        case "ri:RiSignalWifi2Line": return [3 /*break*/, 1859];
                        case "ri:RiSignalWifi3Fill": return [3 /*break*/, 1861];
                        case "ri:RiSignalWifi3Line": return [3 /*break*/, 1863];
                        case "ri:RiSignalWifiErrorFill": return [3 /*break*/, 1865];
                        case "ri:RiSignalWifiErrorLine": return [3 /*break*/, 1867];
                        case "ri:RiSignalWifiFill": return [3 /*break*/, 1869];
                        case "ri:RiSignalWifiLine": return [3 /*break*/, 1871];
                        case "ri:RiSignalWifiOffFill": return [3 /*break*/, 1873];
                        case "ri:RiSignalWifiOffLine": return [3 /*break*/, 1875];
                        case "ri:RiSimCard2Fill": return [3 /*break*/, 1877];
                        case "ri:RiSimCard2Line": return [3 /*break*/, 1879];
                        case "ri:RiSimCardFill": return [3 /*break*/, 1881];
                        case "ri:RiSimCardLine": return [3 /*break*/, 1883];
                        case "ri:RiSmartphoneFill": return [3 /*break*/, 1885];
                        case "ri:RiSmartphoneLine": return [3 /*break*/, 1887];
                        case "ri:RiTabletFill": return [3 /*break*/, 1889];
                        case "ri:RiTabletLine": return [3 /*break*/, 1891];
                        case "ri:RiTv2Fill": return [3 /*break*/, 1893];
                        case "ri:RiTv2Line": return [3 /*break*/, 1895];
                        case "ri:RiTvFill": return [3 /*break*/, 1897];
                        case "ri:RiTvLine": return [3 /*break*/, 1899];
                        case "ri:RiUDiskFill": return [3 /*break*/, 1901];
                        case "ri:RiUDiskLine": return [3 /*break*/, 1903];
                        case "ri:RiUninstallFill": return [3 /*break*/, 1905];
                        case "ri:RiUninstallLine": return [3 /*break*/, 1907];
                        case "ri:RiUsbFill": return [3 /*break*/, 1909];
                        case "ri:RiUsbLine": return [3 /*break*/, 1911];
                        case "ri:RiWifiFill": return [3 /*break*/, 1913];
                        case "ri:RiWifiLine": return [3 /*break*/, 1915];
                        case "ri:RiWifiOffFill": return [3 /*break*/, 1917];
                        case "ri:RiWifiOffLine": return [3 /*break*/, 1919];
                        case "ri:RiWirelessChargingFill": return [3 /*break*/, 1921];
                        case "ri:RiWirelessChargingLine": return [3 /*break*/, 1923];
                        case "ri:RiArticleFill": return [3 /*break*/, 1925];
                        case "ri:RiArticleLine": return [3 /*break*/, 1927];
                        case "ri:RiBillFill": return [3 /*break*/, 1929];
                        case "ri:RiBillLine": return [3 /*break*/, 1931];
                        case "ri:RiBook2Fill": return [3 /*break*/, 1933];
                        case "ri:RiBook2Line": return [3 /*break*/, 1935];
                        case "ri:RiBook3Fill": return [3 /*break*/, 1937];
                        case "ri:RiBook3Line": return [3 /*break*/, 1939];
                        case "ri:RiBookFill": return [3 /*break*/, 1941];
                        case "ri:RiBookLine": return [3 /*break*/, 1943];
                        case "ri:RiBookMarkedFill": return [3 /*break*/, 1945];
                        case "ri:RiBookMarkedLine": return [3 /*break*/, 1947];
                        case "ri:RiBookOpenFill": return [3 /*break*/, 1949];
                        case "ri:RiBookOpenLine": return [3 /*break*/, 1951];
                        case "ri:RiBookReadFill": return [3 /*break*/, 1953];
                        case "ri:RiBookReadLine": return [3 /*break*/, 1955];
                        case "ri:RiBookletFill": return [3 /*break*/, 1957];
                        case "ri:RiBookletLine": return [3 /*break*/, 1959];
                        case "ri:RiClipboardFill": return [3 /*break*/, 1961];
                        case "ri:RiClipboardLine": return [3 /*break*/, 1963];
                        case "ri:RiContactsBook2Fill": return [3 /*break*/, 1965];
                        case "ri:RiContactsBook2Line": return [3 /*break*/, 1967];
                        case "ri:RiContactsBook3Fill": return [3 /*break*/, 1969];
                        case "ri:RiContactsBook3Line": return [3 /*break*/, 1971];
                        case "ri:RiContactsBookFill": return [3 /*break*/, 1973];
                        case "ri:RiContactsBookLine": return [3 /*break*/, 1975];
                        case "ri:RiContactsBookUploadFill": return [3 /*break*/, 1977];
                        case "ri:RiContactsBookUploadLine": return [3 /*break*/, 1979];
                        case "ri:RiContractFill": return [3 /*break*/, 1981];
                        case "ri:RiContractLine": return [3 /*break*/, 1983];
                        case "ri:RiDraftFill": return [3 /*break*/, 1985];
                        case "ri:RiDraftLine": return [3 /*break*/, 1987];
                        case "ri:RiFile2Fill": return [3 /*break*/, 1989];
                        case "ri:RiFile2Line": return [3 /*break*/, 1991];
                        case "ri:RiFile3Fill": return [3 /*break*/, 1993];
                        case "ri:RiFile3Line": return [3 /*break*/, 1995];
                        case "ri:RiFile4Fill": return [3 /*break*/, 1997];
                        case "ri:RiFile4Line": return [3 /*break*/, 1999];
                    }
                    return [3 /*break*/, 2001];
                case 1: return [4 /*yield*/, import("react-icons/ri")];
                case 2:
                    RiArrowDownBoxFill = (_b.sent()).RiArrowDownBoxFill;
                    return [2 /*return*/, RiArrowDownBoxFill];
                case 3: return [4 /*yield*/, import("react-icons/ri")];
                case 4:
                    RiArrowDownBoxLine = (_b.sent()).RiArrowDownBoxLine;
                    return [2 /*return*/, RiArrowDownBoxLine];
                case 5: return [4 /*yield*/, import("react-icons/ri")];
                case 6:
                    RiArrowDownCircleFill = (_b.sent()).RiArrowDownCircleFill;
                    return [2 /*return*/, RiArrowDownCircleFill];
                case 7: return [4 /*yield*/, import("react-icons/ri")];
                case 8:
                    RiArrowDownCircleLine = (_b.sent()).RiArrowDownCircleLine;
                    return [2 /*return*/, RiArrowDownCircleLine];
                case 9: return [4 /*yield*/, import("react-icons/ri")];
                case 10:
                    RiArrowDownDoubleFill = (_b.sent()).RiArrowDownDoubleFill;
                    return [2 /*return*/, RiArrowDownDoubleFill];
                case 11: return [4 /*yield*/, import("react-icons/ri")];
                case 12:
                    RiArrowDownDoubleLine = (_b.sent()).RiArrowDownDoubleLine;
                    return [2 /*return*/, RiArrowDownDoubleLine];
                case 13: return [4 /*yield*/, import("react-icons/ri")];
                case 14:
                    RiArrowDownFill = (_b.sent()).RiArrowDownFill;
                    return [2 /*return*/, RiArrowDownFill];
                case 15: return [4 /*yield*/, import("react-icons/ri")];
                case 16:
                    RiArrowDownLine = (_b.sent()).RiArrowDownLine;
                    return [2 /*return*/, RiArrowDownLine];
                case 17: return [4 /*yield*/, import("react-icons/ri")];
                case 18:
                    RiArrowDownSFill = (_b.sent()).RiArrowDownSFill;
                    return [2 /*return*/, RiArrowDownSFill];
                case 19: return [4 /*yield*/, import("react-icons/ri")];
                case 20:
                    RiArrowDownSLine = (_b.sent()).RiArrowDownSLine;
                    return [2 /*return*/, RiArrowDownSLine];
                case 21: return [4 /*yield*/, import("react-icons/ri")];
                case 22:
                    RiArrowDownWideFill = (_b.sent()).RiArrowDownWideFill;
                    return [2 /*return*/, RiArrowDownWideFill];
                case 23: return [4 /*yield*/, import("react-icons/ri")];
                case 24:
                    RiArrowDownWideLine = (_b.sent()).RiArrowDownWideLine;
                    return [2 /*return*/, RiArrowDownWideLine];
                case 25: return [4 /*yield*/, import("react-icons/ri")];
                case 26:
                    RiArrowDropDownFill = (_b.sent()).RiArrowDropDownFill;
                    return [2 /*return*/, RiArrowDropDownFill];
                case 27: return [4 /*yield*/, import("react-icons/ri")];
                case 28:
                    RiArrowDropDownLine = (_b.sent()).RiArrowDropDownLine;
                    return [2 /*return*/, RiArrowDropDownLine];
                case 29: return [4 /*yield*/, import("react-icons/ri")];
                case 30:
                    RiArrowDropLeftFill = (_b.sent()).RiArrowDropLeftFill;
                    return [2 /*return*/, RiArrowDropLeftFill];
                case 31: return [4 /*yield*/, import("react-icons/ri")];
                case 32:
                    RiArrowDropLeftLine = (_b.sent()).RiArrowDropLeftLine;
                    return [2 /*return*/, RiArrowDropLeftLine];
                case 33: return [4 /*yield*/, import("react-icons/ri")];
                case 34:
                    RiArrowDropRightFill = (_b.sent()).RiArrowDropRightFill;
                    return [2 /*return*/, RiArrowDropRightFill];
                case 35: return [4 /*yield*/, import("react-icons/ri")];
                case 36:
                    RiArrowDropRightLine = (_b.sent()).RiArrowDropRightLine;
                    return [2 /*return*/, RiArrowDropRightLine];
                case 37: return [4 /*yield*/, import("react-icons/ri")];
                case 38:
                    RiArrowDropUpFill = (_b.sent()).RiArrowDropUpFill;
                    return [2 /*return*/, RiArrowDropUpFill];
                case 39: return [4 /*yield*/, import("react-icons/ri")];
                case 40:
                    RiArrowDropUpLine = (_b.sent()).RiArrowDropUpLine;
                    return [2 /*return*/, RiArrowDropUpLine];
                case 41: return [4 /*yield*/, import("react-icons/ri")];
                case 42:
                    RiArrowGoBackFill = (_b.sent()).RiArrowGoBackFill;
                    return [2 /*return*/, RiArrowGoBackFill];
                case 43: return [4 /*yield*/, import("react-icons/ri")];
                case 44:
                    RiArrowGoBackLine = (_b.sent()).RiArrowGoBackLine;
                    return [2 /*return*/, RiArrowGoBackLine];
                case 45: return [4 /*yield*/, import("react-icons/ri")];
                case 46:
                    RiArrowGoForwardFill = (_b.sent()).RiArrowGoForwardFill;
                    return [2 /*return*/, RiArrowGoForwardFill];
                case 47: return [4 /*yield*/, import("react-icons/ri")];
                case 48:
                    RiArrowGoForwardLine = (_b.sent()).RiArrowGoForwardLine;
                    return [2 /*return*/, RiArrowGoForwardLine];
                case 49: return [4 /*yield*/, import("react-icons/ri")];
                case 50:
                    RiArrowLeftBoxFill = (_b.sent()).RiArrowLeftBoxFill;
                    return [2 /*return*/, RiArrowLeftBoxFill];
                case 51: return [4 /*yield*/, import("react-icons/ri")];
                case 52:
                    RiArrowLeftBoxLine = (_b.sent()).RiArrowLeftBoxLine;
                    return [2 /*return*/, RiArrowLeftBoxLine];
                case 53: return [4 /*yield*/, import("react-icons/ri")];
                case 54:
                    RiArrowLeftCircleFill = (_b.sent()).RiArrowLeftCircleFill;
                    return [2 /*return*/, RiArrowLeftCircleFill];
                case 55: return [4 /*yield*/, import("react-icons/ri")];
                case 56:
                    RiArrowLeftCircleLine = (_b.sent()).RiArrowLeftCircleLine;
                    return [2 /*return*/, RiArrowLeftCircleLine];
                case 57: return [4 /*yield*/, import("react-icons/ri")];
                case 58:
                    RiArrowLeftDoubleFill = (_b.sent()).RiArrowLeftDoubleFill;
                    return [2 /*return*/, RiArrowLeftDoubleFill];
                case 59: return [4 /*yield*/, import("react-icons/ri")];
                case 60:
                    RiArrowLeftDoubleLine = (_b.sent()).RiArrowLeftDoubleLine;
                    return [2 /*return*/, RiArrowLeftDoubleLine];
                case 61: return [4 /*yield*/, import("react-icons/ri")];
                case 62:
                    RiArrowLeftDownBoxFill = (_b.sent()).RiArrowLeftDownBoxFill;
                    return [2 /*return*/, RiArrowLeftDownBoxFill];
                case 63: return [4 /*yield*/, import("react-icons/ri")];
                case 64:
                    RiArrowLeftDownBoxLine = (_b.sent()).RiArrowLeftDownBoxLine;
                    return [2 /*return*/, RiArrowLeftDownBoxLine];
                case 65: return [4 /*yield*/, import("react-icons/ri")];
                case 66:
                    RiArrowLeftDownFill = (_b.sent()).RiArrowLeftDownFill;
                    return [2 /*return*/, RiArrowLeftDownFill];
                case 67: return [4 /*yield*/, import("react-icons/ri")];
                case 68:
                    RiArrowLeftDownLine = (_b.sent()).RiArrowLeftDownLine;
                    return [2 /*return*/, RiArrowLeftDownLine];
                case 69: return [4 /*yield*/, import("react-icons/ri")];
                case 70:
                    RiArrowLeftFill = (_b.sent()).RiArrowLeftFill;
                    return [2 /*return*/, RiArrowLeftFill];
                case 71: return [4 /*yield*/, import("react-icons/ri")];
                case 72:
                    RiArrowLeftLine = (_b.sent()).RiArrowLeftLine;
                    return [2 /*return*/, RiArrowLeftLine];
                case 73: return [4 /*yield*/, import("react-icons/ri")];
                case 74:
                    RiArrowLeftRightFill = (_b.sent()).RiArrowLeftRightFill;
                    return [2 /*return*/, RiArrowLeftRightFill];
                case 75: return [4 /*yield*/, import("react-icons/ri")];
                case 76:
                    RiArrowLeftRightLine = (_b.sent()).RiArrowLeftRightLine;
                    return [2 /*return*/, RiArrowLeftRightLine];
                case 77: return [4 /*yield*/, import("react-icons/ri")];
                case 78:
                    RiArrowLeftSFill = (_b.sent()).RiArrowLeftSFill;
                    return [2 /*return*/, RiArrowLeftSFill];
                case 79: return [4 /*yield*/, import("react-icons/ri")];
                case 80:
                    RiArrowLeftSLine = (_b.sent()).RiArrowLeftSLine;
                    return [2 /*return*/, RiArrowLeftSLine];
                case 81: return [4 /*yield*/, import("react-icons/ri")];
                case 82:
                    RiArrowLeftUpBoxFill = (_b.sent()).RiArrowLeftUpBoxFill;
                    return [2 /*return*/, RiArrowLeftUpBoxFill];
                case 83: return [4 /*yield*/, import("react-icons/ri")];
                case 84:
                    RiArrowLeftUpBoxLine = (_b.sent()).RiArrowLeftUpBoxLine;
                    return [2 /*return*/, RiArrowLeftUpBoxLine];
                case 85: return [4 /*yield*/, import("react-icons/ri")];
                case 86:
                    RiArrowLeftUpFill = (_b.sent()).RiArrowLeftUpFill;
                    return [2 /*return*/, RiArrowLeftUpFill];
                case 87: return [4 /*yield*/, import("react-icons/ri")];
                case 88:
                    RiArrowLeftUpLine = (_b.sent()).RiArrowLeftUpLine;
                    return [2 /*return*/, RiArrowLeftUpLine];
                case 89: return [4 /*yield*/, import("react-icons/ri")];
                case 90:
                    RiArrowLeftWideFill = (_b.sent()).RiArrowLeftWideFill;
                    return [2 /*return*/, RiArrowLeftWideFill];
                case 91: return [4 /*yield*/, import("react-icons/ri")];
                case 92:
                    RiArrowLeftWideLine = (_b.sent()).RiArrowLeftWideLine;
                    return [2 /*return*/, RiArrowLeftWideLine];
                case 93: return [4 /*yield*/, import("react-icons/ri")];
                case 94:
                    RiArrowRightBoxFill = (_b.sent()).RiArrowRightBoxFill;
                    return [2 /*return*/, RiArrowRightBoxFill];
                case 95: return [4 /*yield*/, import("react-icons/ri")];
                case 96:
                    RiArrowRightBoxLine = (_b.sent()).RiArrowRightBoxLine;
                    return [2 /*return*/, RiArrowRightBoxLine];
                case 97: return [4 /*yield*/, import("react-icons/ri")];
                case 98:
                    RiArrowRightCircleFill = (_b.sent()).RiArrowRightCircleFill;
                    return [2 /*return*/, RiArrowRightCircleFill];
                case 99: return [4 /*yield*/, import("react-icons/ri")];
                case 100:
                    RiArrowRightCircleLine = (_b.sent()).RiArrowRightCircleLine;
                    return [2 /*return*/, RiArrowRightCircleLine];
                case 101: return [4 /*yield*/, import("react-icons/ri")];
                case 102:
                    RiArrowRightDoubleFill = (_b.sent()).RiArrowRightDoubleFill;
                    return [2 /*return*/, RiArrowRightDoubleFill];
                case 103: return [4 /*yield*/, import("react-icons/ri")];
                case 104:
                    RiArrowRightDoubleLine = (_b.sent()).RiArrowRightDoubleLine;
                    return [2 /*return*/, RiArrowRightDoubleLine];
                case 105: return [4 /*yield*/, import("react-icons/ri")];
                case 106:
                    RiArrowRightDownBoxFill = (_b.sent()).RiArrowRightDownBoxFill;
                    return [2 /*return*/, RiArrowRightDownBoxFill];
                case 107: return [4 /*yield*/, import("react-icons/ri")];
                case 108:
                    RiArrowRightDownBoxLine = (_b.sent()).RiArrowRightDownBoxLine;
                    return [2 /*return*/, RiArrowRightDownBoxLine];
                case 109: return [4 /*yield*/, import("react-icons/ri")];
                case 110:
                    RiArrowRightDownFill = (_b.sent()).RiArrowRightDownFill;
                    return [2 /*return*/, RiArrowRightDownFill];
                case 111: return [4 /*yield*/, import("react-icons/ri")];
                case 112:
                    RiArrowRightDownLine = (_b.sent()).RiArrowRightDownLine;
                    return [2 /*return*/, RiArrowRightDownLine];
                case 113: return [4 /*yield*/, import("react-icons/ri")];
                case 114:
                    RiArrowRightFill = (_b.sent()).RiArrowRightFill;
                    return [2 /*return*/, RiArrowRightFill];
                case 115: return [4 /*yield*/, import("react-icons/ri")];
                case 116:
                    RiArrowRightLine = (_b.sent()).RiArrowRightLine;
                    return [2 /*return*/, RiArrowRightLine];
                case 117: return [4 /*yield*/, import("react-icons/ri")];
                case 118:
                    RiArrowRightSFill = (_b.sent()).RiArrowRightSFill;
                    return [2 /*return*/, RiArrowRightSFill];
                case 119: return [4 /*yield*/, import("react-icons/ri")];
                case 120:
                    RiArrowRightSLine = (_b.sent()).RiArrowRightSLine;
                    return [2 /*return*/, RiArrowRightSLine];
                case 121: return [4 /*yield*/, import("react-icons/ri")];
                case 122:
                    RiArrowRightUpBoxFill = (_b.sent()).RiArrowRightUpBoxFill;
                    return [2 /*return*/, RiArrowRightUpBoxFill];
                case 123: return [4 /*yield*/, import("react-icons/ri")];
                case 124:
                    RiArrowRightUpBoxLine = (_b.sent()).RiArrowRightUpBoxLine;
                    return [2 /*return*/, RiArrowRightUpBoxLine];
                case 125: return [4 /*yield*/, import("react-icons/ri")];
                case 126:
                    RiArrowRightUpFill = (_b.sent()).RiArrowRightUpFill;
                    return [2 /*return*/, RiArrowRightUpFill];
                case 127: return [4 /*yield*/, import("react-icons/ri")];
                case 128:
                    RiArrowRightUpLine = (_b.sent()).RiArrowRightUpLine;
                    return [2 /*return*/, RiArrowRightUpLine];
                case 129: return [4 /*yield*/, import("react-icons/ri")];
                case 130:
                    RiArrowRightWideFill = (_b.sent()).RiArrowRightWideFill;
                    return [2 /*return*/, RiArrowRightWideFill];
                case 131: return [4 /*yield*/, import("react-icons/ri")];
                case 132:
                    RiArrowRightWideLine = (_b.sent()).RiArrowRightWideLine;
                    return [2 /*return*/, RiArrowRightWideLine];
                case 133: return [4 /*yield*/, import("react-icons/ri")];
                case 134:
                    RiArrowTurnBackFill = (_b.sent()).RiArrowTurnBackFill;
                    return [2 /*return*/, RiArrowTurnBackFill];
                case 135: return [4 /*yield*/, import("react-icons/ri")];
                case 136:
                    RiArrowTurnBackLine = (_b.sent()).RiArrowTurnBackLine;
                    return [2 /*return*/, RiArrowTurnBackLine];
                case 137: return [4 /*yield*/, import("react-icons/ri")];
                case 138:
                    RiArrowTurnForwardFill = (_b.sent()).RiArrowTurnForwardFill;
                    return [2 /*return*/, RiArrowTurnForwardFill];
                case 139: return [4 /*yield*/, import("react-icons/ri")];
                case 140:
                    RiArrowTurnForwardLine = (_b.sent()).RiArrowTurnForwardLine;
                    return [2 /*return*/, RiArrowTurnForwardLine];
                case 141: return [4 /*yield*/, import("react-icons/ri")];
                case 142:
                    RiArrowUpBoxFill = (_b.sent()).RiArrowUpBoxFill;
                    return [2 /*return*/, RiArrowUpBoxFill];
                case 143: return [4 /*yield*/, import("react-icons/ri")];
                case 144:
                    RiArrowUpBoxLine = (_b.sent()).RiArrowUpBoxLine;
                    return [2 /*return*/, RiArrowUpBoxLine];
                case 145: return [4 /*yield*/, import("react-icons/ri")];
                case 146:
                    RiArrowUpCircleFill = (_b.sent()).RiArrowUpCircleFill;
                    return [2 /*return*/, RiArrowUpCircleFill];
                case 147: return [4 /*yield*/, import("react-icons/ri")];
                case 148:
                    RiArrowUpCircleLine = (_b.sent()).RiArrowUpCircleLine;
                    return [2 /*return*/, RiArrowUpCircleLine];
                case 149: return [4 /*yield*/, import("react-icons/ri")];
                case 150:
                    RiArrowUpDoubleFill = (_b.sent()).RiArrowUpDoubleFill;
                    return [2 /*return*/, RiArrowUpDoubleFill];
                case 151: return [4 /*yield*/, import("react-icons/ri")];
                case 152:
                    RiArrowUpDoubleLine = (_b.sent()).RiArrowUpDoubleLine;
                    return [2 /*return*/, RiArrowUpDoubleLine];
                case 153: return [4 /*yield*/, import("react-icons/ri")];
                case 154:
                    RiArrowUpDownFill = (_b.sent()).RiArrowUpDownFill;
                    return [2 /*return*/, RiArrowUpDownFill];
                case 155: return [4 /*yield*/, import("react-icons/ri")];
                case 156:
                    RiArrowUpDownLine = (_b.sent()).RiArrowUpDownLine;
                    return [2 /*return*/, RiArrowUpDownLine];
                case 157: return [4 /*yield*/, import("react-icons/ri")];
                case 158:
                    RiArrowUpFill = (_b.sent()).RiArrowUpFill;
                    return [2 /*return*/, RiArrowUpFill];
                case 159: return [4 /*yield*/, import("react-icons/ri")];
                case 160:
                    RiArrowUpLine = (_b.sent()).RiArrowUpLine;
                    return [2 /*return*/, RiArrowUpLine];
                case 161: return [4 /*yield*/, import("react-icons/ri")];
                case 162:
                    RiArrowUpSFill = (_b.sent()).RiArrowUpSFill;
                    return [2 /*return*/, RiArrowUpSFill];
                case 163: return [4 /*yield*/, import("react-icons/ri")];
                case 164:
                    RiArrowUpSLine = (_b.sent()).RiArrowUpSLine;
                    return [2 /*return*/, RiArrowUpSLine];
                case 165: return [4 /*yield*/, import("react-icons/ri")];
                case 166:
                    RiArrowUpWideFill = (_b.sent()).RiArrowUpWideFill;
                    return [2 /*return*/, RiArrowUpWideFill];
                case 167: return [4 /*yield*/, import("react-icons/ri")];
                case 168:
                    RiArrowUpWideLine = (_b.sent()).RiArrowUpWideLine;
                    return [2 /*return*/, RiArrowUpWideLine];
                case 169: return [4 /*yield*/, import("react-icons/ri")];
                case 170:
                    RiCollapseDiagonal2Fill = (_b.sent()).RiCollapseDiagonal2Fill;
                    return [2 /*return*/, RiCollapseDiagonal2Fill];
                case 171: return [4 /*yield*/, import("react-icons/ri")];
                case 172:
                    RiCollapseDiagonal2Line = (_b.sent()).RiCollapseDiagonal2Line;
                    return [2 /*return*/, RiCollapseDiagonal2Line];
                case 173: return [4 /*yield*/, import("react-icons/ri")];
                case 174:
                    RiCollapseDiagonalFill = (_b.sent()).RiCollapseDiagonalFill;
                    return [2 /*return*/, RiCollapseDiagonalFill];
                case 175: return [4 /*yield*/, import("react-icons/ri")];
                case 176:
                    RiCollapseDiagonalLine = (_b.sent()).RiCollapseDiagonalLine;
                    return [2 /*return*/, RiCollapseDiagonalLine];
                case 177: return [4 /*yield*/, import("react-icons/ri")];
                case 178:
                    RiCollapseHorizontalFill = (_b.sent()).RiCollapseHorizontalFill;
                    return [2 /*return*/, RiCollapseHorizontalFill];
                case 179: return [4 /*yield*/, import("react-icons/ri")];
                case 180:
                    RiCollapseHorizontalLine = (_b.sent()).RiCollapseHorizontalLine;
                    return [2 /*return*/, RiCollapseHorizontalLine];
                case 181: return [4 /*yield*/, import("react-icons/ri")];
                case 182:
                    RiCollapseVerticalFill = (_b.sent()).RiCollapseVerticalFill;
                    return [2 /*return*/, RiCollapseVerticalFill];
                case 183: return [4 /*yield*/, import("react-icons/ri")];
                case 184:
                    RiCollapseVerticalLine = (_b.sent()).RiCollapseVerticalLine;
                    return [2 /*return*/, RiCollapseVerticalLine];
                case 185: return [4 /*yield*/, import("react-icons/ri")];
                case 186:
                    RiContractLeftFill = (_b.sent()).RiContractLeftFill;
                    return [2 /*return*/, RiContractLeftFill];
                case 187: return [4 /*yield*/, import("react-icons/ri")];
                case 188:
                    RiContractLeftLine = (_b.sent()).RiContractLeftLine;
                    return [2 /*return*/, RiContractLeftLine];
                case 189: return [4 /*yield*/, import("react-icons/ri")];
                case 190:
                    RiContractLeftRightFill = (_b.sent()).RiContractLeftRightFill;
                    return [2 /*return*/, RiContractLeftRightFill];
                case 191: return [4 /*yield*/, import("react-icons/ri")];
                case 192:
                    RiContractLeftRightLine = (_b.sent()).RiContractLeftRightLine;
                    return [2 /*return*/, RiContractLeftRightLine];
                case 193: return [4 /*yield*/, import("react-icons/ri")];
                case 194:
                    RiContractRightFill = (_b.sent()).RiContractRightFill;
                    return [2 /*return*/, RiContractRightFill];
                case 195: return [4 /*yield*/, import("react-icons/ri")];
                case 196:
                    RiContractRightLine = (_b.sent()).RiContractRightLine;
                    return [2 /*return*/, RiContractRightLine];
                case 197: return [4 /*yield*/, import("react-icons/ri")];
                case 198:
                    RiContractUpDownFill = (_b.sent()).RiContractUpDownFill;
                    return [2 /*return*/, RiContractUpDownFill];
                case 199: return [4 /*yield*/, import("react-icons/ri")];
                case 200:
                    RiContractUpDownLine = (_b.sent()).RiContractUpDownLine;
                    return [2 /*return*/, RiContractUpDownLine];
                case 201: return [4 /*yield*/, import("react-icons/ri")];
                case 202:
                    RiCornerDownLeftFill = (_b.sent()).RiCornerDownLeftFill;
                    return [2 /*return*/, RiCornerDownLeftFill];
                case 203: return [4 /*yield*/, import("react-icons/ri")];
                case 204:
                    RiCornerDownLeftLine = (_b.sent()).RiCornerDownLeftLine;
                    return [2 /*return*/, RiCornerDownLeftLine];
                case 205: return [4 /*yield*/, import("react-icons/ri")];
                case 206:
                    RiCornerDownRightFill = (_b.sent()).RiCornerDownRightFill;
                    return [2 /*return*/, RiCornerDownRightFill];
                case 207: return [4 /*yield*/, import("react-icons/ri")];
                case 208:
                    RiCornerDownRightLine = (_b.sent()).RiCornerDownRightLine;
                    return [2 /*return*/, RiCornerDownRightLine];
                case 209: return [4 /*yield*/, import("react-icons/ri")];
                case 210:
                    RiCornerLeftDownFill = (_b.sent()).RiCornerLeftDownFill;
                    return [2 /*return*/, RiCornerLeftDownFill];
                case 211: return [4 /*yield*/, import("react-icons/ri")];
                case 212:
                    RiCornerLeftDownLine = (_b.sent()).RiCornerLeftDownLine;
                    return [2 /*return*/, RiCornerLeftDownLine];
                case 213: return [4 /*yield*/, import("react-icons/ri")];
                case 214:
                    RiCornerLeftUpFill = (_b.sent()).RiCornerLeftUpFill;
                    return [2 /*return*/, RiCornerLeftUpFill];
                case 215: return [4 /*yield*/, import("react-icons/ri")];
                case 216:
                    RiCornerLeftUpLine = (_b.sent()).RiCornerLeftUpLine;
                    return [2 /*return*/, RiCornerLeftUpLine];
                case 217: return [4 /*yield*/, import("react-icons/ri")];
                case 218:
                    RiCornerRightDownFill = (_b.sent()).RiCornerRightDownFill;
                    return [2 /*return*/, RiCornerRightDownFill];
                case 219: return [4 /*yield*/, import("react-icons/ri")];
                case 220:
                    RiCornerRightDownLine = (_b.sent()).RiCornerRightDownLine;
                    return [2 /*return*/, RiCornerRightDownLine];
                case 221: return [4 /*yield*/, import("react-icons/ri")];
                case 222:
                    RiCornerRightUpFill = (_b.sent()).RiCornerRightUpFill;
                    return [2 /*return*/, RiCornerRightUpFill];
                case 223: return [4 /*yield*/, import("react-icons/ri")];
                case 224:
                    RiCornerRightUpLine = (_b.sent()).RiCornerRightUpLine;
                    return [2 /*return*/, RiCornerRightUpLine];
                case 225: return [4 /*yield*/, import("react-icons/ri")];
                case 226:
                    RiCornerUpLeftDoubleFill = (_b.sent()).RiCornerUpLeftDoubleFill;
                    return [2 /*return*/, RiCornerUpLeftDoubleFill];
                case 227: return [4 /*yield*/, import("react-icons/ri")];
                case 228:
                    RiCornerUpLeftDoubleLine = (_b.sent()).RiCornerUpLeftDoubleLine;
                    return [2 /*return*/, RiCornerUpLeftDoubleLine];
                case 229: return [4 /*yield*/, import("react-icons/ri")];
                case 230:
                    RiCornerUpLeftFill = (_b.sent()).RiCornerUpLeftFill;
                    return [2 /*return*/, RiCornerUpLeftFill];
                case 231: return [4 /*yield*/, import("react-icons/ri")];
                case 232:
                    RiCornerUpLeftLine = (_b.sent()).RiCornerUpLeftLine;
                    return [2 /*return*/, RiCornerUpLeftLine];
                case 233: return [4 /*yield*/, import("react-icons/ri")];
                case 234:
                    RiCornerUpRightDoubleFill = (_b.sent()).RiCornerUpRightDoubleFill;
                    return [2 /*return*/, RiCornerUpRightDoubleFill];
                case 235: return [4 /*yield*/, import("react-icons/ri")];
                case 236:
                    RiCornerUpRightDoubleLine = (_b.sent()).RiCornerUpRightDoubleLine;
                    return [2 /*return*/, RiCornerUpRightDoubleLine];
                case 237: return [4 /*yield*/, import("react-icons/ri")];
                case 238:
                    RiCornerUpRightFill = (_b.sent()).RiCornerUpRightFill;
                    return [2 /*return*/, RiCornerUpRightFill];
                case 239: return [4 /*yield*/, import("react-icons/ri")];
                case 240:
                    RiCornerUpRightLine = (_b.sent()).RiCornerUpRightLine;
                    return [2 /*return*/, RiCornerUpRightLine];
                case 241: return [4 /*yield*/, import("react-icons/ri")];
                case 242:
                    RiDragMove2Fill = (_b.sent()).RiDragMove2Fill;
                    return [2 /*return*/, RiDragMove2Fill];
                case 243: return [4 /*yield*/, import("react-icons/ri")];
                case 244:
                    RiDragMove2Line = (_b.sent()).RiDragMove2Line;
                    return [2 /*return*/, RiDragMove2Line];
                case 245: return [4 /*yield*/, import("react-icons/ri")];
                case 246:
                    RiDragMoveFill = (_b.sent()).RiDragMoveFill;
                    return [2 /*return*/, RiDragMoveFill];
                case 247: return [4 /*yield*/, import("react-icons/ri")];
                case 248:
                    RiDragMoveLine = (_b.sent()).RiDragMoveLine;
                    return [2 /*return*/, RiDragMoveLine];
                case 249: return [4 /*yield*/, import("react-icons/ri")];
                case 250:
                    RiExpandDiagonal2Fill = (_b.sent()).RiExpandDiagonal2Fill;
                    return [2 /*return*/, RiExpandDiagonal2Fill];
                case 251: return [4 /*yield*/, import("react-icons/ri")];
                case 252:
                    RiExpandDiagonal2Line = (_b.sent()).RiExpandDiagonal2Line;
                    return [2 /*return*/, RiExpandDiagonal2Line];
                case 253: return [4 /*yield*/, import("react-icons/ri")];
                case 254:
                    RiExpandDiagonalFill = (_b.sent()).RiExpandDiagonalFill;
                    return [2 /*return*/, RiExpandDiagonalFill];
                case 255: return [4 /*yield*/, import("react-icons/ri")];
                case 256:
                    RiExpandDiagonalLine = (_b.sent()).RiExpandDiagonalLine;
                    return [2 /*return*/, RiExpandDiagonalLine];
                case 257: return [4 /*yield*/, import("react-icons/ri")];
                case 258:
                    RiExpandDiagonalS2Fill = (_b.sent()).RiExpandDiagonalS2Fill;
                    return [2 /*return*/, RiExpandDiagonalS2Fill];
                case 259: return [4 /*yield*/, import("react-icons/ri")];
                case 260:
                    RiExpandDiagonalS2Line = (_b.sent()).RiExpandDiagonalS2Line;
                    return [2 /*return*/, RiExpandDiagonalS2Line];
                case 261: return [4 /*yield*/, import("react-icons/ri")];
                case 262:
                    RiExpandDiagonalSFill = (_b.sent()).RiExpandDiagonalSFill;
                    return [2 /*return*/, RiExpandDiagonalSFill];
                case 263: return [4 /*yield*/, import("react-icons/ri")];
                case 264:
                    RiExpandDiagonalSLine = (_b.sent()).RiExpandDiagonalSLine;
                    return [2 /*return*/, RiExpandDiagonalSLine];
                case 265: return [4 /*yield*/, import("react-icons/ri")];
                case 266:
                    RiExpandHeightFill = (_b.sent()).RiExpandHeightFill;
                    return [2 /*return*/, RiExpandHeightFill];
                case 267: return [4 /*yield*/, import("react-icons/ri")];
                case 268:
                    RiExpandHeightLine = (_b.sent()).RiExpandHeightLine;
                    return [2 /*return*/, RiExpandHeightLine];
                case 269: return [4 /*yield*/, import("react-icons/ri")];
                case 270:
                    RiExpandHorizontalFill = (_b.sent()).RiExpandHorizontalFill;
                    return [2 /*return*/, RiExpandHorizontalFill];
                case 271: return [4 /*yield*/, import("react-icons/ri")];
                case 272:
                    RiExpandHorizontalLine = (_b.sent()).RiExpandHorizontalLine;
                    return [2 /*return*/, RiExpandHorizontalLine];
                case 273: return [4 /*yield*/, import("react-icons/ri")];
                case 274:
                    RiExpandHorizontalSFill = (_b.sent()).RiExpandHorizontalSFill;
                    return [2 /*return*/, RiExpandHorizontalSFill];
                case 275: return [4 /*yield*/, import("react-icons/ri")];
                case 276:
                    RiExpandHorizontalSLine = (_b.sent()).RiExpandHorizontalSLine;
                    return [2 /*return*/, RiExpandHorizontalSLine];
                case 277: return [4 /*yield*/, import("react-icons/ri")];
                case 278:
                    RiExpandLeftFill = (_b.sent()).RiExpandLeftFill;
                    return [2 /*return*/, RiExpandLeftFill];
                case 279: return [4 /*yield*/, import("react-icons/ri")];
                case 280:
                    RiExpandLeftLine = (_b.sent()).RiExpandLeftLine;
                    return [2 /*return*/, RiExpandLeftLine];
                case 281: return [4 /*yield*/, import("react-icons/ri")];
                case 282:
                    RiExpandLeftRightFill = (_b.sent()).RiExpandLeftRightFill;
                    return [2 /*return*/, RiExpandLeftRightFill];
                case 283: return [4 /*yield*/, import("react-icons/ri")];
                case 284:
                    RiExpandLeftRightLine = (_b.sent()).RiExpandLeftRightLine;
                    return [2 /*return*/, RiExpandLeftRightLine];
                case 285: return [4 /*yield*/, import("react-icons/ri")];
                case 286:
                    RiExpandRightFill = (_b.sent()).RiExpandRightFill;
                    return [2 /*return*/, RiExpandRightFill];
                case 287: return [4 /*yield*/, import("react-icons/ri")];
                case 288:
                    RiExpandRightLine = (_b.sent()).RiExpandRightLine;
                    return [2 /*return*/, RiExpandRightLine];
                case 289: return [4 /*yield*/, import("react-icons/ri")];
                case 290:
                    RiExpandUpDownFill = (_b.sent()).RiExpandUpDownFill;
                    return [2 /*return*/, RiExpandUpDownFill];
                case 291: return [4 /*yield*/, import("react-icons/ri")];
                case 292:
                    RiExpandUpDownLine = (_b.sent()).RiExpandUpDownLine;
                    return [2 /*return*/, RiExpandUpDownLine];
                case 293: return [4 /*yield*/, import("react-icons/ri")];
                case 294:
                    RiExpandVerticalFill = (_b.sent()).RiExpandVerticalFill;
                    return [2 /*return*/, RiExpandVerticalFill];
                case 295: return [4 /*yield*/, import("react-icons/ri")];
                case 296:
                    RiExpandVerticalLine = (_b.sent()).RiExpandVerticalLine;
                    return [2 /*return*/, RiExpandVerticalLine];
                case 297: return [4 /*yield*/, import("react-icons/ri")];
                case 298:
                    RiExpandVerticalSFill = (_b.sent()).RiExpandVerticalSFill;
                    return [2 /*return*/, RiExpandVerticalSFill];
                case 299: return [4 /*yield*/, import("react-icons/ri")];
                case 300:
                    RiExpandVerticalSLine = (_b.sent()).RiExpandVerticalSLine;
                    return [2 /*return*/, RiExpandVerticalSLine];
                case 301: return [4 /*yield*/, import("react-icons/ri")];
                case 302:
                    RiExpandWidthFill = (_b.sent()).RiExpandWidthFill;
                    return [2 /*return*/, RiExpandWidthFill];
                case 303: return [4 /*yield*/, import("react-icons/ri")];
                case 304:
                    RiExpandWidthLine = (_b.sent()).RiExpandWidthLine;
                    return [2 /*return*/, RiExpandWidthLine];
                case 305: return [4 /*yield*/, import("react-icons/ri")];
                case 306:
                    RiScrollToBottomFill = (_b.sent()).RiScrollToBottomFill;
                    return [2 /*return*/, RiScrollToBottomFill];
                case 307: return [4 /*yield*/, import("react-icons/ri")];
                case 308:
                    RiScrollToBottomLine = (_b.sent()).RiScrollToBottomLine;
                    return [2 /*return*/, RiScrollToBottomLine];
                case 309: return [4 /*yield*/, import("react-icons/ri")];
                case 310:
                    RiSkipDownFill = (_b.sent()).RiSkipDownFill;
                    return [2 /*return*/, RiSkipDownFill];
                case 311: return [4 /*yield*/, import("react-icons/ri")];
                case 312:
                    RiSkipDownLine = (_b.sent()).RiSkipDownLine;
                    return [2 /*return*/, RiSkipDownLine];
                case 313: return [4 /*yield*/, import("react-icons/ri")];
                case 314:
                    RiSkipLeftFill = (_b.sent()).RiSkipLeftFill;
                    return [2 /*return*/, RiSkipLeftFill];
                case 315: return [4 /*yield*/, import("react-icons/ri")];
                case 316:
                    RiSkipLeftLine = (_b.sent()).RiSkipLeftLine;
                    return [2 /*return*/, RiSkipLeftLine];
                case 317: return [4 /*yield*/, import("react-icons/ri")];
                case 318:
                    RiSkipRightFill = (_b.sent()).RiSkipRightFill;
                    return [2 /*return*/, RiSkipRightFill];
                case 319: return [4 /*yield*/, import("react-icons/ri")];
                case 320:
                    RiSkipRightLine = (_b.sent()).RiSkipRightLine;
                    return [2 /*return*/, RiSkipRightLine];
                case 321: return [4 /*yield*/, import("react-icons/ri")];
                case 322:
                    RiSkipUpFill = (_b.sent()).RiSkipUpFill;
                    return [2 /*return*/, RiSkipUpFill];
                case 323: return [4 /*yield*/, import("react-icons/ri")];
                case 324:
                    RiSkipUpLine = (_b.sent()).RiSkipUpLine;
                    return [2 /*return*/, RiSkipUpLine];
                case 325: return [4 /*yield*/, import("react-icons/ri")];
                case 326:
                    RiAncientGateFill = (_b.sent()).RiAncientGateFill;
                    return [2 /*return*/, RiAncientGateFill];
                case 327: return [4 /*yield*/, import("react-icons/ri")];
                case 328:
                    RiAncientGateLine = (_b.sent()).RiAncientGateLine;
                    return [2 /*return*/, RiAncientGateLine];
                case 329: return [4 /*yield*/, import("react-icons/ri")];
                case 330:
                    RiAncientPavilionFill = (_b.sent()).RiAncientPavilionFill;
                    return [2 /*return*/, RiAncientPavilionFill];
                case 331: return [4 /*yield*/, import("react-icons/ri")];
                case 332:
                    RiAncientPavilionLine = (_b.sent()).RiAncientPavilionLine;
                    return [2 /*return*/, RiAncientPavilionLine];
                case 333: return [4 /*yield*/, import("react-icons/ri")];
                case 334:
                    RiBankFill = (_b.sent()).RiBankFill;
                    return [2 /*return*/, RiBankFill];
                case 335: return [4 /*yield*/, import("react-icons/ri")];
                case 336:
                    RiBankLine = (_b.sent()).RiBankLine;
                    return [2 /*return*/, RiBankLine];
                case 337: return [4 /*yield*/, import("react-icons/ri")];
                case 338:
                    RiBuilding2Fill = (_b.sent()).RiBuilding2Fill;
                    return [2 /*return*/, RiBuilding2Fill];
                case 339: return [4 /*yield*/, import("react-icons/ri")];
                case 340:
                    RiBuilding2Line = (_b.sent()).RiBuilding2Line;
                    return [2 /*return*/, RiBuilding2Line];
                case 341: return [4 /*yield*/, import("react-icons/ri")];
                case 342:
                    RiBuilding3Fill = (_b.sent()).RiBuilding3Fill;
                    return [2 /*return*/, RiBuilding3Fill];
                case 343: return [4 /*yield*/, import("react-icons/ri")];
                case 344:
                    RiBuilding3Line = (_b.sent()).RiBuilding3Line;
                    return [2 /*return*/, RiBuilding3Line];
                case 345: return [4 /*yield*/, import("react-icons/ri")];
                case 346:
                    RiBuilding4Fill = (_b.sent()).RiBuilding4Fill;
                    return [2 /*return*/, RiBuilding4Fill];
                case 347: return [4 /*yield*/, import("react-icons/ri")];
                case 348:
                    RiBuilding4Line = (_b.sent()).RiBuilding4Line;
                    return [2 /*return*/, RiBuilding4Line];
                case 349: return [4 /*yield*/, import("react-icons/ri")];
                case 350:
                    RiBuildingFill = (_b.sent()).RiBuildingFill;
                    return [2 /*return*/, RiBuildingFill];
                case 351: return [4 /*yield*/, import("react-icons/ri")];
                case 352:
                    RiBuildingLine = (_b.sent()).RiBuildingLine;
                    return [2 /*return*/, RiBuildingLine];
                case 353: return [4 /*yield*/, import("react-icons/ri")];
                case 354:
                    RiCommunityFill = (_b.sent()).RiCommunityFill;
                    return [2 /*return*/, RiCommunityFill];
                case 355: return [4 /*yield*/, import("react-icons/ri")];
                case 356:
                    RiCommunityLine = (_b.sent()).RiCommunityLine;
                    return [2 /*return*/, RiCommunityLine];
                case 357: return [4 /*yield*/, import("react-icons/ri")];
                case 358:
                    RiGovernmentFill = (_b.sent()).RiGovernmentFill;
                    return [2 /*return*/, RiGovernmentFill];
                case 359: return [4 /*yield*/, import("react-icons/ri")];
                case 360:
                    RiGovernmentLine = (_b.sent()).RiGovernmentLine;
                    return [2 /*return*/, RiGovernmentLine];
                case 361: return [4 /*yield*/, import("react-icons/ri")];
                case 362:
                    RiHome2Fill = (_b.sent()).RiHome2Fill;
                    return [2 /*return*/, RiHome2Fill];
                case 363: return [4 /*yield*/, import("react-icons/ri")];
                case 364:
                    RiHome2Line = (_b.sent()).RiHome2Line;
                    return [2 /*return*/, RiHome2Line];
                case 365: return [4 /*yield*/, import("react-icons/ri")];
                case 366:
                    RiHome3Fill = (_b.sent()).RiHome3Fill;
                    return [2 /*return*/, RiHome3Fill];
                case 367: return [4 /*yield*/, import("react-icons/ri")];
                case 368:
                    RiHome3Line = (_b.sent()).RiHome3Line;
                    return [2 /*return*/, RiHome3Line];
                case 369: return [4 /*yield*/, import("react-icons/ri")];
                case 370:
                    RiHome4Fill = (_b.sent()).RiHome4Fill;
                    return [2 /*return*/, RiHome4Fill];
                case 371: return [4 /*yield*/, import("react-icons/ri")];
                case 372:
                    RiHome4Line = (_b.sent()).RiHome4Line;
                    return [2 /*return*/, RiHome4Line];
                case 373: return [4 /*yield*/, import("react-icons/ri")];
                case 374:
                    RiHome5Fill = (_b.sent()).RiHome5Fill;
                    return [2 /*return*/, RiHome5Fill];
                case 375: return [4 /*yield*/, import("react-icons/ri")];
                case 376:
                    RiHome5Line = (_b.sent()).RiHome5Line;
                    return [2 /*return*/, RiHome5Line];
                case 377: return [4 /*yield*/, import("react-icons/ri")];
                case 378:
                    RiHome6Fill = (_b.sent()).RiHome6Fill;
                    return [2 /*return*/, RiHome6Fill];
                case 379: return [4 /*yield*/, import("react-icons/ri")];
                case 380:
                    RiHome6Line = (_b.sent()).RiHome6Line;
                    return [2 /*return*/, RiHome6Line];
                case 381: return [4 /*yield*/, import("react-icons/ri")];
                case 382:
                    RiHome7Fill = (_b.sent()).RiHome7Fill;
                    return [2 /*return*/, RiHome7Fill];
                case 383: return [4 /*yield*/, import("react-icons/ri")];
                case 384:
                    RiHome7Line = (_b.sent()).RiHome7Line;
                    return [2 /*return*/, RiHome7Line];
                case 385: return [4 /*yield*/, import("react-icons/ri")];
                case 386:
                    RiHome8Fill = (_b.sent()).RiHome8Fill;
                    return [2 /*return*/, RiHome8Fill];
                case 387: return [4 /*yield*/, import("react-icons/ri")];
                case 388:
                    RiHome8Line = (_b.sent()).RiHome8Line;
                    return [2 /*return*/, RiHome8Line];
                case 389: return [4 /*yield*/, import("react-icons/ri")];
                case 390:
                    RiHome9Fill = (_b.sent()).RiHome9Fill;
                    return [2 /*return*/, RiHome9Fill];
                case 391: return [4 /*yield*/, import("react-icons/ri")];
                case 392:
                    RiHome9Line = (_b.sent()).RiHome9Line;
                    return [2 /*return*/, RiHome9Line];
                case 393: return [4 /*yield*/, import("react-icons/ri")];
                case 394:
                    RiHomeFill = (_b.sent()).RiHomeFill;
                    return [2 /*return*/, RiHomeFill];
                case 395: return [4 /*yield*/, import("react-icons/ri")];
                case 396:
                    RiHomeGearFill = (_b.sent()).RiHomeGearFill;
                    return [2 /*return*/, RiHomeGearFill];
                case 397: return [4 /*yield*/, import("react-icons/ri")];
                case 398:
                    RiHomeGearLine = (_b.sent()).RiHomeGearLine;
                    return [2 /*return*/, RiHomeGearLine];
                case 399: return [4 /*yield*/, import("react-icons/ri")];
                case 400:
                    RiHomeHeartFill = (_b.sent()).RiHomeHeartFill;
                    return [2 /*return*/, RiHomeHeartFill];
                case 401: return [4 /*yield*/, import("react-icons/ri")];
                case 402:
                    RiHomeHeartLine = (_b.sent()).RiHomeHeartLine;
                    return [2 /*return*/, RiHomeHeartLine];
                case 403: return [4 /*yield*/, import("react-icons/ri")];
                case 404:
                    RiHomeLine = (_b.sent()).RiHomeLine;
                    return [2 /*return*/, RiHomeLine];
                case 405: return [4 /*yield*/, import("react-icons/ri")];
                case 406:
                    RiHomeOfficeFill = (_b.sent()).RiHomeOfficeFill;
                    return [2 /*return*/, RiHomeOfficeFill];
                case 407: return [4 /*yield*/, import("react-icons/ri")];
                case 408:
                    RiHomeOfficeLine = (_b.sent()).RiHomeOfficeLine;
                    return [2 /*return*/, RiHomeOfficeLine];
                case 409: return [4 /*yield*/, import("react-icons/ri")];
                case 410:
                    RiHomeSmile2Fill = (_b.sent()).RiHomeSmile2Fill;
                    return [2 /*return*/, RiHomeSmile2Fill];
                case 411: return [4 /*yield*/, import("react-icons/ri")];
                case 412:
                    RiHomeSmile2Line = (_b.sent()).RiHomeSmile2Line;
                    return [2 /*return*/, RiHomeSmile2Line];
                case 413: return [4 /*yield*/, import("react-icons/ri")];
                case 414:
                    RiHomeSmileFill = (_b.sent()).RiHomeSmileFill;
                    return [2 /*return*/, RiHomeSmileFill];
                case 415: return [4 /*yield*/, import("react-icons/ri")];
                case 416:
                    RiHomeSmileLine = (_b.sent()).RiHomeSmileLine;
                    return [2 /*return*/, RiHomeSmileLine];
                case 417: return [4 /*yield*/, import("react-icons/ri")];
                case 418:
                    RiHomeWifiFill = (_b.sent()).RiHomeWifiFill;
                    return [2 /*return*/, RiHomeWifiFill];
                case 419: return [4 /*yield*/, import("react-icons/ri")];
                case 420:
                    RiHomeWifiLine = (_b.sent()).RiHomeWifiLine;
                    return [2 /*return*/, RiHomeWifiLine];
                case 421: return [4 /*yield*/, import("react-icons/ri")];
                case 422:
                    RiHospitalFill = (_b.sent()).RiHospitalFill;
                    return [2 /*return*/, RiHospitalFill];
                case 423: return [4 /*yield*/, import("react-icons/ri")];
                case 424:
                    RiHospitalLine = (_b.sent()).RiHospitalLine;
                    return [2 /*return*/, RiHospitalLine];
                case 425: return [4 /*yield*/, import("react-icons/ri")];
                case 426:
                    RiHotelFill = (_b.sent()).RiHotelFill;
                    return [2 /*return*/, RiHotelFill];
                case 427: return [4 /*yield*/, import("react-icons/ri")];
                case 428:
                    RiHotelLine = (_b.sent()).RiHotelLine;
                    return [2 /*return*/, RiHotelLine];
                case 429: return [4 /*yield*/, import("react-icons/ri")];
                case 430:
                    RiSchoolFill = (_b.sent()).RiSchoolFill;
                    return [2 /*return*/, RiSchoolFill];
                case 431: return [4 /*yield*/, import("react-icons/ri")];
                case 432:
                    RiSchoolLine = (_b.sent()).RiSchoolLine;
                    return [2 /*return*/, RiSchoolLine];
                case 433: return [4 /*yield*/, import("react-icons/ri")];
                case 434:
                    RiStore2Fill = (_b.sent()).RiStore2Fill;
                    return [2 /*return*/, RiStore2Fill];
                case 435: return [4 /*yield*/, import("react-icons/ri")];
                case 436:
                    RiStore2Line = (_b.sent()).RiStore2Line;
                    return [2 /*return*/, RiStore2Line];
                case 437: return [4 /*yield*/, import("react-icons/ri")];
                case 438:
                    RiStore3Fill = (_b.sent()).RiStore3Fill;
                    return [2 /*return*/, RiStore3Fill];
                case 439: return [4 /*yield*/, import("react-icons/ri")];
                case 440:
                    RiStore3Line = (_b.sent()).RiStore3Line;
                    return [2 /*return*/, RiStore3Line];
                case 441: return [4 /*yield*/, import("react-icons/ri")];
                case 442:
                    RiStoreFill = (_b.sent()).RiStoreFill;
                    return [2 /*return*/, RiStoreFill];
                case 443: return [4 /*yield*/, import("react-icons/ri")];
                case 444:
                    RiStoreLine = (_b.sent()).RiStoreLine;
                    return [2 /*return*/, RiStoreLine];
                case 445: return [4 /*yield*/, import("react-icons/ri")];
                case 446:
                    RiTentFill = (_b.sent()).RiTentFill;
                    return [2 /*return*/, RiTentFill];
                case 447: return [4 /*yield*/, import("react-icons/ri")];
                case 448:
                    RiTentLine = (_b.sent()).RiTentLine;
                    return [2 /*return*/, RiTentLine];
                case 449: return [4 /*yield*/, import("react-icons/ri")];
                case 450:
                    RiAdvertisementFill = (_b.sent()).RiAdvertisementFill;
                    return [2 /*return*/, RiAdvertisementFill];
                case 451: return [4 /*yield*/, import("react-icons/ri")];
                case 452:
                    RiAdvertisementLine = (_b.sent()).RiAdvertisementLine;
                    return [2 /*return*/, RiAdvertisementLine];
                case 453: return [4 /*yield*/, import("react-icons/ri")];
                case 454:
                    RiArchive2Fill = (_b.sent()).RiArchive2Fill;
                    return [2 /*return*/, RiArchive2Fill];
                case 455: return [4 /*yield*/, import("react-icons/ri")];
                case 456:
                    RiArchive2Line = (_b.sent()).RiArchive2Line;
                    return [2 /*return*/, RiArchive2Line];
                case 457: return [4 /*yield*/, import("react-icons/ri")];
                case 458:
                    RiArchiveDrawerFill = (_b.sent()).RiArchiveDrawerFill;
                    return [2 /*return*/, RiArchiveDrawerFill];
                case 459: return [4 /*yield*/, import("react-icons/ri")];
                case 460:
                    RiArchiveDrawerLine = (_b.sent()).RiArchiveDrawerLine;
                    return [2 /*return*/, RiArchiveDrawerLine];
                case 461: return [4 /*yield*/, import("react-icons/ri")];
                case 462:
                    RiArchiveFill = (_b.sent()).RiArchiveFill;
                    return [2 /*return*/, RiArchiveFill];
                case 463: return [4 /*yield*/, import("react-icons/ri")];
                case 464:
                    RiArchiveLine = (_b.sent()).RiArchiveLine;
                    return [2 /*return*/, RiArchiveLine];
                case 465: return [4 /*yield*/, import("react-icons/ri")];
                case 466:
                    RiArchiveStackFill = (_b.sent()).RiArchiveStackFill;
                    return [2 /*return*/, RiArchiveStackFill];
                case 467: return [4 /*yield*/, import("react-icons/ri")];
                case 468:
                    RiArchiveStackLine = (_b.sent()).RiArchiveStackLine;
                    return [2 /*return*/, RiArchiveStackLine];
                case 469: return [4 /*yield*/, import("react-icons/ri")];
                case 470:
                    RiAtFill = (_b.sent()).RiAtFill;
                    return [2 /*return*/, RiAtFill];
                case 471: return [4 /*yield*/, import("react-icons/ri")];
                case 472:
                    RiAtLine = (_b.sent()).RiAtLine;
                    return [2 /*return*/, RiAtLine];
                case 473: return [4 /*yield*/, import("react-icons/ri")];
                case 474:
                    RiAttachmentFill = (_b.sent()).RiAttachmentFill;
                    return [2 /*return*/, RiAttachmentFill];
                case 475: return [4 /*yield*/, import("react-icons/ri")];
                case 476:
                    RiAttachmentLine = (_b.sent()).RiAttachmentLine;
                    return [2 /*return*/, RiAttachmentLine];
                case 477: return [4 /*yield*/, import("react-icons/ri")];
                case 478:
                    RiAwardFill = (_b.sent()).RiAwardFill;
                    return [2 /*return*/, RiAwardFill];
                case 479: return [4 /*yield*/, import("react-icons/ri")];
                case 480:
                    RiAwardLine = (_b.sent()).RiAwardLine;
                    return [2 /*return*/, RiAwardLine];
                case 481: return [4 /*yield*/, import("react-icons/ri")];
                case 482:
                    RiBarChart2Fill = (_b.sent()).RiBarChart2Fill;
                    return [2 /*return*/, RiBarChart2Fill];
                case 483: return [4 /*yield*/, import("react-icons/ri")];
                case 484:
                    RiBarChart2Line = (_b.sent()).RiBarChart2Line;
                    return [2 /*return*/, RiBarChart2Line];
                case 485: return [4 /*yield*/, import("react-icons/ri")];
                case 486:
                    RiBarChartBoxAiFill = (_b.sent()).RiBarChartBoxAiFill;
                    return [2 /*return*/, RiBarChartBoxAiFill];
                case 487: return [4 /*yield*/, import("react-icons/ri")];
                case 488:
                    RiBarChartBoxAiLine = (_b.sent()).RiBarChartBoxAiLine;
                    return [2 /*return*/, RiBarChartBoxAiLine];
                case 489: return [4 /*yield*/, import("react-icons/ri")];
                case 490:
                    RiBarChartBoxFill = (_b.sent()).RiBarChartBoxFill;
                    return [2 /*return*/, RiBarChartBoxFill];
                case 491: return [4 /*yield*/, import("react-icons/ri")];
                case 492:
                    RiBarChartBoxLine = (_b.sent()).RiBarChartBoxLine;
                    return [2 /*return*/, RiBarChartBoxLine];
                case 493: return [4 /*yield*/, import("react-icons/ri")];
                case 494:
                    RiBarChartFill = (_b.sent()).RiBarChartFill;
                    return [2 /*return*/, RiBarChartFill];
                case 495: return [4 /*yield*/, import("react-icons/ri")];
                case 496:
                    RiBarChartGroupedFill = (_b.sent()).RiBarChartGroupedFill;
                    return [2 /*return*/, RiBarChartGroupedFill];
                case 497: return [4 /*yield*/, import("react-icons/ri")];
                case 498:
                    RiBarChartGroupedLine = (_b.sent()).RiBarChartGroupedLine;
                    return [2 /*return*/, RiBarChartGroupedLine];
                case 499: return [4 /*yield*/, import("react-icons/ri")];
                case 500:
                    RiBarChartHorizontalFill = (_b.sent()).RiBarChartHorizontalFill;
                    return [2 /*return*/, RiBarChartHorizontalFill];
                case 501: return [4 /*yield*/, import("react-icons/ri")];
                case 502:
                    RiBarChartHorizontalLine = (_b.sent()).RiBarChartHorizontalLine;
                    return [2 /*return*/, RiBarChartHorizontalLine];
                case 503: return [4 /*yield*/, import("react-icons/ri")];
                case 504:
                    RiBarChartLine = (_b.sent()).RiBarChartLine;
                    return [2 /*return*/, RiBarChartLine];
                case 505: return [4 /*yield*/, import("react-icons/ri")];
                case 506:
                    RiBookmark2Fill = (_b.sent()).RiBookmark2Fill;
                    return [2 /*return*/, RiBookmark2Fill];
                case 507: return [4 /*yield*/, import("react-icons/ri")];
                case 508:
                    RiBookmark2Line = (_b.sent()).RiBookmark2Line;
                    return [2 /*return*/, RiBookmark2Line];
                case 509: return [4 /*yield*/, import("react-icons/ri")];
                case 510:
                    RiBookmark3Fill = (_b.sent()).RiBookmark3Fill;
                    return [2 /*return*/, RiBookmark3Fill];
                case 511: return [4 /*yield*/, import("react-icons/ri")];
                case 512:
                    RiBookmark3Line = (_b.sent()).RiBookmark3Line;
                    return [2 /*return*/, RiBookmark3Line];
                case 513: return [4 /*yield*/, import("react-icons/ri")];
                case 514:
                    RiBookmarkFill = (_b.sent()).RiBookmarkFill;
                    return [2 /*return*/, RiBookmarkFill];
                case 515: return [4 /*yield*/, import("react-icons/ri")];
                case 516:
                    RiBookmarkLine = (_b.sent()).RiBookmarkLine;
                    return [2 /*return*/, RiBookmarkLine];
                case 517: return [4 /*yield*/, import("react-icons/ri")];
                case 518:
                    RiBriefcase2Fill = (_b.sent()).RiBriefcase2Fill;
                    return [2 /*return*/, RiBriefcase2Fill];
                case 519: return [4 /*yield*/, import("react-icons/ri")];
                case 520:
                    RiBriefcase2Line = (_b.sent()).RiBriefcase2Line;
                    return [2 /*return*/, RiBriefcase2Line];
                case 521: return [4 /*yield*/, import("react-icons/ri")];
                case 522:
                    RiBriefcase3Fill = (_b.sent()).RiBriefcase3Fill;
                    return [2 /*return*/, RiBriefcase3Fill];
                case 523: return [4 /*yield*/, import("react-icons/ri")];
                case 524:
                    RiBriefcase3Line = (_b.sent()).RiBriefcase3Line;
                    return [2 /*return*/, RiBriefcase3Line];
                case 525: return [4 /*yield*/, import("react-icons/ri")];
                case 526:
                    RiBriefcase4Fill = (_b.sent()).RiBriefcase4Fill;
                    return [2 /*return*/, RiBriefcase4Fill];
                case 527: return [4 /*yield*/, import("react-icons/ri")];
                case 528:
                    RiBriefcase4Line = (_b.sent()).RiBriefcase4Line;
                    return [2 /*return*/, RiBriefcase4Line];
                case 529: return [4 /*yield*/, import("react-icons/ri")];
                case 530:
                    RiBriefcase5Fill = (_b.sent()).RiBriefcase5Fill;
                    return [2 /*return*/, RiBriefcase5Fill];
                case 531: return [4 /*yield*/, import("react-icons/ri")];
                case 532:
                    RiBriefcase5Line = (_b.sent()).RiBriefcase5Line;
                    return [2 /*return*/, RiBriefcase5Line];
                case 533: return [4 /*yield*/, import("react-icons/ri")];
                case 534:
                    RiBriefcaseFill = (_b.sent()).RiBriefcaseFill;
                    return [2 /*return*/, RiBriefcaseFill];
                case 535: return [4 /*yield*/, import("react-icons/ri")];
                case 536:
                    RiBriefcaseLine = (_b.sent()).RiBriefcaseLine;
                    return [2 /*return*/, RiBriefcaseLine];
                case 537: return [4 /*yield*/, import("react-icons/ri")];
                case 538:
                    RiBubbleChartFill = (_b.sent()).RiBubbleChartFill;
                    return [2 /*return*/, RiBubbleChartFill];
                case 539: return [4 /*yield*/, import("react-icons/ri")];
                case 540:
                    RiBubbleChartLine = (_b.sent()).RiBubbleChartLine;
                    return [2 /*return*/, RiBubbleChartLine];
                case 541: return [4 /*yield*/, import("react-icons/ri")];
                case 542:
                    RiCalculatorFill = (_b.sent()).RiCalculatorFill;
                    return [2 /*return*/, RiCalculatorFill];
                case 543: return [4 /*yield*/, import("react-icons/ri")];
                case 544:
                    RiCalculatorLine = (_b.sent()).RiCalculatorLine;
                    return [2 /*return*/, RiCalculatorLine];
                case 545: return [4 /*yield*/, import("react-icons/ri")];
                case 546:
                    RiCalendar2Fill = (_b.sent()).RiCalendar2Fill;
                    return [2 /*return*/, RiCalendar2Fill];
                case 547: return [4 /*yield*/, import("react-icons/ri")];
                case 548:
                    RiCalendar2Line = (_b.sent()).RiCalendar2Line;
                    return [2 /*return*/, RiCalendar2Line];
                case 549: return [4 /*yield*/, import("react-icons/ri")];
                case 550:
                    RiCalendarCheckFill = (_b.sent()).RiCalendarCheckFill;
                    return [2 /*return*/, RiCalendarCheckFill];
                case 551: return [4 /*yield*/, import("react-icons/ri")];
                case 552:
                    RiCalendarCheckLine = (_b.sent()).RiCalendarCheckLine;
                    return [2 /*return*/, RiCalendarCheckLine];
                case 553: return [4 /*yield*/, import("react-icons/ri")];
                case 554:
                    RiCalendarCloseFill = (_b.sent()).RiCalendarCloseFill;
                    return [2 /*return*/, RiCalendarCloseFill];
                case 555: return [4 /*yield*/, import("react-icons/ri")];
                case 556:
                    RiCalendarCloseLine = (_b.sent()).RiCalendarCloseLine;
                    return [2 /*return*/, RiCalendarCloseLine];
                case 557: return [4 /*yield*/, import("react-icons/ri")];
                case 558:
                    RiCalendarEventFill = (_b.sent()).RiCalendarEventFill;
                    return [2 /*return*/, RiCalendarEventFill];
                case 559: return [4 /*yield*/, import("react-icons/ri")];
                case 560:
                    RiCalendarEventLine = (_b.sent()).RiCalendarEventLine;
                    return [2 /*return*/, RiCalendarEventLine];
                case 561: return [4 /*yield*/, import("react-icons/ri")];
                case 562:
                    RiCalendarFill = (_b.sent()).RiCalendarFill;
                    return [2 /*return*/, RiCalendarFill];
                case 563: return [4 /*yield*/, import("react-icons/ri")];
                case 564:
                    RiCalendarLine = (_b.sent()).RiCalendarLine;
                    return [2 /*return*/, RiCalendarLine];
                case 565: return [4 /*yield*/, import("react-icons/ri")];
                case 566:
                    RiCalendarScheduleFill = (_b.sent()).RiCalendarScheduleFill;
                    return [2 /*return*/, RiCalendarScheduleFill];
                case 567: return [4 /*yield*/, import("react-icons/ri")];
                case 568:
                    RiCalendarScheduleLine = (_b.sent()).RiCalendarScheduleLine;
                    return [2 /*return*/, RiCalendarScheduleLine];
                case 569: return [4 /*yield*/, import("react-icons/ri")];
                case 570:
                    RiCalendarTodoFill = (_b.sent()).RiCalendarTodoFill;
                    return [2 /*return*/, RiCalendarTodoFill];
                case 571: return [4 /*yield*/, import("react-icons/ri")];
                case 572:
                    RiCalendarTodoLine = (_b.sent()).RiCalendarTodoLine;
                    return [2 /*return*/, RiCalendarTodoLine];
                case 573: return [4 /*yield*/, import("react-icons/ri")];
                case 574:
                    RiCloudFill = (_b.sent()).RiCloudFill;
                    return [2 /*return*/, RiCloudFill];
                case 575: return [4 /*yield*/, import("react-icons/ri")];
                case 576:
                    RiCloudLine = (_b.sent()).RiCloudLine;
                    return [2 /*return*/, RiCloudLine];
                case 577: return [4 /*yield*/, import("react-icons/ri")];
                case 578:
                    RiCloudOffFill = (_b.sent()).RiCloudOffFill;
                    return [2 /*return*/, RiCloudOffFill];
                case 579: return [4 /*yield*/, import("react-icons/ri")];
                case 580:
                    RiCloudOffLine = (_b.sent()).RiCloudOffLine;
                    return [2 /*return*/, RiCloudOffLine];
                case 581: return [4 /*yield*/, import("react-icons/ri")];
                case 582:
                    RiCopyleftFill = (_b.sent()).RiCopyleftFill;
                    return [2 /*return*/, RiCopyleftFill];
                case 583: return [4 /*yield*/, import("react-icons/ri")];
                case 584:
                    RiCopyleftLine = (_b.sent()).RiCopyleftLine;
                    return [2 /*return*/, RiCopyleftLine];
                case 585: return [4 /*yield*/, import("react-icons/ri")];
                case 586:
                    RiCopyrightFill = (_b.sent()).RiCopyrightFill;
                    return [2 /*return*/, RiCopyrightFill];
                case 587: return [4 /*yield*/, import("react-icons/ri")];
                case 588:
                    RiCopyrightLine = (_b.sent()).RiCopyrightLine;
                    return [2 /*return*/, RiCopyrightLine];
                case 589: return [4 /*yield*/, import("react-icons/ri")];
                case 590:
                    RiCreativeCommonsByFill = (_b.sent()).RiCreativeCommonsByFill;
                    return [2 /*return*/, RiCreativeCommonsByFill];
                case 591: return [4 /*yield*/, import("react-icons/ri")];
                case 592:
                    RiCreativeCommonsByLine = (_b.sent()).RiCreativeCommonsByLine;
                    return [2 /*return*/, RiCreativeCommonsByLine];
                case 593: return [4 /*yield*/, import("react-icons/ri")];
                case 594:
                    RiCreativeCommonsFill = (_b.sent()).RiCreativeCommonsFill;
                    return [2 /*return*/, RiCreativeCommonsFill];
                case 595: return [4 /*yield*/, import("react-icons/ri")];
                case 596:
                    RiCreativeCommonsLine = (_b.sent()).RiCreativeCommonsLine;
                    return [2 /*return*/, RiCreativeCommonsLine];
                case 597: return [4 /*yield*/, import("react-icons/ri")];
                case 598:
                    RiCreativeCommonsNcFill = (_b.sent()).RiCreativeCommonsNcFill;
                    return [2 /*return*/, RiCreativeCommonsNcFill];
                case 599: return [4 /*yield*/, import("react-icons/ri")];
                case 600:
                    RiCreativeCommonsNcLine = (_b.sent()).RiCreativeCommonsNcLine;
                    return [2 /*return*/, RiCreativeCommonsNcLine];
                case 601: return [4 /*yield*/, import("react-icons/ri")];
                case 602:
                    RiCreativeCommonsNdFill = (_b.sent()).RiCreativeCommonsNdFill;
                    return [2 /*return*/, RiCreativeCommonsNdFill];
                case 603: return [4 /*yield*/, import("react-icons/ri")];
                case 604:
                    RiCreativeCommonsNdLine = (_b.sent()).RiCreativeCommonsNdLine;
                    return [2 /*return*/, RiCreativeCommonsNdLine];
                case 605: return [4 /*yield*/, import("react-icons/ri")];
                case 606:
                    RiCreativeCommonsSaFill = (_b.sent()).RiCreativeCommonsSaFill;
                    return [2 /*return*/, RiCreativeCommonsSaFill];
                case 607: return [4 /*yield*/, import("react-icons/ri")];
                case 608:
                    RiCreativeCommonsSaLine = (_b.sent()).RiCreativeCommonsSaLine;
                    return [2 /*return*/, RiCreativeCommonsSaLine];
                case 609: return [4 /*yield*/, import("react-icons/ri")];
                case 610:
                    RiCreativeCommonsZeroFill = (_b.sent()).RiCreativeCommonsZeroFill;
                    return [2 /*return*/, RiCreativeCommonsZeroFill];
                case 611: return [4 /*yield*/, import("react-icons/ri")];
                case 612:
                    RiCreativeCommonsZeroLine = (_b.sent()).RiCreativeCommonsZeroLine;
                    return [2 /*return*/, RiCreativeCommonsZeroLine];
                case 613: return [4 /*yield*/, import("react-icons/ri")];
                case 614:
                    RiCustomerService2Fill = (_b.sent()).RiCustomerService2Fill;
                    return [2 /*return*/, RiCustomerService2Fill];
                case 615: return [4 /*yield*/, import("react-icons/ri")];
                case 616:
                    RiCustomerService2Line = (_b.sent()).RiCustomerService2Line;
                    return [2 /*return*/, RiCustomerService2Line];
                case 617: return [4 /*yield*/, import("react-icons/ri")];
                case 618:
                    RiCustomerServiceFill = (_b.sent()).RiCustomerServiceFill;
                    return [2 /*return*/, RiCustomerServiceFill];
                case 619: return [4 /*yield*/, import("react-icons/ri")];
                case 620:
                    RiCustomerServiceLine = (_b.sent()).RiCustomerServiceLine;
                    return [2 /*return*/, RiCustomerServiceLine];
                case 621: return [4 /*yield*/, import("react-icons/ri")];
                case 622:
                    RiDonutChartFill = (_b.sent()).RiDonutChartFill;
                    return [2 /*return*/, RiDonutChartFill];
                case 623: return [4 /*yield*/, import("react-icons/ri")];
                case 624:
                    RiDonutChartLine = (_b.sent()).RiDonutChartLine;
                    return [2 /*return*/, RiDonutChartLine];
                case 625: return [4 /*yield*/, import("react-icons/ri")];
                case 626:
                    RiFlag2Fill = (_b.sent()).RiFlag2Fill;
                    return [2 /*return*/, RiFlag2Fill];
                case 627: return [4 /*yield*/, import("react-icons/ri")];
                case 628:
                    RiFlag2Line = (_b.sent()).RiFlag2Line;
                    return [2 /*return*/, RiFlag2Line];
                case 629: return [4 /*yield*/, import("react-icons/ri")];
                case 630:
                    RiFlagFill = (_b.sent()).RiFlagFill;
                    return [2 /*return*/, RiFlagFill];
                case 631: return [4 /*yield*/, import("react-icons/ri")];
                case 632:
                    RiFlagLine = (_b.sent()).RiFlagLine;
                    return [2 /*return*/, RiFlagLine];
                case 633: return [4 /*yield*/, import("react-icons/ri")];
                case 634:
                    RiFlagOffFill = (_b.sent()).RiFlagOffFill;
                    return [2 /*return*/, RiFlagOffFill];
                case 635: return [4 /*yield*/, import("react-icons/ri")];
                case 636:
                    RiFlagOffLine = (_b.sent()).RiFlagOffLine;
                    return [2 /*return*/, RiFlagOffLine];
                case 637: return [4 /*yield*/, import("react-icons/ri")];
                case 638:
                    RiGlobalFill = (_b.sent()).RiGlobalFill;
                    return [2 /*return*/, RiGlobalFill];
                case 639: return [4 /*yield*/, import("react-icons/ri")];
                case 640:
                    RiGlobalLine = (_b.sent()).RiGlobalLine;
                    return [2 /*return*/, RiGlobalLine];
                case 641: return [4 /*yield*/, import("react-icons/ri")];
                case 642:
                    RiHonourFill = (_b.sent()).RiHonourFill;
                    return [2 /*return*/, RiHonourFill];
                case 643: return [4 /*yield*/, import("react-icons/ri")];
                case 644:
                    RiHonourLine = (_b.sent()).RiHonourLine;
                    return [2 /*return*/, RiHonourLine];
                case 645: return [4 /*yield*/, import("react-icons/ri")];
                case 646:
                    RiIdCardFill = (_b.sent()).RiIdCardFill;
                    return [2 /*return*/, RiIdCardFill];
                case 647: return [4 /*yield*/, import("react-icons/ri")];
                case 648:
                    RiIdCardLine = (_b.sent()).RiIdCardLine;
                    return [2 /*return*/, RiIdCardLine];
                case 649: return [4 /*yield*/, import("react-icons/ri")];
                case 650:
                    RiInbox2Fill = (_b.sent()).RiInbox2Fill;
                    return [2 /*return*/, RiInbox2Fill];
                case 651: return [4 /*yield*/, import("react-icons/ri")];
                case 652:
                    RiInbox2Line = (_b.sent()).RiInbox2Line;
                    return [2 /*return*/, RiInbox2Line];
                case 653: return [4 /*yield*/, import("react-icons/ri")];
                case 654:
                    RiInboxArchiveFill = (_b.sent()).RiInboxArchiveFill;
                    return [2 /*return*/, RiInboxArchiveFill];
                case 655: return [4 /*yield*/, import("react-icons/ri")];
                case 656:
                    RiInboxArchiveLine = (_b.sent()).RiInboxArchiveLine;
                    return [2 /*return*/, RiInboxArchiveLine];
                case 657: return [4 /*yield*/, import("react-icons/ri")];
                case 658:
                    RiInboxFill = (_b.sent()).RiInboxFill;
                    return [2 /*return*/, RiInboxFill];
                case 659: return [4 /*yield*/, import("react-icons/ri")];
                case 660:
                    RiInboxLine = (_b.sent()).RiInboxLine;
                    return [2 /*return*/, RiInboxLine];
                case 661: return [4 /*yield*/, import("react-icons/ri")];
                case 662:
                    RiInboxUnarchiveFill = (_b.sent()).RiInboxUnarchiveFill;
                    return [2 /*return*/, RiInboxUnarchiveFill];
                case 663: return [4 /*yield*/, import("react-icons/ri")];
                case 664:
                    RiInboxUnarchiveLine = (_b.sent()).RiInboxUnarchiveLine;
                    return [2 /*return*/, RiInboxUnarchiveLine];
                case 665: return [4 /*yield*/, import("react-icons/ri")];
                case 666:
                    RiInfoCardFill = (_b.sent()).RiInfoCardFill;
                    return [2 /*return*/, RiInfoCardFill];
                case 667: return [4 /*yield*/, import("react-icons/ri")];
                case 668:
                    RiInfoCardLine = (_b.sent()).RiInfoCardLine;
                    return [2 /*return*/, RiInfoCardLine];
                case 669: return [4 /*yield*/, import("react-icons/ri")];
                case 670:
                    RiLineChartFill = (_b.sent()).RiLineChartFill;
                    return [2 /*return*/, RiLineChartFill];
                case 671: return [4 /*yield*/, import("react-icons/ri")];
                case 672:
                    RiLineChartLine = (_b.sent()).RiLineChartLine;
                    return [2 /*return*/, RiLineChartLine];
                case 673: return [4 /*yield*/, import("react-icons/ri")];
                case 674:
                    RiLinksFill = (_b.sent()).RiLinksFill;
                    return [2 /*return*/, RiLinksFill];
                case 675: return [4 /*yield*/, import("react-icons/ri")];
                case 676:
                    RiLinksLine = (_b.sent()).RiLinksLine;
                    return [2 /*return*/, RiLinksLine];
                case 677: return [4 /*yield*/, import("react-icons/ri")];
                case 678:
                    RiMailAddFill = (_b.sent()).RiMailAddFill;
                    return [2 /*return*/, RiMailAddFill];
                case 679: return [4 /*yield*/, import("react-icons/ri")];
                case 680:
                    RiMailAddLine = (_b.sent()).RiMailAddLine;
                    return [2 /*return*/, RiMailAddLine];
                case 681: return [4 /*yield*/, import("react-icons/ri")];
                case 682:
                    RiMailAiFill = (_b.sent()).RiMailAiFill;
                    return [2 /*return*/, RiMailAiFill];
                case 683: return [4 /*yield*/, import("react-icons/ri")];
                case 684:
                    RiMailAiLine = (_b.sent()).RiMailAiLine;
                    return [2 /*return*/, RiMailAiLine];
                case 685: return [4 /*yield*/, import("react-icons/ri")];
                case 686:
                    RiMailCheckFill = (_b.sent()).RiMailCheckFill;
                    return [2 /*return*/, RiMailCheckFill];
                case 687: return [4 /*yield*/, import("react-icons/ri")];
                case 688:
                    RiMailCheckLine = (_b.sent()).RiMailCheckLine;
                    return [2 /*return*/, RiMailCheckLine];
                case 689: return [4 /*yield*/, import("react-icons/ri")];
                case 690:
                    RiMailCloseFill = (_b.sent()).RiMailCloseFill;
                    return [2 /*return*/, RiMailCloseFill];
                case 691: return [4 /*yield*/, import("react-icons/ri")];
                case 692:
                    RiMailCloseLine = (_b.sent()).RiMailCloseLine;
                    return [2 /*return*/, RiMailCloseLine];
                case 693: return [4 /*yield*/, import("react-icons/ri")];
                case 694:
                    RiMailDownloadFill = (_b.sent()).RiMailDownloadFill;
                    return [2 /*return*/, RiMailDownloadFill];
                case 695: return [4 /*yield*/, import("react-icons/ri")];
                case 696:
                    RiMailDownloadLine = (_b.sent()).RiMailDownloadLine;
                    return [2 /*return*/, RiMailDownloadLine];
                case 697: return [4 /*yield*/, import("react-icons/ri")];
                case 698:
                    RiMailFill = (_b.sent()).RiMailFill;
                    return [2 /*return*/, RiMailFill];
                case 699: return [4 /*yield*/, import("react-icons/ri")];
                case 700:
                    RiMailForbidFill = (_b.sent()).RiMailForbidFill;
                    return [2 /*return*/, RiMailForbidFill];
                case 701: return [4 /*yield*/, import("react-icons/ri")];
                case 702:
                    RiMailForbidLine = (_b.sent()).RiMailForbidLine;
                    return [2 /*return*/, RiMailForbidLine];
                case 703: return [4 /*yield*/, import("react-icons/ri")];
                case 704:
                    RiMailLine = (_b.sent()).RiMailLine;
                    return [2 /*return*/, RiMailLine];
                case 705: return [4 /*yield*/, import("react-icons/ri")];
                case 706:
                    RiMailLockFill = (_b.sent()).RiMailLockFill;
                    return [2 /*return*/, RiMailLockFill];
                case 707: return [4 /*yield*/, import("react-icons/ri")];
                case 708:
                    RiMailLockLine = (_b.sent()).RiMailLockLine;
                    return [2 /*return*/, RiMailLockLine];
                case 709: return [4 /*yield*/, import("react-icons/ri")];
                case 710:
                    RiMailOpenFill = (_b.sent()).RiMailOpenFill;
                    return [2 /*return*/, RiMailOpenFill];
                case 711: return [4 /*yield*/, import("react-icons/ri")];
                case 712:
                    RiMailOpenLine = (_b.sent()).RiMailOpenLine;
                    return [2 /*return*/, RiMailOpenLine];
                case 713: return [4 /*yield*/, import("react-icons/ri")];
                case 714:
                    RiMailSendFill = (_b.sent()).RiMailSendFill;
                    return [2 /*return*/, RiMailSendFill];
                case 715: return [4 /*yield*/, import("react-icons/ri")];
                case 716:
                    RiMailSendLine = (_b.sent()).RiMailSendLine;
                    return [2 /*return*/, RiMailSendLine];
                case 717: return [4 /*yield*/, import("react-icons/ri")];
                case 718:
                    RiMailSettingsFill = (_b.sent()).RiMailSettingsFill;
                    return [2 /*return*/, RiMailSettingsFill];
                case 719: return [4 /*yield*/, import("react-icons/ri")];
                case 720:
                    RiMailSettingsLine = (_b.sent()).RiMailSettingsLine;
                    return [2 /*return*/, RiMailSettingsLine];
                case 721: return [4 /*yield*/, import("react-icons/ri")];
                case 722:
                    RiMailStarFill = (_b.sent()).RiMailStarFill;
                    return [2 /*return*/, RiMailStarFill];
                case 723: return [4 /*yield*/, import("react-icons/ri")];
                case 724:
                    RiMailStarLine = (_b.sent()).RiMailStarLine;
                    return [2 /*return*/, RiMailStarLine];
                case 725: return [4 /*yield*/, import("react-icons/ri")];
                case 726:
                    RiMailUnreadFill = (_b.sent()).RiMailUnreadFill;
                    return [2 /*return*/, RiMailUnreadFill];
                case 727: return [4 /*yield*/, import("react-icons/ri")];
                case 728:
                    RiMailUnreadLine = (_b.sent()).RiMailUnreadLine;
                    return [2 /*return*/, RiMailUnreadLine];
                case 729: return [4 /*yield*/, import("react-icons/ri")];
                case 730:
                    RiMailVolumeFill = (_b.sent()).RiMailVolumeFill;
                    return [2 /*return*/, RiMailVolumeFill];
                case 731: return [4 /*yield*/, import("react-icons/ri")];
                case 732:
                    RiMailVolumeLine = (_b.sent()).RiMailVolumeLine;
                    return [2 /*return*/, RiMailVolumeLine];
                case 733: return [4 /*yield*/, import("react-icons/ri")];
                case 734:
                    RiMedal2Fill = (_b.sent()).RiMedal2Fill;
                    return [2 /*return*/, RiMedal2Fill];
                case 735: return [4 /*yield*/, import("react-icons/ri")];
                case 736:
                    RiMedal2Line = (_b.sent()).RiMedal2Line;
                    return [2 /*return*/, RiMedal2Line];
                case 737: return [4 /*yield*/, import("react-icons/ri")];
                case 738:
                    RiMedalFill = (_b.sent()).RiMedalFill;
                    return [2 /*return*/, RiMedalFill];
                case 739: return [4 /*yield*/, import("react-icons/ri")];
                case 740:
                    RiMedalLine = (_b.sent()).RiMedalLine;
                    return [2 /*return*/, RiMedalLine];
                case 741: return [4 /*yield*/, import("react-icons/ri")];
                case 742:
                    RiMegaphoneFill = (_b.sent()).RiMegaphoneFill;
                    return [2 /*return*/, RiMegaphoneFill];
                case 743: return [4 /*yield*/, import("react-icons/ri")];
                case 744:
                    RiMegaphoneLine = (_b.sent()).RiMegaphoneLine;
                    return [2 /*return*/, RiMegaphoneLine];
                case 745: return [4 /*yield*/, import("react-icons/ri")];
                case 746:
                    RiPassExpiredFill = (_b.sent()).RiPassExpiredFill;
                    return [2 /*return*/, RiPassExpiredFill];
                case 747: return [4 /*yield*/, import("react-icons/ri")];
                case 748:
                    RiPassExpiredLine = (_b.sent()).RiPassExpiredLine;
                    return [2 /*return*/, RiPassExpiredLine];
                case 749: return [4 /*yield*/, import("react-icons/ri")];
                case 750:
                    RiPassPendingFill = (_b.sent()).RiPassPendingFill;
                    return [2 /*return*/, RiPassPendingFill];
                case 751: return [4 /*yield*/, import("react-icons/ri")];
                case 752:
                    RiPassPendingLine = (_b.sent()).RiPassPendingLine;
                    return [2 /*return*/, RiPassPendingLine];
                case 753: return [4 /*yield*/, import("react-icons/ri")];
                case 754:
                    RiPassValidFill = (_b.sent()).RiPassValidFill;
                    return [2 /*return*/, RiPassValidFill];
                case 755: return [4 /*yield*/, import("react-icons/ri")];
                case 756:
                    RiPassValidLine = (_b.sent()).RiPassValidLine;
                    return [2 /*return*/, RiPassValidLine];
                case 757: return [4 /*yield*/, import("react-icons/ri")];
                case 758:
                    RiPieChart2Fill = (_b.sent()).RiPieChart2Fill;
                    return [2 /*return*/, RiPieChart2Fill];
                case 759: return [4 /*yield*/, import("react-icons/ri")];
                case 760:
                    RiPieChart2Line = (_b.sent()).RiPieChart2Line;
                    return [2 /*return*/, RiPieChart2Line];
                case 761: return [4 /*yield*/, import("react-icons/ri")];
                case 762:
                    RiPieChartBoxFill = (_b.sent()).RiPieChartBoxFill;
                    return [2 /*return*/, RiPieChartBoxFill];
                case 763: return [4 /*yield*/, import("react-icons/ri")];
                case 764:
                    RiPieChartBoxLine = (_b.sent()).RiPieChartBoxLine;
                    return [2 /*return*/, RiPieChartBoxLine];
                case 765: return [4 /*yield*/, import("react-icons/ri")];
                case 766:
                    RiPieChartFill = (_b.sent()).RiPieChartFill;
                    return [2 /*return*/, RiPieChartFill];
                case 767: return [4 /*yield*/, import("react-icons/ri")];
                case 768:
                    RiPieChartLine = (_b.sent()).RiPieChartLine;
                    return [2 /*return*/, RiPieChartLine];
                case 769: return [4 /*yield*/, import("react-icons/ri")];
                case 770:
                    RiPresentationFill = (_b.sent()).RiPresentationFill;
                    return [2 /*return*/, RiPresentationFill];
                case 771: return [4 /*yield*/, import("react-icons/ri")];
                case 772:
                    RiPresentationLine = (_b.sent()).RiPresentationLine;
                    return [2 /*return*/, RiPresentationLine];
                case 773: return [4 /*yield*/, import("react-icons/ri")];
                case 774:
                    RiPrinterCloudFill = (_b.sent()).RiPrinterCloudFill;
                    return [2 /*return*/, RiPrinterCloudFill];
                case 775: return [4 /*yield*/, import("react-icons/ri")];
                case 776:
                    RiPrinterCloudLine = (_b.sent()).RiPrinterCloudLine;
                    return [2 /*return*/, RiPrinterCloudLine];
                case 777: return [4 /*yield*/, import("react-icons/ri")];
                case 778:
                    RiPrinterFill = (_b.sent()).RiPrinterFill;
                    return [2 /*return*/, RiPrinterFill];
                case 779: return [4 /*yield*/, import("react-icons/ri")];
                case 780:
                    RiPrinterLine = (_b.sent()).RiPrinterLine;
                    return [2 /*return*/, RiPrinterLine];
                case 781: return [4 /*yield*/, import("react-icons/ri")];
                case 782:
                    RiProfileFill = (_b.sent()).RiProfileFill;
                    return [2 /*return*/, RiProfileFill];
                case 783: return [4 /*yield*/, import("react-icons/ri")];
                case 784:
                    RiProfileLine = (_b.sent()).RiProfileLine;
                    return [2 /*return*/, RiProfileLine];
                case 785: return [4 /*yield*/, import("react-icons/ri")];
                case 786:
                    RiProjector2Fill = (_b.sent()).RiProjector2Fill;
                    return [2 /*return*/, RiProjector2Fill];
                case 787: return [4 /*yield*/, import("react-icons/ri")];
                case 788:
                    RiProjector2Line = (_b.sent()).RiProjector2Line;
                    return [2 /*return*/, RiProjector2Line];
                case 789: return [4 /*yield*/, import("react-icons/ri")];
                case 790:
                    RiProjectorFill = (_b.sent()).RiProjectorFill;
                    return [2 /*return*/, RiProjectorFill];
                case 791: return [4 /*yield*/, import("react-icons/ri")];
                case 792:
                    RiProjectorLine = (_b.sent()).RiProjectorLine;
                    return [2 /*return*/, RiProjectorLine];
                case 793: return [4 /*yield*/, import("react-icons/ri")];
                case 794:
                    RiRecordMailFill = (_b.sent()).RiRecordMailFill;
                    return [2 /*return*/, RiRecordMailFill];
                case 795: return [4 /*yield*/, import("react-icons/ri")];
                case 796:
                    RiRecordMailLine = (_b.sent()).RiRecordMailLine;
                    return [2 /*return*/, RiRecordMailLine];
                case 797: return [4 /*yield*/, import("react-icons/ri")];
                case 798:
                    RiRegisteredFill = (_b.sent()).RiRegisteredFill;
                    return [2 /*return*/, RiRegisteredFill];
                case 799: return [4 /*yield*/, import("react-icons/ri")];
                case 800:
                    RiRegisteredLine = (_b.sent()).RiRegisteredLine;
                    return [2 /*return*/, RiRegisteredLine];
                case 801: return [4 /*yield*/, import("react-icons/ri")];
                case 802:
                    RiReplyAllFill = (_b.sent()).RiReplyAllFill;
                    return [2 /*return*/, RiReplyAllFill];
                case 803: return [4 /*yield*/, import("react-icons/ri")];
                case 804:
                    RiReplyAllLine = (_b.sent()).RiReplyAllLine;
                    return [2 /*return*/, RiReplyAllLine];
                case 805: return [4 /*yield*/, import("react-icons/ri")];
                case 806:
                    RiReplyFill = (_b.sent()).RiReplyFill;
                    return [2 /*return*/, RiReplyFill];
                case 807: return [4 /*yield*/, import("react-icons/ri")];
                case 808:
                    RiReplyLine = (_b.sent()).RiReplyLine;
                    return [2 /*return*/, RiReplyLine];
                case 809: return [4 /*yield*/, import("react-icons/ri")];
                case 810:
                    RiSendPlane2Fill = (_b.sent()).RiSendPlane2Fill;
                    return [2 /*return*/, RiSendPlane2Fill];
                case 811: return [4 /*yield*/, import("react-icons/ri")];
                case 812:
                    RiSendPlane2Line = (_b.sent()).RiSendPlane2Line;
                    return [2 /*return*/, RiSendPlane2Line];
                case 813: return [4 /*yield*/, import("react-icons/ri")];
                case 814:
                    RiSendPlaneFill = (_b.sent()).RiSendPlaneFill;
                    return [2 /*return*/, RiSendPlaneFill];
                case 815: return [4 /*yield*/, import("react-icons/ri")];
                case 816:
                    RiSendPlaneLine = (_b.sent()).RiSendPlaneLine;
                    return [2 /*return*/, RiSendPlaneLine];
                case 817: return [4 /*yield*/, import("react-icons/ri")];
                case 818:
                    RiSeoFill = (_b.sent()).RiSeoFill;
                    return [2 /*return*/, RiSeoFill];
                case 819: return [4 /*yield*/, import("react-icons/ri")];
                case 820:
                    RiSeoLine = (_b.sent()).RiSeoLine;
                    return [2 /*return*/, RiSeoLine];
                case 821: return [4 /*yield*/, import("react-icons/ri")];
                case 822:
                    RiServiceFill = (_b.sent()).RiServiceFill;
                    return [2 /*return*/, RiServiceFill];
                case 823: return [4 /*yield*/, import("react-icons/ri")];
                case 824:
                    RiServiceLine = (_b.sent()).RiServiceLine;
                    return [2 /*return*/, RiServiceLine];
                case 825: return [4 /*yield*/, import("react-icons/ri")];
                case 826:
                    RiShakeHandsFill = (_b.sent()).RiShakeHandsFill;
                    return [2 /*return*/, RiShakeHandsFill];
                case 827: return [4 /*yield*/, import("react-icons/ri")];
                case 828:
                    RiShakeHandsLine = (_b.sent()).RiShakeHandsLine;
                    return [2 /*return*/, RiShakeHandsLine];
                case 829: return [4 /*yield*/, import("react-icons/ri")];
                case 830:
                    RiSlideshow2Fill = (_b.sent()).RiSlideshow2Fill;
                    return [2 /*return*/, RiSlideshow2Fill];
                case 831: return [4 /*yield*/, import("react-icons/ri")];
                case 832:
                    RiSlideshow2Line = (_b.sent()).RiSlideshow2Line;
                    return [2 /*return*/, RiSlideshow2Line];
                case 833: return [4 /*yield*/, import("react-icons/ri")];
                case 834:
                    RiSlideshow3Fill = (_b.sent()).RiSlideshow3Fill;
                    return [2 /*return*/, RiSlideshow3Fill];
                case 835: return [4 /*yield*/, import("react-icons/ri")];
                case 836:
                    RiSlideshow3Line = (_b.sent()).RiSlideshow3Line;
                    return [2 /*return*/, RiSlideshow3Line];
                case 837: return [4 /*yield*/, import("react-icons/ri")];
                case 838:
                    RiSlideshow4Fill = (_b.sent()).RiSlideshow4Fill;
                    return [2 /*return*/, RiSlideshow4Fill];
                case 839: return [4 /*yield*/, import("react-icons/ri")];
                case 840:
                    RiSlideshow4Line = (_b.sent()).RiSlideshow4Line;
                    return [2 /*return*/, RiSlideshow4Line];
                case 841: return [4 /*yield*/, import("react-icons/ri")];
                case 842:
                    RiSlideshowFill = (_b.sent()).RiSlideshowFill;
                    return [2 /*return*/, RiSlideshowFill];
                case 843: return [4 /*yield*/, import("react-icons/ri")];
                case 844:
                    RiSlideshowLine = (_b.sent()).RiSlideshowLine;
                    return [2 /*return*/, RiSlideshowLine];
                case 845: return [4 /*yield*/, import("react-icons/ri")];
                case 846:
                    RiStackFill = (_b.sent()).RiStackFill;
                    return [2 /*return*/, RiStackFill];
                case 847: return [4 /*yield*/, import("react-icons/ri")];
                case 848:
                    RiStackLine = (_b.sent()).RiStackLine;
                    return [2 /*return*/, RiStackLine];
                case 849: return [4 /*yield*/, import("react-icons/ri")];
                case 850:
                    RiTrademarkFill = (_b.sent()).RiTrademarkFill;
                    return [2 /*return*/, RiTrademarkFill];
                case 851: return [4 /*yield*/, import("react-icons/ri")];
                case 852:
                    RiTrademarkLine = (_b.sent()).RiTrademarkLine;
                    return [2 /*return*/, RiTrademarkLine];
                case 853: return [4 /*yield*/, import("react-icons/ri")];
                case 854:
                    RiTriangularFlagFill = (_b.sent()).RiTriangularFlagFill;
                    return [2 /*return*/, RiTriangularFlagFill];
                case 855: return [4 /*yield*/, import("react-icons/ri")];
                case 856:
                    RiTriangularFlagLine = (_b.sent()).RiTriangularFlagLine;
                    return [2 /*return*/, RiTriangularFlagLine];
                case 857: return [4 /*yield*/, import("react-icons/ri")];
                case 858:
                    RiVerifiedBadgeFill = (_b.sent()).RiVerifiedBadgeFill;
                    return [2 /*return*/, RiVerifiedBadgeFill];
                case 859: return [4 /*yield*/, import("react-icons/ri")];
                case 860:
                    RiVerifiedBadgeLine = (_b.sent()).RiVerifiedBadgeLine;
                    return [2 /*return*/, RiVerifiedBadgeLine];
                case 861: return [4 /*yield*/, import("react-icons/ri")];
                case 862:
                    RiWindow2Fill = (_b.sent()).RiWindow2Fill;
                    return [2 /*return*/, RiWindow2Fill];
                case 863: return [4 /*yield*/, import("react-icons/ri")];
                case 864:
                    RiWindow2Line = (_b.sent()).RiWindow2Line;
                    return [2 /*return*/, RiWindow2Line];
                case 865: return [4 /*yield*/, import("react-icons/ri")];
                case 866:
                    RiWindowFill = (_b.sent()).RiWindowFill;
                    return [2 /*return*/, RiWindowFill];
                case 867: return [4 /*yield*/, import("react-icons/ri")];
                case 868:
                    RiWindowLine = (_b.sent()).RiWindowLine;
                    return [2 /*return*/, RiWindowLine];
                case 869: return [4 /*yield*/, import("react-icons/ri")];
                case 870:
                    RiChat1Fill = (_b.sent()).RiChat1Fill;
                    return [2 /*return*/, RiChat1Fill];
                case 871: return [4 /*yield*/, import("react-icons/ri")];
                case 872:
                    RiChat1Line = (_b.sent()).RiChat1Line;
                    return [2 /*return*/, RiChat1Line];
                case 873: return [4 /*yield*/, import("react-icons/ri")];
                case 874:
                    RiChat2Fill = (_b.sent()).RiChat2Fill;
                    return [2 /*return*/, RiChat2Fill];
                case 875: return [4 /*yield*/, import("react-icons/ri")];
                case 876:
                    RiChat2Line = (_b.sent()).RiChat2Line;
                    return [2 /*return*/, RiChat2Line];
                case 877: return [4 /*yield*/, import("react-icons/ri")];
                case 878:
                    RiChat3Fill = (_b.sent()).RiChat3Fill;
                    return [2 /*return*/, RiChat3Fill];
                case 879: return [4 /*yield*/, import("react-icons/ri")];
                case 880:
                    RiChat3Line = (_b.sent()).RiChat3Line;
                    return [2 /*return*/, RiChat3Line];
                case 881: return [4 /*yield*/, import("react-icons/ri")];
                case 882:
                    RiChat4Fill = (_b.sent()).RiChat4Fill;
                    return [2 /*return*/, RiChat4Fill];
                case 883: return [4 /*yield*/, import("react-icons/ri")];
                case 884:
                    RiChat4Line = (_b.sent()).RiChat4Line;
                    return [2 /*return*/, RiChat4Line];
                case 885: return [4 /*yield*/, import("react-icons/ri")];
                case 886:
                    RiChatAiFill = (_b.sent()).RiChatAiFill;
                    return [2 /*return*/, RiChatAiFill];
                case 887: return [4 /*yield*/, import("react-icons/ri")];
                case 888:
                    RiChatAiLine = (_b.sent()).RiChatAiLine;
                    return [2 /*return*/, RiChatAiLine];
                case 889: return [4 /*yield*/, import("react-icons/ri")];
                case 890:
                    RiChatCheckFill = (_b.sent()).RiChatCheckFill;
                    return [2 /*return*/, RiChatCheckFill];
                case 891: return [4 /*yield*/, import("react-icons/ri")];
                case 892:
                    RiChatCheckLine = (_b.sent()).RiChatCheckLine;
                    return [2 /*return*/, RiChatCheckLine];
                case 893: return [4 /*yield*/, import("react-icons/ri")];
                case 894:
                    RiChatDeleteFill = (_b.sent()).RiChatDeleteFill;
                    return [2 /*return*/, RiChatDeleteFill];
                case 895: return [4 /*yield*/, import("react-icons/ri")];
                case 896:
                    RiChatDeleteLine = (_b.sent()).RiChatDeleteLine;
                    return [2 /*return*/, RiChatDeleteLine];
                case 897: return [4 /*yield*/, import("react-icons/ri")];
                case 898:
                    RiChatDownloadFill = (_b.sent()).RiChatDownloadFill;
                    return [2 /*return*/, RiChatDownloadFill];
                case 899: return [4 /*yield*/, import("react-icons/ri")];
                case 900:
                    RiChatDownloadLine = (_b.sent()).RiChatDownloadLine;
                    return [2 /*return*/, RiChatDownloadLine];
                case 901: return [4 /*yield*/, import("react-icons/ri")];
                case 902:
                    RiChatFollowUpFill = (_b.sent()).RiChatFollowUpFill;
                    return [2 /*return*/, RiChatFollowUpFill];
                case 903: return [4 /*yield*/, import("react-icons/ri")];
                case 904:
                    RiChatFollowUpLine = (_b.sent()).RiChatFollowUpLine;
                    return [2 /*return*/, RiChatFollowUpLine];
                case 905: return [4 /*yield*/, import("react-icons/ri")];
                case 906:
                    RiChatForwardFill = (_b.sent()).RiChatForwardFill;
                    return [2 /*return*/, RiChatForwardFill];
                case 907: return [4 /*yield*/, import("react-icons/ri")];
                case 908:
                    RiChatForwardLine = (_b.sent()).RiChatForwardLine;
                    return [2 /*return*/, RiChatForwardLine];
                case 909: return [4 /*yield*/, import("react-icons/ri")];
                case 910:
                    RiChatHeartFill = (_b.sent()).RiChatHeartFill;
                    return [2 /*return*/, RiChatHeartFill];
                case 911: return [4 /*yield*/, import("react-icons/ri")];
                case 912:
                    RiChatHeartLine = (_b.sent()).RiChatHeartLine;
                    return [2 /*return*/, RiChatHeartLine];
                case 913: return [4 /*yield*/, import("react-icons/ri")];
                case 914:
                    RiChatHistoryFill = (_b.sent()).RiChatHistoryFill;
                    return [2 /*return*/, RiChatHistoryFill];
                case 915: return [4 /*yield*/, import("react-icons/ri")];
                case 916:
                    RiChatHistoryLine = (_b.sent()).RiChatHistoryLine;
                    return [2 /*return*/, RiChatHistoryLine];
                case 917: return [4 /*yield*/, import("react-icons/ri")];
                case 918:
                    RiChatNewFill = (_b.sent()).RiChatNewFill;
                    return [2 /*return*/, RiChatNewFill];
                case 919: return [4 /*yield*/, import("react-icons/ri")];
                case 920:
                    RiChatNewLine = (_b.sent()).RiChatNewLine;
                    return [2 /*return*/, RiChatNewLine];
                case 921: return [4 /*yield*/, import("react-icons/ri")];
                case 922:
                    RiChatOffFill = (_b.sent()).RiChatOffFill;
                    return [2 /*return*/, RiChatOffFill];
                case 923: return [4 /*yield*/, import("react-icons/ri")];
                case 924:
                    RiChatOffLine = (_b.sent()).RiChatOffLine;
                    return [2 /*return*/, RiChatOffLine];
                case 925: return [4 /*yield*/, import("react-icons/ri")];
                case 926:
                    RiChatPollFill = (_b.sent()).RiChatPollFill;
                    return [2 /*return*/, RiChatPollFill];
                case 927: return [4 /*yield*/, import("react-icons/ri")];
                case 928:
                    RiChatPollLine = (_b.sent()).RiChatPollLine;
                    return [2 /*return*/, RiChatPollLine];
                case 929: return [4 /*yield*/, import("react-icons/ri")];
                case 930:
                    RiChatPrivateFill = (_b.sent()).RiChatPrivateFill;
                    return [2 /*return*/, RiChatPrivateFill];
                case 931: return [4 /*yield*/, import("react-icons/ri")];
                case 932:
                    RiChatPrivateLine = (_b.sent()).RiChatPrivateLine;
                    return [2 /*return*/, RiChatPrivateLine];
                case 933: return [4 /*yield*/, import("react-icons/ri")];
                case 934:
                    RiChatQuoteFill = (_b.sent()).RiChatQuoteFill;
                    return [2 /*return*/, RiChatQuoteFill];
                case 935: return [4 /*yield*/, import("react-icons/ri")];
                case 936:
                    RiChatQuoteLine = (_b.sent()).RiChatQuoteLine;
                    return [2 /*return*/, RiChatQuoteLine];
                case 937: return [4 /*yield*/, import("react-icons/ri")];
                case 938:
                    RiChatSearchFill = (_b.sent()).RiChatSearchFill;
                    return [2 /*return*/, RiChatSearchFill];
                case 939: return [4 /*yield*/, import("react-icons/ri")];
                case 940:
                    RiChatSearchLine = (_b.sent()).RiChatSearchLine;
                    return [2 /*return*/, RiChatSearchLine];
                case 941: return [4 /*yield*/, import("react-icons/ri")];
                case 942:
                    RiChatSettingsFill = (_b.sent()).RiChatSettingsFill;
                    return [2 /*return*/, RiChatSettingsFill];
                case 943: return [4 /*yield*/, import("react-icons/ri")];
                case 944:
                    RiChatSettingsLine = (_b.sent()).RiChatSettingsLine;
                    return [2 /*return*/, RiChatSettingsLine];
                case 945: return [4 /*yield*/, import("react-icons/ri")];
                case 946:
                    RiChatSmile2Fill = (_b.sent()).RiChatSmile2Fill;
                    return [2 /*return*/, RiChatSmile2Fill];
                case 947: return [4 /*yield*/, import("react-icons/ri")];
                case 948:
                    RiChatSmile2Line = (_b.sent()).RiChatSmile2Line;
                    return [2 /*return*/, RiChatSmile2Line];
                case 949: return [4 /*yield*/, import("react-icons/ri")];
                case 950:
                    RiChatSmile3Fill = (_b.sent()).RiChatSmile3Fill;
                    return [2 /*return*/, RiChatSmile3Fill];
                case 951: return [4 /*yield*/, import("react-icons/ri")];
                case 952:
                    RiChatSmile3Line = (_b.sent()).RiChatSmile3Line;
                    return [2 /*return*/, RiChatSmile3Line];
                case 953: return [4 /*yield*/, import("react-icons/ri")];
                case 954:
                    RiChatSmileAiFill = (_b.sent()).RiChatSmileAiFill;
                    return [2 /*return*/, RiChatSmileAiFill];
                case 955: return [4 /*yield*/, import("react-icons/ri")];
                case 956:
                    RiChatSmileAiLine = (_b.sent()).RiChatSmileAiLine;
                    return [2 /*return*/, RiChatSmileAiLine];
                case 957: return [4 /*yield*/, import("react-icons/ri")];
                case 958:
                    RiChatSmileFill = (_b.sent()).RiChatSmileFill;
                    return [2 /*return*/, RiChatSmileFill];
                case 959: return [4 /*yield*/, import("react-icons/ri")];
                case 960:
                    RiChatSmileLine = (_b.sent()).RiChatSmileLine;
                    return [2 /*return*/, RiChatSmileLine];
                case 961: return [4 /*yield*/, import("react-icons/ri")];
                case 962:
                    RiChatThreadFill = (_b.sent()).RiChatThreadFill;
                    return [2 /*return*/, RiChatThreadFill];
                case 963: return [4 /*yield*/, import("react-icons/ri")];
                case 964:
                    RiChatThreadLine = (_b.sent()).RiChatThreadLine;
                    return [2 /*return*/, RiChatThreadLine];
                case 965: return [4 /*yield*/, import("react-icons/ri")];
                case 966:
                    RiChatUnreadFill = (_b.sent()).RiChatUnreadFill;
                    return [2 /*return*/, RiChatUnreadFill];
                case 967: return [4 /*yield*/, import("react-icons/ri")];
                case 968:
                    RiChatUnreadLine = (_b.sent()).RiChatUnreadLine;
                    return [2 /*return*/, RiChatUnreadLine];
                case 969: return [4 /*yield*/, import("react-icons/ri")];
                case 970:
                    RiChatUploadFill = (_b.sent()).RiChatUploadFill;
                    return [2 /*return*/, RiChatUploadFill];
                case 971: return [4 /*yield*/, import("react-icons/ri")];
                case 972:
                    RiChatUploadLine = (_b.sent()).RiChatUploadLine;
                    return [2 /*return*/, RiChatUploadLine];
                case 973: return [4 /*yield*/, import("react-icons/ri")];
                case 974:
                    RiChatVoiceAiFill = (_b.sent()).RiChatVoiceAiFill;
                    return [2 /*return*/, RiChatVoiceAiFill];
                case 975: return [4 /*yield*/, import("react-icons/ri")];
                case 976:
                    RiChatVoiceAiLine = (_b.sent()).RiChatVoiceAiLine;
                    return [2 /*return*/, RiChatVoiceAiLine];
                case 977: return [4 /*yield*/, import("react-icons/ri")];
                case 978:
                    RiChatVoiceFill = (_b.sent()).RiChatVoiceFill;
                    return [2 /*return*/, RiChatVoiceFill];
                case 979: return [4 /*yield*/, import("react-icons/ri")];
                case 980:
                    RiChatVoiceLine = (_b.sent()).RiChatVoiceLine;
                    return [2 /*return*/, RiChatVoiceLine];
                case 981: return [4 /*yield*/, import("react-icons/ri")];
                case 982:
                    RiDiscussFill = (_b.sent()).RiDiscussFill;
                    return [2 /*return*/, RiDiscussFill];
                case 983: return [4 /*yield*/, import("react-icons/ri")];
                case 984:
                    RiDiscussLine = (_b.sent()).RiDiscussLine;
                    return [2 /*return*/, RiDiscussLine];
                case 985: return [4 /*yield*/, import("react-icons/ri")];
                case 986:
                    RiEmojiStickerFill = (_b.sent()).RiEmojiStickerFill;
                    return [2 /*return*/, RiEmojiStickerFill];
                case 987: return [4 /*yield*/, import("react-icons/ri")];
                case 988:
                    RiEmojiStickerLine = (_b.sent()).RiEmojiStickerLine;
                    return [2 /*return*/, RiEmojiStickerLine];
                case 989: return [4 /*yield*/, import("react-icons/ri")];
                case 990:
                    RiFeedbackFill = (_b.sent()).RiFeedbackFill;
                    return [2 /*return*/, RiFeedbackFill];
                case 991: return [4 /*yield*/, import("react-icons/ri")];
                case 992:
                    RiFeedbackLine = (_b.sent()).RiFeedbackLine;
                    return [2 /*return*/, RiFeedbackLine];
                case 993: return [4 /*yield*/, import("react-icons/ri")];
                case 994:
                    RiMessage2Fill = (_b.sent()).RiMessage2Fill;
                    return [2 /*return*/, RiMessage2Fill];
                case 995: return [4 /*yield*/, import("react-icons/ri")];
                case 996:
                    RiMessage2Line = (_b.sent()).RiMessage2Line;
                    return [2 /*return*/, RiMessage2Line];
                case 997: return [4 /*yield*/, import("react-icons/ri")];
                case 998:
                    RiMessage3Fill = (_b.sent()).RiMessage3Fill;
                    return [2 /*return*/, RiMessage3Fill];
                case 999: return [4 /*yield*/, import("react-icons/ri")];
                case 1000:
                    RiMessage3Line = (_b.sent()).RiMessage3Line;
                    return [2 /*return*/, RiMessage3Line];
                case 1001: return [4 /*yield*/, import("react-icons/ri")];
                case 1002:
                    RiMessageFill = (_b.sent()).RiMessageFill;
                    return [2 /*return*/, RiMessageFill];
                case 1003: return [4 /*yield*/, import("react-icons/ri")];
                case 1004:
                    RiMessageLine = (_b.sent()).RiMessageLine;
                    return [2 /*return*/, RiMessageLine];
                case 1005: return [4 /*yield*/, import("react-icons/ri")];
                case 1006:
                    RiQuestionAnswerFill = (_b.sent()).RiQuestionAnswerFill;
                    return [2 /*return*/, RiQuestionAnswerFill];
                case 1007: return [4 /*yield*/, import("react-icons/ri")];
                case 1008:
                    RiQuestionAnswerLine = (_b.sent()).RiQuestionAnswerLine;
                    return [2 /*return*/, RiQuestionAnswerLine];
                case 1009: return [4 /*yield*/, import("react-icons/ri")];
                case 1010:
                    RiQuestionnaireFill = (_b.sent()).RiQuestionnaireFill;
                    return [2 /*return*/, RiQuestionnaireFill];
                case 1011: return [4 /*yield*/, import("react-icons/ri")];
                case 1012:
                    RiQuestionnaireLine = (_b.sent()).RiQuestionnaireLine;
                    return [2 /*return*/, RiQuestionnaireLine];
                case 1013: return [4 /*yield*/, import("react-icons/ri")];
                case 1014:
                    RiSpeakAiFill = (_b.sent()).RiSpeakAiFill;
                    return [2 /*return*/, RiSpeakAiFill];
                case 1015: return [4 /*yield*/, import("react-icons/ri")];
                case 1016:
                    RiSpeakAiLine = (_b.sent()).RiSpeakAiLine;
                    return [2 /*return*/, RiSpeakAiLine];
                case 1017: return [4 /*yield*/, import("react-icons/ri")];
                case 1018:
                    RiSpeakFill = (_b.sent()).RiSpeakFill;
                    return [2 /*return*/, RiSpeakFill];
                case 1019: return [4 /*yield*/, import("react-icons/ri")];
                case 1020:
                    RiSpeakLine = (_b.sent()).RiSpeakLine;
                    return [2 /*return*/, RiSpeakLine];
                case 1021: return [4 /*yield*/, import("react-icons/ri")];
                case 1022:
                    RiVideoChatFill = (_b.sent()).RiVideoChatFill;
                    return [2 /*return*/, RiVideoChatFill];
                case 1023: return [4 /*yield*/, import("react-icons/ri")];
                case 1024:
                    RiVideoChatLine = (_b.sent()).RiVideoChatLine;
                    return [2 /*return*/, RiVideoChatLine];
                case 1025: return [4 /*yield*/, import("react-icons/ri")];
                case 1026:
                    RiAlignItemBottomFill = (_b.sent()).RiAlignItemBottomFill;
                    return [2 /*return*/, RiAlignItemBottomFill];
                case 1027: return [4 /*yield*/, import("react-icons/ri")];
                case 1028:
                    RiAlignItemBottomLine = (_b.sent()).RiAlignItemBottomLine;
                    return [2 /*return*/, RiAlignItemBottomLine];
                case 1029: return [4 /*yield*/, import("react-icons/ri")];
                case 1030:
                    RiAlignItemHorizontalCenterFill = (_b.sent()).RiAlignItemHorizontalCenterFill;
                    return [2 /*return*/, RiAlignItemHorizontalCenterFill];
                case 1031: return [4 /*yield*/, import("react-icons/ri")];
                case 1032:
                    RiAlignItemHorizontalCenterLine = (_b.sent()).RiAlignItemHorizontalCenterLine;
                    return [2 /*return*/, RiAlignItemHorizontalCenterLine];
                case 1033: return [4 /*yield*/, import("react-icons/ri")];
                case 1034:
                    RiAlignItemLeftFill = (_b.sent()).RiAlignItemLeftFill;
                    return [2 /*return*/, RiAlignItemLeftFill];
                case 1035: return [4 /*yield*/, import("react-icons/ri")];
                case 1036:
                    RiAlignItemLeftLine = (_b.sent()).RiAlignItemLeftLine;
                    return [2 /*return*/, RiAlignItemLeftLine];
                case 1037: return [4 /*yield*/, import("react-icons/ri")];
                case 1038:
                    RiAlignItemRightFill = (_b.sent()).RiAlignItemRightFill;
                    return [2 /*return*/, RiAlignItemRightFill];
                case 1039: return [4 /*yield*/, import("react-icons/ri")];
                case 1040:
                    RiAlignItemRightLine = (_b.sent()).RiAlignItemRightLine;
                    return [2 /*return*/, RiAlignItemRightLine];
                case 1041: return [4 /*yield*/, import("react-icons/ri")];
                case 1042:
                    RiAlignItemTopFill = (_b.sent()).RiAlignItemTopFill;
                    return [2 /*return*/, RiAlignItemTopFill];
                case 1043: return [4 /*yield*/, import("react-icons/ri")];
                case 1044:
                    RiAlignItemTopLine = (_b.sent()).RiAlignItemTopLine;
                    return [2 /*return*/, RiAlignItemTopLine];
                case 1045: return [4 /*yield*/, import("react-icons/ri")];
                case 1046:
                    RiAlignItemVerticalCenterFill = (_b.sent()).RiAlignItemVerticalCenterFill;
                    return [2 /*return*/, RiAlignItemVerticalCenterFill];
                case 1047: return [4 /*yield*/, import("react-icons/ri")];
                case 1048:
                    RiAlignItemVerticalCenterLine = (_b.sent()).RiAlignItemVerticalCenterLine;
                    return [2 /*return*/, RiAlignItemVerticalCenterLine];
                case 1049: return [4 /*yield*/, import("react-icons/ri")];
                case 1050:
                    RiAnticlockwise2Fill = (_b.sent()).RiAnticlockwise2Fill;
                    return [2 /*return*/, RiAnticlockwise2Fill];
                case 1051: return [4 /*yield*/, import("react-icons/ri")];
                case 1052:
                    RiAnticlockwise2Line = (_b.sent()).RiAnticlockwise2Line;
                    return [2 /*return*/, RiAnticlockwise2Line];
                case 1053: return [4 /*yield*/, import("react-icons/ri")];
                case 1054:
                    RiAnticlockwiseFill = (_b.sent()).RiAnticlockwiseFill;
                    return [2 /*return*/, RiAnticlockwiseFill];
                case 1055: return [4 /*yield*/, import("react-icons/ri")];
                case 1056:
                    RiAnticlockwiseLine = (_b.sent()).RiAnticlockwiseLine;
                    return [2 /*return*/, RiAnticlockwiseLine];
                case 1057: return [4 /*yield*/, import("react-icons/ri")];
                case 1058:
                    RiArtboard2Fill = (_b.sent()).RiArtboard2Fill;
                    return [2 /*return*/, RiArtboard2Fill];
                case 1059: return [4 /*yield*/, import("react-icons/ri")];
                case 1060:
                    RiArtboard2Line = (_b.sent()).RiArtboard2Line;
                    return [2 /*return*/, RiArtboard2Line];
                case 1061: return [4 /*yield*/, import("react-icons/ri")];
                case 1062:
                    RiArtboardFill = (_b.sent()).RiArtboardFill;
                    return [2 /*return*/, RiArtboardFill];
                case 1063: return [4 /*yield*/, import("react-icons/ri")];
                case 1064:
                    RiArtboardLine = (_b.sent()).RiArtboardLine;
                    return [2 /*return*/, RiArtboardLine];
                case 1065: return [4 /*yield*/, import("react-icons/ri")];
                case 1066:
                    RiBallPenFill = (_b.sent()).RiBallPenFill;
                    return [2 /*return*/, RiBallPenFill];
                case 1067: return [4 /*yield*/, import("react-icons/ri")];
                case 1068:
                    RiBallPenLine = (_b.sent()).RiBallPenLine;
                    return [2 /*return*/, RiBallPenLine];
                case 1069: return [4 /*yield*/, import("react-icons/ri")];
                case 1070:
                    RiBlurOffFill = (_b.sent()).RiBlurOffFill;
                    return [2 /*return*/, RiBlurOffFill];
                case 1071: return [4 /*yield*/, import("react-icons/ri")];
                case 1072:
                    RiBlurOffLine = (_b.sent()).RiBlurOffLine;
                    return [2 /*return*/, RiBlurOffLine];
                case 1073: return [4 /*yield*/, import("react-icons/ri")];
                case 1074:
                    RiBrush2Fill = (_b.sent()).RiBrush2Fill;
                    return [2 /*return*/, RiBrush2Fill];
                case 1075: return [4 /*yield*/, import("react-icons/ri")];
                case 1076:
                    RiBrush2Line = (_b.sent()).RiBrush2Line;
                    return [2 /*return*/, RiBrush2Line];
                case 1077: return [4 /*yield*/, import("react-icons/ri")];
                case 1078:
                    RiBrush3Fill = (_b.sent()).RiBrush3Fill;
                    return [2 /*return*/, RiBrush3Fill];
                case 1079: return [4 /*yield*/, import("react-icons/ri")];
                case 1080:
                    RiBrush3Line = (_b.sent()).RiBrush3Line;
                    return [2 /*return*/, RiBrush3Line];
                case 1081: return [4 /*yield*/, import("react-icons/ri")];
                case 1082:
                    RiBrush4Fill = (_b.sent()).RiBrush4Fill;
                    return [2 /*return*/, RiBrush4Fill];
                case 1083: return [4 /*yield*/, import("react-icons/ri")];
                case 1084:
                    RiBrush4Line = (_b.sent()).RiBrush4Line;
                    return [2 /*return*/, RiBrush4Line];
                case 1085: return [4 /*yield*/, import("react-icons/ri")];
                case 1086:
                    RiBrushAiFill = (_b.sent()).RiBrushAiFill;
                    return [2 /*return*/, RiBrushAiFill];
                case 1087: return [4 /*yield*/, import("react-icons/ri")];
                case 1088:
                    RiBrushAiLine = (_b.sent()).RiBrushAiLine;
                    return [2 /*return*/, RiBrushAiLine];
                case 1089: return [4 /*yield*/, import("react-icons/ri")];
                case 1090:
                    RiBrushFill = (_b.sent()).RiBrushFill;
                    return [2 /*return*/, RiBrushFill];
                case 1091: return [4 /*yield*/, import("react-icons/ri")];
                case 1092:
                    RiBrushLine = (_b.sent()).RiBrushLine;
                    return [2 /*return*/, RiBrushLine];
                case 1093: return [4 /*yield*/, import("react-icons/ri")];
                case 1094:
                    RiCircleFill = (_b.sent()).RiCircleFill;
                    return [2 /*return*/, RiCircleFill];
                case 1095: return [4 /*yield*/, import("react-icons/ri")];
                case 1096:
                    RiCircleLine = (_b.sent()).RiCircleLine;
                    return [2 /*return*/, RiCircleLine];
                case 1097: return [4 /*yield*/, import("react-icons/ri")];
                case 1098:
                    RiClockwise2Fill = (_b.sent()).RiClockwise2Fill;
                    return [2 /*return*/, RiClockwise2Fill];
                case 1099: return [4 /*yield*/, import("react-icons/ri")];
                case 1100:
                    RiClockwise2Line = (_b.sent()).RiClockwise2Line;
                    return [2 /*return*/, RiClockwise2Line];
                case 1101: return [4 /*yield*/, import("react-icons/ri")];
                case 1102:
                    RiClockwiseFill = (_b.sent()).RiClockwiseFill;
                    return [2 /*return*/, RiClockwiseFill];
                case 1103: return [4 /*yield*/, import("react-icons/ri")];
                case 1104:
                    RiClockwiseLine = (_b.sent()).RiClockwiseLine;
                    return [2 /*return*/, RiClockwiseLine];
                case 1105: return [4 /*yield*/, import("react-icons/ri")];
                case 1106:
                    RiCollageFill = (_b.sent()).RiCollageFill;
                    return [2 /*return*/, RiCollageFill];
                case 1107: return [4 /*yield*/, import("react-icons/ri")];
                case 1108:
                    RiCollageLine = (_b.sent()).RiCollageLine;
                    return [2 /*return*/, RiCollageLine];
                case 1109: return [4 /*yield*/, import("react-icons/ri")];
                case 1110:
                    RiColorFilterAiFill = (_b.sent()).RiColorFilterAiFill;
                    return [2 /*return*/, RiColorFilterAiFill];
                case 1111: return [4 /*yield*/, import("react-icons/ri")];
                case 1112:
                    RiColorFilterAiLine = (_b.sent()).RiColorFilterAiLine;
                    return [2 /*return*/, RiColorFilterAiLine];
                case 1113: return [4 /*yield*/, import("react-icons/ri")];
                case 1114:
                    RiColorFilterFill = (_b.sent()).RiColorFilterFill;
                    return [2 /*return*/, RiColorFilterFill];
                case 1115: return [4 /*yield*/, import("react-icons/ri")];
                case 1116:
                    RiColorFilterLine = (_b.sent()).RiColorFilterLine;
                    return [2 /*return*/, RiColorFilterLine];
                case 1117: return [4 /*yield*/, import("react-icons/ri")];
                case 1118:
                    RiCompasses2Fill = (_b.sent()).RiCompasses2Fill;
                    return [2 /*return*/, RiCompasses2Fill];
                case 1119: return [4 /*yield*/, import("react-icons/ri")];
                case 1120:
                    RiCompasses2Line = (_b.sent()).RiCompasses2Line;
                    return [2 /*return*/, RiCompasses2Line];
                case 1121: return [4 /*yield*/, import("react-icons/ri")];
                case 1122:
                    RiCompassesFill = (_b.sent()).RiCompassesFill;
                    return [2 /*return*/, RiCompassesFill];
                case 1123: return [4 /*yield*/, import("react-icons/ri")];
                case 1124:
                    RiCompassesLine = (_b.sent()).RiCompassesLine;
                    return [2 /*return*/, RiCompassesLine];
                case 1125: return [4 /*yield*/, import("react-icons/ri")];
                case 1126:
                    RiContrast2Fill = (_b.sent()).RiContrast2Fill;
                    return [2 /*return*/, RiContrast2Fill];
                case 1127: return [4 /*yield*/, import("react-icons/ri")];
                case 1128:
                    RiContrast2Line = (_b.sent()).RiContrast2Line;
                    return [2 /*return*/, RiContrast2Line];
                case 1129: return [4 /*yield*/, import("react-icons/ri")];
                case 1130:
                    RiContrastDrop2Fill = (_b.sent()).RiContrastDrop2Fill;
                    return [2 /*return*/, RiContrastDrop2Fill];
                case 1131: return [4 /*yield*/, import("react-icons/ri")];
                case 1132:
                    RiContrastDrop2Line = (_b.sent()).RiContrastDrop2Line;
                    return [2 /*return*/, RiContrastDrop2Line];
                case 1133: return [4 /*yield*/, import("react-icons/ri")];
                case 1134:
                    RiContrastDropFill = (_b.sent()).RiContrastDropFill;
                    return [2 /*return*/, RiContrastDropFill];
                case 1135: return [4 /*yield*/, import("react-icons/ri")];
                case 1136:
                    RiContrastDropLine = (_b.sent()).RiContrastDropLine;
                    return [2 /*return*/, RiContrastDropLine];
                case 1137: return [4 /*yield*/, import("react-icons/ri")];
                case 1138:
                    RiContrastFill = (_b.sent()).RiContrastFill;
                    return [2 /*return*/, RiContrastFill];
                case 1139: return [4 /*yield*/, import("react-icons/ri")];
                case 1140:
                    RiContrastLine = (_b.sent()).RiContrastLine;
                    return [2 /*return*/, RiContrastLine];
                case 1141: return [4 /*yield*/, import("react-icons/ri")];
                case 1142:
                    RiCrop2Fill = (_b.sent()).RiCrop2Fill;
                    return [2 /*return*/, RiCrop2Fill];
                case 1143: return [4 /*yield*/, import("react-icons/ri")];
                case 1144:
                    RiCrop2Line = (_b.sent()).RiCrop2Line;
                    return [2 /*return*/, RiCrop2Line];
                case 1145: return [4 /*yield*/, import("react-icons/ri")];
                case 1146:
                    RiCropFill = (_b.sent()).RiCropFill;
                    return [2 /*return*/, RiCropFill];
                case 1147: return [4 /*yield*/, import("react-icons/ri")];
                case 1148:
                    RiCropLine = (_b.sent()).RiCropLine;
                    return [2 /*return*/, RiCropLine];
                case 1149: return [4 /*yield*/, import("react-icons/ri")];
                case 1150:
                    RiCrosshair2Fill = (_b.sent()).RiCrosshair2Fill;
                    return [2 /*return*/, RiCrosshair2Fill];
                case 1151: return [4 /*yield*/, import("react-icons/ri")];
                case 1152:
                    RiCrosshair2Line = (_b.sent()).RiCrosshair2Line;
                    return [2 /*return*/, RiCrosshair2Line];
                case 1153: return [4 /*yield*/, import("react-icons/ri")];
                case 1154:
                    RiCrosshairFill = (_b.sent()).RiCrosshairFill;
                    return [2 /*return*/, RiCrosshairFill];
                case 1155: return [4 /*yield*/, import("react-icons/ri")];
                case 1156:
                    RiCrosshairLine = (_b.sent()).RiCrosshairLine;
                    return [2 /*return*/, RiCrosshairLine];
                case 1157: return [4 /*yield*/, import("react-icons/ri")];
                case 1158:
                    RiDragDropFill = (_b.sent()).RiDragDropFill;
                    return [2 /*return*/, RiDragDropFill];
                case 1159: return [4 /*yield*/, import("react-icons/ri")];
                case 1160:
                    RiDragDropLine = (_b.sent()).RiDragDropLine;
                    return [2 /*return*/, RiDragDropLine];
                case 1161: return [4 /*yield*/, import("react-icons/ri")];
                case 1162:
                    RiDropFill = (_b.sent()).RiDropFill;
                    return [2 /*return*/, RiDropFill];
                case 1163: return [4 /*yield*/, import("react-icons/ri")];
                case 1164:
                    RiDropLine = (_b.sent()).RiDropLine;
                    return [2 /*return*/, RiDropLine];
                case 1165: return [4 /*yield*/, import("react-icons/ri")];
                case 1166:
                    RiEdit2Fill = (_b.sent()).RiEdit2Fill;
                    return [2 /*return*/, RiEdit2Fill];
                case 1167: return [4 /*yield*/, import("react-icons/ri")];
                case 1168:
                    RiEdit2Line = (_b.sent()).RiEdit2Line;
                    return [2 /*return*/, RiEdit2Line];
                case 1169: return [4 /*yield*/, import("react-icons/ri")];
                case 1170:
                    RiEditBoxFill = (_b.sent()).RiEditBoxFill;
                    return [2 /*return*/, RiEditBoxFill];
                case 1171: return [4 /*yield*/, import("react-icons/ri")];
                case 1172:
                    RiEditBoxLine = (_b.sent()).RiEditBoxLine;
                    return [2 /*return*/, RiEditBoxLine];
                case 1173: return [4 /*yield*/, import("react-icons/ri")];
                case 1174:
                    RiEditCircleFill = (_b.sent()).RiEditCircleFill;
                    return [2 /*return*/, RiEditCircleFill];
                case 1175: return [4 /*yield*/, import("react-icons/ri")];
                case 1176:
                    RiEditCircleLine = (_b.sent()).RiEditCircleLine;
                    return [2 /*return*/, RiEditCircleLine];
                case 1177: return [4 /*yield*/, import("react-icons/ri")];
                case 1178:
                    RiEditFill = (_b.sent()).RiEditFill;
                    return [2 /*return*/, RiEditFill];
                case 1179: return [4 /*yield*/, import("react-icons/ri")];
                case 1180:
                    RiEditLine = (_b.sent()).RiEditLine;
                    return [2 /*return*/, RiEditLine];
                case 1181: return [4 /*yield*/, import("react-icons/ri")];
                case 1182:
                    RiEraserFill = (_b.sent()).RiEraserFill;
                    return [2 /*return*/, RiEraserFill];
                case 1183: return [4 /*yield*/, import("react-icons/ri")];
                case 1184:
                    RiEraserLine = (_b.sent()).RiEraserLine;
                    return [2 /*return*/, RiEraserLine];
                case 1185: return [4 /*yield*/, import("react-icons/ri")];
                case 1186:
                    RiFlipHorizontal2Fill = (_b.sent()).RiFlipHorizontal2Fill;
                    return [2 /*return*/, RiFlipHorizontal2Fill];
                case 1187: return [4 /*yield*/, import("react-icons/ri")];
                case 1188:
                    RiFlipHorizontal2Line = (_b.sent()).RiFlipHorizontal2Line;
                    return [2 /*return*/, RiFlipHorizontal2Line];
                case 1189: return [4 /*yield*/, import("react-icons/ri")];
                case 1190:
                    RiFlipHorizontalFill = (_b.sent()).RiFlipHorizontalFill;
                    return [2 /*return*/, RiFlipHorizontalFill];
                case 1191: return [4 /*yield*/, import("react-icons/ri")];
                case 1192:
                    RiFlipHorizontalLine = (_b.sent()).RiFlipHorizontalLine;
                    return [2 /*return*/, RiFlipHorizontalLine];
                case 1193: return [4 /*yield*/, import("react-icons/ri")];
                case 1194:
                    RiFlipVertical2Fill = (_b.sent()).RiFlipVertical2Fill;
                    return [2 /*return*/, RiFlipVertical2Fill];
                case 1195: return [4 /*yield*/, import("react-icons/ri")];
                case 1196:
                    RiFlipVertical2Line = (_b.sent()).RiFlipVertical2Line;
                    return [2 /*return*/, RiFlipVertical2Line];
                case 1197: return [4 /*yield*/, import("react-icons/ri")];
                case 1198:
                    RiFlipVerticalFill = (_b.sent()).RiFlipVerticalFill;
                    return [2 /*return*/, RiFlipVerticalFill];
                case 1199: return [4 /*yield*/, import("react-icons/ri")];
                case 1200:
                    RiFlipVerticalLine = (_b.sent()).RiFlipVerticalLine;
                    return [2 /*return*/, RiFlipVerticalLine];
                case 1201: return [4 /*yield*/, import("react-icons/ri")];
                case 1202:
                    RiFocus2Fill = (_b.sent()).RiFocus2Fill;
                    return [2 /*return*/, RiFocus2Fill];
                case 1203: return [4 /*yield*/, import("react-icons/ri")];
                case 1204:
                    RiFocus2Line = (_b.sent()).RiFocus2Line;
                    return [2 /*return*/, RiFocus2Line];
                case 1205: return [4 /*yield*/, import("react-icons/ri")];
                case 1206:
                    RiFocus3Fill = (_b.sent()).RiFocus3Fill;
                    return [2 /*return*/, RiFocus3Fill];
                case 1207: return [4 /*yield*/, import("react-icons/ri")];
                case 1208:
                    RiFocus3Line = (_b.sent()).RiFocus3Line;
                    return [2 /*return*/, RiFocus3Line];
                case 1209: return [4 /*yield*/, import("react-icons/ri")];
                case 1210:
                    RiFocusFill = (_b.sent()).RiFocusFill;
                    return [2 /*return*/, RiFocusFill];
                case 1211: return [4 /*yield*/, import("react-icons/ri")];
                case 1212:
                    RiFocusLine = (_b.sent()).RiFocusLine;
                    return [2 /*return*/, RiFocusLine];
                case 1213: return [4 /*yield*/, import("react-icons/ri")];
                case 1214:
                    RiGridFill = (_b.sent()).RiGridFill;
                    return [2 /*return*/, RiGridFill];
                case 1215: return [4 /*yield*/, import("react-icons/ri")];
                case 1216:
                    RiGridLine = (_b.sent()).RiGridLine;
                    return [2 /*return*/, RiGridLine];
                case 1217: return [4 /*yield*/, import("react-icons/ri")];
                case 1218:
                    RiHammerFill = (_b.sent()).RiHammerFill;
                    return [2 /*return*/, RiHammerFill];
                case 1219: return [4 /*yield*/, import("react-icons/ri")];
                case 1220:
                    RiHammerLine = (_b.sent()).RiHammerLine;
                    return [2 /*return*/, RiHammerLine];
                case 1221: return [4 /*yield*/, import("react-icons/ri")];
                case 1222:
                    RiHexagonFill = (_b.sent()).RiHexagonFill;
                    return [2 /*return*/, RiHexagonFill];
                case 1223: return [4 /*yield*/, import("react-icons/ri")];
                case 1224:
                    RiHexagonLine = (_b.sent()).RiHexagonLine;
                    return [2 /*return*/, RiHexagonLine];
                case 1225: return [4 /*yield*/, import("react-icons/ri")];
                case 1226:
                    RiInkBottleFill = (_b.sent()).RiInkBottleFill;
                    return [2 /*return*/, RiInkBottleFill];
                case 1227: return [4 /*yield*/, import("react-icons/ri")];
                case 1228:
                    RiInkBottleLine = (_b.sent()).RiInkBottleLine;
                    return [2 /*return*/, RiInkBottleLine];
                case 1229: return [4 /*yield*/, import("react-icons/ri")];
                case 1230:
                    RiInputMethodFill = (_b.sent()).RiInputMethodFill;
                    return [2 /*return*/, RiInputMethodFill];
                case 1231: return [4 /*yield*/, import("react-icons/ri")];
                case 1232:
                    RiInputMethodLine = (_b.sent()).RiInputMethodLine;
                    return [2 /*return*/, RiInputMethodLine];
                case 1233: return [4 /*yield*/, import("react-icons/ri")];
                case 1234:
                    RiLayout2Fill = (_b.sent()).RiLayout2Fill;
                    return [2 /*return*/, RiLayout2Fill];
                case 1235: return [4 /*yield*/, import("react-icons/ri")];
                case 1236:
                    RiLayout2Line = (_b.sent()).RiLayout2Line;
                    return [2 /*return*/, RiLayout2Line];
                case 1237: return [4 /*yield*/, import("react-icons/ri")];
                case 1238:
                    RiLayout3Fill = (_b.sent()).RiLayout3Fill;
                    return [2 /*return*/, RiLayout3Fill];
                case 1239: return [4 /*yield*/, import("react-icons/ri")];
                case 1240:
                    RiLayout3Line = (_b.sent()).RiLayout3Line;
                    return [2 /*return*/, RiLayout3Line];
                case 1241: return [4 /*yield*/, import("react-icons/ri")];
                case 1242:
                    RiLayout4Fill = (_b.sent()).RiLayout4Fill;
                    return [2 /*return*/, RiLayout4Fill];
                case 1243: return [4 /*yield*/, import("react-icons/ri")];
                case 1244:
                    RiLayout4Line = (_b.sent()).RiLayout4Line;
                    return [2 /*return*/, RiLayout4Line];
                case 1245: return [4 /*yield*/, import("react-icons/ri")];
                case 1246:
                    RiLayout5Fill = (_b.sent()).RiLayout5Fill;
                    return [2 /*return*/, RiLayout5Fill];
                case 1247: return [4 /*yield*/, import("react-icons/ri")];
                case 1248:
                    RiLayout5Line = (_b.sent()).RiLayout5Line;
                    return [2 /*return*/, RiLayout5Line];
                case 1249: return [4 /*yield*/, import("react-icons/ri")];
                case 1250:
                    RiLayout6Fill = (_b.sent()).RiLayout6Fill;
                    return [2 /*return*/, RiLayout6Fill];
                case 1251: return [4 /*yield*/, import("react-icons/ri")];
                case 1252:
                    RiLayout6Line = (_b.sent()).RiLayout6Line;
                    return [2 /*return*/, RiLayout6Line];
                case 1253: return [4 /*yield*/, import("react-icons/ri")];
                case 1254:
                    RiLayoutBottom2Fill = (_b.sent()).RiLayoutBottom2Fill;
                    return [2 /*return*/, RiLayoutBottom2Fill];
                case 1255: return [4 /*yield*/, import("react-icons/ri")];
                case 1256:
                    RiLayoutBottom2Line = (_b.sent()).RiLayoutBottom2Line;
                    return [2 /*return*/, RiLayoutBottom2Line];
                case 1257: return [4 /*yield*/, import("react-icons/ri")];
                case 1258:
                    RiLayoutBottomFill = (_b.sent()).RiLayoutBottomFill;
                    return [2 /*return*/, RiLayoutBottomFill];
                case 1259: return [4 /*yield*/, import("react-icons/ri")];
                case 1260:
                    RiLayoutBottomLine = (_b.sent()).RiLayoutBottomLine;
                    return [2 /*return*/, RiLayoutBottomLine];
                case 1261: return [4 /*yield*/, import("react-icons/ri")];
                case 1262:
                    RiLayoutColumnFill = (_b.sent()).RiLayoutColumnFill;
                    return [2 /*return*/, RiLayoutColumnFill];
                case 1263: return [4 /*yield*/, import("react-icons/ri")];
                case 1264:
                    RiLayoutColumnLine = (_b.sent()).RiLayoutColumnLine;
                    return [2 /*return*/, RiLayoutColumnLine];
                case 1265: return [4 /*yield*/, import("react-icons/ri")];
                case 1266:
                    RiLayoutFill = (_b.sent()).RiLayoutFill;
                    return [2 /*return*/, RiLayoutFill];
                case 1267: return [4 /*yield*/, import("react-icons/ri")];
                case 1268:
                    RiLayoutGrid2Fill = (_b.sent()).RiLayoutGrid2Fill;
                    return [2 /*return*/, RiLayoutGrid2Fill];
                case 1269: return [4 /*yield*/, import("react-icons/ri")];
                case 1270:
                    RiLayoutGrid2Line = (_b.sent()).RiLayoutGrid2Line;
                    return [2 /*return*/, RiLayoutGrid2Line];
                case 1271: return [4 /*yield*/, import("react-icons/ri")];
                case 1272:
                    RiLayoutGridFill = (_b.sent()).RiLayoutGridFill;
                    return [2 /*return*/, RiLayoutGridFill];
                case 1273: return [4 /*yield*/, import("react-icons/ri")];
                case 1274:
                    RiLayoutGridLine = (_b.sent()).RiLayoutGridLine;
                    return [2 /*return*/, RiLayoutGridLine];
                case 1275: return [4 /*yield*/, import("react-icons/ri")];
                case 1276:
                    RiLayoutHorizontalFill = (_b.sent()).RiLayoutHorizontalFill;
                    return [2 /*return*/, RiLayoutHorizontalFill];
                case 1277: return [4 /*yield*/, import("react-icons/ri")];
                case 1278:
                    RiLayoutHorizontalLine = (_b.sent()).RiLayoutHorizontalLine;
                    return [2 /*return*/, RiLayoutHorizontalLine];
                case 1279: return [4 /*yield*/, import("react-icons/ri")];
                case 1280:
                    RiLayoutLeft2Fill = (_b.sent()).RiLayoutLeft2Fill;
                    return [2 /*return*/, RiLayoutLeft2Fill];
                case 1281: return [4 /*yield*/, import("react-icons/ri")];
                case 1282:
                    RiLayoutLeft2Line = (_b.sent()).RiLayoutLeft2Line;
                    return [2 /*return*/, RiLayoutLeft2Line];
                case 1283: return [4 /*yield*/, import("react-icons/ri")];
                case 1284:
                    RiLayoutLeftFill = (_b.sent()).RiLayoutLeftFill;
                    return [2 /*return*/, RiLayoutLeftFill];
                case 1285: return [4 /*yield*/, import("react-icons/ri")];
                case 1286:
                    RiLayoutLeftLine = (_b.sent()).RiLayoutLeftLine;
                    return [2 /*return*/, RiLayoutLeftLine];
                case 1287: return [4 /*yield*/, import("react-icons/ri")];
                case 1288:
                    RiLayoutLine = (_b.sent()).RiLayoutLine;
                    return [2 /*return*/, RiLayoutLine];
                case 1289: return [4 /*yield*/, import("react-icons/ri")];
                case 1290:
                    RiLayoutMasonryFill = (_b.sent()).RiLayoutMasonryFill;
                    return [2 /*return*/, RiLayoutMasonryFill];
                case 1291: return [4 /*yield*/, import("react-icons/ri")];
                case 1292:
                    RiLayoutMasonryLine = (_b.sent()).RiLayoutMasonryLine;
                    return [2 /*return*/, RiLayoutMasonryLine];
                case 1293: return [4 /*yield*/, import("react-icons/ri")];
                case 1294:
                    RiLayoutRight2Fill = (_b.sent()).RiLayoutRight2Fill;
                    return [2 /*return*/, RiLayoutRight2Fill];
                case 1295: return [4 /*yield*/, import("react-icons/ri")];
                case 1296:
                    RiLayoutRight2Line = (_b.sent()).RiLayoutRight2Line;
                    return [2 /*return*/, RiLayoutRight2Line];
                case 1297: return [4 /*yield*/, import("react-icons/ri")];
                case 1298:
                    RiLayoutRightFill = (_b.sent()).RiLayoutRightFill;
                    return [2 /*return*/, RiLayoutRightFill];
                case 1299: return [4 /*yield*/, import("react-icons/ri")];
                case 1300:
                    RiLayoutRightLine = (_b.sent()).RiLayoutRightLine;
                    return [2 /*return*/, RiLayoutRightLine];
                case 1301: return [4 /*yield*/, import("react-icons/ri")];
                case 1302:
                    RiLayoutRowFill = (_b.sent()).RiLayoutRowFill;
                    return [2 /*return*/, RiLayoutRowFill];
                case 1303: return [4 /*yield*/, import("react-icons/ri")];
                case 1304:
                    RiLayoutRowLine = (_b.sent()).RiLayoutRowLine;
                    return [2 /*return*/, RiLayoutRowLine];
                case 1305: return [4 /*yield*/, import("react-icons/ri")];
                case 1306:
                    RiLayoutTop2Fill = (_b.sent()).RiLayoutTop2Fill;
                    return [2 /*return*/, RiLayoutTop2Fill];
                case 1307: return [4 /*yield*/, import("react-icons/ri")];
                case 1308:
                    RiLayoutTop2Line = (_b.sent()).RiLayoutTop2Line;
                    return [2 /*return*/, RiLayoutTop2Line];
                case 1309: return [4 /*yield*/, import("react-icons/ri")];
                case 1310:
                    RiLayoutTopFill = (_b.sent()).RiLayoutTopFill;
                    return [2 /*return*/, RiLayoutTopFill];
                case 1311: return [4 /*yield*/, import("react-icons/ri")];
                case 1312:
                    RiLayoutTopLine = (_b.sent()).RiLayoutTopLine;
                    return [2 /*return*/, RiLayoutTopLine];
                case 1313: return [4 /*yield*/, import("react-icons/ri")];
                case 1314:
                    RiLayoutVerticalFill = (_b.sent()).RiLayoutVerticalFill;
                    return [2 /*return*/, RiLayoutVerticalFill];
                case 1315: return [4 /*yield*/, import("react-icons/ri")];
                case 1316:
                    RiLayoutVerticalLine = (_b.sent()).RiLayoutVerticalLine;
                    return [2 /*return*/, RiLayoutVerticalLine];
                case 1317: return [4 /*yield*/, import("react-icons/ri")];
                case 1318:
                    RiMagicFill = (_b.sent()).RiMagicFill;
                    return [2 /*return*/, RiMagicFill];
                case 1319: return [4 /*yield*/, import("react-icons/ri")];
                case 1320:
                    RiMagicLine = (_b.sent()).RiMagicLine;
                    return [2 /*return*/, RiMagicLine];
                case 1321: return [4 /*yield*/, import("react-icons/ri")];
                case 1322:
                    RiMarkPenFill = (_b.sent()).RiMarkPenFill;
                    return [2 /*return*/, RiMarkPenFill];
                case 1323: return [4 /*yield*/, import("react-icons/ri")];
                case 1324:
                    RiMarkPenLine = (_b.sent()).RiMarkPenLine;
                    return [2 /*return*/, RiMarkPenLine];
                case 1325: return [4 /*yield*/, import("react-icons/ri")];
                case 1326:
                    RiMarkupFill = (_b.sent()).RiMarkupFill;
                    return [2 /*return*/, RiMarkupFill];
                case 1327: return [4 /*yield*/, import("react-icons/ri")];
                case 1328:
                    RiMarkupLine = (_b.sent()).RiMarkupLine;
                    return [2 /*return*/, RiMarkupLine];
                case 1329: return [4 /*yield*/, import("react-icons/ri")];
                case 1330:
                    RiOctagonFill = (_b.sent()).RiOctagonFill;
                    return [2 /*return*/, RiOctagonFill];
                case 1331: return [4 /*yield*/, import("react-icons/ri")];
                case 1332:
                    RiOctagonLine = (_b.sent()).RiOctagonLine;
                    return [2 /*return*/, RiOctagonLine];
                case 1333: return [4 /*yield*/, import("react-icons/ri")];
                case 1334:
                    RiPaintBrushFill = (_b.sent()).RiPaintBrushFill;
                    return [2 /*return*/, RiPaintBrushFill];
                case 1335: return [4 /*yield*/, import("react-icons/ri")];
                case 1336:
                    RiPaintBrushLine = (_b.sent()).RiPaintBrushLine;
                    return [2 /*return*/, RiPaintBrushLine];
                case 1337: return [4 /*yield*/, import("react-icons/ri")];
                case 1338:
                    RiPaintFill = (_b.sent()).RiPaintFill;
                    return [2 /*return*/, RiPaintFill];
                case 1339: return [4 /*yield*/, import("react-icons/ri")];
                case 1340:
                    RiPaintLine = (_b.sent()).RiPaintLine;
                    return [2 /*return*/, RiPaintLine];
                case 1341: return [4 /*yield*/, import("react-icons/ri")];
                case 1342:
                    RiPaletteFill = (_b.sent()).RiPaletteFill;
                    return [2 /*return*/, RiPaletteFill];
                case 1343: return [4 /*yield*/, import("react-icons/ri")];
                case 1344:
                    RiPaletteLine = (_b.sent()).RiPaletteLine;
                    return [2 /*return*/, RiPaletteLine];
                case 1345: return [4 /*yield*/, import("react-icons/ri")];
                case 1346:
                    RiPantoneFill = (_b.sent()).RiPantoneFill;
                    return [2 /*return*/, RiPantoneFill];
                case 1347: return [4 /*yield*/, import("react-icons/ri")];
                case 1348:
                    RiPantoneLine = (_b.sent()).RiPantoneLine;
                    return [2 /*return*/, RiPantoneLine];
                case 1349: return [4 /*yield*/, import("react-icons/ri")];
                case 1350:
                    RiPenNibFill = (_b.sent()).RiPenNibFill;
                    return [2 /*return*/, RiPenNibFill];
                case 1351: return [4 /*yield*/, import("react-icons/ri")];
                case 1352:
                    RiPenNibLine = (_b.sent()).RiPenNibLine;
                    return [2 /*return*/, RiPenNibLine];
                case 1353: return [4 /*yield*/, import("react-icons/ri")];
                case 1354:
                    RiPencilFill = (_b.sent()).RiPencilFill;
                    return [2 /*return*/, RiPencilFill];
                case 1355: return [4 /*yield*/, import("react-icons/ri")];
                case 1356:
                    RiPencilLine = (_b.sent()).RiPencilLine;
                    return [2 /*return*/, RiPencilLine];
                case 1357: return [4 /*yield*/, import("react-icons/ri")];
                case 1358:
                    RiPencilRuler2Fill = (_b.sent()).RiPencilRuler2Fill;
                    return [2 /*return*/, RiPencilRuler2Fill];
                case 1359: return [4 /*yield*/, import("react-icons/ri")];
                case 1360:
                    RiPencilRuler2Line = (_b.sent()).RiPencilRuler2Line;
                    return [2 /*return*/, RiPencilRuler2Line];
                case 1361: return [4 /*yield*/, import("react-icons/ri")];
                case 1362:
                    RiPencilRulerFill = (_b.sent()).RiPencilRulerFill;
                    return [2 /*return*/, RiPencilRulerFill];
                case 1363: return [4 /*yield*/, import("react-icons/ri")];
                case 1364:
                    RiPencilRulerLine = (_b.sent()).RiPencilRulerLine;
                    return [2 /*return*/, RiPencilRulerLine];
                case 1365: return [4 /*yield*/, import("react-icons/ri")];
                case 1366:
                    RiPentagonFill = (_b.sent()).RiPentagonFill;
                    return [2 /*return*/, RiPentagonFill];
                case 1367: return [4 /*yield*/, import("react-icons/ri")];
                case 1368:
                    RiPentagonLine = (_b.sent()).RiPentagonLine;
                    return [2 /*return*/, RiPentagonLine];
                case 1369: return [4 /*yield*/, import("react-icons/ri")];
                case 1370:
                    RiQuillPenAiFill = (_b.sent()).RiQuillPenAiFill;
                    return [2 /*return*/, RiQuillPenAiFill];
                case 1371: return [4 /*yield*/, import("react-icons/ri")];
                case 1372:
                    RiQuillPenAiLine = (_b.sent()).RiQuillPenAiLine;
                    return [2 /*return*/, RiQuillPenAiLine];
                case 1373: return [4 /*yield*/, import("react-icons/ri")];
                case 1374:
                    RiQuillPenFill = (_b.sent()).RiQuillPenFill;
                    return [2 /*return*/, RiQuillPenFill];
                case 1375: return [4 /*yield*/, import("react-icons/ri")];
                case 1376:
                    RiQuillPenLine = (_b.sent()).RiQuillPenLine;
                    return [2 /*return*/, RiQuillPenLine];
                case 1377: return [4 /*yield*/, import("react-icons/ri")];
                case 1378:
                    RiRectangleFill = (_b.sent()).RiRectangleFill;
                    return [2 /*return*/, RiRectangleFill];
                case 1379: return [4 /*yield*/, import("react-icons/ri")];
                case 1380:
                    RiRectangleLine = (_b.sent()).RiRectangleLine;
                    return [2 /*return*/, RiRectangleLine];
                case 1381: return [4 /*yield*/, import("react-icons/ri")];
                case 1382:
                    RiRuler2Fill = (_b.sent()).RiRuler2Fill;
                    return [2 /*return*/, RiRuler2Fill];
                case 1383: return [4 /*yield*/, import("react-icons/ri")];
                case 1384:
                    RiRuler2Line = (_b.sent()).RiRuler2Line;
                    return [2 /*return*/, RiRuler2Line];
                case 1385: return [4 /*yield*/, import("react-icons/ri")];
                case 1386:
                    RiRulerFill = (_b.sent()).RiRulerFill;
                    return [2 /*return*/, RiRulerFill];
                case 1387: return [4 /*yield*/, import("react-icons/ri")];
                case 1388:
                    RiRulerLine = (_b.sent()).RiRulerLine;
                    return [2 /*return*/, RiRulerLine];
                case 1389: return [4 /*yield*/, import("react-icons/ri")];
                case 1390:
                    RiScissors2Fill = (_b.sent()).RiScissors2Fill;
                    return [2 /*return*/, RiScissors2Fill];
                case 1391: return [4 /*yield*/, import("react-icons/ri")];
                case 1392:
                    RiScissors2Line = (_b.sent()).RiScissors2Line;
                    return [2 /*return*/, RiScissors2Line];
                case 1393: return [4 /*yield*/, import("react-icons/ri")];
                case 1394:
                    RiScissorsCutFill = (_b.sent()).RiScissorsCutFill;
                    return [2 /*return*/, RiScissorsCutFill];
                case 1395: return [4 /*yield*/, import("react-icons/ri")];
                case 1396:
                    RiScissorsCutLine = (_b.sent()).RiScissorsCutLine;
                    return [2 /*return*/, RiScissorsCutLine];
                case 1397: return [4 /*yield*/, import("react-icons/ri")];
                case 1398:
                    RiScissorsFill = (_b.sent()).RiScissorsFill;
                    return [2 /*return*/, RiScissorsFill];
                case 1399: return [4 /*yield*/, import("react-icons/ri")];
                case 1400:
                    RiScissorsLine = (_b.sent()).RiScissorsLine;
                    return [2 /*return*/, RiScissorsLine];
                case 1401: return [4 /*yield*/, import("react-icons/ri")];
                case 1402:
                    RiScreenshot2Fill = (_b.sent()).RiScreenshot2Fill;
                    return [2 /*return*/, RiScreenshot2Fill];
                case 1403: return [4 /*yield*/, import("react-icons/ri")];
                case 1404:
                    RiScreenshot2Line = (_b.sent()).RiScreenshot2Line;
                    return [2 /*return*/, RiScreenshot2Line];
                case 1405: return [4 /*yield*/, import("react-icons/ri")];
                case 1406:
                    RiScreenshotFill = (_b.sent()).RiScreenshotFill;
                    return [2 /*return*/, RiScreenshotFill];
                case 1407: return [4 /*yield*/, import("react-icons/ri")];
                case 1408:
                    RiScreenshotLine = (_b.sent()).RiScreenshotLine;
                    return [2 /*return*/, RiScreenshotLine];
                case 1409: return [4 /*yield*/, import("react-icons/ri")];
                case 1410:
                    RiShadowFill = (_b.sent()).RiShadowFill;
                    return [2 /*return*/, RiShadowFill];
                case 1411: return [4 /*yield*/, import("react-icons/ri")];
                case 1412:
                    RiShadowLine = (_b.sent()).RiShadowLine;
                    return [2 /*return*/, RiShadowLine];
                case 1413: return [4 /*yield*/, import("react-icons/ri")];
                case 1414:
                    RiShape2Fill = (_b.sent()).RiShape2Fill;
                    return [2 /*return*/, RiShape2Fill];
                case 1415: return [4 /*yield*/, import("react-icons/ri")];
                case 1416:
                    RiShape2Line = (_b.sent()).RiShape2Line;
                    return [2 /*return*/, RiShape2Line];
                case 1417: return [4 /*yield*/, import("react-icons/ri")];
                case 1418:
                    RiShapeFill = (_b.sent()).RiShapeFill;
                    return [2 /*return*/, RiShapeFill];
                case 1419: return [4 /*yield*/, import("react-icons/ri")];
                case 1420:
                    RiShapeLine = (_b.sent()).RiShapeLine;
                    return [2 /*return*/, RiShapeLine];
                case 1421: return [4 /*yield*/, import("react-icons/ri")];
                case 1422:
                    RiShapesFill = (_b.sent()).RiShapesFill;
                    return [2 /*return*/, RiShapesFill];
                case 1423: return [4 /*yield*/, import("react-icons/ri")];
                case 1424:
                    RiShapesLine = (_b.sent()).RiShapesLine;
                    return [2 /*return*/, RiShapesLine];
                case 1425: return [4 /*yield*/, import("react-icons/ri")];
                case 1426:
                    RiSipFill = (_b.sent()).RiSipFill;
                    return [2 /*return*/, RiSipFill];
                case 1427: return [4 /*yield*/, import("react-icons/ri")];
                case 1428:
                    RiSipLine = (_b.sent()).RiSipLine;
                    return [2 /*return*/, RiSipLine];
                case 1429: return [4 /*yield*/, import("react-icons/ri")];
                case 1430:
                    RiSliceFill = (_b.sent()).RiSliceFill;
                    return [2 /*return*/, RiSliceFill];
                case 1431: return [4 /*yield*/, import("react-icons/ri")];
                case 1432:
                    RiSliceLine = (_b.sent()).RiSliceLine;
                    return [2 /*return*/, RiSliceLine];
                case 1433: return [4 /*yield*/, import("react-icons/ri")];
                case 1434:
                    RiSquareFill = (_b.sent()).RiSquareFill;
                    return [2 /*return*/, RiSquareFill];
                case 1435: return [4 /*yield*/, import("react-icons/ri")];
                case 1436:
                    RiSquareLine = (_b.sent()).RiSquareLine;
                    return [2 /*return*/, RiSquareLine];
                case 1437: return [4 /*yield*/, import("react-icons/ri")];
                case 1438:
                    RiTBoxFill = (_b.sent()).RiTBoxFill;
                    return [2 /*return*/, RiTBoxFill];
                case 1439: return [4 /*yield*/, import("react-icons/ri")];
                case 1440:
                    RiTBoxLine = (_b.sent()).RiTBoxLine;
                    return [2 /*return*/, RiTBoxLine];
                case 1441: return [4 /*yield*/, import("react-icons/ri")];
                case 1442:
                    RiTableAltFill = (_b.sent()).RiTableAltFill;
                    return [2 /*return*/, RiTableAltFill];
                case 1443: return [4 /*yield*/, import("react-icons/ri")];
                case 1444:
                    RiTableAltLine = (_b.sent()).RiTableAltLine;
                    return [2 /*return*/, RiTableAltLine];
                case 1445: return [4 /*yield*/, import("react-icons/ri")];
                case 1446:
                    RiTableFill = (_b.sent()).RiTableFill;
                    return [2 /*return*/, RiTableFill];
                case 1447: return [4 /*yield*/, import("react-icons/ri")];
                case 1448:
                    RiTableLine = (_b.sent()).RiTableLine;
                    return [2 /*return*/, RiTableLine];
                case 1449: return [4 /*yield*/, import("react-icons/ri")];
                case 1450:
                    RiToolsFill = (_b.sent()).RiToolsFill;
                    return [2 /*return*/, RiToolsFill];
                case 1451: return [4 /*yield*/, import("react-icons/ri")];
                case 1452:
                    RiToolsLine = (_b.sent()).RiToolsLine;
                    return [2 /*return*/, RiToolsLine];
                case 1453: return [4 /*yield*/, import("react-icons/ri")];
                case 1454:
                    RiTriangleFill = (_b.sent()).RiTriangleFill;
                    return [2 /*return*/, RiTriangleFill];
                case 1455: return [4 /*yield*/, import("react-icons/ri")];
                case 1456:
                    RiTriangleLine = (_b.sent()).RiTriangleLine;
                    return [2 /*return*/, RiTriangleLine];
                case 1457: return [4 /*yield*/, import("react-icons/ri")];
                case 1458:
                    RiBracesFill = (_b.sent()).RiBracesFill;
                    return [2 /*return*/, RiBracesFill];
                case 1459: return [4 /*yield*/, import("react-icons/ri")];
                case 1460:
                    RiBracesLine = (_b.sent()).RiBracesLine;
                    return [2 /*return*/, RiBracesLine];
                case 1461: return [4 /*yield*/, import("react-icons/ri")];
                case 1462:
                    RiBracketsFill = (_b.sent()).RiBracketsFill;
                    return [2 /*return*/, RiBracketsFill];
                case 1463: return [4 /*yield*/, import("react-icons/ri")];
                case 1464:
                    RiBracketsLine = (_b.sent()).RiBracketsLine;
                    return [2 /*return*/, RiBracketsLine];
                case 1465: return [4 /*yield*/, import("react-icons/ri")];
                case 1466:
                    RiBug2Fill = (_b.sent()).RiBug2Fill;
                    return [2 /*return*/, RiBug2Fill];
                case 1467: return [4 /*yield*/, import("react-icons/ri")];
                case 1468:
                    RiBug2Line = (_b.sent()).RiBug2Line;
                    return [2 /*return*/, RiBug2Line];
                case 1469: return [4 /*yield*/, import("react-icons/ri")];
                case 1470:
                    RiBugFill = (_b.sent()).RiBugFill;
                    return [2 /*return*/, RiBugFill];
                case 1471: return [4 /*yield*/, import("react-icons/ri")];
                case 1472:
                    RiBugLine = (_b.sent()).RiBugLine;
                    return [2 /*return*/, RiBugLine];
                case 1473: return [4 /*yield*/, import("react-icons/ri")];
                case 1474:
                    RiCodeAiFill = (_b.sent()).RiCodeAiFill;
                    return [2 /*return*/, RiCodeAiFill];
                case 1475: return [4 /*yield*/, import("react-icons/ri")];
                case 1476:
                    RiCodeAiLine = (_b.sent()).RiCodeAiLine;
                    return [2 /*return*/, RiCodeAiLine];
                case 1477: return [4 /*yield*/, import("react-icons/ri")];
                case 1478:
                    RiCodeBoxFill = (_b.sent()).RiCodeBoxFill;
                    return [2 /*return*/, RiCodeBoxFill];
                case 1479: return [4 /*yield*/, import("react-icons/ri")];
                case 1480:
                    RiCodeBoxLine = (_b.sent()).RiCodeBoxLine;
                    return [2 /*return*/, RiCodeBoxLine];
                case 1481: return [4 /*yield*/, import("react-icons/ri")];
                case 1482:
                    RiCodeFill = (_b.sent()).RiCodeFill;
                    return [2 /*return*/, RiCodeFill];
                case 1483: return [4 /*yield*/, import("react-icons/ri")];
                case 1484:
                    RiCodeLine = (_b.sent()).RiCodeLine;
                    return [2 /*return*/, RiCodeLine];
                case 1485: return [4 /*yield*/, import("react-icons/ri")];
                case 1486:
                    RiCodeSFill = (_b.sent()).RiCodeSFill;
                    return [2 /*return*/, RiCodeSFill];
                case 1487: return [4 /*yield*/, import("react-icons/ri")];
                case 1488:
                    RiCodeSLine = (_b.sent()).RiCodeSLine;
                    return [2 /*return*/, RiCodeSLine];
                case 1489: return [4 /*yield*/, import("react-icons/ri")];
                case 1490:
                    RiCodeSSlashFill = (_b.sent()).RiCodeSSlashFill;
                    return [2 /*return*/, RiCodeSSlashFill];
                case 1491: return [4 /*yield*/, import("react-icons/ri")];
                case 1492:
                    RiCodeSSlashLine = (_b.sent()).RiCodeSSlashLine;
                    return [2 /*return*/, RiCodeSSlashLine];
                case 1493: return [4 /*yield*/, import("react-icons/ri")];
                case 1494:
                    RiCommandFill = (_b.sent()).RiCommandFill;
                    return [2 /*return*/, RiCommandFill];
                case 1495: return [4 /*yield*/, import("react-icons/ri")];
                case 1496:
                    RiCommandLine = (_b.sent()).RiCommandLine;
                    return [2 /*return*/, RiCommandLine];
                case 1497: return [4 /*yield*/, import("react-icons/ri")];
                case 1498:
                    RiCss3Fill = (_b.sent()).RiCss3Fill;
                    return [2 /*return*/, RiCss3Fill];
                case 1499: return [4 /*yield*/, import("react-icons/ri")];
                case 1500:
                    RiCss3Line = (_b.sent()).RiCss3Line;
                    return [2 /*return*/, RiCss3Line];
                case 1501: return [4 /*yield*/, import("react-icons/ri")];
                case 1502:
                    RiCursorFill = (_b.sent()).RiCursorFill;
                    return [2 /*return*/, RiCursorFill];
                case 1503: return [4 /*yield*/, import("react-icons/ri")];
                case 1504:
                    RiCursorLine = (_b.sent()).RiCursorLine;
                    return [2 /*return*/, RiCursorLine];
                case 1505: return [4 /*yield*/, import("react-icons/ri")];
                case 1506:
                    RiGitBranchFill = (_b.sent()).RiGitBranchFill;
                    return [2 /*return*/, RiGitBranchFill];
                case 1507: return [4 /*yield*/, import("react-icons/ri")];
                case 1508:
                    RiGitBranchLine = (_b.sent()).RiGitBranchLine;
                    return [2 /*return*/, RiGitBranchLine];
                case 1509: return [4 /*yield*/, import("react-icons/ri")];
                case 1510:
                    RiGitClosePullRequestFill = (_b.sent()).RiGitClosePullRequestFill;
                    return [2 /*return*/, RiGitClosePullRequestFill];
                case 1511: return [4 /*yield*/, import("react-icons/ri")];
                case 1512:
                    RiGitClosePullRequestLine = (_b.sent()).RiGitClosePullRequestLine;
                    return [2 /*return*/, RiGitClosePullRequestLine];
                case 1513: return [4 /*yield*/, import("react-icons/ri")];
                case 1514:
                    RiGitCommitFill = (_b.sent()).RiGitCommitFill;
                    return [2 /*return*/, RiGitCommitFill];
                case 1515: return [4 /*yield*/, import("react-icons/ri")];
                case 1516:
                    RiGitCommitLine = (_b.sent()).RiGitCommitLine;
                    return [2 /*return*/, RiGitCommitLine];
                case 1517: return [4 /*yield*/, import("react-icons/ri")];
                case 1518:
                    RiGitForkFill = (_b.sent()).RiGitForkFill;
                    return [2 /*return*/, RiGitForkFill];
                case 1519: return [4 /*yield*/, import("react-icons/ri")];
                case 1520:
                    RiGitForkLine = (_b.sent()).RiGitForkLine;
                    return [2 /*return*/, RiGitForkLine];
                case 1521: return [4 /*yield*/, import("react-icons/ri")];
                case 1522:
                    RiGitMergeFill = (_b.sent()).RiGitMergeFill;
                    return [2 /*return*/, RiGitMergeFill];
                case 1523: return [4 /*yield*/, import("react-icons/ri")];
                case 1524:
                    RiGitMergeLine = (_b.sent()).RiGitMergeLine;
                    return [2 /*return*/, RiGitMergeLine];
                case 1525: return [4 /*yield*/, import("react-icons/ri")];
                case 1526:
                    RiGitPrDraftFill = (_b.sent()).RiGitPrDraftFill;
                    return [2 /*return*/, RiGitPrDraftFill];
                case 1527: return [4 /*yield*/, import("react-icons/ri")];
                case 1528:
                    RiGitPrDraftLine = (_b.sent()).RiGitPrDraftLine;
                    return [2 /*return*/, RiGitPrDraftLine];
                case 1529: return [4 /*yield*/, import("react-icons/ri")];
                case 1530:
                    RiGitPullRequestFill = (_b.sent()).RiGitPullRequestFill;
                    return [2 /*return*/, RiGitPullRequestFill];
                case 1531: return [4 /*yield*/, import("react-icons/ri")];
                case 1532:
                    RiGitPullRequestLine = (_b.sent()).RiGitPullRequestLine;
                    return [2 /*return*/, RiGitPullRequestLine];
                case 1533: return [4 /*yield*/, import("react-icons/ri")];
                case 1534:
                    RiGitRepositoryCommitsFill = (_b.sent()).RiGitRepositoryCommitsFill;
                    return [2 /*return*/, RiGitRepositoryCommitsFill];
                case 1535: return [4 /*yield*/, import("react-icons/ri")];
                case 1536:
                    RiGitRepositoryCommitsLine = (_b.sent()).RiGitRepositoryCommitsLine;
                    return [2 /*return*/, RiGitRepositoryCommitsLine];
                case 1537: return [4 /*yield*/, import("react-icons/ri")];
                case 1538:
                    RiGitRepositoryFill = (_b.sent()).RiGitRepositoryFill;
                    return [2 /*return*/, RiGitRepositoryFill];
                case 1539: return [4 /*yield*/, import("react-icons/ri")];
                case 1540:
                    RiGitRepositoryLine = (_b.sent()).RiGitRepositoryLine;
                    return [2 /*return*/, RiGitRepositoryLine];
                case 1541: return [4 /*yield*/, import("react-icons/ri")];
                case 1542:
                    RiGitRepositoryPrivateFill = (_b.sent()).RiGitRepositoryPrivateFill;
                    return [2 /*return*/, RiGitRepositoryPrivateFill];
                case 1543: return [4 /*yield*/, import("react-icons/ri")];
                case 1544:
                    RiGitRepositoryPrivateLine = (_b.sent()).RiGitRepositoryPrivateLine;
                    return [2 /*return*/, RiGitRepositoryPrivateLine];
                case 1545: return [4 /*yield*/, import("react-icons/ri")];
                case 1546:
                    RiHtml5Fill = (_b.sent()).RiHtml5Fill;
                    return [2 /*return*/, RiHtml5Fill];
                case 1547: return [4 /*yield*/, import("react-icons/ri")];
                case 1548:
                    RiHtml5Line = (_b.sent()).RiHtml5Line;
                    return [2 /*return*/, RiHtml5Line];
                case 1549: return [4 /*yield*/, import("react-icons/ri")];
                case 1550:
                    RiJavascriptFill = (_b.sent()).RiJavascriptFill;
                    return [2 /*return*/, RiJavascriptFill];
                case 1551: return [4 /*yield*/, import("react-icons/ri")];
                case 1552:
                    RiJavascriptLine = (_b.sent()).RiJavascriptLine;
                    return [2 /*return*/, RiJavascriptLine];
                case 1553: return [4 /*yield*/, import("react-icons/ri")];
                case 1554:
                    RiParenthesesFill = (_b.sent()).RiParenthesesFill;
                    return [2 /*return*/, RiParenthesesFill];
                case 1555: return [4 /*yield*/, import("react-icons/ri")];
                case 1556:
                    RiParenthesesLine = (_b.sent()).RiParenthesesLine;
                    return [2 /*return*/, RiParenthesesLine];
                case 1557: return [4 /*yield*/, import("react-icons/ri")];
                case 1558:
                    RiPhpFill = (_b.sent()).RiPhpFill;
                    return [2 /*return*/, RiPhpFill];
                case 1559: return [4 /*yield*/, import("react-icons/ri")];
                case 1560:
                    RiPhpLine = (_b.sent()).RiPhpLine;
                    return [2 /*return*/, RiPhpLine];
                case 1561: return [4 /*yield*/, import("react-icons/ri")];
                case 1562:
                    RiPuzzle2Fill = (_b.sent()).RiPuzzle2Fill;
                    return [2 /*return*/, RiPuzzle2Fill];
                case 1563: return [4 /*yield*/, import("react-icons/ri")];
                case 1564:
                    RiPuzzle2Line = (_b.sent()).RiPuzzle2Line;
                    return [2 /*return*/, RiPuzzle2Line];
                case 1565: return [4 /*yield*/, import("react-icons/ri")];
                case 1566:
                    RiPuzzleFill = (_b.sent()).RiPuzzleFill;
                    return [2 /*return*/, RiPuzzleFill];
                case 1567: return [4 /*yield*/, import("react-icons/ri")];
                case 1568:
                    RiPuzzleLine = (_b.sent()).RiPuzzleLine;
                    return [2 /*return*/, RiPuzzleLine];
                case 1569: return [4 /*yield*/, import("react-icons/ri")];
                case 1570:
                    RiTerminalBoxFill = (_b.sent()).RiTerminalBoxFill;
                    return [2 /*return*/, RiTerminalBoxFill];
                case 1571: return [4 /*yield*/, import("react-icons/ri")];
                case 1572:
                    RiTerminalBoxLine = (_b.sent()).RiTerminalBoxLine;
                    return [2 /*return*/, RiTerminalBoxLine];
                case 1573: return [4 /*yield*/, import("react-icons/ri")];
                case 1574:
                    RiTerminalFill = (_b.sent()).RiTerminalFill;
                    return [2 /*return*/, RiTerminalFill];
                case 1575: return [4 /*yield*/, import("react-icons/ri")];
                case 1576:
                    RiTerminalLine = (_b.sent()).RiTerminalLine;
                    return [2 /*return*/, RiTerminalLine];
                case 1577: return [4 /*yield*/, import("react-icons/ri")];
                case 1578:
                    RiTerminalWindowFill = (_b.sent()).RiTerminalWindowFill;
                    return [2 /*return*/, RiTerminalWindowFill];
                case 1579: return [4 /*yield*/, import("react-icons/ri")];
                case 1580:
                    RiTerminalWindowLine = (_b.sent()).RiTerminalWindowLine;
                    return [2 /*return*/, RiTerminalWindowLine];
                case 1581: return [4 /*yield*/, import("react-icons/ri")];
                case 1582:
                    RiAirplayFill = (_b.sent()).RiAirplayFill;
                    return [2 /*return*/, RiAirplayFill];
                case 1583: return [4 /*yield*/, import("react-icons/ri")];
                case 1584:
                    RiAirplayLine = (_b.sent()).RiAirplayLine;
                    return [2 /*return*/, RiAirplayLine];
                case 1585: return [4 /*yield*/, import("react-icons/ri")];
                case 1586:
                    RiBarcodeBoxFill = (_b.sent()).RiBarcodeBoxFill;
                    return [2 /*return*/, RiBarcodeBoxFill];
                case 1587: return [4 /*yield*/, import("react-icons/ri")];
                case 1588:
                    RiBarcodeBoxLine = (_b.sent()).RiBarcodeBoxLine;
                    return [2 /*return*/, RiBarcodeBoxLine];
                case 1589: return [4 /*yield*/, import("react-icons/ri")];
                case 1590:
                    RiBarcodeFill = (_b.sent()).RiBarcodeFill;
                    return [2 /*return*/, RiBarcodeFill];
                case 1591: return [4 /*yield*/, import("react-icons/ri")];
                case 1592:
                    RiBarcodeLine = (_b.sent()).RiBarcodeLine;
                    return [2 /*return*/, RiBarcodeLine];
                case 1593: return [4 /*yield*/, import("react-icons/ri")];
                case 1594:
                    RiBaseStationFill = (_b.sent()).RiBaseStationFill;
                    return [2 /*return*/, RiBaseStationFill];
                case 1595: return [4 /*yield*/, import("react-icons/ri")];
                case 1596:
                    RiBaseStationLine = (_b.sent()).RiBaseStationLine;
                    return [2 /*return*/, RiBaseStationLine];
                case 1597: return [4 /*yield*/, import("react-icons/ri")];
                case 1598:
                    RiBattery2ChargeFill = (_b.sent()).RiBattery2ChargeFill;
                    return [2 /*return*/, RiBattery2ChargeFill];
                case 1599: return [4 /*yield*/, import("react-icons/ri")];
                case 1600:
                    RiBattery2ChargeLine = (_b.sent()).RiBattery2ChargeLine;
                    return [2 /*return*/, RiBattery2ChargeLine];
                case 1601: return [4 /*yield*/, import("react-icons/ri")];
                case 1602:
                    RiBattery2Fill = (_b.sent()).RiBattery2Fill;
                    return [2 /*return*/, RiBattery2Fill];
                case 1603: return [4 /*yield*/, import("react-icons/ri")];
                case 1604:
                    RiBattery2Line = (_b.sent()).RiBattery2Line;
                    return [2 /*return*/, RiBattery2Line];
                case 1605: return [4 /*yield*/, import("react-icons/ri")];
                case 1606:
                    RiBatteryChargeFill = (_b.sent()).RiBatteryChargeFill;
                    return [2 /*return*/, RiBatteryChargeFill];
                case 1607: return [4 /*yield*/, import("react-icons/ri")];
                case 1608:
                    RiBatteryChargeLine = (_b.sent()).RiBatteryChargeLine;
                    return [2 /*return*/, RiBatteryChargeLine];
                case 1609: return [4 /*yield*/, import("react-icons/ri")];
                case 1610:
                    RiBatteryFill = (_b.sent()).RiBatteryFill;
                    return [2 /*return*/, RiBatteryFill];
                case 1611: return [4 /*yield*/, import("react-icons/ri")];
                case 1612:
                    RiBatteryLine = (_b.sent()).RiBatteryLine;
                    return [2 /*return*/, RiBatteryLine];
                case 1613: return [4 /*yield*/, import("react-icons/ri")];
                case 1614:
                    RiBatteryLowFill = (_b.sent()).RiBatteryLowFill;
                    return [2 /*return*/, RiBatteryLowFill];
                case 1615: return [4 /*yield*/, import("react-icons/ri")];
                case 1616:
                    RiBatteryLowLine = (_b.sent()).RiBatteryLowLine;
                    return [2 /*return*/, RiBatteryLowLine];
                case 1617: return [4 /*yield*/, import("react-icons/ri")];
                case 1618:
                    RiBatterySaverFill = (_b.sent()).RiBatterySaverFill;
                    return [2 /*return*/, RiBatterySaverFill];
                case 1619: return [4 /*yield*/, import("react-icons/ri")];
                case 1620:
                    RiBatterySaverLine = (_b.sent()).RiBatterySaverLine;
                    return [2 /*return*/, RiBatterySaverLine];
                case 1621: return [4 /*yield*/, import("react-icons/ri")];
                case 1622:
                    RiBatteryShareFill = (_b.sent()).RiBatteryShareFill;
                    return [2 /*return*/, RiBatteryShareFill];
                case 1623: return [4 /*yield*/, import("react-icons/ri")];
                case 1624:
                    RiBatteryShareLine = (_b.sent()).RiBatteryShareLine;
                    return [2 /*return*/, RiBatteryShareLine];
                case 1625: return [4 /*yield*/, import("react-icons/ri")];
                case 1626:
                    RiBluetoothConnectFill = (_b.sent()).RiBluetoothConnectFill;
                    return [2 /*return*/, RiBluetoothConnectFill];
                case 1627: return [4 /*yield*/, import("react-icons/ri")];
                case 1628:
                    RiBluetoothConnectLine = (_b.sent()).RiBluetoothConnectLine;
                    return [2 /*return*/, RiBluetoothConnectLine];
                case 1629: return [4 /*yield*/, import("react-icons/ri")];
                case 1630:
                    RiBluetoothFill = (_b.sent()).RiBluetoothFill;
                    return [2 /*return*/, RiBluetoothFill];
                case 1631: return [4 /*yield*/, import("react-icons/ri")];
                case 1632:
                    RiBluetoothLine = (_b.sent()).RiBluetoothLine;
                    return [2 /*return*/, RiBluetoothLine];
                case 1633: return [4 /*yield*/, import("react-icons/ri")];
                case 1634:
                    RiCastFill = (_b.sent()).RiCastFill;
                    return [2 /*return*/, RiCastFill];
                case 1635: return [4 /*yield*/, import("react-icons/ri")];
                case 1636:
                    RiCastLine = (_b.sent()).RiCastLine;
                    return [2 /*return*/, RiCastLine];
                case 1637: return [4 /*yield*/, import("react-icons/ri")];
                case 1638:
                    RiCellphoneFill = (_b.sent()).RiCellphoneFill;
                    return [2 /*return*/, RiCellphoneFill];
                case 1639: return [4 /*yield*/, import("react-icons/ri")];
                case 1640:
                    RiCellphoneLine = (_b.sent()).RiCellphoneLine;
                    return [2 /*return*/, RiCellphoneLine];
                case 1641: return [4 /*yield*/, import("react-icons/ri")];
                case 1642:
                    RiComputerFill = (_b.sent()).RiComputerFill;
                    return [2 /*return*/, RiComputerFill];
                case 1643: return [4 /*yield*/, import("react-icons/ri")];
                case 1644:
                    RiComputerLine = (_b.sent()).RiComputerLine;
                    return [2 /*return*/, RiComputerLine];
                case 1645: return [4 /*yield*/, import("react-icons/ri")];
                case 1646:
                    RiCpuFill = (_b.sent()).RiCpuFill;
                    return [2 /*return*/, RiCpuFill];
                case 1647: return [4 /*yield*/, import("react-icons/ri")];
                case 1648:
                    RiCpuLine = (_b.sent()).RiCpuLine;
                    return [2 /*return*/, RiCpuLine];
                case 1649: return [4 /*yield*/, import("react-icons/ri")];
                case 1650:
                    RiDashboard2Fill = (_b.sent()).RiDashboard2Fill;
                    return [2 /*return*/, RiDashboard2Fill];
                case 1651: return [4 /*yield*/, import("react-icons/ri")];
                case 1652:
                    RiDashboard2Line = (_b.sent()).RiDashboard2Line;
                    return [2 /*return*/, RiDashboard2Line];
                case 1653: return [4 /*yield*/, import("react-icons/ri")];
                case 1654:
                    RiDashboard3Fill = (_b.sent()).RiDashboard3Fill;
                    return [2 /*return*/, RiDashboard3Fill];
                case 1655: return [4 /*yield*/, import("react-icons/ri")];
                case 1656:
                    RiDashboard3Line = (_b.sent()).RiDashboard3Line;
                    return [2 /*return*/, RiDashboard3Line];
                case 1657: return [4 /*yield*/, import("react-icons/ri")];
                case 1658:
                    RiDatabase2Fill = (_b.sent()).RiDatabase2Fill;
                    return [2 /*return*/, RiDatabase2Fill];
                case 1659: return [4 /*yield*/, import("react-icons/ri")];
                case 1660:
                    RiDatabase2Line = (_b.sent()).RiDatabase2Line;
                    return [2 /*return*/, RiDatabase2Line];
                case 1661: return [4 /*yield*/, import("react-icons/ri")];
                case 1662:
                    RiDatabaseFill = (_b.sent()).RiDatabaseFill;
                    return [2 /*return*/, RiDatabaseFill];
                case 1663: return [4 /*yield*/, import("react-icons/ri")];
                case 1664:
                    RiDatabaseLine = (_b.sent()).RiDatabaseLine;
                    return [2 /*return*/, RiDatabaseLine];
                case 1665: return [4 /*yield*/, import("react-icons/ri")];
                case 1666:
                    RiDeviceFill = (_b.sent()).RiDeviceFill;
                    return [2 /*return*/, RiDeviceFill];
                case 1667: return [4 /*yield*/, import("react-icons/ri")];
                case 1668:
                    RiDeviceLine = (_b.sent()).RiDeviceLine;
                    return [2 /*return*/, RiDeviceLine];
                case 1669: return [4 /*yield*/, import("react-icons/ri")];
                case 1670:
                    RiDeviceRecoverFill = (_b.sent()).RiDeviceRecoverFill;
                    return [2 /*return*/, RiDeviceRecoverFill];
                case 1671: return [4 /*yield*/, import("react-icons/ri")];
                case 1672:
                    RiDeviceRecoverLine = (_b.sent()).RiDeviceRecoverLine;
                    return [2 /*return*/, RiDeviceRecoverLine];
                case 1673: return [4 /*yield*/, import("react-icons/ri")];
                case 1674:
                    RiDualSim1Fill = (_b.sent()).RiDualSim1Fill;
                    return [2 /*return*/, RiDualSim1Fill];
                case 1675: return [4 /*yield*/, import("react-icons/ri")];
                case 1676:
                    RiDualSim1Line = (_b.sent()).RiDualSim1Line;
                    return [2 /*return*/, RiDualSim1Line];
                case 1677: return [4 /*yield*/, import("react-icons/ri")];
                case 1678:
                    RiDualSim2Fill = (_b.sent()).RiDualSim2Fill;
                    return [2 /*return*/, RiDualSim2Fill];
                case 1679: return [4 /*yield*/, import("react-icons/ri")];
                case 1680:
                    RiDualSim2Line = (_b.sent()).RiDualSim2Line;
                    return [2 /*return*/, RiDualSim2Line];
                case 1681: return [4 /*yield*/, import("react-icons/ri")];
                case 1682:
                    RiFingerprint2Fill = (_b.sent()).RiFingerprint2Fill;
                    return [2 /*return*/, RiFingerprint2Fill];
                case 1683: return [4 /*yield*/, import("react-icons/ri")];
                case 1684:
                    RiFingerprint2Line = (_b.sent()).RiFingerprint2Line;
                    return [2 /*return*/, RiFingerprint2Line];
                case 1685: return [4 /*yield*/, import("react-icons/ri")];
                case 1686:
                    RiFingerprintFill = (_b.sent()).RiFingerprintFill;
                    return [2 /*return*/, RiFingerprintFill];
                case 1687: return [4 /*yield*/, import("react-icons/ri")];
                case 1688:
                    RiFingerprintLine = (_b.sent()).RiFingerprintLine;
                    return [2 /*return*/, RiFingerprintLine];
                case 1689: return [4 /*yield*/, import("react-icons/ri")];
                case 1690:
                    RiGamepadFill = (_b.sent()).RiGamepadFill;
                    return [2 /*return*/, RiGamepadFill];
                case 1691: return [4 /*yield*/, import("react-icons/ri")];
                case 1692:
                    RiGamepadLine = (_b.sent()).RiGamepadLine;
                    return [2 /*return*/, RiGamepadLine];
                case 1693: return [4 /*yield*/, import("react-icons/ri")];
                case 1694:
                    RiGpsFill = (_b.sent()).RiGpsFill;
                    return [2 /*return*/, RiGpsFill];
                case 1695: return [4 /*yield*/, import("react-icons/ri")];
                case 1696:
                    RiGpsLine = (_b.sent()).RiGpsLine;
                    return [2 /*return*/, RiGpsLine];
                case 1697: return [4 /*yield*/, import("react-icons/ri")];
                case 1698:
                    RiGradienterFill = (_b.sent()).RiGradienterFill;
                    return [2 /*return*/, RiGradienterFill];
                case 1699: return [4 /*yield*/, import("react-icons/ri")];
                case 1700:
                    RiGradienterLine = (_b.sent()).RiGradienterLine;
                    return [2 /*return*/, RiGradienterLine];
                case 1701: return [4 /*yield*/, import("react-icons/ri")];
                case 1702:
                    RiHardDrive2Fill = (_b.sent()).RiHardDrive2Fill;
                    return [2 /*return*/, RiHardDrive2Fill];
                case 1703: return [4 /*yield*/, import("react-icons/ri")];
                case 1704:
                    RiHardDrive2Line = (_b.sent()).RiHardDrive2Line;
                    return [2 /*return*/, RiHardDrive2Line];
                case 1705: return [4 /*yield*/, import("react-icons/ri")];
                case 1706:
                    RiHardDrive3Fill = (_b.sent()).RiHardDrive3Fill;
                    return [2 /*return*/, RiHardDrive3Fill];
                case 1707: return [4 /*yield*/, import("react-icons/ri")];
                case 1708:
                    RiHardDrive3Line = (_b.sent()).RiHardDrive3Line;
                    return [2 /*return*/, RiHardDrive3Line];
                case 1709: return [4 /*yield*/, import("react-icons/ri")];
                case 1710:
                    RiHardDriveFill = (_b.sent()).RiHardDriveFill;
                    return [2 /*return*/, RiHardDriveFill];
                case 1711: return [4 /*yield*/, import("react-icons/ri")];
                case 1712:
                    RiHardDriveLine = (_b.sent()).RiHardDriveLine;
                    return [2 /*return*/, RiHardDriveLine];
                case 1713: return [4 /*yield*/, import("react-icons/ri")];
                case 1714:
                    RiHotspotFill = (_b.sent()).RiHotspotFill;
                    return [2 /*return*/, RiHotspotFill];
                case 1715: return [4 /*yield*/, import("react-icons/ri")];
                case 1716:
                    RiHotspotLine = (_b.sent()).RiHotspotLine;
                    return [2 /*return*/, RiHotspotLine];
                case 1717: return [4 /*yield*/, import("react-icons/ri")];
                case 1718:
                    RiInstallFill = (_b.sent()).RiInstallFill;
                    return [2 /*return*/, RiInstallFill];
                case 1719: return [4 /*yield*/, import("react-icons/ri")];
                case 1720:
                    RiInstallLine = (_b.sent()).RiInstallLine;
                    return [2 /*return*/, RiInstallLine];
                case 1721: return [4 /*yield*/, import("react-icons/ri")];
                case 1722:
                    RiInstanceFill = (_b.sent()).RiInstanceFill;
                    return [2 /*return*/, RiInstanceFill];
                case 1723: return [4 /*yield*/, import("react-icons/ri")];
                case 1724:
                    RiInstanceLine = (_b.sent()).RiInstanceLine;
                    return [2 /*return*/, RiInstanceLine];
                case 1725: return [4 /*yield*/, import("react-icons/ri")];
                case 1726:
                    RiKeyboardBoxFill = (_b.sent()).RiKeyboardBoxFill;
                    return [2 /*return*/, RiKeyboardBoxFill];
                case 1727: return [4 /*yield*/, import("react-icons/ri")];
                case 1728:
                    RiKeyboardBoxLine = (_b.sent()).RiKeyboardBoxLine;
                    return [2 /*return*/, RiKeyboardBoxLine];
                case 1729: return [4 /*yield*/, import("react-icons/ri")];
                case 1730:
                    RiKeyboardFill = (_b.sent()).RiKeyboardFill;
                    return [2 /*return*/, RiKeyboardFill];
                case 1731: return [4 /*yield*/, import("react-icons/ri")];
                case 1732:
                    RiKeyboardLine = (_b.sent()).RiKeyboardLine;
                    return [2 /*return*/, RiKeyboardLine];
                case 1733: return [4 /*yield*/, import("react-icons/ri")];
                case 1734:
                    RiMacFill = (_b.sent()).RiMacFill;
                    return [2 /*return*/, RiMacFill];
                case 1735: return [4 /*yield*/, import("react-icons/ri")];
                case 1736:
                    RiMacLine = (_b.sent()).RiMacLine;
                    return [2 /*return*/, RiMacLine];
                case 1737: return [4 /*yield*/, import("react-icons/ri")];
                case 1738:
                    RiMacbookFill = (_b.sent()).RiMacbookFill;
                    return [2 /*return*/, RiMacbookFill];
                case 1739: return [4 /*yield*/, import("react-icons/ri")];
                case 1740:
                    RiMacbookLine = (_b.sent()).RiMacbookLine;
                    return [2 /*return*/, RiMacbookLine];
                case 1741: return [4 /*yield*/, import("react-icons/ri")];
                case 1742:
                    RiMobileDownloadFill = (_b.sent()).RiMobileDownloadFill;
                    return [2 /*return*/, RiMobileDownloadFill];
                case 1743: return [4 /*yield*/, import("react-icons/ri")];
                case 1744:
                    RiMobileDownloadLine = (_b.sent()).RiMobileDownloadLine;
                    return [2 /*return*/, RiMobileDownloadLine];
                case 1745: return [4 /*yield*/, import("react-icons/ri")];
                case 1746:
                    RiMouseFill = (_b.sent()).RiMouseFill;
                    return [2 /*return*/, RiMouseFill];
                case 1747: return [4 /*yield*/, import("react-icons/ri")];
                case 1748:
                    RiMouseLine = (_b.sent()).RiMouseLine;
                    return [2 /*return*/, RiMouseLine];
                case 1749: return [4 /*yield*/, import("react-icons/ri")];
                case 1750:
                    RiPhoneFill = (_b.sent()).RiPhoneFill;
                    return [2 /*return*/, RiPhoneFill];
                case 1751: return [4 /*yield*/, import("react-icons/ri")];
                case 1752:
                    RiPhoneFindFill = (_b.sent()).RiPhoneFindFill;
                    return [2 /*return*/, RiPhoneFindFill];
                case 1753: return [4 /*yield*/, import("react-icons/ri")];
                case 1754:
                    RiPhoneFindLine = (_b.sent()).RiPhoneFindLine;
                    return [2 /*return*/, RiPhoneFindLine];
                case 1755: return [4 /*yield*/, import("react-icons/ri")];
                case 1756:
                    RiPhoneLine = (_b.sent()).RiPhoneLine;
                    return [2 /*return*/, RiPhoneLine];
                case 1757: return [4 /*yield*/, import("react-icons/ri")];
                case 1758:
                    RiPhoneLockFill = (_b.sent()).RiPhoneLockFill;
                    return [2 /*return*/, RiPhoneLockFill];
                case 1759: return [4 /*yield*/, import("react-icons/ri")];
                case 1760:
                    RiPhoneLockLine = (_b.sent()).RiPhoneLockLine;
                    return [2 /*return*/, RiPhoneLockLine];
                case 1761: return [4 /*yield*/, import("react-icons/ri")];
                case 1762:
                    RiQrCodeFill = (_b.sent()).RiQrCodeFill;
                    return [2 /*return*/, RiQrCodeFill];
                case 1763: return [4 /*yield*/, import("react-icons/ri")];
                case 1764:
                    RiQrCodeLine = (_b.sent()).RiQrCodeLine;
                    return [2 /*return*/, RiQrCodeLine];
                case 1765: return [4 /*yield*/, import("react-icons/ri")];
                case 1766:
                    RiQrScan2Fill = (_b.sent()).RiQrScan2Fill;
                    return [2 /*return*/, RiQrScan2Fill];
                case 1767: return [4 /*yield*/, import("react-icons/ri")];
                case 1768:
                    RiQrScan2Line = (_b.sent()).RiQrScan2Line;
                    return [2 /*return*/, RiQrScan2Line];
                case 1769: return [4 /*yield*/, import("react-icons/ri")];
                case 1770:
                    RiQrScanFill = (_b.sent()).RiQrScanFill;
                    return [2 /*return*/, RiQrScanFill];
                case 1771: return [4 /*yield*/, import("react-icons/ri")];
                case 1772:
                    RiQrScanLine = (_b.sent()).RiQrScanLine;
                    return [2 /*return*/, RiQrScanLine];
                case 1773: return [4 /*yield*/, import("react-icons/ri")];
                case 1774:
                    RiRadarFill = (_b.sent()).RiRadarFill;
                    return [2 /*return*/, RiRadarFill];
                case 1775: return [4 /*yield*/, import("react-icons/ri")];
                case 1776:
                    RiRadarLine = (_b.sent()).RiRadarLine;
                    return [2 /*return*/, RiRadarLine];
                case 1777: return [4 /*yield*/, import("react-icons/ri")];
                case 1778:
                    RiRam2Fill = (_b.sent()).RiRam2Fill;
                    return [2 /*return*/, RiRam2Fill];
                case 1779: return [4 /*yield*/, import("react-icons/ri")];
                case 1780:
                    RiRam2Line = (_b.sent()).RiRam2Line;
                    return [2 /*return*/, RiRam2Line];
                case 1781: return [4 /*yield*/, import("react-icons/ri")];
                case 1782:
                    RiRamFill = (_b.sent()).RiRamFill;
                    return [2 /*return*/, RiRamFill];
                case 1783: return [4 /*yield*/, import("react-icons/ri")];
                case 1784:
                    RiRamLine = (_b.sent()).RiRamLine;
                    return [2 /*return*/, RiRamLine];
                case 1785: return [4 /*yield*/, import("react-icons/ri")];
                case 1786:
                    RiRemoteControl2Fill = (_b.sent()).RiRemoteControl2Fill;
                    return [2 /*return*/, RiRemoteControl2Fill];
                case 1787: return [4 /*yield*/, import("react-icons/ri")];
                case 1788:
                    RiRemoteControl2Line = (_b.sent()).RiRemoteControl2Line;
                    return [2 /*return*/, RiRemoteControl2Line];
                case 1789: return [4 /*yield*/, import("react-icons/ri")];
                case 1790:
                    RiRemoteControlFill = (_b.sent()).RiRemoteControlFill;
                    return [2 /*return*/, RiRemoteControlFill];
                case 1791: return [4 /*yield*/, import("react-icons/ri")];
                case 1792:
                    RiRemoteControlLine = (_b.sent()).RiRemoteControlLine;
                    return [2 /*return*/, RiRemoteControlLine];
                case 1793: return [4 /*yield*/, import("react-icons/ri")];
                case 1794:
                    RiRestartFill = (_b.sent()).RiRestartFill;
                    return [2 /*return*/, RiRestartFill];
                case 1795: return [4 /*yield*/, import("react-icons/ri")];
                case 1796:
                    RiRestartLine = (_b.sent()).RiRestartLine;
                    return [2 /*return*/, RiRestartLine];
                case 1797: return [4 /*yield*/, import("react-icons/ri")];
                case 1798:
                    RiRfidFill = (_b.sent()).RiRfidFill;
                    return [2 /*return*/, RiRfidFill];
                case 1799: return [4 /*yield*/, import("react-icons/ri")];
                case 1800:
                    RiRfidLine = (_b.sent()).RiRfidLine;
                    return [2 /*return*/, RiRfidLine];
                case 1801: return [4 /*yield*/, import("react-icons/ri")];
                case 1802:
                    RiRotateLockFill = (_b.sent()).RiRotateLockFill;
                    return [2 /*return*/, RiRotateLockFill];
                case 1803: return [4 /*yield*/, import("react-icons/ri")];
                case 1804:
                    RiRotateLockLine = (_b.sent()).RiRotateLockLine;
                    return [2 /*return*/, RiRotateLockLine];
                case 1805: return [4 /*yield*/, import("react-icons/ri")];
                case 1806:
                    RiRouterFill = (_b.sent()).RiRouterFill;
                    return [2 /*return*/, RiRouterFill];
                case 1807: return [4 /*yield*/, import("react-icons/ri")];
                case 1808:
                    RiRouterLine = (_b.sent()).RiRouterLine;
                    return [2 /*return*/, RiRouterLine];
                case 1809: return [4 /*yield*/, import("react-icons/ri")];
                case 1810:
                    RiRssFill = (_b.sent()).RiRssFill;
                    return [2 /*return*/, RiRssFill];
                case 1811: return [4 /*yield*/, import("react-icons/ri")];
                case 1812:
                    RiRssLine = (_b.sent()).RiRssLine;
                    return [2 /*return*/, RiRssLine];
                case 1813: return [4 /*yield*/, import("react-icons/ri")];
                case 1814:
                    RiSave2Fill = (_b.sent()).RiSave2Fill;
                    return [2 /*return*/, RiSave2Fill];
                case 1815: return [4 /*yield*/, import("react-icons/ri")];
                case 1816:
                    RiSave2Line = (_b.sent()).RiSave2Line;
                    return [2 /*return*/, RiSave2Line];
                case 1817: return [4 /*yield*/, import("react-icons/ri")];
                case 1818:
                    RiSave3Fill = (_b.sent()).RiSave3Fill;
                    return [2 /*return*/, RiSave3Fill];
                case 1819: return [4 /*yield*/, import("react-icons/ri")];
                case 1820:
                    RiSave3Line = (_b.sent()).RiSave3Line;
                    return [2 /*return*/, RiSave3Line];
                case 1821: return [4 /*yield*/, import("react-icons/ri")];
                case 1822:
                    RiSaveFill = (_b.sent()).RiSaveFill;
                    return [2 /*return*/, RiSaveFill];
                case 1823: return [4 /*yield*/, import("react-icons/ri")];
                case 1824:
                    RiSaveLine = (_b.sent()).RiSaveLine;
                    return [2 /*return*/, RiSaveLine];
                case 1825: return [4 /*yield*/, import("react-icons/ri")];
                case 1826:
                    RiScan2Fill = (_b.sent()).RiScan2Fill;
                    return [2 /*return*/, RiScan2Fill];
                case 1827: return [4 /*yield*/, import("react-icons/ri")];
                case 1828:
                    RiScan2Line = (_b.sent()).RiScan2Line;
                    return [2 /*return*/, RiScan2Line];
                case 1829: return [4 /*yield*/, import("react-icons/ri")];
                case 1830:
                    RiScanFill = (_b.sent()).RiScanFill;
                    return [2 /*return*/, RiScanFill];
                case 1831: return [4 /*yield*/, import("react-icons/ri")];
                case 1832:
                    RiScanLine = (_b.sent()).RiScanLine;
                    return [2 /*return*/, RiScanLine];
                case 1833: return [4 /*yield*/, import("react-icons/ri")];
                case 1834:
                    RiSdCardFill = (_b.sent()).RiSdCardFill;
                    return [2 /*return*/, RiSdCardFill];
                case 1835: return [4 /*yield*/, import("react-icons/ri")];
                case 1836:
                    RiSdCardLine = (_b.sent()).RiSdCardLine;
                    return [2 /*return*/, RiSdCardLine];
                case 1837: return [4 /*yield*/, import("react-icons/ri")];
                case 1838:
                    RiSdCardMiniFill = (_b.sent()).RiSdCardMiniFill;
                    return [2 /*return*/, RiSdCardMiniFill];
                case 1839: return [4 /*yield*/, import("react-icons/ri")];
                case 1840:
                    RiSdCardMiniLine = (_b.sent()).RiSdCardMiniLine;
                    return [2 /*return*/, RiSdCardMiniLine];
                case 1841: return [4 /*yield*/, import("react-icons/ri")];
                case 1842:
                    RiSensorFill = (_b.sent()).RiSensorFill;
                    return [2 /*return*/, RiSensorFill];
                case 1843: return [4 /*yield*/, import("react-icons/ri")];
                case 1844:
                    RiSensorLine = (_b.sent()).RiSensorLine;
                    return [2 /*return*/, RiSensorLine];
                case 1845: return [4 /*yield*/, import("react-icons/ri")];
                case 1846:
                    RiServerFill = (_b.sent()).RiServerFill;
                    return [2 /*return*/, RiServerFill];
                case 1847: return [4 /*yield*/, import("react-icons/ri")];
                case 1848:
                    RiServerLine = (_b.sent()).RiServerLine;
                    return [2 /*return*/, RiServerLine];
                case 1849: return [4 /*yield*/, import("react-icons/ri")];
                case 1850:
                    RiShutDownFill = (_b.sent()).RiShutDownFill;
                    return [2 /*return*/, RiShutDownFill];
                case 1851: return [4 /*yield*/, import("react-icons/ri")];
                case 1852:
                    RiShutDownLine = (_b.sent()).RiShutDownLine;
                    return [2 /*return*/, RiShutDownLine];
                case 1853: return [4 /*yield*/, import("react-icons/ri")];
                case 1854:
                    RiSignalWifi1Fill = (_b.sent()).RiSignalWifi1Fill;
                    return [2 /*return*/, RiSignalWifi1Fill];
                case 1855: return [4 /*yield*/, import("react-icons/ri")];
                case 1856:
                    RiSignalWifi1Line = (_b.sent()).RiSignalWifi1Line;
                    return [2 /*return*/, RiSignalWifi1Line];
                case 1857: return [4 /*yield*/, import("react-icons/ri")];
                case 1858:
                    RiSignalWifi2Fill = (_b.sent()).RiSignalWifi2Fill;
                    return [2 /*return*/, RiSignalWifi2Fill];
                case 1859: return [4 /*yield*/, import("react-icons/ri")];
                case 1860:
                    RiSignalWifi2Line = (_b.sent()).RiSignalWifi2Line;
                    return [2 /*return*/, RiSignalWifi2Line];
                case 1861: return [4 /*yield*/, import("react-icons/ri")];
                case 1862:
                    RiSignalWifi3Fill = (_b.sent()).RiSignalWifi3Fill;
                    return [2 /*return*/, RiSignalWifi3Fill];
                case 1863: return [4 /*yield*/, import("react-icons/ri")];
                case 1864:
                    RiSignalWifi3Line = (_b.sent()).RiSignalWifi3Line;
                    return [2 /*return*/, RiSignalWifi3Line];
                case 1865: return [4 /*yield*/, import("react-icons/ri")];
                case 1866:
                    RiSignalWifiErrorFill = (_b.sent()).RiSignalWifiErrorFill;
                    return [2 /*return*/, RiSignalWifiErrorFill];
                case 1867: return [4 /*yield*/, import("react-icons/ri")];
                case 1868:
                    RiSignalWifiErrorLine = (_b.sent()).RiSignalWifiErrorLine;
                    return [2 /*return*/, RiSignalWifiErrorLine];
                case 1869: return [4 /*yield*/, import("react-icons/ri")];
                case 1870:
                    RiSignalWifiFill = (_b.sent()).RiSignalWifiFill;
                    return [2 /*return*/, RiSignalWifiFill];
                case 1871: return [4 /*yield*/, import("react-icons/ri")];
                case 1872:
                    RiSignalWifiLine = (_b.sent()).RiSignalWifiLine;
                    return [2 /*return*/, RiSignalWifiLine];
                case 1873: return [4 /*yield*/, import("react-icons/ri")];
                case 1874:
                    RiSignalWifiOffFill = (_b.sent()).RiSignalWifiOffFill;
                    return [2 /*return*/, RiSignalWifiOffFill];
                case 1875: return [4 /*yield*/, import("react-icons/ri")];
                case 1876:
                    RiSignalWifiOffLine = (_b.sent()).RiSignalWifiOffLine;
                    return [2 /*return*/, RiSignalWifiOffLine];
                case 1877: return [4 /*yield*/, import("react-icons/ri")];
                case 1878:
                    RiSimCard2Fill = (_b.sent()).RiSimCard2Fill;
                    return [2 /*return*/, RiSimCard2Fill];
                case 1879: return [4 /*yield*/, import("react-icons/ri")];
                case 1880:
                    RiSimCard2Line = (_b.sent()).RiSimCard2Line;
                    return [2 /*return*/, RiSimCard2Line];
                case 1881: return [4 /*yield*/, import("react-icons/ri")];
                case 1882:
                    RiSimCardFill = (_b.sent()).RiSimCardFill;
                    return [2 /*return*/, RiSimCardFill];
                case 1883: return [4 /*yield*/, import("react-icons/ri")];
                case 1884:
                    RiSimCardLine = (_b.sent()).RiSimCardLine;
                    return [2 /*return*/, RiSimCardLine];
                case 1885: return [4 /*yield*/, import("react-icons/ri")];
                case 1886:
                    RiSmartphoneFill = (_b.sent()).RiSmartphoneFill;
                    return [2 /*return*/, RiSmartphoneFill];
                case 1887: return [4 /*yield*/, import("react-icons/ri")];
                case 1888:
                    RiSmartphoneLine = (_b.sent()).RiSmartphoneLine;
                    return [2 /*return*/, RiSmartphoneLine];
                case 1889: return [4 /*yield*/, import("react-icons/ri")];
                case 1890:
                    RiTabletFill = (_b.sent()).RiTabletFill;
                    return [2 /*return*/, RiTabletFill];
                case 1891: return [4 /*yield*/, import("react-icons/ri")];
                case 1892:
                    RiTabletLine = (_b.sent()).RiTabletLine;
                    return [2 /*return*/, RiTabletLine];
                case 1893: return [4 /*yield*/, import("react-icons/ri")];
                case 1894:
                    RiTv2Fill = (_b.sent()).RiTv2Fill;
                    return [2 /*return*/, RiTv2Fill];
                case 1895: return [4 /*yield*/, import("react-icons/ri")];
                case 1896:
                    RiTv2Line = (_b.sent()).RiTv2Line;
                    return [2 /*return*/, RiTv2Line];
                case 1897: return [4 /*yield*/, import("react-icons/ri")];
                case 1898:
                    RiTvFill = (_b.sent()).RiTvFill;
                    return [2 /*return*/, RiTvFill];
                case 1899: return [4 /*yield*/, import("react-icons/ri")];
                case 1900:
                    RiTvLine = (_b.sent()).RiTvLine;
                    return [2 /*return*/, RiTvLine];
                case 1901: return [4 /*yield*/, import("react-icons/ri")];
                case 1902:
                    RiUDiskFill = (_b.sent()).RiUDiskFill;
                    return [2 /*return*/, RiUDiskFill];
                case 1903: return [4 /*yield*/, import("react-icons/ri")];
                case 1904:
                    RiUDiskLine = (_b.sent()).RiUDiskLine;
                    return [2 /*return*/, RiUDiskLine];
                case 1905: return [4 /*yield*/, import("react-icons/ri")];
                case 1906:
                    RiUninstallFill = (_b.sent()).RiUninstallFill;
                    return [2 /*return*/, RiUninstallFill];
                case 1907: return [4 /*yield*/, import("react-icons/ri")];
                case 1908:
                    RiUninstallLine = (_b.sent()).RiUninstallLine;
                    return [2 /*return*/, RiUninstallLine];
                case 1909: return [4 /*yield*/, import("react-icons/ri")];
                case 1910:
                    RiUsbFill = (_b.sent()).RiUsbFill;
                    return [2 /*return*/, RiUsbFill];
                case 1911: return [4 /*yield*/, import("react-icons/ri")];
                case 1912:
                    RiUsbLine = (_b.sent()).RiUsbLine;
                    return [2 /*return*/, RiUsbLine];
                case 1913: return [4 /*yield*/, import("react-icons/ri")];
                case 1914:
                    RiWifiFill = (_b.sent()).RiWifiFill;
                    return [2 /*return*/, RiWifiFill];
                case 1915: return [4 /*yield*/, import("react-icons/ri")];
                case 1916:
                    RiWifiLine = (_b.sent()).RiWifiLine;
                    return [2 /*return*/, RiWifiLine];
                case 1917: return [4 /*yield*/, import("react-icons/ri")];
                case 1918:
                    RiWifiOffFill = (_b.sent()).RiWifiOffFill;
                    return [2 /*return*/, RiWifiOffFill];
                case 1919: return [4 /*yield*/, import("react-icons/ri")];
                case 1920:
                    RiWifiOffLine = (_b.sent()).RiWifiOffLine;
                    return [2 /*return*/, RiWifiOffLine];
                case 1921: return [4 /*yield*/, import("react-icons/ri")];
                case 1922:
                    RiWirelessChargingFill = (_b.sent()).RiWirelessChargingFill;
                    return [2 /*return*/, RiWirelessChargingFill];
                case 1923: return [4 /*yield*/, import("react-icons/ri")];
                case 1924:
                    RiWirelessChargingLine = (_b.sent()).RiWirelessChargingLine;
                    return [2 /*return*/, RiWirelessChargingLine];
                case 1925: return [4 /*yield*/, import("react-icons/ri")];
                case 1926:
                    RiArticleFill = (_b.sent()).RiArticleFill;
                    return [2 /*return*/, RiArticleFill];
                case 1927: return [4 /*yield*/, import("react-icons/ri")];
                case 1928:
                    RiArticleLine = (_b.sent()).RiArticleLine;
                    return [2 /*return*/, RiArticleLine];
                case 1929: return [4 /*yield*/, import("react-icons/ri")];
                case 1930:
                    RiBillFill = (_b.sent()).RiBillFill;
                    return [2 /*return*/, RiBillFill];
                case 1931: return [4 /*yield*/, import("react-icons/ri")];
                case 1932:
                    RiBillLine = (_b.sent()).RiBillLine;
                    return [2 /*return*/, RiBillLine];
                case 1933: return [4 /*yield*/, import("react-icons/ri")];
                case 1934:
                    RiBook2Fill = (_b.sent()).RiBook2Fill;
                    return [2 /*return*/, RiBook2Fill];
                case 1935: return [4 /*yield*/, import("react-icons/ri")];
                case 1936:
                    RiBook2Line = (_b.sent()).RiBook2Line;
                    return [2 /*return*/, RiBook2Line];
                case 1937: return [4 /*yield*/, import("react-icons/ri")];
                case 1938:
                    RiBook3Fill = (_b.sent()).RiBook3Fill;
                    return [2 /*return*/, RiBook3Fill];
                case 1939: return [4 /*yield*/, import("react-icons/ri")];
                case 1940:
                    RiBook3Line = (_b.sent()).RiBook3Line;
                    return [2 /*return*/, RiBook3Line];
                case 1941: return [4 /*yield*/, import("react-icons/ri")];
                case 1942:
                    RiBookFill = (_b.sent()).RiBookFill;
                    return [2 /*return*/, RiBookFill];
                case 1943: return [4 /*yield*/, import("react-icons/ri")];
                case 1944:
                    RiBookLine = (_b.sent()).RiBookLine;
                    return [2 /*return*/, RiBookLine];
                case 1945: return [4 /*yield*/, import("react-icons/ri")];
                case 1946:
                    RiBookMarkedFill = (_b.sent()).RiBookMarkedFill;
                    return [2 /*return*/, RiBookMarkedFill];
                case 1947: return [4 /*yield*/, import("react-icons/ri")];
                case 1948:
                    RiBookMarkedLine = (_b.sent()).RiBookMarkedLine;
                    return [2 /*return*/, RiBookMarkedLine];
                case 1949: return [4 /*yield*/, import("react-icons/ri")];
                case 1950:
                    RiBookOpenFill = (_b.sent()).RiBookOpenFill;
                    return [2 /*return*/, RiBookOpenFill];
                case 1951: return [4 /*yield*/, import("react-icons/ri")];
                case 1952:
                    RiBookOpenLine = (_b.sent()).RiBookOpenLine;
                    return [2 /*return*/, RiBookOpenLine];
                case 1953: return [4 /*yield*/, import("react-icons/ri")];
                case 1954:
                    RiBookReadFill = (_b.sent()).RiBookReadFill;
                    return [2 /*return*/, RiBookReadFill];
                case 1955: return [4 /*yield*/, import("react-icons/ri")];
                case 1956:
                    RiBookReadLine = (_b.sent()).RiBookReadLine;
                    return [2 /*return*/, RiBookReadLine];
                case 1957: return [4 /*yield*/, import("react-icons/ri")];
                case 1958:
                    RiBookletFill = (_b.sent()).RiBookletFill;
                    return [2 /*return*/, RiBookletFill];
                case 1959: return [4 /*yield*/, import("react-icons/ri")];
                case 1960:
                    RiBookletLine = (_b.sent()).RiBookletLine;
                    return [2 /*return*/, RiBookletLine];
                case 1961: return [4 /*yield*/, import("react-icons/ri")];
                case 1962:
                    RiClipboardFill = (_b.sent()).RiClipboardFill;
                    return [2 /*return*/, RiClipboardFill];
                case 1963: return [4 /*yield*/, import("react-icons/ri")];
                case 1964:
                    RiClipboardLine = (_b.sent()).RiClipboardLine;
                    return [2 /*return*/, RiClipboardLine];
                case 1965: return [4 /*yield*/, import("react-icons/ri")];
                case 1966:
                    RiContactsBook2Fill = (_b.sent()).RiContactsBook2Fill;
                    return [2 /*return*/, RiContactsBook2Fill];
                case 1967: return [4 /*yield*/, import("react-icons/ri")];
                case 1968:
                    RiContactsBook2Line = (_b.sent()).RiContactsBook2Line;
                    return [2 /*return*/, RiContactsBook2Line];
                case 1969: return [4 /*yield*/, import("react-icons/ri")];
                case 1970:
                    RiContactsBook3Fill = (_b.sent()).RiContactsBook3Fill;
                    return [2 /*return*/, RiContactsBook3Fill];
                case 1971: return [4 /*yield*/, import("react-icons/ri")];
                case 1972:
                    RiContactsBook3Line = (_b.sent()).RiContactsBook3Line;
                    return [2 /*return*/, RiContactsBook3Line];
                case 1973: return [4 /*yield*/, import("react-icons/ri")];
                case 1974:
                    RiContactsBookFill = (_b.sent()).RiContactsBookFill;
                    return [2 /*return*/, RiContactsBookFill];
                case 1975: return [4 /*yield*/, import("react-icons/ri")];
                case 1976:
                    RiContactsBookLine = (_b.sent()).RiContactsBookLine;
                    return [2 /*return*/, RiContactsBookLine];
                case 1977: return [4 /*yield*/, import("react-icons/ri")];
                case 1978:
                    RiContactsBookUploadFill = (_b.sent()).RiContactsBookUploadFill;
                    return [2 /*return*/, RiContactsBookUploadFill];
                case 1979: return [4 /*yield*/, import("react-icons/ri")];
                case 1980:
                    RiContactsBookUploadLine = (_b.sent()).RiContactsBookUploadLine;
                    return [2 /*return*/, RiContactsBookUploadLine];
                case 1981: return [4 /*yield*/, import("react-icons/ri")];
                case 1982:
                    RiContractFill = (_b.sent()).RiContractFill;
                    return [2 /*return*/, RiContractFill];
                case 1983: return [4 /*yield*/, import("react-icons/ri")];
                case 1984:
                    RiContractLine = (_b.sent()).RiContractLine;
                    return [2 /*return*/, RiContractLine];
                case 1985: return [4 /*yield*/, import("react-icons/ri")];
                case 1986:
                    RiDraftFill = (_b.sent()).RiDraftFill;
                    return [2 /*return*/, RiDraftFill];
                case 1987: return [4 /*yield*/, import("react-icons/ri")];
                case 1988:
                    RiDraftLine = (_b.sent()).RiDraftLine;
                    return [2 /*return*/, RiDraftLine];
                case 1989: return [4 /*yield*/, import("react-icons/ri")];
                case 1990:
                    RiFile2Fill = (_b.sent()).RiFile2Fill;
                    return [2 /*return*/, RiFile2Fill];
                case 1991: return [4 /*yield*/, import("react-icons/ri")];
                case 1992:
                    RiFile2Line = (_b.sent()).RiFile2Line;
                    return [2 /*return*/, RiFile2Line];
                case 1993: return [4 /*yield*/, import("react-icons/ri")];
                case 1994:
                    RiFile3Fill = (_b.sent()).RiFile3Fill;
                    return [2 /*return*/, RiFile3Fill];
                case 1995: return [4 /*yield*/, import("react-icons/ri")];
                case 1996:
                    RiFile3Line = (_b.sent()).RiFile3Line;
                    return [2 /*return*/, RiFile3Line];
                case 1997: return [4 /*yield*/, import("react-icons/ri")];
                case 1998:
                    RiFile4Fill = (_b.sent()).RiFile4Fill;
                    return [2 /*return*/, RiFile4Fill];
                case 1999: return [4 /*yield*/, import("react-icons/ri")];
                case 2000:
                    RiFile4Line = (_b.sent()).RiFile4Line;
                    return [2 /*return*/, RiFile4Line];
                case 2001: return [2 /*return*/];
            }
        });
    });
}
