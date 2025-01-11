import { lt_flag_1x1 } from "./lt-flag-1x1";
import { lt_flag_4x3 } from "./lt-flag-4x3";
export function lt_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => lt_flag_1x1(props, className);
        case "4x3":
            return (props) => lt_flag_4x3(props, className);
    }
    return undefined;
}
export function lt_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "lt") {
        return lt_flag(format, className);
    }
    return undefined;
}
export default lt_flag;
