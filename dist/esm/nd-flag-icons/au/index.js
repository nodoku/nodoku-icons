import { au_flag_1x1 } from "./au-flag-1x1";
import { au_flag_4x3 } from "./au-flag-4x3";
export function au_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => au_flag_1x1(props, className);
        case "4x3":
            return (props) => au_flag_4x3(props, className);
    }
    return undefined;
}
export function au_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "au") {
        return au_flag(format, className);
    }
    return undefined;
}
export default au_flag;
