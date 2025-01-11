import { mm_flag_1x1 } from "./mm-flag-1x1";
import { mm_flag_4x3 } from "./mm-flag-4x3";
export function mm_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => mm_flag_1x1(props, className);
        case "4x3":
            return (props) => mm_flag_4x3(props, className);
    }
    return undefined;
}
export function mm_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "mm") {
        return mm_flag(format, className);
    }
    return undefined;
}
export default mm_flag;
