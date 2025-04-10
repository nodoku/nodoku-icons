import type {IconType} from "react-icons";

import {
    AiFillAccountBook,
    AiFillAlert,
    AiFillAlipayCircle,
    AiFillAlipaySquare,
    AiFillAliwangwang,
    AiFillAmazonCircle,
    AiFillAmazonSquare,
    AiFillAndroid,
    AiFillApi,
    AiFillApple,
    AiFillAppstore,
    AiFillAudio,
    AiFillBackward,
    AiFillBank,
    AiFillBehanceCircle,
    AiFillBehanceSquare,
    AiFillBell,
    AiFillBilibili,
    AiFillBook,
    AiFillBoxPlot,
    AiFillBug,
    AiFillBuild,
    AiFillBulb,
    AiFillCalculator,
    AiFillCalendar,
    AiFillCamera,
    AiFillCar,
    AiFillCaretDown,
    AiFillCaretLeft,
    AiFillCaretRight,
    AiFillCaretUp,
    AiFillCarryOut,
    AiFillCheckCircle,
    AiFillCheckSquare,
    AiFillChrome,
    AiFillCiCircle,
    AiFillClockCircle,
    AiFillCloseCircle,
    AiFillCloseSquare,
    AiFillCloud,
    AiFillCodeSandboxCircle,
    AiFillCodeSandboxSquare,
    AiFillCode,
    AiFillCodepenCircle,
    AiFillCodepenSquare,
    AiFillCompass,
    AiFillContacts,
    AiFillContainer,
    AiFillControl,
    AiFillCopy,
    AiFillCopyrightCircle,
    AiFillCreditCard,
    AiFillCrown,
    AiFillCustomerService,
    AiFillDashboard,
    AiFillDatabase,
    AiFillDelete,
    AiFillDiff,
    AiFillDingtalkCircle,
    AiFillDingtalkSquare,
    AiFillDiscord,
    AiFillDislike,
    AiFillDollarCircle,
    AiFillDownCircle,
    AiFillDownSquare,
    AiFillDribbbleCircle,
    AiFillDribbbleSquare,
    AiFillDropboxCircle,
    AiFillDropboxSquare,
    AiFillEdit,
    AiFillEnvironment,
    AiFillEuroCircle,
    AiFillExclamationCircle,
    AiFillExperiment,
    AiFillEyeInvisible,
    AiFillEye,
    AiFillFacebook,
    AiFillFastBackward,
    AiFillFastForward,
    AiFillFileAdd,
    AiFillFileExcel,
    AiFillFileExclamation,
    AiFillFileImage,
    AiFillFileMarkdown,
    AiFillFilePdf,
    AiFillFilePpt,
    AiFillFileText,
    AiFillFileUnknown,
    AiFillFileWord,
    AiFillFileZip,
    AiFillFile,
    AiFillFilter,
    AiFillFire,
    AiFillFlag,
    AiFillFolderAdd,
    AiFillFolderOpen,
    AiFillFolder,
    AiFillFormatPainter,
    AiFillForward,
    AiFillFrown,
    AiFillFund,
    AiFillFunnelPlot,
    AiFillGift,
    AiFillGithub,
    AiFillGitlab,
    AiFillGold,
    AiFillGolden,
    AiFillGoogleCircle,
    AiFillGooglePlusCircle,
    AiFillGooglePlusSquare,
    AiFillGoogleSquare,
    AiFillHdd,
    AiFillHeart,
    AiFillHighlight,
    AiFillHome,
    AiFillHourglass,
    AiFillHtml5,
    AiFillIdcard,
    AiFillIeCircle,
    AiFillIeSquare,
    AiFillInfoCircle,
    AiFillInstagram,
    AiFillInsurance,
    AiFillInteraction,
    AiFillLayout,
    AiFillLeftCircle,
    AiFillLeftSquare,
    AiFillLike,
    AiFillLinkedin,
    AiFillLock,
    AiFillMacCommand,
    AiFillMail,
    AiFillMedicineBox,
    AiFillMediumCircle,
    AiFillMediumSquare,
    AiFillMeh,
    AiFillMerge,
    AiFillMessage,
    AiFillMinusCircle,
    AiFillMinusSquare,
    AiFillMobile,
    AiFillMoneyCollect,
    AiFillMoon,
    AiFillMuted,
    AiFillNotification,
    AiFillOpenAI,
    AiFillPauseCircle,
    AiFillPayCircle,
    AiFillPhone,
    AiFillPicture,
    AiFillPieChart,
    AiFillPinterest,
    AiFillPlayCircle,
    AiFillPlaySquare,
    AiFillPlusCircle,
    AiFillPlusSquare,
    AiFillPoundCircle,
    AiFillPrinter,
    AiFillProduct,
    AiFillProfile,
    AiFillProject,
    AiFillPropertySafety,
    AiFillPushpin,
    AiFillQqCircle,
    AiFillQqSquare,
    AiFillQuestionCircle,
    AiFillRead,
    AiFillReconciliation,
    AiFillRedEnvelope,
    AiFillRedditCircle,
    AiFillRedditSquare,
    AiFillRest,
    AiFillRightCircle,
    AiFillRightSquare,
    AiFillRobot,
    AiFillRocket,
    AiFillSafetyCertificate,
    AiFillSave,
    AiFillSchedule,
    AiFillSecurityScan,
    AiFillSetting,
    AiFillShop,
    AiFillShopping,
    AiFillSignal,
    AiFillSignature,
    AiFillSketchCircle,
    AiFillSketchSquare,
    AiFillSkin,
    AiFillSkype,
    AiFillSlackCircle,
    AiFillSlackSquare,
    AiFillSliders,
    AiFillSmile,
    AiFillSnippets,
    AiFillSound,
    AiFillSpotify,
    AiFillStar,
    AiFillStepBackward,
    AiFillStepForward,
    AiFillStop,
    AiFillSun,
    AiFillSwitcher,
    AiFillTablet,
    AiFillTag,
    AiFillTags,
    AiFillTaobaoCircle,
    AiFillTaobaoSquare,
    AiFillThunderbolt,
    AiFillTikTok,
    AiFillTool,
    AiFillTrademarkCircle,
    AiFillTrophy,
    AiFillTruck,
    AiFillTwitch,
    AiFillTwitterCircle,
    AiFillTwitterSquare,
    AiFillUnlock,
    AiFillUpCircle,
    AiFillUpSquare,
    AiFillUsb,
    AiFillVideoCamera,
    AiFillWallet,
    AiFillWarning,
    AiFillWechatWork,
    AiFillWechat,
    AiFillWeiboCircle,
    AiFillWeiboSquare,
    AiFillWindows,
    AiFillX,
    AiFillYahoo,
    AiFillYoutube,
    AiFillYuque,
    AiFillZhihuCircle,
    AiFillZhihuSquare,
    AiOutlineAccountBook,
    AiOutlineAim,
    AiOutlineAlert,
    AiOutlineAlibaba,
    AiOutlineAlignCenter,
    AiOutlineAlignLeft,
    AiOutlineAlignRight,
    AiOutlineAlipayCircle,
    AiOutlineAlipay,
    AiOutlineAliwangwang,
    AiOutlineAliyun,
    AiOutlineAmazon,
    AiOutlineAndroid,
    AiOutlineAntCloud,
    AiOutlineAntDesign,
    AiOutlineApartment,
    AiOutlineApi,
    AiOutlineApple,
    AiOutlineAppstoreAdd,
    AiOutlineAppstore,
    AiOutlineAreaChart,
    AiOutlineArrowDown,
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
    AiOutlineArrowUp,
    AiOutlineArrowsAlt,
    AiOutlineAudioMuted,
    AiOutlineAudio,
    AiOutlineAudit,
    AiOutlineBackward,
    AiOutlineBaidu,
    AiOutlineBank,
    AiOutlineBarChart,
    AiOutlineBarcode,
    AiOutlineBars,
    AiOutlineBehanceSquare,
    AiOutlineBehance,
    AiOutlineBell,
    AiOutlineBgColors,
    AiOutlineBilibili,
    AiOutlineBlock,
    AiOutlineBold,
    AiOutlineBook,
    AiOutlineBorderBottom,
    AiOutlineBorderHorizontal,
    AiOutlineBorderInner,
    AiOutlineBorderLeft,
    AiOutlineBorderOuter,
    AiOutlineBorderRight,
    AiOutlineBorderTop,
    AiOutlineBorderVerticle,
    AiOutlineBorder,
    AiOutlineBorderlessTable,
    AiOutlineBoxPlot,
    AiOutlineBranches,
    AiOutlineBug,
    AiOutlineBuild,
    AiOutlineBulb,
    AiOutlineCalculator,
    AiOutlineCalendar,
    AiOutlineCamera,
    AiOutlineCar,
    AiOutlineCaretDown,
    AiOutlineCaretLeft,
    AiOutlineCaretRight,
    AiOutlineCaretUp,
    AiOutlineCarryOut,
    AiOutlineCheckCircle,
    AiOutlineCheckSquare,
    AiOutlineCheck,
    AiOutlineChrome,
    AiOutlineCiCircle,
    AiOutlineCi,
    AiOutlineClear,
    AiOutlineClockCircle,
    AiOutlineCloseCircle,
    AiOutlineCloseSquare,
    AiOutlineClose,
    AiOutlineCloudDownload,
    AiOutlineCloudServer,
    AiOutlineCloudSync,
    AiOutlineCloudUpload,
    AiOutlineCloud,
    AiOutlineCluster,
    AiOutlineCodeSandbox,
    AiOutlineCode,
    AiOutlineCodepenCircle,
    AiOutlineCodepen,
    AiOutlineCoffee,
    AiOutlineColumnHeight,
    AiOutlineColumnWidth,
    AiOutlineComment,
    AiOutlineCompass,
    AiOutlineCompress,
    AiOutlineConsoleSql,
    AiOutlineContacts,
    AiOutlineContainer,
    AiOutlineControl,
    AiOutlineCopy,
    AiOutlineCopyrightCircle,
    AiOutlineCopyright,
    AiOutlineCreditCard,
    AiOutlineCrown,
    AiOutlineCustomerService,
    AiOutlineDash,
    AiOutlineDashboard,
    AiOutlineDatabase,
    AiOutlineDeleteColumn,
    AiOutlineDeleteRow,
    AiOutlineDelete,
    AiOutlineDeliveredProcedure,
    AiOutlineDeploymentUnit,
    AiOutlineDesktop,
    AiOutlineDiff,
    AiOutlineDingding,
    AiOutlineDingtalk,
    AiOutlineDisconnect,
    AiOutlineDiscord,
    AiOutlineDislike,
    AiOutlineDocker,
    AiOutlineDollarCircle,
    AiOutlineDollar,
    AiOutlineDotChart,
    AiOutlineDotNet,
    AiOutlineDoubleLeft,
    AiOutlineDoubleRight,
    AiOutlineDownCircle,
    AiOutlineDownSquare,
    AiOutlineDown,
    AiOutlineDownload,
    AiOutlineDrag,
    AiOutlineDribbbleSquare,
    AiOutlineDribbble,
    AiOutlineDropbox,
    AiOutlineEdit,
    AiOutlineEllipsis,
    AiOutlineEnter,
    AiOutlineEnvironment,
    AiOutlineEuroCircle,
    AiOutlineEuro,
    AiOutlineException,
    AiOutlineExclamationCircle,
    AiOutlineExclamation,
    AiOutlineExpandAlt,
    AiOutlineExpand,
    AiOutlineExperiment,
    AiOutlineExport,
    AiOutlineEyeInvisible,
    AiOutlineEye,
    AiOutlineFacebook,
    AiOutlineFall,
    AiOutlineFastBackward,
    AiOutlineFastForward,
    AiOutlineFieldBinary,
    AiOutlineFieldNumber,
    AiOutlineFieldString,
    AiOutlineFieldTime,
    AiOutlineFileAdd,
    AiOutlineFileDone,
    AiOutlineFileExcel,
    AiOutlineFileExclamation,
    AiOutlineFileGif,
    AiOutlineFileImage,
    AiOutlineFileJpg,
    AiOutlineFileMarkdown,
    AiOutlineFilePdf,
    AiOutlineFilePpt,
    AiOutlineFileProtect,
    AiOutlineFileSearch,
    AiOutlineFileSync,
    AiOutlineFileText,
    AiOutlineFileUnknown,
    AiOutlineFileWord,
    AiOutlineFileZip,
    AiOutlineFile,
    AiOutlineFilter,
    AiOutlineFire,
    AiOutlineFlag,
    AiOutlineFolderAdd,
    AiOutlineFolderOpen,
    AiOutlineFolderView,
    AiOutlineFolder,
    AiOutlineFontColors,
    AiOutlineFontSize,
    AiOutlineFork,
    AiOutlineForm,
    AiOutlineFormatPainter,
    AiOutlineForward,
    AiOutlineFrown,
    AiOutlineFullscreenExit,
    AiOutlineFullscreen,
    AiOutlineFunction,
    AiOutlineFundProjectionScreen,
    AiOutlineFundView,
    AiOutlineFund,
    AiOutlineFunnelPlot,
    AiOutlineGateway,
    AiOutlineGif,
    AiOutlineGift,
    AiOutlineGithub,
    AiOutlineGitlab,
    AiOutlineGlobal,
    AiOutlineGold,
    AiOutlineGooglePlus,
    AiOutlineGoogle,
    AiOutlineGroup,
    AiOutlineHarmonyOS,
    AiOutlineHdd,
    AiOutlineHeart,
    AiOutlineHeatMap,
    AiOutlineHighlight,
    AiOutlineHistory,
    AiOutlineHolder,
    AiOutlineHome,
    AiOutlineHourglass,
    AiOutlineHtml5,
    AiOutlineIdcard,
    AiOutlineIe,
    AiOutlineImport,
    AiOutlineInbox,
    AiOutlineInfoCircle,
    AiOutlineInfo,
    AiOutlineInsertRowAbove,
    AiOutlineInsertRowBelow,
    AiOutlineInsertRowLeft,
    AiOutlineInsertRowRight,
    AiOutlineInstagram,
    AiOutlineInsurance,
    AiOutlineInteraction,
    AiOutlineIssuesClose,
    AiOutlineItalic,
    AiOutlineJavaScript,
    AiOutlineJava,
    AiOutlineKey,
    AiOutlineKubernetes,
    AiOutlineLaptop,
    AiOutlineLayout,
    AiOutlineLeftCircle,
    AiOutlineLeftSquare,
    AiOutlineLeft,
    AiOutlineLike,
    AiOutlineLineChart,
    AiOutlineLineHeight,
    AiOutlineLine,
    AiOutlineLink,
    AiOutlineLinkedin,
    AiOutlineLinux,
    AiOutlineLoading3Quarters,
    AiOutlineLoading,
    AiOutlineLock,
    AiOutlineLogin,
    AiOutlineLogout,
    AiOutlineMacCommand,
    AiOutlineMail,
    AiOutlineMan,
    AiOutlineMedicineBox,
    AiOutlineMediumWorkmark,
    AiOutlineMedium,
    AiOutlineMeh,
    AiOutlineMenuFold,
    AiOutlineMenuUnfold,
    AiOutlineMenu,
    AiOutlineMergeCells,
    AiOutlineMerge,
    AiOutlineMessage,
    AiOutlineMinusCircle,
    AiOutlineMinusSquare,
    AiOutlineMinus,
    AiOutlineMobile,
    AiOutlineMoneyCollect,
    AiOutlineMonitor,
    AiOutlineMoon,
    AiOutlineMore,
    AiOutlineMuted,
    AiOutlineNodeCollapse,
    AiOutlineNodeExpand,
    AiOutlineNodeIndex,
    AiOutlineNotification,
    AiOutlineNumber,
    AiOutlineOneToOne,
    AiOutlineOpenAI,
    AiOutlineOrderedList,
    AiOutlinePaperClip,
    AiOutlinePartition,
    AiOutlinePauseCircle,
    AiOutlinePause,
    AiOutlinePayCircle,
    AiOutlinePercentage,
    AiOutlinePhone,
    AiOutlinePicCenter,
    AiOutlinePicLeft,
    AiOutlinePicRight,
    AiOutlinePicture,
    AiOutlinePieChart,
    AiOutlinePinterest,
    AiOutlinePlayCircle,
    AiOutlinePlaySquare,
    AiOutlinePlusCircle,
    AiOutlinePlusSquare,
    AiOutlinePlus,
    AiOutlinePoundCircle,
    AiOutlinePound,
    AiOutlinePoweroff,
    AiOutlinePrinter,
    AiOutlineProduct,
    AiOutlineProfile,
    AiOutlineProject,
    AiOutlinePropertySafety,
    AiOutlinePullRequest,
    AiOutlinePushpin,
    AiOutlinePython,
    AiOutlineQq,
    AiOutlineQrcode,
    AiOutlineQuestionCircle,
    AiOutlineQuestion,
    AiOutlineRadarChart,
    AiOutlineRadiusBottomleft,
    AiOutlineRadiusBottomright,
    AiOutlineRadiusSetting,
    AiOutlineRadiusUpleft,
    AiOutlineRadiusUpright,
    AiOutlineRead,
    AiOutlineReconciliation,
    AiOutlineRedEnvelope,
    AiOutlineReddit,
    AiOutlineRedo,
    AiOutlineReload,
    AiOutlineRest,
    AiOutlineRetweet,
    AiOutlineRightCircle,
    AiOutlineRightSquare,
    AiOutlineRight,
    AiOutlineRise,
    AiOutlineRobot,
    AiOutlineRocket,
    AiOutlineRollback,
    AiOutlineRotateLeft,
    AiOutlineRotateRight,
    AiOutlineRuby,
    AiOutlineSafetyCertificate,
    AiOutlineSafety,
    AiOutlineSave,
    AiOutlineScan,
    AiOutlineSchedule,
    AiOutlineScissor,
    AiOutlineSearch,
    AiOutlineSecurityScan,
    AiOutlineSelect,
    AiOutlineSend,
    AiOutlineSetting,
    AiOutlineShake,
    AiOutlineShareAlt,
    AiOutlineShop,
    AiOutlineShoppingCart,
    AiOutlineShopping,
    AiOutlineShrink,
    AiOutlineSignature,
    AiOutlineSisternode,
    AiOutlineSketch,
    AiOutlineSkin,
    AiOutlineSkype,
    AiOutlineSlackSquare,
    AiOutlineSlack,
    AiOutlineSliders,
    AiOutlineSmallDash,
    AiOutlineSmile,
    AiOutlineSnippets,
    AiOutlineSolution,
    AiOutlineSortAscending,
    AiOutlineSortDescending,
    AiOutlineSound,
    AiOutlineSplitCells,
    AiOutlineSpotify,
    AiOutlineStar,
    AiOutlineStepBackward,
    AiOutlineStepForward,
    AiOutlineStock,
    AiOutlineStop,
    AiOutlineStrikethrough,
    AiOutlineSubnode,
    AiOutlineSun,
    AiOutlineSwapLeft,
    AiOutlineSwapRight,
    AiOutlineSwap,
    AiOutlineSwitcher,
    AiOutlineSync,
    AiOutlineTable,
    AiOutlineTablet,
    AiOutlineTag,
    AiOutlineTags,
    AiOutlineTaobaoCircle,
    AiOutlineTaobao,
    AiOutlineTeam,
    AiOutlineThunderbolt,
    AiOutlineTikTok,
    AiOutlineToTop,
    AiOutlineTool,
    AiOutlineTrademarkCircle,
    AiOutlineTrademark,
    AiOutlineTransaction,
    AiOutlineTranslation,
    AiOutlineTrophy,
    AiOutlineTruck,
    AiOutlineTwitch,
    AiOutlineTwitter,
    AiOutlineUnderline,
    AiOutlineUndo,
    AiOutlineUngroup,
    AiOutlineUnlock,
    AiOutlineUnorderedList,
    AiOutlineUpCircle,
    AiOutlineUpSquare,
    AiOutlineUp,
    AiOutlineUpload,
    AiOutlineUsb,
    AiOutlineUserAdd,
    AiOutlineUserDelete,
    AiOutlineUserSwitch,
    AiOutlineUser,
    AiOutlineUsergroupAdd,
    AiOutlineUsergroupDelete,
    AiOutlineVerified,
    AiOutlineVerticalAlignBottom,
    AiOutlineVerticalAlignMiddle,
    AiOutlineVerticalAlignTop,
    AiOutlineVerticalLeft,
    AiOutlineVerticalRight,
    AiOutlineVideoCameraAdd,
    AiOutlineVideoCamera,
    AiOutlineWallet,
    AiOutlineWarning,
    AiOutlineWechatWork,
    AiOutlineWechat,
    AiOutlineWeiboCircle,
    AiOutlineWeiboSquare,
    AiOutlineWeibo,
    AiOutlineWhatsApp,
    AiOutlineWifi,
    AiOutlineWindows,
    AiOutlineWoman,
    AiOutlineX,
    AiOutlineYahoo,
    AiOutlineYoutube,
    AiOutlineYuque,
    AiOutlineZhihu,
    AiOutlineZoomIn,
    AiOutlineZoomOut,
    AiTwotoneAccountBook,
    AiTwotoneAlert,
    AiTwotoneApi,
    AiTwotoneAppstore,
    AiTwotoneAudio,
    AiTwotoneBank,
    AiTwotoneBell,
    AiTwotoneBook,
    AiTwotoneBoxPlot,
    AiTwotoneBug,
    AiTwotoneBuild,
    AiTwotoneBulb,
    AiTwotoneCalculator,
    AiTwotoneCalendar,
    AiTwotoneCamera,
    AiTwotoneCar,
    AiTwotoneCarryOut,
    AiTwotoneCheckCircle,
    AiTwotoneCheckSquare,
    AiTwotoneCiCircle,
    AiTwotoneCi,
    AiTwotoneClockCircle,
    AiTwotoneCloseCircle,
    AiTwotoneCloseSquare,
    AiTwotoneCloud,
    AiTwotoneCode,
    AiTwotoneCompass,
    AiTwotoneContacts,
    AiTwotoneContainer,
    AiTwotoneControl,
    AiTwotoneCopy,
    AiTwotoneCopyrightCircle,
    AiTwotoneCopyright,
    AiTwotoneCreditCard,
    AiTwotoneCrown,
    AiTwotoneCustomerService,
    AiTwotoneDashboard,
    AiTwotoneDatabase,
    AiTwotoneDelete,
    AiTwotoneDiff,
    AiTwotoneDislike,
    AiTwotoneDollarCircle,
    AiTwotoneDollar,
    AiTwotoneDownCircle,
    AiTwotoneDownSquare,
    AiTwotoneEdit,
    AiTwotoneEnvironment,
    AiTwotoneEuroCircle,
    AiTwotoneEuro,
    AiTwotoneExclamationCircle,
    AiTwotoneExperiment,
    AiTwotoneEyeInvisible,
    AiTwotoneEye,
    AiTwotoneFileAdd,
    AiTwotoneFileExcel,
    AiTwotoneFileExclamation,
    AiTwotoneFileImage,
    AiTwotoneFileMarkdown,
    AiTwotoneFilePdf,
    AiTwotoneFilePpt,
    AiTwotoneFileText,
    AiTwotoneFileUnknown,
    AiTwotoneFileWord,
    AiTwotoneFileZip,
    AiTwotoneFile,
    AiTwotoneFilter,
    AiTwotoneFire,
    AiTwotoneFlag,
    AiTwotoneFolderAdd,
    AiTwotoneFolderOpen,
    AiTwotoneFolder,
    AiTwotoneFrown,
    AiTwotoneFund,
    AiTwotoneFunnelPlot,
    AiTwotoneGift,
    AiTwotoneGold,
    AiTwotoneHdd,
    AiTwotoneHeart,
    AiTwotoneHighlight,
    AiTwotoneHome,
    AiTwotoneHourglass,
    AiTwotoneHtml5,
    AiTwotoneIdcard,
    AiTwotoneInfoCircle,
    AiTwotoneInsurance,
    AiTwotoneInteraction,
    AiTwotoneLayout,
    AiTwotoneLeftCircle,
    AiTwotoneLeftSquare,
    AiTwotoneLike,
    AiTwotoneLock,
    AiTwotoneMail,
    AiTwotoneMedicineBox,
    AiTwotoneMeh,
    AiTwotoneMessage,
    AiTwotoneMinusCircle,
    AiTwotoneMinusSquare,
    AiTwotoneMobile,
    AiTwotoneMoneyCollect,
    AiTwotoneNotification,
    AiTwotonePauseCircle,
    AiTwotonePhone,
    AiTwotonePicture,
    AiTwotonePieChart,
    AiTwotonePlayCircle,
    AiTwotonePlaySquare,
    AiTwotonePlusCircle,
    AiTwotonePlusSquare,
    AiTwotonePoundCircle,
    AiTwotonePrinter,
    AiTwotoneProfile,
    AiTwotoneProject,
    AiTwotonePropertySafety,
    AiTwotonePushpin,
    AiTwotoneQuestionCircle,
    AiTwotoneReconciliation,
    AiTwotoneRedEnvelope,
    AiTwotoneRest,
    AiTwotoneRightCircle,
    AiTwotoneRightSquare,
    AiTwotoneRocket,
    AiTwotoneSafetyCertificate,
    AiTwotoneSave,
    AiTwotoneSchedule,
    AiTwotoneSecurityScan,
    AiTwotoneSetting,
    AiTwotoneShop,
    AiTwotoneShopping,
    AiTwotoneSkin,
    AiTwotoneSliders,
    AiTwotoneSmile,
    AiTwotoneSnippets,
    AiTwotoneSound,
    AiTwotoneStar,
    AiTwotoneStop,
    AiTwotoneSwitcher,
    AiTwotoneTablet,
    AiTwotoneTag,
    AiTwotoneTags,
    AiTwotoneThunderbolt,
    AiTwotoneTool,
    AiTwotoneTrademarkCircle,
    AiTwotoneTrophy,
    AiTwotoneUnlock,
    AiTwotoneUpCircle,
    AiTwotoneUpSquare,
    AiTwotoneUsb,
    AiTwotoneVideoCamera,
    AiTwotoneWallet,
    AiTwotoneWarning,
} from "react-icons/ai"

