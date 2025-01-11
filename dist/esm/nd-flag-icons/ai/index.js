import { ai_flag_1x1 } from "./ai-flag-1x1";
import { ai_flag_4x3 } from "./ai-flag-4x3";
export function ai_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => ai_flag_1x1(props, className);
        case "4x3":
            return (props) => ai_flag_4x3(props, className);
    }
    return undefined;
}
export function ai_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "ai") {
        return ai_flag(format, className);
    }
    return undefined;
}
export default ai_flag;
