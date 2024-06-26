// Type definitions for SuiteScript
// Project: http://www.netsuite.com
// Definitions by: Adam Smith <https://github.com/burkybang>

/**
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3164298.html
 */

declare namespace nlobjRecord.prototype {
  // nlobjRecord.prototype.getSubList.!ret
  
  interface GetSubListRet {
    
    prototype: {
      
      addButton: /*no type*/{};
      
      setLabel: /* nlobjSubList.prototype.setLabel */ any;
      
      setHelpText: /* nlobjSubList.prototype.setHelpText */ any;
      
      setDisplayType: /* nlobjSubList.prototype.setDisplayType */ any;
      
      setLineItemValue: /* nlobjSubList.prototype.setLineItemValue */ any;
      
      setLineItemMatrixValue: /* nlobjSubList.prototype.setLineItemMatrixValue */ any;
      
      setLineItemValues: /* nlobjSubList.prototype.setLineItemValues */ any;
      
      getLineItemCount: /* nlobjSubList.prototype.getLineItemCount */ string | number;
      
      addField: /* nlobjSubList.prototype.addField */ any;
      
      setUniqueField: /* nlobjSubList.prototype.setUniqueField */ any;
      
      addRefreshButton: /* nlobjSubList.prototype.addRefreshButton */ any;
      
      addMarkAllButtons: /* nlobjSubList.prototype.addMarkAllButtons */ any;
    };
  }
}
declare namespace nlobjRecord.prototype.GetSubListRet.prototype {
  // nlobjRecord.prototype.getSubList.!ret.prototype.addButton.!ret
  
  interface AddButtonRet {
    
    prototype: {
      
      setLabel: /* nlobjButton.prototype.setLabel */ any;
      
      setDisabled: /* nlobjButton.prototype.setDisabled */ any;
    };
  }
}
declare namespace nlobjRecord.prototype {
  // nlobjRecord.prototype.getField.!ret
  
  interface GetFieldRet {
    
    prototype: {
      
      getName: /* nlobjField.prototype.getName */ any;
      
      getLabel: /* nlobjField.prototype.getLabel */ any;
      
      getType: /* nlobjField.prototype.getType */ any;
      
      isHidden: /* nlobjField.prototype.isHidden */ any;
      
      isMandatory: /* nlobjField.prototype.isMandatory */ any;
      
      isDisabled: /* nlobjField.prototype.isDisabled */ any;
      
      setLabel: /* nlobjField.prototype.setLabel */ any;
      
      setAlias: /* nlobjField.prototype.setAlias */ any;
      
      setDefaultValue: /* nlobjField.prototype.setDefaultValue */ any;
      
      setDisabled: /* nlobjField.prototype.setDisabled */ any;
      
      setMandatory: /* nlobjField.prototype.setMandatory */ any;
      
      setMaxLength: /* nlobjField.prototype.setMaxLength */ any;
      
      setDisplayType: /* nlobjField.prototype.setDisplayType */ any;
      
      setBreakType: /* nlobjField.prototype.setBreakType */ any;
      
      setLayoutType: /* nlobjField.prototype.setLayoutType */ any;
      
      setLinkText: /* nlobjField.prototype.setLinkText */ any;
      
      setDisplaySize: /* nlobjField.prototype.setDisplaySize */ any;
      
      setPadding: /* nlobjField.prototype.setPadding */ any;
      
      setHelpText: /* nlobjField.prototype.setHelpText */ any;
      
      addSelectOption: /* nlobjField.prototype.addSelectOption */ any;
    };
  }
}
declare namespace nlobjPortlet.prototype {
  // nlobjPortlet.prototype.addEditColumn.!0
  
  interface AddEditColumn0 {
    
    prototype: {
      
      setLabel: /* nlobjColumn.prototype.setLabel */ any;
      
      setURL: /* nlobjColumn.prototype.setURL */ any;
      
      addParamToURL: /* nlobjColumn.prototype.addParamToURL */ any;
    };
  }
}
declare namespace nlobjForm.prototype {
  // nlobjForm.prototype.addTab.!ret
  
  interface AddTabRet {
    
    prototype: {
      
      setLabel: /* nlobjTab.prototype.setLabel */ any;
      
      setHelpText: /* nlobjTab.prototype.setHelpText */ any;
    };
  }
}
declare namespace nlobjAssistant.prototype {
  // nlobjAssistant.prototype.setCurrentStep.!0
  
  interface SetCurrentStep0 {
    
    prototype: {
      
      setLabel: /* nlobjAssistantStep.prototype.setLabel */ any;
      
      setHelpText: /* nlobjAssistantStep.prototype.setHelpText */ any;
      
      getStepNumber: /* nlobjAssistantStep.prototype.getStepNumber */ any;
      
      getFieldValue: /* nlobjAssistantStep.prototype.getFieldValue */ any;
      
      getFieldValues: /* nlobjAssistantStep.prototype.getFieldValues */ string[];
      
      getLineItemCount: /* nlobjAssistantStep.prototype.getLineItemCount */ string | number;
      
      getLineItemValue: /* nlobjAssistantStep.prototype.getLineItemValue */ string;
      
      getAllFields: /* nlobjAssistantStep.prototype.getAllFields */ string[];
      
      getAllLineItems: /* nlobjAssistantStep.prototype.getAllLineItems */ any;
      
      getAllLineItemFields: /* nlobjAssistantStep.prototype.getAllLineItemFields */ any;
    };
  }
}
declare namespace nlobjForm.prototype {
  // nlobjForm.prototype.addFieldGroup.!ret
  
  interface AddFieldGroupRet {
    
    prototype: {
      
      setLabel: /* nlobjFieldGroup.prototype.setLabel */ any;
      
      setCollapsible: /* nlobjFieldGroup.prototype.setCollapsible */ any;
      
      setSingleColumn: /* nlobjFieldGroup.prototype.setSingleColumn */ any;
      
      setShowBorder: /* nlobjFieldGroup.prototype.setShowBorder */ any;
    };
  }
}
declare namespace nlobjForm.prototype {
  // nlobjForm.prototype.addButton.!ret
  
  interface AddButtonRet {
    
    prototype: {
      
      setLabel: /* nlobjButton.prototype.setLabel */ any;
      
      setDisabled: /* nlobjButton.prototype.setDisabled */ any;
    };
  }
}

/**
 * Return a new record using values from an existing record.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3028087
 * @governance 10 units for transactions, 2 for custom records, 4 for all other records
 *
 * @param type - The record type name.
 * @param id - The internal ID for the record.
 * @param initializeValues - Contains an array of name/value pairs of defaults to be used during record initialization.
 * @return Returns an nlobjRecord object of a copied record.
 *
 * @since 2007.0
 */
declare function nlapiCopyRecord(type: string, id: number | string, initializeValues?: Object): nlobjRecord;

/**
 * Sets the line item field of a sublist to disabled or enabled based on the value (true or false).
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3043335
 * @restriction supported in client scripts only
 *
 * @param type - Sublist internal ID
 * @param fieldId - Name of the line item field to enable/disable
 * @param value - If set to true the field is disabled. If set to false it is enabled.
 */
declare function nlapiDisableLineItemField(type: string, fieldId: string, value: boolean): void;

/**
 * Sets the field to disabled or enabled based on the value (true or false).
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3039111.html#bridgehead_N3039396
 * @restriction supported in client scripts only
 *
 * @param fieldId - Name of the line item field to enable/disable
 * @param value - If set to true the field is disabled. If set to false it is enabled.
 */
declare function nlapiDisableField(fieldId: string, value: boolean): void;

/**
 * Loads an existing saved search. The saved search could have been created using the UI or created using nlapiCreateSearch(type, filters, columns) in conjunction with nlobjSearch.saveSearch(title, scriptId).
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3051604
 * @governance 5 units
 *
 * @param [type] - Record internal ID of the record type you are searching (for example, customer|lead|prospect|partner|vendor|contact). This parameter is case-insensitive.
 * @param id - Internal ID or script ID of the saved search. The script ID of the saved search is required, regardless of whether you specify the search type. If you do not specify the search type, you must set type to null and then set the script/search ID.
 *
 * @since 2012.1
 */
declare function nlapiLoadSearch(type: string, id: string): nlobjSearch;

/**
 * Creates a new search. The search can be modified and run as an on demand search, without saving it. Alternatively, calling nlobjSearch.saveSearch(title, scriptId) will save the search to the database, so it can be resused later in the UI or using nlapiLoadSearch(type, id).
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3051237
 *
 * @param type - Record internal ID of the record type you are searching (for example, customer|lead|prospect|partner|vendor|contact). This parameter is case-insensitive.
 * @param filters
 * @param columns
 *
 * @since 2012.1
 */
declare function nlapiCreateSearch(type: string, filters: nlobjSearchFilter | nlobjSearchFilter[] | (string | number | (string | number | (string | number)[])[])[], columns: nlobjSearchColumn | nlobjSearchColumn[]): nlobjSearch;

/**
 * Load an existing record from the system.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3030703
 * @governance 10 units for transactions, 2 for custom records, 4 for all other records
 *
 * @param type - The record type name.
 * @param id - The internal ID for the record.
 * @param initializeValues - Contains an array of name/value pairs of defaults to be used during record initialization.
 * @return Returns an nlobjRecord object of an existing NetSuite record.
 *
 * @exception {SSS_INVALID_RECORD_TYPE}
 * @exception {SSS_TYPE_ARG_REQD}
 * @exception {SSS_INVALID_INTERNAL_ID}
 * @exception {SSS_ID_ARG_REQD}
 *
 * @since 2007.0
 */
declare function nlapiLoadRecord(type: string, id: number | string, initializeValues?: Object): nlobjRecord;

/**
 * Instantiate a new nlobjRecord object containing all the default field data for that record type.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3028483
 * @governance 10 units for transactions, 2 for custom records, 4 for all other records
 *
 * @param type - Record type ID.
 * @param initializeValues - Contains an array of name/value pairs of defaults to be used during record initialization.
 * @return Returns an nlobjRecord object of a new record from the system.
 *
 * @exception {SSS_INVALID_RECORD_TYPE}
 * @exception {SSS_TYPE_ARG_REQD}
 *
 * @since 2007.0
 */
declare function nlapiCreateRecord(type: string, initializeValues?: Object): nlobjRecord;

/**
 * Submit a record to the system for creation or update.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3031704
 * @governance 20 units for transactions, 4 for custom records, 8 for all other records
 *
 * @param record - nlobjRecord object containing the data record.
 * @param [doSourcing] - If not set, this argument defaults to false.
 * @param [ignoreMandatoryFields] - Disables mandatory field validation for this submit operation.
 * @return internal ID for committed record.
 *
 * @exception {SSS_INVALID_RECORD_OBJ}
 * @exception {SSS_RECORD_OBJ_REQD}
 * @exception {SSS_INVALID_SOURCE_ARG}
 *
 * @since 2007.0
 *
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3031704
 */
declare function nlapiSubmitRecord(record: nlobjRecord, doSourcing?: boolean, ignoreMandatoryFields?: boolean): number;

/**
 * Delete a record from the system.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3028788
 * @governance 20 units for transactions, 4 for custom records, 8 for all other records
 *
 * @param type - The record type name.
 * @param id - The internal ID for the record.
 *
 * @exception {SSS_INVALID_RECORD_TYPE}
 * @exception {SSS_TYPE_ARG_REQD}
 * @exception {SSS_INVALID_INTERNAL_ID}
 * @exception {SSS_ID_ARG_REQD}
 *
 * @since 2007.0
 */
declare function nlapiDeleteRecord(type: string, id: number | string): void;

/**
 * Perform a record search using an existing search or filters and columns.
 * @governance 10 units
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3052418
 * @restriction returns the first 1000 rows in the search
 *
 * @param type - Record type ID.
 * @param [id] - The internal ID or script ID for the saved search to use for search.
 * @param [filters]
 * @param [columns]
 * @return Returns an array of nlobjSearchResult objects corresponding to the searched records.
 *
 * @exception {SSS_INVALID_RECORD_TYPE}
 * @exception {SSS_TYPE_ARG_REQD}
 * @exception {SSS_INVALID_SRCH_ID}
 * @exception {SSS_INVALID_SRCH_FILTER}
 * @exception {SSS_INVALID_SRCH_FILTER_JOIN}
 * @exception {SSS_INVALID_SRCH_OPERATOR}
 * @exception {SSS_INVALID_SRCH_COL_NAME}
 * @exception {SSS_INVALID_SRCH_COL_JOIN}
 *
 * @since 2007.0
 */
declare function nlapiSearchRecord(type: string, id: number | string, filters: nlobjSearchFilter | nlobjSearchFilter[] | (string | number | (string | number | (string | number)[])[])[], columns: nlobjSearchColumn | nlobjSearchColumn[]): nlobjSearchResult[] | void;

/**
 * Perform a global record search across the system.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3052216
 * @governance 10 units
 * @restriction returns the first 1000 rows in the search
 *
 * @param keywords - Global search keywords string or expression.
 * @return Returns an Array of nlobjSearchResult objects containing the following four columns: name, type (as shown in the UI), info1, and info2.
 *
 * @since 2008.1
 */
declare function nlapiSearchGlobal(keywords: string): nlobjSearchResult[];

/**
 * Perform a duplicate record search using Duplicate Detection criteria.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3051062.html#bridgehead_N3052026
 * @governance 10 units
 * @restriction returns the first 1000 rows in the search
 *
 * @param type - The recordType you are checking duplicates for (for example, customer|lead|prospect|partner|vendor|contact).
 * @param [fields] - Array of field names used to detect duplicate (for example, companyname|email|name|phone|address1|city|state|zipcode).
 * @param [id] - Internal ID of existing record. Depending on the use case, id may or may not be a required argument.
 * @return Returns an Array of nlobjSearchResult objects corresponding to the duplicate records.
 *
 * @since 2008.1
 */
declare function nlapiSearchDuplicate(type: string, fields: string[], id?: number): nlobjSearchResult[];

/**
 * Create a new record using values from an existing record of a different type.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3032124
 * @governance 10 units for transactions, 2 for custom records, 4 for all other records
 *
 * @param type - The record type name.
 * @param id - The internal ID for the record.
 * @param transformType - The recordType you are transforming the existing record into.
 * @param [transformValues] - An object containing transform default option/value pairs used to pre-configure transformed record
 *
 * @exception {SSS_INVALID_URL_CATEGORY}
 * @exception {SSS_CATEGORY_ARG_REQD}
 * @exception {SSS_INVALID_TASK_ID}
 * @exception {SSS_TASK_ID_REQD}
 * @exception {SSS_INVALID_INTERNAL_ID}
 * @exception {SSS_INVALID_EDITMODE_ARG}
 *
 * @since 2007.0
 */
declare function nlapiTransformRecord(type: string, id: number | string, transformType: string, transformValues?: Object): nlobjRecord;

/**
 * void a transaction based on type and id.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_3784149312
 * @governance 10 units for transactions
 *
 * @param type - The transaction type name.
 * @param id - The internal ID for the record.
 * @return If accounting preference is reversing journal, then it is new journal id, otherwise, it is the input record id
 *
 * @since 2014.1
 */
declare function nlapiVoidTransaction(type: string, id: number | string): string;

/**
 * Fetch the value of one or more fields on a record. This API uses search to look up the fields and is much
 * faster than loading the record in order to get the field.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3039111.html#bridgehead_N3040351
 * @governance 10 units for transactions, 2 for custom records, 4 for all other records
 *
 * @param recordType - The record type name.
 * @param recordId - The internal ID for the record.
 * @param fieldId - Field or fields to look up.
 * @param [text] - If set then the display value is returned instead for select fields.
 * @return Single value.
 *
 * @since 2008.1
 */
declare function nlapiLookupField(recordType: string, recordId: number | string, fieldId: string, text?: boolean): string;

/**
 * Fetch the value of one or more fields on a record. This API uses search to look up the fields and is much
 * faster than loading the record in order to get the field.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3039111.html#bridgehead_N3040351
 * @governance 10 units for transactions, 2 for custom records, 4 for all other records
 *
 * @param recordType - The record type name.
 * @param recordId - The internal ID for the record.
 * @param fieldIds - Field or fields to look up.
 * @param [text] - If set then the display value is returned instead for select fields.
 * @return Object of field name/value pairs.
 *
 * @since 2008.1
 */
declare function nlapiLookupField<FieldId extends string>(recordType: string, recordId: number | string, fieldIds: FieldId[], text?: boolean): { [key in FieldId]: string };

/**
 * Submit the values of a field or set of fields for an existing record.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3039111.html#bridgehead_N3042189
 * @governance 10 units for transactions, 2 for custom records, 4 for all other records
 * @restriction only supported for records and fields where DLE (Direct List Editing) is supported
 *
 * @param recordType - The record type name.
 * @param recordId - The internal ID for the record.
 * @param fieldId - Field being updated.
 * @param value - Field value used for updating.
 * @param [doSourcing = false] - If not set, this argument defaults to false and field sourcing does not occur.
 *
 * @since 2008.1
 */
declare function nlapiSubmitField(recordType: string, recordId: number | string, fieldId: string, value: string, doSourcing?: boolean): void;

/**
 * Submit the values of a field or set of fields for an existing record.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3039111.html#bridgehead_N3042189
 * @governance 10 units for transactions, 2 for custom records, 4 for all other records
 * @restriction only supported for records and fields where DLE (Direct List Editing) is supported
 *
 * @param recordType - The record type name.
 * @param recordId - The internal ID for the record.
 * @param fieldIds - Fields being updated.
 * @param values - Field values used for updating.
 * @param [doSourcing = false] - If not set, this argument defaults to false and field sourcing does not occur.
 *
 * @since 2008.1
 */
declare function nlapiSubmitField(recordType: string, recordId: number | string, fieldIds: string[], values: string[], doSourcing?: boolean): void;

/**
 * Attach a single record to another with optional properties.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3027757
 * @governance 10 units
 *
 * @param recordType1 - The record type name being attached
 * @param recordId1 - The internal ID for the record being attached
 * @param recordType2 - The record type name being attached to
 * @param recordId2 - The internal ID for the record being attached to
 * @param [attributes] - Object containing name/value pairs used to configure attach operation
 *
 * @since 2008.2
 */
declare function nlapiAttachRecord(recordType1: string, recordId1: number | string, recordType2: string, recordId2: number | string, attributes?: Object): void;

/**
 * Detach a single record from another with optional properties.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3030101
 * @governance 10 units
 *
 * @param recordType1 - The record type name being attached
 * @param recordId1 - The internal ID for the record being attached
 * @param recordType2 - The record type name being attached to
 * @param recordId2 - The internal ID for the record being attached to
 * @param [attributes] - Object containing name/value pairs used to configure detach operation
 *
 * @since 2008.2
 */
declare function nlapiDetachRecord(recordType1: string, recordId1: number | string, recordType2: string, recordId2: number | string, attributes?: Object): void;

/**
 * Resolve a URL to a resource or object in the system.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3059035.html#bridgehead_N3059898
 *
 * @param type - Type specifier for URL
 * @param recordType - Type of the record
 * @param [recordId] - Internal ID of the record
 * @param [pageMode = 'VIEW'] - View or edit mode
 *
 * @since 2007.0
 */
declare function nlapiResolveURL(
  type: 'RECORD' | 'record',
  recordType: string,
  recordId?: number | string,
  pageMode?: 'VIEW' | 'EDIT' | 'view' | 'edit',
): string;

/**
 * Resolve a URL to a resource or object in the system.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3059035.html#bridgehead_N3059898
 *
 * @param type - Type specifier for URL
 * @param scriptId - Internal ID or scriptid of the script
 * @param deploymentId - Internal ID or scriptid of the deployment
 * @param [pageMode = 'INTERNAL'] - Internal or externak URL
 *
 * @since 2007.0
 */
declare function nlapiResolveURL(
  type: 'SUITELET' | 'RESTLET' | 'suitelet' | 'restlet',
  scriptId: number | string,
  deploymentId: number | string,
  pageMode?: 'INTERNAL' | 'EXTERNAL' | 'internal' | 'external' | boolean,
): string;

/**
 * Resolve a URL to a resource or object in the system.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3059035.html#bridgehead_N3059898
 *
 * @param type - Type specifier for URL
 * @param taskId - Subtype specifier for URL
 *
 * @since 2007.0
 */
declare function nlapiResolveURL(type: 'TASKLINK' | 'tasklink', taskId: string): string;

/**
 * Redirect the user to a page. Only valid in the UI on Suitelets and User Events. In Client scripts this will initialize the redirect URL used upon submit.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3059035.html#bridgehead_N3060274
 *
 * @param type - Type specifier for URL
 * @param recordType - Type of the record
 * @param [recordId] - Internal ID of the record
 * @param [editMode = false] - View or edit mode
 * @param [parameters] - Object used to specify additional URL parameters as name/value pairs
 *
 * @since 2007.0
 */
declare function nlapiSetRedirectURL(type: 'RECORD' | 'record', recordType: string, recordId?: number | string, editMode?: boolean, parameters?: Record<string, string | number>): void;

/**
 * Redirect the user to a page. Only valid in the UI on Suitelets and User Events. In Client scripts this will initialize the redirect URL used upon submit.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3059035.html#bridgehead_N3060274
 *
 * @param type - Type specifier for URL
 * @param scriptId - Internal ID or scriptid of the script
 * @param deploymentId - Internal ID or scriptid of the deployment
 * @param [editMode] - View or edit mode
 * @param [parameters] - Object used to specify additional URL parameters as name/value pairs
 *
 * @since 2007.0
 */
declare function nlapiSetRedirectURL(type: 'SUITELET' | 'suitelet', scriptId: number | string, deploymentId: number | string, editMode?: boolean, parameters?: Record<string, string | number>): void;

/**
 * Redirect the user to a page. Only valid in the UI on Suitelets and User Events. In Client scripts this will initialize the redirect URL used upon submit.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3059035.html#bridgehead_N3060274
 *
 * @param type - Type specifier for URL
 * @param taskId - ID of the task
 *
 * @since 2007.0
 */
declare function nlapiSetRedirectURL(type: 'TASKLINK' | 'tasklink', taskId: string): void;

/**
 * Redirect the user to a page. Only valid in the UI on Suitelets and User Events. In Client scripts this will initialize the redirect URL used upon submit.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3059035.html#bridgehead_N3060274
 *
 * @param type - Type specifier for URL
 * @param url - External URL
 *
 * @since 2007.0
 */
declare function nlapiSetRedirectURL(type: 'EXTERNAL' | 'external', url: string): void;

/**
 * Request a URL to an external or internal resource.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3059035.html#bridgehead_N3059142
 * @restriction NetSuite maintains a white list of CAs that are allowed for https requests. Please see the online documentation for the complete list.
 * @governance 10 units
 *
 * @param url - A fully qualified URL to an HTTP(s) resource
 * @param [postdata] - String, document, or Object containing POST payload
 * @param [headers] - Object containing request headers.
 * @param [callback] - Available on the Client to support asynchronous requests. function is passed an nlobjResponse with the results.
 * @param [method] - Supported http methods are HEAD, DELETE and PUT
 *
 * @exception {SSS_UNKNOWN_HOST}
 * @exception {SSS_INVALID_HOST_CERT}
 * @exception {SSS_REQUEST_TIME_EXCEEDED}
 *
 * @since 2007.0
 */
declare function nlapiRequestURL(url: string, postdata?: string | Object, headers?: Object, callback?: Function, method?: 'HEAD' | 'DELETE' | 'PUT' | 'head' | 'delete' | 'put'): nlobjResponse;

/**
 * Return context information about the current user/script.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3055475.html#bridgehead_N3055647
 *
 * @since 2007.0
 */
declare function nlapiGetContext(): nlobjContext;

/**
 * Return the internal ID for the currently logged in user. Returns -4 when called from online forms or "Available without Login" Suitelets.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3055475.html#bridgehead_N3056076
 *
 * @since 2005.0
 */
declare function nlapiGetUser(): number;

/**
 * Return the internal ID for the current user's role. Returns 31 (Online Form User) when called from online forms or "Available without Login" Suitelets.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3055475.html#bridgehead_N3055936
 *
 * @since 2005.0
 */
declare function nlapiGetRole(): number;

/**
 * Return the internal ID for the current user's department.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3055475.html#bridgehead_N3055799
 *
 * @since 2005.0
 */
declare function nlapiGetDepartment(): number;

/**
 * Return the internal ID for the current user's location.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3055475.html#bridgehead_N3055865
 *
 * @since 2005.0
 */
declare function nlapiGetLocation(): number;

/**
 * Return the internal ID for the current user's subsidiary.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3055475.html#bridgehead_N3056010
 *
 * @since 2008.1
 */
declare function nlapiGetSubsidiary(): number;

/**
 * Return the recordtype corresponding to the current page or userevent script.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3030601
 *
 * @since 2007.0
 */
declare function nlapiGetRecordType(): string;

/**
 * Return the internal ID corresponding to the current page or userevent script.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3030530
 *
 * @since 2007.0
 */
declare function nlapiGetRecordId(): string;

/**
 * Send out an email and associate it with records in the system.
 * Supported base types are entity for entities, transaction for transactions, activity for activities and cases, record|recordtype for custom records
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3068135.html#bridgehead_N3068387
 * @governance 10 units
 * @restriction all outbound emails subject to email Anti-SPAM policies
 *
 * @param author - Internal ID for employee user on behalf of whom this email is sent
 * @param recipient - Email address, email addresses separated by commas, array of email addresses, or internal ID of user that this email is being sent to
 * @param subject - Email subject
 * @param body - Email body
 * @param cc - Copy email address(es)
 * @param bcc - Blind copy email address(es)
 * @param records - Object of base types -> internal IDs used to associate email to records. i.e. {entity: 100, record: 23, recordtype: customrecord_surveys}
 * @param attachments - Array of nlobjFile objects (files) to include as attachments
 * @param notifySenderOnBounce - Controls whether or not the sender will receive email notification of bounced emails (defaults to false)
 * @param internalOnly - Controls or not the resultingMmessage record will be visible to non-employees on the Communication tab of attached records (defaults to false)
 * @param replyTo - Email reply-to address
 *
 * @since 2007.0
 */
declare function nlapiSendEmail(author: number, recipient: string | string[] | number, subject: string, body: string, cc?: string | string[], bcc?: string | string[], records?: Object, attachments?: nlobjFile | nlobjFile[], notifySenderOnBounce?: boolean, internalOnly?: boolean, replyTo?: string): void;

/**
 * Sends a single on-demand campaign email to a specified recipient and returns a campaign response ID to track the email.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3068135.html#bridgehead_N3068234
 * @governance 10 units
 * @restriction works in conjunction with the Lead Nurturing (campaigndrip) sublist only
 *
 * @param campaignEventId - Internal ID of the campaign event
 * @param recipientId - Internal ID of the recipient - the recipient must have an email
 *
 * @since 2010.1
 */
declare function nlapiSendCampaignEmail(campaignEventId: number, recipientId: number): number;

/**
 * Send out a fax and associate it with records in the system. This requires fax preferences to be configured.
 * Supported base types are entity for entities, transaction for transactions, activity for activities and cases, record|recordtype for custom records
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3068135.html#bridgehead_N3070553
 * @governance 10 units
 *
 * @param from - Internal ID for employee user on behalf of whom this fax is sent
 * @param to - Fax address or internal ID of user that this fax is being sent to
 * @param subject - Fax subject
 * @param body - Fax body
 * @param records - Object of base types -> internal IDs used to associate fax to records. i.e. {entity: 100, record: 23, recordtype: customrecord_surveys}
 * @param attachments - Array of nlobjFile objects (files) to include as attachments
 *
 * @since 2008.2
 */
declare function nlapiSendFax(from: number, to: string | number, subject: string, body: string, records: Object, attachments: nlobjFile | nlobjFile[]): void;

/**
 * Return field definition for a field.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3039111.html#bridgehead_N3039511
 *
 * @param name - The name of the field
 *
 * @since 2009.1
 */
declare function nlapiGetField(name: string): nlobjField;

/**
 * Return field definition for a matrix field.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3047553
 *
 * @param type - Matrix sublist name
 * @param name - Matrix field name
 * @param column - Matrix field column index (1-based)
 *
 * @since 2009.2
 */
declare function nlapiGetMatrixField(type: string, name: string, column: number): nlobjField;

/**
 * Return field definition for a sublist field.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3044648
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param [linenum] - Line number for sublist field (1-based) and only valid for sublists of type staticlist and list
 *
 * @since 2009.1
 */
declare function nlapiGetLineItemField(type: string, fieldId: string, linenum?: number): nlobjField;

/**
 * Return an nlobjField containing sublist field metadata.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3044836
 *
 * @param type - Matrix sublist name
 * @param fieldId - Matrix field name
 * @param linenum - Line number (1-based)
 * @param column - Matrix column index (1-based)
 *
 * @since 2009.2
 */
declare function nlapiGetLineItemMatrixField(type: string, fieldId: string, linenum: number, column: number): nlobjField;

/**
 * Return the value of a field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3039111.html#bridgehead_N3039936
 * @restriction supported in client and user event scripts only.
 *
 * @param fieldId - The field name
 *
 * @since 2005.0
 */
declare function nlapiGetFieldValue(fieldId: string): string;

