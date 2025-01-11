import { dg_flag_1x1 } from "./dg-flag-1x1";
import { dg_flag_4x3 } from "./dg-flag-4x3";
export function dg_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => dg_flag_1x1(props, className);
        case "4x3":
            return (props) => dg_flag_4x3(props, className);
    }
    return undefined;
}
export function dg_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "dg") {
        return dg_flag(format, className);
    }
    return undefined;
}
export default dg_flag;
