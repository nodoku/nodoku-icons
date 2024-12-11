import type {IconType} from "react-icons";

export async function nameToReactIcon_ri_3(iconName: string): Promise<IconType | undefined> {

    switch(iconName) {
        case "ri:RiSunCloudyFill":
            const { RiSunCloudyFill } = await import("react-icons/ri")
            return RiSunCloudyFill;

        case "ri:RiSunCloudyLine":
            const { RiSunCloudyLine } = await import("react-icons/ri")
            return RiSunCloudyLine;

        case "ri:RiSunFill":
            const { RiSunFill } = await import("react-icons/ri")
            return RiSunFill;

        case "ri:RiSunFoggyFill":
            const { RiSunFoggyFill } = await import("react-icons/ri")
            return RiSunFoggyFill;

        case "ri:RiSunFoggyLine":
            const { RiSunFoggyLine } = await import("react-icons/ri")
            return RiSunFoggyLine;

        case "ri:RiSunLine":
            const { RiSunLine } = await import("react-icons/ri")
            return RiSunLine;

        case "ri:RiTempColdFill":
            const { RiTempColdFill } = await import("react-icons/ri")
            return RiTempColdFill;

        case "ri:RiTempColdLine":
            const { RiTempColdLine } = await import("react-icons/ri")
            return RiTempColdLine;

        case "ri:RiTempHotFill":
            const { RiTempHotFill } = await import("react-icons/ri")
            return RiTempHotFill;

        case "ri:RiTempHotLine":
            const { RiTempHotLine } = await import("react-icons/ri")
            return RiTempHotLine;

        case "ri:RiThunderstormsFill":
            const { RiThunderstormsFill } = await import("react-icons/ri")
            return RiThunderstormsFill;

        case "ri:RiThunderstormsLine":
            const { RiThunderstormsLine } = await import("react-icons/ri")
            return RiThunderstormsLine;

        case "ri:RiTornadoFill":
            const { RiTornadoFill } = await import("react-icons/ri")
            return RiTornadoFill;

        case "ri:RiTornadoLine":
            const { RiTornadoLine } = await import("react-icons/ri")
            return RiTornadoLine;

        case "ri:RiTyphoonFill":
            const { RiTyphoonFill } = await import("react-icons/ri")
            return RiTyphoonFill;

        case "ri:RiTyphoonLine":
            const { RiTyphoonLine } = await import("react-icons/ri")
            return RiTyphoonLine;

        case "ri:RiWaterPercentFill":
            const { RiWaterPercentFill } = await import("react-icons/ri")
            return RiWaterPercentFill;

        case "ri:RiWaterPercentLine":
            const { RiWaterPercentLine } = await import("react-icons/ri")
            return RiWaterPercentLine;

        case "ri:RiWindyFill":
            const { RiWindyFill } = await import("react-icons/ri")
            return RiWindyFill;

        case "ri:RiWindyLine":
            const { RiWindyLine } = await import("react-icons/ri")
            return RiWindyLine;

    }
}
