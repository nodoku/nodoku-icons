import type {IconType} from "react-icons";

import {
    VscAccount,
    VscActivateBreakpoints,
    VscAdd,
    VscArchive,
    VscArrowBoth,
    VscArrowCircleDown,
    VscArrowCircleLeft,
    VscArrowCircleRight,
    VscArrowCircleUp,
    VscArrowDown,
    VscArrowLeft,
    VscArrowRight,
    VscArrowSmallDown,
    VscArrowSmallLeft,
    VscArrowSmallRight,
    VscArrowSmallUp,
    VscArrowSwap,
    VscArrowUp,
    VscAttach,
    VscAzureDevops,
    VscAzure,
    VscBeakerStop,
    VscBeaker,
    VscBellDot,
    VscBellSlashDot,
    VscBellSlash,
    VscBell,
    VscBlank,
    VscBold,
    VscBook,
    VscBookmark,
    VscBracketDot,
    VscBracketError,
    VscBriefcase,
    VscBroadcast,
    VscBrowser,
    VscBug,
    VscCalendar,
    VscCallIncoming,
    VscCallOutgoing,
    VscCaseSensitive,
    VscCheckAll,
    VscCheck,
    VscChecklist,
    VscChevronDown,
    VscChevronLeft,
    VscChevronRight,
    VscChevronUp,
    VscChip,
    VscChromeClose,
    VscChromeMaximize,
    VscChromeMinimize,
    VscChromeRestore,
    VscCircleFilled,
    VscCircleLargeFilled,
    VscCircleLarge,
    VscCircleSlash,
    VscCircleSmallFilled,
    VscCircleSmall,
    VscCircle,
    VscCircuitBoard,
    VscClearAll,
    VscClippy,
    VscCloseAll,
    VscClose,
    VscCloudDownload,
    VscCloudUpload,
    VscCloud,
    VscCodeOss,
    VscCodeReview,
    VscCode,
    VscCoffee,
    VscCollapseAll,
    VscColorMode,
    VscCombine,
    VscCommentDiscussion,
    VscCommentDraft,
    VscCommentUnresolved,
    VscComment,
    VscCompassActive,
    VscCompassDot,
    VscCompass,
    VscCopilotWarning,
    VscCopilot,
    VscCopy,
    VscCoverage,
    VscCreditCard,
    VscDash,
    VscDashboard,
    VscDatabase,
    VscDebugAll,
    VscDebugAltSmall,
    VscDebugAlt,
    VscDebugBreakpointConditionalUnverified,
    VscDebugBreakpointConditional,
    VscDebugBreakpointDataUnverified,
    VscDebugBreakpointData,
    VscDebugBreakpointFunctionUnverified,
    VscDebugBreakpointFunction,
    VscDebugBreakpointLogUnverified,
    VscDebugBreakpointLog,
    VscDebugBreakpointUnsupported,
    VscDebugConsole,
    VscDebugContinueSmall,
    VscDebugContinue,
    VscDebugCoverage,
    VscDebugDisconnect,
    VscDebugLineByLine,
    VscDebugPause,
    VscDebugRerun,
    VscDebugRestartFrame,
    VscDebugRestart,
    VscDebugReverseContinue,
    VscDebugStackframeActive,
    VscDebugStackframe,
    VscDebugStart,
    VscDebugStepBack,
    VscDebugStepInto,
    VscDebugStepOut,
    VscDebugStepOver,
    VscDebugStop,
    VscDebug,
    VscDesktopDownload,
    VscDeviceCameraVideo,
    VscDeviceCamera,
    VscDeviceMobile,
    VscDiffAdded,
    VscDiffIgnored,
    VscDiffModified,
    VscDiffMultiple,
    VscDiffRemoved,
    VscDiffRenamed,
    VscDiffSingle,
    VscDiff,
    VscDiscard,
    VscEditSession,
    VscEdit,
    VscEditorLayout,
    VscEllipsis,
    VscEmptyWindow,
    VscErrorSmall,
    VscError,
    VscExclude,
    VscExpandAll,
    VscExport,
    VscExtensions,
    VscEyeClosed,
    VscEye,
    VscFeedback,
    VscFileBinary,
    VscFileCode,
    VscFileMedia,
    VscFilePdf,
    VscFileSubmodule,
    VscFileSymlinkDirectory,
    VscFileSymlinkFile,
    VscFileZip,
    VscFile,
    VscFiles,
    VscFilterFilled,
    VscFilter,
    VscFlame,
    VscFoldDown,
    VscFoldUp,
    VscFold,
    VscFolderActive,
    VscFolderLibrary,
    VscFolderOpened,
    VscFolder,
    VscGame,
    VscGear,
    VscGift,
    VscGistSecret,
    VscGist,
    VscGitCommit,
    VscGitCompare,
    VscGitFetch,
    VscGitMerge,
    VscGitPullRequestClosed,
    VscGitPullRequestCreate,
    VscGitPullRequestDraft,
    VscGitPullRequestGoToChanges,
    VscGitPullRequestNewChanges,
    VscGitPullRequest,
    VscGitStashApply,
    VscGitStashPop,
    VscGitStash,
    VscGithubAction,
    VscGithubAlt,
    VscGithubInverted,
    VscGithubProject,
    VscGithub,
    VscGlobe,
    VscGoToEditingSession,
    VscGoToFile,
    VscGoToSearch,
    VscGrabber,
    VscGraphLeft,
    VscGraphLine,
    VscGraphScatter,
    VscGraph,
    VscGripper,
    VscGroupByRefType,
    VscHeartFilled,
    VscHeart,
    VscHistory,
    VscHome,
    VscHorizontalRule,
    VscHubot,
    VscInbox,
    VscIndent,
    VscInfo,
    VscInsert,
    VscInspect,
    VscIssueDraft,
    VscIssueReopened,
    VscIssues,
    VscItalic,
    VscJersey,
    VscJson,
    VscKebabVertical,
    VscKey,
    VscLaw,
    VscLayersActive,
    VscLayersDot,
    VscLayers,
    VscLayoutActivitybarLeft,
    VscLayoutActivitybarRight,
    VscLayoutCentered,
    VscLayoutMenubar,
    VscLayoutPanelCenter,
    VscLayoutPanelJustify,
    VscLayoutPanelLeft,
    VscLayoutPanelOff,
    VscLayoutPanelRight,
    VscLayoutPanel,
    VscLayoutSidebarLeftOff,
    VscLayoutSidebarLeft,
    VscLayoutSidebarRightOff,
    VscLayoutSidebarRight,
    VscLayoutStatusbar,
    VscLayout,
    VscLibrary,
    VscLightbulbAutofix,
    VscLightbulbSparkle,
    VscLightbulb,
    VscLinkExternal,
    VscLink,
    VscListFilter,
    VscListFlat,
    VscListOrdered,
    VscListSelection,
    VscListTree,
    VscListUnordered,
    VscLiveShare,
    VscLoading,
    VscLocation,
    VscLockSmall,
    VscLock,
    VscMagnet,
    VscMailRead,
    VscMail,
    VscMapFilled,
    VscMapVerticalFilled,
    VscMapVertical,
    VscMap,
    VscMarkdown,
    VscMegaphone,
    VscMention,
    VscMenu,
    VscMerge,
    VscMicFilled,
    VscMic,
    VscMilestone,
    VscMirror,
    VscMortarBoard,
    VscMove,
    VscMultipleWindows,
    VscMusic,
    VscMute,
    VscNewFile,
    VscNewFolder,
    VscNewline,
    VscNoNewline,
    VscNote,
    VscNotebookTemplate,
    VscNotebook,
    VscOctoface,
    VscOpenPreview,
    VscOrganization,
    VscOutput,
    VscPackage,
    VscPaintcan,
    VscPassFilled,
    VscPass,
    VscPercentage,
    VscPersonAdd,
    VscPerson,
    VscPiano,
    VscPieChart,
    VscPin,
    VscPinnedDirty,
    VscPinned,
    VscPlayCircle,
    VscPlay,
    VscPlug,
    VscPreserveCase,
    VscPreview,
    VscPrimitiveSquare,
    VscProject,
    VscPulse,
    VscQuestion,
    VscQuote,
    VscRadioTower,
    VscReactions,
    VscRecordKeys,
    VscRecordSmall,
    VscRecord,
    VscRedo,
    VscReferences,
    VscRefresh,
    VscRegex,
    VscRemoteExplorer,
    VscRemote,
    VscRemove,
    VscReplaceAll,
    VscReplace,
    VscReply,
    VscRepoClone,
    VscRepoFetch,
    VscRepoForcePush,
    VscRepoForked,
    VscRepoPull,
    VscRepoPush,
    VscRepo,
    VscReport,
    VscRequestChanges,
    VscRobot,
    VscRocket,
    VscRootFolderOpened,
    VscRootFolder,
    VscRss,
    VscRuby,
    VscRunAbove,
    VscRunAllCoverage,
    VscRunAll,
    VscRunBelow,
    VscRunCoverage,
    VscRunErrors,
    VscSaveAll,
    VscSaveAs,
    VscSave,
    VscScreenFull,
    VscScreenNormal,
    VscSearchFuzzy,
    VscSearchStop,
    VscSearch,
    VscSend,
    VscServerEnvironment,
    VscServerProcess,
    VscServer,
    VscSettingsGear,
    VscSettings,
    VscShare,
    VscShield,
    VscSignIn,
    VscSignOut,
    VscSmiley,
    VscSnake,
    VscSortPrecedence,
    VscSourceControl,
    VscSparkleFilled,
    VscSparkle,
    VscSplitHorizontal,
    VscSplitVertical,
    VscSquirrel,
    VscStarEmpty,
    VscStarFull,
    VscStarHalf,
    VscStopCircle,
    VscSurroundWith,
    VscSymbolArray,
    VscSymbolBoolean,
    VscSymbolClass,
    VscSymbolColor,
    VscSymbolConstant,
    VscSymbolEnumMember,
    VscSymbolEnum,
    VscSymbolEvent,
    VscSymbolField,
    VscSymbolFile,
    VscSymbolInterface,
    VscSymbolKey,
    VscSymbolKeyword,
    VscSymbolMethod,
    VscSymbolMisc,
    VscSymbolNamespace,
    VscSymbolNumeric,
    VscSymbolOperator,
    VscSymbolParameter,
    VscSymbolProperty,
    VscSymbolRuler,
    VscSymbolSnippet,
    VscSymbolString,
    VscSymbolStructure,
    VscSymbolVariable,
    VscSyncIgnored,
    VscSync,
    VscTable,
    VscTag,
    VscTarget,
    VscTasklist,
    VscTelescope,
    VscTerminalBash,
    VscTerminalCmd,
    VscTerminalDebian,
    VscTerminalLinux,
    VscTerminalPowershell,
    VscTerminalTmux,
    VscTerminalUbuntu,
    VscTerminal,
    VscTextSize,
    VscThreeBars,
    VscThumbsdownFilled,
    VscThumbsdown,
    VscThumbsupFilled,
    VscThumbsup,
    VscTools,
    VscTrash,
    VscTriangleDown,
    VscTriangleLeft,
    VscTriangleRight,
    VscTriangleUp,
    VscTwitter,
    VscTypeHierarchySub,
    VscTypeHierarchySuper,
    VscTypeHierarchy,
    VscUnfold,
    VscUngroupByRefType,
    VscUnlock,
    VscUnmute,
    VscUnverified,
    VscVariableGroup,
    VscVerifiedFilled,
    VscVerified,
    VscVersions,
    VscVmActive,
    VscVmConnect,
    VscVmOutline,
    VscVmRunning,
    VscVm,
    VscVr,
    VscVscodeInsiders,
    VscVscode,
    VscWand,
    VscWarning,
    VscWatch,
    VscWhitespace,
    VscWholeWord,
    VscWindow,
    VscWordWrap,
    VscWorkspaceTrusted,
    VscWorkspaceUnknown,
    VscWorkspaceUntrusted,
    VscZoomIn,
    VscZoomOut,
} from "react-icons/vsc"