/**
 * Set the value of a field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3039111.html#bridgehead_N3041626
 * @restriction supported in client and user event scripts only.
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param fieldId - The field name
 * @param value - Value used to set field
 * @param [firefieldchanged] - If false then the field change event is suppressed (defaults to true)
 * @param [synchronous] - If true then sourcing and field change execution happens synchronously (defaults to false).
 *
 * @since 2005.0
 */
declare function nlapiSetFieldValue(fieldId: string, value: string, firefieldchanged?: boolean, synchronous?: boolean): void;

/**
 * Return the display value of a select field's current selection on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3039111.html#bridgehead_N3039686
 * @restriction supported in client and user event scripts only.
 *
 * @param fieldId - The field name
 *
 * @since 2005.0
 */
declare function nlapiGetFieldText(fieldId: string): string;

/**
 * Set the value of a field on the current record on a page using it's label.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3039111.html#bridgehead_N3041236
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param fieldId - The field name
 * @param txt - Display name used to lookup field value
 * @param [firefieldchanged] - If false then the field change event is suppressed (defaults to true)
 * @param [synchronous] - If true then sourcing and field change execution happens synchronously (defaults to false).
 *
 * @since 2009.1
 *
 */
declare function nlapiSetFieldText(fieldId: string, txt: string, firefieldchanged?: boolean, synchronous?: boolean): void;

/**
 * Return the values of a multiselect field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3039111.html#bridgehead_N3040092
 * @restriction supported in client and user event scripts only.
 *
 * @param fieldId - The field name
 *
 * @since 2005.0
 */
declare function nlapiGetFieldValues(fieldId: string): string[];

/**
 * Set the values of a multiselect field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3039111.html#bridgehead_N3041926
 * @restriction supported in client and user event scripts only.
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param fieldId - Field name
 * @param values - Array of strings containing values for field
 * @param [firefieldchanged] - If false then the field change event is suppressed (defaults to true)
 * @param [synchronous] - If true then sourcing and field change execution happens synchronously (defaults to false).
 *
 * @since 2005.0
 */
declare function nlapiSetFieldValues(fieldId: string, values: string[], firefieldchanged?: boolean, synchronous?: boolean): void;

/**
 * Return the values (via display text) of a multiselect field on the current record.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3039111.html#bridgehead_N3039830
 * @restriction supported in client and user event scripts only.
 *
 * @param fieldId - Field name
 *
 * @since 2009.1
 */
declare function nlapiGetFieldTexts(fieldId: string): void;

/**
 * Set the values (via display text) of a multiselect field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3039111.html#bridgehead_N3041422
 * @restriction supported in client and user event scripts only.
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param fieldId - Field name
 * @param texts - Array of strings containing display values for field
 * @param [firefieldchanged] - If false then the field change event is suppressed (defaults to true)
 * @param [synchronous] - If true then sourcing and field change execution happens synchronously (defaults to false).
 *
 * @since 2009.1
 */
declare function nlapiSetFieldTexts(fieldId: string, texts: string[], firefieldchanged?: boolean, synchronous?: boolean): void;

/**
 * Get the value of a matrix header field
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3047782
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param column - Matrix column index (1-based)
 *
 * @since 2009.2
 */
declare function nlapiGetMatrixValue(type: string, fieldId: string, column: number): string;

/**
 * Set the value of a matrix header field
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3050444
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param column - Matrix column index (1-based)
 * @param value - Field value for matrix field
 * @param [firefieldchanged] - If false then the field change event is suppressed (defaults to true)
 * @param [synchronous] - If true then sourcing and field change execution happens synchronously (defaults to false).
 *
 * @since 2009.2
 */
declare function nlapiSetMatrixValue(type: string, fieldId: string, column: number, value: string, firefieldchanged?: boolean, synchronous?: boolean): void;

/**
 * Get the current value of a sublist field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3043926
 * @restriction supported in client and user event scripts only.
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param column - Matrix column index (1-based)
 *
 * @since 2009.2
 */
declare function nlapiGetCurrentLineItemMatrixValue(type: string, fieldId: string, column: number): string;

/**
 * Set the current value of a sublist field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3049008
 * @restriction supported in client and user event scripts only.
 * @restriction synchronous arg is only supported in Client SuiteScript
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param column - Matrix column index (1-based)
 * @param value - Matrix field value
 * @param [firefieldchanged] - If false then the field change event is suppressed (defaults to true)
 * @param [synchronous] - If true then sourcing and field change execution happens synchronously (defaults to false).
 *
 * @since 2009.2
 */
declare function nlapiSetCurrentLineItemMatrixValue(type: string, fieldId: string, column: number, value: string, firefieldchanged?: boolean, synchronous?: boolean): void;

/**
 * Return the value of a sublist matrix field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3045070
 * @restriction supported in client and user event scripts only.
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param linenum - Line number (1-based)
 * @param column - Column index (1-based)
 * @param value
 *
 * @since 2009.2
 */
declare function nlapiGetLineItemMatrixValue(type: string, fieldId: string, linenum: number, column: number): void;

/**
 * Return the value of a sublist field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3045409
 * @restriction supported in client and user event scripts only.
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param linenum - Line number (1-based)
 *
 * @since 2005.0
 */
declare function nlapiGetLineItemValue(type: string, fieldId: string, linenum: number): string;

/**
 * Return the values of a multiselect sublist field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3045558
 * @restriction supported in client and user event scripts only.
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param linenum - Line number (1-based)
 *
 * @since 2005.0
 */
declare function nlapiGetLineItemValues(type: string, fieldId: string, linenum: number): string[];

/**
 * Return the value of a sublist field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_3745066611.html#bridgehead_3745076438
 * @restriction supported in client and user event scripts only.
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param linenum - Line number (1-based)
 * @param timezone - Value
 *
 * @since 2013.2
 */
declare function nlapiGetLineItemDateTimeValue(type: string, fieldId: string, linenum: number, timezone: string): string;

/**
 * Set the value of a sublist field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3050265
 * @restriction supported in client and user event scripts only.
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param linenum - Line number (1-based)
 * @param value
 * @retun {void}
 *
 * @since 2005.0
 */
declare function nlapiSetLineItemValue(type: string, fieldId: string, linenum: number, value: string | number): void;

/**
 * Set the value of a sublist field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_3745066611.html#bridgehead_3745077739
 * @restriction supported in client and user event scripts only.
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param linenum - Line number (1-based)
 * @param dateTime - Datetime
 * @param timezone - Value
 * @retun {void}
 *
 * @since 2013.2
 */
declare function nlapiSetLineItemDateTimeValue(type: string, fieldId: string, linenum: number, dateTime: string, timezone: string | number): void;

/**
 * Return the label of a select field's current selection for a particular line.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3045265
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param linenum - Line number (1-based)
 *
 * @since 2005.0
 */
declare function nlapiGetLineItemText(type: string, fieldId: string, linenum: number): string;

/**
 * Return the 1st line number that a sublist field value appears in
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3043659
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param val - The value being queried for in a sublist field
 *
 * @since 2009.2
 */
declare function nlapiFindLineItemValue(type: string, fieldId: string, val: string): number;

/**
 * Return the 1st line number that a matrix field value appears in
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3043473
 *
 * @param type - Sublist name
 * @param fieldId - Matrix field name
 * @param column - Matrix column index (1-based)
 * @param val - The value being queried for in a matrix field
 *
 * @since 2009.2
 */
declare function nlapiFindLineItemMatrixValue(type: string, fieldId: string, column: number, val: string): number;

/**
 * Return the number of columns for a matrix field
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3047377
 *
 * @param type - Sublist name
 * @param fieldId - Matrix field name
 *
 * @since 2009.2
 */
declare function nlapiGetMatrixCount(type: string, fieldId: string): number;

/**
 * Return the number of sublists in a sublist on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3044506
 *
 * @restriction supported in client and user event scripts only.
 * @param type - Sublist name
 *
 * @since 2005.0
 */
declare function nlapiGetLineItemCount(type: string): number;

/**
 * Insert and select a new line into the sublist on a page or userevent.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3048032
 *
 * @param type - Sublist name
 * @param [linenum] - Line number at which to insert a new line.
 *
 * @since 2005.0
 */
declare function nlapiInsertLineItem(type: string, linenum?: number): void;

/**
 * Remove the currently selected line from the sublist on a page or userevent.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3048524
 *
 * @param type - Sublist name
 * @param [linenum] - Line number to remove.
 *
 * @since 2005.0
 */
declare function nlapiRemoveLineItem(type: string, linenum?: number): void;

/**
 * Set the value of a field on the currently selected line.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3049789
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param value - Field value
 * @param [firefieldchanged] - If false then the field change event is suppressed (defaults to true)
 * @param [synchronous] - If true then sourcing and field change execution happens synchronously (defaults to false).
 *
 * @since 2005.0
 */
declare function nlapiSetCurrentLineItemValue(type: string, fieldId: string, value: string | number, firefieldchanged?: boolean, synchronous?: boolean): void;

/**
 * Set the value of a field on the currently selected line.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3050019
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param values - Field value
 * @param [firefieldchanged] - If false then the field change event is suppressed (defaults to true)
 * @param [synchronous] - If true then sourcing and field change execution happens synchronously (defaults to false).
 *
 * @since 2012.1
 */
declare function nlapiSetCurrentLineItemValues(type: string, fieldId: string, values: string | number, firefieldchanged?: boolean, synchronous?: boolean): void;

/**
 * Set the value of a field on the currently selected line.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_3745066611.html#bridgehead_3745076969
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param value - Field value
 * @param timezone - Value
 *
 * @since 2013.2
 */
declare function nlapiSetCurrentLineItemDateTimeValue(type: string, fieldId: string, value: string, timezone: string): void;

/**
 * Set the value of a field on the currently selected line using it's label.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3049285
 * @restriction synchronous arg is only supported in client SuiteScript
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param txt - String containing display value or search text.
 * @param [firefieldchanged] - If false then the field change event is suppressed (defaults to true)
 * @param [synchronous] - If true then sourcing and field change execution happens synchronously (defaults to false).
 *
 * @since 2005.0
 */
declare function nlapiSetCurrentLineItemText(type: string, fieldId: string, txt: string, firefieldchanged?: boolean, synchronous?: boolean): void;

/**
 * Return the value of a field on the currently selected line.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3044247
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 *
 * @since 2005.0
 */
declare function nlapiGetCurrentLineItemValue(type: string, fieldId: string): string;

/**
 * Return the value of a field on the currently selected line.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3044377
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 *
 * @since 2012.1
 */
declare function nlapiGetCurrentLineItemValue(type: string, fieldId: string): string[];

/**
 * Return the value of a field on the currently selected line.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_3745066611.html#bridgehead_3745074470
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param timezone - Value
 *
 * @since 2013.2
 */
declare function nlapiGetCurrentLineItemDateTimeValue(type: string, fieldId: string, timezone: string): string;

/**
 * Return the label of a select field's current selection on the currently selected line.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3044128
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 *
 * @since 2005.0
 */
declare function nlapiGetCurrentLineItemText(type: string, fieldId: string): string;

/**
 * Return the line number for the currently selected line.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3043814
 *
 * @param type - Sublist name
 *
 * @since 2005.0
 */
declare function nlapiGetCurrentLineItemIndex(type: string): number;

/**
 * Disable a sublist field.
 * @see unknown
 * @restriction Only supported on sublists of type inlineeditor, editor and list (current field only)
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param disable - If true then field is disabled
 * @param linenum - Line number for sublist field (1-based) and only valid for sublists of type list
 *
 * @since 2009.1
 */
declare function nlapiSetLineItemDisabled(type: string, fieldId: string, disable: boolean, linenum: number): void;

/**
 * Return field mandatoriness.
 * @see unknown
 *
 * @param fieldId - Field name
 *
 * @since 2009.1
 */
declare function nlapiGetFieldMandatory(fieldId: string): boolean;

/**
 * Return sublist field mandatoriness.
 * @see unknown
 * @restriction Only supported on sublists of type inlineeditor or editor (current field only)
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 *
 * @since 2009.1
 */
declare function nlapiGetLineItemMandatory(type: string, fieldId: string): boolean;

/**
 * Make a field mandatory.
 * @see unknown
 *
 * @param fieldId - Field name
 * @param mandatory - If true then field is made mandatory
 *
 * @since 2009.1
 */
declare function nlapiSetFieldMandatory(fieldId: string, mandatory: boolean): void;

/**
 * Make a sublist field mandatory.
 * @see unknown
 * @restriction Only supported on sublists of type inlineeditor or editor (current field only)
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param mandatory - If true then field is made mandatory
 *
 * @since 2009.2
 */
declare function nlapiSetLineItemMandatory(type: string, fieldId: string, mandatory: boolean): void;

/**
 * Select an existing line in a sublist.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3048782
 *
 * @param type - Sublist name
 * @param linenum - Line number to select
 *
 * @since 2005.0
 */
declare function nlapiSelectLineItem(type: string, linenum: number): void;

/**
 * Save changes made on the currently selected line to the sublist.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3043223
 *
 * @param type - Sublist name
 *
 * @since 2005.0
 */
declare function nlapiCommitLineItem(type: string): void;

/**
 * Cancel any changes made on the currently selected line.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3043122
 * @restriction Only supported for sublists of type inlineeditor and editor
 *
 * @param type - Sublist name
 *
 * @since 2005.0
 */
declare function nlapiCancelLineItem(type: string): void;

/**
 * Select a new line in a sublist.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3048896
 * @restriction Only supported for sublists of type inlineeditor and editor
 *
 * @param type - Sublist name
 *
 * @since 2005.0
 */
declare function nlapiSelectNewLineItem(type: string): void;

/**
 * Refresh the sublist table.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3048417
 * @restriction Only supported for sublists of type inlineeditor, editor, and staticlist
 * @restriction Client SuiteScript only.
 *
 * @param type - Sublist name
 * @return{void}
 *
 * @since 2005.0
 */
declare function nlapiRefreshLineItems(type: string): void;

/**
 * Adds a select option to a scripted select or multiselect field.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3039111.html#bridgehead_N3040209
 * @restriction Client SuiteScript only
 *
 * @param fieldId - Field name
 * @param value - Internal ID for select option
 * @param text - Display text for select option
 * @param [selected] - If set to true, the selected option will become the default selection. If not set, this argument defaults to false.
 *
 * @since 2008.2
 */
declare function nlapiInsertSelectOption(fieldId: string, value: string, text: string, selected?: boolean): void;

/**
 * Removes a select option (or all if value is null) from a scripted select or multiselect field.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3039111.html#bridgehead_N3040585
 * @restriction Client SuiteScript only
 *
 * @param fieldId - Field name
 * @param value - Internal ID of select option to remove
 *
 * @since 2008.2
 */
declare function nlapiRemoveSelectOption(fieldId: string, value: string): void;

/**
 * Adds a select option to a scripted select or multiselect sublist field.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3048142
 * @restriction Client SuiteScript only
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param value - Internal ID for select option
 * @param text - Display text for select option
 * @param [selected] - If set to true, the selected option will become the default selection. If not set, this argument defaults to false.
 *
 * @since 2008.2
 */
declare function nlapiInsertLineItemOption(type: string, fieldId: string, value: string, text: string, selected?: boolean): void;

/**
 * Removes a select option (or all if value is null) from a scripted select or multiselect sublist field.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3048656
 * @restriction Client SuiteScript only
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param value - Internal ID for select option to remove
 *
 * @since 2008.2
 */
declare function nlapiRemoveLineItemOption(type: string, fieldId: string, value: string): void;

/**
 * Returns true if any changes have been made to a sublist.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3042487.html#bridgehead_N3048312
 * @restriction Client SuiteScript only
 *
 * @param type - Sublist name
 *
 * @since 2005.0
 */
declare function nlapiIsLineItemChanged(type: string): boolean;

/**
 * Return an record object containing the data being submitted to the system for the currenr record.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3030372
 * @restriction User Event scripts only
 *
 * @since 2008.1
 */
declare function nlapiGetNewRecord(): nlobjRecord;

/**
 * Return an record object containing the current record's data prior to the write operation.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3030453
 * @restriction beforeSubmit|afterSubmit User Event scripts only
 *
 * @since 2008.1
 */
declare function nlapiGetOldRecord(): nlobjRecord;

/**
 * Create an nlobjError object that can be used to abort script execution and configure error notification
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3067865.html#bridgehead_N3067925
 *
 * @param code - Error code
 * @param details - Error description
 * @param [suppressEmail] - If true then suppress the error notification emails from being sent out (false by default).
 *
 * @since 2008.2
 */
declare function nlapiCreateError(code: string, details: string, suppressEmail?: boolean): nlobjError;

/**
 * Return a new entry form page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3056572.html#bridgehead_N3057076
 * @restriction Suitelets only
 *
 * @param title - Page title
 * @param [hideHeader] - True to hide the page header (false by default)
 *
 * @since 2008.2
 */
declare function nlapiCreateForm(title: string, hideHeader?: boolean): nlobjForm;

/**
 * Return a new list page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3056572.html#bridgehead_N3057216
 * @restriction Suitelets only
 *
 * @param title - Page title
 * @param [hideHeader] - True to hide the page header (false by default)
 *
 * @since 2008.2
 */
declare function nlapiCreateList(title: string, hideHeader?: boolean): nlobjList;

/**
 * Return a new assistant page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3056572.html#bridgehead_N3056901
 * @restriction Suitelets only
 *
 * @param title - Page title
 * @param [hideHeader] - True to hide the page header (false by default)
 *
 * @since 2009.2
 */
declare function nlapiCreateAssistant(title: string, hideHeader?: boolean): nlobjAssistant;

/**
 * Load a file from the file cabinet (via its internal ID or path).
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3066995.html#bridgehead_N3067506
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param id - Internal ID or relative path to file in the file cabinet (i.e. /SuiteScript/foo.js)
 *
 * @since 2008.2
 */
declare function nlapiLoadFile(id: string | number): nlobjFile;

/**
 * Add/update a file in the file cabinet.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3066995.html#bridgehead_N3067647
 * @governance 20 units
 * @restriction Server SuiteScript only
 *
 * @param file - A file object to submit
 * @return return internal ID of file
 *
 * @since 2009.1
 */
declare function nlapiSubmitFile(file: nlobjFile): number;

/**
 * Delete a file from the file cabinet.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3066995.html#bridgehead_N3067403
 * @governance 20 units
 * @restriction Server SuiteScript only
 *
 * @param id - Internal ID of file to be deleted
 *
 * @since 2009.1
 */
declare function nlapiDeleteFile(id: number): number;

/**
 * Instantiate a file object (specifying the name, type, and contents which are base-64 encoded for binary types.)
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3066995.html#bridgehead_N3067099
 * @restriction Server SuiteScript only
 *
 * @param name - File name
 * @param type - File type i.e. plainText, htmlDoc, pdf, word (see documentation for the list of supported file types)
 * @param contents - String containing file contents (must be base-64 encoded for binary types)
 *
 * @since 2009.1
 */
declare function nlapiCreateFile(name: string, type: string, contents: string): nlobjFile;

/**
 * Perform a mail merge operation using any template and up to 2 records and returns an nlobjFile with the results.
 * @see unknown
 * @restriction only supported for record types that are available in mail merge: transactions, entities, custom records, and cases
 * @restriction Server SuiteScript only
 * @governance 10 units
 *
 * @param id - Internal ID of template
 * @param baseType - Primary record type
 * @param baseId - Internal ID of primary record
 * @param [altType] - Secondary record type
 * @param [altId] - Internal ID of secondary record
 * @param [fields] - Object of merge field values to use in the mail merge (by default all field values are obtained from records) which overrides those from the record.
 */
declare function nlapiMergeRecord(id: number, baseType: string, baseId: number, altType?: string, altId?: number, fields?: Object): nlobjFile;

/**
 * Print a record (transaction) gievn its type, id, and output format.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_N3035342
 * @restriction Server SuiteScript only
 * @governance 10 units
 *
 * @param type - Print output type: transaction|statement|packingslip|pickingticket
 * @param id - Internal ID of record to print
 * @param [format] - Output format: html|pdf|default
 * @param [properties] - Object of properties used to configure print
 *
 * @since 2008.2
 */
declare function nlapiPrintRecord(type: string, id: number, format?: string, properties?: Object): nlobjFile;

/**
 * Generate a PDF from XML using the BFO report writer (see http://big.faceless.org/products/report/).
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3062490.html#bridgehead_N3066595
 * @restriction Server SuiteScript only
 * @governance 10 units
 *
 * @param input - String containing BFO compliant XHTML
 *
 * @since 2009.1
 */
declare function nlapiXMLToPDF(input: string): nlobjFile;

/**
 * Create a template renderer used to generate various outputs based on a template.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3056572.html#bridgehead_N3057362
 * @restriction Server SuiteScript only
 * @governance 10 units
 */
declare function nlapiCreateTemplateRenderer(): nlobjTemplateRenderer;

/**
 * Create an email merger used to assemble subject and body text of an email from a given FreeMarker template and a set of associated records.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3027360.html#bridgehead_4183390688
 * @restriction Server SuiteScript only
 *
 * @param templateId - Internal ID of the template
 *
 * @since 2015.1
 */
declare function nlapiCreateEmailMerger(id: number): nlobjEmailMerger;

/**
 * Create an entry in the script execution log (note that execution log entries are automatically purged after 30 days).
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3055475.html#bridgehead_N3056214
 *
 * @param type - One of the following log types: debug|audit|error|emergency
 * @param title - Log title (up to 90 characters supported)
 * @param [details] - Log details (up to 3000 characters supported)
 *
 * @since 2008.1
 */
declare function nlapiLogExecution(type: 'DEBUG' | 'AUDIT' | 'ERROR' | 'EMERGENCY' | 'debug' | 'audit' | 'error' | 'emergency', title: string | number, details?: string | number): void;

/**
 * Queue a scheduled script for immediate execution and return the status QUEUED if successfull.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3053136.html#bridgehead_N3053226
 * @restriction Server SuiteScript only
 * @governance 20 units
 *
 * @param script - Script ID or internal ID of scheduled script
 * @param [deployment] - Script ID or internal ID of scheduled script deployment. If empty, the first "free" deployment (i.e. status = Not Scheduled or Completed) will be used
 * @param parameters - Object of parameter name->values used in this scheduled script instance
 * @return QUEUED or null if no available deployments were found or the current status of the deployment specified if it was not available.
 *
 * @since 2008.1
 */
declare function nlapiScheduleScript(script: string | number, deployment?: string | number, parameters?: Object): string;

/**
 * Creates a recovery point saving the state of the script's execution. When NetSuite resumes execution of the script, it resumes the script at the specified recovery point. Also note that when the script is resumed, its governance units are reset. Be aware, however, all scheduled scripts have a 50 MB memory limit.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3053136.html#bridgehead_N3053603
 * @restriction Scheduled Scripts only
 *
 * @since 2008.1
 */
declare function nlapiSetRecoveryPoint(): {
  status: 'SUCCESS' | 'FAILURE' | 'RESUME',
  reason: 'SS_NLAPIYIELDSCRIPT' | 'SS_ABORT' | 'SS_MAJOR_RELEASE' | 'SS_EXCESSIVE_MEMORY_FOOTPRINT' | 'SS_CANCELLED' | 'SS_DISALLOWED_OBJECT_REFERENCE' | 'SSS_FILE_OBJECT_NOT_SERIALIZABLE' | 'SSS_SCRIPT_DESERIALIZATION_FAILURE',
  size: number,
  information: string
};

/**
 * Creates a recovery point and, when executed, continues from the recovery point. The newly resubmitted script has its governance units reset.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3053136.html#bridgehead_N3053967
 * @restriction Scheduled Scripts only
 *
 * @since 2008.2
 */
declare function nlapiYieldScript(): {
  status: 'FAILURE' | 'RESUME',
  reason: 'SS_NLAPIYIELDSCRIPT' | 'SS_ABORT' | 'SS_MAJOR_RELEASE' | 'SS_EXCESSIVE_MEMORY_FOOTPRINT' | 'SS_CANCELLED' | 'SS_DISALLOWED_OBJECT_REFERENCE' | 'SSS_FILE_OBJECT_NOT_SERIALIZABLE' | 'SSS_SCRIPT_DESERIALIZATION_FAILURE',
  size: number,
  information: string
};

/**
 * Return a URL with a generated OAuth token.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3068135.html#bridgehead_N3070781
 * @restriction Suitelets and Portlets only
 * @governance 20 units
 *
 * @param ssoAppKey
 *
 * @since 2009.2
 */
declare function nlapiOutboundSSO(ssoAppKey: string): string;

/**
 * Loads a configuration record
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3071027.html#bridgehead_N3071117
 * @restriction Server SuiteScript only
 * @governance 10 units
 *
 * @param type
 *
 * @since 2009.2
 */
declare function nlapiLoadConfiguration(type: 'companyinformation' | 'companypreferences' | 'userpreferences' | 'accountingpreferences' | 'accountingperiods' | 'taxperiods' | 'companyfeatures'): nlobjConfiguration;

/**
 * Commits all changes to a configuration record.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3071027.html#bridgehead_N3071374
 * @restriction Server SuiteScript only
 * @governance 10 units
 *
 * @param setup - Record
 * @return (void)
 *
 * @since 2009.2
 */
declare function nlapiSubmitConfiguration(setup: nlobjConfiguration): void;

/**
 * Convert a String into a Date object.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3061128.html#bridgehead_N3061544
 *
 * @param str - Date string in the user's date format, timeofday format, or datetime format
 * @param format - Format type to use with "date" being the default
 *
 * @since 2005.0
 */
declare function nlapiStringToDate(str: string, format?: 'date' | 'datetime' | 'datetimetz' | 'timeofday' | string): Date;

/**
 * Convert a Date object into a String
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3061128.html#bridgehead_N3061413
 *
 * @param date - Date object being converted to a string
 * @param [formattype] - Format type to use with "date" being the default
 *
 * @since 2005.0
 */
declare function nlapiDateToString(date: Date, formattype?: 'date' | 'datetime' | 'datetimetz' | 'timeofday' | string): string;

/**
 * Add days to a Date object and returns a new Date
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3061128.html#bridgehead_N3061216
 *
 * @param date - Date object used to calculate the new date
 * @param days - The number of days to add to this date object.
 *
 * @since 2008.1
 */
declare function nlapiAddDays(date: Date, days: number): Date;

/**
 * Add months to a Date object and returns a new Date.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3061128.html#bridgehead_N3061315
 *
 * @param date - Date object used to calculate the new date
 * @param months - The number of months to add to this date object.
 *
 * @since 2008.1
 */
declare function nlapiAddMonths(date: Date, months: number): Date;

/**
 * Format a number for data entry into a currency field.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3061682.html#bridgehead_N3062001
 *
 * @param str - Numeric string used to format for display as currency using user's locale
 *
 * @since 2008.1
 */
declare function nlapiFormatCurrency(str: string): string;

/**
 * Encrypt a String using a AES hash function.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3062090.html#bridgehead_N3062113
 *
 * @param string - String to encrypt
 * @param algorithm - AES
 * @param key - Secret key to use only for AES
 *
 * @since 2009.2
 */
declare function nlapiEncrypt(string: string, algorithm: 'aes', key: string): string;

/**
 * Encode a String using base64.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3062090.html#bridgehead_N3062113
 *
 * @param string - String to encode
 * @param [algorithm] - Base64
 *
 * @since 2009.2
 */
declare function nlapiEncrypt(string: string, algorithm?: 'base64'): string;

/**
 * Decrypt an encrypted String using an AES hash function.
 * @see unknown
 * @restriction This function is no longer officially supported by NetSuite, but it still works.
 *
 * @param encryptedString - Encrypted string being decrypted
 * @param algorithm - Algorithm to use
 * @param key - Secret key to use
 *
 * @since 2009.2
 */
declare function nlapiDecrypt(encryptedString: string, algorithm: 'aes', key: string): string;

/**
 * Decode an encoded String using base64.
 * @see unknown
 * @restriction This function is no longer officially supported by NetSuite, but it still works.
 *
 * @param encodedString - Encoded string being decoded
 * @param algorithm - Base64
 *
 * @since 2009.2
 */
declare function nlapiDecrypt(encodedString: string, algorithm: 'base64'): string;

/**
 * Escape a String for use in an XML document.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3062490.html#bridgehead_N3062641
 *
 * @param text - String to escape
 *
 * @since 2008.1
 */
declare function nlapiEscapeXML(text: string): string;

/**
 * Convert a String into an XML document. Note that in Server SuiteScript XML is supported natively by the JS runtime using the e4x standard (http://en.wikipedia.org/wiki/E4X)
 * This makes scripting XML simpler and more efficient
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3062490.html#bridgehead_N3066421
 *
 * @param str - String being parsed into an XML document
 *
 * @since 2008.1
 */
declare function nlapiStringToXML(str: string): Document;

/**
 * Convert an XML document into a String.  Note that in Server SuiteScript XML is supported natively by the JS runtime using the e4x standard (http://en.wikipedia.org/wiki/E4X)
 * This makes scripting XML data simpler and more efficient
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3062490.html#bridgehead_N3066507
 *
 * @param xml - Document being serialized into a string
 *
 * @since 2008.1
 */
declare function nlapiXMLToString(xml: Document): string;

/**
 * Validate that a given XML document conforms to a given XML schema. XML Schema Definition (XSD) is the expected schema format.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3062490.html#bridgehead_3866114154
 *
 * @param xmlDocument - XML to validate
 * @param schemaDocument - Schema to enforce
 * @param schemaFolderId - If your schema utilizes <import> or <include> tags which refer to sub-schemas by file name (as opposed to URL),
 *                 provide the Internal Id of File Cabinet folder containing these sub-schemas as the schemaFolderId argument
 * @throws {nlobjError} error containsing validation failure message(s) - limited to first 10
 *
 * @since 2014.1
 */
