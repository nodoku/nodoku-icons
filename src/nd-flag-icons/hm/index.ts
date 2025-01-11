import {IconType} from "react-icons";
import {IconBaseProps} from "react-icons";
import { hm_flag_1x1 } from "./hm-flag-1x1";
import { hm_flag_4x3 } from "./hm-flag-4x3";

export function hm_flag(format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {

    switch (format) {
        case "1x1":
            return (props: IconBaseProps) => hm_flag_1x1(props, className);
        case "4x3":
            return (props: IconBaseProps) => hm_flag_4x3(props, className);
    }

    return undefined;
}

export function hm_flag_nameToFlagIcon(iconName: string, format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }

    const countryCode = iconName.substring("nd-flag-icons/".length);

    if (countryCode === "hm") {
        return hm_flag(format, className)
    }

    return undefined;
}

export default hm_flag;