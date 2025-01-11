import { st_flag_1x1 } from "./st-flag-1x1";
import { st_flag_4x3 } from "./st-flag-4x3";
export function st_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => st_flag_1x1(props, className);
        case "4x3":
            return (props) => st_flag_4x3(props, className);
    }
    return undefined;
}
export function st_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "st") {
        return st_flag(format, className);
    }
    return undefined;
}
export default st_flag;
