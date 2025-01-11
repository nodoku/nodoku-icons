import { cg_flag_1x1 } from "./cg-flag-1x1";
import { cg_flag_4x3 } from "./cg-flag-4x3";
export function cg_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => cg_flag_1x1(props, className);
        case "4x3":
            return (props) => cg_flag_4x3(props, className);
    }
    return undefined;
}
export function cg_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "cg") {
        return cg_flag(format, className);
    }
    return undefined;
}
export default cg_flag;
