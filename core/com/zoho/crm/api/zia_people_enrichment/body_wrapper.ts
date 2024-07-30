import {ZiaPeopleEnrichment} from "./zia_people_enrichment";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private ziapeopleenrichment: Array<ZiaPeopleEnrichment>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the ziapeopleenrichment
	 * @returns An Array representing the ziapeopleenrichment
	 */
	public getZiapeopleenrichment(): Array<ZiaPeopleEnrichment>	{
		return this.ziapeopleenrichment;

	}

	/**
	 * The method to set the value to ziapeopleenrichment
	 * @param ziapeopleenrichment An Array representing the ziapeopleenrichment
	 */
	public setZiapeopleenrichment(ziapeopleenrichment: Array<ZiaPeopleEnrichment>): void	{
		this.ziapeopleenrichment = ziapeopleenrichment;
		this.keyModified.set("__zia_people_enrichment", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
