import { cu_flag_1x1 } from "./cu-flag-1x1";
import { cu_flag_4x3 } from "./cu-flag-4x3";
export function cu_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => cu_flag_1x1(props, className);
        case "4x3":
            return (props) => cu_flag_4x3(props, className);
    }
    return undefined;
}
export function cu_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "cu") {
        return cu_flag(format, className);
    }
    return undefined;
}
export default cu_flag;
