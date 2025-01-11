import { tr_flag_1x1 } from "./tr-flag-1x1";
import { tr_flag_4x3 } from "./tr-flag-4x3";
export function tr_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => tr_flag_1x1(props, className);
        case "4x3":
            return (props) => tr_flag_4x3(props, className);
    }
    return undefined;
}
export function tr_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "tr") {
        return tr_flag(format, className);
    }
    return undefined;
}
export default tr_flag;
