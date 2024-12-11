import type {IconType} from "react-icons";
import { nameToReactIcon_ai_0 } from "./name-to-react-icon-ai-0";

export async function nameToReactIcon_ai(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_ai_0(iconName) ||
        undefined
    );

}