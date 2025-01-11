import { kp_flag_1x1 } from "./kp-flag-1x1";
import { kp_flag_4x3 } from "./kp-flag-4x3";
export function kp_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => kp_flag_1x1(props, className);
        case "4x3":
            return (props) => kp_flag_4x3(props, className);
    }
    return undefined;
}
export function kp_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "kp") {
        return kp_flag(format, className);
    }
    return undefined;
}
export default kp_flag;
