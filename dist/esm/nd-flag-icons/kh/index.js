import { kh_flag_1x1 } from "./kh-flag-1x1";
import { kh_flag_4x3 } from "./kh-flag-4x3";
export function kh_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => kh_flag_1x1(props, className);
        case "4x3":
            return (props) => kh_flag_4x3(props, className);
    }
    return undefined;
}
export function kh_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "kh") {
        return kh_flag(format, className);
    }
    return undefined;
}
export default kh_flag;
