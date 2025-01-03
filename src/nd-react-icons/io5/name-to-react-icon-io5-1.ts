import type {IconType} from "react-icons";

import {
    IoPricetagsSharp,
    IoPricetags,
    IoPrintOutline,
    IoPrintSharp,
    IoPrint,
    IoPrismOutline,
    IoPrismSharp,
    IoPrism,
    IoPulseOutline,
    IoPulseSharp,
    IoPulse,
    IoPushOutline,
    IoPushSharp,
    IoPush,
    IoQrCodeOutline,
    IoQrCodeSharp,
    IoQrCode,
    IoRadioButtonOffOutline,
    IoRadioButtonOffSharp,
    IoRadioButtonOff,
    IoRadioButtonOnOutline,
    IoRadioButtonOnSharp,
    IoRadioButtonOn,
    IoRadioOutline,
    IoRadioSharp,
    IoRadio,
    IoRainyOutline,
    IoRainySharp,
    IoRainy,
    IoReaderOutline,
    IoReaderSharp,
    IoReader,
    IoReceiptOutline,
    IoReceiptSharp,
    IoReceipt,
    IoRecordingOutline,
    IoRecordingSharp,
    IoRecording,
    IoRefreshCircleOutline,
    IoRefreshCircleSharp,
    IoRefreshCircle,
    IoRefreshOutline,
    IoRefreshSharp,
    IoRefresh,
    IoReloadCircleOutline,
    IoReloadCircleSharp,
    IoReloadCircle,
    IoReloadOutline,
    IoReloadSharp,
    IoReload,
    IoRemoveCircleOutline,
    IoRemoveCircleSharp,
    IoRemoveCircle,
    IoRemoveOutline,
    IoRemoveSharp,
    IoRemove,
    IoReorderFourOutline,
    IoReorderFourSharp,
    IoReorderFour,
    IoReorderThreeOutline,
    IoReorderThreeSharp,
    IoReorderThree,
    IoReorderTwoOutline,
    IoReorderTwoSharp,
    IoReorderTwo,
    IoRepeatOutline,
    IoRepeatSharp,
    IoRepeat,
    IoResizeOutline,
    IoResizeSharp,
    IoResize,
    IoRestaurantOutline,
    IoRestaurantSharp,
    IoRestaurant,
    IoReturnDownBackOutline,
    IoReturnDownBackSharp,
    IoReturnDownBack,
    IoReturnDownForwardOutline,
    IoReturnDownForwardSharp,
    IoReturnDownForward,
    IoReturnUpBackOutline,
    IoReturnUpBackSharp,
    IoReturnUpBack,
    IoReturnUpForwardOutline,
    IoReturnUpForwardSharp,
    IoReturnUpForward,
    IoRibbonOutline,
    IoRibbonSharp,
    IoRibbon,
    IoRocketOutline,
    IoRocketSharp,
    IoRocket,
    IoRoseOutline,
    IoRoseSharp,
    IoRose,
    IoSadOutline,
    IoSadSharp,
    IoSad,
    IoSaveOutline,
    IoSaveSharp,
    IoSave,
    IoScaleOutline,
    IoScaleSharp,
    IoScale,
    IoScanCircleOutline,
    IoScanCircleSharp,
    IoScanCircle,
    IoScanOutline,
    IoScanSharp,
    IoScan,
    IoSchoolOutline,
    IoSchoolSharp,
    IoSchool,
    IoSearchCircleOutline,
    IoSearchCircleSharp,
    IoSearchCircle,
    IoSearchOutline,
    IoSearchSharp,
    IoSearch,
    IoSendOutline,
    IoSendSharp,
    IoSend,
    IoServerOutline,
    IoServerSharp,
    IoServer,
    IoSettingsOutline,
    IoSettingsSharp,
    IoSettings,
    IoShapesOutline,
    IoShapesSharp,
    IoShapes,
    IoShareOutline,
    IoShareSharp,
    IoShareSocialOutline,
    IoShareSocialSharp,
    IoShareSocial,
    IoShare,
    IoShieldCheckmarkOutline,
    IoShieldCheckmarkSharp,
    IoShieldCheckmark,
    IoShieldHalfOutline,
    IoShieldHalfSharp,
    IoShieldHalf,
    IoShieldOutline,
    IoShieldSharp,
    IoShield,
    IoShirtOutline,
    IoShirtSharp,
    IoShirt,
    IoShuffleOutline,
    IoShuffleSharp,
    IoShuffle,
    IoSkullOutline,
    IoSkullSharp,
    IoSkull,
    IoSnowOutline,
    IoSnowSharp,
    IoSnow,
    IoSparklesOutline,
    IoSparklesSharp,
    IoSparkles,
    IoSpeedometerOutline,
    IoSpeedometerSharp,
    IoSpeedometer,
    IoSquareOutline,
    IoSquareSharp,
    IoSquare,
    IoStarHalfOutline,
    IoStarHalfSharp,
    IoStarHalf,
    IoStarOutline,
    IoStarSharp,
    IoStar,
    IoStatsChartOutline,
    IoStatsChartSharp,
    IoStatsChart,
    IoStopCircleOutline,
    IoStopCircleSharp,
    IoStopCircle,
    IoStopOutline,
    IoStopSharp,
    IoStop,
    IoStopwatchOutline,
    IoStopwatchSharp,
    IoStopwatch,
    IoStorefrontOutline,
    IoStorefrontSharp,
    IoStorefront,
    IoSubwayOutline,
    IoSubwaySharp,
    IoSubway,
    IoSunnyOutline,
    IoSunnySharp,
    IoSunny,
    IoSwapHorizontalOutline,
    IoSwapHorizontalSharp,
    IoSwapHorizontal,
    IoSwapVerticalOutline,
    IoSwapVerticalSharp,
    IoSwapVertical,
    IoSyncCircleOutline,
    IoSyncCircleSharp,
    IoSyncCircle,
    IoSyncOutline,
    IoSyncSharp,
    IoSync,
    IoTabletLandscapeOutline,
    IoTabletLandscapeSharp,
    IoTabletLandscape,
    IoTabletPortraitOutline,
    IoTabletPortraitSharp,
    IoTabletPortrait,
    IoTelescopeOutline,
    IoTelescopeSharp,
    IoTelescope,
    IoTennisballOutline,
    IoTennisballSharp,
    IoTennisball,
    IoTerminalOutline,
    IoTerminalSharp,
    IoTerminal,
    IoTextOutline,
    IoTextSharp,
    IoText,
    IoThermometerOutline,
    IoThermometerSharp,
    IoThermometer,
    IoThumbsDownOutline,
    IoThumbsDownSharp,
    IoThumbsDown,
    IoThumbsUpOutline,
    IoThumbsUpSharp,
    IoThumbsUp,
    IoThunderstormOutline,
    IoThunderstormSharp,
    IoThunderstorm,
    IoTicketOutline,
    IoTicketSharp,
    IoTicket,
    IoTimeOutline,
    IoTimeSharp,
    IoTime,
    IoTimerOutline,
    IoTimerSharp,
    IoTimer,
    IoTodayOutline,
    IoTodaySharp,
    IoToday,
    IoToggleOutline,
    IoToggleSharp,
    IoToggle,
    IoTrailSignOutline,
    IoTrailSignSharp,
    IoTrailSign,
    IoTrainOutline,
    IoTrainSharp,
    IoTrain,
    IoTransgenderOutline,
    IoTransgenderSharp,
    IoTransgender,
    IoTrashBinOutline,
    IoTrashBinSharp,
    IoTrashBin,
    IoTrashOutline,
    IoTrashSharp,
    IoTrash,
    IoTrendingDownOutline,
    IoTrendingDownSharp,
    IoTrendingDown,
    IoTrendingUpOutline,
    IoTrendingUpSharp,
    IoTrendingUp,
    IoTriangleOutline,
    IoTriangleSharp,
    IoTriangle,
    IoTrophyOutline,
    IoTrophySharp,
    IoTrophy,
    IoTvOutline,
    IoTvSharp,
    IoTv,
    IoUmbrellaOutline,
    IoUmbrellaSharp,
    IoUmbrella,
    IoUnlinkOutline,
    IoUnlinkSharp,
    IoUnlink,
    IoVideocamOffOutline,
    IoVideocamOffSharp,
    IoVideocamOff,
    IoVideocamOutline,
    IoVideocamSharp,
    IoVideocam,
    IoVolumeHighOutline,
    IoVolumeHighSharp,
    IoVolumeHigh,
    IoVolumeLowOutline,
    IoVolumeLowSharp,
    IoVolumeLow,
    IoVolumeMediumOutline,
    IoVolumeMediumSharp,
    IoVolumeMedium,
    IoVolumeMuteOutline,
    IoVolumeMuteSharp,
    IoVolumeMute,
    IoVolumeOffOutline,
    IoVolumeOffSharp,
    IoVolumeOff,
    IoWalkOutline,
    IoWalkSharp,
    IoWalk,
    IoWalletOutline,
    IoWalletSharp,
    IoWallet,
    IoWarningOutline,
    IoWarningSharp,
    IoWarning,
    IoWatchOutline,
    IoWatchSharp,
    IoWatch,
    IoWaterOutline,
    IoWaterSharp,
    IoWater,
    IoWifiOutline,
    IoWifiSharp,
    IoWifi,
    IoWineOutline,
    IoWineSharp,
    IoWine,
    IoWomanOutline,
    IoWomanSharp,
    IoWoman,
} from "react-icons/io5"

