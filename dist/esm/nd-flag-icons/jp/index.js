import { jp_flag_1x1 } from "./jp-flag-1x1";
import { jp_flag_4x3 } from "./jp-flag-4x3";
export function jp_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => jp_flag_1x1(props, className);
        case "4x3":
            return (props) => jp_flag_4x3(props, className);
    }
    return undefined;
}
export function jp_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "jp") {
        return jp_flag(format, className);
    }
    return undefined;
}
export default jp_flag;
