import {IconType} from "react-icons";
import {IconBaseProps} from "react-icons";
import { mg_flag_1x1 } from "./mg-flag-1x1";
import { mg_flag_4x3 } from "./mg-flag-4x3";

export function mg_flag(format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {

    switch (format) {
        case "1x1":
            return (props: IconBaseProps) => mg_flag_1x1(props, className);
        case "4x3":
            return (props: IconBaseProps) => mg_flag_4x3(props, className);
    }

    return undefined;
}

export function mg_flag_nameToFlagIcon(iconName: string, format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }

    const countryCode = iconName.substring("nd-flag-icons/".length);

    if (countryCode === "mg") {
        return mg_flag(format, className)
    }

    return undefined;
}

export default mg_flag;