import {TransferToUser} from "./transfer_to_user";
import {Model} from "../../../../../../utils/util/model";

class TransferAndDelink implements Model{

	private id: bigint;
	private transferToUser: TransferToUser;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the id
	 * @returns A BigInt representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A BigInt representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the transferToUser
	 * @returns An instance of TransferToUser
	 */
	public getTransferToUser(): TransferToUser	{
		return this.transferToUser;

	}

	/**
	 * The method to set the value to transferToUser
	 * @param transferToUser An instance of TransferToUser
	 */
	public setTransferToUser(transferToUser: TransferToUser): void	{
		this.transferToUser = transferToUser;
		this.keyModified.set("transfer_to_user", 1);

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
	TransferAndDelink as MasterModel,
	TransferAndDelink as TransferAndDelink
}
