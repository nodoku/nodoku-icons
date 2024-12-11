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
export function nameToReactIcon_go_0(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, GoAlert, GoAlertFill, GoArchive, GoArrowBoth, GoArrowDown, GoArrowDownLeft, GoArrowDownRight, GoArrowLeft, GoArrowRight, GoArrowSwitch, GoArrowUp, GoArrowUpLeft, GoArrowUpRight, GoBeaker, GoBell, GoBellFill, GoBellSlash, GoBlocked, GoBold, GoBook, GoBookmark, GoBookmarkFill, GoBookmarkSlash, GoBookmarkSlashFill, GoBriefcase, GoBroadcast, GoBrowser, GoBug, GoCalendar, GoCheck, GoCheckCircle, GoCheckCircleFill, GoCheckbox, GoChecklist, GoChevronDown, GoChevronLeft, GoChevronRight, GoChevronUp, GoCircle, GoCircleSlash, GoClock, GoClockFill, GoCloud, GoCloudOffline, GoCode, GoCodeOfConduct, GoCodeReview, GoCodeSquare, GoCodescan, GoCodescanCheckmark, GoCodespaces, GoColumns, GoCommandPalette, GoComment, GoCommentDiscussion, GoCommit, GoContainer, GoCopilot, GoCopy, GoCpu, GoCreditCard, GoCrossReference, GoDash, GoDatabase, GoDependabot, GoDesktopDownload, GoDeviceCameraVideo, GoDeviceDesktop, GoDeviceMobile, GoDiamond, GoDiff, GoDiscussionClosed, GoDiscussionDuplicate, GoDiscussionOutdated, GoDot, GoDotFill, GoDownload, GoDuplicate, GoEye, GoEyeClosed, GoFile, GoFileBinary, GoFileCode, GoFileDiff, GoFileDirectory, GoFileDirectoryFill, GoFileMedia, GoFileSubmodule, GoFileSymlinkFile, GoFileZip, GoFilter, GoFlame, GoFold, GoFoldDown, GoFoldUp, GoGear, GoGift, GoGitBranch, GoGitCommit, GoGitCompare, GoGitMerge, GoGitMergeQueue, GoGitPullRequest, GoGitPullRequestClosed, GoGitPullRequestDraft, GoGlobe, GoGoal, GoGrabber, GoGraph, GoHash, GoHeading, GoHeart, GoHeartFill, GoHistory, GoHome, GoHomeFill, GoHorizontalRule, GoHourglass, GoHubot, GoImage, GoInbox, GoInfinity, GoInfo, GoIssueClosed, GoIssueDraft, GoIssueOpened, GoIssueReopened, GoIssueTrackedBy, GoIssueTracks, GoItalic, GoIterations, GoKebabHorizontal, GoKey, GoLaw, GoLightBulb, GoLink, GoLinkExternal, GoListOrdered, GoListUnordered, GoLocation, GoLock, GoLog, GoMail, GoMegaphone, GoMention, GoMilestone, GoMirror, GoMoon, GoMortarBoard, GoMoveToBottom, GoMoveToEnd, GoMoveToStart, GoMoveToTop, GoMultiSelect, GoMute, GoNoEntry, GoNorthStar, GoNote, GoNumber, GoOrganization, GoPackage, GoPackageDependencies, GoPackageDependents, GoPaperAirplane, GoPaperclip, GoPasskeyFill, GoPaste, GoPencil, GoPeople, GoPerson, GoPersonAdd, GoPersonFill, GoPin, GoPlay, GoPlug, GoPlus, GoPlusCircle, GoProject, GoProjectRoadmap, GoProjectSymlink, GoProjectTemplate, GoPulse, GoQuestion, GoQuote, GoRead, GoRelFilePath, GoReply, GoRepo, GoRepoForked, GoRepoLocked, GoRepoPush, GoRepoTemplate, GoReport, GoRocket, GoRows, GoRss, GoRuby, GoScreenFull, GoScreenNormal, GoSearch, GoServer, GoShare, GoShareAndroid, GoShield, GoShieldCheck, GoShieldLock, GoShieldSlash, GoShieldX, GoSidebarCollapse, GoSidebarExpand, GoSignIn, GoSignOut, GoSingleSelect, GoSkip, GoSkipFill, GoSmiley, GoSortAsc, GoSortDesc, GoSponsorTiers, GoSquare, GoSquareFill, GoSquirrel, GoStack, GoStar, GoStarFill, GoStop, GoStopwatch, GoStrikethrough, GoSun, GoSync, GoTab, GoTable, GoTag, GoTasklist, GoTelescope, GoTelescopeFill, GoTerminal, GoThumbsdown, GoThumbsup, GoTools, GoTrash, GoTriangleDown, GoTriangleLeft, GoTriangleRight, GoTriangleUp, GoTrophy, GoTypography, GoUnfold, GoUnlink, GoUnlock, GoUnmute, GoUnread, GoUnverified, GoUpload, GoVerified, GoVersions, GoVideo, GoWorkflow, GoX, GoXCircle, GoXCircleFill, GoZap, GoZoomIn, GoZoomOut;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "go:GoAlert": return [3 /*break*/, 1];
                        case "go:GoAlertFill": return [3 /*break*/, 3];
                        case "go:GoArchive": return [3 /*break*/, 5];
                        case "go:GoArrowBoth": return [3 /*break*/, 7];
                        case "go:GoArrowDown": return [3 /*break*/, 9];
                        case "go:GoArrowDownLeft": return [3 /*break*/, 11];
                        case "go:GoArrowDownRight": return [3 /*break*/, 13];
                        case "go:GoArrowLeft": return [3 /*break*/, 15];
                        case "go:GoArrowRight": return [3 /*break*/, 17];
                        case "go:GoArrowSwitch": return [3 /*break*/, 19];
                        case "go:GoArrowUp": return [3 /*break*/, 21];
                        case "go:GoArrowUpLeft": return [3 /*break*/, 23];
                        case "go:GoArrowUpRight": return [3 /*break*/, 25];
                        case "go:GoBeaker": return [3 /*break*/, 27];
                        case "go:GoBell": return [3 /*break*/, 29];
                        case "go:GoBellFill": return [3 /*break*/, 31];
                        case "go:GoBellSlash": return [3 /*break*/, 33];
                        case "go:GoBlocked": return [3 /*break*/, 35];
                        case "go:GoBold": return [3 /*break*/, 37];
                        case "go:GoBook": return [3 /*break*/, 39];
                        case "go:GoBookmark": return [3 /*break*/, 41];
                        case "go:GoBookmarkFill": return [3 /*break*/, 43];
                        case "go:GoBookmarkSlash": return [3 /*break*/, 45];
                        case "go:GoBookmarkSlashFill": return [3 /*break*/, 47];
                        case "go:GoBriefcase": return [3 /*break*/, 49];
                        case "go:GoBroadcast": return [3 /*break*/, 51];
                        case "go:GoBrowser": return [3 /*break*/, 53];
                        case "go:GoBug": return [3 /*break*/, 55];
                        case "go:GoCalendar": return [3 /*break*/, 57];
                        case "go:GoCheck": return [3 /*break*/, 59];
                        case "go:GoCheckCircle": return [3 /*break*/, 61];
                        case "go:GoCheckCircleFill": return [3 /*break*/, 63];
                        case "go:GoCheckbox": return [3 /*break*/, 65];
                        case "go:GoChecklist": return [3 /*break*/, 67];
                        case "go:GoChevronDown": return [3 /*break*/, 69];
                        case "go:GoChevronLeft": return [3 /*break*/, 71];
                        case "go:GoChevronRight": return [3 /*break*/, 73];
                        case "go:GoChevronUp": return [3 /*break*/, 75];
                        case "go:GoCircle": return [3 /*break*/, 77];
                        case "go:GoCircleSlash": return [3 /*break*/, 79];
                        case "go:GoClock": return [3 /*break*/, 81];
                        case "go:GoClockFill": return [3 /*break*/, 83];
                        case "go:GoCloud": return [3 /*break*/, 85];
                        case "go:GoCloudOffline": return [3 /*break*/, 87];
                        case "go:GoCode": return [3 /*break*/, 89];
                        case "go:GoCodeOfConduct": return [3 /*break*/, 91];
                        case "go:GoCodeReview": return [3 /*break*/, 93];
                        case "go:GoCodeSquare": return [3 /*break*/, 95];
                        case "go:GoCodescan": return [3 /*break*/, 97];
                        case "go:GoCodescanCheckmark": return [3 /*break*/, 99];
                        case "go:GoCodespaces": return [3 /*break*/, 101];
                        case "go:GoColumns": return [3 /*break*/, 103];
                        case "go:GoCommandPalette": return [3 /*break*/, 105];
                        case "go:GoComment": return [3 /*break*/, 107];
                        case "go:GoCommentDiscussion": return [3 /*break*/, 109];
                        case "go:GoCommit": return [3 /*break*/, 111];
                        case "go:GoContainer": return [3 /*break*/, 113];
                        case "go:GoCopilot": return [3 /*break*/, 115];
                        case "go:GoCopy": return [3 /*break*/, 117];
                        case "go:GoCpu": return [3 /*break*/, 119];
                        case "go:GoCreditCard": return [3 /*break*/, 121];
                        case "go:GoCrossReference": return [3 /*break*/, 123];
                        case "go:GoDash": return [3 /*break*/, 125];
                        case "go:GoDatabase": return [3 /*break*/, 127];
                        case "go:GoDependabot": return [3 /*break*/, 129];
                        case "go:GoDesktopDownload": return [3 /*break*/, 131];
                        case "go:GoDeviceCameraVideo": return [3 /*break*/, 133];
                        case "go:GoDeviceDesktop": return [3 /*break*/, 135];
                        case "go:GoDeviceMobile": return [3 /*break*/, 137];
                        case "go:GoDiamond": return [3 /*break*/, 139];
                        case "go:GoDiff": return [3 /*break*/, 141];
                        case "go:GoDiscussionClosed": return [3 /*break*/, 143];
                        case "go:GoDiscussionDuplicate": return [3 /*break*/, 145];
                        case "go:GoDiscussionOutdated": return [3 /*break*/, 147];
                        case "go:GoDot": return [3 /*break*/, 149];
                        case "go:GoDotFill": return [3 /*break*/, 151];
                        case "go:GoDownload": return [3 /*break*/, 153];
                        case "go:GoDuplicate": return [3 /*break*/, 155];
                        case "go:GoEye": return [3 /*break*/, 157];
                        case "go:GoEyeClosed": return [3 /*break*/, 159];
                        case "go:GoFile": return [3 /*break*/, 161];
                        case "go:GoFileBinary": return [3 /*break*/, 163];
                        case "go:GoFileCode": return [3 /*break*/, 165];
                        case "go:GoFileDiff": return [3 /*break*/, 167];
                        case "go:GoFileDirectory": return [3 /*break*/, 169];
                        case "go:GoFileDirectoryFill": return [3 /*break*/, 171];
                        case "go:GoFileMedia": return [3 /*break*/, 173];
                        case "go:GoFileSubmodule": return [3 /*break*/, 175];
                        case "go:GoFileSymlinkFile": return [3 /*break*/, 177];
                        case "go:GoFileZip": return [3 /*break*/, 179];
                        case "go:GoFilter": return [3 /*break*/, 181];
                        case "go:GoFlame": return [3 /*break*/, 183];
                        case "go:GoFold": return [3 /*break*/, 185];
                        case "go:GoFoldDown": return [3 /*break*/, 187];
                        case "go:GoFoldUp": return [3 /*break*/, 189];
                        case "go:GoGear": return [3 /*break*/, 191];
                        case "go:GoGift": return [3 /*break*/, 193];
                        case "go:GoGitBranch": return [3 /*break*/, 195];
                        case "go:GoGitCommit": return [3 /*break*/, 197];
                        case "go:GoGitCompare": return [3 /*break*/, 199];
                        case "go:GoGitMerge": return [3 /*break*/, 201];
                        case "go:GoGitMergeQueue": return [3 /*break*/, 203];
                        case "go:GoGitPullRequest": return [3 /*break*/, 205];
                        case "go:GoGitPullRequestClosed": return [3 /*break*/, 207];
                        case "go:GoGitPullRequestDraft": return [3 /*break*/, 209];
                        case "go:GoGlobe": return [3 /*break*/, 211];
                        case "go:GoGoal": return [3 /*break*/, 213];
                        case "go:GoGrabber": return [3 /*break*/, 215];
                        case "go:GoGraph": return [3 /*break*/, 217];
                        case "go:GoHash": return [3 /*break*/, 219];
                        case "go:GoHeading": return [3 /*break*/, 221];
                        case "go:GoHeart": return [3 /*break*/, 223];
                        case "go:GoHeartFill": return [3 /*break*/, 225];
                        case "go:GoHistory": return [3 /*break*/, 227];
                        case "go:GoHome": return [3 /*break*/, 229];
                        case "go:GoHomeFill": return [3 /*break*/, 231];
                        case "go:GoHorizontalRule": return [3 /*break*/, 233];
                        case "go:GoHourglass": return [3 /*break*/, 235];
                        case "go:GoHubot": return [3 /*break*/, 237];
                        case "go:GoImage": return [3 /*break*/, 239];
                        case "go:GoInbox": return [3 /*break*/, 241];
                        case "go:GoInfinity": return [3 /*break*/, 243];
                        case "go:GoInfo": return [3 /*break*/, 245];
                        case "go:GoIssueClosed": return [3 /*break*/, 247];
                        case "go:GoIssueDraft": return [3 /*break*/, 249];
                        case "go:GoIssueOpened": return [3 /*break*/, 251];
                        case "go:GoIssueReopened": return [3 /*break*/, 253];
                        case "go:GoIssueTrackedBy": return [3 /*break*/, 255];
                        case "go:GoIssueTracks": return [3 /*break*/, 257];
                        case "go:GoItalic": return [3 /*break*/, 259];
                        case "go:GoIterations": return [3 /*break*/, 261];
                        case "go:GoKebabHorizontal": return [3 /*break*/, 263];
                        case "go:GoKey": return [3 /*break*/, 265];
                        case "go:GoLaw": return [3 /*break*/, 267];
                        case "go:GoLightBulb": return [3 /*break*/, 269];
                        case "go:GoLink": return [3 /*break*/, 271];
                        case "go:GoLinkExternal": return [3 /*break*/, 273];
                        case "go:GoListOrdered": return [3 /*break*/, 275];
                        case "go:GoListUnordered": return [3 /*break*/, 277];
                        case "go:GoLocation": return [3 /*break*/, 279];
                        case "go:GoLock": return [3 /*break*/, 281];
                        case "go:GoLog": return [3 /*break*/, 283];
                        case "go:GoMail": return [3 /*break*/, 285];
                        case "go:GoMegaphone": return [3 /*break*/, 287];
                        case "go:GoMention": return [3 /*break*/, 289];
                        case "go:GoMilestone": return [3 /*break*/, 291];
                        case "go:GoMirror": return [3 /*break*/, 293];
                        case "go:GoMoon": return [3 /*break*/, 295];
                        case "go:GoMortarBoard": return [3 /*break*/, 297];
                        case "go:GoMoveToBottom": return [3 /*break*/, 299];
                        case "go:GoMoveToEnd": return [3 /*break*/, 301];
                        case "go:GoMoveToStart": return [3 /*break*/, 303];
                        case "go:GoMoveToTop": return [3 /*break*/, 305];
                        case "go:GoMultiSelect": return [3 /*break*/, 307];
                        case "go:GoMute": return [3 /*break*/, 309];
                        case "go:GoNoEntry": return [3 /*break*/, 311];
                        case "go:GoNorthStar": return [3 /*break*/, 313];
                        case "go:GoNote": return [3 /*break*/, 315];
                        case "go:GoNumber": return [3 /*break*/, 317];
                        case "go:GoOrganization": return [3 /*break*/, 319];
                        case "go:GoPackage": return [3 /*break*/, 321];
                        case "go:GoPackageDependencies": return [3 /*break*/, 323];
                        case "go:GoPackageDependents": return [3 /*break*/, 325];
                        case "go:GoPaperAirplane": return [3 /*break*/, 327];
                        case "go:GoPaperclip": return [3 /*break*/, 329];
                        case "go:GoPasskeyFill": return [3 /*break*/, 331];
                        case "go:GoPaste": return [3 /*break*/, 333];
                        case "go:GoPencil": return [3 /*break*/, 335];
                        case "go:GoPeople": return [3 /*break*/, 337];
                        case "go:GoPerson": return [3 /*break*/, 339];
                        case "go:GoPersonAdd": return [3 /*break*/, 341];
                        case "go:GoPersonFill": return [3 /*break*/, 343];
                        case "go:GoPin": return [3 /*break*/, 345];
                        case "go:GoPlay": return [3 /*break*/, 347];
                        case "go:GoPlug": return [3 /*break*/, 349];
                        case "go:GoPlus": return [3 /*break*/, 351];
                        case "go:GoPlusCircle": return [3 /*break*/, 353];
                        case "go:GoProject": return [3 /*break*/, 355];
                        case "go:GoProjectRoadmap": return [3 /*break*/, 357];
                        case "go:GoProjectSymlink": return [3 /*break*/, 359];
                        case "go:GoProjectTemplate": return [3 /*break*/, 361];
                        case "go:GoPulse": return [3 /*break*/, 363];
                        case "go:GoQuestion": return [3 /*break*/, 365];
                        case "go:GoQuote": return [3 /*break*/, 367];
                        case "go:GoRead": return [3 /*break*/, 369];
                        case "go:GoRelFilePath": return [3 /*break*/, 371];
                        case "go:GoReply": return [3 /*break*/, 373];
                        case "go:GoRepo": return [3 /*break*/, 375];
                        case "go:GoRepoForked": return [3 /*break*/, 377];
                        case "go:GoRepoLocked": return [3 /*break*/, 379];
                        case "go:GoRepoPush": return [3 /*break*/, 381];
                        case "go:GoRepoTemplate": return [3 /*break*/, 383];
                        case "go:GoReport": return [3 /*break*/, 385];
                        case "go:GoRocket": return [3 /*break*/, 387];
                        case "go:GoRows": return [3 /*break*/, 389];
                        case "go:GoRss": return [3 /*break*/, 391];
                        case "go:GoRuby": return [3 /*break*/, 393];
                        case "go:GoScreenFull": return [3 /*break*/, 395];
                        case "go:GoScreenNormal": return [3 /*break*/, 397];
                        case "go:GoSearch": return [3 /*break*/, 399];
                        case "go:GoServer": return [3 /*break*/, 401];
                        case "go:GoShare": return [3 /*break*/, 403];
                        case "go:GoShareAndroid": return [3 /*break*/, 405];
                        case "go:GoShield": return [3 /*break*/, 407];
                        case "go:GoShieldCheck": return [3 /*break*/, 409];
                        case "go:GoShieldLock": return [3 /*break*/, 411];
                        case "go:GoShieldSlash": return [3 /*break*/, 413];
                        case "go:GoShieldX": return [3 /*break*/, 415];
                        case "go:GoSidebarCollapse": return [3 /*break*/, 417];
                        case "go:GoSidebarExpand": return [3 /*break*/, 419];
                        case "go:GoSignIn": return [3 /*break*/, 421];
                        case "go:GoSignOut": return [3 /*break*/, 423];
                        case "go:GoSingleSelect": return [3 /*break*/, 425];
                        case "go:GoSkip": return [3 /*break*/, 427];
                        case "go:GoSkipFill": return [3 /*break*/, 429];
                        case "go:GoSmiley": return [3 /*break*/, 431];
                        case "go:GoSortAsc": return [3 /*break*/, 433];
                        case "go:GoSortDesc": return [3 /*break*/, 435];
                        case "go:GoSponsorTiers": return [3 /*break*/, 437];
                        case "go:GoSquare": return [3 /*break*/, 439];
                        case "go:GoSquareFill": return [3 /*break*/, 441];
                        case "go:GoSquirrel": return [3 /*break*/, 443];
                        case "go:GoStack": return [3 /*break*/, 445];
                        case "go:GoStar": return [3 /*break*/, 447];
                        case "go:GoStarFill": return [3 /*break*/, 449];
                        case "go:GoStop": return [3 /*break*/, 451];
                        case "go:GoStopwatch": return [3 /*break*/, 453];
                        case "go:GoStrikethrough": return [3 /*break*/, 455];
                        case "go:GoSun": return [3 /*break*/, 457];
                        case "go:GoSync": return [3 /*break*/, 459];
                        case "go:GoTab": return [3 /*break*/, 461];
                        case "go:GoTable": return [3 /*break*/, 463];
                        case "go:GoTag": return [3 /*break*/, 465];
                        case "go:GoTasklist": return [3 /*break*/, 467];
                        case "go:GoTelescope": return [3 /*break*/, 469];
                        case "go:GoTelescopeFill": return [3 /*break*/, 471];
                        case "go:GoTerminal": return [3 /*break*/, 473];
                        case "go:GoThumbsdown": return [3 /*break*/, 475];
                        case "go:GoThumbsup": return [3 /*break*/, 477];
                        case "go:GoTools": return [3 /*break*/, 479];
                        case "go:GoTrash": return [3 /*break*/, 481];
                        case "go:GoTriangleDown": return [3 /*break*/, 483];
                        case "go:GoTriangleLeft": return [3 /*break*/, 485];
                        case "go:GoTriangleRight": return [3 /*break*/, 487];
                        case "go:GoTriangleUp": return [3 /*break*/, 489];
                        case "go:GoTrophy": return [3 /*break*/, 491];
                        case "go:GoTypography": return [3 /*break*/, 493];
                        case "go:GoUnfold": return [3 /*break*/, 495];
                        case "go:GoUnlink": return [3 /*break*/, 497];
                        case "go:GoUnlock": return [3 /*break*/, 499];
                        case "go:GoUnmute": return [3 /*break*/, 501];
                        case "go:GoUnread": return [3 /*break*/, 503];
                        case "go:GoUnverified": return [3 /*break*/, 505];
                        case "go:GoUpload": return [3 /*break*/, 507];
                        case "go:GoVerified": return [3 /*break*/, 509];
                        case "go:GoVersions": return [3 /*break*/, 511];
                        case "go:GoVideo": return [3 /*break*/, 513];
                        case "go:GoWorkflow": return [3 /*break*/, 515];
                        case "go:GoX": return [3 /*break*/, 517];
                        case "go:GoXCircle": return [3 /*break*/, 519];
                        case "go:GoXCircleFill": return [3 /*break*/, 521];
                        case "go:GoZap": return [3 /*break*/, 523];
                        case "go:GoZoomIn": return [3 /*break*/, 525];
                        case "go:GoZoomOut": return [3 /*break*/, 527];
                    }
                    return [3 /*break*/, 529];
                case 1: return [4 /*yield*/, import("react-icons/go")];
                case 2:
                    GoAlert = (_b.sent()).GoAlert;
                    return [2 /*return*/, GoAlert];
                case 3: return [4 /*yield*/, import("react-icons/go")];
                case 4:
                    GoAlertFill = (_b.sent()).GoAlertFill;
                    return [2 /*return*/, GoAlertFill];
                case 5: return [4 /*yield*/, import("react-icons/go")];
                case 6:
                    GoArchive = (_b.sent()).GoArchive;
                    return [2 /*return*/, GoArchive];
                case 7: return [4 /*yield*/, import("react-icons/go")];
                case 8:
                    GoArrowBoth = (_b.sent()).GoArrowBoth;
                    return [2 /*return*/, GoArrowBoth];
                case 9: return [4 /*yield*/, import("react-icons/go")];
                case 10:
                    GoArrowDown = (_b.sent()).GoArrowDown;
                    return [2 /*return*/, GoArrowDown];
                case 11: return [4 /*yield*/, import("react-icons/go")];
                case 12:
                    GoArrowDownLeft = (_b.sent()).GoArrowDownLeft;
                    return [2 /*return*/, GoArrowDownLeft];
                case 13: return [4 /*yield*/, import("react-icons/go")];
                case 14:
                    GoArrowDownRight = (_b.sent()).GoArrowDownRight;
                    return [2 /*return*/, GoArrowDownRight];
                case 15: return [4 /*yield*/, import("react-icons/go")];
                case 16:
                    GoArrowLeft = (_b.sent()).GoArrowLeft;
                    return [2 /*return*/, GoArrowLeft];
                case 17: return [4 /*yield*/, import("react-icons/go")];
                case 18:
                    GoArrowRight = (_b.sent()).GoArrowRight;
                    return [2 /*return*/, GoArrowRight];
                case 19: return [4 /*yield*/, import("react-icons/go")];
                case 20:
                    GoArrowSwitch = (_b.sent()).GoArrowSwitch;
                    return [2 /*return*/, GoArrowSwitch];
                case 21: return [4 /*yield*/, import("react-icons/go")];
                case 22:
                    GoArrowUp = (_b.sent()).GoArrowUp;
                    return [2 /*return*/, GoArrowUp];
                case 23: return [4 /*yield*/, import("react-icons/go")];
                case 24:
                    GoArrowUpLeft = (_b.sent()).GoArrowUpLeft;
                    return [2 /*return*/, GoArrowUpLeft];
                case 25: return [4 /*yield*/, import("react-icons/go")];
                case 26:
                    GoArrowUpRight = (_b.sent()).GoArrowUpRight;
                    return [2 /*return*/, GoArrowUpRight];
                case 27: return [4 /*yield*/, import("react-icons/go")];
                case 28:
                    GoBeaker = (_b.sent()).GoBeaker;
                    return [2 /*return*/, GoBeaker];
                case 29: return [4 /*yield*/, import("react-icons/go")];
                case 30:
                    GoBell = (_b.sent()).GoBell;
                    return [2 /*return*/, GoBell];
                case 31: return [4 /*yield*/, import("react-icons/go")];
                case 32:
                    GoBellFill = (_b.sent()).GoBellFill;
                    return [2 /*return*/, GoBellFill];
                case 33: return [4 /*yield*/, import("react-icons/go")];
                case 34:
                    GoBellSlash = (_b.sent()).GoBellSlash;
                    return [2 /*return*/, GoBellSlash];
                case 35: return [4 /*yield*/, import("react-icons/go")];
                case 36:
                    GoBlocked = (_b.sent()).GoBlocked;
                    return [2 /*return*/, GoBlocked];
                case 37: return [4 /*yield*/, import("react-icons/go")];
                case 38:
                    GoBold = (_b.sent()).GoBold;
                    return [2 /*return*/, GoBold];
                case 39: return [4 /*yield*/, import("react-icons/go")];
                case 40:
                    GoBook = (_b.sent()).GoBook;
                    return [2 /*return*/, GoBook];
                case 41: return [4 /*yield*/, import("react-icons/go")];
                case 42:
                    GoBookmark = (_b.sent()).GoBookmark;
                    return [2 /*return*/, GoBookmark];
                case 43: return [4 /*yield*/, import("react-icons/go")];
                case 44:
                    GoBookmarkFill = (_b.sent()).GoBookmarkFill;
                    return [2 /*return*/, GoBookmarkFill];
                case 45: return [4 /*yield*/, import("react-icons/go")];
                case 46:
                    GoBookmarkSlash = (_b.sent()).GoBookmarkSlash;
                    return [2 /*return*/, GoBookmarkSlash];
                case 47: return [4 /*yield*/, import("react-icons/go")];
                case 48:
                    GoBookmarkSlashFill = (_b.sent()).GoBookmarkSlashFill;
                    return [2 /*return*/, GoBookmarkSlashFill];
                case 49: return [4 /*yield*/, import("react-icons/go")];
                case 50:
                    GoBriefcase = (_b.sent()).GoBriefcase;
                    return [2 /*return*/, GoBriefcase];
                case 51: return [4 /*yield*/, import("react-icons/go")];
                case 52:
                    GoBroadcast = (_b.sent()).GoBroadcast;
                    return [2 /*return*/, GoBroadcast];
                case 53: return [4 /*yield*/, import("react-icons/go")];
                case 54:
                    GoBrowser = (_b.sent()).GoBrowser;
                    return [2 /*return*/, GoBrowser];
                case 55: return [4 /*yield*/, import("react-icons/go")];
                case 56:
                    GoBug = (_b.sent()).GoBug;
                    return [2 /*return*/, GoBug];
                case 57: return [4 /*yield*/, import("react-icons/go")];
                case 58:
                    GoCalendar = (_b.sent()).GoCalendar;
                    return [2 /*return*/, GoCalendar];
                case 59: return [4 /*yield*/, import("react-icons/go")];
                case 60:
                    GoCheck = (_b.sent()).GoCheck;
                    return [2 /*return*/, GoCheck];
                case 61: return [4 /*yield*/, import("react-icons/go")];
                case 62:
                    GoCheckCircle = (_b.sent()).GoCheckCircle;
                    return [2 /*return*/, GoCheckCircle];
                case 63: return [4 /*yield*/, import("react-icons/go")];
                case 64:
                    GoCheckCircleFill = (_b.sent()).GoCheckCircleFill;
                    return [2 /*return*/, GoCheckCircleFill];
                case 65: return [4 /*yield*/, import("react-icons/go")];
                case 66:
                    GoCheckbox = (_b.sent()).GoCheckbox;
                    return [2 /*return*/, GoCheckbox];
                case 67: return [4 /*yield*/, import("react-icons/go")];
                case 68:
                    GoChecklist = (_b.sent()).GoChecklist;
                    return [2 /*return*/, GoChecklist];
                case 69: return [4 /*yield*/, import("react-icons/go")];
                case 70:
                    GoChevronDown = (_b.sent()).GoChevronDown;
                    return [2 /*return*/, GoChevronDown];
                case 71: return [4 /*yield*/, import("react-icons/go")];
                case 72:
                    GoChevronLeft = (_b.sent()).GoChevronLeft;
                    return [2 /*return*/, GoChevronLeft];
                case 73: return [4 /*yield*/, import("react-icons/go")];
                case 74:
                    GoChevronRight = (_b.sent()).GoChevronRight;
                    return [2 /*return*/, GoChevronRight];
                case 75: return [4 /*yield*/, import("react-icons/go")];
                case 76:
                    GoChevronUp = (_b.sent()).GoChevronUp;
                    return [2 /*return*/, GoChevronUp];
                case 77: return [4 /*yield*/, import("react-icons/go")];
                case 78:
                    GoCircle = (_b.sent()).GoCircle;
                    return [2 /*return*/, GoCircle];
                case 79: return [4 /*yield*/, import("react-icons/go")];
                case 80:
                    GoCircleSlash = (_b.sent()).GoCircleSlash;
                    return [2 /*return*/, GoCircleSlash];
                case 81: return [4 /*yield*/, import("react-icons/go")];
                case 82:
                    GoClock = (_b.sent()).GoClock;
                    return [2 /*return*/, GoClock];
                case 83: return [4 /*yield*/, import("react-icons/go")];
                case 84:
                    GoClockFill = (_b.sent()).GoClockFill;
                    return [2 /*return*/, GoClockFill];
                case 85: return [4 /*yield*/, import("react-icons/go")];
                case 86:
                    GoCloud = (_b.sent()).GoCloud;
                    return [2 /*return*/, GoCloud];
                case 87: return [4 /*yield*/, import("react-icons/go")];
                case 88:
                    GoCloudOffline = (_b.sent()).GoCloudOffline;
                    return [2 /*return*/, GoCloudOffline];
                case 89: return [4 /*yield*/, import("react-icons/go")];
                case 90:
                    GoCode = (_b.sent()).GoCode;
                    return [2 /*return*/, GoCode];
                case 91: return [4 /*yield*/, import("react-icons/go")];
                case 92:
                    GoCodeOfConduct = (_b.sent()).GoCodeOfConduct;
                    return [2 /*return*/, GoCodeOfConduct];
                case 93: return [4 /*yield*/, import("react-icons/go")];
                case 94:
                    GoCodeReview = (_b.sent()).GoCodeReview;
                    return [2 /*return*/, GoCodeReview];
                case 95: return [4 /*yield*/, import("react-icons/go")];
                case 96:
                    GoCodeSquare = (_b.sent()).GoCodeSquare;
                    return [2 /*return*/, GoCodeSquare];
                case 97: return [4 /*yield*/, import("react-icons/go")];
                case 98:
                    GoCodescan = (_b.sent()).GoCodescan;
                    return [2 /*return*/, GoCodescan];
                case 99: return [4 /*yield*/, import("react-icons/go")];
                case 100:
                    GoCodescanCheckmark = (_b.sent()).GoCodescanCheckmark;
                    return [2 /*return*/, GoCodescanCheckmark];
                case 101: return [4 /*yield*/, import("react-icons/go")];
                case 102:
                    GoCodespaces = (_b.sent()).GoCodespaces;
                    return [2 /*return*/, GoCodespaces];
                case 103: return [4 /*yield*/, import("react-icons/go")];
                case 104:
                    GoColumns = (_b.sent()).GoColumns;
                    return [2 /*return*/, GoColumns];
                case 105: return [4 /*yield*/, import("react-icons/go")];
                case 106:
                    GoCommandPalette = (_b.sent()).GoCommandPalette;
                    return [2 /*return*/, GoCommandPalette];
                case 107: return [4 /*yield*/, import("react-icons/go")];
                case 108:
                    GoComment = (_b.sent()).GoComment;
                    return [2 /*return*/, GoComment];
                case 109: return [4 /*yield*/, import("react-icons/go")];
                case 110:
                    GoCommentDiscussion = (_b.sent()).GoCommentDiscussion;
                    return [2 /*return*/, GoCommentDiscussion];
                case 111: return [4 /*yield*/, import("react-icons/go")];
                case 112:
                    GoCommit = (_b.sent()).GoCommit;
                    return [2 /*return*/, GoCommit];
                case 113: return [4 /*yield*/, import("react-icons/go")];
                case 114:
                    GoContainer = (_b.sent()).GoContainer;
                    return [2 /*return*/, GoContainer];
                case 115: return [4 /*yield*/, import("react-icons/go")];
                case 116:
                    GoCopilot = (_b.sent()).GoCopilot;
                    return [2 /*return*/, GoCopilot];
                case 117: return [4 /*yield*/, import("react-icons/go")];
                case 118:
                    GoCopy = (_b.sent()).GoCopy;
                    return [2 /*return*/, GoCopy];
                case 119: return [4 /*yield*/, import("react-icons/go")];
                case 120:
                    GoCpu = (_b.sent()).GoCpu;
                    return [2 /*return*/, GoCpu];
                case 121: return [4 /*yield*/, import("react-icons/go")];
                case 122:
                    GoCreditCard = (_b.sent()).GoCreditCard;
                    return [2 /*return*/, GoCreditCard];
                case 123: return [4 /*yield*/, import("react-icons/go")];
                case 124:
                    GoCrossReference = (_b.sent()).GoCrossReference;
                    return [2 /*return*/, GoCrossReference];
                case 125: return [4 /*yield*/, import("react-icons/go")];
                case 126:
                    GoDash = (_b.sent()).GoDash;
                    return [2 /*return*/, GoDash];
                case 127: return [4 /*yield*/, import("react-icons/go")];
                case 128:
                    GoDatabase = (_b.sent()).GoDatabase;
                    return [2 /*return*/, GoDatabase];
                case 129: return [4 /*yield*/, import("react-icons/go")];
                case 130:
                    GoDependabot = (_b.sent()).GoDependabot;
                    return [2 /*return*/, GoDependabot];
                case 131: return [4 /*yield*/, import("react-icons/go")];
                case 132:
                    GoDesktopDownload = (_b.sent()).GoDesktopDownload;
                    return [2 /*return*/, GoDesktopDownload];
                case 133: return [4 /*yield*/, import("react-icons/go")];
                case 134:
                    GoDeviceCameraVideo = (_b.sent()).GoDeviceCameraVideo;
                    return [2 /*return*/, GoDeviceCameraVideo];
                case 135: return [4 /*yield*/, import("react-icons/go")];
                case 136:
                    GoDeviceDesktop = (_b.sent()).GoDeviceDesktop;
                    return [2 /*return*/, GoDeviceDesktop];
                case 137: return [4 /*yield*/, import("react-icons/go")];
                case 138:
                    GoDeviceMobile = (_b.sent()).GoDeviceMobile;
                    return [2 /*return*/, GoDeviceMobile];
                case 139: return [4 /*yield*/, import("react-icons/go")];
                case 140:
                    GoDiamond = (_b.sent()).GoDiamond;
                    return [2 /*return*/, GoDiamond];
                case 141: return [4 /*yield*/, import("react-icons/go")];
                case 142:
                    GoDiff = (_b.sent()).GoDiff;
                    return [2 /*return*/, GoDiff];
                case 143: return [4 /*yield*/, import("react-icons/go")];
                case 144:
                    GoDiscussionClosed = (_b.sent()).GoDiscussionClosed;
                    return [2 /*return*/, GoDiscussionClosed];
                case 145: return [4 /*yield*/, import("react-icons/go")];
                case 146:
                    GoDiscussionDuplicate = (_b.sent()).GoDiscussionDuplicate;
                    return [2 /*return*/, GoDiscussionDuplicate];
                case 147: return [4 /*yield*/, import("react-icons/go")];
                case 148:
                    GoDiscussionOutdated = (_b.sent()).GoDiscussionOutdated;
                    return [2 /*return*/, GoDiscussionOutdated];
                case 149: return [4 /*yield*/, import("react-icons/go")];
                case 150:
                    GoDot = (_b.sent()).GoDot;
                    return [2 /*return*/, GoDot];
                case 151: return [4 /*yield*/, import("react-icons/go")];
                case 152:
                    GoDotFill = (_b.sent()).GoDotFill;
                    return [2 /*return*/, GoDotFill];
                case 153: return [4 /*yield*/, import("react-icons/go")];
                case 154:
                    GoDownload = (_b.sent()).GoDownload;
                    return [2 /*return*/, GoDownload];
                case 155: return [4 /*yield*/, import("react-icons/go")];
                case 156:
                    GoDuplicate = (_b.sent()).GoDuplicate;
                    return [2 /*return*/, GoDuplicate];
                case 157: return [4 /*yield*/, import("react-icons/go")];
                case 158:
                    GoEye = (_b.sent()).GoEye;
                    return [2 /*return*/, GoEye];
                case 159: return [4 /*yield*/, import("react-icons/go")];
                case 160:
                    GoEyeClosed = (_b.sent()).GoEyeClosed;
                    return [2 /*return*/, GoEyeClosed];
                case 161: return [4 /*yield*/, import("react-icons/go")];
                case 162:
                    GoFile = (_b.sent()).GoFile;
                    return [2 /*return*/, GoFile];
                case 163: return [4 /*yield*/, import("react-icons/go")];
                case 164:
                    GoFileBinary = (_b.sent()).GoFileBinary;
                    return [2 /*return*/, GoFileBinary];
                case 165: return [4 /*yield*/, import("react-icons/go")];
                case 166:
                    GoFileCode = (_b.sent()).GoFileCode;
                    return [2 /*return*/, GoFileCode];
                case 167: return [4 /*yield*/, import("react-icons/go")];
                case 168:
                    GoFileDiff = (_b.sent()).GoFileDiff;
                    return [2 /*return*/, GoFileDiff];
                case 169: return [4 /*yield*/, import("react-icons/go")];
                case 170:
                    GoFileDirectory = (_b.sent()).GoFileDirectory;
                    return [2 /*return*/, GoFileDirectory];
                case 171: return [4 /*yield*/, import("react-icons/go")];
                case 172:
                    GoFileDirectoryFill = (_b.sent()).GoFileDirectoryFill;
                    return [2 /*return*/, GoFileDirectoryFill];
                case 173: return [4 /*yield*/, import("react-icons/go")];
                case 174:
                    GoFileMedia = (_b.sent()).GoFileMedia;
                    return [2 /*return*/, GoFileMedia];
                case 175: return [4 /*yield*/, import("react-icons/go")];
                case 176:
                    GoFileSubmodule = (_b.sent()).GoFileSubmodule;
                    return [2 /*return*/, GoFileSubmodule];
                case 177: return [4 /*yield*/, import("react-icons/go")];
                case 178:
                    GoFileSymlinkFile = (_b.sent()).GoFileSymlinkFile;
                    return [2 /*return*/, GoFileSymlinkFile];
                case 179: return [4 /*yield*/, import("react-icons/go")];
                case 180:
                    GoFileZip = (_b.sent()).GoFileZip;
                    return [2 /*return*/, GoFileZip];
                case 181: return [4 /*yield*/, import("react-icons/go")];
                case 182:
                    GoFilter = (_b.sent()).GoFilter;
                    return [2 /*return*/, GoFilter];
                case 183: return [4 /*yield*/, import("react-icons/go")];
                case 184:
                    GoFlame = (_b.sent()).GoFlame;
                    return [2 /*return*/, GoFlame];
                case 185: return [4 /*yield*/, import("react-icons/go")];
                case 186:
                    GoFold = (_b.sent()).GoFold;
                    return [2 /*return*/, GoFold];
                case 187: return [4 /*yield*/, import("react-icons/go")];
                case 188:
                    GoFoldDown = (_b.sent()).GoFoldDown;
                    return [2 /*return*/, GoFoldDown];
                case 189: return [4 /*yield*/, import("react-icons/go")];
                case 190:
                    GoFoldUp = (_b.sent()).GoFoldUp;
                    return [2 /*return*/, GoFoldUp];
                case 191: return [4 /*yield*/, import("react-icons/go")];
                case 192:
                    GoGear = (_b.sent()).GoGear;
                    return [2 /*return*/, GoGear];
                case 193: return [4 /*yield*/, import("react-icons/go")];
                case 194:
                    GoGift = (_b.sent()).GoGift;
                    return [2 /*return*/, GoGift];
                case 195: return [4 /*yield*/, import("react-icons/go")];
                case 196:
                    GoGitBranch = (_b.sent()).GoGitBranch;
                    return [2 /*return*/, GoGitBranch];
                case 197: return [4 /*yield*/, import("react-icons/go")];
                case 198:
                    GoGitCommit = (_b.sent()).GoGitCommit;
                    return [2 /*return*/, GoGitCommit];
                case 199: return [4 /*yield*/, import("react-icons/go")];
                case 200:
                    GoGitCompare = (_b.sent()).GoGitCompare;
                    return [2 /*return*/, GoGitCompare];
                case 201: return [4 /*yield*/, import("react-icons/go")];
                case 202:
                    GoGitMerge = (_b.sent()).GoGitMerge;
                    return [2 /*return*/, GoGitMerge];
                case 203: return [4 /*yield*/, import("react-icons/go")];
                case 204:
                    GoGitMergeQueue = (_b.sent()).GoGitMergeQueue;
                    return [2 /*return*/, GoGitMergeQueue];
                case 205: return [4 /*yield*/, import("react-icons/go")];
                case 206:
                    GoGitPullRequest = (_b.sent()).GoGitPullRequest;
                    return [2 /*return*/, GoGitPullRequest];
                case 207: return [4 /*yield*/, import("react-icons/go")];
                case 208:
                    GoGitPullRequestClosed = (_b.sent()).GoGitPullRequestClosed;
                    return [2 /*return*/, GoGitPullRequestClosed];
                case 209: return [4 /*yield*/, import("react-icons/go")];
                case 210:
                    GoGitPullRequestDraft = (_b.sent()).GoGitPullRequestDraft;
                    return [2 /*return*/, GoGitPullRequestDraft];
                case 211: return [4 /*yield*/, import("react-icons/go")];
                case 212:
                    GoGlobe = (_b.sent()).GoGlobe;
                    return [2 /*return*/, GoGlobe];
                case 213: return [4 /*yield*/, import("react-icons/go")];
                case 214:
                    GoGoal = (_b.sent()).GoGoal;
                    return [2 /*return*/, GoGoal];
                case 215: return [4 /*yield*/, import("react-icons/go")];
                case 216:
                    GoGrabber = (_b.sent()).GoGrabber;
                    return [2 /*return*/, GoGrabber];
                case 217: return [4 /*yield*/, import("react-icons/go")];
                case 218:
                    GoGraph = (_b.sent()).GoGraph;
                    return [2 /*return*/, GoGraph];
                case 219: return [4 /*yield*/, import("react-icons/go")];
                case 220:
                    GoHash = (_b.sent()).GoHash;
                    return [2 /*return*/, GoHash];
                case 221: return [4 /*yield*/, import("react-icons/go")];
                case 222:
                    GoHeading = (_b.sent()).GoHeading;
                    return [2 /*return*/, GoHeading];
                case 223: return [4 /*yield*/, import("react-icons/go")];
                case 224:
                    GoHeart = (_b.sent()).GoHeart;
                    return [2 /*return*/, GoHeart];
                case 225: return [4 /*yield*/, import("react-icons/go")];
                case 226:
                    GoHeartFill = (_b.sent()).GoHeartFill;
                    return [2 /*return*/, GoHeartFill];
                case 227: return [4 /*yield*/, import("react-icons/go")];
                case 228:
                    GoHistory = (_b.sent()).GoHistory;
                    return [2 /*return*/, GoHistory];
                case 229: return [4 /*yield*/, import("react-icons/go")];
                case 230:
                    GoHome = (_b.sent()).GoHome;
                    return [2 /*return*/, GoHome];
                case 231: return [4 /*yield*/, import("react-icons/go")];
                case 232:
                    GoHomeFill = (_b.sent()).GoHomeFill;
                    return [2 /*return*/, GoHomeFill];
                case 233: return [4 /*yield*/, import("react-icons/go")];
                case 234:
                    GoHorizontalRule = (_b.sent()).GoHorizontalRule;
                    return [2 /*return*/, GoHorizontalRule];
                case 235: return [4 /*yield*/, import("react-icons/go")];
                case 236:
                    GoHourglass = (_b.sent()).GoHourglass;
                    return [2 /*return*/, GoHourglass];
                case 237: return [4 /*yield*/, import("react-icons/go")];
                case 238:
                    GoHubot = (_b.sent()).GoHubot;
                    return [2 /*return*/, GoHubot];
                case 239: return [4 /*yield*/, import("react-icons/go")];
                case 240:
                    GoImage = (_b.sent()).GoImage;
                    return [2 /*return*/, GoImage];
                case 241: return [4 /*yield*/, import("react-icons/go")];
                case 242:
                    GoInbox = (_b.sent()).GoInbox;
                    return [2 /*return*/, GoInbox];
                case 243: return [4 /*yield*/, import("react-icons/go")];
                case 244:
                    GoInfinity = (_b.sent()).GoInfinity;
                    return [2 /*return*/, GoInfinity];
                case 245: return [4 /*yield*/, import("react-icons/go")];
                case 246:
                    GoInfo = (_b.sent()).GoInfo;
                    return [2 /*return*/, GoInfo];
                case 247: return [4 /*yield*/, import("react-icons/go")];
                case 248:
                    GoIssueClosed = (_b.sent()).GoIssueClosed;
                    return [2 /*return*/, GoIssueClosed];
                case 249: return [4 /*yield*/, import("react-icons/go")];
                case 250:
                    GoIssueDraft = (_b.sent()).GoIssueDraft;
                    return [2 /*return*/, GoIssueDraft];
                case 251: return [4 /*yield*/, import("react-icons/go")];
                case 252:
                    GoIssueOpened = (_b.sent()).GoIssueOpened;
                    return [2 /*return*/, GoIssueOpened];
                case 253: return [4 /*yield*/, import("react-icons/go")];
                case 254:
                    GoIssueReopened = (_b.sent()).GoIssueReopened;
                    return [2 /*return*/, GoIssueReopened];
                case 255: return [4 /*yield*/, import("react-icons/go")];
                case 256:
                    GoIssueTrackedBy = (_b.sent()).GoIssueTrackedBy;
                    return [2 /*return*/, GoIssueTrackedBy];
                case 257: return [4 /*yield*/, import("react-icons/go")];
                case 258:
                    GoIssueTracks = (_b.sent()).GoIssueTracks;
                    return [2 /*return*/, GoIssueTracks];
                case 259: return [4 /*yield*/, import("react-icons/go")];
                case 260:
                    GoItalic = (_b.sent()).GoItalic;
                    return [2 /*return*/, GoItalic];
                case 261: return [4 /*yield*/, import("react-icons/go")];
                case 262:
                    GoIterations = (_b.sent()).GoIterations;
                    return [2 /*return*/, GoIterations];
                case 263: return [4 /*yield*/, import("react-icons/go")];
                case 264:
                    GoKebabHorizontal = (_b.sent()).GoKebabHorizontal;
                    return [2 /*return*/, GoKebabHorizontal];
                case 265: return [4 /*yield*/, import("react-icons/go")];
                case 266:
                    GoKey = (_b.sent()).GoKey;
                    return [2 /*return*/, GoKey];
                case 267: return [4 /*yield*/, import("react-icons/go")];
                case 268:
                    GoLaw = (_b.sent()).GoLaw;
                    return [2 /*return*/, GoLaw];
                case 269: return [4 /*yield*/, import("react-icons/go")];
                case 270:
                    GoLightBulb = (_b.sent()).GoLightBulb;
                    return [2 /*return*/, GoLightBulb];
                case 271: return [4 /*yield*/, import("react-icons/go")];
                case 272:
                    GoLink = (_b.sent()).GoLink;
                    return [2 /*return*/, GoLink];
                case 273: return [4 /*yield*/, import("react-icons/go")];
                case 274:
                    GoLinkExternal = (_b.sent()).GoLinkExternal;
                    return [2 /*return*/, GoLinkExternal];
                case 275: return [4 /*yield*/, import("react-icons/go")];
                case 276:
                    GoListOrdered = (_b.sent()).GoListOrdered;
                    return [2 /*return*/, GoListOrdered];
                case 277: return [4 /*yield*/, import("react-icons/go")];
                case 278:
                    GoListUnordered = (_b.sent()).GoListUnordered;
                    return [2 /*return*/, GoListUnordered];
                case 279: return [4 /*yield*/, import("react-icons/go")];
                case 280:
                    GoLocation = (_b.sent()).GoLocation;
                    return [2 /*return*/, GoLocation];
                case 281: return [4 /*yield*/, import("react-icons/go")];
                case 282:
                    GoLock = (_b.sent()).GoLock;
                    return [2 /*return*/, GoLock];
                case 283: return [4 /*yield*/, import("react-icons/go")];
                case 284:
                    GoLog = (_b.sent()).GoLog;
                    return [2 /*return*/, GoLog];
                case 285: return [4 /*yield*/, import("react-icons/go")];
                case 286:
                    GoMail = (_b.sent()).GoMail;
                    return [2 /*return*/, GoMail];
                case 287: return [4 /*yield*/, import("react-icons/go")];
                case 288:
                    GoMegaphone = (_b.sent()).GoMegaphone;
                    return [2 /*return*/, GoMegaphone];
                case 289: return [4 /*yield*/, import("react-icons/go")];
                case 290:
                    GoMention = (_b.sent()).GoMention;
                    return [2 /*return*/, GoMention];
                case 291: return [4 /*yield*/, import("react-icons/go")];
                case 292:
                    GoMilestone = (_b.sent()).GoMilestone;
                    return [2 /*return*/, GoMilestone];
                case 293: return [4 /*yield*/, import("react-icons/go")];
                case 294:
                    GoMirror = (_b.sent()).GoMirror;
                    return [2 /*return*/, GoMirror];
                case 295: return [4 /*yield*/, import("react-icons/go")];
                case 296:
                    GoMoon = (_b.sent()).GoMoon;
                    return [2 /*return*/, GoMoon];
                case 297: return [4 /*yield*/, import("react-icons/go")];
                case 298:
                    GoMortarBoard = (_b.sent()).GoMortarBoard;
                    return [2 /*return*/, GoMortarBoard];
                case 299: return [4 /*yield*/, import("react-icons/go")];
                case 300:
                    GoMoveToBottom = (_b.sent()).GoMoveToBottom;
                    return [2 /*return*/, GoMoveToBottom];
                case 301: return [4 /*yield*/, import("react-icons/go")];
                case 302:
                    GoMoveToEnd = (_b.sent()).GoMoveToEnd;
                    return [2 /*return*/, GoMoveToEnd];
                case 303: return [4 /*yield*/, import("react-icons/go")];
                case 304:
                    GoMoveToStart = (_b.sent()).GoMoveToStart;
                    return [2 /*return*/, GoMoveToStart];
                case 305: return [4 /*yield*/, import("react-icons/go")];
                case 306:
                    GoMoveToTop = (_b.sent()).GoMoveToTop;
                    return [2 /*return*/, GoMoveToTop];
                case 307: return [4 /*yield*/, import("react-icons/go")];
                case 308:
                    GoMultiSelect = (_b.sent()).GoMultiSelect;
                    return [2 /*return*/, GoMultiSelect];
                case 309: return [4 /*yield*/, import("react-icons/go")];
                case 310:
                    GoMute = (_b.sent()).GoMute;
                    return [2 /*return*/, GoMute];
                case 311: return [4 /*yield*/, import("react-icons/go")];
                case 312:
                    GoNoEntry = (_b.sent()).GoNoEntry;
                    return [2 /*return*/, GoNoEntry];
                case 313: return [4 /*yield*/, import("react-icons/go")];
                case 314:
                    GoNorthStar = (_b.sent()).GoNorthStar;
                    return [2 /*return*/, GoNorthStar];
                case 315: return [4 /*yield*/, import("react-icons/go")];
                case 316:
                    GoNote = (_b.sent()).GoNote;
                    return [2 /*return*/, GoNote];
                case 317: return [4 /*yield*/, import("react-icons/go")];
                case 318:
                    GoNumber = (_b.sent()).GoNumber;
                    return [2 /*return*/, GoNumber];
                case 319: return [4 /*yield*/, import("react-icons/go")];
                case 320:
                    GoOrganization = (_b.sent()).GoOrganization;
                    return [2 /*return*/, GoOrganization];
                case 321: return [4 /*yield*/, import("react-icons/go")];
                case 322:
                    GoPackage = (_b.sent()).GoPackage;
                    return [2 /*return*/, GoPackage];
                case 323: return [4 /*yield*/, import("react-icons/go")];
                case 324:
                    GoPackageDependencies = (_b.sent()).GoPackageDependencies;
                    return [2 /*return*/, GoPackageDependencies];
                case 325: return [4 /*yield*/, import("react-icons/go")];
                case 326:
                    GoPackageDependents = (_b.sent()).GoPackageDependents;
                    return [2 /*return*/, GoPackageDependents];
                case 327: return [4 /*yield*/, import("react-icons/go")];
                case 328:
                    GoPaperAirplane = (_b.sent()).GoPaperAirplane;
                    return [2 /*return*/, GoPaperAirplane];
                case 329: return [4 /*yield*/, import("react-icons/go")];
                case 330:
                    GoPaperclip = (_b.sent()).GoPaperclip;
                    return [2 /*return*/, GoPaperclip];
                case 331: return [4 /*yield*/, import("react-icons/go")];
                case 332:
                    GoPasskeyFill = (_b.sent()).GoPasskeyFill;
                    return [2 /*return*/, GoPasskeyFill];
                case 333: return [4 /*yield*/, import("react-icons/go")];
                case 334:
                    GoPaste = (_b.sent()).GoPaste;
                    return [2 /*return*/, GoPaste];
                case 335: return [4 /*yield*/, import("react-icons/go")];
                case 336:
                    GoPencil = (_b.sent()).GoPencil;
                    return [2 /*return*/, GoPencil];
                case 337: return [4 /*yield*/, import("react-icons/go")];
                case 338:
                    GoPeople = (_b.sent()).GoPeople;
                    return [2 /*return*/, GoPeople];
                case 339: return [4 /*yield*/, import("react-icons/go")];
                case 340:
                    GoPerson = (_b.sent()).GoPerson;
                    return [2 /*return*/, GoPerson];
                case 341: return [4 /*yield*/, import("react-icons/go")];
                case 342:
                    GoPersonAdd = (_b.sent()).GoPersonAdd;
                    return [2 /*return*/, GoPersonAdd];
                case 343: return [4 /*yield*/, import("react-icons/go")];
                case 344:
                    GoPersonFill = (_b.sent()).GoPersonFill;
                    return [2 /*return*/, GoPersonFill];
                case 345: return [4 /*yield*/, import("react-icons/go")];
                case 346:
                    GoPin = (_b.sent()).GoPin;
                    return [2 /*return*/, GoPin];
                case 347: return [4 /*yield*/, import("react-icons/go")];
                case 348:
                    GoPlay = (_b.sent()).GoPlay;
                    return [2 /*return*/, GoPlay];
                case 349: return [4 /*yield*/, import("react-icons/go")];
                case 350:
                    GoPlug = (_b.sent()).GoPlug;
                    return [2 /*return*/, GoPlug];
                case 351: return [4 /*yield*/, import("react-icons/go")];
                case 352:
                    GoPlus = (_b.sent()).GoPlus;
                    return [2 /*return*/, GoPlus];
                case 353: return [4 /*yield*/, import("react-icons/go")];
                case 354:
                    GoPlusCircle = (_b.sent()).GoPlusCircle;
                    return [2 /*return*/, GoPlusCircle];
                case 355: return [4 /*yield*/, import("react-icons/go")];
                case 356:
                    GoProject = (_b.sent()).GoProject;
                    return [2 /*return*/, GoProject];
                case 357: return [4 /*yield*/, import("react-icons/go")];
                case 358:
                    GoProjectRoadmap = (_b.sent()).GoProjectRoadmap;
                    return [2 /*return*/, GoProjectRoadmap];
                case 359: return [4 /*yield*/, import("react-icons/go")];
                case 360:
                    GoProjectSymlink = (_b.sent()).GoProjectSymlink;
                    return [2 /*return*/, GoProjectSymlink];
                case 361: return [4 /*yield*/, import("react-icons/go")];
                case 362:
                    GoProjectTemplate = (_b.sent()).GoProjectTemplate;
                    return [2 /*return*/, GoProjectTemplate];
                case 363: return [4 /*yield*/, import("react-icons/go")];
                case 364:
                    GoPulse = (_b.sent()).GoPulse;
                    return [2 /*return*/, GoPulse];
                case 365: return [4 /*yield*/, import("react-icons/go")];
                case 366:
                    GoQuestion = (_b.sent()).GoQuestion;
                    return [2 /*return*/, GoQuestion];
                case 367: return [4 /*yield*/, import("react-icons/go")];
                case 368:
                    GoQuote = (_b.sent()).GoQuote;
                    return [2 /*return*/, GoQuote];
                case 369: return [4 /*yield*/, import("react-icons/go")];
                case 370:
                    GoRead = (_b.sent()).GoRead;
                    return [2 /*return*/, GoRead];
                case 371: return [4 /*yield*/, import("react-icons/go")];
                case 372:
                    GoRelFilePath = (_b.sent()).GoRelFilePath;
                    return [2 /*return*/, GoRelFilePath];
                case 373: return [4 /*yield*/, import("react-icons/go")];
                case 374:
                    GoReply = (_b.sent()).GoReply;
                    return [2 /*return*/, GoReply];
                case 375: return [4 /*yield*/, import("react-icons/go")];
                case 376:
                    GoRepo = (_b.sent()).GoRepo;
                    return [2 /*return*/, GoRepo];
                case 377: return [4 /*yield*/, import("react-icons/go")];
                case 378:
                    GoRepoForked = (_b.sent()).GoRepoForked;
                    return [2 /*return*/, GoRepoForked];
                case 379: return [4 /*yield*/, import("react-icons/go")];
                case 380:
                    GoRepoLocked = (_b.sent()).GoRepoLocked;
                    return [2 /*return*/, GoRepoLocked];
                case 381: return [4 /*yield*/, import("react-icons/go")];
                case 382:
                    GoRepoPush = (_b.sent()).GoRepoPush;
                    return [2 /*return*/, GoRepoPush];
                case 383: return [4 /*yield*/, import("react-icons/go")];
                case 384:
                    GoRepoTemplate = (_b.sent()).GoRepoTemplate;
                    return [2 /*return*/, GoRepoTemplate];
                case 385: return [4 /*yield*/, import("react-icons/go")];
                case 386:
                    GoReport = (_b.sent()).GoReport;
                    return [2 /*return*/, GoReport];
                case 387: return [4 /*yield*/, import("react-icons/go")];
                case 388:
                    GoRocket = (_b.sent()).GoRocket;
                    return [2 /*return*/, GoRocket];
                case 389: return [4 /*yield*/, import("react-icons/go")];
                case 390:
                    GoRows = (_b.sent()).GoRows;
                    return [2 /*return*/, GoRows];
                case 391: return [4 /*yield*/, import("react-icons/go")];
                case 392:
                    GoRss = (_b.sent()).GoRss;
                    return [2 /*return*/, GoRss];
                case 393: return [4 /*yield*/, import("react-icons/go")];
                case 394:
                    GoRuby = (_b.sent()).GoRuby;
                    return [2 /*return*/, GoRuby];
                case 395: return [4 /*yield*/, import("react-icons/go")];
                case 396:
                    GoScreenFull = (_b.sent()).GoScreenFull;
                    return [2 /*return*/, GoScreenFull];
                case 397: return [4 /*yield*/, import("react-icons/go")];
                case 398:
                    GoScreenNormal = (_b.sent()).GoScreenNormal;
                    return [2 /*return*/, GoScreenNormal];
                case 399: return [4 /*yield*/, import("react-icons/go")];
                case 400:
                    GoSearch = (_b.sent()).GoSearch;
                    return [2 /*return*/, GoSearch];
                case 401: return [4 /*yield*/, import("react-icons/go")];
                case 402:
                    GoServer = (_b.sent()).GoServer;
                    return [2 /*return*/, GoServer];
                case 403: return [4 /*yield*/, import("react-icons/go")];
                case 404:
                    GoShare = (_b.sent()).GoShare;
                    return [2 /*return*/, GoShare];
                case 405: return [4 /*yield*/, import("react-icons/go")];
                case 406:
                    GoShareAndroid = (_b.sent()).GoShareAndroid;
                    return [2 /*return*/, GoShareAndroid];
                case 407: return [4 /*yield*/, import("react-icons/go")];
                case 408:
                    GoShield = (_b.sent()).GoShield;
                    return [2 /*return*/, GoShield];
                case 409: return [4 /*yield*/, import("react-icons/go")];
                case 410:
                    GoShieldCheck = (_b.sent()).GoShieldCheck;
                    return [2 /*return*/, GoShieldCheck];
                case 411: return [4 /*yield*/, import("react-icons/go")];
                case 412:
                    GoShieldLock = (_b.sent()).GoShieldLock;
                    return [2 /*return*/, GoShieldLock];
                case 413: return [4 /*yield*/, import("react-icons/go")];
                case 414:
                    GoShieldSlash = (_b.sent()).GoShieldSlash;
                    return [2 /*return*/, GoShieldSlash];
                case 415: return [4 /*yield*/, import("react-icons/go")];
                case 416:
                    GoShieldX = (_b.sent()).GoShieldX;
                    return [2 /*return*/, GoShieldX];
                case 417: return [4 /*yield*/, import("react-icons/go")];
                case 418:
                    GoSidebarCollapse = (_b.sent()).GoSidebarCollapse;
                    return [2 /*return*/, GoSidebarCollapse];
                case 419: return [4 /*yield*/, import("react-icons/go")];
                case 420:
                    GoSidebarExpand = (_b.sent()).GoSidebarExpand;
                    return [2 /*return*/, GoSidebarExpand];
                case 421: return [4 /*yield*/, import("react-icons/go")];
                case 422:
                    GoSignIn = (_b.sent()).GoSignIn;
                    return [2 /*return*/, GoSignIn];
                case 423: return [4 /*yield*/, import("react-icons/go")];
                case 424:
                    GoSignOut = (_b.sent()).GoSignOut;
                    return [2 /*return*/, GoSignOut];
                case 425: return [4 /*yield*/, import("react-icons/go")];
                case 426:
                    GoSingleSelect = (_b.sent()).GoSingleSelect;
                    return [2 /*return*/, GoSingleSelect];
                case 427: return [4 /*yield*/, import("react-icons/go")];
                case 428:
                    GoSkip = (_b.sent()).GoSkip;
                    return [2 /*return*/, GoSkip];
                case 429: return [4 /*yield*/, import("react-icons/go")];
                case 430:
                    GoSkipFill = (_b.sent()).GoSkipFill;
                    return [2 /*return*/, GoSkipFill];
                case 431: return [4 /*yield*/, import("react-icons/go")];
                case 432:
                    GoSmiley = (_b.sent()).GoSmiley;
                    return [2 /*return*/, GoSmiley];
                case 433: return [4 /*yield*/, import("react-icons/go")];
                case 434:
                    GoSortAsc = (_b.sent()).GoSortAsc;
                    return [2 /*return*/, GoSortAsc];
                case 435: return [4 /*yield*/, import("react-icons/go")];
                case 436:
                    GoSortDesc = (_b.sent()).GoSortDesc;
                    return [2 /*return*/, GoSortDesc];
                case 437: return [4 /*yield*/, import("react-icons/go")];
                case 438:
                    GoSponsorTiers = (_b.sent()).GoSponsorTiers;
                    return [2 /*return*/, GoSponsorTiers];
                case 439: return [4 /*yield*/, import("react-icons/go")];
                case 440:
                    GoSquare = (_b.sent()).GoSquare;
                    return [2 /*return*/, GoSquare];
                case 441: return [4 /*yield*/, import("react-icons/go")];
                case 442:
                    GoSquareFill = (_b.sent()).GoSquareFill;
                    return [2 /*return*/, GoSquareFill];
                case 443: return [4 /*yield*/, import("react-icons/go")];
                case 444:
                    GoSquirrel = (_b.sent()).GoSquirrel;
                    return [2 /*return*/, GoSquirrel];
                case 445: return [4 /*yield*/, import("react-icons/go")];
                case 446:
                    GoStack = (_b.sent()).GoStack;
                    return [2 /*return*/, GoStack];
                case 447: return [4 /*yield*/, import("react-icons/go")];
                case 448:
                    GoStar = (_b.sent()).GoStar;
                    return [2 /*return*/, GoStar];
                case 449: return [4 /*yield*/, import("react-icons/go")];
                case 450:
                    GoStarFill = (_b.sent()).GoStarFill;
                    return [2 /*return*/, GoStarFill];
                case 451: return [4 /*yield*/, import("react-icons/go")];
                case 452:
                    GoStop = (_b.sent()).GoStop;
                    return [2 /*return*/, GoStop];
                case 453: return [4 /*yield*/, import("react-icons/go")];
                case 454:
                    GoStopwatch = (_b.sent()).GoStopwatch;
                    return [2 /*return*/, GoStopwatch];
                case 455: return [4 /*yield*/, import("react-icons/go")];
                case 456:
                    GoStrikethrough = (_b.sent()).GoStrikethrough;
                    return [2 /*return*/, GoStrikethrough];
                case 457: return [4 /*yield*/, import("react-icons/go")];
                case 458:
                    GoSun = (_b.sent()).GoSun;
                    return [2 /*return*/, GoSun];
                case 459: return [4 /*yield*/, import("react-icons/go")];
                case 460:
                    GoSync = (_b.sent()).GoSync;
                    return [2 /*return*/, GoSync];
                case 461: return [4 /*yield*/, import("react-icons/go")];
                case 462:
                    GoTab = (_b.sent()).GoTab;
                    return [2 /*return*/, GoTab];
                case 463: return [4 /*yield*/, import("react-icons/go")];
                case 464:
                    GoTable = (_b.sent()).GoTable;
                    return [2 /*return*/, GoTable];
                case 465: return [4 /*yield*/, import("react-icons/go")];
                case 466:
                    GoTag = (_b.sent()).GoTag;
                    return [2 /*return*/, GoTag];
                case 467: return [4 /*yield*/, import("react-icons/go")];
                case 468:
                    GoTasklist = (_b.sent()).GoTasklist;
                    return [2 /*return*/, GoTasklist];
                case 469: return [4 /*yield*/, import("react-icons/go")];
                case 470:
                    GoTelescope = (_b.sent()).GoTelescope;
                    return [2 /*return*/, GoTelescope];
                case 471: return [4 /*yield*/, import("react-icons/go")];
                case 472:
                    GoTelescopeFill = (_b.sent()).GoTelescopeFill;
                    return [2 /*return*/, GoTelescopeFill];
                case 473: return [4 /*yield*/, import("react-icons/go")];
                case 474:
                    GoTerminal = (_b.sent()).GoTerminal;
                    return [2 /*return*/, GoTerminal];
                case 475: return [4 /*yield*/, import("react-icons/go")];
                case 476:
                    GoThumbsdown = (_b.sent()).GoThumbsdown;
                    return [2 /*return*/, GoThumbsdown];
                case 477: return [4 /*yield*/, import("react-icons/go")];
                case 478:
                    GoThumbsup = (_b.sent()).GoThumbsup;
                    return [2 /*return*/, GoThumbsup];
                case 479: return [4 /*yield*/, import("react-icons/go")];
                case 480:
                    GoTools = (_b.sent()).GoTools;
                    return [2 /*return*/, GoTools];
                case 481: return [4 /*yield*/, import("react-icons/go")];
                case 482:
                    GoTrash = (_b.sent()).GoTrash;
                    return [2 /*return*/, GoTrash];
                case 483: return [4 /*yield*/, import("react-icons/go")];
                case 484:
                    GoTriangleDown = (_b.sent()).GoTriangleDown;
                    return [2 /*return*/, GoTriangleDown];
                case 485: return [4 /*yield*/, import("react-icons/go")];
                case 486:
                    GoTriangleLeft = (_b.sent()).GoTriangleLeft;
                    return [2 /*return*/, GoTriangleLeft];
                case 487: return [4 /*yield*/, import("react-icons/go")];
                case 488:
                    GoTriangleRight = (_b.sent()).GoTriangleRight;
                    return [2 /*return*/, GoTriangleRight];
                case 489: return [4 /*yield*/, import("react-icons/go")];
                case 490:
                    GoTriangleUp = (_b.sent()).GoTriangleUp;
                    return [2 /*return*/, GoTriangleUp];
                case 491: return [4 /*yield*/, import("react-icons/go")];
                case 492:
                    GoTrophy = (_b.sent()).GoTrophy;
                    return [2 /*return*/, GoTrophy];
                case 493: return [4 /*yield*/, import("react-icons/go")];
                case 494:
                    GoTypography = (_b.sent()).GoTypography;
                    return [2 /*return*/, GoTypography];
                case 495: return [4 /*yield*/, import("react-icons/go")];
                case 496:
                    GoUnfold = (_b.sent()).GoUnfold;
                    return [2 /*return*/, GoUnfold];
                case 497: return [4 /*yield*/, import("react-icons/go")];
                case 498:
                    GoUnlink = (_b.sent()).GoUnlink;
                    return [2 /*return*/, GoUnlink];
                case 499: return [4 /*yield*/, import("react-icons/go")];
                case 500:
                    GoUnlock = (_b.sent()).GoUnlock;
                    return [2 /*return*/, GoUnlock];
                case 501: return [4 /*yield*/, import("react-icons/go")];
                case 502:
                    GoUnmute = (_b.sent()).GoUnmute;
                    return [2 /*return*/, GoUnmute];
                case 503: return [4 /*yield*/, import("react-icons/go")];
                case 504:
                    GoUnread = (_b.sent()).GoUnread;
                    return [2 /*return*/, GoUnread];
                case 505: return [4 /*yield*/, import("react-icons/go")];
                case 506:
                    GoUnverified = (_b.sent()).GoUnverified;
                    return [2 /*return*/, GoUnverified];
                case 507: return [4 /*yield*/, import("react-icons/go")];
                case 508:
                    GoUpload = (_b.sent()).GoUpload;
                    return [2 /*return*/, GoUpload];
                case 509: return [4 /*yield*/, import("react-icons/go")];
                case 510:
                    GoVerified = (_b.sent()).GoVerified;
                    return [2 /*return*/, GoVerified];
                case 511: return [4 /*yield*/, import("react-icons/go")];
                case 512:
                    GoVersions = (_b.sent()).GoVersions;
                    return [2 /*return*/, GoVersions];
                case 513: return [4 /*yield*/, import("react-icons/go")];
                case 514:
                    GoVideo = (_b.sent()).GoVideo;
                    return [2 /*return*/, GoVideo];
                case 515: return [4 /*yield*/, import("react-icons/go")];
                case 516:
                    GoWorkflow = (_b.sent()).GoWorkflow;
                    return [2 /*return*/, GoWorkflow];
                case 517: return [4 /*yield*/, import("react-icons/go")];
                case 518:
                    GoX = (_b.sent()).GoX;
                    return [2 /*return*/, GoX];
                case 519: return [4 /*yield*/, import("react-icons/go")];
                case 520:
                    GoXCircle = (_b.sent()).GoXCircle;
                    return [2 /*return*/, GoXCircle];
                case 521: return [4 /*yield*/, import("react-icons/go")];
                case 522:
                    GoXCircleFill = (_b.sent()).GoXCircleFill;
                    return [2 /*return*/, GoXCircleFill];
                case 523: return [4 /*yield*/, import("react-icons/go")];
                case 524:
                    GoZap = (_b.sent()).GoZap;
                    return [2 /*return*/, GoZap];
                case 525: return [4 /*yield*/, import("react-icons/go")];
                case 526:
                    GoZoomIn = (_b.sent()).GoZoomIn;
                    return [2 /*return*/, GoZoomIn];
                case 527: return [4 /*yield*/, import("react-icons/go")];
                case 528:
                    GoZoomOut = (_b.sent()).GoZoomOut;
                    return [2 /*return*/, GoZoomOut];
                case 529: return [2 /*return*/];
            }
        });
    });
}
