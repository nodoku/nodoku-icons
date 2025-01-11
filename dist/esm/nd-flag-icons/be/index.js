import { be_flag_1x1 } from "./be-flag-1x1";
import { be_flag_4x3 } from "./be-flag-4x3";
export function be_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => be_flag_1x1(props, className);
        case "4x3":
            return (props) => be_flag_4x3(props, className);
    }
    return undefined;
}
export function be_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "be") {
        return be_flag(format, className);
    }
    return undefined;
}
export default be_flag;