declare function nlapiValidateXML(xmlDocument: Document, schemaDocument: Document, schemaFolderId: string): void;

/**
 * select a value from an XML node using XPath. Supports custom namespaces (nodes in default namespace can be referenced using "nlapi" as the prefix)
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3062490.html#bridgehead_N3062948
 *
 * @param node - Node being queried
 * @param xpath - String containing XPath expression.
 *
 * @since 2008.2
 */
declare function nlapiSelectValue(node: Node, xpath: string): string;

/**
 * Select an array of values from an XML node using XPath. Supports custom namespaces (nodes in default namespace can be referenced using "nlapi" as the prefix)
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3062490.html#bridgehead_N3066324
 *
 * @param node - Node being queried
 * @param xpath - String containing XPath expression.
 *
 * @since 2008.1
 */
declare function nlapiSelectValues(node: Node, xpath: string): string[];

/**
 * Select a node from an XML node using XPath. Supports custom namespaces (nodes in default namespace can be referenced using "nlapi" as the prefix)
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3062490.html#bridgehead_N3062752
 *
 * @param node - Node being queried
 * @param xpath - String containing XPath expression.
 *
 * @since 2008.1
 */
declare function nlapiSelectNode(node: Node, xpath: string): Node;

/**
 * Select an array of nodes from an XML node using XPath. Supports custom namespaces (nodes in default namespace can be referenced using "nlapi" as the prefix)
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3062490.html#bridgehead_N3062851
 *
 * @param node - Node being queried
 * @param xpath - String containing XPath expression.
 *
 * @since 2008.1
 */
declare function nlapiSelectNodes(node: Node, xpath: string): Node[];

/**
 * Calculate exchange rate between two currencies as of today or an optional effective date.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3061682.html#bridgehead_N3061743
 * @governance 10 units
 *
 * @param fromCurrency - Internal ID or currency code of currency we are converting from
 * @param toCurrency - Internal ID or currency code of currency we are converting to
 * @param [date] - String containing date of effective exchange rate. defaults to today
 *
 * @since 2009.1
 */
declare function nlapiExchangeRate(fromCurrency: string | number, toCurrency: string | number, date?: string): number;

/**
 * Initiates a workflow on-demand and returns the workflow instance ID for the workflow-record combination.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3071596.html#bridgehead_N3071662
 * @governance 20 units
 *
 * @param recordtype - Record type ID of the workflow base record
 * @param id - Internal ID of the base record
 * @param workflowid - Internal ID or script ID for the workflow definition
 *
 * @since 2010.1
 */
declare function nlapiInitiateWorkflow(recordtype: string, id: number, workflowid: string | number): number;

/**
 * Initiates a workflow on-demand and returns the workflow instance ID for the workflow-record combination.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3071596.html#bridgehead_3935223900
 * @governance 20 units
 *
 * @param recordtype - Record type ID of the workflow base record
 * @param id - Internal ID of the base record
 * @param {string|number workflowid internal ID or script ID for the workflow definition
 * @param parameters
 *
 * @since 2014.2
 */
declare function nlapiInitiateWorkflowAsync(recordType: string, id: number, workflowId: string | number, parameters: Object): string;

/**
 * Triggers a workflow on a record.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3071596.html#bridgehead_N3071827
 * @governance 20 units
 *
 * @param recordtype - Record type ID of the workflow base record
 * @param id - Internal ID of the base record
 * @param workflowid - Internal ID or script ID for the workflow definition
 * @param actionid - Internal ID or script ID of the action script
 * @param stateid - Internal ID or script ID of the state contains the referenced add button action
 *
 * @since 2010.1
 */
declare function nlapiTriggerWorkflow(recordtype: string, id: number, workflowid: string | number, actionid: string | number, stateid: string | number): number;

/**
 * Create a subrecord on a sublist field on the current record on a page.
 * @see unknown
 * @deprecated
 * @restriction supported in client and user event scripts only.
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @retun {nlobjSubrecord}
 *
 * @since 2011.2
 */
declare function nlapiCreateCurrentLineSubrecord(type: string, fieldId: string): nlobjSubrecord;

/**
 * edit a subrecord on a sublist field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3035888.html#bridgehead_N3036495
 * @restriction supported in client and user event scripts only.
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @retun {nlobjSubrecord}
 *
 * @since 2011.2
 */
declare function nlapiEditCurrentLineItemSubrecord(type: string, fieldId: string): nlobjSubrecord;

/**
 * remove a subrecord on a sublist field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3035888.html#bridgehead_N3036832
 * @restriction supported in client and user event scripts only.
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @retun {void}
 *
 * @since 2011.2
 */
declare function nlapiRemoveCurrentLineItemSubrecord(type: string, fieldId: string): void;

/**
 * view a subrecord on a sublist field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3035888.html#bridgehead_N3037114
 * @restriction supported in client and user event scripts only.
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @retun {nlobjSubrecord}
 *
 * @since 2011.2
 */
declare function nlapiViewCurrentLineItemSubrecord(type: string, fieldId: string): void;

/**
 * view a subrecord on a sublist field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3035888.html#bridgehead_N3038664
 * @restriction supported in client and user event scripts only.
 *
 * @param type - Sublist name
 * @param fieldId - Sublist field name
 * @param linenum
 * @retun {nlobjSubrecord}
 *
 * @since 2011.2
 */
declare function nlapiViewLineItemSubrecord(type: string, fieldId: string, linenum: number): nlobjSubrecord;

/**
 * get a cache object.
 * @see https://system.netsuite.com/help/helpcenter/en_US/PDF/scareleasenotespredenali.pdf
 *
 * @param name - Name of the cache
 *
 * @since 2013.2
 */
declare function nlapiGetCache(name: string): nlobjCache;

/**
 * create a subrecord on body field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3035888.html#bridgehead_N3036333
 * @restriction supported in client and user event scripts only.
 *
 * @param fieldId - Body field name
 * @retun {nlobjSubrecord}
 *
 * @since 2011.2
 */
declare function nlapiCreateSubrecord(fieldId: string): nlobjSubrecord;

/**
 * edit a subrecord on body field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3035888.html#bridgehead_N3036670
 * @restriction supported in client and user event scripts only.
 *
 * @param fieldId - Body field name
 * @retun {nlobjSubrecord}
 *
 * @since 2011.2
 */
declare function nlapiEditSubrecord(fieldId: string): nlobjSubrecord;

/**
 * remove a subrecord on body field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3035888.html#bridgehead_N3036980
 * @restriction supported in client and user event scripts only.
 *
 * @param fieldId - Body field name
 * @retun {void}
 *
 * @since 2011.2
 */
declare function nlapiRemoveSubrecord(fieldId: string): void;

/**
 * view a subrecord on body field on the current record on a page.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3035888.html#bridgehead_N3038841
 * @restriction supported in client and user event scripts only.
 *
 * @param fieldId - Body field name
 * @retun {nlobjSubrecord}
 *
 * @since 2011.2
 */
declare function nlapiViewSubrecord(fieldId: string): nlobjSubrecord;

/**
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html
 */
declare interface nlobjSearch {
  /**
   * Adds a single return column to the search. Note that existing columns on the search are not changed.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3112448
   *
   * @param column
   * @return {void}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  addColumn(column: nlobjSearchColumn): void;
  
  /**
   * Adds a single return column to the search. Note that existing columns on the search are not changed.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3112586
   *
   * @param columns
   * @return {void}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  addColumns(columns: nlobjSearchColumn[]): void;
  
  /**
   * Adds a single search filter. Note that existing filters on the search are not changed.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3112724
   *
   * @param filter
   * @return {void}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  addFilter(filter: nlobjSearchFilter): void;
  
  /**
   * Adds a search filter list. Note that existing filters on the search are not changed.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3113485
   *
   * @param filters
   * @return {void}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  addFilters(filters: nlobjSearchFilter[]): void;
  
  /**
   * Deletes a saved search that was created through scripting or through the UI.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3113015
   *
   * @return {void}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  deleteSearch(): void;
  
  /**
   * Gets the search return columns for the search.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3113155
   *
   * @return {nlobjSearchColumn[]}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  getColumns(): nlobjSearchColumn[];
  
  /**
   * Gets the filter expression for the search.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3113267
   *
   * @return {(string|number|(string|number|(string|number)[])[])[]}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.2
   */
  getFilterExpression(): (string | number | (string | number | (string | number)[])[])[];
  
  /**
   * Gets the filters for the search.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3113485
   *
   * @return {nlobjSearchFilter[]}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  getFilters(): nlobjSearchFilter[];
  
  /**
   * Gets the internal ID of the search.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3113615
   *
   * @return {string}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  getId(): string;
  
  /**
   * Gets whether the nlobjSearch has been set as public search.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3113763
   *
   * @return {boolean}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  getIsPublic(): boolean;
  
  /**
   * Gets the script ID of the search.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3113869
   *
   * @return {string}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  getScriptId(): string;
  
  /**
   * Returns the record type that the search was based on.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3114017
   *
   * @return {string}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  getSearchType(): string;
  
  /**
   * Runs an on demand search, returning the results.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3114123
   *
   * @return {nlobjSearchResultSet}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  runSearch(): nlobjSearchResultSet;
  
  /**
   * Saves the search created by nlapiCreateSearch(type, filters, columns).
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3114333
   *
   * @param [title] - The title you want to give the saved search. Note that title is required when saving a new search, but optional when saving a search that was loaded using nlapiLoadSearch(type, id) or has already been saved by calling saveSearch(title, scriptId) before.
   * @param [scriptId] - The script ID you want to assign to the saved search. All saved search script IDs must be prefixed with customsearch, for example: 'customsearch_my_new_search', 'customsearchmynewsearch'
   * @return {number}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  saveSearch(title?: string, scriptId?: string): number;
  
  /**
   * Sets the return columns for this search, overwriting any prior columns. If null is passed in it is treated as if it were an empty array and removes any existing columns on the search.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3114539
   *
   * @param columns - The nlobjSearchColumn[] you want to set in the search. Passing in null or [] removes all columns from the search.
   * @return {void}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  setColumns(columns: nlobjSearchColumn[]): void;
  
  /**
   * Sets the search filter expression, overwriting any prior filters. If null is passed in, it is treated as if it was an empty array and removes any existing filters on this search.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3114684
   *
   * @param filterExpression - The filter expression you want to set in the search. Passing in null or [] removes all filters from the search.
   * @return {void}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.2
   */
  setFilterExpression(filterExpression: (string | number | (string | number | (string | number)[])[])[]): void;
  
  /**
   * Sets the filters for this search, overwriting any prior filters. If null is passed in it is treated as if it were an empty array and removes any existing filters on this search.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3114881
   *
   * @param filters - The nlobjSearchFilter[] you want to set in the search. Passing in null or [] removes all filters from the search.
   * @return {void}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  setFilters(filters: nlobjSearchFilter[]): void;
  
  /**
   * Sets whether the search is public or private. By default, all searches created through nlapiCreateSearch(type, filters, columns) are private.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3115056
   *
   * @param type - Set to true to designate the search as a public search. Set to false to designate the search as a private search.
   * @return {void}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  setIsPublic(type: boolean): void;
  
  /**
   * Acts like nlapiSetRedirectURL(type, identifier, id, editmode, parameters) but redirects end users to a populated search definition page.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3115199
   *
   * @return {void}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  setRedirectURLToSearch(): void;
  
  /**
   * Acts like nlapiSetRedirectURL(type, identifier, id, editmode, parameters) but redirects end users to a search results page.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3111947.html#bridgehead_N3115348
   *
   * @return {void}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  setRedirectURLToSearchResults(): void;
}

/**
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3124405.html
 */
declare interface nlobjSearchResultSet {
  /**
   * Calls the developer-defined callback function for every result in this set. There is a limit of 4000 rows in the result set returned in forEachResult().
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3124405.html#bridgehead_N3125880
   *
   * @param callback - A JavaScript function. This may be defined as a separate named function, or it may be an anonymous inline function.
   * @return {void}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  forEachResult(callback: (result: nlobjSearchResult) => void): void;
  
  /**
   * Returns a list of nlobjSearchColumn objects for this result set. This list contains one nlobjSearchColumn object for each result column in the nlobjSearchResult objects returned by this search.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3124405.html#bridgehead_N3126028
   *
   * @return {nlobjSearchColumn[]}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  getColumns(): nlobjSearchColumn[];
  
  /**
   * Calls the developer-defined callback function for every result in this set. There is a limit of 4000 rows in the result set returned in forEachResult().
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3124405.html#bridgehead_N3126123
   *
   * @param start - The index number of the first result to return, inclusive.
   * @param end - The index number of the last result to return, exclusive.
   * @return {nlobjSearchResult[]}
   *
   * @method
   * @memberOf nlobjSearch
   *
   * @since 2012.1
   */
  getResults(start: number, end: number): nlobjSearchResult[];
}

/**
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072807749.html
 */
declare interface StandardLine {
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072807749.html#bridgehead_4072809012
   *
   * @return {number}
   */
  getEntityId(): number;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072807749.html#bridgehead_4072809239
   *
   * @return {number}
   */
  getId(): number;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072807749.html#bridgehead_4072809408
   *
   * @return {number}
   */
  getSubsidiaryId(): number;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072807749.html#bridgehead_4072809564
   *
   * @return {string}
   */
  getTaxableAmount(): string;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072807749.html#bridgehead_4072809701
   *
   * @return {string}
   */
  getTaxAmount(): string;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072807749.html#bridgehead_4072809887
   *
   * @return {number}
   */
  getTaxItemId(): number;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072807749.html#bridgehead_4072810791
   *
   * @return {string}
   */
  getTaxType(): string;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072822491.html#bridgehead_4072823691
   *
   * @return {number}
   */
  getAccountId(): number;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072822491.html#bridgehead_4072825140
   *
   * @return {number}
   */
  getClassId(): number;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072822491.html#bridgehead_4072824896
   *
   * @return {string}
   */
  getCreditAmount(): string;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072822491.html#bridgehead_4211980715
   *
   * @return {string}
   */
  getDebitAmount(): string;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072822491.html#bridgehead_4072825263
   *
   * @return {number}
   */
  getDepartmentId(): number;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072822491.html#bridgehead_4072825667
   *
   * @return {number}
   */
  getLocationId(): number;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072822491.html#bridgehead_4072826271
   *
   * @return {string}
   */
  getMemo(): string;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072822491.html#bridgehead_4525244628
   *
   * @param segmentId
   * @return {number}
   */
  getSegmentValueId(segmentId: string): number;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072807749.html#bridgehead_4072812464
   *
   * @return {boolean}
   */
  isPosting(): boolean;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072807749.html#bridgehead_4072812705
   *
   * @return {boolean}
   */
  isTaxable(): boolean;
}

/**
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072803330.html
 */
declare interface StandardLines {
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072803330.html#bridgehead_4072806151
   *
   * @return {number}
   */
  getCount(): number;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072803330.html#bridgehead_4072806950
   *
   * @param index
   * @return {StandardLine}
   */
  getLine(index: number): StandardLine;
}

/**
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072818715.html
 */
declare interface CustomLine {
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072818715.html#bridgehead_4072819093
   *
   * @return {boolean}
   */
  isBookSpecific(): boolean;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072818715.html#bridgehead_4072819740
   *
   * @param bookSpecific
   * @return {void}
   */
  setBookSpecific(bookSpecific: boolean): void;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072818715.html#bridgehead_4072826446
   *
   * @param accountId
   * @return {void}
   */
  setAccountId(accountId: number): void;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072822491.html#bridgehead_4072823691
   *
   * @return {number}
   */
  getAccountId(): number;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072818715.html#bridgehead_4072826998
   *
   * @param classId
   * @return {void}
   */
  setClassId(classId: number): void;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072822491.html#bridgehead_4072825140
   *
   * @return {number}
   */
  getClassId(): number;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072818715.html#bridgehead_4072826841
   *
   * @param credit
   * @return {void}
   */
  setCreditAmount(credit: string): void;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072822491.html#bridgehead_4072824896
   *
   * @return {string}
   */
  getCreditAmount(): string;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072818715.html#bridgehead_4211975932
   *
   * @param debit
   * @return {void}
   */
  setDebitAmount(debit: string): void;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072822491.html#bridgehead_4211980715
   *
   * @return {string}
   */
  getDebitAmount(): string;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072818715.html#bridgehead_4072827152
   *
   * @param departmentId
   * @return {void}
   */
  setDepartmentId(departmentId: number): void;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072822491.html#bridgehead_4072825263
   *
   * @return {number}
   */
  getDepartmentId(): number;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072818715.html#bridgehead_4072827304
   *
   * @param locationId
   * @return {void}
   */
  setLocationId(locationId: number): void;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072822491.html#bridgehead_4072825667
   *
   * @return {number}
   */
  getLocationId(): number;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072818715.html#bridgehead_4072827453
   *
   * @param memo
   * @return {void}
   */
  setMemo(memo: string): void;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072822491.html#bridgehead_4072826271
   *
   * @return {string}
   */
  getMemo(): string;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072818715.html#bridgehead_4525237186
   *
   * @param segmentId
   * @param segmentValueId
   * @return {void}
   */
  setSegmentValueId(segmentId: string, segmentValueId: number): void;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072822491.html#bridgehead_4525244628
   *
   * @param segmentId
   * @return {number}
   */
  getSegmentValueId(segmentId: string): number;
}

/**
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072804185.html
 */
declare interface CustomLines {
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072804185.html#bridgehead_4072815957
   *
   * @return CustomLine
   */
  addNewLine(): CustomLine;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072804185.html#bridgehead_4072816378
   *
   * @return {number}
   */
  getCount(): number;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072804185.html#bridgehead_4072816543
   *
   * @param index
   * @return {CustomLine}
   */
  getLine(index: number): CustomLine;
}

/**
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072804487.html
 */
declare interface AccountingBook {
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072804487.html#bridgehead_4072821077
   *
   * @return {number}
   */
  getId(): number;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4072804487.html#bridgehead_4072821999
   *
   * @return {boolean}
   */
  isPrimary(): boolean;
}

/**
 * Return a new instance of nlobjRecord used for accessing and manipulating record objects.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html
 *
 * @classDescription Class definition for business records in the system.
 * @constructor
 *
 * @since 2008.2
 */
declare interface nlobjRecord {
  
  new(): nlobjRecord;
  
  /**
   * Return the internalId of the record or NULL for new records.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3098054
   *
   * @return Return the integer value of the record ID.
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2008.1
   */
  getId(): number;
  
  /**
   * Return the recordType corresponding to this record.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3100903
   *
   * @return The string value of the record name internal ID
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2008.1
   */
  getRecordType(): string;
  
  /**
   * Return field metadata for field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3097358
   *
   * @param fieldId - Field name
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.1
   */
  getField(fieldId: string): nlobjField;
  
  /**
   * Return sublist metadata for sublist.
   * @see unknown
   * @restriction Server SuiteScript only
   *
   * @param type - Sublist name
   * @return {nlobjSubList}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  getSubList(type: string): nlobjSubList;
  
  /**
   * Return field metadata for field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3099409
   *
   * @param type - Matrix sublist name
   * @param fieldId - Matrix field name
   * @param column - Matrix column (1-based)
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  getMatrixField(type: string, fieldId: string, column: number): nlobjField;
  
  /**
   * Return metadata for sublist field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3098202
   *
   * @param type - Sublist name
   * @param fieldId - Sublist field name
   * @param [linenum] - Line number (1-based). If empty, the current sublist field is returned. only settable for sublists of type list
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  getLineItemField(type: string, fieldId: string, linenum?: number): nlobjField;
  
  /**
   * Return metadata for sublist field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3098360
   *
   * @param type - Matrix sublist name
   * @param fieldId - Matrix field name
   * @param linenum - Line number
   * @param column - Matrix column (1-based)
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  getLineItemMatrixField(type: string, fieldId: string, linenum: number, column: number): nlobjField;
  
  /**
   * Set the value of a field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3102523
   *
   * @param fieldId - Field name
   * @param value - Field value
   * @return {void}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2008.1
   */
  setFieldValue(fieldId: string, value: string | number): void;
  
  /**
   * Set the values of a multi-select field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3102622
   *
   * @param fieldId - Field name
   * @param values - String array containing field values
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2008.1
   */
  setFieldValues(fieldId: string, values: (string | number)[]): void;
  
  /**
   * Return the value of a field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3097800
   *
   * @param fieldId - Field name
   * @return {string}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2008.1
   */
  getFieldValue(fieldId: string): string;
  
  /**
   * Return the selected values of a multi-select field as an Array.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3097930
   *
   * @param fieldId - Field name
   * @return {string[]}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2008.1
   */
  getFieldValues(fieldId: string): string[];
  
  /**
   * Set the value (via display value) of a select field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3102242
   * @restriction only supported for select fields
   *
   * @param fieldId - Field name
   * @param text - Field display value
   * @return {void}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2008.2
   */
  setFieldText(fieldId: string, text: string): void;
  
  /**
   * Set the values (via display values) of a multi-select field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3102373
   * @restriction only supported for multi-select fields
   *
   * @param fieldId - Field name
   * @param texts - Array of field display values
   * @return {void}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2008.2
   */
  setFieldTexts(fieldId: string, texts: string[]): void;
  
  /**
   * Return the display value for a select field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3097475
   * @restriction only supported for select fields
   *
   * @param fieldId - Field name
   * @return {string}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2008.2
   */
  getFieldText(fieldId: string): string;
  
  /**
   * Return the selected display values of a multi-select field as an Array.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3097637
   * @restriction only supported for multi-select fields
   *
   * @param fieldId - Field name
   * @return {string[]}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2008.2
   */
  getFieldTexts(fieldId: string): string[];
  
  /**
   * Get the value of a matrix header field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3100718
   *
   * @param type - Matrix sublist name
   * @param fieldId - Matrix field name
   * @param column - Matrix column index (1-based)
   * @return {string}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  getMatrixValue(type: string, fieldId: string, column: number): string;
  
  /**
   * Set the value of a matrix header field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3103246
   *
   * @param type - Matrix sublist name
   * @param fieldId - Matrix field name
   * @param column - Matrix column index (1-based)
   * @param value - Field value
   * @return {void}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  setMatrixValue(type: string, fieldId: string, column: number, value: string): void;
  
  /**
   * Return an Array of all field names on the record.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3096923
   *
   * @return {string[]}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2008.1
   */
  getAllFields(): string[];
  
  /**
   * Return an Array of all field names on a record for a particular sublist.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3097066
   *
   * @param group - Sublist name
   * @return {string[]}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2008.2
   */
  getAllLineItemFields(group: string): string[];
  
  /**
   * Set the value of a sublist field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3102723
   *
   * @param group - Sublist name
   * @param fieldId - Sublist field name
   * @param linenum - Line number (1-based)
   * @param value - Sublist field value
   * @return {void}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2008.1
   */
  setLineItemValue(group: string, fieldId: string, linenum: number, value: string): void;
  
  /**
   * Set the value of a sublist field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_3751504655
   *
   * @param group - Sublist name
   * @param fieldId - Sublist field name
   * @param linenum - Line number (1-based)
   * @param dateTime - Datetime value
   * @param timezone - Value
   * @return {void}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2013.2
   */
  setLineItemDateTimeValue(group: string, fieldId: string, linenum: number, dateTime: string, timezone: string | number): void;
  
  /**
   * Return the value of a sublist field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3098928
   *
   * @param group - Sublist name
   * @param fieldId - Sublist field name
   * @param linenum - Line number (1-based)
   * @return {string}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2008.1
   */
  getLineItemValue(group: string, fieldId: string, linenum: number): string;
  
  /**
   * Return the values of a multiselect sublist field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3099101
   * @restriction Server SuiteScript only
   *
   * @param group - Sublist name
   * @param fieldId - Sublist field name
   * @param linenum - Line number (1-based)
   * @return {string[]}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2012.1
   */
  getLineItemValues(group: string, fieldId: string, linenum: number): string[];
  
  /**
   * Return the value of a sublist field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3099101
   *
   * @param group - Sublist name
   * @param fieldId - Sublist field name
   * @param linenum - Line number (1-based)
   * @param timezone - Value
   * @return {string}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2013.2
   */
  getLineItemDateTimeValue(group: string, fieldId: string, linenum: number, timezone: string | number): string;
  
  /**
   * Return the text value of a sublist field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3098730
   *
   * @param group - Sublist name
   * @param fieldId - Sublist field name
   * @param linenum - Line number (1-based)
   * @return {string}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2008.2
   */
  getLineItemText(group: string, fieldId: string, linenum: number): string;
  
  /**
   * Set the current value of a sublist field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3102048
   *
   * @param group - Sublist name
   * @param fieldId - Sublist field name
   * @param value - Sublist field value
   * @return {void}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  setCurrentLineItemValue(group: string, fieldId: string, value: string | number): void;
  
  /**
   * Set the current text of a sublist field.
   * This was found in an example script written by Oracle NetSuite, but it is not documented nor defined in nlobjRecord
   * This may have been documented and supported at one time and been removed
   * @see unknown
   *
   * @param group - Sublist name
   * @param fieldId - Sublist field name
   * @param text - Sublist field text
   * @return {void}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  
  // setCurrentLineItemText(group: string, fieldId: string, text: string): void;
  
  /**
   * Return the current value of a sublist field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_3946493892
   *
   * @param group - Sublist name
   * @param fieldId - Sublist field name
   * @return {string}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  getCurrentLineItemValue(group: string, fieldId: string): string;
  
  /**
   * Return the current values of a multiselect sublist field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3096333
   * @restriction Server SuiteScript only
   *
   * @param group - Sublist name
   * @param fieldId - Sublist field name
   * @return {string[]}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  getCurrentLineItemValues(group: string, fieldId: string): string[];
  
  /**
   * Set the current value of a sublist field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_3751502141
   *
   * @param group - Sublist name
   * @param fieldId - Sublist field name
   * @param value - Sublist field value
   * @param timezone - Value
   * @return {void}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2013.2
   */
  setCurrentLineItemDateTimeValue(group: string, fieldId: string, value: string, timezone: string | number): void;
  
  /**
   * Return the current value of a sublist field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_3751240027
   *
   * @param group - Sublist name
   * @param fieldId - Sublist field name
   * @param timezone - Value
   * @return {string}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2013.2
   */
  getCurrentLineItemDateTimeValue(group: string, fieldId: string, timezone: string | number): string;
  
  /**
   * Return the current display value of a sublist field.
   * This may have been documented and supported at one time and been removed
   * @see unknown
   *
   * @param group - Sublist name
   * @param fieldId - Sublist field name
   * @return {string}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  
  // getCurrentLineItemText(group: string, fieldId: string): string;
  
  /**
   * Set the current value of a sublist matrix field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3101871
   *
   * @param group - Matrix sublist name
   * @param fieldId - Matrix field name
   * @param column - Matrix field column index (1-based)
   * @param value - Matrix field value
   * @return {void}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  setCurrentLineItemMatrixValue(group: string, fieldId: string, column: number, value: string): void;
  
  /**
   * Return the current value of a sublist matrix field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3097186
   *
   * @param group - Matrix sublist name
   * @param fieldId - Matrix field name
   * @param column - Matrix field column index (1-based)
   * @return {string}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  getCurrentLineItemMatrixValue(group: string, fieldId: string, column: number): string;
  
  /**
   * Return the number of columns for a matrix field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3099247
   *
   * @param group - Matrix sublist name
   * @param fieldId - Matrix field name
   * @return {number}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  getMatrixCount(group: string, fieldId: string): number;
  
  /**
   * Return the number of lines in a sublist.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3098122
   *
   * @param group - Sublist name
   * @return {number}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  getLineItemCount(group: string): number;
  
  /**
   * Return line number for 1st occurence of field value in a sublist column.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3096783
   *
   * @param group - Sublist name
   * @param fieldId - Sublist field name
   * @param value - Sublist field value
   * @return {number}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  findLineItemValue(group: string, fieldId: string, value: string | number): number;
  
  /**
   * Return line number for 1st occurence of field value in a sublist column.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3096610
   *
   * @param group - Sublist name
   * @param fieldId - Sublist field name
   * @param column - Matrix column index (1-based)
   * @param value - Matrix field value
   * @return {number}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  findLineItemMatrixValue(group: string, fieldId: string, column: number, value: string | number): number;
  
  /**
   * Insert a new line into a sublist.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3100978
   *
   * @param group - Sublist name
   * @param [linenum] - Line index at which to insert line
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  insertLineItem(group: string, linenum?: number): void;
  
  /**
   * Remove an existing line from a sublist.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3101110
   *
   * @param group - Sublist name
   * @param [linenum] - Line number to remove
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  removeLineItem(group: string, linenum?: number): void;
  
  /**
   * Insert and select a new line in a sublist.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3101704
   *
   * @param group - Sublist name
   * @return {void}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  selectNewLineItem(group: string): void;
  
  /**
   * Select an existing line in a sublist.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3101557
   *
   * @param group - Sublist name
   * @param linenum - Line number to select
   * @return {void}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  selectLineItem(group: string, linenum: number): void;
  
  /**
   * Commit the current line in a sublist.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3095664
   *
   * @param group - Sublist name
   * @param [ignoreRecalc] - Sublist name
   * @return {void}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2009.2
   */
  commitLineItem(group: string, ignoreRecalc?: boolean): void;
  
