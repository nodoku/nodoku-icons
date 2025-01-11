import { it_flag_1x1 } from "./it-flag-1x1";
import { it_flag_4x3 } from "./it-flag-4x3";
export function it_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => it_flag_1x1(props, className);
        case "4x3":
            return (props) => it_flag_4x3(props, className);
    }
    return undefined;
}
export function it_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "it") {
        return it_flag(format, className);
    }
    return undefined;
}
export default it_flag;
