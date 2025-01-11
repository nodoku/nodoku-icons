import { es_ga_flag_1x1 } from "./es-ga-flag-1x1";
import { es_ga_flag_4x3 } from "./es-ga-flag-4x3";
export function es_ga_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => es_ga_flag_1x1(props, className);
        case "4x3":
            return (props) => es_ga_flag_4x3(props, className);
    }
    return undefined;
}
export function es_ga_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "es_ga") {
        return es_ga_flag(format, className);
    }
    return undefined;
}
export default es_ga_flag;
