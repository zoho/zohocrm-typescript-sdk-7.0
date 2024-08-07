import {Owner} from "./owner";
import {Sources} from "./sources";
import {SourcesCount} from "./sources_count";
import {Model} from "../../../../../../utils/util/model";

class Groups implements Model{

	private createdBy: Owner;
	private modifiedBy: Owner;
	private modifiedTime: Date;
	private createdTime: Date;
	private description: string;
	private id: bigint;
	private name: string;
	private sourcesCount: SourcesCount;
	private sources: Array<Sources>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the createdBy
	 * @returns An instance of Owner
	 */
	public getCreatedBy(): Owner	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of Owner
	 */
	public setCreatedBy(createdBy: Owner): void	{
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns An instance of Owner
	 */
	public getModifiedBy(): Owner	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of Owner
	 */
	public setModifiedBy(modifiedBy: Owner): void	{
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns An instance of Date
	 */
	public getModifiedTime(): Date	{
		return this.modifiedTime;

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param modifiedTime An instance of Date
	 */
	public setModifiedTime(modifiedTime: Date): void	{
		this.modifiedTime = modifiedTime;
		this.keyModified.set("modified_time", 1);

	}

	/**
	 * The method to get the createdTime
	 * @returns An instance of Date
	 */
	public getCreatedTime(): Date	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param createdTime An instance of Date
	 */
	public setCreatedTime(createdTime: Date): void	{
		this.createdTime = createdTime;
		this.keyModified.set("created_time", 1);

	}

	/**
	 * The method to get the description
	 * @returns A String representing the description
	 */
	public getDescription(): string	{
		return this.description;

	}

	/**
	 * The method to set the value to description
	 * @param description A String representing the description
	 */
	public setDescription(description: string): void	{
		this.description = description;
		this.keyModified.set("description", 1);

	}

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
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the sourcesCount
	 * @returns An instance of SourcesCount
	 */
	public getSourcesCount(): SourcesCount	{
		return this.sourcesCount;

	}

	/**
	 * The method to set the value to sourcesCount
	 * @param sourcesCount An instance of SourcesCount
	 */
	public setSourcesCount(sourcesCount: SourcesCount): void	{
		this.sourcesCount = sourcesCount;
		this.keyModified.set("sources_count", 1);

	}

	/**
	 * The method to get the sources
	 * @returns An Array representing the sources
	 */
	public getSources(): Array<Sources>	{
		return this.sources;

	}

	/**
	 * The method to set the value to sources
	 * @param sources An Array representing the sources
	 */
	public setSources(sources: Array<Sources>): void	{
		this.sources = sources;
		this.keyModified.set("sources", 1);

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
	Groups as MasterModel,
	Groups as Groups
}
