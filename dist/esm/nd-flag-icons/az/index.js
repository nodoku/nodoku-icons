import { az_flag_1x1 } from "./az-flag-1x1";
import { az_flag_4x3 } from "./az-flag-4x3";
export function az_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => az_flag_1x1(props, className);
        case "4x3":
            return (props) => az_flag_4x3(props, className);
    }
    return undefined;
}
export function az_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "az") {
        return az_flag(format, className);
    }
    return undefined;
}
export default az_flag;
