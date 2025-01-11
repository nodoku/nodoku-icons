import { dk_flag_1x1 } from "./dk-flag-1x1";
import { dk_flag_4x3 } from "./dk-flag-4x3";
export function dk_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => dk_flag_1x1(props, className);
        case "4x3":
            return (props) => dk_flag_4x3(props, className);
    }
    return undefined;
}
export function dk_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "dk") {
        return dk_flag(format, className);
    }
    return undefined;
}
export default dk_flag;