export function nameToReactIcon_io5_1(iconName: string): IconType | undefined {

    switch(iconName) {
        case "io5:IoPricetagsSharp":
            return IoPricetagsSharp;
        case "io5:IoPricetags":
            return IoPricetags;
        case "io5:IoPrintOutline":
            return IoPrintOutline;
        case "io5:IoPrintSharp":
            return IoPrintSharp;
        case "io5:IoPrint":
            return IoPrint;
        case "io5:IoPrismOutline":
            return IoPrismOutline;
        case "io5:IoPrismSharp":
            return IoPrismSharp;
        case "io5:IoPrism":
            return IoPrism;
        case "io5:IoPulseOutline":
            return IoPulseOutline;
        case "io5:IoPulseSharp":
            return IoPulseSharp;
        case "io5:IoPulse":
            return IoPulse;
        case "io5:IoPushOutline":
            return IoPushOutline;
        case "io5:IoPushSharp":
            return IoPushSharp;
        case "io5:IoPush":
            return IoPush;
        case "io5:IoQrCodeOutline":
            return IoQrCodeOutline;
        case "io5:IoQrCodeSharp":
            return IoQrCodeSharp;
        case "io5:IoQrCode":
            return IoQrCode;
        case "io5:IoRadioButtonOffOutline":
            return IoRadioButtonOffOutline;
        case "io5:IoRadioButtonOffSharp":
            return IoRadioButtonOffSharp;
        case "io5:IoRadioButtonOff":
            return IoRadioButtonOff;
        case "io5:IoRadioButtonOnOutline":
            return IoRadioButtonOnOutline;
        case "io5:IoRadioButtonOnSharp":
            return IoRadioButtonOnSharp;
        case "io5:IoRadioButtonOn":
            return IoRadioButtonOn;
        case "io5:IoRadioOutline":
            return IoRadioOutline;
        case "io5:IoRadioSharp":
            return IoRadioSharp;
        case "io5:IoRadio":
            return IoRadio;
        case "io5:IoRainyOutline":
            return IoRainyOutline;
        case "io5:IoRainySharp":
            return IoRainySharp;
        case "io5:IoRainy":
            return IoRainy;
        case "io5:IoReaderOutline":
            return IoReaderOutline;
        case "io5:IoReaderSharp":
            return IoReaderSharp;
        case "io5:IoReader":
            return IoReader;
        case "io5:IoReceiptOutline":
            return IoReceiptOutline;
        case "io5:IoReceiptSharp":
            return IoReceiptSharp;
        case "io5:IoReceipt":
            return IoReceipt;
        case "io5:IoRecordingOutline":
            return IoRecordingOutline;
        case "io5:IoRecordingSharp":
            return IoRecordingSharp;
        case "io5:IoRecording":
            return IoRecording;
        case "io5:IoRefreshCircleOutline":
            return IoRefreshCircleOutline;
        case "io5:IoRefreshCircleSharp":
            return IoRefreshCircleSharp;
        case "io5:IoRefreshCircle":
            return IoRefreshCircle;
        case "io5:IoRefreshOutline":
            return IoRefreshOutline;
        case "io5:IoRefreshSharp":
            return IoRefreshSharp;
        case "io5:IoRefresh":
            return IoRefresh;
        case "io5:IoReloadCircleOutline":
            return IoReloadCircleOutline;
        case "io5:IoReloadCircleSharp":
            return IoReloadCircleSharp;
        case "io5:IoReloadCircle":
            return IoReloadCircle;
        case "io5:IoReloadOutline":
            return IoReloadOutline;
        case "io5:IoReloadSharp":
            return IoReloadSharp;
        case "io5:IoReload":
            return IoReload;
        case "io5:IoRemoveCircleOutline":
            return IoRemoveCircleOutline;
        case "io5:IoRemoveCircleSharp":
            return IoRemoveCircleSharp;
        case "io5:IoRemoveCircle":
            return IoRemoveCircle;
        case "io5:IoRemoveOutline":
            return IoRemoveOutline;
        case "io5:IoRemoveSharp":
            return IoRemoveSharp;
        case "io5:IoRemove":
            return IoRemove;
        case "io5:IoReorderFourOutline":
            return IoReorderFourOutline;
        case "io5:IoReorderFourSharp":
            return IoReorderFourSharp;
        case "io5:IoReorderFour":
            return IoReorderFour;
        case "io5:IoReorderThreeOutline":
            return IoReorderThreeOutline;
        case "io5:IoReorderThreeSharp":
            return IoReorderThreeSharp;
        case "io5:IoReorderThree":
            return IoReorderThree;
        case "io5:IoReorderTwoOutline":
            return IoReorderTwoOutline;
        case "io5:IoReorderTwoSharp":
            return IoReorderTwoSharp;
        case "io5:IoReorderTwo":
            return IoReorderTwo;
        case "io5:IoRepeatOutline":
            return IoRepeatOutline;
        case "io5:IoRepeatSharp":
            return IoRepeatSharp;
        case "io5:IoRepeat":
            return IoRepeat;
        case "io5:IoResizeOutline":
            return IoResizeOutline;
        case "io5:IoResizeSharp":
            return IoResizeSharp;
        case "io5:IoResize":
            return IoResize;
        case "io5:IoRestaurantOutline":
            return IoRestaurantOutline;
        case "io5:IoRestaurantSharp":
            return IoRestaurantSharp;
        case "io5:IoRestaurant":
            return IoRestaurant;
        case "io5:IoReturnDownBackOutline":
            return IoReturnDownBackOutline;
        case "io5:IoReturnDownBackSharp":
            return IoReturnDownBackSharp;
        case "io5:IoReturnDownBack":
            return IoReturnDownBack;
        case "io5:IoReturnDownForwardOutline":
            return IoReturnDownForwardOutline;
        case "io5:IoReturnDownForwardSharp":
            return IoReturnDownForwardSharp;
        case "io5:IoReturnDownForward":
            return IoReturnDownForward;
        case "io5:IoReturnUpBackOutline":
            return IoReturnUpBackOutline;
        case "io5:IoReturnUpBackSharp":
            return IoReturnUpBackSharp;
        case "io5:IoReturnUpBack":
            return IoReturnUpBack;
        case "io5:IoReturnUpForwardOutline":
            return IoReturnUpForwardOutline;
        case "io5:IoReturnUpForwardSharp":
            return IoReturnUpForwardSharp;
        case "io5:IoReturnUpForward":
            return IoReturnUpForward;
        case "io5:IoRibbonOutline":
            return IoRibbonOutline;
        case "io5:IoRibbonSharp":
            return IoRibbonSharp;
        case "io5:IoRibbon":
            return IoRibbon;
        case "io5:IoRocketOutline":
            return IoRocketOutline;
        case "io5:IoRocketSharp":
            return IoRocketSharp;
        case "io5:IoRocket":
            return IoRocket;
        case "io5:IoRoseOutline":
            return IoRoseOutline;
        case "io5:IoRoseSharp":
            return IoRoseSharp;
        case "io5:IoRose":
            return IoRose;
        case "io5:IoSadOutline":
            return IoSadOutline;
        case "io5:IoSadSharp":
            return IoSadSharp;
        case "io5:IoSad":
            return IoSad;
        case "io5:IoSaveOutline":
            return IoSaveOutline;
        case "io5:IoSaveSharp":
            return IoSaveSharp;
        case "io5:IoSave":
            return IoSave;
        case "io5:IoScaleOutline":
            return IoScaleOutline;
        case "io5:IoScaleSharp":
            return IoScaleSharp;
        case "io5:IoScale":
            return IoScale;
        case "io5:IoScanCircleOutline":
            return IoScanCircleOutline;
        case "io5:IoScanCircleSharp":
            return IoScanCircleSharp;
        case "io5:IoScanCircle":
            return IoScanCircle;
        case "io5:IoScanOutline":
            return IoScanOutline;
        case "io5:IoScanSharp":
            return IoScanSharp;
        case "io5:IoScan":
            return IoScan;
        case "io5:IoSchoolOutline":
            return IoSchoolOutline;
        case "io5:IoSchoolSharp":
            return IoSchoolSharp;
        case "io5:IoSchool":
            return IoSchool;
        case "io5:IoSearchCircleOutline":
            return IoSearchCircleOutline;
        case "io5:IoSearchCircleSharp":
            return IoSearchCircleSharp;
        case "io5:IoSearchCircle":
            return IoSearchCircle;
        case "io5:IoSearchOutline":
            return IoSearchOutline;
        case "io5:IoSearchSharp":
            return IoSearchSharp;
        case "io5:IoSearch":
            return IoSearch;
        case "io5:IoSendOutline":
            return IoSendOutline;
        case "io5:IoSendSharp":
            return IoSendSharp;
        case "io5:IoSend":
            return IoSend;
        case "io5:IoServerOutline":
            return IoServerOutline;
        case "io5:IoServerSharp":
            return IoServerSharp;
        case "io5:IoServer":
            return IoServer;
        case "io5:IoSettingsOutline":
            return IoSettingsOutline;
        case "io5:IoSettingsSharp":
            return IoSettingsSharp;
        case "io5:IoSettings":
            return IoSettings;
        case "io5:IoShapesOutline":
            return IoShapesOutline;
        case "io5:IoShapesSharp":
            return IoShapesSharp;
        case "io5:IoShapes":
            return IoShapes;
        case "io5:IoShareOutline":
            return IoShareOutline;
        case "io5:IoShareSharp":
            return IoShareSharp;
        case "io5:IoShareSocialOutline":
            return IoShareSocialOutline;
        case "io5:IoShareSocialSharp":
            return IoShareSocialSharp;
        case "io5:IoShareSocial":
            return IoShareSocial;
        case "io5:IoShare":
            return IoShare;
        case "io5:IoShieldCheckmarkOutline":
            return IoShieldCheckmarkOutline;
        case "io5:IoShieldCheckmarkSharp":
            return IoShieldCheckmarkSharp;
        case "io5:IoShieldCheckmark":
            return IoShieldCheckmark;
        case "io5:IoShieldHalfOutline":
            return IoShieldHalfOutline;
        case "io5:IoShieldHalfSharp":
            return IoShieldHalfSharp;
        case "io5:IoShieldHalf":
            return IoShieldHalf;
        case "io5:IoShieldOutline":
            return IoShieldOutline;
        case "io5:IoShieldSharp":
            return IoShieldSharp;
        case "io5:IoShield":
            return IoShield;
        case "io5:IoShirtOutline":
            return IoShirtOutline;
        case "io5:IoShirtSharp":
            return IoShirtSharp;
        case "io5:IoShirt":
            return IoShirt;
        case "io5:IoShuffleOutline":
            return IoShuffleOutline;
        case "io5:IoShuffleSharp":
            return IoShuffleSharp;
        case "io5:IoShuffle":
            return IoShuffle;
        case "io5:IoSkullOutline":
            return IoSkullOutline;
        case "io5:IoSkullSharp":
            return IoSkullSharp;
        case "io5:IoSkull":
            return IoSkull;
        case "io5:IoSnowOutline":
            return IoSnowOutline;
        case "io5:IoSnowSharp":
            return IoSnowSharp;
        case "io5:IoSnow":
            return IoSnow;
        case "io5:IoSparklesOutline":
            return IoSparklesOutline;
        case "io5:IoSparklesSharp":
            return IoSparklesSharp;
        case "io5:IoSparkles":
            return IoSparkles;
        case "io5:IoSpeedometerOutline":
            return IoSpeedometerOutline;
        case "io5:IoSpeedometerSharp":
            return IoSpeedometerSharp;
        case "io5:IoSpeedometer":
            return IoSpeedometer;
        case "io5:IoSquareOutline":
            return IoSquareOutline;
        case "io5:IoSquareSharp":
            return IoSquareSharp;
        case "io5:IoSquare":
            return IoSquare;
        case "io5:IoStarHalfOutline":
            return IoStarHalfOutline;
        case "io5:IoStarHalfSharp":
            return IoStarHalfSharp;
        case "io5:IoStarHalf":
            return IoStarHalf;
        case "io5:IoStarOutline":
            return IoStarOutline;
        case "io5:IoStarSharp":
            return IoStarSharp;
        case "io5:IoStar":
            return IoStar;
        case "io5:IoStatsChartOutline":
            return IoStatsChartOutline;
        case "io5:IoStatsChartSharp":
            return IoStatsChartSharp;
        case "io5:IoStatsChart":
            return IoStatsChart;
        case "io5:IoStopCircleOutline":
            return IoStopCircleOutline;
        case "io5:IoStopCircleSharp":
            return IoStopCircleSharp;
        case "io5:IoStopCircle":
            return IoStopCircle;
        case "io5:IoStopOutline":
            return IoStopOutline;
        case "io5:IoStopSharp":
            return IoStopSharp;
        case "io5:IoStop":
            return IoStop;
        case "io5:IoStopwatchOutline":
            return IoStopwatchOutline;
        case "io5:IoStopwatchSharp":
            return IoStopwatchSharp;
        case "io5:IoStopwatch":
            return IoStopwatch;
        case "io5:IoStorefrontOutline":
            return IoStorefrontOutline;
        case "io5:IoStorefrontSharp":
            return IoStorefrontSharp;
        case "io5:IoStorefront":
            return IoStorefront;
        case "io5:IoSubwayOutline":
            return IoSubwayOutline;
        case "io5:IoSubwaySharp":
            return IoSubwaySharp;
        case "io5:IoSubway":
            return IoSubway;
        case "io5:IoSunnyOutline":
            return IoSunnyOutline;
        case "io5:IoSunnySharp":
            return IoSunnySharp;
        case "io5:IoSunny":
            return IoSunny;
        case "io5:IoSwapHorizontalOutline":
            return IoSwapHorizontalOutline;
        case "io5:IoSwapHorizontalSharp":
            return IoSwapHorizontalSharp;
        case "io5:IoSwapHorizontal":
            return IoSwapHorizontal;
        case "io5:IoSwapVerticalOutline":
            return IoSwapVerticalOutline;
        case "io5:IoSwapVerticalSharp":
            return IoSwapVerticalSharp;
        case "io5:IoSwapVertical":
            return IoSwapVertical;
        case "io5:IoSyncCircleOutline":
            return IoSyncCircleOutline;
        case "io5:IoSyncCircleSharp":
            return IoSyncCircleSharp;
        case "io5:IoSyncCircle":
            return IoSyncCircle;
        case "io5:IoSyncOutline":
            return IoSyncOutline;
        case "io5:IoSyncSharp":
            return IoSyncSharp;
        case "io5:IoSync":
            return IoSync;
        case "io5:IoTabletLandscapeOutline":
            return IoTabletLandscapeOutline;
        case "io5:IoTabletLandscapeSharp":
            return IoTabletLandscapeSharp;
        case "io5:IoTabletLandscape":
            return IoTabletLandscape;
        case "io5:IoTabletPortraitOutline":
            return IoTabletPortraitOutline;
        case "io5:IoTabletPortraitSharp":
            return IoTabletPortraitSharp;
        case "io5:IoTabletPortrait":
            return IoTabletPortrait;
        case "io5:IoTelescopeOutline":
            return IoTelescopeOutline;
        case "io5:IoTelescopeSharp":
            return IoTelescopeSharp;
        case "io5:IoTelescope":
            return IoTelescope;
        case "io5:IoTennisballOutline":
            return IoTennisballOutline;
        case "io5:IoTennisballSharp":
            return IoTennisballSharp;
        case "io5:IoTennisball":
            return IoTennisball;
        case "io5:IoTerminalOutline":
            return IoTerminalOutline;
        case "io5:IoTerminalSharp":
            return IoTerminalSharp;
        case "io5:IoTerminal":
            return IoTerminal;
        case "io5:IoTextOutline":
            return IoTextOutline;
        case "io5:IoTextSharp":
            return IoTextSharp;
        case "io5:IoText":
            return IoText;
        case "io5:IoThermometerOutline":
            return IoThermometerOutline;
        case "io5:IoThermometerSharp":
            return IoThermometerSharp;
        case "io5:IoThermometer":
            return IoThermometer;
        case "io5:IoThumbsDownOutline":
            return IoThumbsDownOutline;
        case "io5:IoThumbsDownSharp":
            return IoThumbsDownSharp;
        case "io5:IoThumbsDown":
            return IoThumbsDown;
        case "io5:IoThumbsUpOutline":
            return IoThumbsUpOutline;
        case "io5:IoThumbsUpSharp":
            return IoThumbsUpSharp;
        case "io5:IoThumbsUp":
            return IoThumbsUp;
        case "io5:IoThunderstormOutline":
            return IoThunderstormOutline;
        case "io5:IoThunderstormSharp":
            return IoThunderstormSharp;
        case "io5:IoThunderstorm":
            return IoThunderstorm;
        case "io5:IoTicketOutline":
            return IoTicketOutline;
        case "io5:IoTicketSharp":
            return IoTicketSharp;
        case "io5:IoTicket":
            return IoTicket;
        case "io5:IoTimeOutline":
            return IoTimeOutline;
        case "io5:IoTimeSharp":
            return IoTimeSharp;
        case "io5:IoTime":
            return IoTime;
        case "io5:IoTimerOutline":
            return IoTimerOutline;
        case "io5:IoTimerSharp":
            return IoTimerSharp;
        case "io5:IoTimer":
            return IoTimer;
        case "io5:IoTodayOutline":
            return IoTodayOutline;
        case "io5:IoTodaySharp":
            return IoTodaySharp;
        case "io5:IoToday":
            return IoToday;
        case "io5:IoToggleOutline":
            return IoToggleOutline;
        case "io5:IoToggleSharp":
            return IoToggleSharp;
        case "io5:IoToggle":
            return IoToggle;
        case "io5:IoTrailSignOutline":
            return IoTrailSignOutline;
        case "io5:IoTrailSignSharp":
            return IoTrailSignSharp;
        case "io5:IoTrailSign":
            return IoTrailSign;
        case "io5:IoTrainOutline":
            return IoTrainOutline;
        case "io5:IoTrainSharp":
            return IoTrainSharp;
        case "io5:IoTrain":
            return IoTrain;
        case "io5:IoTransgenderOutline":
            return IoTransgenderOutline;
        case "io5:IoTransgenderSharp":
            return IoTransgenderSharp;
        case "io5:IoTransgender":
            return IoTransgender;
        case "io5:IoTrashBinOutline":
            return IoTrashBinOutline;
        case "io5:IoTrashBinSharp":
            return IoTrashBinSharp;
        case "io5:IoTrashBin":
            return IoTrashBin;
        case "io5:IoTrashOutline":
            return IoTrashOutline;
        case "io5:IoTrashSharp":
            return IoTrashSharp;
        case "io5:IoTrash":
            return IoTrash;
        case "io5:IoTrendingDownOutline":
            return IoTrendingDownOutline;
        case "io5:IoTrendingDownSharp":
            return IoTrendingDownSharp;
        case "io5:IoTrendingDown":
            return IoTrendingDown;
        case "io5:IoTrendingUpOutline":
            return IoTrendingUpOutline;
        case "io5:IoTrendingUpSharp":
            return IoTrendingUpSharp;
        case "io5:IoTrendingUp":
            return IoTrendingUp;
        case "io5:IoTriangleOutline":
            return IoTriangleOutline;
        case "io5:IoTriangleSharp":
            return IoTriangleSharp;
        case "io5:IoTriangle":
            return IoTriangle;
        case "io5:IoTrophyOutline":
            return IoTrophyOutline;
        case "io5:IoTrophySharp":
            return IoTrophySharp;
        case "io5:IoTrophy":
            return IoTrophy;
        case "io5:IoTvOutline":
            return IoTvOutline;
        case "io5:IoTvSharp":
            return IoTvSharp;
        case "io5:IoTv":
            return IoTv;
        case "io5:IoUmbrellaOutline":
            return IoUmbrellaOutline;
        case "io5:IoUmbrellaSharp":
            return IoUmbrellaSharp;
        case "io5:IoUmbrella":
            return IoUmbrella;
        case "io5:IoUnlinkOutline":
            return IoUnlinkOutline;
        case "io5:IoUnlinkSharp":
            return IoUnlinkSharp;
        case "io5:IoUnlink":
            return IoUnlink;
        case "io5:IoVideocamOffOutline":
            return IoVideocamOffOutline;
        case "io5:IoVideocamOffSharp":
            return IoVideocamOffSharp;
        case "io5:IoVideocamOff":
            return IoVideocamOff;
        case "io5:IoVideocamOutline":
            return IoVideocamOutline;
        case "io5:IoVideocamSharp":
            return IoVideocamSharp;
        case "io5:IoVideocam":
            return IoVideocam;
        case "io5:IoVolumeHighOutline":
            return IoVolumeHighOutline;
        case "io5:IoVolumeHighSharp":
            return IoVolumeHighSharp;
        case "io5:IoVolumeHigh":
            return IoVolumeHigh;
        case "io5:IoVolumeLowOutline":
            return IoVolumeLowOutline;
        case "io5:IoVolumeLowSharp":
            return IoVolumeLowSharp;
        case "io5:IoVolumeLow":
            return IoVolumeLow;
        case "io5:IoVolumeMediumOutline":
            return IoVolumeMediumOutline;
        case "io5:IoVolumeMediumSharp":
            return IoVolumeMediumSharp;
        case "io5:IoVolumeMedium":
            return IoVolumeMedium;
        case "io5:IoVolumeMuteOutline":
            return IoVolumeMuteOutline;
        case "io5:IoVolumeMuteSharp":
            return IoVolumeMuteSharp;
        case "io5:IoVolumeMute":
            return IoVolumeMute;
        case "io5:IoVolumeOffOutline":
            return IoVolumeOffOutline;
        case "io5:IoVolumeOffSharp":
            return IoVolumeOffSharp;
        case "io5:IoVolumeOff":
            return IoVolumeOff;
        case "io5:IoWalkOutline":
            return IoWalkOutline;
        case "io5:IoWalkSharp":
            return IoWalkSharp;
        case "io5:IoWalk":
            return IoWalk;
        case "io5:IoWalletOutline":
            return IoWalletOutline;
        case "io5:IoWalletSharp":
            return IoWalletSharp;
        case "io5:IoWallet":
            return IoWallet;
        case "io5:IoWarningOutline":
            return IoWarningOutline;
        case "io5:IoWarningSharp":
            return IoWarningSharp;
        case "io5:IoWarning":
            return IoWarning;
        case "io5:IoWatchOutline":
            return IoWatchOutline;
        case "io5:IoWatchSharp":
            return IoWatchSharp;
        case "io5:IoWatch":
            return IoWatch;
        case "io5:IoWaterOutline":
            return IoWaterOutline;
        case "io5:IoWaterSharp":
            return IoWaterSharp;
        case "io5:IoWater":
            return IoWater;
        case "io5:IoWifiOutline":
            return IoWifiOutline;
        case "io5:IoWifiSharp":
            return IoWifiSharp;
        case "io5:IoWifi":
            return IoWifi;
        case "io5:IoWineOutline":
            return IoWineOutline;
        case "io5:IoWineSharp":
            return IoWineSharp;
        case "io5:IoWine":
            return IoWine;
        case "io5:IoWomanOutline":
            return IoWomanOutline;
        case "io5:IoWomanSharp":
            return IoWomanSharp;
        case "io5:IoWoman":
            return IoWoman;
    }
}