import { sb_flag_1x1 } from "./sb-flag-1x1";
import { sb_flag_4x3 } from "./sb-flag-4x3";
export function sb_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => sb_flag_1x1(props, className);
        case "4x3":
            return (props) => sb_flag_4x3(props, className);
    }
    return undefined;
}
export function sb_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "sb") {
        return sb_flag(format, className);
    }
    return undefined;
}
export default sb_flag;
