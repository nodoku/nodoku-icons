import {IconType} from "react-icons";
import {IconBaseProps} from "react-icons";
import { ch_flag_1x1 } from "./ch-flag-1x1";
import { ch_flag_4x3 } from "./ch-flag-4x3";

export function ch_flag(format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {

    switch (format) {
        case "1x1":
            return (props: IconBaseProps) => ch_flag_1x1(props, className);
        case "4x3":
            return (props: IconBaseProps) => ch_flag_4x3(props, className);
    }

    return undefined;
}

export function ch_flag_nameToFlagIcon(iconName: string, format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }

    const countryCode = iconName.substring("nd-flag-icons/".length);

    if (countryCode === "ch") {
        return ch_flag(format, className)
    }

    return undefined;
}

export default ch_flag;