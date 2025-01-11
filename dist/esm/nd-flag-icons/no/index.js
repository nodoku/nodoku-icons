import { no_flag_1x1 } from "./no-flag-1x1";
import { no_flag_4x3 } from "./no-flag-4x3";
export function no_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => no_flag_1x1(props, className);
        case "4x3":
            return (props) => no_flag_4x3(props, className);
    }
    return undefined;
}
export function no_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "no") {
        return no_flag(format, className);
    }
    return undefined;
}
export default no_flag;