  /**
   * set the value of a field.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_3751503301
   *
   * @param fieldId - Field name
   * @param value - Field value
   * @return {void}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 20013.2
   */
  setDateTimeValue(fieldId: string, value: string, timezone: string): void;
  
  /**
   * Return the value of a field on the current record on a page.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_3751498025
   * @restriction supported in client and user event scripts only.
   *
   * @param fieldId - The field name
   * @param timezone - Olson value
   * @return {string}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2013.2
   */
  getDateTimeValue(fieldId: string, timezone: string): string;
  
  /**
   * Create a subrecord from a body field on the parent record.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3096002
   *
   * @param fldname - The field name
   * @return {nlobjSubrecord}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2011.2
   */
  createSubrecord(fldname: string): nlobjSubrecord;
  
  /**
   * View a subrecord from a body field on the parent record.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3103820
   *
   * @param fldname - The field name
   * @return {nlobjSubrecord}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2011.2
   */
  viewSubrecord(fldname: string): nlobjSubrecord;
  
  /**
   * Edit a subrecord from a body field on the parent record.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3096465
   *
   * @param fldname - The field name
   * @return {nlobjSubrecord}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2011.2
   */
  editSubrecord(fldname: string): nlobjSubrecord;
  
  /**
   * Remove a subrecord from a body field on the parent record.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3096465
   *
   * @param fldname - The field name
   * @return {void}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2011.2
   */
  removeSubrecord(fldname: string): void;
  
  /**
   * Create a subrecord from a sublist field on the parent record.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3095828
   *
   * @param group - Sublist name
   * @param fldname - The field name
   * @return {nlobjSubrecord}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2011.2
   */
  createCurrentLineItemSubrecord(group: string, fldname: string): nlobjSubrecord;
  
  /**
   * View a subrecord from a sublist field on the parent record.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3103452
   *
   * @param group - Sublist name
   * @param fldname - The field name
   * @return {nlobjSubrecord}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2011.2
   */
  viewCurrentLineItemSubrecord(group: string, fldname: string): nlobjSubrecord;
  
  /**
   * Edit a subrecord from a sublist field on the parent record.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3096162
   *
   * @param group - Sublist name
   * @param fldname - The field name
   * @return {nlobjSubrecord}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2011.2
   */
  editCurrentLineItemSubrecord(group: string, fldname: string): nlobjSubrecord;
  
  /**
   * Remove a subrecord from a sublist field on the parent record.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3101258
   *
   * @param group - Sublist name
   * @param fldname - The field name
   * @return {void}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2011.2
   */
  removeCurrentLineItemSubrecord(group: string, fldname: string): void;
  
  /**
   * View a subrecord from a sublist field on the parent record.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3094136.html#bridgehead_N3103640
   *
   * @param group - Sublist name
   * @param fldname - The field name
   * @param linenum - Line number
   * @return {nlobjSubrecord}
   *
   * @method
   * @memberOf nlobjRecord
   *
   * @since 2011.2
   */
  viewLineItemSubrecord(group: string, fldname: string, linenum: number): nlobjSubrecord;
}

/**
 * Return a new instance of nlobjSubrecord.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3126577.html
 *
 * @classDescription Class definition for nlobjSubrecord.
 * @constructor
 *
 * @since 2011.2
 */
declare interface nlobjSubrecord extends nlobjRecord {
  
  new(): nlobjSubrecord;
  
  /**
   * Use this method to cancel the current processing of the subrecord and revert subrecord data to the last committed change (submitted in the last commit() call).
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3126577.html#bridgehead_N3126668
   *
   * @return {void}
   *
   * @method
   * @memberOf nlobjSubrecord
   *
   * @since 2011.2
   */
  cancel(): void;
  
  /**
   * Use this method to commit the subrecord to the parent record
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3126577.html#bridgehead_N3126777
   *
   * @return {void}
   *
   * @method
   * @memberOf nlobjSubrecord
   *
   * @since 2011.2
   */
  commit(): void;
}

/**
 * Return a new instance of nlobjConfiguration..
 *
 * @classDescription Class definition for interacting with setup/configuration pages
 * @constructor
 *
 * @since 2009.2
 */
declare interface nlobjConfiguration {
  
  new(): nlobjConfiguration;
  
  /**
   * return the type corresponding to this setup record.
   *
   * @return {string}
   *
   * @method
   * @memberOf nlobjConfiguration
   *
   * @since 2009.2
   */
  getType(): string;
  
  /**
   * return field metadata for field.
   *
   * @param fieldId - Field name
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjConfiguration
   *
   * @since 2009.2
   */
  getField(fieldId: string): nlobjField;
  
  /**
   * set the value of a field.
   *
   * @param fieldId - Field name
   * @param value - Field value
   * @return {void}
   *
   * @method
   * @memberOf nlobjConfiguration
   *
   * @since 2009.2
   */
  setFieldValue(fieldId: string, value: string): void;
  
  /**
   * Set the values of a multi-select field.
   * @restriction only supported for multi-select fields
   *
   * @param fieldId - Field name
   * @param values - Field values
   * @return {void}
   *
   * @method
   * @memberOf nlobjConfiguration
   *
   * @since 2009.2
   */
  setFieldValues(fieldId: string, values: string[]): void;
  
  /**
   * return the value of a field.
   *
   * @param fieldId - Field name
   * @return {string}
   *
   * @method
   * @memberOf nlobjConfiguration
   *
   * @since 2009.2
   */
  getFieldValue(fieldId: string): string;
  
  /**
   * return the selected values of a multi-select field as an Array.
   * @restriction only supported for multi-select fields
   *
   * @param fieldId - Field name
   * @return {string[]}
   *
   * @method
   * @memberOf nlobjConfiguration
   *
   * @since 2009.2
   */
  getFieldValues(fieldId: string): string[];
  
  /**
   * set the value (via display value) of a field.
   * @restriction only supported for select fields
   *
   * @param fieldId - Field name
   * @param text - Field display text
   * @return {void}
   *
   * @method
   * @memberOf nlobjConfiguration
   *
   * @since 2009.2
   */
  setFieldText(fieldId: string, text: string): void;
  
  /**
   * set the values (via display values) of a multi-select field.
   * @restriction only supported for multi-select fields
   *
   * @param fieldId - Field name
   * @param texts - Array of field display text values
   * @return {void}
   *
   * @method
   * @memberOf nlobjConfiguration
   *
   * @since 2009.2
   */
  setFieldTexts(fieldId: string, texts: string[]): void;
  
  /**
   * return the text value of a field.
   * @restriction only supported for select fields
   *
   * @param fieldId - Field name
   * @return {string}
   *
   * @method
   * @memberOf nlobjConfiguration
   *
   * @since 2009.2
   */
  getFieldText(fieldId: string): string;
  
  /**
   * return the selected text values of a multi-select field as an Array.
   * @param fieldId - Field name
   * @return {string[]}
   *
   * @method
   * @memberOf nlobjConfiguration
   *
   * @since 2009.2
   */
  getFieldTexts(fieldId: string): void;
  
  /**
   * return an Array of all field names on the record.
   * @return {string[]}
   *
   * @method
   * @memberOf nlobjConfiguration
   *
   * @since 2009.2
   */
  getAllFields(): string[];
}

/**
 * Return a new instance of nlobjFile used for accessing and manipulating files in the file cabinet.
 *
 * @classDescription Encapsulation of files (media items) in the file cabinet.
 * @constructor
 *
 * @since 2009.1
 */
declare interface nlobjFile {
  
  new(): nlobjFile;
  
  /**
   * Return the name of the file.
   * @return {string}
   *
   * @method
   * @memberOf nlobjFile
   *
   * @since 2009.1
   */
  getName(): string;
  
  /**
   * Sets the name of a file.
   * @param name - The name of the file
   * @return {void}
   *
   * @method
   * @memberOf nlobjFile
   *
   * @since 2009.1
   */
  setName(name: string): void;
  
  /**
   * return the internal ID of the folder that this file is in.
   * @return {number}
   *
   * @method
   * @memberOf nlobjFile
   *
   * @since 2009.1
   */
  getFolder(): number;
  
  /**
   * sets the internal ID of the folder that this file is in.
   * @param folder
   * @return {void}
   *
   * @method
   * @memberOf nlobjFile
   *
   * @since 2009.1
   */
  setFolder(folder: number): void;
  
  /**
   * gets the character encoding for the file.
   * @return {'UTF-8'|'windows-1252'|'ISO-8859-1'|'GB18030'|'SHIFT_JIS'|'MacRoman'|'GB2312'|'Big5'}
   *
   * @method
   * @memberOf nlobjFile
   *
   * @since 2010.2
   */
  getEncoding(): 'UTF-8' | 'windows-1252' | 'ISO-8859-1' | 'GB18030' | 'SHIFT_JIS' | 'MacRoman' | 'GB2312' | 'Big5';
  
  /**
   * sets the character encoding for the file.
   * @param encoding
   * @return {void}
   *
   * @method
   * @memberOf nlobjFile
   *
   * @since 2010.2
   */
  setEncoding(encoding: 'UTF-8' | 'windows-1252' | 'ISO-8859-1' | 'GB18030' | 'SHIFT_JIS' | 'MacRoman' | 'GB2312' | 'Big5'): void;
  
  /**
   * return true if the file is "Available without Login".
   * @return {boolean}
   *
   * @method
   * @memberOf nlobjFile
   *
   * @since 2009.1
   */
  isOnline(): boolean;
  
  /**
   * sets the file's "Available without Login" status.
   * @param online
   * @return {void}
   *
   * @method
   * @memberOf nlobjFile
   *
   * @since 2009.1
   */
  setIsOnline(online: boolean): void;
  
  /**
   * return true if the file is inactive.
   * @return {boolean}
   *
   * @method
   * @memberOf nlobjFile
   *
   * @since 2009.1
   */
  isInactive(): boolean;
  
  /**
   * sets the file's inactive status.
   * @param inactive
   * @return {void}
   *
   * @method
   * @memberOf nlobjFile
   *
   * @since 2009.1
   */
  setIsInactive(inactive: boolean): void;
  
  /**
   * return the file description.
   * @return {string}
   *
   * @method
   * @memberOf nlobjFile
   *
   * @since 2009.1
   */
  getDescription(): string;
  
  /**
   * sets the file's description.
   * @param descr - The file description
   * @return {void}
   *
   * @method
   * @memberOf nlobjFile
   *
   * @since 2009.1
   */
  setDescription(descr: string): void;
  
  /**
   * Return the id of the file (if stored in the FC).
   * @return {number}
   *
   * @method
   * @memberOf nlobjFile
   *
   * @since 2009.1
   */
  getId(): number;
  
  /**
   * Return the size of the file in bytes.
   * @return {number}
   *
   * @method
   * @memberOf nlobjFile
   *
   * @since 2009.1
   */
  getSize(): number;
  
  /**
   * Return the URL of the file (if stored in the FC).
   * @return {string}
   *
   * @method
   * @memberOf nlobjFile
   *
   * @since 2009.1
   */
  getURL(): string;
  
  /**
   * Return the type of the file.
   * @return {'AUTOCAD'|'BMPIMAGE'|'CSV'|'EXCEL'|'FLASH'|'GIFIMAGE'|'GZIP'|'HTMLDOC'|'ICON'|'JAVASCRIPT'|'JPGIMAGE'|'JSON'|'MESSAGERFC'|'MP3'|'MPEGMOVIE'|'MSPROJECT'|'PDF'|'PJPGIMAGE'|'PLAINTEXT'|'PNGIMAGE'|'POSTSCRIPT'|'POWERPOINT'|'QUICKTIME'|'RTF'|'SMS'|'STYLESHEET'|'TIFFIMAGE'|'VISIO'|'WORD'|'XMLDOC'|'ZIP'}
   *
   * @method
   * @memberOf nlobjFile
   *
   * @since 2009.1
   */
  getType(): 'AUTOCAD' | 'BMPIMAGE' | 'CSV' | 'EXCEL' | 'FLASH' | 'GIFIMAGE' | 'GZIP' | 'HTMLDOC' | 'ICON' | 'JAVASCRIPT' | 'JPGIMAGE' | 'JSON' | 'MESSAGERFC' | 'MP3' | 'MPEGMOVIE' | 'MSPROJECT' | 'PDF' | 'PJPGIMAGE' | 'PLAINTEXT' | 'PNGIMAGE' | 'POSTSCRIPT' | 'POWERPOINT' | 'QUICKTIME' | 'RTF' | 'SMS' | 'STYLESHEET' | 'TIFFIMAGE' | 'VISIO' | 'WORD' | 'XMLDOC' | 'ZIP';
  
  /**
   * Return the value (base64 encoded for binary types) of the file.
   * @return {string}
   *
   * @method
   * @memberOf nlobjFile
   *
   * @since 2009.1
   */
  getValue(): string;
}

/**
 * Return a new instance of nlobjSearchFilter filter objects used to define search criteria.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3120682.html
 *
 * @classDescription search filter
 * @constructor
 * @param name - Filter name.
 * @param join - Internal ID for joined search where this filter is defined
 * @param operator - Operator name (i.e. anyOf, contains, lessThan, etc..)
 * @param value
 * @param value2
 *
 * @since 2007.0
 */
declare interface nlobjSearchFilter {
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3120682.html#bridgehead_N3120926
   *
   * @param fieldId
   * @param join
   * @param operator
   * @param [value1]
   * @param [value2]
   * @return {nlobjSearchFilter}
   */
  new(fieldId: string, join: string, operator: 'after' | 'allof' | 'any' | 'anyof' | 'before' | 'between' | 'contains' | 'doesnotcontain' | 'doesnotstartwith' | 'equalto' | 'greaterthan' | 'greaterthanorequalto' | 'haskeywords' | 'is' | 'isempty' | 'isnot' | 'isnotempty' | 'lessthan' | 'lessthanorequalto' | 'noneof' | 'notafter' | 'notallof' | 'notbefore' | 'notbetween' | 'notequalto' | 'notgreaterthan' | 'notgreaterthanorequalto' | 'notlessthan' | 'notlessthanorequalto' | 'noton' | 'notonorafter' | 'notonorbefore' | 'notwithin' | 'on' | 'onorafter' | 'onorbefore' | 'startswith' | 'within', value1?: string | string[] | number | Date, value2?: string | Date): nlobjSearchFilter;
  
  /**
   * Return the name of this search filter.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3120682.html#bridgehead_N3121716
   *
   * @return {string}
   *
   * @method
   * @memberOf nlobjSearchFilter
   *
   * @since 2007.0
   */
  getName(): string;
  
  /**
   * Return the join id for this search filter.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3120682.html#bridgehead_N3121629
   *
   * @return {string}
   *
   * @method
   * @memberOf nlobjSearchFilter
   *
   * @since 2008.1
   */
  getJoin(): string;
  
  /**
   * Return the filter operator used.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3120682.html#bridgehead_N3121888
   *
   * @return {'after'|'allof'|'any'|'anyof'|'before'|'between'|'contains'|'doesnotcontain'|'doesnotstartwith'|'equalto'|'greaterthan'|'greaterthanorequalto'|'haskeywords'|'is'|'isempty'|'isnot'|'isnotempty'|'lessthan'|'lessthanorequalto'|'noneof'|'notafter'|'notallof'|'notbefore'|'notbetween'|'notequalto'|'notgreaterthan'|'notgreaterthanorequalto'|'notlessthan'|'notlessthanorequalto'|'noton'|'notonorafter'|'notonorbefore'|'notwithin'|'on'|'onorafter'|'onorbefore'|'startswith'|'within'}
   *
   * @method
   * @memberOf nlobjSearchFilter
   *
   * @since 2008.2
   */
  getOperator(): 'after' | 'allof' | 'any' | 'anyof' | 'before' | 'between' | 'contains' | 'doesnotcontain' | 'doesnotstartwith' | 'equalto' | 'greaterthan' | 'greaterthanorequalto' | 'haskeywords' | 'is' | 'isempty' | 'isnot' | 'isnotempty' | 'lessthan' | 'lessthanorequalto' | 'noneof' | 'notafter' | 'notallof' | 'notbefore' | 'notbetween' | 'notequalto' | 'notgreaterthan' | 'notgreaterthanorequalto' | 'notlessthan' | 'notlessthanorequalto' | 'noton' | 'notonorafter' | 'notonorbefore' | 'notwithin' | 'on' | 'onorafter' | 'onorbefore' | 'startswith' | 'within';
  
  /**
   * Return the formula for this search filter.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3120682.html#bridgehead_N3121543
   *
   * @return {string}
   *
   * @method
   * @memberOf nlobjSearchFilter
   *
   * @since 2011.1
   */
  getFormula(): string;
  
  /**
   * Set the formula for this search filter.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3120682.html#bridgehead_N3122263
   *
   * @param formula
   * @return {nlobjSearchFilter}
   *
   * @method
   * @memberOf nlobjSearchFilter
   *
   * @since 2011.1
   */
  setFormula(formula: string): nlobjSearchFilter;
  
  /**
   * Return the summary type for this search filter.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3120682.html#bridgehead_N3121802
   *
   * @return {'max'|'min'|'avg'|'sum'|'count'}
   *
   * @method
   * @memberOf nlobjSearchFilter
   *
   * @since 2011.1
   */
  getSummaryType(): 'max' | 'min' | 'avg' | 'sum' | 'count';
  
  /**
   * Set the summary type for this search filter.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3120682.html#bridgehead_N3122263
   *
   * @param type
   * @return {nlobjSearchFilter}
   *
   * @method
   * @memberOf nlobjSearchFilter
   *
   * @since 2011.1
   */
  setSummaryType(type: 'max' | 'min' | 'avg' | 'sum' | 'count'): nlobjSearchFilter;
}

declare class nlobjSearchFilter {
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3120682.html#bridgehead_N3120926
   *
   * @param fieldId
   * @param join
   * @param operator
   * @param [value1]
   * @param [value2]
   */
  constructor(fieldId: string, join: string, operator: 'after' | 'allof' | 'any' | 'anyof' | 'before' | 'between' | 'contains' | 'doesnotcontain' | 'doesnotstartwith' | 'equalto' | 'greaterthan' | 'greaterthanorequalto' | 'haskeywords' | 'is' | 'isempty' | 'isnot' | 'isnotempty' | 'lessthan' | 'lessthanorequalto' | 'noneof' | 'notafter' | 'notallof' | 'notbefore' | 'notbetween' | 'notequalto' | 'notgreaterthan' | 'notgreaterthanorequalto' | 'notlessthan' | 'notlessthanorequalto' | 'noton' | 'notonorafter' | 'notonorbefore' | 'notwithin' | 'on' | 'onorafter' | 'onorbefore' | 'startswith' | 'within', value1?: string | string[] | number | Date, value2?: string | Date);
}

/**
 * Return a new instance of nlobjSearchColumn used for column objects used to define search return columns.
 *
 * @classDescription search column.
 * @constructor
 * @param name - Column name.
 * @param join - Internal ID for joined search where this column is defined
 * @param summary
 *
 * @since 2007.0
 */
declare interface nlobjSearchColumn {
  
  /**
   *
   * @param fieldId
   * @param [join]
   * @param [summary]
   * @return
   */
  new(fieldId: string, join?: string, summary?: string): nlobjSearchColumn;
  
  /**
   * return the name of this search column.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3117719.html#bridgehead_N3118808
   *
   * @return {string}
   *
   * @method
   * @memberOf nlobjSearchColumn
   *
   * @since 2008.1
   */
  getName(): string;
  
  /**
   * return the join id for this search column.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3117719.html#bridgehead_N3118607
   *
   * @return {string}
   *
   * @method
   * @memberOf nlobjSearchColumn
   *
   * @since 2008.1
   */
  getJoin(): string;
  
  /**
   * return the label of this search column.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3117719.html#bridgehead_N3118693
   *
   * @return {string}
   *
   * @method
   * @memberOf nlobjSearchColumn
   *
   * @since 2009.1
   */
  getLabel(): string;
  
  /**
   * return the summary type (avg,group,sum,count) of this search column.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3117719.html#bridgehead_N3118977
   *
   * @return {string}
   *
   * @method
   * @memberOf nlobjSearchColumn
   *
   * @since 2008.1
   */
  getSummary(): string;
  
  /**
   * return formula for this search column.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3117719.html#bridgehead_N3118195
   *
   * @return {string}
   *
   * @method
   * @memberOf nlobjSearchColumn
   *
   * @since 2009.1
   */
  getFormula(): string;
  
  /**
   * return nlobjSearchColumn with formula set.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3117719.html#bridgehead_N3119081
   *
   * @return {nlobjSearchColumn}
   * @param {string}
   *
   * @method
   * @memberOf nlobjSearchColumn
   *
   * @since 2011.1
   */
  setFormula(formula: string): nlobjSearchColumn;
  
  /**
   * return nlobjSearchColumn sorted in either ascending or descending order.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3117719.html#bridgehead_N3120366
   *
   * @param [descending] - If not set, defaults to false, which returns column data in ascending order.
   * @return {nlobjSearchColumn}
   *
   * @method
   * @memberOf nlobjSearchColumn
   *
   * @since 2010.1
   */
  setSort(descending?: boolean): nlobjSearchColumn;
  
  /**
   * return nlobjSearchColumn with label set.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3117719.html#bridgehead_N3120259
   *
   * @param label
   * @return {nlobjSearchColumn}
   *
   * @method
   * @memberOf nlobjSearchColumn
   *
   * @since 2011.1
   */
  setLabel(label: string): nlobjSearchColumn;
  
  /**
   * return nlobjSearchColumn with special function set.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3117719.html#bridgehead_N3119209
   *
   * @param functionId - Special function ID
   * @return {nlobjSearchColumn}
   *
   * @method
   * @memberOf nlobjSearchColumn
   *
   * @since 2011.1
   */
  setFunction(functionId: 'percentOfTotal' | 'absoluteValue' | 'ageInDays' | 'ageInHours' | 'ageInMonths' | 'ageInWeeks' | 'ageInYears' | 'calendarWeek' | 'day' | 'month' | 'negate' | 'numberAsTime' | 'quarter' | 'rank' | 'round' | 'roundToHundredths' | 'roundToTenths' | 'weekOfYear' | 'year'): nlobjSearchColumn;
  
  /**
   * return nlobjSearchColumn for which the minimal or maximal value should be found when returning the nlobjSearchColumn value.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3117719.html#bridgehead_N3120540
   *
   * @param fieldId - The name of the search column for which the minimal or maximal value should be found
   * @param join - The join id for this search column
   * @return {nlobjSearchColumn}
   *
   * @method
   * @memberOf nlobjSearchColumn
   *
   * @since 2012.1
   */
  setWhenOrderedBy(fieldId: string, join: string): nlobjSearchColumn;
}

declare class nlobjSearchColumn {
  constructor(fieldId: string, join?: string, summary?: string);
}

/**
 * Return a new instance of nlobjSearchResult used for search result row object.
 *
 * @classDescription Class definition for interacting with the results of a search operation
 * @constructor
 */
declare interface nlobjSearchResult {
  
  new(): nlobjSearchResult;
  
  /**
   * return the internalId for the record returned in this row.
   * @method
   * @memberOf nlobjSearchResult
   * @return {number}
   */
  getId(): string;
  
  /**
   * return the recordtype for the record returned in this row.
   * @method
   * @memberOf nlobjSearchResult
   * @return {string}
   */
  getRecordType(): string;
  
  /**
   * return the value for a return column specified by name, join ID, and summary type.
   * @param fieldId - The name of the search column
   * @return {string}
   *
   * @method
   * @memberOf nlobjSearchResult
   *
   * @since 2008.1
   */
  getValue(fieldId: string): string;
  
  /**
   * return the value for a return column specified by name, join ID, and summary type.
   * @param column - The name of the search column
   * @return {string}
   *
   * @method
   * @memberOf nlobjSearchResult
   *
   * @since 2008.1
   */
  getValue(column: nlobjSearchColumn): string;
  
  /**
   * return the value for a return column specified by name, join ID, and summary type.
   * @param fieldId - The name of the search column
   * @param join - The join ID for the search column
   * @param [summary] - Summary type specified for this column
   * @return {string}
   *
   * @method
   * @memberOf nlobjSearchResult
   *
   * @since 2008.1
   */
  getValue(fieldId: string, join: string, summary?: string): string;
  
  /**
   * return the text value of this return column if it's a select field.
   * @param fieldId - The name of the search column
   * @return {string}
   *
   * @method
   * @memberOf nlobjSearchResult
   *
   * @since 2008.1
   */
  getText(fieldId: string | nlobjSearchColumn): string;
  
  /**
   * return the text value of this return column if it's a select field.
   * @param fieldId - The name of the search column
   * @param join - The join ID for the search column
   * @param [summary] - Summary type specified for this column
   * @return {string}
   *
   * @method
   * @memberOf nlobjSearchResult
   *
   * @since 2008.1
   */
  getText(fieldId: string, join: string, summary?: string): string;
  
  /**
   * return an array of all nlobjSearchColumn objects returned in this search.
   * @return {nlobjSearchColumn[]}
   *
   * @method
   * @memberOf nlobjSearchResult
   *
   * @since 2009.2
   */
  getAllColumns(): nlobjSearchColumn[];
}

declare class nlobjSearchResult {
  constructor();
}

/**
 * Return a new instance of nlobjContext used for user and script context information.
 *
 * @classDescription Utility class providing information about the current user and the script runtime.
 * @constructor
 */
declare interface nlobjContext {
  
  new(): nlobjContext;
  
  /**
   * return the name of the current user.
   * @return {string}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2007.0
   */
  getName(): string;
  
  /**
   * return the internalId of the current user.
   * @return {string}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2007.0
   */
  getUser(): string;
  
  /**
   * return the internalId of the current user's role.
   * @return {string}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2007.0
   */
  getRole(): string;
  
  /**
   * return the script ID of the current user's role.
   * @return {string}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2008.2
   */
  getRoleId(): string;
  
  /**
   * return the internalId of the current user's center type.
   * @return {string}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2008.2
   */
  getRoleCenter(): string;
  
  /**
   * return the email address of the current user.
   * @return {string}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2007.0
   */
  getEmail(): string;
  
  /**
   * return the internal ID of the contact logged in on behalf of a customer, vendor, or partner. It returns -1 for non-contact logins
   * @return {number}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2009.1
   */
  getContact(): number;
  
  /**
   * return the account ID of the current user.
   * @return {string}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2007.0
   */
  getCompany(): string;
  
  /**
   * return the internalId of the current user's department.
   * @return {number}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2007.0
   */
  getDepartment(): number;
  
  /**
   * return the internalId of the current user's location.
   * @return {number}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2007.0
   */
  getLocation(): number;
  
  /**
   * return the internalId of the current user's subsidiary.
   * @return {number}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2007.0
   */
  getSubsidiary(): number;
  
  /**
   * return the execution context for this script: webservices|csvimport|client|userinterface|scheduledscript|portlet|suitelet|custommassupdate|debugger
   * @return {'webservices'|'csvimport'|'client'|'userinterface'|'scheduledscript'|'portlet'|'suitelet'|'custommassupdate'|'debugger'}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2007.0
   */
  getExecutionContext(): 'webservices' | 'csvimport' | 'client' | 'userinterface' | 'scheduledscript' | 'portlet' | 'suitelet' | 'custommassupdate' | 'debugger';
  
  /**
   * return the amount of usage units remaining for this script.
   * @return {number}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2007.0
   */
  getRemainingUsage(): number;
  
