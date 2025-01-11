import { gw_flag_1x1 } from "./gw-flag-1x1";
import { gw_flag_4x3 } from "./gw-flag-4x3";
export function gw_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => gw_flag_1x1(props, className);
        case "4x3":
            return (props) => gw_flag_4x3(props, className);
    }
    return undefined;
}
export function gw_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "gw") {
        return gw_flag(format, className);
    }
    return undefined;
}
export default gw_flag;
