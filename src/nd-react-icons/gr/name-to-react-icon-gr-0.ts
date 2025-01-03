import type {IconType} from "react-icons";

import {
    GrAccessibility,
    GrAchievement,
    GrAction,
    GrActions,
    GrAd,
    GrAddCircle,
    GrAdd,
    GrAdobeCreativeCloud,
    GrAed,
    GrAggregate,
    GrAidOption,
    GrAid,
    GrAlarm,
    GrAlert,
    GrAmazon,
    GrAmex,
    GrAnalytics,
    GrAnchor,
    GrAndroid,
    GrAnnounce,
    GrAppleAppStore,
    GrAppleMusic,
    GrApplePodcasts,
    GrApple,
    GrAppsRounded,
    GrApps,
    GrArchive,
    GrArchlinux,
    GrArticle,
    GrAruba,
    GrAscend,
    GrAscending,
    GrAssistListening,
    GrAtm,
    GrAttachment,
    GrAttraction,
    GrBaby,
    GrBackTen,
    GrBarChart,
    GrBar,
    GrBasket,
    GrBeacon,
    GrBike,
    GrBitcoin,
    GrBladesHorizontal,
    GrBladesVertical,
    GrBlockQuote,
    GrBlog,
    GrBluetooth,
    GrBold,
    GrBook,
    GrBookmark,
    GrBottomCorner,
    GrBraille,
    GrBriefcase,
    GrBrush,
    GrBucket,
    GrBug,
    GrBundle,
    GrBus,
    GrBusinessService,
    GrCafeteria,
    GrCalculator,
    GrCalendar,
    GrCamera,
    GrCapacity,
    GrCar,
    GrCaretDownFill,
    GrCaretDown,
    GrCaretLeftFill,
    GrCaretNext,
    GrCaretPrevious,
    GrCaretRightFill,
    GrCaretUpFill,
    GrCaretUp,
    GrCart,
    GrCatalogOption,
    GrCatalog,
    GrCentos,
    GrCertificate,
    GrChannel,
    GrChapterAdd,
    GrChapterNext,
    GrChapterPrevious,
    GrChatOption,
    GrChat,
    GrCheckboxSelected,
    GrCheckbox,
    GrCheckmark,
    GrChrome,
    GrCircleAlert,
    GrCircleInformation,
    GrCirclePlay,
    GrCircleQuestion,
    GrClearOption,
    GrClear,
    GrCli,
    GrClipboard,
    GrClock,
    GrClone,
    GrClose,
    GrClosedCaption,
    GrCloudComputer,
    GrCloudDownload,
    GrCloudSoftware,
    GrCloudUpload,
    GrCloud,
    GrCloudlinux,
    GrCluster,
    GrCoatCheck,
    GrCodeSandbox,
    GrCode,
    GrCodepen,
    GrCoffee,
    GrColumns,
    GrCommand,
    GrCompare,
    GrCompass,
    GrCompliance,
    GrConfigure,
    GrConnect,
    GrConnectivity,
    GrConsole,
    GrContactInfo,
    GrContact,
    GrContract,
    GrCopy,
    GrCpu,
    GrCreativeCommons,
    GrCreditCard,
    GrCss3,
    GrCube,
    GrCubes,
    GrCurrency,
    GrCursor,
    GrCut,
    GrCycle,
    GrDashboard,
    GrDatabase,
    GrDebian,
    GrDeliver,
    GrDeploy,
    GrDescend,
    GrDescending,
    GrDesktop,
    GrDetach,
    GrDevice,
    GrDiamond,
    GrDirections,
    GrDisabledOutline,
    GrDisc,
    GrDislikeFill,
    GrDislike,
    GrDocker,
    GrDocumentCloud,
    GrDocumentConfig,
    GrDocumentCsv,
    GrDocumentDownload,
    GrDocumentExcel,
    GrDocumentImage,
    GrDocumentLocked,
    GrDocumentMissing,
    GrDocumentNotes,
    GrDocumentOutlook,
    GrDocumentPdf,
    GrDocumentPerformance,
    GrDocumentPpt,
    GrDocumentRtf,
    GrDocumentSound,
    GrDocumentStore,
    GrDocumentTest,
    GrDocumentText,
    GrDocumentThreat,
    GrDocumentTime,
    GrDocumentTransfer,
    GrDocumentTxt,
    GrDocumentUpdate,
    GrDocumentUpload,
    GrDocumentUser,
    GrDocumentVerified,
    GrDocumentVideo,
    GrDocumentWindows,
    GrDocumentWord,
    GrDocumentZip,
    GrDocument,
    GrDomain,
    GrDos,
    GrDown,
    GrDownloadOption,
    GrDownload,
    GrDrag,
    GrDrawer,
    GrDribbble,
    GrDriveCage,
    GrDropbox,
    GrDuplicate,
    GrDxc,
    GrEbay,
    GrEdge,
    GrEdit,
    GrEject,
    GrElevator,
    GrEmergency,
    GrEmoji,
    GrEmptyCircle,
    GrErase,
    GrEscalator,
    GrExpand,
    GrEzmeral,
    GrFacebookOption,
    GrFacebook,
    GrFanOption,
    GrFan,
    GrFastForward,
    GrFavorite,
    GrFedora,
    GrFigma,
    GrFilter,
    GrFingerPrint,
    GrFireball,
    GrFirefox,
    GrFirewall,
    GrFlagFill,
    GrFlag,
    GrFlows,
    GrFolderCycle,
    GrFolderOpen,
    GrFolder,
    GrFormAdd,
    GrFormAttachment,
    GrFormCalendar,
    GrFormCheckmark,
    GrFormClock,
    GrFormClose,
    GrFormCut,
    GrFormDown,
    GrFormEdit,
    GrFormFilter,
    GrFormFolder,
    GrFormLocation,
    GrFormLock,
    GrFormNextLink,
    GrFormNext,
    GrFormPin,
    GrFormPreviousLink,
    GrFormPrevious,
    GrFormRefresh,
    GrFormSchedule,
    GrFormSearch,
    GrFormSubtract,
    GrFormTrash,
    GrFormUp,
    GrFormUpload,
    GrFormViewHide,
    GrFormView,
    GrForwardTen,
    GrFreebsd,
    GrGallery,
    GrGamepad,
    GrGateway,
    GrGatsbyjs,
    GrGem,
    GrGift,
    GrGithub,
    GrGlobe,
    GrGolang,
    GrGooglePay,
    GrGooglePlay,
    GrGooglePlus,
    GrGoogleWallet,
    GrGoogle,
    GrGraphQl,
    GrGremlin,
    GrGrid,
    GrGrommet,
    GrGroup,
    GrGrow,
    GrHadoop,
    GrHalt,
    GrHelpBook,
    GrHelpOption,
    GrHelp,
    GrHeroku,
    GrHide,
    GrHistory,
    GrHomeOption,
    GrHomeRounded,
    GrHome,
    GrHorton,
    GrHostMaintenance,
    GrHost,
    GrHp,
    GrHpeLabs,
    GrHpe,
    GrHpi,
    GrHtml5,
    GrIceCream,
    GrImage,
    GrImpact,
    GrInProgress,
    GrInbox,
    GrIndicator,
    GrInfo,
    GrInherit,
    GrInsecure,
    GrInspect,
    GrInstagram,
    GrInstallOption,
    GrInstall,
    GrIntegration,
    GrInternetExplorer,
    GrItalic,
    GrIteration,
    GrJava,
    GrJs,
    GrKey,
    GrKeyboard,
    GrKubernetes,
    GrLanguage,
    GrLastfm,
    GrLaunch,
    GrLayer,
    GrLicense,
    GrLikeFill,
    GrLike,
    GrLineChart,
    GrLinkBottom,
    GrLinkDown,
    GrLinkNext,
    GrLinkPrevious,
    GrLinkTop,
    GrLinkUp,
    GrLink,
    GrLinkedinOption,
    GrLinkedin,
    GrList,
    GrLocal,
    GrLocationPin,
    GrLocation,
    GrLock,
    GrLogin,
    GrLogout,
    GrLounge,
    GrMagic,
    GrMailOption,
    GrMail,
    GrMandriva,
    GrManual,
    GrMapLocation,
    GrMap,
    GrMastercard,
    GrMedium,
    GrMemory,
    GrMenu,
    GrMeta,
    GrMicrofocus,
    GrMicrophone,
    GrMoney,
    GrMonitor,
    GrMonospace,
    GrMoon,
    GrMoreVertical,
    GrMore,
    GrMouse,
    GrMultimedia,
    GrMultiple,
    GrMusic,
    GrMysql,
    GrNavigate,
    GrNetworkDrive,
    GrNetwork,
    GrNewWindow,
    GrNew,
    GrNext,
    GrNode,
    GrNodes,
    GrNorton,
    GrNote,
    GrNotes,
    GrNotification,
    GrNpm,
    GrObjectGroup,
    GrObjectUngroup,
    GrOfflineStorage,
    GrOnedrive,
    GrOpera,
    GrOptimize,
    GrOracle,
    GrOrderedList,
    GrOrganization,
    GrOverview,
    GrPackage,
    GrPaint,
    GrPan,
    GrPauseFill,
    GrPause,
    GrPaypal,
    GrPerformance,
    GrPersonalComputer,
    GrPhoneFlip,
    GrPhoneHorizontal,
    GrPhoneVertical,
    GrPhone,
    GrPieChart,
    GrPiedPiper,
    GrPin,
    GrPinterest,
    GrPlan,
    GrPlayFill,
    GrPlay,
    GrPlug,
    GrPocket,
    GrPowerCycle,
    GrPowerForceShutdown,
    GrPowerReset,
    GrPowerShutdown,
    GrPower,
    GrPrevious,
    GrPrint,
    GrProductHunt,
    GrProjects,
    GrQr,
    GrRadialSelected,
    GrRadial,
    GrRaspberry,
    GrReactjs,
    GrReddit,
    GrRedhat,
    GrRedo,
    GrRefresh,
    GrResources,
    GrRestaurant,
    GrRestroomMen,
    GrRestroomWomen,
    GrRestroom,
    GrResume,
    GrReturn,
    GrRevert,
    GrRewind,
    GrRisk,
    GrRobot,
    GrRotateLeft,
    GrRotateRight,
    GrRss,
    GrRun,
    GrSafariOption,
    GrSamsungPay,
    GrSans,
    GrSatellite,
    GrSave,
    GrScan,
    GrScheduleNew,
    GrSchedulePlay,
    GrSchedule,
    GrSchedules,
    GrSco,
    GrScorecard,
    GrScript,
    GrSd,
    GrSearchAdvanced,
    GrSearch,
    GrSecure,
    GrSelect,
    GrSelection,
    GrSemantics,
    GrSend,
    GrServerCluster,
    GrServer,
    GrServers,
    GrServicePlay,
    GrServices,
    GrSettingsOption,
    GrShareOption,
    GrShareRounded,
    GrShare,
    GrShieldSecurity,
    GrShield,
    GrShift,
    GrShop,
    GrSidebar,
    GrSign,
    GrSkype,
    GrSlack,
    GrSnapchat,
    GrSolaris,
    GrSort,
    GrSoundcloud,
    GrSpa,
    GrSpectrum,
    GrSplit,
    GrSplits,
    GrSpotify,
    GrSquare,
    GrStackOverflow,
    GrStakeholder,
    GrStarHalf,
    GrStarOutline,
    GrStar,
    GrStatusCriticalSmall,
    GrStatusCritical,
    GrStatusDisabledSmall,
    GrStatusDisabled,
    GrStatusGoodSmall,
    GrStatusGood,
    GrStatusInfoSmall,
    GrStatusInfo,
    GrStatusPlaceholderSmall,
    GrStatusPlaceholder,
    GrStatusUnknownSmall,
    GrStatusUnknown,
    GrStatusWarningSmall,
    GrStatusWarning,
    GrStepsOption,
    GrSteps,
    GrStopFill,
    GrStop,
    GrStorage,
    GrStreetView,
    GrStrikeThrough,
    GrStripe,
    GrSubscript,
    GrSubtractCircle,
    GrSubtract,
    GrSun,
    GrSuperscript,
    GrSupport,
    GrSuse,
    GrSwift,
    GrSwim,
    GrSwitch,
    GrSync,
    GrSystem,
    GrTableAdd,
    GrTable,
    GrTag,
    GrTapeOption,
    GrTape,
    GrTarget,
    GrTask,
    GrTasks,
    GrTechnology,
    GrTemplate,
    GrTerminal,
    GrTestDesktop,
    GrTest,
    GrTextAlignCenter,
    GrTextAlignFull,
    GrTextAlignLeft,
    GrTextAlignRight,
    GrTextWrap,
    GrThreads,
    GrThreats,
    GrThreeDEffects,
    GrThreeD,
    GrTicket,
    GrTiktok,
    GrTime,
    GrTip,
    GrToast,
    GrTools,
    GrTooltip,
    GrTopCorner,
    GrTrain,
    GrTransaction,
    GrTrash,
    GrTreeOption,
    GrTree,
    GrTrigger,
    GrTrophy,
    GrTroubleshoot,
    GrTty,
    GrTumblr,
    GrTurbolinux,
    GrTwitch,
    GrTwitter,
    GrUbuntu,
    GrUnderline,
    GrUndo,
    GrUnlink,
    GrUnlock,
    GrUnorderedList,
    GrUnsorted,
    GrUp,
    GrUpdate,
    GrUpgrade,
    GrUploadOption,
    GrUpload,
    GrUsbKey,
    GrUserAdd,
    GrUserAdmin,
    GrUserExpert,
    GrUserFemale,
    GrUserManager,
    GrUserNew,
    GrUserPolice,
    GrUserSettings,
    GrUserWorker,
    GrUser,
    GrValidate,
    GrVend,
    GrVenmo,
    GrVideo,
    GrView,
    GrVimeo,
    GrVirtualMachine,
    GrVirtualStorage,
    GrVisa,
    GrVmMaintenance,
    GrVmware,
    GrVolumeControl,
    GrVolumeLow,
    GrVolumeMute,
    GrVolume,
    GrVulnerability,
    GrWaypoint,
    GrWebcam,
    GrWechat,
    GrWhatsapp,
    GrWheelchairActive,
    GrWheelchair,
    GrWifiLow,
    GrWifiMedium,
    GrWifiNone,
    GrWifi,
    GrWindowsLegacy,
    GrWindows,
    GrWordpress,
    GrWorkshop,
    GrX,
    GrXing,
    GrYoga,
    GrYoutube,
    GrZoomIn,
    GrZoomOut,
    GrZoom,
} from "react-icons/gr"