  /**
   * return true if feature is enabled, false otherwise
   * @param name
   * @return {boolean}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2009.2
   */
  getFeature(name: 'ACCOUNTING' | 'ACCOUNTINGPERIODS' | 'ACHVEND' | 'ACTIVITYCODES' | 'ADDONS' | 'ADMINKERNELPERM' | 'ADVANCEDBILLOFMATERIALS' | 'ADVANCEDEMPLOYEEPERMISSIONS' | 'ADVANCEDJOBS' | 'ADVANCEDPRINTING' | 'ADVANCEDPROCUREMENTAPPROVALS' | 'ADVANCEDPROJECTACCOUNTING' | 'ADVANCEDPROMOTIONS' | 'ADVANCEDREVENUERECOGNITION' | 'ADVANCEDREVENUERECOGNITIONAPP' | 'ADVANCEDSITECUST' | 'ADVANCEDSITEMANAGEMENT' | 'ADVBILLING' | 'ADVBINSERIALLOTMGMT' | 'ADVFORECASTING' | 'ADVINVENTORYMGMT' | 'ADVPARTNERACCESS' | 'ADVRECEIVING' | 'ADVSHIPPING' | 'ADVSUBSCRIPTIONBILLING' | 'ADVTAXENGINE' | 'ADVWEBREPORTS' | 'ADVWEBSEARCH' | 'ALTSALESADVFORECAST' | 'ALTSALESAMOUNT' | 'AMORTIZATION' | 'APPROVALROUTING' | 'ASSEMBLIES' | 'ASYNCCUSTOMER' | 'ASYNCSALESORDER' | 'AUTOAPPLYPROMOTIONS' | 'AUTOLOCATIONASSIGNMENT' | 'AVAILABLETOPROMISE' | 'BARCODES' | 'BILLINGACCOUNTS' | 'BILLINGCLASSES' | 'BILLINGRATECARDS' | 'BILLINGWORKCENTER' | 'BILLSCOSTS' | 'BINMANAGEMENT' | 'BLANKETPURCHASEORDERS' | 'BOXNET' | 'CAMPAIGNASSISTANT' | 'CAMPAIGNSUBSCRIPTIONS' | 'CCTRACKING' | 'CHARGEBASEDBILLING' | 'CHECKOUTSUBDOMAIN' | 'CLASSES' | 'COMMERCECATEGORIES' | 'COMMERCESEARCHANALYTICS' | 'COMMISSIONONCUSTOMFIELDS' | 'COMMISSIONS' | 'COMPENSATIONTRACKING' | 'CONSOLPAYMENTS' | 'CREATESUITEBUNDLES' | 'CRM' | 'CRMTIME' | 'CRM_TEMPLATE_CATEGORIES' | 'CROSSSUBSIDIARYFULFILLMENT' | 'CUSTOMCODE' | 'CUSTOMERACCESS' | 'CUSTOMGLLINES' | 'CUSTOMRECORDS' | 'CUSTOMSEGMENTS' | 'CUSTOMTRANSACTIONS' | 'DEPARTMENTS' | 'DISTRIBUTIONRESOURCEPLANNING' | 'DOCUMENTPUBLISHING' | 'DOCUMENTS' | 'DOWNLOADITEMS' | 'DROPSHIPMENTS' | 'DUPLICATES' | 'DYNALLOCATION' | 'EFFECTIVEDATING' | 'EFT' | 'EMAILINTEGRATION' | 'EMPLOYEECENTERPUBLISHING' | 'EMPLOYEECHANGEREQUESTS' | 'EMPPERMS' | 'ENHANCEDINVENTORYLOCATION' | 'ENHANCEDPREMIERPAYROLL' | 'ESCALATIONRULES' | 'ESTIMATES' | 'EXPENSEALLOCATION' | 'EXPREPORTS' | 'EXTCRM' | 'EXTREMELIST' | 'EXTSTORE' | 'FCADVANCEDSECURITY' | 'FULFILLMENTREQUEST' | 'FXRATEUPDATES' | 'GAINLOSSACCTMAPPING' | 'GIFTCERTIFICATES' | 'GLAUDITNUMBERING' | 'GRIDORDERMANAGEMENT' | 'GROSSPROFIT' | 'GROUPAVERAGECOSTING' | 'HELPDESK' | 'HISTORICALMETRICS' | 'HRANALYSIS' | 'I18NTAXREPORTS' | 'IC_FRAMEWORK_OR_IC_NETTING' | 'INBOUNDCASEEMAIL' | 'INBOUNDSHIPMENT' | 'INSTALLMENTS' | 'INTERCOMPANYAUTODROPSHIP' | 'INTERCOMPANYELIMINATION' | 'INTERCOMPANYAUTOELIMINATIONENGINE' | 'INTERCOMPANYTIMEEXPENSE' | 'INTRANET' | 'INTRANSITPAYMENTS' | 'INVENTORY' | 'INVENTORYCOUNT' | 'INVENTORYSTATUS' | 'IPADDRESSRULES' | 'ISSUEDB' | 'ITEMDEMANDPLANNING' | 'ITEMOPTIONS' | 'JOBCOSTING' | 'JOBMANAGEMENT' | 'JOBREQUISITION' | 'JOBS' | 'KNOWLEDGEBASE' | 'KPIREPORTS' | 'KUDOS' | 'LANDEDCOST' | 'LEADMANAGEMENT' | 'LOCATIONS' | 'LOTNUMBEREDINVENTORY' | 'MAILMERGE' | 'MARKETING' | 'MATRIXITEMS' | 'MERCHANDISEHIERARCHY' | 'MFGROUTING' | 'MFGWORKINPROCESS' | 'MOBILEPUSHNTF' | 'MOSS' | 'MULTIBOOKMULTICURR' | 'MULTICURRENCY' | 'MULTICURRENCYCUSTOMER' | 'MULTICURRENCYVENDOR' | 'MULTILANGUAGE' | 'MULTILOCINVT' | 'MULTIPARTNER' | 'MULTIPLEBUDGETS' | 'MULTIPLECALENDARS' | 'MULTISHIPTO' | 'MULTISITE' | 'MULTISUBSIDIARYCUSTOMER' | 'MULTIVENDOR' | 'MULTPRICE' | 'NETSUITEAPPROVALSWORKFLOW' | 'NOTALTSALESAMOUNT' | 'NOTMULTIPARTNER' | 'NOTTEAMSELLING' | 'OIDC' | 'ONLINEORDERING' | 'OPENIDSSO' | 'OPPORTUNITIES' | 'OTHERSUBLISTFIELDS' | 'OUTLOOKINTEGRATION_V3' | 'PARTNERACCESS' | 'PARTNERCOMMISSIONS' | 'PAYABLES' | 'PAYCHECKJOURNAL' | 'PAYPALINTEGRATION' | 'PAYROLL' | 'PAYROLLSERVICE' | 'PERIODENDJOURNALENTRIES' | 'PERSONALIZED_CATALOG_VIEWS' | 'PICKPACKSHIP' | 'PLANNEDWORK' | 'PRM' | 'PROJECTTASKMANAGER' | 'PROMOCODES' | 'PURCHASECARDDATA' | 'PURCHASECONTRACTS' | 'PURCHASEORDERS' | 'PURCHASEREQS' | 'QUANTITYPRICING' | 'RECEIVABLES' | 'REQUISITIONS' | 'RESOURCEALLOCATIONAPPROVAL' | 'RESOURCEALLOCATIONCHART' | 'RESOURCEALLOCATIONS' | 'RESOURCESKILLSETS' | 'RETURNAUTHS' | 'REVENUECOMMITMENTS' | 'REVENUERECOGNITION' | 'REVRECSALESORDERFORECASTING' | 'REVRECVSOE' | 'RFQ' | 'RULEBASEDRECOGNITIONTREATMENT' | 'RUM' | 'SALESCAMPAIGNS' | 'SALESORDERS' | 'SAMLSSO' | 'SDFCOPYTOACCOUNT' | 'SERIALIZEDINVENTORY' | 'SERVERSIDESCRIPTING' | 'SERVICEPRINTEDCHECKS' | 'SERVICEPRINTEDW2S' | 'SFA' | 'SFA_AND_NOTASA' | 'SHIPPINGLABELS' | 'SITELOCATIONALIASES' | 'SOFTDESCRIPTORS' | 'STACKABLEPROMOTIONS' | 'STANDARDCOSTING' | 'STATACCOUNTING' | 'STOREPICKUP' | 'SUBSCRIPTIONBILLING' | 'SUITEANALYTICSCONNECT' | 'SUITEAPPCONTROLCENTER' | 'SUITEAPPDEVELOPMENTFRAMEWORK' | 'SUITECOMMERCE' | 'SUITECOMMERCE_ADVANCED' | 'SUITECOMMERCE_IN_STORE' | 'SUITECOMMERCE_MY_ACCOUNT' | 'SUITESIGNON' | 'SUITESOCIAL' | 'SUPPLTAXCALC' | 'SUPPLYALLOCATION' | 'SUPPLYCHAINCONTROLTOWER' | 'SUPPLYCHAINMANAGEMENT' | 'SUPPLYCHAINPREDICTEDRISKS' | 'SUPPORT' | 'TABLEAU' | 'TALENTMANAGEMENT' | 'TAXAUDITFILES' | 'TBA' | 'TEAMSELLING' | 'TELEPHONY' | 'TIMEBASEDPRICING' | 'TIMEBASEDPRICINGSUITEAPP' | 'TIMETRACKING' | 'TRANDELETIONREASONCODE' | 'UNITSOFMEASURE' | 'UPSELL' | 'URLCOMPONENTALIASES' | 'USR' | 'VENDORACCESS' | 'VENDORPREPAYMENTS' | 'VENDORRETURNAUTHS' | 'WARRANTYANDREPAIRSMANAGEMENT' | 'WBS' | 'WEBAPPLICATIONS' | 'WEBAPPLICATIONVERSIONING' | 'WEBDUPLICATEEMAILMANAGEMENT' | 'WEBHOSTING' | 'WEBSERVICESEXTERNAL' | 'WEBSITE' | 'WEBSTORE' | 'WEEKLYTIMESHEETS' | 'WEEKLYTIMESHEETSNEWUI' | 'WITHHOLDINGTAX' | 'WORKFLOW' | 'WORKORDERS' | 'accounting' | 'accountingperiods' | 'achvend' | 'activitycodes' | 'addons' | 'adminkernelperm' | 'advancedbillofmaterials' | 'advancedemployeepermissions' | 'advancedjobs' | 'advancedprinting' | 'advancedprocurementapprovals' | 'advancedprojectaccounting' | 'advancedpromotions' | 'advancedrevenuerecognition' | 'advancedrevenuerecognitionapp' | 'advancedsitecust' | 'advancedsitemanagement' | 'advbilling' | 'advbinseriallotmgmt' | 'advforecasting' | 'advinventorymgmt' | 'advpartneraccess' | 'advreceiving' | 'advshipping' | 'advsubscriptionbilling' | 'advtaxengine' | 'advwebreports' | 'advwebsearch' | 'altsalesadvforecast' | 'altsalesamount' | 'amortization' | 'approvalrouting' | 'assemblies' | 'asynccustomer' | 'asyncsalesorder' | 'autoapplypromotions' | 'autolocationassignment' | 'availabletopromise' | 'barcodes' | 'billingaccounts' | 'billingclasses' | 'billingratecards' | 'billingworkcenter' | 'billscosts' | 'binmanagement' | 'blanketpurchaseorders' | 'boxnet' | 'campaignassistant' | 'campaignsubscriptions' | 'cctracking' | 'chargebasedbilling' | 'checkoutsubdomain' | 'classes' | 'commercecategories' | 'commercesearchanalytics' | 'commissiononcustomfields' | 'commissions' | 'compensationtracking' | 'consolpayments' | 'createsuitebundles' | 'crm' | 'crmtime' | 'crm_template_categories' | 'crosssubsidiaryfulfillment' | 'customcode' | 'customeraccess' | 'customgllines' | 'customrecords' | 'customsegments' | 'customtransactions' | 'departments' | 'distributionresourceplanning' | 'documentpublishing' | 'documents' | 'downloaditems' | 'dropshipments' | 'duplicates' | 'dynallocation' | 'effectivedating' | 'eft' | 'emailintegration' | 'employeecenterpublishing' | 'employeechangerequests' | 'empperms' | 'enhancedinventorylocation' | 'enhancedpremierpayroll' | 'escalationrules' | 'estimates' | 'expenseallocation' | 'expreports' | 'extcrm' | 'extremelist' | 'extstore' | 'fcadvancedsecurity' | 'fulfillmentrequest' | 'fxrateupdates' | 'gainlossacctmapping' | 'giftcertificates' | 'glauditnumbering' | 'gridordermanagement' | 'grossprofit' | 'groupaveragecosting' | 'helpdesk' | 'historicalmetrics' | 'hranalysis' | 'i18ntaxreports' | 'ic_framework_or_ic_netting' | 'inboundcaseemail' | 'inboundshipment' | 'installments' | 'intercompanyautodropship' | 'intercompanyelimination' | 'intercompanyautoeliminationengine' | 'intercompanytimeexpense' | 'intranet' | 'intransitpayments' | 'inventory' | 'inventorycount' | 'inventorystatus' | 'ipaddressrules' | 'issuedb' | 'itemdemandplanning' | 'itemoptions' | 'jobcosting' | 'jobmanagement' | 'jobrequisition' | 'jobs' | 'knowledgebase' | 'kpireports' | 'kudos' | 'landedcost' | 'leadmanagement' | 'locations' | 'lotnumberedinventory' | 'mailmerge' | 'marketing' | 'matrixitems' | 'merchandisehierarchy' | 'mfgrouting' | 'mfgworkinprocess' | 'mobilepushntf' | 'moss' | 'multibookmulticurr' | 'multicurrency' | 'multicurrencycustomer' | 'multicurrencyvendor' | 'multilanguage' | 'multilocinvt' | 'multipartner' | 'multiplebudgets' | 'multiplecalendars' | 'multishipto' | 'multisite' | 'multisubsidiarycustomer' | 'multivendor' | 'multprice' | 'netsuiteapprovalsworkflow' | 'notaltsalesamount' | 'notmultipartner' | 'notteamselling' | 'oidc' | 'onlineordering' | 'openidsso' | 'opportunities' | 'othersublistfields' | 'outlookintegration_v3' | 'partneraccess' | 'partnercommissions' | 'payables' | 'paycheckjournal' | 'paypalintegration' | 'payroll' | 'payrollservice' | 'periodendjournalentries' | 'personalized_catalog_views' | 'pickpackship' | 'plannedwork' | 'prm' | 'projecttaskmanager' | 'promocodes' | 'purchasecarddata' | 'purchasecontracts' | 'purchaseorders' | 'purchasereqs' | 'quantitypricing' | 'receivables' | 'requisitions' | 'resourceallocationapproval' | 'resourceallocationchart' | 'resourceallocations' | 'resourceskillsets' | 'returnauths' | 'revenuecommitments' | 'revenuerecognition' | 'revrecsalesorderforecasting' | 'revrecvsoe' | 'rfq' | 'rulebasedrecognitiontreatment' | 'rum' | 'salescampaigns' | 'salesorders' | 'samlsso' | 'sdfcopytoaccount' | 'serializedinventory' | 'serversidescripting' | 'serviceprintedchecks' | 'serviceprintedw2s' | 'sfa' | 'sfa_and_notasa' | 'shippinglabels' | 'sitelocationaliases' | 'softdescriptors' | 'stackablepromotions' | 'standardcosting' | 'stataccounting' | 'storepickup' | 'subscriptionbilling' | 'suiteanalyticsconnect' | 'suiteappcontrolcenter' | 'suiteappdevelopmentframework' | 'suitecommerce' | 'suitecommerce_advanced' | 'suitecommerce_in_store' | 'suitecommerce_my_account' | 'suitesignon' | 'suitesocial' | 'suppltaxcalc' | 'supplyallocation' | 'supplychaincontroltower' | 'supplychainmanagement' | 'supplychainpredictedrisks' | 'support' | 'tableau' | 'talentmanagement' | 'taxauditfiles' | 'tba' | 'teamselling' | 'telephony' | 'timebasedpricing' | 'timebasedpricingsuiteapp' | 'timetracking' | 'trandeletionreasoncode' | 'unitsofmeasure' | 'upsell' | 'urlcomponentaliases' | 'usr' | 'vendoraccess' | 'vendorprepayments' | 'vendorreturnauths' | 'warrantyandrepairsmanagement' | 'wbs' | 'webapplications' | 'webapplicationversioning' | 'webduplicateemailmanagement' | 'webhosting' | 'webservicesexternal' | 'website' | 'webstore' | 'weeklytimesheets' | 'weeklytimesheetsnewui' | 'withholdingtax' | 'workflow' | 'workorders'): boolean;
  
