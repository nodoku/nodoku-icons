import { hk_flag_1x1 } from "./hk-flag-1x1";
import { hk_flag_4x3 } from "./hk-flag-4x3";
export function hk_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => hk_flag_1x1(props, className);
        case "4x3":
            return (props) => hk_flag_4x3(props, className);
    }
    return undefined;
}
export function hk_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "hk") {
        return hk_flag(format, className);
    }
    return undefined;
}
export default hk_flag;
