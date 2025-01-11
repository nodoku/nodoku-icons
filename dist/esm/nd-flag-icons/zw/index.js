import { zw_flag_1x1 } from "./zw-flag-1x1";
import { zw_flag_4x3 } from "./zw-flag-4x3";
export function zw_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => zw_flag_1x1(props, className);
        case "4x3":
            return (props) => zw_flag_4x3(props, className);
    }
    return undefined;
}
export function zw_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "zw") {
        return zw_flag(format, className);
    }
    return undefined;
}
export default zw_flag;
