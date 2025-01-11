import { ht_flag_1x1 } from "./ht-flag-1x1";
import { ht_flag_4x3 } from "./ht-flag-4x3";
export function ht_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => ht_flag_1x1(props, className);
        case "4x3":
            return (props) => ht_flag_4x3(props, className);
    }
    return undefined;
}
export function ht_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "ht") {
        return ht_flag(format, className);
    }
    return undefined;
}
export default ht_flag;
