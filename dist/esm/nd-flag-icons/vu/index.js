import { vu_flag_1x1 } from "./vu-flag-1x1";
import { vu_flag_4x3 } from "./vu-flag-4x3";
export function vu_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => vu_flag_1x1(props, className);
        case "4x3":
            return (props) => vu_flag_4x3(props, className);
    }
    return undefined;
}
export function vu_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "vu") {
        return vu_flag(format, className);
    }
    return undefined;
}
export default vu_flag;
