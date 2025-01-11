import { sz_flag_1x1 } from "./sz-flag-1x1";
import { sz_flag_4x3 } from "./sz-flag-4x3";
export function sz_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => sz_flag_1x1(props, className);
        case "4x3":
            return (props) => sz_flag_4x3(props, className);
    }
    return undefined;
}
export function sz_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "sz") {
        return sz_flag(format, className);
    }
    return undefined;
}
export default sz_flag;
