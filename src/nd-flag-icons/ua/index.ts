import {IconType} from "react-icons";
import {IconBaseProps} from "react-icons";
import { ua_flag_1x1 } from "./ua-flag-1x1";
import { ua_flag_4x3 } from "./ua-flag-4x3";

export function ua_flag(format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {

    switch (format) {
        case "1x1":
            return (props: IconBaseProps) => ua_flag_1x1(props, className);
        case "4x3":
            return (props: IconBaseProps) => ua_flag_4x3(props, className);
    }

    return undefined;
}

export function ua_flag_nameToFlagIcon(iconName: string, format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }

    const countryCode = iconName.substring("nd-flag-icons/".length);

    if (countryCode === "ua") {
        return ua_flag(format, className)
    }

    return undefined;
}

export default ua_flag;