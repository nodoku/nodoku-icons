import type {IconType} from "react-icons";

import {
    FcAbout,
    FcAcceptDatabase,
    FcAddColumn,
    FcAddDatabase,
    FcAddImage,
    FcAddRow,
    FcAddressBook,
    FcAdvance,
    FcAdvertising,
    FcAlarmClock,
    FcAlphabeticalSortingAz,
    FcAlphabeticalSortingZa,
    FcAndroidOs,
    FcAnswers,
    FcApproval,
    FcApprove,
    FcAreaChart,
    FcAssistant,
    FcAudioFile,
    FcAutomatic,
    FcAutomotive,
    FcBadDecision,
    FcBarChart,
    FcBbc,
    FcBearish,
    FcBinoculars,
    FcBiohazard,
    FcBiomass,
    FcBiotech,
    FcBookmark,
    FcBriefcase,
    FcBrokenLink,
    FcBullish,
    FcBusinessContact,
    FcBusiness,
    FcBusinessman,
    FcBusinesswoman,
    FcButtingIn,
    FcCableRelease,
    FcCalculator,
    FcCalendar,
    FcCallTransfer,
    FcCallback,
    FcCamcorderPro,
    FcCamcorder,
    FcCameraAddon,
    FcCameraIdentification,
    FcCamera,
    FcCancel,
    FcCandleSticks,
    FcCapacitor,
    FcCdLogo,
    FcCellPhone,
    FcChargeBattery,
    FcCheckmark,
    FcCircuit,
    FcClapperboard,
    FcClearFilters,
    FcClock,
    FcCloseUpMode,
    FcCloth,
    FcCollaboration,
    FcCollapse,
    FcCollect,
    FcComboChart,
    FcCommandLine,
    FcComments,
    FcCompactCamera,
    FcConferenceCall,
    FcContacts,
    FcCopyleft,
    FcCopyright,
    FcCrystalOscillator,
    FcCurrencyExchange,
    FcCursor,
    FcCustomerSupport,
    FcDam,
    FcDataBackup,
    FcDataConfiguration,
    FcDataEncryption,
    FcDataProtection,
    FcDataRecovery,
    FcDataSheet,
    FcDatabase,
    FcDebian,
    FcDebt,
    FcDecision,
    FcDeleteColumn,
    FcDeleteDatabase,
    FcDeleteRow,
    FcDepartment,
    FcDeployment,
    FcDiploma1,
    FcDiploma2,
    FcDisapprove,
    FcDisclaimer,
    FcDislike,
    FcDisplay,
    FcDoNotInhale,
    FcDoNotInsert,
    FcDoNotMix,
    FcDocument,
    FcDonate,
    FcDoughnutChart,
    FcDownLeft,
    FcDownRight,
    FcDown,
    FcDownload,
    FcDribbble,
    FcDvdLogo,
    FcEditImage,
    FcElectricalSensor,
    FcElectricalThreshold,
    FcElectricity,
    FcElectroDevices,
    FcElectronics,
    FcEmptyBattery,
    FcEmptyFilter,
    FcEmptyTrash,
    FcEndCall,
    FcEngineering,
    FcEnteringHeavenAlive,
    FcExpand,
    FcExpired,
    FcExport,
    FcExternal,
    FcFactoryBreakdown,
    FcFactory,
    FcFaq,
    FcFeedIn,
    FcFeedback,
    FcFile,
    FcFilingCabinet,
    FcFilledFilter,
    FcFilmReel,
    FcFilm,
    FcFinePrint,
    FcFlashAuto,
    FcFlashOff,
    FcFlashOn,
    FcFlowChart,
    FcFolder,
    FcFrame,
    FcFullBattery,
    FcFullTrash,
    FcGallery,
    FcGenealogy,
    FcGenericSortingAsc,
    FcGenericSortingDesc,
    FcGlobe,
    FcGoodDecision,
    FcGoogle,
    FcGraduationCap,
    FcGrid,
    FcHeadset,
    FcHeatMap,
    FcHighBattery,
    FcHighPriority,
    FcHome,
    FcIcons8Cup,
    FcIdea,
    FcImageFile,
    FcImport,
    FcInTransit,
    FcInfo,
    FcInspection,
    FcIntegratedWebcam,
    FcInternal,
    FcInvite,
    FcIpad,
    FcIphone,
    FcKey,
    FcKindle,
    FcLandscape,
    FcLeave,
    FcLeftDown,
    FcLeftDown2,
    FcLeftUp,
    FcLeftUp2,
    FcLeft,
    FcLibrary,
    FcLightAtTheEndOfTunnel,
    FcLikePlaceholder,
    FcLike,
    FcLineChart,
    FcLink,
    FcLinux,
    FcList,
    FcLockLandscape,
    FcLockPortrait,
    FcLock,
    FcLowBattery,
    FcLowPriority,
    FcMakeDecision,
    FcManager,
    FcMediumPriority,
    FcMenu,
    FcMiddleBattery,
    FcMindMap,
    FcMinus,
    FcMissedCall,
    FcMms,
    FcMoneyTransfer,
    FcMultipleCameras,
    FcMultipleDevices,
    FcMultipleInputs,
    FcMultipleSmartphones,
    FcMusic,
    FcNegativeDynamic,
    FcNeutralDecision,
    FcNeutralTrading,
    FcNews,
    FcNext,
    FcNfcSign,
    FcNightLandscape,
    FcNightPortrait,
    FcNoIdea,
    FcNoVideo,
    FcNook,
    FcNumericalSorting12,
    FcNumericalSorting21,
    FcOk,
    FcOldTimeCamera,
    FcOnlineSupport,
    FcOpenedFolder,
    FcOrgUnit,
    FcOrganization,
    FcOvertime,
    FcPackage,
    FcPaid,
    FcPanorama,
    FcParallelTasks,
    FcPhoneAndroid,
    FcPhone,
    FcPhotoReel,
    FcPicture,
    FcPieChart,
    FcPlanner,
    FcPlus,
    FcPodiumWithAudience,
    FcPodiumWithSpeaker,
    FcPodiumWithoutSpeaker,
    FcPortraitMode,
    FcPositiveDynamic,
    FcPrevious,
    FcPrint,
    FcPrivacy,
    FcProcess,
    FcPuzzle,
    FcQuestions,
    FcRadarPlot,
    FcRating,
    FcRatings,
    FcReadingEbook,
    FcReading,
    FcReddit,
    FcRedo,
    FcRefresh,
    FcRegisteredTrademark,
    FcRemoveImage,
    FcReuse,
    FcRightDown,
    FcRightDown2,
    FcRightUp,
    FcRightUp2,
    FcRight,
    FcRotateCamera,
    FcRotateToLandscape,
    FcRotateToPortrait,
    FcRuler,
    FcRules,
    FcSafe,
    FcSalesPerformance,
    FcScatterPlot,
    FcSearch,
    FcSelfServiceKiosk,
    FcSelfie,
    FcSerialTasks,
    FcServiceMark,
    FcServices,
    FcSettings,
    FcShare,
    FcShipped,
    FcShop,
    FcSignature,
    FcSimCardChip,
    FcSimCard,
    FcSlrBackSide,
    FcSmartphoneTablet,
    FcSms,
    FcSoundRecordingCopyright,
    FcSpeaker,
    FcSportsMode,
    FcStackOfPhotos,
    FcStart,
    FcStatistics,
    FcSteam,
    FcStumbleupon,
    FcSupport,
    FcSurvey,
    FcSwitchCamera,
    FcSynchronize,
    FcTabletAndroid,
    FcTemplate,
    FcTimeline,
    FcTodoList,
    FcTouchscreenSmartphone,
    FcTrademark,
    FcTreeStructure,
    FcTwoSmartphones,
    FcUndo,
    FcUnlock,
    FcUpLeft,
    FcUpRight,
    FcUp,
    FcUpload,
    FcUsb,
    FcVideoCall,
    FcVideoFile,
    FcVideoProjector,
    FcViewDetails,
    FcVip,
    FcVlc,
    FcVoicePresentation,
    FcVoicemail,
    FcWebcam,
    FcWiFiLogo,
    FcWikipedia,
    FcWorkflow,
} from "react-icons/fc"

