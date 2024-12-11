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
export function nameToReactIcon_wi_0(iconName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, WiAlien, WiBarometer, WiCelsius, WiCloudDown, WiCloudRefresh, WiCloudUp, WiCloud, WiCloudyGusts, WiCloudyWindy, WiCloudy, WiDayCloudyGusts, WiDayCloudyHigh, WiDayCloudyWindy, WiDayCloudy, WiDayFog, WiDayHail, WiDayHaze, WiDayLightWind, WiDayLightning, WiDayRainMix, WiDayRainWind, WiDayRain, WiDayShowers, WiDaySleetStorm, WiDaySleet, WiDaySnowThunderstorm, WiDaySnowWind, WiDaySnow, WiDaySprinkle, WiDayStormShowers, WiDaySunnyOvercast, WiDaySunny, WiDayThunderstorm, WiDayWindy, WiDegrees, WiDirectionDownLeft, WiDirectionDownRight, WiDirectionDown, WiDirectionLeft, WiDirectionRight, WiDirectionUpLeft, WiDirectionUpRight, WiDirectionUp, WiDust, WiEarthquake, WiFahrenheit, WiFire, WiFlood, WiFog, WiGaleWarning, WiHail, WiHorizonAlt, WiHorizon, WiHot, WiHumidity, WiHurricaneWarning, WiHurricane, WiLightning, WiLunarEclipse, WiMeteor, WiMoonAltFirstQuarter, WiMoonAltFull, WiMoonAltNew, WiMoonAltThirdQuarter, WiMoonAltWaningCrescent1, WiMoonAltWaningCrescent2, WiMoonAltWaningCrescent3, WiMoonAltWaningCrescent4, WiMoonAltWaningCrescent5, WiMoonAltWaningCrescent6, WiMoonAltWaningGibbous1, WiMoonAltWaningGibbous2, WiMoonAltWaningGibbous3, WiMoonAltWaningGibbous4, WiMoonAltWaningGibbous5, WiMoonAltWaningGibbous6, WiMoonAltWaxingCrescent1, WiMoonAltWaxingCrescent2, WiMoonAltWaxingCrescent3, WiMoonAltWaxingCrescent4, WiMoonAltWaxingCrescent5, WiMoonAltWaxingCrescent6, WiMoonAltWaxingGibbous1, WiMoonAltWaxingGibbous2, WiMoonAltWaxingGibbous3, WiMoonAltWaxingGibbous4, WiMoonAltWaxingGibbous5, WiMoonAltWaxingGibbous6, WiMoonFirstQuarter, WiMoonFull, WiMoonNew, WiMoonThirdQuarter, WiMoonWaningCrescent1, WiMoonWaningCrescent2, WiMoonWaningCrescent3, WiMoonWaningCrescent4, WiMoonWaningCrescent5, WiMoonWaningCrescent6, WiMoonWaningGibbous1, WiMoonWaningGibbous2, WiMoonWaningGibbous3, WiMoonWaningGibbous4, WiMoonWaningGibbous5, WiMoonWaningGibbous6, WiMoonWaxing6, WiMoonWaxingCrescent1, WiMoonWaxingCrescent2, WiMoonWaxingCrescent3, WiMoonWaxingCrescent4, WiMoonWaxingCrescent5, WiMoonWaxingGibbous1, WiMoonWaxingGibbous2, WiMoonWaxingGibbous3, WiMoonWaxingGibbous4, WiMoonWaxingGibbous5, WiMoonWaxingGibbous6, WiMoonrise, WiMoonset, WiNa, WiNightAltCloudyGusts, WiNightAltCloudyHigh, WiNightAltCloudyWindy, WiNightAltCloudy, WiNightAltHail, WiNightAltLightning, WiNightAltPartlyCloudy, WiNightAltRainMix, WiNightAltRainWind, WiNightAltRain, WiNightAltShowers, WiNightAltSleetStorm, WiNightAltSleet, WiNightAltSnowThunderstorm, WiNightAltSnowWind, WiNightAltSnow, WiNightAltSprinkle, WiNightAltStormShowers, WiNightAltThunderstorm, WiNightClear, WiNightCloudyGusts, WiNightCloudyHigh, WiNightCloudyWindy, WiNightCloudy, WiNightFog, WiNightHail, WiNightLightning, WiNightPartlyCloudy, WiNightRainMix, WiNightRainWind, WiNightRain, WiNightShowers, WiNightSleetStorm, WiNightSleet, WiNightSnowThunderstorm, WiNightSnowWind, WiNightSnow, WiNightSprinkle, WiNightStormShowers, WiNightThunderstorm, WiRainMix, WiRainWind, WiRain, WiRaindrop, WiRaindrops, WiRefreshAlt, WiRefresh, WiSandstorm, WiShowers, WiSleet, WiSmallCraftAdvisory, WiSmog, WiSmoke, WiSnowWind, WiSnow, WiSnowflakeCold, WiSolarEclipse, WiSprinkle, WiStars, WiStormShowers, WiStormWarning, WiStrongWind, WiSunrise, WiSunset, WiThermometerExterior, WiThermometerInternal, WiThermometer, WiThunderstorm, WiTime1, WiTime10, WiTime11, WiTime12, WiTime2, WiTime3, WiTime4, WiTime5, WiTime6, WiTime7, WiTime8, WiTime9, WiTornado, WiTrain, WiTsunami, WiUmbrella, WiVolcano, WiWindBeaufort0, WiWindBeaufort1, WiWindBeaufort10, WiWindBeaufort11, WiWindBeaufort12, WiWindBeaufort2, WiWindBeaufort3, WiWindBeaufort4, WiWindBeaufort5, WiWindBeaufort6, WiWindBeaufort7, WiWindBeaufort8, WiWindBeaufort9, WiWindDeg, WiWindy;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = iconName;
                    switch (_a) {
                        case "wi:WiAlien": return [3 /*break*/, 1];
                        case "wi:WiBarometer": return [3 /*break*/, 3];
                        case "wi:WiCelsius": return [3 /*break*/, 5];
                        case "wi:WiCloudDown": return [3 /*break*/, 7];
                        case "wi:WiCloudRefresh": return [3 /*break*/, 9];
                        case "wi:WiCloudUp": return [3 /*break*/, 11];
                        case "wi:WiCloud": return [3 /*break*/, 13];
                        case "wi:WiCloudyGusts": return [3 /*break*/, 15];
                        case "wi:WiCloudyWindy": return [3 /*break*/, 17];
                        case "wi:WiCloudy": return [3 /*break*/, 19];
                        case "wi:WiDayCloudyGusts": return [3 /*break*/, 21];
                        case "wi:WiDayCloudyHigh": return [3 /*break*/, 23];
                        case "wi:WiDayCloudyWindy": return [3 /*break*/, 25];
                        case "wi:WiDayCloudy": return [3 /*break*/, 27];
                        case "wi:WiDayFog": return [3 /*break*/, 29];
                        case "wi:WiDayHail": return [3 /*break*/, 31];
                        case "wi:WiDayHaze": return [3 /*break*/, 33];
                        case "wi:WiDayLightWind": return [3 /*break*/, 35];
                        case "wi:WiDayLightning": return [3 /*break*/, 37];
                        case "wi:WiDayRainMix": return [3 /*break*/, 39];
                        case "wi:WiDayRainWind": return [3 /*break*/, 41];
                        case "wi:WiDayRain": return [3 /*break*/, 43];
                        case "wi:WiDayShowers": return [3 /*break*/, 45];
                        case "wi:WiDaySleetStorm": return [3 /*break*/, 47];
                        case "wi:WiDaySleet": return [3 /*break*/, 49];
                        case "wi:WiDaySnowThunderstorm": return [3 /*break*/, 51];
                        case "wi:WiDaySnowWind": return [3 /*break*/, 53];
                        case "wi:WiDaySnow": return [3 /*break*/, 55];
                        case "wi:WiDaySprinkle": return [3 /*break*/, 57];
                        case "wi:WiDayStormShowers": return [3 /*break*/, 59];
                        case "wi:WiDaySunnyOvercast": return [3 /*break*/, 61];
                        case "wi:WiDaySunny": return [3 /*break*/, 63];
                        case "wi:WiDayThunderstorm": return [3 /*break*/, 65];
                        case "wi:WiDayWindy": return [3 /*break*/, 67];
                        case "wi:WiDegrees": return [3 /*break*/, 69];
                        case "wi:WiDirectionDownLeft": return [3 /*break*/, 71];
                        case "wi:WiDirectionDownRight": return [3 /*break*/, 73];
                        case "wi:WiDirectionDown": return [3 /*break*/, 75];
                        case "wi:WiDirectionLeft": return [3 /*break*/, 77];
                        case "wi:WiDirectionRight": return [3 /*break*/, 79];
                        case "wi:WiDirectionUpLeft": return [3 /*break*/, 81];
                        case "wi:WiDirectionUpRight": return [3 /*break*/, 83];
                        case "wi:WiDirectionUp": return [3 /*break*/, 85];
                        case "wi:WiDust": return [3 /*break*/, 87];
                        case "wi:WiEarthquake": return [3 /*break*/, 89];
                        case "wi:WiFahrenheit": return [3 /*break*/, 91];
                        case "wi:WiFire": return [3 /*break*/, 93];
                        case "wi:WiFlood": return [3 /*break*/, 95];
                        case "wi:WiFog": return [3 /*break*/, 97];
                        case "wi:WiGaleWarning": return [3 /*break*/, 99];
                        case "wi:WiHail": return [3 /*break*/, 101];
                        case "wi:WiHorizonAlt": return [3 /*break*/, 103];
                        case "wi:WiHorizon": return [3 /*break*/, 105];
                        case "wi:WiHot": return [3 /*break*/, 107];
                        case "wi:WiHumidity": return [3 /*break*/, 109];
                        case "wi:WiHurricaneWarning": return [3 /*break*/, 111];
                        case "wi:WiHurricane": return [3 /*break*/, 113];
                        case "wi:WiLightning": return [3 /*break*/, 115];
                        case "wi:WiLunarEclipse": return [3 /*break*/, 117];
                        case "wi:WiMeteor": return [3 /*break*/, 119];
                        case "wi:WiMoonAltFirstQuarter": return [3 /*break*/, 121];
                        case "wi:WiMoonAltFull": return [3 /*break*/, 123];
                        case "wi:WiMoonAltNew": return [3 /*break*/, 125];
                        case "wi:WiMoonAltThirdQuarter": return [3 /*break*/, 127];
                        case "wi:WiMoonAltWaningCrescent1": return [3 /*break*/, 129];
                        case "wi:WiMoonAltWaningCrescent2": return [3 /*break*/, 131];
                        case "wi:WiMoonAltWaningCrescent3": return [3 /*break*/, 133];
                        case "wi:WiMoonAltWaningCrescent4": return [3 /*break*/, 135];
                        case "wi:WiMoonAltWaningCrescent5": return [3 /*break*/, 137];
                        case "wi:WiMoonAltWaningCrescent6": return [3 /*break*/, 139];
                        case "wi:WiMoonAltWaningGibbous1": return [3 /*break*/, 141];
                        case "wi:WiMoonAltWaningGibbous2": return [3 /*break*/, 143];
                        case "wi:WiMoonAltWaningGibbous3": return [3 /*break*/, 145];
                        case "wi:WiMoonAltWaningGibbous4": return [3 /*break*/, 147];
                        case "wi:WiMoonAltWaningGibbous5": return [3 /*break*/, 149];
                        case "wi:WiMoonAltWaningGibbous6": return [3 /*break*/, 151];
                        case "wi:WiMoonAltWaxingCrescent1": return [3 /*break*/, 153];
                        case "wi:WiMoonAltWaxingCrescent2": return [3 /*break*/, 155];
                        case "wi:WiMoonAltWaxingCrescent3": return [3 /*break*/, 157];
                        case "wi:WiMoonAltWaxingCrescent4": return [3 /*break*/, 159];
                        case "wi:WiMoonAltWaxingCrescent5": return [3 /*break*/, 161];
                        case "wi:WiMoonAltWaxingCrescent6": return [3 /*break*/, 163];
                        case "wi:WiMoonAltWaxingGibbous1": return [3 /*break*/, 165];
                        case "wi:WiMoonAltWaxingGibbous2": return [3 /*break*/, 167];
                        case "wi:WiMoonAltWaxingGibbous3": return [3 /*break*/, 169];
                        case "wi:WiMoonAltWaxingGibbous4": return [3 /*break*/, 171];
                        case "wi:WiMoonAltWaxingGibbous5": return [3 /*break*/, 173];
                        case "wi:WiMoonAltWaxingGibbous6": return [3 /*break*/, 175];
                        case "wi:WiMoonFirstQuarter": return [3 /*break*/, 177];
                        case "wi:WiMoonFull": return [3 /*break*/, 179];
                        case "wi:WiMoonNew": return [3 /*break*/, 181];
                        case "wi:WiMoonThirdQuarter": return [3 /*break*/, 183];
                        case "wi:WiMoonWaningCrescent1": return [3 /*break*/, 185];
                        case "wi:WiMoonWaningCrescent2": return [3 /*break*/, 187];
                        case "wi:WiMoonWaningCrescent3": return [3 /*break*/, 189];
                        case "wi:WiMoonWaningCrescent4": return [3 /*break*/, 191];
                        case "wi:WiMoonWaningCrescent5": return [3 /*break*/, 193];
                        case "wi:WiMoonWaningCrescent6": return [3 /*break*/, 195];
                        case "wi:WiMoonWaningGibbous1": return [3 /*break*/, 197];
                        case "wi:WiMoonWaningGibbous2": return [3 /*break*/, 199];
                        case "wi:WiMoonWaningGibbous3": return [3 /*break*/, 201];
                        case "wi:WiMoonWaningGibbous4": return [3 /*break*/, 203];
                        case "wi:WiMoonWaningGibbous5": return [3 /*break*/, 205];
                        case "wi:WiMoonWaningGibbous6": return [3 /*break*/, 207];
                        case "wi:WiMoonWaxing6": return [3 /*break*/, 209];
                        case "wi:WiMoonWaxingCrescent1": return [3 /*break*/, 211];
                        case "wi:WiMoonWaxingCrescent2": return [3 /*break*/, 213];
                        case "wi:WiMoonWaxingCrescent3": return [3 /*break*/, 215];
                        case "wi:WiMoonWaxingCrescent4": return [3 /*break*/, 217];
                        case "wi:WiMoonWaxingCrescent5": return [3 /*break*/, 219];
                        case "wi:WiMoonWaxingGibbous1": return [3 /*break*/, 221];
                        case "wi:WiMoonWaxingGibbous2": return [3 /*break*/, 223];
                        case "wi:WiMoonWaxingGibbous3": return [3 /*break*/, 225];
                        case "wi:WiMoonWaxingGibbous4": return [3 /*break*/, 227];
                        case "wi:WiMoonWaxingGibbous5": return [3 /*break*/, 229];
                        case "wi:WiMoonWaxingGibbous6": return [3 /*break*/, 231];
                        case "wi:WiMoonrise": return [3 /*break*/, 233];
                        case "wi:WiMoonset": return [3 /*break*/, 235];
                        case "wi:WiNa": return [3 /*break*/, 237];
                        case "wi:WiNightAltCloudyGusts": return [3 /*break*/, 239];
                        case "wi:WiNightAltCloudyHigh": return [3 /*break*/, 241];
                        case "wi:WiNightAltCloudyWindy": return [3 /*break*/, 243];
                        case "wi:WiNightAltCloudy": return [3 /*break*/, 245];
                        case "wi:WiNightAltHail": return [3 /*break*/, 247];
                        case "wi:WiNightAltLightning": return [3 /*break*/, 249];
                        case "wi:WiNightAltPartlyCloudy": return [3 /*break*/, 251];
                        case "wi:WiNightAltRainMix": return [3 /*break*/, 253];
                        case "wi:WiNightAltRainWind": return [3 /*break*/, 255];
                        case "wi:WiNightAltRain": return [3 /*break*/, 257];
                        case "wi:WiNightAltShowers": return [3 /*break*/, 259];
                        case "wi:WiNightAltSleetStorm": return [3 /*break*/, 261];
                        case "wi:WiNightAltSleet": return [3 /*break*/, 263];
                        case "wi:WiNightAltSnowThunderstorm": return [3 /*break*/, 265];
                        case "wi:WiNightAltSnowWind": return [3 /*break*/, 267];
                        case "wi:WiNightAltSnow": return [3 /*break*/, 269];
                        case "wi:WiNightAltSprinkle": return [3 /*break*/, 271];
                        case "wi:WiNightAltStormShowers": return [3 /*break*/, 273];
                        case "wi:WiNightAltThunderstorm": return [3 /*break*/, 275];
                        case "wi:WiNightClear": return [3 /*break*/, 277];
                        case "wi:WiNightCloudyGusts": return [3 /*break*/, 279];
                        case "wi:WiNightCloudyHigh": return [3 /*break*/, 281];
                        case "wi:WiNightCloudyWindy": return [3 /*break*/, 283];
                        case "wi:WiNightCloudy": return [3 /*break*/, 285];
                        case "wi:WiNightFog": return [3 /*break*/, 287];
                        case "wi:WiNightHail": return [3 /*break*/, 289];
                        case "wi:WiNightLightning": return [3 /*break*/, 291];
                        case "wi:WiNightPartlyCloudy": return [3 /*break*/, 293];
                        case "wi:WiNightRainMix": return [3 /*break*/, 295];
                        case "wi:WiNightRainWind": return [3 /*break*/, 297];
                        case "wi:WiNightRain": return [3 /*break*/, 299];
                        case "wi:WiNightShowers": return [3 /*break*/, 301];
                        case "wi:WiNightSleetStorm": return [3 /*break*/, 303];
                        case "wi:WiNightSleet": return [3 /*break*/, 305];
                        case "wi:WiNightSnowThunderstorm": return [3 /*break*/, 307];
                        case "wi:WiNightSnowWind": return [3 /*break*/, 309];
                        case "wi:WiNightSnow": return [3 /*break*/, 311];
                        case "wi:WiNightSprinkle": return [3 /*break*/, 313];
                        case "wi:WiNightStormShowers": return [3 /*break*/, 315];
                        case "wi:WiNightThunderstorm": return [3 /*break*/, 317];
                        case "wi:WiRainMix": return [3 /*break*/, 319];
                        case "wi:WiRainWind": return [3 /*break*/, 321];
                        case "wi:WiRain": return [3 /*break*/, 323];
                        case "wi:WiRaindrop": return [3 /*break*/, 325];
                        case "wi:WiRaindrops": return [3 /*break*/, 327];
                        case "wi:WiRefreshAlt": return [3 /*break*/, 329];
                        case "wi:WiRefresh": return [3 /*break*/, 331];
                        case "wi:WiSandstorm": return [3 /*break*/, 333];
                        case "wi:WiShowers": return [3 /*break*/, 335];
                        case "wi:WiSleet": return [3 /*break*/, 337];
                        case "wi:WiSmallCraftAdvisory": return [3 /*break*/, 339];
                        case "wi:WiSmog": return [3 /*break*/, 341];
                        case "wi:WiSmoke": return [3 /*break*/, 343];
                        case "wi:WiSnowWind": return [3 /*break*/, 345];
                        case "wi:WiSnow": return [3 /*break*/, 347];
                        case "wi:WiSnowflakeCold": return [3 /*break*/, 349];
                        case "wi:WiSolarEclipse": return [3 /*break*/, 351];
                        case "wi:WiSprinkle": return [3 /*break*/, 353];
                        case "wi:WiStars": return [3 /*break*/, 355];
                        case "wi:WiStormShowers": return [3 /*break*/, 357];
                        case "wi:WiStormWarning": return [3 /*break*/, 359];
                        case "wi:WiStrongWind": return [3 /*break*/, 361];
                        case "wi:WiSunrise": return [3 /*break*/, 363];
                        case "wi:WiSunset": return [3 /*break*/, 365];
                        case "wi:WiThermometerExterior": return [3 /*break*/, 367];
                        case "wi:WiThermometerInternal": return [3 /*break*/, 369];
                        case "wi:WiThermometer": return [3 /*break*/, 371];
                        case "wi:WiThunderstorm": return [3 /*break*/, 373];
                        case "wi:WiTime1": return [3 /*break*/, 375];
                        case "wi:WiTime10": return [3 /*break*/, 377];
                        case "wi:WiTime11": return [3 /*break*/, 379];
                        case "wi:WiTime12": return [3 /*break*/, 381];
                        case "wi:WiTime2": return [3 /*break*/, 383];
                        case "wi:WiTime3": return [3 /*break*/, 385];
                        case "wi:WiTime4": return [3 /*break*/, 387];
                        case "wi:WiTime5": return [3 /*break*/, 389];
                        case "wi:WiTime6": return [3 /*break*/, 391];
                        case "wi:WiTime7": return [3 /*break*/, 393];
                        case "wi:WiTime8": return [3 /*break*/, 395];
                        case "wi:WiTime9": return [3 /*break*/, 397];
                        case "wi:WiTornado": return [3 /*break*/, 399];
                        case "wi:WiTrain": return [3 /*break*/, 401];
                        case "wi:WiTsunami": return [3 /*break*/, 403];
                        case "wi:WiUmbrella": return [3 /*break*/, 405];
                        case "wi:WiVolcano": return [3 /*break*/, 407];
                        case "wi:WiWindBeaufort0": return [3 /*break*/, 409];
                        case "wi:WiWindBeaufort1": return [3 /*break*/, 411];
                        case "wi:WiWindBeaufort10": return [3 /*break*/, 413];
                        case "wi:WiWindBeaufort11": return [3 /*break*/, 415];
                        case "wi:WiWindBeaufort12": return [3 /*break*/, 417];
                        case "wi:WiWindBeaufort2": return [3 /*break*/, 419];
                        case "wi:WiWindBeaufort3": return [3 /*break*/, 421];
                        case "wi:WiWindBeaufort4": return [3 /*break*/, 423];
                        case "wi:WiWindBeaufort5": return [3 /*break*/, 425];
                        case "wi:WiWindBeaufort6": return [3 /*break*/, 427];
                        case "wi:WiWindBeaufort7": return [3 /*break*/, 429];
                        case "wi:WiWindBeaufort8": return [3 /*break*/, 431];
                        case "wi:WiWindBeaufort9": return [3 /*break*/, 433];
                        case "wi:WiWindDeg": return [3 /*break*/, 435];
                        case "wi:WiWindy": return [3 /*break*/, 437];
                    }
                    return [3 /*break*/, 439];
                case 1: return [4 /*yield*/, import("react-icons/wi")];
                case 2:
                    WiAlien = (_b.sent()).WiAlien;
                    return [2 /*return*/, WiAlien];
                case 3: return [4 /*yield*/, import("react-icons/wi")];
                case 4:
                    WiBarometer = (_b.sent()).WiBarometer;
                    return [2 /*return*/, WiBarometer];
                case 5: return [4 /*yield*/, import("react-icons/wi")];
                case 6:
                    WiCelsius = (_b.sent()).WiCelsius;
                    return [2 /*return*/, WiCelsius];
                case 7: return [4 /*yield*/, import("react-icons/wi")];
                case 8:
                    WiCloudDown = (_b.sent()).WiCloudDown;
                    return [2 /*return*/, WiCloudDown];
                case 9: return [4 /*yield*/, import("react-icons/wi")];
                case 10:
                    WiCloudRefresh = (_b.sent()).WiCloudRefresh;
                    return [2 /*return*/, WiCloudRefresh];
                case 11: return [4 /*yield*/, import("react-icons/wi")];
                case 12:
                    WiCloudUp = (_b.sent()).WiCloudUp;
                    return [2 /*return*/, WiCloudUp];
                case 13: return [4 /*yield*/, import("react-icons/wi")];
                case 14:
                    WiCloud = (_b.sent()).WiCloud;
                    return [2 /*return*/, WiCloud];
                case 15: return [4 /*yield*/, import("react-icons/wi")];
                case 16:
                    WiCloudyGusts = (_b.sent()).WiCloudyGusts;
                    return [2 /*return*/, WiCloudyGusts];
                case 17: return [4 /*yield*/, import("react-icons/wi")];
                case 18:
                    WiCloudyWindy = (_b.sent()).WiCloudyWindy;
                    return [2 /*return*/, WiCloudyWindy];
                case 19: return [4 /*yield*/, import("react-icons/wi")];
                case 20:
                    WiCloudy = (_b.sent()).WiCloudy;
                    return [2 /*return*/, WiCloudy];
                case 21: return [4 /*yield*/, import("react-icons/wi")];
                case 22:
                    WiDayCloudyGusts = (_b.sent()).WiDayCloudyGusts;
                    return [2 /*return*/, WiDayCloudyGusts];
                case 23: return [4 /*yield*/, import("react-icons/wi")];
                case 24:
                    WiDayCloudyHigh = (_b.sent()).WiDayCloudyHigh;
                    return [2 /*return*/, WiDayCloudyHigh];
                case 25: return [4 /*yield*/, import("react-icons/wi")];
                case 26:
                    WiDayCloudyWindy = (_b.sent()).WiDayCloudyWindy;
                    return [2 /*return*/, WiDayCloudyWindy];
                case 27: return [4 /*yield*/, import("react-icons/wi")];
                case 28:
                    WiDayCloudy = (_b.sent()).WiDayCloudy;
                    return [2 /*return*/, WiDayCloudy];
                case 29: return [4 /*yield*/, import("react-icons/wi")];
                case 30:
                    WiDayFog = (_b.sent()).WiDayFog;
                    return [2 /*return*/, WiDayFog];
                case 31: return [4 /*yield*/, import("react-icons/wi")];
                case 32:
                    WiDayHail = (_b.sent()).WiDayHail;
                    return [2 /*return*/, WiDayHail];
                case 33: return [4 /*yield*/, import("react-icons/wi")];
                case 34:
                    WiDayHaze = (_b.sent()).WiDayHaze;
                    return [2 /*return*/, WiDayHaze];
                case 35: return [4 /*yield*/, import("react-icons/wi")];
                case 36:
                    WiDayLightWind = (_b.sent()).WiDayLightWind;
                    return [2 /*return*/, WiDayLightWind];
                case 37: return [4 /*yield*/, import("react-icons/wi")];
                case 38:
                    WiDayLightning = (_b.sent()).WiDayLightning;
                    return [2 /*return*/, WiDayLightning];
                case 39: return [4 /*yield*/, import("react-icons/wi")];
                case 40:
                    WiDayRainMix = (_b.sent()).WiDayRainMix;
                    return [2 /*return*/, WiDayRainMix];
                case 41: return [4 /*yield*/, import("react-icons/wi")];
                case 42:
                    WiDayRainWind = (_b.sent()).WiDayRainWind;
                    return [2 /*return*/, WiDayRainWind];
                case 43: return [4 /*yield*/, import("react-icons/wi")];
                case 44:
                    WiDayRain = (_b.sent()).WiDayRain;
                    return [2 /*return*/, WiDayRain];
                case 45: return [4 /*yield*/, import("react-icons/wi")];
                case 46:
                    WiDayShowers = (_b.sent()).WiDayShowers;
                    return [2 /*return*/, WiDayShowers];
                case 47: return [4 /*yield*/, import("react-icons/wi")];
                case 48:
                    WiDaySleetStorm = (_b.sent()).WiDaySleetStorm;
                    return [2 /*return*/, WiDaySleetStorm];
                case 49: return [4 /*yield*/, import("react-icons/wi")];
                case 50:
                    WiDaySleet = (_b.sent()).WiDaySleet;
                    return [2 /*return*/, WiDaySleet];
                case 51: return [4 /*yield*/, import("react-icons/wi")];
                case 52:
                    WiDaySnowThunderstorm = (_b.sent()).WiDaySnowThunderstorm;
                    return [2 /*return*/, WiDaySnowThunderstorm];
                case 53: return [4 /*yield*/, import("react-icons/wi")];
                case 54:
                    WiDaySnowWind = (_b.sent()).WiDaySnowWind;
                    return [2 /*return*/, WiDaySnowWind];
                case 55: return [4 /*yield*/, import("react-icons/wi")];
                case 56:
                    WiDaySnow = (_b.sent()).WiDaySnow;
                    return [2 /*return*/, WiDaySnow];
                case 57: return [4 /*yield*/, import("react-icons/wi")];
                case 58:
                    WiDaySprinkle = (_b.sent()).WiDaySprinkle;
                    return [2 /*return*/, WiDaySprinkle];
                case 59: return [4 /*yield*/, import("react-icons/wi")];
                case 60:
                    WiDayStormShowers = (_b.sent()).WiDayStormShowers;
                    return [2 /*return*/, WiDayStormShowers];
                case 61: return [4 /*yield*/, import("react-icons/wi")];
                case 62:
                    WiDaySunnyOvercast = (_b.sent()).WiDaySunnyOvercast;
                    return [2 /*return*/, WiDaySunnyOvercast];
                case 63: return [4 /*yield*/, import("react-icons/wi")];
                case 64:
                    WiDaySunny = (_b.sent()).WiDaySunny;
                    return [2 /*return*/, WiDaySunny];
                case 65: return [4 /*yield*/, import("react-icons/wi")];
                case 66:
                    WiDayThunderstorm = (_b.sent()).WiDayThunderstorm;
                    return [2 /*return*/, WiDayThunderstorm];
                case 67: return [4 /*yield*/, import("react-icons/wi")];
                case 68:
                    WiDayWindy = (_b.sent()).WiDayWindy;
                    return [2 /*return*/, WiDayWindy];
                case 69: return [4 /*yield*/, import("react-icons/wi")];
                case 70:
                    WiDegrees = (_b.sent()).WiDegrees;
                    return [2 /*return*/, WiDegrees];
                case 71: return [4 /*yield*/, import("react-icons/wi")];
                case 72:
                    WiDirectionDownLeft = (_b.sent()).WiDirectionDownLeft;
                    return [2 /*return*/, WiDirectionDownLeft];
                case 73: return [4 /*yield*/, import("react-icons/wi")];
                case 74:
                    WiDirectionDownRight = (_b.sent()).WiDirectionDownRight;
                    return [2 /*return*/, WiDirectionDownRight];
                case 75: return [4 /*yield*/, import("react-icons/wi")];
                case 76:
                    WiDirectionDown = (_b.sent()).WiDirectionDown;
                    return [2 /*return*/, WiDirectionDown];
                case 77: return [4 /*yield*/, import("react-icons/wi")];
                case 78:
                    WiDirectionLeft = (_b.sent()).WiDirectionLeft;
                    return [2 /*return*/, WiDirectionLeft];
                case 79: return [4 /*yield*/, import("react-icons/wi")];
                case 80:
                    WiDirectionRight = (_b.sent()).WiDirectionRight;
                    return [2 /*return*/, WiDirectionRight];
                case 81: return [4 /*yield*/, import("react-icons/wi")];
                case 82:
                    WiDirectionUpLeft = (_b.sent()).WiDirectionUpLeft;
                    return [2 /*return*/, WiDirectionUpLeft];
                case 83: return [4 /*yield*/, import("react-icons/wi")];
                case 84:
                    WiDirectionUpRight = (_b.sent()).WiDirectionUpRight;
                    return [2 /*return*/, WiDirectionUpRight];
                case 85: return [4 /*yield*/, import("react-icons/wi")];
                case 86:
                    WiDirectionUp = (_b.sent()).WiDirectionUp;
                    return [2 /*return*/, WiDirectionUp];
                case 87: return [4 /*yield*/, import("react-icons/wi")];
                case 88:
                    WiDust = (_b.sent()).WiDust;
                    return [2 /*return*/, WiDust];
                case 89: return [4 /*yield*/, import("react-icons/wi")];
                case 90:
                    WiEarthquake = (_b.sent()).WiEarthquake;
                    return [2 /*return*/, WiEarthquake];
                case 91: return [4 /*yield*/, import("react-icons/wi")];
                case 92:
                    WiFahrenheit = (_b.sent()).WiFahrenheit;
                    return [2 /*return*/, WiFahrenheit];
                case 93: return [4 /*yield*/, import("react-icons/wi")];
                case 94:
                    WiFire = (_b.sent()).WiFire;
                    return [2 /*return*/, WiFire];
                case 95: return [4 /*yield*/, import("react-icons/wi")];
                case 96:
                    WiFlood = (_b.sent()).WiFlood;
                    return [2 /*return*/, WiFlood];
                case 97: return [4 /*yield*/, import("react-icons/wi")];
                case 98:
                    WiFog = (_b.sent()).WiFog;
                    return [2 /*return*/, WiFog];
                case 99: return [4 /*yield*/, import("react-icons/wi")];
                case 100:
                    WiGaleWarning = (_b.sent()).WiGaleWarning;
                    return [2 /*return*/, WiGaleWarning];
                case 101: return [4 /*yield*/, import("react-icons/wi")];
                case 102:
                    WiHail = (_b.sent()).WiHail;
                    return [2 /*return*/, WiHail];
                case 103: return [4 /*yield*/, import("react-icons/wi")];
                case 104:
                    WiHorizonAlt = (_b.sent()).WiHorizonAlt;
                    return [2 /*return*/, WiHorizonAlt];
                case 105: return [4 /*yield*/, import("react-icons/wi")];
                case 106:
                    WiHorizon = (_b.sent()).WiHorizon;
                    return [2 /*return*/, WiHorizon];
                case 107: return [4 /*yield*/, import("react-icons/wi")];
                case 108:
                    WiHot = (_b.sent()).WiHot;
                    return [2 /*return*/, WiHot];
                case 109: return [4 /*yield*/, import("react-icons/wi")];
                case 110:
                    WiHumidity = (_b.sent()).WiHumidity;
                    return [2 /*return*/, WiHumidity];
                case 111: return [4 /*yield*/, import("react-icons/wi")];
                case 112:
                    WiHurricaneWarning = (_b.sent()).WiHurricaneWarning;
                    return [2 /*return*/, WiHurricaneWarning];
                case 113: return [4 /*yield*/, import("react-icons/wi")];
                case 114:
                    WiHurricane = (_b.sent()).WiHurricane;
                    return [2 /*return*/, WiHurricane];
                case 115: return [4 /*yield*/, import("react-icons/wi")];
                case 116:
                    WiLightning = (_b.sent()).WiLightning;
                    return [2 /*return*/, WiLightning];
                case 117: return [4 /*yield*/, import("react-icons/wi")];
                case 118:
                    WiLunarEclipse = (_b.sent()).WiLunarEclipse;
                    return [2 /*return*/, WiLunarEclipse];
                case 119: return [4 /*yield*/, import("react-icons/wi")];
                case 120:
                    WiMeteor = (_b.sent()).WiMeteor;
                    return [2 /*return*/, WiMeteor];
                case 121: return [4 /*yield*/, import("react-icons/wi")];
                case 122:
                    WiMoonAltFirstQuarter = (_b.sent()).WiMoonAltFirstQuarter;
                    return [2 /*return*/, WiMoonAltFirstQuarter];
                case 123: return [4 /*yield*/, import("react-icons/wi")];
                case 124:
                    WiMoonAltFull = (_b.sent()).WiMoonAltFull;
                    return [2 /*return*/, WiMoonAltFull];
                case 125: return [4 /*yield*/, import("react-icons/wi")];
                case 126:
                    WiMoonAltNew = (_b.sent()).WiMoonAltNew;
                    return [2 /*return*/, WiMoonAltNew];
                case 127: return [4 /*yield*/, import("react-icons/wi")];
                case 128:
                    WiMoonAltThirdQuarter = (_b.sent()).WiMoonAltThirdQuarter;
                    return [2 /*return*/, WiMoonAltThirdQuarter];
                case 129: return [4 /*yield*/, import("react-icons/wi")];
                case 130:
                    WiMoonAltWaningCrescent1 = (_b.sent()).WiMoonAltWaningCrescent1;
                    return [2 /*return*/, WiMoonAltWaningCrescent1];
                case 131: return [4 /*yield*/, import("react-icons/wi")];
                case 132:
                    WiMoonAltWaningCrescent2 = (_b.sent()).WiMoonAltWaningCrescent2;
                    return [2 /*return*/, WiMoonAltWaningCrescent2];
                case 133: return [4 /*yield*/, import("react-icons/wi")];
                case 134:
                    WiMoonAltWaningCrescent3 = (_b.sent()).WiMoonAltWaningCrescent3;
                    return [2 /*return*/, WiMoonAltWaningCrescent3];
                case 135: return [4 /*yield*/, import("react-icons/wi")];
                case 136:
                    WiMoonAltWaningCrescent4 = (_b.sent()).WiMoonAltWaningCrescent4;
                    return [2 /*return*/, WiMoonAltWaningCrescent4];
                case 137: return [4 /*yield*/, import("react-icons/wi")];
                case 138:
                    WiMoonAltWaningCrescent5 = (_b.sent()).WiMoonAltWaningCrescent5;
                    return [2 /*return*/, WiMoonAltWaningCrescent5];
                case 139: return [4 /*yield*/, import("react-icons/wi")];
                case 140:
                    WiMoonAltWaningCrescent6 = (_b.sent()).WiMoonAltWaningCrescent6;
                    return [2 /*return*/, WiMoonAltWaningCrescent6];
                case 141: return [4 /*yield*/, import("react-icons/wi")];
                case 142:
                    WiMoonAltWaningGibbous1 = (_b.sent()).WiMoonAltWaningGibbous1;
                    return [2 /*return*/, WiMoonAltWaningGibbous1];
                case 143: return [4 /*yield*/, import("react-icons/wi")];
                case 144:
                    WiMoonAltWaningGibbous2 = (_b.sent()).WiMoonAltWaningGibbous2;
                    return [2 /*return*/, WiMoonAltWaningGibbous2];
                case 145: return [4 /*yield*/, import("react-icons/wi")];
                case 146:
                    WiMoonAltWaningGibbous3 = (_b.sent()).WiMoonAltWaningGibbous3;
                    return [2 /*return*/, WiMoonAltWaningGibbous3];
                case 147: return [4 /*yield*/, import("react-icons/wi")];
                case 148:
                    WiMoonAltWaningGibbous4 = (_b.sent()).WiMoonAltWaningGibbous4;
                    return [2 /*return*/, WiMoonAltWaningGibbous4];
                case 149: return [4 /*yield*/, import("react-icons/wi")];
                case 150:
                    WiMoonAltWaningGibbous5 = (_b.sent()).WiMoonAltWaningGibbous5;
                    return [2 /*return*/, WiMoonAltWaningGibbous5];
                case 151: return [4 /*yield*/, import("react-icons/wi")];
                case 152:
                    WiMoonAltWaningGibbous6 = (_b.sent()).WiMoonAltWaningGibbous6;
                    return [2 /*return*/, WiMoonAltWaningGibbous6];
                case 153: return [4 /*yield*/, import("react-icons/wi")];
                case 154:
                    WiMoonAltWaxingCrescent1 = (_b.sent()).WiMoonAltWaxingCrescent1;
                    return [2 /*return*/, WiMoonAltWaxingCrescent1];
                case 155: return [4 /*yield*/, import("react-icons/wi")];
                case 156:
                    WiMoonAltWaxingCrescent2 = (_b.sent()).WiMoonAltWaxingCrescent2;
                    return [2 /*return*/, WiMoonAltWaxingCrescent2];
                case 157: return [4 /*yield*/, import("react-icons/wi")];
                case 158:
                    WiMoonAltWaxingCrescent3 = (_b.sent()).WiMoonAltWaxingCrescent3;
                    return [2 /*return*/, WiMoonAltWaxingCrescent3];
                case 159: return [4 /*yield*/, import("react-icons/wi")];
                case 160:
                    WiMoonAltWaxingCrescent4 = (_b.sent()).WiMoonAltWaxingCrescent4;
                    return [2 /*return*/, WiMoonAltWaxingCrescent4];
                case 161: return [4 /*yield*/, import("react-icons/wi")];
                case 162:
                    WiMoonAltWaxingCrescent5 = (_b.sent()).WiMoonAltWaxingCrescent5;
                    return [2 /*return*/, WiMoonAltWaxingCrescent5];
                case 163: return [4 /*yield*/, import("react-icons/wi")];
                case 164:
                    WiMoonAltWaxingCrescent6 = (_b.sent()).WiMoonAltWaxingCrescent6;
                    return [2 /*return*/, WiMoonAltWaxingCrescent6];
                case 165: return [4 /*yield*/, import("react-icons/wi")];
                case 166:
                    WiMoonAltWaxingGibbous1 = (_b.sent()).WiMoonAltWaxingGibbous1;
                    return [2 /*return*/, WiMoonAltWaxingGibbous1];
                case 167: return [4 /*yield*/, import("react-icons/wi")];
                case 168:
                    WiMoonAltWaxingGibbous2 = (_b.sent()).WiMoonAltWaxingGibbous2;
                    return [2 /*return*/, WiMoonAltWaxingGibbous2];
                case 169: return [4 /*yield*/, import("react-icons/wi")];
                case 170:
                    WiMoonAltWaxingGibbous3 = (_b.sent()).WiMoonAltWaxingGibbous3;
                    return [2 /*return*/, WiMoonAltWaxingGibbous3];
                case 171: return [4 /*yield*/, import("react-icons/wi")];
                case 172:
                    WiMoonAltWaxingGibbous4 = (_b.sent()).WiMoonAltWaxingGibbous4;
                    return [2 /*return*/, WiMoonAltWaxingGibbous4];
                case 173: return [4 /*yield*/, import("react-icons/wi")];
                case 174:
                    WiMoonAltWaxingGibbous5 = (_b.sent()).WiMoonAltWaxingGibbous5;
                    return [2 /*return*/, WiMoonAltWaxingGibbous5];
                case 175: return [4 /*yield*/, import("react-icons/wi")];
                case 176:
                    WiMoonAltWaxingGibbous6 = (_b.sent()).WiMoonAltWaxingGibbous6;
                    return [2 /*return*/, WiMoonAltWaxingGibbous6];
                case 177: return [4 /*yield*/, import("react-icons/wi")];
                case 178:
                    WiMoonFirstQuarter = (_b.sent()).WiMoonFirstQuarter;
                    return [2 /*return*/, WiMoonFirstQuarter];
                case 179: return [4 /*yield*/, import("react-icons/wi")];
                case 180:
                    WiMoonFull = (_b.sent()).WiMoonFull;
                    return [2 /*return*/, WiMoonFull];
                case 181: return [4 /*yield*/, import("react-icons/wi")];
                case 182:
                    WiMoonNew = (_b.sent()).WiMoonNew;
                    return [2 /*return*/, WiMoonNew];
                case 183: return [4 /*yield*/, import("react-icons/wi")];
                case 184:
                    WiMoonThirdQuarter = (_b.sent()).WiMoonThirdQuarter;
                    return [2 /*return*/, WiMoonThirdQuarter];
                case 185: return [4 /*yield*/, import("react-icons/wi")];
                case 186:
                    WiMoonWaningCrescent1 = (_b.sent()).WiMoonWaningCrescent1;
                    return [2 /*return*/, WiMoonWaningCrescent1];
                case 187: return [4 /*yield*/, import("react-icons/wi")];
                case 188:
                    WiMoonWaningCrescent2 = (_b.sent()).WiMoonWaningCrescent2;
                    return [2 /*return*/, WiMoonWaningCrescent2];
                case 189: return [4 /*yield*/, import("react-icons/wi")];
                case 190:
                    WiMoonWaningCrescent3 = (_b.sent()).WiMoonWaningCrescent3;
                    return [2 /*return*/, WiMoonWaningCrescent3];
                case 191: return [4 /*yield*/, import("react-icons/wi")];
                case 192:
                    WiMoonWaningCrescent4 = (_b.sent()).WiMoonWaningCrescent4;
                    return [2 /*return*/, WiMoonWaningCrescent4];
                case 193: return [4 /*yield*/, import("react-icons/wi")];
                case 194:
                    WiMoonWaningCrescent5 = (_b.sent()).WiMoonWaningCrescent5;
                    return [2 /*return*/, WiMoonWaningCrescent5];
                case 195: return [4 /*yield*/, import("react-icons/wi")];
                case 196:
                    WiMoonWaningCrescent6 = (_b.sent()).WiMoonWaningCrescent6;
                    return [2 /*return*/, WiMoonWaningCrescent6];
                case 197: return [4 /*yield*/, import("react-icons/wi")];
                case 198:
                    WiMoonWaningGibbous1 = (_b.sent()).WiMoonWaningGibbous1;
                    return [2 /*return*/, WiMoonWaningGibbous1];
                case 199: return [4 /*yield*/, import("react-icons/wi")];
                case 200:
                    WiMoonWaningGibbous2 = (_b.sent()).WiMoonWaningGibbous2;
                    return [2 /*return*/, WiMoonWaningGibbous2];
                case 201: return [4 /*yield*/, import("react-icons/wi")];
                case 202:
                    WiMoonWaningGibbous3 = (_b.sent()).WiMoonWaningGibbous3;
                    return [2 /*return*/, WiMoonWaningGibbous3];
                case 203: return [4 /*yield*/, import("react-icons/wi")];
                case 204:
                    WiMoonWaningGibbous4 = (_b.sent()).WiMoonWaningGibbous4;
                    return [2 /*return*/, WiMoonWaningGibbous4];
                case 205: return [4 /*yield*/, import("react-icons/wi")];
                case 206:
                    WiMoonWaningGibbous5 = (_b.sent()).WiMoonWaningGibbous5;
                    return [2 /*return*/, WiMoonWaningGibbous5];
                case 207: return [4 /*yield*/, import("react-icons/wi")];
                case 208:
                    WiMoonWaningGibbous6 = (_b.sent()).WiMoonWaningGibbous6;
                    return [2 /*return*/, WiMoonWaningGibbous6];
                case 209: return [4 /*yield*/, import("react-icons/wi")];
                case 210:
                    WiMoonWaxing6 = (_b.sent()).WiMoonWaxing6;
                    return [2 /*return*/, WiMoonWaxing6];
                case 211: return [4 /*yield*/, import("react-icons/wi")];
                case 212:
                    WiMoonWaxingCrescent1 = (_b.sent()).WiMoonWaxingCrescent1;
                    return [2 /*return*/, WiMoonWaxingCrescent1];
                case 213: return [4 /*yield*/, import("react-icons/wi")];
                case 214:
                    WiMoonWaxingCrescent2 = (_b.sent()).WiMoonWaxingCrescent2;
                    return [2 /*return*/, WiMoonWaxingCrescent2];
                case 215: return [4 /*yield*/, import("react-icons/wi")];
                case 216:
                    WiMoonWaxingCrescent3 = (_b.sent()).WiMoonWaxingCrescent3;
                    return [2 /*return*/, WiMoonWaxingCrescent3];
                case 217: return [4 /*yield*/, import("react-icons/wi")];
                case 218:
                    WiMoonWaxingCrescent4 = (_b.sent()).WiMoonWaxingCrescent4;
                    return [2 /*return*/, WiMoonWaxingCrescent4];
                case 219: return [4 /*yield*/, import("react-icons/wi")];
                case 220:
                    WiMoonWaxingCrescent5 = (_b.sent()).WiMoonWaxingCrescent5;
                    return [2 /*return*/, WiMoonWaxingCrescent5];
                case 221: return [4 /*yield*/, import("react-icons/wi")];
                case 222:
                    WiMoonWaxingGibbous1 = (_b.sent()).WiMoonWaxingGibbous1;
                    return [2 /*return*/, WiMoonWaxingGibbous1];
                case 223: return [4 /*yield*/, import("react-icons/wi")];
                case 224:
                    WiMoonWaxingGibbous2 = (_b.sent()).WiMoonWaxingGibbous2;
                    return [2 /*return*/, WiMoonWaxingGibbous2];
                case 225: return [4 /*yield*/, import("react-icons/wi")];
                case 226:
                    WiMoonWaxingGibbous3 = (_b.sent()).WiMoonWaxingGibbous3;
                    return [2 /*return*/, WiMoonWaxingGibbous3];
                case 227: return [4 /*yield*/, import("react-icons/wi")];
                case 228:
                    WiMoonWaxingGibbous4 = (_b.sent()).WiMoonWaxingGibbous4;
                    return [2 /*return*/, WiMoonWaxingGibbous4];
                case 229: return [4 /*yield*/, import("react-icons/wi")];
                case 230:
                    WiMoonWaxingGibbous5 = (_b.sent()).WiMoonWaxingGibbous5;
                    return [2 /*return*/, WiMoonWaxingGibbous5];
                case 231: return [4 /*yield*/, import("react-icons/wi")];
                case 232:
                    WiMoonWaxingGibbous6 = (_b.sent()).WiMoonWaxingGibbous6;
                    return [2 /*return*/, WiMoonWaxingGibbous6];
                case 233: return [4 /*yield*/, import("react-icons/wi")];
                case 234:
                    WiMoonrise = (_b.sent()).WiMoonrise;
                    return [2 /*return*/, WiMoonrise];
                case 235: return [4 /*yield*/, import("react-icons/wi")];
                case 236:
                    WiMoonset = (_b.sent()).WiMoonset;
                    return [2 /*return*/, WiMoonset];
                case 237: return [4 /*yield*/, import("react-icons/wi")];
                case 238:
                    WiNa = (_b.sent()).WiNa;
                    return [2 /*return*/, WiNa];
                case 239: return [4 /*yield*/, import("react-icons/wi")];
                case 240:
                    WiNightAltCloudyGusts = (_b.sent()).WiNightAltCloudyGusts;
                    return [2 /*return*/, WiNightAltCloudyGusts];
                case 241: return [4 /*yield*/, import("react-icons/wi")];
                case 242:
                    WiNightAltCloudyHigh = (_b.sent()).WiNightAltCloudyHigh;
                    return [2 /*return*/, WiNightAltCloudyHigh];
                case 243: return [4 /*yield*/, import("react-icons/wi")];
                case 244:
                    WiNightAltCloudyWindy = (_b.sent()).WiNightAltCloudyWindy;
                    return [2 /*return*/, WiNightAltCloudyWindy];
                case 245: return [4 /*yield*/, import("react-icons/wi")];
                case 246:
                    WiNightAltCloudy = (_b.sent()).WiNightAltCloudy;
                    return [2 /*return*/, WiNightAltCloudy];
                case 247: return [4 /*yield*/, import("react-icons/wi")];
                case 248:
                    WiNightAltHail = (_b.sent()).WiNightAltHail;
                    return [2 /*return*/, WiNightAltHail];
                case 249: return [4 /*yield*/, import("react-icons/wi")];
                case 250:
                    WiNightAltLightning = (_b.sent()).WiNightAltLightning;
                    return [2 /*return*/, WiNightAltLightning];
                case 251: return [4 /*yield*/, import("react-icons/wi")];
                case 252:
                    WiNightAltPartlyCloudy = (_b.sent()).WiNightAltPartlyCloudy;
                    return [2 /*return*/, WiNightAltPartlyCloudy];
                case 253: return [4 /*yield*/, import("react-icons/wi")];
                case 254:
                    WiNightAltRainMix = (_b.sent()).WiNightAltRainMix;
                    return [2 /*return*/, WiNightAltRainMix];
                case 255: return [4 /*yield*/, import("react-icons/wi")];
                case 256:
                    WiNightAltRainWind = (_b.sent()).WiNightAltRainWind;
                    return [2 /*return*/, WiNightAltRainWind];
                case 257: return [4 /*yield*/, import("react-icons/wi")];
                case 258:
                    WiNightAltRain = (_b.sent()).WiNightAltRain;
                    return [2 /*return*/, WiNightAltRain];
                case 259: return [4 /*yield*/, import("react-icons/wi")];
                case 260:
                    WiNightAltShowers = (_b.sent()).WiNightAltShowers;
                    return [2 /*return*/, WiNightAltShowers];
                case 261: return [4 /*yield*/, import("react-icons/wi")];
                case 262:
                    WiNightAltSleetStorm = (_b.sent()).WiNightAltSleetStorm;
                    return [2 /*return*/, WiNightAltSleetStorm];
                case 263: return [4 /*yield*/, import("react-icons/wi")];
                case 264:
                    WiNightAltSleet = (_b.sent()).WiNightAltSleet;
                    return [2 /*return*/, WiNightAltSleet];
                case 265: return [4 /*yield*/, import("react-icons/wi")];
                case 266:
                    WiNightAltSnowThunderstorm = (_b.sent()).WiNightAltSnowThunderstorm;
                    return [2 /*return*/, WiNightAltSnowThunderstorm];
                case 267: return [4 /*yield*/, import("react-icons/wi")];
                case 268:
                    WiNightAltSnowWind = (_b.sent()).WiNightAltSnowWind;
                    return [2 /*return*/, WiNightAltSnowWind];
                case 269: return [4 /*yield*/, import("react-icons/wi")];
                case 270:
                    WiNightAltSnow = (_b.sent()).WiNightAltSnow;
                    return [2 /*return*/, WiNightAltSnow];
                case 271: return [4 /*yield*/, import("react-icons/wi")];
                case 272:
                    WiNightAltSprinkle = (_b.sent()).WiNightAltSprinkle;
                    return [2 /*return*/, WiNightAltSprinkle];
                case 273: return [4 /*yield*/, import("react-icons/wi")];
                case 274:
                    WiNightAltStormShowers = (_b.sent()).WiNightAltStormShowers;
                    return [2 /*return*/, WiNightAltStormShowers];
                case 275: return [4 /*yield*/, import("react-icons/wi")];
                case 276:
                    WiNightAltThunderstorm = (_b.sent()).WiNightAltThunderstorm;
                    return [2 /*return*/, WiNightAltThunderstorm];
                case 277: return [4 /*yield*/, import("react-icons/wi")];
                case 278:
                    WiNightClear = (_b.sent()).WiNightClear;
                    return [2 /*return*/, WiNightClear];
                case 279: return [4 /*yield*/, import("react-icons/wi")];
                case 280:
                    WiNightCloudyGusts = (_b.sent()).WiNightCloudyGusts;
                    return [2 /*return*/, WiNightCloudyGusts];
                case 281: return [4 /*yield*/, import("react-icons/wi")];
                case 282:
                    WiNightCloudyHigh = (_b.sent()).WiNightCloudyHigh;
                    return [2 /*return*/, WiNightCloudyHigh];
                case 283: return [4 /*yield*/, import("react-icons/wi")];
                case 284:
                    WiNightCloudyWindy = (_b.sent()).WiNightCloudyWindy;
                    return [2 /*return*/, WiNightCloudyWindy];
                case 285: return [4 /*yield*/, import("react-icons/wi")];
                case 286:
                    WiNightCloudy = (_b.sent()).WiNightCloudy;
                    return [2 /*return*/, WiNightCloudy];
                case 287: return [4 /*yield*/, import("react-icons/wi")];
                case 288:
                    WiNightFog = (_b.sent()).WiNightFog;
                    return [2 /*return*/, WiNightFog];
                case 289: return [4 /*yield*/, import("react-icons/wi")];
                case 290:
                    WiNightHail = (_b.sent()).WiNightHail;
                    return [2 /*return*/, WiNightHail];
                case 291: return [4 /*yield*/, import("react-icons/wi")];
                case 292:
                    WiNightLightning = (_b.sent()).WiNightLightning;
                    return [2 /*return*/, WiNightLightning];
                case 293: return [4 /*yield*/, import("react-icons/wi")];
                case 294:
                    WiNightPartlyCloudy = (_b.sent()).WiNightPartlyCloudy;
                    return [2 /*return*/, WiNightPartlyCloudy];
                case 295: return [4 /*yield*/, import("react-icons/wi")];
                case 296:
                    WiNightRainMix = (_b.sent()).WiNightRainMix;
                    return [2 /*return*/, WiNightRainMix];
                case 297: return [4 /*yield*/, import("react-icons/wi")];
                case 298:
                    WiNightRainWind = (_b.sent()).WiNightRainWind;
                    return [2 /*return*/, WiNightRainWind];
                case 299: return [4 /*yield*/, import("react-icons/wi")];
                case 300:
                    WiNightRain = (_b.sent()).WiNightRain;
                    return [2 /*return*/, WiNightRain];
                case 301: return [4 /*yield*/, import("react-icons/wi")];
                case 302:
                    WiNightShowers = (_b.sent()).WiNightShowers;
                    return [2 /*return*/, WiNightShowers];
                case 303: return [4 /*yield*/, import("react-icons/wi")];
                case 304:
                    WiNightSleetStorm = (_b.sent()).WiNightSleetStorm;
                    return [2 /*return*/, WiNightSleetStorm];
                case 305: return [4 /*yield*/, import("react-icons/wi")];
                case 306:
                    WiNightSleet = (_b.sent()).WiNightSleet;
                    return [2 /*return*/, WiNightSleet];
                case 307: return [4 /*yield*/, import("react-icons/wi")];
                case 308:
                    WiNightSnowThunderstorm = (_b.sent()).WiNightSnowThunderstorm;
                    return [2 /*return*/, WiNightSnowThunderstorm];
                case 309: return [4 /*yield*/, import("react-icons/wi")];
                case 310:
                    WiNightSnowWind = (_b.sent()).WiNightSnowWind;
                    return [2 /*return*/, WiNightSnowWind];
                case 311: return [4 /*yield*/, import("react-icons/wi")];
                case 312:
                    WiNightSnow = (_b.sent()).WiNightSnow;
                    return [2 /*return*/, WiNightSnow];
                case 313: return [4 /*yield*/, import("react-icons/wi")];
                case 314:
                    WiNightSprinkle = (_b.sent()).WiNightSprinkle;
                    return [2 /*return*/, WiNightSprinkle];
                case 315: return [4 /*yield*/, import("react-icons/wi")];
                case 316:
                    WiNightStormShowers = (_b.sent()).WiNightStormShowers;
                    return [2 /*return*/, WiNightStormShowers];
                case 317: return [4 /*yield*/, import("react-icons/wi")];
                case 318:
                    WiNightThunderstorm = (_b.sent()).WiNightThunderstorm;
                    return [2 /*return*/, WiNightThunderstorm];
                case 319: return [4 /*yield*/, import("react-icons/wi")];
                case 320:
                    WiRainMix = (_b.sent()).WiRainMix;
                    return [2 /*return*/, WiRainMix];
                case 321: return [4 /*yield*/, import("react-icons/wi")];
                case 322:
                    WiRainWind = (_b.sent()).WiRainWind;
                    return [2 /*return*/, WiRainWind];
                case 323: return [4 /*yield*/, import("react-icons/wi")];
                case 324:
                    WiRain = (_b.sent()).WiRain;
                    return [2 /*return*/, WiRain];
                case 325: return [4 /*yield*/, import("react-icons/wi")];
                case 326:
                    WiRaindrop = (_b.sent()).WiRaindrop;
                    return [2 /*return*/, WiRaindrop];
                case 327: return [4 /*yield*/, import("react-icons/wi")];
                case 328:
                    WiRaindrops = (_b.sent()).WiRaindrops;
                    return [2 /*return*/, WiRaindrops];
                case 329: return [4 /*yield*/, import("react-icons/wi")];
                case 330:
                    WiRefreshAlt = (_b.sent()).WiRefreshAlt;
                    return [2 /*return*/, WiRefreshAlt];
                case 331: return [4 /*yield*/, import("react-icons/wi")];
                case 332:
                    WiRefresh = (_b.sent()).WiRefresh;
                    return [2 /*return*/, WiRefresh];
                case 333: return [4 /*yield*/, import("react-icons/wi")];
                case 334:
                    WiSandstorm = (_b.sent()).WiSandstorm;
                    return [2 /*return*/, WiSandstorm];
                case 335: return [4 /*yield*/, import("react-icons/wi")];
                case 336:
                    WiShowers = (_b.sent()).WiShowers;
                    return [2 /*return*/, WiShowers];
                case 337: return [4 /*yield*/, import("react-icons/wi")];
                case 338:
                    WiSleet = (_b.sent()).WiSleet;
                    return [2 /*return*/, WiSleet];
                case 339: return [4 /*yield*/, import("react-icons/wi")];
                case 340:
                    WiSmallCraftAdvisory = (_b.sent()).WiSmallCraftAdvisory;
                    return [2 /*return*/, WiSmallCraftAdvisory];
                case 341: return [4 /*yield*/, import("react-icons/wi")];
                case 342:
                    WiSmog = (_b.sent()).WiSmog;
                    return [2 /*return*/, WiSmog];
                case 343: return [4 /*yield*/, import("react-icons/wi")];
                case 344:
                    WiSmoke = (_b.sent()).WiSmoke;
                    return [2 /*return*/, WiSmoke];
                case 345: return [4 /*yield*/, import("react-icons/wi")];
                case 346:
                    WiSnowWind = (_b.sent()).WiSnowWind;
                    return [2 /*return*/, WiSnowWind];
                case 347: return [4 /*yield*/, import("react-icons/wi")];
                case 348:
                    WiSnow = (_b.sent()).WiSnow;
                    return [2 /*return*/, WiSnow];
                case 349: return [4 /*yield*/, import("react-icons/wi")];
                case 350:
                    WiSnowflakeCold = (_b.sent()).WiSnowflakeCold;
                    return [2 /*return*/, WiSnowflakeCold];
                case 351: return [4 /*yield*/, import("react-icons/wi")];
                case 352:
                    WiSolarEclipse = (_b.sent()).WiSolarEclipse;
                    return [2 /*return*/, WiSolarEclipse];
                case 353: return [4 /*yield*/, import("react-icons/wi")];
                case 354:
                    WiSprinkle = (_b.sent()).WiSprinkle;
                    return [2 /*return*/, WiSprinkle];
                case 355: return [4 /*yield*/, import("react-icons/wi")];
                case 356:
                    WiStars = (_b.sent()).WiStars;
                    return [2 /*return*/, WiStars];
                case 357: return [4 /*yield*/, import("react-icons/wi")];
                case 358:
                    WiStormShowers = (_b.sent()).WiStormShowers;
                    return [2 /*return*/, WiStormShowers];
                case 359: return [4 /*yield*/, import("react-icons/wi")];
                case 360:
                    WiStormWarning = (_b.sent()).WiStormWarning;
                    return [2 /*return*/, WiStormWarning];
                case 361: return [4 /*yield*/, import("react-icons/wi")];
                case 362:
                    WiStrongWind = (_b.sent()).WiStrongWind;
                    return [2 /*return*/, WiStrongWind];
                case 363: return [4 /*yield*/, import("react-icons/wi")];
                case 364:
                    WiSunrise = (_b.sent()).WiSunrise;
                    return [2 /*return*/, WiSunrise];
                case 365: return [4 /*yield*/, import("react-icons/wi")];
                case 366:
                    WiSunset = (_b.sent()).WiSunset;
                    return [2 /*return*/, WiSunset];
                case 367: return [4 /*yield*/, import("react-icons/wi")];
                case 368:
                    WiThermometerExterior = (_b.sent()).WiThermometerExterior;
                    return [2 /*return*/, WiThermometerExterior];
                case 369: return [4 /*yield*/, import("react-icons/wi")];
                case 370:
                    WiThermometerInternal = (_b.sent()).WiThermometerInternal;
                    return [2 /*return*/, WiThermometerInternal];
                case 371: return [4 /*yield*/, import("react-icons/wi")];
                case 372:
                    WiThermometer = (_b.sent()).WiThermometer;
                    return [2 /*return*/, WiThermometer];
                case 373: return [4 /*yield*/, import("react-icons/wi")];
                case 374:
                    WiThunderstorm = (_b.sent()).WiThunderstorm;
                    return [2 /*return*/, WiThunderstorm];
                case 375: return [4 /*yield*/, import("react-icons/wi")];
                case 376:
                    WiTime1 = (_b.sent()).WiTime1;
                    return [2 /*return*/, WiTime1];
                case 377: return [4 /*yield*/, import("react-icons/wi")];
                case 378:
                    WiTime10 = (_b.sent()).WiTime10;
                    return [2 /*return*/, WiTime10];
                case 379: return [4 /*yield*/, import("react-icons/wi")];
                case 380:
                    WiTime11 = (_b.sent()).WiTime11;
                    return [2 /*return*/, WiTime11];
                case 381: return [4 /*yield*/, import("react-icons/wi")];
                case 382:
                    WiTime12 = (_b.sent()).WiTime12;
                    return [2 /*return*/, WiTime12];
                case 383: return [4 /*yield*/, import("react-icons/wi")];
                case 384:
                    WiTime2 = (_b.sent()).WiTime2;
                    return [2 /*return*/, WiTime2];
                case 385: return [4 /*yield*/, import("react-icons/wi")];
                case 386:
                    WiTime3 = (_b.sent()).WiTime3;
                    return [2 /*return*/, WiTime3];
                case 387: return [4 /*yield*/, import("react-icons/wi")];
                case 388:
                    WiTime4 = (_b.sent()).WiTime4;
                    return [2 /*return*/, WiTime4];
                case 389: return [4 /*yield*/, import("react-icons/wi")];
                case 390:
                    WiTime5 = (_b.sent()).WiTime5;
                    return [2 /*return*/, WiTime5];
                case 391: return [4 /*yield*/, import("react-icons/wi")];
                case 392:
                    WiTime6 = (_b.sent()).WiTime6;
                    return [2 /*return*/, WiTime6];
                case 393: return [4 /*yield*/, import("react-icons/wi")];
                case 394:
                    WiTime7 = (_b.sent()).WiTime7;
                    return [2 /*return*/, WiTime7];
                case 395: return [4 /*yield*/, import("react-icons/wi")];
                case 396:
                    WiTime8 = (_b.sent()).WiTime8;
                    return [2 /*return*/, WiTime8];
                case 397: return [4 /*yield*/, import("react-icons/wi")];
                case 398:
                    WiTime9 = (_b.sent()).WiTime9;
                    return [2 /*return*/, WiTime9];
                case 399: return [4 /*yield*/, import("react-icons/wi")];
                case 400:
                    WiTornado = (_b.sent()).WiTornado;
                    return [2 /*return*/, WiTornado];
                case 401: return [4 /*yield*/, import("react-icons/wi")];
                case 402:
                    WiTrain = (_b.sent()).WiTrain;
                    return [2 /*return*/, WiTrain];
                case 403: return [4 /*yield*/, import("react-icons/wi")];
                case 404:
                    WiTsunami = (_b.sent()).WiTsunami;
                    return [2 /*return*/, WiTsunami];
                case 405: return [4 /*yield*/, import("react-icons/wi")];
                case 406:
                    WiUmbrella = (_b.sent()).WiUmbrella;
                    return [2 /*return*/, WiUmbrella];
                case 407: return [4 /*yield*/, import("react-icons/wi")];
                case 408:
                    WiVolcano = (_b.sent()).WiVolcano;
                    return [2 /*return*/, WiVolcano];
                case 409: return [4 /*yield*/, import("react-icons/wi")];
                case 410:
                    WiWindBeaufort0 = (_b.sent()).WiWindBeaufort0;
                    return [2 /*return*/, WiWindBeaufort0];
                case 411: return [4 /*yield*/, import("react-icons/wi")];
                case 412:
                    WiWindBeaufort1 = (_b.sent()).WiWindBeaufort1;
                    return [2 /*return*/, WiWindBeaufort1];
                case 413: return [4 /*yield*/, import("react-icons/wi")];
                case 414:
                    WiWindBeaufort10 = (_b.sent()).WiWindBeaufort10;
                    return [2 /*return*/, WiWindBeaufort10];
                case 415: return [4 /*yield*/, import("react-icons/wi")];
                case 416:
                    WiWindBeaufort11 = (_b.sent()).WiWindBeaufort11;
                    return [2 /*return*/, WiWindBeaufort11];
                case 417: return [4 /*yield*/, import("react-icons/wi")];
                case 418:
                    WiWindBeaufort12 = (_b.sent()).WiWindBeaufort12;
                    return [2 /*return*/, WiWindBeaufort12];
                case 419: return [4 /*yield*/, import("react-icons/wi")];
                case 420:
                    WiWindBeaufort2 = (_b.sent()).WiWindBeaufort2;
                    return [2 /*return*/, WiWindBeaufort2];
                case 421: return [4 /*yield*/, import("react-icons/wi")];
                case 422:
                    WiWindBeaufort3 = (_b.sent()).WiWindBeaufort3;
                    return [2 /*return*/, WiWindBeaufort3];
                case 423: return [4 /*yield*/, import("react-icons/wi")];
                case 424:
                    WiWindBeaufort4 = (_b.sent()).WiWindBeaufort4;
                    return [2 /*return*/, WiWindBeaufort4];
                case 425: return [4 /*yield*/, import("react-icons/wi")];
                case 426:
                    WiWindBeaufort5 = (_b.sent()).WiWindBeaufort5;
                    return [2 /*return*/, WiWindBeaufort5];
                case 427: return [4 /*yield*/, import("react-icons/wi")];
                case 428:
                    WiWindBeaufort6 = (_b.sent()).WiWindBeaufort6;
                    return [2 /*return*/, WiWindBeaufort6];
                case 429: return [4 /*yield*/, import("react-icons/wi")];
                case 430:
                    WiWindBeaufort7 = (_b.sent()).WiWindBeaufort7;
                    return [2 /*return*/, WiWindBeaufort7];
                case 431: return [4 /*yield*/, import("react-icons/wi")];
                case 432:
                    WiWindBeaufort8 = (_b.sent()).WiWindBeaufort8;
                    return [2 /*return*/, WiWindBeaufort8];
                case 433: return [4 /*yield*/, import("react-icons/wi")];
                case 434:
                    WiWindBeaufort9 = (_b.sent()).WiWindBeaufort9;
                    return [2 /*return*/, WiWindBeaufort9];
                case 435: return [4 /*yield*/, import("react-icons/wi")];
                case 436:
                    WiWindDeg = (_b.sent()).WiWindDeg;
                    return [2 /*return*/, WiWindDeg];
                case 437: return [4 /*yield*/, import("react-icons/wi")];
                case 438:
                    WiWindy = (_b.sent()).WiWindy;
                    return [2 /*return*/, WiWindy];
                case 439: return [2 /*return*/];
            }
        });
    });
}
