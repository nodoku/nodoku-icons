import { as_flag_1x1 } from "./as-flag-1x1";
import { as_flag_4x3 } from "./as-flag-4x3";
export function as_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => as_flag_1x1(props, className);
        case "4x3":
            return (props) => as_flag_4x3(props, className);
    }
    return undefined;
}
export function as_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "as") {
        return as_flag(format, className);
    }
    return undefined;
}
export default as_flag;
