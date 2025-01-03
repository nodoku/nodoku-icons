import type {IconType} from "react-icons";

import {
    TbAccessibleFilled,
    TbAdCircleFilled,
    TbAdFilled,
    TbAdjustmentsFilled,
    TbAffiliateFilled,
    TbAlarmMinusFilled,
    TbAlarmPlusFilled,
    TbAlarmSnoozeFilled,
    TbAlarmFilled,
    TbAlertCircleFilled,
    TbAlertHexagonFilled,
    TbAlertOctagonFilled,
    TbAlertSquareRoundedFilled,
    TbAlertSquareFilled,
    TbAlertTriangleFilled,
    TbAlienFilled,
    TbAlignBoxBottomCenterFilled,
    TbAlignBoxBottomLeftFilled,
    TbAlignBoxBottomRightFilled,
    TbAlignBoxCenterMiddleFilled,
    TbAlignBoxLeftBottomFilled,
    TbAlignBoxLeftMiddleFilled,
    TbAlignBoxLeftTopFilled,
    TbAlignBoxRightBottomFilled,
    TbAlignBoxRightMiddleFilled,
    TbAlignBoxRightTopFilled,
    TbAlignBoxTopCenterFilled,
    TbAlignBoxTopLeftFilled,
    TbAlignBoxTopRightFilled,
    TbAnalyzeFilled,
    TbAppWindowFilled,
    TbAppleFilled,
    TbAppsFilled,
    TbArchiveFilled,
    TbArrowAutofitContentFilled,
    TbArrowBadgeDownFilled,
    TbArrowBadgeLeftFilled,
    TbArrowBadgeRightFilled,
    TbArrowBadgeUpFilled,
    TbArrowBigDownLineFilled,
    TbArrowBigDownLinesFilled,
    TbArrowBigDownFilled,
    TbArrowBigLeftLineFilled,
    TbArrowBigLeftLinesFilled,
    TbArrowBigLeftFilled,
    TbArrowBigRightLineFilled,
    TbArrowBigRightLinesFilled,
    TbArrowBigRightFilled,
    TbArrowBigUpLineFilled,
    TbArrowBigUpLinesFilled,
    TbArrowBigUpFilled,
    TbArrowDownCircleFilled,
    TbArrowDownRhombusFilled,
    TbArrowDownSquareFilled,
    TbArrowGuideFilled,
    TbArrowLeftCircleFilled,
    TbArrowLeftRhombusFilled,
    TbArrowLeftSquareFilled,
    TbArrowMoveDownFilled,
    TbArrowMoveLeftFilled,
    TbArrowMoveRightFilled,
    TbArrowMoveUpFilled,
    TbArrowRightCircleFilled,
    TbArrowRightRhombusFilled,
    TbArrowRightSquareFilled,
    TbArrowUpCircleFilled,
    TbArrowUpRhombusFilled,
    TbArrowUpSquareFilled,
    TbArtboardFilled,
    TbArticleFilled,
    TbAspectRatioFilled,
    TbAssemblyFilled,
    TbAssetFilled,
    TbAtom2Filled,
    TbAutomaticGearboxFilled,
    TbAwardFilled,
    TbBabyCarriageFilled,
    TbBackspaceFilled,
    TbBadge3DFilled,
    TbBadge4KFilled,
    TbBadge8KFilled,
    TbBadgeAdFilled,
    TbBadgeArFilled,
    TbBadgeCcFilled,
    TbBadgeHdFilled,
    TbBadgeSdFilled,
    TbBadgeTmFilled,
    TbBadgeVoFilled,
    TbBadgeVrFilled,
    TbBadgeWcFilled,
    TbBadgeFilled,
    TbBadgesFilled,
    TbBalloonFilled,
    TbBallpenFilled,
    TbBandageFilled,
    TbBarbellFilled,
    TbBarrierBlockFilled,
    TbBasketFilled,
    TbBathFilled,
    TbBattery1Filled,
    TbBattery2Filled,
    TbBattery3Filled,
    TbBattery4Filled,
    TbBatteryAutomotiveFilled,
    TbBatteryVertical1Filled,
    TbBatteryVertical2Filled,
    TbBatteryVertical3Filled,
    TbBatteryVertical4Filled,
    TbBatteryVerticalFilled,
    TbBatteryFilled,
    TbBedFlatFilled,
    TbBedFilled,
    TbBeerFilled,
    TbBellMinusFilled,
    TbBellPlusFilled,
    TbBellRinging2Filled,
    TbBellRingingFilled,
    TbBellXFilled,
    TbBellZFilled,
    TbBellFilled,
    TbBikeFilled,
    TbBinaryTree2Filled,
    TbBinaryTreeFilled,
    TbBinocularsFilled,
    TbBiohazardFilled,
    TbBladeFilled,
    TbBlenderFilled,
    TbBlobFilled,
    TbBoltFilled,
    TbBombFilled,
    TbBoneFilled,
    TbBongFilled,
    TbBookFilled,
    TbBookmarkFilled,
    TbBookmarksFilled,
    TbBoomFilled,
    TbBottleFilled,
    TbBounceLeftFilled,
    TbBounceRightFilled,
    TbBowFilled,
    TbBowlChopsticksFilled,
    TbBowlSpoonFilled,
    TbBowlFilled,
    TbBoxAlignBottomLeftFilled,
    TbBoxAlignBottomRightFilled,
    TbBoxAlignBottomFilled,
    TbBoxAlignLeftFilled,
    TbBoxAlignRightFilled,
    TbBoxAlignTopLeftFilled,
    TbBoxAlignTopRightFilled,
    TbBoxAlignTopFilled,
    TbBoxMultipleFilled,
    TbBrandAngularFilled,
    TbBrandAppleFilled,
    TbBrandBitbucketFilled,
    TbBrandDiscordFilled,
    TbBrandDribbbleFilled,
    TbBrandFacebookFilled,
    TbBrandGithubFilled,
    TbBrandGoogleFilled,
    TbBrandInstagramFilled,
    TbBrandKickFilled,
    TbBrandLinkedinFilled,
    TbBrandMessengerFilled,
    TbBrandOpenSourceFilled,
    TbBrandOperaFilled,
    TbBrandPatreonFilled,
    TbBrandPaypalFilled,
    TbBrandPinterestFilled,
    TbBrandSketchFilled,
    TbBrandSnapchatFilled,
    TbBrandSpotifyFilled,
    TbBrandSteamFilled,
    TbBrandStripeFilled,
    TbBrandTablerFilled,
    TbBrandTiktokFilled,
    TbBrandTinderFilled,
    TbBrandTumblrFilled,
    TbBrandTwitterFilled,
    TbBrandVercelFilled,
    TbBrandVimeoFilled,
    TbBrandWeiboFilled,
    TbBrandWhatsappFilled,
    TbBrandWindowsFilled,
    TbBrandXFilled,
    TbBrandYoutubeFilled,
    TbBreadFilled,
    TbBriefcase2Filled,
    TbBriefcaseFilled,
    TbBrightnessAutoFilled,
    TbBrightnessDownFilled,
    TbBrightnessUpFilled,
    TbBrightnessFilled,
    TbBubbleTextFilled,
    TbBubbleFilled,
    TbBugFilled,
    TbBuildingBroadcastTowerFilled,
    TbBulbFilled,
    TbButterflyFilled,
    TbCactusFilled,
    TbCalculatorFilled,
    TbCalendarEventFilled,
    TbCalendarMonthFilled,
    TbCalendarWeekFilled,
    TbCalendarFilled,
    TbCameraFilled,
    TbCampfireFilled,
    TbCandleFilled,
    TbCannabisFilled,
    TbCapsuleHorizontalFilled,
    TbCapsuleFilled,
    TbCaptureFilled,
    TbCar4WdFilled,
    TbCarFanFilled,
    TbCarSuvFilled,
    TbCarFilled,
    TbCarambolaFilled,
    TbCardboardsFilled,
    TbCardsFilled,
    TbCaretDownFilled,
    TbCaretLeftRightFilled,
    TbCaretLeftFilled,
    TbCaretRightFilled,
    TbCaretUpDownFilled,
    TbCaretUpFilled,
    TbCarouselHorizontalFilled,
    TbCarouselVerticalFilled,
    TbCashBanknoteFilled,
    TbCategoryFilled,
    TbChargingPileFilled,
    TbChartAreaLineFilled,
    TbChartAreaFilled,
    TbChartBubbleFilled,
    TbChartCandleFilled,
    TbChartDonutFilled,
    TbChartDotsFilled,
    TbChartGridDotsFilled,
    TbChartPieFilled,
    TbCherryFilled,
    TbChessBishopFilled,
    TbChessKingFilled,
    TbChessKnightFilled,
    TbChessQueenFilled,
    TbChessRookFilled,
    TbChessFilled,
    TbChristmasTreeFilled,
    TbCircleArrowDownLeftFilled,
    TbCircleArrowDownRightFilled,
    TbCircleArrowDownFilled,
    TbCircleArrowLeftFilled,
    TbCircleArrowRightFilled,
    TbCircleArrowUpLeftFilled,
    TbCircleArrowUpRightFilled,
    TbCircleArrowUpFilled,
    TbCircleCheckFilled,
    TbCircleDotFilled,
    TbCircleKeyFilled,
    TbCircleLetterAFilled,
    TbCircleLetterBFilled,
    TbCircleLetterCFilled,
    TbCircleLetterDFilled,
    TbCircleLetterEFilled,
    TbCircleLetterFFilled,
    TbCircleLetterGFilled,
    TbCircleLetterHFilled,
    TbCircleLetterIFilled,
    TbCircleLetterJFilled,
    TbCircleLetterKFilled,
    TbCircleLetterLFilled,
    TbCircleLetterMFilled,
    TbCircleLetterNFilled,
    TbCircleLetterOFilled,
    TbCircleLetterPFilled,
    TbCircleLetterQFilled,
    TbCircleLetterRFilled,
    TbCircleLetterSFilled,
    TbCircleLetterTFilled,
    TbCircleLetterUFilled,
    TbCircleLetterVFilled,
    TbCircleLetterWFilled,
    TbCircleLetterXFilled,
    TbCircleLetterYFilled,
    TbCircleLetterZFilled,
    TbCircleNumber0Filled,
    TbCircleNumber1Filled,
    TbCircleNumber2Filled,
    TbCircleNumber3Filled,
    TbCircleNumber4Filled,
    TbCircleNumber5Filled,
    TbCircleNumber6Filled,
    TbCircleNumber7Filled,
    TbCircleNumber8Filled,
    TbCircleNumber9Filled,
    TbCirclePercentageFilled,
    TbCirclePlusFilled,
    TbCircleRectangleFilled,
    TbCircleXFilled,
    TbCircleFilled,
    TbCirclesFilled,
    TbClockHour1Filled,
    TbClockHour10Filled,
    TbClockHour11Filled,
    TbClockHour12Filled,
    TbClockHour2Filled,
    TbClockHour3Filled,
    TbClockHour4Filled,
    TbClockHour5Filled,
    TbClockHour6Filled,
    TbClockHour7Filled,
    TbClockHour8Filled,
    TbClockHour9Filled,
    TbClockFilled,
    TbCloudFilled,
    TbCloverFilled,
    TbClubsFilled,
    TbCodeCircle2Filled,
    TbCodeCircleFilled,
    TbCoinBitcoinFilled,
    TbCoinEuroFilled,
    TbCoinMoneroFilled,
    TbCoinPoundFilled,
    TbCoinRupeeFilled,
    TbCoinTakaFilled,
    TbCoinYenFilled,
    TbCoinYuanFilled,
    TbCoinFilled,
    TbCompassFilled,
    TbCone2Filled,
    TbConeFilled,
    TbContrast2Filled,
    TbContrastFilled,
    TbCookieManFilled,
    TbCookieFilled,
    TbCopyCheckFilled,
    TbCopyMinusFilled,
    TbCopyPlusFilled,
    TbCopyXFilled,
    TbCopyleftFilled,
    TbCopyrightFilled,
    TbCreditCardFilled,
    TbCrop11Filled,
    TbCrop169Filled,
    TbCrop32Filled,
    TbCrop54Filled,
    TbCrop75Filled,
    TbCropLandscapeFilled,
    TbCropPortraitFilled,
    TbCrossFilled,
    TbDashboardFilled,
    TbDeviceCctvFilled,
    TbDeviceDesktopFilled,
    TbDeviceGamepad3Filled,
    TbDeviceHeartMonitorFilled,
    TbDeviceImacFilled,
    TbDeviceIpadFilled,
    TbDeviceMobileFilled,
    TbDeviceRemoteFilled,
    TbDeviceSpeakerFilled,
    TbDeviceTabletFilled,
    TbDeviceTvOldFilled,
    TbDeviceTvFilled,
    TbDeviceUnknownFilled,
    TbDeviceUsbFilled,
    TbDeviceVisionProFilled,
    TbDeviceWatchFilled,
    TbDialpadFilled,
    TbDiamondFilled,
    TbDiamondsFilled,
    TbDice1Filled,
    TbDice2Filled,
    TbDice3Filled,
    TbDice4Filled,
    TbDice5Filled,
    TbDice6Filled,
    TbDiceFilled,
    TbDirectionArrowsFilled,
    TbDirectionSignFilled,
    TbDirectionsFilled,
    TbDiscFilled,
    TbDiscountFilled,
    TbDropletHalf2Filled,
    TbDropletHalfFilled,
    TbDropletFilled,
    TbDropletsFilled,
    TbEggCrackedFilled,
    TbEggFilled,
    TbElevatorFilled,
    TbExclamationCircleFilled,
    TbEyeFilled,
    TbEyeglassFilled,
    TbFaviconFilled,
    TbFeatherFilled,
    TbFileXFilled,
    TbFileFilled,
    TbFilterFilled,
    TbFiltersFilled,
    TbFlag2Filled,
    TbFlag3Filled,
    TbFlagFilled,
    TbFlameFilled,
    TbFlareFilled,
    TbFlask2Filled,
    TbFlaskFilled,
    TbFlowerFilled,
    TbFolderFilled,
    TbFoldersFilled,
    TbForbid2Filled,
    TbForbidFilled,
    TbFountainFilled,
    TbFunctionFilled,
    TbGardenCartFilled,
    TbGaugeFilled,
    TbGhost2Filled,
    TbGhost3Filled,
    TbGhostFilled,
    TbGiftCardFilled,
    TbGiftFilled,
    TbGlassFullFilled,
    TbGlassFilled,
    TbGlobeFilled,
    TbGolfFilled,
    TbGpsFilled,
    TbGraphFilled,
    TbGridPatternFilled,
    TbGuitarPickFilled,
    TbHanger2Filled,
    TbHeadphonesFilled,
    TbHeartFilled,
    TbHelicopterLandingFilled,
    TbHelpCircleFilled,
    TbHelpHexagonFilled,
    TbHelpOctagonFilled,
    TbHelpSquareRoundedFilled,
    TbHelpSquareFilled,
    TbHelpTriangleFilled,
    TbHexagonLetterAFilled,
    TbHexagonLetterBFilled,
    TbHexagonLetterCFilled,
    TbHexagonLetterDFilled,
    TbHexagonLetterEFilled,
    TbHexagonLetterFFilled,
    TbHexagonLetterGFilled,
    TbHexagonLetterHFilled,
    TbHexagonLetterIFilled,
    TbHexagonLetterJFilled,
    TbHexagonLetterKFilled,
    TbHexagonLetterLFilled,
    TbHexagonLetterMFilled,
    TbHexagonLetterNFilled,
    TbHexagonLetterOFilled,
    TbHexagonLetterPFilled,
    TbHexagonLetterQFilled,
    TbHexagonLetterRFilled,
    TbHexagonLetterSFilled,
    TbHexagonLetterTFilled,
    TbHexagonLetterUFilled,
    TbHexagonLetterVFilled,
    TbHexagonLetterWFilled,
    TbHexagonLetterXFilled,
    TbHexagonLetterYFilled,
    TbHexagonLetterZFilled,
    TbHexagonMinusFilled,
    TbHexagonNumber0Filled,
    TbHexagonNumber1Filled,
    TbHexagonNumber2Filled,
    TbHexagonNumber3Filled,
    TbHexagonNumber4Filled,
    TbHexagonNumber5Filled,
    TbHexagonNumber6Filled,
    TbHexagonNumber7Filled,
    TbHexagonNumber8Filled,
    TbHexagonNumber9Filled,
    TbHexagonPlusFilled,
    TbHexagonFilled,
    TbHomeFilled,
    TbHospitalCircleFilled,
    TbHourglassFilled,
    TbIconsFilled,
    TbInfoCircleFilled,
    TbInfoHexagonFilled,
    TbInfoOctagonFilled,
    TbInfoSquareRoundedFilled,
    TbInfoSquareFilled,
    TbInfoTriangleFilled,
    TbInnerShadowBottomLeftFilled,
    TbInnerShadowBottomRightFilled,
    TbInnerShadowBottomFilled,
    TbInnerShadowLeftFilled,
    TbInnerShadowRightFilled,
    TbInnerShadowTopLeftFilled,
    TbInnerShadowTopRightFilled,
    TbInnerShadowTopFilled,
    TbIroning1Filled,
    TbIroning2Filled,
    TbIroning3Filled,
    TbIroningSteamFilled,
    TbIroningFilled,
    TbJetpackFilled,
    TbJewishStarFilled,
    TbKeyFilled,
    TbKeyboardFilled,
    TbKeyframeAlignCenterFilled,
    TbKeyframeAlignHorizontalFilled,
    TbKeyframeAlignVerticalFilled,
    TbKeyframeFilled,
    TbKeyframesFilled,
    TbLabelImportantFilled,
    TbLabelFilled,
    TbLassoPolygonFilled,
    TbLaurelWreathFilled,
    TbLayout2Filled,
    TbLayoutAlignBottomFilled,
    TbLayoutAlignCenterFilled,
    TbLayoutAlignLeftFilled,
    TbLayoutAlignMiddleFilled,
    TbLayoutAlignRightFilled,
    TbLayoutAlignTopFilled,
    TbLayoutBottombarCollapseFilled,
    TbLayoutBottombarExpandFilled,
    TbLayoutBottombarFilled,
    TbLayoutCardsFilled,
    TbLayoutDashboardFilled,
    TbLayoutDistributeHorizontalFilled,
    TbLayoutDistributeVerticalFilled,
    TbLayoutGridFilled,
    TbLayoutKanbanFilled,
    TbLayoutListFilled,
    TbLayoutNavbarCollapseFilled,
    TbLayoutNavbarExpandFilled,
    TbLayoutNavbarFilled,
    TbLayoutSidebarLeftCollapseFilled,
    TbLayoutSidebarLeftExpandFilled,
    TbLayoutSidebarRightCollapseFilled,
    TbLayoutSidebarRightExpandFilled,
    TbLayoutSidebarRightFilled,
    TbLayoutSidebarFilled,
    TbLayoutFilled,
    TbLegoFilled,
    TbLemon2Filled,
    TbLifebuoyFilled,
    TbLivePhotoFilled,
    TbLiveViewFilled,
    TbLocationFilled,
    TbLockSquareRoundedFilled,
    TbLockFilled,
    TbLungsFilled,
    TbMacroFilled,
    TbMagnetFilled,
    TbMailOpenedFilled,
    TbMailFilled,
    TbManFilled,
    TbManualGearboxFilled,
    TbMapPinFilled,
    TbMedicalCrossFilled,
    TbMeepleFilled,
    TbMelonFilled,
    TbMessage2Filled,
    TbMessageChatbotFilled,
    TbMessageCircleFilled,
    TbMessageReportFilled,
    TbMessageFilled,
    TbMeteorFilled,
    TbMichelinStarFilled,
    TbMickeyFilled,
    TbMicrophoneFilled,
    TbMicrowaveFilled,
    TbMilitaryRankFilled,
    TbMilkFilled,
    TbMoodAngryFilled,
    TbMoodConfuzedFilled,
    TbMoodCrazyHappyFilled,
    TbMoodEmptyFilled,
    TbMoodHappyFilled,
    TbMoodKidFilled,
    TbMoodNeutralFilled,
    TbMoodSadFilled,
    TbMoodSmileFilled,
    TbMoodWrrrFilled,
    TbMoonFilled,
    TbMountainFilled,
    TbMouseFilled,
    TbMugFilled,
    TbMushroomFilled,
    TbNavigationFilled,
    TbNurseFilled,
    TbOctagonFilled,
    TbOvalVerticalFilled,
    TbOvalFilled,
    TbPaintFilled,
    TbPaletteFilled,
    TbPanoramaHorizontalFilled,
    TbPanoramaVerticalFilled,
    TbParkingCircleFilled,
    TbPawFilled,
    TbPennant2Filled,
    TbPennantFilled,
    TbPentagonFilled,
    TbPhoneFilled,
    TbPhotoFilled,
    TbPictureInPictureTopFilled,
    TbPictureInPictureFilled,
    TbPillFilled,
    TbPinFilled,
    TbPinnedFilled,
    TbPizzaFilled,
    TbPlayCard1Filled,
    TbPlayCard10Filled,
    TbPlayCard2Filled,
    TbPlayCard3Filled,
    TbPlayCard4Filled,
    TbPlayCard5Filled,
    TbPlayCard6Filled,
    TbPlayCard7Filled,
    TbPlayCard8Filled,
    TbPlayCard9Filled,
    TbPlayCardAFilled,
    TbPlayCardJFilled,
    TbPlayCardKFilled,
    TbPlayCardQFilled,
    TbPlayCardStarFilled,
    TbPlayerEjectFilled,
    TbPlayerPauseFilled,
    TbPlayerPlayFilled,
    TbPlayerRecordFilled,
    TbPlayerSkipBackFilled,
    TbPlayerSkipForwardFilled,
    TbPlayerStopFilled,
    TbPlayerTrackNextFilled,
    TbPlayerTrackPrevFilled,
    TbPointFilled,
    TbPointerFilled,
    TbPolaroidFilled,
    TbPooFilled,
    TbPresentationAnalyticsFilled,
    TbPresentationFilled,
    TbPuzzleFilled,
    TbQuoteFilled,
    TbRadarFilled,
    TbRadioactiveFilled,
    TbReceiptFilled,
    TbRectangleVerticalFilled,
    TbRectangleFilled,
    TbRelationManyToManyFilled,
    TbRelationOneToManyFilled,
    TbRelationOneToOneFilled,
    TbReplaceFilled,
    TbRosetteDiscountCheckFilled,
    TbRosetteDiscountFilled,
    TbRosetteFilled,
    TbSaladFilled,
    TbScubaDivingTankFilled,
    TbSectionFilled,
    TbSeedingFilled,
    TbSettingsFilled,
    TbShieldCheckFilled,
    TbShieldCheckeredFilled,
    TbShieldHalfFilled,
    TbShieldLockFilled,
    TbShieldFilled,
    TbShirtFilled,
    TbShoppingCartFilled,
    TbSignLeftFilled,
    TbSignRightFilled,
    TbSitemapFilled,
    TbSortAscending2Filled,
    TbSortAscendingShapesFilled,
    TbSortDescending2Filled,
    TbSortDescendingShapesFilled,
    TbSoupFilled,
    TbSpadeFilled,
    TbSquareArrowDownFilled,
    TbSquareArrowLeftFilled,
    TbSquareArrowRightFilled,
    TbSquareArrowUpFilled,
    TbSquareAsteriskFilled,
    TbSquareCheckFilled,
    TbSquareChevronDownFilled,
    TbSquareChevronLeftFilled,
    TbSquareChevronRightFilled,
    TbSquareChevronUpFilled,
    TbSquareChevronsDownFilled,
    TbSquareChevronsLeftFilled,
    TbSquareChevronsRightFilled,
    TbSquareChevronsUpFilled,
    TbSquareDotFilled,
    TbSquareF0Filled,
    TbSquareF1Filled,
    TbSquareF2Filled,
    TbSquareF3Filled,
    TbSquareF4Filled,
    TbSquareF5Filled,
    TbSquareF6Filled,
    TbSquareF7Filled,
    TbSquareF8Filled,
    TbSquareF9Filled,
    TbSquareLetterAFilled,
    TbSquareLetterBFilled,
    TbSquareLetterCFilled,
    TbSquareLetterDFilled,
    TbSquareLetterEFilled,
    TbSquareLetterFFilled,
    TbSquareLetterGFilled,
    TbSquareLetterHFilled,
    TbSquareLetterIFilled,
    TbSquareLetterJFilled,
    TbSquareLetterKFilled,
    TbSquareLetterLFilled,
    TbSquareLetterMFilled,
    TbSquareLetterNFilled,
    TbSquareLetterOFilled,
    TbSquareLetterPFilled,
    TbSquareLetterQFilled,
    TbSquareLetterRFilled,
    TbSquareLetterSFilled,
    TbSquareLetterTFilled,
    TbSquareLetterUFilled,
    TbSquareLetterVFilled,
    TbSquareLetterWFilled,
    TbSquareLetterXFilled,
    TbSquareLetterYFilled,
    TbSquareLetterZFilled,
    TbSquareMinusFilled,
    TbSquareNumber0Filled,
    TbSquareNumber1Filled,
    TbSquareNumber2Filled,
    TbSquareNumber3Filled,
    TbSquareNumber4Filled,
    TbSquareNumber5Filled,
    TbSquareNumber6Filled,
    TbSquareNumber7Filled,
    TbSquareNumber8Filled,
    TbSquareNumber9Filled,
    TbSquareRotatedFilled,
    TbSquareRoundedArrowDownFilled,
    TbSquareRoundedArrowLeftFilled,
    TbSquareRoundedArrowRightFilled,
    TbSquareRoundedArrowUpFilled,
    TbSquareRoundedCheckFilled,
    TbSquareRoundedChevronDownFilled,
    TbSquareRoundedChevronLeftFilled,
    TbSquareRoundedChevronRightFilled,
    TbSquareRoundedChevronUpFilled,
    TbSquareRoundedChevronsDownFilled,
    TbSquareRoundedChevronsLeftFilled,
    TbSquareRoundedChevronsRightFilled,
    TbSquareRoundedChevronsUpFilled,
    TbSquareRoundedLetterAFilled,
    TbSquareRoundedLetterBFilled,
    TbSquareRoundedLetterCFilled,
    TbSquareRoundedLetterDFilled,
    TbSquareRoundedLetterEFilled,
    TbSquareRoundedLetterFFilled,
    TbSquareRoundedLetterGFilled,
    TbSquareRoundedLetterHFilled,
    TbSquareRoundedLetterIFilled,
    TbSquareRoundedLetterJFilled,
    TbSquareRoundedLetterKFilled,
    TbSquareRoundedLetterLFilled,
    TbSquareRoundedLetterMFilled,
    TbSquareRoundedLetterNFilled,
    TbSquareRoundedLetterOFilled,
    TbSquareRoundedLetterPFilled,
    TbSquareRoundedLetterQFilled,
    TbSquareRoundedLetterRFilled,
    TbSquareRoundedLetterSFilled,
    TbSquareRoundedLetterTFilled,
    TbSquareRoundedLetterUFilled,
    TbSquareRoundedLetterVFilled,
    TbSquareRoundedLetterWFilled,
    TbSquareRoundedLetterXFilled,
    TbSquareRoundedLetterYFilled,
    TbSquareRoundedLetterZFilled,
    TbSquareRoundedMinusFilled,
    TbSquareRoundedNumber0Filled,
    TbSquareRoundedNumber1Filled,
    TbSquareRoundedNumber2Filled,
    TbSquareRoundedNumber3Filled,
    TbSquareRoundedNumber4Filled,
    TbSquareRoundedNumber5Filled,
    TbSquareRoundedNumber6Filled,
    TbSquareRoundedNumber7Filled,
    TbSquareRoundedNumber8Filled,
    TbSquareRoundedNumber9Filled,
    TbSquareRoundedPlusFilled,
    TbSquareRoundedXFilled,
    TbSquareRoundedFilled,
    TbSquareXFilled,
    TbSquareFilled,
    TbSquaresFilled,
    TbStack2Filled,
    TbStack3Filled,
    TbStackFilled,
    TbStarHalfFilled,
    TbStarFilled,
    TbStarsFilled,
    TbSteeringWheelFilled,
    TbSunFilled,
    TbSunglassesFilled,
    TbSwipeDownFilled,
    TbSwipeLeftFilled,
    TbSwipeRightFilled,
    TbSwipeUpFilled,
    TbTableFilled,
    TbTagFilled,
    TbTagsFilled,
    TbTestPipe2Filled,
    TbThumbDownFilled,
    TbThumbUpFilled,
    TbTiltShiftFilled,
    TbTimelineEventFilled,
    TbToggleLeftFilled,
    TbToggleRightFilled,
    TbTransformFilled,
    TbTransitionBottomFilled,
    TbTransitionLeftFilled,
    TbTransitionRightFilled,
    TbTransitionTopFilled,
    TbTrashXFilled,
    TbTrashFilled,
    TbTriangleInvertedFilled,
    TbTriangleSquareCircleFilled,
    TbTriangleFilled,
    TbTrophyFilled,
    TbUmbrellaFilled,
    TbUserFilled,
    TbVersionsFilled,
    TbVideoFilled,
    TbWindmillFilled,
    TbWindsockFilled,
    TbWomanFilled,
    TbXboxAFilled,
    TbXboxBFilled,
    TbXboxXFilled,
    TbXboxYFilled,
    TbYinYangFilled,
    TbZeppelinFilled,
    TbZoomCancelFilled,
    TbZoomCheckFilled,
    TbZoomCodeFilled,
    TbZoomExclamationFilled,
    TbZoomInAreaFilled,
    TbZoomInFilled,
    TbZoomMoneyFilled,
    TbZoomOutAreaFilled,
    TbZoomOutFilled,
    TbZoomPanFilled,
    TbZoomQuestionFilled,
    TbZoomScanFilled,
    TbZoomFilled,
    TbAB2,
    TbABOff,
    TbAB,
    TbAbacusOff,
    TbAbacus,
    TbAbc,
    TbAccessPointOff,
    TbAccessPoint,
    TbAccessibleOff,
    TbAccessible,
    TbActivityHeartbeat,
    TbActivity,
    TbAd2,
    TbAdCircleOff,
    TbAdCircle,
    TbAdOff,
    TbAd,
    TbAddressBookOff,
    TbAddressBook,
    TbAdjustmentsAlt,
    TbAdjustmentsBolt,
    TbAdjustmentsCancel,
    TbAdjustmentsCheck,
    TbAdjustmentsCode,
    TbAdjustmentsCog,
    TbAdjustmentsDollar,
    TbAdjustmentsDown,
    TbAdjustmentsExclamation,
    TbAdjustmentsHeart,
    TbAdjustmentsHorizontal,
    TbAdjustmentsMinus,
    TbAdjustmentsOff,
    TbAdjustmentsPause,
    TbAdjustmentsPin,
    TbAdjustmentsPlus,
    TbAdjustmentsQuestion,
    TbAdjustmentsSearch,
    TbAdjustmentsShare,
    TbAdjustmentsSpark,
    TbAdjustmentsStar,
    TbAdjustmentsUp,
    TbAdjustmentsX,
    TbAdjustments,
    TbAerialLift,
    TbAffiliate,
    TbAi,
    TbAirBalloon,
    TbAirConditioningDisabled,
    TbAirConditioning,
    TbAirTrafficControl,
    TbAlarmAverage,
    TbAlarmMinus,
    TbAlarmOff,
    TbAlarmPlus,
    TbAlarmSmoke,
    TbAlarmSnooze,
    TbAlarm,
    TbAlbumOff,
    TbAlbum,
    TbAlertCircleOff,
    TbAlertCircle,
    TbAlertHexagonOff,
    TbAlertHexagon,
    TbAlertOctagon,
    TbAlertSmallOff,
    TbAlertSmall,
    TbAlertSquareRoundedOff,
    TbAlertSquareRounded,
    TbAlertSquare,
    TbAlertTriangleOff,
    TbAlertTriangle,
    TbAlien,
    TbAlignBoxBottomCenter,
    TbAlignBoxBottomLeft,
    TbAlignBoxBottomRight,
    TbAlignBoxCenterBottom,
    TbAlignBoxCenterMiddle,
    TbAlignBoxCenterStretch,
    TbAlignBoxCenterTop,
    TbAlignBoxLeftBottom,
    TbAlignBoxLeftMiddle,
    TbAlignBoxLeftStretch,
    TbAlignBoxLeftTop,
    TbAlignBoxRightBottom,
    TbAlignBoxRightMiddle,
    TbAlignBoxRightStretch,
    TbAlignBoxRightTop,
    TbAlignBoxTopCenter,
    TbAlignBoxTopLeft,
    TbAlignBoxTopRight,
    TbAlignCenter,
    TbAlignJustified,
    TbAlignLeft2,
    TbAlignLeft,
    TbAlignRight2,
    TbAlignRight,
    TbAlpha,
    TbAlphabetArabic,
    TbAlphabetBangla,
    TbAlphabetCyrillic,
    TbAlphabetGreek,
    TbAlphabetHebrew,
    TbAlphabetKorean,
    TbAlphabetLatin,
    TbAlphabetThai,
    TbAlt,
    TbAmbulance,
    TbAmpersand,
    TbAnalyzeOff,
    TbAnalyze,
    TbAnchorOff,
    TbAnchor,
    TbAngle,
    TbAnkh,
    TbAntennaBars1,
    TbAntennaBars2,
    TbAntennaBars3,
    TbAntennaBars4,
    TbAntennaBars5,
    TbAntennaBarsOff,
    TbAntennaOff,
    TbAntenna,
    TbApertureOff,
    TbAperture,
    TbApiAppOff,
    TbApiApp,
    TbApiOff,
    TbApi,
    TbAppWindow,
    TbApple,
    TbAppsOff,
    TbApps,
    TbArcheryArrow,
    TbArchiveOff,
    TbArchive,
    TbArmchair2Off,
    TbArmchair2,
    TbArmchairOff,
    TbArmchair,
    TbArrowAutofitContent,
    TbArrowAutofitDown,
    TbArrowAutofitHeight,
    TbArrowAutofitLeft,
    TbArrowAutofitRight,
    TbArrowAutofitUp,
    TbArrowAutofitWidth,
    TbArrowBackUpDouble,
    TbArrowBackUp,
    TbArrowBack,
    TbArrowBadgeDown,
    TbArrowBadgeLeft,
} from "react-icons/tb"

