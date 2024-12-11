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
export function nameToReactIcon_di_0(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, DiAndroid, DiAngularSimple, DiAppcelerator, DiApple, DiAppstore, DiAptana, DiAsterisk, DiAtlassian, DiAtom, DiAws, DiBackbone, DiBingSmall, DiBintray, DiBitbucket, DiBlackberry, DiBootstrap, DiBower, DiBrackets, DiBugsense, DiCelluloid, DiChrome, DiCisco, DiClojureAlt, DiClojure, DiCloud9, DiCoda, DiCodeBadge, DiCode, DiCodeigniter, DiCodepen, DiCodrops, DiCoffeescript, DiCompass, DiComposer, DiCreativecommonsBadge, DiCreativecommons, DiCssTricks, DiCss3Full, DiCss3, DiCssdeck, DiDart, DiDatabase, DiDebian, DiDigitalOcean, DiDjango, DiDlang, DiDocker, DiDoctrine, DiDojo, DiDotnet, DiDreamweaver, DiDropbox, DiDrupal, DiEclipse, DiEmber, DiEnvato, DiErlang, DiExtjs, DiFirebase, DiFirefox, DiFsharp, DiGhostSmall, DiGhost, DiGitBranch, DiGitCommit, DiGitCompare, DiGitMerge, DiGitPullRequest, DiGit, DiGithubAlt, DiGithubBadge, DiGithubFull, DiGithub, DiGnu, DiGo, DiGoogleAnalytics, DiGoogleDrive, DiGoogleCloudPlatform, DiGrails, DiGroovy, DiGrunt, DiGulp, DiHackernews, DiHaskell, DiHeroku, DiHtml53dEffects, DiHtml5Connectivity, DiHtml5DeviceAccess, DiHtml5Multimedia, DiHtml5, DiIe, DiIllustrator, DiIntellij, DiIonic, DiJava, DiJavascript1, DiJavascript, DiJekyllSmall, DiJenkins, DiJira, DiJoomla, DiJqueryLogo, DiJqueryUiLogo, DiJsBadge, DiKomodo, DiKrakenjsBadge, DiKrakenjs, DiLaravel, DiLess, DiLinux, DiMagento, DiMailchimp, DiMarkdown, DiMaterializecss, DiMeteor, DiMeteorfull, DiMitlicence, DiModernizr, DiMongodb, DiMootoolsBadge, DiMootools, DiMozilla, DiMsqlServer, DiMysql, DiNancy, DiNetbeans, DiNetmagazine, DiNginx, DiNodejsSmall, DiNodejs, DiNpm, DiOnedrive, DiOpenshift, DiOpensource, DiOpera, DiPerl, DiPhonegap, DiPhotoshop, DiPhp, DiPostgresql, DiProlog, DiPython, DiRackspace, DiRaphael, DiRasberryPi, DiReact, DiRedhat, DiRedis, DiRequirejs, DiResponsive, DiRor, DiRubyRough, DiRuby, DiRust, DiSafari, DiSass, DiScala, DiScriptcs, DiScrum, DiSenchatouch, DiSizzlejs, DiSmashingMagazine, DiSnapSvg, DiSpark, DiSqllite, DiStackoverflow, DiStreamline, DiStylus, DiSublime, DiSwift, DiSymfonyBadge, DiSymfony, DiTechcrunch, DiTerminalBadge, DiTerminal, DiTravis, DiTrello, DiTypo3, DiUbuntu, DiUikit, DiUnitySmall, DiVim, DiVisualstudio, DiW3C, DiWebplatform, DiWindows, DiWordpress, DiYahooSmall, DiYahoo, DiYeoman, DiYii, DiZend;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "di:DiAndroid": return [3 /*break*/, 1];
                        case "di:DiAngularSimple": return [3 /*break*/, 3];
                        case "di:DiAppcelerator": return [3 /*break*/, 5];
                        case "di:DiApple": return [3 /*break*/, 7];
                        case "di:DiAppstore": return [3 /*break*/, 9];
                        case "di:DiAptana": return [3 /*break*/, 11];
                        case "di:DiAsterisk": return [3 /*break*/, 13];
                        case "di:DiAtlassian": return [3 /*break*/, 15];
                        case "di:DiAtom": return [3 /*break*/, 17];
                        case "di:DiAws": return [3 /*break*/, 19];
                        case "di:DiBackbone": return [3 /*break*/, 21];
                        case "di:DiBingSmall": return [3 /*break*/, 23];
                        case "di:DiBintray": return [3 /*break*/, 25];
                        case "di:DiBitbucket": return [3 /*break*/, 27];
                        case "di:DiBlackberry": return [3 /*break*/, 29];
                        case "di:DiBootstrap": return [3 /*break*/, 31];
                        case "di:DiBower": return [3 /*break*/, 33];
                        case "di:DiBrackets": return [3 /*break*/, 35];
                        case "di:DiBugsense": return [3 /*break*/, 37];
                        case "di:DiCelluloid": return [3 /*break*/, 39];
                        case "di:DiChrome": return [3 /*break*/, 41];
                        case "di:DiCisco": return [3 /*break*/, 43];
                        case "di:DiClojureAlt": return [3 /*break*/, 45];
                        case "di:DiClojure": return [3 /*break*/, 47];
                        case "di:DiCloud9": return [3 /*break*/, 49];
                        case "di:DiCoda": return [3 /*break*/, 51];
                        case "di:DiCodeBadge": return [3 /*break*/, 53];
                        case "di:DiCode": return [3 /*break*/, 55];
                        case "di:DiCodeigniter": return [3 /*break*/, 57];
                        case "di:DiCodepen": return [3 /*break*/, 59];
                        case "di:DiCodrops": return [3 /*break*/, 61];
                        case "di:DiCoffeescript": return [3 /*break*/, 63];
                        case "di:DiCompass": return [3 /*break*/, 65];
                        case "di:DiComposer": return [3 /*break*/, 67];
                        case "di:DiCreativecommonsBadge": return [3 /*break*/, 69];
                        case "di:DiCreativecommons": return [3 /*break*/, 71];
                        case "di:DiCssTricks": return [3 /*break*/, 73];
                        case "di:DiCss3Full": return [3 /*break*/, 75];
                        case "di:DiCss3": return [3 /*break*/, 77];
                        case "di:DiCssdeck": return [3 /*break*/, 79];
                        case "di:DiDart": return [3 /*break*/, 81];
                        case "di:DiDatabase": return [3 /*break*/, 83];
                        case "di:DiDebian": return [3 /*break*/, 85];
                        case "di:DiDigitalOcean": return [3 /*break*/, 87];
                        case "di:DiDjango": return [3 /*break*/, 89];
                        case "di:DiDlang": return [3 /*break*/, 91];
                        case "di:DiDocker": return [3 /*break*/, 93];
                        case "di:DiDoctrine": return [3 /*break*/, 95];
                        case "di:DiDojo": return [3 /*break*/, 97];
                        case "di:DiDotnet": return [3 /*break*/, 99];
                        case "di:DiDreamweaver": return [3 /*break*/, 101];
                        case "di:DiDropbox": return [3 /*break*/, 103];
                        case "di:DiDrupal": return [3 /*break*/, 105];
                        case "di:DiEclipse": return [3 /*break*/, 107];
                        case "di:DiEmber": return [3 /*break*/, 109];
                        case "di:DiEnvato": return [3 /*break*/, 111];
                        case "di:DiErlang": return [3 /*break*/, 113];
                        case "di:DiExtjs": return [3 /*break*/, 115];
                        case "di:DiFirebase": return [3 /*break*/, 117];
                        case "di:DiFirefox": return [3 /*break*/, 119];
                        case "di:DiFsharp": return [3 /*break*/, 121];
                        case "di:DiGhostSmall": return [3 /*break*/, 123];
                        case "di:DiGhost": return [3 /*break*/, 125];
                        case "di:DiGitBranch": return [3 /*break*/, 127];
                        case "di:DiGitCommit": return [3 /*break*/, 129];
                        case "di:DiGitCompare": return [3 /*break*/, 131];
                        case "di:DiGitMerge": return [3 /*break*/, 133];
                        case "di:DiGitPullRequest": return [3 /*break*/, 135];
                        case "di:DiGit": return [3 /*break*/, 137];
                        case "di:DiGithubAlt": return [3 /*break*/, 139];
                        case "di:DiGithubBadge": return [3 /*break*/, 141];
                        case "di:DiGithubFull": return [3 /*break*/, 143];
                        case "di:DiGithub": return [3 /*break*/, 145];
                        case "di:DiGnu": return [3 /*break*/, 147];
                        case "di:DiGo": return [3 /*break*/, 149];
                        case "di:DiGoogleAnalytics": return [3 /*break*/, 151];
                        case "di:DiGoogleDrive": return [3 /*break*/, 153];
                        case "di:DiGoogleCloudPlatform": return [3 /*break*/, 155];
                        case "di:DiGrails": return [3 /*break*/, 157];
                        case "di:DiGroovy": return [3 /*break*/, 159];
                        case "di:DiGrunt": return [3 /*break*/, 161];
                        case "di:DiGulp": return [3 /*break*/, 163];
                        case "di:DiHackernews": return [3 /*break*/, 165];
                        case "di:DiHaskell": return [3 /*break*/, 167];
                        case "di:DiHeroku": return [3 /*break*/, 169];
                        case "di:DiHtml53dEffects": return [3 /*break*/, 171];
                        case "di:DiHtml5Connectivity": return [3 /*break*/, 173];
                        case "di:DiHtml5DeviceAccess": return [3 /*break*/, 175];
                        case "di:DiHtml5Multimedia": return [3 /*break*/, 177];
                        case "di:DiHtml5": return [3 /*break*/, 179];
                        case "di:DiIe": return [3 /*break*/, 181];
                        case "di:DiIllustrator": return [3 /*break*/, 183];
                        case "di:DiIntellij": return [3 /*break*/, 185];
                        case "di:DiIonic": return [3 /*break*/, 187];
                        case "di:DiJava": return [3 /*break*/, 189];
                        case "di:DiJavascript1": return [3 /*break*/, 191];
                        case "di:DiJavascript": return [3 /*break*/, 193];
                        case "di:DiJekyllSmall": return [3 /*break*/, 195];
                        case "di:DiJenkins": return [3 /*break*/, 197];
                        case "di:DiJira": return [3 /*break*/, 199];
                        case "di:DiJoomla": return [3 /*break*/, 201];
                        case "di:DiJqueryLogo": return [3 /*break*/, 203];
                        case "di:DiJqueryUiLogo": return [3 /*break*/, 205];
                        case "di:DiJsBadge": return [3 /*break*/, 207];
                        case "di:DiKomodo": return [3 /*break*/, 209];
                        case "di:DiKrakenjsBadge": return [3 /*break*/, 211];
                        case "di:DiKrakenjs": return [3 /*break*/, 213];
                        case "di:DiLaravel": return [3 /*break*/, 215];
                        case "di:DiLess": return [3 /*break*/, 217];
                        case "di:DiLinux": return [3 /*break*/, 219];
                        case "di:DiMagento": return [3 /*break*/, 221];
                        case "di:DiMailchimp": return [3 /*break*/, 223];
                        case "di:DiMarkdown": return [3 /*break*/, 225];
                        case "di:DiMaterializecss": return [3 /*break*/, 227];
                        case "di:DiMeteor": return [3 /*break*/, 229];
                        case "di:DiMeteorfull": return [3 /*break*/, 231];
                        case "di:DiMitlicence": return [3 /*break*/, 233];
                        case "di:DiModernizr": return [3 /*break*/, 235];
                        case "di:DiMongodb": return [3 /*break*/, 237];
                        case "di:DiMootoolsBadge": return [3 /*break*/, 239];
                        case "di:DiMootools": return [3 /*break*/, 241];
                        case "di:DiMozilla": return [3 /*break*/, 243];
                        case "di:DiMsqlServer": return [3 /*break*/, 245];
                        case "di:DiMysql": return [3 /*break*/, 247];
                        case "di:DiNancy": return [3 /*break*/, 249];
                        case "di:DiNetbeans": return [3 /*break*/, 251];
                        case "di:DiNetmagazine": return [3 /*break*/, 253];
                        case "di:DiNginx": return [3 /*break*/, 255];
                        case "di:DiNodejsSmall": return [3 /*break*/, 257];
                        case "di:DiNodejs": return [3 /*break*/, 259];
                        case "di:DiNpm": return [3 /*break*/, 261];
                        case "di:DiOnedrive": return [3 /*break*/, 263];
                        case "di:DiOpenshift": return [3 /*break*/, 265];
                        case "di:DiOpensource": return [3 /*break*/, 267];
                        case "di:DiOpera": return [3 /*break*/, 269];
                        case "di:DiPerl": return [3 /*break*/, 271];
                        case "di:DiPhonegap": return [3 /*break*/, 273];
                        case "di:DiPhotoshop": return [3 /*break*/, 275];
                        case "di:DiPhp": return [3 /*break*/, 277];
                        case "di:DiPostgresql": return [3 /*break*/, 279];
                        case "di:DiProlog": return [3 /*break*/, 281];
                        case "di:DiPython": return [3 /*break*/, 283];
                        case "di:DiRackspace": return [3 /*break*/, 285];
                        case "di:DiRaphael": return [3 /*break*/, 287];
                        case "di:DiRasberryPi": return [3 /*break*/, 289];
                        case "di:DiReact": return [3 /*break*/, 291];
                        case "di:DiRedhat": return [3 /*break*/, 293];
                        case "di:DiRedis": return [3 /*break*/, 295];
                        case "di:DiRequirejs": return [3 /*break*/, 297];
                        case "di:DiResponsive": return [3 /*break*/, 299];
                        case "di:DiRor": return [3 /*break*/, 301];
                        case "di:DiRubyRough": return [3 /*break*/, 303];
                        case "di:DiRuby": return [3 /*break*/, 305];
                        case "di:DiRust": return [3 /*break*/, 307];
                        case "di:DiSafari": return [3 /*break*/, 309];
                        case "di:DiSass": return [3 /*break*/, 311];
                        case "di:DiScala": return [3 /*break*/, 313];
                        case "di:DiScriptcs": return [3 /*break*/, 315];
                        case "di:DiScrum": return [3 /*break*/, 317];
                        case "di:DiSenchatouch": return [3 /*break*/, 319];
                        case "di:DiSizzlejs": return [3 /*break*/, 321];
                        case "di:DiSmashingMagazine": return [3 /*break*/, 323];
                        case "di:DiSnapSvg": return [3 /*break*/, 325];
                        case "di:DiSpark": return [3 /*break*/, 327];
                        case "di:DiSqllite": return [3 /*break*/, 329];
                        case "di:DiStackoverflow": return [3 /*break*/, 331];
                        case "di:DiStreamline": return [3 /*break*/, 333];
                        case "di:DiStylus": return [3 /*break*/, 335];
                        case "di:DiSublime": return [3 /*break*/, 337];
                        case "di:DiSwift": return [3 /*break*/, 339];
                        case "di:DiSymfonyBadge": return [3 /*break*/, 341];
                        case "di:DiSymfony": return [3 /*break*/, 343];
                        case "di:DiTechcrunch": return [3 /*break*/, 345];
                        case "di:DiTerminalBadge": return [3 /*break*/, 347];
                        case "di:DiTerminal": return [3 /*break*/, 349];
                        case "di:DiTravis": return [3 /*break*/, 351];
                        case "di:DiTrello": return [3 /*break*/, 353];
                        case "di:DiTypo3": return [3 /*break*/, 355];
                        case "di:DiUbuntu": return [3 /*break*/, 357];
                        case "di:DiUikit": return [3 /*break*/, 359];
                        case "di:DiUnitySmall": return [3 /*break*/, 361];
                        case "di:DiVim": return [3 /*break*/, 363];
                        case "di:DiVisualstudio": return [3 /*break*/, 365];
                        case "di:DiW3C": return [3 /*break*/, 367];
                        case "di:DiWebplatform": return [3 /*break*/, 369];
                        case "di:DiWindows": return [3 /*break*/, 371];
                        case "di:DiWordpress": return [3 /*break*/, 373];
                        case "di:DiYahooSmall": return [3 /*break*/, 375];
                        case "di:DiYahoo": return [3 /*break*/, 377];
                        case "di:DiYeoman": return [3 /*break*/, 379];
                        case "di:DiYii": return [3 /*break*/, 381];
                        case "di:DiZend": return [3 /*break*/, 383];
                    }
                    return [3 /*break*/, 385];
                case 1: return [4 /*yield*/, import("react-icons/di")];
                case 2:
                    DiAndroid = (_b.sent()).DiAndroid;
                    return [2 /*return*/, DiAndroid];
                case 3: return [4 /*yield*/, import("react-icons/di")];
                case 4:
                    DiAngularSimple = (_b.sent()).DiAngularSimple;
                    return [2 /*return*/, DiAngularSimple];
                case 5: return [4 /*yield*/, import("react-icons/di")];
                case 6:
                    DiAppcelerator = (_b.sent()).DiAppcelerator;
                    return [2 /*return*/, DiAppcelerator];
                case 7: return [4 /*yield*/, import("react-icons/di")];
                case 8:
                    DiApple = (_b.sent()).DiApple;
                    return [2 /*return*/, DiApple];
                case 9: return [4 /*yield*/, import("react-icons/di")];
                case 10:
                    DiAppstore = (_b.sent()).DiAppstore;
                    return [2 /*return*/, DiAppstore];
                case 11: return [4 /*yield*/, import("react-icons/di")];
                case 12:
                    DiAptana = (_b.sent()).DiAptana;
                    return [2 /*return*/, DiAptana];
                case 13: return [4 /*yield*/, import("react-icons/di")];
                case 14:
                    DiAsterisk = (_b.sent()).DiAsterisk;
                    return [2 /*return*/, DiAsterisk];
                case 15: return [4 /*yield*/, import("react-icons/di")];
                case 16:
                    DiAtlassian = (_b.sent()).DiAtlassian;
                    return [2 /*return*/, DiAtlassian];
                case 17: return [4 /*yield*/, import("react-icons/di")];
                case 18:
                    DiAtom = (_b.sent()).DiAtom;
                    return [2 /*return*/, DiAtom];
                case 19: return [4 /*yield*/, import("react-icons/di")];
                case 20:
                    DiAws = (_b.sent()).DiAws;
                    return [2 /*return*/, DiAws];
                case 21: return [4 /*yield*/, import("react-icons/di")];
                case 22:
                    DiBackbone = (_b.sent()).DiBackbone;
                    return [2 /*return*/, DiBackbone];
                case 23: return [4 /*yield*/, import("react-icons/di")];
                case 24:
                    DiBingSmall = (_b.sent()).DiBingSmall;
                    return [2 /*return*/, DiBingSmall];
                case 25: return [4 /*yield*/, import("react-icons/di")];
                case 26:
                    DiBintray = (_b.sent()).DiBintray;
                    return [2 /*return*/, DiBintray];
                case 27: return [4 /*yield*/, import("react-icons/di")];
                case 28:
                    DiBitbucket = (_b.sent()).DiBitbucket;
                    return [2 /*return*/, DiBitbucket];
                case 29: return [4 /*yield*/, import("react-icons/di")];
                case 30:
                    DiBlackberry = (_b.sent()).DiBlackberry;
                    return [2 /*return*/, DiBlackberry];
                case 31: return [4 /*yield*/, import("react-icons/di")];
                case 32:
                    DiBootstrap = (_b.sent()).DiBootstrap;
                    return [2 /*return*/, DiBootstrap];
                case 33: return [4 /*yield*/, import("react-icons/di")];
                case 34:
                    DiBower = (_b.sent()).DiBower;
                    return [2 /*return*/, DiBower];
                case 35: return [4 /*yield*/, import("react-icons/di")];
                case 36:
                    DiBrackets = (_b.sent()).DiBrackets;
                    return [2 /*return*/, DiBrackets];
                case 37: return [4 /*yield*/, import("react-icons/di")];
                case 38:
                    DiBugsense = (_b.sent()).DiBugsense;
                    return [2 /*return*/, DiBugsense];
                case 39: return [4 /*yield*/, import("react-icons/di")];
                case 40:
                    DiCelluloid = (_b.sent()).DiCelluloid;
                    return [2 /*return*/, DiCelluloid];
                case 41: return [4 /*yield*/, import("react-icons/di")];
                case 42:
                    DiChrome = (_b.sent()).DiChrome;
                    return [2 /*return*/, DiChrome];
                case 43: return [4 /*yield*/, import("react-icons/di")];
                case 44:
                    DiCisco = (_b.sent()).DiCisco;
                    return [2 /*return*/, DiCisco];
                case 45: return [4 /*yield*/, import("react-icons/di")];
                case 46:
                    DiClojureAlt = (_b.sent()).DiClojureAlt;
                    return [2 /*return*/, DiClojureAlt];
                case 47: return [4 /*yield*/, import("react-icons/di")];
                case 48:
                    DiClojure = (_b.sent()).DiClojure;
                    return [2 /*return*/, DiClojure];
                case 49: return [4 /*yield*/, import("react-icons/di")];
                case 50:
                    DiCloud9 = (_b.sent()).DiCloud9;
                    return [2 /*return*/, DiCloud9];
                case 51: return [4 /*yield*/, import("react-icons/di")];
                case 52:
                    DiCoda = (_b.sent()).DiCoda;
                    return [2 /*return*/, DiCoda];
                case 53: return [4 /*yield*/, import("react-icons/di")];
                case 54:
                    DiCodeBadge = (_b.sent()).DiCodeBadge;
                    return [2 /*return*/, DiCodeBadge];
                case 55: return [4 /*yield*/, import("react-icons/di")];
                case 56:
                    DiCode = (_b.sent()).DiCode;
                    return [2 /*return*/, DiCode];
                case 57: return [4 /*yield*/, import("react-icons/di")];
                case 58:
                    DiCodeigniter = (_b.sent()).DiCodeigniter;
                    return [2 /*return*/, DiCodeigniter];
                case 59: return [4 /*yield*/, import("react-icons/di")];
                case 60:
                    DiCodepen = (_b.sent()).DiCodepen;
                    return [2 /*return*/, DiCodepen];
                case 61: return [4 /*yield*/, import("react-icons/di")];
                case 62:
                    DiCodrops = (_b.sent()).DiCodrops;
                    return [2 /*return*/, DiCodrops];
                case 63: return [4 /*yield*/, import("react-icons/di")];
                case 64:
                    DiCoffeescript = (_b.sent()).DiCoffeescript;
                    return [2 /*return*/, DiCoffeescript];
                case 65: return [4 /*yield*/, import("react-icons/di")];
                case 66:
                    DiCompass = (_b.sent()).DiCompass;
                    return [2 /*return*/, DiCompass];
                case 67: return [4 /*yield*/, import("react-icons/di")];
                case 68:
                    DiComposer = (_b.sent()).DiComposer;
                    return [2 /*return*/, DiComposer];
                case 69: return [4 /*yield*/, import("react-icons/di")];
                case 70:
                    DiCreativecommonsBadge = (_b.sent()).DiCreativecommonsBadge;
                    return [2 /*return*/, DiCreativecommonsBadge];
                case 71: return [4 /*yield*/, import("react-icons/di")];
                case 72:
                    DiCreativecommons = (_b.sent()).DiCreativecommons;
                    return [2 /*return*/, DiCreativecommons];
                case 73: return [4 /*yield*/, import("react-icons/di")];
                case 74:
                    DiCssTricks = (_b.sent()).DiCssTricks;
                    return [2 /*return*/, DiCssTricks];
                case 75: return [4 /*yield*/, import("react-icons/di")];
                case 76:
                    DiCss3Full = (_b.sent()).DiCss3Full;
                    return [2 /*return*/, DiCss3Full];
                case 77: return [4 /*yield*/, import("react-icons/di")];
                case 78:
                    DiCss3 = (_b.sent()).DiCss3;
                    return [2 /*return*/, DiCss3];
                case 79: return [4 /*yield*/, import("react-icons/di")];
                case 80:
                    DiCssdeck = (_b.sent()).DiCssdeck;
                    return [2 /*return*/, DiCssdeck];
                case 81: return [4 /*yield*/, import("react-icons/di")];
                case 82:
                    DiDart = (_b.sent()).DiDart;
                    return [2 /*return*/, DiDart];
                case 83: return [4 /*yield*/, import("react-icons/di")];
                case 84:
                    DiDatabase = (_b.sent()).DiDatabase;
                    return [2 /*return*/, DiDatabase];
                case 85: return [4 /*yield*/, import("react-icons/di")];
                case 86:
                    DiDebian = (_b.sent()).DiDebian;
                    return [2 /*return*/, DiDebian];
                case 87: return [4 /*yield*/, import("react-icons/di")];
                case 88:
                    DiDigitalOcean = (_b.sent()).DiDigitalOcean;
                    return [2 /*return*/, DiDigitalOcean];
                case 89: return [4 /*yield*/, import("react-icons/di")];
                case 90:
                    DiDjango = (_b.sent()).DiDjango;
                    return [2 /*return*/, DiDjango];
                case 91: return [4 /*yield*/, import("react-icons/di")];
                case 92:
                    DiDlang = (_b.sent()).DiDlang;
                    return [2 /*return*/, DiDlang];
                case 93: return [4 /*yield*/, import("react-icons/di")];
                case 94:
                    DiDocker = (_b.sent()).DiDocker;
                    return [2 /*return*/, DiDocker];
                case 95: return [4 /*yield*/, import("react-icons/di")];
                case 96:
                    DiDoctrine = (_b.sent()).DiDoctrine;
                    return [2 /*return*/, DiDoctrine];
                case 97: return [4 /*yield*/, import("react-icons/di")];
                case 98:
                    DiDojo = (_b.sent()).DiDojo;
                    return [2 /*return*/, DiDojo];
                case 99: return [4 /*yield*/, import("react-icons/di")];
                case 100:
                    DiDotnet = (_b.sent()).DiDotnet;
                    return [2 /*return*/, DiDotnet];
                case 101: return [4 /*yield*/, import("react-icons/di")];
                case 102:
                    DiDreamweaver = (_b.sent()).DiDreamweaver;
                    return [2 /*return*/, DiDreamweaver];
                case 103: return [4 /*yield*/, import("react-icons/di")];
                case 104:
                    DiDropbox = (_b.sent()).DiDropbox;
                    return [2 /*return*/, DiDropbox];
                case 105: return [4 /*yield*/, import("react-icons/di")];
                case 106:
                    DiDrupal = (_b.sent()).DiDrupal;
                    return [2 /*return*/, DiDrupal];
                case 107: return [4 /*yield*/, import("react-icons/di")];
                case 108:
                    DiEclipse = (_b.sent()).DiEclipse;
                    return [2 /*return*/, DiEclipse];
                case 109: return [4 /*yield*/, import("react-icons/di")];
                case 110:
                    DiEmber = (_b.sent()).DiEmber;
                    return [2 /*return*/, DiEmber];
                case 111: return [4 /*yield*/, import("react-icons/di")];
                case 112:
                    DiEnvato = (_b.sent()).DiEnvato;
                    return [2 /*return*/, DiEnvato];
                case 113: return [4 /*yield*/, import("react-icons/di")];
                case 114:
                    DiErlang = (_b.sent()).DiErlang;
                    return [2 /*return*/, DiErlang];
                case 115: return [4 /*yield*/, import("react-icons/di")];
                case 116:
                    DiExtjs = (_b.sent()).DiExtjs;
                    return [2 /*return*/, DiExtjs];
                case 117: return [4 /*yield*/, import("react-icons/di")];
                case 118:
                    DiFirebase = (_b.sent()).DiFirebase;
                    return [2 /*return*/, DiFirebase];
                case 119: return [4 /*yield*/, import("react-icons/di")];
                case 120:
                    DiFirefox = (_b.sent()).DiFirefox;
                    return [2 /*return*/, DiFirefox];
                case 121: return [4 /*yield*/, import("react-icons/di")];
                case 122:
                    DiFsharp = (_b.sent()).DiFsharp;
                    return [2 /*return*/, DiFsharp];
                case 123: return [4 /*yield*/, import("react-icons/di")];
                case 124:
                    DiGhostSmall = (_b.sent()).DiGhostSmall;
                    return [2 /*return*/, DiGhostSmall];
                case 125: return [4 /*yield*/, import("react-icons/di")];
                case 126:
                    DiGhost = (_b.sent()).DiGhost;
                    return [2 /*return*/, DiGhost];
                case 127: return [4 /*yield*/, import("react-icons/di")];
                case 128:
                    DiGitBranch = (_b.sent()).DiGitBranch;
                    return [2 /*return*/, DiGitBranch];
                case 129: return [4 /*yield*/, import("react-icons/di")];
                case 130:
                    DiGitCommit = (_b.sent()).DiGitCommit;
                    return [2 /*return*/, DiGitCommit];
                case 131: return [4 /*yield*/, import("react-icons/di")];
                case 132:
                    DiGitCompare = (_b.sent()).DiGitCompare;
                    return [2 /*return*/, DiGitCompare];
                case 133: return [4 /*yield*/, import("react-icons/di")];
                case 134:
                    DiGitMerge = (_b.sent()).DiGitMerge;
                    return [2 /*return*/, DiGitMerge];
                case 135: return [4 /*yield*/, import("react-icons/di")];
                case 136:
                    DiGitPullRequest = (_b.sent()).DiGitPullRequest;
                    return [2 /*return*/, DiGitPullRequest];
                case 137: return [4 /*yield*/, import("react-icons/di")];
                case 138:
                    DiGit = (_b.sent()).DiGit;
                    return [2 /*return*/, DiGit];
                case 139: return [4 /*yield*/, import("react-icons/di")];
                case 140:
                    DiGithubAlt = (_b.sent()).DiGithubAlt;
                    return [2 /*return*/, DiGithubAlt];
                case 141: return [4 /*yield*/, import("react-icons/di")];
                case 142:
                    DiGithubBadge = (_b.sent()).DiGithubBadge;
                    return [2 /*return*/, DiGithubBadge];
                case 143: return [4 /*yield*/, import("react-icons/di")];
                case 144:
                    DiGithubFull = (_b.sent()).DiGithubFull;
                    return [2 /*return*/, DiGithubFull];
                case 145: return [4 /*yield*/, import("react-icons/di")];
                case 146:
                    DiGithub = (_b.sent()).DiGithub;
                    return [2 /*return*/, DiGithub];
                case 147: return [4 /*yield*/, import("react-icons/di")];
                case 148:
                    DiGnu = (_b.sent()).DiGnu;
                    return [2 /*return*/, DiGnu];
                case 149: return [4 /*yield*/, import("react-icons/di")];
                case 150:
                    DiGo = (_b.sent()).DiGo;
                    return [2 /*return*/, DiGo];
                case 151: return [4 /*yield*/, import("react-icons/di")];
                case 152:
                    DiGoogleAnalytics = (_b.sent()).DiGoogleAnalytics;
                    return [2 /*return*/, DiGoogleAnalytics];
                case 153: return [4 /*yield*/, import("react-icons/di")];
                case 154:
                    DiGoogleDrive = (_b.sent()).DiGoogleDrive;
                    return [2 /*return*/, DiGoogleDrive];
                case 155: return [4 /*yield*/, import("react-icons/di")];
                case 156:
                    DiGoogleCloudPlatform = (_b.sent()).DiGoogleCloudPlatform;
                    return [2 /*return*/, DiGoogleCloudPlatform];
                case 157: return [4 /*yield*/, import("react-icons/di")];
                case 158:
                    DiGrails = (_b.sent()).DiGrails;
                    return [2 /*return*/, DiGrails];
                case 159: return [4 /*yield*/, import("react-icons/di")];
                case 160:
                    DiGroovy = (_b.sent()).DiGroovy;
                    return [2 /*return*/, DiGroovy];
                case 161: return [4 /*yield*/, import("react-icons/di")];
                case 162:
                    DiGrunt = (_b.sent()).DiGrunt;
                    return [2 /*return*/, DiGrunt];
                case 163: return [4 /*yield*/, import("react-icons/di")];
                case 164:
                    DiGulp = (_b.sent()).DiGulp;
                    return [2 /*return*/, DiGulp];
                case 165: return [4 /*yield*/, import("react-icons/di")];
                case 166:
                    DiHackernews = (_b.sent()).DiHackernews;
                    return [2 /*return*/, DiHackernews];
                case 167: return [4 /*yield*/, import("react-icons/di")];
                case 168:
                    DiHaskell = (_b.sent()).DiHaskell;
                    return [2 /*return*/, DiHaskell];
                case 169: return [4 /*yield*/, import("react-icons/di")];
                case 170:
                    DiHeroku = (_b.sent()).DiHeroku;
                    return [2 /*return*/, DiHeroku];
                case 171: return [4 /*yield*/, import("react-icons/di")];
                case 172:
                    DiHtml53dEffects = (_b.sent()).DiHtml53dEffects;
                    return [2 /*return*/, DiHtml53dEffects];
                case 173: return [4 /*yield*/, import("react-icons/di")];
                case 174:
                    DiHtml5Connectivity = (_b.sent()).DiHtml5Connectivity;
                    return [2 /*return*/, DiHtml5Connectivity];
                case 175: return [4 /*yield*/, import("react-icons/di")];
                case 176:
                    DiHtml5DeviceAccess = (_b.sent()).DiHtml5DeviceAccess;
                    return [2 /*return*/, DiHtml5DeviceAccess];
                case 177: return [4 /*yield*/, import("react-icons/di")];
                case 178:
                    DiHtml5Multimedia = (_b.sent()).DiHtml5Multimedia;
                    return [2 /*return*/, DiHtml5Multimedia];
                case 179: return [4 /*yield*/, import("react-icons/di")];
                case 180:
                    DiHtml5 = (_b.sent()).DiHtml5;
                    return [2 /*return*/, DiHtml5];
                case 181: return [4 /*yield*/, import("react-icons/di")];
                case 182:
                    DiIe = (_b.sent()).DiIe;
                    return [2 /*return*/, DiIe];
                case 183: return [4 /*yield*/, import("react-icons/di")];
                case 184:
                    DiIllustrator = (_b.sent()).DiIllustrator;
                    return [2 /*return*/, DiIllustrator];
                case 185: return [4 /*yield*/, import("react-icons/di")];
                case 186:
                    DiIntellij = (_b.sent()).DiIntellij;
                    return [2 /*return*/, DiIntellij];
                case 187: return [4 /*yield*/, import("react-icons/di")];
                case 188:
                    DiIonic = (_b.sent()).DiIonic;
                    return [2 /*return*/, DiIonic];
                case 189: return [4 /*yield*/, import("react-icons/di")];
                case 190:
                    DiJava = (_b.sent()).DiJava;
                    return [2 /*return*/, DiJava];
                case 191: return [4 /*yield*/, import("react-icons/di")];
                case 192:
                    DiJavascript1 = (_b.sent()).DiJavascript1;
                    return [2 /*return*/, DiJavascript1];
                case 193: return [4 /*yield*/, import("react-icons/di")];
                case 194:
                    DiJavascript = (_b.sent()).DiJavascript;
                    return [2 /*return*/, DiJavascript];
                case 195: return [4 /*yield*/, import("react-icons/di")];
                case 196:
                    DiJekyllSmall = (_b.sent()).DiJekyllSmall;
                    return [2 /*return*/, DiJekyllSmall];
                case 197: return [4 /*yield*/, import("react-icons/di")];
                case 198:
                    DiJenkins = (_b.sent()).DiJenkins;
                    return [2 /*return*/, DiJenkins];
                case 199: return [4 /*yield*/, import("react-icons/di")];
                case 200:
                    DiJira = (_b.sent()).DiJira;
                    return [2 /*return*/, DiJira];
                case 201: return [4 /*yield*/, import("react-icons/di")];
                case 202:
                    DiJoomla = (_b.sent()).DiJoomla;
                    return [2 /*return*/, DiJoomla];
                case 203: return [4 /*yield*/, import("react-icons/di")];
                case 204:
                    DiJqueryLogo = (_b.sent()).DiJqueryLogo;
                    return [2 /*return*/, DiJqueryLogo];
                case 205: return [4 /*yield*/, import("react-icons/di")];
                case 206:
                    DiJqueryUiLogo = (_b.sent()).DiJqueryUiLogo;
                    return [2 /*return*/, DiJqueryUiLogo];
                case 207: return [4 /*yield*/, import("react-icons/di")];
                case 208:
                    DiJsBadge = (_b.sent()).DiJsBadge;
                    return [2 /*return*/, DiJsBadge];
                case 209: return [4 /*yield*/, import("react-icons/di")];
                case 210:
                    DiKomodo = (_b.sent()).DiKomodo;
                    return [2 /*return*/, DiKomodo];
                case 211: return [4 /*yield*/, import("react-icons/di")];
                case 212:
                    DiKrakenjsBadge = (_b.sent()).DiKrakenjsBadge;
                    return [2 /*return*/, DiKrakenjsBadge];
                case 213: return [4 /*yield*/, import("react-icons/di")];
                case 214:
                    DiKrakenjs = (_b.sent()).DiKrakenjs;
                    return [2 /*return*/, DiKrakenjs];
                case 215: return [4 /*yield*/, import("react-icons/di")];
                case 216:
                    DiLaravel = (_b.sent()).DiLaravel;
                    return [2 /*return*/, DiLaravel];
                case 217: return [4 /*yield*/, import("react-icons/di")];
                case 218:
                    DiLess = (_b.sent()).DiLess;
                    return [2 /*return*/, DiLess];
                case 219: return [4 /*yield*/, import("react-icons/di")];
                case 220:
                    DiLinux = (_b.sent()).DiLinux;
                    return [2 /*return*/, DiLinux];
                case 221: return [4 /*yield*/, import("react-icons/di")];
                case 222:
                    DiMagento = (_b.sent()).DiMagento;
                    return [2 /*return*/, DiMagento];
                case 223: return [4 /*yield*/, import("react-icons/di")];
                case 224:
                    DiMailchimp = (_b.sent()).DiMailchimp;
                    return [2 /*return*/, DiMailchimp];
                case 225: return [4 /*yield*/, import("react-icons/di")];
                case 226:
                    DiMarkdown = (_b.sent()).DiMarkdown;
                    return [2 /*return*/, DiMarkdown];
                case 227: return [4 /*yield*/, import("react-icons/di")];
                case 228:
                    DiMaterializecss = (_b.sent()).DiMaterializecss;
                    return [2 /*return*/, DiMaterializecss];
                case 229: return [4 /*yield*/, import("react-icons/di")];
                case 230:
                    DiMeteor = (_b.sent()).DiMeteor;
                    return [2 /*return*/, DiMeteor];
                case 231: return [4 /*yield*/, import("react-icons/di")];
                case 232:
                    DiMeteorfull = (_b.sent()).DiMeteorfull;
                    return [2 /*return*/, DiMeteorfull];
                case 233: return [4 /*yield*/, import("react-icons/di")];
                case 234:
                    DiMitlicence = (_b.sent()).DiMitlicence;
                    return [2 /*return*/, DiMitlicence];
                case 235: return [4 /*yield*/, import("react-icons/di")];
                case 236:
                    DiModernizr = (_b.sent()).DiModernizr;
                    return [2 /*return*/, DiModernizr];
                case 237: return [4 /*yield*/, import("react-icons/di")];
                case 238:
                    DiMongodb = (_b.sent()).DiMongodb;
                    return [2 /*return*/, DiMongodb];
                case 239: return [4 /*yield*/, import("react-icons/di")];
                case 240:
                    DiMootoolsBadge = (_b.sent()).DiMootoolsBadge;
                    return [2 /*return*/, DiMootoolsBadge];
                case 241: return [4 /*yield*/, import("react-icons/di")];
                case 242:
                    DiMootools = (_b.sent()).DiMootools;
                    return [2 /*return*/, DiMootools];
                case 243: return [4 /*yield*/, import("react-icons/di")];
                case 244:
                    DiMozilla = (_b.sent()).DiMozilla;
                    return [2 /*return*/, DiMozilla];
                case 245: return [4 /*yield*/, import("react-icons/di")];
                case 246:
                    DiMsqlServer = (_b.sent()).DiMsqlServer;
                    return [2 /*return*/, DiMsqlServer];
                case 247: return [4 /*yield*/, import("react-icons/di")];
                case 248:
                    DiMysql = (_b.sent()).DiMysql;
                    return [2 /*return*/, DiMysql];
                case 249: return [4 /*yield*/, import("react-icons/di")];
                case 250:
                    DiNancy = (_b.sent()).DiNancy;
                    return [2 /*return*/, DiNancy];
                case 251: return [4 /*yield*/, import("react-icons/di")];
                case 252:
                    DiNetbeans = (_b.sent()).DiNetbeans;
                    return [2 /*return*/, DiNetbeans];
                case 253: return [4 /*yield*/, import("react-icons/di")];
                case 254:
                    DiNetmagazine = (_b.sent()).DiNetmagazine;
                    return [2 /*return*/, DiNetmagazine];
                case 255: return [4 /*yield*/, import("react-icons/di")];
                case 256:
                    DiNginx = (_b.sent()).DiNginx;
                    return [2 /*return*/, DiNginx];
                case 257: return [4 /*yield*/, import("react-icons/di")];
                case 258:
                    DiNodejsSmall = (_b.sent()).DiNodejsSmall;
                    return [2 /*return*/, DiNodejsSmall];
                case 259: return [4 /*yield*/, import("react-icons/di")];
                case 260:
                    DiNodejs = (_b.sent()).DiNodejs;
                    return [2 /*return*/, DiNodejs];
                case 261: return [4 /*yield*/, import("react-icons/di")];
                case 262:
                    DiNpm = (_b.sent()).DiNpm;
                    return [2 /*return*/, DiNpm];
                case 263: return [4 /*yield*/, import("react-icons/di")];
                case 264:
                    DiOnedrive = (_b.sent()).DiOnedrive;
                    return [2 /*return*/, DiOnedrive];
                case 265: return [4 /*yield*/, import("react-icons/di")];
                case 266:
                    DiOpenshift = (_b.sent()).DiOpenshift;
                    return [2 /*return*/, DiOpenshift];
                case 267: return [4 /*yield*/, import("react-icons/di")];
                case 268:
                    DiOpensource = (_b.sent()).DiOpensource;
                    return [2 /*return*/, DiOpensource];
                case 269: return [4 /*yield*/, import("react-icons/di")];
                case 270:
                    DiOpera = (_b.sent()).DiOpera;
                    return [2 /*return*/, DiOpera];
                case 271: return [4 /*yield*/, import("react-icons/di")];
                case 272:
                    DiPerl = (_b.sent()).DiPerl;
                    return [2 /*return*/, DiPerl];
                case 273: return [4 /*yield*/, import("react-icons/di")];
                case 274:
                    DiPhonegap = (_b.sent()).DiPhonegap;
                    return [2 /*return*/, DiPhonegap];
                case 275: return [4 /*yield*/, import("react-icons/di")];
                case 276:
                    DiPhotoshop = (_b.sent()).DiPhotoshop;
                    return [2 /*return*/, DiPhotoshop];
                case 277: return [4 /*yield*/, import("react-icons/di")];
                case 278:
                    DiPhp = (_b.sent()).DiPhp;
                    return [2 /*return*/, DiPhp];
                case 279: return [4 /*yield*/, import("react-icons/di")];
                case 280:
                    DiPostgresql = (_b.sent()).DiPostgresql;
                    return [2 /*return*/, DiPostgresql];
                case 281: return [4 /*yield*/, import("react-icons/di")];
                case 282:
                    DiProlog = (_b.sent()).DiProlog;
                    return [2 /*return*/, DiProlog];
                case 283: return [4 /*yield*/, import("react-icons/di")];
                case 284:
                    DiPython = (_b.sent()).DiPython;
                    return [2 /*return*/, DiPython];
                case 285: return [4 /*yield*/, import("react-icons/di")];
                case 286:
                    DiRackspace = (_b.sent()).DiRackspace;
                    return [2 /*return*/, DiRackspace];
                case 287: return [4 /*yield*/, import("react-icons/di")];
                case 288:
                    DiRaphael = (_b.sent()).DiRaphael;
                    return [2 /*return*/, DiRaphael];
                case 289: return [4 /*yield*/, import("react-icons/di")];
                case 290:
                    DiRasberryPi = (_b.sent()).DiRasberryPi;
                    return [2 /*return*/, DiRasberryPi];
                case 291: return [4 /*yield*/, import("react-icons/di")];
                case 292:
                    DiReact = (_b.sent()).DiReact;
                    return [2 /*return*/, DiReact];
                case 293: return [4 /*yield*/, import("react-icons/di")];
                case 294:
                    DiRedhat = (_b.sent()).DiRedhat;
                    return [2 /*return*/, DiRedhat];
                case 295: return [4 /*yield*/, import("react-icons/di")];
                case 296:
                    DiRedis = (_b.sent()).DiRedis;
                    return [2 /*return*/, DiRedis];
                case 297: return [4 /*yield*/, import("react-icons/di")];
                case 298:
                    DiRequirejs = (_b.sent()).DiRequirejs;
                    return [2 /*return*/, DiRequirejs];
                case 299: return [4 /*yield*/, import("react-icons/di")];
                case 300:
                    DiResponsive = (_b.sent()).DiResponsive;
                    return [2 /*return*/, DiResponsive];
                case 301: return [4 /*yield*/, import("react-icons/di")];
                case 302:
                    DiRor = (_b.sent()).DiRor;
                    return [2 /*return*/, DiRor];
                case 303: return [4 /*yield*/, import("react-icons/di")];
                case 304:
                    DiRubyRough = (_b.sent()).DiRubyRough;
                    return [2 /*return*/, DiRubyRough];
                case 305: return [4 /*yield*/, import("react-icons/di")];
                case 306:
                    DiRuby = (_b.sent()).DiRuby;
                    return [2 /*return*/, DiRuby];
                case 307: return [4 /*yield*/, import("react-icons/di")];
                case 308:
                    DiRust = (_b.sent()).DiRust;
                    return [2 /*return*/, DiRust];
                case 309: return [4 /*yield*/, import("react-icons/di")];
                case 310:
                    DiSafari = (_b.sent()).DiSafari;
                    return [2 /*return*/, DiSafari];
                case 311: return [4 /*yield*/, import("react-icons/di")];
                case 312:
                    DiSass = (_b.sent()).DiSass;
                    return [2 /*return*/, DiSass];
                case 313: return [4 /*yield*/, import("react-icons/di")];
                case 314:
                    DiScala = (_b.sent()).DiScala;
                    return [2 /*return*/, DiScala];
                case 315: return [4 /*yield*/, import("react-icons/di")];
                case 316:
                    DiScriptcs = (_b.sent()).DiScriptcs;
                    return [2 /*return*/, DiScriptcs];
                case 317: return [4 /*yield*/, import("react-icons/di")];
                case 318:
                    DiScrum = (_b.sent()).DiScrum;
                    return [2 /*return*/, DiScrum];
                case 319: return [4 /*yield*/, import("react-icons/di")];
                case 320:
                    DiSenchatouch = (_b.sent()).DiSenchatouch;
                    return [2 /*return*/, DiSenchatouch];
                case 321: return [4 /*yield*/, import("react-icons/di")];
                case 322:
                    DiSizzlejs = (_b.sent()).DiSizzlejs;
                    return [2 /*return*/, DiSizzlejs];
                case 323: return [4 /*yield*/, import("react-icons/di")];
                case 324:
                    DiSmashingMagazine = (_b.sent()).DiSmashingMagazine;
                    return [2 /*return*/, DiSmashingMagazine];
                case 325: return [4 /*yield*/, import("react-icons/di")];
                case 326:
                    DiSnapSvg = (_b.sent()).DiSnapSvg;
                    return [2 /*return*/, DiSnapSvg];
                case 327: return [4 /*yield*/, import("react-icons/di")];
                case 328:
                    DiSpark = (_b.sent()).DiSpark;
                    return [2 /*return*/, DiSpark];
                case 329: return [4 /*yield*/, import("react-icons/di")];
                case 330:
                    DiSqllite = (_b.sent()).DiSqllite;
                    return [2 /*return*/, DiSqllite];
                case 331: return [4 /*yield*/, import("react-icons/di")];
                case 332:
                    DiStackoverflow = (_b.sent()).DiStackoverflow;
                    return [2 /*return*/, DiStackoverflow];
                case 333: return [4 /*yield*/, import("react-icons/di")];
                case 334:
                    DiStreamline = (_b.sent()).DiStreamline;
                    return [2 /*return*/, DiStreamline];
                case 335: return [4 /*yield*/, import("react-icons/di")];
                case 336:
                    DiStylus = (_b.sent()).DiStylus;
                    return [2 /*return*/, DiStylus];
                case 337: return [4 /*yield*/, import("react-icons/di")];
                case 338:
                    DiSublime = (_b.sent()).DiSublime;
                    return [2 /*return*/, DiSublime];
                case 339: return [4 /*yield*/, import("react-icons/di")];
                case 340:
                    DiSwift = (_b.sent()).DiSwift;
                    return [2 /*return*/, DiSwift];
                case 341: return [4 /*yield*/, import("react-icons/di")];
                case 342:
                    DiSymfonyBadge = (_b.sent()).DiSymfonyBadge;
                    return [2 /*return*/, DiSymfonyBadge];
                case 343: return [4 /*yield*/, import("react-icons/di")];
                case 344:
                    DiSymfony = (_b.sent()).DiSymfony;
                    return [2 /*return*/, DiSymfony];
                case 345: return [4 /*yield*/, import("react-icons/di")];
                case 346:
                    DiTechcrunch = (_b.sent()).DiTechcrunch;
                    return [2 /*return*/, DiTechcrunch];
                case 347: return [4 /*yield*/, import("react-icons/di")];
                case 348:
                    DiTerminalBadge = (_b.sent()).DiTerminalBadge;
                    return [2 /*return*/, DiTerminalBadge];
                case 349: return [4 /*yield*/, import("react-icons/di")];
                case 350:
                    DiTerminal = (_b.sent()).DiTerminal;
                    return [2 /*return*/, DiTerminal];
                case 351: return [4 /*yield*/, import("react-icons/di")];
                case 352:
                    DiTravis = (_b.sent()).DiTravis;
                    return [2 /*return*/, DiTravis];
                case 353: return [4 /*yield*/, import("react-icons/di")];
                case 354:
                    DiTrello = (_b.sent()).DiTrello;
                    return [2 /*return*/, DiTrello];
                case 355: return [4 /*yield*/, import("react-icons/di")];
                case 356:
                    DiTypo3 = (_b.sent()).DiTypo3;
                    return [2 /*return*/, DiTypo3];
                case 357: return [4 /*yield*/, import("react-icons/di")];
                case 358:
                    DiUbuntu = (_b.sent()).DiUbuntu;
                    return [2 /*return*/, DiUbuntu];
                case 359: return [4 /*yield*/, import("react-icons/di")];
                case 360:
                    DiUikit = (_b.sent()).DiUikit;
                    return [2 /*return*/, DiUikit];
                case 361: return [4 /*yield*/, import("react-icons/di")];
                case 362:
                    DiUnitySmall = (_b.sent()).DiUnitySmall;
                    return [2 /*return*/, DiUnitySmall];
                case 363: return [4 /*yield*/, import("react-icons/di")];
                case 364:
                    DiVim = (_b.sent()).DiVim;
                    return [2 /*return*/, DiVim];
                case 365: return [4 /*yield*/, import("react-icons/di")];
                case 366:
                    DiVisualstudio = (_b.sent()).DiVisualstudio;
                    return [2 /*return*/, DiVisualstudio];
                case 367: return [4 /*yield*/, import("react-icons/di")];
                case 368:
                    DiW3C = (_b.sent()).DiW3C;
                    return [2 /*return*/, DiW3C];
                case 369: return [4 /*yield*/, import("react-icons/di")];
                case 370:
                    DiWebplatform = (_b.sent()).DiWebplatform;
                    return [2 /*return*/, DiWebplatform];
                case 371: return [4 /*yield*/, import("react-icons/di")];
                case 372:
                    DiWindows = (_b.sent()).DiWindows;
                    return [2 /*return*/, DiWindows];
                case 373: return [4 /*yield*/, import("react-icons/di")];
                case 374:
                    DiWordpress = (_b.sent()).DiWordpress;
                    return [2 /*return*/, DiWordpress];
                case 375: return [4 /*yield*/, import("react-icons/di")];
                case 376:
                    DiYahooSmall = (_b.sent()).DiYahooSmall;
                    return [2 /*return*/, DiYahooSmall];
                case 377: return [4 /*yield*/, import("react-icons/di")];
                case 378:
                    DiYahoo = (_b.sent()).DiYahoo;
                    return [2 /*return*/, DiYahoo];
                case 379: return [4 /*yield*/, import("react-icons/di")];
                case 380:
                    DiYeoman = (_b.sent()).DiYeoman;
                    return [2 /*return*/, DiYeoman];
                case 381: return [4 /*yield*/, import("react-icons/di")];
                case 382:
                    DiYii = (_b.sent()).DiYii;
                    return [2 /*return*/, DiYii];
                case 383: return [4 /*yield*/, import("react-icons/di")];
                case 384:
                    DiZend = (_b.sent()).DiZend;
                    return [2 /*return*/, DiZend];
                case 385: return [2 /*return*/];
            }
        });
    });
}
