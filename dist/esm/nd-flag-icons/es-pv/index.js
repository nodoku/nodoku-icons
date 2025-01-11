import { es_pv_flag_1x1 } from "./es-pv-flag-1x1";
import { es_pv_flag_4x3 } from "./es-pv-flag-4x3";
export function es_pv_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => es_pv_flag_1x1(props, className);
        case "4x3":
            return (props) => es_pv_flag_4x3(props, className);
    }
    return undefined;
}
export function es_pv_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "es_pv") {
        return es_pv_flag(format, className);
    }
    return undefined;
}
export default es_pv_flag;
