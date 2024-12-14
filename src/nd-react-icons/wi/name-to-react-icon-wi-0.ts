import type {IconType} from "react-icons";

import {
    WiAlien,
    WiBarometer,
    WiCelsius,
    WiCloudDown,
    WiCloudRefresh,
    WiCloudUp,
    WiCloud,
    WiCloudyGusts,
    WiCloudyWindy,
    WiCloudy,
    WiDayCloudyGusts,
    WiDayCloudyHigh,
    WiDayCloudyWindy,
    WiDayCloudy,
    WiDayFog,
    WiDayHail,
    WiDayHaze,
    WiDayLightWind,
    WiDayLightning,
    WiDayRainMix,
    WiDayRainWind,
    WiDayRain,
    WiDayShowers,
    WiDaySleetStorm,
    WiDaySleet,
    WiDaySnowThunderstorm,
    WiDaySnowWind,
    WiDaySnow,
    WiDaySprinkle,
    WiDayStormShowers,
    WiDaySunnyOvercast,
    WiDaySunny,
    WiDayThunderstorm,
    WiDayWindy,
    WiDegrees,
    WiDirectionDownLeft,
    WiDirectionDownRight,
    WiDirectionDown,
    WiDirectionLeft,
    WiDirectionRight,
    WiDirectionUpLeft,
    WiDirectionUpRight,
    WiDirectionUp,
    WiDust,
    WiEarthquake,
    WiFahrenheit,
    WiFire,
    WiFlood,
    WiFog,
    WiGaleWarning,
    WiHail,
    WiHorizonAlt,
    WiHorizon,
    WiHot,
    WiHumidity,
    WiHurricaneWarning,
    WiHurricane,
    WiLightning,
    WiLunarEclipse,
    WiMeteor,
    WiMoonAltFirstQuarter,
    WiMoonAltFull,
    WiMoonAltNew,
    WiMoonAltThirdQuarter,
    WiMoonAltWaningCrescent1,
    WiMoonAltWaningCrescent2,
    WiMoonAltWaningCrescent3,
    WiMoonAltWaningCrescent4,
    WiMoonAltWaningCrescent5,
    WiMoonAltWaningCrescent6,
    WiMoonAltWaningGibbous1,
    WiMoonAltWaningGibbous2,
    WiMoonAltWaningGibbous3,
    WiMoonAltWaningGibbous4,
    WiMoonAltWaningGibbous5,
    WiMoonAltWaningGibbous6,
    WiMoonAltWaxingCrescent1,
    WiMoonAltWaxingCrescent2,
    WiMoonAltWaxingCrescent3,
    WiMoonAltWaxingCrescent4,
    WiMoonAltWaxingCrescent5,
    WiMoonAltWaxingCrescent6,
    WiMoonAltWaxingGibbous1,
    WiMoonAltWaxingGibbous2,
    WiMoonAltWaxingGibbous3,
    WiMoonAltWaxingGibbous4,
    WiMoonAltWaxingGibbous5,
    WiMoonAltWaxingGibbous6,
    WiMoonFirstQuarter,
    WiMoonFull,
    WiMoonNew,
    WiMoonThirdQuarter,
    WiMoonWaningCrescent1,
    WiMoonWaningCrescent2,
    WiMoonWaningCrescent3,
    WiMoonWaningCrescent4,
    WiMoonWaningCrescent5,
    WiMoonWaningCrescent6,
    WiMoonWaningGibbous1,
    WiMoonWaningGibbous2,
    WiMoonWaningGibbous3,
    WiMoonWaningGibbous4,
    WiMoonWaningGibbous5,
    WiMoonWaningGibbous6,
    WiMoonWaxing6,
    WiMoonWaxingCrescent1,
    WiMoonWaxingCrescent2,
    WiMoonWaxingCrescent3,
    WiMoonWaxingCrescent4,
    WiMoonWaxingCrescent5,
    WiMoonWaxingGibbous1,
    WiMoonWaxingGibbous2,
    WiMoonWaxingGibbous3,
    WiMoonWaxingGibbous4,
    WiMoonWaxingGibbous5,
    WiMoonWaxingGibbous6,
    WiMoonrise,
    WiMoonset,
    WiNa,
    WiNightAltCloudyGusts,
    WiNightAltCloudyHigh,
    WiNightAltCloudyWindy,
    WiNightAltCloudy,
    WiNightAltHail,
    WiNightAltLightning,
    WiNightAltPartlyCloudy,
    WiNightAltRainMix,
    WiNightAltRainWind,
    WiNightAltRain,
    WiNightAltShowers,
    WiNightAltSleetStorm,
    WiNightAltSleet,
    WiNightAltSnowThunderstorm,
    WiNightAltSnowWind,
    WiNightAltSnow,
    WiNightAltSprinkle,
    WiNightAltStormShowers,
    WiNightAltThunderstorm,
    WiNightClear,
    WiNightCloudyGusts,
    WiNightCloudyHigh,
    WiNightCloudyWindy,
    WiNightCloudy,
    WiNightFog,
    WiNightHail,
    WiNightLightning,
    WiNightPartlyCloudy,
    WiNightRainMix,
    WiNightRainWind,
    WiNightRain,
    WiNightShowers,
    WiNightSleetStorm,
    WiNightSleet,
    WiNightSnowThunderstorm,
    WiNightSnowWind,
    WiNightSnow,
    WiNightSprinkle,
    WiNightStormShowers,
    WiNightThunderstorm,
    WiRainMix,
    WiRainWind,
    WiRain,
    WiRaindrop,
    WiRaindrops,
    WiRefreshAlt,
    WiRefresh,
    WiSandstorm,
    WiShowers,
    WiSleet,
    WiSmallCraftAdvisory,
    WiSmog,
    WiSmoke,
    WiSnowWind,
    WiSnow,
    WiSnowflakeCold,
    WiSolarEclipse,
    WiSprinkle,
    WiStars,
    WiStormShowers,
    WiStormWarning,
    WiStrongWind,
    WiSunrise,
    WiSunset,
    WiThermometerExterior,
    WiThermometerInternal,
    WiThermometer,
    WiThunderstorm,
    WiTime1,
    WiTime10,
    WiTime11,
    WiTime12,
    WiTime2,
    WiTime3,
    WiTime4,
    WiTime5,
    WiTime6,
    WiTime7,
    WiTime8,
    WiTime9,
    WiTornado,
    WiTrain,
    WiTsunami,
    WiUmbrella,
    WiVolcano,
    WiWindBeaufort0,
    WiWindBeaufort1,
    WiWindBeaufort10,
    WiWindBeaufort11,
    WiWindBeaufort12,
    WiWindBeaufort2,
    WiWindBeaufort3,
    WiWindBeaufort4,
    WiWindBeaufort5,
    WiWindBeaufort6,
    WiWindBeaufort7,
    WiWindBeaufort8,
    WiWindBeaufort9,
    WiWindDeg,
    WiWindy,
} from "react-icons/wi"

