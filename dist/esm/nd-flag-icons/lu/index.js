import { lu_flag_1x1 } from "./lu-flag-1x1";
import { lu_flag_4x3 } from "./lu-flag-4x3";
export function lu_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => lu_flag_1x1(props, className);
        case "4x3":
            return (props) => lu_flag_4x3(props, className);
    }
    return undefined;
}
export function lu_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "lu") {
        return lu_flag(format, className);
    }
    return undefined;
}
export default lu_flag;
