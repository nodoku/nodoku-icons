import { mt_flag_1x1 } from "./mt-flag-1x1";
import { mt_flag_4x3 } from "./mt-flag-4x3";
export function mt_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => mt_flag_1x1(props, className);
        case "4x3":
            return (props) => mt_flag_4x3(props, className);
    }
    return undefined;
}
export function mt_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "mt") {
        return mt_flag(format, className);
    }
    return undefined;
}
export default mt_flag;
