import { eac_flag_1x1 } from "./eac-flag-1x1";
import { eac_flag_4x3 } from "./eac-flag-4x3";
export function eac_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => eac_flag_1x1(props, className);
        case "4x3":
            return (props) => eac_flag_4x3(props, className);
    }
    return undefined;
}
export function eac_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "eac") {
        return eac_flag(format, className);
    }
    return undefined;
}
export default eac_flag;
