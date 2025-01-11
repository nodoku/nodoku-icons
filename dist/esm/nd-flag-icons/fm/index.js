import { fm_flag_1x1 } from "./fm-flag-1x1";
import { fm_flag_4x3 } from "./fm-flag-4x3";
export function fm_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => fm_flag_1x1(props, className);
        case "4x3":
            return (props) => fm_flag_4x3(props, className);
    }
    return undefined;
}
export function fm_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "fm") {
        return fm_flag(format, className);
    }
    return undefined;
}
export default fm_flag;
