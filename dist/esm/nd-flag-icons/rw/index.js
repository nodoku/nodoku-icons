import { rw_flag_1x1 } from "./rw-flag-1x1";
import { rw_flag_4x3 } from "./rw-flag-4x3";
export function rw_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => rw_flag_1x1(props, className);
        case "4x3":
            return (props) => rw_flag_4x3(props, className);
    }
    return undefined;
}
export function rw_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "rw") {
        return rw_flag(format, className);
    }
    return undefined;
}
export default rw_flag;
