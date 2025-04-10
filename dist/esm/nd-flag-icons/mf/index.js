import { mf_flag_1x1 } from "./mf-flag-1x1";
import { mf_flag_4x3 } from "./mf-flag-4x3";
export function mf_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => mf_flag_1x1(props, className);
        case "4x3":
            return (props) => mf_flag_4x3(props, className);
    }
    return undefined;
}
export function mf_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "mf") {
        return mf_flag(format, className);
    }
    return undefined;
}
export default mf_flag;
