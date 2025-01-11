import { ge_flag_1x1 } from "./ge-flag-1x1";
import { ge_flag_4x3 } from "./ge-flag-4x3";
export function ge_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => ge_flag_1x1(props, className);
        case "4x3":
            return (props) => ge_flag_4x3(props, className);
    }
    return undefined;
}
export function ge_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "ge") {
        return ge_flag(format, className);
    }
    return undefined;
}
export default ge_flag;
