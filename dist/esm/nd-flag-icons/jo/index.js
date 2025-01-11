import { jo_flag_1x1 } from "./jo-flag-1x1";
import { jo_flag_4x3 } from "./jo-flag-4x3";
export function jo_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => jo_flag_1x1(props, className);
        case "4x3":
            return (props) => jo_flag_4x3(props, className);
    }
    return undefined;
}
export function jo_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "jo") {
        return jo_flag(format, className);
    }
    return undefined;
}
export default jo_flag;
