import {IconType} from "react-icons";
import {IconBaseProps} from "react-icons";
import { ht_flag_1x1 } from "./ht-flag-1x1";
import { ht_flag_4x3 } from "./ht-flag-4x3";

export function ht_flag(format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {

    switch (format) {
        case "1x1":
            return (props: IconBaseProps) => ht_flag_1x1(props, className);
        case "4x3":
            return (props: IconBaseProps) => ht_flag_4x3(props, className);
    }

    return undefined;
}

export function ht_flag_nameToFlagIcon(iconName: string, format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }

    const countryCode = iconName.substring("nd-flag-icons/".length);

    if (countryCode === "ht") {
        return ht_flag(format, className)
    }

    return undefined;
}

export default ht_flag;