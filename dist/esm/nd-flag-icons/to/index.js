import { to_flag_1x1 } from "./to-flag-1x1";
import { to_flag_4x3 } from "./to-flag-4x3";
export function to_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => to_flag_1x1(props, className);
        case "4x3":
            return (props) => to_flag_4x3(props, className);
    }
    return undefined;
}
export function to_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "to") {
        return to_flag(format, className);
    }
    return undefined;
}
export default to_flag;
