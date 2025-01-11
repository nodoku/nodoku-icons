import { tk_flag_1x1 } from "./tk-flag-1x1";
import { tk_flag_4x3 } from "./tk-flag-4x3";
export function tk_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => tk_flag_1x1(props, className);
        case "4x3":
            return (props) => tk_flag_4x3(props, className);
    }
    return undefined;
}
export function tk_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "tk") {
        return tk_flag(format, className);
    }
    return undefined;
}
export default tk_flag;
