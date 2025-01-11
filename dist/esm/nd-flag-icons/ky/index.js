import { ky_flag_1x1 } from "./ky-flag-1x1";
import { ky_flag_4x3 } from "./ky-flag-4x3";
export function ky_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => ky_flag_1x1(props, className);
        case "4x3":
            return (props) => ky_flag_4x3(props, className);
    }
    return undefined;
}
export function ky_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "ky") {
        return ky_flag(format, className);
    }
    return undefined;
}
export default ky_flag;
