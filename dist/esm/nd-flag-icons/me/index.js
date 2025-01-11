import { me_flag_1x1 } from "./me-flag-1x1";
import { me_flag_4x3 } from "./me-flag-4x3";
export function me_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => me_flag_1x1(props, className);
        case "4x3":
            return (props) => me_flag_4x3(props, className);
    }
    return undefined;
}
export function me_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "me") {
        return me_flag(format, className);
    }
    return undefined;
}
export default me_flag;
