import { ki_flag_1x1 } from "./ki-flag-1x1";
import { ki_flag_4x3 } from "./ki-flag-4x3";
export function ki_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => ki_flag_1x1(props, className);
        case "4x3":
            return (props) => ki_flag_4x3(props, className);
    }
    return undefined;
}
export function ki_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "ki") {
        return ki_flag(format, className);
    }
    return undefined;
}
export default ki_flag;