export function nameToReactIcon_gr_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "gr:GrAccessibility":
            return GrAccessibility;
        case "gr:GrAchievement":
            return GrAchievement;
        case "gr:GrAction":
            return GrAction;
        case "gr:GrActions":
            return GrActions;
        case "gr:GrAd":
            return GrAd;
        case "gr:GrAddCircle":
            return GrAddCircle;
        case "gr:GrAdd":
            return GrAdd;
        case "gr:GrAdobeCreativeCloud":
            return GrAdobeCreativeCloud;
        case "gr:GrAed":
            return GrAed;
        case "gr:GrAggregate":
            return GrAggregate;
        case "gr:GrAidOption":
            return GrAidOption;
        case "gr:GrAid":
            return GrAid;
        case "gr:GrAlarm":
            return GrAlarm;
        case "gr:GrAlert":
            return GrAlert;
        case "gr:GrAmazon":
            return GrAmazon;
        case "gr:GrAmex":
            return GrAmex;
        case "gr:GrAnalytics":
            return GrAnalytics;
        case "gr:GrAnchor":
            return GrAnchor;
        case "gr:GrAndroid":
            return GrAndroid;
        case "gr:GrAnnounce":
            return GrAnnounce;
        case "gr:GrAppleAppStore":
            return GrAppleAppStore;
        case "gr:GrAppleMusic":
            return GrAppleMusic;
        case "gr:GrApplePodcasts":
            return GrApplePodcasts;
        case "gr:GrApple":
            return GrApple;
        case "gr:GrAppsRounded":
            return GrAppsRounded;
        case "gr:GrApps":
            return GrApps;
        case "gr:GrArchive":
            return GrArchive;
        case "gr:GrArchlinux":
            return GrArchlinux;
        case "gr:GrArticle":
            return GrArticle;
        case "gr:GrAruba":
            return GrAruba;
        case "gr:GrAscend":
            return GrAscend;
        case "gr:GrAscending":
            return GrAscending;
        case "gr:GrAssistListening":
            return GrAssistListening;
        case "gr:GrAtm":
            return GrAtm;
        case "gr:GrAttachment":
            return GrAttachment;
        case "gr:GrAttraction":
            return GrAttraction;
        case "gr:GrBaby":
            return GrBaby;
        case "gr:GrBackTen":
            return GrBackTen;
        case "gr:GrBarChart":
            return GrBarChart;
        case "gr:GrBar":
            return GrBar;
        case "gr:GrBasket":
            return GrBasket;
        case "gr:GrBeacon":
            return GrBeacon;
        case "gr:GrBike":
            return GrBike;
        case "gr:GrBitcoin":
            return GrBitcoin;
        case "gr:GrBladesHorizontal":
            return GrBladesHorizontal;
        case "gr:GrBladesVertical":
            return GrBladesVertical;
        case "gr:GrBlockQuote":
            return GrBlockQuote;
        case "gr:GrBlog":
            return GrBlog;
        case "gr:GrBluetooth":
            return GrBluetooth;
        case "gr:GrBold":
            return GrBold;
        case "gr:GrBook":
            return GrBook;
        case "gr:GrBookmark":
            return GrBookmark;
        case "gr:GrBottomCorner":
            return GrBottomCorner;
        case "gr:GrBraille":
            return GrBraille;
        case "gr:GrBriefcase":
            return GrBriefcase;
        case "gr:GrBrush":
            return GrBrush;
        case "gr:GrBucket":
            return GrBucket;
        case "gr:GrBug":
            return GrBug;
        case "gr:GrBundle":
            return GrBundle;
        case "gr:GrBus":
            return GrBus;
        case "gr:GrBusinessService":
            return GrBusinessService;
        case "gr:GrCafeteria":
            return GrCafeteria;
        case "gr:GrCalculator":
            return GrCalculator;
        case "gr:GrCalendar":
            return GrCalendar;
        case "gr:GrCamera":
            return GrCamera;
        case "gr:GrCapacity":
            return GrCapacity;
        case "gr:GrCar":
            return GrCar;
        case "gr:GrCaretDownFill":
            return GrCaretDownFill;
        case "gr:GrCaretDown":
            return GrCaretDown;
        case "gr:GrCaretLeftFill":
            return GrCaretLeftFill;
        case "gr:GrCaretNext":
            return GrCaretNext;
        case "gr:GrCaretPrevious":
            return GrCaretPrevious;
        case "gr:GrCaretRightFill":
            return GrCaretRightFill;
        case "gr:GrCaretUpFill":
            return GrCaretUpFill;
        case "gr:GrCaretUp":
            return GrCaretUp;
        case "gr:GrCart":
            return GrCart;
        case "gr:GrCatalogOption":
            return GrCatalogOption;
        case "gr:GrCatalog":
            return GrCatalog;
        case "gr:GrCentos":
            return GrCentos;
        case "gr:GrCertificate":
            return GrCertificate;
        case "gr:GrChannel":
            return GrChannel;
        case "gr:GrChapterAdd":
            return GrChapterAdd;
        case "gr:GrChapterNext":
            return GrChapterNext;
        case "gr:GrChapterPrevious":
            return GrChapterPrevious;
        case "gr:GrChatOption":
            return GrChatOption;
        case "gr:GrChat":
            return GrChat;
        case "gr:GrCheckboxSelected":
            return GrCheckboxSelected;
        case "gr:GrCheckbox":
            return GrCheckbox;
        case "gr:GrCheckmark":
            return GrCheckmark;
        case "gr:GrChrome":
            return GrChrome;
        case "gr:GrCircleAlert":
            return GrCircleAlert;
        case "gr:GrCircleInformation":
            return GrCircleInformation;
        case "gr:GrCirclePlay":
            return GrCirclePlay;
        case "gr:GrCircleQuestion":
            return GrCircleQuestion;
        case "gr:GrClearOption":
            return GrClearOption;
        case "gr:GrClear":
            return GrClear;
        case "gr:GrCli":
            return GrCli;
        case "gr:GrClipboard":
            return GrClipboard;
        case "gr:GrClock":
            return GrClock;
        case "gr:GrClone":
            return GrClone;
        case "gr:GrClose":
            return GrClose;
        case "gr:GrClosedCaption":
            return GrClosedCaption;
        case "gr:GrCloudComputer":
            return GrCloudComputer;
        case "gr:GrCloudDownload":
            return GrCloudDownload;
        case "gr:GrCloudSoftware":
            return GrCloudSoftware;
        case "gr:GrCloudUpload":
            return GrCloudUpload;
        case "gr:GrCloud":
            return GrCloud;
        case "gr:GrCloudlinux":
            return GrCloudlinux;
        case "gr:GrCluster":
            return GrCluster;
        case "gr:GrCoatCheck":
            return GrCoatCheck;
        case "gr:GrCodeSandbox":
            return GrCodeSandbox;
        case "gr:GrCode":
            return GrCode;
        case "gr:GrCodepen":
            return GrCodepen;
        case "gr:GrCoffee":
            return GrCoffee;
        case "gr:GrColumns":
            return GrColumns;
        case "gr:GrCommand":
            return GrCommand;
        case "gr:GrCompare":
            return GrCompare;
        case "gr:GrCompass":
            return GrCompass;
        case "gr:GrCompliance":
            return GrCompliance;
        case "gr:GrConfigure":
            return GrConfigure;
        case "gr:GrConnect":
            return GrConnect;
        case "gr:GrConnectivity":
            return GrConnectivity;
        case "gr:GrConsole":
            return GrConsole;
        case "gr:GrContactInfo":
            return GrContactInfo;
        case "gr:GrContact":
            return GrContact;
        case "gr:GrContract":
            return GrContract;
        case "gr:GrCopy":
            return GrCopy;
        case "gr:GrCpu":
            return GrCpu;
        case "gr:GrCreativeCommons":
            return GrCreativeCommons;
        case "gr:GrCreditCard":
            return GrCreditCard;
        case "gr:GrCss3":
            return GrCss3;
        case "gr:GrCube":
            return GrCube;
        case "gr:GrCubes":
            return GrCubes;
        case "gr:GrCurrency":
            return GrCurrency;
        case "gr:GrCursor":
            return GrCursor;
        case "gr:GrCut":
            return GrCut;
        case "gr:GrCycle":
            return GrCycle;
        case "gr:GrDashboard":
            return GrDashboard;
        case "gr:GrDatabase":
            return GrDatabase;
        case "gr:GrDebian":
            return GrDebian;
        case "gr:GrDeliver":
            return GrDeliver;
        case "gr:GrDeploy":
            return GrDeploy;
        case "gr:GrDescend":
            return GrDescend;
        case "gr:GrDescending":
            return GrDescending;
        case "gr:GrDesktop":
            return GrDesktop;
        case "gr:GrDetach":
            return GrDetach;
        case "gr:GrDevice":
            return GrDevice;
        case "gr:GrDiamond":
            return GrDiamond;
        case "gr:GrDirections":
            return GrDirections;
        case "gr:GrDisabledOutline":
            return GrDisabledOutline;
        case "gr:GrDisc":
            return GrDisc;
        case "gr:GrDislikeFill":
            return GrDislikeFill;
        case "gr:GrDislike":
            return GrDislike;
        case "gr:GrDocker":
            return GrDocker;
        case "gr:GrDocumentCloud":
            return GrDocumentCloud;
        case "gr:GrDocumentConfig":
            return GrDocumentConfig;
        case "gr:GrDocumentCsv":
            return GrDocumentCsv;
        case "gr:GrDocumentDownload":
            return GrDocumentDownload;
        case "gr:GrDocumentExcel":
            return GrDocumentExcel;
        case "gr:GrDocumentImage":
            return GrDocumentImage;
        case "gr:GrDocumentLocked":
            return GrDocumentLocked;
        case "gr:GrDocumentMissing":
            return GrDocumentMissing;
        case "gr:GrDocumentNotes":
            return GrDocumentNotes;
        case "gr:GrDocumentOutlook":
            return GrDocumentOutlook;
        case "gr:GrDocumentPdf":
            return GrDocumentPdf;
        case "gr:GrDocumentPerformance":
            return GrDocumentPerformance;
        case "gr:GrDocumentPpt":
            return GrDocumentPpt;
        case "gr:GrDocumentRtf":
            return GrDocumentRtf;
        case "gr:GrDocumentSound":
            return GrDocumentSound;
        case "gr:GrDocumentStore":
            return GrDocumentStore;
        case "gr:GrDocumentTest":
            return GrDocumentTest;
        case "gr:GrDocumentText":
            return GrDocumentText;
        case "gr:GrDocumentThreat":
            return GrDocumentThreat;
        case "gr:GrDocumentTime":
            return GrDocumentTime;
        case "gr:GrDocumentTransfer":
            return GrDocumentTransfer;
        case "gr:GrDocumentTxt":
            return GrDocumentTxt;
        case "gr:GrDocumentUpdate":
            return GrDocumentUpdate;
        case "gr:GrDocumentUpload":
            return GrDocumentUpload;
        case "gr:GrDocumentUser":
            return GrDocumentUser;
        case "gr:GrDocumentVerified":
            return GrDocumentVerified;
        case "gr:GrDocumentVideo":
            return GrDocumentVideo;
        case "gr:GrDocumentWindows":
            return GrDocumentWindows;
        case "gr:GrDocumentWord":
            return GrDocumentWord;
        case "gr:GrDocumentZip":
            return GrDocumentZip;
        case "gr:GrDocument":
            return GrDocument;
        case "gr:GrDomain":
            return GrDomain;
        case "gr:GrDos":
            return GrDos;
        case "gr:GrDown":
            return GrDown;
        case "gr:GrDownloadOption":
            return GrDownloadOption;
        case "gr:GrDownload":
            return GrDownload;
        case "gr:GrDrag":
            return GrDrag;
        case "gr:GrDrawer":
            return GrDrawer;
        case "gr:GrDribbble":
            return GrDribbble;
        case "gr:GrDriveCage":
            return GrDriveCage;
        case "gr:GrDropbox":
            return GrDropbox;
        case "gr:GrDuplicate":
            return GrDuplicate;
        case "gr:GrDxc":
            return GrDxc;
        case "gr:GrEbay":
            return GrEbay;
        case "gr:GrEdge":
            return GrEdge;
        case "gr:GrEdit":
            return GrEdit;
        case "gr:GrEject":
            return GrEject;
        case "gr:GrElevator":
            return GrElevator;
        case "gr:GrEmergency":
            return GrEmergency;
        case "gr:GrEmoji":
            return GrEmoji;
        case "gr:GrEmptyCircle":
            return GrEmptyCircle;
        case "gr:GrErase":
            return GrErase;
        case "gr:GrEscalator":
            return GrEscalator;
        case "gr:GrExpand":
            return GrExpand;
        case "gr:GrEzmeral":
            return GrEzmeral;
        case "gr:GrFacebookOption":
            return GrFacebookOption;
        case "gr:GrFacebook":
            return GrFacebook;
        case "gr:GrFanOption":
            return GrFanOption;
        case "gr:GrFan":
            return GrFan;
        case "gr:GrFastForward":
            return GrFastForward;
        case "gr:GrFavorite":
            return GrFavorite;
        case "gr:GrFedora":
            return GrFedora;
        case "gr:GrFigma":
            return GrFigma;
        case "gr:GrFilter":
            return GrFilter;
        case "gr:GrFingerPrint":
            return GrFingerPrint;
        case "gr:GrFireball":
            return GrFireball;
        case "gr:GrFirefox":
            return GrFirefox;
        case "gr:GrFirewall":
            return GrFirewall;
        case "gr:GrFlagFill":
            return GrFlagFill;
        case "gr:GrFlag":
            return GrFlag;
        case "gr:GrFlows":
            return GrFlows;
        case "gr:GrFolderCycle":
            return GrFolderCycle;
        case "gr:GrFolderOpen":
            return GrFolderOpen;
        case "gr:GrFolder":
            return GrFolder;
        case "gr:GrFormAdd":
            return GrFormAdd;
        case "gr:GrFormAttachment":
            return GrFormAttachment;
        case "gr:GrFormCalendar":
            return GrFormCalendar;
        case "gr:GrFormCheckmark":
            return GrFormCheckmark;
        case "gr:GrFormClock":
            return GrFormClock;
        case "gr:GrFormClose":
            return GrFormClose;
        case "gr:GrFormCut":
            return GrFormCut;
        case "gr:GrFormDown":
            return GrFormDown;
        case "gr:GrFormEdit":
            return GrFormEdit;
        case "gr:GrFormFilter":
            return GrFormFilter;
        case "gr:GrFormFolder":
            return GrFormFolder;
        case "gr:GrFormLocation":
            return GrFormLocation;
        case "gr:GrFormLock":
            return GrFormLock;
        case "gr:GrFormNextLink":
            return GrFormNextLink;
        case "gr:GrFormNext":
            return GrFormNext;
        case "gr:GrFormPin":
            return GrFormPin;
        case "gr:GrFormPreviousLink":
            return GrFormPreviousLink;
        case "gr:GrFormPrevious":
            return GrFormPrevious;
        case "gr:GrFormRefresh":
            return GrFormRefresh;
        case "gr:GrFormSchedule":
            return GrFormSchedule;
        case "gr:GrFormSearch":
            return GrFormSearch;
        case "gr:GrFormSubtract":
            return GrFormSubtract;
        case "gr:GrFormTrash":
            return GrFormTrash;
        case "gr:GrFormUp":
            return GrFormUp;
        case "gr:GrFormUpload":
            return GrFormUpload;
        case "gr:GrFormViewHide":
            return GrFormViewHide;
        case "gr:GrFormView":
            return GrFormView;
        case "gr:GrForwardTen":
            return GrForwardTen;
        case "gr:GrFreebsd":
            return GrFreebsd;
        case "gr:GrGallery":
            return GrGallery;
        case "gr:GrGamepad":
            return GrGamepad;
        case "gr:GrGateway":
            return GrGateway;
        case "gr:GrGatsbyjs":
            return GrGatsbyjs;
        case "gr:GrGem":
            return GrGem;
        case "gr:GrGift":
            return GrGift;
        case "gr:GrGithub":
            return GrGithub;
        case "gr:GrGlobe":
            return GrGlobe;
        case "gr:GrGolang":
            return GrGolang;
        case "gr:GrGooglePay":
            return GrGooglePay;
        case "gr:GrGooglePlay":
            return GrGooglePlay;
        case "gr:GrGooglePlus":
            return GrGooglePlus;
        case "gr:GrGoogleWallet":
            return GrGoogleWallet;
        case "gr:GrGoogle":
            return GrGoogle;
        case "gr:GrGraphQl":
            return GrGraphQl;
        case "gr:GrGremlin":
            return GrGremlin;
        case "gr:GrGrid":
            return GrGrid;
        case "gr:GrGrommet":
            return GrGrommet;
        case "gr:GrGroup":
            return GrGroup;
        case "gr:GrGrow":
            return GrGrow;
        case "gr:GrHadoop":
            return GrHadoop;
        case "gr:GrHalt":
            return GrHalt;
        case "gr:GrHelpBook":
            return GrHelpBook;
        case "gr:GrHelpOption":
            return GrHelpOption;
        case "gr:GrHelp":
            return GrHelp;
        case "gr:GrHeroku":
            return GrHeroku;
        case "gr:GrHide":
            return GrHide;
        case "gr:GrHistory":
            return GrHistory;
        case "gr:GrHomeOption":
            return GrHomeOption;
        case "gr:GrHomeRounded":
            return GrHomeRounded;
        case "gr:GrHome":
            return GrHome;
        case "gr:GrHorton":
            return GrHorton;
        case "gr:GrHostMaintenance":
            return GrHostMaintenance;
        case "gr:GrHost":
            return GrHost;
        case "gr:GrHp":
            return GrHp;
        case "gr:GrHpeLabs":
            return GrHpeLabs;
        case "gr:GrHpe":
            return GrHpe;
        case "gr:GrHpi":
            return GrHpi;
        case "gr:GrHtml5":
            return GrHtml5;
        case "gr:GrIceCream":
            return GrIceCream;
        case "gr:GrImage":
            return GrImage;
        case "gr:GrImpact":
            return GrImpact;
        case "gr:GrInProgress":
            return GrInProgress;
        case "gr:GrInbox":
            return GrInbox;
        case "gr:GrIndicator":
            return GrIndicator;
        case "gr:GrInfo":
            return GrInfo;
        case "gr:GrInherit":
            return GrInherit;
        case "gr:GrInsecure":
            return GrInsecure;
        case "gr:GrInspect":
            return GrInspect;
        case "gr:GrInstagram":
            return GrInstagram;
        case "gr:GrInstallOption":
            return GrInstallOption;
        case "gr:GrInstall":
            return GrInstall;
        case "gr:GrIntegration":
            return GrIntegration;
        case "gr:GrInternetExplorer":
            return GrInternetExplorer;
        case "gr:GrItalic":
            return GrItalic;
        case "gr:GrIteration":
            return GrIteration;
        case "gr:GrJava":
            return GrJava;
        case "gr:GrJs":
            return GrJs;
        case "gr:GrKey":
            return GrKey;
        case "gr:GrKeyboard":
            return GrKeyboard;
        case "gr:GrKubernetes":
            return GrKubernetes;
        case "gr:GrLanguage":
            return GrLanguage;
        case "gr:GrLastfm":
            return GrLastfm;
        case "gr:GrLaunch":
            return GrLaunch;
        case "gr:GrLayer":
            return GrLayer;
        case "gr:GrLicense":
            return GrLicense;
        case "gr:GrLikeFill":
            return GrLikeFill;
        case "gr:GrLike":
            return GrLike;
        case "gr:GrLineChart":
            return GrLineChart;
        case "gr:GrLinkBottom":
            return GrLinkBottom;
        case "gr:GrLinkDown":
            return GrLinkDown;
        case "gr:GrLinkNext":
            return GrLinkNext;
        case "gr:GrLinkPrevious":
            return GrLinkPrevious;
        case "gr:GrLinkTop":
            return GrLinkTop;
        case "gr:GrLinkUp":
            return GrLinkUp;
        case "gr:GrLink":
            return GrLink;
        case "gr:GrLinkedinOption":
            return GrLinkedinOption;
        case "gr:GrLinkedin":
            return GrLinkedin;
        case "gr:GrList":
            return GrList;
        case "gr:GrLocal":
            return GrLocal;
        case "gr:GrLocationPin":
            return GrLocationPin;
        case "gr:GrLocation":
            return GrLocation;
        case "gr:GrLock":
            return GrLock;
        case "gr:GrLogin":
            return GrLogin;
        case "gr:GrLogout":
            return GrLogout;
        case "gr:GrLounge":
            return GrLounge;
        case "gr:GrMagic":
            return GrMagic;
        case "gr:GrMailOption":
            return GrMailOption;
        case "gr:GrMail":
            return GrMail;
        case "gr:GrMandriva":
            return GrMandriva;
        case "gr:GrManual":
            return GrManual;
        case "gr:GrMapLocation":
            return GrMapLocation;
        case "gr:GrMap":
            return GrMap;
        case "gr:GrMastercard":
            return GrMastercard;
        case "gr:GrMedium":
            return GrMedium;
        case "gr:GrMemory":
            return GrMemory;
        case "gr:GrMenu":
            return GrMenu;
        case "gr:GrMeta":
            return GrMeta;
        case "gr:GrMicrofocus":
            return GrMicrofocus;
        case "gr:GrMicrophone":
            return GrMicrophone;
        case "gr:GrMoney":
            return GrMoney;
        case "gr:GrMonitor":
            return GrMonitor;
        case "gr:GrMonospace":
            return GrMonospace;
        case "gr:GrMoon":
            return GrMoon;
        case "gr:GrMoreVertical":
            return GrMoreVertical;
        case "gr:GrMore":
            return GrMore;
        case "gr:GrMouse":
            return GrMouse;
        case "gr:GrMultimedia":
            return GrMultimedia;
        case "gr:GrMultiple":
            return GrMultiple;
        case "gr:GrMusic":
            return GrMusic;
        case "gr:GrMysql":
            return GrMysql;
        case "gr:GrNavigate":
            return GrNavigate;
        case "gr:GrNetworkDrive":
            return GrNetworkDrive;
        case "gr:GrNetwork":
            return GrNetwork;
        case "gr:GrNewWindow":
            return GrNewWindow;
        case "gr:GrNew":
            return GrNew;
        case "gr:GrNext":
            return GrNext;
        case "gr:GrNode":
            return GrNode;
        case "gr:GrNodes":
            return GrNodes;
        case "gr:GrNorton":
            return GrNorton;
        case "gr:GrNote":
            return GrNote;
        case "gr:GrNotes":
            return GrNotes;
        case "gr:GrNotification":
            return GrNotification;
        case "gr:GrNpm":
            return GrNpm;
        case "gr:GrObjectGroup":
            return GrObjectGroup;
        case "gr:GrObjectUngroup":
            return GrObjectUngroup;
        case "gr:GrOfflineStorage":
            return GrOfflineStorage;
        case "gr:GrOnedrive":
            return GrOnedrive;
        case "gr:GrOpera":
            return GrOpera;
        case "gr:GrOptimize":
            return GrOptimize;
        case "gr:GrOracle":
            return GrOracle;
        case "gr:GrOrderedList":
            return GrOrderedList;
        case "gr:GrOrganization":
            return GrOrganization;
        case "gr:GrOverview":
            return GrOverview;
        case "gr:GrPackage":
            return GrPackage;
        case "gr:GrPaint":
            return GrPaint;
        case "gr:GrPan":
            return GrPan;
        case "gr:GrPauseFill":
            return GrPauseFill;
        case "gr:GrPause":
            return GrPause;
        case "gr:GrPaypal":
            return GrPaypal;
        case "gr:GrPerformance":
            return GrPerformance;
        case "gr:GrPersonalComputer":
            return GrPersonalComputer;
        case "gr:GrPhoneFlip":
            return GrPhoneFlip;
        case "gr:GrPhoneHorizontal":
            return GrPhoneHorizontal;
        case "gr:GrPhoneVertical":
            return GrPhoneVertical;
        case "gr:GrPhone":
            return GrPhone;
        case "gr:GrPieChart":
            return GrPieChart;
        case "gr:GrPiedPiper":
            return GrPiedPiper;
        case "gr:GrPin":
            return GrPin;
        case "gr:GrPinterest":
            return GrPinterest;
        case "gr:GrPlan":
            return GrPlan;
        case "gr:GrPlayFill":
            return GrPlayFill;
        case "gr:GrPlay":
            return GrPlay;
        case "gr:GrPlug":
            return GrPlug;
        case "gr:GrPocket":
            return GrPocket;
        case "gr:GrPowerCycle":
            return GrPowerCycle;
        case "gr:GrPowerForceShutdown":
            return GrPowerForceShutdown;
        case "gr:GrPowerReset":
            return GrPowerReset;
        case "gr:GrPowerShutdown":
            return GrPowerShutdown;
        case "gr:GrPower":
            return GrPower;
        case "gr:GrPrevious":
            return GrPrevious;
        case "gr:GrPrint":
            return GrPrint;
        case "gr:GrProductHunt":
            return GrProductHunt;
        case "gr:GrProjects":
            return GrProjects;
        case "gr:GrQr":
            return GrQr;
        case "gr:GrRadialSelected":
            return GrRadialSelected;
        case "gr:GrRadial":
            return GrRadial;
        case "gr:GrRaspberry":
            return GrRaspberry;
        case "gr:GrReactjs":
            return GrReactjs;
        case "gr:GrReddit":
            return GrReddit;
        case "gr:GrRedhat":
            return GrRedhat;
        case "gr:GrRedo":
            return GrRedo;
        case "gr:GrRefresh":
            return GrRefresh;
        case "gr:GrResources":
            return GrResources;
        case "gr:GrRestaurant":
            return GrRestaurant;
        case "gr:GrRestroomMen":
            return GrRestroomMen;
        case "gr:GrRestroomWomen":
            return GrRestroomWomen;
        case "gr:GrRestroom":
            return GrRestroom;
        case "gr:GrResume":
            return GrResume;
        case "gr:GrReturn":
            return GrReturn;
        case "gr:GrRevert":
            return GrRevert;
        case "gr:GrRewind":
            return GrRewind;
        case "gr:GrRisk":
            return GrRisk;
        case "gr:GrRobot":
            return GrRobot;
        case "gr:GrRotateLeft":
            return GrRotateLeft;
        case "gr:GrRotateRight":
            return GrRotateRight;
        case "gr:GrRss":
            return GrRss;
        case "gr:GrRun":
            return GrRun;
        case "gr:GrSafariOption":
            return GrSafariOption;
        case "gr:GrSamsungPay":
            return GrSamsungPay;
        case "gr:GrSans":
            return GrSans;
        case "gr:GrSatellite":
            return GrSatellite;
        case "gr:GrSave":
            return GrSave;
        case "gr:GrScan":
            return GrScan;
        case "gr:GrScheduleNew":
            return GrScheduleNew;
        case "gr:GrSchedulePlay":
            return GrSchedulePlay;
        case "gr:GrSchedule":
            return GrSchedule;
        case "gr:GrSchedules":
            return GrSchedules;
        case "gr:GrSco":
            return GrSco;
        case "gr:GrScorecard":
            return GrScorecard;
        case "gr:GrScript":
            return GrScript;
        case "gr:GrSd":
            return GrSd;
        case "gr:GrSearchAdvanced":
            return GrSearchAdvanced;
        case "gr:GrSearch":
            return GrSearch;
        case "gr:GrSecure":
            return GrSecure;
        case "gr:GrSelect":
            return GrSelect;
        case "gr:GrSelection":
            return GrSelection;
        case "gr:GrSemantics":
            return GrSemantics;
        case "gr:GrSend":
            return GrSend;
        case "gr:GrServerCluster":
            return GrServerCluster;
        case "gr:GrServer":
            return GrServer;
        case "gr:GrServers":
            return GrServers;
        case "gr:GrServicePlay":
            return GrServicePlay;
        case "gr:GrServices":
            return GrServices;
        case "gr:GrSettingsOption":
            return GrSettingsOption;
        case "gr:GrShareOption":
            return GrShareOption;
        case "gr:GrShareRounded":
            return GrShareRounded;
        case "gr:GrShare":
            return GrShare;
        case "gr:GrShieldSecurity":
            return GrShieldSecurity;
        case "gr:GrShield":
            return GrShield;
        case "gr:GrShift":
            return GrShift;
        case "gr:GrShop":
            return GrShop;
        case "gr:GrSidebar":
            return GrSidebar;
        case "gr:GrSign":
            return GrSign;
        case "gr:GrSkype":
            return GrSkype;
        case "gr:GrSlack":
            return GrSlack;
        case "gr:GrSnapchat":
            return GrSnapchat;
        case "gr:GrSolaris":
            return GrSolaris;
        case "gr:GrSort":
            return GrSort;
        case "gr:GrSoundcloud":
            return GrSoundcloud;
        case "gr:GrSpa":
            return GrSpa;
        case "gr:GrSpectrum":
            return GrSpectrum;
        case "gr:GrSplit":
            return GrSplit;
        case "gr:GrSplits":
            return GrSplits;
        case "gr:GrSpotify":
            return GrSpotify;
        case "gr:GrSquare":
            return GrSquare;
        case "gr:GrStackOverflow":
            return GrStackOverflow;
        case "gr:GrStakeholder":
            return GrStakeholder;
        case "gr:GrStarHalf":
            return GrStarHalf;
        case "gr:GrStarOutline":
            return GrStarOutline;
        case "gr:GrStar":
            return GrStar;
        case "gr:GrStatusCriticalSmall":
            return GrStatusCriticalSmall;
        case "gr:GrStatusCritical":
            return GrStatusCritical;
        case "gr:GrStatusDisabledSmall":
            return GrStatusDisabledSmall;
        case "gr:GrStatusDisabled":
            return GrStatusDisabled;
        case "gr:GrStatusGoodSmall":
            return GrStatusGoodSmall;
        case "gr:GrStatusGood":
            return GrStatusGood;
        case "gr:GrStatusInfoSmall":
            return GrStatusInfoSmall;
        case "gr:GrStatusInfo":
            return GrStatusInfo;
        case "gr:GrStatusPlaceholderSmall":
            return GrStatusPlaceholderSmall;
        case "gr:GrStatusPlaceholder":
            return GrStatusPlaceholder;
        case "gr:GrStatusUnknownSmall":
            return GrStatusUnknownSmall;
        case "gr:GrStatusUnknown":
            return GrStatusUnknown;
        case "gr:GrStatusWarningSmall":
            return GrStatusWarningSmall;
        case "gr:GrStatusWarning":
            return GrStatusWarning;
        case "gr:GrStepsOption":
            return GrStepsOption;
        case "gr:GrSteps":
            return GrSteps;
        case "gr:GrStopFill":
            return GrStopFill;
        case "gr:GrStop":
            return GrStop;
        case "gr:GrStorage":
            return GrStorage;
        case "gr:GrStreetView":
            return GrStreetView;
        case "gr:GrStrikeThrough":
            return GrStrikeThrough;
        case "gr:GrStripe":
            return GrStripe;
        case "gr:GrSubscript":
            return GrSubscript;
        case "gr:GrSubtractCircle":
            return GrSubtractCircle;
        case "gr:GrSubtract":
            return GrSubtract;
        case "gr:GrSun":
            return GrSun;
        case "gr:GrSuperscript":
            return GrSuperscript;
        case "gr:GrSupport":
            return GrSupport;
        case "gr:GrSuse":
            return GrSuse;
        case "gr:GrSwift":
            return GrSwift;
        case "gr:GrSwim":
            return GrSwim;
        case "gr:GrSwitch":
            return GrSwitch;
        case "gr:GrSync":
            return GrSync;
        case "gr:GrSystem":
            return GrSystem;
        case "gr:GrTableAdd":
            return GrTableAdd;
        case "gr:GrTable":
            return GrTable;
        case "gr:GrTag":
            return GrTag;
        case "gr:GrTapeOption":
            return GrTapeOption;
        case "gr:GrTape":
            return GrTape;
        case "gr:GrTarget":
            return GrTarget;
        case "gr:GrTask":
            return GrTask;
        case "gr:GrTasks":
            return GrTasks;
        case "gr:GrTechnology":
            return GrTechnology;
        case "gr:GrTemplate":
            return GrTemplate;
        case "gr:GrTerminal":
            return GrTerminal;
        case "gr:GrTestDesktop":
            return GrTestDesktop;
        case "gr:GrTest":
            return GrTest;
        case "gr:GrTextAlignCenter":
            return GrTextAlignCenter;
        case "gr:GrTextAlignFull":
            return GrTextAlignFull;
        case "gr:GrTextAlignLeft":
            return GrTextAlignLeft;
        case "gr:GrTextAlignRight":
            return GrTextAlignRight;
        case "gr:GrTextWrap":
            return GrTextWrap;
        case "gr:GrThreads":
            return GrThreads;
        case "gr:GrThreats":
            return GrThreats;
        case "gr:GrThreeDEffects":
            return GrThreeDEffects;
        case "gr:GrThreeD":
            return GrThreeD;
        case "gr:GrTicket":
            return GrTicket;
        case "gr:GrTiktok":
            return GrTiktok;
        case "gr:GrTime":
            return GrTime;
        case "gr:GrTip":
            return GrTip;
        case "gr:GrToast":
            return GrToast;
        case "gr:GrTools":
            return GrTools;
        case "gr:GrTooltip":
            return GrTooltip;
        case "gr:GrTopCorner":
            return GrTopCorner;
        case "gr:GrTrain":
            return GrTrain;
        case "gr:GrTransaction":
            return GrTransaction;
        case "gr:GrTrash":
            return GrTrash;
        case "gr:GrTreeOption":
            return GrTreeOption;
        case "gr:GrTree":
            return GrTree;
        case "gr:GrTrigger":
            return GrTrigger;
        case "gr:GrTrophy":
            return GrTrophy;
        case "gr:GrTroubleshoot":
            return GrTroubleshoot;
        case "gr:GrTty":
            return GrTty;
        case "gr:GrTumblr":
            return GrTumblr;
        case "gr:GrTurbolinux":
            return GrTurbolinux;
        case "gr:GrTwitch":
            return GrTwitch;
        case "gr:GrTwitter":
            return GrTwitter;
        case "gr:GrUbuntu":
            return GrUbuntu;
        case "gr:GrUnderline":
            return GrUnderline;
        case "gr:GrUndo":
            return GrUndo;
        case "gr:GrUnlink":
            return GrUnlink;
        case "gr:GrUnlock":
            return GrUnlock;
        case "gr:GrUnorderedList":
            return GrUnorderedList;
        case "gr:GrUnsorted":
            return GrUnsorted;
        case "gr:GrUp":
            return GrUp;
        case "gr:GrUpdate":
            return GrUpdate;
        case "gr:GrUpgrade":
            return GrUpgrade;
        case "gr:GrUploadOption":
            return GrUploadOption;
        case "gr:GrUpload":
            return GrUpload;
        case "gr:GrUsbKey":
            return GrUsbKey;
        case "gr:GrUserAdd":
            return GrUserAdd;
        case "gr:GrUserAdmin":
            return GrUserAdmin;
        case "gr:GrUserExpert":
            return GrUserExpert;
        case "gr:GrUserFemale":
            return GrUserFemale;
        case "gr:GrUserManager":
            return GrUserManager;
        case "gr:GrUserNew":
            return GrUserNew;
        case "gr:GrUserPolice":
            return GrUserPolice;
        case "gr:GrUserSettings":
            return GrUserSettings;
        case "gr:GrUserWorker":
            return GrUserWorker;
        case "gr:GrUser":
            return GrUser;
        case "gr:GrValidate":
            return GrValidate;
        case "gr:GrVend":
            return GrVend;
        case "gr:GrVenmo":
            return GrVenmo;
        case "gr:GrVideo":
            return GrVideo;
        case "gr:GrView":
            return GrView;
        case "gr:GrVimeo":
            return GrVimeo;
        case "gr:GrVirtualMachine":
            return GrVirtualMachine;
        case "gr:GrVirtualStorage":
            return GrVirtualStorage;
        case "gr:GrVisa":
            return GrVisa;
        case "gr:GrVmMaintenance":
            return GrVmMaintenance;
        case "gr:GrVmware":
            return GrVmware;
        case "gr:GrVolumeControl":
            return GrVolumeControl;
        case "gr:GrVolumeLow":
            return GrVolumeLow;
        case "gr:GrVolumeMute":
            return GrVolumeMute;
        case "gr:GrVolume":
            return GrVolume;
        case "gr:GrVulnerability":
            return GrVulnerability;
        case "gr:GrWaypoint":
            return GrWaypoint;
        case "gr:GrWebcam":
            return GrWebcam;
        case "gr:GrWechat":
            return GrWechat;
        case "gr:GrWhatsapp":
            return GrWhatsapp;
        case "gr:GrWheelchairActive":
            return GrWheelchairActive;
        case "gr:GrWheelchair":
            return GrWheelchair;
        case "gr:GrWifiLow":
            return GrWifiLow;
        case "gr:GrWifiMedium":
            return GrWifiMedium;
        case "gr:GrWifiNone":
            return GrWifiNone;
        case "gr:GrWifi":
            return GrWifi;
        case "gr:GrWindowsLegacy":
            return GrWindowsLegacy;
        case "gr:GrWindows":
            return GrWindows;
        case "gr:GrWordpress":
            return GrWordpress;
        case "gr:GrWorkshop":
            return GrWorkshop;
        case "gr:GrX":
            return GrX;
        case "gr:GrXing":
            return GrXing;
        case "gr:GrYoga":
            return GrYoga;
        case "gr:GrYoutube":
            return GrYoutube;
        case "gr:GrZoomIn":
            return GrZoomIn;
        case "gr:GrZoomOut":
            return GrZoomOut;
        case "gr:GrZoom":
            return GrZoom;
    }
}