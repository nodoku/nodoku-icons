import { mw_flag_1x1 } from "./mw-flag-1x1";
import { mw_flag_4x3 } from "./mw-flag-4x3";
export function mw_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => mw_flag_1x1(props, className);
        case "4x3":
            return (props) => mw_flag_4x3(props, className);
    }
    return undefined;
}
export function mw_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "mw") {
        return mw_flag(format, className);
    }
    return undefined;
}
export default mw_flag;
