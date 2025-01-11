import { bw_flag_1x1 } from "./bw-flag-1x1";
import { bw_flag_4x3 } from "./bw-flag-4x3";
export function bw_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => bw_flag_1x1(props, className);
        case "4x3":
            return (props) => bw_flag_4x3(props, className);
    }
    return undefined;
}
export function bw_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "bw") {
        return bw_flag(format, className);
    }
    return undefined;
}
export default bw_flag;
