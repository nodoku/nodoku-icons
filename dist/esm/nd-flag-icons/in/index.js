import { in_flag_1x1 } from "./in-flag-1x1";
import { in_flag_4x3 } from "./in-flag-4x3";
export function in_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => in_flag_1x1(props, className);
        case "4x3":
            return (props) => in_flag_4x3(props, className);
    }
    return undefined;
}
export function in_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "in") {
        return in_flag(format, className);
    }
    return undefined;
}
export default in_flag;
