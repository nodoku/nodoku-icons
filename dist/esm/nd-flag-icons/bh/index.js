import { bh_flag_1x1 } from "./bh-flag-1x1";
import { bh_flag_4x3 } from "./bh-flag-4x3";
export function bh_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => bh_flag_1x1(props, className);
        case "4x3":
            return (props) => bh_flag_4x3(props, className);
    }
    return undefined;
}
export function bh_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "bh") {
        return bh_flag(format, className);
    }
    return undefined;
}
export default bh_flag;
