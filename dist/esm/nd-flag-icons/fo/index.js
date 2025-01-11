import { fo_flag_1x1 } from "./fo-flag-1x1";
import { fo_flag_4x3 } from "./fo-flag-4x3";
export function fo_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => fo_flag_1x1(props, className);
        case "4x3":
            return (props) => fo_flag_4x3(props, className);
    }
    return undefined;
}
export function fo_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "fo") {
        return fo_flag(format, className);
    }
    return undefined;
}
export default fo_flag;
