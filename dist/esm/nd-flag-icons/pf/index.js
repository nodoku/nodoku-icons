import { pf_flag_1x1 } from "./pf-flag-1x1";
import { pf_flag_4x3 } from "./pf-flag-4x3";
export function pf_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => pf_flag_1x1(props, className);
        case "4x3":
            return (props) => pf_flag_4x3(props, className);
    }
    return undefined;
}
export function pf_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "pf") {
        return pf_flag(format, className);
    }
    return undefined;
}
export default pf_flag;
