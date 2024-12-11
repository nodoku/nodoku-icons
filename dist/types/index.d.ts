import { JSX } from "react";
import { IconType } from "react-icons";
export declare namespace NodokuIcons {
    type nameToIcon = (iconName: string) => Promise<IconType | undefined>;
    type NdIconProps = {
        size: string;
    };
    function NdIconProvider(iconName: string, props: NdIconProps | undefined, nameToIconConverters: nameToIcon[]): Promise<JSX.Element | undefined>;
}
