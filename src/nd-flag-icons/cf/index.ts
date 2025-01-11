import {IconType} from "react-icons";
import {IconBaseProps} from "react-icons";
import { cf_flag_1x1 } from "./cf-flag-1x1";
import { cf_flag_4x3 } from "./cf-flag-4x3";

export function cf_flag(format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {

    switch (format) {
        case "1x1":
            return (props: IconBaseProps) => cf_flag_1x1(props, className);
        case "4x3":
            return (props: IconBaseProps) => cf_flag_4x3(props, className);
    }

    return undefined;
}

export function cf_flag_nameToFlagIcon(iconName: string, format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }

    const countryCode = iconName.substring("nd-flag-icons/".length);

    if (countryCode === "cf") {
        return cf_flag(format, className)
    }

    return undefined;
}

export default cf_flag;