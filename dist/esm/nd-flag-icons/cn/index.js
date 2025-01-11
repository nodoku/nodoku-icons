import { cn_flag_1x1 } from "./cn-flag-1x1";
import { cn_flag_4x3 } from "./cn-flag-4x3";
export function cn_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => cn_flag_1x1(props, className);
        case "4x3":
            return (props) => cn_flag_4x3(props, className);
    }
    return undefined;
}
export function cn_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "cn") {
        return cn_flag(format, className);
    }
    return undefined;
}
export default cn_flag;