  /**
   * return current user's permission level (0-4) for this permission
   * @param name
   * @return {0|1|2|3|4}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2009.2
   */
  getPermission(name: 'ADMI_ACCOUNTING' | 'ADMI_ACCOUNTINGBOOK' | 'ADMI_ACCOUNTINGLIST' | 'ADMI_ACCTPERIODS' | 'ADMI_ACCTSETUP' | 'ADMI_ACH' | 'ADMI_ADVANCED_ORDER_MANAGEMENT' | 'ADMI_APP_DEPLOYMENT' | 'ADMI_APPPUBLISHER' | 'ADMI_AUDITLOGIN' | 'ADMI_BACKUPEXPORT' | 'ADMI_BANK_CONNECTIVITY_CONFIG' | 'ADMI_BILLPAYSETUP' | 'ADMI_BUNDLER' | 'ADMI_BUNDLERMANUP' | 'ADMI_CAMPAIGNEMAIL' | 'ADMI_CAMPAIGNSETUP' | 'ADMI_CASEFORM' | 'ADMI_CASEISSUE' | 'ADMI_CASEORIGIN' | 'ADMI_CASEPRIORITY' | 'ADMI_CASERULE' | 'ADMI_CASESTATUS' | 'ADMI_CASETERRITORY' | 'ADMI_CASETYPE' | 'ADMI_CERTIFICATES' | 'ADMI_CLASSESTOLOCS' | 'ADMI_CLASSSEGMENTMAPPING' | 'ADMI_CLOSEPERIOD' | 'ADMI_COMMERCECATEGORY' | 'ADMI_COMMISSIONSETUP' | 'ADMI_COMPANY' | 'ADMI_CONVERTCLASSES' | 'ADMI_CONVERTLEAD' | 'ADMI_COPYPROJECTTASK' | 'ADMI_CREDITCARD' | 'ADMI_CRMLIST' | 'ADMI_CSVIMPORTPREF' | 'ADMI_CUSTADDRESSFORM' | 'ADMI_CUSTBODYFIELD' | 'ADMI_CUSTCATEGORY' | 'ADMI_CUSTCENTER' | 'ADMI_CUSTCOLUMNFIELD' | 'ADMI_CUSTEMAILLAYOUT' | 'ADMI_CUSTENTITYFIELD' | 'ADMI_CUSTENTRYFORM' | 'ADMI_CUSTEVENTFIELD' | 'ADMI_CUSTFIELD' | 'ADMI_CUSTFIELDTAB' | 'ADMI_CUSTFORM' | 'ADMI_CUSTITEMFIELD' | 'ADMI_CUSTITEMNUMBERFIELD' | 'ADMI_CUSTLAYOUT' | 'ADMI_CUSTLIST' | 'ADMI_CUSTOMERFORM' | 'ADMI_CUSTOMER_SEGMENTS' | 'ADMI_CUSTOMIZEDFIELDLEVELHELP' | 'ADMI_CUSTOMSCRIPT' | 'ADMI_CUSTOMSUBLIST' | 'ADMI_CUSTOTHERFIELD' | 'ADMI_CUSTRECORD' | 'ADMI_CUSTRECORDFORM' | 'ADMI_CUSTSECTION' | 'ADMI_CUSTTASKS' | 'ADMI_CUSTTRANSACTION' | 'ADMI_DELETEDRECORD' | 'ADMI_DEPTSEGMENTMAPPING' | 'ADMI_DEVICE_ID' | 'ADMI_DOMAINS' | 'ADMI_DUPLICATESETUP' | 'ADMI_EMPLCATEGORY' | 'ADMI_EMPLOYEELIST' | 'ADMI_ENABLEFEATURES' | 'ADMI_ENTITYACCOUNTMAPPING' | 'ADMI_ENTITYSTATUS' | 'ADMI_ESCALATIONRULE' | 'ADMI_ESCALATIONTERRITORY' | 'ADMI_EXPORTIIF' | 'ADMI_FFTEXCEPTIONREASON' | 'ADMI_FINANCIALINSTITUTION' | 'ADMI_FINCHARGEPREF' | 'ADMI_GAINLOSSACCTMAPPING' | 'ADMI_GLOBALACCOUNTMAPPING' | 'ADMI_IMPORTCSVFILE' | 'ADMI_IMPORTXML' | 'ADMI_INTEGRAPP' | 'ADMI_ISSUESETUP' | 'ADMI_ITEMACCOUNTMAPPING' | 'ADMI_KEYS' | 'ADMI_KNOWLEDGEBASE' | 'ADMI_KPIREPORT' | 'ADMI_LOCATIONCOSTINGGROUP' | 'ADMI_LOCSEGMENTMAPPING' | 'ADMI_MANAGECUSTOMSEGMENTS' | 'ADMI_MANAGE_OAUTH_TOKENS' | 'ADMI_MANAGE_OWN_OAUTH_TOKENS' | 'ADMI_MANAGEROLES' | 'ADMI_MANAGEUSERS' | 'ADMI_MHLEVEL' | 'ADMI_MHNODE' | 'ADMI_MHVERSION' | 'ADMI_OIDCSETUP' | 'ADMI_OPENIDSSOSETUP' | 'ADMI_ORDERALLOCATIONSTRATEGY' | 'ADMI_OUTLOOKINTEGRATION' | 'ADMI_OUTLOOKINTEGRATION_V3' | 'ADMI_PAYROLL' | 'ADMI_PI_REMOVAL_CREATE' | 'ADMI_PI_REMOVAL_RUN' | 'ADMI_PROJECT_ACCOUNTING_SETUP' | 'ADMI_REVIEW_CUSTOM_GL_RUNS' | 'ADMI_SALESTERRITORY' | 'ADMI_SAMLSSOSETUP' | 'ADMI_SAVEDASHBOARD' | 'ADMI_SETUPCOMPANY' | 'ADMI_SETUPIMAGERESIZE' | 'ADMI_SETUPYEARSTATUS' | 'ADMI_SFASETUP' | 'ADMI_SITEMANAGEMENT' | 'ADMI_STATETAXIMPORT' | 'ADMI_STORESEARCH' | 'ADMI_STORESETUP' | 'ADMI_SUBSIDIARYSETTINGSMANAGER' | 'ADMI_SUITEANALYTICSCONNECT' | 'ADMI_SUITESIGNON' | 'ADMI_SUPPLYALLOCATIONSETUP' | 'ADMI_SUPPORTSETUP' | 'ADMI_SWAPPRICES' | 'ADMI_TAXMIGRATION' | 'ADMI_TIMEMODIFICATION' | 'ADMI_TAXPERIODS' | 'ADMI_TRANSITEMTXT' | 'ADMI_TWOFACTORAUTH' | 'ADMI_TWOFACTORAUTHBASE' | 'ADMI_UNCATSITEITEMS' | 'ADMI_UNLOCKEDTIMEPERIOD' | 'ADMI_UPDATEPRICES' | 'ADMI_UPSELLSETUP' | 'ADMI_USERPREF' | 'ADMI_WEBSERVICES' | 'ADMI_WEBSERVICESLOG' | 'ADMI_WEBSERVICESSETUP' | 'ADMI_WORKFLOW' | 'LIST_ACCOUNT' | 'LIST_AMORTIZATION' | 'LIST_BIG_SEARCH' | 'LIST_BILLINGSCHEDULE' | 'LIST_BILLOFDISTRIBUTION' | 'LIST_BILLOFMATERIALSINQUIRY' | 'LIST_BOM' | 'LIST_BIN' | 'LIST_CALENDAR' | 'LIST_CALL' | 'LIST_CAMPAIGN' | 'LIST_CAMPAIGNHISTORY' | 'LIST_CASE' | 'LIST_CATEGORY' | 'LIST_CERTIFICATES' | 'LIST_CHECKITEMAVAILABILITY' | 'LIST_CLASS' | 'LIST_COLORTHEME' | 'LIST_COMMISSIONRULES' | 'LIST_COMPANY' | 'LIST_COMPETITOR' | 'LIST_COMPONENTWHEREUSEDINQUIRY' | 'LIST_CONTACT' | 'LIST_CONTACTROLE' | 'LIST_COSTEDBOMINQUIRY' | 'LIST_CRMGROUP' | 'LIST_CRMMESSAGE' | 'LIST_CRMTEMPLATE' | 'LIST_CURRENCY' | 'LIST_CUSTJOB' | 'LIST_CUSTPROFILE' | 'LIST_CUSTRECORDENTRY' | 'LIST_DEPARTMENT' | 'LIST_DISTRIBUTIONNETWORK' | 'LIST_EMAILTEMPLATE' | 'LIST_EMPLOYEE' | 'LIST_EMPLOYEECHANGETYPE' | 'LIST_EMPLOYEESSN' | 'LIST_ENTITY_DUPLICATES' | 'LIST_EVENT' | 'LIST_EXPENSEAMORTIZATIONRULE' | 'LIST_EXPENSEPLAN' | 'LIST_EXPORT' | 'LIST_FAIRVALUEDIMENSION' | 'LIST_FAIRVALUEFORMULA' | 'LIST_FAIRVALUEPRICE' | 'LIST_FAXMESSAGE' | 'LIST_FAXTEMPLATE' | 'LIST_FILECABINET' | 'LIST_FIND' | 'LIST_FISCALCALENDAR' | 'LIST_GENERICRESOURCE' | 'LIST_GLLINESAUDITLOG' | 'LIST_GLLINESAUDITLOGSEG' | 'LIST_GLOBALINVTRELATIONSHIP' | 'LIST_HCMJOB' | 'LIST_HCMPOSITION' | 'LIST_HISTORY' | 'LIST_INFOITEM' | 'LIST_INFOITEMFORM' | 'LIST_INTEGRAPP' | 'LIST_INVCOSTTEMPLATE' | 'LIST_INVENTORYSTATUS' | 'LIST_ISSUE' | 'LIST_ITEM' | 'LIST_ITEM_COLLECTION' | 'LIST_ITEMDEMANDPLAN' | 'LIST_ITEMREVENUECATEGORY' | 'LIST_ITEM_REVISION' | 'LIST_ITEMSUPPLYPLAN' | 'LIST_JOB' | 'LIST_KEYS' | 'LIST_KNOWLEDGEBASE' | 'LIST_LOCATION' | 'LIST_MAILMERGE' | 'LIST_MAILMESSAGE' | 'LIST_MAILTEMPLATE' | 'LIST_MASSUPDATES' | 'LIST_MEDIAITEMFOLDER' | 'LIST_MEMDOC' | 'LIST_MFGCOSTTEMPLATE' | 'LIST_MFGROUTING' | 'LIST_NEWSITEM' | 'LIST_NOTIFICATION' | 'LIST_ORDER_REALLOCATION' | 'LIST_OTHERNAME' | 'LIST_OUTBOUNDREQUEST' | 'LIST_PARTNER' | 'LIST_PARTNERCOMMISSNRULES' | 'LIST_PAYCHECK' | 'LIST_PAYMETH' | 'LIST_PAYROLLITEM' | 'LIST_PDFMESSAGE' | 'LIST_PDFTEMPLATE' | 'LIST_PLANNEDREVENUE' | 'LIST_PLANNEDSTANDARDCOST' | 'LIST_PRESCATEGORY' | 'LIST_PROJECT_BUDGET' | 'LIST_PROJECTREVENUERULE' | 'LIST_PROJECTTASK' | 'LIST_PROJECTTEMPLATE' | 'LIST_PROMOTIONCODE' | 'LIST_PUBLISHSEARCH' | 'LIST_QUANTITYPRICINGSCHEDULE' | 'LIST_RELATEDITEMS' | 'LIST_RESOURCE' | 'LIST_REVENUEELEMENT' | 'LIST_REVENUEPLAN' | 'LIST_REVENUERECOGNITIONRULE' | 'LIST_REVRECSCHEDULE' | 'LIST_REVRECTREATMENT' | 'LIST_REVRECTREATMENTRULE' | 'LIST_REVRECFIELDMAPPING' | 'LIST_REVRECVSOE' | 'LIST_RSRCALLOCATION' | 'LIST_RSRCALLOCATIONAPPRV' | 'LIST_SALESCAMPAIGN' | 'LIST_SALESROLE' | 'LIST_SCSNAPSHOT' | 'LIST_SENTEMAIL' | 'LIST_SHIPITEM' | 'LIST_SHIPPARTPACKAGE' | 'LIST_SHIPPARTREGISTRATION' | 'LIST_SHIPPARTSHIPMENT' | 'LIST_SITEEMAILTEMPLATE' | 'LIST_STANDARDCOSTVERSION' | 'LIST_STORETAB' | 'LIST_SUBSCRIPTION' | 'LIST_SUBSCRIPTIONPLAN' | 'LIST_SUBSIDIARY' | 'LIST_SUPPLY_REALLOCATION' | 'LIST_SYSTEMEMAILTEMPLATE' | 'LIST_TALENT_ADMINISTRATION' | 'LIST_TASK' | 'LIST_TAXITEM' | 'LIST_TAXSCHEDULE' | 'LIST_TEGATAACCOUNT' | 'LIST_TEMPLATE_CATEGORY' | 'LIST_TIMEOFFADMIN' | 'LIST_TRANNUMBERAUDITLOG' | 'LIST_UNIT' | 'LIST_UPSELL' | 'LIST_UPSELLWIZARD' | 'LIST_VENDOR' | 'LIST_WBS' | 'LIST_WEBSITE' | 'LIST_WORKCALENDAR' | 'LIST_WORKPLACE' | 'REGT_ACCTPAY' | 'REGT_ACCTREC' | 'REGT_BANK' | 'REGT_COGS' | 'REGT_CREDCARD' | 'REGT_DEFEREXPENSE' | 'REGT_DEFERREVENUE' | 'REGT_EQUITY' | 'REGT_EXPENSE' | 'REGT_FIXEDASSET' | 'REGT_INCOME' | 'REGT_LONGTERMLIAB' | 'REGT_NONPOSTING' | 'REGT_OTHASSET' | 'REGT_OTHCURRASSET' | 'REGT_OTHCURRLIAB' | 'REGT_OTHINCOME' | 'REGT_UNBILLEDREC' | 'REPO_1099' | 'REPO_940' | 'REPO_941' | 'REPO_ACCOUNTDETAIL' | 'REPO_AMORTIZATION' | 'REPO_ANALYTICS' | 'REPO_AP' | 'REPO_AR' | 'REPO_AUTHPARTNERCOMMISSION' | 'REPO_BALANCESHEET' | 'REPO_BOOKINGS' | 'REPO_CASHFLOW' | 'REPO_COMMISSION' | 'REPO_CUSTOMIZATION' | 'REPO_DEFERREDEXPENSE' | 'REPO_FINANCIALS' | 'REPO_GL' | 'REPO_INTEGRATION' | 'REPO_INVENTORY' | 'REPO_ISSUE' | 'REPO_MARKETING' | 'REPO_NONPOSTING' | 'REPO_PANDL' | 'REPO_PARTNERCOMMISSION' | 'REPO_PAYCHECKDETAIL' | 'REPO_PAYROLL' | 'REPO_PAYROLLHOURSEARNING' | 'REPO_PAYROLLJOURNAL' | 'REPO_PAYROLLLIAB' | 'REPO_PAYROLLSTATEWITHHOLD' | 'REPO_PAYROLLW2' | 'REPO_PERIODENDFINANCIALS' | 'REPO_PROJECT_ACCOUNTING' | 'REPO_PURCHASEORDER' | 'REPO_PURCHASES' | 'REPO_QUOTA' | 'REPO_RECONCILE' | 'REPO_REMINDEREMPLOYEE' | 'REPO_RETURNAUTH' | 'REPO_REVREC' | 'REPO_RSRCALLOCATION' | 'REPO_SALES' | 'REPO_SALESORDER' | 'REPO_SALES_PARTNER' | 'REPO_SALES_PROMO' | 'REPO_SCHEDULE' | 'REPO_SFA' | 'REPO_SUPPORT' | 'REPO_TAX' | 'REPO_TAXREPORTS' | 'REPO_TIME' | 'REPO_TRAN' | 'REPO_TRIALBALANCE' | 'REPO_UNBILLED' | 'REPO_WEBSITE' | 'REPO_WEBSTORE' | 'TRAN_ADJUSTMENTJOURNAL' | 'TRAN_ALLOCSCHEDULE' | 'TRAN_AMENDW4' | 'TRAN_APPROVECOMMISSN' | 'TRAN_APPROVEDD' | 'TRAN_APPROVEEFT' | 'TRAN_APPROVEPARTNERCOMM' | 'TRAN_APPROVEVP' | 'TRAN_AUDIT' | 'TRAN_AUTO_CASH' | 'TRAN_BALJRNAL' | 'TRAN_BILLPAY_APPROVE' | 'TRAN_BILLPAY_STATUS' | 'TRAN_BINTRNFR' | 'TRAN_BINWKSHT' | 'TRAN_BLANKORD' | 'TRAN_BLANKORDAPPRV' | 'TRAN_BUDGET' | 'TRAN_BUILD' | 'TRAN_CARDCHRG' | 'TRAN_CASHRFND' | 'TRAN_CASHSALE' | 'TRAN_CHARGE' | 'TRAN_CHARGERULE' | 'TRAN_CHECK' | 'TRAN_CLEARHOLD' | 'TRAN_COMMISSN' | 'TRAN_COPY_BUDGET' | 'TRAN_CUSTAUTH' | 'TRAN_CUSTCHRG' | 'TRAN_CUSTCRED' | 'TRAN_CUSTDEP' | 'TRAN_CUSTINVC' | 'TRAN_CUSTINVCAPPRV' | 'TRAN_CUSTPYMT' | 'TRAN_CUSTRFND' | 'TRAN_DEPAPPL' | 'TRAN_DEPOSIT' | 'TRAN_EDITPROFILE' | 'TRAN_ESTIMATE' | 'TRAN_EXPREPT' | 'TRAN_FFTREQ' | 'TRAN_FINCHRG' | 'TRAN_FIND' | 'TRAN_FORECAST' | 'TRAN_FXREVAL' | 'TRAN_GST_REFUND' | 'TRAN_IMPORTOLBFILE' | 'TRAN_INTERCOADJ' | 'TRAN_INVADJST' | 'TRAN_INVCOUNT' | 'TRAN_INVDISTR' | 'TRAN_INVREVAL' | 'TRAN_INVTRNFR' | 'TRAN_INVWKSHT' | 'TRAN_ITEMRCPT' | 'TRAN_ITEMSHIP' | 'TRAN_JOURNAL' | 'TRAN_JOURNALAPPRV' | 'TRAN_LIABPYMT' | 'TRAN_MGRFORECAST' | 'TRAN_OPENBAL' | 'TRAN_OPPRTNTY' | 'TRAN_OWNTRNSF' | 'TRAN_PARTNERCOMMISSN' | 'TRAN_PAYCHECK' | 'TRAN_PAYMENTAUDIT' | 'TRAN_PAYROLLRUN' | 'TRAN_PCHKJRNL' | 'TRAN_PEJRNL' | 'TRAN_POSTVENDORBILLVARIANCE' | 'TRAN_PRICELIST' | 'TRAN_PRINT' | 'TRAN_PRINTCHECKSFORMS' | 'TRAN_PROJECT_IC_CHARGE_REQUEST' | 'TRAN_PURCHCON' | 'TRAN_PURCHCONAPPRV' | 'TRAN_PURCHORD' | 'TRAN_PURCHORDBILL' | 'TRAN_PURCHORDRECEIVE' | 'TRAN_PURCHREQ' | 'TRAN_PURCHREQAPPRV' | 'TRAN_QUOTA' | 'TRAN_RECOG_GIFTCERT_INCOME' | 'TRAN_RECONCILE' | 'TRAN_REVARRNG' | 'TRAN_REVARRNGAPPRV' | 'TRAN_REVCOMM' | 'TRAN_REVCOMRV' | 'TRAN_REVCONTR' | 'TRAN_RFQ' | 'TRAN_RTNAUTH' | 'TRAN_RTNAUTHAPPRV' | 'TRAN_RTNAUTHCREDIT' | 'TRAN_RTNAUTHRECEIVE' | 'TRAN_RTNAUTHREVERSEREVCOMMIT' | 'TRAN_SALESORD' | 'TRAN_SALESORDAPPRV' | 'TRAN_SALESORDCOMMITREVENUE' | 'TRAN_SALESORDFULFILL' | 'TRAN_SALESORDINVOICE' | 'TRAN_SALESORDREVENUECONTRACT' | 'TRAN_STATEMENT' | 'TRAN_STATUSDD' | 'TRAN_STATUSEFT' | 'TRAN_STATUSVP' | 'TRAN_STPICKUP' | 'TRAN_TAXLIAB' | 'TRAN_TAXPYMT' | 'TRAN_TEGPYBL' | 'TRAN_TEGRCVBL' | 'TRAN_TIMEBILL' | 'TRAN_TIMEPOST' | 'TRAN_TRANSFER' | 'TRAN_TRNFRORD' | 'TRAN_TRNFRORDAPPRV' | 'TRAN_UNBUILD' | 'TRAN_VENDAUTH' | 'TRAN_VENDAUTHAPPRV' | 'TRAN_VENDAUTHCREDIT' | 'TRAN_VENDAUTHRETURN' | 'TRAN_VENDBILL' | 'TRAN_VENDBILLAPPRV' | 'TRAN_VENDCRED' | 'TRAN_VENDPYMT' | 'TRAN_VENDPYMTAPPRV' | 'TRAN_VENDRFQ' | 'TRAN_VPREPAPP' | 'TRAN_VPREP' | 'TRAN_WAVE' | 'TRAN_WOCLOSE' | 'TRAN_WOCOMPL' | 'TRAN_WOISSUE' | 'TRAN_WORKORD' | 'TRAN_WORKORDBUILD' | 'TRAN_WORKORDCLOSE' | 'TRAN_WORKORDCOMPLETE' | 'TRAN_WORKORDISSUE' | 'TRAN_WORKORDMARKBUILT' | 'TRAN_WORKORDMARKFIRMED' | 'TRAN_WORKORDMARKRELEASED' | 'TRAN_YTDADJST' | 'admi_accounting' | 'admi_accountingbook' | 'admi_accountinglist' | 'admi_acctperiods' | 'admi_acctsetup' | 'admi_ach' | 'admi_advanced_order_management' | 'admi_app_deployment' | 'admi_apppublisher' | 'admi_auditlogin' | 'admi_backupexport' | 'admi_bank_connectivity_config' | 'admi_billpaysetup' | 'admi_bundler' | 'admi_bundlermanup' | 'admi_campaignemail' | 'admi_campaignsetup' | 'admi_caseform' | 'admi_caseissue' | 'admi_caseorigin' | 'admi_casepriority' | 'admi_caserule' | 'admi_casestatus' | 'admi_caseterritory' | 'admi_casetype' | 'admi_certificates' | 'admi_classestolocs' | 'admi_classsegmentmapping' | 'admi_closeperiod' | 'admi_commercecategory' | 'admi_commissionsetup' | 'admi_company' | 'admi_convertclasses' | 'admi_convertlead' | 'admi_copyprojecttask' | 'admi_creditcard' | 'admi_crmlist' | 'admi_csvimportpref' | 'admi_custaddressform' | 'admi_custbodyfield' | 'admi_custcategory' | 'admi_custcenter' | 'admi_custcolumnfield' | 'admi_custemaillayout' | 'admi_custentityfield' | 'admi_custentryform' | 'admi_custeventfield' | 'admi_custfield' | 'admi_custfieldtab' | 'admi_custform' | 'admi_custitemfield' | 'admi_custitemnumberfield' | 'admi_custlayout' | 'admi_custlist' | 'admi_customerform' | 'admi_customer_segments' | 'admi_customizedfieldlevelhelp' | 'admi_customscript' | 'admi_customsublist' | 'admi_custotherfield' | 'admi_custrecord' | 'admi_custrecordform' | 'admi_custsection' | 'admi_custtasks' | 'admi_custtransaction' | 'admi_deletedrecord' | 'admi_deptsegmentmapping' | 'admi_device_id' | 'admi_domains' | 'admi_duplicatesetup' | 'admi_emplcategory' | 'admi_employeelist' | 'admi_enablefeatures' | 'admi_entityaccountmapping' | 'admi_entitystatus' | 'admi_escalationrule' | 'admi_escalationterritory' | 'admi_exportiif' | 'admi_fftexceptionreason' | 'admi_financialinstitution' | 'admi_finchargepref' | 'admi_gainlossacctmapping' | 'admi_globalaccountmapping' | 'admi_importcsvfile' | 'admi_importxml' | 'admi_integrapp' | 'admi_issuesetup' | 'admi_itemaccountmapping' | 'admi_keys' | 'admi_knowledgebase' | 'admi_kpireport' | 'admi_locationcostinggroup' | 'admi_locsegmentmapping' | 'admi_managecustomsegments' | 'admi_manage_oauth_tokens' | 'admi_manage_own_oauth_tokens' | 'admi_manageroles' | 'admi_manageusers' | 'admi_mhlevel' | 'admi_mhnode' | 'admi_mhversion' | 'admi_oidcsetup' | 'admi_openidssosetup' | 'admi_orderallocationstrategy' | 'admi_outlookintegration' | 'admi_outlookintegration_v3' | 'admi_payroll' | 'admi_pi_removal_create' | 'admi_pi_removal_run' | 'admi_project_accounting_setup' | 'admi_review_custom_gl_runs' | 'admi_salesterritory' | 'admi_samlssosetup' | 'admi_savedashboard' | 'admi_setupcompany' | 'admi_setupimageresize' | 'admi_setupyearstatus' | 'admi_sfasetup' | 'admi_sitemanagement' | 'admi_statetaximport' | 'admi_storesearch' | 'admi_storesetup' | 'admi_subsidiarysettingsmanager' | 'admi_suiteanalyticsconnect' | 'admi_suitesignon' | 'admi_supplyallocationsetup' | 'admi_supportsetup' | 'admi_swapprices' | 'admi_taxmigration' | 'admi_timemodification' | 'admi_taxperiods' | 'admi_transitemtxt' | 'admi_twofactorauth' | 'admi_twofactorauthbase' | 'admi_uncatsiteitems' | 'admi_unlockedtimeperiod' | 'admi_updateprices' | 'admi_upsellsetup' | 'admi_userpref' | 'admi_webservices' | 'admi_webserviceslog' | 'admi_webservicessetup' | 'admi_workflow' | 'list_account' | 'list_amortization' | 'list_big_search' | 'list_billingschedule' | 'list_billofdistribution' | 'list_billofmaterialsinquiry' | 'list_bom' | 'list_bin' | 'list_calendar' | 'list_call' | 'list_campaign' | 'list_campaignhistory' | 'list_case' | 'list_category' | 'list_certificates' | 'list_checkitemavailability' | 'list_class' | 'list_colortheme' | 'list_commissionrules' | 'list_company' | 'list_competitor' | 'list_componentwhereusedinquiry' | 'list_contact' | 'list_contactrole' | 'list_costedbominquiry' | 'list_crmgroup' | 'list_crmmessage' | 'list_crmtemplate' | 'list_currency' | 'list_custjob' | 'list_custprofile' | 'list_custrecordentry' | 'list_department' | 'list_distributionnetwork' | 'list_emailtemplate' | 'list_employee' | 'list_employeechangetype' | 'list_employeessn' | 'list_entity_duplicates' | 'list_event' | 'list_expenseamortizationrule' | 'list_expenseplan' | 'list_export' | 'list_fairvaluedimension' | 'list_fairvalueformula' | 'list_fairvalueprice' | 'list_faxmessage' | 'list_faxtemplate' | 'list_filecabinet' | 'list_find' | 'list_fiscalcalendar' | 'list_genericresource' | 'list_gllinesauditlog' | 'list_gllinesauditlogseg' | 'list_globalinvtrelationship' | 'list_hcmjob' | 'list_hcmposition' | 'list_history' | 'list_infoitem' | 'list_infoitemform' | 'list_integrapp' | 'list_invcosttemplate' | 'list_inventorystatus' | 'list_issue' | 'list_item' | 'list_item_collection' | 'list_itemdemandplan' | 'list_itemrevenuecategory' | 'list_item_revision' | 'list_itemsupplyplan' | 'list_job' | 'list_keys' | 'list_knowledgebase' | 'list_location' | 'list_mailmerge' | 'list_mailmessage' | 'list_mailtemplate' | 'list_massupdates' | 'list_mediaitemfolder' | 'list_memdoc' | 'list_mfgcosttemplate' | 'list_mfgrouting' | 'list_newsitem' | 'list_notification' | 'list_order_reallocation' | 'list_othername' | 'list_outboundrequest' | 'list_partner' | 'list_partnercommissnrules' | 'list_paycheck' | 'list_paymeth' | 'list_payrollitem' | 'list_pdfmessage' | 'list_pdftemplate' | 'list_plannedrevenue' | 'list_plannedstandardcost' | 'list_prescategory' | 'list_project_budget' | 'list_projectrevenuerule' | 'list_projecttask' | 'list_projecttemplate' | 'list_promotioncode' | 'list_publishsearch' | 'list_quantitypricingschedule' | 'list_relateditems' | 'list_resource' | 'list_revenueelement' | 'list_revenueplan' | 'list_revenuerecognitionrule' | 'list_revrecschedule' | 'list_revrectreatment' | 'list_revrectreatmentrule' | 'list_revrecfieldmapping' | 'list_revrecvsoe' | 'list_rsrcallocation' | 'list_rsrcallocationapprv' | 'list_salescampaign' | 'list_salesrole' | 'list_scsnapshot' | 'list_sentemail' | 'list_shipitem' | 'list_shippartpackage' | 'list_shippartregistration' | 'list_shippartshipment' | 'list_siteemailtemplate' | 'list_standardcostversion' | 'list_storetab' | 'list_subscription' | 'list_subscriptionplan' | 'list_subsidiary' | 'list_supply_reallocation' | 'list_systememailtemplate' | 'list_talent_administration' | 'list_task' | 'list_taxitem' | 'list_taxschedule' | 'list_tegataaccount' | 'list_template_category' | 'list_timeoffadmin' | 'list_trannumberauditlog' | 'list_unit' | 'list_upsell' | 'list_upsellwizard' | 'list_vendor' | 'list_wbs' | 'list_website' | 'list_workcalendar' | 'list_workplace' | 'regt_acctpay' | 'regt_acctrec' | 'regt_bank' | 'regt_cogs' | 'regt_credcard' | 'regt_deferexpense' | 'regt_deferrevenue' | 'regt_equity' | 'regt_expense' | 'regt_fixedasset' | 'regt_income' | 'regt_longtermliab' | 'regt_nonposting' | 'regt_othasset' | 'regt_othcurrasset' | 'regt_othcurrliab' | 'regt_othincome' | 'regt_unbilledrec' | 'repo_1099' | 'repo_940' | 'repo_941' | 'repo_accountdetail' | 'repo_amortization' | 'repo_analytics' | 'repo_ap' | 'repo_ar' | 'repo_authpartnercommission' | 'repo_balancesheet' | 'repo_bookings' | 'repo_cashflow' | 'repo_commission' | 'repo_customization' | 'repo_deferredexpense' | 'repo_financials' | 'repo_gl' | 'repo_integration' | 'repo_inventory' | 'repo_issue' | 'repo_marketing' | 'repo_nonposting' | 'repo_pandl' | 'repo_partnercommission' | 'repo_paycheckdetail' | 'repo_payroll' | 'repo_payrollhoursearning' | 'repo_payrolljournal' | 'repo_payrollliab' | 'repo_payrollstatewithhold' | 'repo_payrollw2' | 'repo_periodendfinancials' | 'repo_project_accounting' | 'repo_purchaseorder' | 'repo_purchases' | 'repo_quota' | 'repo_reconcile' | 'repo_reminderemployee' | 'repo_returnauth' | 'repo_revrec' | 'repo_rsrcallocation' | 'repo_sales' | 'repo_salesorder' | 'repo_sales_partner' | 'repo_sales_promo' | 'repo_schedule' | 'repo_sfa' | 'repo_support' | 'repo_tax' | 'repo_taxreports' | 'repo_time' | 'repo_tran' | 'repo_trialbalance' | 'repo_unbilled' | 'repo_website' | 'repo_webstore' | 'tran_adjustmentjournal' | 'tran_allocschedule' | 'tran_amendw4' | 'tran_approvecommissn' | 'tran_approvedd' | 'tran_approveeft' | 'tran_approvepartnercomm' | 'tran_approvevp' | 'tran_audit' | 'tran_auto_cash' | 'tran_baljrnal' | 'tran_billpay_approve' | 'tran_billpay_status' | 'tran_bintrnfr' | 'tran_binwksht' | 'tran_blankord' | 'tran_blankordapprv' | 'tran_budget' | 'tran_build' | 'tran_cardchrg' | 'tran_cashrfnd' | 'tran_cashsale' | 'tran_charge' | 'tran_chargerule' | 'tran_check' | 'tran_clearhold' | 'tran_commissn' | 'tran_copy_budget' | 'tran_custauth' | 'tran_custchrg' | 'tran_custcred' | 'tran_custdep' | 'tran_custinvc' | 'tran_custinvcapprv' | 'tran_custpymt' | 'tran_custrfnd' | 'tran_depappl' | 'tran_deposit' | 'tran_editprofile' | 'tran_estimate' | 'tran_exprept' | 'tran_fftreq' | 'tran_finchrg' | 'tran_find' | 'tran_forecast' | 'tran_fxreval' | 'tran_gst_refund' | 'tran_importolbfile' | 'tran_intercoadj' | 'tran_invadjst' | 'tran_invcount' | 'tran_invdistr' | 'tran_invreval' | 'tran_invtrnfr' | 'tran_invwksht' | 'tran_itemrcpt' | 'tran_itemship' | 'tran_journal' | 'tran_journalapprv' | 'tran_liabpymt' | 'tran_mgrforecast' | 'tran_openbal' | 'tran_opprtnty' | 'tran_owntrnsf' | 'tran_partnercommissn' | 'tran_paycheck' | 'tran_paymentaudit' | 'tran_payrollrun' | 'tran_pchkjrnl' | 'tran_pejrnl' | 'tran_postvendorbillvariance' | 'tran_pricelist' | 'tran_print' | 'tran_printchecksforms' | 'tran_project_ic_charge_request' | 'tran_purchcon' | 'tran_purchconapprv' | 'tran_purchord' | 'tran_purchordbill' | 'tran_purchordreceive' | 'tran_purchreq' | 'tran_purchreqapprv' | 'tran_quota' | 'tran_recog_giftcert_income' | 'tran_reconcile' | 'tran_revarrng' | 'tran_revarrngapprv' | 'tran_revcomm' | 'tran_revcomrv' | 'tran_revcontr' | 'tran_rfq' | 'tran_rtnauth' | 'tran_rtnauthapprv' | 'tran_rtnauthcredit' | 'tran_rtnauthreceive' | 'tran_rtnauthreverserevcommit' | 'tran_salesord' | 'tran_salesordapprv' | 'tran_salesordcommitrevenue' | 'tran_salesordfulfill' | 'tran_salesordinvoice' | 'tran_salesordrevenuecontract' | 'tran_statement' | 'tran_statusdd' | 'tran_statuseft' | 'tran_statusvp' | 'tran_stpickup' | 'tran_taxliab' | 'tran_taxpymt' | 'tran_tegpybl' | 'tran_tegrcvbl' | 'tran_timebill' | 'tran_timepost' | 'tran_transfer' | 'tran_trnfrord' | 'tran_trnfrordapprv' | 'tran_unbuild' | 'tran_vendauth' | 'tran_vendauthapprv' | 'tran_vendauthcredit' | 'tran_vendauthreturn' | 'tran_vendbill' | 'tran_vendbillapprv' | 'tran_vendcred' | 'tran_vendpymt' | 'tran_vendpymtapprv' | 'tran_vendrfq' | 'tran_vprepapp' | 'tran_vprep' | 'tran_wave' | 'tran_woclose' | 'tran_wocompl' | 'tran_woissue' | 'tran_workord' | 'tran_workordbuild' | 'tran_workordclose' | 'tran_workordcomplete' | 'tran_workordissue' | 'tran_workordmarkbuilt' | 'tran_workordmarkfirmed' | 'tran_workordmarkreleased' | 'tran_ytdadjst'): 0 | 1 | 2 | 3 | 4;
  
  /**
   * return system or script preference selection for current user
   * @param name
   * @return {string}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2009.2
   */
  getPreference(name: string): string;
  
  /**
   * return value of session object set by script
   * @param name
   * @return {string}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2009.2
   */
  getSessionObject(name: string): string;
  
  /**
   * set the value of a session object using a key.
   * @param name
   * @param value
   * @return {void}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2009.2
   */
  setSessionObject(name: string, value: string): void;
  
  /**
   * return an array containing the names of all keys used to set session objects
   * @return {string[]}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2009.2
   */
  getAllSessionObjects(): string[];
  
  /**
   * return the NetSuite version for the current account
   * @return {string}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2009.2
   */
  getVersion(): string;
  
  /**
   * return the environment that the script is executing in: SANDBOX, PRODUCTION, BETA, INTERNAL
   * @return {'SANDBOX'|'PRODUCTION'|'BETA'|'INTERNAL'}
   *
   * @since 2008.2
   */
  getEnvironment(): 'SANDBOX' | 'PRODUCTION' | 'BETA' | 'INTERNAL';
  
  /**
   * return the logging level for the current script execution. Not supported in CLIENT scripts
   * @return {'DEBUG'|'AUDIT'|'ERROR'|'EMERGENCY'}
   *
   * @since 2008.2
   */
  getLogLevel(): 'DEBUG' | 'AUDIT' | 'ERROR' | 'EMERGENCY';
  
  /**
   * return the script ID for the current script
   * @return {string}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2009.2
   */
  getScriptId(): string;
  
  /**
   * return the deployment ID for the current script
   * @return {string}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2009.2
   */
  getDeploymentId(): string;
  
  /**
   * return the % complete specified for the current scheduled script execution
   * @return {number}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2009.2
   */
  getPercentComplete(): number;
  
  /**
   * set the % complete for the current scheduled script execution
   * @param percentage - The percentage of records completed
   * @return {void}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2009.2
   */
  setPercentComplete(percentage: number | string): void;
  
  /**
   * return a system/script setting. Types are SCRIPT, SESSION, FEATURE, PERMISSION
   *
   * @param type
   * @param name
   * @return {string}
   *
   * @since 2007.0
   */
  getSetting(type: 'SESSION' | 'FEATURE' | 'PERMISSION' | 'SCRIPT' | 'session' | 'feature' | 'permission' | 'script', name: string): string;
  
  /**
   * set a system/script setting. Only supported type is SESSION
   *
   * @param type
   * @param name
   * @param value
   * @return {void}
   *
   * @since 2007.0
   */
  setSetting(type: 'SESSION' | 'FEATURE' | 'PERMISSION' | 'SCRIPT' | 'session' | 'feature' | 'permission' | 'script', name: string, value: string): void;
  
  /**
   * return an Object containing name/value pairs of color groups to their corresponding RGB hex color based on the currenly logged in user's color them preferences.
   * @return {Object}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2010.1
   */
  getColorPreferences(): Object;
  
  /**
   * return the runtime version of SuiteScript, could be 1.0 or 2.0
   * @return {Object}
   *
   * @method
   * @memberOf nlobjContext
   *
   * @since 2014.1
   */
  getRuntimeVersion(): Object;
}

/**
 * Return a new instance of nlobjError used system or user-defined error object.
 *
 * @classDescription Encapsulation of errors thrown during script execution.
 * @constructor
 */
declare interface nlobjError {
  
  new(): nlobjError;
  
  /**
   * return the error db ID for this error (if it was an unhandled unexpected error).
   * @return {string}
   *
   * @method
   * @memberOf nlobjError
   *
   * @since 2008.2
   */
  getId(): string;
  
  /**
   * return the error code for this system or user-defined error.
   * @return {string}
   *
   * @method
   * @memberOf nlobjError
   *
   * @since 2008.2
   */
  getCode(): string;
  
  /**
   * return the error description for this error.
   * @return {string}
   *
   * @method
   * @memberOf nlobjError
   *
   * @since 2008.2
   */
  getDetails(): string;
  
  /**
   * return a stacktrace containing the location of the error.
   * @return {string[]}
   *
   * @method
   * @memberOf nlobjError
   *
   * @since 2008.2
   */
  getStackTrace(): string[];
  
  /**
   * return the userevent script name where this error was thrown.
   * @return {string}
   *
   * @method
   * @memberOf nlobjError
   *
   * @since 2008.2
   */
  getUserEvent(): string;
  
  /**
   * return the internalid of the record if this error was thrown in an aftersubmit script.
   * @return {number}
   *
   * @method
   * @memberOf nlobjError
   *
   * @since 2008.2
   */
  getInternalId(): number;
}

declare class nlobjError {
  constructor(code: string, details: string, suppressEmail?: boolean);
}

/**
 * Return a new instance of nlobjResponse used for scripting web responses in Suitelets
 *
 * @classDescription Accessor to Http response made available to Suitelets.
 * @constructor
 */
declare interface nlobjResponse {
  
  new(): nlobjResponse;
  
  CACHE_DURATION_UNIQUE: 'UNIQUE';
  CACHE_DURATION_SHORT: 'SHORT';
  CACHE_DURATION_MEDIUM: 'MEDIUM';
  CACHE_DURATION_LONG: 'LONG';
  
  /**
   * return the response body returned.
   * @return {string}
   *
   * @method
   * @memberOf nlobjResponse
   *
   * @since 2008.1
   */
  getBody(): string;
  
  /**
   * add a value for a response header.
   * @param  {string} name of header
   * @param  {string} value for header
   * @return  {void}
   *
   * @method
   * @memberOf nlobjResponse
   *
   * @since 2008.2
   */
  addHeader(name: string, value: string): void;
  
  /**
   * set the value of a response header.
   * @param  {string} name of header
   * @param  {string} value for header
   * @return  {void}
   *
   * @method
   * @memberOf nlobjResponse
   *
   * @since 2008.2
   */
  setHeader(name: string, value: string): void;
  
  /**
   * return the value of a response header.
   * @param  {string} name of header
   * @return  {string}
   *
   * @method
   * @memberOf nlobjResponse
   *
   * @since 2008.2
   */
  getHeader(): string;
  
  /**
   * return an Array of all response header values for a header
   * @param  {string} name of header
   * @return  {string[]}
   *
   * @method
   * @memberOf nlobjResponse
   *
   * @since 2008.2
   */
  getHeaders(name: string): void;
  
  /**
   * return an Array of all response headers
   * @return  {string[]}
   *
   * @method
   * @memberOf nlobjResponse
   *
   * @since 2008.2
   */
  getAllHeaders(): string[];
  
  /**
   * suppress caching for this response.
   * @return  {void}
   *
   * @method
   * @memberOf nlobjResponse
   *
   * @since 2009.1
   */
  sendNoCache(): void;
  
  /**
   * sets CDN caching for a shorter period of time or a longer period of time.
   *
   * @param type - Constant value to represent the caching duration
   * @return {void}
   * @method
   * @memberOf nlobjResponse
   *
   * @since 2013.1
   */
  setCDNCacheable(type: 'UNIQUE' | 'SHORT' | 'MEDIUM' | 'LONG'): void;
  
  /**
   * sets the content type for the response (and an optional filename for binary output).
   *
   * @param type - The file type i.e. plainText, word, pdf, htmldoc (see list of media item types)
   * @param filename - The file name
   * @param [disposition] - Content Disposition used for streaming attachments: inline|attachment
   * @return {void}
   * @method
   * @memberOf nlobjResponse
   *
   * @since 2008.2
   */
  setContentType(type: string, name?: string, disposition?: string): void;
  
