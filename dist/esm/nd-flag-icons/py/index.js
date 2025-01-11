import { py_flag_1x1 } from "./py-flag-1x1";
import { py_flag_4x3 } from "./py-flag-4x3";
export function py_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => py_flag_1x1(props, className);
        case "4x3":
            return (props) => py_flag_4x3(props, className);
    }
    return undefined;
}
export function py_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "py") {
        return py_flag(format, className);
    }
    return undefined;
}
export default py_flag;
