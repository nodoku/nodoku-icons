import { lc_flag_1x1 } from "./lc-flag-1x1";
import { lc_flag_4x3 } from "./lc-flag-4x3";
export function lc_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => lc_flag_1x1(props, className);
        case "4x3":
            return (props) => lc_flag_4x3(props, className);
    }
    return undefined;
}
export function lc_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "lc") {
        return lc_flag(format, className);
    }
    return undefined;
}
export default lc_flag;
