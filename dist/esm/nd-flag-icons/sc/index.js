import { sc_flag_1x1 } from "./sc-flag-1x1";
import { sc_flag_4x3 } from "./sc-flag-4x3";
export function sc_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => sc_flag_1x1(props, className);
        case "4x3":
            return (props) => sc_flag_4x3(props, className);
    }
    return undefined;
}
export function sc_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "sc") {
        return sc_flag(format, className);
    }
    return undefined;
}
export default sc_flag;
