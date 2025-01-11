import { gs_flag_1x1 } from "./gs-flag-1x1";
import { gs_flag_4x3 } from "./gs-flag-4x3";
export function gs_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => gs_flag_1x1(props, className);
        case "4x3":
            return (props) => gs_flag_4x3(props, className);
    }
    return undefined;
}
export function gs_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "gs") {
        return gs_flag(format, className);
    }
    return undefined;
}
export default gs_flag;
