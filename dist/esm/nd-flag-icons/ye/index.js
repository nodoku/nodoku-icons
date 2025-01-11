import { ye_flag_1x1 } from "./ye-flag-1x1";
import { ye_flag_4x3 } from "./ye-flag-4x3";
export function ye_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => ye_flag_1x1(props, className);
        case "4x3":
            return (props) => ye_flag_4x3(props, className);
    }
    return undefined;
}
export function ye_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "ye") {
        return ye_flag(format, className);
    }
    return undefined;
}
export default ye_flag;
