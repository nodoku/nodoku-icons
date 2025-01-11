import { ro_flag_1x1 } from "./ro-flag-1x1";
import { ro_flag_4x3 } from "./ro-flag-4x3";
export function ro_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => ro_flag_1x1(props, className);
        case "4x3":
            return (props) => ro_flag_4x3(props, className);
    }
    return undefined;
}
export function ro_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "ro") {
        return ro_flag(format, className);
    }
    return undefined;
}
export default ro_flag;
