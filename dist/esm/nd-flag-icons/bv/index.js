import { bv_flag_1x1 } from "./bv-flag-1x1";
import { bv_flag_4x3 } from "./bv-flag-4x3";
export function bv_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => bv_flag_1x1(props, className);
        case "4x3":
            return (props) => bv_flag_4x3(props, className);
    }
    return undefined;
}
export function bv_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "bv") {
        return bv_flag(format, className);
    }
    return undefined;
}
export default bv_flag;