export function nameToReactIcon_vsc_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "vsc:VscAccount":
            return VscAccount;
        case "vsc:VscActivateBreakpoints":
            return VscActivateBreakpoints;
        case "vsc:VscAdd":
            return VscAdd;
        case "vsc:VscArchive":
            return VscArchive;
        case "vsc:VscArrowBoth":
            return VscArrowBoth;
        case "vsc:VscArrowCircleDown":
            return VscArrowCircleDown;
        case "vsc:VscArrowCircleLeft":
            return VscArrowCircleLeft;
        case "vsc:VscArrowCircleRight":
            return VscArrowCircleRight;
        case "vsc:VscArrowCircleUp":
            return VscArrowCircleUp;
        case "vsc:VscArrowDown":
            return VscArrowDown;
        case "vsc:VscArrowLeft":
            return VscArrowLeft;
        case "vsc:VscArrowRight":
            return VscArrowRight;
        case "vsc:VscArrowSmallDown":
            return VscArrowSmallDown;
        case "vsc:VscArrowSmallLeft":
            return VscArrowSmallLeft;
        case "vsc:VscArrowSmallRight":
            return VscArrowSmallRight;
        case "vsc:VscArrowSmallUp":
            return VscArrowSmallUp;
        case "vsc:VscArrowSwap":
            return VscArrowSwap;
        case "vsc:VscArrowUp":
            return VscArrowUp;
        case "vsc:VscAttach":
            return VscAttach;
        case "vsc:VscAzureDevops":
            return VscAzureDevops;
        case "vsc:VscAzure":
            return VscAzure;
        case "vsc:VscBeakerStop":
            return VscBeakerStop;
        case "vsc:VscBeaker":
            return VscBeaker;
        case "vsc:VscBellDot":
            return VscBellDot;
        case "vsc:VscBellSlashDot":
            return VscBellSlashDot;
        case "vsc:VscBellSlash":
            return VscBellSlash;
        case "vsc:VscBell":
            return VscBell;
        case "vsc:VscBlank":
            return VscBlank;
        case "vsc:VscBold":
            return VscBold;
        case "vsc:VscBook":
            return VscBook;
        case "vsc:VscBookmark":
            return VscBookmark;
        case "vsc:VscBracketDot":
            return VscBracketDot;
        case "vsc:VscBracketError":
            return VscBracketError;
        case "vsc:VscBriefcase":
            return VscBriefcase;
        case "vsc:VscBroadcast":
            return VscBroadcast;
        case "vsc:VscBrowser":
            return VscBrowser;
        case "vsc:VscBug":
            return VscBug;
        case "vsc:VscCalendar":
            return VscCalendar;
        case "vsc:VscCallIncoming":
            return VscCallIncoming;
        case "vsc:VscCallOutgoing":
            return VscCallOutgoing;
        case "vsc:VscCaseSensitive":
            return VscCaseSensitive;
        case "vsc:VscCheckAll":
            return VscCheckAll;
        case "vsc:VscCheck":
            return VscCheck;
        case "vsc:VscChecklist":
            return VscChecklist;
        case "vsc:VscChevronDown":
            return VscChevronDown;
        case "vsc:VscChevronLeft":
            return VscChevronLeft;
        case "vsc:VscChevronRight":
            return VscChevronRight;
        case "vsc:VscChevronUp":
            return VscChevronUp;
        case "vsc:VscChip":
            return VscChip;
        case "vsc:VscChromeClose":
            return VscChromeClose;
        case "vsc:VscChromeMaximize":
            return VscChromeMaximize;
        case "vsc:VscChromeMinimize":
            return VscChromeMinimize;
        case "vsc:VscChromeRestore":
            return VscChromeRestore;
        case "vsc:VscCircleFilled":
            return VscCircleFilled;
        case "vsc:VscCircleLargeFilled":
            return VscCircleLargeFilled;
        case "vsc:VscCircleLarge":
            return VscCircleLarge;
        case "vsc:VscCircleSlash":
            return VscCircleSlash;
        case "vsc:VscCircleSmallFilled":
            return VscCircleSmallFilled;
        case "vsc:VscCircleSmall":
            return VscCircleSmall;
        case "vsc:VscCircle":
            return VscCircle;
        case "vsc:VscCircuitBoard":
            return VscCircuitBoard;
        case "vsc:VscClearAll":
            return VscClearAll;
        case "vsc:VscClippy":
            return VscClippy;
        case "vsc:VscCloseAll":
            return VscCloseAll;
        case "vsc:VscClose":
            return VscClose;
        case "vsc:VscCloudDownload":
            return VscCloudDownload;
        case "vsc:VscCloudUpload":
            return VscCloudUpload;
        case "vsc:VscCloud":
            return VscCloud;
        case "vsc:VscCodeOss":
            return VscCodeOss;
        case "vsc:VscCodeReview":
            return VscCodeReview;
        case "vsc:VscCode":
            return VscCode;
        case "vsc:VscCoffee":
            return VscCoffee;
        case "vsc:VscCollapseAll":
            return VscCollapseAll;
        case "vsc:VscColorMode":
            return VscColorMode;
        case "vsc:VscCombine":
            return VscCombine;
        case "vsc:VscCommentDiscussion":
            return VscCommentDiscussion;
        case "vsc:VscCommentDraft":
            return VscCommentDraft;
        case "vsc:VscCommentUnresolved":
            return VscCommentUnresolved;
        case "vsc:VscComment":
            return VscComment;
        case "vsc:VscCompassActive":
            return VscCompassActive;
        case "vsc:VscCompassDot":
            return VscCompassDot;
        case "vsc:VscCompass":
            return VscCompass;
        case "vsc:VscCopilotWarning":
            return VscCopilotWarning;
        case "vsc:VscCopilot":
            return VscCopilot;
        case "vsc:VscCopy":
            return VscCopy;
        case "vsc:VscCoverage":
            return VscCoverage;
        case "vsc:VscCreditCard":
            return VscCreditCard;
        case "vsc:VscDash":
            return VscDash;
        case "vsc:VscDashboard":
            return VscDashboard;
        case "vsc:VscDatabase":
            return VscDatabase;
        case "vsc:VscDebugAll":
            return VscDebugAll;
        case "vsc:VscDebugAltSmall":
            return VscDebugAltSmall;
        case "vsc:VscDebugAlt":
            return VscDebugAlt;
        case "vsc:VscDebugBreakpointConditionalUnverified":
            return VscDebugBreakpointConditionalUnverified;
        case "vsc:VscDebugBreakpointConditional":
            return VscDebugBreakpointConditional;
        case "vsc:VscDebugBreakpointDataUnverified":
            return VscDebugBreakpointDataUnverified;
        case "vsc:VscDebugBreakpointData":
            return VscDebugBreakpointData;
        case "vsc:VscDebugBreakpointFunctionUnverified":
            return VscDebugBreakpointFunctionUnverified;
        case "vsc:VscDebugBreakpointFunction":
            return VscDebugBreakpointFunction;
        case "vsc:VscDebugBreakpointLogUnverified":
            return VscDebugBreakpointLogUnverified;
        case "vsc:VscDebugBreakpointLog":
            return VscDebugBreakpointLog;
        case "vsc:VscDebugBreakpointUnsupported":
            return VscDebugBreakpointUnsupported;
        case "vsc:VscDebugConsole":
            return VscDebugConsole;
        case "vsc:VscDebugContinueSmall":
            return VscDebugContinueSmall;
        case "vsc:VscDebugContinue":
            return VscDebugContinue;
        case "vsc:VscDebugCoverage":
            return VscDebugCoverage;
        case "vsc:VscDebugDisconnect":
            return VscDebugDisconnect;
        case "vsc:VscDebugLineByLine":
            return VscDebugLineByLine;
        case "vsc:VscDebugPause":
            return VscDebugPause;
        case "vsc:VscDebugRerun":
            return VscDebugRerun;
        case "vsc:VscDebugRestartFrame":
            return VscDebugRestartFrame;
        case "vsc:VscDebugRestart":
            return VscDebugRestart;
        case "vsc:VscDebugReverseContinue":
            return VscDebugReverseContinue;
        case "vsc:VscDebugStackframeActive":
            return VscDebugStackframeActive;
        case "vsc:VscDebugStackframe":
            return VscDebugStackframe;
        case "vsc:VscDebugStart":
            return VscDebugStart;
        case "vsc:VscDebugStepBack":
            return VscDebugStepBack;
        case "vsc:VscDebugStepInto":
            return VscDebugStepInto;
        case "vsc:VscDebugStepOut":
            return VscDebugStepOut;
        case "vsc:VscDebugStepOver":
            return VscDebugStepOver;
        case "vsc:VscDebugStop":
            return VscDebugStop;
        case "vsc:VscDebug":
            return VscDebug;
        case "vsc:VscDesktopDownload":
            return VscDesktopDownload;
        case "vsc:VscDeviceCameraVideo":
            return VscDeviceCameraVideo;
        case "vsc:VscDeviceCamera":
            return VscDeviceCamera;
        case "vsc:VscDeviceMobile":
            return VscDeviceMobile;
        case "vsc:VscDiffAdded":
            return VscDiffAdded;
        case "vsc:VscDiffIgnored":
            return VscDiffIgnored;
        case "vsc:VscDiffModified":
            return VscDiffModified;
        case "vsc:VscDiffMultiple":
            return VscDiffMultiple;
        case "vsc:VscDiffRemoved":
            return VscDiffRemoved;
        case "vsc:VscDiffRenamed":
            return VscDiffRenamed;
        case "vsc:VscDiffSingle":
            return VscDiffSingle;
        case "vsc:VscDiff":
            return VscDiff;
        case "vsc:VscDiscard":
            return VscDiscard;
        case "vsc:VscEditSession":
            return VscEditSession;
        case "vsc:VscEdit":
            return VscEdit;
        case "vsc:VscEditorLayout":
            return VscEditorLayout;
        case "vsc:VscEllipsis":
            return VscEllipsis;
        case "vsc:VscEmptyWindow":
            return VscEmptyWindow;
        case "vsc:VscErrorSmall":
            return VscErrorSmall;
        case "vsc:VscError":
            return VscError;
        case "vsc:VscExclude":
            return VscExclude;
        case "vsc:VscExpandAll":
            return VscExpandAll;
        case "vsc:VscExport":
            return VscExport;
        case "vsc:VscExtensions":
            return VscExtensions;
        case "vsc:VscEyeClosed":
            return VscEyeClosed;
        case "vsc:VscEye":
            return VscEye;
        case "vsc:VscFeedback":
            return VscFeedback;
        case "vsc:VscFileBinary":
            return VscFileBinary;
        case "vsc:VscFileCode":
            return VscFileCode;
        case "vsc:VscFileMedia":
            return VscFileMedia;
        case "vsc:VscFilePdf":
            return VscFilePdf;
        case "vsc:VscFileSubmodule":
            return VscFileSubmodule;
        case "vsc:VscFileSymlinkDirectory":
            return VscFileSymlinkDirectory;
        case "vsc:VscFileSymlinkFile":
            return VscFileSymlinkFile;
        case "vsc:VscFileZip":
            return VscFileZip;
        case "vsc:VscFile":
            return VscFile;
        case "vsc:VscFiles":
            return VscFiles;
        case "vsc:VscFilterFilled":
            return VscFilterFilled;
        case "vsc:VscFilter":
            return VscFilter;
        case "vsc:VscFlame":
            return VscFlame;
        case "vsc:VscFoldDown":
            return VscFoldDown;
        case "vsc:VscFoldUp":
            return VscFoldUp;
        case "vsc:VscFold":
            return VscFold;
        case "vsc:VscFolderActive":
            return VscFolderActive;
        case "vsc:VscFolderLibrary":
            return VscFolderLibrary;
        case "vsc:VscFolderOpened":
            return VscFolderOpened;
        case "vsc:VscFolder":
            return VscFolder;
        case "vsc:VscGame":
            return VscGame;
        case "vsc:VscGear":
            return VscGear;
        case "vsc:VscGift":
            return VscGift;
        case "vsc:VscGistSecret":
            return VscGistSecret;
        case "vsc:VscGist":
            return VscGist;
        case "vsc:VscGitCommit":
            return VscGitCommit;
        case "vsc:VscGitCompare":
            return VscGitCompare;
        case "vsc:VscGitFetch":
            return VscGitFetch;
        case "vsc:VscGitMerge":
            return VscGitMerge;
        case "vsc:VscGitPullRequestClosed":
            return VscGitPullRequestClosed;
        case "vsc:VscGitPullRequestCreate":
            return VscGitPullRequestCreate;
        case "vsc:VscGitPullRequestDraft":
            return VscGitPullRequestDraft;
        case "vsc:VscGitPullRequestGoToChanges":
            return VscGitPullRequestGoToChanges;
        case "vsc:VscGitPullRequestNewChanges":
            return VscGitPullRequestNewChanges;
        case "vsc:VscGitPullRequest":
            return VscGitPullRequest;
        case "vsc:VscGitStashApply":
            return VscGitStashApply;
        case "vsc:VscGitStashPop":
            return VscGitStashPop;
        case "vsc:VscGitStash":
            return VscGitStash;
        case "vsc:VscGithubAction":
            return VscGithubAction;
        case "vsc:VscGithubAlt":
            return VscGithubAlt;
        case "vsc:VscGithubInverted":
            return VscGithubInverted;
        case "vsc:VscGithubProject":
            return VscGithubProject;
        case "vsc:VscGithub":
            return VscGithub;
        case "vsc:VscGlobe":
            return VscGlobe;
        case "vsc:VscGoToEditingSession":
            return VscGoToEditingSession;
        case "vsc:VscGoToFile":
            return VscGoToFile;
        case "vsc:VscGoToSearch":
            return VscGoToSearch;
        case "vsc:VscGrabber":
            return VscGrabber;
        case "vsc:VscGraphLeft":
            return VscGraphLeft;
        case "vsc:VscGraphLine":
            return VscGraphLine;
        case "vsc:VscGraphScatter":
            return VscGraphScatter;
        case "vsc:VscGraph":
            return VscGraph;
        case "vsc:VscGripper":
            return VscGripper;
        case "vsc:VscGroupByRefType":
            return VscGroupByRefType;
        case "vsc:VscHeartFilled":
            return VscHeartFilled;
        case "vsc:VscHeart":
            return VscHeart;
        case "vsc:VscHistory":
            return VscHistory;
        case "vsc:VscHome":
            return VscHome;
        case "vsc:VscHorizontalRule":
            return VscHorizontalRule;
        case "vsc:VscHubot":
            return VscHubot;
        case "vsc:VscInbox":
            return VscInbox;
        case "vsc:VscIndent":
            return VscIndent;
        case "vsc:VscInfo":
            return VscInfo;
        case "vsc:VscInsert":
            return VscInsert;
        case "vsc:VscInspect":
            return VscInspect;
        case "vsc:VscIssueDraft":
            return VscIssueDraft;
        case "vsc:VscIssueReopened":
            return VscIssueReopened;
        case "vsc:VscIssues":
            return VscIssues;
        case "vsc:VscItalic":
            return VscItalic;
        case "vsc:VscJersey":
            return VscJersey;
        case "vsc:VscJson":
            return VscJson;
        case "vsc:VscKebabVertical":
            return VscKebabVertical;
        case "vsc:VscKey":
            return VscKey;
        case "vsc:VscLaw":
            return VscLaw;
        case "vsc:VscLayersActive":
            return VscLayersActive;
        case "vsc:VscLayersDot":
            return VscLayersDot;
        case "vsc:VscLayers":
            return VscLayers;
        case "vsc:VscLayoutActivitybarLeft":
            return VscLayoutActivitybarLeft;
        case "vsc:VscLayoutActivitybarRight":
            return VscLayoutActivitybarRight;
        case "vsc:VscLayoutCentered":
            return VscLayoutCentered;
        case "vsc:VscLayoutMenubar":
            return VscLayoutMenubar;
        case "vsc:VscLayoutPanelCenter":
            return VscLayoutPanelCenter;
        case "vsc:VscLayoutPanelJustify":
            return VscLayoutPanelJustify;
        case "vsc:VscLayoutPanelLeft":
            return VscLayoutPanelLeft;
        case "vsc:VscLayoutPanelOff":
            return VscLayoutPanelOff;
        case "vsc:VscLayoutPanelRight":
            return VscLayoutPanelRight;
        case "vsc:VscLayoutPanel":
            return VscLayoutPanel;
        case "vsc:VscLayoutSidebarLeftOff":
            return VscLayoutSidebarLeftOff;
        case "vsc:VscLayoutSidebarLeft":
            return VscLayoutSidebarLeft;
        case "vsc:VscLayoutSidebarRightOff":
            return VscLayoutSidebarRightOff;
        case "vsc:VscLayoutSidebarRight":
            return VscLayoutSidebarRight;
        case "vsc:VscLayoutStatusbar":
            return VscLayoutStatusbar;
        case "vsc:VscLayout":
            return VscLayout;
        case "vsc:VscLibrary":
            return VscLibrary;
        case "vsc:VscLightbulbAutofix":
            return VscLightbulbAutofix;
        case "vsc:VscLightbulbSparkle":
            return VscLightbulbSparkle;
        case "vsc:VscLightbulb":
            return VscLightbulb;
        case "vsc:VscLinkExternal":
            return VscLinkExternal;
        case "vsc:VscLink":
            return VscLink;
        case "vsc:VscListFilter":
            return VscListFilter;
        case "vsc:VscListFlat":
            return VscListFlat;
        case "vsc:VscListOrdered":
            return VscListOrdered;
        case "vsc:VscListSelection":
            return VscListSelection;
        case "vsc:VscListTree":
            return VscListTree;
        case "vsc:VscListUnordered":
            return VscListUnordered;
        case "vsc:VscLiveShare":
            return VscLiveShare;
        case "vsc:VscLoading":
            return VscLoading;
        case "vsc:VscLocation":
            return VscLocation;
        case "vsc:VscLockSmall":
            return VscLockSmall;
        case "vsc:VscLock":
            return VscLock;
        case "vsc:VscMagnet":
            return VscMagnet;
        case "vsc:VscMailRead":
            return VscMailRead;
        case "vsc:VscMail":
            return VscMail;
        case "vsc:VscMapFilled":
            return VscMapFilled;
        case "vsc:VscMapVerticalFilled":
            return VscMapVerticalFilled;
        case "vsc:VscMapVertical":
            return VscMapVertical;
        case "vsc:VscMap":
            return VscMap;
        case "vsc:VscMarkdown":
            return VscMarkdown;
        case "vsc:VscMegaphone":
            return VscMegaphone;
        case "vsc:VscMention":
            return VscMention;
        case "vsc:VscMenu":
            return VscMenu;
        case "vsc:VscMerge":
            return VscMerge;
        case "vsc:VscMicFilled":
            return VscMicFilled;
        case "vsc:VscMic":
            return VscMic;
        case "vsc:VscMilestone":
            return VscMilestone;
        case "vsc:VscMirror":
            return VscMirror;
        case "vsc:VscMortarBoard":
            return VscMortarBoard;
        case "vsc:VscMove":
            return VscMove;
        case "vsc:VscMultipleWindows":
            return VscMultipleWindows;
        case "vsc:VscMusic":
            return VscMusic;
        case "vsc:VscMute":
            return VscMute;
        case "vsc:VscNewFile":
            return VscNewFile;
        case "vsc:VscNewFolder":
            return VscNewFolder;
        case "vsc:VscNewline":
            return VscNewline;
        case "vsc:VscNoNewline":
            return VscNoNewline;
        case "vsc:VscNote":
            return VscNote;
        case "vsc:VscNotebookTemplate":
            return VscNotebookTemplate;
        case "vsc:VscNotebook":
            return VscNotebook;
        case "vsc:VscOctoface":
            return VscOctoface;
        case "vsc:VscOpenPreview":
            return VscOpenPreview;
        case "vsc:VscOrganization":
            return VscOrganization;
        case "vsc:VscOutput":
            return VscOutput;
        case "vsc:VscPackage":
            return VscPackage;
        case "vsc:VscPaintcan":
            return VscPaintcan;
        case "vsc:VscPassFilled":
            return VscPassFilled;
        case "vsc:VscPass":
            return VscPass;
        case "vsc:VscPercentage":
            return VscPercentage;
        case "vsc:VscPersonAdd":
            return VscPersonAdd;
        case "vsc:VscPerson":
            return VscPerson;
        case "vsc:VscPiano":
            return VscPiano;
        case "vsc:VscPieChart":
            return VscPieChart;
        case "vsc:VscPin":
            return VscPin;
        case "vsc:VscPinnedDirty":
            return VscPinnedDirty;
        case "vsc:VscPinned":
            return VscPinned;
        case "vsc:VscPlayCircle":
            return VscPlayCircle;
        case "vsc:VscPlay":
            return VscPlay;
        case "vsc:VscPlug":
            return VscPlug;
        case "vsc:VscPreserveCase":
            return VscPreserveCase;
        case "vsc:VscPreview":
            return VscPreview;
        case "vsc:VscPrimitiveSquare":
            return VscPrimitiveSquare;
        case "vsc:VscProject":
            return VscProject;
        case "vsc:VscPulse":
            return VscPulse;
        case "vsc:VscQuestion":
            return VscQuestion;
        case "vsc:VscQuote":
            return VscQuote;
        case "vsc:VscRadioTower":
            return VscRadioTower;
        case "vsc:VscReactions":
            return VscReactions;
        case "vsc:VscRecordKeys":
            return VscRecordKeys;
        case "vsc:VscRecordSmall":
            return VscRecordSmall;
        case "vsc:VscRecord":
            return VscRecord;
        case "vsc:VscRedo":
            return VscRedo;
        case "vsc:VscReferences":
            return VscReferences;
        case "vsc:VscRefresh":
            return VscRefresh;
        case "vsc:VscRegex":
            return VscRegex;
        case "vsc:VscRemoteExplorer":
            return VscRemoteExplorer;
        case "vsc:VscRemote":
            return VscRemote;
        case "vsc:VscRemove":
            return VscRemove;
        case "vsc:VscReplaceAll":
            return VscReplaceAll;
        case "vsc:VscReplace":
            return VscReplace;
        case "vsc:VscReply":
            return VscReply;
        case "vsc:VscRepoClone":
            return VscRepoClone;
        case "vsc:VscRepoFetch":
            return VscRepoFetch;
        case "vsc:VscRepoForcePush":
            return VscRepoForcePush;
        case "vsc:VscRepoForked":
            return VscRepoForked;
        case "vsc:VscRepoPull":
            return VscRepoPull;
        case "vsc:VscRepoPush":
            return VscRepoPush;
        case "vsc:VscRepo":
            return VscRepo;
        case "vsc:VscReport":
            return VscReport;
        case "vsc:VscRequestChanges":
            return VscRequestChanges;
        case "vsc:VscRobot":
            return VscRobot;
        case "vsc:VscRocket":
            return VscRocket;
        case "vsc:VscRootFolderOpened":
            return VscRootFolderOpened;
        case "vsc:VscRootFolder":
            return VscRootFolder;
        case "vsc:VscRss":
            return VscRss;
        case "vsc:VscRuby":
            return VscRuby;
        case "vsc:VscRunAbove":
            return VscRunAbove;
        case "vsc:VscRunAllCoverage":
            return VscRunAllCoverage;
        case "vsc:VscRunAll":
            return VscRunAll;
        case "vsc:VscRunBelow":
            return VscRunBelow;
        case "vsc:VscRunCoverage":
            return VscRunCoverage;
        case "vsc:VscRunErrors":
            return VscRunErrors;
        case "vsc:VscSaveAll":
            return VscSaveAll;
        case "vsc:VscSaveAs":
            return VscSaveAs;
        case "vsc:VscSave":
            return VscSave;
        case "vsc:VscScreenFull":
            return VscScreenFull;
        case "vsc:VscScreenNormal":
            return VscScreenNormal;
        case "vsc:VscSearchFuzzy":
            return VscSearchFuzzy;
        case "vsc:VscSearchStop":
            return VscSearchStop;
        case "vsc:VscSearch":
            return VscSearch;
        case "vsc:VscSend":
            return VscSend;
        case "vsc:VscServerEnvironment":
            return VscServerEnvironment;
        case "vsc:VscServerProcess":
            return VscServerProcess;
        case "vsc:VscServer":
            return VscServer;
        case "vsc:VscSettingsGear":
            return VscSettingsGear;
        case "vsc:VscSettings":
            return VscSettings;
        case "vsc:VscShare":
            return VscShare;
        case "vsc:VscShield":
            return VscShield;
        case "vsc:VscSignIn":
            return VscSignIn;
        case "vsc:VscSignOut":
            return VscSignOut;
        case "vsc:VscSmiley":
            return VscSmiley;
        case "vsc:VscSnake":
            return VscSnake;
        case "vsc:VscSortPrecedence":
            return VscSortPrecedence;
        case "vsc:VscSourceControl":
            return VscSourceControl;
        case "vsc:VscSparkleFilled":
            return VscSparkleFilled;
        case "vsc:VscSparkle":
            return VscSparkle;
        case "vsc:VscSplitHorizontal":
            return VscSplitHorizontal;
        case "vsc:VscSplitVertical":
            return VscSplitVertical;
        case "vsc:VscSquirrel":
            return VscSquirrel;
        case "vsc:VscStarEmpty":
            return VscStarEmpty;
        case "vsc:VscStarFull":
            return VscStarFull;
        case "vsc:VscStarHalf":
            return VscStarHalf;
        case "vsc:VscStopCircle":
            return VscStopCircle;
        case "vsc:VscSurroundWith":
            return VscSurroundWith;
        case "vsc:VscSymbolArray":
            return VscSymbolArray;
        case "vsc:VscSymbolBoolean":
            return VscSymbolBoolean;
        case "vsc:VscSymbolClass":
            return VscSymbolClass;
        case "vsc:VscSymbolColor":
            return VscSymbolColor;
        case "vsc:VscSymbolConstant":
            return VscSymbolConstant;
        case "vsc:VscSymbolEnumMember":
            return VscSymbolEnumMember;
        case "vsc:VscSymbolEnum":
            return VscSymbolEnum;
        case "vsc:VscSymbolEvent":
            return VscSymbolEvent;
        case "vsc:VscSymbolField":
            return VscSymbolField;
        case "vsc:VscSymbolFile":
            return VscSymbolFile;
        case "vsc:VscSymbolInterface":
            return VscSymbolInterface;
        case "vsc:VscSymbolKey":
            return VscSymbolKey;
        case "vsc:VscSymbolKeyword":
            return VscSymbolKeyword;
        case "vsc:VscSymbolMethod":
            return VscSymbolMethod;
        case "vsc:VscSymbolMisc":
            return VscSymbolMisc;
        case "vsc:VscSymbolNamespace":
            return VscSymbolNamespace;
        case "vsc:VscSymbolNumeric":
            return VscSymbolNumeric;
        case "vsc:VscSymbolOperator":
            return VscSymbolOperator;
        case "vsc:VscSymbolParameter":
            return VscSymbolParameter;
        case "vsc:VscSymbolProperty":
            return VscSymbolProperty;
        case "vsc:VscSymbolRuler":
            return VscSymbolRuler;
        case "vsc:VscSymbolSnippet":
            return VscSymbolSnippet;
        case "vsc:VscSymbolString":
            return VscSymbolString;
        case "vsc:VscSymbolStructure":
            return VscSymbolStructure;
        case "vsc:VscSymbolVariable":
            return VscSymbolVariable;
        case "vsc:VscSyncIgnored":
            return VscSyncIgnored;
        case "vsc:VscSync":
            return VscSync;
        case "vsc:VscTable":
            return VscTable;
        case "vsc:VscTag":
            return VscTag;
        case "vsc:VscTarget":
            return VscTarget;
        case "vsc:VscTasklist":
            return VscTasklist;
        case "vsc:VscTelescope":
            return VscTelescope;
        case "vsc:VscTerminalBash":
            return VscTerminalBash;
        case "vsc:VscTerminalCmd":
            return VscTerminalCmd;
        case "vsc:VscTerminalDebian":
            return VscTerminalDebian;
        case "vsc:VscTerminalLinux":
            return VscTerminalLinux;
        case "vsc:VscTerminalPowershell":
            return VscTerminalPowershell;
        case "vsc:VscTerminalTmux":
            return VscTerminalTmux;
        case "vsc:VscTerminalUbuntu":
            return VscTerminalUbuntu;
        case "vsc:VscTerminal":
            return VscTerminal;
        case "vsc:VscTextSize":
            return VscTextSize;
        case "vsc:VscThreeBars":
            return VscThreeBars;
        case "vsc:VscThumbsdownFilled":
            return VscThumbsdownFilled;
        case "vsc:VscThumbsdown":
            return VscThumbsdown;
        case "vsc:VscThumbsupFilled":
            return VscThumbsupFilled;
        case "vsc:VscThumbsup":
            return VscThumbsup;
        case "vsc:VscTools":
            return VscTools;
        case "vsc:VscTrash":
            return VscTrash;
        case "vsc:VscTriangleDown":
            return VscTriangleDown;
        case "vsc:VscTriangleLeft":
            return VscTriangleLeft;
        case "vsc:VscTriangleRight":
            return VscTriangleRight;
        case "vsc:VscTriangleUp":
            return VscTriangleUp;
        case "vsc:VscTwitter":
            return VscTwitter;
        case "vsc:VscTypeHierarchySub":
            return VscTypeHierarchySub;
        case "vsc:VscTypeHierarchySuper":
            return VscTypeHierarchySuper;
        case "vsc:VscTypeHierarchy":
            return VscTypeHierarchy;
        case "vsc:VscUnfold":
            return VscUnfold;
        case "vsc:VscUngroupByRefType":
            return VscUngroupByRefType;
        case "vsc:VscUnlock":
            return VscUnlock;
        case "vsc:VscUnmute":
            return VscUnmute;
        case "vsc:VscUnverified":
            return VscUnverified;
        case "vsc:VscVariableGroup":
            return VscVariableGroup;
        case "vsc:VscVerifiedFilled":
            return VscVerifiedFilled;
        case "vsc:VscVerified":
            return VscVerified;
        case "vsc:VscVersions":
            return VscVersions;
        case "vsc:VscVmActive":
            return VscVmActive;
        case "vsc:VscVmConnect":
            return VscVmConnect;
        case "vsc:VscVmOutline":
            return VscVmOutline;
        case "vsc:VscVmRunning":
            return VscVmRunning;
        case "vsc:VscVm":
            return VscVm;
        case "vsc:VscVr":
            return VscVr;
        case "vsc:VscVscodeInsiders":
            return VscVscodeInsiders;
        case "vsc:VscVscode":
            return VscVscode;
        case "vsc:VscWand":
            return VscWand;
        case "vsc:VscWarning":
            return VscWarning;
        case "vsc:VscWatch":
            return VscWatch;
        case "vsc:VscWhitespace":
            return VscWhitespace;
        case "vsc:VscWholeWord":
            return VscWholeWord;
        case "vsc:VscWindow":
            return VscWindow;
        case "vsc:VscWordWrap":
            return VscWordWrap;
        case "vsc:VscWorkspaceTrusted":
            return VscWorkspaceTrusted;
        case "vsc:VscWorkspaceUnknown":
            return VscWorkspaceUnknown;
        case "vsc:VscWorkspaceUntrusted":
            return VscWorkspaceUntrusted;
        case "vsc:VscZoomIn":
            return VscZoomIn;
        case "vsc:VscZoomOut":
            return VscZoomOut;
    }
}
