import { ly_flag_1x1 } from "./ly-flag-1x1";
import { ly_flag_4x3 } from "./ly-flag-4x3";
export function ly_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => ly_flag_1x1(props, className);
        case "4x3":
            return (props) => ly_flag_4x3(props, className);
    }
    return undefined;
}
export function ly_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "ly") {
        return ly_flag(format, className);
    }
    return undefined;
}
export default ly_flag;
