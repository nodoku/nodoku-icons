import { bf_flag_1x1 } from "./bf-flag-1x1";
import { bf_flag_4x3 } from "./bf-flag-4x3";
export function bf_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => bf_flag_1x1(props, className);
        case "4x3":
            return (props) => bf_flag_4x3(props, className);
    }
    return undefined;
}
export function bf_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "bf") {
        return bf_flag(format, className);
    }
    return undefined;
}
export default bf_flag;
