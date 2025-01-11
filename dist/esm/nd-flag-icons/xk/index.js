import { xk_flag_1x1 } from "./xk-flag-1x1";
import { xk_flag_4x3 } from "./xk-flag-4x3";
export function xk_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => xk_flag_1x1(props, className);
        case "4x3":
            return (props) => xk_flag_4x3(props, className);
    }
    return undefined;
}
export function xk_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "xk") {
        return xk_flag(format, className);
    }
    return undefined;
}
export default xk_flag;
