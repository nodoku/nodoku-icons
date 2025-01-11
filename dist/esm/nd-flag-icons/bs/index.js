import { bs_flag_1x1 } from "./bs-flag-1x1";
import { bs_flag_4x3 } from "./bs-flag-4x3";
export function bs_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => bs_flag_1x1(props, className);
        case "4x3":
            return (props) => bs_flag_4x3(props, className);
    }
    return undefined;
}
export function bs_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "bs") {
        return bs_flag(format, className);
    }
    return undefined;
}
export default bs_flag;
