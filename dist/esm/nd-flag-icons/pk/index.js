import { pk_flag_1x1 } from "./pk-flag-1x1";
import { pk_flag_4x3 } from "./pk-flag-4x3";
export function pk_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => pk_flag_1x1(props, className);
        case "4x3":
            return (props) => pk_flag_4x3(props, className);
    }
    return undefined;
}
export function pk_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "pk") {
        return pk_flag(format, className);
    }
    return undefined;
}
export default pk_flag;
