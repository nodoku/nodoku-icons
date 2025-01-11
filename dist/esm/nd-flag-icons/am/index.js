import { am_flag_1x1 } from "./am-flag-1x1";
import { am_flag_4x3 } from "./am-flag-4x3";
export function am_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => am_flag_1x1(props, className);
        case "4x3":
            return (props) => am_flag_4x3(props, className);
    }
    return undefined;
}
export function am_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "am") {
        return am_flag(format, className);
    }
    return undefined;
}
export default am_flag;
