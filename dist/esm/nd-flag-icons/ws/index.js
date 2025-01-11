import { ws_flag_1x1 } from "./ws-flag-1x1";
import { ws_flag_4x3 } from "./ws-flag-4x3";
export function ws_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => ws_flag_1x1(props, className);
        case "4x3":
            return (props) => ws_flag_4x3(props, className);
    }
    return undefined;
}
export function ws_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "ws") {
        return ws_flag(format, className);
    }
    return undefined;
}
export default ws_flag;
