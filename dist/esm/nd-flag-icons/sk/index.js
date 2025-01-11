import { sk_flag_1x1 } from "./sk-flag-1x1";
import { sk_flag_4x3 } from "./sk-flag-4x3";
export function sk_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => sk_flag_1x1(props, className);
        case "4x3":
            return (props) => sk_flag_4x3(props, className);
    }
    return undefined;
}
export function sk_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "sk") {
        return sk_flag(format, className);
    }
    return undefined;
}
export default sk_flag;
