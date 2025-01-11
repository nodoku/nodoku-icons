import { lr_flag_1x1 } from "./lr-flag-1x1";
import { lr_flag_4x3 } from "./lr-flag-4x3";
export function lr_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => lr_flag_1x1(props, className);
        case "4x3":
            return (props) => lr_flag_4x3(props, className);
    }
    return undefined;
}
export function lr_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "lr") {
        return lr_flag(format, className);
    }
    return undefined;
}
export default lr_flag;
