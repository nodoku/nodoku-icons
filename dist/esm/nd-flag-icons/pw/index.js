import { pw_flag_1x1 } from "./pw-flag-1x1";
import { pw_flag_4x3 } from "./pw-flag-4x3";
export function pw_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => pw_flag_1x1(props, className);
        case "4x3":
            return (props) => pw_flag_4x3(props, className);
    }
    return undefined;
}
export function pw_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "pw") {
        return pw_flag(format, className);
    }
    return undefined;
}
export default pw_flag;
