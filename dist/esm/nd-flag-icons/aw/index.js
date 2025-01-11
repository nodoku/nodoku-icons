import { aw_flag_1x1 } from "./aw-flag-1x1";
import { aw_flag_4x3 } from "./aw-flag-4x3";
export function aw_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => aw_flag_1x1(props, className);
        case "4x3":
            return (props) => aw_flag_4x3(props, className);
    }
    return undefined;
}
export function aw_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "aw") {
        return aw_flag(format, className);
    }
    return undefined;
}
export default aw_flag;
