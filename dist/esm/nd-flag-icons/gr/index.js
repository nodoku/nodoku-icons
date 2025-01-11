import { gr_flag_1x1 } from "./gr-flag-1x1";
import { gr_flag_4x3 } from "./gr-flag-4x3";
export function gr_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => gr_flag_1x1(props, className);
        case "4x3":
            return (props) => gr_flag_4x3(props, className);
    }
    return undefined;
}
export function gr_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "gr") {
        return gr_flag(format, className);
    }
    return undefined;
}
export default gr_flag;
