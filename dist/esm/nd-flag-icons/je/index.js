import { je_flag_1x1 } from "./je-flag-1x1";
import { je_flag_4x3 } from "./je-flag-4x3";
export function je_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => je_flag_1x1(props, className);
        case "4x3":
            return (props) => je_flag_4x3(props, className);
    }
    return undefined;
}
export function je_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "je") {
        return je_flag(format, className);
    }
    return undefined;
}
export default je_flag;
