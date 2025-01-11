import { si_flag_1x1 } from "./si-flag-1x1";
import { si_flag_4x3 } from "./si-flag-4x3";
export function si_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => si_flag_1x1(props, className);
        case "4x3":
            return (props) => si_flag_4x3(props, className);
    }
    return undefined;
}
export function si_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "si") {
        return si_flag(format, className);
    }
    return undefined;
}
export default si_flag;
