import { mo_flag_1x1 } from "./mo-flag-1x1";
import { mo_flag_4x3 } from "./mo-flag-4x3";
export function mo_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => mo_flag_1x1(props, className);
        case "4x3":
            return (props) => mo_flag_4x3(props, className);
    }
    return undefined;
}
export function mo_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "mo") {
        return mo_flag(format, className);
    }
    return undefined;
}
export default mo_flag;
