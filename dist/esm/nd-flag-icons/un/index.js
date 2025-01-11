import { un_flag_1x1 } from "./un-flag-1x1";
import { un_flag_4x3 } from "./un-flag-4x3";
export function un_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => un_flag_1x1(props, className);
        case "4x3":
            return (props) => un_flag_4x3(props, className);
    }
    return undefined;
}
export function un_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "un") {
        return un_flag(format, className);
    }
    return undefined;
}
export default un_flag;
