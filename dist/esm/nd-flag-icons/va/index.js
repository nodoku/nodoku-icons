import { va_flag_1x1 } from "./va-flag-1x1";
import { va_flag_4x3 } from "./va-flag-4x3";
export function va_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => va_flag_1x1(props, className);
        case "4x3":
            return (props) => va_flag_4x3(props, className);
    }
    return undefined;
}
export function va_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "va") {
        return va_flag(format, className);
    }
    return undefined;
}
export default va_flag;
