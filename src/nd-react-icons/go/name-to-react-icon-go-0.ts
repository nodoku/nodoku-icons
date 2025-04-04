import type {IconType} from "react-icons";

import {
    GoAlert,
    GoAlertFill,
    GoArchive,
    GoArrowBoth,
    GoArrowDown,
    GoArrowDownLeft,
    GoArrowDownRight,
    GoArrowLeft,
    GoArrowRight,
    GoArrowSwitch,
    GoArrowUp,
    GoArrowUpLeft,
    GoArrowUpRight,
    GoBeaker,
    GoBell,
    GoBellFill,
    GoBellSlash,
    GoBlocked,
    GoBold,
    GoBook,
    GoBookmark,
    GoBookmarkFill,
    GoBookmarkSlash,
    GoBookmarkSlashFill,
    GoBriefcase,
    GoBroadcast,
    GoBrowser,
    GoBug,
    GoCalendar,
    GoCheck,
    GoCheckCircle,
    GoCheckCircleFill,
    GoCheckbox,
    GoChecklist,
    GoChevronDown,
    GoChevronLeft,
    GoChevronRight,
    GoChevronUp,
    GoCircle,
    GoCircleSlash,
    GoClock,
    GoClockFill,
    GoCloud,
    GoCloudOffline,
    GoCode,
    GoCodeOfConduct,
    GoCodeReview,
    GoCodeSquare,
    GoCodescan,
    GoCodescanCheckmark,
    GoCodespaces,
    GoColumns,
    GoCommandPalette,
    GoComment,
    GoCommentDiscussion,
    GoCommit,
    GoContainer,
    GoCopilot,
    GoCopy,
    GoCpu,
    GoCreditCard,
    GoCrossReference,
    GoDash,
    GoDatabase,
    GoDependabot,
    GoDesktopDownload,
    GoDeviceCameraVideo,
    GoDeviceDesktop,
    GoDeviceMobile,
    GoDiamond,
    GoDiff,
    GoDiscussionClosed,
    GoDiscussionDuplicate,
    GoDiscussionOutdated,
    GoDot,
    GoDotFill,
    GoDownload,
    GoDuplicate,
    GoEye,
    GoEyeClosed,
    GoFile,
    GoFileBinary,
    GoFileCode,
    GoFileDiff,
    GoFileDirectory,
    GoFileDirectoryFill,
    GoFileMedia,
    GoFileSubmodule,
    GoFileSymlinkFile,
    GoFileZip,
    GoFilter,
    GoFlame,
    GoFold,
    GoFoldDown,
    GoFoldUp,
    GoGear,
    GoGift,
    GoGitBranch,
    GoGitCommit,
    GoGitCompare,
    GoGitMerge,
    GoGitMergeQueue,
    GoGitPullRequest,
    GoGitPullRequestClosed,
    GoGitPullRequestDraft,
    GoGlobe,
    GoGoal,
    GoGrabber,
    GoGraph,
    GoHash,
    GoHeading,
    GoHeart,
    GoHeartFill,
    GoHistory,
    GoHome,
    GoHomeFill,
    GoHorizontalRule,
    GoHourglass,
    GoHubot,
    GoImage,
    GoInbox,
    GoInfinity,
    GoInfo,
    GoIssueClosed,
    GoIssueDraft,
    GoIssueOpened,
    GoIssueReopened,
    GoIssueTrackedBy,
    GoIssueTracks,
    GoItalic,
    GoIterations,
    GoKebabHorizontal,
    GoKey,
    GoLaw,
    GoLightBulb,
    GoLink,
    GoLinkExternal,
    GoListOrdered,
    GoListUnordered,
    GoLocation,
    GoLock,
    GoLog,
    GoMail,
    GoMegaphone,
    GoMention,
    GoMilestone,
    GoMirror,
    GoMoon,
    GoMortarBoard,
    GoMoveToBottom,
    GoMoveToEnd,
    GoMoveToStart,
    GoMoveToTop,
    GoMultiSelect,
    GoMute,
    GoNoEntry,
    GoNorthStar,
    GoNote,
    GoNumber,
    GoOrganization,
    GoPackage,
    GoPackageDependencies,
    GoPackageDependents,
    GoPaperAirplane,
    GoPaperclip,
    GoPasskeyFill,
    GoPaste,
    GoPencil,
    GoPeople,
    GoPerson,
    GoPersonAdd,
    GoPersonFill,
    GoPin,
    GoPlay,
    GoPlug,
    GoPlus,
    GoPlusCircle,
    GoProject,
    GoProjectRoadmap,
    GoProjectSymlink,
    GoProjectTemplate,
    GoPulse,
    GoQuestion,
    GoQuote,
    GoRead,
    GoRelFilePath,
    GoReply,
    GoRepo,
    GoRepoForked,
    GoRepoLocked,
    GoRepoPush,
    GoRepoTemplate,
    GoReport,
    GoRocket,
    GoRows,
    GoRss,
    GoRuby,
    GoScreenFull,
    GoScreenNormal,
    GoSearch,
    GoServer,
    GoShare,
    GoShareAndroid,
    GoShield,
    GoShieldCheck,
    GoShieldLock,
    GoShieldSlash,
    GoShieldX,
    GoSidebarCollapse,
    GoSidebarExpand,
    GoSignIn,
    GoSignOut,
    GoSingleSelect,
    GoSkip,
    GoSkipFill,
    GoSmiley,
    GoSortAsc,
    GoSortDesc,
    GoSponsorTiers,
    GoSquare,
    GoSquareFill,
    GoSquirrel,
    GoStack,
    GoStar,
    GoStarFill,
    GoStop,
    GoStopwatch,
    GoStrikethrough,
    GoSun,
    GoSync,
    GoTab,
    GoTable,
    GoTag,
    GoTasklist,
    GoTelescope,
    GoTelescopeFill,
    GoTerminal,
    GoThumbsdown,
    GoThumbsup,
    GoTools,
    GoTrash,
    GoTriangleDown,
    GoTriangleLeft,
    GoTriangleRight,
    GoTriangleUp,
    GoTrophy,
    GoTypography,
    GoUnfold,
    GoUnlink,
    GoUnlock,
    GoUnmute,
    GoUnread,
    GoUnverified,
    GoUpload,
    GoVerified,
    GoVersions,
    GoVideo,
    GoWorkflow,
    GoX,
    GoXCircle,
    GoXCircleFill,
    GoZap,
    GoZoomIn,
    GoZoomOut,
} from "react-icons/go"

