import { nf_flag_1x1 } from "./nf-flag-1x1";
import { nf_flag_4x3 } from "./nf-flag-4x3";
export function nf_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => nf_flag_1x1(props, className);
        case "4x3":
            return (props) => nf_flag_4x3(props, className);
    }
    return undefined;
}
export function nf_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "nf") {
        return nf_flag(format, className);
    }
    return undefined;
}
export default nf_flag;
