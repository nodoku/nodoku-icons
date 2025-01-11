import { dz_flag_1x1 } from "./dz-flag-1x1";
import { dz_flag_4x3 } from "./dz-flag-4x3";
export function dz_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => dz_flag_1x1(props, className);
        case "4x3":
            return (props) => dz_flag_4x3(props, className);
    }
    return undefined;
}
export function dz_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "dz") {
        return dz_flag(format, className);
    }
    return undefined;
}
export default dz_flag;
