import { bj_flag_1x1 } from "./bj-flag-1x1";
import { bj_flag_4x3 } from "./bj-flag-4x3";
export function bj_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => bj_flag_1x1(props, className);
        case "4x3":
            return (props) => bj_flag_4x3(props, className);
    }
    return undefined;
}
export function bj_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "bj") {
        return bj_flag(format, className);
    }
    return undefined;
}
export default bj_flag;
