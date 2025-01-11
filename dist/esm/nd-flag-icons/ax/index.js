import { ax_flag_1x1 } from "./ax-flag-1x1";
import { ax_flag_4x3 } from "./ax-flag-4x3";
export function ax_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => ax_flag_1x1(props, className);
        case "4x3":
            return (props) => ax_flag_4x3(props, className);
    }
    return undefined;
}
export function ax_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "ax") {
        return ax_flag(format, className);
    }
    return undefined;
}
export default ax_flag;
