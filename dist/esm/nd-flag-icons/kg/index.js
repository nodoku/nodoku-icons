import { kg_flag_1x1 } from "./kg-flag-1x1";
import { kg_flag_4x3 } from "./kg-flag-4x3";
export function kg_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => kg_flag_1x1(props, className);
        case "4x3":
            return (props) => kg_flag_4x3(props, className);
    }
    return undefined;
}
export function kg_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "kg") {
        return kg_flag(format, className);
    }
    return undefined;
}
export default kg_flag;
