import { bg_flag_1x1 } from "./bg-flag-1x1";
import { bg_flag_4x3 } from "./bg-flag-4x3";
export function bg_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => bg_flag_1x1(props, className);
        case "4x3":
            return (props) => bg_flag_4x3(props, className);
    }
    return undefined;
}
export function bg_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "bg") {
        return bg_flag(format, className);
    }
    return undefined;
}
export default bg_flag;
