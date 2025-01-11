import { vc_flag_1x1 } from "./vc-flag-1x1";
import { vc_flag_4x3 } from "./vc-flag-4x3";
export function vc_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => vc_flag_1x1(props, className);
        case "4x3":
            return (props) => vc_flag_4x3(props, className);
    }
    return undefined;
}
export function vc_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "vc") {
        return vc_flag(format, className);
    }
    return undefined;
}
export default vc_flag;
