import {Model} from "../../../../../../utils/util/model";

class Suggestion implements Model{

	private available: boolean;
	private type: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the available
	 * @returns A Boolean representing the available
	 */
	public getAvailable(): boolean	{
		return this.available;

	}

	/**
	 * The method to set the value to available
	 * @param available A Boolean representing the available
	 */
	public setAvailable(available: boolean): void	{
		this.available = available;
		this.keyModified.set("available", 1);

	}

	/**
	 * The method to get the type
	 * @returns A String representing the type
	 */
	public getType(): string	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type A String representing the type
	 */
	public setType(type: string): void	{
		this.type = type;
		this.keyModified.set("type", 1);

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
	Suggestion as MasterModel,
	Suggestion as Suggestion
}
