import { np_flag_1x1 } from "./np-flag-1x1";
import { np_flag_4x3 } from "./np-flag-4x3";
export function np_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => np_flag_1x1(props, className);
        case "4x3":
            return (props) => np_flag_4x3(props, className);
    }
    return undefined;
}
export function np_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "np") {
        return np_flag(format, className);
    }
    return undefined;
}
export default np_flag;
