import { fi_flag_1x1 } from "./fi-flag-1x1";
import { fi_flag_4x3 } from "./fi-flag-4x3";
export function fi_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => fi_flag_1x1(props, className);
        case "4x3":
            return (props) => fi_flag_4x3(props, className);
    }
    return undefined;
}
export function fi_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "fi") {
        return fi_flag(format, className);
    }
    return undefined;
}
export default fi_flag;
