import { eu_flag_1x1 } from "./eu-flag-1x1";
import { eu_flag_4x3 } from "./eu-flag-4x3";
export function eu_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => eu_flag_1x1(props, className);
        case "4x3":
            return (props) => eu_flag_4x3(props, className);
    }
    return undefined;
}
export function eu_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "eu") {
        return eu_flag(format, className);
    }
    return undefined;
}
export default eu_flag;
