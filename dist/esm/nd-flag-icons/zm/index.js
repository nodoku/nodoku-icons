import { zm_flag_1x1 } from "./zm-flag-1x1";
import { zm_flag_4x3 } from "./zm-flag-4x3";
export function zm_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => zm_flag_1x1(props, className);
        case "4x3":
            return (props) => zm_flag_4x3(props, className);
    }
    return undefined;
}
export function zm_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "zm") {
        return zm_flag(format, className);
    }
    return undefined;
}
export default zm_flag;
