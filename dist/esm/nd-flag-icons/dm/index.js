import { dm_flag_1x1 } from "./dm-flag-1x1";
import { dm_flag_4x3 } from "./dm-flag-4x3";
export function dm_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => dm_flag_1x1(props, className);
        case "4x3":
            return (props) => dm_flag_4x3(props, className);
    }
    return undefined;
}
export function dm_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "dm") {
        return dm_flag(format, className);
    }
    return undefined;
}
export default dm_flag;
