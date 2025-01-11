import { xx_flag_1x1 } from "./xx-flag-1x1";
import { xx_flag_4x3 } from "./xx-flag-4x3";
export function xx_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => xx_flag_1x1(props, className);
        case "4x3":
            return (props) => xx_flag_4x3(props, className);
    }
    return undefined;
}
export function xx_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "xx") {
        return xx_flag(format, className);
    }
    return undefined;
}
export default xx_flag;