export function nameToReactIcon_fc_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "fc:FcAbout":
            return FcAbout;
        case "fc:FcAcceptDatabase":
            return FcAcceptDatabase;
        case "fc:FcAddColumn":
            return FcAddColumn;
        case "fc:FcAddDatabase":
            return FcAddDatabase;
        case "fc:FcAddImage":
            return FcAddImage;
        case "fc:FcAddRow":
            return FcAddRow;
        case "fc:FcAddressBook":
            return FcAddressBook;
        case "fc:FcAdvance":
            return FcAdvance;
        case "fc:FcAdvertising":
            return FcAdvertising;
        case "fc:FcAlarmClock":
            return FcAlarmClock;
        case "fc:FcAlphabeticalSortingAz":
            return FcAlphabeticalSortingAz;
        case "fc:FcAlphabeticalSortingZa":
            return FcAlphabeticalSortingZa;
        case "fc:FcAndroidOs":
            return FcAndroidOs;
        case "fc:FcAnswers":
            return FcAnswers;
        case "fc:FcApproval":
            return FcApproval;
        case "fc:FcApprove":
            return FcApprove;
        case "fc:FcAreaChart":
            return FcAreaChart;
        case "fc:FcAssistant":
            return FcAssistant;
        case "fc:FcAudioFile":
            return FcAudioFile;
        case "fc:FcAutomatic":
            return FcAutomatic;
        case "fc:FcAutomotive":
            return FcAutomotive;
        case "fc:FcBadDecision":
            return FcBadDecision;
        case "fc:FcBarChart":
            return FcBarChart;
        case "fc:FcBbc":
            return FcBbc;
        case "fc:FcBearish":
            return FcBearish;
        case "fc:FcBinoculars":
            return FcBinoculars;
        case "fc:FcBiohazard":
            return FcBiohazard;
        case "fc:FcBiomass":
            return FcBiomass;
        case "fc:FcBiotech":
            return FcBiotech;
        case "fc:FcBookmark":
            return FcBookmark;
        case "fc:FcBriefcase":
            return FcBriefcase;
        case "fc:FcBrokenLink":
            return FcBrokenLink;
        case "fc:FcBullish":
            return FcBullish;
        case "fc:FcBusinessContact":
            return FcBusinessContact;
        case "fc:FcBusiness":
            return FcBusiness;
        case "fc:FcBusinessman":
            return FcBusinessman;
        case "fc:FcBusinesswoman":
            return FcBusinesswoman;
        case "fc:FcButtingIn":
            return FcButtingIn;
        case "fc:FcCableRelease":
            return FcCableRelease;
        case "fc:FcCalculator":
            return FcCalculator;
        case "fc:FcCalendar":
            return FcCalendar;
        case "fc:FcCallTransfer":
            return FcCallTransfer;
        case "fc:FcCallback":
            return FcCallback;
        case "fc:FcCamcorderPro":
            return FcCamcorderPro;
        case "fc:FcCamcorder":
            return FcCamcorder;
        case "fc:FcCameraAddon":
            return FcCameraAddon;
        case "fc:FcCameraIdentification":
            return FcCameraIdentification;
        case "fc:FcCamera":
            return FcCamera;
        case "fc:FcCancel":
            return FcCancel;
        case "fc:FcCandleSticks":
            return FcCandleSticks;
        case "fc:FcCapacitor":
            return FcCapacitor;
        case "fc:FcCdLogo":
            return FcCdLogo;
        case "fc:FcCellPhone":
            return FcCellPhone;
        case "fc:FcChargeBattery":
            return FcChargeBattery;
        case "fc:FcCheckmark":
            return FcCheckmark;
        case "fc:FcCircuit":
            return FcCircuit;
        case "fc:FcClapperboard":
            return FcClapperboard;
        case "fc:FcClearFilters":
            return FcClearFilters;
        case "fc:FcClock":
            return FcClock;
        case "fc:FcCloseUpMode":
            return FcCloseUpMode;
        case "fc:FcCloth":
            return FcCloth;
        case "fc:FcCollaboration":
            return FcCollaboration;
        case "fc:FcCollapse":
            return FcCollapse;
        case "fc:FcCollect":
            return FcCollect;
        case "fc:FcComboChart":
            return FcComboChart;
        case "fc:FcCommandLine":
            return FcCommandLine;
        case "fc:FcComments":
            return FcComments;
        case "fc:FcCompactCamera":
            return FcCompactCamera;
        case "fc:FcConferenceCall":
            return FcConferenceCall;
        case "fc:FcContacts":
            return FcContacts;
        case "fc:FcCopyleft":
            return FcCopyleft;
        case "fc:FcCopyright":
            return FcCopyright;
        case "fc:FcCrystalOscillator":
            return FcCrystalOscillator;
        case "fc:FcCurrencyExchange":
            return FcCurrencyExchange;
        case "fc:FcCursor":
            return FcCursor;
        case "fc:FcCustomerSupport":
            return FcCustomerSupport;
        case "fc:FcDam":
            return FcDam;
        case "fc:FcDataBackup":
            return FcDataBackup;
        case "fc:FcDataConfiguration":
            return FcDataConfiguration;
        case "fc:FcDataEncryption":
            return FcDataEncryption;
        case "fc:FcDataProtection":
            return FcDataProtection;
        case "fc:FcDataRecovery":
            return FcDataRecovery;
        case "fc:FcDataSheet":
            return FcDataSheet;
        case "fc:FcDatabase":
            return FcDatabase;
        case "fc:FcDebian":
            return FcDebian;
        case "fc:FcDebt":
            return FcDebt;
        case "fc:FcDecision":
            return FcDecision;
        case "fc:FcDeleteColumn":
            return FcDeleteColumn;
        case "fc:FcDeleteDatabase":
            return FcDeleteDatabase;
        case "fc:FcDeleteRow":
            return FcDeleteRow;
        case "fc:FcDepartment":
            return FcDepartment;
        case "fc:FcDeployment":
            return FcDeployment;
        case "fc:FcDiploma1":
            return FcDiploma1;
        case "fc:FcDiploma2":
            return FcDiploma2;
        case "fc:FcDisapprove":
            return FcDisapprove;
        case "fc:FcDisclaimer":
            return FcDisclaimer;
        case "fc:FcDislike":
            return FcDislike;
        case "fc:FcDisplay":
            return FcDisplay;
        case "fc:FcDoNotInhale":
            return FcDoNotInhale;
        case "fc:FcDoNotInsert":
            return FcDoNotInsert;
        case "fc:FcDoNotMix":
            return FcDoNotMix;
        case "fc:FcDocument":
            return FcDocument;
        case "fc:FcDonate":
            return FcDonate;
        case "fc:FcDoughnutChart":
            return FcDoughnutChart;
        case "fc:FcDownLeft":
            return FcDownLeft;
        case "fc:FcDownRight":
            return FcDownRight;
        case "fc:FcDown":
            return FcDown;
        case "fc:FcDownload":
            return FcDownload;
        case "fc:FcDribbble":
            return FcDribbble;
        case "fc:FcDvdLogo":
            return FcDvdLogo;
        case "fc:FcEditImage":
            return FcEditImage;
        case "fc:FcElectricalSensor":
            return FcElectricalSensor;
        case "fc:FcElectricalThreshold":
            return FcElectricalThreshold;
        case "fc:FcElectricity":
            return FcElectricity;
        case "fc:FcElectroDevices":
            return FcElectroDevices;
        case "fc:FcElectronics":
            return FcElectronics;
        case "fc:FcEmptyBattery":
            return FcEmptyBattery;
        case "fc:FcEmptyFilter":
            return FcEmptyFilter;
        case "fc:FcEmptyTrash":
            return FcEmptyTrash;
        case "fc:FcEndCall":
            return FcEndCall;
        case "fc:FcEngineering":
            return FcEngineering;
        case "fc:FcEnteringHeavenAlive":
            return FcEnteringHeavenAlive;
        case "fc:FcExpand":
            return FcExpand;
        case "fc:FcExpired":
            return FcExpired;
        case "fc:FcExport":
            return FcExport;
        case "fc:FcExternal":
            return FcExternal;
        case "fc:FcFactoryBreakdown":
            return FcFactoryBreakdown;
        case "fc:FcFactory":
            return FcFactory;
        case "fc:FcFaq":
            return FcFaq;
        case "fc:FcFeedIn":
            return FcFeedIn;
        case "fc:FcFeedback":
            return FcFeedback;
        case "fc:FcFile":
            return FcFile;
        case "fc:FcFilingCabinet":
            return FcFilingCabinet;
        case "fc:FcFilledFilter":
            return FcFilledFilter;
        case "fc:FcFilmReel":
            return FcFilmReel;
        case "fc:FcFilm":
            return FcFilm;
        case "fc:FcFinePrint":
            return FcFinePrint;
        case "fc:FcFlashAuto":
            return FcFlashAuto;
        case "fc:FcFlashOff":
            return FcFlashOff;
        case "fc:FcFlashOn":
            return FcFlashOn;
        case "fc:FcFlowChart":
            return FcFlowChart;
        case "fc:FcFolder":
            return FcFolder;
        case "fc:FcFrame":
            return FcFrame;
        case "fc:FcFullBattery":
            return FcFullBattery;
        case "fc:FcFullTrash":
            return FcFullTrash;
        case "fc:FcGallery":
            return FcGallery;
        case "fc:FcGenealogy":
            return FcGenealogy;
        case "fc:FcGenericSortingAsc":
            return FcGenericSortingAsc;
        case "fc:FcGenericSortingDesc":
            return FcGenericSortingDesc;
        case "fc:FcGlobe":
            return FcGlobe;
        case "fc:FcGoodDecision":
            return FcGoodDecision;
        case "fc:FcGoogle":
            return FcGoogle;
        case "fc:FcGraduationCap":
            return FcGraduationCap;
        case "fc:FcGrid":
            return FcGrid;
        case "fc:FcHeadset":
            return FcHeadset;
        case "fc:FcHeatMap":
            return FcHeatMap;
        case "fc:FcHighBattery":
            return FcHighBattery;
        case "fc:FcHighPriority":
            return FcHighPriority;
        case "fc:FcHome":
            return FcHome;
        case "fc:FcIcons8Cup":
            return FcIcons8Cup;
        case "fc:FcIdea":
            return FcIdea;
        case "fc:FcImageFile":
            return FcImageFile;
        case "fc:FcImport":
            return FcImport;
        case "fc:FcInTransit":
            return FcInTransit;
        case "fc:FcInfo":
            return FcInfo;
        case "fc:FcInspection":
            return FcInspection;
        case "fc:FcIntegratedWebcam":
            return FcIntegratedWebcam;
        case "fc:FcInternal":
            return FcInternal;
        case "fc:FcInvite":
            return FcInvite;
        case "fc:FcIpad":
            return FcIpad;
        case "fc:FcIphone":
            return FcIphone;
        case "fc:FcKey":
            return FcKey;
        case "fc:FcKindle":
            return FcKindle;
        case "fc:FcLandscape":
            return FcLandscape;
        case "fc:FcLeave":
            return FcLeave;
        case "fc:FcLeftDown":
            return FcLeftDown;
        case "fc:FcLeftDown2":
            return FcLeftDown2;
        case "fc:FcLeftUp":
            return FcLeftUp;
        case "fc:FcLeftUp2":
            return FcLeftUp2;
        case "fc:FcLeft":
            return FcLeft;
        case "fc:FcLibrary":
            return FcLibrary;
        case "fc:FcLightAtTheEndOfTunnel":
            return FcLightAtTheEndOfTunnel;
        case "fc:FcLikePlaceholder":
            return FcLikePlaceholder;
        case "fc:FcLike":
            return FcLike;
        case "fc:FcLineChart":
            return FcLineChart;
        case "fc:FcLink":
            return FcLink;
        case "fc:FcLinux":
            return FcLinux;
        case "fc:FcList":
            return FcList;
        case "fc:FcLockLandscape":
            return FcLockLandscape;
        case "fc:FcLockPortrait":
            return FcLockPortrait;
        case "fc:FcLock":
            return FcLock;
        case "fc:FcLowBattery":
            return FcLowBattery;
        case "fc:FcLowPriority":
            return FcLowPriority;
        case "fc:FcMakeDecision":
            return FcMakeDecision;
        case "fc:FcManager":
            return FcManager;
        case "fc:FcMediumPriority":
            return FcMediumPriority;
        case "fc:FcMenu":
            return FcMenu;
        case "fc:FcMiddleBattery":
            return FcMiddleBattery;
        case "fc:FcMindMap":
            return FcMindMap;
        case "fc:FcMinus":
            return FcMinus;
        case "fc:FcMissedCall":
            return FcMissedCall;
        case "fc:FcMms":
            return FcMms;
        case "fc:FcMoneyTransfer":
            return FcMoneyTransfer;
        case "fc:FcMultipleCameras":
            return FcMultipleCameras;
        case "fc:FcMultipleDevices":
            return FcMultipleDevices;
        case "fc:FcMultipleInputs":
            return FcMultipleInputs;
        case "fc:FcMultipleSmartphones":
            return FcMultipleSmartphones;
        case "fc:FcMusic":
            return FcMusic;
        case "fc:FcNegativeDynamic":
            return FcNegativeDynamic;
        case "fc:FcNeutralDecision":
            return FcNeutralDecision;
        case "fc:FcNeutralTrading":
            return FcNeutralTrading;
        case "fc:FcNews":
            return FcNews;
        case "fc:FcNext":
            return FcNext;
        case "fc:FcNfcSign":
            return FcNfcSign;
        case "fc:FcNightLandscape":
            return FcNightLandscape;
        case "fc:FcNightPortrait":
            return FcNightPortrait;
        case "fc:FcNoIdea":
            return FcNoIdea;
        case "fc:FcNoVideo":
            return FcNoVideo;
        case "fc:FcNook":
            return FcNook;
        case "fc:FcNumericalSorting12":
            return FcNumericalSorting12;
        case "fc:FcNumericalSorting21":
            return FcNumericalSorting21;
        case "fc:FcOk":
            return FcOk;
        case "fc:FcOldTimeCamera":
            return FcOldTimeCamera;
        case "fc:FcOnlineSupport":
            return FcOnlineSupport;
        case "fc:FcOpenedFolder":
            return FcOpenedFolder;
        case "fc:FcOrgUnit":
            return FcOrgUnit;
        case "fc:FcOrganization":
            return FcOrganization;
        case "fc:FcOvertime":
            return FcOvertime;
        case "fc:FcPackage":
            return FcPackage;
        case "fc:FcPaid":
            return FcPaid;
        case "fc:FcPanorama":
            return FcPanorama;
        case "fc:FcParallelTasks":
            return FcParallelTasks;
        case "fc:FcPhoneAndroid":
            return FcPhoneAndroid;
        case "fc:FcPhone":
            return FcPhone;
        case "fc:FcPhotoReel":
            return FcPhotoReel;
        case "fc:FcPicture":
            return FcPicture;
        case "fc:FcPieChart":
            return FcPieChart;
        case "fc:FcPlanner":
            return FcPlanner;
        case "fc:FcPlus":
            return FcPlus;
        case "fc:FcPodiumWithAudience":
            return FcPodiumWithAudience;
        case "fc:FcPodiumWithSpeaker":
            return FcPodiumWithSpeaker;
        case "fc:FcPodiumWithoutSpeaker":
            return FcPodiumWithoutSpeaker;
        case "fc:FcPortraitMode":
            return FcPortraitMode;
        case "fc:FcPositiveDynamic":
            return FcPositiveDynamic;
        case "fc:FcPrevious":
            return FcPrevious;
        case "fc:FcPrint":
            return FcPrint;
        case "fc:FcPrivacy":
            return FcPrivacy;
        case "fc:FcProcess":
            return FcProcess;
        case "fc:FcPuzzle":
            return FcPuzzle;
        case "fc:FcQuestions":
            return FcQuestions;
        case "fc:FcRadarPlot":
            return FcRadarPlot;
        case "fc:FcRating":
            return FcRating;
        case "fc:FcRatings":
            return FcRatings;
        case "fc:FcReadingEbook":
            return FcReadingEbook;
        case "fc:FcReading":
            return FcReading;
        case "fc:FcReddit":
            return FcReddit;
        case "fc:FcRedo":
            return FcRedo;
        case "fc:FcRefresh":
            return FcRefresh;
        case "fc:FcRegisteredTrademark":
            return FcRegisteredTrademark;
        case "fc:FcRemoveImage":
            return FcRemoveImage;
        case "fc:FcReuse":
            return FcReuse;
        case "fc:FcRightDown":
            return FcRightDown;
        case "fc:FcRightDown2":
            return FcRightDown2;
        case "fc:FcRightUp":
            return FcRightUp;
        case "fc:FcRightUp2":
            return FcRightUp2;
        case "fc:FcRight":
            return FcRight;
        case "fc:FcRotateCamera":
            return FcRotateCamera;
        case "fc:FcRotateToLandscape":
            return FcRotateToLandscape;
        case "fc:FcRotateToPortrait":
            return FcRotateToPortrait;
        case "fc:FcRuler":
            return FcRuler;
        case "fc:FcRules":
            return FcRules;
        case "fc:FcSafe":
            return FcSafe;
        case "fc:FcSalesPerformance":
            return FcSalesPerformance;
        case "fc:FcScatterPlot":
            return FcScatterPlot;
        case "fc:FcSearch":
            return FcSearch;
        case "fc:FcSelfServiceKiosk":
            return FcSelfServiceKiosk;
        case "fc:FcSelfie":
            return FcSelfie;
        case "fc:FcSerialTasks":
            return FcSerialTasks;
        case "fc:FcServiceMark":
            return FcServiceMark;
        case "fc:FcServices":
            return FcServices;
        case "fc:FcSettings":
            return FcSettings;
        case "fc:FcShare":
            return FcShare;
        case "fc:FcShipped":
            return FcShipped;
        case "fc:FcShop":
            return FcShop;
        case "fc:FcSignature":
            return FcSignature;
        case "fc:FcSimCardChip":
            return FcSimCardChip;
        case "fc:FcSimCard":
            return FcSimCard;
        case "fc:FcSlrBackSide":
            return FcSlrBackSide;
        case "fc:FcSmartphoneTablet":
            return FcSmartphoneTablet;
        case "fc:FcSms":
            return FcSms;
        case "fc:FcSoundRecordingCopyright":
            return FcSoundRecordingCopyright;
        case "fc:FcSpeaker":
            return FcSpeaker;
        case "fc:FcSportsMode":
            return FcSportsMode;
        case "fc:FcStackOfPhotos":
            return FcStackOfPhotos;
        case "fc:FcStart":
            return FcStart;
        case "fc:FcStatistics":
            return FcStatistics;
        case "fc:FcSteam":
            return FcSteam;
        case "fc:FcStumbleupon":
            return FcStumbleupon;
        case "fc:FcSupport":
            return FcSupport;
        case "fc:FcSurvey":
            return FcSurvey;
        case "fc:FcSwitchCamera":
            return FcSwitchCamera;
        case "fc:FcSynchronize":
            return FcSynchronize;
        case "fc:FcTabletAndroid":
            return FcTabletAndroid;
        case "fc:FcTemplate":
            return FcTemplate;
        case "fc:FcTimeline":
            return FcTimeline;
        case "fc:FcTodoList":
            return FcTodoList;
        case "fc:FcTouchscreenSmartphone":
            return FcTouchscreenSmartphone;
        case "fc:FcTrademark":
            return FcTrademark;
        case "fc:FcTreeStructure":
            return FcTreeStructure;
        case "fc:FcTwoSmartphones":
            return FcTwoSmartphones;
        case "fc:FcUndo":
            return FcUndo;
        case "fc:FcUnlock":
            return FcUnlock;
        case "fc:FcUpLeft":
            return FcUpLeft;
        case "fc:FcUpRight":
            return FcUpRight;
        case "fc:FcUp":
            return FcUp;
        case "fc:FcUpload":
            return FcUpload;
        case "fc:FcUsb":
            return FcUsb;
        case "fc:FcVideoCall":
            return FcVideoCall;
        case "fc:FcVideoFile":
            return FcVideoFile;
        case "fc:FcVideoProjector":
            return FcVideoProjector;
        case "fc:FcViewDetails":
            return FcViewDetails;
        case "fc:FcVip":
            return FcVip;
        case "fc:FcVlc":
            return FcVlc;
        case "fc:FcVoicePresentation":
            return FcVoicePresentation;
        case "fc:FcVoicemail":
            return FcVoicemail;
        case "fc:FcWebcam":
            return FcWebcam;
        case "fc:FcWiFiLogo":
            return FcWiFiLogo;
        case "fc:FcWikipedia":
            return FcWikipedia;
        case "fc:FcWorkflow":
            return FcWorkflow;
    }
}
