import { sd_flag_1x1 } from "./sd-flag-1x1";
import { sd_flag_4x3 } from "./sd-flag-4x3";
export function sd_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => sd_flag_1x1(props, className);
        case "4x3":
            return (props) => sd_flag_4x3(props, className);
    }
    return undefined;
}
export function sd_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "sd") {
        return sd_flag(format, className);
    }
    return undefined;
}
export default sd_flag;
