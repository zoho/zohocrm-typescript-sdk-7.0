import { SDKConfig } from './sdk_config'

class SDKConfigBuilder {
    private _autoRefreshFields: boolean = false;
    private _pickListValidation: boolean = true;
    private _timeout: number = 0;

    /**
     * This is a setter method to set autoRefreshFields.
     * @param {Boolean} autoRefreshFields A boolean value
     * @returns {SDKConfigBuilder} An instance of SDKConfigBuilder
     */
    public autoRefreshFields(autoRefreshFields: boolean): SDKConfigBuilder {
        this._autoRefreshFields = autoRefreshFields;
        return this;
    }

    /**
     * This is a setter method to set pickListValidation.
     * @param {Boolean} pickListValidation A boolean value
     * @returns {SDKConfigBuilder} An instance of SDKConfigBuilder
     */
    public pickListValidation(pickListValidation: boolean): SDKConfigBuilder {
        this._pickListValidation = pickListValidation;
        return this;
    }

    /**
     * This is a setter method to set API timeout.
     * @param {number} timeout
     * @returns {SDKConfigBuilder} An instance of SDKConfigBuilder
     */
    public timeout(timeout: number): SDKConfigBuilder {
        this._timeout = timeout > 0 ? timeout : 0;
        return this;
    }

    /**
     * The method to build the SDKConfig instance
     * @returns {SDKConfig} An instance of SDKConfig
     */
    public build(): SDKConfig {
        return new SDKConfig(this._autoRefreshFields, this._pickListValidation, this._timeout);
    }
}

export {
    SDKConfigBuilder as MasterModel,
    SDKConfigBuilder as SDKConfigBuilder
}