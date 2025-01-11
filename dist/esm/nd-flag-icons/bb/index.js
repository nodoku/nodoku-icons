import { bb_flag_1x1 } from "./bb-flag-1x1";
import { bb_flag_4x3 } from "./bb-flag-4x3";
export function bb_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => bb_flag_1x1(props, className);
        case "4x3":
            return (props) => bb_flag_4x3(props, className);
    }
    return undefined;
}
export function bb_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "bb") {
        return bb_flag(format, className);
    }
    return undefined;
}
export default bb_flag;
