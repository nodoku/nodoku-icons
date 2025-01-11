import { cy_flag_1x1 } from "./cy-flag-1x1";
import { cy_flag_4x3 } from "./cy-flag-4x3";
export function cy_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => cy_flag_1x1(props, className);
        case "4x3":
            return (props) => cy_flag_4x3(props, className);
    }
    return undefined;
}
export function cy_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "cy") {
        return cy_flag(format, className);
    }
    return undefined;
}
export default cy_flag;
