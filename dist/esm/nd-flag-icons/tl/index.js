import { tl_flag_1x1 } from "./tl-flag-1x1";
import { tl_flag_4x3 } from "./tl-flag-4x3";
export function tl_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => tl_flag_1x1(props, className);
        case "4x3":
            return (props) => tl_flag_4x3(props, className);
    }
    return undefined;
}
export function tl_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "tl") {
        return tl_flag(format, className);
    }
    return undefined;
}
export default tl_flag;
