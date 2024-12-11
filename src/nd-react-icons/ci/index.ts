import type {IconType} from "react-icons";
import { nameToReactIcon_ci_0 } from "./name-to-react-icon-ci-0";

export async function nameToReactIcon_ci(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_ci_0(iconName) ||
        undefined
    );

}