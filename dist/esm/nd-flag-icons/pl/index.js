import { pl_flag_1x1 } from "./pl-flag-1x1";
import { pl_flag_4x3 } from "./pl-flag-4x3";
export function pl_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => pl_flag_1x1(props, className);
        case "4x3":
            return (props) => pl_flag_4x3(props, className);
    }
    return undefined;
}
export function pl_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "pl") {
        return pl_flag(format, className);
    }
    return undefined;
}
export default pl_flag;
