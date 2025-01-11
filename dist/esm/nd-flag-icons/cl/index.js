import { cl_flag_1x1 } from "./cl-flag-1x1";
import { cl_flag_4x3 } from "./cl-flag-4x3";
export function cl_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => cl_flag_1x1(props, className);
        case "4x3":
            return (props) => cl_flag_4x3(props, className);
    }
    return undefined;
}
export function cl_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "cl") {
        return cl_flag(format, className);
    }
    return undefined;
}
export default cl_flag;
