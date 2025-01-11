import { gb_wls_flag_1x1 } from "./gb-wls-flag-1x1";
import { gb_wls_flag_4x3 } from "./gb-wls-flag-4x3";
export function gb_wls_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => gb_wls_flag_1x1(props, className);
        case "4x3":
            return (props) => gb_wls_flag_4x3(props, className);
    }
    return undefined;
}
export function gb_wls_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "gb_wls") {
        return gb_wls_flag(format, className);
    }
    return undefined;
}
export default gb_wls_flag;