export function nameToReactIcon_ai_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "ai:AiFillAccountBook":
            return AiFillAccountBook;
        case "ai:AiFillAlert":
            return AiFillAlert;
        case "ai:AiFillAlipayCircle":
            return AiFillAlipayCircle;
        case "ai:AiFillAlipaySquare":
            return AiFillAlipaySquare;
        case "ai:AiFillAliwangwang":
            return AiFillAliwangwang;
        case "ai:AiFillAmazonCircle":
            return AiFillAmazonCircle;
        case "ai:AiFillAmazonSquare":
            return AiFillAmazonSquare;
        case "ai:AiFillAndroid":
            return AiFillAndroid;
        case "ai:AiFillApi":
            return AiFillApi;
        case "ai:AiFillApple":
            return AiFillApple;
        case "ai:AiFillAppstore":
            return AiFillAppstore;
        case "ai:AiFillAudio":
            return AiFillAudio;
        case "ai:AiFillBackward":
            return AiFillBackward;
        case "ai:AiFillBank":
            return AiFillBank;
        case "ai:AiFillBehanceCircle":
            return AiFillBehanceCircle;
        case "ai:AiFillBehanceSquare":
            return AiFillBehanceSquare;
        case "ai:AiFillBell":
            return AiFillBell;
        case "ai:AiFillBilibili":
            return AiFillBilibili;
        case "ai:AiFillBook":
            return AiFillBook;
        case "ai:AiFillBoxPlot":
            return AiFillBoxPlot;
        case "ai:AiFillBug":
            return AiFillBug;
        case "ai:AiFillBuild":
            return AiFillBuild;
        case "ai:AiFillBulb":
            return AiFillBulb;
        case "ai:AiFillCalculator":
            return AiFillCalculator;
        case "ai:AiFillCalendar":
            return AiFillCalendar;
        case "ai:AiFillCamera":
            return AiFillCamera;
        case "ai:AiFillCar":
            return AiFillCar;
        case "ai:AiFillCaretDown":
            return AiFillCaretDown;
        case "ai:AiFillCaretLeft":
            return AiFillCaretLeft;
        case "ai:AiFillCaretRight":
            return AiFillCaretRight;
        case "ai:AiFillCaretUp":
            return AiFillCaretUp;
        case "ai:AiFillCarryOut":
            return AiFillCarryOut;
        case "ai:AiFillCheckCircle":
            return AiFillCheckCircle;
        case "ai:AiFillCheckSquare":
            return AiFillCheckSquare;
        case "ai:AiFillChrome":
            return AiFillChrome;
        case "ai:AiFillCiCircle":
            return AiFillCiCircle;
        case "ai:AiFillClockCircle":
            return AiFillClockCircle;
        case "ai:AiFillCloseCircle":
            return AiFillCloseCircle;
        case "ai:AiFillCloseSquare":
            return AiFillCloseSquare;
        case "ai:AiFillCloud":
            return AiFillCloud;
        case "ai:AiFillCodeSandboxCircle":
            return AiFillCodeSandboxCircle;
        case "ai:AiFillCodeSandboxSquare":
            return AiFillCodeSandboxSquare;
        case "ai:AiFillCode":
            return AiFillCode;
        case "ai:AiFillCodepenCircle":
            return AiFillCodepenCircle;
        case "ai:AiFillCodepenSquare":
            return AiFillCodepenSquare;
        case "ai:AiFillCompass":
            return AiFillCompass;
        case "ai:AiFillContacts":
            return AiFillContacts;
        case "ai:AiFillContainer":
            return AiFillContainer;
        case "ai:AiFillControl":
            return AiFillControl;
        case "ai:AiFillCopy":
            return AiFillCopy;
        case "ai:AiFillCopyrightCircle":
            return AiFillCopyrightCircle;
        case "ai:AiFillCreditCard":
            return AiFillCreditCard;
        case "ai:AiFillCrown":
            return AiFillCrown;
        case "ai:AiFillCustomerService":
            return AiFillCustomerService;
        case "ai:AiFillDashboard":
            return AiFillDashboard;
        case "ai:AiFillDatabase":
            return AiFillDatabase;
        case "ai:AiFillDelete":
            return AiFillDelete;
        case "ai:AiFillDiff":
            return AiFillDiff;
        case "ai:AiFillDingtalkCircle":
            return AiFillDingtalkCircle;
        case "ai:AiFillDingtalkSquare":
            return AiFillDingtalkSquare;
        case "ai:AiFillDiscord":
            return AiFillDiscord;
        case "ai:AiFillDislike":
            return AiFillDislike;
        case "ai:AiFillDollarCircle":
            return AiFillDollarCircle;
        case "ai:AiFillDownCircle":
            return AiFillDownCircle;
        case "ai:AiFillDownSquare":
            return AiFillDownSquare;
        case "ai:AiFillDribbbleCircle":
            return AiFillDribbbleCircle;
        case "ai:AiFillDribbbleSquare":
            return AiFillDribbbleSquare;
        case "ai:AiFillDropboxCircle":
            return AiFillDropboxCircle;
        case "ai:AiFillDropboxSquare":
            return AiFillDropboxSquare;
        case "ai:AiFillEdit":
            return AiFillEdit;
        case "ai:AiFillEnvironment":
            return AiFillEnvironment;
        case "ai:AiFillEuroCircle":
            return AiFillEuroCircle;
        case "ai:AiFillExclamationCircle":
            return AiFillExclamationCircle;
        case "ai:AiFillExperiment":
            return AiFillExperiment;
        case "ai:AiFillEyeInvisible":
            return AiFillEyeInvisible;
        case "ai:AiFillEye":
            return AiFillEye;
        case "ai:AiFillFacebook":
            return AiFillFacebook;
        case "ai:AiFillFastBackward":
            return AiFillFastBackward;
        case "ai:AiFillFastForward":
            return AiFillFastForward;
        case "ai:AiFillFileAdd":
            return AiFillFileAdd;
        case "ai:AiFillFileExcel":
            return AiFillFileExcel;
        case "ai:AiFillFileExclamation":
            return AiFillFileExclamation;
        case "ai:AiFillFileImage":
            return AiFillFileImage;
        case "ai:AiFillFileMarkdown":
            return AiFillFileMarkdown;
        case "ai:AiFillFilePdf":
            return AiFillFilePdf;
        case "ai:AiFillFilePpt":
            return AiFillFilePpt;
        case "ai:AiFillFileText":
            return AiFillFileText;
        case "ai:AiFillFileUnknown":
            return AiFillFileUnknown;
        case "ai:AiFillFileWord":
            return AiFillFileWord;
        case "ai:AiFillFileZip":
            return AiFillFileZip;
        case "ai:AiFillFile":
            return AiFillFile;
        case "ai:AiFillFilter":
            return AiFillFilter;
        case "ai:AiFillFire":
            return AiFillFire;
        case "ai:AiFillFlag":
            return AiFillFlag;
        case "ai:AiFillFolderAdd":
            return AiFillFolderAdd;
        case "ai:AiFillFolderOpen":
            return AiFillFolderOpen;
        case "ai:AiFillFolder":
            return AiFillFolder;
        case "ai:AiFillFormatPainter":
            return AiFillFormatPainter;
        case "ai:AiFillForward":
            return AiFillForward;
        case "ai:AiFillFrown":
            return AiFillFrown;
        case "ai:AiFillFund":
            return AiFillFund;
        case "ai:AiFillFunnelPlot":
            return AiFillFunnelPlot;
        case "ai:AiFillGift":
            return AiFillGift;
        case "ai:AiFillGithub":
            return AiFillGithub;
        case "ai:AiFillGitlab":
            return AiFillGitlab;
        case "ai:AiFillGold":
            return AiFillGold;
        case "ai:AiFillGolden":
            return AiFillGolden;
        case "ai:AiFillGoogleCircle":
            return AiFillGoogleCircle;
        case "ai:AiFillGooglePlusCircle":
            return AiFillGooglePlusCircle;
        case "ai:AiFillGooglePlusSquare":
            return AiFillGooglePlusSquare;
        case "ai:AiFillGoogleSquare":
            return AiFillGoogleSquare;
        case "ai:AiFillHdd":
            return AiFillHdd;
        case "ai:AiFillHeart":
            return AiFillHeart;
        case "ai:AiFillHighlight":
            return AiFillHighlight;
        case "ai:AiFillHome":
            return AiFillHome;
        case "ai:AiFillHourglass":
            return AiFillHourglass;
        case "ai:AiFillHtml5":
            return AiFillHtml5;
        case "ai:AiFillIdcard":
            return AiFillIdcard;
        case "ai:AiFillIeCircle":
            return AiFillIeCircle;
        case "ai:AiFillIeSquare":
            return AiFillIeSquare;
        case "ai:AiFillInfoCircle":
            return AiFillInfoCircle;
        case "ai:AiFillInstagram":
            return AiFillInstagram;
        case "ai:AiFillInsurance":
            return AiFillInsurance;
        case "ai:AiFillInteraction":
            return AiFillInteraction;
        case "ai:AiFillLayout":
            return AiFillLayout;
        case "ai:AiFillLeftCircle":
            return AiFillLeftCircle;
        case "ai:AiFillLeftSquare":
            return AiFillLeftSquare;
        case "ai:AiFillLike":
            return AiFillLike;
        case "ai:AiFillLinkedin":
            return AiFillLinkedin;
        case "ai:AiFillLock":
            return AiFillLock;
        case "ai:AiFillMacCommand":
            return AiFillMacCommand;
        case "ai:AiFillMail":
            return AiFillMail;
        case "ai:AiFillMedicineBox":
            return AiFillMedicineBox;
        case "ai:AiFillMediumCircle":
            return AiFillMediumCircle;
        case "ai:AiFillMediumSquare":
            return AiFillMediumSquare;
        case "ai:AiFillMeh":
            return AiFillMeh;
        case "ai:AiFillMerge":
            return AiFillMerge;
        case "ai:AiFillMessage":
            return AiFillMessage;
        case "ai:AiFillMinusCircle":
            return AiFillMinusCircle;
        case "ai:AiFillMinusSquare":
            return AiFillMinusSquare;
        case "ai:AiFillMobile":
            return AiFillMobile;
        case "ai:AiFillMoneyCollect":
            return AiFillMoneyCollect;
        case "ai:AiFillMoon":
            return AiFillMoon;
        case "ai:AiFillMuted":
            return AiFillMuted;
        case "ai:AiFillNotification":
            return AiFillNotification;
        case "ai:AiFillOpenAI":
            return AiFillOpenAI;
        case "ai:AiFillPauseCircle":
            return AiFillPauseCircle;
        case "ai:AiFillPayCircle":
            return AiFillPayCircle;
        case "ai:AiFillPhone":
            return AiFillPhone;
        case "ai:AiFillPicture":
            return AiFillPicture;
        case "ai:AiFillPieChart":
            return AiFillPieChart;
        case "ai:AiFillPinterest":
            return AiFillPinterest;
        case "ai:AiFillPlayCircle":
            return AiFillPlayCircle;
        case "ai:AiFillPlaySquare":
            return AiFillPlaySquare;
        case "ai:AiFillPlusCircle":
            return AiFillPlusCircle;
        case "ai:AiFillPlusSquare":
            return AiFillPlusSquare;
        case "ai:AiFillPoundCircle":
            return AiFillPoundCircle;
        case "ai:AiFillPrinter":
            return AiFillPrinter;
        case "ai:AiFillProduct":
            return AiFillProduct;
        case "ai:AiFillProfile":
            return AiFillProfile;
        case "ai:AiFillProject":
            return AiFillProject;
        case "ai:AiFillPropertySafety":
            return AiFillPropertySafety;
        case "ai:AiFillPushpin":
            return AiFillPushpin;
        case "ai:AiFillQqCircle":
            return AiFillQqCircle;
        case "ai:AiFillQqSquare":
            return AiFillQqSquare;
        case "ai:AiFillQuestionCircle":
            return AiFillQuestionCircle;
        case "ai:AiFillRead":
            return AiFillRead;
        case "ai:AiFillReconciliation":
            return AiFillReconciliation;
        case "ai:AiFillRedEnvelope":
            return AiFillRedEnvelope;
        case "ai:AiFillRedditCircle":
            return AiFillRedditCircle;
        case "ai:AiFillRedditSquare":
            return AiFillRedditSquare;
        case "ai:AiFillRest":
            return AiFillRest;
        case "ai:AiFillRightCircle":
            return AiFillRightCircle;
        case "ai:AiFillRightSquare":
            return AiFillRightSquare;
        case "ai:AiFillRobot":
            return AiFillRobot;
        case "ai:AiFillRocket":
            return AiFillRocket;
        case "ai:AiFillSafetyCertificate":
            return AiFillSafetyCertificate;
        case "ai:AiFillSave":
            return AiFillSave;
        case "ai:AiFillSchedule":
            return AiFillSchedule;
        case "ai:AiFillSecurityScan":
            return AiFillSecurityScan;
        case "ai:AiFillSetting":
            return AiFillSetting;
        case "ai:AiFillShop":
            return AiFillShop;
        case "ai:AiFillShopping":
            return AiFillShopping;
        case "ai:AiFillSignal":
            return AiFillSignal;
        case "ai:AiFillSignature":
            return AiFillSignature;
        case "ai:AiFillSketchCircle":
            return AiFillSketchCircle;
        case "ai:AiFillSketchSquare":
            return AiFillSketchSquare;
        case "ai:AiFillSkin":
            return AiFillSkin;
        case "ai:AiFillSkype":
            return AiFillSkype;
        case "ai:AiFillSlackCircle":
            return AiFillSlackCircle;
        case "ai:AiFillSlackSquare":
            return AiFillSlackSquare;
        case "ai:AiFillSliders":
            return AiFillSliders;
        case "ai:AiFillSmile":
            return AiFillSmile;
        case "ai:AiFillSnippets":
            return AiFillSnippets;
        case "ai:AiFillSound":
            return AiFillSound;
        case "ai:AiFillSpotify":
            return AiFillSpotify;
        case "ai:AiFillStar":
            return AiFillStar;
        case "ai:AiFillStepBackward":
            return AiFillStepBackward;
        case "ai:AiFillStepForward":
            return AiFillStepForward;
        case "ai:AiFillStop":
            return AiFillStop;
        case "ai:AiFillSun":
            return AiFillSun;
        case "ai:AiFillSwitcher":
            return AiFillSwitcher;
        case "ai:AiFillTablet":
            return AiFillTablet;
        case "ai:AiFillTag":
            return AiFillTag;
        case "ai:AiFillTags":
            return AiFillTags;
        case "ai:AiFillTaobaoCircle":
            return AiFillTaobaoCircle;
        case "ai:AiFillTaobaoSquare":
            return AiFillTaobaoSquare;
        case "ai:AiFillThunderbolt":
            return AiFillThunderbolt;
        case "ai:AiFillTikTok":
            return AiFillTikTok;
        case "ai:AiFillTool":
            return AiFillTool;
        case "ai:AiFillTrademarkCircle":
            return AiFillTrademarkCircle;
        case "ai:AiFillTrophy":
            return AiFillTrophy;
        case "ai:AiFillTruck":
            return AiFillTruck;
        case "ai:AiFillTwitch":
            return AiFillTwitch;
        case "ai:AiFillTwitterCircle":
            return AiFillTwitterCircle;
        case "ai:AiFillTwitterSquare":
            return AiFillTwitterSquare;
        case "ai:AiFillUnlock":
            return AiFillUnlock;
        case "ai:AiFillUpCircle":
            return AiFillUpCircle;
        case "ai:AiFillUpSquare":
            return AiFillUpSquare;
        case "ai:AiFillUsb":
            return AiFillUsb;
        case "ai:AiFillVideoCamera":
            return AiFillVideoCamera;
        case "ai:AiFillWallet":
            return AiFillWallet;
        case "ai:AiFillWarning":
            return AiFillWarning;
        case "ai:AiFillWechatWork":
            return AiFillWechatWork;
        case "ai:AiFillWechat":
            return AiFillWechat;
        case "ai:AiFillWeiboCircle":
            return AiFillWeiboCircle;
        case "ai:AiFillWeiboSquare":
            return AiFillWeiboSquare;
        case "ai:AiFillWindows":
            return AiFillWindows;
        case "ai:AiFillX":
            return AiFillX;
        case "ai:AiFillYahoo":
            return AiFillYahoo;
        case "ai:AiFillYoutube":
            return AiFillYoutube;
        case "ai:AiFillYuque":
            return AiFillYuque;
        case "ai:AiFillZhihuCircle":
            return AiFillZhihuCircle;
        case "ai:AiFillZhihuSquare":
            return AiFillZhihuSquare;
        case "ai:AiOutlineAccountBook":
            return AiOutlineAccountBook;
        case "ai:AiOutlineAim":
            return AiOutlineAim;
        case "ai:AiOutlineAlert":
            return AiOutlineAlert;
        case "ai:AiOutlineAlibaba":
            return AiOutlineAlibaba;
        case "ai:AiOutlineAlignCenter":
            return AiOutlineAlignCenter;
        case "ai:AiOutlineAlignLeft":
            return AiOutlineAlignLeft;
        case "ai:AiOutlineAlignRight":
            return AiOutlineAlignRight;
        case "ai:AiOutlineAlipayCircle":
            return AiOutlineAlipayCircle;
        case "ai:AiOutlineAlipay":
            return AiOutlineAlipay;
        case "ai:AiOutlineAliwangwang":
            return AiOutlineAliwangwang;
        case "ai:AiOutlineAliyun":
            return AiOutlineAliyun;
        case "ai:AiOutlineAmazon":
            return AiOutlineAmazon;
        case "ai:AiOutlineAndroid":
            return AiOutlineAndroid;
        case "ai:AiOutlineAntCloud":
            return AiOutlineAntCloud;
        case "ai:AiOutlineAntDesign":
            return AiOutlineAntDesign;
        case "ai:AiOutlineApartment":
            return AiOutlineApartment;
        case "ai:AiOutlineApi":
            return AiOutlineApi;
        case "ai:AiOutlineApple":
            return AiOutlineApple;
        case "ai:AiOutlineAppstoreAdd":
            return AiOutlineAppstoreAdd;
        case "ai:AiOutlineAppstore":
            return AiOutlineAppstore;
        case "ai:AiOutlineAreaChart":
            return AiOutlineAreaChart;
        case "ai:AiOutlineArrowDown":
            return AiOutlineArrowDown;
        case "ai:AiOutlineArrowLeft":
            return AiOutlineArrowLeft;
        case "ai:AiOutlineArrowRight":
            return AiOutlineArrowRight;
        case "ai:AiOutlineArrowUp":
            return AiOutlineArrowUp;
        case "ai:AiOutlineArrowsAlt":
            return AiOutlineArrowsAlt;
        case "ai:AiOutlineAudioMuted":
            return AiOutlineAudioMuted;
        case "ai:AiOutlineAudio":
            return AiOutlineAudio;
        case "ai:AiOutlineAudit":
            return AiOutlineAudit;
        case "ai:AiOutlineBackward":
            return AiOutlineBackward;
        case "ai:AiOutlineBaidu":
            return AiOutlineBaidu;
        case "ai:AiOutlineBank":
            return AiOutlineBank;
        case "ai:AiOutlineBarChart":
            return AiOutlineBarChart;
        case "ai:AiOutlineBarcode":
            return AiOutlineBarcode;
        case "ai:AiOutlineBars":
            return AiOutlineBars;
        case "ai:AiOutlineBehanceSquare":
            return AiOutlineBehanceSquare;
        case "ai:AiOutlineBehance":
            return AiOutlineBehance;
        case "ai:AiOutlineBell":
            return AiOutlineBell;
        case "ai:AiOutlineBgColors":
            return AiOutlineBgColors;
        case "ai:AiOutlineBilibili":
            return AiOutlineBilibili;
        case "ai:AiOutlineBlock":
            return AiOutlineBlock;
        case "ai:AiOutlineBold":
            return AiOutlineBold;
        case "ai:AiOutlineBook":
            return AiOutlineBook;
        case "ai:AiOutlineBorderBottom":
            return AiOutlineBorderBottom;
        case "ai:AiOutlineBorderHorizontal":
            return AiOutlineBorderHorizontal;
        case "ai:AiOutlineBorderInner":
            return AiOutlineBorderInner;
        case "ai:AiOutlineBorderLeft":
            return AiOutlineBorderLeft;
        case "ai:AiOutlineBorderOuter":
            return AiOutlineBorderOuter;
        case "ai:AiOutlineBorderRight":
            return AiOutlineBorderRight;
        case "ai:AiOutlineBorderTop":
            return AiOutlineBorderTop;
        case "ai:AiOutlineBorderVerticle":
            return AiOutlineBorderVerticle;
        case "ai:AiOutlineBorder":
            return AiOutlineBorder;
        case "ai:AiOutlineBorderlessTable":
            return AiOutlineBorderlessTable;
        case "ai:AiOutlineBoxPlot":
            return AiOutlineBoxPlot;
        case "ai:AiOutlineBranches":
            return AiOutlineBranches;
        case "ai:AiOutlineBug":
            return AiOutlineBug;
        case "ai:AiOutlineBuild":
            return AiOutlineBuild;
        case "ai:AiOutlineBulb":
            return AiOutlineBulb;
        case "ai:AiOutlineCalculator":
            return AiOutlineCalculator;
        case "ai:AiOutlineCalendar":
            return AiOutlineCalendar;
        case "ai:AiOutlineCamera":
            return AiOutlineCamera;
        case "ai:AiOutlineCar":
            return AiOutlineCar;
        case "ai:AiOutlineCaretDown":
            return AiOutlineCaretDown;
        case "ai:AiOutlineCaretLeft":
            return AiOutlineCaretLeft;
        case "ai:AiOutlineCaretRight":
            return AiOutlineCaretRight;
        case "ai:AiOutlineCaretUp":
            return AiOutlineCaretUp;
        case "ai:AiOutlineCarryOut":
            return AiOutlineCarryOut;
        case "ai:AiOutlineCheckCircle":
            return AiOutlineCheckCircle;
        case "ai:AiOutlineCheckSquare":
            return AiOutlineCheckSquare;
        case "ai:AiOutlineCheck":
            return AiOutlineCheck;
        case "ai:AiOutlineChrome":
            return AiOutlineChrome;
        case "ai:AiOutlineCiCircle":
            return AiOutlineCiCircle;
        case "ai:AiOutlineCi":
            return AiOutlineCi;
        case "ai:AiOutlineClear":
            return AiOutlineClear;
        case "ai:AiOutlineClockCircle":
            return AiOutlineClockCircle;
        case "ai:AiOutlineCloseCircle":
            return AiOutlineCloseCircle;
        case "ai:AiOutlineCloseSquare":
            return AiOutlineCloseSquare;
        case "ai:AiOutlineClose":
            return AiOutlineClose;
        case "ai:AiOutlineCloudDownload":
            return AiOutlineCloudDownload;
        case "ai:AiOutlineCloudServer":
            return AiOutlineCloudServer;
        case "ai:AiOutlineCloudSync":
            return AiOutlineCloudSync;
        case "ai:AiOutlineCloudUpload":
            return AiOutlineCloudUpload;
        case "ai:AiOutlineCloud":
            return AiOutlineCloud;
        case "ai:AiOutlineCluster":
            return AiOutlineCluster;
        case "ai:AiOutlineCodeSandbox":
            return AiOutlineCodeSandbox;
        case "ai:AiOutlineCode":
            return AiOutlineCode;
        case "ai:AiOutlineCodepenCircle":
            return AiOutlineCodepenCircle;
        case "ai:AiOutlineCodepen":
            return AiOutlineCodepen;
        case "ai:AiOutlineCoffee":
            return AiOutlineCoffee;
        case "ai:AiOutlineColumnHeight":
            return AiOutlineColumnHeight;
        case "ai:AiOutlineColumnWidth":
            return AiOutlineColumnWidth;
        case "ai:AiOutlineComment":
            return AiOutlineComment;
        case "ai:AiOutlineCompass":
            return AiOutlineCompass;
        case "ai:AiOutlineCompress":
            return AiOutlineCompress;
        case "ai:AiOutlineConsoleSql":
            return AiOutlineConsoleSql;
        case "ai:AiOutlineContacts":
            return AiOutlineContacts;
        case "ai:AiOutlineContainer":
            return AiOutlineContainer;
        case "ai:AiOutlineControl":
            return AiOutlineControl;
        case "ai:AiOutlineCopy":
            return AiOutlineCopy;
        case "ai:AiOutlineCopyrightCircle":
            return AiOutlineCopyrightCircle;
        case "ai:AiOutlineCopyright":
            return AiOutlineCopyright;
        case "ai:AiOutlineCreditCard":
            return AiOutlineCreditCard;
        case "ai:AiOutlineCrown":
            return AiOutlineCrown;
        case "ai:AiOutlineCustomerService":
            return AiOutlineCustomerService;
        case "ai:AiOutlineDash":
            return AiOutlineDash;
        case "ai:AiOutlineDashboard":
            return AiOutlineDashboard;
        case "ai:AiOutlineDatabase":
            return AiOutlineDatabase;
        case "ai:AiOutlineDeleteColumn":
            return AiOutlineDeleteColumn;
        case "ai:AiOutlineDeleteRow":
            return AiOutlineDeleteRow;
        case "ai:AiOutlineDelete":
            return AiOutlineDelete;
        case "ai:AiOutlineDeliveredProcedure":
            return AiOutlineDeliveredProcedure;
        case "ai:AiOutlineDeploymentUnit":
            return AiOutlineDeploymentUnit;
        case "ai:AiOutlineDesktop":
            return AiOutlineDesktop;
        case "ai:AiOutlineDiff":
            return AiOutlineDiff;
        case "ai:AiOutlineDingding":
            return AiOutlineDingding;
        case "ai:AiOutlineDingtalk":
            return AiOutlineDingtalk;
        case "ai:AiOutlineDisconnect":
            return AiOutlineDisconnect;
        case "ai:AiOutlineDiscord":
            return AiOutlineDiscord;
        case "ai:AiOutlineDislike":
            return AiOutlineDislike;
        case "ai:AiOutlineDocker":
            return AiOutlineDocker;
        case "ai:AiOutlineDollarCircle":
            return AiOutlineDollarCircle;
        case "ai:AiOutlineDollar":
            return AiOutlineDollar;
        case "ai:AiOutlineDotChart":
            return AiOutlineDotChart;
        case "ai:AiOutlineDotNet":
            return AiOutlineDotNet;
        case "ai:AiOutlineDoubleLeft":
            return AiOutlineDoubleLeft;
        case "ai:AiOutlineDoubleRight":
            return AiOutlineDoubleRight;
        case "ai:AiOutlineDownCircle":
            return AiOutlineDownCircle;
        case "ai:AiOutlineDownSquare":
            return AiOutlineDownSquare;
        case "ai:AiOutlineDown":
            return AiOutlineDown;
        case "ai:AiOutlineDownload":
            return AiOutlineDownload;
        case "ai:AiOutlineDrag":
            return AiOutlineDrag;
        case "ai:AiOutlineDribbbleSquare":
            return AiOutlineDribbbleSquare;
        case "ai:AiOutlineDribbble":
            return AiOutlineDribbble;
        case "ai:AiOutlineDropbox":
            return AiOutlineDropbox;
        case "ai:AiOutlineEdit":
            return AiOutlineEdit;
        case "ai:AiOutlineEllipsis":
            return AiOutlineEllipsis;
        case "ai:AiOutlineEnter":
            return AiOutlineEnter;
        case "ai:AiOutlineEnvironment":
            return AiOutlineEnvironment;
        case "ai:AiOutlineEuroCircle":
            return AiOutlineEuroCircle;
        case "ai:AiOutlineEuro":
            return AiOutlineEuro;
        case "ai:AiOutlineException":
            return AiOutlineException;
        case "ai:AiOutlineExclamationCircle":
            return AiOutlineExclamationCircle;
        case "ai:AiOutlineExclamation":
            return AiOutlineExclamation;
        case "ai:AiOutlineExpandAlt":
            return AiOutlineExpandAlt;
        case "ai:AiOutlineExpand":
            return AiOutlineExpand;
        case "ai:AiOutlineExperiment":
            return AiOutlineExperiment;
        case "ai:AiOutlineExport":
            return AiOutlineExport;
        case "ai:AiOutlineEyeInvisible":
            return AiOutlineEyeInvisible;
        case "ai:AiOutlineEye":
            return AiOutlineEye;
        case "ai:AiOutlineFacebook":
            return AiOutlineFacebook;
        case "ai:AiOutlineFall":
            return AiOutlineFall;
        case "ai:AiOutlineFastBackward":
            return AiOutlineFastBackward;
        case "ai:AiOutlineFastForward":
            return AiOutlineFastForward;
        case "ai:AiOutlineFieldBinary":
            return AiOutlineFieldBinary;
        case "ai:AiOutlineFieldNumber":
            return AiOutlineFieldNumber;
        case "ai:AiOutlineFieldString":
            return AiOutlineFieldString;
        case "ai:AiOutlineFieldTime":
            return AiOutlineFieldTime;
        case "ai:AiOutlineFileAdd":
            return AiOutlineFileAdd;
        case "ai:AiOutlineFileDone":
            return AiOutlineFileDone;
        case "ai:AiOutlineFileExcel":
            return AiOutlineFileExcel;
        case "ai:AiOutlineFileExclamation":
            return AiOutlineFileExclamation;
        case "ai:AiOutlineFileGif":
            return AiOutlineFileGif;
        case "ai:AiOutlineFileImage":
            return AiOutlineFileImage;
        case "ai:AiOutlineFileJpg":
            return AiOutlineFileJpg;
        case "ai:AiOutlineFileMarkdown":
            return AiOutlineFileMarkdown;
        case "ai:AiOutlineFilePdf":
            return AiOutlineFilePdf;
        case "ai:AiOutlineFilePpt":
            return AiOutlineFilePpt;
        case "ai:AiOutlineFileProtect":
            return AiOutlineFileProtect;
        case "ai:AiOutlineFileSearch":
            return AiOutlineFileSearch;
        case "ai:AiOutlineFileSync":
            return AiOutlineFileSync;
        case "ai:AiOutlineFileText":
            return AiOutlineFileText;
        case "ai:AiOutlineFileUnknown":
            return AiOutlineFileUnknown;
        case "ai:AiOutlineFileWord":
            return AiOutlineFileWord;
        case "ai:AiOutlineFileZip":
            return AiOutlineFileZip;
        case "ai:AiOutlineFile":
            return AiOutlineFile;
        case "ai:AiOutlineFilter":
            return AiOutlineFilter;
        case "ai:AiOutlineFire":
            return AiOutlineFire;
        case "ai:AiOutlineFlag":
            return AiOutlineFlag;
        case "ai:AiOutlineFolderAdd":
            return AiOutlineFolderAdd;
        case "ai:AiOutlineFolderOpen":
            return AiOutlineFolderOpen;
        case "ai:AiOutlineFolderView":
            return AiOutlineFolderView;
        case "ai:AiOutlineFolder":
            return AiOutlineFolder;
        case "ai:AiOutlineFontColors":
            return AiOutlineFontColors;
        case "ai:AiOutlineFontSize":
            return AiOutlineFontSize;
        case "ai:AiOutlineFork":
            return AiOutlineFork;
        case "ai:AiOutlineForm":
            return AiOutlineForm;
        case "ai:AiOutlineFormatPainter":
            return AiOutlineFormatPainter;
        case "ai:AiOutlineForward":
            return AiOutlineForward;
        case "ai:AiOutlineFrown":
            return AiOutlineFrown;
        case "ai:AiOutlineFullscreenExit":
            return AiOutlineFullscreenExit;
        case "ai:AiOutlineFullscreen":
            return AiOutlineFullscreen;
        case "ai:AiOutlineFunction":
            return AiOutlineFunction;
        case "ai:AiOutlineFundProjectionScreen":
            return AiOutlineFundProjectionScreen;
        case "ai:AiOutlineFundView":
            return AiOutlineFundView;
        case "ai:AiOutlineFund":
            return AiOutlineFund;
        case "ai:AiOutlineFunnelPlot":
            return AiOutlineFunnelPlot;
        case "ai:AiOutlineGateway":
            return AiOutlineGateway;
        case "ai:AiOutlineGif":
            return AiOutlineGif;
        case "ai:AiOutlineGift":
            return AiOutlineGift;
        case "ai:AiOutlineGithub":
            return AiOutlineGithub;
        case "ai:AiOutlineGitlab":
            return AiOutlineGitlab;
        case "ai:AiOutlineGlobal":
            return AiOutlineGlobal;
        case "ai:AiOutlineGold":
            return AiOutlineGold;
        case "ai:AiOutlineGooglePlus":
            return AiOutlineGooglePlus;
        case "ai:AiOutlineGoogle":
            return AiOutlineGoogle;
        case "ai:AiOutlineGroup":
            return AiOutlineGroup;
        case "ai:AiOutlineHarmonyOS":
            return AiOutlineHarmonyOS;
        case "ai:AiOutlineHdd":
            return AiOutlineHdd;
        case "ai:AiOutlineHeart":
            return AiOutlineHeart;
        case "ai:AiOutlineHeatMap":
            return AiOutlineHeatMap;
        case "ai:AiOutlineHighlight":
            return AiOutlineHighlight;
        case "ai:AiOutlineHistory":
            return AiOutlineHistory;
        case "ai:AiOutlineHolder":
            return AiOutlineHolder;
        case "ai:AiOutlineHome":
            return AiOutlineHome;
        case "ai:AiOutlineHourglass":
            return AiOutlineHourglass;
        case "ai:AiOutlineHtml5":
            return AiOutlineHtml5;
        case "ai:AiOutlineIdcard":
            return AiOutlineIdcard;
        case "ai:AiOutlineIe":
            return AiOutlineIe;
        case "ai:AiOutlineImport":
            return AiOutlineImport;
        case "ai:AiOutlineInbox":
            return AiOutlineInbox;
        case "ai:AiOutlineInfoCircle":
            return AiOutlineInfoCircle;
        case "ai:AiOutlineInfo":
            return AiOutlineInfo;
        case "ai:AiOutlineInsertRowAbove":
            return AiOutlineInsertRowAbove;
        case "ai:AiOutlineInsertRowBelow":
            return AiOutlineInsertRowBelow;
        case "ai:AiOutlineInsertRowLeft":
            return AiOutlineInsertRowLeft;
        case "ai:AiOutlineInsertRowRight":
            return AiOutlineInsertRowRight;
        case "ai:AiOutlineInstagram":
            return AiOutlineInstagram;
        case "ai:AiOutlineInsurance":
            return AiOutlineInsurance;
        case "ai:AiOutlineInteraction":
            return AiOutlineInteraction;
        case "ai:AiOutlineIssuesClose":
            return AiOutlineIssuesClose;
        case "ai:AiOutlineItalic":
            return AiOutlineItalic;
        case "ai:AiOutlineJavaScript":
            return AiOutlineJavaScript;
        case "ai:AiOutlineJava":
            return AiOutlineJava;
        case "ai:AiOutlineKey":
            return AiOutlineKey;
        case "ai:AiOutlineKubernetes":
            return AiOutlineKubernetes;
        case "ai:AiOutlineLaptop":
            return AiOutlineLaptop;
        case "ai:AiOutlineLayout":
            return AiOutlineLayout;
        case "ai:AiOutlineLeftCircle":
            return AiOutlineLeftCircle;
        case "ai:AiOutlineLeftSquare":
            return AiOutlineLeftSquare;
        case "ai:AiOutlineLeft":
            return AiOutlineLeft;
        case "ai:AiOutlineLike":
            return AiOutlineLike;
        case "ai:AiOutlineLineChart":
            return AiOutlineLineChart;
        case "ai:AiOutlineLineHeight":
            return AiOutlineLineHeight;
        case "ai:AiOutlineLine":
            return AiOutlineLine;
        case "ai:AiOutlineLink":
            return AiOutlineLink;
        case "ai:AiOutlineLinkedin":
            return AiOutlineLinkedin;
        case "ai:AiOutlineLinux":
            return AiOutlineLinux;
        case "ai:AiOutlineLoading3Quarters":
            return AiOutlineLoading3Quarters;
        case "ai:AiOutlineLoading":
            return AiOutlineLoading;
        case "ai:AiOutlineLock":
            return AiOutlineLock;
        case "ai:AiOutlineLogin":
            return AiOutlineLogin;
        case "ai:AiOutlineLogout":
            return AiOutlineLogout;
        case "ai:AiOutlineMacCommand":
            return AiOutlineMacCommand;
        case "ai:AiOutlineMail":
            return AiOutlineMail;
        case "ai:AiOutlineMan":
            return AiOutlineMan;
        case "ai:AiOutlineMedicineBox":
            return AiOutlineMedicineBox;
        case "ai:AiOutlineMediumWorkmark":
            return AiOutlineMediumWorkmark;
        case "ai:AiOutlineMedium":
            return AiOutlineMedium;
        case "ai:AiOutlineMeh":
            return AiOutlineMeh;
        case "ai:AiOutlineMenuFold":
            return AiOutlineMenuFold;
        case "ai:AiOutlineMenuUnfold":
            return AiOutlineMenuUnfold;
        case "ai:AiOutlineMenu":
            return AiOutlineMenu;
        case "ai:AiOutlineMergeCells":
            return AiOutlineMergeCells;
        case "ai:AiOutlineMerge":
            return AiOutlineMerge;
        case "ai:AiOutlineMessage":
            return AiOutlineMessage;
        case "ai:AiOutlineMinusCircle":
            return AiOutlineMinusCircle;
        case "ai:AiOutlineMinusSquare":
            return AiOutlineMinusSquare;
        case "ai:AiOutlineMinus":
            return AiOutlineMinus;
        case "ai:AiOutlineMobile":
            return AiOutlineMobile;
        case "ai:AiOutlineMoneyCollect":
            return AiOutlineMoneyCollect;
        case "ai:AiOutlineMonitor":
            return AiOutlineMonitor;
        case "ai:AiOutlineMoon":
            return AiOutlineMoon;
        case "ai:AiOutlineMore":
            return AiOutlineMore;
        case "ai:AiOutlineMuted":
            return AiOutlineMuted;
        case "ai:AiOutlineNodeCollapse":
            return AiOutlineNodeCollapse;
        case "ai:AiOutlineNodeExpand":
            return AiOutlineNodeExpand;
        case "ai:AiOutlineNodeIndex":
            return AiOutlineNodeIndex;
        case "ai:AiOutlineNotification":
            return AiOutlineNotification;
        case "ai:AiOutlineNumber":
            return AiOutlineNumber;
        case "ai:AiOutlineOneToOne":
            return AiOutlineOneToOne;
        case "ai:AiOutlineOpenAI":
            return AiOutlineOpenAI;
        case "ai:AiOutlineOrderedList":
            return AiOutlineOrderedList;
        case "ai:AiOutlinePaperClip":
            return AiOutlinePaperClip;
        case "ai:AiOutlinePartition":
            return AiOutlinePartition;
        case "ai:AiOutlinePauseCircle":
            return AiOutlinePauseCircle;
        case "ai:AiOutlinePause":
            return AiOutlinePause;
        case "ai:AiOutlinePayCircle":
            return AiOutlinePayCircle;
        case "ai:AiOutlinePercentage":
            return AiOutlinePercentage;
        case "ai:AiOutlinePhone":
            return AiOutlinePhone;
        case "ai:AiOutlinePicCenter":
            return AiOutlinePicCenter;
        case "ai:AiOutlinePicLeft":
            return AiOutlinePicLeft;
        case "ai:AiOutlinePicRight":
            return AiOutlinePicRight;
        case "ai:AiOutlinePicture":
            return AiOutlinePicture;
        case "ai:AiOutlinePieChart":
            return AiOutlinePieChart;
        case "ai:AiOutlinePinterest":
            return AiOutlinePinterest;
        case "ai:AiOutlinePlayCircle":
            return AiOutlinePlayCircle;
        case "ai:AiOutlinePlaySquare":
            return AiOutlinePlaySquare;
        case "ai:AiOutlinePlusCircle":
            return AiOutlinePlusCircle;
        case "ai:AiOutlinePlusSquare":
            return AiOutlinePlusSquare;
        case "ai:AiOutlinePlus":
            return AiOutlinePlus;
        case "ai:AiOutlinePoundCircle":
            return AiOutlinePoundCircle;
        case "ai:AiOutlinePound":
            return AiOutlinePound;
        case "ai:AiOutlinePoweroff":
            return AiOutlinePoweroff;
        case "ai:AiOutlinePrinter":
            return AiOutlinePrinter;
        case "ai:AiOutlineProduct":
            return AiOutlineProduct;
        case "ai:AiOutlineProfile":
            return AiOutlineProfile;
        case "ai:AiOutlineProject":
            return AiOutlineProject;
        case "ai:AiOutlinePropertySafety":
            return AiOutlinePropertySafety;
        case "ai:AiOutlinePullRequest":
            return AiOutlinePullRequest;
        case "ai:AiOutlinePushpin":
            return AiOutlinePushpin;
        case "ai:AiOutlinePython":
            return AiOutlinePython;
        case "ai:AiOutlineQq":
            return AiOutlineQq;
        case "ai:AiOutlineQrcode":
            return AiOutlineQrcode;
        case "ai:AiOutlineQuestionCircle":
            return AiOutlineQuestionCircle;
        case "ai:AiOutlineQuestion":
            return AiOutlineQuestion;
        case "ai:AiOutlineRadarChart":
            return AiOutlineRadarChart;
        case "ai:AiOutlineRadiusBottomleft":
            return AiOutlineRadiusBottomleft;
        case "ai:AiOutlineRadiusBottomright":
            return AiOutlineRadiusBottomright;
        case "ai:AiOutlineRadiusSetting":
            return AiOutlineRadiusSetting;
        case "ai:AiOutlineRadiusUpleft":
            return AiOutlineRadiusUpleft;
        case "ai:AiOutlineRadiusUpright":
            return AiOutlineRadiusUpright;
        case "ai:AiOutlineRead":
            return AiOutlineRead;
        case "ai:AiOutlineReconciliation":
            return AiOutlineReconciliation;
        case "ai:AiOutlineRedEnvelope":
            return AiOutlineRedEnvelope;
        case "ai:AiOutlineReddit":
            return AiOutlineReddit;
        case "ai:AiOutlineRedo":
            return AiOutlineRedo;
        case "ai:AiOutlineReload":
            return AiOutlineReload;
        case "ai:AiOutlineRest":
            return AiOutlineRest;
        case "ai:AiOutlineRetweet":
            return AiOutlineRetweet;
        case "ai:AiOutlineRightCircle":
            return AiOutlineRightCircle;
        case "ai:AiOutlineRightSquare":
            return AiOutlineRightSquare;
        case "ai:AiOutlineRight":
            return AiOutlineRight;
        case "ai:AiOutlineRise":
            return AiOutlineRise;
        case "ai:AiOutlineRobot":
            return AiOutlineRobot;
        case "ai:AiOutlineRocket":
            return AiOutlineRocket;
        case "ai:AiOutlineRollback":
            return AiOutlineRollback;
        case "ai:AiOutlineRotateLeft":
            return AiOutlineRotateLeft;
        case "ai:AiOutlineRotateRight":
            return AiOutlineRotateRight;
        case "ai:AiOutlineRuby":
            return AiOutlineRuby;
        case "ai:AiOutlineSafetyCertificate":
            return AiOutlineSafetyCertificate;
        case "ai:AiOutlineSafety":
            return AiOutlineSafety;
        case "ai:AiOutlineSave":
            return AiOutlineSave;
        case "ai:AiOutlineScan":
            return AiOutlineScan;
        case "ai:AiOutlineSchedule":
            return AiOutlineSchedule;
        case "ai:AiOutlineScissor":
            return AiOutlineScissor;
        case "ai:AiOutlineSearch":
            return AiOutlineSearch;
        case "ai:AiOutlineSecurityScan":
            return AiOutlineSecurityScan;
        case "ai:AiOutlineSelect":
            return AiOutlineSelect;
        case "ai:AiOutlineSend":
            return AiOutlineSend;
        case "ai:AiOutlineSetting":
            return AiOutlineSetting;
        case "ai:AiOutlineShake":
            return AiOutlineShake;
        case "ai:AiOutlineShareAlt":
            return AiOutlineShareAlt;
        case "ai:AiOutlineShop":
            return AiOutlineShop;
        case "ai:AiOutlineShoppingCart":
            return AiOutlineShoppingCart;
        case "ai:AiOutlineShopping":
            return AiOutlineShopping;
        case "ai:AiOutlineShrink":
            return AiOutlineShrink;
        case "ai:AiOutlineSignature":
            return AiOutlineSignature;
        case "ai:AiOutlineSisternode":
            return AiOutlineSisternode;
        case "ai:AiOutlineSketch":
            return AiOutlineSketch;
        case "ai:AiOutlineSkin":
            return AiOutlineSkin;
        case "ai:AiOutlineSkype":
            return AiOutlineSkype;
        case "ai:AiOutlineSlackSquare":
            return AiOutlineSlackSquare;
        case "ai:AiOutlineSlack":
            return AiOutlineSlack;
        case "ai:AiOutlineSliders":
            return AiOutlineSliders;
        case "ai:AiOutlineSmallDash":
            return AiOutlineSmallDash;
        case "ai:AiOutlineSmile":
            return AiOutlineSmile;
        case "ai:AiOutlineSnippets":
            return AiOutlineSnippets;
        case "ai:AiOutlineSolution":
            return AiOutlineSolution;
        case "ai:AiOutlineSortAscending":
            return AiOutlineSortAscending;
        case "ai:AiOutlineSortDescending":
            return AiOutlineSortDescending;
        case "ai:AiOutlineSound":
            return AiOutlineSound;
        case "ai:AiOutlineSplitCells":
            return AiOutlineSplitCells;
        case "ai:AiOutlineSpotify":
            return AiOutlineSpotify;
        case "ai:AiOutlineStar":
            return AiOutlineStar;
        case "ai:AiOutlineStepBackward":
            return AiOutlineStepBackward;
        case "ai:AiOutlineStepForward":
            return AiOutlineStepForward;
        case "ai:AiOutlineStock":
            return AiOutlineStock;
        case "ai:AiOutlineStop":
            return AiOutlineStop;
        case "ai:AiOutlineStrikethrough":
            return AiOutlineStrikethrough;
        case "ai:AiOutlineSubnode":
            return AiOutlineSubnode;
        case "ai:AiOutlineSun":
            return AiOutlineSun;
        case "ai:AiOutlineSwapLeft":
            return AiOutlineSwapLeft;
        case "ai:AiOutlineSwapRight":
            return AiOutlineSwapRight;
        case "ai:AiOutlineSwap":
            return AiOutlineSwap;
        case "ai:AiOutlineSwitcher":
            return AiOutlineSwitcher;
        case "ai:AiOutlineSync":
            return AiOutlineSync;
        case "ai:AiOutlineTable":
            return AiOutlineTable;
        case "ai:AiOutlineTablet":
            return AiOutlineTablet;
        case "ai:AiOutlineTag":
            return AiOutlineTag;
        case "ai:AiOutlineTags":
            return AiOutlineTags;
        case "ai:AiOutlineTaobaoCircle":
            return AiOutlineTaobaoCircle;
        case "ai:AiOutlineTaobao":
            return AiOutlineTaobao;
        case "ai:AiOutlineTeam":
            return AiOutlineTeam;
        case "ai:AiOutlineThunderbolt":
            return AiOutlineThunderbolt;
        case "ai:AiOutlineTikTok":
            return AiOutlineTikTok;
        case "ai:AiOutlineToTop":
            return AiOutlineToTop;
        case "ai:AiOutlineTool":
            return AiOutlineTool;
        case "ai:AiOutlineTrademarkCircle":
            return AiOutlineTrademarkCircle;
        case "ai:AiOutlineTrademark":
            return AiOutlineTrademark;
        case "ai:AiOutlineTransaction":
            return AiOutlineTransaction;
        case "ai:AiOutlineTranslation":
            return AiOutlineTranslation;
        case "ai:AiOutlineTrophy":
            return AiOutlineTrophy;
        case "ai:AiOutlineTruck":
            return AiOutlineTruck;
        case "ai:AiOutlineTwitch":
            return AiOutlineTwitch;
        case "ai:AiOutlineTwitter":
            return AiOutlineTwitter;
        case "ai:AiOutlineUnderline":
            return AiOutlineUnderline;
        case "ai:AiOutlineUndo":
            return AiOutlineUndo;
        case "ai:AiOutlineUngroup":
            return AiOutlineUngroup;
        case "ai:AiOutlineUnlock":
            return AiOutlineUnlock;
        case "ai:AiOutlineUnorderedList":
            return AiOutlineUnorderedList;
        case "ai:AiOutlineUpCircle":
            return AiOutlineUpCircle;
        case "ai:AiOutlineUpSquare":
            return AiOutlineUpSquare;
        case "ai:AiOutlineUp":
            return AiOutlineUp;
        case "ai:AiOutlineUpload":
            return AiOutlineUpload;
        case "ai:AiOutlineUsb":
            return AiOutlineUsb;
        case "ai:AiOutlineUserAdd":
            return AiOutlineUserAdd;
        case "ai:AiOutlineUserDelete":
            return AiOutlineUserDelete;
        case "ai:AiOutlineUserSwitch":
            return AiOutlineUserSwitch;
        case "ai:AiOutlineUser":
            return AiOutlineUser;
        case "ai:AiOutlineUsergroupAdd":
            return AiOutlineUsergroupAdd;
        case "ai:AiOutlineUsergroupDelete":
            return AiOutlineUsergroupDelete;
        case "ai:AiOutlineVerified":
            return AiOutlineVerified;
        case "ai:AiOutlineVerticalAlignBottom":
            return AiOutlineVerticalAlignBottom;
        case "ai:AiOutlineVerticalAlignMiddle":
            return AiOutlineVerticalAlignMiddle;
        case "ai:AiOutlineVerticalAlignTop":
            return AiOutlineVerticalAlignTop;
        case "ai:AiOutlineVerticalLeft":
            return AiOutlineVerticalLeft;
        case "ai:AiOutlineVerticalRight":
            return AiOutlineVerticalRight;
        case "ai:AiOutlineVideoCameraAdd":
            return AiOutlineVideoCameraAdd;
        case "ai:AiOutlineVideoCamera":
            return AiOutlineVideoCamera;
        case "ai:AiOutlineWallet":
            return AiOutlineWallet;
        case "ai:AiOutlineWarning":
            return AiOutlineWarning;
        case "ai:AiOutlineWechatWork":
            return AiOutlineWechatWork;
        case "ai:AiOutlineWechat":
            return AiOutlineWechat;
        case "ai:AiOutlineWeiboCircle":
            return AiOutlineWeiboCircle;
        case "ai:AiOutlineWeiboSquare":
            return AiOutlineWeiboSquare;
        case "ai:AiOutlineWeibo":
            return AiOutlineWeibo;
        case "ai:AiOutlineWhatsApp":
            return AiOutlineWhatsApp;
        case "ai:AiOutlineWifi":
            return AiOutlineWifi;
        case "ai:AiOutlineWindows":
            return AiOutlineWindows;
        case "ai:AiOutlineWoman":
            return AiOutlineWoman;
        case "ai:AiOutlineX":
            return AiOutlineX;
        case "ai:AiOutlineYahoo":
            return AiOutlineYahoo;
        case "ai:AiOutlineYoutube":
            return AiOutlineYoutube;
        case "ai:AiOutlineYuque":
            return AiOutlineYuque;
        case "ai:AiOutlineZhihu":
            return AiOutlineZhihu;
        case "ai:AiOutlineZoomIn":
            return AiOutlineZoomIn;
        case "ai:AiOutlineZoomOut":
            return AiOutlineZoomOut;
        case "ai:AiTwotoneAccountBook":
            return AiTwotoneAccountBook;
        case "ai:AiTwotoneAlert":
            return AiTwotoneAlert;
        case "ai:AiTwotoneApi":
            return AiTwotoneApi;
        case "ai:AiTwotoneAppstore":
            return AiTwotoneAppstore;
        case "ai:AiTwotoneAudio":
            return AiTwotoneAudio;
        case "ai:AiTwotoneBank":
            return AiTwotoneBank;
        case "ai:AiTwotoneBell":
            return AiTwotoneBell;
        case "ai:AiTwotoneBook":
            return AiTwotoneBook;
        case "ai:AiTwotoneBoxPlot":
            return AiTwotoneBoxPlot;
        case "ai:AiTwotoneBug":
            return AiTwotoneBug;
        case "ai:AiTwotoneBuild":
            return AiTwotoneBuild;
        case "ai:AiTwotoneBulb":
            return AiTwotoneBulb;
        case "ai:AiTwotoneCalculator":
            return AiTwotoneCalculator;
        case "ai:AiTwotoneCalendar":
            return AiTwotoneCalendar;
        case "ai:AiTwotoneCamera":
            return AiTwotoneCamera;
        case "ai:AiTwotoneCar":
            return AiTwotoneCar;
        case "ai:AiTwotoneCarryOut":
            return AiTwotoneCarryOut;
        case "ai:AiTwotoneCheckCircle":
            return AiTwotoneCheckCircle;
        case "ai:AiTwotoneCheckSquare":
            return AiTwotoneCheckSquare;
        case "ai:AiTwotoneCiCircle":
            return AiTwotoneCiCircle;
        case "ai:AiTwotoneCi":
            return AiTwotoneCi;
        case "ai:AiTwotoneClockCircle":
            return AiTwotoneClockCircle;
        case "ai:AiTwotoneCloseCircle":
            return AiTwotoneCloseCircle;
        case "ai:AiTwotoneCloseSquare":
            return AiTwotoneCloseSquare;
        case "ai:AiTwotoneCloud":
            return AiTwotoneCloud;
        case "ai:AiTwotoneCode":
            return AiTwotoneCode;
        case "ai:AiTwotoneCompass":
            return AiTwotoneCompass;
        case "ai:AiTwotoneContacts":
            return AiTwotoneContacts;
        case "ai:AiTwotoneContainer":
            return AiTwotoneContainer;
        case "ai:AiTwotoneControl":
            return AiTwotoneControl;
        case "ai:AiTwotoneCopy":
            return AiTwotoneCopy;
        case "ai:AiTwotoneCopyrightCircle":
            return AiTwotoneCopyrightCircle;
        case "ai:AiTwotoneCopyright":
            return AiTwotoneCopyright;
        case "ai:AiTwotoneCreditCard":
            return AiTwotoneCreditCard;
        case "ai:AiTwotoneCrown":
            return AiTwotoneCrown;
        case "ai:AiTwotoneCustomerService":
            return AiTwotoneCustomerService;
        case "ai:AiTwotoneDashboard":
            return AiTwotoneDashboard;
        case "ai:AiTwotoneDatabase":
            return AiTwotoneDatabase;
        case "ai:AiTwotoneDelete":
            return AiTwotoneDelete;
        case "ai:AiTwotoneDiff":
            return AiTwotoneDiff;
        case "ai:AiTwotoneDislike":
            return AiTwotoneDislike;
        case "ai:AiTwotoneDollarCircle":
            return AiTwotoneDollarCircle;
        case "ai:AiTwotoneDollar":
            return AiTwotoneDollar;
        case "ai:AiTwotoneDownCircle":
            return AiTwotoneDownCircle;
        case "ai:AiTwotoneDownSquare":
            return AiTwotoneDownSquare;
        case "ai:AiTwotoneEdit":
            return AiTwotoneEdit;
        case "ai:AiTwotoneEnvironment":
            return AiTwotoneEnvironment;
        case "ai:AiTwotoneEuroCircle":
            return AiTwotoneEuroCircle;
        case "ai:AiTwotoneEuro":
            return AiTwotoneEuro;
        case "ai:AiTwotoneExclamationCircle":
            return AiTwotoneExclamationCircle;
        case "ai:AiTwotoneExperiment":
            return AiTwotoneExperiment;
        case "ai:AiTwotoneEyeInvisible":
            return AiTwotoneEyeInvisible;
        case "ai:AiTwotoneEye":
            return AiTwotoneEye;
        case "ai:AiTwotoneFileAdd":
            return AiTwotoneFileAdd;
        case "ai:AiTwotoneFileExcel":
            return AiTwotoneFileExcel;
        case "ai:AiTwotoneFileExclamation":
            return AiTwotoneFileExclamation;
        case "ai:AiTwotoneFileImage":
            return AiTwotoneFileImage;
        case "ai:AiTwotoneFileMarkdown":
            return AiTwotoneFileMarkdown;
        case "ai:AiTwotoneFilePdf":
            return AiTwotoneFilePdf;
        case "ai:AiTwotoneFilePpt":
            return AiTwotoneFilePpt;
        case "ai:AiTwotoneFileText":
            return AiTwotoneFileText;
        case "ai:AiTwotoneFileUnknown":
            return AiTwotoneFileUnknown;
        case "ai:AiTwotoneFileWord":
            return AiTwotoneFileWord;
        case "ai:AiTwotoneFileZip":
            return AiTwotoneFileZip;
        case "ai:AiTwotoneFile":
            return AiTwotoneFile;
        case "ai:AiTwotoneFilter":
            return AiTwotoneFilter;
        case "ai:AiTwotoneFire":
            return AiTwotoneFire;
        case "ai:AiTwotoneFlag":
            return AiTwotoneFlag;
        case "ai:AiTwotoneFolderAdd":
            return AiTwotoneFolderAdd;
        case "ai:AiTwotoneFolderOpen":
            return AiTwotoneFolderOpen;
        case "ai:AiTwotoneFolder":
            return AiTwotoneFolder;
        case "ai:AiTwotoneFrown":
            return AiTwotoneFrown;
        case "ai:AiTwotoneFund":
            return AiTwotoneFund;
        case "ai:AiTwotoneFunnelPlot":
            return AiTwotoneFunnelPlot;
        case "ai:AiTwotoneGift":
            return AiTwotoneGift;
        case "ai:AiTwotoneGold":
            return AiTwotoneGold;
        case "ai:AiTwotoneHdd":
            return AiTwotoneHdd;
        case "ai:AiTwotoneHeart":
            return AiTwotoneHeart;
        case "ai:AiTwotoneHighlight":
            return AiTwotoneHighlight;
        case "ai:AiTwotoneHome":
            return AiTwotoneHome;
        case "ai:AiTwotoneHourglass":
            return AiTwotoneHourglass;
        case "ai:AiTwotoneHtml5":
            return AiTwotoneHtml5;
        case "ai:AiTwotoneIdcard":
            return AiTwotoneIdcard;
        case "ai:AiTwotoneInfoCircle":
            return AiTwotoneInfoCircle;
        case "ai:AiTwotoneInsurance":
            return AiTwotoneInsurance;
        case "ai:AiTwotoneInteraction":
            return AiTwotoneInteraction;
        case "ai:AiTwotoneLayout":
            return AiTwotoneLayout;
        case "ai:AiTwotoneLeftCircle":
            return AiTwotoneLeftCircle;
        case "ai:AiTwotoneLeftSquare":
            return AiTwotoneLeftSquare;
        case "ai:AiTwotoneLike":
            return AiTwotoneLike;
        case "ai:AiTwotoneLock":
            return AiTwotoneLock;
        case "ai:AiTwotoneMail":
            return AiTwotoneMail;
        case "ai:AiTwotoneMedicineBox":
            return AiTwotoneMedicineBox;
        case "ai:AiTwotoneMeh":
            return AiTwotoneMeh;
        case "ai:AiTwotoneMessage":
            return AiTwotoneMessage;
        case "ai:AiTwotoneMinusCircle":
            return AiTwotoneMinusCircle;
        case "ai:AiTwotoneMinusSquare":
            return AiTwotoneMinusSquare;
        case "ai:AiTwotoneMobile":
            return AiTwotoneMobile;
        case "ai:AiTwotoneMoneyCollect":
            return AiTwotoneMoneyCollect;
        case "ai:AiTwotoneNotification":
            return AiTwotoneNotification;
        case "ai:AiTwotonePauseCircle":
            return AiTwotonePauseCircle;
        case "ai:AiTwotonePhone":
            return AiTwotonePhone;
        case "ai:AiTwotonePicture":
            return AiTwotonePicture;
        case "ai:AiTwotonePieChart":
            return AiTwotonePieChart;
        case "ai:AiTwotonePlayCircle":
            return AiTwotonePlayCircle;
        case "ai:AiTwotonePlaySquare":
            return AiTwotonePlaySquare;
        case "ai:AiTwotonePlusCircle":
            return AiTwotonePlusCircle;
        case "ai:AiTwotonePlusSquare":
            return AiTwotonePlusSquare;
        case "ai:AiTwotonePoundCircle":
            return AiTwotonePoundCircle;
        case "ai:AiTwotonePrinter":
            return AiTwotonePrinter;
        case "ai:AiTwotoneProfile":
            return AiTwotoneProfile;
        case "ai:AiTwotoneProject":
            return AiTwotoneProject;
        case "ai:AiTwotonePropertySafety":
            return AiTwotonePropertySafety;
        case "ai:AiTwotonePushpin":
            return AiTwotonePushpin;
        case "ai:AiTwotoneQuestionCircle":
            return AiTwotoneQuestionCircle;
        case "ai:AiTwotoneReconciliation":
            return AiTwotoneReconciliation;
        case "ai:AiTwotoneRedEnvelope":
            return AiTwotoneRedEnvelope;
        case "ai:AiTwotoneRest":
            return AiTwotoneRest;
        case "ai:AiTwotoneRightCircle":
            return AiTwotoneRightCircle;
        case "ai:AiTwotoneRightSquare":
            return AiTwotoneRightSquare;
        case "ai:AiTwotoneRocket":
            return AiTwotoneRocket;
        case "ai:AiTwotoneSafetyCertificate":
            return AiTwotoneSafetyCertificate;
        case "ai:AiTwotoneSave":
            return AiTwotoneSave;
        case "ai:AiTwotoneSchedule":
            return AiTwotoneSchedule;
        case "ai:AiTwotoneSecurityScan":
            return AiTwotoneSecurityScan;
        case "ai:AiTwotoneSetting":
            return AiTwotoneSetting;
        case "ai:AiTwotoneShop":
            return AiTwotoneShop;
        case "ai:AiTwotoneShopping":
            return AiTwotoneShopping;
        case "ai:AiTwotoneSkin":
            return AiTwotoneSkin;
        case "ai:AiTwotoneSliders":
            return AiTwotoneSliders;
        case "ai:AiTwotoneSmile":
            return AiTwotoneSmile;
        case "ai:AiTwotoneSnippets":
            return AiTwotoneSnippets;
        case "ai:AiTwotoneSound":
            return AiTwotoneSound;
        case "ai:AiTwotoneStar":
            return AiTwotoneStar;
        case "ai:AiTwotoneStop":
            return AiTwotoneStop;
        case "ai:AiTwotoneSwitcher":
            return AiTwotoneSwitcher;
        case "ai:AiTwotoneTablet":
            return AiTwotoneTablet;
        case "ai:AiTwotoneTag":
            return AiTwotoneTag;
        case "ai:AiTwotoneTags":
            return AiTwotoneTags;
        case "ai:AiTwotoneThunderbolt":
            return AiTwotoneThunderbolt;
        case "ai:AiTwotoneTool":
            return AiTwotoneTool;
        case "ai:AiTwotoneTrademarkCircle":
            return AiTwotoneTrademarkCircle;
        case "ai:AiTwotoneTrophy":
            return AiTwotoneTrophy;
        case "ai:AiTwotoneUnlock":
            return AiTwotoneUnlock;
        case "ai:AiTwotoneUpCircle":
            return AiTwotoneUpCircle;
        case "ai:AiTwotoneUpSquare":
            return AiTwotoneUpSquare;
        case "ai:AiTwotoneUsb":
            return AiTwotoneUsb;
        case "ai:AiTwotoneVideoCamera":
            return AiTwotoneVideoCamera;
        case "ai:AiTwotoneWallet":
            return AiTwotoneWallet;
        case "ai:AiTwotoneWarning":
            return AiTwotoneWarning;
    }
}