export function nameToReactIcon_tb_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "tb:TbAccessibleFilled":
            return TbAccessibleFilled;
        case "tb:TbAdCircleFilled":
            return TbAdCircleFilled;
        case "tb:TbAdFilled":
            return TbAdFilled;
        case "tb:TbAdjustmentsFilled":
            return TbAdjustmentsFilled;
        case "tb:TbAffiliateFilled":
            return TbAffiliateFilled;
        case "tb:TbAlarmMinusFilled":
            return TbAlarmMinusFilled;
        case "tb:TbAlarmPlusFilled":
            return TbAlarmPlusFilled;
        case "tb:TbAlarmSnoozeFilled":
            return TbAlarmSnoozeFilled;
        case "tb:TbAlarmFilled":
            return TbAlarmFilled;
        case "tb:TbAlertCircleFilled":
            return TbAlertCircleFilled;
        case "tb:TbAlertHexagonFilled":
            return TbAlertHexagonFilled;
        case "tb:TbAlertOctagonFilled":
            return TbAlertOctagonFilled;
        case "tb:TbAlertSquareRoundedFilled":
            return TbAlertSquareRoundedFilled;
        case "tb:TbAlertSquareFilled":
            return TbAlertSquareFilled;
        case "tb:TbAlertTriangleFilled":
            return TbAlertTriangleFilled;
        case "tb:TbAlienFilled":
            return TbAlienFilled;
        case "tb:TbAlignBoxBottomCenterFilled":
            return TbAlignBoxBottomCenterFilled;
        case "tb:TbAlignBoxBottomLeftFilled":
            return TbAlignBoxBottomLeftFilled;
        case "tb:TbAlignBoxBottomRightFilled":
            return TbAlignBoxBottomRightFilled;
        case "tb:TbAlignBoxCenterMiddleFilled":
            return TbAlignBoxCenterMiddleFilled;
        case "tb:TbAlignBoxLeftBottomFilled":
            return TbAlignBoxLeftBottomFilled;
        case "tb:TbAlignBoxLeftMiddleFilled":
            return TbAlignBoxLeftMiddleFilled;
        case "tb:TbAlignBoxLeftTopFilled":
            return TbAlignBoxLeftTopFilled;
        case "tb:TbAlignBoxRightBottomFilled":
            return TbAlignBoxRightBottomFilled;
        case "tb:TbAlignBoxRightMiddleFilled":
            return TbAlignBoxRightMiddleFilled;
        case "tb:TbAlignBoxRightTopFilled":
            return TbAlignBoxRightTopFilled;
        case "tb:TbAlignBoxTopCenterFilled":
            return TbAlignBoxTopCenterFilled;
        case "tb:TbAlignBoxTopLeftFilled":
            return TbAlignBoxTopLeftFilled;
        case "tb:TbAlignBoxTopRightFilled":
            return TbAlignBoxTopRightFilled;
        case "tb:TbAnalyzeFilled":
            return TbAnalyzeFilled;
        case "tb:TbAppWindowFilled":
            return TbAppWindowFilled;
        case "tb:TbAppleFilled":
            return TbAppleFilled;
        case "tb:TbAppsFilled":
            return TbAppsFilled;
        case "tb:TbArchiveFilled":
            return TbArchiveFilled;
        case "tb:TbArrowAutofitContentFilled":
            return TbArrowAutofitContentFilled;
        case "tb:TbArrowBadgeDownFilled":
            return TbArrowBadgeDownFilled;
        case "tb:TbArrowBadgeLeftFilled":
            return TbArrowBadgeLeftFilled;
        case "tb:TbArrowBadgeRightFilled":
            return TbArrowBadgeRightFilled;
        case "tb:TbArrowBadgeUpFilled":
            return TbArrowBadgeUpFilled;
        case "tb:TbArrowBigDownLineFilled":
            return TbArrowBigDownLineFilled;
        case "tb:TbArrowBigDownLinesFilled":
            return TbArrowBigDownLinesFilled;
        case "tb:TbArrowBigDownFilled":
            return TbArrowBigDownFilled;
        case "tb:TbArrowBigLeftLineFilled":
            return TbArrowBigLeftLineFilled;
        case "tb:TbArrowBigLeftLinesFilled":
            return TbArrowBigLeftLinesFilled;
        case "tb:TbArrowBigLeftFilled":
            return TbArrowBigLeftFilled;
        case "tb:TbArrowBigRightLineFilled":
            return TbArrowBigRightLineFilled;
        case "tb:TbArrowBigRightLinesFilled":
            return TbArrowBigRightLinesFilled;
        case "tb:TbArrowBigRightFilled":
            return TbArrowBigRightFilled;
        case "tb:TbArrowBigUpLineFilled":
            return TbArrowBigUpLineFilled;
        case "tb:TbArrowBigUpLinesFilled":
            return TbArrowBigUpLinesFilled;
        case "tb:TbArrowBigUpFilled":
            return TbArrowBigUpFilled;
        case "tb:TbArrowDownCircleFilled":
            return TbArrowDownCircleFilled;
        case "tb:TbArrowDownRhombusFilled":
            return TbArrowDownRhombusFilled;
        case "tb:TbArrowDownSquareFilled":
            return TbArrowDownSquareFilled;
        case "tb:TbArrowGuideFilled":
            return TbArrowGuideFilled;
        case "tb:TbArrowLeftCircleFilled":
            return TbArrowLeftCircleFilled;
        case "tb:TbArrowLeftRhombusFilled":
            return TbArrowLeftRhombusFilled;
        case "tb:TbArrowLeftSquareFilled":
            return TbArrowLeftSquareFilled;
        case "tb:TbArrowMoveDownFilled":
            return TbArrowMoveDownFilled;
        case "tb:TbArrowMoveLeftFilled":
            return TbArrowMoveLeftFilled;
        case "tb:TbArrowMoveRightFilled":
            return TbArrowMoveRightFilled;
        case "tb:TbArrowMoveUpFilled":
            return TbArrowMoveUpFilled;
        case "tb:TbArrowRightCircleFilled":
            return TbArrowRightCircleFilled;
        case "tb:TbArrowRightRhombusFilled":
            return TbArrowRightRhombusFilled;
        case "tb:TbArrowRightSquareFilled":
            return TbArrowRightSquareFilled;
        case "tb:TbArrowUpCircleFilled":
            return TbArrowUpCircleFilled;
        case "tb:TbArrowUpRhombusFilled":
            return TbArrowUpRhombusFilled;
        case "tb:TbArrowUpSquareFilled":
            return TbArrowUpSquareFilled;
        case "tb:TbArtboardFilled":
            return TbArtboardFilled;
        case "tb:TbArticleFilled":
            return TbArticleFilled;
        case "tb:TbAspectRatioFilled":
            return TbAspectRatioFilled;
        case "tb:TbAssemblyFilled":
            return TbAssemblyFilled;
        case "tb:TbAssetFilled":
            return TbAssetFilled;
        case "tb:TbAtom2Filled":
            return TbAtom2Filled;
        case "tb:TbAutomaticGearboxFilled":
            return TbAutomaticGearboxFilled;
        case "tb:TbAwardFilled":
            return TbAwardFilled;
        case "tb:TbBabyCarriageFilled":
            return TbBabyCarriageFilled;
        case "tb:TbBackspaceFilled":
            return TbBackspaceFilled;
        case "tb:TbBadge3DFilled":
            return TbBadge3DFilled;
        case "tb:TbBadge4KFilled":
            return TbBadge4KFilled;
        case "tb:TbBadge8KFilled":
            return TbBadge8KFilled;
        case "tb:TbBadgeAdFilled":
            return TbBadgeAdFilled;
        case "tb:TbBadgeArFilled":
            return TbBadgeArFilled;
        case "tb:TbBadgeCcFilled":
            return TbBadgeCcFilled;
        case "tb:TbBadgeHdFilled":
            return TbBadgeHdFilled;
        case "tb:TbBadgeSdFilled":
            return TbBadgeSdFilled;
        case "tb:TbBadgeTmFilled":
            return TbBadgeTmFilled;
        case "tb:TbBadgeVoFilled":
            return TbBadgeVoFilled;
        case "tb:TbBadgeVrFilled":
            return TbBadgeVrFilled;
        case "tb:TbBadgeWcFilled":
            return TbBadgeWcFilled;
        case "tb:TbBadgeFilled":
            return TbBadgeFilled;
        case "tb:TbBadgesFilled":
            return TbBadgesFilled;
        case "tb:TbBalloonFilled":
            return TbBalloonFilled;
        case "tb:TbBallpenFilled":
            return TbBallpenFilled;
        case "tb:TbBandageFilled":
            return TbBandageFilled;
        case "tb:TbBarbellFilled":
            return TbBarbellFilled;
        case "tb:TbBarrierBlockFilled":
            return TbBarrierBlockFilled;
        case "tb:TbBasketFilled":
            return TbBasketFilled;
        case "tb:TbBathFilled":
            return TbBathFilled;
        case "tb:TbBattery1Filled":
            return TbBattery1Filled;
        case "tb:TbBattery2Filled":
            return TbBattery2Filled;
        case "tb:TbBattery3Filled":
            return TbBattery3Filled;
        case "tb:TbBattery4Filled":
            return TbBattery4Filled;
        case "tb:TbBatteryAutomotiveFilled":
            return TbBatteryAutomotiveFilled;
        case "tb:TbBatteryVertical1Filled":
            return TbBatteryVertical1Filled;
        case "tb:TbBatteryVertical2Filled":
            return TbBatteryVertical2Filled;
        case "tb:TbBatteryVertical3Filled":
            return TbBatteryVertical3Filled;
        case "tb:TbBatteryVertical4Filled":
            return TbBatteryVertical4Filled;
        case "tb:TbBatteryVerticalFilled":
            return TbBatteryVerticalFilled;
        case "tb:TbBatteryFilled":
            return TbBatteryFilled;
        case "tb:TbBedFlatFilled":
            return TbBedFlatFilled;
        case "tb:TbBedFilled":
            return TbBedFilled;
        case "tb:TbBeerFilled":
            return TbBeerFilled;
        case "tb:TbBellMinusFilled":
            return TbBellMinusFilled;
        case "tb:TbBellPlusFilled":
            return TbBellPlusFilled;
        case "tb:TbBellRinging2Filled":
            return TbBellRinging2Filled;
        case "tb:TbBellRingingFilled":
            return TbBellRingingFilled;
        case "tb:TbBellXFilled":
            return TbBellXFilled;
        case "tb:TbBellZFilled":
            return TbBellZFilled;
        case "tb:TbBellFilled":
            return TbBellFilled;
        case "tb:TbBikeFilled":
            return TbBikeFilled;
        case "tb:TbBinaryTree2Filled":
            return TbBinaryTree2Filled;
        case "tb:TbBinaryTreeFilled":
            return TbBinaryTreeFilled;
        case "tb:TbBinocularsFilled":
            return TbBinocularsFilled;
        case "tb:TbBiohazardFilled":
            return TbBiohazardFilled;
        case "tb:TbBladeFilled":
            return TbBladeFilled;
        case "tb:TbBlenderFilled":
            return TbBlenderFilled;
        case "tb:TbBlobFilled":
            return TbBlobFilled;
        case "tb:TbBoltFilled":
            return TbBoltFilled;
        case "tb:TbBombFilled":
            return TbBombFilled;
        case "tb:TbBoneFilled":
            return TbBoneFilled;
        case "tb:TbBongFilled":
            return TbBongFilled;
        case "tb:TbBookFilled":
            return TbBookFilled;
        case "tb:TbBookmarkFilled":
            return TbBookmarkFilled;
        case "tb:TbBookmarksFilled":
            return TbBookmarksFilled;
        case "tb:TbBoomFilled":
            return TbBoomFilled;
        case "tb:TbBottleFilled":
            return TbBottleFilled;
        case "tb:TbBounceLeftFilled":
            return TbBounceLeftFilled;
        case "tb:TbBounceRightFilled":
            return TbBounceRightFilled;
        case "tb:TbBowFilled":
            return TbBowFilled;
        case "tb:TbBowlChopsticksFilled":
            return TbBowlChopsticksFilled;
        case "tb:TbBowlSpoonFilled":
            return TbBowlSpoonFilled;
        case "tb:TbBowlFilled":
            return TbBowlFilled;
        case "tb:TbBoxAlignBottomLeftFilled":
            return TbBoxAlignBottomLeftFilled;
        case "tb:TbBoxAlignBottomRightFilled":
            return TbBoxAlignBottomRightFilled;
        case "tb:TbBoxAlignBottomFilled":
            return TbBoxAlignBottomFilled;
        case "tb:TbBoxAlignLeftFilled":
            return TbBoxAlignLeftFilled;
        case "tb:TbBoxAlignRightFilled":
            return TbBoxAlignRightFilled;
        case "tb:TbBoxAlignTopLeftFilled":
            return TbBoxAlignTopLeftFilled;
        case "tb:TbBoxAlignTopRightFilled":
            return TbBoxAlignTopRightFilled;
        case "tb:TbBoxAlignTopFilled":
            return TbBoxAlignTopFilled;
        case "tb:TbBoxMultipleFilled":
            return TbBoxMultipleFilled;
        case "tb:TbBrandAngularFilled":
            return TbBrandAngularFilled;
        case "tb:TbBrandAppleFilled":
            return TbBrandAppleFilled;
        case "tb:TbBrandBitbucketFilled":
            return TbBrandBitbucketFilled;
        case "tb:TbBrandDiscordFilled":
            return TbBrandDiscordFilled;
        case "tb:TbBrandDribbbleFilled":
            return TbBrandDribbbleFilled;
        case "tb:TbBrandFacebookFilled":
            return TbBrandFacebookFilled;
        case "tb:TbBrandGithubFilled":
            return TbBrandGithubFilled;
        case "tb:TbBrandGoogleFilled":
            return TbBrandGoogleFilled;
        case "tb:TbBrandInstagramFilled":
            return TbBrandInstagramFilled;
        case "tb:TbBrandKickFilled":
            return TbBrandKickFilled;
        case "tb:TbBrandLinkedinFilled":
            return TbBrandLinkedinFilled;
        case "tb:TbBrandMessengerFilled":
            return TbBrandMessengerFilled;
        case "tb:TbBrandOpenSourceFilled":
            return TbBrandOpenSourceFilled;
        case "tb:TbBrandOperaFilled":
            return TbBrandOperaFilled;
        case "tb:TbBrandPatreonFilled":
            return TbBrandPatreonFilled;
        case "tb:TbBrandPaypalFilled":
            return TbBrandPaypalFilled;
        case "tb:TbBrandPinterestFilled":
            return TbBrandPinterestFilled;
        case "tb:TbBrandSketchFilled":
            return TbBrandSketchFilled;
        case "tb:TbBrandSnapchatFilled":
            return TbBrandSnapchatFilled;
        case "tb:TbBrandSpotifyFilled":
            return TbBrandSpotifyFilled;
        case "tb:TbBrandSteamFilled":
            return TbBrandSteamFilled;
        case "tb:TbBrandStripeFilled":
            return TbBrandStripeFilled;
        case "tb:TbBrandTablerFilled":
            return TbBrandTablerFilled;
        case "tb:TbBrandTiktokFilled":
            return TbBrandTiktokFilled;
        case "tb:TbBrandTinderFilled":
            return TbBrandTinderFilled;
        case "tb:TbBrandTumblrFilled":
            return TbBrandTumblrFilled;
        case "tb:TbBrandTwitterFilled":
            return TbBrandTwitterFilled;
        case "tb:TbBrandVercelFilled":
            return TbBrandVercelFilled;
        case "tb:TbBrandVimeoFilled":
            return TbBrandVimeoFilled;
        case "tb:TbBrandWeiboFilled":
            return TbBrandWeiboFilled;
        case "tb:TbBrandWhatsappFilled":
            return TbBrandWhatsappFilled;
        case "tb:TbBrandWindowsFilled":
            return TbBrandWindowsFilled;
        case "tb:TbBrandXFilled":
            return TbBrandXFilled;
        case "tb:TbBrandYoutubeFilled":
            return TbBrandYoutubeFilled;
        case "tb:TbBreadFilled":
            return TbBreadFilled;
        case "tb:TbBriefcase2Filled":
            return TbBriefcase2Filled;
        case "tb:TbBriefcaseFilled":
            return TbBriefcaseFilled;
        case "tb:TbBrightnessAutoFilled":
            return TbBrightnessAutoFilled;
        case "tb:TbBrightnessDownFilled":
            return TbBrightnessDownFilled;
        case "tb:TbBrightnessUpFilled":
            return TbBrightnessUpFilled;
        case "tb:TbBrightnessFilled":
            return TbBrightnessFilled;
        case "tb:TbBubbleTextFilled":
            return TbBubbleTextFilled;
        case "tb:TbBubbleFilled":
            return TbBubbleFilled;
        case "tb:TbBugFilled":
            return TbBugFilled;
        case "tb:TbBuildingBroadcastTowerFilled":
            return TbBuildingBroadcastTowerFilled;
        case "tb:TbBulbFilled":
            return TbBulbFilled;
        case "tb:TbButterflyFilled":
            return TbButterflyFilled;
        case "tb:TbCactusFilled":
            return TbCactusFilled;
        case "tb:TbCalculatorFilled":
            return TbCalculatorFilled;
        case "tb:TbCalendarEventFilled":
            return TbCalendarEventFilled;
        case "tb:TbCalendarMonthFilled":
            return TbCalendarMonthFilled;
        case "tb:TbCalendarWeekFilled":
            return TbCalendarWeekFilled;
        case "tb:TbCalendarFilled":
            return TbCalendarFilled;
        case "tb:TbCameraFilled":
            return TbCameraFilled;
        case "tb:TbCampfireFilled":
            return TbCampfireFilled;
        case "tb:TbCandleFilled":
            return TbCandleFilled;
        case "tb:TbCannabisFilled":
            return TbCannabisFilled;
        case "tb:TbCapsuleHorizontalFilled":
            return TbCapsuleHorizontalFilled;
        case "tb:TbCapsuleFilled":
            return TbCapsuleFilled;
        case "tb:TbCaptureFilled":
            return TbCaptureFilled;
        case "tb:TbCar4WdFilled":
            return TbCar4WdFilled;
        case "tb:TbCarFanFilled":
            return TbCarFanFilled;
        case "tb:TbCarSuvFilled":
            return TbCarSuvFilled;
        case "tb:TbCarFilled":
            return TbCarFilled;
        case "tb:TbCarambolaFilled":
            return TbCarambolaFilled;
        case "tb:TbCardboardsFilled":
            return TbCardboardsFilled;
        case "tb:TbCardsFilled":
            return TbCardsFilled;
        case "tb:TbCaretDownFilled":
            return TbCaretDownFilled;
        case "tb:TbCaretLeftRightFilled":
            return TbCaretLeftRightFilled;
        case "tb:TbCaretLeftFilled":
            return TbCaretLeftFilled;
        case "tb:TbCaretRightFilled":
            return TbCaretRightFilled;
        case "tb:TbCaretUpDownFilled":
            return TbCaretUpDownFilled;
        case "tb:TbCaretUpFilled":
            return TbCaretUpFilled;
        case "tb:TbCarouselHorizontalFilled":
            return TbCarouselHorizontalFilled;
        case "tb:TbCarouselVerticalFilled":
            return TbCarouselVerticalFilled;
        case "tb:TbCashBanknoteFilled":
            return TbCashBanknoteFilled;
        case "tb:TbCategoryFilled":
            return TbCategoryFilled;
        case "tb:TbChargingPileFilled":
            return TbChargingPileFilled;
        case "tb:TbChartAreaLineFilled":
            return TbChartAreaLineFilled;
        case "tb:TbChartAreaFilled":
            return TbChartAreaFilled;
        case "tb:TbChartBubbleFilled":
            return TbChartBubbleFilled;
        case "tb:TbChartCandleFilled":
            return TbChartCandleFilled;
        case "tb:TbChartDonutFilled":
            return TbChartDonutFilled;
        case "tb:TbChartDotsFilled":
            return TbChartDotsFilled;
        case "tb:TbChartGridDotsFilled":
            return TbChartGridDotsFilled;
        case "tb:TbChartPieFilled":
            return TbChartPieFilled;
        case "tb:TbCherryFilled":
            return TbCherryFilled;
        case "tb:TbChessBishopFilled":
            return TbChessBishopFilled;
        case "tb:TbChessKingFilled":
            return TbChessKingFilled;
        case "tb:TbChessKnightFilled":
            return TbChessKnightFilled;
        case "tb:TbChessQueenFilled":
            return TbChessQueenFilled;
        case "tb:TbChessRookFilled":
            return TbChessRookFilled;
        case "tb:TbChessFilled":
            return TbChessFilled;
        case "tb:TbChristmasTreeFilled":
            return TbChristmasTreeFilled;
        case "tb:TbCircleArrowDownLeftFilled":
            return TbCircleArrowDownLeftFilled;
        case "tb:TbCircleArrowDownRightFilled":
            return TbCircleArrowDownRightFilled;
        case "tb:TbCircleArrowDownFilled":
            return TbCircleArrowDownFilled;
        case "tb:TbCircleArrowLeftFilled":
            return TbCircleArrowLeftFilled;
        case "tb:TbCircleArrowRightFilled":
            return TbCircleArrowRightFilled;
        case "tb:TbCircleArrowUpLeftFilled":
            return TbCircleArrowUpLeftFilled;
        case "tb:TbCircleArrowUpRightFilled":
            return TbCircleArrowUpRightFilled;
        case "tb:TbCircleArrowUpFilled":
            return TbCircleArrowUpFilled;
        case "tb:TbCircleCheckFilled":
            return TbCircleCheckFilled;
        case "tb:TbCircleDotFilled":
            return TbCircleDotFilled;
        case "tb:TbCircleKeyFilled":
            return TbCircleKeyFilled;
        case "tb:TbCircleLetterAFilled":
            return TbCircleLetterAFilled;
        case "tb:TbCircleLetterBFilled":
            return TbCircleLetterBFilled;
        case "tb:TbCircleLetterCFilled":
            return TbCircleLetterCFilled;
        case "tb:TbCircleLetterDFilled":
            return TbCircleLetterDFilled;
        case "tb:TbCircleLetterEFilled":
            return TbCircleLetterEFilled;
        case "tb:TbCircleLetterFFilled":
            return TbCircleLetterFFilled;
        case "tb:TbCircleLetterGFilled":
            return TbCircleLetterGFilled;
        case "tb:TbCircleLetterHFilled":
            return TbCircleLetterHFilled;
        case "tb:TbCircleLetterIFilled":
            return TbCircleLetterIFilled;
        case "tb:TbCircleLetterJFilled":
            return TbCircleLetterJFilled;
        case "tb:TbCircleLetterKFilled":
            return TbCircleLetterKFilled;
        case "tb:TbCircleLetterLFilled":
            return TbCircleLetterLFilled;
        case "tb:TbCircleLetterMFilled":
            return TbCircleLetterMFilled;
        case "tb:TbCircleLetterNFilled":
            return TbCircleLetterNFilled;
        case "tb:TbCircleLetterOFilled":
            return TbCircleLetterOFilled;
        case "tb:TbCircleLetterPFilled":
            return TbCircleLetterPFilled;
        case "tb:TbCircleLetterQFilled":
            return TbCircleLetterQFilled;
        case "tb:TbCircleLetterRFilled":
            return TbCircleLetterRFilled;
        case "tb:TbCircleLetterSFilled":
            return TbCircleLetterSFilled;
        case "tb:TbCircleLetterTFilled":
            return TbCircleLetterTFilled;
        case "tb:TbCircleLetterUFilled":
            return TbCircleLetterUFilled;
        case "tb:TbCircleLetterVFilled":
            return TbCircleLetterVFilled;
        case "tb:TbCircleLetterWFilled":
            return TbCircleLetterWFilled;
        case "tb:TbCircleLetterXFilled":
            return TbCircleLetterXFilled;
        case "tb:TbCircleLetterYFilled":
            return TbCircleLetterYFilled;
        case "tb:TbCircleLetterZFilled":
            return TbCircleLetterZFilled;
        case "tb:TbCircleNumber0Filled":
            return TbCircleNumber0Filled;
        case "tb:TbCircleNumber1Filled":
            return TbCircleNumber1Filled;
        case "tb:TbCircleNumber2Filled":
            return TbCircleNumber2Filled;
        case "tb:TbCircleNumber3Filled":
            return TbCircleNumber3Filled;
        case "tb:TbCircleNumber4Filled":
            return TbCircleNumber4Filled;
        case "tb:TbCircleNumber5Filled":
            return TbCircleNumber5Filled;
        case "tb:TbCircleNumber6Filled":
            return TbCircleNumber6Filled;
        case "tb:TbCircleNumber7Filled":
            return TbCircleNumber7Filled;
        case "tb:TbCircleNumber8Filled":
            return TbCircleNumber8Filled;
        case "tb:TbCircleNumber9Filled":
            return TbCircleNumber9Filled;
        case "tb:TbCirclePercentageFilled":
            return TbCirclePercentageFilled;
        case "tb:TbCirclePlusFilled":
            return TbCirclePlusFilled;
        case "tb:TbCircleRectangleFilled":
            return TbCircleRectangleFilled;
        case "tb:TbCircleXFilled":
            return TbCircleXFilled;
        case "tb:TbCircleFilled":
            return TbCircleFilled;
        case "tb:TbCirclesFilled":
            return TbCirclesFilled;
        case "tb:TbClockHour1Filled":
            return TbClockHour1Filled;
        case "tb:TbClockHour10Filled":
            return TbClockHour10Filled;
        case "tb:TbClockHour11Filled":
            return TbClockHour11Filled;
        case "tb:TbClockHour12Filled":
            return TbClockHour12Filled;
        case "tb:TbClockHour2Filled":
            return TbClockHour2Filled;
        case "tb:TbClockHour3Filled":
            return TbClockHour3Filled;
        case "tb:TbClockHour4Filled":
            return TbClockHour4Filled;
        case "tb:TbClockHour5Filled":
            return TbClockHour5Filled;
        case "tb:TbClockHour6Filled":
            return TbClockHour6Filled;
        case "tb:TbClockHour7Filled":
            return TbClockHour7Filled;
        case "tb:TbClockHour8Filled":
            return TbClockHour8Filled;
        case "tb:TbClockHour9Filled":
            return TbClockHour9Filled;
        case "tb:TbClockFilled":
            return TbClockFilled;
        case "tb:TbCloudFilled":
            return TbCloudFilled;
        case "tb:TbCloverFilled":
            return TbCloverFilled;
        case "tb:TbClubsFilled":
            return TbClubsFilled;
        case "tb:TbCodeCircle2Filled":
            return TbCodeCircle2Filled;
        case "tb:TbCodeCircleFilled":
            return TbCodeCircleFilled;
        case "tb:TbCoinBitcoinFilled":
            return TbCoinBitcoinFilled;
        case "tb:TbCoinEuroFilled":
            return TbCoinEuroFilled;
        case "tb:TbCoinMoneroFilled":
            return TbCoinMoneroFilled;
        case "tb:TbCoinPoundFilled":
            return TbCoinPoundFilled;
        case "tb:TbCoinRupeeFilled":
            return TbCoinRupeeFilled;
        case "tb:TbCoinTakaFilled":
            return TbCoinTakaFilled;
        case "tb:TbCoinYenFilled":
            return TbCoinYenFilled;
        case "tb:TbCoinYuanFilled":
            return TbCoinYuanFilled;
        case "tb:TbCoinFilled":
            return TbCoinFilled;
        case "tb:TbCompassFilled":
            return TbCompassFilled;
        case "tb:TbCone2Filled":
            return TbCone2Filled;
        case "tb:TbConeFilled":
            return TbConeFilled;
        case "tb:TbContrast2Filled":
            return TbContrast2Filled;
        case "tb:TbContrastFilled":
            return TbContrastFilled;
        case "tb:TbCookieManFilled":
            return TbCookieManFilled;
        case "tb:TbCookieFilled":
            return TbCookieFilled;
        case "tb:TbCopyCheckFilled":
            return TbCopyCheckFilled;
        case "tb:TbCopyMinusFilled":
            return TbCopyMinusFilled;
        case "tb:TbCopyPlusFilled":
            return TbCopyPlusFilled;
        case "tb:TbCopyXFilled":
            return TbCopyXFilled;
        case "tb:TbCopyleftFilled":
            return TbCopyleftFilled;
        case "tb:TbCopyrightFilled":
            return TbCopyrightFilled;
        case "tb:TbCreditCardFilled":
            return TbCreditCardFilled;
        case "tb:TbCrop11Filled":
            return TbCrop11Filled;
        case "tb:TbCrop169Filled":
            return TbCrop169Filled;
        case "tb:TbCrop32Filled":
            return TbCrop32Filled;
        case "tb:TbCrop54Filled":
            return TbCrop54Filled;
        case "tb:TbCrop75Filled":
            return TbCrop75Filled;
        case "tb:TbCropLandscapeFilled":
            return TbCropLandscapeFilled;
        case "tb:TbCropPortraitFilled":
            return TbCropPortraitFilled;
        case "tb:TbCrossFilled":
            return TbCrossFilled;
        case "tb:TbDashboardFilled":
            return TbDashboardFilled;
        case "tb:TbDeviceCctvFilled":
            return TbDeviceCctvFilled;
        case "tb:TbDeviceDesktopFilled":
            return TbDeviceDesktopFilled;
        case "tb:TbDeviceGamepad3Filled":
            return TbDeviceGamepad3Filled;
        case "tb:TbDeviceHeartMonitorFilled":
            return TbDeviceHeartMonitorFilled;
        case "tb:TbDeviceImacFilled":
            return TbDeviceImacFilled;
        case "tb:TbDeviceIpadFilled":
            return TbDeviceIpadFilled;
        case "tb:TbDeviceMobileFilled":
            return TbDeviceMobileFilled;
        case "tb:TbDeviceRemoteFilled":
            return TbDeviceRemoteFilled;
        case "tb:TbDeviceSpeakerFilled":
            return TbDeviceSpeakerFilled;
        case "tb:TbDeviceTabletFilled":
            return TbDeviceTabletFilled;
        case "tb:TbDeviceTvOldFilled":
            return TbDeviceTvOldFilled;
        case "tb:TbDeviceTvFilled":
            return TbDeviceTvFilled;
        case "tb:TbDeviceUnknownFilled":
            return TbDeviceUnknownFilled;
        case "tb:TbDeviceUsbFilled":
            return TbDeviceUsbFilled;
        case "tb:TbDeviceVisionProFilled":
            return TbDeviceVisionProFilled;
        case "tb:TbDeviceWatchFilled":
            return TbDeviceWatchFilled;
        case "tb:TbDialpadFilled":
            return TbDialpadFilled;
        case "tb:TbDiamondFilled":
            return TbDiamondFilled;
        case "tb:TbDiamondsFilled":
            return TbDiamondsFilled;
        case "tb:TbDice1Filled":
            return TbDice1Filled;
        case "tb:TbDice2Filled":
            return TbDice2Filled;
        case "tb:TbDice3Filled":
            return TbDice3Filled;
        case "tb:TbDice4Filled":
            return TbDice4Filled;
        case "tb:TbDice5Filled":
            return TbDice5Filled;
        case "tb:TbDice6Filled":
            return TbDice6Filled;
        case "tb:TbDiceFilled":
            return TbDiceFilled;
        case "tb:TbDirectionArrowsFilled":
            return TbDirectionArrowsFilled;
        case "tb:TbDirectionSignFilled":
            return TbDirectionSignFilled;
        case "tb:TbDirectionsFilled":
            return TbDirectionsFilled;
        case "tb:TbDiscFilled":
            return TbDiscFilled;
        case "tb:TbDiscountFilled":
            return TbDiscountFilled;
        case "tb:TbDropletHalf2Filled":
            return TbDropletHalf2Filled;
        case "tb:TbDropletHalfFilled":
            return TbDropletHalfFilled;
        case "tb:TbDropletFilled":
            return TbDropletFilled;
        case "tb:TbDropletsFilled":
            return TbDropletsFilled;
        case "tb:TbEggCrackedFilled":
            return TbEggCrackedFilled;
        case "tb:TbEggFilled":
            return TbEggFilled;
        case "tb:TbElevatorFilled":
            return TbElevatorFilled;
        case "tb:TbExclamationCircleFilled":
            return TbExclamationCircleFilled;
        case "tb:TbEyeFilled":
            return TbEyeFilled;
        case "tb:TbEyeglassFilled":
            return TbEyeglassFilled;
        case "tb:TbFaviconFilled":
            return TbFaviconFilled;
        case "tb:TbFeatherFilled":
            return TbFeatherFilled;
        case "tb:TbFileXFilled":
            return TbFileXFilled;
        case "tb:TbFileFilled":
            return TbFileFilled;
        case "tb:TbFilterFilled":
            return TbFilterFilled;
        case "tb:TbFiltersFilled":
            return TbFiltersFilled;
        case "tb:TbFlag2Filled":
            return TbFlag2Filled;
        case "tb:TbFlag3Filled":
            return TbFlag3Filled;
        case "tb:TbFlagFilled":
            return TbFlagFilled;
        case "tb:TbFlameFilled":
            return TbFlameFilled;
        case "tb:TbFlareFilled":
            return TbFlareFilled;
        case "tb:TbFlask2Filled":
            return TbFlask2Filled;
        case "tb:TbFlaskFilled":
            return TbFlaskFilled;
        case "tb:TbFlowerFilled":
            return TbFlowerFilled;
        case "tb:TbFolderFilled":
            return TbFolderFilled;
        case "tb:TbFoldersFilled":
            return TbFoldersFilled;
        case "tb:TbForbid2Filled":
            return TbForbid2Filled;
        case "tb:TbForbidFilled":
            return TbForbidFilled;
        case "tb:TbFountainFilled":
            return TbFountainFilled;
        case "tb:TbFunctionFilled":
            return TbFunctionFilled;
        case "tb:TbGardenCartFilled":
            return TbGardenCartFilled;
        case "tb:TbGaugeFilled":
            return TbGaugeFilled;
        case "tb:TbGhost2Filled":
            return TbGhost2Filled;
        case "tb:TbGhost3Filled":
            return TbGhost3Filled;
        case "tb:TbGhostFilled":
            return TbGhostFilled;
        case "tb:TbGiftCardFilled":
            return TbGiftCardFilled;
        case "tb:TbGiftFilled":
            return TbGiftFilled;
        case "tb:TbGlassFullFilled":
            return TbGlassFullFilled;
        case "tb:TbGlassFilled":
            return TbGlassFilled;
        case "tb:TbGlobeFilled":
            return TbGlobeFilled;
        case "tb:TbGolfFilled":
            return TbGolfFilled;
        case "tb:TbGpsFilled":
            return TbGpsFilled;
        case "tb:TbGraphFilled":
            return TbGraphFilled;
        case "tb:TbGridPatternFilled":
            return TbGridPatternFilled;
        case "tb:TbGuitarPickFilled":
            return TbGuitarPickFilled;
        case "tb:TbHanger2Filled":
            return TbHanger2Filled;
        case "tb:TbHeadphonesFilled":
            return TbHeadphonesFilled;
        case "tb:TbHeartFilled":
            return TbHeartFilled;
        case "tb:TbHelicopterLandingFilled":
            return TbHelicopterLandingFilled;
        case "tb:TbHelpCircleFilled":
            return TbHelpCircleFilled;
        case "tb:TbHelpHexagonFilled":
            return TbHelpHexagonFilled;
        case "tb:TbHelpOctagonFilled":
            return TbHelpOctagonFilled;
        case "tb:TbHelpSquareRoundedFilled":
            return TbHelpSquareRoundedFilled;
        case "tb:TbHelpSquareFilled":
            return TbHelpSquareFilled;
        case "tb:TbHelpTriangleFilled":
            return TbHelpTriangleFilled;
        case "tb:TbHexagonLetterAFilled":
            return TbHexagonLetterAFilled;
        case "tb:TbHexagonLetterBFilled":
            return TbHexagonLetterBFilled;
        case "tb:TbHexagonLetterCFilled":
            return TbHexagonLetterCFilled;
        case "tb:TbHexagonLetterDFilled":
            return TbHexagonLetterDFilled;
        case "tb:TbHexagonLetterEFilled":
            return TbHexagonLetterEFilled;
        case "tb:TbHexagonLetterFFilled":
            return TbHexagonLetterFFilled;
        case "tb:TbHexagonLetterGFilled":
            return TbHexagonLetterGFilled;
        case "tb:TbHexagonLetterHFilled":
            return TbHexagonLetterHFilled;
        case "tb:TbHexagonLetterIFilled":
            return TbHexagonLetterIFilled;
        case "tb:TbHexagonLetterJFilled":
            return TbHexagonLetterJFilled;
        case "tb:TbHexagonLetterKFilled":
            return TbHexagonLetterKFilled;
        case "tb:TbHexagonLetterLFilled":
            return TbHexagonLetterLFilled;
        case "tb:TbHexagonLetterMFilled":
            return TbHexagonLetterMFilled;
        case "tb:TbHexagonLetterNFilled":
            return TbHexagonLetterNFilled;
        case "tb:TbHexagonLetterOFilled":
            return TbHexagonLetterOFilled;
        case "tb:TbHexagonLetterPFilled":
            return TbHexagonLetterPFilled;
        case "tb:TbHexagonLetterQFilled":
            return TbHexagonLetterQFilled;
        case "tb:TbHexagonLetterRFilled":
            return TbHexagonLetterRFilled;
        case "tb:TbHexagonLetterSFilled":
            return TbHexagonLetterSFilled;
        case "tb:TbHexagonLetterTFilled":
            return TbHexagonLetterTFilled;
        case "tb:TbHexagonLetterUFilled":
            return TbHexagonLetterUFilled;
        case "tb:TbHexagonLetterVFilled":
            return TbHexagonLetterVFilled;
        case "tb:TbHexagonLetterWFilled":
            return TbHexagonLetterWFilled;
        case "tb:TbHexagonLetterXFilled":
            return TbHexagonLetterXFilled;
        case "tb:TbHexagonLetterYFilled":
            return TbHexagonLetterYFilled;
        case "tb:TbHexagonLetterZFilled":
            return TbHexagonLetterZFilled;
        case "tb:TbHexagonMinusFilled":
            return TbHexagonMinusFilled;
        case "tb:TbHexagonNumber0Filled":
            return TbHexagonNumber0Filled;
        case "tb:TbHexagonNumber1Filled":
            return TbHexagonNumber1Filled;
        case "tb:TbHexagonNumber2Filled":
            return TbHexagonNumber2Filled;
        case "tb:TbHexagonNumber3Filled":
            return TbHexagonNumber3Filled;
        case "tb:TbHexagonNumber4Filled":
            return TbHexagonNumber4Filled;
        case "tb:TbHexagonNumber5Filled":
            return TbHexagonNumber5Filled;
        case "tb:TbHexagonNumber6Filled":
            return TbHexagonNumber6Filled;
        case "tb:TbHexagonNumber7Filled":
            return TbHexagonNumber7Filled;
        case "tb:TbHexagonNumber8Filled":
            return TbHexagonNumber8Filled;
        case "tb:TbHexagonNumber9Filled":
            return TbHexagonNumber9Filled;
        case "tb:TbHexagonPlusFilled":
            return TbHexagonPlusFilled;
        case "tb:TbHexagonFilled":
            return TbHexagonFilled;
        case "tb:TbHomeFilled":
            return TbHomeFilled;
        case "tb:TbHospitalCircleFilled":
            return TbHospitalCircleFilled;
        case "tb:TbHourglassFilled":
            return TbHourglassFilled;
        case "tb:TbIconsFilled":
            return TbIconsFilled;
        case "tb:TbInfoCircleFilled":
            return TbInfoCircleFilled;
        case "tb:TbInfoHexagonFilled":
            return TbInfoHexagonFilled;
        case "tb:TbInfoOctagonFilled":
            return TbInfoOctagonFilled;
        case "tb:TbInfoSquareRoundedFilled":
            return TbInfoSquareRoundedFilled;
        case "tb:TbInfoSquareFilled":
            return TbInfoSquareFilled;
        case "tb:TbInfoTriangleFilled":
            return TbInfoTriangleFilled;
        case "tb:TbInnerShadowBottomLeftFilled":
            return TbInnerShadowBottomLeftFilled;
        case "tb:TbInnerShadowBottomRightFilled":
            return TbInnerShadowBottomRightFilled;
        case "tb:TbInnerShadowBottomFilled":
            return TbInnerShadowBottomFilled;
        case "tb:TbInnerShadowLeftFilled":
            return TbInnerShadowLeftFilled;
        case "tb:TbInnerShadowRightFilled":
            return TbInnerShadowRightFilled;
        case "tb:TbInnerShadowTopLeftFilled":
            return TbInnerShadowTopLeftFilled;
        case "tb:TbInnerShadowTopRightFilled":
            return TbInnerShadowTopRightFilled;
        case "tb:TbInnerShadowTopFilled":
            return TbInnerShadowTopFilled;
        case "tb:TbIroning1Filled":
            return TbIroning1Filled;
        case "tb:TbIroning2Filled":
            return TbIroning2Filled;
        case "tb:TbIroning3Filled":
            return TbIroning3Filled;
        case "tb:TbIroningSteamFilled":
            return TbIroningSteamFilled;
        case "tb:TbIroningFilled":
            return TbIroningFilled;
        case "tb:TbJetpackFilled":
            return TbJetpackFilled;
        case "tb:TbJewishStarFilled":
            return TbJewishStarFilled;
        case "tb:TbKeyFilled":
            return TbKeyFilled;
        case "tb:TbKeyboardFilled":
            return TbKeyboardFilled;
        case "tb:TbKeyframeAlignCenterFilled":
            return TbKeyframeAlignCenterFilled;
        case "tb:TbKeyframeAlignHorizontalFilled":
            return TbKeyframeAlignHorizontalFilled;
        case "tb:TbKeyframeAlignVerticalFilled":
            return TbKeyframeAlignVerticalFilled;
        case "tb:TbKeyframeFilled":
            return TbKeyframeFilled;
        case "tb:TbKeyframesFilled":
            return TbKeyframesFilled;
        case "tb:TbLabelImportantFilled":
            return TbLabelImportantFilled;
        case "tb:TbLabelFilled":
            return TbLabelFilled;
        case "tb:TbLassoPolygonFilled":
            return TbLassoPolygonFilled;
        case "tb:TbLaurelWreathFilled":
            return TbLaurelWreathFilled;
        case "tb:TbLayout2Filled":
            return TbLayout2Filled;
        case "tb:TbLayoutAlignBottomFilled":
            return TbLayoutAlignBottomFilled;
        case "tb:TbLayoutAlignCenterFilled":
            return TbLayoutAlignCenterFilled;
        case "tb:TbLayoutAlignLeftFilled":
            return TbLayoutAlignLeftFilled;
        case "tb:TbLayoutAlignMiddleFilled":
            return TbLayoutAlignMiddleFilled;
        case "tb:TbLayoutAlignRightFilled":
            return TbLayoutAlignRightFilled;
        case "tb:TbLayoutAlignTopFilled":
            return TbLayoutAlignTopFilled;
        case "tb:TbLayoutBottombarCollapseFilled":
            return TbLayoutBottombarCollapseFilled;
        case "tb:TbLayoutBottombarExpandFilled":
            return TbLayoutBottombarExpandFilled;
        case "tb:TbLayoutBottombarFilled":
            return TbLayoutBottombarFilled;
        case "tb:TbLayoutCardsFilled":
            return TbLayoutCardsFilled;
        case "tb:TbLayoutDashboardFilled":
            return TbLayoutDashboardFilled;
        case "tb:TbLayoutDistributeHorizontalFilled":
            return TbLayoutDistributeHorizontalFilled;
        case "tb:TbLayoutDistributeVerticalFilled":
            return TbLayoutDistributeVerticalFilled;
        case "tb:TbLayoutGridFilled":
            return TbLayoutGridFilled;
        case "tb:TbLayoutKanbanFilled":
            return TbLayoutKanbanFilled;
        case "tb:TbLayoutListFilled":
            return TbLayoutListFilled;
        case "tb:TbLayoutNavbarCollapseFilled":
            return TbLayoutNavbarCollapseFilled;
        case "tb:TbLayoutNavbarExpandFilled":
            return TbLayoutNavbarExpandFilled;
        case "tb:TbLayoutNavbarFilled":
            return TbLayoutNavbarFilled;
        case "tb:TbLayoutSidebarLeftCollapseFilled":
            return TbLayoutSidebarLeftCollapseFilled;
        case "tb:TbLayoutSidebarLeftExpandFilled":
            return TbLayoutSidebarLeftExpandFilled;
        case "tb:TbLayoutSidebarRightCollapseFilled":
            return TbLayoutSidebarRightCollapseFilled;
        case "tb:TbLayoutSidebarRightExpandFilled":
            return TbLayoutSidebarRightExpandFilled;
        case "tb:TbLayoutSidebarRightFilled":
            return TbLayoutSidebarRightFilled;
        case "tb:TbLayoutSidebarFilled":
            return TbLayoutSidebarFilled;
        case "tb:TbLayoutFilled":
            return TbLayoutFilled;
        case "tb:TbLegoFilled":
            return TbLegoFilled;
        case "tb:TbLemon2Filled":
            return TbLemon2Filled;
        case "tb:TbLifebuoyFilled":
            return TbLifebuoyFilled;
        case "tb:TbLivePhotoFilled":
            return TbLivePhotoFilled;
        case "tb:TbLiveViewFilled":
            return TbLiveViewFilled;
        case "tb:TbLocationFilled":
            return TbLocationFilled;
        case "tb:TbLockSquareRoundedFilled":
            return TbLockSquareRoundedFilled;
        case "tb:TbLockFilled":
            return TbLockFilled;
        case "tb:TbLungsFilled":
            return TbLungsFilled;
        case "tb:TbMacroFilled":
            return TbMacroFilled;
        case "tb:TbMagnetFilled":
            return TbMagnetFilled;
        case "tb:TbMailOpenedFilled":
            return TbMailOpenedFilled;
        case "tb:TbMailFilled":
            return TbMailFilled;
        case "tb:TbManFilled":
            return TbManFilled;
        case "tb:TbManualGearboxFilled":
            return TbManualGearboxFilled;
        case "tb:TbMapPinFilled":
            return TbMapPinFilled;
        case "tb:TbMedicalCrossFilled":
            return TbMedicalCrossFilled;
        case "tb:TbMeepleFilled":
            return TbMeepleFilled;
        case "tb:TbMelonFilled":
            return TbMelonFilled;
        case "tb:TbMessage2Filled":
            return TbMessage2Filled;
        case "tb:TbMessageChatbotFilled":
            return TbMessageChatbotFilled;
        case "tb:TbMessageCircleFilled":
            return TbMessageCircleFilled;
        case "tb:TbMessageReportFilled":
            return TbMessageReportFilled;
        case "tb:TbMessageFilled":
            return TbMessageFilled;
        case "tb:TbMeteorFilled":
            return TbMeteorFilled;
        case "tb:TbMichelinStarFilled":
            return TbMichelinStarFilled;
        case "tb:TbMickeyFilled":
            return TbMickeyFilled;
        case "tb:TbMicrophoneFilled":
            return TbMicrophoneFilled;
        case "tb:TbMicrowaveFilled":
            return TbMicrowaveFilled;
        case "tb:TbMilitaryRankFilled":
            return TbMilitaryRankFilled;
        case "tb:TbMilkFilled":
            return TbMilkFilled;
        case "tb:TbMoodAngryFilled":
            return TbMoodAngryFilled;
        case "tb:TbMoodConfuzedFilled":
            return TbMoodConfuzedFilled;
        case "tb:TbMoodCrazyHappyFilled":
            return TbMoodCrazyHappyFilled;
        case "tb:TbMoodEmptyFilled":
            return TbMoodEmptyFilled;
        case "tb:TbMoodHappyFilled":
            return TbMoodHappyFilled;
        case "tb:TbMoodKidFilled":
            return TbMoodKidFilled;
        case "tb:TbMoodNeutralFilled":
            return TbMoodNeutralFilled;
        case "tb:TbMoodSadFilled":
            return TbMoodSadFilled;
        case "tb:TbMoodSmileFilled":
            return TbMoodSmileFilled;
        case "tb:TbMoodWrrrFilled":
            return TbMoodWrrrFilled;
        case "tb:TbMoonFilled":
            return TbMoonFilled;
        case "tb:TbMountainFilled":
            return TbMountainFilled;
        case "tb:TbMouseFilled":
            return TbMouseFilled;
        case "tb:TbMugFilled":
            return TbMugFilled;
        case "tb:TbMushroomFilled":
            return TbMushroomFilled;
        case "tb:TbNavigationFilled":
            return TbNavigationFilled;
        case "tb:TbNurseFilled":
            return TbNurseFilled;
        case "tb:TbOctagonFilled":
            return TbOctagonFilled;
        case "tb:TbOvalVerticalFilled":
            return TbOvalVerticalFilled;
        case "tb:TbOvalFilled":
            return TbOvalFilled;
        case "tb:TbPaintFilled":
            return TbPaintFilled;
        case "tb:TbPaletteFilled":
            return TbPaletteFilled;
        case "tb:TbPanoramaHorizontalFilled":
            return TbPanoramaHorizontalFilled;
        case "tb:TbPanoramaVerticalFilled":
            return TbPanoramaVerticalFilled;
        case "tb:TbParkingCircleFilled":
            return TbParkingCircleFilled;
        case "tb:TbPawFilled":
            return TbPawFilled;
        case "tb:TbPennant2Filled":
            return TbPennant2Filled;
        case "tb:TbPennantFilled":
            return TbPennantFilled;
        case "tb:TbPentagonFilled":
            return TbPentagonFilled;
        case "tb:TbPhoneFilled":
            return TbPhoneFilled;
        case "tb:TbPhotoFilled":
            return TbPhotoFilled;
        case "tb:TbPictureInPictureTopFilled":
            return TbPictureInPictureTopFilled;
        case "tb:TbPictureInPictureFilled":
            return TbPictureInPictureFilled;
        case "tb:TbPillFilled":
            return TbPillFilled;
        case "tb:TbPinFilled":
            return TbPinFilled;
        case "tb:TbPinnedFilled":
            return TbPinnedFilled;
        case "tb:TbPizzaFilled":
            return TbPizzaFilled;
        case "tb:TbPlayCard1Filled":
            return TbPlayCard1Filled;
        case "tb:TbPlayCard10Filled":
            return TbPlayCard10Filled;
        case "tb:TbPlayCard2Filled":
            return TbPlayCard2Filled;
        case "tb:TbPlayCard3Filled":
            return TbPlayCard3Filled;
        case "tb:TbPlayCard4Filled":
            return TbPlayCard4Filled;
        case "tb:TbPlayCard5Filled":
            return TbPlayCard5Filled;
        case "tb:TbPlayCard6Filled":
            return TbPlayCard6Filled;
        case "tb:TbPlayCard7Filled":
            return TbPlayCard7Filled;
        case "tb:TbPlayCard8Filled":
            return TbPlayCard8Filled;
        case "tb:TbPlayCard9Filled":
            return TbPlayCard9Filled;
        case "tb:TbPlayCardAFilled":
            return TbPlayCardAFilled;
        case "tb:TbPlayCardJFilled":
            return TbPlayCardJFilled;
        case "tb:TbPlayCardKFilled":
            return TbPlayCardKFilled;
        case "tb:TbPlayCardQFilled":
            return TbPlayCardQFilled;
        case "tb:TbPlayCardStarFilled":
            return TbPlayCardStarFilled;
        case "tb:TbPlayerEjectFilled":
            return TbPlayerEjectFilled;
        case "tb:TbPlayerPauseFilled":
            return TbPlayerPauseFilled;
        case "tb:TbPlayerPlayFilled":
            return TbPlayerPlayFilled;
        case "tb:TbPlayerRecordFilled":
            return TbPlayerRecordFilled;
        case "tb:TbPlayerSkipBackFilled":
            return TbPlayerSkipBackFilled;
        case "tb:TbPlayerSkipForwardFilled":
            return TbPlayerSkipForwardFilled;
        case "tb:TbPlayerStopFilled":
            return TbPlayerStopFilled;
        case "tb:TbPlayerTrackNextFilled":
            return TbPlayerTrackNextFilled;
        case "tb:TbPlayerTrackPrevFilled":
            return TbPlayerTrackPrevFilled;
        case "tb:TbPointFilled":
            return TbPointFilled;
        case "tb:TbPointerFilled":
            return TbPointerFilled;
        case "tb:TbPolaroidFilled":
            return TbPolaroidFilled;
        case "tb:TbPooFilled":
            return TbPooFilled;
        case "tb:TbPresentationAnalyticsFilled":
            return TbPresentationAnalyticsFilled;
        case "tb:TbPresentationFilled":
            return TbPresentationFilled;
        case "tb:TbPuzzleFilled":
            return TbPuzzleFilled;
        case "tb:TbQuoteFilled":
            return TbQuoteFilled;
        case "tb:TbRadarFilled":
            return TbRadarFilled;
        case "tb:TbRadioactiveFilled":
            return TbRadioactiveFilled;
        case "tb:TbReceiptFilled":
            return TbReceiptFilled;
        case "tb:TbRectangleVerticalFilled":
            return TbRectangleVerticalFilled;
        case "tb:TbRectangleFilled":
            return TbRectangleFilled;
        case "tb:TbRelationManyToManyFilled":
            return TbRelationManyToManyFilled;
        case "tb:TbRelationOneToManyFilled":
            return TbRelationOneToManyFilled;
        case "tb:TbRelationOneToOneFilled":
            return TbRelationOneToOneFilled;
        case "tb:TbReplaceFilled":
            return TbReplaceFilled;
        case "tb:TbRosetteDiscountCheckFilled":
            return TbRosetteDiscountCheckFilled;
        case "tb:TbRosetteDiscountFilled":
            return TbRosetteDiscountFilled;
        case "tb:TbRosetteFilled":
            return TbRosetteFilled;
        case "tb:TbSaladFilled":
            return TbSaladFilled;
        case "tb:TbScubaDivingTankFilled":
            return TbScubaDivingTankFilled;
        case "tb:TbSectionFilled":
            return TbSectionFilled;
        case "tb:TbSeedingFilled":
            return TbSeedingFilled;
        case "tb:TbSettingsFilled":
            return TbSettingsFilled;
        case "tb:TbShieldCheckFilled":
            return TbShieldCheckFilled;
        case "tb:TbShieldCheckeredFilled":
            return TbShieldCheckeredFilled;
        case "tb:TbShieldHalfFilled":
            return TbShieldHalfFilled;
        case "tb:TbShieldLockFilled":
            return TbShieldLockFilled;
        case "tb:TbShieldFilled":
            return TbShieldFilled;
        case "tb:TbShirtFilled":
            return TbShirtFilled;
        case "tb:TbShoppingCartFilled":
            return TbShoppingCartFilled;
        case "tb:TbSignLeftFilled":
            return TbSignLeftFilled;
        case "tb:TbSignRightFilled":
            return TbSignRightFilled;
        case "tb:TbSitemapFilled":
            return TbSitemapFilled;
        case "tb:TbSortAscending2Filled":
            return TbSortAscending2Filled;
        case "tb:TbSortAscendingShapesFilled":
            return TbSortAscendingShapesFilled;
        case "tb:TbSortDescending2Filled":
            return TbSortDescending2Filled;
        case "tb:TbSortDescendingShapesFilled":
            return TbSortDescendingShapesFilled;
        case "tb:TbSoupFilled":
            return TbSoupFilled;
        case "tb:TbSpadeFilled":
            return TbSpadeFilled;
        case "tb:TbSquareArrowDownFilled":
            return TbSquareArrowDownFilled;
        case "tb:TbSquareArrowLeftFilled":
            return TbSquareArrowLeftFilled;
        case "tb:TbSquareArrowRightFilled":
            return TbSquareArrowRightFilled;
        case "tb:TbSquareArrowUpFilled":
            return TbSquareArrowUpFilled;
        case "tb:TbSquareAsteriskFilled":
            return TbSquareAsteriskFilled;
        case "tb:TbSquareCheckFilled":
            return TbSquareCheckFilled;
        case "tb:TbSquareChevronDownFilled":
            return TbSquareChevronDownFilled;
        case "tb:TbSquareChevronLeftFilled":
            return TbSquareChevronLeftFilled;
        case "tb:TbSquareChevronRightFilled":
            return TbSquareChevronRightFilled;
        case "tb:TbSquareChevronUpFilled":
            return TbSquareChevronUpFilled;
        case "tb:TbSquareChevronsDownFilled":
            return TbSquareChevronsDownFilled;
        case "tb:TbSquareChevronsLeftFilled":
            return TbSquareChevronsLeftFilled;
        case "tb:TbSquareChevronsRightFilled":
            return TbSquareChevronsRightFilled;
        case "tb:TbSquareChevronsUpFilled":
            return TbSquareChevronsUpFilled;
        case "tb:TbSquareDotFilled":
            return TbSquareDotFilled;
        case "tb:TbSquareF0Filled":
            return TbSquareF0Filled;
        case "tb:TbSquareF1Filled":
            return TbSquareF1Filled;
        case "tb:TbSquareF2Filled":
            return TbSquareF2Filled;
        case "tb:TbSquareF3Filled":
            return TbSquareF3Filled;
        case "tb:TbSquareF4Filled":
            return TbSquareF4Filled;
        case "tb:TbSquareF5Filled":
            return TbSquareF5Filled;
        case "tb:TbSquareF6Filled":
            return TbSquareF6Filled;
        case "tb:TbSquareF7Filled":
            return TbSquareF7Filled;
        case "tb:TbSquareF8Filled":
            return TbSquareF8Filled;
        case "tb:TbSquareF9Filled":
            return TbSquareF9Filled;
        case "tb:TbSquareLetterAFilled":
            return TbSquareLetterAFilled;
        case "tb:TbSquareLetterBFilled":
            return TbSquareLetterBFilled;
        case "tb:TbSquareLetterCFilled":
            return TbSquareLetterCFilled;
        case "tb:TbSquareLetterDFilled":
            return TbSquareLetterDFilled;
        case "tb:TbSquareLetterEFilled":
            return TbSquareLetterEFilled;
        case "tb:TbSquareLetterFFilled":
            return TbSquareLetterFFilled;
        case "tb:TbSquareLetterGFilled":
            return TbSquareLetterGFilled;
        case "tb:TbSquareLetterHFilled":
            return TbSquareLetterHFilled;
        case "tb:TbSquareLetterIFilled":
            return TbSquareLetterIFilled;
        case "tb:TbSquareLetterJFilled":
            return TbSquareLetterJFilled;
        case "tb:TbSquareLetterKFilled":
            return TbSquareLetterKFilled;
        case "tb:TbSquareLetterLFilled":
            return TbSquareLetterLFilled;
        case "tb:TbSquareLetterMFilled":
            return TbSquareLetterMFilled;
        case "tb:TbSquareLetterNFilled":
            return TbSquareLetterNFilled;
        case "tb:TbSquareLetterOFilled":
            return TbSquareLetterOFilled;
        case "tb:TbSquareLetterPFilled":
            return TbSquareLetterPFilled;
        case "tb:TbSquareLetterQFilled":
            return TbSquareLetterQFilled;
        case "tb:TbSquareLetterRFilled":
            return TbSquareLetterRFilled;
        case "tb:TbSquareLetterSFilled":
            return TbSquareLetterSFilled;
        case "tb:TbSquareLetterTFilled":
            return TbSquareLetterTFilled;
        case "tb:TbSquareLetterUFilled":
            return TbSquareLetterUFilled;
        case "tb:TbSquareLetterVFilled":
            return TbSquareLetterVFilled;
        case "tb:TbSquareLetterWFilled":
            return TbSquareLetterWFilled;
        case "tb:TbSquareLetterXFilled":
            return TbSquareLetterXFilled;
        case "tb:TbSquareLetterYFilled":
            return TbSquareLetterYFilled;
        case "tb:TbSquareLetterZFilled":
            return TbSquareLetterZFilled;
        case "tb:TbSquareMinusFilled":
            return TbSquareMinusFilled;
        case "tb:TbSquareNumber0Filled":
            return TbSquareNumber0Filled;
        case "tb:TbSquareNumber1Filled":
            return TbSquareNumber1Filled;
        case "tb:TbSquareNumber2Filled":
            return TbSquareNumber2Filled;
        case "tb:TbSquareNumber3Filled":
            return TbSquareNumber3Filled;
        case "tb:TbSquareNumber4Filled":
            return TbSquareNumber4Filled;
        case "tb:TbSquareNumber5Filled":
            return TbSquareNumber5Filled;
        case "tb:TbSquareNumber6Filled":
            return TbSquareNumber6Filled;
        case "tb:TbSquareNumber7Filled":
            return TbSquareNumber7Filled;
        case "tb:TbSquareNumber8Filled":
            return TbSquareNumber8Filled;
        case "tb:TbSquareNumber9Filled":
            return TbSquareNumber9Filled;
        case "tb:TbSquareRotatedFilled":
            return TbSquareRotatedFilled;
        case "tb:TbSquareRoundedArrowDownFilled":
            return TbSquareRoundedArrowDownFilled;
        case "tb:TbSquareRoundedArrowLeftFilled":
            return TbSquareRoundedArrowLeftFilled;
        case "tb:TbSquareRoundedArrowRightFilled":
            return TbSquareRoundedArrowRightFilled;
        case "tb:TbSquareRoundedArrowUpFilled":
            return TbSquareRoundedArrowUpFilled;
        case "tb:TbSquareRoundedCheckFilled":
            return TbSquareRoundedCheckFilled;
        case "tb:TbSquareRoundedChevronDownFilled":
            return TbSquareRoundedChevronDownFilled;
        case "tb:TbSquareRoundedChevronLeftFilled":
            return TbSquareRoundedChevronLeftFilled;
        case "tb:TbSquareRoundedChevronRightFilled":
            return TbSquareRoundedChevronRightFilled;
        case "tb:TbSquareRoundedChevronUpFilled":
            return TbSquareRoundedChevronUpFilled;
        case "tb:TbSquareRoundedChevronsDownFilled":
            return TbSquareRoundedChevronsDownFilled;
        case "tb:TbSquareRoundedChevronsLeftFilled":
            return TbSquareRoundedChevronsLeftFilled;
        case "tb:TbSquareRoundedChevronsRightFilled":
            return TbSquareRoundedChevronsRightFilled;
        case "tb:TbSquareRoundedChevronsUpFilled":
            return TbSquareRoundedChevronsUpFilled;
        case "tb:TbSquareRoundedLetterAFilled":
            return TbSquareRoundedLetterAFilled;
        case "tb:TbSquareRoundedLetterBFilled":
            return TbSquareRoundedLetterBFilled;
        case "tb:TbSquareRoundedLetterCFilled":
            return TbSquareRoundedLetterCFilled;
        case "tb:TbSquareRoundedLetterDFilled":
            return TbSquareRoundedLetterDFilled;
        case "tb:TbSquareRoundedLetterEFilled":
            return TbSquareRoundedLetterEFilled;
        case "tb:TbSquareRoundedLetterFFilled":
            return TbSquareRoundedLetterFFilled;
        case "tb:TbSquareRoundedLetterGFilled":
            return TbSquareRoundedLetterGFilled;
        case "tb:TbSquareRoundedLetterHFilled":
            return TbSquareRoundedLetterHFilled;
        case "tb:TbSquareRoundedLetterIFilled":
            return TbSquareRoundedLetterIFilled;
        case "tb:TbSquareRoundedLetterJFilled":
            return TbSquareRoundedLetterJFilled;
        case "tb:TbSquareRoundedLetterKFilled":
            return TbSquareRoundedLetterKFilled;
        case "tb:TbSquareRoundedLetterLFilled":
            return TbSquareRoundedLetterLFilled;
        case "tb:TbSquareRoundedLetterMFilled":
            return TbSquareRoundedLetterMFilled;
        case "tb:TbSquareRoundedLetterNFilled":
            return TbSquareRoundedLetterNFilled;
        case "tb:TbSquareRoundedLetterOFilled":
            return TbSquareRoundedLetterOFilled;
        case "tb:TbSquareRoundedLetterPFilled":
            return TbSquareRoundedLetterPFilled;
        case "tb:TbSquareRoundedLetterQFilled":
            return TbSquareRoundedLetterQFilled;
        case "tb:TbSquareRoundedLetterRFilled":
            return TbSquareRoundedLetterRFilled;
        case "tb:TbSquareRoundedLetterSFilled":
            return TbSquareRoundedLetterSFilled;
        case "tb:TbSquareRoundedLetterTFilled":
            return TbSquareRoundedLetterTFilled;
        case "tb:TbSquareRoundedLetterUFilled":
            return TbSquareRoundedLetterUFilled;
        case "tb:TbSquareRoundedLetterVFilled":
            return TbSquareRoundedLetterVFilled;
        case "tb:TbSquareRoundedLetterWFilled":
            return TbSquareRoundedLetterWFilled;
        case "tb:TbSquareRoundedLetterXFilled":
            return TbSquareRoundedLetterXFilled;
        case "tb:TbSquareRoundedLetterYFilled":
            return TbSquareRoundedLetterYFilled;
        case "tb:TbSquareRoundedLetterZFilled":
            return TbSquareRoundedLetterZFilled;
        case "tb:TbSquareRoundedMinusFilled":
            return TbSquareRoundedMinusFilled;
        case "tb:TbSquareRoundedNumber0Filled":
            return TbSquareRoundedNumber0Filled;
        case "tb:TbSquareRoundedNumber1Filled":
            return TbSquareRoundedNumber1Filled;
        case "tb:TbSquareRoundedNumber2Filled":
            return TbSquareRoundedNumber2Filled;
        case "tb:TbSquareRoundedNumber3Filled":
            return TbSquareRoundedNumber3Filled;
        case "tb:TbSquareRoundedNumber4Filled":
            return TbSquareRoundedNumber4Filled;
        case "tb:TbSquareRoundedNumber5Filled":
            return TbSquareRoundedNumber5Filled;
        case "tb:TbSquareRoundedNumber6Filled":
            return TbSquareRoundedNumber6Filled;
        case "tb:TbSquareRoundedNumber7Filled":
            return TbSquareRoundedNumber7Filled;
        case "tb:TbSquareRoundedNumber8Filled":
            return TbSquareRoundedNumber8Filled;
        case "tb:TbSquareRoundedNumber9Filled":
            return TbSquareRoundedNumber9Filled;
        case "tb:TbSquareRoundedPlusFilled":
            return TbSquareRoundedPlusFilled;
        case "tb:TbSquareRoundedXFilled":
            return TbSquareRoundedXFilled;
        case "tb:TbSquareRoundedFilled":
            return TbSquareRoundedFilled;
        case "tb:TbSquareXFilled":
            return TbSquareXFilled;
        case "tb:TbSquareFilled":
            return TbSquareFilled;
        case "tb:TbSquaresFilled":
            return TbSquaresFilled;
        case "tb:TbStack2Filled":
            return TbStack2Filled;
        case "tb:TbStack3Filled":
            return TbStack3Filled;
        case "tb:TbStackFilled":
            return TbStackFilled;
        case "tb:TbStarHalfFilled":
            return TbStarHalfFilled;
        case "tb:TbStarFilled":
            return TbStarFilled;
        case "tb:TbStarsFilled":
            return TbStarsFilled;
        case "tb:TbSteeringWheelFilled":
            return TbSteeringWheelFilled;
        case "tb:TbSunFilled":
            return TbSunFilled;
        case "tb:TbSunglassesFilled":
            return TbSunglassesFilled;
        case "tb:TbSwipeDownFilled":
            return TbSwipeDownFilled;
        case "tb:TbSwipeLeftFilled":
            return TbSwipeLeftFilled;
        case "tb:TbSwipeRightFilled":
            return TbSwipeRightFilled;
        case "tb:TbSwipeUpFilled":
            return TbSwipeUpFilled;
        case "tb:TbTableFilled":
            return TbTableFilled;
        case "tb:TbTagFilled":
            return TbTagFilled;
        case "tb:TbTagsFilled":
            return TbTagsFilled;
        case "tb:TbTestPipe2Filled":
            return TbTestPipe2Filled;
        case "tb:TbThumbDownFilled":
            return TbThumbDownFilled;
        case "tb:TbThumbUpFilled":
            return TbThumbUpFilled;
        case "tb:TbTiltShiftFilled":
            return TbTiltShiftFilled;
        case "tb:TbTimelineEventFilled":
            return TbTimelineEventFilled;
        case "tb:TbToggleLeftFilled":
            return TbToggleLeftFilled;
        case "tb:TbToggleRightFilled":
            return TbToggleRightFilled;
        case "tb:TbTransformFilled":
            return TbTransformFilled;
        case "tb:TbTransitionBottomFilled":
            return TbTransitionBottomFilled;
        case "tb:TbTransitionLeftFilled":
            return TbTransitionLeftFilled;
        case "tb:TbTransitionRightFilled":
            return TbTransitionRightFilled;
        case "tb:TbTransitionTopFilled":
            return TbTransitionTopFilled;
        case "tb:TbTrashXFilled":
            return TbTrashXFilled;
        case "tb:TbTrashFilled":
            return TbTrashFilled;
        case "tb:TbTriangleInvertedFilled":
            return TbTriangleInvertedFilled;
        case "tb:TbTriangleSquareCircleFilled":
            return TbTriangleSquareCircleFilled;
        case "tb:TbTriangleFilled":
            return TbTriangleFilled;
        case "tb:TbTrophyFilled":
            return TbTrophyFilled;
        case "tb:TbUmbrellaFilled":
            return TbUmbrellaFilled;
        case "tb:TbUserFilled":
            return TbUserFilled;
        case "tb:TbVersionsFilled":
            return TbVersionsFilled;
        case "tb:TbVideoFilled":
            return TbVideoFilled;
        case "tb:TbWindmillFilled":
            return TbWindmillFilled;
        case "tb:TbWindsockFilled":
            return TbWindsockFilled;
        case "tb:TbWomanFilled":
            return TbWomanFilled;
        case "tb:TbXboxAFilled":
            return TbXboxAFilled;
        case "tb:TbXboxBFilled":
            return TbXboxBFilled;
        case "tb:TbXboxXFilled":
            return TbXboxXFilled;
        case "tb:TbXboxYFilled":
            return TbXboxYFilled;
        case "tb:TbYinYangFilled":
            return TbYinYangFilled;
        case "tb:TbZeppelinFilled":
            return TbZeppelinFilled;
        case "tb:TbZoomCancelFilled":
            return TbZoomCancelFilled;
        case "tb:TbZoomCheckFilled":
            return TbZoomCheckFilled;
        case "tb:TbZoomCodeFilled":
            return TbZoomCodeFilled;
        case "tb:TbZoomExclamationFilled":
            return TbZoomExclamationFilled;
        case "tb:TbZoomInAreaFilled":
            return TbZoomInAreaFilled;
        case "tb:TbZoomInFilled":
            return TbZoomInFilled;
        case "tb:TbZoomMoneyFilled":
            return TbZoomMoneyFilled;
        case "tb:TbZoomOutAreaFilled":
            return TbZoomOutAreaFilled;
        case "tb:TbZoomOutFilled":
            return TbZoomOutFilled;
        case "tb:TbZoomPanFilled":
            return TbZoomPanFilled;
        case "tb:TbZoomQuestionFilled":
            return TbZoomQuestionFilled;
        case "tb:TbZoomScanFilled":
            return TbZoomScanFilled;
        case "tb:TbZoomFilled":
            return TbZoomFilled;
        case "tb:TbAB2":
            return TbAB2;
        case "tb:TbABOff":
            return TbABOff;
        case "tb:TbAB":
            return TbAB;
        case "tb:TbAbacusOff":
            return TbAbacusOff;
        case "tb:TbAbacus":
            return TbAbacus;
        case "tb:TbAbc":
            return TbAbc;
        case "tb:TbAccessPointOff":
            return TbAccessPointOff;
        case "tb:TbAccessPoint":
            return TbAccessPoint;
        case "tb:TbAccessibleOff":
            return TbAccessibleOff;
        case "tb:TbAccessible":
            return TbAccessible;
        case "tb:TbActivityHeartbeat":
            return TbActivityHeartbeat;
        case "tb:TbActivity":
            return TbActivity;
        case "tb:TbAd2":
            return TbAd2;
        case "tb:TbAdCircleOff":
            return TbAdCircleOff;
        case "tb:TbAdCircle":
            return TbAdCircle;
        case "tb:TbAdOff":
            return TbAdOff;
        case "tb:TbAd":
            return TbAd;
        case "tb:TbAddressBookOff":
            return TbAddressBookOff;
        case "tb:TbAddressBook":
            return TbAddressBook;
        case "tb:TbAdjustmentsAlt":
            return TbAdjustmentsAlt;
        case "tb:TbAdjustmentsBolt":
            return TbAdjustmentsBolt;
        case "tb:TbAdjustmentsCancel":
            return TbAdjustmentsCancel;
        case "tb:TbAdjustmentsCheck":
            return TbAdjustmentsCheck;
        case "tb:TbAdjustmentsCode":
            return TbAdjustmentsCode;
        case "tb:TbAdjustmentsCog":
            return TbAdjustmentsCog;
        case "tb:TbAdjustmentsDollar":
            return TbAdjustmentsDollar;
        case "tb:TbAdjustmentsDown":
            return TbAdjustmentsDown;
        case "tb:TbAdjustmentsExclamation":
            return TbAdjustmentsExclamation;
        case "tb:TbAdjustmentsHeart":
            return TbAdjustmentsHeart;
        case "tb:TbAdjustmentsHorizontal":
            return TbAdjustmentsHorizontal;
        case "tb:TbAdjustmentsMinus":
            return TbAdjustmentsMinus;
        case "tb:TbAdjustmentsOff":
            return TbAdjustmentsOff;
        case "tb:TbAdjustmentsPause":
            return TbAdjustmentsPause;
        case "tb:TbAdjustmentsPin":
            return TbAdjustmentsPin;
        case "tb:TbAdjustmentsPlus":
            return TbAdjustmentsPlus;
        case "tb:TbAdjustmentsQuestion":
            return TbAdjustmentsQuestion;
        case "tb:TbAdjustmentsSearch":
            return TbAdjustmentsSearch;
        case "tb:TbAdjustmentsShare":
            return TbAdjustmentsShare;
        case "tb:TbAdjustmentsSpark":
            return TbAdjustmentsSpark;
        case "tb:TbAdjustmentsStar":
            return TbAdjustmentsStar;
        case "tb:TbAdjustmentsUp":
            return TbAdjustmentsUp;
        case "tb:TbAdjustmentsX":
            return TbAdjustmentsX;
        case "tb:TbAdjustments":
            return TbAdjustments;
        case "tb:TbAerialLift":
            return TbAerialLift;
        case "tb:TbAffiliate":
            return TbAffiliate;
        case "tb:TbAi":
            return TbAi;
        case "tb:TbAirBalloon":
            return TbAirBalloon;
        case "tb:TbAirConditioningDisabled":
            return TbAirConditioningDisabled;
        case "tb:TbAirConditioning":
            return TbAirConditioning;
        case "tb:TbAirTrafficControl":
            return TbAirTrafficControl;
        case "tb:TbAlarmAverage":
            return TbAlarmAverage;
        case "tb:TbAlarmMinus":
            return TbAlarmMinus;
        case "tb:TbAlarmOff":
            return TbAlarmOff;
        case "tb:TbAlarmPlus":
            return TbAlarmPlus;
        case "tb:TbAlarmSmoke":
            return TbAlarmSmoke;
        case "tb:TbAlarmSnooze":
            return TbAlarmSnooze;
        case "tb:TbAlarm":
            return TbAlarm;
        case "tb:TbAlbumOff":
            return TbAlbumOff;
        case "tb:TbAlbum":
            return TbAlbum;
        case "tb:TbAlertCircleOff":
            return TbAlertCircleOff;
        case "tb:TbAlertCircle":
            return TbAlertCircle;
        case "tb:TbAlertHexagonOff":
            return TbAlertHexagonOff;
        case "tb:TbAlertHexagon":
            return TbAlertHexagon;
        case "tb:TbAlertOctagon":
            return TbAlertOctagon;
        case "tb:TbAlertSmallOff":
            return TbAlertSmallOff;
        case "tb:TbAlertSmall":
            return TbAlertSmall;
        case "tb:TbAlertSquareRoundedOff":
            return TbAlertSquareRoundedOff;
        case "tb:TbAlertSquareRounded":
            return TbAlertSquareRounded;
        case "tb:TbAlertSquare":
            return TbAlertSquare;
        case "tb:TbAlertTriangleOff":
            return TbAlertTriangleOff;
        case "tb:TbAlertTriangle":
            return TbAlertTriangle;
        case "tb:TbAlien":
            return TbAlien;
        case "tb:TbAlignBoxBottomCenter":
            return TbAlignBoxBottomCenter;
        case "tb:TbAlignBoxBottomLeft":
            return TbAlignBoxBottomLeft;
        case "tb:TbAlignBoxBottomRight":
            return TbAlignBoxBottomRight;
        case "tb:TbAlignBoxCenterBottom":
            return TbAlignBoxCenterBottom;
        case "tb:TbAlignBoxCenterMiddle":
            return TbAlignBoxCenterMiddle;
        case "tb:TbAlignBoxCenterStretch":
            return TbAlignBoxCenterStretch;
        case "tb:TbAlignBoxCenterTop":
            return TbAlignBoxCenterTop;
        case "tb:TbAlignBoxLeftBottom":
            return TbAlignBoxLeftBottom;
        case "tb:TbAlignBoxLeftMiddle":
            return TbAlignBoxLeftMiddle;
        case "tb:TbAlignBoxLeftStretch":
            return TbAlignBoxLeftStretch;
        case "tb:TbAlignBoxLeftTop":
            return TbAlignBoxLeftTop;
        case "tb:TbAlignBoxRightBottom":
            return TbAlignBoxRightBottom;
        case "tb:TbAlignBoxRightMiddle":
            return TbAlignBoxRightMiddle;
        case "tb:TbAlignBoxRightStretch":
            return TbAlignBoxRightStretch;
        case "tb:TbAlignBoxRightTop":
            return TbAlignBoxRightTop;
        case "tb:TbAlignBoxTopCenter":
            return TbAlignBoxTopCenter;
        case "tb:TbAlignBoxTopLeft":
            return TbAlignBoxTopLeft;
        case "tb:TbAlignBoxTopRight":
            return TbAlignBoxTopRight;
        case "tb:TbAlignCenter":
            return TbAlignCenter;
        case "tb:TbAlignJustified":
            return TbAlignJustified;
        case "tb:TbAlignLeft2":
            return TbAlignLeft2;
        case "tb:TbAlignLeft":
            return TbAlignLeft;
        case "tb:TbAlignRight2":
            return TbAlignRight2;
        case "tb:TbAlignRight":
            return TbAlignRight;
        case "tb:TbAlpha":
            return TbAlpha;
        case "tb:TbAlphabetArabic":
            return TbAlphabetArabic;
        case "tb:TbAlphabetBangla":
            return TbAlphabetBangla;
        case "tb:TbAlphabetCyrillic":
            return TbAlphabetCyrillic;
        case "tb:TbAlphabetGreek":
            return TbAlphabetGreek;
        case "tb:TbAlphabetHebrew":
            return TbAlphabetHebrew;
        case "tb:TbAlphabetKorean":
            return TbAlphabetKorean;
        case "tb:TbAlphabetLatin":
            return TbAlphabetLatin;
        case "tb:TbAlphabetThai":
            return TbAlphabetThai;
        case "tb:TbAlt":
            return TbAlt;
        case "tb:TbAmbulance":
            return TbAmbulance;
        case "tb:TbAmpersand":
            return TbAmpersand;
        case "tb:TbAnalyzeOff":
            return TbAnalyzeOff;
        case "tb:TbAnalyze":
            return TbAnalyze;
        case "tb:TbAnchorOff":
            return TbAnchorOff;
        case "tb:TbAnchor":
            return TbAnchor;
        case "tb:TbAngle":
            return TbAngle;
        case "tb:TbAnkh":
            return TbAnkh;
        case "tb:TbAntennaBars1":
            return TbAntennaBars1;
        case "tb:TbAntennaBars2":
            return TbAntennaBars2;
        case "tb:TbAntennaBars3":
            return TbAntennaBars3;
        case "tb:TbAntennaBars4":
            return TbAntennaBars4;
        case "tb:TbAntennaBars5":
            return TbAntennaBars5;
        case "tb:TbAntennaBarsOff":
            return TbAntennaBarsOff;
        case "tb:TbAntennaOff":
            return TbAntennaOff;
        case "tb:TbAntenna":
            return TbAntenna;
        case "tb:TbApertureOff":
            return TbApertureOff;
        case "tb:TbAperture":
            return TbAperture;
        case "tb:TbApiAppOff":
            return TbApiAppOff;
        case "tb:TbApiApp":
            return TbApiApp;
        case "tb:TbApiOff":
            return TbApiOff;
        case "tb:TbApi":
            return TbApi;
        case "tb:TbAppWindow":
            return TbAppWindow;
        case "tb:TbApple":
            return TbApple;
        case "tb:TbAppsOff":
            return TbAppsOff;
        case "tb:TbApps":
            return TbApps;
        case "tb:TbArcheryArrow":
            return TbArcheryArrow;
        case "tb:TbArchiveOff":
            return TbArchiveOff;
        case "tb:TbArchive":
            return TbArchive;
        case "tb:TbArmchair2Off":
            return TbArmchair2Off;
        case "tb:TbArmchair2":
            return TbArmchair2;
        case "tb:TbArmchairOff":
            return TbArmchairOff;
        case "tb:TbArmchair":
            return TbArmchair;
        case "tb:TbArrowAutofitContent":
            return TbArrowAutofitContent;
        case "tb:TbArrowAutofitDown":
            return TbArrowAutofitDown;
        case "tb:TbArrowAutofitHeight":
            return TbArrowAutofitHeight;
        case "tb:TbArrowAutofitLeft":
            return TbArrowAutofitLeft;
        case "tb:TbArrowAutofitRight":
            return TbArrowAutofitRight;
        case "tb:TbArrowAutofitUp":
            return TbArrowAutofitUp;
        case "tb:TbArrowAutofitWidth":
            return TbArrowAutofitWidth;
        case "tb:TbArrowBackUpDouble":
            return TbArrowBackUpDouble;
        case "tb:TbArrowBackUp":
            return TbArrowBackUp;
        case "tb:TbArrowBack":
            return TbArrowBack;
        case "tb:TbArrowBadgeDown":
            return TbArrowBadgeDown;
        case "tb:TbArrowBadgeLeft":
            return TbArrowBadgeLeft;
    }
}
