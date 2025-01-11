import { mv_flag_1x1 } from "./mv-flag-1x1";
import { mv_flag_4x3 } from "./mv-flag-4x3";
export function mv_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => mv_flag_1x1(props, className);
        case "4x3":
            return (props) => mv_flag_4x3(props, className);
    }
    return undefined;
}
export function mv_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "mv") {
        return mv_flag(format, className);
    }
    return undefined;
}
export default mv_flag;
