import {IconType} from "react-icons";
import {IconBaseProps} from "react-icons";
import { kz_flag_1x1 } from "./kz-flag-1x1";
import { kz_flag_4x3 } from "./kz-flag-4x3";

export function kz_flag(format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {

    switch (format) {
        case "1x1":
            return (props: IconBaseProps) => kz_flag_1x1(props, className);
        case "4x3":
            return (props: IconBaseProps) => kz_flag_4x3(props, className);
    }

    return undefined;
}

export function kz_flag_nameToFlagIcon(iconName: string, format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }

    const countryCode = iconName.substring("nd-flag-icons/".length);

    if (countryCode === "kz") {
        return kz_flag(format, className)
    }

    return undefined;
}

export default kz_flag;