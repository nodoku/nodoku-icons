import { so_flag_1x1 } from "./so-flag-1x1";
import { so_flag_4x3 } from "./so-flag-4x3";
export function so_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => so_flag_1x1(props, className);
        case "4x3":
            return (props) => so_flag_4x3(props, className);
    }
    return undefined;
}
export function so_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "so") {
        return so_flag(format, className);
    }
    return undefined;
}
export default so_flag;
