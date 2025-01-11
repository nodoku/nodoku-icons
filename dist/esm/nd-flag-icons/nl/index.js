import { nl_flag_1x1 } from "./nl-flag-1x1";
import { nl_flag_4x3 } from "./nl-flag-4x3";
export function nl_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => nl_flag_1x1(props, className);
        case "4x3":
            return (props) => nl_flag_4x3(props, className);
    }
    return undefined;
}
export function nl_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "nl") {
        return nl_flag(format, className);
    }
    return undefined;
}
export default nl_flag;
