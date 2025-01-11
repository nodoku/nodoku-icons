import { ga_flag_1x1 } from "./ga-flag-1x1";
import { ga_flag_4x3 } from "./ga-flag-4x3";
export function ga_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => ga_flag_1x1(props, className);
        case "4x3":
            return (props) => ga_flag_4x3(props, className);
    }
    return undefined;
}
export function ga_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "ga") {
        return ga_flag(format, className);
    }
    return undefined;
}
export default ga_flag;
