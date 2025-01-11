import { tz_flag_1x1 } from "./tz-flag-1x1";
import { tz_flag_4x3 } from "./tz-flag-4x3";
export function tz_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => tz_flag_1x1(props, className);
        case "4x3":
            return (props) => tz_flag_4x3(props, className);
    }
    return undefined;
}
export function tz_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "tz") {
        return tz_flag(format, className);
    }
    return undefined;
}
export default tz_flag;
