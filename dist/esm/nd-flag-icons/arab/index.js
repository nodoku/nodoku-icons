import { arab_flag_1x1 } from "./arab-flag-1x1";
import { arab_flag_4x3 } from "./arab-flag-4x3";
export function arab_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => arab_flag_1x1(props, className);
        case "4x3":
            return (props) => arab_flag_4x3(props, className);
    }
    return undefined;
}
export function arab_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "arab") {
        return arab_flag(format, className);
    }
    return undefined;
}
export default arab_flag;
