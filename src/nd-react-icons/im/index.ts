import type {IconType} from "react-icons";
import { nameToReactIcon_im_0 } from "./name-to-react-icon-im-0";

export async function nameToReactIcon_im(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_im_0(iconName) ||
        undefined
    );

}