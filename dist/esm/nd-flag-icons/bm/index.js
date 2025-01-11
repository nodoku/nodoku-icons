import { bm_flag_1x1 } from "./bm-flag-1x1";
import { bm_flag_4x3 } from "./bm-flag-4x3";
export function bm_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => bm_flag_1x1(props, className);
        case "4x3":
            return (props) => bm_flag_4x3(props, className);
    }
    return undefined;
}
export function bm_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "bm") {
        return bm_flag(format, className);
    }
    return undefined;
}
export default bm_flag;
