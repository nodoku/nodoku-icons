import { br_flag_1x1 } from "./br-flag-1x1";
import { br_flag_4x3 } from "./br-flag-4x3";
export function br_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => br_flag_1x1(props, className);
        case "4x3":
            return (props) => br_flag_4x3(props, className);
    }
    return undefined;
}
export function br_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "br") {
        return br_flag(format, className);
    }
    return undefined;
}
export default br_flag;
