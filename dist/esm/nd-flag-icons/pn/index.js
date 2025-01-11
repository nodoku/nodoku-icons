import { pn_flag_1x1 } from "./pn-flag-1x1";
import { pn_flag_4x3 } from "./pn-flag-4x3";
export function pn_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => pn_flag_1x1(props, className);
        case "4x3":
            return (props) => pn_flag_4x3(props, className);
    }
    return undefined;
}
export function pn_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "pn") {
        return pn_flag(format, className);
    }
    return undefined;
}
export default pn_flag;
