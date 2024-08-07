import {Model} from "../../../../../../utils/util/model";

class ExecuteEvery implements Model{

	private unit: number;
	private period: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the unit
	 * @returns A number representing the unit
	 */
	public getUnit(): number	{
		return this.unit;

	}

	/**
	 * The method to set the value to unit
	 * @param unit A number representing the unit
	 */
	public setUnit(unit: number): void	{
		this.unit = unit;
		this.keyModified.set("unit", 1);

	}

	/**
	 * The method to get the period
	 * @returns A String representing the period
	 */
	public getPeriod(): string	{
		return this.period;

	}

	/**
	 * The method to set the value to period
	 * @param period A String representing the period
	 */
	public setPeriod(period: string): void	{
		this.period = period;
		this.keyModified.set("period", 1);

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
	ExecuteEvery as MasterModel,
	ExecuteEvery as ExecuteEvery
}
