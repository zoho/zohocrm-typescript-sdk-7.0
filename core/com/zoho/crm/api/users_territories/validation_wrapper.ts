import {ValidationGroup} from "./validation_group";
import {ValidationHandler} from "./validation_handler";
import {Model} from "../../../../../../utils/util/model";

class ValidationWrapper implements Model, ValidationHandler{

	private validateBeforeTransfer: Array<ValidationGroup>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the validateBeforeTransfer
	 * @returns An Array representing the validateBeforeTransfer
	 */
	public getValidateBeforeTransfer(): Array<ValidationGroup>	{
		return this.validateBeforeTransfer;

	}

	/**
	 * The method to set the value to validateBeforeTransfer
	 * @param validateBeforeTransfer An Array representing the validateBeforeTransfer
	 */
	public setValidateBeforeTransfer(validateBeforeTransfer: Array<ValidationGroup>): void	{
		this.validateBeforeTransfer = validateBeforeTransfer;
		this.keyModified.set("validate_before_transfer", 1);

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
	ValidationWrapper as MasterModel,
	ValidationWrapper as ValidationWrapper
}
