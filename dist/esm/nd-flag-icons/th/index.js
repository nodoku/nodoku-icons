import { th_flag_1x1 } from "./th-flag-1x1";
import { th_flag_4x3 } from "./th-flag-4x3";
export function th_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => th_flag_1x1(props, className);
        case "4x3":
            return (props) => th_flag_4x3(props, className);
    }
    return undefined;
}
export function th_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "th") {
        return th_flag(format, className);
    }
    return undefined;
}
export default th_flag;