  /**
   * sets the redirect URL for the response. all URLs must be internal unless the Suitelet is being executed in an "Available without Login" context
   *  at which point it can use type "external" to specify an external url via the subtype arg
   *
   * @param type - Type specifier for URL: suitelet|tasklink|record|mediaitem|external
   * @param subtype - Subtype specifier for URL (corresponding to type): scriptid|taskid|recordtype|mediaid|url
   * @param [id] - Internal ID specifier (sub-subtype corresponding to type): deploymentid|n/a|recordid|n/a
   * @param [pagemode] - String specifier used to configure page (suitelet: external|internal, tasklink|record: edit|view)
   * @param [parameters] - Object used to specify additional URL parameters as name/value pairs
   * @return {void}
   *
   * @method
   * @memberOf nlobjResponse
   *
   * @since 2008.2
   */
  sendRedirect(type: string, subtype: string, id?: string | number, pagemode?: boolean, parameters?: Object): void;
  
  /**
   * write information (text/xml/html) to the response.
   *
   * @param output
   * @return {void}
   *
   * @method
   * @memberOf nlobjResponse
   *
   * @since 2008.2
   */
  write(output: string): void;
  
  /**
   * write line information (text/xml/html) to the response.
   *
   * @param output
   * @return {void}
   *
   * @method
   * @memberOf nlobjResponse
   *
   * @since 2008.2
   */
  writeLine(output: string): void;
  
  /**
   * write a UI object page.
   *
   * @param pageobject - Page UI object: nlobjList|nlobjAssistant|nlobjForm|nlobjDashboard
   * @return {void}
   *
   * @method
   * @memberOf nlobjResponse
   *
   * @since 2008.2
   */
  writePage(pageobject: nlobjForm | nlobjList): void;
  
  /**
   * sets the character encoding for the response.
   * @param encoding
   * @return {void}
   * @method
   * @memberOf nlobjResponse
   *
   * @since 2012.2
   */
  setEncoding(encoding: 'UTF-8' | 'windows-1252' | 'ISO-8859-1' | 'GB18030' | 'GB2312' | 'SHIFT_JIS' | 'MacRoman'): void;
  
  /**
   * return the response code returned.
   * @return {string}
   *
   * @method
   * @memberOf nlobjServerResponse
   *
   * @since 2008.1
   */
  getCode(): string;
  
  /**
   * return the nlobjError thrown via a client call to nlapiRequestURL.
   * @return {nlobjError}
   *
   * @method
   * @memberOf nlobjResponse
   *
   * @since 2008.1
   */
  getError(): nlobjError;
}

declare namespace nlobjResponse {
  export const CACHE_DURATION_UNIQUE = 'UNIQUE';
  export const CACHE_DURATION_SHORT = 'SHORT';
  export const CACHE_DURATION_MEDIUM = 'MEDIUM';
  export const CACHE_DURATION_LONG = 'LONG';
}

/**
 * Return a new instance of nlobjRequest used for scripting web requests in Suitelets
 *
 * @classDescription Accessor to Http request data made available to Suitelets
 * @constructor
 */
declare interface nlobjRequest {
  
  new(): nlobjRequest;
  
  /**
   * return the value of a request parameter.
   *
   * @param name - Parameter name
   * @return {string}
   * @method
   * @memberOf nlobjRequest
   *
   * @since 2008.2
   */
  getParameter(name: string): string;
  
  /**
   * return the values of a request parameter as an Array.
   *
   * @param name - Parameter name
   * @return {string[]}
   * @method
   * @memberOf nlobjRequest
   *
   * @since 2008.2
   */
  getParameterValues(name: string): void;
  
  /**
   * return an Object containing all the request parameters and their values.
   * @return {Object}
   * @method
   * @memberOf nlobjRequest
   *
   * @since 2008.2
   */
  getAllParameters(): Object;
  
  /**
   * return the value of a sublist value.
   * @param group - Sublist name
   * @param name - Sublist field name
   * @param linenum - Sublist line number
   * @return {string}
   *
   * @method
   * @memberOf nlobjRequest
   *
   * @since 2008.2
   */
  getLineItemValue(group: string, name: string, linenum: number): string;
  
  /**
   * return the number of lines in a sublist.
   * @param group - Sublist name
   * @return {number}
   *
   * @method
   * @memberOf nlobjRequest
   *
   * @since 2008.2
   */
  getLineItemCount(group: string): string | number;
  
  /**
   * return the value of a request header.
   * @param name
   * @return {string}
   *
   * @method
   * @memberOf nlobjRequest
   *
   * @since 2008.2
   */
  getHeader(name: string): string;
  
  /**
   * return an Object containing all the request headers and their values.
   * @return {Object}
   *
   * @method
   * @memberOf nlobjRequest
   *
   * @since 2008.2
   */
  getAllHeaders(): Object;
  
  /**
   * return the value of an uploaded file.
   * @param name - File field name
   * @return {nlobjFile}
   *
   * @method
   * @memberOf nlobjRequest
   *
   * @since 2009.1
   */
  getFile(name: string): nlobjFile;
  
  /**
   * return an Object containing field names to file objects for all uploaded files.
   * @return {Object}
   *
   * @method
   * @memberOf nlobjRequest
   *
   * @since 2009.1
   */
  
  // getAllFiles(): Object;
  
  /**
   * return the body of the POST request
   * @return {string}
   *
   * @method
   * @memberOf nlobjRequest
   *
   * @since 2008.1
   */
  getBody(): string;
  
  /**
   * return the URL of the request
   * @return {string}
   *
   * @method
   * @memberOf nlobjRequest
   *
   * @since 2008.1
   */
  getURL(): string;
  
  /**
   * return the METHOD of the request
   * @return {'GET'|'POST'}
   *
   * @method
   * @memberOf nlobjRequest
   *
   * @since 2008.1
   */
  getMethod(): 'GET' | 'POST';
}

/**
 * Return a new instance of nlobjPortlet used for scriptable dashboard portlet.
 *
 * @classDescription UI Object used for building portlets that are displayed on dashboard pages
 * @constructor
 */
declare interface nlobjPortlet {
  
  new(): nlobjPortlet;
  
  /**
   * set the portlet title.
   *
   * @param title
   * @return {void}
   *
   * @since 2008.2
   */
  setTitle(title: string): void;
  
  /**
   * set the entire contents of the HTML portlet (will be placed inside a <TD>...</TD>).
   *
   * @param html
   * @return {void}
   *
   * @since 2008.2
   */
  setHtml(html: string): void;
  
  /**
   * add a column (nlobjColumn) to this LIST portlet and return it.
   *
   * @param name - Column name
   * @param type - Column type
   * @param label - Column label
   * @param [align] - Column alignment
   * @return {nlobjColumn}
   *
   * @since 2008.2
   */
  addColumn(name: string, type: string, label: string, align?: string): nlobjColumn;
  
  /**
   * add an Edit column (nlobjColumn) to the left of the column specified (supported on LIST portlets only).
   *
   * @param column
   * @param showView - Should Edit|View instead of Edit link
   * @param [showHrefCol] - Column that evaluates to T or F that determines whether to disable the edit|view link per-row.
   * @return {nlobjColumn}
   *
   * @since 2008.2
   */
  addEditColumn(column: nlobjColumn, showView: boolean, showHrefCol?: string): nlobjColumn;
  
  /**
   * add a row (nlobjSearchResult or Array of name-value pairs) to this LIST portlet.
   *
   * @param row
   * @return {void}
   *
   * @since 2008.2
   */
  addRow(row: string[] | nlobjSearchResult): void;
  
  /**
   * add multiple rows (Array of nlobjSearchResults or name-value pair Arrays) to this LIST portlet.
   *
   * @param rows
   * @return {void}
   *
   * @since 2008.2
   */
  addRows(rows: string[][] | nlobjSearchResult[]): void;
  
  /**
   * add a field (nlobjField) to this FORM portlet and return it.
   *
   * @param name - Field name
   * @param type - Field type
   * @param [label] - Field label
   * @param [source] - Script ID or internal ID for source list (select and multiselects only) -or- radio value for radio fields
   * @return {nlobjField}
   *
   * @since 2008.2
   */
  addField(name: string, type: string, label?: string, source?: string | number): nlobjField;
  
  /**
   * add a FORM submit button to this FORM portlet.
   *
   * @param url - URL that this form portlet will POST to
   * @param [label] - Label for submit button (defaults to Save)
   * @return {void}
   *
   * @since 2008.2
   */
  setSubmitButton(url: string, label?: string): void;
  
  /**
   * add a line (containing text or simple HTML) with optional indenting and URL to this LINKS portlet.
   *
   * @param text - Data to output to line
   * @param [url] - URL if this line should be clickable (if NULL then line will not be clickable)
   * @param indent - Number of indents to insert before text
   * @return {void}
   *
   * @since 2008.2
   */
  addLine(text: string, url?: string, indent?: number): void;
}

/**
 * Return a new instance of nlobjList used for scriptable list page.
 *
 * @classDescription UI Object page type used for building lists
 * @constructor
 */
declare interface nlobjList {
  
  new(): nlobjList;
  
  /**
   * set the page title.
   *
   * @param title
   */
  setTitle(title: string): void;
  
  /**
   * set the global style for this list: grid|report|plain|normal.
   *
   * @param style - Overall style used to render list
   * @return {void}
   *
   * @since 2008.2
   */
  setStyle(style: string): void;
  
  /**
   * set the Client SuiteScript used for this page.
   *
   * @param script - Script ID or internal ID for global client script used to enable Client SuiteScript on page
   * @return {void}
   *
   * @since 2008.2
   */
  setScript(script: string | number): void;
  
  /**
   * add a column (nlobjColumn) to this list and return it.
   *
   * @param name - Column name
   * @param type - Column type
   * @param label - Column label
   * @param [align] - Column alignment
   * @return {nlobjColumn}
   *
   * @since 2008.2
   */
  addColumn(name: string, type: string, label: string, align?: string): nlobjColumn;
  
  /**
   * add an Edit column (nlobjColumn) to the left of the column specified.
   *
   * @param column
   * @param showView - Should Edit|View instead of Edit link
   * @param [showHref] - Column that evaluates to T or F that determines whether to disable the edit|view link per-row.
   * @return {nlobjColumn}
   *
   * @since 2008.2
   */
  addEditColumn(column: nlobjColumn, showView: boolean, showHref?: string): nlobjColumn;
  
  /**
   * add a row (Array of name-value pairs or nlobjSearchResult) to this portlet.
   *
   * @param row - Data used to add a single row
   * @return {void}
   *
   * @since 2008.2
   */
  addRow(row: string[] | nlobjSearchResult): void;
  
  /**
   * add multiple rows (Array of nlobjSearchResults or name-value pair Arrays) to this portlet.
   *
   * @param rows - Data used to add multiple rows
   * @return {void}
   *
   * @since 2008.2
   */
  addRows(rows: string[][] | nlobjSearchResult[]): void;
  
  /**
   * add a button (nlobjButton) to the footer of this page.
   *
   * @param name - Button name
   * @param label - Button label
   * @param script - Button script (function name)
   * @return {void}
   *
   * @since 2008.2
   */
  addButton(name: string, label: string, script: string): void;
  
  /**
   * add a navigation cross-link to the page.
   *
   * @param type - Page link type: crosslink|breadcrumb
   * @param title - Page link title
   * @param url - URL for page link
   * @return {void}
   *
   * @since 2008.2
   */
  addPageLink(type: string, title: string, url: string): void;
}

/**
 * Return a new instance of nlobjForm used for scriptable form page.
 *
 * @classDescription UI Object page type used for building basic data entry forms.
 * @constructor
 */
declare interface nlobjForm {
  
  new(): nlobjForm;
  
  /**
   * set the page title.
   *
   * @param title
   * @return {void}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  setTitle(title: string): void;
  
  /**
   * set additional title Html. INTERNAL ONLY
   *
   * @param html
   * @return {void}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  addTitleHtml(html: string): void;
  
  /**
   * set the Client Script definition used for this page.
   *
   * @param script - Script ID or internal ID for global client script used to enable Client SuiteScript on page
   * @return {void}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  setScript(script: string | number): void;
  
  /**
   * set the values for all the fields on this form.
   *
   * @param values - Object containing field name/value pairs
   * @return {void}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  setFieldValues(values: { [key: string]: string | number }): void;
  
  /**
   * add a navigation cross-link to the page.
   *
   * @param type - Page link type: crosslink|breadcrumb
   * @param title - Page link title
   * @param url - URL for page link
   * @return {void}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  addPageLink(type: string, title: string, url: string): void;
  
  /**
   * add a button to this form.
   *
   * @param name - Button name
   * @param label - Button label
   * @param script - Button script (function name)
   * @return {nlobjButton}
   * @return {void}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  addButton(name: string, label: string, script?: string): nlobjButton;
  
  /**
   * get a button from this form by name.
   * @param name
   * @return {nlobjButton}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2009.2
   */
  getButton(name: string): nlobjButton;
  
  /**
   * add a reset button to this form.
   *
   * @param [label] - Label for this button. defaults to "Reset"
   * @return {nlobjButton}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  addResetButton(label?: string): nlobjButton;
  
  /**
   * add a submit button to this form.
   *
   * @param [label] - Label for this submit button. defaults to "Save"
   * @return {nlobjButton}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  addSubmitButton(label?: string): nlobjButton;
  
  /**
   * add a tab (nlobjTab) to this form and return it.
   *
   * @param name - Tab name
   * @param label - Tab label
   * @return {nlobjTab}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  addTab(name: string, label: string): nlobjTab;
  
  /**
   * add a field (nlobjField) to this form and return it.
   *
   * @param name - Field name
   * @param type - Field type
   * @param [label] - Field label
   * @param [source] - Script ID or internal ID for source list (select and multiselects only)
   * @param [tab] - Tab name that this field will live on. If empty then the field is added to the main section of the form (immediately below the title bar)
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  addField(name: string, type: string, label?: string, source?: string | number, tab?: string): nlobjField;
  
  /**
   * add a field (nlobjField) to this form and return it.
   *
   * @param name - Field name
   * @param type - Field type
   * @param [label] - Field label
   * @param [radio] - Radio value for radio fields
   * @param [tab] - Tab name that this field will live on. If empty then the field is added to the main section of the form (immediately below the title bar)
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  addField(name: string, type: string, label?: string, radio?: string | number, tab?: string): nlobjField;
  
  /**
   * add a field that lets you store credentials in NetSuite to be used when invoking services provided by third parties.
   *
   * @param id
   * @param label
   * @param [website]
   * @param [scriptId]
   * @param [value]
   * @param [entityMatch]
   * @param [tab]
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2012.1
   */
  addCredentialField(id: string, label: string, website?: string, scriptId?: string, value?: string, entityMatch?: boolean, tab?: string): nlobjField;
  
  /**
   * add a subtab (nlobjTab) to this form and return it.
   *
   * @param name - Subtab name
   * @param label - Subtab label
   * @param [tab] - Parent tab that this subtab lives on. If empty, it is added to the main tab.
   * @return {nlobjTab}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  addSubTab(name: string, label: string, tab?: string): nlobjTab;
  
  /**
   * add a sublist (nlobjSubList) to this form and return it.
   *
   * @param name - Sublist name
   * @param type - Sublist type: inlineeditor|editor|list|staticlist
   * @param label - Sublist label
   * @param [tab] - Parent tab that this sublist lives on. If empty, it is added to the main tab
   * @return {nlobjSubList}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  addSubList(name: string, type: string, label: string, tab?: string): nlobjSubList;
  
  /**
   * insert a tab (nlobjTab) before another tab (name).
   *
   * @param tab - The tab object to insert
   * @param nexttab - The name of the tab before which to insert this tab
   * @return {nlobjTab}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  insertTab(tab: nlobjTab, nexttab: string): nlobjTab;
  
  /**
   * insert a field (nlobjField) before another field (name).
   *
   * @param field - The field object to insert
   * @param nextfld - The name of the field before which to insert this field
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  insertField(field: nlobjField, nextfld: string): nlobjField;
  
  /**
   * insert a subtab (nlobjTab) before another subtab or sublist (name).
   *
   * @param subtab - The subtab object to insert
   * @param nextsubtab - The name of the subtab before which to insert this subtab
   * @return {nlobjTab}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  insertSubTab(subtab: nlobjTab, nextsubtab: string): nlobjTab;
  
  /**
   * insert a sublist (nlobjSubList) before another subtab or sublist (name).
   *
   * @param sublist - The sublist object to insert
   * @param nextsublist - The name of the sublist before which to insert this sublist
   * @return {nlobjSubList}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  insertSubList(sublist: nlobjSubList, nextsublist: string): nlobjSubList;
  
  /**
   * return a tab (nlobjTab) on this form.
   *
   * @param name - Tab name
   * @return {nlobjTab}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  getTab(name: string): nlobjTab;
  
  /**
   * return a field (nlobjField) on this form.
   *
   * @param name - Field name
   * @param [radio] - If this is a radio field, specify which radio field to return based on radio value
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  getField(name: string, radio?: string): nlobjField;
  
  /**
   * return a subtab (nlobjTab) on this form.
   *
   * @param name - Subtab name
   * @return {nlobjTab}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  getSubTab(name: string): nlobjTab;
  
  /**
   * return a sublist (nlobjSubList) on this form.
   *
   * @param name - Sublist name
   * @return {nlobjSubList}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2008.2
   */
  getSubList(name: string): nlobjSubList;
  
  /**
   * add a field group to the form.
   * @param name - Field group name
   * @param label - Field group label
   * @param [tab]
   * @return {nlobjFieldGroup}
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2011.1
   */
  addFieldGroup(name: string, label: string, tab?: string): nlobjFieldGroup;
  
  /**
   * get a list of all tabs.
   * @return an array with names of all tabs
   *
   * @method
   * @memberOf nlobjForm
   *
   * @since 2012.2
   */
  getTabs(): nlobjTab[];
}

/**
 * Return a new instance of nlobjAssistant.
 *
 * @classDescription UI Object page type used to build multi-step "assistant" pages to simplify complex workflows. All data and state for an assistant is tracked automatically
 * throughout the user's session up until completion of the assistant.
 * @constructor
 *
 * @since 2009.2
 */
declare interface nlobjAssistant {
  
  new(): nlobjAssistant;
  
  /**
   * set the page title.
   * @param title
   * @return {void}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  setTitle(title: string): void;
  
  /**
   * set the script ID for Client Script used for this form.
   * @param script - Script ID or internal ID for global client script used to enable Client SuiteScript on page
   * @return {void}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  setScript(script: string | number): void;
  
  /**
   * set the splash screen used for this page.
   * @param title - Splash portlet title
   * @param text1 - Splash portlet content (left side)
   * @param [text2] - Splash portlet content (right side)
   * @return {void}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  setSplash(title: string, text1: string, text2?: string): void;
  
  /**
   * show/hide shortcut link. Always hidden on external pages
   * @param show - Enable/disable "Add To Shortcut" link on this page
   * @return {void}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  setShortcut(show: boolean): void;
  
  /**
   * set the values for all the fields on this page.
   * @param values - Object of field name/value pairs used to set all fields on page
   * @return {void}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  setFieldValues(values: Object): void;
  
  /**
   * if ordered, steps are show on left and must be completed sequentially, otherwise steps are shown on top and can be done in any order
   * @param ordered - If true (default assistant behavior) then a navigation order thru the steps/pages will be imposed on the user. Otherwise the user
   *                            will be allowed to navigate across steps/pages in any order they choose.
   * @return  {void}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  setOrdered(ordered: boolean): void;
  
  /**
   * if numbered, step numbers are displayed next to the step's label in the navigation area
   * @param numbered - If true (default assistant behavior) step numbers will be displayed next to the step label
   * @return  {void}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  setNumbered(numbered: boolean): void;
  
  /**
   * return true if all the steps have been completed.
   * @return {boolean}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  isFinished(): boolean;
  
  /**
   * mark assistant page as completed and optionally set the rich text to display on completed page.
   * @param html - Completion message (rich text) to display on the "Finish" page
   * @return  {void}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  setFinished(html: string): void;
  
  /**
   * return true if the assistant has an error message to display for the current step.
   * @return {boolean}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  hasError(): boolean;
  
  /**
   * set the error message for the currrent step.
   * @param html - Error message (rich text) to display on the page to the user
   * @return {void}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  setError(html: string): void;
  
  /**
   * mark a step as current. It will be highlighted accordingly when the page is displayed
   * @param step - Assistant step object representing the current step that the user is on.
   * @return {void}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  setCurrentStep(step: nlobjAssistantStep): void;
  
  /**
   * add a step to the assistant.
   * @param name - The name of the step
   * @param label - Label used for this step
   * @return {nlobjAssistantStep}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  addStep(name: string, label: string): void;
  
  /**
   * add a field to this page and return it.
   * @param name - Field name
   * @param type - Field type
   * @param [label] - Field label
   * @param [source] - Script ID or internal ID for source list (select and multiselects only)
   * @param [group] - Group name that this field will live on. If empty then the field is added to the main section of the page
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  addField(name: string, type: string, label?: string, source?: string | number, group?: string): void;
  
  /**
   * add a field to this page and return it.
   * @param name - Field name
   * @param type - Field type
   * @param [label] - Field label
   * @param [radio] - Radio value for radio fields
   * @param [group] - Group name that this field will live on. If empty then the field is added to the main section of the page
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  addField(name: string, type: string, label?: string, radio?: string | number, group?: string): void;
  
  /**
   * add a sublist to this page and return it. For now only sublists of type inlineeditor are supported
   * @param name - Sublist name
   * @param type - Sublist type (inlineeditor only for now)
   * @param label - Sublist label
   * @return {nlobjSubList}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  addSubList(name: string, type: string, label: string): nlobjSubList;
  
  /**
   * add a field group to the page.
   * @param name - Field group name
   * @param label - Field group label
   * @return {nlobjFieldGroup}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  addFieldGroup(name: string, label: string): nlobjFieldGroup;
  
  /**
   * return an assistant step on this page.
   * @param name - Step name
   * @return {nlobjAssistantStep}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  getStep(name: string): nlobjAssistantStep;
  
  /**
   * return a field on this page.
   * @param name - Field name
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  getField(name: string): nlobjField;
  
  /**
   * return a sublist on this page.
   * @param name - Sublist name
   * @return {nlobjSubList}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  getSubList(name: string): nlobjSubList;
  
  /**
   * return a field group on this page.
   * @param name - Field group name
   * @return {nlobjFieldGroup}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  getFieldGroup(name: string): nlobjFieldGroup;
  
  /**
   * return an array of all the assistant steps for this assistant.
   * @return {nlobjAssistantStep[]}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  getAllSteps(): void;
  
  /**
   * return an array of the names of all fields on this page.
   * @return {string[]}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  getAllFields(): string[];
  
  /**
   *  return an array of the names of all sublists on this page .
   * @return {string[]}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  getAllSubLists(): void;
  
  /**
   * return an array of the names of all field groups on this page.
   * @return {string[]}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  getAllFieldGroups(): void;
  
  /**
   * return the last submitted action by the user: next|back|cancel|finish|jump
   * @return {string}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  getLastAction(): string;
  
  /**
   * return step from which the last submitted action came from
   * @return {nlobjAssistantStep}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  getLastStep(): nlobjAssistantStep;
  
  /**
   * return the next logical step corresponding to the user's last submitted action. You should only call this after
   * you have successfully captured all the information from the last step and are ready to move on to the next step. You
   * would use the return value to set the current step prior to continuing.
   *
   * @return {nlobjAssistantStep}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  getNextStep(): nlobjAssistantStep;
  
  /**
   * return current step set via nlobjAssistant.setCurrentStep(step)
   * @return {nlobjAssistantStep}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  getCurrentStep(): nlobjAssistantStep;
  
  /**
   * return the total number of steps in the assistant
   * @return {number}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  getStepCount(): number;
  
  /**
   * redirect the user following a user submit operation. Use this to automatically redirect the user to the next logical step.
   * @param response - The response object used to communicate back to the user's client
   * @return {void}
   *
   * @method
   * @memberOf nlobjAssistant
   *
   * @since 2009.2
   */
  sendRedirect(response: nlobjResponse): void;
}

/**
 * Return a new instance of nlobjField used for scriptable form/sublist field.
 * This object is READ-ONLY except for scripted fields created via the UI Object API using Suitelets or beforeLoad user events
 *
 * @classDescription Core descriptor for fields used to define records and also used to build pages and portlets.
 * @constructor
 */
declare interface nlobjField {
  
  new(): nlobjField;
  
  /**
   *  return field name.
   *  @return {string}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2009.2
   */
  getName(): string;
  
  /**
   * return field label.
   * @return {string}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2009.2
   */
  getLabel(): string;
  
  /**
   * return field type.
   * @return {string}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2009.2
   */
  getType(): string;
  
  /**
   * return select options.
   *
   * @param [filter]
   * @param [filterOperator]
   * @return {nlobjSelectOption[]}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2009.2
   */
  getSelectOptions(filter?: string, filterOperator?: 'contains' | 'is' | 'startswith'): nlobjSelectOption[];
  
  /**
   * return true if field is hidden.
   * @return {boolean}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2009.2
   */
  isHidden(): boolean;
  
  /**
   * return true if field is mandatory.
   * @return {boolean}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2009.2
   */
  isMandatory(): boolean;
  
  /**
   * return true if field is disabled.
   * @return {boolean}
   *
   * @method
   * @memberOf nlobjField
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2009.2
   */
  isDisabled(): boolean;
  
  /**
   * set the label for this field.
   * This method is only supported on scripted fields via the UI Object API
   *
   * @param label
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2008.2
   */
  setLabel(label: string): nlobjField;
  
  /**
   * set the alias used to set the value for this field. Defaults to field name.
   * This method is only supported on scripted fields via the UI Object API
   *
   * @param alias - Column used to populate the field (mostly relevant when populating sublist fields)
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2008.2
   */
  setAlias(alias: string): nlobjField;
  
  /**
   * set the default value for this field.
   * This method is only supported on scripted fields via the UI Object API
   *
   * @param value
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2008.2
   */
  setDefaultValue(value: string): nlobjField;
  
  /**
   * Disable field via field metadata.
   * This method is only supported on scripted fields via the UI Object API
   * @param disabled - If true then field should be disabled.
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2009.2
   */
  setDisabled(disabled: boolean): nlobjField;
  
  /**
   * make this field mandatory.
   * This method is only supported on scripted fields via the UI Object API
   *
   * @param mandatory - If true then field becomes mandatory
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2008.2
   */
  setMandatory(mandatory: boolean): nlobjField;
  
  /**
   * set the maxlength for this field (only valid for certain field types).
   *  This method is only supported on scripted fields via the UI Object API
   *
   * @param maxlength - Maximum length for this field
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2008.2
   */
  setMaxLength(maxlength: number): nlobjField;
  
  /**
   * set the display type for this field.
   * This method is only supported on scripted fields via the UI Object API
   *
   * @param type - Display type: inline|normal|hidden|disabled|readonly|entry
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2008.2
   */
  setDisplayType(type: string): nlobjField;
  
  /**
   * set the break type (startcol|startrow|none) for this field. startrow is only used for fields with a layout type of outside
   * This method is only supported on scripted fields via the UI Object API
   *
   * @param breaktype - Break type used to add a break in flow layout for this field: startcol|startrow|none
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2009.2
   */
  setBreakType(breaktype: string): nlobjField;
  
  /**
   * set the layout type and optionally the break type.
   * This method is only supported on scripted fields via the UI Object API
   *
   * @param type - Layout type: outside|startrow|midrow|endrow|normal
   * @param [breaktype] - Break type: startcol|startrow|none
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2008.2
   */
  setLayoutType(type: string, breaktype?: string): nlobjField;
  
  /**
   * set the text that gets displayed in lieu of the field value for URL fields.
   *
   * @param text - User-friendly display value in lieu of URL
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2008.2
   */
  setLinkText(text: string): nlobjField;
  
  /**
   * set the width and height for this field.
   * This method is only supported on scripted fields via the UI Object API
   *
   * @param width
   * @param height
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2008.2
   */
  setDisplaySize(width: number, height: number): nlobjField;
  
  /**
   * set the amount of emppty vertical space (rows) between this field and the previous field.
   * This method is only supported on scripted fields via the UI Object API
   *
   * @param padding - # of empty rows to display above field
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2008.2
   */
  setPadding(padding: number): nlobjField;
  
  /**
   * set help text for this field. If inline is set on assistant pages, help is displayed inline below field
   * This method is only supported on scripted fields via the UI Object API
   *
   * @param help - Field level help content (rich text) for field
   * @param [inline] - If true then in addition to the popup field help, the help will also be displayed inline below field (supported on assistant pages only)
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2009.2
   */
  setHelpText(help: string, inline?: string): nlobjField;
  
  /**
   * add a select option to this field (valid for select/multiselect fields).
   * This method is only supported on scripted fields via the UI Object API
   *
   * @param value - Internal ID for this select option
   * @param text - Display value for this select option
   * @param [selected] - If true then this select option will be selected by default
   * @return {void}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2008.2
   */
  addSelectOption(value: string, text: string, selected?: boolean): void;
}

/**
 * Return a new instance of nlobjSelectOption used for scriptable field.
 * This object is READ-ONLY
 *
 * @classDescription Primary object used to encapsulate available select options for a select field.
 * @constructor
 */
declare interface nlobjSelectOption {
  
