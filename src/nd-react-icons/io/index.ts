import type {IconType} from "react-icons";
import { nameToReactIcon_io_0 } from "./name-to-react-icon-io-0";

export async function nameToReactIcon_io(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_io_0(iconName) ||
        undefined
    );

}