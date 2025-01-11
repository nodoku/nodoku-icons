import { tt_flag_1x1 } from "./tt-flag-1x1";
import { tt_flag_4x3 } from "./tt-flag-4x3";
export function tt_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => tt_flag_1x1(props, className);
        case "4x3":
            return (props) => tt_flag_4x3(props, className);
    }
    return undefined;
}
export function tt_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "tt") {
        return tt_flag(format, className);
    }
    return undefined;
}
export default tt_flag;
