import { om_flag_1x1 } from "./om-flag-1x1";
import { om_flag_4x3 } from "./om-flag-4x3";
export function om_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => om_flag_1x1(props, className);
        case "4x3":
            return (props) => om_flag_4x3(props, className);
    }
    return undefined;
}
export function om_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "om") {
        return om_flag(format, className);
    }
    return undefined;
}
export default om_flag;
