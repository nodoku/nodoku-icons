import { pa_flag_1x1 } from "./pa-flag-1x1";
import { pa_flag_4x3 } from "./pa-flag-4x3";
export function pa_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => pa_flag_1x1(props, className);
        case "4x3":
            return (props) => pa_flag_4x3(props, className);
    }
    return undefined;
}
export function pa_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "pa") {
        return pa_flag(format, className);
    }
    return undefined;
}
export default pa_flag;
