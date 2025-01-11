import { ke_flag_1x1 } from "./ke-flag-1x1";
import { ke_flag_4x3 } from "./ke-flag-4x3";
export function ke_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => ke_flag_1x1(props, className);
        case "4x3":
            return (props) => ke_flag_4x3(props, className);
    }
    return undefined;
}
export function ke_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "ke") {
        return ke_flag(format, className);
    }
    return undefined;
}
export default ke_flag;
