import { JSX } from "react";
import { IconType } from "react-icons/lib";
export declare namespace NodokuIcons {
    type nameToIcon = (iconName: string) => IconType | undefined;
    type NdIconProps = {
        size: string;
    };
    function iconProvider(iconName: string, nameToIconConverters: nameToIcon[], props?: NdIconProps): JSX.Element | undefined;
    function iconTextPostProcessorFactory(nameToIconConverters: nameToIcon[]): (text: string) => string;
}
