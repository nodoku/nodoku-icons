import { al_flag_1x1 } from "./al-flag-1x1";
import { al_flag_4x3 } from "./al-flag-4x3";
export function al_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => al_flag_1x1(props, className);
        case "4x3":
            return (props) => al_flag_4x3(props, className);
    }
    return undefined;
}
export function al_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "al") {
        return al_flag(format, className);
    }
    return undefined;
}
export default al_flag;
