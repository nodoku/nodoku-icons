import { se_flag_1x1 } from "./se-flag-1x1";
import { se_flag_4x3 } from "./se-flag-4x3";
export function se_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => se_flag_1x1(props, className);
        case "4x3":
            return (props) => se_flag_4x3(props, className);
    }
    return undefined;
}
export function se_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "se") {
        return se_flag(format, className);
    }
    return undefined;
}
export default se_flag;
