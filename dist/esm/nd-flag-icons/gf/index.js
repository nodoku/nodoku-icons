import { gf_flag_1x1 } from "./gf-flag-1x1";
import { gf_flag_4x3 } from "./gf-flag-4x3";
export function gf_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => gf_flag_1x1(props, className);
        case "4x3":
            return (props) => gf_flag_4x3(props, className);
    }
    return undefined;
}
export function gf_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "gf") {
        return gf_flag(format, className);
    }
    return undefined;
}
export default gf_flag;
