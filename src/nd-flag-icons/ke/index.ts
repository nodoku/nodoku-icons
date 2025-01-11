import {IconType} from "react-icons";
import {IconBaseProps} from "react-icons";
import { ke_flag_1x1 } from "./ke-flag-1x1";
import { ke_flag_4x3 } from "./ke-flag-4x3";

export function ke_flag(format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {

    switch (format) {
        case "1x1":
            return (props: IconBaseProps) => ke_flag_1x1(props, className);
        case "4x3":
            return (props: IconBaseProps) => ke_flag_4x3(props, className);
    }

    return undefined;
}

export function ke_flag_nameToFlagIcon(iconName: string, format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }

    const countryCode = iconName.substring("nd-flag-icons/".length);

    if (countryCode === "ke") {
        return ke_flag(format, className)
    }

    return undefined;
}

export default ke_flag;