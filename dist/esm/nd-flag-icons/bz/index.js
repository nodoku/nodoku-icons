import { bz_flag_1x1 } from "./bz-flag-1x1";
import { bz_flag_4x3 } from "./bz-flag-4x3";
export function bz_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => bz_flag_1x1(props, className);
        case "4x3":
            return (props) => bz_flag_4x3(props, className);
    }
    return undefined;
}
export function bz_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "bz") {
        return bz_flag(format, className);
    }
    return undefined;
}
export default bz_flag;
