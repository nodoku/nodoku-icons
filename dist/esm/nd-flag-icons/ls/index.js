import { ls_flag_1x1 } from "./ls-flag-1x1";
import { ls_flag_4x3 } from "./ls-flag-4x3";
export function ls_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => ls_flag_1x1(props, className);
        case "4x3":
            return (props) => ls_flag_4x3(props, className);
    }
    return undefined;
}
export function ls_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "ls") {
        return ls_flag(format, className);
    }
    return undefined;
}
export default ls_flag;
