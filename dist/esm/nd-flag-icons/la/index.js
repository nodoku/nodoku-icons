import { la_flag_1x1 } from "./la-flag-1x1";
import { la_flag_4x3 } from "./la-flag-4x3";
export function la_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => la_flag_1x1(props, className);
        case "4x3":
            return (props) => la_flag_4x3(props, className);
    }
    return undefined;
}
export function la_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "la") {
        return la_flag(format, className);
    }
    return undefined;
}
export default la_flag;
