import { gn_flag_1x1 } from "./gn-flag-1x1";
import { gn_flag_4x3 } from "./gn-flag-4x3";
export function gn_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => gn_flag_1x1(props, className);
        case "4x3":
            return (props) => gn_flag_4x3(props, className);
    }
    return undefined;
}
export function gn_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "gn") {
        return gn_flag(format, className);
    }
    return undefined;
}
export default gn_flag;
