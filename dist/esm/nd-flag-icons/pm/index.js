import { pm_flag_1x1 } from "./pm-flag-1x1";
import { pm_flag_4x3 } from "./pm-flag-4x3";
export function pm_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => pm_flag_1x1(props, className);
        case "4x3":
            return (props) => pm_flag_4x3(props, className);
    }
    return undefined;
}
export function pm_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "pm") {
        return pm_flag(format, className);
    }
    return undefined;
}
export default pm_flag;
