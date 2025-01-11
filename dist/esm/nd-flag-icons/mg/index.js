import { mg_flag_1x1 } from "./mg-flag-1x1";
import { mg_flag_4x3 } from "./mg-flag-4x3";
export function mg_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => mg_flag_1x1(props, className);
        case "4x3":
            return (props) => mg_flag_4x3(props, className);
    }
    return undefined;
}
export function mg_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "mg") {
        return mg_flag(format, className);
    }
    return undefined;
}
export default mg_flag;
