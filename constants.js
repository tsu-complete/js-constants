
(function ( factory ) {
    "use strict";

    var old;

    if ("function" === typeof define && define.amd) {
        define(factory);
    } else if ("undefined" !== typeof module) {
        module.exports = factory();
    } else {
        old = window.CONST;
        window.CONST = factory();

        /**
         * resets the old value at constants and returns this one
         * (only present if object is placed on global)
         *
         * @memberof CONST
         * @function noConflict
         * @static
         * @return {Object} CONST
         */
        window.CONST.noConflict = function ( ) {
            var tmp;
            tmp = window.CONST;
            window.CONST = old;
            return tmp;
        };
    }

})(function ( ) {
    "use strict";

    var CONST;

    /** @namespace CONST */
    CONST = { };

    /**
     * @namespace CONST.HTTP
     * @memberof CONST
     */
    CONST.HTTP = { };

    /**
     * @namespace CONST.HTTP.METHOD
     * @memberof CONST.HTTP
     */
    CONST.HTTP.METHOD = { };

    /**
     * [W3 HTTP/1.1 - 9.2] HTTP method type options <br/><br/>
     *
     * The OPTIONS method represents a request for information
     * about the communication options available on the
     * request/response chain identified by the Request-URI.
     * This method allows the client to determine the options
     * and/or requirements associated with a resource, or the
     * capabilities of a server, without implying a resource
     * action or initiating a resource retrieval.
     * <br/><br/>
     * Responses to this method are not cacheable.
     * <br/><br/>
     * If the OPTIONS request includes an entity-body (as indicated
     * by the presence of Content-Length or Transfer-Encoding),
     * then the media type MUST be indicated by a Content-Type
     * field. Although this specification does not define any use
     * for such a body, future extensions to HTTP might use the
     * OPTIONS body to make more detailed queries on the server.
     * A server that does not support such an extension MAY discard
     * the request body.
     * <br/></br>
     * If the Request-URI is an asterisk ("*"), the OPTIONS request
     * is intended to apply to the server in general rather than to
     * a specific resource. Since a server's communication options
     * typically depend on the resource, the "*" request is only
     * useful as a "ping" or "no-op" type of method; it does nothing
     * beyond allowing the client to test the capabilities of the
     * server. For example, this can be used to test a proxy for
     * HTTP/1.1 compliance (or lack thereof).
     * <br/><br/>
     * If the Request-URI is not an asterisk, the OPTIONS request
     * applies only to the options that are available when
     * communicating with that resource.
     * <br/><br/>
     * A 200 response SHOULD include any header fields that indicate
     * optional features implemented by the server and applicable to
     * that resource (e.g., Allow), possibly including extensions not
     * defined by this specification. The response body, if any,
     * SHOULD also include information about the communication options.
     * The format for such a body is not defined by this specification,
     * but might be defined by future extensions to HTTP. Content
     * negotiation MAY be used to select the appropriate response
     * format. If no response body is included, the response MUST
     * include a Content-Length field with a field-value of "0".
     * <br/><br/>
     * The Max-Forwards request-header field MAY be used to target a
     * specific proxy in the request chain. When a proxy receives an
     * OPTIONS request on an absoluteURI for which request forwarding
     * is permitted, the proxy MUST check for a Max-Forwards field. If
     * the Max-Forwards field-value is zero ("0"), the proxy MUST NOT
     * forward the message; instead, the proxy SHOULD respond with its
     * own communication options. If the Max-Forwards field-value is an
     * integer greater than zero, the proxy MUST decrement the
     * field-value when it forwards the request. If no Max-Forwards
     * field is present in the request, then the forwarded request MUST
     * NOT include a Max-Forwards field.
     *
     * @memberof CONST.HTTP.METHOD
     * @member OPTIONS
     * @static
     * @type {String}
     * @default OPTIONS
     * @since 1.0.0
     */
    CONST.HTTP.METHOD.OPTIONS = "OPTIONS";

    /**
     * [W3 HTTP/1.1 - 9.3] HTTP method type get <br/><br/>
     *
     * The GET method means retrieve whatever information
     * (in the form of an entity) is identified by the Request-URI.
     * If the Request-URI refers to a data-producing process, it is
     * the produced data which shall be returned as the entity in
     * the response and not the source text of the process, unless
     * that text happens to be the output of the process.
     * <br/><br/>
     * The semantics of the GET method change to a "conditional GET"
     * if the request message includes an If-Modified-Since,
     * If-Unmodified-Since, If-Match, If-None-Match, or If-Range
     * header field. A conditional GET method requests that the entity
     * be transferred only under the circumstances described by the
     * conditional header field(s). The conditional GET method is
     * intended to reduce unnecessary network usage by allowing cached
     * entities to be refreshed without requiring multiple requests or
     * transferring data already held by the client.
     * <br/><br/>
     * The semantics of the GET method change to a "partial GET" if the
     * request message includes a Range header field. A partial GET
     * requests that only part of the entity be transferred, as described
     * in section 14.35. The partial GET method is intended to reduce
     * unnecessary network usage by allowing partially-retrieved entities
     * to be completed without transferring data already held by the client.
     * <br/><br/>
     * The response to a GET request is cacheable if and only if it meets
     * the requirements for HTTP caching described in section 13.
     * <br/><br/>
     * See section 15.1.3 for security considerations when used for forms.
     *
     * @memberof CONST.HTTP.METHOD
     * @member GET
     * @static
     * @type {String}
     * @default GET
     * @since 1.0.0
     */
    CONST.HTTP.METHOD.GET = "GET";

    /**
     * [W3 HTTP/1.1 - 9.4] HTTP method type head <br/><br/>
     *
     * The HEAD method is identical to GET except that the server
     * MUST NOT return a message-body in the response. The
     * metainformation contained in the HTTP headers in response
     * to a HEAD request SHOULD be identical to the information
     * sent in response to a GET request. This method can be used
     * for obtaining metainformation about the entity implied by
     * the request without transferring the entity-body itself.
     * This method is often used for testing hypertext links for
     * validity, accessibility, and recent modification.
     * <br/><br/>
     * The response to a HEAD request MAY be cacheable in the sense
     * that the information contained in the response MAY be used to
     * update a previously cached entity from that resource. If the
     * new field values indicate that the cached entity differs from
     * the current entity (as would be indicated by a change in
     * Content-Length, Content-MD5, ETag or Last-Modified), then the
     * cache MUST treat the cache entry as stale.
     *
     * @memberof CONST.HTTP.METHOD
     * @member HEAD
     * @static
     * @type {String}
     * @default HEAD
     * @since 1.0.0
     */
    CONST.HTTP.METHOD.HEAD = "HEAD";

    /**
     * [W3 HTTP/1.1 - 9.5] HTTP method type post <br/><br/>
     *
     * The POST method is used to request that the origin server
     * accept the entity enclosed in the request as a new subordinate
     * of the resource identified by the Request-URI in the Request-Line.
     * POST is designed to allow a uniform method to cover the following
     * functions: <ul>
     *  <li> Annotation of existing resources;
     *  <li> Posting a message to a bulletin board, newsgroup, mailing list,
     *       or similar group of articles;
     *  <li> Providing a block of data, such as the result of submitting a
     *       form, to a data-handling process;
     *  <li> Extending a database through an append operation.
     * </ul>
     * The actual function performed by the POST method is determined by
     * the server and is usually dependent on the Request-URI. The posted
     * entity is subordinate to that URI in the same way that a file is
     * subordinate to a directory containing it, a news article is
     * subordinate to a newsgroup to which it is posted, or a record is
     * subordinate to a database.
     * <br/><br/>
     * The action performed by the POST method might not result in a
     * resource that can be identified by a URI. In this case, either
     * 200 (OK) or 204 (No Content) is the appropriate response status,
     * depending on whether or not the response includes an entity that
     * describes the result.
     * <br/><br/>
     * If a resource has been created on the origin server, the response
     * SHOULD be 201 (Created) and contain an entity which describes the
     * status of the request and refers to the new resource, and a Location
     * header (see section 14.30).
     * <br/><br/>
     * Responses to this method are not cacheable, unless the response
     * includes appropriate Cache-Control or Expires header fields.
     * However, the 303 (See Other) response can be used to direct the user
     * agent to retrieve a cacheable resource.
     * <br/><br/>
     * POST requests MUST obey the message transmission requirements set
     * out in section 8.2.
     * <br/><br/>
     * See section 15.1.3 for security considerations.
     *
     * @memberof CONST.HTTP.METHOD
     * @member POST
     * @static
     * @type {String}
     * @default POST
     * @since 1.0.0
     */
    CONST.HTTP.METHOD.POST = "POST";

    /**
     * [W3 HTTP/1.1 - 9.6] HTTP method type put <br/><br/>
     *
     * The PUT method requests that the enclosed entity be stored under
     * the supplied Request-URI. If the Request-URI refers to an already
     * existing resource, the enclosed entity SHOULD be considered as a
     * modified version of the one residing on the origin server. If the
     * Request-URI does not point to an existing resource, and that URI
     * is capable of being defined as a new resource by the requesting
     * user agent, the origin server can create the resource with that
     * URI. If a new resource is created, the origin server MUST inform
     * the user agent via the 201 (Created) response. If an existing
     * resource is modified, either the 200 (OK) or 204 (No Content)
     * response codes SHOULD be sent to indicate successful completion
     * of the request. If the resource could not be created or modified
     * with the Request-URI, an appropriate error response SHOULD be given
     * that reflects the nature of the problem. The recipient of the
     * entity MUST NOT ignore any Content-* (e.g. Content-Range) headers
     * that it does not understand or implement and MUST return a 501
     * (Not Implemented) response in such cases.
     * <br/><br/>
     * If the request passes through a cache and the Request-URI identifies
     * one or more currently cached entities, those entries SHOULD be
     * treated as stale. Responses to this method are not cacheable.
     * <br/><br/>
     * The fundamental difference between the POST and PUT requests is
     * reflected in the different meaning of the Request-URI. The URI in
     * a POST request identifies the resource that will handle the enclosed
     * entity. That resource might be a data-accepting process, a gateway
     * to some other protocol, or a separate entity that accepts
     * annotations. In contrast, the URI in a PUT request identifies the
     * entity enclosed with the request -- the user agent knows what URI
     * is intended and the server MUST NOT attempt to apply the request
     * to some other resource. If the server desires that the request be
     * applied to a different URI, it MUST send a 301 (Moved Permanently)
     * response; the user agent MAY then make its own decision regarding
     * whether or not to redirect the request.
     * <br/><br/>
     * A single resource MAY be identified by many different URIs. For
     * example, an article might have a URI for identifying "the current
     * version" which is separate from the URI identifying each particular
     * version. In this case, a PUT request on a general URI might result
     * in several other URIs being defined by the origin server.
     * <br/><br/>
     * HTTP/1.1 does not define how a PUT method affects the state of an
     * origin server.
     * <br/><br/>
     * PUT requests MUST obey the message transmission requirements set
     * out in section 8.2.
     * <br/><br/>
     * Unless otherwise specified for a particular entity-header,
     * the entity-headers in the PUT request SHOULD be applied to the
     * resource created or modified by the PUT.
     *
     * @memberof CONST.HTTP.METHOD
     * @member PUT
     * @static
     * @type {String}
     * @default PUT
     * @since 1.0.0
     */
    CONST.HTTP.METHOD.PUT = "PUT";

    /**
     * [W3 HTTP/1.1 - 9.7] HTTP method type delete <br/><br/>
     *
     * The DELETE method requests that the origin server delete the
     * resource identified by the Request-URI. This method MAY be
     * overridden by human intervention (or other means) on the origin
     * server. The client cannot be guaranteed that the operation has
     * been carried out, even if the status code returned from the
     * origin server indicates that the action has been completed
     * successfully. However, the server SHOULD NOT indicate success
     * unless, at the time the response is given, it intends to delete
     * the resource or move it to an inaccessible location.
     * <br/><br/>
     * A successful response SHOULD be 200 (OK) if the response includes
     * an entity describing the status, 202 (Accepted) if the action has
     * not yet been enacted, or 204 (No Content) if the action has been
     * enacted but the response does not include an entity.
     * <br/><br/>
     * If the request passes through a cache and the Request-URI identifies
     * one or more currently cached entities, those entries SHOULD be
     * treated as stale. Responses to this method are not cacheable.
     *
     * @memberof CONST.HTTP.METHOD
     * @member DELETE
     * @static
     * @type {String}
     * @default DELETE
     * @since 1.0.0
     */
    CONST.HTTP.METHOD.DELETE = "DELETE";

    /**
     * [W3 HTTP/1.1 - 9.8] HTTP method type trace <br/><br/>
     *
     * The TRACE method is used to invoke a remote, application-layer
     * loop-back of the request message. The final recipient of the request
     * SHOULD reflect the message received back to the client as the
     * entity-body of a 200 (OK) response. The final recipient is either
     * the origin server or the first proxy or gateway to receive a
     * Max-Forwards value of zero (0) in the request (see section 14.31).
     * A TRACE request MUST NOT include an entity.
     * <br/><br/>
     * TRACE allows the client to see what is being received at the other
     * end of the request chain and use that data for testing or diagnostic
     * information. The value of the Via header field (section 14.45) is of
     * particular interest, since it acts as a trace of the request chain.
     * Use of the Max-Forwards header field allows the client to limit the
     * length of the request chain, which is useful for testing a chain of
     * proxies forwarding messages in an infinite loop.
     * <br/><br/>
     * If the request is valid, the response SHOULD contain the entire
     * request message in the entity-body, with a Content-Type of
     * "message/http". Responses to this method MUST NOT be cached.
     *
     * @memberof CONST.HTTP.METHOD
     * @member TRACE
     * @static
     * @type {String}
     * @default TRACE
     * @since 1.0.0
     */
    CONST.HTTP.METHOD.TRACE = "TRACE";

    /**
     * HTTP method type all <br/></br>
     *
     * Specification for matching any/all methods
     *
     * @memberof CONST.HTTP.METHOD
     * @member ALL
     * @static
     * @type {String}
     * @default ALL
     * @since 1.0.0
     */
    CONST.HTTP.METHOD.ALL = "ALL";

    /**
     * @namespace CONST.HTTP.STATUS
     * @memberof CONST.HTTP
     */
    CONST.HTTP.STATUS = { };

    /**
     * [W3 HTTP/1.1 - 10.1.1] HTTP status continue <br/><br/>
     *
     * The client SHOULD continue with its request. This interim response
     * is used to inform the client that the initial part of the request
     * has been received and has not yet been rejected by the server. The
     * client SHOULD continue by sending the remainder of the request or,
     * if the request has already been completed, ignore this response.
     * The server MUST send a final response after the request has been
     * completed. See section 8.2.3 for detailed discussion of the use and
     * handling of this status code.
     *
     * @memberof CONST.HTTP.STATUS
     * @member CONTINUE
     * @see {@link CONST.HTTP.STATUS.CODE_100}
     * @static
     * @type {Number}
     * @default 100
     * @since 1.0.0
     */
    CONST.HTTP.STATUS.CONTINUE = 100;

    /**
     * [W3 HTTP/1.1 - 10.1.1] HTTP status 100
     *
     * @memberof CONST.HTTP.STATUS
     * @member CODE_100
     * @see {@link CONST.HTTP.STATUS.CONTINUE}
     * @static
     * @type {String}
     * @default CONTINUE
     * @since 1.0.0
     */
    CONST.HTTP.STATUS.CODE_100 = "CONTINUE";

    /**
     * [W3 HTTP/1.1 - 10.1.2] HTTP status switching protocols <br/><br/>
     *
     * The server understands and is willing to comply with the client's
     * request, via the Upgrade message header field (section 14.42), for
     * a change in the application protocol being used on this connection.
     * The server will switch protocols to those defined by the response's
     * Upgrade header field immediately after the empty line which
     * terminates the 101 response.
     * <br/><br/>
     * The protocol SHOULD be switched only when it is advantageous to do
     * so. For example, switching to a newer version of HTTP is
     * advantageous over older versions, and switching to a real-time,
     * synchronous protocol might be advantageous when delivering
     * resources that use such features.
     *
     * @memberof CONST.HTTP.STATUS
     * @member SWITCHING_PROTOCOLS
     * @see {@link CONST.HTTP.STATUS.CODE_101}
     * @static
     * @type {Number}
     * @default 101
     * @since 1.0.0
     */
    CONST.HTTP.STATUS.SWITCHING_PROTOCOLS = 101;

    /**
     * [W3 HTTP/1.1 - 10.1.2] HTTP status 101
     *
     * @memberof CONST.HTTP.STATUS
     * @member CODE_101
     * @see {@link CONST.HTTP.STATUS.SWITCHING_PROTOCOLS}
     * @static
     * @type {String}
     * @default SWITCHING_PROTOCOLS
     * @since 1.0.0
     */
    CONST.HTTP.STATUS.CODE_101 = "SWITCHING_PROTOCOLS";

    /**
     * [W3 HTTP/1.1 - 10.2.1] HTTP status ok <br/><br/>
     *
     * The request has succeeded. The information returned with the response
     * is dependent on the method used in the request, for example: <ul>
     *  <li>GET an entity corresponding to the requested resource is sent
     *      in the response;
     *  <li>HEAD the entity-header fields corresponding to the requested
     *      resource are sent in the response without any message-body;
     *  <li>POST an entity describing or containing the result of the
     *      action;
     *  <li>TRACE an entity containing the request message as received
     *      by the end server.
     * </ul>
     *
     * @memberof CONST.HTTP.STATUS
     * @member OK
     * @see {@link CONST.HTTP.STATUS.CODE_200}
     * @static
     * @type {Number}
     * @default 200
     * @since 1.0.0
     */
    CONST.HTTP.STATUS.OK = 200;

    /**
     * [W3 HTTP/1.1 - 10.2.1] HTTP status 200
     *
     * @memberof CONST.HTTP.STATUS
     * @member CODE_200
     * @see {@link CONST.HTTP.STATUS.OK}
     * @static
     * @type {String}
     * @default OK
     * @since 1.0.0
     */
    CONST.HTTP.STATUS.CODE_200 = "OK";

    /**
     * @namespace CONST.HTTP.MEDIA
     * @memberof CONST.HTTP
     */
    CONST.HTTP.MEDIA = { };

    /**
     * @namespace CONST.HTTP.MEDIA.APPLICATION
     * @memberof CONST.HTTP.MEDIA
     */
    CONST.HTTP.MEDIA.APPLICATION = { };

    /**
     * @namespace CONST.HTTP.MEDIA.APPLICATION.XML
     * @memberof CONST.HTTP.MEDIA.APPLICATION
     */

    /**
     * [IANA] atom+xml
     *
     * @memberof CONST.HTTP.MEDIA.APPLICATION.XML
     * @member ATOM
     * @static
     * @type {String}
     * @default application/atom+xml
     * @since 1.0.0
     */
    CONST.HTTP.MEDIA.APPLICATION.XML.ATOM = "application/atom+xml";

    /**
     * @namespace CONST.HTTP.MEDIA.AUDIO
     * @memberof CONST.HTTP.MEDIA
     */
    CONST.HTTP.MEDIA.AUDIO = { };

    /**
     * @namespace CONST.HTTP.MEDIA.IMAGE
     * @memberof CONST.HTTP.MEDIA
     */
    CONST.HTTP.MEDIA.IMAGE = { };

    /**
     * @namespace CONST.HTTP.MEDIA.MESSAGE
     * @memberof CONST.HTTP.MEDIA
     */
    CONST.HTTP.MEDIA.MESSAGE = { };

    /**
     * @namespace CONST.HTTP.MEDIA.MODEL
     * @memberof CONST.HTTP.MEDIA
     */
    CONST.HTTP.MEDIA.MODEL = { };

    /**
     * @namespace CONST.HTTP.MEDIA.MULTIPART
     * @memberof CONST.HTTP.MEDIA
     */
    CONST.HTTP.MEDIA.MULTIPART = { };

    /**
     * @namespace CONST.HTTP.MEDIA.TEXT
     * @memberof CONST.HTTP.MEDIA
     */
    CONST.HTTP.MEDIA.TEXT = { };

    /**
     * @namespace CONST.HTTP.MEDIA.VIDEO
     * @memberof CONST.HTTP.MEDIA
     */
    CONST.HTTP.MEDIA.VIDEO = { };

    /**
     * @namespace CONST.XHR
     * @memberof CONST
     */
    CONST.XHR = { };

    /**
     * @namespace CONST.XHR.STATE
     * @memberof CONST.XHR
     */
    CONST.XHR.STATE = { };

    /**
     * [W3 XMLHttpRequest - 4.5] XHR state unsent <br/><br/>
     *
     * The object has been constructed.
     *
     * @memberof CONST.XHR.STATE
     * @member UNSENT
     * @see {@link CONST.XHR.STATE.CODE_0}
     * @static
     * @type {Number}
     * @default 0
     * @since 1.0.0
     */
    CONST.XHR.STATE.UNSENT = 0;

    /**
     * [W3 XMLHttpRequest - 4.5] XHR state 0
     *
     * @memberof CONST.XHR.STATE
     * @member CODE_0
     * @see {@link CONST.XHR.STATE.UNSENT}
     * @static
     * @type {String}
     * @default UNSENT
     * @since 1.0.0
     */
    CONST.XHR.STATE.CODE_0 = "UNSENT";

    /**
     * [W3 XMLHttpRequest - 4.5] XHR state opened <br/><br/>
     *
     * The open() method has been successfully invoked. During this
     * state request headers can be set using setRequestHeader() and
     * the request can be made using the send() method.
     *
     * @memberof CONST.XHR.STATE
     * @member OPENED
     * @see {@link CONST.XHR.STATE.CODE_1}
     * @static
     * @type {Number}
     * @default 1
     * @since 1.0.0
     */
    CONST.XHR.STATE.OPENED = 1;

    /**
     * [W3 XMLHttpRequest - 4.5] XHR state 1
     *
     * @memberof CONST.XHR.STATE
     * @member CODE_1
     * @see {@link CONST.XHR.STATE.OPENED}
     * @static
     * @type {String}
     * @default OPENED
     * @since 1.0.0
     */
    CONST.XHR.STATE.CODE_1 = "OPENED";

    /**
     * [W3 XMLHttpRequest - 4.5] XHR state headers received <br/><br/>
     *
     * All redirects (if any) have been followed and all HTTP headers of
     * the final response have been received. Several response members
     * of the object are now available.
     *
     * @memberof CONST.XHR.STATE
     * @member HEADERS_RECEIVED
     * @see {@link CONST.XHR.STATE.CODE_2}
     * @static
     * @type {Number}
     * @default 2
     * @since 1.0.0
     */
    CONST.XHR.STATE.HEADERS_RECEIVED = 2;

    /**
     * [W3 XMLHttpRequest - 4.5] XHR state 2
     *
     * @memberof CONST.XHR.STATE
     * @member CODE_2
     * @see {@link CONST.XHR.STATE.HEADERS_RECEIVED}
     * @static
     * @type {String}
     * @default HEADERS_RECEIVED
     * @since 1.0.0
     */
    CONST.XHR.STATE.CODE_2 = "HEADERS_RECEIVED";

    /**
     * [W3 XMLHttpRequest - 4.5] XHR state loading <br/><br/>
     *
     * The response entity body is being received.
     *
     * @memberof CONST.XHR.STATE
     * @member LOADING
     * @see {@link CONST.XHR.STATE.CODE_3}
     * @static
     * @type {Number}
     * @default 3
     * @since 1.0.0
     */
    CONST.XHR.STATE.LOADING = 3;

    /**
     * [W3 XMLHttpRequest - 4.5] XHR state 3
     *
     * @memberof CONST.XHR.STATE
     * @member CODE_3
     * @see {@link CONST.XHR.STATE.LOADING}
     * @static
     * @type {String}
     * @default LOADING
     * @since 1.0.0
     */
    CONST.XHR.STATE.CODE_3 = "LOADING";

    /**
     * [W3 XMLHttpRequest - 4.5] XHR state done <br/><br/>
     *
     * The data transfer has been completed or something went wrong
     * during the transfer (e.g. infinite redirects).
     *
     * @memberof CONST.XHR.STATE
     * @member DONE
     * @see {@link CONST.XHR.STATE.CODE_4}
     * @static
     * @type {Number}
     * @default 4
     * @since 1.0.0
     */
    CONST.XHR.STATE.DONE = 4;

    /**
     * [W3 XMLHttpRequest - 4.5] XHR state 4
     *
     * @memberof CONST.XHR.STATE
     * @member CODE_4
     * @see {@link CONST.XHR.STATE.DONE}
     * @static
     * @type {String}
     * @default DONE
     * @since 1.0.0
     */
    CONST.XHR.STATE.CODE_4 = "DONE";

    return CONST;

});

