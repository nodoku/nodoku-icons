import { ne_flag_1x1 } from "./ne-flag-1x1";
import { ne_flag_4x3 } from "./ne-flag-4x3";
export function ne_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => ne_flag_1x1(props, className);
        case "4x3":
            return (props) => ne_flag_4x3(props, className);
    }
    return undefined;
}
export function ne_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "ne") {
        return ne_flag(format, className);
    }
    return undefined;
}
export default ne_flag;
