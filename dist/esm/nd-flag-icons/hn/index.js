import { hn_flag_1x1 } from "./hn-flag-1x1";
import { hn_flag_4x3 } from "./hn-flag-4x3";
export function hn_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => hn_flag_1x1(props, className);
        case "4x3":
            return (props) => hn_flag_4x3(props, className);
    }
    return undefined;
}
export function hn_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "hn") {
        return hn_flag(format, className);
    }
    return undefined;
}
export default hn_flag;
