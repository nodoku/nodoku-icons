import { er_flag_1x1 } from "./er-flag-1x1";
import { er_flag_4x3 } from "./er-flag-4x3";
export function er_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => er_flag_1x1(props, className);
        case "4x3":
            return (props) => er_flag_4x3(props, className);
    }
    return undefined;
}
export function er_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "er") {
        return er_flag(format, className);
    }
    return undefined;
}
export default er_flag;
