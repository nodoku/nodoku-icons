import { bo_flag_1x1 } from "./bo-flag-1x1";
import { bo_flag_4x3 } from "./bo-flag-4x3";
export function bo_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => bo_flag_1x1(props, className);
        case "4x3":
            return (props) => bo_flag_4x3(props, className);
    }
    return undefined;
}
export function bo_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "bo") {
        return bo_flag(format, className);
    }
    return undefined;
}
export default bo_flag;
