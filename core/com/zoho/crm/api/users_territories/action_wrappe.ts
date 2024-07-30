import {ActionHandler} from "./action_handler";
import {ActionResponse} from "./action_response";
import {Model} from "../../../../../../utils/util/model";

class ActionWrappe implements Model, ActionHandler{

	private transferAndDelink: Array<ActionResponse>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the transferAndDelink
	 * @returns An Array representing the transferAndDelink
	 */
	public getTransferAndDelink(): Array<ActionResponse>	{
		return this.transferAndDelink;

	}

	/**
	 * The method to set the value to transferAndDelink
	 * @param transferAndDelink An Array representing the transferAndDelink
	 */
	public setTransferAndDelink(transferAndDelink: Array<ActionResponse>): void	{
		this.transferAndDelink = transferAndDelink;
		this.keyModified.set("transfer_and_delink", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param key A String representing the key
	 * @returns A number representing the modification
	 */
	public isKeyModified(key: string): number | null | undefined	{
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param key A String representing the key
	 * @param modification A number representing the modification
	 */
	public setKeyModified(key: string, modification: number): void	{
		this.keyModified.set(key, modification);

	}

}
export {
	ActionWrappe as MasterModel,
	ActionWrappe as ActionWrappe
}
