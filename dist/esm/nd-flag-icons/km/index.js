import { km_flag_1x1 } from "./km-flag-1x1";
import { km_flag_4x3 } from "./km-flag-4x3";
export function km_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => km_flag_1x1(props, className);
        case "4x3":
            return (props) => km_flag_4x3(props, className);
    }
    return undefined;
}
export function km_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "km") {
        return km_flag(format, className);
    }
    return undefined;
}
export default km_flag;
