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
export function nameToReactIcon_vsc_0(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, VscAccount, VscActivateBreakpoints, VscAdd, VscArchive, VscArrowBoth, VscArrowCircleDown, VscArrowCircleLeft, VscArrowCircleRight, VscArrowCircleUp, VscArrowDown, VscArrowLeft, VscArrowRight, VscArrowSmallDown, VscArrowSmallLeft, VscArrowSmallRight, VscArrowSmallUp, VscArrowSwap, VscArrowUp, VscAttach, VscAzureDevops, VscAzure, VscBeakerStop, VscBeaker, VscBellDot, VscBellSlashDot, VscBellSlash, VscBell, VscBlank, VscBold, VscBook, VscBookmark, VscBracketDot, VscBracketError, VscBriefcase, VscBroadcast, VscBrowser, VscBug, VscCalendar, VscCallIncoming, VscCallOutgoing, VscCaseSensitive, VscCheckAll, VscCheck, VscChecklist, VscChevronDown, VscChevronLeft, VscChevronRight, VscChevronUp, VscChip, VscChromeClose, VscChromeMaximize, VscChromeMinimize, VscChromeRestore, VscCircleFilled, VscCircleLargeFilled, VscCircleLarge, VscCircleSlash, VscCircleSmallFilled, VscCircleSmall, VscCircle, VscCircuitBoard, VscClearAll, VscClippy, VscCloseAll, VscClose, VscCloudDownload, VscCloudUpload, VscCloud, VscCodeOss, VscCodeReview, VscCode, VscCoffee, VscCollapseAll, VscColorMode, VscCombine, VscCommentDiscussion, VscCommentDraft, VscCommentUnresolved, VscComment, VscCompassActive, VscCompassDot, VscCompass, VscCopilotWarning, VscCopilot, VscCopy, VscCoverage, VscCreditCard, VscDash, VscDashboard, VscDatabase, VscDebugAll, VscDebugAltSmall, VscDebugAlt, VscDebugBreakpointConditionalUnverified, VscDebugBreakpointConditional, VscDebugBreakpointDataUnverified, VscDebugBreakpointData, VscDebugBreakpointFunctionUnverified, VscDebugBreakpointFunction, VscDebugBreakpointLogUnverified, VscDebugBreakpointLog, VscDebugBreakpointUnsupported, VscDebugConsole, VscDebugContinueSmall, VscDebugContinue, VscDebugCoverage, VscDebugDisconnect, VscDebugLineByLine, VscDebugPause, VscDebugRerun, VscDebugRestartFrame, VscDebugRestart, VscDebugReverseContinue, VscDebugStackframeActive, VscDebugStackframe, VscDebugStart, VscDebugStepBack, VscDebugStepInto, VscDebugStepOut, VscDebugStepOver, VscDebugStop, VscDebug, VscDesktopDownload, VscDeviceCameraVideo, VscDeviceCamera, VscDeviceMobile, VscDiffAdded, VscDiffIgnored, VscDiffModified, VscDiffMultiple, VscDiffRemoved, VscDiffRenamed, VscDiffSingle, VscDiff, VscDiscard, VscEditSession, VscEdit, VscEditorLayout, VscEllipsis, VscEmptyWindow, VscErrorSmall, VscError, VscExclude, VscExpandAll, VscExport, VscExtensions, VscEyeClosed, VscEye, VscFeedback, VscFileBinary, VscFileCode, VscFileMedia, VscFilePdf, VscFileSubmodule, VscFileSymlinkDirectory, VscFileSymlinkFile, VscFileZip, VscFile, VscFiles, VscFilterFilled, VscFilter, VscFlame, VscFoldDown, VscFoldUp, VscFold, VscFolderActive, VscFolderLibrary, VscFolderOpened, VscFolder, VscGame, VscGear, VscGift, VscGistSecret, VscGist, VscGitCommit, VscGitCompare, VscGitFetch, VscGitMerge, VscGitPullRequestClosed, VscGitPullRequestCreate, VscGitPullRequestDraft, VscGitPullRequestGoToChanges, VscGitPullRequestNewChanges, VscGitPullRequest, VscGitStashApply, VscGitStashPop, VscGitStash, VscGithubAction, VscGithubAlt, VscGithubInverted, VscGithubProject, VscGithub, VscGlobe, VscGoToEditingSession, VscGoToFile, VscGoToSearch, VscGrabber, VscGraphLeft, VscGraphLine, VscGraphScatter, VscGraph, VscGripper, VscGroupByRefType, VscHeartFilled, VscHeart, VscHistory, VscHome, VscHorizontalRule, VscHubot, VscInbox, VscIndent, VscInfo, VscInsert, VscInspect, VscIssueDraft, VscIssueReopened, VscIssues, VscItalic, VscJersey, VscJson, VscKebabVertical, VscKey, VscLaw, VscLayersActive, VscLayersDot, VscLayers, VscLayoutActivitybarLeft, VscLayoutActivitybarRight, VscLayoutCentered, VscLayoutMenubar, VscLayoutPanelCenter, VscLayoutPanelJustify, VscLayoutPanelLeft, VscLayoutPanelOff, VscLayoutPanelRight, VscLayoutPanel, VscLayoutSidebarLeftOff, VscLayoutSidebarLeft, VscLayoutSidebarRightOff, VscLayoutSidebarRight, VscLayoutStatusbar, VscLayout, VscLibrary, VscLightbulbAutofix, VscLightbulbSparkle, VscLightbulb, VscLinkExternal, VscLink, VscListFilter, VscListFlat, VscListOrdered, VscListSelection, VscListTree, VscListUnordered, VscLiveShare, VscLoading, VscLocation, VscLockSmall, VscLock, VscMagnet, VscMailRead, VscMail, VscMapFilled, VscMapVerticalFilled, VscMapVertical, VscMap, VscMarkdown, VscMegaphone, VscMention, VscMenu, VscMerge, VscMicFilled, VscMic, VscMilestone, VscMirror, VscMortarBoard, VscMove, VscMultipleWindows, VscMusic, VscMute, VscNewFile, VscNewFolder, VscNewline, VscNoNewline, VscNote, VscNotebookTemplate, VscNotebook, VscOctoface, VscOpenPreview, VscOrganization, VscOutput, VscPackage, VscPaintcan, VscPassFilled, VscPass, VscPercentage, VscPersonAdd, VscPerson, VscPiano, VscPieChart, VscPin, VscPinnedDirty, VscPinned, VscPlayCircle, VscPlay, VscPlug, VscPreserveCase, VscPreview, VscPrimitiveSquare, VscProject, VscPulse, VscQuestion, VscQuote, VscRadioTower, VscReactions, VscRecordKeys, VscRecordSmall, VscRecord, VscRedo, VscReferences, VscRefresh, VscRegex, VscRemoteExplorer, VscRemote, VscRemove, VscReplaceAll, VscReplace, VscReply, VscRepoClone, VscRepoFetch, VscRepoForcePush, VscRepoForked, VscRepoPull, VscRepoPush, VscRepo, VscReport, VscRequestChanges, VscRobot, VscRocket, VscRootFolderOpened, VscRootFolder, VscRss, VscRuby, VscRunAbove, VscRunAllCoverage, VscRunAll, VscRunBelow, VscRunCoverage, VscRunErrors, VscSaveAll, VscSaveAs, VscSave, VscScreenFull, VscScreenNormal, VscSearchFuzzy, VscSearchStop, VscSearch, VscSend, VscServerEnvironment, VscServerProcess, VscServer, VscSettingsGear, VscSettings, VscShare, VscShield, VscSignIn, VscSignOut, VscSmiley, VscSnake, VscSortPrecedence, VscSourceControl, VscSparkleFilled, VscSparkle, VscSplitHorizontal, VscSplitVertical, VscSquirrel, VscStarEmpty, VscStarFull, VscStarHalf, VscStopCircle, VscSurroundWith, VscSymbolArray, VscSymbolBoolean, VscSymbolClass, VscSymbolColor, VscSymbolConstant, VscSymbolEnumMember, VscSymbolEnum, VscSymbolEvent, VscSymbolField, VscSymbolFile, VscSymbolInterface, VscSymbolKey, VscSymbolKeyword, VscSymbolMethod, VscSymbolMisc, VscSymbolNamespace, VscSymbolNumeric, VscSymbolOperator, VscSymbolParameter, VscSymbolProperty, VscSymbolRuler, VscSymbolSnippet, VscSymbolString, VscSymbolStructure, VscSymbolVariable, VscSyncIgnored, VscSync, VscTable, VscTag, VscTarget, VscTasklist, VscTelescope, VscTerminalBash, VscTerminalCmd, VscTerminalDebian, VscTerminalLinux, VscTerminalPowershell, VscTerminalTmux, VscTerminalUbuntu, VscTerminal, VscTextSize, VscThreeBars, VscThumbsdownFilled, VscThumbsdown, VscThumbsupFilled, VscThumbsup, VscTools, VscTrash, VscTriangleDown, VscTriangleLeft, VscTriangleRight, VscTriangleUp, VscTwitter, VscTypeHierarchySub, VscTypeHierarchySuper, VscTypeHierarchy, VscUnfold, VscUngroupByRefType, VscUnlock, VscUnmute, VscUnverified, VscVariableGroup, VscVerifiedFilled, VscVerified, VscVersions, VscVmActive, VscVmConnect, VscVmOutline, VscVmRunning, VscVm, VscVr, VscVscodeInsiders, VscVscode, VscWand, VscWarning, VscWatch, VscWhitespace, VscWholeWord, VscWindow, VscWordWrap, VscWorkspaceTrusted, VscWorkspaceUnknown, VscWorkspaceUntrusted, VscZoomIn, VscZoomOut;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "vsc:VscAccount": return [3 /*break*/, 1];
                        case "vsc:VscActivateBreakpoints": return [3 /*break*/, 3];
                        case "vsc:VscAdd": return [3 /*break*/, 5];
                        case "vsc:VscArchive": return [3 /*break*/, 7];
                        case "vsc:VscArrowBoth": return [3 /*break*/, 9];
                        case "vsc:VscArrowCircleDown": return [3 /*break*/, 11];
                        case "vsc:VscArrowCircleLeft": return [3 /*break*/, 13];
                        case "vsc:VscArrowCircleRight": return [3 /*break*/, 15];
                        case "vsc:VscArrowCircleUp": return [3 /*break*/, 17];
                        case "vsc:VscArrowDown": return [3 /*break*/, 19];
                        case "vsc:VscArrowLeft": return [3 /*break*/, 21];
                        case "vsc:VscArrowRight": return [3 /*break*/, 23];
                        case "vsc:VscArrowSmallDown": return [3 /*break*/, 25];
                        case "vsc:VscArrowSmallLeft": return [3 /*break*/, 27];
                        case "vsc:VscArrowSmallRight": return [3 /*break*/, 29];
                        case "vsc:VscArrowSmallUp": return [3 /*break*/, 31];
                        case "vsc:VscArrowSwap": return [3 /*break*/, 33];
                        case "vsc:VscArrowUp": return [3 /*break*/, 35];
                        case "vsc:VscAttach": return [3 /*break*/, 37];
                        case "vsc:VscAzureDevops": return [3 /*break*/, 39];
                        case "vsc:VscAzure": return [3 /*break*/, 41];
                        case "vsc:VscBeakerStop": return [3 /*break*/, 43];
                        case "vsc:VscBeaker": return [3 /*break*/, 45];
                        case "vsc:VscBellDot": return [3 /*break*/, 47];
                        case "vsc:VscBellSlashDot": return [3 /*break*/, 49];
                        case "vsc:VscBellSlash": return [3 /*break*/, 51];
                        case "vsc:VscBell": return [3 /*break*/, 53];
                        case "vsc:VscBlank": return [3 /*break*/, 55];
                        case "vsc:VscBold": return [3 /*break*/, 57];
                        case "vsc:VscBook": return [3 /*break*/, 59];
                        case "vsc:VscBookmark": return [3 /*break*/, 61];
                        case "vsc:VscBracketDot": return [3 /*break*/, 63];
                        case "vsc:VscBracketError": return [3 /*break*/, 65];
                        case "vsc:VscBriefcase": return [3 /*break*/, 67];
                        case "vsc:VscBroadcast": return [3 /*break*/, 69];
                        case "vsc:VscBrowser": return [3 /*break*/, 71];
                        case "vsc:VscBug": return [3 /*break*/, 73];
                        case "vsc:VscCalendar": return [3 /*break*/, 75];
                        case "vsc:VscCallIncoming": return [3 /*break*/, 77];
                        case "vsc:VscCallOutgoing": return [3 /*break*/, 79];
                        case "vsc:VscCaseSensitive": return [3 /*break*/, 81];
                        case "vsc:VscCheckAll": return [3 /*break*/, 83];
                        case "vsc:VscCheck": return [3 /*break*/, 85];
                        case "vsc:VscChecklist": return [3 /*break*/, 87];
                        case "vsc:VscChevronDown": return [3 /*break*/, 89];
                        case "vsc:VscChevronLeft": return [3 /*break*/, 91];
                        case "vsc:VscChevronRight": return [3 /*break*/, 93];
                        case "vsc:VscChevronUp": return [3 /*break*/, 95];
                        case "vsc:VscChip": return [3 /*break*/, 97];
                        case "vsc:VscChromeClose": return [3 /*break*/, 99];
                        case "vsc:VscChromeMaximize": return [3 /*break*/, 101];
                        case "vsc:VscChromeMinimize": return [3 /*break*/, 103];
                        case "vsc:VscChromeRestore": return [3 /*break*/, 105];
                        case "vsc:VscCircleFilled": return [3 /*break*/, 107];
                        case "vsc:VscCircleLargeFilled": return [3 /*break*/, 109];
                        case "vsc:VscCircleLarge": return [3 /*break*/, 111];
                        case "vsc:VscCircleSlash": return [3 /*break*/, 113];
                        case "vsc:VscCircleSmallFilled": return [3 /*break*/, 115];
                        case "vsc:VscCircleSmall": return [3 /*break*/, 117];
                        case "vsc:VscCircle": return [3 /*break*/, 119];
                        case "vsc:VscCircuitBoard": return [3 /*break*/, 121];
                        case "vsc:VscClearAll": return [3 /*break*/, 123];
                        case "vsc:VscClippy": return [3 /*break*/, 125];
                        case "vsc:VscCloseAll": return [3 /*break*/, 127];
                        case "vsc:VscClose": return [3 /*break*/, 129];
                        case "vsc:VscCloudDownload": return [3 /*break*/, 131];
                        case "vsc:VscCloudUpload": return [3 /*break*/, 133];
                        case "vsc:VscCloud": return [3 /*break*/, 135];
                        case "vsc:VscCodeOss": return [3 /*break*/, 137];
                        case "vsc:VscCodeReview": return [3 /*break*/, 139];
                        case "vsc:VscCode": return [3 /*break*/, 141];
                        case "vsc:VscCoffee": return [3 /*break*/, 143];
                        case "vsc:VscCollapseAll": return [3 /*break*/, 145];
                        case "vsc:VscColorMode": return [3 /*break*/, 147];
                        case "vsc:VscCombine": return [3 /*break*/, 149];
                        case "vsc:VscCommentDiscussion": return [3 /*break*/, 151];
                        case "vsc:VscCommentDraft": return [3 /*break*/, 153];
                        case "vsc:VscCommentUnresolved": return [3 /*break*/, 155];
                        case "vsc:VscComment": return [3 /*break*/, 157];
                        case "vsc:VscCompassActive": return [3 /*break*/, 159];
                        case "vsc:VscCompassDot": return [3 /*break*/, 161];
                        case "vsc:VscCompass": return [3 /*break*/, 163];
                        case "vsc:VscCopilotWarning": return [3 /*break*/, 165];
                        case "vsc:VscCopilot": return [3 /*break*/, 167];
                        case "vsc:VscCopy": return [3 /*break*/, 169];
                        case "vsc:VscCoverage": return [3 /*break*/, 171];
                        case "vsc:VscCreditCard": return [3 /*break*/, 173];
                        case "vsc:VscDash": return [3 /*break*/, 175];
                        case "vsc:VscDashboard": return [3 /*break*/, 177];
                        case "vsc:VscDatabase": return [3 /*break*/, 179];
                        case "vsc:VscDebugAll": return [3 /*break*/, 181];
                        case "vsc:VscDebugAltSmall": return [3 /*break*/, 183];
                        case "vsc:VscDebugAlt": return [3 /*break*/, 185];
                        case "vsc:VscDebugBreakpointConditionalUnverified": return [3 /*break*/, 187];
                        case "vsc:VscDebugBreakpointConditional": return [3 /*break*/, 189];
                        case "vsc:VscDebugBreakpointDataUnverified": return [3 /*break*/, 191];
                        case "vsc:VscDebugBreakpointData": return [3 /*break*/, 193];
                        case "vsc:VscDebugBreakpointFunctionUnverified": return [3 /*break*/, 195];
                        case "vsc:VscDebugBreakpointFunction": return [3 /*break*/, 197];
                        case "vsc:VscDebugBreakpointLogUnverified": return [3 /*break*/, 199];
                        case "vsc:VscDebugBreakpointLog": return [3 /*break*/, 201];
                        case "vsc:VscDebugBreakpointUnsupported": return [3 /*break*/, 203];
                        case "vsc:VscDebugConsole": return [3 /*break*/, 205];
                        case "vsc:VscDebugContinueSmall": return [3 /*break*/, 207];
                        case "vsc:VscDebugContinue": return [3 /*break*/, 209];
                        case "vsc:VscDebugCoverage": return [3 /*break*/, 211];
                        case "vsc:VscDebugDisconnect": return [3 /*break*/, 213];
                        case "vsc:VscDebugLineByLine": return [3 /*break*/, 215];
                        case "vsc:VscDebugPause": return [3 /*break*/, 217];
                        case "vsc:VscDebugRerun": return [3 /*break*/, 219];
                        case "vsc:VscDebugRestartFrame": return [3 /*break*/, 221];
                        case "vsc:VscDebugRestart": return [3 /*break*/, 223];
                        case "vsc:VscDebugReverseContinue": return [3 /*break*/, 225];
                        case "vsc:VscDebugStackframeActive": return [3 /*break*/, 227];
                        case "vsc:VscDebugStackframe": return [3 /*break*/, 229];
                        case "vsc:VscDebugStart": return [3 /*break*/, 231];
                        case "vsc:VscDebugStepBack": return [3 /*break*/, 233];
                        case "vsc:VscDebugStepInto": return [3 /*break*/, 235];
                        case "vsc:VscDebugStepOut": return [3 /*break*/, 237];
                        case "vsc:VscDebugStepOver": return [3 /*break*/, 239];
                        case "vsc:VscDebugStop": return [3 /*break*/, 241];
                        case "vsc:VscDebug": return [3 /*break*/, 243];
                        case "vsc:VscDesktopDownload": return [3 /*break*/, 245];
                        case "vsc:VscDeviceCameraVideo": return [3 /*break*/, 247];
                        case "vsc:VscDeviceCamera": return [3 /*break*/, 249];
                        case "vsc:VscDeviceMobile": return [3 /*break*/, 251];
                        case "vsc:VscDiffAdded": return [3 /*break*/, 253];
                        case "vsc:VscDiffIgnored": return [3 /*break*/, 255];
                        case "vsc:VscDiffModified": return [3 /*break*/, 257];
                        case "vsc:VscDiffMultiple": return [3 /*break*/, 259];
                        case "vsc:VscDiffRemoved": return [3 /*break*/, 261];
                        case "vsc:VscDiffRenamed": return [3 /*break*/, 263];
                        case "vsc:VscDiffSingle": return [3 /*break*/, 265];
                        case "vsc:VscDiff": return [3 /*break*/, 267];
                        case "vsc:VscDiscard": return [3 /*break*/, 269];
                        case "vsc:VscEditSession": return [3 /*break*/, 271];
                        case "vsc:VscEdit": return [3 /*break*/, 273];
                        case "vsc:VscEditorLayout": return [3 /*break*/, 275];
                        case "vsc:VscEllipsis": return [3 /*break*/, 277];
                        case "vsc:VscEmptyWindow": return [3 /*break*/, 279];
                        case "vsc:VscErrorSmall": return [3 /*break*/, 281];
                        case "vsc:VscError": return [3 /*break*/, 283];
                        case "vsc:VscExclude": return [3 /*break*/, 285];
                        case "vsc:VscExpandAll": return [3 /*break*/, 287];
                        case "vsc:VscExport": return [3 /*break*/, 289];
                        case "vsc:VscExtensions": return [3 /*break*/, 291];
                        case "vsc:VscEyeClosed": return [3 /*break*/, 293];
                        case "vsc:VscEye": return [3 /*break*/, 295];
                        case "vsc:VscFeedback": return [3 /*break*/, 297];
                        case "vsc:VscFileBinary": return [3 /*break*/, 299];
                        case "vsc:VscFileCode": return [3 /*break*/, 301];
                        case "vsc:VscFileMedia": return [3 /*break*/, 303];
                        case "vsc:VscFilePdf": return [3 /*break*/, 305];
                        case "vsc:VscFileSubmodule": return [3 /*break*/, 307];
                        case "vsc:VscFileSymlinkDirectory": return [3 /*break*/, 309];
                        case "vsc:VscFileSymlinkFile": return [3 /*break*/, 311];
                        case "vsc:VscFileZip": return [3 /*break*/, 313];
                        case "vsc:VscFile": return [3 /*break*/, 315];
                        case "vsc:VscFiles": return [3 /*break*/, 317];
                        case "vsc:VscFilterFilled": return [3 /*break*/, 319];
                        case "vsc:VscFilter": return [3 /*break*/, 321];
                        case "vsc:VscFlame": return [3 /*break*/, 323];
                        case "vsc:VscFoldDown": return [3 /*break*/, 325];
                        case "vsc:VscFoldUp": return [3 /*break*/, 327];
                        case "vsc:VscFold": return [3 /*break*/, 329];
                        case "vsc:VscFolderActive": return [3 /*break*/, 331];
                        case "vsc:VscFolderLibrary": return [3 /*break*/, 333];
                        case "vsc:VscFolderOpened": return [3 /*break*/, 335];
                        case "vsc:VscFolder": return [3 /*break*/, 337];
                        case "vsc:VscGame": return [3 /*break*/, 339];
                        case "vsc:VscGear": return [3 /*break*/, 341];
                        case "vsc:VscGift": return [3 /*break*/, 343];
                        case "vsc:VscGistSecret": return [3 /*break*/, 345];
                        case "vsc:VscGist": return [3 /*break*/, 347];
                        case "vsc:VscGitCommit": return [3 /*break*/, 349];
                        case "vsc:VscGitCompare": return [3 /*break*/, 351];
                        case "vsc:VscGitFetch": return [3 /*break*/, 353];
                        case "vsc:VscGitMerge": return [3 /*break*/, 355];
                        case "vsc:VscGitPullRequestClosed": return [3 /*break*/, 357];
                        case "vsc:VscGitPullRequestCreate": return [3 /*break*/, 359];
                        case "vsc:VscGitPullRequestDraft": return [3 /*break*/, 361];
                        case "vsc:VscGitPullRequestGoToChanges": return [3 /*break*/, 363];
                        case "vsc:VscGitPullRequestNewChanges": return [3 /*break*/, 365];
                        case "vsc:VscGitPullRequest": return [3 /*break*/, 367];
                        case "vsc:VscGitStashApply": return [3 /*break*/, 369];
                        case "vsc:VscGitStashPop": return [3 /*break*/, 371];
                        case "vsc:VscGitStash": return [3 /*break*/, 373];
                        case "vsc:VscGithubAction": return [3 /*break*/, 375];
                        case "vsc:VscGithubAlt": return [3 /*break*/, 377];
                        case "vsc:VscGithubInverted": return [3 /*break*/, 379];
                        case "vsc:VscGithubProject": return [3 /*break*/, 381];
                        case "vsc:VscGithub": return [3 /*break*/, 383];
                        case "vsc:VscGlobe": return [3 /*break*/, 385];
                        case "vsc:VscGoToEditingSession": return [3 /*break*/, 387];
                        case "vsc:VscGoToFile": return [3 /*break*/, 389];
                        case "vsc:VscGoToSearch": return [3 /*break*/, 391];
                        case "vsc:VscGrabber": return [3 /*break*/, 393];
                        case "vsc:VscGraphLeft": return [3 /*break*/, 395];
                        case "vsc:VscGraphLine": return [3 /*break*/, 397];
                        case "vsc:VscGraphScatter": return [3 /*break*/, 399];
                        case "vsc:VscGraph": return [3 /*break*/, 401];
                        case "vsc:VscGripper": return [3 /*break*/, 403];
                        case "vsc:VscGroupByRefType": return [3 /*break*/, 405];
                        case "vsc:VscHeartFilled": return [3 /*break*/, 407];
                        case "vsc:VscHeart": return [3 /*break*/, 409];
                        case "vsc:VscHistory": return [3 /*break*/, 411];
                        case "vsc:VscHome": return [3 /*break*/, 413];
                        case "vsc:VscHorizontalRule": return [3 /*break*/, 415];
                        case "vsc:VscHubot": return [3 /*break*/, 417];
                        case "vsc:VscInbox": return [3 /*break*/, 419];
                        case "vsc:VscIndent": return [3 /*break*/, 421];
                        case "vsc:VscInfo": return [3 /*break*/, 423];
                        case "vsc:VscInsert": return [3 /*break*/, 425];
                        case "vsc:VscInspect": return [3 /*break*/, 427];
                        case "vsc:VscIssueDraft": return [3 /*break*/, 429];
                        case "vsc:VscIssueReopened": return [3 /*break*/, 431];
                        case "vsc:VscIssues": return [3 /*break*/, 433];
                        case "vsc:VscItalic": return [3 /*break*/, 435];
                        case "vsc:VscJersey": return [3 /*break*/, 437];
                        case "vsc:VscJson": return [3 /*break*/, 439];
                        case "vsc:VscKebabVertical": return [3 /*break*/, 441];
                        case "vsc:VscKey": return [3 /*break*/, 443];
                        case "vsc:VscLaw": return [3 /*break*/, 445];
                        case "vsc:VscLayersActive": return [3 /*break*/, 447];
                        case "vsc:VscLayersDot": return [3 /*break*/, 449];
                        case "vsc:VscLayers": return [3 /*break*/, 451];
                        case "vsc:VscLayoutActivitybarLeft": return [3 /*break*/, 453];
                        case "vsc:VscLayoutActivitybarRight": return [3 /*break*/, 455];
                        case "vsc:VscLayoutCentered": return [3 /*break*/, 457];
                        case "vsc:VscLayoutMenubar": return [3 /*break*/, 459];
                        case "vsc:VscLayoutPanelCenter": return [3 /*break*/, 461];
                        case "vsc:VscLayoutPanelJustify": return [3 /*break*/, 463];
                        case "vsc:VscLayoutPanelLeft": return [3 /*break*/, 465];
                        case "vsc:VscLayoutPanelOff": return [3 /*break*/, 467];
                        case "vsc:VscLayoutPanelRight": return [3 /*break*/, 469];
                        case "vsc:VscLayoutPanel": return [3 /*break*/, 471];
                        case "vsc:VscLayoutSidebarLeftOff": return [3 /*break*/, 473];
                        case "vsc:VscLayoutSidebarLeft": return [3 /*break*/, 475];
                        case "vsc:VscLayoutSidebarRightOff": return [3 /*break*/, 477];
                        case "vsc:VscLayoutSidebarRight": return [3 /*break*/, 479];
                        case "vsc:VscLayoutStatusbar": return [3 /*break*/, 481];
                        case "vsc:VscLayout": return [3 /*break*/, 483];
                        case "vsc:VscLibrary": return [3 /*break*/, 485];
                        case "vsc:VscLightbulbAutofix": return [3 /*break*/, 487];
                        case "vsc:VscLightbulbSparkle": return [3 /*break*/, 489];
                        case "vsc:VscLightbulb": return [3 /*break*/, 491];
                        case "vsc:VscLinkExternal": return [3 /*break*/, 493];
                        case "vsc:VscLink": return [3 /*break*/, 495];
                        case "vsc:VscListFilter": return [3 /*break*/, 497];
                        case "vsc:VscListFlat": return [3 /*break*/, 499];
                        case "vsc:VscListOrdered": return [3 /*break*/, 501];
                        case "vsc:VscListSelection": return [3 /*break*/, 503];
                        case "vsc:VscListTree": return [3 /*break*/, 505];
                        case "vsc:VscListUnordered": return [3 /*break*/, 507];
                        case "vsc:VscLiveShare": return [3 /*break*/, 509];
                        case "vsc:VscLoading": return [3 /*break*/, 511];
                        case "vsc:VscLocation": return [3 /*break*/, 513];
                        case "vsc:VscLockSmall": return [3 /*break*/, 515];
                        case "vsc:VscLock": return [3 /*break*/, 517];
                        case "vsc:VscMagnet": return [3 /*break*/, 519];
                        case "vsc:VscMailRead": return [3 /*break*/, 521];
                        case "vsc:VscMail": return [3 /*break*/, 523];
                        case "vsc:VscMapFilled": return [3 /*break*/, 525];
                        case "vsc:VscMapVerticalFilled": return [3 /*break*/, 527];
                        case "vsc:VscMapVertical": return [3 /*break*/, 529];
                        case "vsc:VscMap": return [3 /*break*/, 531];
                        case "vsc:VscMarkdown": return [3 /*break*/, 533];
                        case "vsc:VscMegaphone": return [3 /*break*/, 535];
                        case "vsc:VscMention": return [3 /*break*/, 537];
                        case "vsc:VscMenu": return [3 /*break*/, 539];
                        case "vsc:VscMerge": return [3 /*break*/, 541];
                        case "vsc:VscMicFilled": return [3 /*break*/, 543];
                        case "vsc:VscMic": return [3 /*break*/, 545];
                        case "vsc:VscMilestone": return [3 /*break*/, 547];
                        case "vsc:VscMirror": return [3 /*break*/, 549];
                        case "vsc:VscMortarBoard": return [3 /*break*/, 551];
                        case "vsc:VscMove": return [3 /*break*/, 553];
                        case "vsc:VscMultipleWindows": return [3 /*break*/, 555];
                        case "vsc:VscMusic": return [3 /*break*/, 557];
                        case "vsc:VscMute": return [3 /*break*/, 559];
                        case "vsc:VscNewFile": return [3 /*break*/, 561];
                        case "vsc:VscNewFolder": return [3 /*break*/, 563];
                        case "vsc:VscNewline": return [3 /*break*/, 565];
                        case "vsc:VscNoNewline": return [3 /*break*/, 567];
                        case "vsc:VscNote": return [3 /*break*/, 569];
                        case "vsc:VscNotebookTemplate": return [3 /*break*/, 571];
                        case "vsc:VscNotebook": return [3 /*break*/, 573];
                        case "vsc:VscOctoface": return [3 /*break*/, 575];
                        case "vsc:VscOpenPreview": return [3 /*break*/, 577];
                        case "vsc:VscOrganization": return [3 /*break*/, 579];
                        case "vsc:VscOutput": return [3 /*break*/, 581];
                        case "vsc:VscPackage": return [3 /*break*/, 583];
                        case "vsc:VscPaintcan": return [3 /*break*/, 585];
                        case "vsc:VscPassFilled": return [3 /*break*/, 587];
                        case "vsc:VscPass": return [3 /*break*/, 589];
                        case "vsc:VscPercentage": return [3 /*break*/, 591];
                        case "vsc:VscPersonAdd": return [3 /*break*/, 593];
                        case "vsc:VscPerson": return [3 /*break*/, 595];
                        case "vsc:VscPiano": return [3 /*break*/, 597];
                        case "vsc:VscPieChart": return [3 /*break*/, 599];
                        case "vsc:VscPin": return [3 /*break*/, 601];
                        case "vsc:VscPinnedDirty": return [3 /*break*/, 603];
                        case "vsc:VscPinned": return [3 /*break*/, 605];
                        case "vsc:VscPlayCircle": return [3 /*break*/, 607];
                        case "vsc:VscPlay": return [3 /*break*/, 609];
                        case "vsc:VscPlug": return [3 /*break*/, 611];
                        case "vsc:VscPreserveCase": return [3 /*break*/, 613];
                        case "vsc:VscPreview": return [3 /*break*/, 615];
                        case "vsc:VscPrimitiveSquare": return [3 /*break*/, 617];
                        case "vsc:VscProject": return [3 /*break*/, 619];
                        case "vsc:VscPulse": return [3 /*break*/, 621];
                        case "vsc:VscQuestion": return [3 /*break*/, 623];
                        case "vsc:VscQuote": return [3 /*break*/, 625];
                        case "vsc:VscRadioTower": return [3 /*break*/, 627];
                        case "vsc:VscReactions": return [3 /*break*/, 629];
                        case "vsc:VscRecordKeys": return [3 /*break*/, 631];
                        case "vsc:VscRecordSmall": return [3 /*break*/, 633];
                        case "vsc:VscRecord": return [3 /*break*/, 635];
                        case "vsc:VscRedo": return [3 /*break*/, 637];
                        case "vsc:VscReferences": return [3 /*break*/, 639];
                        case "vsc:VscRefresh": return [3 /*break*/, 641];
                        case "vsc:VscRegex": return [3 /*break*/, 643];
                        case "vsc:VscRemoteExplorer": return [3 /*break*/, 645];
                        case "vsc:VscRemote": return [3 /*break*/, 647];
                        case "vsc:VscRemove": return [3 /*break*/, 649];
                        case "vsc:VscReplaceAll": return [3 /*break*/, 651];
                        case "vsc:VscReplace": return [3 /*break*/, 653];
                        case "vsc:VscReply": return [3 /*break*/, 655];
                        case "vsc:VscRepoClone": return [3 /*break*/, 657];
                        case "vsc:VscRepoFetch": return [3 /*break*/, 659];
                        case "vsc:VscRepoForcePush": return [3 /*break*/, 661];
                        case "vsc:VscRepoForked": return [3 /*break*/, 663];
                        case "vsc:VscRepoPull": return [3 /*break*/, 665];
                        case "vsc:VscRepoPush": return [3 /*break*/, 667];
                        case "vsc:VscRepo": return [3 /*break*/, 669];
                        case "vsc:VscReport": return [3 /*break*/, 671];
                        case "vsc:VscRequestChanges": return [3 /*break*/, 673];
                        case "vsc:VscRobot": return [3 /*break*/, 675];
                        case "vsc:VscRocket": return [3 /*break*/, 677];
                        case "vsc:VscRootFolderOpened": return [3 /*break*/, 679];
                        case "vsc:VscRootFolder": return [3 /*break*/, 681];
                        case "vsc:VscRss": return [3 /*break*/, 683];
                        case "vsc:VscRuby": return [3 /*break*/, 685];
                        case "vsc:VscRunAbove": return [3 /*break*/, 687];
                        case "vsc:VscRunAllCoverage": return [3 /*break*/, 689];
                        case "vsc:VscRunAll": return [3 /*break*/, 691];
                        case "vsc:VscRunBelow": return [3 /*break*/, 693];
                        case "vsc:VscRunCoverage": return [3 /*break*/, 695];
                        case "vsc:VscRunErrors": return [3 /*break*/, 697];
                        case "vsc:VscSaveAll": return [3 /*break*/, 699];
                        case "vsc:VscSaveAs": return [3 /*break*/, 701];
                        case "vsc:VscSave": return [3 /*break*/, 703];
                        case "vsc:VscScreenFull": return [3 /*break*/, 705];
                        case "vsc:VscScreenNormal": return [3 /*break*/, 707];
                        case "vsc:VscSearchFuzzy": return [3 /*break*/, 709];
                        case "vsc:VscSearchStop": return [3 /*break*/, 711];
                        case "vsc:VscSearch": return [3 /*break*/, 713];
                        case "vsc:VscSend": return [3 /*break*/, 715];
                        case "vsc:VscServerEnvironment": return [3 /*break*/, 717];
                        case "vsc:VscServerProcess": return [3 /*break*/, 719];
                        case "vsc:VscServer": return [3 /*break*/, 721];
                        case "vsc:VscSettingsGear": return [3 /*break*/, 723];
                        case "vsc:VscSettings": return [3 /*break*/, 725];
                        case "vsc:VscShare": return [3 /*break*/, 727];
                        case "vsc:VscShield": return [3 /*break*/, 729];
                        case "vsc:VscSignIn": return [3 /*break*/, 731];
                        case "vsc:VscSignOut": return [3 /*break*/, 733];
                        case "vsc:VscSmiley": return [3 /*break*/, 735];
                        case "vsc:VscSnake": return [3 /*break*/, 737];
                        case "vsc:VscSortPrecedence": return [3 /*break*/, 739];
                        case "vsc:VscSourceControl": return [3 /*break*/, 741];
                        case "vsc:VscSparkleFilled": return [3 /*break*/, 743];
                        case "vsc:VscSparkle": return [3 /*break*/, 745];
                        case "vsc:VscSplitHorizontal": return [3 /*break*/, 747];
                        case "vsc:VscSplitVertical": return [3 /*break*/, 749];
                        case "vsc:VscSquirrel": return [3 /*break*/, 751];
                        case "vsc:VscStarEmpty": return [3 /*break*/, 753];
                        case "vsc:VscStarFull": return [3 /*break*/, 755];
                        case "vsc:VscStarHalf": return [3 /*break*/, 757];
                        case "vsc:VscStopCircle": return [3 /*break*/, 759];
                        case "vsc:VscSurroundWith": return [3 /*break*/, 761];
                        case "vsc:VscSymbolArray": return [3 /*break*/, 763];
                        case "vsc:VscSymbolBoolean": return [3 /*break*/, 765];
                        case "vsc:VscSymbolClass": return [3 /*break*/, 767];
                        case "vsc:VscSymbolColor": return [3 /*break*/, 769];
                        case "vsc:VscSymbolConstant": return [3 /*break*/, 771];
                        case "vsc:VscSymbolEnumMember": return [3 /*break*/, 773];
                        case "vsc:VscSymbolEnum": return [3 /*break*/, 775];
                        case "vsc:VscSymbolEvent": return [3 /*break*/, 777];
                        case "vsc:VscSymbolField": return [3 /*break*/, 779];
                        case "vsc:VscSymbolFile": return [3 /*break*/, 781];
                        case "vsc:VscSymbolInterface": return [3 /*break*/, 783];
                        case "vsc:VscSymbolKey": return [3 /*break*/, 785];
                        case "vsc:VscSymbolKeyword": return [3 /*break*/, 787];
                        case "vsc:VscSymbolMethod": return [3 /*break*/, 789];
                        case "vsc:VscSymbolMisc": return [3 /*break*/, 791];
                        case "vsc:VscSymbolNamespace": return [3 /*break*/, 793];
                        case "vsc:VscSymbolNumeric": return [3 /*break*/, 795];
                        case "vsc:VscSymbolOperator": return [3 /*break*/, 797];
                        case "vsc:VscSymbolParameter": return [3 /*break*/, 799];
                        case "vsc:VscSymbolProperty": return [3 /*break*/, 801];
                        case "vsc:VscSymbolRuler": return [3 /*break*/, 803];
                        case "vsc:VscSymbolSnippet": return [3 /*break*/, 805];
                        case "vsc:VscSymbolString": return [3 /*break*/, 807];
                        case "vsc:VscSymbolStructure": return [3 /*break*/, 809];
                        case "vsc:VscSymbolVariable": return [3 /*break*/, 811];
                        case "vsc:VscSyncIgnored": return [3 /*break*/, 813];
                        case "vsc:VscSync": return [3 /*break*/, 815];
                        case "vsc:VscTable": return [3 /*break*/, 817];
                        case "vsc:VscTag": return [3 /*break*/, 819];
                        case "vsc:VscTarget": return [3 /*break*/, 821];
                        case "vsc:VscTasklist": return [3 /*break*/, 823];
                        case "vsc:VscTelescope": return [3 /*break*/, 825];
                        case "vsc:VscTerminalBash": return [3 /*break*/, 827];
                        case "vsc:VscTerminalCmd": return [3 /*break*/, 829];
                        case "vsc:VscTerminalDebian": return [3 /*break*/, 831];
                        case "vsc:VscTerminalLinux": return [3 /*break*/, 833];
                        case "vsc:VscTerminalPowershell": return [3 /*break*/, 835];
                        case "vsc:VscTerminalTmux": return [3 /*break*/, 837];
                        case "vsc:VscTerminalUbuntu": return [3 /*break*/, 839];
                        case "vsc:VscTerminal": return [3 /*break*/, 841];
                        case "vsc:VscTextSize": return [3 /*break*/, 843];
                        case "vsc:VscThreeBars": return [3 /*break*/, 845];
                        case "vsc:VscThumbsdownFilled": return [3 /*break*/, 847];
                        case "vsc:VscThumbsdown": return [3 /*break*/, 849];
                        case "vsc:VscThumbsupFilled": return [3 /*break*/, 851];
                        case "vsc:VscThumbsup": return [3 /*break*/, 853];
                        case "vsc:VscTools": return [3 /*break*/, 855];
                        case "vsc:VscTrash": return [3 /*break*/, 857];
                        case "vsc:VscTriangleDown": return [3 /*break*/, 859];
                        case "vsc:VscTriangleLeft": return [3 /*break*/, 861];
                        case "vsc:VscTriangleRight": return [3 /*break*/, 863];
                        case "vsc:VscTriangleUp": return [3 /*break*/, 865];
                        case "vsc:VscTwitter": return [3 /*break*/, 867];
                        case "vsc:VscTypeHierarchySub": return [3 /*break*/, 869];
                        case "vsc:VscTypeHierarchySuper": return [3 /*break*/, 871];
                        case "vsc:VscTypeHierarchy": return [3 /*break*/, 873];
                        case "vsc:VscUnfold": return [3 /*break*/, 875];
                        case "vsc:VscUngroupByRefType": return [3 /*break*/, 877];
                        case "vsc:VscUnlock": return [3 /*break*/, 879];
                        case "vsc:VscUnmute": return [3 /*break*/, 881];
                        case "vsc:VscUnverified": return [3 /*break*/, 883];
                        case "vsc:VscVariableGroup": return [3 /*break*/, 885];
                        case "vsc:VscVerifiedFilled": return [3 /*break*/, 887];
                        case "vsc:VscVerified": return [3 /*break*/, 889];
                        case "vsc:VscVersions": return [3 /*break*/, 891];
                        case "vsc:VscVmActive": return [3 /*break*/, 893];
                        case "vsc:VscVmConnect": return [3 /*break*/, 895];
                        case "vsc:VscVmOutline": return [3 /*break*/, 897];
                        case "vsc:VscVmRunning": return [3 /*break*/, 899];
                        case "vsc:VscVm": return [3 /*break*/, 901];
                        case "vsc:VscVr": return [3 /*break*/, 903];
                        case "vsc:VscVscodeInsiders": return [3 /*break*/, 905];
                        case "vsc:VscVscode": return [3 /*break*/, 907];
                        case "vsc:VscWand": return [3 /*break*/, 909];
                        case "vsc:VscWarning": return [3 /*break*/, 911];
                        case "vsc:VscWatch": return [3 /*break*/, 913];
                        case "vsc:VscWhitespace": return [3 /*break*/, 915];
                        case "vsc:VscWholeWord": return [3 /*break*/, 917];
                        case "vsc:VscWindow": return [3 /*break*/, 919];
                        case "vsc:VscWordWrap": return [3 /*break*/, 921];
                        case "vsc:VscWorkspaceTrusted": return [3 /*break*/, 923];
                        case "vsc:VscWorkspaceUnknown": return [3 /*break*/, 925];
                        case "vsc:VscWorkspaceUntrusted": return [3 /*break*/, 927];
                        case "vsc:VscZoomIn": return [3 /*break*/, 929];
                        case "vsc:VscZoomOut": return [3 /*break*/, 931];
                    }
                    return [3 /*break*/, 933];
                case 1: return [4 /*yield*/, import("react-icons/vsc")];
                case 2:
                    VscAccount = (_b.sent()).VscAccount;
                    return [2 /*return*/, VscAccount];
                case 3: return [4 /*yield*/, import("react-icons/vsc")];
                case 4:
                    VscActivateBreakpoints = (_b.sent()).VscActivateBreakpoints;
                    return [2 /*return*/, VscActivateBreakpoints];
                case 5: return [4 /*yield*/, import("react-icons/vsc")];
                case 6:
                    VscAdd = (_b.sent()).VscAdd;
                    return [2 /*return*/, VscAdd];
                case 7: return [4 /*yield*/, import("react-icons/vsc")];
                case 8:
                    VscArchive = (_b.sent()).VscArchive;
                    return [2 /*return*/, VscArchive];
                case 9: return [4 /*yield*/, import("react-icons/vsc")];
                case 10:
                    VscArrowBoth = (_b.sent()).VscArrowBoth;
                    return [2 /*return*/, VscArrowBoth];
                case 11: return [4 /*yield*/, import("react-icons/vsc")];
                case 12:
                    VscArrowCircleDown = (_b.sent()).VscArrowCircleDown;
                    return [2 /*return*/, VscArrowCircleDown];
                case 13: return [4 /*yield*/, import("react-icons/vsc")];
                case 14:
                    VscArrowCircleLeft = (_b.sent()).VscArrowCircleLeft;
                    return [2 /*return*/, VscArrowCircleLeft];
                case 15: return [4 /*yield*/, import("react-icons/vsc")];
                case 16:
                    VscArrowCircleRight = (_b.sent()).VscArrowCircleRight;
                    return [2 /*return*/, VscArrowCircleRight];
                case 17: return [4 /*yield*/, import("react-icons/vsc")];
                case 18:
                    VscArrowCircleUp = (_b.sent()).VscArrowCircleUp;
                    return [2 /*return*/, VscArrowCircleUp];
                case 19: return [4 /*yield*/, import("react-icons/vsc")];
                case 20:
                    VscArrowDown = (_b.sent()).VscArrowDown;
                    return [2 /*return*/, VscArrowDown];
                case 21: return [4 /*yield*/, import("react-icons/vsc")];
                case 22:
                    VscArrowLeft = (_b.sent()).VscArrowLeft;
                    return [2 /*return*/, VscArrowLeft];
                case 23: return [4 /*yield*/, import("react-icons/vsc")];
                case 24:
                    VscArrowRight = (_b.sent()).VscArrowRight;
                    return [2 /*return*/, VscArrowRight];
                case 25: return [4 /*yield*/, import("react-icons/vsc")];
                case 26:
                    VscArrowSmallDown = (_b.sent()).VscArrowSmallDown;
                    return [2 /*return*/, VscArrowSmallDown];
                case 27: return [4 /*yield*/, import("react-icons/vsc")];
                case 28:
                    VscArrowSmallLeft = (_b.sent()).VscArrowSmallLeft;
                    return [2 /*return*/, VscArrowSmallLeft];
                case 29: return [4 /*yield*/, import("react-icons/vsc")];
                case 30:
                    VscArrowSmallRight = (_b.sent()).VscArrowSmallRight;
                    return [2 /*return*/, VscArrowSmallRight];
                case 31: return [4 /*yield*/, import("react-icons/vsc")];
                case 32:
                    VscArrowSmallUp = (_b.sent()).VscArrowSmallUp;
                    return [2 /*return*/, VscArrowSmallUp];
                case 33: return [4 /*yield*/, import("react-icons/vsc")];
                case 34:
                    VscArrowSwap = (_b.sent()).VscArrowSwap;
                    return [2 /*return*/, VscArrowSwap];
                case 35: return [4 /*yield*/, import("react-icons/vsc")];
                case 36:
                    VscArrowUp = (_b.sent()).VscArrowUp;
                    return [2 /*return*/, VscArrowUp];
                case 37: return [4 /*yield*/, import("react-icons/vsc")];
                case 38:
                    VscAttach = (_b.sent()).VscAttach;
                    return [2 /*return*/, VscAttach];
                case 39: return [4 /*yield*/, import("react-icons/vsc")];
                case 40:
                    VscAzureDevops = (_b.sent()).VscAzureDevops;
                    return [2 /*return*/, VscAzureDevops];
                case 41: return [4 /*yield*/, import("react-icons/vsc")];
                case 42:
                    VscAzure = (_b.sent()).VscAzure;
                    return [2 /*return*/, VscAzure];
                case 43: return [4 /*yield*/, import("react-icons/vsc")];
                case 44:
                    VscBeakerStop = (_b.sent()).VscBeakerStop;
                    return [2 /*return*/, VscBeakerStop];
                case 45: return [4 /*yield*/, import("react-icons/vsc")];
                case 46:
                    VscBeaker = (_b.sent()).VscBeaker;
                    return [2 /*return*/, VscBeaker];
                case 47: return [4 /*yield*/, import("react-icons/vsc")];
                case 48:
                    VscBellDot = (_b.sent()).VscBellDot;
                    return [2 /*return*/, VscBellDot];
                case 49: return [4 /*yield*/, import("react-icons/vsc")];
                case 50:
                    VscBellSlashDot = (_b.sent()).VscBellSlashDot;
                    return [2 /*return*/, VscBellSlashDot];
                case 51: return [4 /*yield*/, import("react-icons/vsc")];
                case 52:
                    VscBellSlash = (_b.sent()).VscBellSlash;
                    return [2 /*return*/, VscBellSlash];
                case 53: return [4 /*yield*/, import("react-icons/vsc")];
                case 54:
                    VscBell = (_b.sent()).VscBell;
                    return [2 /*return*/, VscBell];
                case 55: return [4 /*yield*/, import("react-icons/vsc")];
                case 56:
                    VscBlank = (_b.sent()).VscBlank;
                    return [2 /*return*/, VscBlank];
                case 57: return [4 /*yield*/, import("react-icons/vsc")];
                case 58:
                    VscBold = (_b.sent()).VscBold;
                    return [2 /*return*/, VscBold];
                case 59: return [4 /*yield*/, import("react-icons/vsc")];
                case 60:
                    VscBook = (_b.sent()).VscBook;
                    return [2 /*return*/, VscBook];
                case 61: return [4 /*yield*/, import("react-icons/vsc")];
                case 62:
                    VscBookmark = (_b.sent()).VscBookmark;
                    return [2 /*return*/, VscBookmark];
                case 63: return [4 /*yield*/, import("react-icons/vsc")];
                case 64:
                    VscBracketDot = (_b.sent()).VscBracketDot;
                    return [2 /*return*/, VscBracketDot];
                case 65: return [4 /*yield*/, import("react-icons/vsc")];
                case 66:
                    VscBracketError = (_b.sent()).VscBracketError;
                    return [2 /*return*/, VscBracketError];
                case 67: return [4 /*yield*/, import("react-icons/vsc")];
                case 68:
                    VscBriefcase = (_b.sent()).VscBriefcase;
                    return [2 /*return*/, VscBriefcase];
                case 69: return [4 /*yield*/, import("react-icons/vsc")];
                case 70:
                    VscBroadcast = (_b.sent()).VscBroadcast;
                    return [2 /*return*/, VscBroadcast];
                case 71: return [4 /*yield*/, import("react-icons/vsc")];
                case 72:
                    VscBrowser = (_b.sent()).VscBrowser;
                    return [2 /*return*/, VscBrowser];
                case 73: return [4 /*yield*/, import("react-icons/vsc")];
                case 74:
                    VscBug = (_b.sent()).VscBug;
                    return [2 /*return*/, VscBug];
                case 75: return [4 /*yield*/, import("react-icons/vsc")];
                case 76:
                    VscCalendar = (_b.sent()).VscCalendar;
                    return [2 /*return*/, VscCalendar];
                case 77: return [4 /*yield*/, import("react-icons/vsc")];
                case 78:
                    VscCallIncoming = (_b.sent()).VscCallIncoming;
                    return [2 /*return*/, VscCallIncoming];
                case 79: return [4 /*yield*/, import("react-icons/vsc")];
                case 80:
                    VscCallOutgoing = (_b.sent()).VscCallOutgoing;
                    return [2 /*return*/, VscCallOutgoing];
                case 81: return [4 /*yield*/, import("react-icons/vsc")];
                case 82:
                    VscCaseSensitive = (_b.sent()).VscCaseSensitive;
                    return [2 /*return*/, VscCaseSensitive];
                case 83: return [4 /*yield*/, import("react-icons/vsc")];
                case 84:
                    VscCheckAll = (_b.sent()).VscCheckAll;
                    return [2 /*return*/, VscCheckAll];
                case 85: return [4 /*yield*/, import("react-icons/vsc")];
                case 86:
                    VscCheck = (_b.sent()).VscCheck;
                    return [2 /*return*/, VscCheck];
                case 87: return [4 /*yield*/, import("react-icons/vsc")];
                case 88:
                    VscChecklist = (_b.sent()).VscChecklist;
                    return [2 /*return*/, VscChecklist];
                case 89: return [4 /*yield*/, import("react-icons/vsc")];
                case 90:
                    VscChevronDown = (_b.sent()).VscChevronDown;
                    return [2 /*return*/, VscChevronDown];
                case 91: return [4 /*yield*/, import("react-icons/vsc")];
                case 92:
                    VscChevronLeft = (_b.sent()).VscChevronLeft;
                    return [2 /*return*/, VscChevronLeft];
                case 93: return [4 /*yield*/, import("react-icons/vsc")];
                case 94:
                    VscChevronRight = (_b.sent()).VscChevronRight;
                    return [2 /*return*/, VscChevronRight];
                case 95: return [4 /*yield*/, import("react-icons/vsc")];
                case 96:
                    VscChevronUp = (_b.sent()).VscChevronUp;
                    return [2 /*return*/, VscChevronUp];
                case 97: return [4 /*yield*/, import("react-icons/vsc")];
                case 98:
                    VscChip = (_b.sent()).VscChip;
                    return [2 /*return*/, VscChip];
                case 99: return [4 /*yield*/, import("react-icons/vsc")];
                case 100:
                    VscChromeClose = (_b.sent()).VscChromeClose;
                    return [2 /*return*/, VscChromeClose];
                case 101: return [4 /*yield*/, import("react-icons/vsc")];
                case 102:
                    VscChromeMaximize = (_b.sent()).VscChromeMaximize;
                    return [2 /*return*/, VscChromeMaximize];
                case 103: return [4 /*yield*/, import("react-icons/vsc")];
                case 104:
                    VscChromeMinimize = (_b.sent()).VscChromeMinimize;
                    return [2 /*return*/, VscChromeMinimize];
                case 105: return [4 /*yield*/, import("react-icons/vsc")];
                case 106:
                    VscChromeRestore = (_b.sent()).VscChromeRestore;
                    return [2 /*return*/, VscChromeRestore];
                case 107: return [4 /*yield*/, import("react-icons/vsc")];
                case 108:
                    VscCircleFilled = (_b.sent()).VscCircleFilled;
                    return [2 /*return*/, VscCircleFilled];
                case 109: return [4 /*yield*/, import("react-icons/vsc")];
                case 110:
                    VscCircleLargeFilled = (_b.sent()).VscCircleLargeFilled;
                    return [2 /*return*/, VscCircleLargeFilled];
                case 111: return [4 /*yield*/, import("react-icons/vsc")];
                case 112:
                    VscCircleLarge = (_b.sent()).VscCircleLarge;
                    return [2 /*return*/, VscCircleLarge];
                case 113: return [4 /*yield*/, import("react-icons/vsc")];
                case 114:
                    VscCircleSlash = (_b.sent()).VscCircleSlash;
                    return [2 /*return*/, VscCircleSlash];
                case 115: return [4 /*yield*/, import("react-icons/vsc")];
                case 116:
                    VscCircleSmallFilled = (_b.sent()).VscCircleSmallFilled;
                    return [2 /*return*/, VscCircleSmallFilled];
                case 117: return [4 /*yield*/, import("react-icons/vsc")];
                case 118:
                    VscCircleSmall = (_b.sent()).VscCircleSmall;
                    return [2 /*return*/, VscCircleSmall];
                case 119: return [4 /*yield*/, import("react-icons/vsc")];
                case 120:
                    VscCircle = (_b.sent()).VscCircle;
                    return [2 /*return*/, VscCircle];
                case 121: return [4 /*yield*/, import("react-icons/vsc")];
                case 122:
                    VscCircuitBoard = (_b.sent()).VscCircuitBoard;
                    return [2 /*return*/, VscCircuitBoard];
                case 123: return [4 /*yield*/, import("react-icons/vsc")];
                case 124:
                    VscClearAll = (_b.sent()).VscClearAll;
                    return [2 /*return*/, VscClearAll];
                case 125: return [4 /*yield*/, import("react-icons/vsc")];
                case 126:
                    VscClippy = (_b.sent()).VscClippy;
                    return [2 /*return*/, VscClippy];
                case 127: return [4 /*yield*/, import("react-icons/vsc")];
                case 128:
                    VscCloseAll = (_b.sent()).VscCloseAll;
                    return [2 /*return*/, VscCloseAll];
                case 129: return [4 /*yield*/, import("react-icons/vsc")];
                case 130:
                    VscClose = (_b.sent()).VscClose;
                    return [2 /*return*/, VscClose];
                case 131: return [4 /*yield*/, import("react-icons/vsc")];
                case 132:
                    VscCloudDownload = (_b.sent()).VscCloudDownload;
                    return [2 /*return*/, VscCloudDownload];
                case 133: return [4 /*yield*/, import("react-icons/vsc")];
                case 134:
                    VscCloudUpload = (_b.sent()).VscCloudUpload;
                    return [2 /*return*/, VscCloudUpload];
                case 135: return [4 /*yield*/, import("react-icons/vsc")];
                case 136:
                    VscCloud = (_b.sent()).VscCloud;
                    return [2 /*return*/, VscCloud];
                case 137: return [4 /*yield*/, import("react-icons/vsc")];
                case 138:
                    VscCodeOss = (_b.sent()).VscCodeOss;
                    return [2 /*return*/, VscCodeOss];
                case 139: return [4 /*yield*/, import("react-icons/vsc")];
                case 140:
                    VscCodeReview = (_b.sent()).VscCodeReview;
                    return [2 /*return*/, VscCodeReview];
                case 141: return [4 /*yield*/, import("react-icons/vsc")];
                case 142:
                    VscCode = (_b.sent()).VscCode;
                    return [2 /*return*/, VscCode];
                case 143: return [4 /*yield*/, import("react-icons/vsc")];
                case 144:
                    VscCoffee = (_b.sent()).VscCoffee;
                    return [2 /*return*/, VscCoffee];
                case 145: return [4 /*yield*/, import("react-icons/vsc")];
                case 146:
                    VscCollapseAll = (_b.sent()).VscCollapseAll;
                    return [2 /*return*/, VscCollapseAll];
                case 147: return [4 /*yield*/, import("react-icons/vsc")];
                case 148:
                    VscColorMode = (_b.sent()).VscColorMode;
                    return [2 /*return*/, VscColorMode];
                case 149: return [4 /*yield*/, import("react-icons/vsc")];
                case 150:
                    VscCombine = (_b.sent()).VscCombine;
                    return [2 /*return*/, VscCombine];
                case 151: return [4 /*yield*/, import("react-icons/vsc")];
                case 152:
                    VscCommentDiscussion = (_b.sent()).VscCommentDiscussion;
                    return [2 /*return*/, VscCommentDiscussion];
                case 153: return [4 /*yield*/, import("react-icons/vsc")];
                case 154:
                    VscCommentDraft = (_b.sent()).VscCommentDraft;
                    return [2 /*return*/, VscCommentDraft];
                case 155: return [4 /*yield*/, import("react-icons/vsc")];
                case 156:
                    VscCommentUnresolved = (_b.sent()).VscCommentUnresolved;
                    return [2 /*return*/, VscCommentUnresolved];
                case 157: return [4 /*yield*/, import("react-icons/vsc")];
                case 158:
                    VscComment = (_b.sent()).VscComment;
                    return [2 /*return*/, VscComment];
                case 159: return [4 /*yield*/, import("react-icons/vsc")];
                case 160:
                    VscCompassActive = (_b.sent()).VscCompassActive;
                    return [2 /*return*/, VscCompassActive];
                case 161: return [4 /*yield*/, import("react-icons/vsc")];
                case 162:
                    VscCompassDot = (_b.sent()).VscCompassDot;
                    return [2 /*return*/, VscCompassDot];
                case 163: return [4 /*yield*/, import("react-icons/vsc")];
                case 164:
                    VscCompass = (_b.sent()).VscCompass;
                    return [2 /*return*/, VscCompass];
                case 165: return [4 /*yield*/, import("react-icons/vsc")];
                case 166:
                    VscCopilotWarning = (_b.sent()).VscCopilotWarning;
                    return [2 /*return*/, VscCopilotWarning];
                case 167: return [4 /*yield*/, import("react-icons/vsc")];
                case 168:
                    VscCopilot = (_b.sent()).VscCopilot;
                    return [2 /*return*/, VscCopilot];
                case 169: return [4 /*yield*/, import("react-icons/vsc")];
                case 170:
                    VscCopy = (_b.sent()).VscCopy;
                    return [2 /*return*/, VscCopy];
                case 171: return [4 /*yield*/, import("react-icons/vsc")];
                case 172:
                    VscCoverage = (_b.sent()).VscCoverage;
                    return [2 /*return*/, VscCoverage];
                case 173: return [4 /*yield*/, import("react-icons/vsc")];
                case 174:
                    VscCreditCard = (_b.sent()).VscCreditCard;
                    return [2 /*return*/, VscCreditCard];
                case 175: return [4 /*yield*/, import("react-icons/vsc")];
                case 176:
                    VscDash = (_b.sent()).VscDash;
                    return [2 /*return*/, VscDash];
                case 177: return [4 /*yield*/, import("react-icons/vsc")];
                case 178:
                    VscDashboard = (_b.sent()).VscDashboard;
                    return [2 /*return*/, VscDashboard];
                case 179: return [4 /*yield*/, import("react-icons/vsc")];
                case 180:
                    VscDatabase = (_b.sent()).VscDatabase;
                    return [2 /*return*/, VscDatabase];
                case 181: return [4 /*yield*/, import("react-icons/vsc")];
                case 182:
                    VscDebugAll = (_b.sent()).VscDebugAll;
                    return [2 /*return*/, VscDebugAll];
                case 183: return [4 /*yield*/, import("react-icons/vsc")];
                case 184:
                    VscDebugAltSmall = (_b.sent()).VscDebugAltSmall;
                    return [2 /*return*/, VscDebugAltSmall];
                case 185: return [4 /*yield*/, import("react-icons/vsc")];
                case 186:
                    VscDebugAlt = (_b.sent()).VscDebugAlt;
                    return [2 /*return*/, VscDebugAlt];
                case 187: return [4 /*yield*/, import("react-icons/vsc")];
                case 188:
                    VscDebugBreakpointConditionalUnverified = (_b.sent()).VscDebugBreakpointConditionalUnverified;
                    return [2 /*return*/, VscDebugBreakpointConditionalUnverified];
                case 189: return [4 /*yield*/, import("react-icons/vsc")];
                case 190:
                    VscDebugBreakpointConditional = (_b.sent()).VscDebugBreakpointConditional;
                    return [2 /*return*/, VscDebugBreakpointConditional];
                case 191: return [4 /*yield*/, import("react-icons/vsc")];
                case 192:
                    VscDebugBreakpointDataUnverified = (_b.sent()).VscDebugBreakpointDataUnverified;
                    return [2 /*return*/, VscDebugBreakpointDataUnverified];
                case 193: return [4 /*yield*/, import("react-icons/vsc")];
                case 194:
                    VscDebugBreakpointData = (_b.sent()).VscDebugBreakpointData;
                    return [2 /*return*/, VscDebugBreakpointData];
                case 195: return [4 /*yield*/, import("react-icons/vsc")];
                case 196:
                    VscDebugBreakpointFunctionUnverified = (_b.sent()).VscDebugBreakpointFunctionUnverified;
                    return [2 /*return*/, VscDebugBreakpointFunctionUnverified];
                case 197: return [4 /*yield*/, import("react-icons/vsc")];
                case 198:
                    VscDebugBreakpointFunction = (_b.sent()).VscDebugBreakpointFunction;
                    return [2 /*return*/, VscDebugBreakpointFunction];
                case 199: return [4 /*yield*/, import("react-icons/vsc")];
                case 200:
                    VscDebugBreakpointLogUnverified = (_b.sent()).VscDebugBreakpointLogUnverified;
                    return [2 /*return*/, VscDebugBreakpointLogUnverified];
                case 201: return [4 /*yield*/, import("react-icons/vsc")];
                case 202:
                    VscDebugBreakpointLog = (_b.sent()).VscDebugBreakpointLog;
                    return [2 /*return*/, VscDebugBreakpointLog];
                case 203: return [4 /*yield*/, import("react-icons/vsc")];
                case 204:
                    VscDebugBreakpointUnsupported = (_b.sent()).VscDebugBreakpointUnsupported;
                    return [2 /*return*/, VscDebugBreakpointUnsupported];
                case 205: return [4 /*yield*/, import("react-icons/vsc")];
                case 206:
                    VscDebugConsole = (_b.sent()).VscDebugConsole;
                    return [2 /*return*/, VscDebugConsole];
                case 207: return [4 /*yield*/, import("react-icons/vsc")];
                case 208:
                    VscDebugContinueSmall = (_b.sent()).VscDebugContinueSmall;
                    return [2 /*return*/, VscDebugContinueSmall];
                case 209: return [4 /*yield*/, import("react-icons/vsc")];
                case 210:
                    VscDebugContinue = (_b.sent()).VscDebugContinue;
                    return [2 /*return*/, VscDebugContinue];
                case 211: return [4 /*yield*/, import("react-icons/vsc")];
                case 212:
                    VscDebugCoverage = (_b.sent()).VscDebugCoverage;
                    return [2 /*return*/, VscDebugCoverage];
                case 213: return [4 /*yield*/, import("react-icons/vsc")];
                case 214:
                    VscDebugDisconnect = (_b.sent()).VscDebugDisconnect;
                    return [2 /*return*/, VscDebugDisconnect];
                case 215: return [4 /*yield*/, import("react-icons/vsc")];
                case 216:
                    VscDebugLineByLine = (_b.sent()).VscDebugLineByLine;
                    return [2 /*return*/, VscDebugLineByLine];
                case 217: return [4 /*yield*/, import("react-icons/vsc")];
                case 218:
                    VscDebugPause = (_b.sent()).VscDebugPause;
                    return [2 /*return*/, VscDebugPause];
                case 219: return [4 /*yield*/, import("react-icons/vsc")];
                case 220:
                    VscDebugRerun = (_b.sent()).VscDebugRerun;
                    return [2 /*return*/, VscDebugRerun];
                case 221: return [4 /*yield*/, import("react-icons/vsc")];
                case 222:
                    VscDebugRestartFrame = (_b.sent()).VscDebugRestartFrame;
                    return [2 /*return*/, VscDebugRestartFrame];
                case 223: return [4 /*yield*/, import("react-icons/vsc")];
                case 224:
                    VscDebugRestart = (_b.sent()).VscDebugRestart;
                    return [2 /*return*/, VscDebugRestart];
                case 225: return [4 /*yield*/, import("react-icons/vsc")];
                case 226:
                    VscDebugReverseContinue = (_b.sent()).VscDebugReverseContinue;
                    return [2 /*return*/, VscDebugReverseContinue];
                case 227: return [4 /*yield*/, import("react-icons/vsc")];
                case 228:
                    VscDebugStackframeActive = (_b.sent()).VscDebugStackframeActive;
                    return [2 /*return*/, VscDebugStackframeActive];
                case 229: return [4 /*yield*/, import("react-icons/vsc")];
                case 230:
                    VscDebugStackframe = (_b.sent()).VscDebugStackframe;
                    return [2 /*return*/, VscDebugStackframe];
                case 231: return [4 /*yield*/, import("react-icons/vsc")];
                case 232:
                    VscDebugStart = (_b.sent()).VscDebugStart;
                    return [2 /*return*/, VscDebugStart];
                case 233: return [4 /*yield*/, import("react-icons/vsc")];
                case 234:
                    VscDebugStepBack = (_b.sent()).VscDebugStepBack;
                    return [2 /*return*/, VscDebugStepBack];
                case 235: return [4 /*yield*/, import("react-icons/vsc")];
                case 236:
                    VscDebugStepInto = (_b.sent()).VscDebugStepInto;
                    return [2 /*return*/, VscDebugStepInto];
                case 237: return [4 /*yield*/, import("react-icons/vsc")];
                case 238:
                    VscDebugStepOut = (_b.sent()).VscDebugStepOut;
                    return [2 /*return*/, VscDebugStepOut];
                case 239: return [4 /*yield*/, import("react-icons/vsc")];
                case 240:
                    VscDebugStepOver = (_b.sent()).VscDebugStepOver;
                    return [2 /*return*/, VscDebugStepOver];
                case 241: return [4 /*yield*/, import("react-icons/vsc")];
                case 242:
                    VscDebugStop = (_b.sent()).VscDebugStop;
                    return [2 /*return*/, VscDebugStop];
                case 243: return [4 /*yield*/, import("react-icons/vsc")];
                case 244:
                    VscDebug = (_b.sent()).VscDebug;
                    return [2 /*return*/, VscDebug];
                case 245: return [4 /*yield*/, import("react-icons/vsc")];
                case 246:
                    VscDesktopDownload = (_b.sent()).VscDesktopDownload;
                    return [2 /*return*/, VscDesktopDownload];
                case 247: return [4 /*yield*/, import("react-icons/vsc")];
                case 248:
                    VscDeviceCameraVideo = (_b.sent()).VscDeviceCameraVideo;
                    return [2 /*return*/, VscDeviceCameraVideo];
                case 249: return [4 /*yield*/, import("react-icons/vsc")];
                case 250:
                    VscDeviceCamera = (_b.sent()).VscDeviceCamera;
                    return [2 /*return*/, VscDeviceCamera];
                case 251: return [4 /*yield*/, import("react-icons/vsc")];
                case 252:
                    VscDeviceMobile = (_b.sent()).VscDeviceMobile;
                    return [2 /*return*/, VscDeviceMobile];
                case 253: return [4 /*yield*/, import("react-icons/vsc")];
                case 254:
                    VscDiffAdded = (_b.sent()).VscDiffAdded;
                    return [2 /*return*/, VscDiffAdded];
                case 255: return [4 /*yield*/, import("react-icons/vsc")];
                case 256:
                    VscDiffIgnored = (_b.sent()).VscDiffIgnored;
                    return [2 /*return*/, VscDiffIgnored];
                case 257: return [4 /*yield*/, import("react-icons/vsc")];
                case 258:
                    VscDiffModified = (_b.sent()).VscDiffModified;
                    return [2 /*return*/, VscDiffModified];
                case 259: return [4 /*yield*/, import("react-icons/vsc")];
                case 260:
                    VscDiffMultiple = (_b.sent()).VscDiffMultiple;
                    return [2 /*return*/, VscDiffMultiple];
                case 261: return [4 /*yield*/, import("react-icons/vsc")];
                case 262:
                    VscDiffRemoved = (_b.sent()).VscDiffRemoved;
                    return [2 /*return*/, VscDiffRemoved];
                case 263: return [4 /*yield*/, import("react-icons/vsc")];
                case 264:
                    VscDiffRenamed = (_b.sent()).VscDiffRenamed;
                    return [2 /*return*/, VscDiffRenamed];
                case 265: return [4 /*yield*/, import("react-icons/vsc")];
                case 266:
                    VscDiffSingle = (_b.sent()).VscDiffSingle;
                    return [2 /*return*/, VscDiffSingle];
                case 267: return [4 /*yield*/, import("react-icons/vsc")];
                case 268:
                    VscDiff = (_b.sent()).VscDiff;
                    return [2 /*return*/, VscDiff];
                case 269: return [4 /*yield*/, import("react-icons/vsc")];
                case 270:
                    VscDiscard = (_b.sent()).VscDiscard;
                    return [2 /*return*/, VscDiscard];
                case 271: return [4 /*yield*/, import("react-icons/vsc")];
                case 272:
                    VscEditSession = (_b.sent()).VscEditSession;
                    return [2 /*return*/, VscEditSession];
                case 273: return [4 /*yield*/, import("react-icons/vsc")];
                case 274:
                    VscEdit = (_b.sent()).VscEdit;
                    return [2 /*return*/, VscEdit];
                case 275: return [4 /*yield*/, import("react-icons/vsc")];
                case 276:
                    VscEditorLayout = (_b.sent()).VscEditorLayout;
                    return [2 /*return*/, VscEditorLayout];
                case 277: return [4 /*yield*/, import("react-icons/vsc")];
                case 278:
                    VscEllipsis = (_b.sent()).VscEllipsis;
                    return [2 /*return*/, VscEllipsis];
                case 279: return [4 /*yield*/, import("react-icons/vsc")];
                case 280:
                    VscEmptyWindow = (_b.sent()).VscEmptyWindow;
                    return [2 /*return*/, VscEmptyWindow];
                case 281: return [4 /*yield*/, import("react-icons/vsc")];
                case 282:
                    VscErrorSmall = (_b.sent()).VscErrorSmall;
                    return [2 /*return*/, VscErrorSmall];
                case 283: return [4 /*yield*/, import("react-icons/vsc")];
                case 284:
                    VscError = (_b.sent()).VscError;
                    return [2 /*return*/, VscError];
                case 285: return [4 /*yield*/, import("react-icons/vsc")];
                case 286:
                    VscExclude = (_b.sent()).VscExclude;
                    return [2 /*return*/, VscExclude];
                case 287: return [4 /*yield*/, import("react-icons/vsc")];
                case 288:
                    VscExpandAll = (_b.sent()).VscExpandAll;
                    return [2 /*return*/, VscExpandAll];
                case 289: return [4 /*yield*/, import("react-icons/vsc")];
                case 290:
                    VscExport = (_b.sent()).VscExport;
                    return [2 /*return*/, VscExport];
                case 291: return [4 /*yield*/, import("react-icons/vsc")];
                case 292:
                    VscExtensions = (_b.sent()).VscExtensions;
                    return [2 /*return*/, VscExtensions];
                case 293: return [4 /*yield*/, import("react-icons/vsc")];
                case 294:
                    VscEyeClosed = (_b.sent()).VscEyeClosed;
                    return [2 /*return*/, VscEyeClosed];
                case 295: return [4 /*yield*/, import("react-icons/vsc")];
                case 296:
                    VscEye = (_b.sent()).VscEye;
                    return [2 /*return*/, VscEye];
                case 297: return [4 /*yield*/, import("react-icons/vsc")];
                case 298:
                    VscFeedback = (_b.sent()).VscFeedback;
                    return [2 /*return*/, VscFeedback];
                case 299: return [4 /*yield*/, import("react-icons/vsc")];
                case 300:
                    VscFileBinary = (_b.sent()).VscFileBinary;
                    return [2 /*return*/, VscFileBinary];
                case 301: return [4 /*yield*/, import("react-icons/vsc")];
                case 302:
                    VscFileCode = (_b.sent()).VscFileCode;
                    return [2 /*return*/, VscFileCode];
                case 303: return [4 /*yield*/, import("react-icons/vsc")];
                case 304:
                    VscFileMedia = (_b.sent()).VscFileMedia;
                    return [2 /*return*/, VscFileMedia];
                case 305: return [4 /*yield*/, import("react-icons/vsc")];
                case 306:
                    VscFilePdf = (_b.sent()).VscFilePdf;
                    return [2 /*return*/, VscFilePdf];
                case 307: return [4 /*yield*/, import("react-icons/vsc")];
                case 308:
                    VscFileSubmodule = (_b.sent()).VscFileSubmodule;
                    return [2 /*return*/, VscFileSubmodule];
                case 309: return [4 /*yield*/, import("react-icons/vsc")];
                case 310:
                    VscFileSymlinkDirectory = (_b.sent()).VscFileSymlinkDirectory;
                    return [2 /*return*/, VscFileSymlinkDirectory];
                case 311: return [4 /*yield*/, import("react-icons/vsc")];
                case 312:
                    VscFileSymlinkFile = (_b.sent()).VscFileSymlinkFile;
                    return [2 /*return*/, VscFileSymlinkFile];
                case 313: return [4 /*yield*/, import("react-icons/vsc")];
                case 314:
                    VscFileZip = (_b.sent()).VscFileZip;
                    return [2 /*return*/, VscFileZip];
                case 315: return [4 /*yield*/, import("react-icons/vsc")];
                case 316:
                    VscFile = (_b.sent()).VscFile;
                    return [2 /*return*/, VscFile];
                case 317: return [4 /*yield*/, import("react-icons/vsc")];
                case 318:
                    VscFiles = (_b.sent()).VscFiles;
                    return [2 /*return*/, VscFiles];
                case 319: return [4 /*yield*/, import("react-icons/vsc")];
                case 320:
                    VscFilterFilled = (_b.sent()).VscFilterFilled;
                    return [2 /*return*/, VscFilterFilled];
                case 321: return [4 /*yield*/, import("react-icons/vsc")];
                case 322:
                    VscFilter = (_b.sent()).VscFilter;
                    return [2 /*return*/, VscFilter];
                case 323: return [4 /*yield*/, import("react-icons/vsc")];
                case 324:
                    VscFlame = (_b.sent()).VscFlame;
                    return [2 /*return*/, VscFlame];
                case 325: return [4 /*yield*/, import("react-icons/vsc")];
                case 326:
                    VscFoldDown = (_b.sent()).VscFoldDown;
                    return [2 /*return*/, VscFoldDown];
                case 327: return [4 /*yield*/, import("react-icons/vsc")];
                case 328:
                    VscFoldUp = (_b.sent()).VscFoldUp;
                    return [2 /*return*/, VscFoldUp];
                case 329: return [4 /*yield*/, import("react-icons/vsc")];
                case 330:
                    VscFold = (_b.sent()).VscFold;
                    return [2 /*return*/, VscFold];
                case 331: return [4 /*yield*/, import("react-icons/vsc")];
                case 332:
                    VscFolderActive = (_b.sent()).VscFolderActive;
                    return [2 /*return*/, VscFolderActive];
                case 333: return [4 /*yield*/, import("react-icons/vsc")];
                case 334:
                    VscFolderLibrary = (_b.sent()).VscFolderLibrary;
                    return [2 /*return*/, VscFolderLibrary];
                case 335: return [4 /*yield*/, import("react-icons/vsc")];
                case 336:
                    VscFolderOpened = (_b.sent()).VscFolderOpened;
                    return [2 /*return*/, VscFolderOpened];
                case 337: return [4 /*yield*/, import("react-icons/vsc")];
                case 338:
                    VscFolder = (_b.sent()).VscFolder;
                    return [2 /*return*/, VscFolder];
                case 339: return [4 /*yield*/, import("react-icons/vsc")];
                case 340:
                    VscGame = (_b.sent()).VscGame;
                    return [2 /*return*/, VscGame];
                case 341: return [4 /*yield*/, import("react-icons/vsc")];
                case 342:
                    VscGear = (_b.sent()).VscGear;
                    return [2 /*return*/, VscGear];
                case 343: return [4 /*yield*/, import("react-icons/vsc")];
                case 344:
                    VscGift = (_b.sent()).VscGift;
                    return [2 /*return*/, VscGift];
                case 345: return [4 /*yield*/, import("react-icons/vsc")];
                case 346:
                    VscGistSecret = (_b.sent()).VscGistSecret;
                    return [2 /*return*/, VscGistSecret];
                case 347: return [4 /*yield*/, import("react-icons/vsc")];
                case 348:
                    VscGist = (_b.sent()).VscGist;
                    return [2 /*return*/, VscGist];
                case 349: return [4 /*yield*/, import("react-icons/vsc")];
                case 350:
                    VscGitCommit = (_b.sent()).VscGitCommit;
                    return [2 /*return*/, VscGitCommit];
                case 351: return [4 /*yield*/, import("react-icons/vsc")];
                case 352:
                    VscGitCompare = (_b.sent()).VscGitCompare;
                    return [2 /*return*/, VscGitCompare];
                case 353: return [4 /*yield*/, import("react-icons/vsc")];
                case 354:
                    VscGitFetch = (_b.sent()).VscGitFetch;
                    return [2 /*return*/, VscGitFetch];
                case 355: return [4 /*yield*/, import("react-icons/vsc")];
                case 356:
                    VscGitMerge = (_b.sent()).VscGitMerge;
                    return [2 /*return*/, VscGitMerge];
                case 357: return [4 /*yield*/, import("react-icons/vsc")];
                case 358:
                    VscGitPullRequestClosed = (_b.sent()).VscGitPullRequestClosed;
                    return [2 /*return*/, VscGitPullRequestClosed];
                case 359: return [4 /*yield*/, import("react-icons/vsc")];
                case 360:
                    VscGitPullRequestCreate = (_b.sent()).VscGitPullRequestCreate;
                    return [2 /*return*/, VscGitPullRequestCreate];
                case 361: return [4 /*yield*/, import("react-icons/vsc")];
                case 362:
                    VscGitPullRequestDraft = (_b.sent()).VscGitPullRequestDraft;
                    return [2 /*return*/, VscGitPullRequestDraft];
                case 363: return [4 /*yield*/, import("react-icons/vsc")];
                case 364:
                    VscGitPullRequestGoToChanges = (_b.sent()).VscGitPullRequestGoToChanges;
                    return [2 /*return*/, VscGitPullRequestGoToChanges];
                case 365: return [4 /*yield*/, import("react-icons/vsc")];
                case 366:
                    VscGitPullRequestNewChanges = (_b.sent()).VscGitPullRequestNewChanges;
                    return [2 /*return*/, VscGitPullRequestNewChanges];
                case 367: return [4 /*yield*/, import("react-icons/vsc")];
                case 368:
                    VscGitPullRequest = (_b.sent()).VscGitPullRequest;
                    return [2 /*return*/, VscGitPullRequest];
                case 369: return [4 /*yield*/, import("react-icons/vsc")];
                case 370:
                    VscGitStashApply = (_b.sent()).VscGitStashApply;
                    return [2 /*return*/, VscGitStashApply];
                case 371: return [4 /*yield*/, import("react-icons/vsc")];
                case 372:
                    VscGitStashPop = (_b.sent()).VscGitStashPop;
                    return [2 /*return*/, VscGitStashPop];
                case 373: return [4 /*yield*/, import("react-icons/vsc")];
                case 374:
                    VscGitStash = (_b.sent()).VscGitStash;
                    return [2 /*return*/, VscGitStash];
                case 375: return [4 /*yield*/, import("react-icons/vsc")];
                case 376:
                    VscGithubAction = (_b.sent()).VscGithubAction;
                    return [2 /*return*/, VscGithubAction];
                case 377: return [4 /*yield*/, import("react-icons/vsc")];
                case 378:
                    VscGithubAlt = (_b.sent()).VscGithubAlt;
                    return [2 /*return*/, VscGithubAlt];
                case 379: return [4 /*yield*/, import("react-icons/vsc")];
                case 380:
                    VscGithubInverted = (_b.sent()).VscGithubInverted;
                    return [2 /*return*/, VscGithubInverted];
                case 381: return [4 /*yield*/, import("react-icons/vsc")];
                case 382:
                    VscGithubProject = (_b.sent()).VscGithubProject;
                    return [2 /*return*/, VscGithubProject];
                case 383: return [4 /*yield*/, import("react-icons/vsc")];
                case 384:
                    VscGithub = (_b.sent()).VscGithub;
                    return [2 /*return*/, VscGithub];
                case 385: return [4 /*yield*/, import("react-icons/vsc")];
                case 386:
                    VscGlobe = (_b.sent()).VscGlobe;
                    return [2 /*return*/, VscGlobe];
                case 387: return [4 /*yield*/, import("react-icons/vsc")];
                case 388:
                    VscGoToEditingSession = (_b.sent()).VscGoToEditingSession;
                    return [2 /*return*/, VscGoToEditingSession];
                case 389: return [4 /*yield*/, import("react-icons/vsc")];
                case 390:
                    VscGoToFile = (_b.sent()).VscGoToFile;
                    return [2 /*return*/, VscGoToFile];
                case 391: return [4 /*yield*/, import("react-icons/vsc")];
                case 392:
                    VscGoToSearch = (_b.sent()).VscGoToSearch;
                    return [2 /*return*/, VscGoToSearch];
                case 393: return [4 /*yield*/, import("react-icons/vsc")];
                case 394:
                    VscGrabber = (_b.sent()).VscGrabber;
                    return [2 /*return*/, VscGrabber];
                case 395: return [4 /*yield*/, import("react-icons/vsc")];
                case 396:
                    VscGraphLeft = (_b.sent()).VscGraphLeft;
                    return [2 /*return*/, VscGraphLeft];
                case 397: return [4 /*yield*/, import("react-icons/vsc")];
                case 398:
                    VscGraphLine = (_b.sent()).VscGraphLine;
                    return [2 /*return*/, VscGraphLine];
                case 399: return [4 /*yield*/, import("react-icons/vsc")];
                case 400:
                    VscGraphScatter = (_b.sent()).VscGraphScatter;
                    return [2 /*return*/, VscGraphScatter];
                case 401: return [4 /*yield*/, import("react-icons/vsc")];
                case 402:
                    VscGraph = (_b.sent()).VscGraph;
                    return [2 /*return*/, VscGraph];
                case 403: return [4 /*yield*/, import("react-icons/vsc")];
                case 404:
                    VscGripper = (_b.sent()).VscGripper;
                    return [2 /*return*/, VscGripper];
                case 405: return [4 /*yield*/, import("react-icons/vsc")];
                case 406:
                    VscGroupByRefType = (_b.sent()).VscGroupByRefType;
                    return [2 /*return*/, VscGroupByRefType];
                case 407: return [4 /*yield*/, import("react-icons/vsc")];
                case 408:
                    VscHeartFilled = (_b.sent()).VscHeartFilled;
                    return [2 /*return*/, VscHeartFilled];
                case 409: return [4 /*yield*/, import("react-icons/vsc")];
                case 410:
                    VscHeart = (_b.sent()).VscHeart;
                    return [2 /*return*/, VscHeart];
                case 411: return [4 /*yield*/, import("react-icons/vsc")];
                case 412:
                    VscHistory = (_b.sent()).VscHistory;
                    return [2 /*return*/, VscHistory];
                case 413: return [4 /*yield*/, import("react-icons/vsc")];
                case 414:
                    VscHome = (_b.sent()).VscHome;
                    return [2 /*return*/, VscHome];
                case 415: return [4 /*yield*/, import("react-icons/vsc")];
                case 416:
                    VscHorizontalRule = (_b.sent()).VscHorizontalRule;
                    return [2 /*return*/, VscHorizontalRule];
                case 417: return [4 /*yield*/, import("react-icons/vsc")];
                case 418:
                    VscHubot = (_b.sent()).VscHubot;
                    return [2 /*return*/, VscHubot];
                case 419: return [4 /*yield*/, import("react-icons/vsc")];
                case 420:
                    VscInbox = (_b.sent()).VscInbox;
                    return [2 /*return*/, VscInbox];
                case 421: return [4 /*yield*/, import("react-icons/vsc")];
                case 422:
                    VscIndent = (_b.sent()).VscIndent;
                    return [2 /*return*/, VscIndent];
                case 423: return [4 /*yield*/, import("react-icons/vsc")];
                case 424:
                    VscInfo = (_b.sent()).VscInfo;
                    return [2 /*return*/, VscInfo];
                case 425: return [4 /*yield*/, import("react-icons/vsc")];
                case 426:
                    VscInsert = (_b.sent()).VscInsert;
                    return [2 /*return*/, VscInsert];
                case 427: return [4 /*yield*/, import("react-icons/vsc")];
                case 428:
                    VscInspect = (_b.sent()).VscInspect;
                    return [2 /*return*/, VscInspect];
                case 429: return [4 /*yield*/, import("react-icons/vsc")];
                case 430:
                    VscIssueDraft = (_b.sent()).VscIssueDraft;
                    return [2 /*return*/, VscIssueDraft];
                case 431: return [4 /*yield*/, import("react-icons/vsc")];
                case 432:
                    VscIssueReopened = (_b.sent()).VscIssueReopened;
                    return [2 /*return*/, VscIssueReopened];
                case 433: return [4 /*yield*/, import("react-icons/vsc")];
                case 434:
                    VscIssues = (_b.sent()).VscIssues;
                    return [2 /*return*/, VscIssues];
                case 435: return [4 /*yield*/, import("react-icons/vsc")];
                case 436:
                    VscItalic = (_b.sent()).VscItalic;
                    return [2 /*return*/, VscItalic];
                case 437: return [4 /*yield*/, import("react-icons/vsc")];
                case 438:
                    VscJersey = (_b.sent()).VscJersey;
                    return [2 /*return*/, VscJersey];
                case 439: return [4 /*yield*/, import("react-icons/vsc")];
                case 440:
                    VscJson = (_b.sent()).VscJson;
                    return [2 /*return*/, VscJson];
                case 441: return [4 /*yield*/, import("react-icons/vsc")];
                case 442:
                    VscKebabVertical = (_b.sent()).VscKebabVertical;
                    return [2 /*return*/, VscKebabVertical];
                case 443: return [4 /*yield*/, import("react-icons/vsc")];
                case 444:
                    VscKey = (_b.sent()).VscKey;
                    return [2 /*return*/, VscKey];
                case 445: return [4 /*yield*/, import("react-icons/vsc")];
                case 446:
                    VscLaw = (_b.sent()).VscLaw;
                    return [2 /*return*/, VscLaw];
                case 447: return [4 /*yield*/, import("react-icons/vsc")];
                case 448:
                    VscLayersActive = (_b.sent()).VscLayersActive;
                    return [2 /*return*/, VscLayersActive];
                case 449: return [4 /*yield*/, import("react-icons/vsc")];
                case 450:
                    VscLayersDot = (_b.sent()).VscLayersDot;
                    return [2 /*return*/, VscLayersDot];
                case 451: return [4 /*yield*/, import("react-icons/vsc")];
                case 452:
                    VscLayers = (_b.sent()).VscLayers;
                    return [2 /*return*/, VscLayers];
                case 453: return [4 /*yield*/, import("react-icons/vsc")];
                case 454:
                    VscLayoutActivitybarLeft = (_b.sent()).VscLayoutActivitybarLeft;
                    return [2 /*return*/, VscLayoutActivitybarLeft];
                case 455: return [4 /*yield*/, import("react-icons/vsc")];
                case 456:
                    VscLayoutActivitybarRight = (_b.sent()).VscLayoutActivitybarRight;
                    return [2 /*return*/, VscLayoutActivitybarRight];
                case 457: return [4 /*yield*/, import("react-icons/vsc")];
                case 458:
                    VscLayoutCentered = (_b.sent()).VscLayoutCentered;
                    return [2 /*return*/, VscLayoutCentered];
                case 459: return [4 /*yield*/, import("react-icons/vsc")];
                case 460:
                    VscLayoutMenubar = (_b.sent()).VscLayoutMenubar;
                    return [2 /*return*/, VscLayoutMenubar];
                case 461: return [4 /*yield*/, import("react-icons/vsc")];
                case 462:
                    VscLayoutPanelCenter = (_b.sent()).VscLayoutPanelCenter;
                    return [2 /*return*/, VscLayoutPanelCenter];
                case 463: return [4 /*yield*/, import("react-icons/vsc")];
                case 464:
                    VscLayoutPanelJustify = (_b.sent()).VscLayoutPanelJustify;
                    return [2 /*return*/, VscLayoutPanelJustify];
                case 465: return [4 /*yield*/, import("react-icons/vsc")];
                case 466:
                    VscLayoutPanelLeft = (_b.sent()).VscLayoutPanelLeft;
                    return [2 /*return*/, VscLayoutPanelLeft];
                case 467: return [4 /*yield*/, import("react-icons/vsc")];
                case 468:
                    VscLayoutPanelOff = (_b.sent()).VscLayoutPanelOff;
                    return [2 /*return*/, VscLayoutPanelOff];
                case 469: return [4 /*yield*/, import("react-icons/vsc")];
                case 470:
                    VscLayoutPanelRight = (_b.sent()).VscLayoutPanelRight;
                    return [2 /*return*/, VscLayoutPanelRight];
                case 471: return [4 /*yield*/, import("react-icons/vsc")];
                case 472:
                    VscLayoutPanel = (_b.sent()).VscLayoutPanel;
                    return [2 /*return*/, VscLayoutPanel];
                case 473: return [4 /*yield*/, import("react-icons/vsc")];
                case 474:
                    VscLayoutSidebarLeftOff = (_b.sent()).VscLayoutSidebarLeftOff;
                    return [2 /*return*/, VscLayoutSidebarLeftOff];
                case 475: return [4 /*yield*/, import("react-icons/vsc")];
                case 476:
                    VscLayoutSidebarLeft = (_b.sent()).VscLayoutSidebarLeft;
                    return [2 /*return*/, VscLayoutSidebarLeft];
                case 477: return [4 /*yield*/, import("react-icons/vsc")];
                case 478:
                    VscLayoutSidebarRightOff = (_b.sent()).VscLayoutSidebarRightOff;
                    return [2 /*return*/, VscLayoutSidebarRightOff];
                case 479: return [4 /*yield*/, import("react-icons/vsc")];
                case 480:
                    VscLayoutSidebarRight = (_b.sent()).VscLayoutSidebarRight;
                    return [2 /*return*/, VscLayoutSidebarRight];
                case 481: return [4 /*yield*/, import("react-icons/vsc")];
                case 482:
                    VscLayoutStatusbar = (_b.sent()).VscLayoutStatusbar;
                    return [2 /*return*/, VscLayoutStatusbar];
                case 483: return [4 /*yield*/, import("react-icons/vsc")];
                case 484:
                    VscLayout = (_b.sent()).VscLayout;
                    return [2 /*return*/, VscLayout];
                case 485: return [4 /*yield*/, import("react-icons/vsc")];
                case 486:
                    VscLibrary = (_b.sent()).VscLibrary;
                    return [2 /*return*/, VscLibrary];
                case 487: return [4 /*yield*/, import("react-icons/vsc")];
                case 488:
                    VscLightbulbAutofix = (_b.sent()).VscLightbulbAutofix;
                    return [2 /*return*/, VscLightbulbAutofix];
                case 489: return [4 /*yield*/, import("react-icons/vsc")];
                case 490:
                    VscLightbulbSparkle = (_b.sent()).VscLightbulbSparkle;
                    return [2 /*return*/, VscLightbulbSparkle];
                case 491: return [4 /*yield*/, import("react-icons/vsc")];
                case 492:
                    VscLightbulb = (_b.sent()).VscLightbulb;
                    return [2 /*return*/, VscLightbulb];
                case 493: return [4 /*yield*/, import("react-icons/vsc")];
                case 494:
                    VscLinkExternal = (_b.sent()).VscLinkExternal;
                    return [2 /*return*/, VscLinkExternal];
                case 495: return [4 /*yield*/, import("react-icons/vsc")];
                case 496:
                    VscLink = (_b.sent()).VscLink;
                    return [2 /*return*/, VscLink];
                case 497: return [4 /*yield*/, import("react-icons/vsc")];
                case 498:
                    VscListFilter = (_b.sent()).VscListFilter;
                    return [2 /*return*/, VscListFilter];
                case 499: return [4 /*yield*/, import("react-icons/vsc")];
                case 500:
                    VscListFlat = (_b.sent()).VscListFlat;
                    return [2 /*return*/, VscListFlat];
                case 501: return [4 /*yield*/, import("react-icons/vsc")];
                case 502:
                    VscListOrdered = (_b.sent()).VscListOrdered;
                    return [2 /*return*/, VscListOrdered];
                case 503: return [4 /*yield*/, import("react-icons/vsc")];
                case 504:
                    VscListSelection = (_b.sent()).VscListSelection;
                    return [2 /*return*/, VscListSelection];
                case 505: return [4 /*yield*/, import("react-icons/vsc")];
                case 506:
                    VscListTree = (_b.sent()).VscListTree;
                    return [2 /*return*/, VscListTree];
                case 507: return [4 /*yield*/, import("react-icons/vsc")];
                case 508:
                    VscListUnordered = (_b.sent()).VscListUnordered;
                    return [2 /*return*/, VscListUnordered];
                case 509: return [4 /*yield*/, import("react-icons/vsc")];
                case 510:
                    VscLiveShare = (_b.sent()).VscLiveShare;
                    return [2 /*return*/, VscLiveShare];
                case 511: return [4 /*yield*/, import("react-icons/vsc")];
                case 512:
                    VscLoading = (_b.sent()).VscLoading;
                    return [2 /*return*/, VscLoading];
                case 513: return [4 /*yield*/, import("react-icons/vsc")];
                case 514:
                    VscLocation = (_b.sent()).VscLocation;
                    return [2 /*return*/, VscLocation];
                case 515: return [4 /*yield*/, import("react-icons/vsc")];
                case 516:
                    VscLockSmall = (_b.sent()).VscLockSmall;
                    return [2 /*return*/, VscLockSmall];
                case 517: return [4 /*yield*/, import("react-icons/vsc")];
                case 518:
                    VscLock = (_b.sent()).VscLock;
                    return [2 /*return*/, VscLock];
                case 519: return [4 /*yield*/, import("react-icons/vsc")];
                case 520:
                    VscMagnet = (_b.sent()).VscMagnet;
                    return [2 /*return*/, VscMagnet];
                case 521: return [4 /*yield*/, import("react-icons/vsc")];
                case 522:
                    VscMailRead = (_b.sent()).VscMailRead;
                    return [2 /*return*/, VscMailRead];
                case 523: return [4 /*yield*/, import("react-icons/vsc")];
                case 524:
                    VscMail = (_b.sent()).VscMail;
                    return [2 /*return*/, VscMail];
                case 525: return [4 /*yield*/, import("react-icons/vsc")];
                case 526:
                    VscMapFilled = (_b.sent()).VscMapFilled;
                    return [2 /*return*/, VscMapFilled];
                case 527: return [4 /*yield*/, import("react-icons/vsc")];
                case 528:
                    VscMapVerticalFilled = (_b.sent()).VscMapVerticalFilled;
                    return [2 /*return*/, VscMapVerticalFilled];
                case 529: return [4 /*yield*/, import("react-icons/vsc")];
                case 530:
                    VscMapVertical = (_b.sent()).VscMapVertical;
                    return [2 /*return*/, VscMapVertical];
                case 531: return [4 /*yield*/, import("react-icons/vsc")];
                case 532:
                    VscMap = (_b.sent()).VscMap;
                    return [2 /*return*/, VscMap];
                case 533: return [4 /*yield*/, import("react-icons/vsc")];
                case 534:
                    VscMarkdown = (_b.sent()).VscMarkdown;
                    return [2 /*return*/, VscMarkdown];
                case 535: return [4 /*yield*/, import("react-icons/vsc")];
                case 536:
                    VscMegaphone = (_b.sent()).VscMegaphone;
                    return [2 /*return*/, VscMegaphone];
                case 537: return [4 /*yield*/, import("react-icons/vsc")];
                case 538:
                    VscMention = (_b.sent()).VscMention;
                    return [2 /*return*/, VscMention];
                case 539: return [4 /*yield*/, import("react-icons/vsc")];
                case 540:
                    VscMenu = (_b.sent()).VscMenu;
                    return [2 /*return*/, VscMenu];
                case 541: return [4 /*yield*/, import("react-icons/vsc")];
                case 542:
                    VscMerge = (_b.sent()).VscMerge;
                    return [2 /*return*/, VscMerge];
                case 543: return [4 /*yield*/, import("react-icons/vsc")];
                case 544:
                    VscMicFilled = (_b.sent()).VscMicFilled;
                    return [2 /*return*/, VscMicFilled];
                case 545: return [4 /*yield*/, import("react-icons/vsc")];
                case 546:
                    VscMic = (_b.sent()).VscMic;
                    return [2 /*return*/, VscMic];
                case 547: return [4 /*yield*/, import("react-icons/vsc")];
                case 548:
                    VscMilestone = (_b.sent()).VscMilestone;
                    return [2 /*return*/, VscMilestone];
                case 549: return [4 /*yield*/, import("react-icons/vsc")];
                case 550:
                    VscMirror = (_b.sent()).VscMirror;
                    return [2 /*return*/, VscMirror];
                case 551: return [4 /*yield*/, import("react-icons/vsc")];
                case 552:
                    VscMortarBoard = (_b.sent()).VscMortarBoard;
                    return [2 /*return*/, VscMortarBoard];
                case 553: return [4 /*yield*/, import("react-icons/vsc")];
                case 554:
                    VscMove = (_b.sent()).VscMove;
                    return [2 /*return*/, VscMove];
                case 555: return [4 /*yield*/, import("react-icons/vsc")];
                case 556:
                    VscMultipleWindows = (_b.sent()).VscMultipleWindows;
                    return [2 /*return*/, VscMultipleWindows];
                case 557: return [4 /*yield*/, import("react-icons/vsc")];
                case 558:
                    VscMusic = (_b.sent()).VscMusic;
                    return [2 /*return*/, VscMusic];
                case 559: return [4 /*yield*/, import("react-icons/vsc")];
                case 560:
                    VscMute = (_b.sent()).VscMute;
                    return [2 /*return*/, VscMute];
                case 561: return [4 /*yield*/, import("react-icons/vsc")];
                case 562:
                    VscNewFile = (_b.sent()).VscNewFile;
                    return [2 /*return*/, VscNewFile];
                case 563: return [4 /*yield*/, import("react-icons/vsc")];
                case 564:
                    VscNewFolder = (_b.sent()).VscNewFolder;
                    return [2 /*return*/, VscNewFolder];
                case 565: return [4 /*yield*/, import("react-icons/vsc")];
                case 566:
                    VscNewline = (_b.sent()).VscNewline;
                    return [2 /*return*/, VscNewline];
                case 567: return [4 /*yield*/, import("react-icons/vsc")];
                case 568:
                    VscNoNewline = (_b.sent()).VscNoNewline;
                    return [2 /*return*/, VscNoNewline];
                case 569: return [4 /*yield*/, import("react-icons/vsc")];
                case 570:
                    VscNote = (_b.sent()).VscNote;
                    return [2 /*return*/, VscNote];
                case 571: return [4 /*yield*/, import("react-icons/vsc")];
                case 572:
                    VscNotebookTemplate = (_b.sent()).VscNotebookTemplate;
                    return [2 /*return*/, VscNotebookTemplate];
                case 573: return [4 /*yield*/, import("react-icons/vsc")];
                case 574:
                    VscNotebook = (_b.sent()).VscNotebook;
                    return [2 /*return*/, VscNotebook];
                case 575: return [4 /*yield*/, import("react-icons/vsc")];
                case 576:
                    VscOctoface = (_b.sent()).VscOctoface;
                    return [2 /*return*/, VscOctoface];
                case 577: return [4 /*yield*/, import("react-icons/vsc")];
                case 578:
                    VscOpenPreview = (_b.sent()).VscOpenPreview;
                    return [2 /*return*/, VscOpenPreview];
                case 579: return [4 /*yield*/, import("react-icons/vsc")];
                case 580:
                    VscOrganization = (_b.sent()).VscOrganization;
                    return [2 /*return*/, VscOrganization];
                case 581: return [4 /*yield*/, import("react-icons/vsc")];
                case 582:
                    VscOutput = (_b.sent()).VscOutput;
                    return [2 /*return*/, VscOutput];
                case 583: return [4 /*yield*/, import("react-icons/vsc")];
                case 584:
                    VscPackage = (_b.sent()).VscPackage;
                    return [2 /*return*/, VscPackage];
                case 585: return [4 /*yield*/, import("react-icons/vsc")];
                case 586:
                    VscPaintcan = (_b.sent()).VscPaintcan;
                    return [2 /*return*/, VscPaintcan];
                case 587: return [4 /*yield*/, import("react-icons/vsc")];
                case 588:
                    VscPassFilled = (_b.sent()).VscPassFilled;
                    return [2 /*return*/, VscPassFilled];
                case 589: return [4 /*yield*/, import("react-icons/vsc")];
                case 590:
                    VscPass = (_b.sent()).VscPass;
                    return [2 /*return*/, VscPass];
                case 591: return [4 /*yield*/, import("react-icons/vsc")];
                case 592:
                    VscPercentage = (_b.sent()).VscPercentage;
                    return [2 /*return*/, VscPercentage];
                case 593: return [4 /*yield*/, import("react-icons/vsc")];
                case 594:
                    VscPersonAdd = (_b.sent()).VscPersonAdd;
                    return [2 /*return*/, VscPersonAdd];
                case 595: return [4 /*yield*/, import("react-icons/vsc")];
                case 596:
                    VscPerson = (_b.sent()).VscPerson;
                    return [2 /*return*/, VscPerson];
                case 597: return [4 /*yield*/, import("react-icons/vsc")];
                case 598:
                    VscPiano = (_b.sent()).VscPiano;
                    return [2 /*return*/, VscPiano];
                case 599: return [4 /*yield*/, import("react-icons/vsc")];
                case 600:
                    VscPieChart = (_b.sent()).VscPieChart;
                    return [2 /*return*/, VscPieChart];
                case 601: return [4 /*yield*/, import("react-icons/vsc")];
                case 602:
                    VscPin = (_b.sent()).VscPin;
                    return [2 /*return*/, VscPin];
                case 603: return [4 /*yield*/, import("react-icons/vsc")];
                case 604:
                    VscPinnedDirty = (_b.sent()).VscPinnedDirty;
                    return [2 /*return*/, VscPinnedDirty];
                case 605: return [4 /*yield*/, import("react-icons/vsc")];
                case 606:
                    VscPinned = (_b.sent()).VscPinned;
                    return [2 /*return*/, VscPinned];
                case 607: return [4 /*yield*/, import("react-icons/vsc")];
                case 608:
                    VscPlayCircle = (_b.sent()).VscPlayCircle;
                    return [2 /*return*/, VscPlayCircle];
                case 609: return [4 /*yield*/, import("react-icons/vsc")];
                case 610:
                    VscPlay = (_b.sent()).VscPlay;
                    return [2 /*return*/, VscPlay];
                case 611: return [4 /*yield*/, import("react-icons/vsc")];
                case 612:
                    VscPlug = (_b.sent()).VscPlug;
                    return [2 /*return*/, VscPlug];
                case 613: return [4 /*yield*/, import("react-icons/vsc")];
                case 614:
                    VscPreserveCase = (_b.sent()).VscPreserveCase;
                    return [2 /*return*/, VscPreserveCase];
                case 615: return [4 /*yield*/, import("react-icons/vsc")];
                case 616:
                    VscPreview = (_b.sent()).VscPreview;
                    return [2 /*return*/, VscPreview];
                case 617: return [4 /*yield*/, import("react-icons/vsc")];
                case 618:
                    VscPrimitiveSquare = (_b.sent()).VscPrimitiveSquare;
                    return [2 /*return*/, VscPrimitiveSquare];
                case 619: return [4 /*yield*/, import("react-icons/vsc")];
                case 620:
                    VscProject = (_b.sent()).VscProject;
                    return [2 /*return*/, VscProject];
                case 621: return [4 /*yield*/, import("react-icons/vsc")];
                case 622:
                    VscPulse = (_b.sent()).VscPulse;
                    return [2 /*return*/, VscPulse];
                case 623: return [4 /*yield*/, import("react-icons/vsc")];
                case 624:
                    VscQuestion = (_b.sent()).VscQuestion;
                    return [2 /*return*/, VscQuestion];
                case 625: return [4 /*yield*/, import("react-icons/vsc")];
                case 626:
                    VscQuote = (_b.sent()).VscQuote;
                    return [2 /*return*/, VscQuote];
                case 627: return [4 /*yield*/, import("react-icons/vsc")];
                case 628:
                    VscRadioTower = (_b.sent()).VscRadioTower;
                    return [2 /*return*/, VscRadioTower];
                case 629: return [4 /*yield*/, import("react-icons/vsc")];
                case 630:
                    VscReactions = (_b.sent()).VscReactions;
                    return [2 /*return*/, VscReactions];
                case 631: return [4 /*yield*/, import("react-icons/vsc")];
                case 632:
                    VscRecordKeys = (_b.sent()).VscRecordKeys;
                    return [2 /*return*/, VscRecordKeys];
                case 633: return [4 /*yield*/, import("react-icons/vsc")];
                case 634:
                    VscRecordSmall = (_b.sent()).VscRecordSmall;
                    return [2 /*return*/, VscRecordSmall];
                case 635: return [4 /*yield*/, import("react-icons/vsc")];
                case 636:
                    VscRecord = (_b.sent()).VscRecord;
                    return [2 /*return*/, VscRecord];
                case 637: return [4 /*yield*/, import("react-icons/vsc")];
                case 638:
                    VscRedo = (_b.sent()).VscRedo;
                    return [2 /*return*/, VscRedo];
                case 639: return [4 /*yield*/, import("react-icons/vsc")];
                case 640:
                    VscReferences = (_b.sent()).VscReferences;
                    return [2 /*return*/, VscReferences];
                case 641: return [4 /*yield*/, import("react-icons/vsc")];
                case 642:
                    VscRefresh = (_b.sent()).VscRefresh;
                    return [2 /*return*/, VscRefresh];
                case 643: return [4 /*yield*/, import("react-icons/vsc")];
                case 644:
                    VscRegex = (_b.sent()).VscRegex;
                    return [2 /*return*/, VscRegex];
                case 645: return [4 /*yield*/, import("react-icons/vsc")];
                case 646:
                    VscRemoteExplorer = (_b.sent()).VscRemoteExplorer;
                    return [2 /*return*/, VscRemoteExplorer];
                case 647: return [4 /*yield*/, import("react-icons/vsc")];
                case 648:
                    VscRemote = (_b.sent()).VscRemote;
                    return [2 /*return*/, VscRemote];
                case 649: return [4 /*yield*/, import("react-icons/vsc")];
                case 650:
                    VscRemove = (_b.sent()).VscRemove;
                    return [2 /*return*/, VscRemove];
                case 651: return [4 /*yield*/, import("react-icons/vsc")];
                case 652:
                    VscReplaceAll = (_b.sent()).VscReplaceAll;
                    return [2 /*return*/, VscReplaceAll];
                case 653: return [4 /*yield*/, import("react-icons/vsc")];
                case 654:
                    VscReplace = (_b.sent()).VscReplace;
                    return [2 /*return*/, VscReplace];
                case 655: return [4 /*yield*/, import("react-icons/vsc")];
                case 656:
                    VscReply = (_b.sent()).VscReply;
                    return [2 /*return*/, VscReply];
                case 657: return [4 /*yield*/, import("react-icons/vsc")];
                case 658:
                    VscRepoClone = (_b.sent()).VscRepoClone;
                    return [2 /*return*/, VscRepoClone];
                case 659: return [4 /*yield*/, import("react-icons/vsc")];
                case 660:
                    VscRepoFetch = (_b.sent()).VscRepoFetch;
                    return [2 /*return*/, VscRepoFetch];
                case 661: return [4 /*yield*/, import("react-icons/vsc")];
                case 662:
                    VscRepoForcePush = (_b.sent()).VscRepoForcePush;
                    return [2 /*return*/, VscRepoForcePush];
                case 663: return [4 /*yield*/, import("react-icons/vsc")];
                case 664:
                    VscRepoForked = (_b.sent()).VscRepoForked;
                    return [2 /*return*/, VscRepoForked];
                case 665: return [4 /*yield*/, import("react-icons/vsc")];
                case 666:
                    VscRepoPull = (_b.sent()).VscRepoPull;
                    return [2 /*return*/, VscRepoPull];
                case 667: return [4 /*yield*/, import("react-icons/vsc")];
                case 668:
                    VscRepoPush = (_b.sent()).VscRepoPush;
                    return [2 /*return*/, VscRepoPush];
                case 669: return [4 /*yield*/, import("react-icons/vsc")];
                case 670:
                    VscRepo = (_b.sent()).VscRepo;
                    return [2 /*return*/, VscRepo];
                case 671: return [4 /*yield*/, import("react-icons/vsc")];
                case 672:
                    VscReport = (_b.sent()).VscReport;
                    return [2 /*return*/, VscReport];
                case 673: return [4 /*yield*/, import("react-icons/vsc")];
                case 674:
                    VscRequestChanges = (_b.sent()).VscRequestChanges;
                    return [2 /*return*/, VscRequestChanges];
                case 675: return [4 /*yield*/, import("react-icons/vsc")];
                case 676:
                    VscRobot = (_b.sent()).VscRobot;
                    return [2 /*return*/, VscRobot];
                case 677: return [4 /*yield*/, import("react-icons/vsc")];
                case 678:
                    VscRocket = (_b.sent()).VscRocket;
                    return [2 /*return*/, VscRocket];
                case 679: return [4 /*yield*/, import("react-icons/vsc")];
                case 680:
                    VscRootFolderOpened = (_b.sent()).VscRootFolderOpened;
                    return [2 /*return*/, VscRootFolderOpened];
                case 681: return [4 /*yield*/, import("react-icons/vsc")];
                case 682:
                    VscRootFolder = (_b.sent()).VscRootFolder;
                    return [2 /*return*/, VscRootFolder];
                case 683: return [4 /*yield*/, import("react-icons/vsc")];
                case 684:
                    VscRss = (_b.sent()).VscRss;
                    return [2 /*return*/, VscRss];
                case 685: return [4 /*yield*/, import("react-icons/vsc")];
                case 686:
                    VscRuby = (_b.sent()).VscRuby;
                    return [2 /*return*/, VscRuby];
                case 687: return [4 /*yield*/, import("react-icons/vsc")];
                case 688:
                    VscRunAbove = (_b.sent()).VscRunAbove;
                    return [2 /*return*/, VscRunAbove];
                case 689: return [4 /*yield*/, import("react-icons/vsc")];
                case 690:
                    VscRunAllCoverage = (_b.sent()).VscRunAllCoverage;
                    return [2 /*return*/, VscRunAllCoverage];
                case 691: return [4 /*yield*/, import("react-icons/vsc")];
                case 692:
                    VscRunAll = (_b.sent()).VscRunAll;
                    return [2 /*return*/, VscRunAll];
                case 693: return [4 /*yield*/, import("react-icons/vsc")];
                case 694:
                    VscRunBelow = (_b.sent()).VscRunBelow;
                    return [2 /*return*/, VscRunBelow];
                case 695: return [4 /*yield*/, import("react-icons/vsc")];
                case 696:
                    VscRunCoverage = (_b.sent()).VscRunCoverage;
                    return [2 /*return*/, VscRunCoverage];
                case 697: return [4 /*yield*/, import("react-icons/vsc")];
                case 698:
                    VscRunErrors = (_b.sent()).VscRunErrors;
                    return [2 /*return*/, VscRunErrors];
                case 699: return [4 /*yield*/, import("react-icons/vsc")];
                case 700:
                    VscSaveAll = (_b.sent()).VscSaveAll;
                    return [2 /*return*/, VscSaveAll];
                case 701: return [4 /*yield*/, import("react-icons/vsc")];
                case 702:
                    VscSaveAs = (_b.sent()).VscSaveAs;
                    return [2 /*return*/, VscSaveAs];
                case 703: return [4 /*yield*/, import("react-icons/vsc")];
                case 704:
                    VscSave = (_b.sent()).VscSave;
                    return [2 /*return*/, VscSave];
                case 705: return [4 /*yield*/, import("react-icons/vsc")];
                case 706:
                    VscScreenFull = (_b.sent()).VscScreenFull;
                    return [2 /*return*/, VscScreenFull];
                case 707: return [4 /*yield*/, import("react-icons/vsc")];
                case 708:
                    VscScreenNormal = (_b.sent()).VscScreenNormal;
                    return [2 /*return*/, VscScreenNormal];
                case 709: return [4 /*yield*/, import("react-icons/vsc")];
                case 710:
                    VscSearchFuzzy = (_b.sent()).VscSearchFuzzy;
                    return [2 /*return*/, VscSearchFuzzy];
                case 711: return [4 /*yield*/, import("react-icons/vsc")];
                case 712:
                    VscSearchStop = (_b.sent()).VscSearchStop;
                    return [2 /*return*/, VscSearchStop];
                case 713: return [4 /*yield*/, import("react-icons/vsc")];
                case 714:
                    VscSearch = (_b.sent()).VscSearch;
                    return [2 /*return*/, VscSearch];
                case 715: return [4 /*yield*/, import("react-icons/vsc")];
                case 716:
                    VscSend = (_b.sent()).VscSend;
                    return [2 /*return*/, VscSend];
                case 717: return [4 /*yield*/, import("react-icons/vsc")];
                case 718:
                    VscServerEnvironment = (_b.sent()).VscServerEnvironment;
                    return [2 /*return*/, VscServerEnvironment];
                case 719: return [4 /*yield*/, import("react-icons/vsc")];
                case 720:
                    VscServerProcess = (_b.sent()).VscServerProcess;
                    return [2 /*return*/, VscServerProcess];
                case 721: return [4 /*yield*/, import("react-icons/vsc")];
                case 722:
                    VscServer = (_b.sent()).VscServer;
                    return [2 /*return*/, VscServer];
                case 723: return [4 /*yield*/, import("react-icons/vsc")];
                case 724:
                    VscSettingsGear = (_b.sent()).VscSettingsGear;
                    return [2 /*return*/, VscSettingsGear];
                case 725: return [4 /*yield*/, import("react-icons/vsc")];
                case 726:
                    VscSettings = (_b.sent()).VscSettings;
                    return [2 /*return*/, VscSettings];
                case 727: return [4 /*yield*/, import("react-icons/vsc")];
                case 728:
                    VscShare = (_b.sent()).VscShare;
                    return [2 /*return*/, VscShare];
                case 729: return [4 /*yield*/, import("react-icons/vsc")];
                case 730:
                    VscShield = (_b.sent()).VscShield;
                    return [2 /*return*/, VscShield];
                case 731: return [4 /*yield*/, import("react-icons/vsc")];
                case 732:
                    VscSignIn = (_b.sent()).VscSignIn;
                    return [2 /*return*/, VscSignIn];
                case 733: return [4 /*yield*/, import("react-icons/vsc")];
                case 734:
                    VscSignOut = (_b.sent()).VscSignOut;
                    return [2 /*return*/, VscSignOut];
                case 735: return [4 /*yield*/, import("react-icons/vsc")];
                case 736:
                    VscSmiley = (_b.sent()).VscSmiley;
                    return [2 /*return*/, VscSmiley];
                case 737: return [4 /*yield*/, import("react-icons/vsc")];
                case 738:
                    VscSnake = (_b.sent()).VscSnake;
                    return [2 /*return*/, VscSnake];
                case 739: return [4 /*yield*/, import("react-icons/vsc")];
                case 740:
                    VscSortPrecedence = (_b.sent()).VscSortPrecedence;
                    return [2 /*return*/, VscSortPrecedence];
                case 741: return [4 /*yield*/, import("react-icons/vsc")];
                case 742:
                    VscSourceControl = (_b.sent()).VscSourceControl;
                    return [2 /*return*/, VscSourceControl];
                case 743: return [4 /*yield*/, import("react-icons/vsc")];
                case 744:
                    VscSparkleFilled = (_b.sent()).VscSparkleFilled;
                    return [2 /*return*/, VscSparkleFilled];
                case 745: return [4 /*yield*/, import("react-icons/vsc")];
                case 746:
                    VscSparkle = (_b.sent()).VscSparkle;
                    return [2 /*return*/, VscSparkle];
                case 747: return [4 /*yield*/, import("react-icons/vsc")];
                case 748:
                    VscSplitHorizontal = (_b.sent()).VscSplitHorizontal;
                    return [2 /*return*/, VscSplitHorizontal];
                case 749: return [4 /*yield*/, import("react-icons/vsc")];
                case 750:
                    VscSplitVertical = (_b.sent()).VscSplitVertical;
                    return [2 /*return*/, VscSplitVertical];
                case 751: return [4 /*yield*/, import("react-icons/vsc")];
                case 752:
                    VscSquirrel = (_b.sent()).VscSquirrel;
                    return [2 /*return*/, VscSquirrel];
                case 753: return [4 /*yield*/, import("react-icons/vsc")];
                case 754:
                    VscStarEmpty = (_b.sent()).VscStarEmpty;
                    return [2 /*return*/, VscStarEmpty];
                case 755: return [4 /*yield*/, import("react-icons/vsc")];
                case 756:
                    VscStarFull = (_b.sent()).VscStarFull;
                    return [2 /*return*/, VscStarFull];
                case 757: return [4 /*yield*/, import("react-icons/vsc")];
                case 758:
                    VscStarHalf = (_b.sent()).VscStarHalf;
                    return [2 /*return*/, VscStarHalf];
                case 759: return [4 /*yield*/, import("react-icons/vsc")];
                case 760:
                    VscStopCircle = (_b.sent()).VscStopCircle;
                    return [2 /*return*/, VscStopCircle];
                case 761: return [4 /*yield*/, import("react-icons/vsc")];
                case 762:
                    VscSurroundWith = (_b.sent()).VscSurroundWith;
                    return [2 /*return*/, VscSurroundWith];
                case 763: return [4 /*yield*/, import("react-icons/vsc")];
                case 764:
                    VscSymbolArray = (_b.sent()).VscSymbolArray;
                    return [2 /*return*/, VscSymbolArray];
                case 765: return [4 /*yield*/, import("react-icons/vsc")];
                case 766:
                    VscSymbolBoolean = (_b.sent()).VscSymbolBoolean;
                    return [2 /*return*/, VscSymbolBoolean];
                case 767: return [4 /*yield*/, import("react-icons/vsc")];
                case 768:
                    VscSymbolClass = (_b.sent()).VscSymbolClass;
                    return [2 /*return*/, VscSymbolClass];
                case 769: return [4 /*yield*/, import("react-icons/vsc")];
                case 770:
                    VscSymbolColor = (_b.sent()).VscSymbolColor;
                    return [2 /*return*/, VscSymbolColor];
                case 771: return [4 /*yield*/, import("react-icons/vsc")];
                case 772:
                    VscSymbolConstant = (_b.sent()).VscSymbolConstant;
                    return [2 /*return*/, VscSymbolConstant];
                case 773: return [4 /*yield*/, import("react-icons/vsc")];
                case 774:
                    VscSymbolEnumMember = (_b.sent()).VscSymbolEnumMember;
                    return [2 /*return*/, VscSymbolEnumMember];
                case 775: return [4 /*yield*/, import("react-icons/vsc")];
                case 776:
                    VscSymbolEnum = (_b.sent()).VscSymbolEnum;
                    return [2 /*return*/, VscSymbolEnum];
                case 777: return [4 /*yield*/, import("react-icons/vsc")];
                case 778:
                    VscSymbolEvent = (_b.sent()).VscSymbolEvent;
                    return [2 /*return*/, VscSymbolEvent];
                case 779: return [4 /*yield*/, import("react-icons/vsc")];
                case 780:
                    VscSymbolField = (_b.sent()).VscSymbolField;
                    return [2 /*return*/, VscSymbolField];
                case 781: return [4 /*yield*/, import("react-icons/vsc")];
                case 782:
                    VscSymbolFile = (_b.sent()).VscSymbolFile;
                    return [2 /*return*/, VscSymbolFile];
                case 783: return [4 /*yield*/, import("react-icons/vsc")];
                case 784:
                    VscSymbolInterface = (_b.sent()).VscSymbolInterface;
                    return [2 /*return*/, VscSymbolInterface];
                case 785: return [4 /*yield*/, import("react-icons/vsc")];
                case 786:
                    VscSymbolKey = (_b.sent()).VscSymbolKey;
                    return [2 /*return*/, VscSymbolKey];
                case 787: return [4 /*yield*/, import("react-icons/vsc")];
                case 788:
                    VscSymbolKeyword = (_b.sent()).VscSymbolKeyword;
                    return [2 /*return*/, VscSymbolKeyword];
                case 789: return [4 /*yield*/, import("react-icons/vsc")];
                case 790:
                    VscSymbolMethod = (_b.sent()).VscSymbolMethod;
                    return [2 /*return*/, VscSymbolMethod];
                case 791: return [4 /*yield*/, import("react-icons/vsc")];
                case 792:
                    VscSymbolMisc = (_b.sent()).VscSymbolMisc;
                    return [2 /*return*/, VscSymbolMisc];
                case 793: return [4 /*yield*/, import("react-icons/vsc")];
                case 794:
                    VscSymbolNamespace = (_b.sent()).VscSymbolNamespace;
                    return [2 /*return*/, VscSymbolNamespace];
                case 795: return [4 /*yield*/, import("react-icons/vsc")];
                case 796:
                    VscSymbolNumeric = (_b.sent()).VscSymbolNumeric;
                    return [2 /*return*/, VscSymbolNumeric];
                case 797: return [4 /*yield*/, import("react-icons/vsc")];
                case 798:
                    VscSymbolOperator = (_b.sent()).VscSymbolOperator;
                    return [2 /*return*/, VscSymbolOperator];
                case 799: return [4 /*yield*/, import("react-icons/vsc")];
                case 800:
                    VscSymbolParameter = (_b.sent()).VscSymbolParameter;
                    return [2 /*return*/, VscSymbolParameter];
                case 801: return [4 /*yield*/, import("react-icons/vsc")];
                case 802:
                    VscSymbolProperty = (_b.sent()).VscSymbolProperty;
                    return [2 /*return*/, VscSymbolProperty];
                case 803: return [4 /*yield*/, import("react-icons/vsc")];
                case 804:
                    VscSymbolRuler = (_b.sent()).VscSymbolRuler;
                    return [2 /*return*/, VscSymbolRuler];
                case 805: return [4 /*yield*/, import("react-icons/vsc")];
                case 806:
                    VscSymbolSnippet = (_b.sent()).VscSymbolSnippet;
                    return [2 /*return*/, VscSymbolSnippet];
                case 807: return [4 /*yield*/, import("react-icons/vsc")];
                case 808:
                    VscSymbolString = (_b.sent()).VscSymbolString;
                    return [2 /*return*/, VscSymbolString];
                case 809: return [4 /*yield*/, import("react-icons/vsc")];
                case 810:
                    VscSymbolStructure = (_b.sent()).VscSymbolStructure;
                    return [2 /*return*/, VscSymbolStructure];
                case 811: return [4 /*yield*/, import("react-icons/vsc")];
                case 812:
                    VscSymbolVariable = (_b.sent()).VscSymbolVariable;
                    return [2 /*return*/, VscSymbolVariable];
                case 813: return [4 /*yield*/, import("react-icons/vsc")];
                case 814:
                    VscSyncIgnored = (_b.sent()).VscSyncIgnored;
                    return [2 /*return*/, VscSyncIgnored];
                case 815: return [4 /*yield*/, import("react-icons/vsc")];
                case 816:
                    VscSync = (_b.sent()).VscSync;
                    return [2 /*return*/, VscSync];
                case 817: return [4 /*yield*/, import("react-icons/vsc")];
                case 818:
                    VscTable = (_b.sent()).VscTable;
                    return [2 /*return*/, VscTable];
                case 819: return [4 /*yield*/, import("react-icons/vsc")];
                case 820:
                    VscTag = (_b.sent()).VscTag;
                    return [2 /*return*/, VscTag];
                case 821: return [4 /*yield*/, import("react-icons/vsc")];
                case 822:
                    VscTarget = (_b.sent()).VscTarget;
                    return [2 /*return*/, VscTarget];
                case 823: return [4 /*yield*/, import("react-icons/vsc")];
                case 824:
                    VscTasklist = (_b.sent()).VscTasklist;
                    return [2 /*return*/, VscTasklist];
                case 825: return [4 /*yield*/, import("react-icons/vsc")];
                case 826:
                    VscTelescope = (_b.sent()).VscTelescope;
                    return [2 /*return*/, VscTelescope];
                case 827: return [4 /*yield*/, import("react-icons/vsc")];
                case 828:
                    VscTerminalBash = (_b.sent()).VscTerminalBash;
                    return [2 /*return*/, VscTerminalBash];
                case 829: return [4 /*yield*/, import("react-icons/vsc")];
                case 830:
                    VscTerminalCmd = (_b.sent()).VscTerminalCmd;
                    return [2 /*return*/, VscTerminalCmd];
                case 831: return [4 /*yield*/, import("react-icons/vsc")];
                case 832:
                    VscTerminalDebian = (_b.sent()).VscTerminalDebian;
                    return [2 /*return*/, VscTerminalDebian];
                case 833: return [4 /*yield*/, import("react-icons/vsc")];
                case 834:
                    VscTerminalLinux = (_b.sent()).VscTerminalLinux;
                    return [2 /*return*/, VscTerminalLinux];
                case 835: return [4 /*yield*/, import("react-icons/vsc")];
                case 836:
                    VscTerminalPowershell = (_b.sent()).VscTerminalPowershell;
                    return [2 /*return*/, VscTerminalPowershell];
                case 837: return [4 /*yield*/, import("react-icons/vsc")];
                case 838:
                    VscTerminalTmux = (_b.sent()).VscTerminalTmux;
                    return [2 /*return*/, VscTerminalTmux];
                case 839: return [4 /*yield*/, import("react-icons/vsc")];
                case 840:
                    VscTerminalUbuntu = (_b.sent()).VscTerminalUbuntu;
                    return [2 /*return*/, VscTerminalUbuntu];
                case 841: return [4 /*yield*/, import("react-icons/vsc")];
                case 842:
                    VscTerminal = (_b.sent()).VscTerminal;
                    return [2 /*return*/, VscTerminal];
                case 843: return [4 /*yield*/, import("react-icons/vsc")];
                case 844:
                    VscTextSize = (_b.sent()).VscTextSize;
                    return [2 /*return*/, VscTextSize];
                case 845: return [4 /*yield*/, import("react-icons/vsc")];
                case 846:
                    VscThreeBars = (_b.sent()).VscThreeBars;
                    return [2 /*return*/, VscThreeBars];
                case 847: return [4 /*yield*/, import("react-icons/vsc")];
                case 848:
                    VscThumbsdownFilled = (_b.sent()).VscThumbsdownFilled;
                    return [2 /*return*/, VscThumbsdownFilled];
                case 849: return [4 /*yield*/, import("react-icons/vsc")];
                case 850:
                    VscThumbsdown = (_b.sent()).VscThumbsdown;
                    return [2 /*return*/, VscThumbsdown];
                case 851: return [4 /*yield*/, import("react-icons/vsc")];
                case 852:
                    VscThumbsupFilled = (_b.sent()).VscThumbsupFilled;
                    return [2 /*return*/, VscThumbsupFilled];
                case 853: return [4 /*yield*/, import("react-icons/vsc")];
                case 854:
                    VscThumbsup = (_b.sent()).VscThumbsup;
                    return [2 /*return*/, VscThumbsup];
                case 855: return [4 /*yield*/, import("react-icons/vsc")];
                case 856:
                    VscTools = (_b.sent()).VscTools;
                    return [2 /*return*/, VscTools];
                case 857: return [4 /*yield*/, import("react-icons/vsc")];
                case 858:
                    VscTrash = (_b.sent()).VscTrash;
                    return [2 /*return*/, VscTrash];
                case 859: return [4 /*yield*/, import("react-icons/vsc")];
                case 860:
                    VscTriangleDown = (_b.sent()).VscTriangleDown;
                    return [2 /*return*/, VscTriangleDown];
                case 861: return [4 /*yield*/, import("react-icons/vsc")];
                case 862:
                    VscTriangleLeft = (_b.sent()).VscTriangleLeft;
                    return [2 /*return*/, VscTriangleLeft];
                case 863: return [4 /*yield*/, import("react-icons/vsc")];
                case 864:
                    VscTriangleRight = (_b.sent()).VscTriangleRight;
                    return [2 /*return*/, VscTriangleRight];
                case 865: return [4 /*yield*/, import("react-icons/vsc")];
                case 866:
                    VscTriangleUp = (_b.sent()).VscTriangleUp;
                    return [2 /*return*/, VscTriangleUp];
                case 867: return [4 /*yield*/, import("react-icons/vsc")];
                case 868:
                    VscTwitter = (_b.sent()).VscTwitter;
                    return [2 /*return*/, VscTwitter];
                case 869: return [4 /*yield*/, import("react-icons/vsc")];
                case 870:
                    VscTypeHierarchySub = (_b.sent()).VscTypeHierarchySub;
                    return [2 /*return*/, VscTypeHierarchySub];
                case 871: return [4 /*yield*/, import("react-icons/vsc")];
                case 872:
                    VscTypeHierarchySuper = (_b.sent()).VscTypeHierarchySuper;
                    return [2 /*return*/, VscTypeHierarchySuper];
                case 873: return [4 /*yield*/, import("react-icons/vsc")];
                case 874:
                    VscTypeHierarchy = (_b.sent()).VscTypeHierarchy;
                    return [2 /*return*/, VscTypeHierarchy];
                case 875: return [4 /*yield*/, import("react-icons/vsc")];
                case 876:
                    VscUnfold = (_b.sent()).VscUnfold;
                    return [2 /*return*/, VscUnfold];
                case 877: return [4 /*yield*/, import("react-icons/vsc")];
                case 878:
                    VscUngroupByRefType = (_b.sent()).VscUngroupByRefType;
                    return [2 /*return*/, VscUngroupByRefType];
                case 879: return [4 /*yield*/, import("react-icons/vsc")];
                case 880:
                    VscUnlock = (_b.sent()).VscUnlock;
                    return [2 /*return*/, VscUnlock];
                case 881: return [4 /*yield*/, import("react-icons/vsc")];
                case 882:
                    VscUnmute = (_b.sent()).VscUnmute;
                    return [2 /*return*/, VscUnmute];
                case 883: return [4 /*yield*/, import("react-icons/vsc")];
                case 884:
                    VscUnverified = (_b.sent()).VscUnverified;
                    return [2 /*return*/, VscUnverified];
                case 885: return [4 /*yield*/, import("react-icons/vsc")];
                case 886:
                    VscVariableGroup = (_b.sent()).VscVariableGroup;
                    return [2 /*return*/, VscVariableGroup];
                case 887: return [4 /*yield*/, import("react-icons/vsc")];
                case 888:
                    VscVerifiedFilled = (_b.sent()).VscVerifiedFilled;
                    return [2 /*return*/, VscVerifiedFilled];
                case 889: return [4 /*yield*/, import("react-icons/vsc")];
                case 890:
                    VscVerified = (_b.sent()).VscVerified;
                    return [2 /*return*/, VscVerified];
                case 891: return [4 /*yield*/, import("react-icons/vsc")];
                case 892:
                    VscVersions = (_b.sent()).VscVersions;
                    return [2 /*return*/, VscVersions];
                case 893: return [4 /*yield*/, import("react-icons/vsc")];
                case 894:
                    VscVmActive = (_b.sent()).VscVmActive;
                    return [2 /*return*/, VscVmActive];
                case 895: return [4 /*yield*/, import("react-icons/vsc")];
                case 896:
                    VscVmConnect = (_b.sent()).VscVmConnect;
                    return [2 /*return*/, VscVmConnect];
                case 897: return [4 /*yield*/, import("react-icons/vsc")];
                case 898:
                    VscVmOutline = (_b.sent()).VscVmOutline;
                    return [2 /*return*/, VscVmOutline];
                case 899: return [4 /*yield*/, import("react-icons/vsc")];
                case 900:
                    VscVmRunning = (_b.sent()).VscVmRunning;
                    return [2 /*return*/, VscVmRunning];
                case 901: return [4 /*yield*/, import("react-icons/vsc")];
                case 902:
                    VscVm = (_b.sent()).VscVm;
                    return [2 /*return*/, VscVm];
                case 903: return [4 /*yield*/, import("react-icons/vsc")];
                case 904:
                    VscVr = (_b.sent()).VscVr;
                    return [2 /*return*/, VscVr];
                case 905: return [4 /*yield*/, import("react-icons/vsc")];
                case 906:
                    VscVscodeInsiders = (_b.sent()).VscVscodeInsiders;
                    return [2 /*return*/, VscVscodeInsiders];
                case 907: return [4 /*yield*/, import("react-icons/vsc")];
                case 908:
                    VscVscode = (_b.sent()).VscVscode;
                    return [2 /*return*/, VscVscode];
                case 909: return [4 /*yield*/, import("react-icons/vsc")];
                case 910:
                    VscWand = (_b.sent()).VscWand;
                    return [2 /*return*/, VscWand];
                case 911: return [4 /*yield*/, import("react-icons/vsc")];
                case 912:
                    VscWarning = (_b.sent()).VscWarning;
                    return [2 /*return*/, VscWarning];
                case 913: return [4 /*yield*/, import("react-icons/vsc")];
                case 914:
                    VscWatch = (_b.sent()).VscWatch;
                    return [2 /*return*/, VscWatch];
                case 915: return [4 /*yield*/, import("react-icons/vsc")];
                case 916:
                    VscWhitespace = (_b.sent()).VscWhitespace;
                    return [2 /*return*/, VscWhitespace];
                case 917: return [4 /*yield*/, import("react-icons/vsc")];
                case 918:
                    VscWholeWord = (_b.sent()).VscWholeWord;
                    return [2 /*return*/, VscWholeWord];
                case 919: return [4 /*yield*/, import("react-icons/vsc")];
                case 920:
                    VscWindow = (_b.sent()).VscWindow;
                    return [2 /*return*/, VscWindow];
                case 921: return [4 /*yield*/, import("react-icons/vsc")];
                case 922:
                    VscWordWrap = (_b.sent()).VscWordWrap;
                    return [2 /*return*/, VscWordWrap];
                case 923: return [4 /*yield*/, import("react-icons/vsc")];
                case 924:
                    VscWorkspaceTrusted = (_b.sent()).VscWorkspaceTrusted;
                    return [2 /*return*/, VscWorkspaceTrusted];
                case 925: return [4 /*yield*/, import("react-icons/vsc")];
                case 926:
                    VscWorkspaceUnknown = (_b.sent()).VscWorkspaceUnknown;
                    return [2 /*return*/, VscWorkspaceUnknown];
                case 927: return [4 /*yield*/, import("react-icons/vsc")];
                case 928:
                    VscWorkspaceUntrusted = (_b.sent()).VscWorkspaceUntrusted;
                    return [2 /*return*/, VscWorkspaceUntrusted];
                case 929: return [4 /*yield*/, import("react-icons/vsc")];
                case 930:
                    VscZoomIn = (_b.sent()).VscZoomIn;
                    return [2 /*return*/, VscZoomIn];
                case 931: return [4 /*yield*/, import("react-icons/vsc")];
                case 932:
                    VscZoomOut = (_b.sent()).VscZoomOut;
                    return [2 /*return*/, VscZoomOut];
                case 933: return [2 /*return*/];
            }
        });
    });
}
