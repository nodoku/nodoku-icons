import { na_flag_1x1 } from "./na-flag-1x1";
import { na_flag_4x3 } from "./na-flag-4x3";
export function na_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => na_flag_1x1(props, className);
        case "4x3":
            return (props) => na_flag_4x3(props, className);
    }
    return undefined;
}
export function na_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "na") {
        return na_flag(format, className);
    }
    return undefined;
}
export default na_flag;