  /**
   *  return option ID.
   *  @return {string}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2009.2
   */
  getId(): string;
  
  /**
   *  return option text label.
   *  @return {string}
   *
   * @method
   * @memberOf nlobjField
   *
   * @since 2009.2
   */
  getText(): string;
}

/**
 * Return a new instance of nlobjSubList used for scriptable sublist (sublist).
 * This object is READ-ONLY except for instances created via the UI Object API using Suitelets or beforeLoad user events.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3161033.html
 *
 * @classDescription high level container for defining sublist (many to one) relationships on a record or multi-line data entry UIs on pages.
 * @constructor
 */
declare interface nlobjSubList {
  
  new(): nlobjSubList;
  
  /**
   * set the label for this sublist.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3161033.html#bridgehead_N3162546
   * @restriction This method is only supported on sublists via the UI Object API
   *
   * @param label
   * @return {void}
   *
   * @method
   * @memberOf nlobjSubList
   *
   * @since 2008.2
   */
  setLabel(label: string): void;
  
  /**
   * set helper text for this sublist.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3161033.html#bridgehead_N3162437
   * @restriction This method is only supported on sublists via the UI Object API
   *
   * @param help
   * @return {void}
   *
   * @method
   * @memberOf nlobjSubList
   *
   * @since 2008.2
   */
  setHelpText(help: string): void;
  
  /**
   * set the displaytype for this sublist: hidden|normal.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3161033.html#bridgehead_N3162311
   * @restriction This method is only supported on scripted or staticlist sublists via the UI Object API
   *
   * @param type - Default is normal
   * @return {void}
   *
   * @method
   * @memberOf nlobjSubList
   *
   * @since 2008.2
   */
  setDisplayType(type: 'hidden' | 'normal'): void;
  
  /**
   * set the value of a cell in this sublist.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3161033.html#bridgehead_N3162654
   *
   * @param field - Sublist field name
   * @param linenum - Line number (1-based)
   * @param value - Sublist value
   * @return {void}
   *
   * @method
   * @memberOf nlobjSubList
   *
   * @since 2008.2
   */
  setLineItemValue(field: string, linenum: number, value: string): void;
  
  /**
   * set values for multiple lines (Array of nlobjSearchResults or name-value pair Arrays) in this sublist.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3161033.html#bridgehead_N3162802
   * @restriction Note that this method is only supported on scripted sublists via the UI Object API
   *
   * @param values
   * @return {void}
   *
   * @method
   * @memberOf nlobjSubList
   *
   * @since 2008.2
   */
  setLineItemValues(values: string[][] | nlobjSearchResult[]): void;
  
  /**
   * set the value of a matrix cell in this sublist.
   * @param field - Matrix field name
   * @param linenum - Line number (1-based)
   * @param column - Matrix column index (1-based)
   * @param value - Matrix field value
   * @return {void}
   *
   * @method
   * @memberOf nlobjSubList
   *
   * @since 2009.2
   */
  
  // setLineItemMatrixValue(field: string, linenum: number, column: number, value: string): void;
  
  /**
   * Return the number of lines in a sublist.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3161033.html#bridgehead_N3161941
   *
   * @param group - Sublist name
   * @return {void}
   *
   * @method
   * @memberOf nlobjSubList
   *
   * @since 2010.1
   */
  getLineItemCount(group: string): string | number;
  
  /**
   * add a field (column) to this sublist.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3161033.html#bridgehead_N3161467
   *
   * @param name - Field name
   * @param type - Field type
   * @param label - Field label
   * @param [source] - Script ID or internal ID for source list used for this select field
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjSubList
   *
   * @since 2008.2
   */
  addField(name: string, type: string, label: string, source?: string | number): nlobjField;
  
  /**
   * designate a field on sublist that must be unique across all lines (only supported on sublists of type inlineeditor, editor).
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3161033.html#bridgehead_N3162943
   *
   * @param fieldId - The name of a field on this sublist whose value must be unique across all lines
   * @return {nlobjField}
   *
   * @method
   * @memberOf nlobjSubList
   *
   * @since 2009.2
   */
  setUniqueField(fieldId: string): nlobjField;
  
  /**
   * add a button to this sublist.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3161033.html#bridgehead_N3161339
   *
   * @param name - Button name
   * @param label - Button label
   * @param script - Button script (function name)
   * @return {nlobjButton}
   *
   * @method
   * @memberOf nlobjSubList
   *
   * @since 2008.2
   */
  addButton(name: string, label: string, script: string): nlobjButton;
  
  /**
   * add "Refresh" button to sublists of type "staticlist" to support manual refreshing of the sublist (without entire page reloads) if it's contents are very volatile
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3161033.html#bridgehead_N3161847
   *
   * @return {nlobjButton}
   *
   * @method
   * @memberOf nlobjSubList
   *
   * @since 2009.2
   */
  addRefreshButton(): nlobjButton;
  
  /**
   * add "Mark All" and "Unmark All" buttons to this sublist of type "list".
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3161033.html#bridgehead_N3161756
   *
   * @return {void}
   *
   * @method
   * @memberOf nlobjSubList
   *
   * @since 2008.2
   */
  addMarkAllButtons(): void;
}

/**
 * Return a new instance of nlobjColumn used for scriptable list column.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3139838.html
 *
 * @classDescription Class definition for columns used on lists and list portlets.
 * @constructor
 */
declare interface nlobjColumn {
  
  new(): nlobjColumn;
  
  /**
   * set the header name for this column.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3139838.html#bridgehead_N3140151
   *
   * @param label - The label for this column
   * @return {void}
   *
   * @method
   * @memberOf nlobjColumn
   *
   * @since 2008.2
   */
  setLabel(label: string): void;
  
  /**
   * set the base URL (optionally defined per row) for this column.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3139838.html#bridgehead_N3140260
   *
   * @param value - The base URL or a column in the datasource that returns the base URL for each row
   * @param perRow - If true then the 1st arg is expected to be a column in the datasource
   * @return {void}
   *
   * @method
   * @memberOf nlobjColumn
   *
   * @since 2008.2
   */
  setURL(value: string, perRow: boolean): void;
  
  /**
   * add a URL parameter (optionally defined per row) to this column's URL.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3139838.html#bridgehead_N3139996
   *
   * @param param - The name of a parameter to add to URL
   * @param value - The value of the parameter to add to URL -or- a column in the datasource that returns the parameter value for each row
   * @param [perRow] - If true then the 2nd arg is expected to be a column in the datasource
   * @return {void}
   *
   * @method
   * @memberOf nlobjColumn
   *
   * @since 2008.2
   */
  addParamToURL(param: string, value: string, perRow?: boolean): void;
}

/**
 * Return a new instance of nlobjTab used for scriptable tab or subtab.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3163084.html
 *
 * @classDescription high level grouping for fields on a data entry form (nlobjForm).
 * @constructor
 */
declare interface nlobjTab {
  
  new(): nlobjTab;
  
  /**
   * set the label for this tab or subtab.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3163084.html#bridgehead_N3163195
   *
   * @param label - String used as label for this tab or subtab
   * @return {nlobjTab}
   *
   * @method
   * @memberOf nlobjTab
   *
   * @since 2008.2
   */
  setLabel(label: string): nlobjTab;
  
  /**
   * set helper text for this tab or subtab.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3163084.html#bridgehead_N3163303
   *
   * @param help - Inline help text used for this tab or subtab
   * @return {nlobjTab}
   *
   * @method
   * @memberOf nlobjTab
   *
   * @since 2008.2
   */
  setHelpText(help: string): nlobjTab;
}

/**
 * Return a new instance of nlobjAssistantStep.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3137928.html
 *
 * @classDescription assistant step definition. Used to define individual steps/pages in multi-step workflows.
 * @constructor
 *
 * @since 2009.2
 */
declare interface nlobjAssistantStep {
  
  new(): nlobjAssistantStep;
  
  /**
   * set the label for this assistant step.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3137928.html#bridgehead_N3139115
   *
   * @param label - Display label used for this assistant step
   * @return {void}
   *
   * @method
   * @memberOf nlobjAssistantStep
   *
   * @since 2009.2
   */
  setLabel(label: string): void;
  
  /**
   * set helper text for this assistant step.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3137928.html#bridgehead_N3138985
   *
   * @param help - Inline help text to display on assistant page for this step
   * @return {nlobjAssistantStep}
   *
   * @method
   * @memberOf nlobjAssistantStep
   *
   * @since 2009.2
   */
  setHelpText(help: string): nlobjAssistantStep;
  
  /**
   * return the index of this step in the assistant page (1-based)
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3137928.html#bridgehead_N3138883
   *
   * @return the index of this step in the assistant (1-based) based on the order in which the steps were added.
   *
   * @method
   * @memberOf nlobjAssistantStep
   *
   * @since 2009.2
   */
  getStepNumber(): number;
  
  /**
   * return the value of a field entered by the user during this step.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3137928.html#bridgehead_N3138404
   *
   * @param name - Field name
   * @return {string}
   *
   * @method
   * @memberOf nlobjAssistantStep
   *
   * @since 2009.2
   */
  getFieldValue(name: string): string;
  
  /**
   * return the selected values of a multi-select field as an Array entered by the user during this step.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3137928.html#bridgehead_N3138516
   *
   * @param name - Multi-select field name
   * @return {string[]}
   *
   * @method
   * @memberOf nlobjAssistantStep
   *
   * @since 2009.2
   */
  getFieldValues(name: string): string[];
  
  /**
   * return the number of lines previously entered by the user in this step (or -1 if the sublist does not exist).
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3137928.html#bridgehead_N3138634
   *
   * @param group - Sublist name
   * @return {number}
   *
   * @method
   * @memberOf nlobjAssistantStep
   *
   * @since 2009.2
   */
  getLineItemCount(group: string): number;
  
  /**
   * return the value of a sublist field entered by the user during this step.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3137928.html#bridgehead_N3138752
   *
   * @param group - Sublist name
   * @param name - Sublist field name
   * @param linenum - Sublist (1-based)
   * @return {string}
   *
   * @method
   * @memberOf nlobjAssistantStep
   *
   * @since 2009.2
   */
  getLineItemValue(group: string, name: string, linenum: number): string;
  
  /**
   * return an array of the names of all fields entered by the user during this step.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3137928.html#bridgehead_N3138125
   *
   * @return {string[]}
   *
   * @method
   * @memberOf nlobjAssistantStep
   *
   * @since 2009.2
   */
  getAllFields(): string[];
  
  /**
   * return an array of the names of all sublists entered by the user during this step.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3137928.html#bridgehead_N3138318
   *
   * @return {string[]}
   *
   * @method
   * @memberOf nlobjAssistantStep
   *
   * @since 2009.2
   */
  getAllLineItems(): void;
  
  /**
   * return an array of the names of all sublist fields entered by the user during this step
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3137928.html#bridgehead_N3138211
   *
   * @param group - Sublist name
   * @return {string[]}
   *
   * @method
   * @memberOf nlobjAssistantStep
   *
   * @since 2009.2
   */
  getAllLineItemFields(group: string): void;
}

/**
 * Return a new instance of nlobjFieldGroup (currently only supported on nlobjAssistant pages)
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3143883.html
 *
 * @classDescription object used for grouping fields on pages (currently only supported on assistant pages).
 * @constructor
 *
 * @since 2009.2
 */
declare interface nlobjFieldGroup {
  
  new(): nlobjFieldGroup;
  
  /**
   * set the label for this field group.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3143883.html#bridgehead_N3144249
   *
   * @param label - Display label for field group
   * @return {nlobjFieldGroup}
   *
   * @method
   * @memberOf nlobjFieldGroup
   *
   * @since 2009.2
   */
  setLabel(label: string): nlobjFieldGroup;
  
  /**
   * set collapsibility property for this field group.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3143883.html#bridgehead_N3144022
   *
   * @param collapsible - If true then this field group is collapsible
   * @param [defaultcollapsed] - If true and the field group is collapsible, collapse this field group by default
   * @return {nlobjFieldGroup}
   *
   * @method
   * @memberOf nlobjFieldGroup
   *
   * @since 2009.2
   */
  setCollapsible(collapsible: boolean, defaultcollapsed?: boolean): nlobjFieldGroup;
  
  /**
   * set singleColumn property for this field group.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3143883.html#bridgehead_N3144487
   *
   * @param singleColumn - If true then this field group is displayed in single column
   * @return {nlobjFieldGroup}
   *
   * @method
   * @memberOf nlobjFieldGroup
   *
   * @since 2011.1
   */
  setSingleColumn(singleColumn: boolean): nlobjFieldGroup;
  
  /**
   * set showBorder property for this field group.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3143883.html#bridgehead_N3144357
   *
   * @param showBorder - If true then this field group shows border including label of group
   * @return {nlobjFieldGroup}
   *
   * @method
   * @memberOf nlobjFieldGroup
   *
   * @since 2011.1
   */
  setShowBorder(showBorder: boolean): nlobjFieldGroup;
}

/**
 * Return a new instance of nlobjButton.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3139249.html
 *
 * @classDescription buttons used for triggering custom behaviors on pages.
 * @constructor
 *
 * @since 2009.2
 */
declare interface nlobjButton {
  
  new(): nlobjButton;
  
  /**
   * set the label for this button.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3139249.html#bridgehead_N3139554
   *
   * @param label - Display label for button
   * @return {nlobjButton}
   *
   * @method
   * @memberOf nlobjButton
   *
   * @since 2008.2
   */
  setLabel(label: string): nlobjButton;
  
  /**
   * disable or enable button.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3139249.html#bridgehead_N3139411
   *
   * @param disabled - If true then this button should be disabled on the page
   * @return {nlobjButton}
   *
   * @method
   * @memberOf nlobjButton
   *
   * @since 2008.2
   */
  setDisabled(disabled: boolean): nlobjButton;
  
  /**
   * set visibility of button.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3139249.html#bridgehead_N3139700
   *
   * @param visible - If true then this button should be visibile on the page
   * @return {nlobjButton}
   *
   * @method
   * @memberOf nlobjButton
   *
   * @since 2008.2
   */
  setVisible(visible: boolean): nlobjButton;
}

/**
 * Return a new instance of nlobjSelectOption.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3126295.html
 *
 * @classDescription select|radio option used for building select fields via the UI Object API and for describing select|radio fields.
 * @constructor
 *
 * @since 2009.2
 */
declare interface nlobjSelectOption {
  
  new(): nlobjSelectOption;
  
  /**
   * return internal ID for select option
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3126295.html#bridgehead_N3126369
   *
   * @return {string}
   *
   * @method
   * @memberOf nlobjSelectOption
   *
   * @since 2009.2
   */
  getId(): string;
  
  /**
   * return display value for select option.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3126295.html#bridgehead_N3126474
   *
   * @return {string}
   *
   * @method
   * @memberOf nlobjSelectOption
   *
   * @since 2009.2
   */
  getText(): string;
}

/**
 * Use these APIs to change the NetSuite login credentials of the currently logged-in user. In NetSuite, a user's login credentials consists of a user's email address and a password.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3073947.html#bridgehead_N3074008
 *
 * @return nlobjLogin
 *
 * @since 2012.2
 */
declare function nlapiGetLogin(): nlobjLogin;

/**
 * Return a new instance of nlobjLogin.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3090113.html
 *
 * @classDescription Primary object used to encapsulate NetSuite user login credentials.
 * @constructor
 *
 * @since 2012.2
 */
declare interface nlobjLogin {
  
  new(): nlobjLogin;
  
  /**
   * Sets the logged-in user's email address to a new one.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3090113.html#bridgehead_N3090191
   *
   * @param currentPassword - The current password of the logged-in user. If a valid value is not specified, an error will be thrown.
   * @param newEmailAddress - The new email address for the logged-in user. If a valid value is not specified, an error will be thrown.
   * @param [justThisAccount] - If not set, this argument defaults to true. If set to true, the email address change is applied only to roles within the current account. If set to false, the email address change is applied to all accounts and roles.
   * @return {void}
   *
   * @method
   * @memberOf nlobjJobManager
   *
   * @since 2012.2
   */
  changeEmail(currentPassword: string, newEmailAddress: string, justThisAccount?: boolean): void;
  
  /**
   * Sets the logged-in user's password to a new one.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3090113.html#bridgehead_N3090326
   *
   * @param currentPassword - The current password of the logged-in user. If a valid value is not specified, an error will be thrown.
   * @param newPassword - The new password for the logged-in user. If a valid value is not specified, an error will be thrown.
   * @return {void}
   *
   * @method
   * @memberOf nlobjJobManager
   *
   * @since 2012.2
   */
  changeEmail(currentPassword: string, newPassword: string): void;
}

/**
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3074192.html#bridgehead_N3074310
 *
 * @param jobType - Job Type
 *
 * @since 2013.1
 */
declare function nlapiGetJobManager(jobType: string): nlobjJobManager;

/**
 * Return a new instance of nlobjJobManager.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3089592.html
 *
 * @classDescription Encapsulates the properties of a job manager. A call to nlapiGetJobManager(jobType) returns a reference to this object. Use the methods in nlobjJobManager to create and submit your merge duplicate records job request.
 * @constructor
 *
 * @since 2013.1
 */
declare interface nlobjJobManager {
  
  new(): nlobjJobManager;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3089592.html#bridgehead_N3089729
   *
   * @return {nlobjDuplicateJobRequest}
   *
   * @method
   * @memberOf nlobjJobManager
   *
   * @since 2013.1
   */
  createJobRequest(): nlobjDuplicateJobRequest;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3089592.html#bridgehead_N3089844
   *
   * @param nlobjDuplicateJobRequest
   * @return {string}
   *
   * @method
   * @memberOf nlobjJobManager
   *
   * @since 2013.1
   */
  submit(duplicateJobRequest: nlobjDuplicateJobRequest): string;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3089592.html#bridgehead_N3089981
   *
   * @return {string}
   *
   * @method
   * @memberOf nlobjFuture
   *
   * @since 2013.1
   */
  getFuture(): nlobjFuture;
}

/**
 * Return a new instance of nlobjDuplicateJobRequest.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3085362.html
 *
 * @classDescription Primary object used to encapsulate all the properties of a merge duplicate record job request. Note that nlobjJobManager.createJobRequest() returns a reference to this object.
 * @constructor
 *
 * @since 2013.1
 */
declare interface nlobjDuplicateJobRequest {
  
  new(): nlobjDuplicateJobRequest;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3085362.html#bridgehead_N3085524
   *
   * @param entityType
   * @return {void}
   *
   * @method
   * @memberOf nlobjDuplicateJobRequest
   *
   * @since 2013.1
   */
  setEntityType(entityType: 'ENTITY_CUSTOMER' | 'ENTITY_CONTACT' | 'ENTITY_LEAD' | 'ENTITY_PROSPECT' | 'ENTITY_PARTNER' | 'ENTITY_VENDOR' | 'entity_customer' | 'entity_contact' | 'entity_lead' | 'entity_prospect' | 'entity_partner' | 'entity_vendor'): void;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3085362.html#bridgehead_N3085709
   *
   * @param masterId
   * @return {void}
   *
   * @method
   * @memberOf nlobjDuplicateJobRequest
   *
   * @since 2013.1
   */
  setMasterId(masterId: string): void;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3085362.html#bridgehead_N3085817
   *
   * @param mode
   * @return {void}
   *
   * @method
   * @memberOf nlobjDuplicateJobRequest
   *
   * @since 2013.1
   */
  setMasterSelectionMode(mode: 'MASTERSELECTIONMODE_CREATED_EARLIEST' | 'MASTERSELECTIONMODE_MOST_RECENT_ACTIVITY' | 'MASTERSELECTIONMODE_MOST_POPULATED_FIELDS' | 'MASTERSELECTIONMODE_SELECT_BY_ID' | 'masterselectionmode_created_earliest' | 'masterselectionmode_most_recent_activity' | 'masterselectionmode_most_populated_fields' | 'masterselectionmode_select_by_id'): void;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3085362.html#bridgehead_N3085977
   *
   * @param operation
   * @return {void}
   *
   * @method
   * @memberOf nlobjDuplicateJobRequest
   *
   * @since 2013.1
   */
  setOperation(operation: 'OPERATION_MERGE' | 'OPERATION_DELETE' | 'OPERATION_MAKE_MASTER_PARENT' | 'OPERATION_MARK_AS_NOT_DUPES' | 'operation_merge' | 'operation_delete' | 'operation_make_master_parent' | 'operation_mark_as_not_dupes'): void;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3085362.html#bridgehead_N3086136
   *
   * @param dupeRecords
   * @return {void}
   *
   * @method
   * @memberOf nlobjDuplicateJobRequest
   *
   * @since 2013.1
   */
  setRecords(dupeRecords: (string | number)[]): void;
}

/**
 * Return a new instance of nlobjFuture.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3089287.html
 *
 * @classDescription Encapsulates the properties of a merge duplicate record job status. Note that nlobjJobManager.getFuture() returns a reference to this object.
 * @constructor
 *
 * @since 2013.1
 */
declare interface nlobjFuture {
  
  new(): nlobjFuture;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3089287.html#bridgehead_N3089378
   *
   * @return True if job has finished
   *
   * @method
   * @memberOf nlobjFuture
   *
   * @since 2013.1
   */
  isDone(): boolean;
  
  /**
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3089287.html#bridgehead_N3089485
   *
   * @return For merge duplicate records, will always returns false
   *
   * @method
   * @memberOf nlobjFuture
   *
   * @since 2013.1
   */
  isCancelled(): boolean;
}

/**
 * Return a new instance of nlobjCache.
 * @see unknown
 *
 * @classDescription
 * @constructor
 *
 * @since 2013.2
 */
declare interface nlobjCache {
  
  new(): nlobjCache;
  
  /**
   * @see unknown
   *
   * @param key
   * @param value
   * @param [ttl] - Time To Live - cache duration time in seconds - default is 2 hours - value can be between 5 mins a
   nd 2 hours
   * @return {Object}
   *
   * @method
   * @memberOf nlobjCache
   *
   * @since 2013.2
   */
  put(key: string, value: string | number, ttl: number): Object;
  
  /**
   * @see unknown
   *
   * @param key
   * @return {string}
   *
   * @method
   * @memberOf nlobjCache
   *
   * @since 2013.2
   */
  get(key: string): string;
  
  /**
   * @see unknown
   *
   * @param key
   * @return {Object}
   *
   * @method
   * @memberOf nlobjCache
   *
   * @since 2013.2
   */
  remove(key: string): Object;
}

/**
 * Return a new instance of nlobjTemplateRenderer.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3163411.html
 *
 * @classDescription
 * @constructor
 *
 * @since 2013.1
 */
declare interface nlobjTemplateRenderer {
  
  new(): nlobjTemplateRenderer;
  
  /**
   * Passes in raw string of template to be transformed by FreeMarker.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3163411.html#bridgehead_N3163655
   *
   * @param template - Raw string of template
   * @return {void}
   *
   * @method
   * @memberOf nlobjTemplateRenderer
   *
   * @since 2013.1
   */
  setTemplate(template: string): void;
  
  /**
   * Binds nlobjRecord object to variable name used in template.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3163411.html#bridgehead_N3163762
   *
   * @param variable - Variable name that represents record
   * @param record - NetSuite record
   * @return {void}
   *
   * @method
   * @memberOf nlobjTemplateRenderer
   *
   * @since 2013.1
   */
  addRecord(variable: string, record: nlobjRecord): void;
  
  /**
   * Binds nlobjRecord object to variable name used in template.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3163411.html#bridgehead_N3163890
   *
   * @param variable - Variable name that represents search result
   * @param searchResult - NetSuite search result
   * @return {void}
   *
   * @method
   * @memberOf nlobjTemplateRenderer
   *
   * @since 2013.1
   */
  addSearchResults(variable: string, searchResult: nlobjSearchResult): void;
  
  /**
   * Returns template content interpreted by FreeMarker as XML string that can be passed to nlapiXMLToPDF(xmlstring) to produce PDF output.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3163411.html#bridgehead_N3164018
   *
   * @return XML string of template interpreted by FreeMarker
   *
   * @method
   * @memberOf nlobjTemplateRenderer
   *
   * @since 2013.1
   */
  renderToString(): string;
  
  /**
   * Renders HTML output to nlobjResponse object.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N3163411.html#bridgehead_N3164147
   *
   * @return HTML output to an HTTP response object
   *
   * @method
   * @memberOf nlobjTemplateRenderer
   *
   * @since 2013.1
   */
  renderToResponse(): nlobjResponse;
}

/**
 * Return a new instance of nlobjEmailMerger.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4175410855.html
 * @restriction supported in server-side scripts only.
 *
 * @classDescription
 * @constructor
 *
 * @since 2015.1
 */
declare interface nlobjEmailMerger {
  
  new(): nlobjEmailMerger;
  
  /**
   * Use this method to perform a mail merge on an nlobjEmailMerger object (a scriptable email template) and the records designated with the nlobjEmailMerger set methods.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4175410855.html#bridgehead_4175414674
   * @governance 20 units
   * @restriction supported in server-side scripts only.
   *
   * @return Object containing the email subject and body
   *
   * @method
   * @memberOf nlobjEmailMerger
   *
   * @exception {SSS_MERGER_ERROR_OCCURRED} - Thrown if the template merger fails
   *
   * @since 2015.1
   */
  merge(): nlobjMergeResult;
  
  /**
   * Use this method to designate a custom record to use in a mail merge.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4175410855.html#bridgehead_4175414953
   * @restriction supported in server-side scripts only.
   *
   * @param recordType - Internal ID of the custom record type
   * @param recordId - Internal ID of the custom record to use in the mail merge
   * @return {void}
   *
   * @method
   * @memberOf nlobjEmailMerger
   *
   * @exception {SSS_INVALID_TYPE_ARG} - Thrown if the recordType argument is invalid or missing
   *
   * @since 2015.1
   */
  setCustomRecord(recordType: string, recordId: number | string): void;
  
  /**
   * Use this method to designate an entity to use in a mail merge.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4175410855.html#bridgehead_4175413325
   * @restriction supported in server-side scripts only.
   *
   * @param entityType - Record type of the record to use in the mail merge
   * @param entityId - Internal ID of the record to use in the mail merge
   * @return {void}
   *
   * @method
   * @memberOf nlobjEmailMerger
   *
   * @exception {SSS_INVALID_TYPE_ARG} - Thrown if the entityType argument is invalid or missing
   * @exception {SSS_MERGER_ERROR_OCCURRED} - Thrown if the entity cannot be set
   *
   * @since 2015.1
   */
  setEntity(entityType: 'customer' | 'contact' | 'partner' | 'vendor' | 'employee', entityId: number | string): void;
  
  /**
   * Use this method to designate a second entity (as a recipient) to use in a mail merge.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4175410855.html#bridgehead_4175414108
   * @restriction supported in server-side scripts only.
   *
   * @param recipientType - Record type of the record to use in the mail merge
   * @param recipientId - Internal ID of the record to use in the mail merge
   * @return {void}
   *
   * @method
   * @memberOf nlobjEmailMerger
   *
   * @exception {SSS_INVALID_TYPE_ARG} - Thrown if the recipientType argument is invalid or missing
   * @exception {SSS_MERGER_ERROR_OCCURRED} - Thrown if the recipient cannot be set
   *
   * @since 2015.1
   */
  setRecipient(recipientType: 'customer' | 'contact' | 'partner' | 'vendor' | 'employee', recipientId: number | string): void;
  
  /**
   * Use this method to designate a support case to use in a mail merge.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4175410855.html#bridgehead_4175415331
   * @restriction supported in server-side scripts only.
   *
   * @param caseId - Internal ID of the case record to use in the mail merge
   * @return {void}
   *
   * @method
   * @memberOf nlobjEmailMerger
   *
   * @exception {SSS_MERGER_ERROR_OCCURRED} - Thrown if the case cannot be set
   *
   * @since 2015.1
   */
  setSupportCase(caseId: number | string): void;
  
  /**
   * Use this method to designate a transaction to use in a mail merge. All transaction types are supported.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4175410855.html#bridgehead_4175415590
   * @restriction supported in server-side scripts only.
   *
   * @param transactionId - Internal ID of the transaction record to use in the mail merge
   * @return {void}
   *
   * @method
   * @memberOf nlobjEmailMerger
   *
   * @exception {SSS_MERGER_ERROR_OCCURRED} - Thrown if the transaction cannot be set
   *
   * @since 2015.1
   */
  setTransaction(transactionId: number | string): void;
}

/**
 * Return a new instance of nlobjMergeResult.
 * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4176454795.html
 * @restriction supported in server-side scripts only.
 *
 * @classDescription
 * @constructor
 *
 * @since 2015.1
 */
declare interface nlobjMergeResult {
  
  new(): nlobjMergeResult;
  
  /**
   * Use this method to get the body of the email distribution in string format.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4176454795.html#bridgehead_4176456131
   * @restriction supported in server-side scripts only.
   *
   * @return {string}
   *
   * @method
   * @memberOf nlobjMergeResult
   *
   * @since 2015.1
   */
  getBody(): string;
  
  /**
   * Use this method to get the subject of the email distribution in string format.
   * @see https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4176454795.html#bridgehead_4176456571
   * @restriction supported in server-side scripts only.
   *
   * @return {string}
   *
   * @method
   * @memberOf nlobjMergeResult
   *
   * @since 2015.1
   */
  getSubject(): string;
}