import {ValidationGroup} from "./validation_group";
import {Model} from "../../../../../../utils/util/model";

class Validation implements Model, ValidationGroup{

	private id: bigint;
	private name: string;
	private records: boolean;
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
	 * The method to get the name
	 * @returns A String representing the name
	 */
	public getName(): string	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param name A String representing the name
	 */
	public setName(name: string): void	{
		this.name = name;
		this.keyModified.set("Name", 1);

	}

	/**
	 * The method to get the records
	 * @returns A Boolean representing the records
	 */
	public getRecords(): boolean	{
		return this.records;

	}

	/**
	 * The method to set the value to records
	 * @param records A Boolean representing the records
	 */
	public setRecords(records: boolean): void	{
		this.records = records;
		this.keyModified.set("records", 1);

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
	Validation as MasterModel,
	Validation as Validation
}
