import { tn_flag_1x1 } from "./tn-flag-1x1";
import { tn_flag_4x3 } from "./tn-flag-4x3";
export function tn_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => tn_flag_1x1(props, className);
        case "4x3":
            return (props) => tn_flag_4x3(props, className);
    }
    return undefined;
}
export function tn_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "tn") {
        return tn_flag(format, className);
    }
    return undefined;
}
export default tn_flag;