export function nameToReactIcon_wi_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "wi:WiAlien":
            return WiAlien;
        case "wi:WiBarometer":
            return WiBarometer;
        case "wi:WiCelsius":
            return WiCelsius;
        case "wi:WiCloudDown":
            return WiCloudDown;
        case "wi:WiCloudRefresh":
            return WiCloudRefresh;
        case "wi:WiCloudUp":
            return WiCloudUp;
        case "wi:WiCloud":
            return WiCloud;
        case "wi:WiCloudyGusts":
            return WiCloudyGusts;
        case "wi:WiCloudyWindy":
            return WiCloudyWindy;
        case "wi:WiCloudy":
            return WiCloudy;
        case "wi:WiDayCloudyGusts":
            return WiDayCloudyGusts;
        case "wi:WiDayCloudyHigh":
            return WiDayCloudyHigh;
        case "wi:WiDayCloudyWindy":
            return WiDayCloudyWindy;
        case "wi:WiDayCloudy":
            return WiDayCloudy;
        case "wi:WiDayFog":
            return WiDayFog;
        case "wi:WiDayHail":
            return WiDayHail;
        case "wi:WiDayHaze":
            return WiDayHaze;
        case "wi:WiDayLightWind":
            return WiDayLightWind;
        case "wi:WiDayLightning":
            return WiDayLightning;
        case "wi:WiDayRainMix":
            return WiDayRainMix;
        case "wi:WiDayRainWind":
            return WiDayRainWind;
        case "wi:WiDayRain":
            return WiDayRain;
        case "wi:WiDayShowers":
            return WiDayShowers;
        case "wi:WiDaySleetStorm":
            return WiDaySleetStorm;
        case "wi:WiDaySleet":
            return WiDaySleet;
        case "wi:WiDaySnowThunderstorm":
            return WiDaySnowThunderstorm;
        case "wi:WiDaySnowWind":
            return WiDaySnowWind;
        case "wi:WiDaySnow":
            return WiDaySnow;
        case "wi:WiDaySprinkle":
            return WiDaySprinkle;
        case "wi:WiDayStormShowers":
            return WiDayStormShowers;
        case "wi:WiDaySunnyOvercast":
            return WiDaySunnyOvercast;
        case "wi:WiDaySunny":
            return WiDaySunny;
        case "wi:WiDayThunderstorm":
            return WiDayThunderstorm;
        case "wi:WiDayWindy":
            return WiDayWindy;
        case "wi:WiDegrees":
            return WiDegrees;
        case "wi:WiDirectionDownLeft":
            return WiDirectionDownLeft;
        case "wi:WiDirectionDownRight":
            return WiDirectionDownRight;
        case "wi:WiDirectionDown":
            return WiDirectionDown;
        case "wi:WiDirectionLeft":
            return WiDirectionLeft;
        case "wi:WiDirectionRight":
            return WiDirectionRight;
        case "wi:WiDirectionUpLeft":
            return WiDirectionUpLeft;
        case "wi:WiDirectionUpRight":
            return WiDirectionUpRight;
        case "wi:WiDirectionUp":
            return WiDirectionUp;
        case "wi:WiDust":
            return WiDust;
        case "wi:WiEarthquake":
            return WiEarthquake;
        case "wi:WiFahrenheit":
            return WiFahrenheit;
        case "wi:WiFire":
            return WiFire;
        case "wi:WiFlood":
            return WiFlood;
        case "wi:WiFog":
            return WiFog;
        case "wi:WiGaleWarning":
            return WiGaleWarning;
        case "wi:WiHail":
            return WiHail;
        case "wi:WiHorizonAlt":
            return WiHorizonAlt;
        case "wi:WiHorizon":
            return WiHorizon;
        case "wi:WiHot":
            return WiHot;
        case "wi:WiHumidity":
            return WiHumidity;
        case "wi:WiHurricaneWarning":
            return WiHurricaneWarning;
        case "wi:WiHurricane":
            return WiHurricane;
        case "wi:WiLightning":
            return WiLightning;
        case "wi:WiLunarEclipse":
            return WiLunarEclipse;
        case "wi:WiMeteor":
            return WiMeteor;
        case "wi:WiMoonAltFirstQuarter":
            return WiMoonAltFirstQuarter;
        case "wi:WiMoonAltFull":
            return WiMoonAltFull;
        case "wi:WiMoonAltNew":
            return WiMoonAltNew;
        case "wi:WiMoonAltThirdQuarter":
            return WiMoonAltThirdQuarter;
        case "wi:WiMoonAltWaningCrescent1":
            return WiMoonAltWaningCrescent1;
        case "wi:WiMoonAltWaningCrescent2":
            return WiMoonAltWaningCrescent2;
        case "wi:WiMoonAltWaningCrescent3":
            return WiMoonAltWaningCrescent3;
        case "wi:WiMoonAltWaningCrescent4":
            return WiMoonAltWaningCrescent4;
        case "wi:WiMoonAltWaningCrescent5":
            return WiMoonAltWaningCrescent5;
        case "wi:WiMoonAltWaningCrescent6":
            return WiMoonAltWaningCrescent6;
        case "wi:WiMoonAltWaningGibbous1":
            return WiMoonAltWaningGibbous1;
        case "wi:WiMoonAltWaningGibbous2":
            return WiMoonAltWaningGibbous2;
        case "wi:WiMoonAltWaningGibbous3":
            return WiMoonAltWaningGibbous3;
        case "wi:WiMoonAltWaningGibbous4":
            return WiMoonAltWaningGibbous4;
        case "wi:WiMoonAltWaningGibbous5":
            return WiMoonAltWaningGibbous5;
        case "wi:WiMoonAltWaningGibbous6":
            return WiMoonAltWaningGibbous6;
        case "wi:WiMoonAltWaxingCrescent1":
            return WiMoonAltWaxingCrescent1;
        case "wi:WiMoonAltWaxingCrescent2":
            return WiMoonAltWaxingCrescent2;
        case "wi:WiMoonAltWaxingCrescent3":
            return WiMoonAltWaxingCrescent3;
        case "wi:WiMoonAltWaxingCrescent4":
            return WiMoonAltWaxingCrescent4;
        case "wi:WiMoonAltWaxingCrescent5":
            return WiMoonAltWaxingCrescent5;
        case "wi:WiMoonAltWaxingCrescent6":
            return WiMoonAltWaxingCrescent6;
        case "wi:WiMoonAltWaxingGibbous1":
            return WiMoonAltWaxingGibbous1;
        case "wi:WiMoonAltWaxingGibbous2":
            return WiMoonAltWaxingGibbous2;
        case "wi:WiMoonAltWaxingGibbous3":
            return WiMoonAltWaxingGibbous3;
        case "wi:WiMoonAltWaxingGibbous4":
            return WiMoonAltWaxingGibbous4;
        case "wi:WiMoonAltWaxingGibbous5":
            return WiMoonAltWaxingGibbous5;
        case "wi:WiMoonAltWaxingGibbous6":
            return WiMoonAltWaxingGibbous6;
        case "wi:WiMoonFirstQuarter":
            return WiMoonFirstQuarter;
        case "wi:WiMoonFull":
            return WiMoonFull;
        case "wi:WiMoonNew":
            return WiMoonNew;
        case "wi:WiMoonThirdQuarter":
            return WiMoonThirdQuarter;
        case "wi:WiMoonWaningCrescent1":
            return WiMoonWaningCrescent1;
        case "wi:WiMoonWaningCrescent2":
            return WiMoonWaningCrescent2;
        case "wi:WiMoonWaningCrescent3":
            return WiMoonWaningCrescent3;
        case "wi:WiMoonWaningCrescent4":
            return WiMoonWaningCrescent4;
        case "wi:WiMoonWaningCrescent5":
            return WiMoonWaningCrescent5;
        case "wi:WiMoonWaningCrescent6":
            return WiMoonWaningCrescent6;
        case "wi:WiMoonWaningGibbous1":
            return WiMoonWaningGibbous1;
        case "wi:WiMoonWaningGibbous2":
            return WiMoonWaningGibbous2;
        case "wi:WiMoonWaningGibbous3":
            return WiMoonWaningGibbous3;
        case "wi:WiMoonWaningGibbous4":
            return WiMoonWaningGibbous4;
        case "wi:WiMoonWaningGibbous5":
            return WiMoonWaningGibbous5;
        case "wi:WiMoonWaningGibbous6":
            return WiMoonWaningGibbous6;
        case "wi:WiMoonWaxing6":
            return WiMoonWaxing6;
        case "wi:WiMoonWaxingCrescent1":
            return WiMoonWaxingCrescent1;
        case "wi:WiMoonWaxingCrescent2":
            return WiMoonWaxingCrescent2;
        case "wi:WiMoonWaxingCrescent3":
            return WiMoonWaxingCrescent3;
        case "wi:WiMoonWaxingCrescent4":
            return WiMoonWaxingCrescent4;
        case "wi:WiMoonWaxingCrescent5":
            return WiMoonWaxingCrescent5;
        case "wi:WiMoonWaxingGibbous1":
            return WiMoonWaxingGibbous1;
        case "wi:WiMoonWaxingGibbous2":
            return WiMoonWaxingGibbous2;
        case "wi:WiMoonWaxingGibbous3":
            return WiMoonWaxingGibbous3;
        case "wi:WiMoonWaxingGibbous4":
            return WiMoonWaxingGibbous4;
        case "wi:WiMoonWaxingGibbous5":
            return WiMoonWaxingGibbous5;
        case "wi:WiMoonWaxingGibbous6":
            return WiMoonWaxingGibbous6;
        case "wi:WiMoonrise":
            return WiMoonrise;
        case "wi:WiMoonset":
            return WiMoonset;
        case "wi:WiNa":
            return WiNa;
        case "wi:WiNightAltCloudyGusts":
            return WiNightAltCloudyGusts;
        case "wi:WiNightAltCloudyHigh":
            return WiNightAltCloudyHigh;
        case "wi:WiNightAltCloudyWindy":
            return WiNightAltCloudyWindy;
        case "wi:WiNightAltCloudy":
            return WiNightAltCloudy;
        case "wi:WiNightAltHail":
            return WiNightAltHail;
        case "wi:WiNightAltLightning":
            return WiNightAltLightning;
        case "wi:WiNightAltPartlyCloudy":
            return WiNightAltPartlyCloudy;
        case "wi:WiNightAltRainMix":
            return WiNightAltRainMix;
        case "wi:WiNightAltRainWind":
            return WiNightAltRainWind;
        case "wi:WiNightAltRain":
            return WiNightAltRain;
        case "wi:WiNightAltShowers":
            return WiNightAltShowers;
        case "wi:WiNightAltSleetStorm":
            return WiNightAltSleetStorm;
        case "wi:WiNightAltSleet":
            return WiNightAltSleet;
        case "wi:WiNightAltSnowThunderstorm":
            return WiNightAltSnowThunderstorm;
        case "wi:WiNightAltSnowWind":
            return WiNightAltSnowWind;
        case "wi:WiNightAltSnow":
            return WiNightAltSnow;
        case "wi:WiNightAltSprinkle":
            return WiNightAltSprinkle;
        case "wi:WiNightAltStormShowers":
            return WiNightAltStormShowers;
        case "wi:WiNightAltThunderstorm":
            return WiNightAltThunderstorm;
        case "wi:WiNightClear":
            return WiNightClear;
        case "wi:WiNightCloudyGusts":
            return WiNightCloudyGusts;
        case "wi:WiNightCloudyHigh":
            return WiNightCloudyHigh;
        case "wi:WiNightCloudyWindy":
            return WiNightCloudyWindy;
        case "wi:WiNightCloudy":
            return WiNightCloudy;
        case "wi:WiNightFog":
            return WiNightFog;
        case "wi:WiNightHail":
            return WiNightHail;
        case "wi:WiNightLightning":
            return WiNightLightning;
        case "wi:WiNightPartlyCloudy":
            return WiNightPartlyCloudy;
        case "wi:WiNightRainMix":
            return WiNightRainMix;
        case "wi:WiNightRainWind":
            return WiNightRainWind;
        case "wi:WiNightRain":
            return WiNightRain;
        case "wi:WiNightShowers":
            return WiNightShowers;
        case "wi:WiNightSleetStorm":
            return WiNightSleetStorm;
        case "wi:WiNightSleet":
            return WiNightSleet;
        case "wi:WiNightSnowThunderstorm":
            return WiNightSnowThunderstorm;
        case "wi:WiNightSnowWind":
            return WiNightSnowWind;
        case "wi:WiNightSnow":
            return WiNightSnow;
        case "wi:WiNightSprinkle":
            return WiNightSprinkle;
        case "wi:WiNightStormShowers":
            return WiNightStormShowers;
        case "wi:WiNightThunderstorm":
            return WiNightThunderstorm;
        case "wi:WiRainMix":
            return WiRainMix;
        case "wi:WiRainWind":
            return WiRainWind;
        case "wi:WiRain":
            return WiRain;
        case "wi:WiRaindrop":
            return WiRaindrop;
        case "wi:WiRaindrops":
            return WiRaindrops;
        case "wi:WiRefreshAlt":
            return WiRefreshAlt;
        case "wi:WiRefresh":
            return WiRefresh;
        case "wi:WiSandstorm":
            return WiSandstorm;
        case "wi:WiShowers":
            return WiShowers;
        case "wi:WiSleet":
            return WiSleet;
        case "wi:WiSmallCraftAdvisory":
            return WiSmallCraftAdvisory;
        case "wi:WiSmog":
            return WiSmog;
        case "wi:WiSmoke":
            return WiSmoke;
        case "wi:WiSnowWind":
            return WiSnowWind;
        case "wi:WiSnow":
            return WiSnow;
        case "wi:WiSnowflakeCold":
            return WiSnowflakeCold;
        case "wi:WiSolarEclipse":
            return WiSolarEclipse;
        case "wi:WiSprinkle":
            return WiSprinkle;
        case "wi:WiStars":
            return WiStars;
        case "wi:WiStormShowers":
            return WiStormShowers;
        case "wi:WiStormWarning":
            return WiStormWarning;
        case "wi:WiStrongWind":
            return WiStrongWind;
        case "wi:WiSunrise":
            return WiSunrise;
        case "wi:WiSunset":
            return WiSunset;
        case "wi:WiThermometerExterior":
            return WiThermometerExterior;
        case "wi:WiThermometerInternal":
            return WiThermometerInternal;
        case "wi:WiThermometer":
            return WiThermometer;
        case "wi:WiThunderstorm":
            return WiThunderstorm;
        case "wi:WiTime1":
            return WiTime1;
        case "wi:WiTime10":
            return WiTime10;
        case "wi:WiTime11":
            return WiTime11;
        case "wi:WiTime12":
            return WiTime12;
        case "wi:WiTime2":
            return WiTime2;
        case "wi:WiTime3":
            return WiTime3;
        case "wi:WiTime4":
            return WiTime4;
        case "wi:WiTime5":
            return WiTime5;
        case "wi:WiTime6":
            return WiTime6;
        case "wi:WiTime7":
            return WiTime7;
        case "wi:WiTime8":
            return WiTime8;
        case "wi:WiTime9":
            return WiTime9;
        case "wi:WiTornado":
            return WiTornado;
        case "wi:WiTrain":
            return WiTrain;
        case "wi:WiTsunami":
            return WiTsunami;
        case "wi:WiUmbrella":
            return WiUmbrella;
        case "wi:WiVolcano":
            return WiVolcano;
        case "wi:WiWindBeaufort0":
            return WiWindBeaufort0;
        case "wi:WiWindBeaufort1":
            return WiWindBeaufort1;
        case "wi:WiWindBeaufort10":
            return WiWindBeaufort10;
        case "wi:WiWindBeaufort11":
            return WiWindBeaufort11;
        case "wi:WiWindBeaufort12":
            return WiWindBeaufort12;
        case "wi:WiWindBeaufort2":
            return WiWindBeaufort2;
        case "wi:WiWindBeaufort3":
            return WiWindBeaufort3;
        case "wi:WiWindBeaufort4":
            return WiWindBeaufort4;
        case "wi:WiWindBeaufort5":
            return WiWindBeaufort5;
        case "wi:WiWindBeaufort6":
            return WiWindBeaufort6;
        case "wi:WiWindBeaufort7":
            return WiWindBeaufort7;
        case "wi:WiWindBeaufort8":
            return WiWindBeaufort8;
        case "wi:WiWindBeaufort9":
            return WiWindBeaufort9;
        case "wi:WiWindDeg":
            return WiWindDeg;
        case "wi:WiWindy":
            return WiWindy;
    }
}
