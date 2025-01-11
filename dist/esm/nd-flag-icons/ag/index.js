import { ag_flag_1x1 } from "./ag-flag-1x1";
import { ag_flag_4x3 } from "./ag-flag-4x3";
export function ag_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => ag_flag_1x1(props, className);
        case "4x3":
            return (props) => ag_flag_4x3(props, className);
    }
    return undefined;
}
export function ag_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "ag") {
        return ag_flag(format, className);
    }
    return undefined;
}
export default ag_flag;
