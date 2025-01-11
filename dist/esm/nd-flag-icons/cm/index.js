import { cm_flag_1x1 } from "./cm-flag-1x1";
import { cm_flag_4x3 } from "./cm-flag-4x3";
export function cm_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => cm_flag_1x1(props, className);
        case "4x3":
            return (props) => cm_flag_4x3(props, className);
    }
    return undefined;
}
export function cm_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "cm") {
        return cm_flag(format, className);
    }
    return undefined;
}
export default cm_flag;
