import { gy_flag_1x1 } from "./gy-flag-1x1";
import { gy_flag_4x3 } from "./gy-flag-4x3";
export function gy_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => gy_flag_1x1(props, className);
        case "4x3":
            return (props) => gy_flag_4x3(props, className);
    }
    return undefined;
}
export function gy_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "gy") {
        return gy_flag(format, className);
    }
    return undefined;
}
export default gy_flag;