export function nameToReactIcon_go_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "go:GoAlert":
            return GoAlert;
        case "go:GoAlertFill":
            return GoAlertFill;
        case "go:GoArchive":
            return GoArchive;
        case "go:GoArrowBoth":
            return GoArrowBoth;
        case "go:GoArrowDown":
            return GoArrowDown;
        case "go:GoArrowDownLeft":
            return GoArrowDownLeft;
        case "go:GoArrowDownRight":
            return GoArrowDownRight;
        case "go:GoArrowLeft":
            return GoArrowLeft;
        case "go:GoArrowRight":
            return GoArrowRight;
        case "go:GoArrowSwitch":
            return GoArrowSwitch;
        case "go:GoArrowUp":
            return GoArrowUp;
        case "go:GoArrowUpLeft":
            return GoArrowUpLeft;
        case "go:GoArrowUpRight":
            return GoArrowUpRight;
        case "go:GoBeaker":
            return GoBeaker;
        case "go:GoBell":
            return GoBell;
        case "go:GoBellFill":
            return GoBellFill;
        case "go:GoBellSlash":
            return GoBellSlash;
        case "go:GoBlocked":
            return GoBlocked;
        case "go:GoBold":
            return GoBold;
        case "go:GoBook":
            return GoBook;
        case "go:GoBookmark":
            return GoBookmark;
        case "go:GoBookmarkFill":
            return GoBookmarkFill;
        case "go:GoBookmarkSlash":
            return GoBookmarkSlash;
        case "go:GoBookmarkSlashFill":
            return GoBookmarkSlashFill;
        case "go:GoBriefcase":
            return GoBriefcase;
        case "go:GoBroadcast":
            return GoBroadcast;
        case "go:GoBrowser":
            return GoBrowser;
        case "go:GoBug":
            return GoBug;
        case "go:GoCalendar":
            return GoCalendar;
        case "go:GoCheck":
            return GoCheck;
        case "go:GoCheckCircle":
            return GoCheckCircle;
        case "go:GoCheckCircleFill":
            return GoCheckCircleFill;
        case "go:GoCheckbox":
            return GoCheckbox;
        case "go:GoChecklist":
            return GoChecklist;
        case "go:GoChevronDown":
            return GoChevronDown;
        case "go:GoChevronLeft":
            return GoChevronLeft;
        case "go:GoChevronRight":
            return GoChevronRight;
        case "go:GoChevronUp":
            return GoChevronUp;
        case "go:GoCircle":
            return GoCircle;
        case "go:GoCircleSlash":
            return GoCircleSlash;
        case "go:GoClock":
            return GoClock;
        case "go:GoClockFill":
            return GoClockFill;
        case "go:GoCloud":
            return GoCloud;
        case "go:GoCloudOffline":
            return GoCloudOffline;
        case "go:GoCode":
            return GoCode;
        case "go:GoCodeOfConduct":
            return GoCodeOfConduct;
        case "go:GoCodeReview":
            return GoCodeReview;
        case "go:GoCodeSquare":
            return GoCodeSquare;
        case "go:GoCodescan":
            return GoCodescan;
        case "go:GoCodescanCheckmark":
            return GoCodescanCheckmark;
        case "go:GoCodespaces":
            return GoCodespaces;
        case "go:GoColumns":
            return GoColumns;
        case "go:GoCommandPalette":
            return GoCommandPalette;
        case "go:GoComment":
            return GoComment;
        case "go:GoCommentDiscussion":
            return GoCommentDiscussion;
        case "go:GoCommit":
            return GoCommit;
        case "go:GoContainer":
            return GoContainer;
        case "go:GoCopilot":
            return GoCopilot;
        case "go:GoCopy":
            return GoCopy;
        case "go:GoCpu":
            return GoCpu;
        case "go:GoCreditCard":
            return GoCreditCard;
        case "go:GoCrossReference":
            return GoCrossReference;
        case "go:GoDash":
            return GoDash;
        case "go:GoDatabase":
            return GoDatabase;
        case "go:GoDependabot":
            return GoDependabot;
        case "go:GoDesktopDownload":
            return GoDesktopDownload;
        case "go:GoDeviceCameraVideo":
            return GoDeviceCameraVideo;
        case "go:GoDeviceDesktop":
            return GoDeviceDesktop;
        case "go:GoDeviceMobile":
            return GoDeviceMobile;
        case "go:GoDiamond":
            return GoDiamond;
        case "go:GoDiff":
            return GoDiff;
        case "go:GoDiscussionClosed":
            return GoDiscussionClosed;
        case "go:GoDiscussionDuplicate":
            return GoDiscussionDuplicate;
        case "go:GoDiscussionOutdated":
            return GoDiscussionOutdated;
        case "go:GoDot":
            return GoDot;
        case "go:GoDotFill":
            return GoDotFill;
        case "go:GoDownload":
            return GoDownload;
        case "go:GoDuplicate":
            return GoDuplicate;
        case "go:GoEye":
            return GoEye;
        case "go:GoEyeClosed":
            return GoEyeClosed;
        case "go:GoFile":
            return GoFile;
        case "go:GoFileBinary":
            return GoFileBinary;
        case "go:GoFileCode":
            return GoFileCode;
        case "go:GoFileDiff":
            return GoFileDiff;
        case "go:GoFileDirectory":
            return GoFileDirectory;
        case "go:GoFileDirectoryFill":
            return GoFileDirectoryFill;
        case "go:GoFileMedia":
            return GoFileMedia;
        case "go:GoFileSubmodule":
            return GoFileSubmodule;
        case "go:GoFileSymlinkFile":
            return GoFileSymlinkFile;
        case "go:GoFileZip":
            return GoFileZip;
        case "go:GoFilter":
            return GoFilter;
        case "go:GoFlame":
            return GoFlame;
        case "go:GoFold":
            return GoFold;
        case "go:GoFoldDown":
            return GoFoldDown;
        case "go:GoFoldUp":
            return GoFoldUp;
        case "go:GoGear":
            return GoGear;
        case "go:GoGift":
            return GoGift;
        case "go:GoGitBranch":
            return GoGitBranch;
        case "go:GoGitCommit":
            return GoGitCommit;
        case "go:GoGitCompare":
            return GoGitCompare;
        case "go:GoGitMerge":
            return GoGitMerge;
        case "go:GoGitMergeQueue":
            return GoGitMergeQueue;
        case "go:GoGitPullRequest":
            return GoGitPullRequest;
        case "go:GoGitPullRequestClosed":
            return GoGitPullRequestClosed;
        case "go:GoGitPullRequestDraft":
            return GoGitPullRequestDraft;
        case "go:GoGlobe":
            return GoGlobe;
        case "go:GoGoal":
            return GoGoal;
        case "go:GoGrabber":
            return GoGrabber;
        case "go:GoGraph":
            return GoGraph;
        case "go:GoHash":
            return GoHash;
        case "go:GoHeading":
            return GoHeading;
        case "go:GoHeart":
            return GoHeart;
        case "go:GoHeartFill":
            return GoHeartFill;
        case "go:GoHistory":
            return GoHistory;
        case "go:GoHome":
            return GoHome;
        case "go:GoHomeFill":
            return GoHomeFill;
        case "go:GoHorizontalRule":
            return GoHorizontalRule;
        case "go:GoHourglass":
            return GoHourglass;
        case "go:GoHubot":
            return GoHubot;
        case "go:GoImage":
            return GoImage;
        case "go:GoInbox":
            return GoInbox;
        case "go:GoInfinity":
            return GoInfinity;
        case "go:GoInfo":
            return GoInfo;
        case "go:GoIssueClosed":
            return GoIssueClosed;
        case "go:GoIssueDraft":
            return GoIssueDraft;
        case "go:GoIssueOpened":
            return GoIssueOpened;
        case "go:GoIssueReopened":
            return GoIssueReopened;
        case "go:GoIssueTrackedBy":
            return GoIssueTrackedBy;
        case "go:GoIssueTracks":
            return GoIssueTracks;
        case "go:GoItalic":
            return GoItalic;
        case "go:GoIterations":
            return GoIterations;
        case "go:GoKebabHorizontal":
            return GoKebabHorizontal;
        case "go:GoKey":
            return GoKey;
        case "go:GoLaw":
            return GoLaw;
        case "go:GoLightBulb":
            return GoLightBulb;
        case "go:GoLink":
            return GoLink;
        case "go:GoLinkExternal":
            return GoLinkExternal;
        case "go:GoListOrdered":
            return GoListOrdered;
        case "go:GoListUnordered":
            return GoListUnordered;
        case "go:GoLocation":
            return GoLocation;
        case "go:GoLock":
            return GoLock;
        case "go:GoLog":
            return GoLog;
        case "go:GoMail":
            return GoMail;
        case "go:GoMegaphone":
            return GoMegaphone;
        case "go:GoMention":
            return GoMention;
        case "go:GoMilestone":
            return GoMilestone;
        case "go:GoMirror":
            return GoMirror;
        case "go:GoMoon":
            return GoMoon;
        case "go:GoMortarBoard":
            return GoMortarBoard;
        case "go:GoMoveToBottom":
            return GoMoveToBottom;
        case "go:GoMoveToEnd":
            return GoMoveToEnd;
        case "go:GoMoveToStart":
            return GoMoveToStart;
        case "go:GoMoveToTop":
            return GoMoveToTop;
        case "go:GoMultiSelect":
            return GoMultiSelect;
        case "go:GoMute":
            return GoMute;
        case "go:GoNoEntry":
            return GoNoEntry;
        case "go:GoNorthStar":
            return GoNorthStar;
        case "go:GoNote":
            return GoNote;
        case "go:GoNumber":
            return GoNumber;
        case "go:GoOrganization":
            return GoOrganization;
        case "go:GoPackage":
            return GoPackage;
        case "go:GoPackageDependencies":
            return GoPackageDependencies;
        case "go:GoPackageDependents":
            return GoPackageDependents;
        case "go:GoPaperAirplane":
            return GoPaperAirplane;
        case "go:GoPaperclip":
            return GoPaperclip;
        case "go:GoPasskeyFill":
            return GoPasskeyFill;
        case "go:GoPaste":
            return GoPaste;
        case "go:GoPencil":
            return GoPencil;
        case "go:GoPeople":
            return GoPeople;
        case "go:GoPerson":
            return GoPerson;
        case "go:GoPersonAdd":
            return GoPersonAdd;
        case "go:GoPersonFill":
            return GoPersonFill;
        case "go:GoPin":
            return GoPin;
        case "go:GoPlay":
            return GoPlay;
        case "go:GoPlug":
            return GoPlug;
        case "go:GoPlus":
            return GoPlus;
        case "go:GoPlusCircle":
            return GoPlusCircle;
        case "go:GoProject":
            return GoProject;
        case "go:GoProjectRoadmap":
            return GoProjectRoadmap;
        case "go:GoProjectSymlink":
            return GoProjectSymlink;
        case "go:GoProjectTemplate":
            return GoProjectTemplate;
        case "go:GoPulse":
            return GoPulse;
        case "go:GoQuestion":
            return GoQuestion;
        case "go:GoQuote":
            return GoQuote;
        case "go:GoRead":
            return GoRead;
        case "go:GoRelFilePath":
            return GoRelFilePath;
        case "go:GoReply":
            return GoReply;
        case "go:GoRepo":
            return GoRepo;
        case "go:GoRepoForked":
            return GoRepoForked;
        case "go:GoRepoLocked":
            return GoRepoLocked;
        case "go:GoRepoPush":
            return GoRepoPush;
        case "go:GoRepoTemplate":
            return GoRepoTemplate;
        case "go:GoReport":
            return GoReport;
        case "go:GoRocket":
            return GoRocket;
        case "go:GoRows":
            return GoRows;
        case "go:GoRss":
            return GoRss;
        case "go:GoRuby":
            return GoRuby;
        case "go:GoScreenFull":
            return GoScreenFull;
        case "go:GoScreenNormal":
            return GoScreenNormal;
        case "go:GoSearch":
            return GoSearch;
        case "go:GoServer":
            return GoServer;
        case "go:GoShare":
            return GoShare;
        case "go:GoShareAndroid":
            return GoShareAndroid;
        case "go:GoShield":
            return GoShield;
        case "go:GoShieldCheck":
            return GoShieldCheck;
        case "go:GoShieldLock":
            return GoShieldLock;
        case "go:GoShieldSlash":
            return GoShieldSlash;
        case "go:GoShieldX":
            return GoShieldX;
        case "go:GoSidebarCollapse":
            return GoSidebarCollapse;
        case "go:GoSidebarExpand":
            return GoSidebarExpand;
        case "go:GoSignIn":
            return GoSignIn;
        case "go:GoSignOut":
            return GoSignOut;
        case "go:GoSingleSelect":
            return GoSingleSelect;
        case "go:GoSkip":
            return GoSkip;
        case "go:GoSkipFill":
            return GoSkipFill;
        case "go:GoSmiley":
            return GoSmiley;
        case "go:GoSortAsc":
            return GoSortAsc;
        case "go:GoSortDesc":
            return GoSortDesc;
        case "go:GoSponsorTiers":
            return GoSponsorTiers;
        case "go:GoSquare":
            return GoSquare;
        case "go:GoSquareFill":
            return GoSquareFill;
        case "go:GoSquirrel":
            return GoSquirrel;
        case "go:GoStack":
            return GoStack;
        case "go:GoStar":
            return GoStar;
        case "go:GoStarFill":
            return GoStarFill;
        case "go:GoStop":
            return GoStop;
        case "go:GoStopwatch":
            return GoStopwatch;
        case "go:GoStrikethrough":
            return GoStrikethrough;
        case "go:GoSun":
            return GoSun;
        case "go:GoSync":
            return GoSync;
        case "go:GoTab":
            return GoTab;
        case "go:GoTable":
            return GoTable;
        case "go:GoTag":
            return GoTag;
        case "go:GoTasklist":
            return GoTasklist;
        case "go:GoTelescope":
            return GoTelescope;
        case "go:GoTelescopeFill":
            return GoTelescopeFill;
        case "go:GoTerminal":
            return GoTerminal;
        case "go:GoThumbsdown":
            return GoThumbsdown;
        case "go:GoThumbsup":
            return GoThumbsup;
        case "go:GoTools":
            return GoTools;
        case "go:GoTrash":
            return GoTrash;
        case "go:GoTriangleDown":
            return GoTriangleDown;
        case "go:GoTriangleLeft":
            return GoTriangleLeft;
        case "go:GoTriangleRight":
            return GoTriangleRight;
        case "go:GoTriangleUp":
            return GoTriangleUp;
        case "go:GoTrophy":
            return GoTrophy;
        case "go:GoTypography":
            return GoTypography;
        case "go:GoUnfold":
            return GoUnfold;
        case "go:GoUnlink":
            return GoUnlink;
        case "go:GoUnlock":
            return GoUnlock;
        case "go:GoUnmute":
            return GoUnmute;
        case "go:GoUnread":
            return GoUnread;
        case "go:GoUnverified":
            return GoUnverified;
        case "go:GoUpload":
            return GoUpload;
        case "go:GoVerified":
            return GoVerified;
        case "go:GoVersions":
            return GoVersions;
        case "go:GoVideo":
            return GoVideo;
        case "go:GoWorkflow":
            return GoWorkflow;
        case "go:GoX":
            return GoX;
        case "go:GoXCircle":
            return GoXCircle;
        case "go:GoXCircleFill":
            return GoXCircleFill;
        case "go:GoZap":
            return GoZap;
        case "go:GoZoomIn":
            return GoZoomIn;
        case "go:GoZoomOut":
            return GoZoomOut;
    }
}
