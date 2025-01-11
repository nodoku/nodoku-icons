import { mc_flag_1x1 } from "./mc-flag-1x1";
import { mc_flag_4x3 } from "./mc-flag-4x3";
export function mc_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => mc_flag_1x1(props, className);
        case "4x3":
            return (props) => mc_flag_4x3(props, className);
    }
    return undefined;
}
export function mc_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "mc") {
        return mc_flag(format, className);
    }
    return undefined;
}
export default mc_flag;
