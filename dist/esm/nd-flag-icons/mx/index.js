import { mx_flag_1x1 } from "./mx-flag-1x1";
import { mx_flag_4x3 } from "./mx-flag-4x3";
export function mx_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => mx_flag_1x1(props, className);
        case "4x3":
            return (props) => mx_flag_4x3(props, className);
    }
    return undefined;
}
export function mx_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "mx") {
        return mx_flag(format, className);
    }
    return undefined;
}
export default mx_flag;
