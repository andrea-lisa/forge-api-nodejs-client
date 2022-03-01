/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function () {
	'use strict';

	var ApiClient = require('../ApiClient'),
		Diagnostics = require('../model/Diagnostics'),
		Formats = require('../model/Formats'),
		Job = require('../model/Job'),
		JobPayload = require('../model/JobPayload'),
		Manifest = require('../model/Manifest'),
		Metadata = require('../model/Metadata'),
		Result = require('../model/Result');

	/**
	 * Derivatives service.
	 * @module api/DerivativesApi
	 */

	/**
	 * Constructs a new DerivativesApi.
	 * @alias module:api/DerivativesApi
	 * @class
	 * @param {module:ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:ApiClient#instance} if unspecified.
	 */
	var exports = function (apiClient, region) {
		this.apiClient = apiClient || ApiClient.instance;

		this.region = region || 'US'; // US is default

		this.regionPaths = {
			US: '/modelderivative/v2',
			EMEA: '/modelderivative/v2/regions/eu',
			EU: '/modelderivative/v2/regions/eu', // EU == EMEA
		};

		/**
		 * Returns an up-to-date list of Forge-supported translations, that you can use to identify which types of derivatives are supported for each source file type. You can set this endpoint to only return the list of supported translations if they have been updated since a specified date.  See the [Supported Translation Formats table](https://developer.autodesk.com/en/docs/model-derivative/v2/overview/supported-translations) for more details about supported translations.  Note that we are constantly adding new file formats to the list of Forge translations.
		 * @param {Object} opts Optional parameters
		 * @param {Date} opts.ifModifiedSince The supported formats are only returned if they were modified since the specified date. An invalid date returns the latest supported format list. If the supported formats have not been modified since the specified date, the endpoint returns a `NOT MODIFIED` (304) response.
		 * @param {String} opts.acceptEncoding If specified with `gzip` or `*`, content will be compressed and returned in a GZIP format.
		 * data is of type: {module:model/Formats}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getFormats = function (opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = null;

			var pathParams = {};
			var queryParams = {};
			var headerParams = {
				'If-Modified-Since': opts.ifModifiedSince,
				'Accept-Encoding': opts.acceptEncoding
			};
			var formParams = {};

			var contentTypes = ['application/json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = Formats;

			return this.apiClient.callApi(
				this.regionPaths[this.region] + '/designdata/formats', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Translate a source file from one format to another.  Derivatives are stored in a manifest that is updated each time this endpoint is used on a source file.  Note that this endpoint is asynchronous and initiates a process that runs in the background, rather than keeping an open HTTP connection until completion. Use the [GET {urn}/manifest](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET) endpoint to poll for the job’s completion.
		 * @param {module:model/JobPayload} job
		 * @param {Object} opts Optional parameters
		 * @param {Boolean} opts.xAdsForce `true`: the endpoint replaces previously translated output file types with the newly generated derivatives  `false` (default): previously created derivatives are not replaced  (default to false)
		 * data is of type: {module:model/Job}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.translate = function (job, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = job;

			// verify the required parameter 'job' is set
			if (job == undefined || job == null) {
				return Promise.reject("Missing the required parameter 'job' when calling translate");
			}

			var pathParams = {};
			var queryParams = {};
			var headerParams = {
				'x-ads-force': opts.xAdsForce
			};
			var formParams = {};

			var contentTypes = ['application/json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = Job;

			return this.apiClient.callApi(
				this.regionPaths[this.region] + '/designdata/job', 'POST',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * To create references for a composite design in Model Derivative. The description of references is stored in Model Derivative. To use it with the POST job endpoint, you need to set checkReferences to true.
		 * @param {String} urn The root design urn. Mandatory if the base64 encoded urn in the request URL is a logical urn.
		 * @param {Object} body
		 * @param {Object} opts Optional parameters
		 * data is of type: {Object}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.setReferences = function (urn, body, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = body;

			// verify the required parameter 'urn' is set
			if (urn === undefined || urn === null) {
				return Promise.reject("Missing the required parameter 'urn' when calling setReferences");
			}
			// verify the required parameter 'body' is set
			if (body === undefined || body === null) {
				return Promise.reject("Missing the required parameter 'body' when calling setReferences");
			}

			var pathParams = {
				urn: urn
			};
			var queryParams = {};
			var headerParams = {};
			var formParams = {};

			var contentTypes = ['application/json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = null;

			return this.apiClient.callApi(
				this.regionPaths[this.region] + '/designdata/{urn}/references', 'POST',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Returns the thumbnail for the source file.
		 * @param {String} urn The Base64 (URL Safe) encoded design URN
		 * @param {Object} opts Optional parameters
		 * @param {Integer} opts.width The desired width of the thumbnail. Possible values are 100, 200 and 400.
		 * @param {Integer} opts.height The desired height of the thumbnail. Possible values are 100, 200 and 400.
		 * data is of type: {Object}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getThumbnail = function (urn, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = null;

			// verify the required parameter 'urn' is set
			if (urn == undefined || urn == null) {
				return Promise.reject("Missing the required parameter 'urn' when calling getThumbnail");
			}

			var pathParams = {
				'urn': urn
			};
			var queryParams = {
				'width': opts.width,
				'height': opts.height
			};
			var headerParams = {};
			var formParams = {};

			var contentTypes = ['application/json'];
			var accepts = ['application/octet-stream'];
			var returnType = Object;

			return this.apiClient.callApi(
				this.regionPaths[this.region] + '/designdata/{urn}/thumbnail', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Returns information about derivatives that correspond to a specific source file, including derviative URNs and statuses.  The URNs of the derivatives are used to download the generated derivatives when calling the [GET {urn}/manifest/{derivativeurn}](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-derivativeurn-GET) endpoint.  The statuses are used to verify whether the translation of requested output files is complete.  Note that different output files might complete their translation processes at different times, and therefore may have different status values.  When translating a source file a second time, the previously created manifest is not deleted; it appends the information (only new translations) to the manifest.
		 * @param {String} urn The Base64 (URL Safe) encoded design URN
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.acceptEncoding If specified with `gzip` or `*`, content will be compressed and returned in a GZIP format.
		 * data is of type: {module:model/Manifest}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getManifest = function (urn, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = null;

			// verify the required parameter 'urn' is set
			if (urn == undefined || urn == null) {
				return Promise.reject("Missing the required parameter 'urn' when calling getManifest");
			}

			var pathParams = {
				'urn': urn
			};
			var queryParams = {};
			var headerParams = {
				'Accept-Encoding': opts.acceptEncoding
			};
			var formParams = {};

			var contentTypes = ['application/json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = Manifest;

			return this.apiClient.callApi(
				this.regionPaths[this.region] + '/designdata/{urn}/manifest', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Deletes the manifest and all its translated output files (derivatives). However, it does not delete the design source file.
		 * @param {String} urn The Base64 (URL Safe) encoded design URN
		 * data is of type: {module:model/Result}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.deleteManifest = function (urn, oauth2client, credentials) {
			var postBody = null;

			// verify the required parameter 'urn' is set
			if (urn == undefined || urn == null) {
				return Promise.reject("Missing the required parameter 'urn' when calling deleteManifest");
			}

			var pathParams = {
				'urn': urn
			};
			var queryParams = {};
			var headerParams = {};
			var formParams = {};

			var contentTypes = ['application/x-www-form-urlencoded'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = Result;

			return this.apiClient.callApi(
				this.regionPaths[this.region] + '/designdata/{urn}/manifest', 'DELETE',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Downloads a selected derivative. To download the file, you need to specify the file’s URN, which you retrieve by calling the [GET {urn}/manifest](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET) endpoint.  Note that the Model Derivative API uses 2 types of URNs. The **design URN** is generated when you upload the source design file to Forge, and is used when calling most of the Model Derivative endpoints. A **derivative URN** is generated for each translated output file format, and is used for downloading the output design files.  You can set the range of bytes that are returned when downloading the derivative, using the range header.
		 * @param {String} urn The Base64 (URL Safe) encoded design URN
		 * @param {String} derivativeUrn The URL-encoded URN of the derivatives. The URN is retrieved from the GET :urn/manifest endpoint.
		 * @param {Object} opts Optional parameters
		 * @param {Integer} opts.range This is the standard RFC 2616 range request header. It only supports one range specifier per request: 1. Range:bytes=0-63 (returns the first 64 bytes) 2. Range:bytes=64-127 (returns the second set of 64 bytes) 3. Range:bytes=1022- (returns all the bytes from offset 1022 to the end) 4. If the range header is not specified, the whole content is returned.
		 * @param {String} opts.acceptEncoding If specified with `gzip` or `*`, content will be compressed and returned in a GZIP format.
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getDerivativeManifest = function (urn, derivativeUrn, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = null;

			// verify the required parameter 'urn' is set
			if (urn == undefined || urn == null) {
				return Promise.reject("Missing the required parameter 'urn' when calling getDerivativeManifest");
			}

			// verify the required parameter 'derivativeUrn' is set
			if (derivativeUrn == undefined || derivativeUrn == null) {
				return Promise.reject("Missing the required parameter 'derivativeUrn' when calling getDerivativeManifest");
			}

			var pathParams = {
				'urn': urn,
				'derivativeUrn': derivativeUrn
			};
			var queryParams = {};
			var headerParams = {
				'Range': opts.range,
				'Accept-Encoding': opts.acceptEncoding, // 'deflate, gzip, br'
			};
			var formParams = {};

			var contentTypes = ['application/json'];
			var accepts = ['application/octet-stream'];
			var returnType = null;

			return this.apiClient.callApi(
				this.regionPaths[this.region] + '/designdata/{urn}/manifest/{derivativeUrn}', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Returns information about the specified derivative. 
		 * @param {String} urn The Base64 (URL Safe) encoded design URN
		 * @param {String} derivativeUrn The URL-encoded URN of the derivatives. The URN is retrieved from the GET :urn/manifest endpoint.
		 * @param {Object} opts Optional parameters
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getDerivativeManifestInfo = function (urn, derivativeUrn, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = null;

			// verify the required parameter 'urn' is set
			if (urn == undefined || urn == null) {
				return Promise.reject("Missing the required parameter 'urn' when calling getDerivativeManifest");
			}

			// verify the required parameter 'derivativeUrn' is set
			if (derivativeUrn == undefined || derivativeUrn == null) {
				return Promise.reject("Missing the required parameter 'derivativeUrn' when calling getDerivativeManifest");
			}

			var pathParams = {
				'urn': urn,
				'derivativeUrn': derivativeUrn
			};
			var queryParams = {};
			var headerParams = {};
			var formParams = {};

			var contentTypes = [];
			var accepts = [];
			var returnType = null;

			return this.apiClient.callApi(
				this.regionPaths[this.region] + '/designdata/{urn}/manifest/{derivativeUrn}', 'HEAD',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Returns a list of model view (metadata) IDs for a design model. The metadata ID enables end users to select an object tree and properties for a specific model view.  Although most design apps (e.g., Fusion and Inventor) only allow a single model view (object tree and set of properties), some apps (e.g., Revit) allow users to design models with multiple model views (e.g., HVAC, architecture, perspective).  Note that you can only retrieve metadata from an input file that has been translated into an SVF file.
		 * @param {String} urn The Base64 (URL Safe) encoded design URN
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.acceptEncoding If specified with `gzip` or `*`, content will be compressed and returned in a GZIP format.
		 * data is of type: {module:model/Metadata}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getMetadata = function (urn, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = null;

			// verify the required parameter 'urn' is set
			if (urn == undefined || urn == null) {
				return Promise.reject("Missing the required parameter 'urn' when calling getMetadata");
			}

			var pathParams = {
				'urn': urn
			};
			var queryParams = {};
			var headerParams = {
				'Accept-Encoding': opts.acceptEncoding
			};
			var formParams = {};

			var contentTypes = ['application/json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = Metadata;

			return this.apiClient.callApi(
				this.regionPaths[this.region] + '/designdata/{urn}/metadata', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Returns an object tree, i.e., a hierarchical list of objects for a model view.  To call this endpoint you first need to call the [GET {urn}/metadata](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-GET) endpoint, to determine which model view (object tree and set of properties) to use.  Although most design apps (e.g., Fusion and Inventor) only allow a single model view, some apps (e.g., Revit) allow users to design models with multiple model views (e.g., HVAC, architecture, perspective).  Note that you can only retrieve metadata from an input file that has been translated into an SVF file.
		 * @param {String} urn The Base64 (URL Safe) encoded design URN
		 * @param {String} guid Unique model view ID. Call [GET {urn}/metadata](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-GET) to get the ID
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.acceptEncoding If specified with `gzip` or `*`, content will be compressed and returned in a GZIP format.
		 * @param {Boolean} opts.xAdsForce Force retrieve the object tree even though it failed to be extracted (got 404 with error message) previously. (default is false) retrieve the object tree, and previously failures are not replaced.
		 * @param {String} opts.xAdsFormat fallback: fallback to SVF format; latest: returns SVF2 if available. Possible values: latest / fallback; Default to latest.
		 * @param {Boolean} opts.forceget To force get the large resource even if it exceeded the expected maximum length (20 MB). Possible values: true, false. The the implicit value is false.
		 * data is of type: {module:model/Metadata}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getModelviewMetadata = function (urn, guid, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = null;

			// verify the required parameter 'urn' is set
			if (urn == undefined || urn == null) {
				return Promise.reject("Missing the required parameter 'urn' when calling getModelviewMetadata");
			}

			// verify the required parameter 'guid' is set
			if (guid == undefined || guid == null) {
				return Promise.reject("Missing the required parameter 'guid' when calling getModelviewMetadata");
			}

			var pathParams = {
				'urn': urn,
				'guid': guid
			};
			var queryParams = {
				'forceget': opts.forceget || false
			};
			var headerParams = {
				'Accept-Encoding': opts.acceptEncoding,
				'x-ads-force': opts.xAdsForce || false,
				'x-ads-derivative-format': opts.xAdsFormat || 'latest'
			};
			var formParams = {};

			var contentTypes = ['application/json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = Metadata;

			return this.apiClient.callApi(
				this.regionPaths[this.region] + '/designdata/{urn}/metadata/{guid}', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Returns a list of properties for each object in an object tree. Properties are returned according to object ID and do not follow a hierarchical structure.  The following image displays a typical list of properties for a Revit object:  ![](https://developer.doc.autodesk.com/bPlouYTd/7/_images/Properties.png)  To call this endpoint you need to first call the [GET {urn}/metadata](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-GET) endpoint, which returns a list of model view (metadata) IDs for a design input model. Select a model view (metadata) ID to use when calling the Get Properties endpoint.  Note that you can only get properties from a design input file that was previously translated into an SVF file.
		 * @param {String} urn The Base64 (URL Safe) encoded design URN
		 * @param {String} guid Unique model view ID. Call [GET {urn}/metadata](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-GET) to get the ID
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.acceptEncoding If specified with `gzip` or `*`, content will be compressed and returned in a GZIP format.
		 * @param {Boolean} opts.xAdsForce Force retrieve the object tree even though it failed to be extracted (got 404 with error message) previously. (default is false) retrieve the object tree, and previously failures are not replaced.
		 * @param {String} opts.xAdsFormat fallback: fallback to SVF format; latest: returns SVF2 if available. Possible values: latest / fallback; Default to latest.
		 * @param {Boolean} opts.forceget To force get the large resource even if it exceeded the expected maximum length (20 MB). Possible values: true, false. The the implicit value is false.
		 * @param {Integer} opts.objectid Object id which you want to query properties for.
		 * data is of type: {module:model/Metadata}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getModelviewProperties = function (urn, guid, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = null;

			// verify the required parameter 'urn' is set
			if (urn == undefined || urn == null) {
				return Promise.reject("Missing the required parameter 'urn' when calling getModelviewProperties");
			}

			// verify the required parameter 'guid' is set
			if (guid == undefined || guid == null) {
				return Promise.reject("Missing the required parameter 'guid' when calling getModelviewProperties");
			}

			var pathParams = {
				'urn': urn,
				'guid': guid
			};
			var queryParams = {
				'forceget': opts.forceget || false,
				'objectid': opts.objectid || null
			};
			var headerParams = {
				'Accept-Encoding': opts.acceptEncoding,
				'x-ads-force': opts.xAdsForce || false,
				'x-ads-derivative-format': opts.xAdsFormat || 'latest'
			};
			var formParams = {};

			var contentTypes = ['application/json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = Metadata;

			return this.apiClient.callApi(
				this.regionPaths[this.region] + '/designdata/{urn}/metadata/{guid}/properties', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

	};

	/**
	 * Allowed values for the <code>region</code> property.
	 * @enum {String}
	 * @readonly
	 */
	exports.RegionEnum = {
		/**
		 * value: "US"
		 * @const
		 */
		"US": "US",
		/**
		 * value: "EMEA"
		 * @const
		 */
		"EMEA": "EMEA",
		/**
		 * value: "EU"
		 * @const
		 */
		"EU": "EMEA",

	};
	
	return exports;
}());