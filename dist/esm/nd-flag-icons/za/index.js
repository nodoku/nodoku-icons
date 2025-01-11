import { za_flag_1x1 } from "./za-flag-1x1";
import { za_flag_4x3 } from "./za-flag-4x3";
export function za_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => za_flag_1x1(props, className);
        case "4x3":
            return (props) => za_flag_4x3(props, className);
    }
    return undefined;
}
export function za_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "za") {
        return za_flag(format, className);
    }
    return undefined;
}
export default za_flag;
