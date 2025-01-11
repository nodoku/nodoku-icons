import { gt_flag_1x1 } from "./gt-flag-1x1";
import { gt_flag_4x3 } from "./gt-flag-4x3";
export function gt_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => gt_flag_1x1(props, className);
        case "4x3":
            return (props) => gt_flag_4x3(props, className);
    }
    return undefined;
}
export function gt_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "gt") {
        return gt_flag(format, className);
    }
    return undefined;
}
export default gt_flag;
