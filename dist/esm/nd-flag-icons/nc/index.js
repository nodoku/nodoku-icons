import { nc_flag_1x1 } from "./nc-flag-1x1";
import { nc_flag_4x3 } from "./nc-flag-4x3";
export function nc_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => nc_flag_1x1(props, className);
        case "4x3":
            return (props) => nc_flag_4x3(props, className);
    }
    return undefined;
}
export function nc_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "nc") {
        return nc_flag(format, className);
    }
    return undefined;
}
export default nc_flag;
