#!/usr/bin/env node
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@xmldom/xmldom/lib/conventions.js
var require_conventions = __commonJS({
  "node_modules/@xmldom/xmldom/lib/conventions.js"(exports) {
    "use strict";
    function find(list, predicate, ac) {
      if (ac === void 0) {
        ac = Array.prototype;
      }
      if (list && typeof ac.find === "function") {
        return ac.find.call(list, predicate);
      }
      for (var i = 0; i < list.length; i++) {
        if (hasOwn(list, i)) {
          var item = list[i];
          if (predicate.call(void 0, item, i, list)) {
            return item;
          }
        }
      }
    }
    function freeze(object, oc) {
      if (oc === void 0) {
        oc = Object;
      }
      if (oc && typeof oc.getOwnPropertyDescriptors === "function") {
        object = oc.create(null, oc.getOwnPropertyDescriptors(object));
      }
      return oc && typeof oc.freeze === "function" ? oc.freeze(object) : object;
    }
    function hasOwn(object, key) {
      return Object.prototype.hasOwnProperty.call(object, key);
    }
    function assign(target, source) {
      if (target === null || typeof target !== "object") {
        throw new TypeError("target is not an object");
      }
      for (var key in source) {
        if (hasOwn(source, key)) {
          target[key] = source[key];
        }
      }
      return target;
    }
    var HTML_BOOLEAN_ATTRIBUTES = freeze({
      allowfullscreen: true,
      async: true,
      autofocus: true,
      autoplay: true,
      checked: true,
      controls: true,
      default: true,
      defer: true,
      disabled: true,
      formnovalidate: true,
      hidden: true,
      ismap: true,
      itemscope: true,
      loop: true,
      multiple: true,
      muted: true,
      nomodule: true,
      novalidate: true,
      open: true,
      playsinline: true,
      readonly: true,
      required: true,
      reversed: true,
      selected: true
    });
    function isHTMLBooleanAttribute(name) {
      return hasOwn(HTML_BOOLEAN_ATTRIBUTES, name.toLowerCase());
    }
    var HTML_VOID_ELEMENTS = freeze({
      area: true,
      base: true,
      br: true,
      col: true,
      embed: true,
      hr: true,
      img: true,
      input: true,
      link: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true
    });
    function isHTMLVoidElement(tagName) {
      return hasOwn(HTML_VOID_ELEMENTS, tagName.toLowerCase());
    }
    var HTML_RAW_TEXT_ELEMENTS = freeze({
      script: false,
      style: false,
      textarea: true,
      title: true
    });
    function isHTMLRawTextElement(tagName) {
      var key = tagName.toLowerCase();
      return hasOwn(HTML_RAW_TEXT_ELEMENTS, key) && !HTML_RAW_TEXT_ELEMENTS[key];
    }
    function isHTMLEscapableRawTextElement(tagName) {
      var key = tagName.toLowerCase();
      return hasOwn(HTML_RAW_TEXT_ELEMENTS, key) && HTML_RAW_TEXT_ELEMENTS[key];
    }
    function isHTMLMimeType(mimeType) {
      return mimeType === MIME_TYPE.HTML;
    }
    function hasDefaultHTMLNamespace(mimeType) {
      return isHTMLMimeType(mimeType) || mimeType === MIME_TYPE.XML_XHTML_APPLICATION;
    }
    var MIME_TYPE = freeze({
      /**
       * `text/html`, the only mime type that triggers treating an XML document as HTML.
       *
       * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
       * @see https://en.wikipedia.org/wiki/HTML Wikipedia
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
       * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring
       *      WHATWG HTML Spec
       */
      HTML: "text/html",
      /**
       * `application/xml`, the standard mime type for XML documents.
       *
       * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType
       *      registration
       * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
       * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
       */
      XML_APPLICATION: "application/xml",
      /**
       * `text/xml`, an alias for `application/xml`.
       *
       * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
       * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
       * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
       */
      XML_TEXT: "text/xml",
      /**
       * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
       * but is parsed as an XML document.
       *
       * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType
       *      registration
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
       * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
       */
      XML_XHTML_APPLICATION: "application/xhtml+xml",
      /**
       * `image/svg+xml`,
       *
       * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
       * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
       * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
       */
      XML_SVG_IMAGE: "image/svg+xml"
    });
    var _MIME_TYPES = Object.keys(MIME_TYPE).map(function(key) {
      return MIME_TYPE[key];
    });
    function isValidMimeType(mimeType) {
      return _MIME_TYPES.indexOf(mimeType) > -1;
    }
    var NAMESPACE = freeze({
      /**
       * The XHTML namespace.
       *
       * @see http://www.w3.org/1999/xhtml
       */
      HTML: "http://www.w3.org/1999/xhtml",
      /**
       * The SVG namespace.
       *
       * @see http://www.w3.org/2000/svg
       */
      SVG: "http://www.w3.org/2000/svg",
      /**
       * The `xml:` namespace.
       *
       * @see http://www.w3.org/XML/1998/namespace
       */
      XML: "http://www.w3.org/XML/1998/namespace",
      /**
       * The `xmlns:` namespace.
       *
       * @see https://www.w3.org/2000/xmlns/
       */
      XMLNS: "http://www.w3.org/2000/xmlns/"
    });
    exports.assign = assign;
    exports.find = find;
    exports.freeze = freeze;
    exports.HTML_BOOLEAN_ATTRIBUTES = HTML_BOOLEAN_ATTRIBUTES;
    exports.HTML_RAW_TEXT_ELEMENTS = HTML_RAW_TEXT_ELEMENTS;
    exports.HTML_VOID_ELEMENTS = HTML_VOID_ELEMENTS;
    exports.hasDefaultHTMLNamespace = hasDefaultHTMLNamespace;
    exports.hasOwn = hasOwn;
    exports.isHTMLBooleanAttribute = isHTMLBooleanAttribute;
    exports.isHTMLRawTextElement = isHTMLRawTextElement;
    exports.isHTMLEscapableRawTextElement = isHTMLEscapableRawTextElement;
    exports.isHTMLMimeType = isHTMLMimeType;
    exports.isHTMLVoidElement = isHTMLVoidElement;
    exports.isValidMimeType = isValidMimeType;
    exports.MIME_TYPE = MIME_TYPE;
    exports.NAMESPACE = NAMESPACE;
  }
});

// node_modules/@xmldom/xmldom/lib/errors.js
var require_errors = __commonJS({
  "node_modules/@xmldom/xmldom/lib/errors.js"(exports) {
    "use strict";
    var conventions = require_conventions();
    function extendError(constructor, writableName) {
      constructor.prototype = Object.create(Error.prototype, {
        constructor: { value: constructor },
        name: { value: constructor.name, enumerable: true, writable: writableName }
      });
    }
    var DOMExceptionName = conventions.freeze({
      /**
       * the default value as defined by the spec
       */
      Error: "Error",
      /**
       * @deprecated
       * Use RangeError instead.
       */
      IndexSizeError: "IndexSizeError",
      /**
       * @deprecated
       * Just to match the related static code, not part of the spec.
       */
      DomstringSizeError: "DomstringSizeError",
      HierarchyRequestError: "HierarchyRequestError",
      WrongDocumentError: "WrongDocumentError",
      InvalidCharacterError: "InvalidCharacterError",
      /**
       * @deprecated
       * Just to match the related static code, not part of the spec.
       */
      NoDataAllowedError: "NoDataAllowedError",
      NoModificationAllowedError: "NoModificationAllowedError",
      NotFoundError: "NotFoundError",
      NotSupportedError: "NotSupportedError",
      InUseAttributeError: "InUseAttributeError",
      InvalidStateError: "InvalidStateError",
      SyntaxError: "SyntaxError",
      InvalidModificationError: "InvalidModificationError",
      NamespaceError: "NamespaceError",
      /**
       * @deprecated
       * Use TypeError for invalid arguments,
       * "NotSupportedError" DOMException for unsupported operations,
       * and "NotAllowedError" DOMException for denied requests instead.
       */
      InvalidAccessError: "InvalidAccessError",
      /**
       * @deprecated
       * Just to match the related static code, not part of the spec.
       */
      ValidationError: "ValidationError",
      /**
       * @deprecated
       * Use TypeError instead.
       */
      TypeMismatchError: "TypeMismatchError",
      SecurityError: "SecurityError",
      NetworkError: "NetworkError",
      AbortError: "AbortError",
      /**
       * @deprecated
       * Just to match the related static code, not part of the spec.
       */
      URLMismatchError: "URLMismatchError",
      QuotaExceededError: "QuotaExceededError",
      TimeoutError: "TimeoutError",
      InvalidNodeTypeError: "InvalidNodeTypeError",
      DataCloneError: "DataCloneError",
      EncodingError: "EncodingError",
      NotReadableError: "NotReadableError",
      UnknownError: "UnknownError",
      ConstraintError: "ConstraintError",
      DataError: "DataError",
      TransactionInactiveError: "TransactionInactiveError",
      ReadOnlyError: "ReadOnlyError",
      VersionError: "VersionError",
      OperationError: "OperationError",
      NotAllowedError: "NotAllowedError",
      OptOutError: "OptOutError"
    });
    var DOMExceptionNames = Object.keys(DOMExceptionName);
    function isValidDomExceptionCode(value) {
      return typeof value === "number" && value >= 1 && value <= 25;
    }
    function endsWithError(value) {
      return typeof value === "string" && value.substring(value.length - DOMExceptionName.Error.length) === DOMExceptionName.Error;
    }
    function DOMException(messageOrCode, nameOrMessage) {
      if (isValidDomExceptionCode(messageOrCode)) {
        this.name = DOMExceptionNames[messageOrCode];
        this.message = nameOrMessage || "";
      } else {
        this.message = messageOrCode;
        this.name = endsWithError(nameOrMessage) ? nameOrMessage : DOMExceptionName.Error;
      }
      if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
    }
    extendError(DOMException, true);
    Object.defineProperties(DOMException.prototype, {
      code: {
        enumerable: true,
        get: function() {
          var code = DOMExceptionNames.indexOf(this.name);
          if (isValidDomExceptionCode(code)) return code;
          return 0;
        }
      }
    });
    var ExceptionCode = {
      INDEX_SIZE_ERR: 1,
      DOMSTRING_SIZE_ERR: 2,
      HIERARCHY_REQUEST_ERR: 3,
      WRONG_DOCUMENT_ERR: 4,
      INVALID_CHARACTER_ERR: 5,
      NO_DATA_ALLOWED_ERR: 6,
      NO_MODIFICATION_ALLOWED_ERR: 7,
      NOT_FOUND_ERR: 8,
      NOT_SUPPORTED_ERR: 9,
      INUSE_ATTRIBUTE_ERR: 10,
      INVALID_STATE_ERR: 11,
      SYNTAX_ERR: 12,
      INVALID_MODIFICATION_ERR: 13,
      NAMESPACE_ERR: 14,
      INVALID_ACCESS_ERR: 15,
      VALIDATION_ERR: 16,
      TYPE_MISMATCH_ERR: 17,
      SECURITY_ERR: 18,
      NETWORK_ERR: 19,
      ABORT_ERR: 20,
      URL_MISMATCH_ERR: 21,
      QUOTA_EXCEEDED_ERR: 22,
      TIMEOUT_ERR: 23,
      INVALID_NODE_TYPE_ERR: 24,
      DATA_CLONE_ERR: 25
    };
    var entries = Object.entries(ExceptionCode);
    for (i = 0; i < entries.length; i++) {
      key = entries[i][0];
      DOMException[key] = entries[i][1];
    }
    var key;
    var i;
    function ParseError(message, locator) {
      this.message = message;
      this.locator = locator;
      if (Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
    }
    extendError(ParseError);
    exports.DOMException = DOMException;
    exports.DOMExceptionName = DOMExceptionName;
    exports.ExceptionCode = ExceptionCode;
    exports.ParseError = ParseError;
  }
});

// node_modules/@xmldom/xmldom/lib/grammar.js
var require_grammar = __commonJS({
  "node_modules/@xmldom/xmldom/lib/grammar.js"(exports) {
    "use strict";
    function detectUnicodeSupport(RegExpImpl) {
      try {
        if (typeof RegExpImpl !== "function") {
          RegExpImpl = RegExp;
        }
        var match = new RegExpImpl("\u{1D306}", "u").exec("\u{1D306}");
        return !!match && match[0].length === 2;
      } catch (error) {
      }
      return false;
    }
    var UNICODE_SUPPORT = detectUnicodeSupport();
    function chars(regexp) {
      if (regexp.source[0] !== "[") {
        throw new Error(regexp + " can not be used with chars");
      }
      return regexp.source.slice(1, regexp.source.lastIndexOf("]"));
    }
    function chars_without(regexp, search) {
      if (regexp.source[0] !== "[") {
        throw new Error("/" + regexp.source + "/ can not be used with chars_without");
      }
      if (!search || typeof search !== "string") {
        throw new Error(JSON.stringify(search) + " is not a valid search");
      }
      if (regexp.source.indexOf(search) === -1) {
        throw new Error('"' + search + '" is not is /' + regexp.source + "/");
      }
      if (search === "-" && regexp.source.indexOf(search) !== 1) {
        throw new Error('"' + search + '" is not at the first postion of /' + regexp.source + "/");
      }
      return new RegExp(regexp.source.replace(search, ""), UNICODE_SUPPORT ? "u" : "");
    }
    function reg(args) {
      var self = this;
      return new RegExp(
        Array.prototype.slice.call(arguments).map(function(part) {
          var isStr = typeof part === "string";
          if (isStr && self === void 0 && part === "|") {
            throw new Error("use regg instead of reg to wrap expressions with `|`!");
          }
          return isStr ? part : part.source;
        }).join(""),
        UNICODE_SUPPORT ? "mu" : "m"
      );
    }
    function regg(args) {
      if (arguments.length === 0) {
        throw new Error("no parameters provided");
      }
      return reg.apply(regg, ["(?:"].concat(Array.prototype.slice.call(arguments), [")"]));
    }
    var UNICODE_REPLACEMENT_CHARACTER = "\uFFFD";
    var Char = /[-\x09\x0A\x0D\x20-\x2C\x2E-\uD7FF\uE000-\uFFFD]/;
    if (UNICODE_SUPPORT) {
      Char = reg("[", chars(Char), "\\u{10000}-\\u{10FFFF}", "]");
    }
    var InvalidChar = new RegExp("[^" + chars(Char) + "]", UNICODE_SUPPORT ? "u" : "");
    var _SChar = /[\x20\x09\x0D\x0A]/;
    var SChar_s = chars(_SChar);
    var S = reg(_SChar, "+");
    var S_OPT = reg(_SChar, "*");
    var NameStartChar = /[:_a-zA-Z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    if (UNICODE_SUPPORT) {
      NameStartChar = reg("[", chars(NameStartChar), "\\u{10000}-\\u{10FFFF}", "]");
    }
    var NameStartChar_s = chars(NameStartChar);
    var NameChar = reg("[", NameStartChar_s, chars(/[-.0-9\xB7]/), chars(/[\u0300-\u036F\u203F-\u2040]/), "]");
    var Name = reg(NameStartChar, NameChar, "*");
    var Nmtoken = reg(NameChar, "+");
    var EntityRef = reg("&", Name, ";");
    var CharRef = regg(/&#[0-9]+;|&#x[0-9a-fA-F]+;/);
    var Reference = regg(EntityRef, "|", CharRef);
    var PEReference = reg("%", Name, ";");
    var EntityValue = regg(
      reg('"', regg(/[^%&"]/, "|", PEReference, "|", Reference), "*", '"'),
      "|",
      reg("'", regg(/[^%&']/, "|", PEReference, "|", Reference), "*", "'")
    );
    var AttValue = regg('"', regg(/[^<&"]/, "|", Reference), "*", '"', "|", "'", regg(/[^<&']/, "|", Reference), "*", "'");
    var NCNameStartChar = chars_without(NameStartChar, ":");
    var NCNameChar = chars_without(NameChar, ":");
    var NCName = reg(NCNameStartChar, NCNameChar, "*");
    var QName = reg(NCName, regg(":", NCName), "?");
    var QName_exact = reg("^", QName, "$");
    var QName_group = reg("(", QName, ")");
    var SystemLiteral = regg(/"[^"]*"|'[^']*'/);
    var PI = reg(/^<\?/, "(", Name, ")", regg(S, "(", Char, "*?)"), "?", /\?>/);
    var PubidChar = /[\x20\x0D\x0Aa-zA-Z0-9-'()+,./:=?;!*#@$_%]/;
    var PubidLiteral = regg('"', PubidChar, '*"', "|", "'", chars_without(PubidChar, "'"), "*'");
    var COMMENT_START = "<!--";
    var COMMENT_END = "-->";
    var Comment = reg(COMMENT_START, regg(chars_without(Char, "-"), "|", reg("-", chars_without(Char, "-"))), "*", COMMENT_END);
    var PCDATA = "#PCDATA";
    var Mixed = regg(
      reg(/\(/, S_OPT, PCDATA, regg(S_OPT, /\|/, S_OPT, QName), "*", S_OPT, /\)\*/),
      "|",
      reg(/\(/, S_OPT, PCDATA, S_OPT, /\)/)
    );
    var _children_quantity = /[?*+]?/;
    var children = reg(
      /\([^>]+\)/,
      _children_quantity
      /*regg(choice, '|', seq), _children_quantity*/
    );
    var contentspec = regg("EMPTY", "|", "ANY", "|", Mixed, "|", children);
    var ELEMENTDECL_START = "<!ELEMENT";
    var elementdecl = reg(ELEMENTDECL_START, S, regg(QName, "|", PEReference), S, regg(contentspec, "|", PEReference), S_OPT, ">");
    var NotationType = reg("NOTATION", S, /\(/, S_OPT, Name, regg(S_OPT, /\|/, S_OPT, Name), "*", S_OPT, /\)/);
    var Enumeration = reg(/\(/, S_OPT, Nmtoken, regg(S_OPT, /\|/, S_OPT, Nmtoken), "*", S_OPT, /\)/);
    var EnumeratedType = regg(NotationType, "|", Enumeration);
    var AttType = regg(/CDATA|ID|IDREF|IDREFS|ENTITY|ENTITIES|NMTOKEN|NMTOKENS/, "|", EnumeratedType);
    var DefaultDecl = regg(/#REQUIRED|#IMPLIED/, "|", regg(regg("#FIXED", S), "?", AttValue));
    var AttDef = regg(S, Name, S, AttType, S, DefaultDecl);
    var ATTLIST_DECL_START = "<!ATTLIST";
    var AttlistDecl = reg(ATTLIST_DECL_START, S, Name, AttDef, "*", S_OPT, ">");
    var ABOUT_LEGACY_COMPAT = "about:legacy-compat";
    var ABOUT_LEGACY_COMPAT_SystemLiteral = regg('"' + ABOUT_LEGACY_COMPAT + '"', "|", "'" + ABOUT_LEGACY_COMPAT + "'");
    var SYSTEM = "SYSTEM";
    var PUBLIC = "PUBLIC";
    var ExternalID = regg(regg(SYSTEM, S, SystemLiteral), "|", regg(PUBLIC, S, PubidLiteral, S, SystemLiteral));
    var ExternalID_match = reg(
      "^",
      regg(
        regg(SYSTEM, S, "(?<SystemLiteralOnly>", SystemLiteral, ")"),
        "|",
        regg(PUBLIC, S, "(?<PubidLiteral>", PubidLiteral, ")", S, "(?<SystemLiteral>", SystemLiteral, ")")
      )
    );
    var PubidLiteral_match = reg("^", PubidLiteral, "$");
    var SystemLiteral_match = reg("^", SystemLiteral, "$");
    var NDataDecl = regg(S, "NDATA", S, Name);
    var EntityDef = regg(EntityValue, "|", regg(ExternalID, NDataDecl, "?"));
    var ENTITY_DECL_START = "<!ENTITY";
    var GEDecl = reg(ENTITY_DECL_START, S, Name, S, EntityDef, S_OPT, ">");
    var PEDef = regg(EntityValue, "|", ExternalID);
    var PEDecl = reg(ENTITY_DECL_START, S, "%", S, Name, S, PEDef, S_OPT, ">");
    var EntityDecl = regg(GEDecl, "|", PEDecl);
    var PublicID = reg(PUBLIC, S, PubidLiteral);
    var NotationDecl = reg("<!NOTATION", S, Name, S, regg(ExternalID, "|", PublicID), S_OPT, ">");
    var Eq = reg(S_OPT, "=", S_OPT);
    var VersionNum = /1[.]\d+/;
    var VersionInfo = reg(S, "version", Eq, regg("'", VersionNum, "'", "|", '"', VersionNum, '"'));
    var EncName = /[A-Za-z][-A-Za-z0-9._]*/;
    var EncodingDecl = regg(S, "encoding", Eq, regg('"', EncName, '"', "|", "'", EncName, "'"));
    var SDDecl = regg(S, "standalone", Eq, regg("'", regg("yes", "|", "no"), "'", "|", '"', regg("yes", "|", "no"), '"'));
    var XMLDecl = reg(/^<\?xml/, VersionInfo, EncodingDecl, "?", SDDecl, "?", S_OPT, /\?>/);
    var DOCTYPE_DECL_START = "<!DOCTYPE";
    var CDATA_START = "<![CDATA[";
    var CDATA_END = "]]>";
    var CDStart = /<!\[CDATA\[/;
    var CDEnd = /\]\]>/;
    var CData = reg(Char, "*?", CDEnd);
    var CDSect = reg(CDStart, CData);
    exports.chars = chars;
    exports.chars_without = chars_without;
    exports.detectUnicodeSupport = detectUnicodeSupport;
    exports.reg = reg;
    exports.regg = regg;
    exports.ABOUT_LEGACY_COMPAT = ABOUT_LEGACY_COMPAT;
    exports.ABOUT_LEGACY_COMPAT_SystemLiteral = ABOUT_LEGACY_COMPAT_SystemLiteral;
    exports.AttlistDecl = AttlistDecl;
    exports.CDATA_START = CDATA_START;
    exports.CDATA_END = CDATA_END;
    exports.CDSect = CDSect;
    exports.Char = Char;
    exports.Comment = Comment;
    exports.COMMENT_START = COMMENT_START;
    exports.COMMENT_END = COMMENT_END;
    exports.DOCTYPE_DECL_START = DOCTYPE_DECL_START;
    exports.elementdecl = elementdecl;
    exports.EntityDecl = EntityDecl;
    exports.EntityValue = EntityValue;
    exports.ExternalID = ExternalID;
    exports.ExternalID_match = ExternalID_match;
    exports.Name = Name;
    exports.NotationDecl = NotationDecl;
    exports.Reference = Reference;
    exports.PEReference = PEReference;
    exports.PI = PI;
    exports.PUBLIC = PUBLIC;
    exports.PubidLiteral = PubidLiteral;
    exports.PubidLiteral_match = PubidLiteral_match;
    exports.QName = QName;
    exports.QName_exact = QName_exact;
    exports.QName_group = QName_group;
    exports.S = S;
    exports.SChar_s = SChar_s;
    exports.S_OPT = S_OPT;
    exports.SYSTEM = SYSTEM;
    exports.SystemLiteral = SystemLiteral;
    exports.SystemLiteral_match = SystemLiteral_match;
    exports.InvalidChar = InvalidChar;
    exports.UNICODE_REPLACEMENT_CHARACTER = UNICODE_REPLACEMENT_CHARACTER;
    exports.UNICODE_SUPPORT = UNICODE_SUPPORT;
    exports.XMLDecl = XMLDecl;
  }
});

// node_modules/@xmldom/xmldom/lib/dom.js
var require_dom = __commonJS({
  "node_modules/@xmldom/xmldom/lib/dom.js"(exports) {
    "use strict";
    var conventions = require_conventions();
    var find = conventions.find;
    var hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
    var hasOwn = conventions.hasOwn;
    var isHTMLMimeType = conventions.isHTMLMimeType;
    var isHTMLRawTextElement = conventions.isHTMLRawTextElement;
    var isHTMLVoidElement = conventions.isHTMLVoidElement;
    var MIME_TYPE = conventions.MIME_TYPE;
    var NAMESPACE = conventions.NAMESPACE;
    var PDC = /* @__PURE__ */ Symbol();
    var errors = require_errors();
    var DOMException = errors.DOMException;
    var DOMExceptionName = errors.DOMExceptionName;
    var g = require_grammar();
    function checkSymbol(symbol) {
      if (symbol !== PDC) {
        throw new TypeError("Illegal constructor");
      }
    }
    function notEmptyString(input) {
      return input !== "";
    }
    function splitOnASCIIWhitespace(input) {
      return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
    }
    function orderedSetReducer(current, element) {
      if (!hasOwn(current, element)) {
        current[element] = true;
      }
      return current;
    }
    function toOrderedSet(input) {
      if (!input) return [];
      var list = splitOnASCIIWhitespace(input);
      return Object.keys(list.reduce(orderedSetReducer, {}));
    }
    function arrayIncludes(list) {
      return function(element) {
        return list && list.indexOf(element) !== -1;
      };
    }
    function validateQualifiedName(qualifiedName) {
      if (!g.QName_exact.test(qualifiedName)) {
        throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'invalid character in qualified name "' + qualifiedName + '"');
      }
    }
    function validateAndExtract(namespace, qualifiedName) {
      validateQualifiedName(qualifiedName);
      namespace = namespace || null;
      var prefix = null;
      var localName = qualifiedName;
      if (qualifiedName.indexOf(":") >= 0) {
        var splitResult = qualifiedName.split(":");
        prefix = splitResult[0];
        localName = splitResult[1];
      }
      if (prefix !== null && namespace === null) {
        throw new DOMException(DOMException.NAMESPACE_ERR, "prefix is non-null and namespace is null");
      }
      if (prefix === "xml" && namespace !== conventions.NAMESPACE.XML) {
        throw new DOMException(DOMException.NAMESPACE_ERR, 'prefix is "xml" and namespace is not the XML namespace');
      }
      if ((prefix === "xmlns" || qualifiedName === "xmlns") && namespace !== conventions.NAMESPACE.XMLNS) {
        throw new DOMException(
          DOMException.NAMESPACE_ERR,
          'either qualifiedName or prefix is "xmlns" and namespace is not the XMLNS namespace'
        );
      }
      if (namespace === conventions.NAMESPACE.XMLNS && prefix !== "xmlns" && qualifiedName !== "xmlns") {
        throw new DOMException(
          DOMException.NAMESPACE_ERR,
          'namespace is the XMLNS namespace and neither qualifiedName nor prefix is "xmlns"'
        );
      }
      return [namespace, prefix, localName];
    }
    function copy(src, dest) {
      for (var p in src) {
        if (hasOwn(src, p)) {
          dest[p] = src[p];
        }
      }
    }
    function _extends(Class, Super) {
      var pt = Class.prototype;
      if (!(pt instanceof Super)) {
        let t = function() {
        };
        t.prototype = Super.prototype;
        t = new t();
        copy(pt, t);
        Class.prototype = pt = t;
      }
      if (pt.constructor != Class) {
        if (typeof Class != "function") {
          console.error("unknown Class:" + Class);
        }
        pt.constructor = Class;
      }
    }
    var NodeType = {};
    var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
    var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
    var TEXT_NODE = NodeType.TEXT_NODE = 3;
    var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
    var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
    var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
    var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
    var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
    var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
    var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
    var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
    var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
    var DocumentPosition = conventions.freeze({
      DOCUMENT_POSITION_DISCONNECTED: 1,
      DOCUMENT_POSITION_PRECEDING: 2,
      DOCUMENT_POSITION_FOLLOWING: 4,
      DOCUMENT_POSITION_CONTAINS: 8,
      DOCUMENT_POSITION_CONTAINED_BY: 16,
      DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32
    });
    function commonAncestor(a, b) {
      if (b.length < a.length) return commonAncestor(b, a);
      var c = null;
      for (var n in a) {
        if (a[n] !== b[n]) return c;
        c = a[n];
      }
      return c;
    }
    function docGUID(doc) {
      if (!doc.guid) doc.guid = Math.random();
      return doc.guid;
    }
    function NodeList() {
    }
    NodeList.prototype = {
      /**
       * The number of nodes in the list. The range of valid child node indices is 0 to length-1
       * inclusive.
       *
       * @type {number}
       */
      length: 0,
      /**
       * Returns the item at `index`. If index is greater than or equal to the number of nodes in
       * the list, this returns null.
       *
       * @param index
       * Unsigned long Index into the collection.
       * @returns {Node | null}
       * The node at position `index` in the NodeList,
       * or null if that is not a valid index.
       */
      item: function(index) {
        return index >= 0 && index < this.length ? this[index] : null;
      },
      /**
       * Returns a string representation of the NodeList.
       *
       * Accepts the same `options` object as `XMLSerializer.prototype.serializeToString`
       * (`requireWellFormed`, `splitCDATASections`, `nodeFilter`). Passing a function is treated as
       * a legacy `nodeFilter` for backward compatibility.
       *
       * @param {Object | function} [options]
       * @param {boolean} [options.requireWellFormed=false]
       * @param {boolean} [options.splitCDATASections=true]
       * @param {function} [options.nodeFilter]
       * @returns {string}
       */
      toString: function(options) {
        var opts;
        if (typeof options === "function") {
          opts = { requireWellFormed: false, splitCDATASections: true, nodeFilter: options };
        } else if (!!options) {
          opts = {
            requireWellFormed: !!options.requireWellFormed,
            splitCDATASections: options.splitCDATASections !== false,
            nodeFilter: options.nodeFilter || null
          };
        } else {
          opts = { requireWellFormed: false, splitCDATASections: true, nodeFilter: null };
        }
        for (var buf = [], i = 0; i < this.length; i++) {
          serializeToString(this[i], buf, null, opts);
        }
        return buf.join("");
      },
      /**
       * Filters the NodeList based on a predicate.
       *
       * @param {function(Node): boolean} predicate
       * - A predicate function to filter the NodeList.
       * @returns {Node[]}
       * An array of nodes that satisfy the predicate.
       * @private
       */
      filter: function(predicate) {
        return Array.prototype.filter.call(this, predicate);
      },
      /**
       * Returns the first index at which a given node can be found in the NodeList, or -1 if it is
       * not present.
       *
       * @param {Node} item
       * - The Node item to locate in the NodeList.
       * @returns {number}
       * The first index of the node in the NodeList; -1 if not found.
       * @private
       */
      indexOf: function(item) {
        return Array.prototype.indexOf.call(this, item);
      }
    };
    NodeList.prototype[Symbol.iterator] = function() {
      var me = this;
      var index = 0;
      return {
        next: function() {
          if (index < me.length) {
            return {
              value: me[index++],
              done: false
            };
          } else {
            return {
              done: true
            };
          }
        },
        return: function() {
          return {
            done: true
          };
        }
      };
    };
    function LiveNodeList(node, refresh) {
      this._node = node;
      this._refresh = refresh;
      _updateLiveList(this);
    }
    function _updateLiveList(list) {
      var inc = list._node._inc || list._node.ownerDocument._inc;
      if (list._inc !== inc) {
        var ls = list._refresh(list._node);
        __set__(list, "length", ls.length);
        if (!list.$$length || ls.length < list.$$length) {
          for (var i = ls.length; i in list; i++) {
            if (hasOwn(list, i)) {
              delete list[i];
            }
          }
        }
        copy(ls, list);
        list._inc = inc;
      }
    }
    LiveNodeList.prototype.item = function(i) {
      _updateLiveList(this);
      return this[i] || null;
    };
    _extends(LiveNodeList, NodeList);
    function NamedNodeMap() {
    }
    function _findNodeIndex(list, node) {
      var i = 0;
      while (i < list.length) {
        if (list[i] === node) {
          return i;
        }
        i++;
      }
    }
    function _addNamedNode(el, list, newAttr, oldAttr) {
      if (oldAttr) {
        list[_findNodeIndex(list, oldAttr)] = newAttr;
      } else {
        list[list.length] = newAttr;
        list.length++;
      }
      if (el) {
        newAttr.ownerElement = el;
        var doc = el.ownerDocument;
        if (doc) {
          oldAttr && _onRemoveAttribute(doc, el, oldAttr);
          _onAddAttribute(doc, el, newAttr);
        }
      }
    }
    function _removeNamedNode(el, list, attr) {
      var i = _findNodeIndex(list, attr);
      if (i >= 0) {
        var lastIndex = list.length - 1;
        while (i <= lastIndex) {
          list[i] = list[++i];
        }
        list.length = lastIndex;
        if (el) {
          var doc = el.ownerDocument;
          if (doc) {
            _onRemoveAttribute(doc, el, attr);
          }
          attr.ownerElement = null;
        }
      }
    }
    NamedNodeMap.prototype = {
      length: 0,
      item: NodeList.prototype.item,
      /**
       * Get an attribute by name. Note: Name is in lower case in case of HTML namespace and
       * document.
       *
       * @param {string} localName
       * The local name of the attribute.
       * @returns {Attr | null}
       * The attribute with the given local name, or null if no such attribute exists.
       * @see https://dom.spec.whatwg.org/#concept-element-attributes-get-by-name
       */
      getNamedItem: function(localName) {
        if (this._ownerElement && this._ownerElement._isInHTMLDocumentAndNamespace()) {
          localName = localName.toLowerCase();
        }
        var i = 0;
        while (i < this.length) {
          var attr = this[i];
          if (attr.nodeName === localName) {
            return attr;
          }
          i++;
        }
        return null;
      },
      /**
       * Set an attribute.
       *
       * @param {Attr} attr
       * The attribute to set.
       * @returns {Attr | null}
       * The old attribute with the same local name and namespace URI as the new one, or null if no
       * such attribute exists.
       * @throws {DOMException}
       * With code:
       * - {@link INUSE_ATTRIBUTE_ERR} - If the attribute is already an attribute of another
       * element.
       * @see https://dom.spec.whatwg.org/#concept-element-attributes-set
       */
      setNamedItem: function(attr) {
        var el = attr.ownerElement;
        if (el && el !== this._ownerElement) {
          throw new DOMException(DOMException.INUSE_ATTRIBUTE_ERR);
        }
        var oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
        if (oldAttr === attr) {
          return attr;
        }
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
      },
      /**
       * Set an attribute, replacing an existing attribute with the same local name and namespace
       * URI if one exists.
       *
       * @param {Attr} attr
       * The attribute to set.
       * @returns {Attr | null}
       * The old attribute with the same local name and namespace URI as the new one, or null if no
       * such attribute exists.
       * @throws {DOMException}
       * Throws a DOMException with the name "InUseAttributeError" if the attribute is already an
       * attribute of another element.
       * @see https://dom.spec.whatwg.org/#concept-element-attributes-set
       */
      setNamedItemNS: function(attr) {
        return this.setNamedItem(attr);
      },
      /**
       * Removes an attribute specified by the local name.
       *
       * @param {string} localName
       * The local name of the attribute to be removed.
       * @returns {Attr}
       * The attribute node that was removed.
       * @throws {DOMException}
       * With code:
       * - {@link DOMException.NOT_FOUND_ERR} if no attribute with the given name is found.
       * @see https://dom.spec.whatwg.org/#dom-namednodemap-removenameditem
       * @see https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-name
       */
      removeNamedItem: function(localName) {
        var attr = this.getNamedItem(localName);
        if (!attr) {
          throw new DOMException(DOMException.NOT_FOUND_ERR, localName);
        }
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
      },
      /**
       * Removes an attribute specified by the namespace and local name.
       *
       * @param {string | null} namespaceURI
       * The namespace URI of the attribute to be removed.
       * @param {string} localName
       * The local name of the attribute to be removed.
       * @returns {Attr}
       * The attribute node that was removed.
       * @throws {DOMException}
       * With code:
       * - {@link DOMException.NOT_FOUND_ERR} if no attribute with the given namespace URI and local
       * name is found.
       * @see https://dom.spec.whatwg.org/#dom-namednodemap-removenameditemns
       * @see https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-namespace
       */
      removeNamedItemNS: function(namespaceURI, localName) {
        var attr = this.getNamedItemNS(namespaceURI, localName);
        if (!attr) {
          throw new DOMException(DOMException.NOT_FOUND_ERR, namespaceURI ? namespaceURI + " : " + localName : localName);
        }
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
      },
      /**
       * Get an attribute by namespace and local name.
       *
       * @param {string | null} namespaceURI
       * The namespace URI of the attribute.
       * @param {string} localName
       * The local name of the attribute.
       * @returns {Attr | null}
       * The attribute with the given namespace URI and local name, or null if no such attribute
       * exists.
       * @see https://dom.spec.whatwg.org/#concept-element-attributes-get-by-namespace
       */
      getNamedItemNS: function(namespaceURI, localName) {
        if (!namespaceURI) {
          namespaceURI = null;
        }
        var i = 0;
        while (i < this.length) {
          var node = this[i];
          if (node.localName === localName && node.namespaceURI === namespaceURI) {
            return node;
          }
          i++;
        }
        return null;
      }
    };
    NamedNodeMap.prototype[Symbol.iterator] = function() {
      var me = this;
      var index = 0;
      return {
        next: function() {
          if (index < me.length) {
            return {
              value: me[index++],
              done: false
            };
          } else {
            return {
              done: true
            };
          }
        },
        return: function() {
          return {
            done: true
          };
        }
      };
    };
    function DOMImplementation() {
    }
    DOMImplementation.prototype = {
      /**
       * Test if the DOM implementation implements a specific feature and version, as specified in
       * {@link https://www.w3.org/TR/DOM-Level-3-Core/core.html#DOMFeatures DOM Features}.
       *
       * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given
       * feature is supported. The different implementations fairly diverged in what kind of
       * features were reported. The latest version of the spec settled to force this method to
       * always return true, where the functionality was accurate and in use.
       *
       * @deprecated
       * It is deprecated and modern browsers return true in all cases.
       * @function DOMImplementation#hasFeature
       * @param {string} feature
       * The name of the feature to test.
       * @param {string} [version]
       * This is the version number of the feature to test.
       * @returns {boolean}
       * Always returns true.
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
       * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
       * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-5CED94D7 DOM Level 3 Core
       */
      hasFeature: function(feature, version) {
        return true;
      },
      /**
       * Creates a DOM Document object of the specified type with its document element. Note that
       * based on the {@link DocumentType}
       * given to create the document, the implementation may instantiate specialized
       * {@link Document} objects that support additional features than the "Core", such as "HTML"
       * {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#DOM2HTML DOM Level 2 HTML}.
       * On the other hand, setting the {@link DocumentType} after the document was created makes
       * this very unlikely to happen. Alternatively, specialized {@link Document} creation methods,
       * such as createHTMLDocument
       * {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#DOM2HTML DOM Level 2 HTML},
       * can be used to obtain specific types of {@link Document} objects.
       *
       * __It behaves slightly different from the description in the living standard__:
       * - There is no interface/class `XMLDocument`, it returns a `Document`
       * instance (with it's `type` set to `'xml'`).
       * - `encoding`, `mode`, `origin`, `url` fields are currently not declared.
       *
       * @function DOMImplementation.createDocument
       * @param {string | null} namespaceURI
       * The
       * {@link https://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-namespaceURI namespace URI}
       * of the document element to create or null.
       * @param {string | null} qualifiedName
       * The
       * {@link https://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-qualifiedname qualified name}
       * of the document element to be created or null.
       * @param {DocumentType | null} [doctype=null]
       * The type of document to be created or null. When doctype is not null, its
       * {@link Node#ownerDocument} attribute is set to the document being created. Default is
       * `null`
       * @returns {Document}
       * A new {@link Document} object with its document element. If the NamespaceURI,
       * qualifiedName, and doctype are null, the returned {@link Document} is empty with no
       * document element.
       * @throws {DOMException}
       * With code:
       *
       * - `INVALID_CHARACTER_ERR`: Raised if the specified qualified name is not an XML name
       * according to {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#XML XML 1.0}.
       * - `NAMESPACE_ERR`: Raised if the qualifiedName is malformed, if the qualifiedName has a
       * prefix and the namespaceURI is null, or if the qualifiedName is null and the namespaceURI
       * is different from null, or if the qualifiedName has a prefix that is "xml" and the
       * namespaceURI is different from "{@link http://www.w3.org/XML/1998/namespace}"
       * {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#Namespaces XML Namespaces},
       * or if the DOM implementation does not support the "XML" feature but a non-null namespace
       * URI was provided, since namespaces were defined by XML.
       * - `WRONG_DOCUMENT_ERR`: Raised if doctype has already been used with a different document
       * or was created from a different implementation.
       * - `NOT_SUPPORTED_ERR`: May be raised if the implementation does not support the feature
       * "XML" and the language exposed through the Document does not support XML Namespaces (such
       * as {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#HTML40 HTML 4.01}).
       * @since DOM Level 2.
       * @see {@link #createHTMLDocument}
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument DOM Living Standard
       * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Level-2-Core-DOM-createDocument DOM
       *      Level 3 Core
       * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM
       *      Level 2 Core (initial)
       */
      createDocument: function(namespaceURI, qualifiedName, doctype) {
        var contentType = MIME_TYPE.XML_APPLICATION;
        if (namespaceURI === NAMESPACE.HTML) {
          contentType = MIME_TYPE.XML_XHTML_APPLICATION;
        } else if (namespaceURI === NAMESPACE.SVG) {
          contentType = MIME_TYPE.XML_SVG_IMAGE;
        }
        var doc = new Document(PDC, { contentType });
        doc.implementation = this;
        doc.childNodes = new NodeList();
        doc.doctype = doctype || null;
        if (doctype) {
          doc.appendChild(doctype);
        }
        if (qualifiedName) {
          var root = doc.createElementNS(namespaceURI, qualifiedName);
          doc.appendChild(root);
        }
        return doc;
      },
      /**
       * Creates an empty DocumentType node. Entity declarations and notations are not made
       * available. Entity reference expansions and default attribute additions do not occur.
       *
       * **This behavior is slightly different from the one in the specs**:
       * - `encoding`, `mode`, `origin`, `url` fields are currently not declared.
       * - `publicId` and `systemId` contain the raw data including any possible quotes,
       *   so they can always be serialized back to the original value
       * - `internalSubset` contains the raw string between `[` and `]` if present,
       *   but is not parsed or validated in any form.
       *
       * @function DOMImplementation#createDocumentType
       * @param {string} qualifiedName
       * The {@link https://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-qualifiedname qualified
       * name} of the document type to be created.
       * @param {string} [publicId]
       * The external subset public identifier. Stored verbatim including surrounding quotes.
       * When serialized with `requireWellFormed: true`, the serializer throws `InvalidStateError`
       * if the value is non-empty and does not match the XML `PubidLiteral` production
       * (W3C DOM Parsing §3.2.1.3; XML 1.0 production [12]). Creation-time validation is not
       * enforced — deferred to a future breaking release.
       * @param {string} [systemId]
       * The external subset system identifier. Stored verbatim including surrounding quotes.
       * When serialized with `requireWellFormed: true`, the serializer throws `InvalidStateError`
       * if the value is non-empty and does not match the XML `SystemLiteral` production
       * (W3C DOM Parsing §3.2.1.3; XML 1.0 production [11]). Creation-time validation is not
       * enforced — deferred to a future breaking release.
       * @param {string} [internalSubset]
       * The internal subset or an empty string if it is not present. Stored verbatim.
       * When serialized with `requireWellFormed: true`, the serializer throws `InvalidStateError`
       * if the value contains `"]>"`. Creation-time validation is not enforced.
       * @returns {DocumentType}
       * A new {@link DocumentType} node with {@link Node#ownerDocument} set to null.
       * @throws {DOMException}
       * With code:
       *
       * - `INVALID_CHARACTER_ERR`: Raised if the specified qualified name is not an XML name
       * according to {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#XML XML 1.0}.
       * - `NAMESPACE_ERR`: Raised if the qualifiedName is malformed.
       * - `NOT_SUPPORTED_ERR`: May be raised if the implementation does not support the feature
       * "XML" and the language exposed through the Document does not support XML Namespaces (such
       * as {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#HTML40 HTML 4.01}).
       * @since DOM Level 2.
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType
       *      MDN
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living
       *      Standard
       * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Level-3-Core-DOM-createDocType DOM
       *      Level 3 Core
       * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM
       *      Level 2 Core
       * @see https://github.com/xmldom/xmldom/blob/master/CHANGELOG.md#050
       * @see https://www.w3.org/TR/DOM-Level-2-Core/#core-ID-Core-DocType-internalSubset
       * @prettierignore
       */
      createDocumentType: function(qualifiedName, publicId, systemId, internalSubset) {
        validateQualifiedName(qualifiedName);
        var node = new DocumentType(PDC);
        node.name = qualifiedName;
        node.nodeName = qualifiedName;
        node.publicId = publicId || "";
        node.systemId = systemId || "";
        node.internalSubset = internalSubset || "";
        node.childNodes = new NodeList();
        return node;
      },
      /**
       * Returns an HTML document, that might already have a basic DOM structure.
       *
       * __It behaves slightly different from the description in the living standard__:
       * - If the first argument is `false` no initial nodes are added (steps 3-7 in the specs are
       * omitted)
       * - `encoding`, `mode`, `origin`, `url` fields are currently not declared.
       *
       * @param {string | false} [title]
       * A string containing the title to give the new HTML document.
       * @returns {Document}
       * The HTML document.
       * @since WHATWG Living Standard.
       * @see {@link #createDocument}
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createhtmldocument
       * @see https://dom.spec.whatwg.org/#html-document
       */
      createHTMLDocument: function(title) {
        var doc = new Document(PDC, { contentType: MIME_TYPE.HTML });
        doc.implementation = this;
        doc.childNodes = new NodeList();
        if (title !== false) {
          doc.doctype = this.createDocumentType("html");
          doc.doctype.ownerDocument = doc;
          doc.appendChild(doc.doctype);
          var htmlNode = doc.createElement("html");
          doc.appendChild(htmlNode);
          var headNode = doc.createElement("head");
          htmlNode.appendChild(headNode);
          if (typeof title === "string") {
            var titleNode = doc.createElement("title");
            titleNode.appendChild(doc.createTextNode(title));
            headNode.appendChild(titleNode);
          }
          htmlNode.appendChild(doc.createElement("body"));
        }
        return doc;
      }
    };
    function Node(symbol) {
      checkSymbol(symbol);
    }
    Node.prototype = {
      /**
       * The first child of this node.
       *
       * @type {Node | null}
       */
      firstChild: null,
      /**
       * The last child of this node.
       *
       * @type {Node | null}
       */
      lastChild: null,
      /**
       * The previous sibling of this node.
       *
       * @type {Node | null}
       */
      previousSibling: null,
      /**
       * The next sibling of this node.
       *
       * @type {Node | null}
       */
      nextSibling: null,
      /**
       * The parent node of this node.
       *
       * @type {Node | null}
       */
      parentNode: null,
      /**
       * The parent element of this node.
       *
       * @type {Element | null}
       */
      get parentElement() {
        return this.parentNode && this.parentNode.nodeType === this.ELEMENT_NODE ? this.parentNode : null;
      },
      /**
       * The child nodes of this node.
       *
       * @type {NodeList}
       */
      childNodes: null,
      /**
       * The document object associated with this node.
       *
       * @type {Document | null}
       */
      ownerDocument: null,
      /**
       * The value of this node.
       *
       * @type {string | null}
       */
      nodeValue: null,
      /**
       * The namespace URI of this node.
       *
       * @type {string | null}
       */
      namespaceURI: null,
      /**
       * The prefix of the namespace for this node.
       *
       * @type {string | null}
       */
      prefix: null,
      /**
       * The local part of the qualified name of this node.
       *
       * @type {string | null}
       */
      localName: null,
      /**
       * The baseURI is currently always `about:blank`,
       * since that's what happens when you create a document from scratch.
       *
       * @type {'about:blank'}
       */
      baseURI: "about:blank",
      /**
       * Is true if this node is part of a document.
       *
       * @type {boolean}
       */
      get isConnected() {
        var rootNode = this.getRootNode();
        return rootNode && rootNode.nodeType === rootNode.DOCUMENT_NODE;
      },
      /**
       * Checks whether `other` is an inclusive descendant of this node.
       *
       * @param {Node | null | undefined} other
       * The node to check.
       * @returns {boolean}
       * True if `other` is an inclusive descendant of this node; false otherwise.
       * @see https://dom.spec.whatwg.org/#dom-node-contains
       */
      contains: function(other) {
        if (!other) return false;
        var parent = other;
        do {
          if (this === parent) return true;
          parent = parent.parentNode;
        } while (parent);
        return false;
      },
      /**
       * @typedef GetRootNodeOptions
       * @property {boolean} [composed=false]
       */
      /**
       * Searches for the root node of this node.
       *
       * **This behavior is slightly different from the in the specs**:
       * - ignores `options.composed`, since `ShadowRoot`s are unsupported, always returns root.
       *
       * @param {GetRootNodeOptions} [options]
       * @returns {Node}
       * Root node.
       * @see https://dom.spec.whatwg.org/#dom-node-getrootnode
       * @see https://dom.spec.whatwg.org/#concept-shadow-including-root
       */
      getRootNode: function(options) {
        var parent = this;
        do {
          if (!parent.parentNode) {
            return parent;
          }
          parent = parent.parentNode;
        } while (parent);
      },
      /**
       * Checks whether the given node is equal to this node.
       *
       * Two nodes are equal when they have the same type, defining characteristics (for the type),
       * and the same childNodes. The comparison is iterative to avoid stack overflows on
       * deeply-nested trees. Attribute nodes of each Element pair are also pushed onto the stack
       * and compared the same way.
       *
       * @param {Node} [otherNode]
       * @returns {boolean}
       * @see https://dom.spec.whatwg.org/#concept-node-equals
       * @see ../docs/walk-dom.md.
       */
      isEqualNode: function(otherNode) {
        if (!otherNode) return false;
        var stack = [{ node: this, other: otherNode }];
        while (stack.length > 0) {
          var pair = stack.pop();
          var node = pair.node;
          var other = pair.other;
          if (node.nodeType !== other.nodeType) return false;
          switch (node.nodeType) {
            case node.DOCUMENT_TYPE_NODE:
              if (node.name !== other.name) return false;
              if (node.publicId !== other.publicId) return false;
              if (node.systemId !== other.systemId) return false;
              break;
            case node.ELEMENT_NODE:
              if (node.namespaceURI !== other.namespaceURI) return false;
              if (node.prefix !== other.prefix) return false;
              if (node.localName !== other.localName) return false;
              if (node.attributes.length !== other.attributes.length) return false;
              for (var i = 0; i < node.attributes.length; i++) {
                var attr = node.attributes.item(i);
                var otherAttr = other.getAttributeNodeNS(attr.namespaceURI, attr.localName);
                if (!otherAttr) return false;
                stack.push({ node: attr, other: otherAttr });
              }
              break;
            case node.ATTRIBUTE_NODE:
              if (node.namespaceURI !== other.namespaceURI) return false;
              if (node.localName !== other.localName) return false;
              if (node.value !== other.value) return false;
              break;
            case node.PROCESSING_INSTRUCTION_NODE:
              if (node.target !== other.target || node.data !== other.data) return false;
              break;
            case node.TEXT_NODE:
            case node.CDATA_SECTION_NODE:
            case node.COMMENT_NODE:
              if (node.data !== other.data) return false;
              break;
          }
          if (node.childNodes.length !== other.childNodes.length) return false;
          for (var i = node.childNodes.length - 1; i >= 0; i--) {
            stack.push({ node: node.childNodes[i], other: other.childNodes[i] });
          }
        }
        return true;
      },
      /**
       * Checks whether or not the given node is this node.
       *
       * @param {Node} [otherNode]
       */
      isSameNode: function(otherNode) {
        return this === otherNode;
      },
      /**
       * Inserts a node before a reference node as a child of this node.
       *
       * @param {Node} newChild
       * The new child node to be inserted.
       * @param {Node | null} refChild
       * The reference node before which newChild will be inserted.
       * @returns {Node}
       * The new child node successfully inserted.
       * @throws {DOMException}
       * Throws a DOMException if inserting the node would result in a DOM tree that is not
       * well-formed, or if `child` is provided but is not a child of `parent`.
       * See {@link _insertBefore} for more details.
       * @since Modified in DOM L2
       */
      insertBefore: function(newChild, refChild) {
        return _insertBefore(this, newChild, refChild);
      },
      /**
       * Replaces an old child node with a new child node within this node.
       *
       * @param {Node} newChild
       * The new node that is to replace the old node.
       * If it already exists in the DOM, it is removed from its original position.
       * @param {Node} oldChild
       * The existing child node to be replaced.
       * @returns {Node}
       * Returns the replaced child node.
       * @throws {DOMException}
       * Throws a DOMException if replacing the node would result in a DOM tree that is not
       * well-formed, or if `oldChild` is not a child of `this`.
       * This can also occur if the pre-replacement validity assertion fails.
       * See {@link _insertBefore}, {@link Node.removeChild}, and
       * {@link assertPreReplacementValidityInDocument} for more details.
       * @see https://dom.spec.whatwg.org/#concept-node-replace
       */
      replaceChild: function(newChild, oldChild) {
        _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
        if (oldChild) {
          this.removeChild(oldChild);
        }
      },
      /**
       * Removes an existing child node from this node.
       *
       * @param {Node} oldChild
       * The child node to be removed.
       * @returns {Node}
       * Returns the removed child node.
       * @throws {DOMException}
       * Throws a DOMException if `oldChild` is not a child of `this`.
       * See {@link _removeChild} for more details.
       */
      removeChild: function(oldChild) {
        return _removeChild(this, oldChild);
      },
      /**
       * Appends a child node to this node.
       *
       * @param {Node} newChild
       * The child node to be appended to this node.
       * If it already exists in the DOM, it is removed from its original position.
       * @returns {Node}
       * Returns the appended child node.
       * @throws {DOMException}
       * Throws a DOMException if appending the node would result in a DOM tree that is not
       * well-formed, or if `newChild` is not a valid Node.
       * See {@link insertBefore} for more details.
       */
      appendChild: function(newChild) {
        return this.insertBefore(newChild, null);
      },
      /**
       * Determines whether this node has any child nodes.
       *
       * @returns {boolean}
       * Returns true if this node has any child nodes, and false otherwise.
       */
      hasChildNodes: function() {
        return this.firstChild != null;
      },
      /**
       * Creates a copy of the calling node.
       *
       * @param {boolean} deep
       * If true, the contents of the node are recursively copied.
       * If false, only the node itself (and its attributes, if it is an element) are copied.
       * @returns {Node}
       * Returns the newly created copy of the node.
       * @throws {DOMException}
       * May throw a DOMException if operations within {@link Element#setAttributeNode} or
       * {@link Node#appendChild} (which are potentially invoked in this method) do not meet their
       * specific constraints.
       * @see {@link cloneNode}
       */
      cloneNode: function(deep) {
        return cloneNode(this.ownerDocument || this, this, deep);
      },
      /**
       * Puts the specified node and all of its subtree into a "normalized" form. In a normalized
       * subtree, no text nodes in the subtree are empty and there are no adjacent text nodes.
       *
       * Specifically, this method merges any adjacent text nodes (i.e., nodes for which `nodeType`
       * is `TEXT_NODE`) into a single node with the combined data. It also removes any empty text
       * nodes.
       *
       * This method iterativly traverses all child nodes to normalize all descendent nodes within
       * the subtree.
       *
       * @throws {DOMException}
       * May throw a DOMException if operations within removeChild or appendData (which are
       * potentially invoked in this method) do not meet their specific constraints.
       * @since Modified in DOM Level 2
       * @see {@link Node.removeChild}
       * @see {@link CharacterData.appendData}
       * @see ../docs/walk-dom.md.
       */
      normalize: function() {
        walkDOM(this, null, {
          enter: function(node) {
            var child = node.firstChild;
            while (child) {
              var next = child.nextSibling;
              if (next !== null && next.nodeType === TEXT_NODE && child.nodeType === TEXT_NODE) {
                node.removeChild(next);
                child.appendData(next.data);
              } else {
                child = next;
              }
            }
            return true;
          }
        });
      },
      /**
       * Checks whether the DOM implementation implements a specific feature and its version.
       *
       * @deprecated
       * Since `DOMImplementation.hasFeature` is deprecated and always returns true.
       * @param {string} feature
       * The package name of the feature to test. This is the same name that can be passed to the
       * method `hasFeature` on `DOMImplementation`.
       * @param {string} version
       * This is the version number of the package name to test.
       * @returns {boolean}
       * Returns true in all cases in the current implementation.
       * @since Introduced in DOM Level 2
       * @see {@link DOMImplementation.hasFeature}
       */
      isSupported: function(feature, version) {
        return this.ownerDocument.implementation.hasFeature(feature, version);
      },
      /**
       * Look up the prefix associated to the given namespace URI, starting from this node.
       * **The default namespace declarations are ignored by this method.**
       * See Namespace Prefix Lookup for details on the algorithm used by this method.
       *
       * **This behavior is different from the in the specs**:
       * - no node type specific handling
       * - uses the internal attribute _nsMap for resolving namespaces that is updated when changing attributes
       *
       * @param {string | null} namespaceURI
       * The namespace URI for which to find the associated prefix.
       * @returns {string | null}
       * The associated prefix, if found; otherwise, null.
       * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
       * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
       * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
       * @see https://github.com/xmldom/xmldom/issues/322
       * @prettierignore
       */
      lookupPrefix: function(namespaceURI) {
        var el = this;
        while (el) {
          var map = el._nsMap;
          if (map) {
            for (var n in map) {
              if (hasOwn(map, n) && map[n] === namespaceURI) {
                return n;
              }
            }
          }
          el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
      },
      /**
       * This function is used to look up the namespace URI associated with the given prefix,
       * starting from this node.
       *
       * **This behavior is different from the in the specs**:
       * - no node type specific handling
       * - uses the internal attribute _nsMap for resolving namespaces that is updated when changing attributes
       *
       * @param {string | null} prefix
       * The prefix for which to find the associated namespace URI.
       * @returns {string | null}
       * The associated namespace URI, if found; otherwise, null.
       * @since DOM Level 3
       * @see https://dom.spec.whatwg.org/#dom-node-lookupnamespaceuri
       * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespaceURI
       * @prettierignore
       */
      lookupNamespaceURI: function(prefix) {
        var el = this;
        while (el) {
          var map = el._nsMap;
          if (map) {
            if (hasOwn(map, prefix)) {
              return map[prefix];
            }
          }
          el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
      },
      /**
       * Determines whether the given namespace URI is the default namespace.
       *
       * The function works by looking up the prefix associated with the given namespace URI. If no
       * prefix is found (i.e., the namespace URI is not registered in the namespace map of this
       * node or any of its ancestors), it returns `true`, implying the namespace URI is considered
       * the default.
       *
       * **This behavior is different from the in the specs**:
       * - no node type specific handling
       * - uses the internal attribute _nsMap for resolving namespaces that is updated when changing attributes
       *
       * @param {string | null} namespaceURI
       * The namespace URI to be checked.
       * @returns {boolean}
       * Returns true if the given namespace URI is the default namespace, false otherwise.
       * @since DOM Level 3
       * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-isDefaultNamespace
       * @see https://dom.spec.whatwg.org/#dom-node-isdefaultnamespace
       * @prettierignore
       */
      isDefaultNamespace: function(namespaceURI) {
        var prefix = this.lookupPrefix(namespaceURI);
        return prefix == null;
      },
      /**
       * Compares the reference node with a node with regard to their position in the document and
       * according to the document order.
       *
       * @param {Node} other
       * The node to compare the reference node to.
       * @returns {number}
       * Returns how the node is positioned relatively to the reference node according to the
       * bitmask. 0 if reference node and given node are the same.
       * @since DOM Level 3
       * @see https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#Node3-compare
       * @see https://dom.spec.whatwg.org/#dom-node-comparedocumentposition
       */
      compareDocumentPosition: function(other) {
        if (this === other) return 0;
        var node1 = other;
        var node2 = this;
        var attr1 = null;
        var attr2 = null;
        if (node1 instanceof Attr) {
          attr1 = node1;
          node1 = attr1.ownerElement;
        }
        if (node2 instanceof Attr) {
          attr2 = node2;
          node2 = attr2.ownerElement;
          if (attr1 && node1 && node2 === node1) {
            for (var i = 0, attr; attr = node2.attributes[i]; i++) {
              if (attr === attr1)
                return DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
              if (attr === attr2)
                return DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
            }
          }
        }
        if (!node1 || !node2 || node2.ownerDocument !== node1.ownerDocument) {
          return DocumentPosition.DOCUMENT_POSITION_DISCONNECTED + DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + (docGUID(node2.ownerDocument) > docGUID(node1.ownerDocument) ? DocumentPosition.DOCUMENT_POSITION_FOLLOWING : DocumentPosition.DOCUMENT_POSITION_PRECEDING);
        }
        if (attr2 && node1 === node2) {
          return DocumentPosition.DOCUMENT_POSITION_CONTAINS + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
        }
        if (attr1 && node1 === node2) {
          return DocumentPosition.DOCUMENT_POSITION_CONTAINED_BY + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
        }
        var chain1 = [];
        var ancestor1 = node1.parentNode;
        while (ancestor1) {
          if (!attr2 && ancestor1 === node2) {
            return DocumentPosition.DOCUMENT_POSITION_CONTAINED_BY + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
          }
          chain1.push(ancestor1);
          ancestor1 = ancestor1.parentNode;
        }
        chain1.reverse();
        var chain2 = [];
        var ancestor2 = node2.parentNode;
        while (ancestor2) {
          if (!attr1 && ancestor2 === node1) {
            return DocumentPosition.DOCUMENT_POSITION_CONTAINS + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
          }
          chain2.push(ancestor2);
          ancestor2 = ancestor2.parentNode;
        }
        chain2.reverse();
        var ca = commonAncestor(chain1, chain2);
        for (var n in ca.childNodes) {
          var child = ca.childNodes[n];
          if (child === node2) return DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
          if (child === node1) return DocumentPosition.DOCUMENT_POSITION_PRECEDING;
          if (chain2.indexOf(child) >= 0) return DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
          if (chain1.indexOf(child) >= 0) return DocumentPosition.DOCUMENT_POSITION_PRECEDING;
        }
        return 0;
      }
    };
    function _xmlEncoder(c) {
      return c == "<" && "&lt;" || c == ">" && "&gt;" || c == "&" && "&amp;" || c == '"' && "&quot;" || "&#" + c.charCodeAt() + ";";
    }
    copy(NodeType, Node);
    copy(NodeType, Node.prototype);
    copy(DocumentPosition, Node);
    copy(DocumentPosition, Node.prototype);
    function _visitNode(node, callback) {
      walkDOM(node, null, {
        enter: function(n) {
          return callback(n) ? walkDOM.STOP : true;
        }
      });
    }
    function walkDOM(node, context, callbacks) {
      var stack = [{ node, context, phase: walkDOM.ENTER }];
      while (stack.length > 0) {
        var frame = stack.pop();
        if (frame.phase === walkDOM.ENTER) {
          var childContext = callbacks.enter(frame.node, frame.context);
          if (childContext === walkDOM.STOP) {
            return walkDOM.STOP;
          }
          stack.push({ node: frame.node, context: childContext, phase: walkDOM.EXIT });
          if (childContext === null || childContext === void 0) {
            continue;
          }
          var child = frame.node.lastChild;
          while (child) {
            stack.push({ node: child, context: childContext, phase: walkDOM.ENTER });
            child = child.previousSibling;
          }
        } else {
          if (callbacks.exit) {
            callbacks.exit(frame.node, frame.context);
          }
        }
      }
    }
    walkDOM.STOP = /* @__PURE__ */ Symbol("walkDOM.STOP");
    walkDOM.ENTER = 0;
    walkDOM.EXIT = 1;
    function Document(symbol, options) {
      checkSymbol(symbol);
      var opt = options || {};
      this.ownerDocument = this;
      this.contentType = opt.contentType || MIME_TYPE.XML_APPLICATION;
      this.type = isHTMLMimeType(this.contentType) ? "html" : "xml";
    }
    function _onAddAttribute(doc, el, newAttr) {
      doc && doc._inc++;
      var ns = newAttr.namespaceURI;
      if (ns === NAMESPACE.XMLNS) {
        el._nsMap[newAttr.prefix ? newAttr.localName : ""] = newAttr.value;
      }
    }
    function _onRemoveAttribute(doc, el, newAttr, remove) {
      doc && doc._inc++;
      var ns = newAttr.namespaceURI;
      if (ns === NAMESPACE.XMLNS) {
        delete el._nsMap[newAttr.prefix ? newAttr.localName : ""];
      }
    }
    function _onUpdateChild(doc, parent, newChild) {
      if (doc && doc._inc) {
        doc._inc++;
        var childNodes = parent.childNodes;
        if (newChild && !newChild.nextSibling) {
          childNodes[childNodes.length++] = newChild;
        } else {
          var child = parent.firstChild;
          var i = 0;
          while (child) {
            childNodes[i++] = child;
            child = child.nextSibling;
          }
          childNodes.length = i;
          delete childNodes[childNodes.length];
        }
      }
    }
    function _removeChild(parentNode, child) {
      if (parentNode !== child.parentNode) {
        throw new DOMException(DOMException.NOT_FOUND_ERR, "child's parent is not parent");
      }
      var oldPreviousSibling = child.previousSibling;
      var oldNextSibling = child.nextSibling;
      if (oldPreviousSibling) {
        oldPreviousSibling.nextSibling = oldNextSibling;
      } else {
        parentNode.firstChild = oldNextSibling;
      }
      if (oldNextSibling) {
        oldNextSibling.previousSibling = oldPreviousSibling;
      } else {
        parentNode.lastChild = oldPreviousSibling;
      }
      _onUpdateChild(parentNode.ownerDocument, parentNode);
      child.parentNode = null;
      child.previousSibling = null;
      child.nextSibling = null;
      return child;
    }
    function hasValidParentNodeType(node) {
      return node && (node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE);
    }
    function hasInsertableNodeType(node) {
      return node && (node.nodeType === Node.CDATA_SECTION_NODE || node.nodeType === Node.COMMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.DOCUMENT_TYPE_NODE || node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.PROCESSING_INSTRUCTION_NODE || node.nodeType === Node.TEXT_NODE);
    }
    function isDocTypeNode(node) {
      return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
    }
    function isElementNode(node) {
      return node && node.nodeType === Node.ELEMENT_NODE;
    }
    function isTextNode(node) {
      return node && node.nodeType === Node.TEXT_NODE;
    }
    function isElementInsertionPossible(doc, child) {
      var parentChildNodes = doc.childNodes || [];
      if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
        return false;
      }
      var docTypeNode = find(parentChildNodes, isDocTypeNode);
      return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
    }
    function isElementReplacementPossible(doc, child) {
      var parentChildNodes = doc.childNodes || [];
      function hasElementChildThatIsNotChild(node) {
        return isElementNode(node) && node !== child;
      }
      if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
        return false;
      }
      var docTypeNode = find(parentChildNodes, isDocTypeNode);
      return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
    }
    function assertPreInsertionValidity1to5(parent, node, child) {
      if (!hasValidParentNodeType(parent)) {
        throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Unexpected parent node type " + parent.nodeType);
      }
      if (child && child.parentNode !== parent) {
        throw new DOMException(DOMException.NOT_FOUND_ERR, "child not in parent");
      }
      if (
        // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
        !hasInsertableNodeType(node) || // 5. If either `node` is a Text node and `parent` is a document,
        // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
        // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
        // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
        isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE
      ) {
        throw new DOMException(
          DOMException.HIERARCHY_REQUEST_ERR,
          "Unexpected node type " + node.nodeType + " for parent node type " + parent.nodeType
        );
      }
    }
    function assertPreInsertionValidityInDocument(parent, node, child) {
      var parentChildNodes = parent.childNodes || [];
      var nodeChildNodes = node.childNodes || [];
      if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        var nodeChildElements = nodeChildNodes.filter(isElementNode);
        if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
          throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
        }
        if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
          throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
        }
      }
      if (isElementNode(node)) {
        if (!isElementInsertionPossible(parent, child)) {
          throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
        }
      }
      if (isDocTypeNode(node)) {
        if (find(parentChildNodes, isDocTypeNode)) {
          throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
        }
        var parentElementChild = find(parentChildNodes, isElementNode);
        if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
          throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
        }
        if (!child && parentElementChild) {
          throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Doctype can not be appended since element is present");
        }
      }
    }
    function assertPreReplacementValidityInDocument(parent, node, child) {
      var parentChildNodes = parent.childNodes || [];
      var nodeChildNodes = node.childNodes || [];
      if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        var nodeChildElements = nodeChildNodes.filter(isElementNode);
        if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
          throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
        }
        if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
          throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
        }
      }
      if (isElementNode(node)) {
        if (!isElementReplacementPossible(parent, child)) {
          throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
        }
      }
      if (isDocTypeNode(node)) {
        let hasDoctypeChildThatIsNotChild = function(node2) {
          return isDocTypeNode(node2) && node2 !== child;
        };
        if (find(parentChildNodes, hasDoctypeChildThatIsNotChild)) {
          throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
        }
        var parentElementChild = find(parentChildNodes, isElementNode);
        if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
          throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
        }
      }
    }
    function _insertBefore(parent, node, child, _inDocumentAssertion) {
      assertPreInsertionValidity1to5(parent, node, child);
      if (parent.nodeType === Node.DOCUMENT_NODE) {
        (_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
      }
      var cp = node.parentNode;
      if (cp) {
        cp.removeChild(node);
      }
      if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
        var newFirst = node.firstChild;
        if (newFirst == null) {
          return node;
        }
        var newLast = node.lastChild;
      } else {
        newFirst = newLast = node;
      }
      var pre = child ? child.previousSibling : parent.lastChild;
      newFirst.previousSibling = pre;
      newLast.nextSibling = child;
      if (pre) {
        pre.nextSibling = newFirst;
      } else {
        parent.firstChild = newFirst;
      }
      if (child == null) {
        parent.lastChild = newLast;
      } else {
        child.previousSibling = newLast;
      }
      do {
        newFirst.parentNode = parent;
      } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
      _onUpdateChild(parent.ownerDocument || parent, parent, node);
      if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
        node.firstChild = node.lastChild = null;
      }
      return node;
    }
    Document.prototype = {
      /**
       * The implementation that created this document.
       *
       * @type DOMImplementation
       * @readonly
       */
      implementation: null,
      nodeName: "#document",
      nodeType: DOCUMENT_NODE,
      /**
       * The DocumentType node of the document.
       *
       * @type DocumentType
       * @readonly
       */
      doctype: null,
      documentElement: null,
      _inc: 1,
      insertBefore: function(newChild, refChild) {
        if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
          var child = newChild.firstChild;
          while (child) {
            var next = child.nextSibling;
            this.insertBefore(child, refChild);
            child = next;
          }
          return newChild;
        }
        _insertBefore(this, newChild, refChild);
        newChild.ownerDocument = this;
        if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
          this.documentElement = newChild;
        }
        return newChild;
      },
      removeChild: function(oldChild) {
        var removed = _removeChild(this, oldChild);
        if (removed === this.documentElement) {
          this.documentElement = null;
        }
        return removed;
      },
      replaceChild: function(newChild, oldChild) {
        _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
        newChild.ownerDocument = this;
        if (oldChild) {
          this.removeChild(oldChild);
        }
        if (isElementNode(newChild)) {
          this.documentElement = newChild;
        }
      },
      /**
       * Imports a node from another document into this document, creating a new copy owned by this
       * document. The source node and its subtree are not modified.
       *
       * @param {Node} importedNode
       * The node to import.
       * @param {boolean} deep
       * If true, the contents of the node are recursively imported.
       * If false, only the node itself (and its attributes, if it is an element) are imported.
       * @returns {Node}
       * Returns the newly created import of the node.
       * @see {@link importNode}
       * @see {@link https://dom.spec.whatwg.org/#dom-document-importnode}
       */
      importNode: function(importedNode, deep) {
        return importNode(this, importedNode, deep);
      },
      // Introduced in DOM Level 2:
      getElementById: function(id) {
        var rtv = null;
        _visitNode(this.documentElement, function(node) {
          if (node.nodeType == ELEMENT_NODE) {
            if (node.getAttribute("id") == id) {
              rtv = node;
              return true;
            }
          }
        });
        return rtv;
      },
      /**
       * Creates a new `Element` that is owned by this `Document`.
       * In HTML Documents `localName` is the lower cased `tagName`,
       * otherwise no transformation is being applied.
       * When `contentType` implies the HTML namespace, it will be set as `namespaceURI`.
       *
       * __This implementation differs from the specification:__ - The provided name is not checked
       * against the `Name` production,
       * so no related error will be thrown.
       * - There is no interface `HTMLElement`, it is always an `Element`.
       * - There is no support for a second argument to indicate using custom elements.
       *
       * @param {string} tagName
       * @returns {Element}
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
       * @see https://dom.spec.whatwg.org/#dom-document-createelement
       * @see https://dom.spec.whatwg.org/#concept-create-element
       */
      createElement: function(tagName) {
        var node = new Element(PDC);
        node.ownerDocument = this;
        if (this.type === "html") {
          tagName = tagName.toLowerCase();
        }
        if (hasDefaultHTMLNamespace(this.contentType)) {
          node.namespaceURI = NAMESPACE.HTML;
        }
        node.nodeName = tagName;
        node.tagName = tagName;
        node.localName = tagName;
        node.childNodes = new NodeList();
        var attrs = node.attributes = new NamedNodeMap();
        attrs._ownerElement = node;
        return node;
      },
      /**
       * @returns {DocumentFragment}
       */
      createDocumentFragment: function() {
        var node = new DocumentFragment(PDC);
        node.ownerDocument = this;
        node.childNodes = new NodeList();
        return node;
      },
      /**
       * @param {string} data
       * @returns {Text}
       */
      createTextNode: function(data) {
        var node = new Text(PDC);
        node.ownerDocument = this;
        node.childNodes = new NodeList();
        node.appendData(data);
        return node;
      },
      /**
       * @param {string} data
       * @returns {Comment}
       * @see https://dom.spec.whatwg.org/#dom-document-createcomment
       * @see https://www.w3.org/TR/xml/#NT-Comment XML 1.0 production [15]
       * @see https://www.w3.org/TR/DOM-Parsing/#dfn-concept-serialize-xml §3.2.1.3
       *
       *      Note: no validation is performed at creation time. When the resulting document is
       *      serialized with `requireWellFormed: true`, the serializer throws `InvalidStateError`
       *      if the comment data contains `--` anywhere, ends with `-`, or contains characters
       *      outside the XML Char production (W3C DOM Parsing §3.2.1.3). Without that option the
       *      data is emitted verbatim.
       */
      createComment: function(data) {
        var node = new Comment(PDC);
        node.ownerDocument = this;
        node.childNodes = new NodeList();
        node.appendData(data);
        return node;
      },
      /**
       * Returns a new CDATASection node whose data is `data`.
       *
       * __This implementation differs from the specification:__ - calling this method on an HTML
       * document does not throw `NotSupportedError`.
       *
       * @param {string} data
       * @returns {CDATASection}
       * @throws {DOMException}
       * With code `INVALID_CHARACTER_ERR` if `data` contains `"]]>"`.
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createCDATASection
       * @see https://dom.spec.whatwg.org/#dom-document-createcdatasection
       */
      createCDATASection: function(data) {
        if (data.indexOf("]]>") !== -1) {
          throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'data contains "]]>"');
        }
        var node = new CDATASection(PDC);
        node.ownerDocument = this;
        node.childNodes = new NodeList();
        node.appendData(data);
        return node;
      },
      /**
       * Returns a ProcessingInstruction node whose target is target and data is data.
       *
       * __This behavior is slightly different from the in the specs__:
       * - it does not do any input validation on the arguments and doesn't throw
       * "InvalidCharacterError".
       *
       * Note: When the resulting document is serialized with `requireWellFormed: true`, the
       * serializer throws `InvalidStateError` if `.target` contains `:` or is an ASCII
       * case-insensitive match for `"xml"`, or if `.data` contains `?>` or characters outside the
       * XML Char production (W3C DOM Parsing §3.2.1.7). Without that option the data is emitted
       * verbatim.
       *
       * @param {string} target
       * @param {string} data
       * @returns {ProcessingInstruction}
       * @see https://developer.mozilla.org/docs/Web/API/Document/createProcessingInstruction
       * @see https://dom.spec.whatwg.org/#dom-document-createprocessinginstruction
       * @see https://www.w3.org/TR/DOM-Parsing/#dfn-concept-serialize-xml §3.2.1.7
       */
      createProcessingInstruction: function(target, data) {
        var node = new ProcessingInstruction(PDC);
        node.ownerDocument = this;
        node.childNodes = new NodeList();
        node.nodeName = node.target = target;
        node.nodeValue = node.data = data;
        return node;
      },
      /**
       * Creates an `Attr` node that is owned by this document.
       * In HTML Documents `localName` is the lower cased `name`,
       * otherwise no transformation is being applied.
       *
       * __This implementation differs from the specification:__ - The provided name is not checked
       * against the `Name` production,
       * so no related error will be thrown.
       *
       * @param {string} name
       * @returns {Attr}
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute
       * @see https://dom.spec.whatwg.org/#dom-document-createattribute
       */
      createAttribute: function(name) {
        if (!g.QName_exact.test(name)) {
          throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'invalid character in name "' + name + '"');
        }
        if (this.type === "html") {
          name = name.toLowerCase();
        }
        return this._createAttribute(name);
      },
      _createAttribute: function(name) {
        var node = new Attr(PDC);
        node.ownerDocument = this;
        node.childNodes = new NodeList();
        node.name = name;
        node.nodeName = name;
        node.localName = name;
        node.specified = true;
        return node;
      },
      /**
       * Creates an EntityReference object.
       * The current implementation does not fill the `childNodes` with those of the corresponding
       * `Entity`
       *
       * @deprecated
       * In DOM Level 4.
       * @param {string} name
       * The name of the entity to reference. No namespace well-formedness checks are performed.
       * @returns {EntityReference}
       * @throws {DOMException}
       * With code `INVALID_CHARACTER_ERR` when `name` is not valid.
       * @throws {DOMException}
       * with code `NOT_SUPPORTED_ERR` when the document is of type `html`
       * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-392B75AE
       */
      createEntityReference: function(name) {
        if (!g.Name.test(name)) {
          throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'not a valid xml name "' + name + '"');
        }
        if (this.type === "html") {
          throw new DOMException("document is an html document", DOMExceptionName.NotSupportedError);
        }
        var node = new EntityReference(PDC);
        node.ownerDocument = this;
        node.childNodes = new NodeList();
        node.nodeName = name;
        return node;
      },
      // Introduced in DOM Level 2:
      /**
       * @param {string} namespaceURI
       * @param {string} qualifiedName
       * @returns {Element}
       */
      createElementNS: function(namespaceURI, qualifiedName) {
        var validated = validateAndExtract(namespaceURI, qualifiedName);
        var node = new Element(PDC);
        var attrs = node.attributes = new NamedNodeMap();
        node.childNodes = new NodeList();
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.tagName = qualifiedName;
        node.namespaceURI = validated[0];
        node.prefix = validated[1];
        node.localName = validated[2];
        attrs._ownerElement = node;
        return node;
      },
      // Introduced in DOM Level 2:
      /**
       * @param {string} namespaceURI
       * @param {string} qualifiedName
       * @returns {Attr}
       */
      createAttributeNS: function(namespaceURI, qualifiedName) {
        var validated = validateAndExtract(namespaceURI, qualifiedName);
        var node = new Attr(PDC);
        node.ownerDocument = this;
        node.childNodes = new NodeList();
        node.nodeName = qualifiedName;
        node.name = qualifiedName;
        node.specified = true;
        node.namespaceURI = validated[0];
        node.prefix = validated[1];
        node.localName = validated[2];
        return node;
      }
    };
    _extends(Document, Node);
    function Element(symbol) {
      checkSymbol(symbol);
      this._nsMap = /* @__PURE__ */ Object.create(null);
    }
    Element.prototype = {
      nodeType: ELEMENT_NODE,
      /**
       * The attributes of this element.
       *
       * @type {NamedNodeMap | null}
       */
      attributes: null,
      getQualifiedName: function() {
        return this.prefix ? this.prefix + ":" + this.localName : this.localName;
      },
      _isInHTMLDocumentAndNamespace: function() {
        return this.ownerDocument.type === "html" && this.namespaceURI === NAMESPACE.HTML;
      },
      /**
       * Implementaton of Level2 Core function hasAttributes.
       *
       * @returns {boolean}
       * True if attribute list is not empty.
       * @see https://www.w3.org/TR/DOM-Level-2-Core/#core-ID-NodeHasAttrs
       */
      hasAttributes: function() {
        return !!(this.attributes && this.attributes.length);
      },
      hasAttribute: function(name) {
        return !!this.getAttributeNode(name);
      },
      /**
       * Returns element’s first attribute whose qualified name is `name`, and `null`
       * if there is no such attribute.
       *
       * @param {string} name
       * @returns {string | null}
       */
      getAttribute: function(name) {
        var attr = this.getAttributeNode(name);
        return attr ? attr.value : null;
      },
      getAttributeNode: function(name) {
        if (this._isInHTMLDocumentAndNamespace()) {
          name = name.toLowerCase();
        }
        return this.attributes.getNamedItem(name);
      },
      /**
       * Sets the value of element’s first attribute whose qualified name is qualifiedName to value.
       *
       * @param {string} name
       * @param {string} value
       */
      setAttribute: function(name, value) {
        if (this._isInHTMLDocumentAndNamespace()) {
          name = name.toLowerCase();
        }
        var attr = this.getAttributeNode(name);
        if (attr) {
          attr.value = attr.nodeValue = "" + value;
        } else {
          attr = this.ownerDocument._createAttribute(name);
          attr.value = attr.nodeValue = "" + value;
          this.setAttributeNode(attr);
        }
      },
      removeAttribute: function(name) {
        var attr = this.getAttributeNode(name);
        attr && this.removeAttributeNode(attr);
      },
      setAttributeNode: function(newAttr) {
        return this.attributes.setNamedItem(newAttr);
      },
      setAttributeNodeNS: function(newAttr) {
        return this.attributes.setNamedItemNS(newAttr);
      },
      removeAttributeNode: function(oldAttr) {
        return this.attributes.removeNamedItem(oldAttr.nodeName);
      },
      //get real attribute name,and remove it by removeAttributeNode
      removeAttributeNS: function(namespaceURI, localName) {
        var old = this.getAttributeNodeNS(namespaceURI, localName);
        old && this.removeAttributeNode(old);
      },
      hasAttributeNS: function(namespaceURI, localName) {
        return this.getAttributeNodeNS(namespaceURI, localName) != null;
      },
      /**
       * Returns element’s attribute whose namespace is `namespaceURI` and local name is
       * `localName`,
       * or `null` if there is no such attribute.
       *
       * @param {string} namespaceURI
       * @param {string} localName
       * @returns {string | null}
       */
      getAttributeNS: function(namespaceURI, localName) {
        var attr = this.getAttributeNodeNS(namespaceURI, localName);
        return attr ? attr.value : null;
      },
      /**
       * Sets the value of element’s attribute whose namespace is `namespaceURI` and local name is
       * `localName` to value.
       *
       * @param {string} namespaceURI
       * @param {string} qualifiedName
       * @param {string} value
       * @see https://dom.spec.whatwg.org/#dom-element-setattributens
       */
      setAttributeNS: function(namespaceURI, qualifiedName, value) {
        var validated = validateAndExtract(namespaceURI, qualifiedName);
        var localName = validated[2];
        var attr = this.getAttributeNodeNS(namespaceURI, localName);
        if (attr) {
          attr.value = attr.nodeValue = "" + value;
        } else {
          attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
          attr.value = attr.nodeValue = "" + value;
          this.setAttributeNode(attr);
        }
      },
      getAttributeNodeNS: function(namespaceURI, localName) {
        return this.attributes.getNamedItemNS(namespaceURI, localName);
      },
      /**
       * Returns a LiveNodeList of all child elements which have **all** of the given class name(s).
       *
       * Returns an empty list if `classNames` is an empty string or only contains HTML white space
       * characters.
       *
       * Warning: This returns a live LiveNodeList.
       * Changes in the DOM will reflect in the array as the changes occur.
       * If an element selected by this array no longer qualifies for the selector,
       * it will automatically be removed. Be aware of this for iteration purposes.
       *
       * @param {string} classNames
       * Is a string representing the class name(s) to match; multiple class names are separated by
       * (ASCII-)whitespace.
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
       * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
       */
      getElementsByClassName: function(classNames) {
        var classNamesSet = toOrderedSet(classNames);
        return new LiveNodeList(this, function(base) {
          var ls = [];
          if (classNamesSet.length > 0) {
            _visitNode(base, function(node) {
              if (node !== base && node.nodeType === ELEMENT_NODE) {
                var nodeClassNames = node.getAttribute("class");
                if (nodeClassNames) {
                  var matches = classNames === nodeClassNames;
                  if (!matches) {
                    var nodeClassNamesSet = toOrderedSet(nodeClassNames);
                    matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
                  }
                  if (matches) {
                    ls.push(node);
                  }
                }
              }
            });
          }
          return ls;
        });
      },
      /**
       * Returns a LiveNodeList of elements with the given qualifiedName.
       * Searching for all descendants can be done by passing `*` as `qualifiedName`.
       *
       * All descendants of the specified element are searched, but not the element itself.
       * The returned list is live, which means it updates itself with the DOM tree automatically.
       * Therefore, there is no need to call `Element.getElementsByTagName()`
       * with the same element and arguments repeatedly if the DOM changes in between calls.
       *
       * When called on an HTML element in an HTML document,
       * `getElementsByTagName` lower-cases the argument before searching for it.
       * This is undesirable when trying to match camel-cased SVG elements (such as
       * `<linearGradient>`) in an HTML document.
       * Instead, use `Element.getElementsByTagNameNS()`,
       * which preserves the capitalization of the tag name.
       *
       * `Element.getElementsByTagName` is similar to `Document.getElementsByTagName()`,
       * except that it only searches for elements that are descendants of the specified element.
       *
       * @param {string} qualifiedName
       * @returns {LiveNodeList}
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
       * @see https://dom.spec.whatwg.org/#concept-getelementsbytagname
       */
      getElementsByTagName: function(qualifiedName) {
        var isHTMLDocument = (this.nodeType === DOCUMENT_NODE ? this : this.ownerDocument).type === "html";
        var lowerQualifiedName = qualifiedName.toLowerCase();
        return new LiveNodeList(this, function(base) {
          var ls = [];
          _visitNode(base, function(node) {
            if (node === base || node.nodeType !== ELEMENT_NODE) {
              return;
            }
            if (qualifiedName === "*") {
              ls.push(node);
            } else {
              var nodeQualifiedName = node.getQualifiedName();
              var matchingQName = isHTMLDocument && node.namespaceURI === NAMESPACE.HTML ? lowerQualifiedName : qualifiedName;
              if (nodeQualifiedName === matchingQName) {
                ls.push(node);
              }
            }
          });
          return ls;
        });
      },
      getElementsByTagNameNS: function(namespaceURI, localName) {
        return new LiveNodeList(this, function(base) {
          var ls = [];
          _visitNode(base, function(node) {
            if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === "*" || node.namespaceURI === namespaceURI) && (localName === "*" || node.localName == localName)) {
              ls.push(node);
            }
          });
          return ls;
        });
      }
    };
    Document.prototype.getElementsByClassName = Element.prototype.getElementsByClassName;
    Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
    Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
    _extends(Element, Node);
    function Attr(symbol) {
      checkSymbol(symbol);
      this.namespaceURI = null;
      this.prefix = null;
      this.ownerElement = null;
    }
    Attr.prototype.nodeType = ATTRIBUTE_NODE;
    _extends(Attr, Node);
    function CharacterData(symbol) {
      checkSymbol(symbol);
    }
    CharacterData.prototype = {
      data: "",
      substringData: function(offset, count) {
        return this.data.substring(offset, offset + count);
      },
      appendData: function(text) {
        text = this.data + text;
        this.nodeValue = this.data = text;
        this.length = text.length;
      },
      insertData: function(offset, text) {
        this.replaceData(offset, 0, text);
      },
      deleteData: function(offset, count) {
        this.replaceData(offset, count, "");
      },
      replaceData: function(offset, count, text) {
        var start = this.data.substring(0, offset);
        var end = this.data.substring(offset + count);
        text = start + text + end;
        this.nodeValue = this.data = text;
        this.length = text.length;
      }
    };
    _extends(CharacterData, Node);
    function Text(symbol) {
      checkSymbol(symbol);
    }
    Text.prototype = {
      nodeName: "#text",
      nodeType: TEXT_NODE,
      splitText: function(offset) {
        var text = this.data;
        var newText = text.substring(offset);
        text = text.substring(0, offset);
        this.data = this.nodeValue = text;
        this.length = text.length;
        var newNode = this.ownerDocument.createTextNode(newText);
        if (this.parentNode) {
          this.parentNode.insertBefore(newNode, this.nextSibling);
        }
        return newNode;
      }
    };
    _extends(Text, CharacterData);
    function Comment(symbol) {
      checkSymbol(symbol);
    }
    Comment.prototype = {
      nodeName: "#comment",
      nodeType: COMMENT_NODE
    };
    _extends(Comment, CharacterData);
    function CDATASection(symbol) {
      checkSymbol(symbol);
    }
    CDATASection.prototype = {
      nodeName: "#cdata-section",
      nodeType: CDATA_SECTION_NODE
    };
    _extends(CDATASection, Text);
    function DocumentType(symbol) {
      checkSymbol(symbol);
    }
    DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
    _extends(DocumentType, Node);
    function Notation(symbol) {
      checkSymbol(symbol);
    }
    Notation.prototype.nodeType = NOTATION_NODE;
    _extends(Notation, Node);
    function Entity(symbol) {
      checkSymbol(symbol);
    }
    Entity.prototype.nodeType = ENTITY_NODE;
    _extends(Entity, Node);
    function EntityReference(symbol) {
      checkSymbol(symbol);
    }
    EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
    _extends(EntityReference, Node);
    function DocumentFragment(symbol) {
      checkSymbol(symbol);
    }
    DocumentFragment.prototype.nodeName = "#document-fragment";
    DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
    _extends(DocumentFragment, Node);
    function ProcessingInstruction(symbol) {
      checkSymbol(symbol);
    }
    ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
    _extends(ProcessingInstruction, CharacterData);
    function XMLSerializer() {
    }
    XMLSerializer.prototype.serializeToString = function(node, options) {
      return nodeSerializeToString.call(node, options);
    };
    Node.prototype.toString = nodeSerializeToString;
    function nodeSerializeToString(options) {
      var opts;
      if (typeof options === "function") {
        opts = { requireWellFormed: false, splitCDATASections: true, nodeFilter: options };
      } else if (options != null) {
        opts = {
          requireWellFormed: !!options.requireWellFormed,
          splitCDATASections: options.splitCDATASections !== false,
          nodeFilter: options.nodeFilter || null
        };
      } else {
        opts = { requireWellFormed: false, splitCDATASections: true, nodeFilter: null };
      }
      var buf = [];
      var refNode = this.nodeType === DOCUMENT_NODE && this.documentElement || this;
      var prefix = refNode.prefix;
      var uri = refNode.namespaceURI;
      if (uri && prefix == null) {
        var prefix = refNode.lookupPrefix(uri);
        if (prefix == null) {
          var visibleNamespaces = [
            { namespace: uri, prefix: null }
            //{namespace:uri,prefix:''}
          ];
        }
      }
      serializeToString(this, buf, visibleNamespaces, opts);
      return buf.join("");
    }
    function needNamespaceDefine(node, isHTML, visibleNamespaces) {
      var prefix = node.prefix || "";
      var uri = node.namespaceURI;
      if (!uri) {
        return false;
      }
      if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
        return false;
      }
      var i = visibleNamespaces.length;
      while (i--) {
        var ns = visibleNamespaces[i];
        if (ns.prefix === prefix) {
          return ns.namespace !== uri;
        }
      }
      return true;
    }
    function addSerializedAttribute(buf, qualifiedName, value) {
      buf.push(" ", qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"');
    }
    function serializeToString(node, buf, visibleNamespaces, opts) {
      if (!visibleNamespaces) {
        visibleNamespaces = [];
      }
      var nodeFilter = opts.nodeFilter;
      var requireWellFormed = opts.requireWellFormed;
      var splitCDATASections = opts.splitCDATASections;
      var doc = node.nodeType === DOCUMENT_NODE ? node : node.ownerDocument;
      var isHTML = doc.type === "html";
      walkDOM(
        node,
        { ns: visibleNamespaces },
        {
          enter: function(n, ctx) {
            var namespaces = ctx.ns;
            if (nodeFilter) {
              n = nodeFilter(n);
              if (n) {
                if (typeof n == "string") {
                  buf.push(n);
                  return null;
                }
              } else {
                return null;
              }
            }
            switch (n.nodeType) {
              case ELEMENT_NODE:
                var attrs = n.attributes;
                var len = attrs.length;
                var nodeName = n.tagName;
                var prefixedNodeName = nodeName;
                if (!isHTML && !n.prefix && n.namespaceURI) {
                  var defaultNS;
                  for (var ai = 0; ai < attrs.length; ai++) {
                    if (attrs.item(ai).name === "xmlns") {
                      defaultNS = attrs.item(ai).value;
                      break;
                    }
                  }
                  if (!defaultNS) {
                    for (var nsi = namespaces.length - 1; nsi >= 0; nsi--) {
                      var nsEntry = namespaces[nsi];
                      if (nsEntry.prefix === "" && nsEntry.namespace === n.namespaceURI) {
                        defaultNS = nsEntry.namespace;
                        break;
                      }
                    }
                  }
                  if (defaultNS !== n.namespaceURI) {
                    for (var nsi = namespaces.length - 1; nsi >= 0; nsi--) {
                      var nsEntry = namespaces[nsi];
                      if (nsEntry.namespace === n.namespaceURI) {
                        if (nsEntry.prefix) {
                          prefixedNodeName = nsEntry.prefix + ":" + nodeName;
                        }
                        break;
                      }
                    }
                  }
                }
                buf.push("<", prefixedNodeName);
                var childNamespaces = namespaces.slice();
                for (var i = 0; i < len; i++) {
                  var attr = attrs.item(i);
                  if (attr.prefix == "xmlns") {
                    childNamespaces.push({
                      prefix: attr.localName,
                      namespace: attr.value
                    });
                  } else if (attr.nodeName == "xmlns") {
                    childNamespaces.push({ prefix: "", namespace: attr.value });
                  }
                }
                for (var i = 0; i < len; i++) {
                  var attr = attrs.item(i);
                  if (needNamespaceDefine(attr, isHTML, childNamespaces)) {
                    var attrPrefix = attr.prefix || "";
                    var uri = attr.namespaceURI;
                    addSerializedAttribute(buf, attrPrefix ? "xmlns:" + attrPrefix : "xmlns", uri);
                    childNamespaces.push({ prefix: attrPrefix, namespace: uri });
                  }
                  var filteredAttr = nodeFilter ? nodeFilter(attr) : attr;
                  if (filteredAttr) {
                    if (typeof filteredAttr === "string") {
                      buf.push(filteredAttr);
                    } else {
                      addSerializedAttribute(buf, filteredAttr.name, filteredAttr.value);
                    }
                  }
                }
                if (nodeName === prefixedNodeName && needNamespaceDefine(n, isHTML, childNamespaces)) {
                  var nodePrefix = n.prefix || "";
                  var uri = n.namespaceURI;
                  addSerializedAttribute(buf, nodePrefix ? "xmlns:" + nodePrefix : "xmlns", uri);
                  childNamespaces.push({ prefix: nodePrefix, namespace: uri });
                }
                var canCloseTag = !n.firstChild;
                if (canCloseTag && (isHTML || n.namespaceURI === NAMESPACE.HTML)) {
                  canCloseTag = isHTMLVoidElement(nodeName);
                }
                if (canCloseTag) {
                  buf.push("/>");
                  return null;
                }
                buf.push(">");
                if (isHTML && isHTMLRawTextElement(nodeName)) {
                  var child = n.firstChild;
                  while (child) {
                    if (child.data) {
                      buf.push(child.data);
                    } else {
                      serializeToString(child, buf, childNamespaces.slice(), opts);
                    }
                    child = child.nextSibling;
                  }
                  buf.push("</", prefixedNodeName, ">");
                  return null;
                }
                return { ns: childNamespaces, tag: prefixedNodeName };
              case DOCUMENT_NODE:
              case DOCUMENT_FRAGMENT_NODE:
                if (requireWellFormed && n.nodeType === DOCUMENT_NODE && n.documentElement == null) {
                  throw new DOMException("The Document has no documentElement", DOMExceptionName.InvalidStateError);
                }
                return { ns: namespaces };
              case ATTRIBUTE_NODE:
                addSerializedAttribute(buf, n.name, n.value);
                return null;
              case TEXT_NODE:
                if (requireWellFormed && g.InvalidChar.test(n.data)) {
                  throw new DOMException(
                    "The Text node data contains characters outside the XML Char production",
                    DOMExceptionName.InvalidStateError
                  );
                }
                buf.push(n.data.replace(/[<&>]/g, _xmlEncoder));
                return null;
              case CDATA_SECTION_NODE:
                if (requireWellFormed && n.data.indexOf("]]>") !== -1) {
                  throw new DOMException('The CDATASection data contains "]]>"', DOMExceptionName.InvalidStateError);
                }
                if (splitCDATASections) {
                  buf.push(g.CDATA_START, n.data.replace(/]]>/g, "]]]]><![CDATA[>"), g.CDATA_END);
                } else {
                  buf.push(g.CDATA_START, n.data, g.CDATA_END);
                }
                return null;
              case COMMENT_NODE:
                if (requireWellFormed) {
                  if (g.InvalidChar.test(n.data)) {
                    throw new DOMException(
                      "The comment node data contains characters outside the XML Char production",
                      DOMExceptionName.InvalidStateError
                    );
                  }
                  if (n.data.indexOf("--") !== -1 || n.data[n.data.length - 1] === "-") {
                    throw new DOMException(
                      'The comment node data contains "--" or ends with "-"',
                      DOMExceptionName.InvalidStateError
                    );
                  }
                }
                buf.push(g.COMMENT_START, n.data, g.COMMENT_END);
                return null;
              case DOCUMENT_TYPE_NODE:
                var pubid = n.publicId;
                var sysid = n.systemId;
                if (requireWellFormed) {
                  if (pubid && !g.PubidLiteral_match.test(pubid)) {
                    throw new DOMException("DocumentType publicId is not a valid PubidLiteral", DOMExceptionName.InvalidStateError);
                  }
                  if (sysid && sysid !== "." && !g.SystemLiteral_match.test(sysid)) {
                    throw new DOMException("DocumentType systemId is not a valid SystemLiteral", DOMExceptionName.InvalidStateError);
                  }
                  if (n.internalSubset && n.internalSubset.indexOf("]>") !== -1) {
                    throw new DOMException('DocumentType internalSubset contains "]>"', DOMExceptionName.InvalidStateError);
                  }
                }
                buf.push(g.DOCTYPE_DECL_START, " ", n.name);
                if (pubid) {
                  buf.push(" ", g.PUBLIC, " ", pubid);
                  if (sysid && sysid !== ".") {
                    buf.push(" ", sysid);
                  }
                } else if (sysid && sysid !== ".") {
                  buf.push(" ", g.SYSTEM, " ", sysid);
                }
                if (n.internalSubset) {
                  buf.push(" [", n.internalSubset, "]");
                }
                buf.push(">");
                return null;
              case PROCESSING_INSTRUCTION_NODE:
                if (requireWellFormed) {
                  if (n.target.indexOf(":") !== -1 || n.target.toLowerCase() === "xml") {
                    throw new DOMException("The ProcessingInstruction target is not well-formed", DOMExceptionName.InvalidStateError);
                  }
                  if (g.InvalidChar.test(n.data)) {
                    throw new DOMException(
                      "The ProcessingInstruction data contains characters outside the XML Char production",
                      DOMExceptionName.InvalidStateError
                    );
                  }
                  if (n.data.indexOf("?>") !== -1) {
                    throw new DOMException('The ProcessingInstruction data contains "?>"', DOMExceptionName.InvalidStateError);
                  }
                }
                buf.push("<?", n.target, " ", n.data, "?>");
                return null;
              case ENTITY_REFERENCE_NODE:
                buf.push("&", n.nodeName, ";");
                return null;
              //case ENTITY_NODE:
              //case NOTATION_NODE:
              default:
                buf.push("??", n.nodeName);
                return null;
            }
          },
          exit: function(n, childCtx) {
            if (childCtx && childCtx.tag) {
              buf.push("</", childCtx.tag, ">");
            }
          }
        }
      );
    }
    function importNode(doc, node, deep) {
      var destRoot;
      walkDOM(node, null, {
        enter: function(srcNode, destParent) {
          var destNode = srcNode.cloneNode(false);
          destNode.ownerDocument = doc;
          destNode.parentNode = null;
          if (destParent === null) {
            destRoot = destNode;
          } else {
            destParent.appendChild(destNode);
          }
          var shouldDeep = srcNode.nodeType === ATTRIBUTE_NODE || deep;
          return shouldDeep ? destNode : null;
        }
      });
      return destRoot;
    }
    function cloneNode(doc, node, deep) {
      var destRoot;
      walkDOM(node, null, {
        enter: function(srcNode, destParent) {
          var destNode = new srcNode.constructor(PDC);
          for (var n in srcNode) {
            if (hasOwn(srcNode, n)) {
              var v = srcNode[n];
              if (typeof v != "object") {
                if (v != destNode[n]) {
                  destNode[n] = v;
                }
              }
            }
          }
          if (srcNode.childNodes) {
            destNode.childNodes = new NodeList();
          }
          destNode.ownerDocument = doc;
          var shouldDeep = deep;
          switch (destNode.nodeType) {
            case ELEMENT_NODE:
              var attrs = srcNode.attributes;
              var attrs2 = destNode.attributes = new NamedNodeMap();
              var len = attrs.length;
              attrs2._ownerElement = destNode;
              for (var i = 0; i < len; i++) {
                destNode.setAttributeNode(cloneNode(doc, attrs.item(i), true));
              }
              break;
            case ATTRIBUTE_NODE:
              shouldDeep = true;
          }
          if (destParent !== null) {
            destParent.appendChild(destNode);
          } else {
            destRoot = destNode;
          }
          return shouldDeep ? destNode : null;
        }
      });
      return destRoot;
    }
    function __set__(object, key, value) {
      object[key] = value;
    }
    function childrenRefresh(node) {
      var ls = [];
      var child = node.firstChild;
      while (child) {
        if (child.nodeType === ELEMENT_NODE) {
          ls.push(child);
        }
        child = child.nextSibling;
      }
      return ls;
    }
    try {
      if (Object.defineProperty) {
        Object.defineProperty(LiveNodeList.prototype, "length", {
          get: function() {
            _updateLiveList(this);
            return this.$$length;
          }
        });
        Object.defineProperty(Node.prototype, "textContent", {
          get: function() {
            if (this.nodeType === ELEMENT_NODE || this.nodeType === DOCUMENT_FRAGMENT_NODE) {
              var buf = [];
              walkDOM(this, null, {
                enter: function(n) {
                  if (n.nodeType === ELEMENT_NODE || n.nodeType === DOCUMENT_FRAGMENT_NODE) {
                    return true;
                  }
                  if (n.nodeType === PROCESSING_INSTRUCTION_NODE || n.nodeType === COMMENT_NODE) {
                    return null;
                  }
                  buf.push(n.nodeValue);
                }
              });
              return buf.join("");
            }
            return this.nodeValue;
          },
          set: function(data) {
            switch (this.nodeType) {
              case ELEMENT_NODE:
              case DOCUMENT_FRAGMENT_NODE:
                while (this.firstChild) {
                  this.removeChild(this.firstChild);
                }
                if (data || String(data)) {
                  this.appendChild(this.ownerDocument.createTextNode(data));
                }
                break;
              default:
                this.data = data;
                this.value = data;
                this.nodeValue = data;
            }
          }
        });
        Object.defineProperty(Element.prototype, "children", {
          get: function() {
            return new LiveNodeList(this, childrenRefresh);
          }
        });
        Object.defineProperty(Document.prototype, "children", {
          get: function() {
            return new LiveNodeList(this, childrenRefresh);
          }
        });
        Object.defineProperty(DocumentFragment.prototype, "children", {
          get: function() {
            return new LiveNodeList(this, childrenRefresh);
          }
        });
        __set__ = function(object, key, value) {
          object["$$" + key] = value;
        };
      }
    } catch (e) {
    }
    exports._updateLiveList = _updateLiveList;
    exports.Attr = Attr;
    exports.CDATASection = CDATASection;
    exports.CharacterData = CharacterData;
    exports.Comment = Comment;
    exports.Document = Document;
    exports.DocumentFragment = DocumentFragment;
    exports.DocumentType = DocumentType;
    exports.DOMImplementation = DOMImplementation;
    exports.Element = Element;
    exports.Entity = Entity;
    exports.EntityReference = EntityReference;
    exports.LiveNodeList = LiveNodeList;
    exports.NamedNodeMap = NamedNodeMap;
    exports.Node = Node;
    exports.NodeList = NodeList;
    exports.Notation = Notation;
    exports.Text = Text;
    exports.ProcessingInstruction = ProcessingInstruction;
    exports.walkDOM = walkDOM;
    exports.XMLSerializer = XMLSerializer;
  }
});

// node_modules/@xmldom/xmldom/lib/entities.js
var require_entities = __commonJS({
  "node_modules/@xmldom/xmldom/lib/entities.js"(exports) {
    "use strict";
    var freeze = require_conventions().freeze;
    exports.XML_ENTITIES = freeze({
      amp: "&",
      apos: "'",
      gt: ">",
      lt: "<",
      quot: '"'
    });
    exports.HTML_ENTITIES = freeze({
      Aacute: "\xC1",
      aacute: "\xE1",
      Abreve: "\u0102",
      abreve: "\u0103",
      ac: "\u223E",
      acd: "\u223F",
      acE: "\u223E\u0333",
      Acirc: "\xC2",
      acirc: "\xE2",
      acute: "\xB4",
      Acy: "\u0410",
      acy: "\u0430",
      AElig: "\xC6",
      aelig: "\xE6",
      af: "\u2061",
      Afr: "\u{1D504}",
      afr: "\u{1D51E}",
      Agrave: "\xC0",
      agrave: "\xE0",
      alefsym: "\u2135",
      aleph: "\u2135",
      Alpha: "\u0391",
      alpha: "\u03B1",
      Amacr: "\u0100",
      amacr: "\u0101",
      amalg: "\u2A3F",
      AMP: "&",
      amp: "&",
      And: "\u2A53",
      and: "\u2227",
      andand: "\u2A55",
      andd: "\u2A5C",
      andslope: "\u2A58",
      andv: "\u2A5A",
      ang: "\u2220",
      ange: "\u29A4",
      angle: "\u2220",
      angmsd: "\u2221",
      angmsdaa: "\u29A8",
      angmsdab: "\u29A9",
      angmsdac: "\u29AA",
      angmsdad: "\u29AB",
      angmsdae: "\u29AC",
      angmsdaf: "\u29AD",
      angmsdag: "\u29AE",
      angmsdah: "\u29AF",
      angrt: "\u221F",
      angrtvb: "\u22BE",
      angrtvbd: "\u299D",
      angsph: "\u2222",
      angst: "\xC5",
      angzarr: "\u237C",
      Aogon: "\u0104",
      aogon: "\u0105",
      Aopf: "\u{1D538}",
      aopf: "\u{1D552}",
      ap: "\u2248",
      apacir: "\u2A6F",
      apE: "\u2A70",
      ape: "\u224A",
      apid: "\u224B",
      apos: "'",
      ApplyFunction: "\u2061",
      approx: "\u2248",
      approxeq: "\u224A",
      Aring: "\xC5",
      aring: "\xE5",
      Ascr: "\u{1D49C}",
      ascr: "\u{1D4B6}",
      Assign: "\u2254",
      ast: "*",
      asymp: "\u2248",
      asympeq: "\u224D",
      Atilde: "\xC3",
      atilde: "\xE3",
      Auml: "\xC4",
      auml: "\xE4",
      awconint: "\u2233",
      awint: "\u2A11",
      backcong: "\u224C",
      backepsilon: "\u03F6",
      backprime: "\u2035",
      backsim: "\u223D",
      backsimeq: "\u22CD",
      Backslash: "\u2216",
      Barv: "\u2AE7",
      barvee: "\u22BD",
      Barwed: "\u2306",
      barwed: "\u2305",
      barwedge: "\u2305",
      bbrk: "\u23B5",
      bbrktbrk: "\u23B6",
      bcong: "\u224C",
      Bcy: "\u0411",
      bcy: "\u0431",
      bdquo: "\u201E",
      becaus: "\u2235",
      Because: "\u2235",
      because: "\u2235",
      bemptyv: "\u29B0",
      bepsi: "\u03F6",
      bernou: "\u212C",
      Bernoullis: "\u212C",
      Beta: "\u0392",
      beta: "\u03B2",
      beth: "\u2136",
      between: "\u226C",
      Bfr: "\u{1D505}",
      bfr: "\u{1D51F}",
      bigcap: "\u22C2",
      bigcirc: "\u25EF",
      bigcup: "\u22C3",
      bigodot: "\u2A00",
      bigoplus: "\u2A01",
      bigotimes: "\u2A02",
      bigsqcup: "\u2A06",
      bigstar: "\u2605",
      bigtriangledown: "\u25BD",
      bigtriangleup: "\u25B3",
      biguplus: "\u2A04",
      bigvee: "\u22C1",
      bigwedge: "\u22C0",
      bkarow: "\u290D",
      blacklozenge: "\u29EB",
      blacksquare: "\u25AA",
      blacktriangle: "\u25B4",
      blacktriangledown: "\u25BE",
      blacktriangleleft: "\u25C2",
      blacktriangleright: "\u25B8",
      blank: "\u2423",
      blk12: "\u2592",
      blk14: "\u2591",
      blk34: "\u2593",
      block: "\u2588",
      bne: "=\u20E5",
      bnequiv: "\u2261\u20E5",
      bNot: "\u2AED",
      bnot: "\u2310",
      Bopf: "\u{1D539}",
      bopf: "\u{1D553}",
      bot: "\u22A5",
      bottom: "\u22A5",
      bowtie: "\u22C8",
      boxbox: "\u29C9",
      boxDL: "\u2557",
      boxDl: "\u2556",
      boxdL: "\u2555",
      boxdl: "\u2510",
      boxDR: "\u2554",
      boxDr: "\u2553",
      boxdR: "\u2552",
      boxdr: "\u250C",
      boxH: "\u2550",
      boxh: "\u2500",
      boxHD: "\u2566",
      boxHd: "\u2564",
      boxhD: "\u2565",
      boxhd: "\u252C",
      boxHU: "\u2569",
      boxHu: "\u2567",
      boxhU: "\u2568",
      boxhu: "\u2534",
      boxminus: "\u229F",
      boxplus: "\u229E",
      boxtimes: "\u22A0",
      boxUL: "\u255D",
      boxUl: "\u255C",
      boxuL: "\u255B",
      boxul: "\u2518",
      boxUR: "\u255A",
      boxUr: "\u2559",
      boxuR: "\u2558",
      boxur: "\u2514",
      boxV: "\u2551",
      boxv: "\u2502",
      boxVH: "\u256C",
      boxVh: "\u256B",
      boxvH: "\u256A",
      boxvh: "\u253C",
      boxVL: "\u2563",
      boxVl: "\u2562",
      boxvL: "\u2561",
      boxvl: "\u2524",
      boxVR: "\u2560",
      boxVr: "\u255F",
      boxvR: "\u255E",
      boxvr: "\u251C",
      bprime: "\u2035",
      Breve: "\u02D8",
      breve: "\u02D8",
      brvbar: "\xA6",
      Bscr: "\u212C",
      bscr: "\u{1D4B7}",
      bsemi: "\u204F",
      bsim: "\u223D",
      bsime: "\u22CD",
      bsol: "\\",
      bsolb: "\u29C5",
      bsolhsub: "\u27C8",
      bull: "\u2022",
      bullet: "\u2022",
      bump: "\u224E",
      bumpE: "\u2AAE",
      bumpe: "\u224F",
      Bumpeq: "\u224E",
      bumpeq: "\u224F",
      Cacute: "\u0106",
      cacute: "\u0107",
      Cap: "\u22D2",
      cap: "\u2229",
      capand: "\u2A44",
      capbrcup: "\u2A49",
      capcap: "\u2A4B",
      capcup: "\u2A47",
      capdot: "\u2A40",
      CapitalDifferentialD: "\u2145",
      caps: "\u2229\uFE00",
      caret: "\u2041",
      caron: "\u02C7",
      Cayleys: "\u212D",
      ccaps: "\u2A4D",
      Ccaron: "\u010C",
      ccaron: "\u010D",
      Ccedil: "\xC7",
      ccedil: "\xE7",
      Ccirc: "\u0108",
      ccirc: "\u0109",
      Cconint: "\u2230",
      ccups: "\u2A4C",
      ccupssm: "\u2A50",
      Cdot: "\u010A",
      cdot: "\u010B",
      cedil: "\xB8",
      Cedilla: "\xB8",
      cemptyv: "\u29B2",
      cent: "\xA2",
      CenterDot: "\xB7",
      centerdot: "\xB7",
      Cfr: "\u212D",
      cfr: "\u{1D520}",
      CHcy: "\u0427",
      chcy: "\u0447",
      check: "\u2713",
      checkmark: "\u2713",
      Chi: "\u03A7",
      chi: "\u03C7",
      cir: "\u25CB",
      circ: "\u02C6",
      circeq: "\u2257",
      circlearrowleft: "\u21BA",
      circlearrowright: "\u21BB",
      circledast: "\u229B",
      circledcirc: "\u229A",
      circleddash: "\u229D",
      CircleDot: "\u2299",
      circledR: "\xAE",
      circledS: "\u24C8",
      CircleMinus: "\u2296",
      CirclePlus: "\u2295",
      CircleTimes: "\u2297",
      cirE: "\u29C3",
      cire: "\u2257",
      cirfnint: "\u2A10",
      cirmid: "\u2AEF",
      cirscir: "\u29C2",
      ClockwiseContourIntegral: "\u2232",
      CloseCurlyDoubleQuote: "\u201D",
      CloseCurlyQuote: "\u2019",
      clubs: "\u2663",
      clubsuit: "\u2663",
      Colon: "\u2237",
      colon: ":",
      Colone: "\u2A74",
      colone: "\u2254",
      coloneq: "\u2254",
      comma: ",",
      commat: "@",
      comp: "\u2201",
      compfn: "\u2218",
      complement: "\u2201",
      complexes: "\u2102",
      cong: "\u2245",
      congdot: "\u2A6D",
      Congruent: "\u2261",
      Conint: "\u222F",
      conint: "\u222E",
      ContourIntegral: "\u222E",
      Copf: "\u2102",
      copf: "\u{1D554}",
      coprod: "\u2210",
      Coproduct: "\u2210",
      COPY: "\xA9",
      copy: "\xA9",
      copysr: "\u2117",
      CounterClockwiseContourIntegral: "\u2233",
      crarr: "\u21B5",
      Cross: "\u2A2F",
      cross: "\u2717",
      Cscr: "\u{1D49E}",
      cscr: "\u{1D4B8}",
      csub: "\u2ACF",
      csube: "\u2AD1",
      csup: "\u2AD0",
      csupe: "\u2AD2",
      ctdot: "\u22EF",
      cudarrl: "\u2938",
      cudarrr: "\u2935",
      cuepr: "\u22DE",
      cuesc: "\u22DF",
      cularr: "\u21B6",
      cularrp: "\u293D",
      Cup: "\u22D3",
      cup: "\u222A",
      cupbrcap: "\u2A48",
      CupCap: "\u224D",
      cupcap: "\u2A46",
      cupcup: "\u2A4A",
      cupdot: "\u228D",
      cupor: "\u2A45",
      cups: "\u222A\uFE00",
      curarr: "\u21B7",
      curarrm: "\u293C",
      curlyeqprec: "\u22DE",
      curlyeqsucc: "\u22DF",
      curlyvee: "\u22CE",
      curlywedge: "\u22CF",
      curren: "\xA4",
      curvearrowleft: "\u21B6",
      curvearrowright: "\u21B7",
      cuvee: "\u22CE",
      cuwed: "\u22CF",
      cwconint: "\u2232",
      cwint: "\u2231",
      cylcty: "\u232D",
      Dagger: "\u2021",
      dagger: "\u2020",
      daleth: "\u2138",
      Darr: "\u21A1",
      dArr: "\u21D3",
      darr: "\u2193",
      dash: "\u2010",
      Dashv: "\u2AE4",
      dashv: "\u22A3",
      dbkarow: "\u290F",
      dblac: "\u02DD",
      Dcaron: "\u010E",
      dcaron: "\u010F",
      Dcy: "\u0414",
      dcy: "\u0434",
      DD: "\u2145",
      dd: "\u2146",
      ddagger: "\u2021",
      ddarr: "\u21CA",
      DDotrahd: "\u2911",
      ddotseq: "\u2A77",
      deg: "\xB0",
      Del: "\u2207",
      Delta: "\u0394",
      delta: "\u03B4",
      demptyv: "\u29B1",
      dfisht: "\u297F",
      Dfr: "\u{1D507}",
      dfr: "\u{1D521}",
      dHar: "\u2965",
      dharl: "\u21C3",
      dharr: "\u21C2",
      DiacriticalAcute: "\xB4",
      DiacriticalDot: "\u02D9",
      DiacriticalDoubleAcute: "\u02DD",
      DiacriticalGrave: "`",
      DiacriticalTilde: "\u02DC",
      diam: "\u22C4",
      Diamond: "\u22C4",
      diamond: "\u22C4",
      diamondsuit: "\u2666",
      diams: "\u2666",
      die: "\xA8",
      DifferentialD: "\u2146",
      digamma: "\u03DD",
      disin: "\u22F2",
      div: "\xF7",
      divide: "\xF7",
      divideontimes: "\u22C7",
      divonx: "\u22C7",
      DJcy: "\u0402",
      djcy: "\u0452",
      dlcorn: "\u231E",
      dlcrop: "\u230D",
      dollar: "$",
      Dopf: "\u{1D53B}",
      dopf: "\u{1D555}",
      Dot: "\xA8",
      dot: "\u02D9",
      DotDot: "\u20DC",
      doteq: "\u2250",
      doteqdot: "\u2251",
      DotEqual: "\u2250",
      dotminus: "\u2238",
      dotplus: "\u2214",
      dotsquare: "\u22A1",
      doublebarwedge: "\u2306",
      DoubleContourIntegral: "\u222F",
      DoubleDot: "\xA8",
      DoubleDownArrow: "\u21D3",
      DoubleLeftArrow: "\u21D0",
      DoubleLeftRightArrow: "\u21D4",
      DoubleLeftTee: "\u2AE4",
      DoubleLongLeftArrow: "\u27F8",
      DoubleLongLeftRightArrow: "\u27FA",
      DoubleLongRightArrow: "\u27F9",
      DoubleRightArrow: "\u21D2",
      DoubleRightTee: "\u22A8",
      DoubleUpArrow: "\u21D1",
      DoubleUpDownArrow: "\u21D5",
      DoubleVerticalBar: "\u2225",
      DownArrow: "\u2193",
      Downarrow: "\u21D3",
      downarrow: "\u2193",
      DownArrowBar: "\u2913",
      DownArrowUpArrow: "\u21F5",
      DownBreve: "\u0311",
      downdownarrows: "\u21CA",
      downharpoonleft: "\u21C3",
      downharpoonright: "\u21C2",
      DownLeftRightVector: "\u2950",
      DownLeftTeeVector: "\u295E",
      DownLeftVector: "\u21BD",
      DownLeftVectorBar: "\u2956",
      DownRightTeeVector: "\u295F",
      DownRightVector: "\u21C1",
      DownRightVectorBar: "\u2957",
      DownTee: "\u22A4",
      DownTeeArrow: "\u21A7",
      drbkarow: "\u2910",
      drcorn: "\u231F",
      drcrop: "\u230C",
      Dscr: "\u{1D49F}",
      dscr: "\u{1D4B9}",
      DScy: "\u0405",
      dscy: "\u0455",
      dsol: "\u29F6",
      Dstrok: "\u0110",
      dstrok: "\u0111",
      dtdot: "\u22F1",
      dtri: "\u25BF",
      dtrif: "\u25BE",
      duarr: "\u21F5",
      duhar: "\u296F",
      dwangle: "\u29A6",
      DZcy: "\u040F",
      dzcy: "\u045F",
      dzigrarr: "\u27FF",
      Eacute: "\xC9",
      eacute: "\xE9",
      easter: "\u2A6E",
      Ecaron: "\u011A",
      ecaron: "\u011B",
      ecir: "\u2256",
      Ecirc: "\xCA",
      ecirc: "\xEA",
      ecolon: "\u2255",
      Ecy: "\u042D",
      ecy: "\u044D",
      eDDot: "\u2A77",
      Edot: "\u0116",
      eDot: "\u2251",
      edot: "\u0117",
      ee: "\u2147",
      efDot: "\u2252",
      Efr: "\u{1D508}",
      efr: "\u{1D522}",
      eg: "\u2A9A",
      Egrave: "\xC8",
      egrave: "\xE8",
      egs: "\u2A96",
      egsdot: "\u2A98",
      el: "\u2A99",
      Element: "\u2208",
      elinters: "\u23E7",
      ell: "\u2113",
      els: "\u2A95",
      elsdot: "\u2A97",
      Emacr: "\u0112",
      emacr: "\u0113",
      empty: "\u2205",
      emptyset: "\u2205",
      EmptySmallSquare: "\u25FB",
      emptyv: "\u2205",
      EmptyVerySmallSquare: "\u25AB",
      emsp: "\u2003",
      emsp13: "\u2004",
      emsp14: "\u2005",
      ENG: "\u014A",
      eng: "\u014B",
      ensp: "\u2002",
      Eogon: "\u0118",
      eogon: "\u0119",
      Eopf: "\u{1D53C}",
      eopf: "\u{1D556}",
      epar: "\u22D5",
      eparsl: "\u29E3",
      eplus: "\u2A71",
      epsi: "\u03B5",
      Epsilon: "\u0395",
      epsilon: "\u03B5",
      epsiv: "\u03F5",
      eqcirc: "\u2256",
      eqcolon: "\u2255",
      eqsim: "\u2242",
      eqslantgtr: "\u2A96",
      eqslantless: "\u2A95",
      Equal: "\u2A75",
      equals: "=",
      EqualTilde: "\u2242",
      equest: "\u225F",
      Equilibrium: "\u21CC",
      equiv: "\u2261",
      equivDD: "\u2A78",
      eqvparsl: "\u29E5",
      erarr: "\u2971",
      erDot: "\u2253",
      Escr: "\u2130",
      escr: "\u212F",
      esdot: "\u2250",
      Esim: "\u2A73",
      esim: "\u2242",
      Eta: "\u0397",
      eta: "\u03B7",
      ETH: "\xD0",
      eth: "\xF0",
      Euml: "\xCB",
      euml: "\xEB",
      euro: "\u20AC",
      excl: "!",
      exist: "\u2203",
      Exists: "\u2203",
      expectation: "\u2130",
      ExponentialE: "\u2147",
      exponentiale: "\u2147",
      fallingdotseq: "\u2252",
      Fcy: "\u0424",
      fcy: "\u0444",
      female: "\u2640",
      ffilig: "\uFB03",
      fflig: "\uFB00",
      ffllig: "\uFB04",
      Ffr: "\u{1D509}",
      ffr: "\u{1D523}",
      filig: "\uFB01",
      FilledSmallSquare: "\u25FC",
      FilledVerySmallSquare: "\u25AA",
      fjlig: "fj",
      flat: "\u266D",
      fllig: "\uFB02",
      fltns: "\u25B1",
      fnof: "\u0192",
      Fopf: "\u{1D53D}",
      fopf: "\u{1D557}",
      ForAll: "\u2200",
      forall: "\u2200",
      fork: "\u22D4",
      forkv: "\u2AD9",
      Fouriertrf: "\u2131",
      fpartint: "\u2A0D",
      frac12: "\xBD",
      frac13: "\u2153",
      frac14: "\xBC",
      frac15: "\u2155",
      frac16: "\u2159",
      frac18: "\u215B",
      frac23: "\u2154",
      frac25: "\u2156",
      frac34: "\xBE",
      frac35: "\u2157",
      frac38: "\u215C",
      frac45: "\u2158",
      frac56: "\u215A",
      frac58: "\u215D",
      frac78: "\u215E",
      frasl: "\u2044",
      frown: "\u2322",
      Fscr: "\u2131",
      fscr: "\u{1D4BB}",
      gacute: "\u01F5",
      Gamma: "\u0393",
      gamma: "\u03B3",
      Gammad: "\u03DC",
      gammad: "\u03DD",
      gap: "\u2A86",
      Gbreve: "\u011E",
      gbreve: "\u011F",
      Gcedil: "\u0122",
      Gcirc: "\u011C",
      gcirc: "\u011D",
      Gcy: "\u0413",
      gcy: "\u0433",
      Gdot: "\u0120",
      gdot: "\u0121",
      gE: "\u2267",
      ge: "\u2265",
      gEl: "\u2A8C",
      gel: "\u22DB",
      geq: "\u2265",
      geqq: "\u2267",
      geqslant: "\u2A7E",
      ges: "\u2A7E",
      gescc: "\u2AA9",
      gesdot: "\u2A80",
      gesdoto: "\u2A82",
      gesdotol: "\u2A84",
      gesl: "\u22DB\uFE00",
      gesles: "\u2A94",
      Gfr: "\u{1D50A}",
      gfr: "\u{1D524}",
      Gg: "\u22D9",
      gg: "\u226B",
      ggg: "\u22D9",
      gimel: "\u2137",
      GJcy: "\u0403",
      gjcy: "\u0453",
      gl: "\u2277",
      gla: "\u2AA5",
      glE: "\u2A92",
      glj: "\u2AA4",
      gnap: "\u2A8A",
      gnapprox: "\u2A8A",
      gnE: "\u2269",
      gne: "\u2A88",
      gneq: "\u2A88",
      gneqq: "\u2269",
      gnsim: "\u22E7",
      Gopf: "\u{1D53E}",
      gopf: "\u{1D558}",
      grave: "`",
      GreaterEqual: "\u2265",
      GreaterEqualLess: "\u22DB",
      GreaterFullEqual: "\u2267",
      GreaterGreater: "\u2AA2",
      GreaterLess: "\u2277",
      GreaterSlantEqual: "\u2A7E",
      GreaterTilde: "\u2273",
      Gscr: "\u{1D4A2}",
      gscr: "\u210A",
      gsim: "\u2273",
      gsime: "\u2A8E",
      gsiml: "\u2A90",
      Gt: "\u226B",
      GT: ">",
      gt: ">",
      gtcc: "\u2AA7",
      gtcir: "\u2A7A",
      gtdot: "\u22D7",
      gtlPar: "\u2995",
      gtquest: "\u2A7C",
      gtrapprox: "\u2A86",
      gtrarr: "\u2978",
      gtrdot: "\u22D7",
      gtreqless: "\u22DB",
      gtreqqless: "\u2A8C",
      gtrless: "\u2277",
      gtrsim: "\u2273",
      gvertneqq: "\u2269\uFE00",
      gvnE: "\u2269\uFE00",
      Hacek: "\u02C7",
      hairsp: "\u200A",
      half: "\xBD",
      hamilt: "\u210B",
      HARDcy: "\u042A",
      hardcy: "\u044A",
      hArr: "\u21D4",
      harr: "\u2194",
      harrcir: "\u2948",
      harrw: "\u21AD",
      Hat: "^",
      hbar: "\u210F",
      Hcirc: "\u0124",
      hcirc: "\u0125",
      hearts: "\u2665",
      heartsuit: "\u2665",
      hellip: "\u2026",
      hercon: "\u22B9",
      Hfr: "\u210C",
      hfr: "\u{1D525}",
      HilbertSpace: "\u210B",
      hksearow: "\u2925",
      hkswarow: "\u2926",
      hoarr: "\u21FF",
      homtht: "\u223B",
      hookleftarrow: "\u21A9",
      hookrightarrow: "\u21AA",
      Hopf: "\u210D",
      hopf: "\u{1D559}",
      horbar: "\u2015",
      HorizontalLine: "\u2500",
      Hscr: "\u210B",
      hscr: "\u{1D4BD}",
      hslash: "\u210F",
      Hstrok: "\u0126",
      hstrok: "\u0127",
      HumpDownHump: "\u224E",
      HumpEqual: "\u224F",
      hybull: "\u2043",
      hyphen: "\u2010",
      Iacute: "\xCD",
      iacute: "\xED",
      ic: "\u2063",
      Icirc: "\xCE",
      icirc: "\xEE",
      Icy: "\u0418",
      icy: "\u0438",
      Idot: "\u0130",
      IEcy: "\u0415",
      iecy: "\u0435",
      iexcl: "\xA1",
      iff: "\u21D4",
      Ifr: "\u2111",
      ifr: "\u{1D526}",
      Igrave: "\xCC",
      igrave: "\xEC",
      ii: "\u2148",
      iiiint: "\u2A0C",
      iiint: "\u222D",
      iinfin: "\u29DC",
      iiota: "\u2129",
      IJlig: "\u0132",
      ijlig: "\u0133",
      Im: "\u2111",
      Imacr: "\u012A",
      imacr: "\u012B",
      image: "\u2111",
      ImaginaryI: "\u2148",
      imagline: "\u2110",
      imagpart: "\u2111",
      imath: "\u0131",
      imof: "\u22B7",
      imped: "\u01B5",
      Implies: "\u21D2",
      in: "\u2208",
      incare: "\u2105",
      infin: "\u221E",
      infintie: "\u29DD",
      inodot: "\u0131",
      Int: "\u222C",
      int: "\u222B",
      intcal: "\u22BA",
      integers: "\u2124",
      Integral: "\u222B",
      intercal: "\u22BA",
      Intersection: "\u22C2",
      intlarhk: "\u2A17",
      intprod: "\u2A3C",
      InvisibleComma: "\u2063",
      InvisibleTimes: "\u2062",
      IOcy: "\u0401",
      iocy: "\u0451",
      Iogon: "\u012E",
      iogon: "\u012F",
      Iopf: "\u{1D540}",
      iopf: "\u{1D55A}",
      Iota: "\u0399",
      iota: "\u03B9",
      iprod: "\u2A3C",
      iquest: "\xBF",
      Iscr: "\u2110",
      iscr: "\u{1D4BE}",
      isin: "\u2208",
      isindot: "\u22F5",
      isinE: "\u22F9",
      isins: "\u22F4",
      isinsv: "\u22F3",
      isinv: "\u2208",
      it: "\u2062",
      Itilde: "\u0128",
      itilde: "\u0129",
      Iukcy: "\u0406",
      iukcy: "\u0456",
      Iuml: "\xCF",
      iuml: "\xEF",
      Jcirc: "\u0134",
      jcirc: "\u0135",
      Jcy: "\u0419",
      jcy: "\u0439",
      Jfr: "\u{1D50D}",
      jfr: "\u{1D527}",
      jmath: "\u0237",
      Jopf: "\u{1D541}",
      jopf: "\u{1D55B}",
      Jscr: "\u{1D4A5}",
      jscr: "\u{1D4BF}",
      Jsercy: "\u0408",
      jsercy: "\u0458",
      Jukcy: "\u0404",
      jukcy: "\u0454",
      Kappa: "\u039A",
      kappa: "\u03BA",
      kappav: "\u03F0",
      Kcedil: "\u0136",
      kcedil: "\u0137",
      Kcy: "\u041A",
      kcy: "\u043A",
      Kfr: "\u{1D50E}",
      kfr: "\u{1D528}",
      kgreen: "\u0138",
      KHcy: "\u0425",
      khcy: "\u0445",
      KJcy: "\u040C",
      kjcy: "\u045C",
      Kopf: "\u{1D542}",
      kopf: "\u{1D55C}",
      Kscr: "\u{1D4A6}",
      kscr: "\u{1D4C0}",
      lAarr: "\u21DA",
      Lacute: "\u0139",
      lacute: "\u013A",
      laemptyv: "\u29B4",
      lagran: "\u2112",
      Lambda: "\u039B",
      lambda: "\u03BB",
      Lang: "\u27EA",
      lang: "\u27E8",
      langd: "\u2991",
      langle: "\u27E8",
      lap: "\u2A85",
      Laplacetrf: "\u2112",
      laquo: "\xAB",
      Larr: "\u219E",
      lArr: "\u21D0",
      larr: "\u2190",
      larrb: "\u21E4",
      larrbfs: "\u291F",
      larrfs: "\u291D",
      larrhk: "\u21A9",
      larrlp: "\u21AB",
      larrpl: "\u2939",
      larrsim: "\u2973",
      larrtl: "\u21A2",
      lat: "\u2AAB",
      lAtail: "\u291B",
      latail: "\u2919",
      late: "\u2AAD",
      lates: "\u2AAD\uFE00",
      lBarr: "\u290E",
      lbarr: "\u290C",
      lbbrk: "\u2772",
      lbrace: "{",
      lbrack: "[",
      lbrke: "\u298B",
      lbrksld: "\u298F",
      lbrkslu: "\u298D",
      Lcaron: "\u013D",
      lcaron: "\u013E",
      Lcedil: "\u013B",
      lcedil: "\u013C",
      lceil: "\u2308",
      lcub: "{",
      Lcy: "\u041B",
      lcy: "\u043B",
      ldca: "\u2936",
      ldquo: "\u201C",
      ldquor: "\u201E",
      ldrdhar: "\u2967",
      ldrushar: "\u294B",
      ldsh: "\u21B2",
      lE: "\u2266",
      le: "\u2264",
      LeftAngleBracket: "\u27E8",
      LeftArrow: "\u2190",
      Leftarrow: "\u21D0",
      leftarrow: "\u2190",
      LeftArrowBar: "\u21E4",
      LeftArrowRightArrow: "\u21C6",
      leftarrowtail: "\u21A2",
      LeftCeiling: "\u2308",
      LeftDoubleBracket: "\u27E6",
      LeftDownTeeVector: "\u2961",
      LeftDownVector: "\u21C3",
      LeftDownVectorBar: "\u2959",
      LeftFloor: "\u230A",
      leftharpoondown: "\u21BD",
      leftharpoonup: "\u21BC",
      leftleftarrows: "\u21C7",
      LeftRightArrow: "\u2194",
      Leftrightarrow: "\u21D4",
      leftrightarrow: "\u2194",
      leftrightarrows: "\u21C6",
      leftrightharpoons: "\u21CB",
      leftrightsquigarrow: "\u21AD",
      LeftRightVector: "\u294E",
      LeftTee: "\u22A3",
      LeftTeeArrow: "\u21A4",
      LeftTeeVector: "\u295A",
      leftthreetimes: "\u22CB",
      LeftTriangle: "\u22B2",
      LeftTriangleBar: "\u29CF",
      LeftTriangleEqual: "\u22B4",
      LeftUpDownVector: "\u2951",
      LeftUpTeeVector: "\u2960",
      LeftUpVector: "\u21BF",
      LeftUpVectorBar: "\u2958",
      LeftVector: "\u21BC",
      LeftVectorBar: "\u2952",
      lEg: "\u2A8B",
      leg: "\u22DA",
      leq: "\u2264",
      leqq: "\u2266",
      leqslant: "\u2A7D",
      les: "\u2A7D",
      lescc: "\u2AA8",
      lesdot: "\u2A7F",
      lesdoto: "\u2A81",
      lesdotor: "\u2A83",
      lesg: "\u22DA\uFE00",
      lesges: "\u2A93",
      lessapprox: "\u2A85",
      lessdot: "\u22D6",
      lesseqgtr: "\u22DA",
      lesseqqgtr: "\u2A8B",
      LessEqualGreater: "\u22DA",
      LessFullEqual: "\u2266",
      LessGreater: "\u2276",
      lessgtr: "\u2276",
      LessLess: "\u2AA1",
      lesssim: "\u2272",
      LessSlantEqual: "\u2A7D",
      LessTilde: "\u2272",
      lfisht: "\u297C",
      lfloor: "\u230A",
      Lfr: "\u{1D50F}",
      lfr: "\u{1D529}",
      lg: "\u2276",
      lgE: "\u2A91",
      lHar: "\u2962",
      lhard: "\u21BD",
      lharu: "\u21BC",
      lharul: "\u296A",
      lhblk: "\u2584",
      LJcy: "\u0409",
      ljcy: "\u0459",
      Ll: "\u22D8",
      ll: "\u226A",
      llarr: "\u21C7",
      llcorner: "\u231E",
      Lleftarrow: "\u21DA",
      llhard: "\u296B",
      lltri: "\u25FA",
      Lmidot: "\u013F",
      lmidot: "\u0140",
      lmoust: "\u23B0",
      lmoustache: "\u23B0",
      lnap: "\u2A89",
      lnapprox: "\u2A89",
      lnE: "\u2268",
      lne: "\u2A87",
      lneq: "\u2A87",
      lneqq: "\u2268",
      lnsim: "\u22E6",
      loang: "\u27EC",
      loarr: "\u21FD",
      lobrk: "\u27E6",
      LongLeftArrow: "\u27F5",
      Longleftarrow: "\u27F8",
      longleftarrow: "\u27F5",
      LongLeftRightArrow: "\u27F7",
      Longleftrightarrow: "\u27FA",
      longleftrightarrow: "\u27F7",
      longmapsto: "\u27FC",
      LongRightArrow: "\u27F6",
      Longrightarrow: "\u27F9",
      longrightarrow: "\u27F6",
      looparrowleft: "\u21AB",
      looparrowright: "\u21AC",
      lopar: "\u2985",
      Lopf: "\u{1D543}",
      lopf: "\u{1D55D}",
      loplus: "\u2A2D",
      lotimes: "\u2A34",
      lowast: "\u2217",
      lowbar: "_",
      LowerLeftArrow: "\u2199",
      LowerRightArrow: "\u2198",
      loz: "\u25CA",
      lozenge: "\u25CA",
      lozf: "\u29EB",
      lpar: "(",
      lparlt: "\u2993",
      lrarr: "\u21C6",
      lrcorner: "\u231F",
      lrhar: "\u21CB",
      lrhard: "\u296D",
      lrm: "\u200E",
      lrtri: "\u22BF",
      lsaquo: "\u2039",
      Lscr: "\u2112",
      lscr: "\u{1D4C1}",
      Lsh: "\u21B0",
      lsh: "\u21B0",
      lsim: "\u2272",
      lsime: "\u2A8D",
      lsimg: "\u2A8F",
      lsqb: "[",
      lsquo: "\u2018",
      lsquor: "\u201A",
      Lstrok: "\u0141",
      lstrok: "\u0142",
      Lt: "\u226A",
      LT: "<",
      lt: "<",
      ltcc: "\u2AA6",
      ltcir: "\u2A79",
      ltdot: "\u22D6",
      lthree: "\u22CB",
      ltimes: "\u22C9",
      ltlarr: "\u2976",
      ltquest: "\u2A7B",
      ltri: "\u25C3",
      ltrie: "\u22B4",
      ltrif: "\u25C2",
      ltrPar: "\u2996",
      lurdshar: "\u294A",
      luruhar: "\u2966",
      lvertneqq: "\u2268\uFE00",
      lvnE: "\u2268\uFE00",
      macr: "\xAF",
      male: "\u2642",
      malt: "\u2720",
      maltese: "\u2720",
      Map: "\u2905",
      map: "\u21A6",
      mapsto: "\u21A6",
      mapstodown: "\u21A7",
      mapstoleft: "\u21A4",
      mapstoup: "\u21A5",
      marker: "\u25AE",
      mcomma: "\u2A29",
      Mcy: "\u041C",
      mcy: "\u043C",
      mdash: "\u2014",
      mDDot: "\u223A",
      measuredangle: "\u2221",
      MediumSpace: "\u205F",
      Mellintrf: "\u2133",
      Mfr: "\u{1D510}",
      mfr: "\u{1D52A}",
      mho: "\u2127",
      micro: "\xB5",
      mid: "\u2223",
      midast: "*",
      midcir: "\u2AF0",
      middot: "\xB7",
      minus: "\u2212",
      minusb: "\u229F",
      minusd: "\u2238",
      minusdu: "\u2A2A",
      MinusPlus: "\u2213",
      mlcp: "\u2ADB",
      mldr: "\u2026",
      mnplus: "\u2213",
      models: "\u22A7",
      Mopf: "\u{1D544}",
      mopf: "\u{1D55E}",
      mp: "\u2213",
      Mscr: "\u2133",
      mscr: "\u{1D4C2}",
      mstpos: "\u223E",
      Mu: "\u039C",
      mu: "\u03BC",
      multimap: "\u22B8",
      mumap: "\u22B8",
      nabla: "\u2207",
      Nacute: "\u0143",
      nacute: "\u0144",
      nang: "\u2220\u20D2",
      nap: "\u2249",
      napE: "\u2A70\u0338",
      napid: "\u224B\u0338",
      napos: "\u0149",
      napprox: "\u2249",
      natur: "\u266E",
      natural: "\u266E",
      naturals: "\u2115",
      nbsp: "\xA0",
      nbump: "\u224E\u0338",
      nbumpe: "\u224F\u0338",
      ncap: "\u2A43",
      Ncaron: "\u0147",
      ncaron: "\u0148",
      Ncedil: "\u0145",
      ncedil: "\u0146",
      ncong: "\u2247",
      ncongdot: "\u2A6D\u0338",
      ncup: "\u2A42",
      Ncy: "\u041D",
      ncy: "\u043D",
      ndash: "\u2013",
      ne: "\u2260",
      nearhk: "\u2924",
      neArr: "\u21D7",
      nearr: "\u2197",
      nearrow: "\u2197",
      nedot: "\u2250\u0338",
      NegativeMediumSpace: "\u200B",
      NegativeThickSpace: "\u200B",
      NegativeThinSpace: "\u200B",
      NegativeVeryThinSpace: "\u200B",
      nequiv: "\u2262",
      nesear: "\u2928",
      nesim: "\u2242\u0338",
      NestedGreaterGreater: "\u226B",
      NestedLessLess: "\u226A",
      NewLine: "\n",
      nexist: "\u2204",
      nexists: "\u2204",
      Nfr: "\u{1D511}",
      nfr: "\u{1D52B}",
      ngE: "\u2267\u0338",
      nge: "\u2271",
      ngeq: "\u2271",
      ngeqq: "\u2267\u0338",
      ngeqslant: "\u2A7E\u0338",
      nges: "\u2A7E\u0338",
      nGg: "\u22D9\u0338",
      ngsim: "\u2275",
      nGt: "\u226B\u20D2",
      ngt: "\u226F",
      ngtr: "\u226F",
      nGtv: "\u226B\u0338",
      nhArr: "\u21CE",
      nharr: "\u21AE",
      nhpar: "\u2AF2",
      ni: "\u220B",
      nis: "\u22FC",
      nisd: "\u22FA",
      niv: "\u220B",
      NJcy: "\u040A",
      njcy: "\u045A",
      nlArr: "\u21CD",
      nlarr: "\u219A",
      nldr: "\u2025",
      nlE: "\u2266\u0338",
      nle: "\u2270",
      nLeftarrow: "\u21CD",
      nleftarrow: "\u219A",
      nLeftrightarrow: "\u21CE",
      nleftrightarrow: "\u21AE",
      nleq: "\u2270",
      nleqq: "\u2266\u0338",
      nleqslant: "\u2A7D\u0338",
      nles: "\u2A7D\u0338",
      nless: "\u226E",
      nLl: "\u22D8\u0338",
      nlsim: "\u2274",
      nLt: "\u226A\u20D2",
      nlt: "\u226E",
      nltri: "\u22EA",
      nltrie: "\u22EC",
      nLtv: "\u226A\u0338",
      nmid: "\u2224",
      NoBreak: "\u2060",
      NonBreakingSpace: "\xA0",
      Nopf: "\u2115",
      nopf: "\u{1D55F}",
      Not: "\u2AEC",
      not: "\xAC",
      NotCongruent: "\u2262",
      NotCupCap: "\u226D",
      NotDoubleVerticalBar: "\u2226",
      NotElement: "\u2209",
      NotEqual: "\u2260",
      NotEqualTilde: "\u2242\u0338",
      NotExists: "\u2204",
      NotGreater: "\u226F",
      NotGreaterEqual: "\u2271",
      NotGreaterFullEqual: "\u2267\u0338",
      NotGreaterGreater: "\u226B\u0338",
      NotGreaterLess: "\u2279",
      NotGreaterSlantEqual: "\u2A7E\u0338",
      NotGreaterTilde: "\u2275",
      NotHumpDownHump: "\u224E\u0338",
      NotHumpEqual: "\u224F\u0338",
      notin: "\u2209",
      notindot: "\u22F5\u0338",
      notinE: "\u22F9\u0338",
      notinva: "\u2209",
      notinvb: "\u22F7",
      notinvc: "\u22F6",
      NotLeftTriangle: "\u22EA",
      NotLeftTriangleBar: "\u29CF\u0338",
      NotLeftTriangleEqual: "\u22EC",
      NotLess: "\u226E",
      NotLessEqual: "\u2270",
      NotLessGreater: "\u2278",
      NotLessLess: "\u226A\u0338",
      NotLessSlantEqual: "\u2A7D\u0338",
      NotLessTilde: "\u2274",
      NotNestedGreaterGreater: "\u2AA2\u0338",
      NotNestedLessLess: "\u2AA1\u0338",
      notni: "\u220C",
      notniva: "\u220C",
      notnivb: "\u22FE",
      notnivc: "\u22FD",
      NotPrecedes: "\u2280",
      NotPrecedesEqual: "\u2AAF\u0338",
      NotPrecedesSlantEqual: "\u22E0",
      NotReverseElement: "\u220C",
      NotRightTriangle: "\u22EB",
      NotRightTriangleBar: "\u29D0\u0338",
      NotRightTriangleEqual: "\u22ED",
      NotSquareSubset: "\u228F\u0338",
      NotSquareSubsetEqual: "\u22E2",
      NotSquareSuperset: "\u2290\u0338",
      NotSquareSupersetEqual: "\u22E3",
      NotSubset: "\u2282\u20D2",
      NotSubsetEqual: "\u2288",
      NotSucceeds: "\u2281",
      NotSucceedsEqual: "\u2AB0\u0338",
      NotSucceedsSlantEqual: "\u22E1",
      NotSucceedsTilde: "\u227F\u0338",
      NotSuperset: "\u2283\u20D2",
      NotSupersetEqual: "\u2289",
      NotTilde: "\u2241",
      NotTildeEqual: "\u2244",
      NotTildeFullEqual: "\u2247",
      NotTildeTilde: "\u2249",
      NotVerticalBar: "\u2224",
      npar: "\u2226",
      nparallel: "\u2226",
      nparsl: "\u2AFD\u20E5",
      npart: "\u2202\u0338",
      npolint: "\u2A14",
      npr: "\u2280",
      nprcue: "\u22E0",
      npre: "\u2AAF\u0338",
      nprec: "\u2280",
      npreceq: "\u2AAF\u0338",
      nrArr: "\u21CF",
      nrarr: "\u219B",
      nrarrc: "\u2933\u0338",
      nrarrw: "\u219D\u0338",
      nRightarrow: "\u21CF",
      nrightarrow: "\u219B",
      nrtri: "\u22EB",
      nrtrie: "\u22ED",
      nsc: "\u2281",
      nsccue: "\u22E1",
      nsce: "\u2AB0\u0338",
      Nscr: "\u{1D4A9}",
      nscr: "\u{1D4C3}",
      nshortmid: "\u2224",
      nshortparallel: "\u2226",
      nsim: "\u2241",
      nsime: "\u2244",
      nsimeq: "\u2244",
      nsmid: "\u2224",
      nspar: "\u2226",
      nsqsube: "\u22E2",
      nsqsupe: "\u22E3",
      nsub: "\u2284",
      nsubE: "\u2AC5\u0338",
      nsube: "\u2288",
      nsubset: "\u2282\u20D2",
      nsubseteq: "\u2288",
      nsubseteqq: "\u2AC5\u0338",
      nsucc: "\u2281",
      nsucceq: "\u2AB0\u0338",
      nsup: "\u2285",
      nsupE: "\u2AC6\u0338",
      nsupe: "\u2289",
      nsupset: "\u2283\u20D2",
      nsupseteq: "\u2289",
      nsupseteqq: "\u2AC6\u0338",
      ntgl: "\u2279",
      Ntilde: "\xD1",
      ntilde: "\xF1",
      ntlg: "\u2278",
      ntriangleleft: "\u22EA",
      ntrianglelefteq: "\u22EC",
      ntriangleright: "\u22EB",
      ntrianglerighteq: "\u22ED",
      Nu: "\u039D",
      nu: "\u03BD",
      num: "#",
      numero: "\u2116",
      numsp: "\u2007",
      nvap: "\u224D\u20D2",
      nVDash: "\u22AF",
      nVdash: "\u22AE",
      nvDash: "\u22AD",
      nvdash: "\u22AC",
      nvge: "\u2265\u20D2",
      nvgt: ">\u20D2",
      nvHarr: "\u2904",
      nvinfin: "\u29DE",
      nvlArr: "\u2902",
      nvle: "\u2264\u20D2",
      nvlt: "<\u20D2",
      nvltrie: "\u22B4\u20D2",
      nvrArr: "\u2903",
      nvrtrie: "\u22B5\u20D2",
      nvsim: "\u223C\u20D2",
      nwarhk: "\u2923",
      nwArr: "\u21D6",
      nwarr: "\u2196",
      nwarrow: "\u2196",
      nwnear: "\u2927",
      Oacute: "\xD3",
      oacute: "\xF3",
      oast: "\u229B",
      ocir: "\u229A",
      Ocirc: "\xD4",
      ocirc: "\xF4",
      Ocy: "\u041E",
      ocy: "\u043E",
      odash: "\u229D",
      Odblac: "\u0150",
      odblac: "\u0151",
      odiv: "\u2A38",
      odot: "\u2299",
      odsold: "\u29BC",
      OElig: "\u0152",
      oelig: "\u0153",
      ofcir: "\u29BF",
      Ofr: "\u{1D512}",
      ofr: "\u{1D52C}",
      ogon: "\u02DB",
      Ograve: "\xD2",
      ograve: "\xF2",
      ogt: "\u29C1",
      ohbar: "\u29B5",
      ohm: "\u03A9",
      oint: "\u222E",
      olarr: "\u21BA",
      olcir: "\u29BE",
      olcross: "\u29BB",
      oline: "\u203E",
      olt: "\u29C0",
      Omacr: "\u014C",
      omacr: "\u014D",
      Omega: "\u03A9",
      omega: "\u03C9",
      Omicron: "\u039F",
      omicron: "\u03BF",
      omid: "\u29B6",
      ominus: "\u2296",
      Oopf: "\u{1D546}",
      oopf: "\u{1D560}",
      opar: "\u29B7",
      OpenCurlyDoubleQuote: "\u201C",
      OpenCurlyQuote: "\u2018",
      operp: "\u29B9",
      oplus: "\u2295",
      Or: "\u2A54",
      or: "\u2228",
      orarr: "\u21BB",
      ord: "\u2A5D",
      order: "\u2134",
      orderof: "\u2134",
      ordf: "\xAA",
      ordm: "\xBA",
      origof: "\u22B6",
      oror: "\u2A56",
      orslope: "\u2A57",
      orv: "\u2A5B",
      oS: "\u24C8",
      Oscr: "\u{1D4AA}",
      oscr: "\u2134",
      Oslash: "\xD8",
      oslash: "\xF8",
      osol: "\u2298",
      Otilde: "\xD5",
      otilde: "\xF5",
      Otimes: "\u2A37",
      otimes: "\u2297",
      otimesas: "\u2A36",
      Ouml: "\xD6",
      ouml: "\xF6",
      ovbar: "\u233D",
      OverBar: "\u203E",
      OverBrace: "\u23DE",
      OverBracket: "\u23B4",
      OverParenthesis: "\u23DC",
      par: "\u2225",
      para: "\xB6",
      parallel: "\u2225",
      parsim: "\u2AF3",
      parsl: "\u2AFD",
      part: "\u2202",
      PartialD: "\u2202",
      Pcy: "\u041F",
      pcy: "\u043F",
      percnt: "%",
      period: ".",
      permil: "\u2030",
      perp: "\u22A5",
      pertenk: "\u2031",
      Pfr: "\u{1D513}",
      pfr: "\u{1D52D}",
      Phi: "\u03A6",
      phi: "\u03C6",
      phiv: "\u03D5",
      phmmat: "\u2133",
      phone: "\u260E",
      Pi: "\u03A0",
      pi: "\u03C0",
      pitchfork: "\u22D4",
      piv: "\u03D6",
      planck: "\u210F",
      planckh: "\u210E",
      plankv: "\u210F",
      plus: "+",
      plusacir: "\u2A23",
      plusb: "\u229E",
      pluscir: "\u2A22",
      plusdo: "\u2214",
      plusdu: "\u2A25",
      pluse: "\u2A72",
      PlusMinus: "\xB1",
      plusmn: "\xB1",
      plussim: "\u2A26",
      plustwo: "\u2A27",
      pm: "\xB1",
      Poincareplane: "\u210C",
      pointint: "\u2A15",
      Popf: "\u2119",
      popf: "\u{1D561}",
      pound: "\xA3",
      Pr: "\u2ABB",
      pr: "\u227A",
      prap: "\u2AB7",
      prcue: "\u227C",
      prE: "\u2AB3",
      pre: "\u2AAF",
      prec: "\u227A",
      precapprox: "\u2AB7",
      preccurlyeq: "\u227C",
      Precedes: "\u227A",
      PrecedesEqual: "\u2AAF",
      PrecedesSlantEqual: "\u227C",
      PrecedesTilde: "\u227E",
      preceq: "\u2AAF",
      precnapprox: "\u2AB9",
      precneqq: "\u2AB5",
      precnsim: "\u22E8",
      precsim: "\u227E",
      Prime: "\u2033",
      prime: "\u2032",
      primes: "\u2119",
      prnap: "\u2AB9",
      prnE: "\u2AB5",
      prnsim: "\u22E8",
      prod: "\u220F",
      Product: "\u220F",
      profalar: "\u232E",
      profline: "\u2312",
      profsurf: "\u2313",
      prop: "\u221D",
      Proportion: "\u2237",
      Proportional: "\u221D",
      propto: "\u221D",
      prsim: "\u227E",
      prurel: "\u22B0",
      Pscr: "\u{1D4AB}",
      pscr: "\u{1D4C5}",
      Psi: "\u03A8",
      psi: "\u03C8",
      puncsp: "\u2008",
      Qfr: "\u{1D514}",
      qfr: "\u{1D52E}",
      qint: "\u2A0C",
      Qopf: "\u211A",
      qopf: "\u{1D562}",
      qprime: "\u2057",
      Qscr: "\u{1D4AC}",
      qscr: "\u{1D4C6}",
      quaternions: "\u210D",
      quatint: "\u2A16",
      quest: "?",
      questeq: "\u225F",
      QUOT: '"',
      quot: '"',
      rAarr: "\u21DB",
      race: "\u223D\u0331",
      Racute: "\u0154",
      racute: "\u0155",
      radic: "\u221A",
      raemptyv: "\u29B3",
      Rang: "\u27EB",
      rang: "\u27E9",
      rangd: "\u2992",
      range: "\u29A5",
      rangle: "\u27E9",
      raquo: "\xBB",
      Rarr: "\u21A0",
      rArr: "\u21D2",
      rarr: "\u2192",
      rarrap: "\u2975",
      rarrb: "\u21E5",
      rarrbfs: "\u2920",
      rarrc: "\u2933",
      rarrfs: "\u291E",
      rarrhk: "\u21AA",
      rarrlp: "\u21AC",
      rarrpl: "\u2945",
      rarrsim: "\u2974",
      Rarrtl: "\u2916",
      rarrtl: "\u21A3",
      rarrw: "\u219D",
      rAtail: "\u291C",
      ratail: "\u291A",
      ratio: "\u2236",
      rationals: "\u211A",
      RBarr: "\u2910",
      rBarr: "\u290F",
      rbarr: "\u290D",
      rbbrk: "\u2773",
      rbrace: "}",
      rbrack: "]",
      rbrke: "\u298C",
      rbrksld: "\u298E",
      rbrkslu: "\u2990",
      Rcaron: "\u0158",
      rcaron: "\u0159",
      Rcedil: "\u0156",
      rcedil: "\u0157",
      rceil: "\u2309",
      rcub: "}",
      Rcy: "\u0420",
      rcy: "\u0440",
      rdca: "\u2937",
      rdldhar: "\u2969",
      rdquo: "\u201D",
      rdquor: "\u201D",
      rdsh: "\u21B3",
      Re: "\u211C",
      real: "\u211C",
      realine: "\u211B",
      realpart: "\u211C",
      reals: "\u211D",
      rect: "\u25AD",
      REG: "\xAE",
      reg: "\xAE",
      ReverseElement: "\u220B",
      ReverseEquilibrium: "\u21CB",
      ReverseUpEquilibrium: "\u296F",
      rfisht: "\u297D",
      rfloor: "\u230B",
      Rfr: "\u211C",
      rfr: "\u{1D52F}",
      rHar: "\u2964",
      rhard: "\u21C1",
      rharu: "\u21C0",
      rharul: "\u296C",
      Rho: "\u03A1",
      rho: "\u03C1",
      rhov: "\u03F1",
      RightAngleBracket: "\u27E9",
      RightArrow: "\u2192",
      Rightarrow: "\u21D2",
      rightarrow: "\u2192",
      RightArrowBar: "\u21E5",
      RightArrowLeftArrow: "\u21C4",
      rightarrowtail: "\u21A3",
      RightCeiling: "\u2309",
      RightDoubleBracket: "\u27E7",
      RightDownTeeVector: "\u295D",
      RightDownVector: "\u21C2",
      RightDownVectorBar: "\u2955",
      RightFloor: "\u230B",
      rightharpoondown: "\u21C1",
      rightharpoonup: "\u21C0",
      rightleftarrows: "\u21C4",
      rightleftharpoons: "\u21CC",
      rightrightarrows: "\u21C9",
      rightsquigarrow: "\u219D",
      RightTee: "\u22A2",
      RightTeeArrow: "\u21A6",
      RightTeeVector: "\u295B",
      rightthreetimes: "\u22CC",
      RightTriangle: "\u22B3",
      RightTriangleBar: "\u29D0",
      RightTriangleEqual: "\u22B5",
      RightUpDownVector: "\u294F",
      RightUpTeeVector: "\u295C",
      RightUpVector: "\u21BE",
      RightUpVectorBar: "\u2954",
      RightVector: "\u21C0",
      RightVectorBar: "\u2953",
      ring: "\u02DA",
      risingdotseq: "\u2253",
      rlarr: "\u21C4",
      rlhar: "\u21CC",
      rlm: "\u200F",
      rmoust: "\u23B1",
      rmoustache: "\u23B1",
      rnmid: "\u2AEE",
      roang: "\u27ED",
      roarr: "\u21FE",
      robrk: "\u27E7",
      ropar: "\u2986",
      Ropf: "\u211D",
      ropf: "\u{1D563}",
      roplus: "\u2A2E",
      rotimes: "\u2A35",
      RoundImplies: "\u2970",
      rpar: ")",
      rpargt: "\u2994",
      rppolint: "\u2A12",
      rrarr: "\u21C9",
      Rrightarrow: "\u21DB",
      rsaquo: "\u203A",
      Rscr: "\u211B",
      rscr: "\u{1D4C7}",
      Rsh: "\u21B1",
      rsh: "\u21B1",
      rsqb: "]",
      rsquo: "\u2019",
      rsquor: "\u2019",
      rthree: "\u22CC",
      rtimes: "\u22CA",
      rtri: "\u25B9",
      rtrie: "\u22B5",
      rtrif: "\u25B8",
      rtriltri: "\u29CE",
      RuleDelayed: "\u29F4",
      ruluhar: "\u2968",
      rx: "\u211E",
      Sacute: "\u015A",
      sacute: "\u015B",
      sbquo: "\u201A",
      Sc: "\u2ABC",
      sc: "\u227B",
      scap: "\u2AB8",
      Scaron: "\u0160",
      scaron: "\u0161",
      sccue: "\u227D",
      scE: "\u2AB4",
      sce: "\u2AB0",
      Scedil: "\u015E",
      scedil: "\u015F",
      Scirc: "\u015C",
      scirc: "\u015D",
      scnap: "\u2ABA",
      scnE: "\u2AB6",
      scnsim: "\u22E9",
      scpolint: "\u2A13",
      scsim: "\u227F",
      Scy: "\u0421",
      scy: "\u0441",
      sdot: "\u22C5",
      sdotb: "\u22A1",
      sdote: "\u2A66",
      searhk: "\u2925",
      seArr: "\u21D8",
      searr: "\u2198",
      searrow: "\u2198",
      sect: "\xA7",
      semi: ";",
      seswar: "\u2929",
      setminus: "\u2216",
      setmn: "\u2216",
      sext: "\u2736",
      Sfr: "\u{1D516}",
      sfr: "\u{1D530}",
      sfrown: "\u2322",
      sharp: "\u266F",
      SHCHcy: "\u0429",
      shchcy: "\u0449",
      SHcy: "\u0428",
      shcy: "\u0448",
      ShortDownArrow: "\u2193",
      ShortLeftArrow: "\u2190",
      shortmid: "\u2223",
      shortparallel: "\u2225",
      ShortRightArrow: "\u2192",
      ShortUpArrow: "\u2191",
      shy: "\xAD",
      Sigma: "\u03A3",
      sigma: "\u03C3",
      sigmaf: "\u03C2",
      sigmav: "\u03C2",
      sim: "\u223C",
      simdot: "\u2A6A",
      sime: "\u2243",
      simeq: "\u2243",
      simg: "\u2A9E",
      simgE: "\u2AA0",
      siml: "\u2A9D",
      simlE: "\u2A9F",
      simne: "\u2246",
      simplus: "\u2A24",
      simrarr: "\u2972",
      slarr: "\u2190",
      SmallCircle: "\u2218",
      smallsetminus: "\u2216",
      smashp: "\u2A33",
      smeparsl: "\u29E4",
      smid: "\u2223",
      smile: "\u2323",
      smt: "\u2AAA",
      smte: "\u2AAC",
      smtes: "\u2AAC\uFE00",
      SOFTcy: "\u042C",
      softcy: "\u044C",
      sol: "/",
      solb: "\u29C4",
      solbar: "\u233F",
      Sopf: "\u{1D54A}",
      sopf: "\u{1D564}",
      spades: "\u2660",
      spadesuit: "\u2660",
      spar: "\u2225",
      sqcap: "\u2293",
      sqcaps: "\u2293\uFE00",
      sqcup: "\u2294",
      sqcups: "\u2294\uFE00",
      Sqrt: "\u221A",
      sqsub: "\u228F",
      sqsube: "\u2291",
      sqsubset: "\u228F",
      sqsubseteq: "\u2291",
      sqsup: "\u2290",
      sqsupe: "\u2292",
      sqsupset: "\u2290",
      sqsupseteq: "\u2292",
      squ: "\u25A1",
      Square: "\u25A1",
      square: "\u25A1",
      SquareIntersection: "\u2293",
      SquareSubset: "\u228F",
      SquareSubsetEqual: "\u2291",
      SquareSuperset: "\u2290",
      SquareSupersetEqual: "\u2292",
      SquareUnion: "\u2294",
      squarf: "\u25AA",
      squf: "\u25AA",
      srarr: "\u2192",
      Sscr: "\u{1D4AE}",
      sscr: "\u{1D4C8}",
      ssetmn: "\u2216",
      ssmile: "\u2323",
      sstarf: "\u22C6",
      Star: "\u22C6",
      star: "\u2606",
      starf: "\u2605",
      straightepsilon: "\u03F5",
      straightphi: "\u03D5",
      strns: "\xAF",
      Sub: "\u22D0",
      sub: "\u2282",
      subdot: "\u2ABD",
      subE: "\u2AC5",
      sube: "\u2286",
      subedot: "\u2AC3",
      submult: "\u2AC1",
      subnE: "\u2ACB",
      subne: "\u228A",
      subplus: "\u2ABF",
      subrarr: "\u2979",
      Subset: "\u22D0",
      subset: "\u2282",
      subseteq: "\u2286",
      subseteqq: "\u2AC5",
      SubsetEqual: "\u2286",
      subsetneq: "\u228A",
      subsetneqq: "\u2ACB",
      subsim: "\u2AC7",
      subsub: "\u2AD5",
      subsup: "\u2AD3",
      succ: "\u227B",
      succapprox: "\u2AB8",
      succcurlyeq: "\u227D",
      Succeeds: "\u227B",
      SucceedsEqual: "\u2AB0",
      SucceedsSlantEqual: "\u227D",
      SucceedsTilde: "\u227F",
      succeq: "\u2AB0",
      succnapprox: "\u2ABA",
      succneqq: "\u2AB6",
      succnsim: "\u22E9",
      succsim: "\u227F",
      SuchThat: "\u220B",
      Sum: "\u2211",
      sum: "\u2211",
      sung: "\u266A",
      Sup: "\u22D1",
      sup: "\u2283",
      sup1: "\xB9",
      sup2: "\xB2",
      sup3: "\xB3",
      supdot: "\u2ABE",
      supdsub: "\u2AD8",
      supE: "\u2AC6",
      supe: "\u2287",
      supedot: "\u2AC4",
      Superset: "\u2283",
      SupersetEqual: "\u2287",
      suphsol: "\u27C9",
      suphsub: "\u2AD7",
      suplarr: "\u297B",
      supmult: "\u2AC2",
      supnE: "\u2ACC",
      supne: "\u228B",
      supplus: "\u2AC0",
      Supset: "\u22D1",
      supset: "\u2283",
      supseteq: "\u2287",
      supseteqq: "\u2AC6",
      supsetneq: "\u228B",
      supsetneqq: "\u2ACC",
      supsim: "\u2AC8",
      supsub: "\u2AD4",
      supsup: "\u2AD6",
      swarhk: "\u2926",
      swArr: "\u21D9",
      swarr: "\u2199",
      swarrow: "\u2199",
      swnwar: "\u292A",
      szlig: "\xDF",
      Tab: "	",
      target: "\u2316",
      Tau: "\u03A4",
      tau: "\u03C4",
      tbrk: "\u23B4",
      Tcaron: "\u0164",
      tcaron: "\u0165",
      Tcedil: "\u0162",
      tcedil: "\u0163",
      Tcy: "\u0422",
      tcy: "\u0442",
      tdot: "\u20DB",
      telrec: "\u2315",
      Tfr: "\u{1D517}",
      tfr: "\u{1D531}",
      there4: "\u2234",
      Therefore: "\u2234",
      therefore: "\u2234",
      Theta: "\u0398",
      theta: "\u03B8",
      thetasym: "\u03D1",
      thetav: "\u03D1",
      thickapprox: "\u2248",
      thicksim: "\u223C",
      ThickSpace: "\u205F\u200A",
      thinsp: "\u2009",
      ThinSpace: "\u2009",
      thkap: "\u2248",
      thksim: "\u223C",
      THORN: "\xDE",
      thorn: "\xFE",
      Tilde: "\u223C",
      tilde: "\u02DC",
      TildeEqual: "\u2243",
      TildeFullEqual: "\u2245",
      TildeTilde: "\u2248",
      times: "\xD7",
      timesb: "\u22A0",
      timesbar: "\u2A31",
      timesd: "\u2A30",
      tint: "\u222D",
      toea: "\u2928",
      top: "\u22A4",
      topbot: "\u2336",
      topcir: "\u2AF1",
      Topf: "\u{1D54B}",
      topf: "\u{1D565}",
      topfork: "\u2ADA",
      tosa: "\u2929",
      tprime: "\u2034",
      TRADE: "\u2122",
      trade: "\u2122",
      triangle: "\u25B5",
      triangledown: "\u25BF",
      triangleleft: "\u25C3",
      trianglelefteq: "\u22B4",
      triangleq: "\u225C",
      triangleright: "\u25B9",
      trianglerighteq: "\u22B5",
      tridot: "\u25EC",
      trie: "\u225C",
      triminus: "\u2A3A",
      TripleDot: "\u20DB",
      triplus: "\u2A39",
      trisb: "\u29CD",
      tritime: "\u2A3B",
      trpezium: "\u23E2",
      Tscr: "\u{1D4AF}",
      tscr: "\u{1D4C9}",
      TScy: "\u0426",
      tscy: "\u0446",
      TSHcy: "\u040B",
      tshcy: "\u045B",
      Tstrok: "\u0166",
      tstrok: "\u0167",
      twixt: "\u226C",
      twoheadleftarrow: "\u219E",
      twoheadrightarrow: "\u21A0",
      Uacute: "\xDA",
      uacute: "\xFA",
      Uarr: "\u219F",
      uArr: "\u21D1",
      uarr: "\u2191",
      Uarrocir: "\u2949",
      Ubrcy: "\u040E",
      ubrcy: "\u045E",
      Ubreve: "\u016C",
      ubreve: "\u016D",
      Ucirc: "\xDB",
      ucirc: "\xFB",
      Ucy: "\u0423",
      ucy: "\u0443",
      udarr: "\u21C5",
      Udblac: "\u0170",
      udblac: "\u0171",
      udhar: "\u296E",
      ufisht: "\u297E",
      Ufr: "\u{1D518}",
      ufr: "\u{1D532}",
      Ugrave: "\xD9",
      ugrave: "\xF9",
      uHar: "\u2963",
      uharl: "\u21BF",
      uharr: "\u21BE",
      uhblk: "\u2580",
      ulcorn: "\u231C",
      ulcorner: "\u231C",
      ulcrop: "\u230F",
      ultri: "\u25F8",
      Umacr: "\u016A",
      umacr: "\u016B",
      uml: "\xA8",
      UnderBar: "_",
      UnderBrace: "\u23DF",
      UnderBracket: "\u23B5",
      UnderParenthesis: "\u23DD",
      Union: "\u22C3",
      UnionPlus: "\u228E",
      Uogon: "\u0172",
      uogon: "\u0173",
      Uopf: "\u{1D54C}",
      uopf: "\u{1D566}",
      UpArrow: "\u2191",
      Uparrow: "\u21D1",
      uparrow: "\u2191",
      UpArrowBar: "\u2912",
      UpArrowDownArrow: "\u21C5",
      UpDownArrow: "\u2195",
      Updownarrow: "\u21D5",
      updownarrow: "\u2195",
      UpEquilibrium: "\u296E",
      upharpoonleft: "\u21BF",
      upharpoonright: "\u21BE",
      uplus: "\u228E",
      UpperLeftArrow: "\u2196",
      UpperRightArrow: "\u2197",
      Upsi: "\u03D2",
      upsi: "\u03C5",
      upsih: "\u03D2",
      Upsilon: "\u03A5",
      upsilon: "\u03C5",
      UpTee: "\u22A5",
      UpTeeArrow: "\u21A5",
      upuparrows: "\u21C8",
      urcorn: "\u231D",
      urcorner: "\u231D",
      urcrop: "\u230E",
      Uring: "\u016E",
      uring: "\u016F",
      urtri: "\u25F9",
      Uscr: "\u{1D4B0}",
      uscr: "\u{1D4CA}",
      utdot: "\u22F0",
      Utilde: "\u0168",
      utilde: "\u0169",
      utri: "\u25B5",
      utrif: "\u25B4",
      uuarr: "\u21C8",
      Uuml: "\xDC",
      uuml: "\xFC",
      uwangle: "\u29A7",
      vangrt: "\u299C",
      varepsilon: "\u03F5",
      varkappa: "\u03F0",
      varnothing: "\u2205",
      varphi: "\u03D5",
      varpi: "\u03D6",
      varpropto: "\u221D",
      vArr: "\u21D5",
      varr: "\u2195",
      varrho: "\u03F1",
      varsigma: "\u03C2",
      varsubsetneq: "\u228A\uFE00",
      varsubsetneqq: "\u2ACB\uFE00",
      varsupsetneq: "\u228B\uFE00",
      varsupsetneqq: "\u2ACC\uFE00",
      vartheta: "\u03D1",
      vartriangleleft: "\u22B2",
      vartriangleright: "\u22B3",
      Vbar: "\u2AEB",
      vBar: "\u2AE8",
      vBarv: "\u2AE9",
      Vcy: "\u0412",
      vcy: "\u0432",
      VDash: "\u22AB",
      Vdash: "\u22A9",
      vDash: "\u22A8",
      vdash: "\u22A2",
      Vdashl: "\u2AE6",
      Vee: "\u22C1",
      vee: "\u2228",
      veebar: "\u22BB",
      veeeq: "\u225A",
      vellip: "\u22EE",
      Verbar: "\u2016",
      verbar: "|",
      Vert: "\u2016",
      vert: "|",
      VerticalBar: "\u2223",
      VerticalLine: "|",
      VerticalSeparator: "\u2758",
      VerticalTilde: "\u2240",
      VeryThinSpace: "\u200A",
      Vfr: "\u{1D519}",
      vfr: "\u{1D533}",
      vltri: "\u22B2",
      vnsub: "\u2282\u20D2",
      vnsup: "\u2283\u20D2",
      Vopf: "\u{1D54D}",
      vopf: "\u{1D567}",
      vprop: "\u221D",
      vrtri: "\u22B3",
      Vscr: "\u{1D4B1}",
      vscr: "\u{1D4CB}",
      vsubnE: "\u2ACB\uFE00",
      vsubne: "\u228A\uFE00",
      vsupnE: "\u2ACC\uFE00",
      vsupne: "\u228B\uFE00",
      Vvdash: "\u22AA",
      vzigzag: "\u299A",
      Wcirc: "\u0174",
      wcirc: "\u0175",
      wedbar: "\u2A5F",
      Wedge: "\u22C0",
      wedge: "\u2227",
      wedgeq: "\u2259",
      weierp: "\u2118",
      Wfr: "\u{1D51A}",
      wfr: "\u{1D534}",
      Wopf: "\u{1D54E}",
      wopf: "\u{1D568}",
      wp: "\u2118",
      wr: "\u2240",
      wreath: "\u2240",
      Wscr: "\u{1D4B2}",
      wscr: "\u{1D4CC}",
      xcap: "\u22C2",
      xcirc: "\u25EF",
      xcup: "\u22C3",
      xdtri: "\u25BD",
      Xfr: "\u{1D51B}",
      xfr: "\u{1D535}",
      xhArr: "\u27FA",
      xharr: "\u27F7",
      Xi: "\u039E",
      xi: "\u03BE",
      xlArr: "\u27F8",
      xlarr: "\u27F5",
      xmap: "\u27FC",
      xnis: "\u22FB",
      xodot: "\u2A00",
      Xopf: "\u{1D54F}",
      xopf: "\u{1D569}",
      xoplus: "\u2A01",
      xotime: "\u2A02",
      xrArr: "\u27F9",
      xrarr: "\u27F6",
      Xscr: "\u{1D4B3}",
      xscr: "\u{1D4CD}",
      xsqcup: "\u2A06",
      xuplus: "\u2A04",
      xutri: "\u25B3",
      xvee: "\u22C1",
      xwedge: "\u22C0",
      Yacute: "\xDD",
      yacute: "\xFD",
      YAcy: "\u042F",
      yacy: "\u044F",
      Ycirc: "\u0176",
      ycirc: "\u0177",
      Ycy: "\u042B",
      ycy: "\u044B",
      yen: "\xA5",
      Yfr: "\u{1D51C}",
      yfr: "\u{1D536}",
      YIcy: "\u0407",
      yicy: "\u0457",
      Yopf: "\u{1D550}",
      yopf: "\u{1D56A}",
      Yscr: "\u{1D4B4}",
      yscr: "\u{1D4CE}",
      YUcy: "\u042E",
      yucy: "\u044E",
      Yuml: "\u0178",
      yuml: "\xFF",
      Zacute: "\u0179",
      zacute: "\u017A",
      Zcaron: "\u017D",
      zcaron: "\u017E",
      Zcy: "\u0417",
      zcy: "\u0437",
      Zdot: "\u017B",
      zdot: "\u017C",
      zeetrf: "\u2128",
      ZeroWidthSpace: "\u200B",
      Zeta: "\u0396",
      zeta: "\u03B6",
      Zfr: "\u2128",
      zfr: "\u{1D537}",
      ZHcy: "\u0416",
      zhcy: "\u0436",
      zigrarr: "\u21DD",
      Zopf: "\u2124",
      zopf: "\u{1D56B}",
      Zscr: "\u{1D4B5}",
      zscr: "\u{1D4CF}",
      zwj: "\u200D",
      zwnj: "\u200C"
    });
    exports.entityMap = exports.HTML_ENTITIES;
  }
});

// node_modules/@xmldom/xmldom/lib/sax.js
var require_sax = __commonJS({
  "node_modules/@xmldom/xmldom/lib/sax.js"(exports) {
    "use strict";
    var conventions = require_conventions();
    var g = require_grammar();
    var errors = require_errors();
    var isHTMLEscapableRawTextElement = conventions.isHTMLEscapableRawTextElement;
    var isHTMLMimeType = conventions.isHTMLMimeType;
    var isHTMLRawTextElement = conventions.isHTMLRawTextElement;
    var hasOwn = conventions.hasOwn;
    var NAMESPACE = conventions.NAMESPACE;
    var ParseError = errors.ParseError;
    var DOMException = errors.DOMException;
    var S_TAG = 0;
    var S_ATTR = 1;
    var S_ATTR_SPACE = 2;
    var S_EQ = 3;
    var S_ATTR_NOQUOT_VALUE = 4;
    var S_ATTR_END = 5;
    var S_TAG_SPACE = 6;
    var S_TAG_CLOSE = 7;
    function XMLReader() {
    }
    XMLReader.prototype = {
      parse: function(source, defaultNSMap, entityMap) {
        var domBuilder = this.domBuilder;
        domBuilder.startDocument();
        _copy(defaultNSMap, defaultNSMap = /* @__PURE__ */ Object.create(null));
        parse(source, defaultNSMap, entityMap, domBuilder, this.errorHandler);
        domBuilder.endDocument();
      }
    };
    var ENTITY_REG = /&#?\w+;?/g;
    function parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
      var isHTML = isHTMLMimeType(domBuilder.mimeType);
      if (source.indexOf(g.UNICODE_REPLACEMENT_CHARACTER) >= 0) {
        errorHandler.warning("Unicode replacement character detected, source encoding issues?");
      }
      function fixedFromCharCode(code) {
        if (code > 65535) {
          code -= 65536;
          var surrogate1 = 55296 + (code >> 10), surrogate2 = 56320 + (code & 1023);
          return String.fromCharCode(surrogate1, surrogate2);
        } else {
          return String.fromCharCode(code);
        }
      }
      function entityReplacer(a2) {
        var complete = a2[a2.length - 1] === ";" ? a2 : a2 + ";";
        if (!isHTML && complete !== a2) {
          errorHandler.error("EntityRef: expecting ;");
          return a2;
        }
        var match = g.Reference.exec(complete);
        if (!match || match[0].length !== complete.length) {
          errorHandler.error("entity not matching Reference production: " + a2);
          return a2;
        }
        var k = complete.slice(1, -1);
        if (hasOwn(entityMap, k)) {
          return entityMap[k];
        } else if (k.charAt(0) === "#") {
          return fixedFromCharCode(parseInt(k.substring(1).replace("x", "0x")));
        } else {
          errorHandler.error("entity not found:" + a2);
          return a2;
        }
      }
      function appendText(end2) {
        if (end2 > start) {
          var xt = source.substring(start, end2).replace(ENTITY_REG, entityReplacer);
          locator && position(start);
          domBuilder.characters(xt, 0, end2 - start);
          start = end2;
        }
      }
      var lineStart = 0;
      var lineEnd = 0;
      var linePattern = /\r\n?|\n|$/g;
      var locator = domBuilder.locator;
      function position(p, m) {
        while (p >= lineEnd && (m = linePattern.exec(source))) {
          lineStart = lineEnd;
          lineEnd = m.index + m[0].length;
          locator.lineNumber++;
        }
        locator.columnNumber = p - lineStart + 1;
      }
      var parseStack = [{ currentNSMap: defaultNSMapCopy }];
      var unclosedTags = [];
      var start = 0;
      while (true) {
        try {
          var tagStart = source.indexOf("<", start);
          if (tagStart < 0) {
            if (!isHTML && unclosedTags.length > 0) {
              return errorHandler.fatalError("unclosed xml tag(s): " + unclosedTags.join(", "));
            }
            if (!source.substring(start).match(/^\s*$/)) {
              var doc = domBuilder.doc;
              var text = doc.createTextNode(source.substring(start));
              if (doc.documentElement) {
                return errorHandler.error("Extra content at the end of the document");
              }
              doc.appendChild(text);
              domBuilder.currentElement = text;
            }
            return;
          }
          if (tagStart > start) {
            var fromSource = source.substring(start, tagStart);
            if (!isHTML && unclosedTags.length === 0) {
              fromSource = fromSource.replace(new RegExp(g.S_OPT.source, "g"), "");
              fromSource && errorHandler.error("Unexpected content outside root element: '" + fromSource + "'");
            }
            appendText(tagStart);
          }
          switch (source.charAt(tagStart + 1)) {
            case "/":
              var end = source.indexOf(">", tagStart + 2);
              var tagNameRaw = source.substring(tagStart + 2, end > 0 ? end : void 0);
              if (!tagNameRaw) {
                return errorHandler.fatalError("end tag name missing");
              }
              var tagNameMatch = end > 0 && g.reg("^", g.QName_group, g.S_OPT, "$").exec(tagNameRaw);
              if (!tagNameMatch) {
                return errorHandler.fatalError('end tag name contains invalid characters: "' + tagNameRaw + '"');
              }
              if (!domBuilder.currentElement && !domBuilder.doc.documentElement) {
                return;
              }
              var currentTagName = unclosedTags[unclosedTags.length - 1] || domBuilder.currentElement.tagName || domBuilder.doc.documentElement.tagName || "";
              if (currentTagName !== tagNameMatch[1]) {
                var tagNameLower = tagNameMatch[1].toLowerCase();
                if (!isHTML || currentTagName.toLowerCase() !== tagNameLower) {
                  return errorHandler.fatalError('Opening and ending tag mismatch: "' + currentTagName + '" != "' + tagNameRaw + '"');
                }
              }
              var config = parseStack.pop();
              unclosedTags.pop();
              var localNSMap = config.localNSMap;
              domBuilder.endElement(config.uri, config.localName, currentTagName);
              if (localNSMap) {
                for (var prefix in localNSMap) {
                  if (hasOwn(localNSMap, prefix)) {
                    domBuilder.endPrefixMapping(prefix);
                  }
                }
              }
              end++;
              break;
            // end element
            case "?":
              locator && position(tagStart);
              end = parseProcessingInstruction(source, tagStart, domBuilder, errorHandler);
              break;
            case "!":
              locator && position(tagStart);
              end = parseDoctypeCommentOrCData(source, tagStart, domBuilder, errorHandler, isHTML);
              break;
            default:
              locator && position(tagStart);
              var el = new ElementAttributes();
              var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
              var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler, isHTML);
              var len = el.length;
              if (!el.closed) {
                if (isHTML && conventions.isHTMLVoidElement(el.tagName)) {
                  el.closed = true;
                } else {
                  unclosedTags.push(el.tagName);
                }
              }
              if (locator && len) {
                var locator2 = copyLocator(locator, {});
                for (var i = 0; i < len; i++) {
                  var a = el[i];
                  position(a.offset);
                  a.locator = copyLocator(locator, {});
                }
                domBuilder.locator = locator2;
                if (appendElement(el, domBuilder, currentNSMap)) {
                  parseStack.push(el);
                }
                domBuilder.locator = locator;
              } else {
                if (appendElement(el, domBuilder, currentNSMap)) {
                  parseStack.push(el);
                }
              }
              if (isHTML && !el.closed) {
                end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
              } else {
                end++;
              }
          }
        } catch (e) {
          if (e instanceof ParseError) {
            throw e;
          } else if (e instanceof DOMException) {
            throw new ParseError(e.name + ": " + e.message, domBuilder.locator, e);
          }
          errorHandler.error("element parse error: " + e);
          end = -1;
        }
        if (end > start) {
          start = end;
        } else {
          appendText(Math.max(tagStart, start) + 1);
        }
      }
    }
    function copyLocator(f, t) {
      t.lineNumber = f.lineNumber;
      t.columnNumber = f.columnNumber;
      return t;
    }
    function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler, isHTML) {
      function addAttribute(qname, value2, startIndex) {
        if (hasOwn(el.attributeNames, qname)) {
          return errorHandler.fatalError("Attribute " + qname + " redefined");
        }
        if (!isHTML && value2.indexOf("<") >= 0) {
          return errorHandler.fatalError("Unescaped '<' not allowed in attributes values");
        }
        el.addValue(
          qname,
          // @see https://www.w3.org/TR/xml/#AVNormalize
          // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
          // - recursive replacement of (DTD) entity references
          // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
          value2.replace(/[\t\n\r]/g, " ").replace(ENTITY_REG, entityReplacer),
          startIndex
        );
      }
      var attrName;
      var value;
      var p = ++start;
      var s = S_TAG;
      while (true) {
        var c = source.charAt(p);
        switch (c) {
          case "=":
            if (s === S_ATTR) {
              attrName = source.slice(start, p);
              s = S_EQ;
            } else if (s === S_ATTR_SPACE) {
              s = S_EQ;
            } else {
              throw new Error("attribute equal must after attrName");
            }
            break;
          case "'":
          case '"':
            if (s === S_EQ || s === S_ATTR) {
              if (s === S_ATTR) {
                errorHandler.warning('attribute value must after "="');
                attrName = source.slice(start, p);
              }
              start = p + 1;
              p = source.indexOf(c, start);
              if (p > 0) {
                value = source.slice(start, p);
                addAttribute(attrName, value, start - 1);
                s = S_ATTR_END;
              } else {
                throw new Error("attribute value no end '" + c + "' match");
              }
            } else if (s == S_ATTR_NOQUOT_VALUE) {
              value = source.slice(start, p);
              addAttribute(attrName, value, start);
              errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ")!!");
              start = p + 1;
              s = S_ATTR_END;
            } else {
              throw new Error('attribute value must after "="');
            }
            break;
          case "/":
            switch (s) {
              case S_TAG:
                el.setTagName(source.slice(start, p));
              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                s = S_TAG_CLOSE;
                el.closed = true;
              case S_ATTR_NOQUOT_VALUE:
              case S_ATTR:
                break;
              case S_ATTR_SPACE:
                el.closed = true;
                break;
              //case S_EQ:
              default:
                throw new Error("attribute invalid close char('/')");
            }
            break;
          case "":
            errorHandler.error("unexpected end of input");
            if (s == S_TAG) {
              el.setTagName(source.slice(start, p));
            }
            return p;
          case ">":
            switch (s) {
              case S_TAG:
                el.setTagName(source.slice(start, p));
              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                break;
              //normal
              case S_ATTR_NOQUOT_VALUE:
              //Compatible state
              case S_ATTR:
                value = source.slice(start, p);
                if (value.slice(-1) === "/") {
                  el.closed = true;
                  value = value.slice(0, -1);
                }
              case S_ATTR_SPACE:
                if (s === S_ATTR_SPACE) {
                  value = attrName;
                }
                if (s == S_ATTR_NOQUOT_VALUE) {
                  errorHandler.warning('attribute "' + value + '" missed quot(")!');
                  addAttribute(attrName, value, start);
                } else {
                  if (!isHTML) {
                    errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
                  }
                  addAttribute(value, value, start);
                }
                break;
              case S_EQ:
                if (!isHTML) {
                  return errorHandler.fatalError(`AttValue: ' or " expected`);
                }
            }
            return p;
          /*xml space '\x20' | #x9 | #xD | #xA; */
          case "\x80":
            c = " ";
          default:
            if (c <= " ") {
              switch (s) {
                case S_TAG:
                  el.setTagName(source.slice(start, p));
                  s = S_TAG_SPACE;
                  break;
                case S_ATTR:
                  attrName = source.slice(start, p);
                  s = S_ATTR_SPACE;
                  break;
                case S_ATTR_NOQUOT_VALUE:
                  var value = source.slice(start, p);
                  errorHandler.warning('attribute "' + value + '" missed quot(")!!');
                  addAttribute(attrName, value, start);
                case S_ATTR_END:
                  s = S_TAG_SPACE;
                  break;
              }
            } else {
              switch (s) {
                //case S_TAG:void();break;
                //case S_ATTR:void();break;
                //case S_ATTR_NOQUOT_VALUE:void();break;
                case S_ATTR_SPACE:
                  if (!isHTML) {
                    errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
                  }
                  addAttribute(attrName, attrName, start);
                  start = p;
                  s = S_ATTR;
                  break;
                case S_ATTR_END:
                  errorHandler.warning('attribute space is required"' + attrName + '"!!');
                case S_TAG_SPACE:
                  s = S_ATTR;
                  start = p;
                  break;
                case S_EQ:
                  s = S_ATTR_NOQUOT_VALUE;
                  start = p;
                  break;
                case S_TAG_CLOSE:
                  throw new Error("elements closed character '/' and '>' must be connected to");
              }
            }
        }
        p++;
      }
    }
    function appendElement(el, domBuilder, currentNSMap) {
      var tagName = el.tagName;
      var localNSMap = null;
      var i = el.length;
      while (i--) {
        var a = el[i];
        var qName = a.qName;
        var value = a.value;
        var nsp = qName.indexOf(":");
        if (nsp > 0) {
          var prefix = a.prefix = qName.slice(0, nsp);
          var localName = qName.slice(nsp + 1);
          var nsPrefix = prefix === "xmlns" && localName;
        } else {
          localName = qName;
          prefix = null;
          nsPrefix = qName === "xmlns" && "";
        }
        a.localName = localName;
        if (nsPrefix !== false) {
          if (localNSMap == null) {
            localNSMap = /* @__PURE__ */ Object.create(null);
            _copy(currentNSMap, currentNSMap = /* @__PURE__ */ Object.create(null));
          }
          currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
          a.uri = NAMESPACE.XMLNS;
          domBuilder.startPrefixMapping(nsPrefix, value);
        }
      }
      var i = el.length;
      while (i--) {
        a = el[i];
        if (a.prefix) {
          if (a.prefix === "xml") {
            a.uri = NAMESPACE.XML;
          }
          if (a.prefix !== "xmlns") {
            a.uri = currentNSMap[a.prefix];
          }
        }
      }
      var nsp = tagName.indexOf(":");
      if (nsp > 0) {
        prefix = el.prefix = tagName.slice(0, nsp);
        localName = el.localName = tagName.slice(nsp + 1);
      } else {
        prefix = null;
        localName = el.localName = tagName;
      }
      var ns = el.uri = currentNSMap[prefix || ""];
      domBuilder.startElement(ns, localName, tagName, el);
      if (el.closed) {
        domBuilder.endElement(ns, localName, tagName);
        if (localNSMap) {
          for (prefix in localNSMap) {
            if (hasOwn(localNSMap, prefix)) {
              domBuilder.endPrefixMapping(prefix);
            }
          }
        }
      } else {
        el.currentNSMap = currentNSMap;
        el.localNSMap = localNSMap;
        return true;
      }
    }
    function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
      var isEscapableRaw = isHTMLEscapableRawTextElement(tagName);
      if (isEscapableRaw || isHTMLRawTextElement(tagName)) {
        var elEndStart = source.indexOf("</" + tagName + ">", elStartEnd);
        var text = source.substring(elStartEnd + 1, elEndStart);
        if (isEscapableRaw) {
          text = text.replace(ENTITY_REG, entityReplacer);
        }
        domBuilder.characters(text, 0, text.length);
        return elEndStart;
      }
      return elStartEnd + 1;
    }
    function _copy(source, target) {
      for (var n in source) {
        if (hasOwn(source, n)) {
          target[n] = source[n];
        }
      }
    }
    function parseUtils(source, start) {
      var index = start;
      function char(n) {
        n = n || 0;
        return source.charAt(index + n);
      }
      function skip(n) {
        n = n || 1;
        index += n;
      }
      function skipBlanks() {
        var blanks = 0;
        while (index < source.length) {
          var c = char();
          if (c !== " " && c !== "\n" && c !== "	" && c !== "\r") {
            return blanks;
          }
          blanks++;
          skip();
        }
        return -1;
      }
      function substringFromIndex() {
        return source.substring(index);
      }
      function substringStartsWith(text) {
        return source.substring(index, index + text.length) === text;
      }
      function substringStartsWithCaseInsensitive(text) {
        return source.substring(index, index + text.length).toUpperCase() === text.toUpperCase();
      }
      function getMatch(args) {
        var expr = g.reg("^", args);
        var match = expr.exec(substringFromIndex());
        if (match) {
          skip(match[0].length);
          return match[0];
        }
        return null;
      }
      return {
        char,
        getIndex: function() {
          return index;
        },
        getMatch,
        getSource: function() {
          return source;
        },
        skip,
        skipBlanks,
        substringFromIndex,
        substringStartsWith,
        substringStartsWithCaseInsensitive
      };
    }
    function parseDoctypeInternalSubset(p, errorHandler) {
      function parsePI(p2, errorHandler2) {
        var match = g.PI.exec(p2.substringFromIndex());
        if (!match) {
          return errorHandler2.fatalError("processing instruction is not well-formed at position " + p2.getIndex());
        }
        if (match[1].toLowerCase() === "xml") {
          return errorHandler2.fatalError(
            "xml declaration is only allowed at the start of the document, but found at position " + p2.getIndex()
          );
        }
        p2.skip(match[0].length);
        return match[0];
      }
      var source = p.getSource();
      if (p.char() === "[") {
        p.skip(1);
        var intSubsetStart = p.getIndex();
        while (p.getIndex() < source.length) {
          p.skipBlanks();
          if (p.char() === "]") {
            var internalSubset = source.substring(intSubsetStart, p.getIndex());
            p.skip(1);
            return internalSubset;
          }
          var current = null;
          if (p.char() === "<" && p.char(1) === "!") {
            switch (p.char(2)) {
              case "E":
                if (p.char(3) === "L") {
                  current = p.getMatch(g.elementdecl);
                } else if (p.char(3) === "N") {
                  current = p.getMatch(g.EntityDecl);
                }
                break;
              case "A":
                current = p.getMatch(g.AttlistDecl);
                break;
              case "N":
                current = p.getMatch(g.NotationDecl);
                break;
              case "-":
                current = p.getMatch(g.Comment);
                break;
            }
          } else if (p.char() === "<" && p.char(1) === "?") {
            current = parsePI(p, errorHandler);
          } else if (p.char() === "%") {
            current = p.getMatch(g.PEReference);
          } else {
            return errorHandler.fatalError("Error detected in Markup declaration");
          }
          if (!current) {
            return errorHandler.fatalError("Error in internal subset at position " + p.getIndex());
          }
        }
        return errorHandler.fatalError("doctype internal subset is not well-formed, missing ]");
      }
    }
    function parseDoctypeCommentOrCData(source, start, domBuilder, errorHandler, isHTML) {
      var p = parseUtils(source, start);
      switch (isHTML ? p.char(2).toUpperCase() : p.char(2)) {
        case "-":
          var comment = p.getMatch(g.Comment);
          if (comment) {
            domBuilder.comment(comment, g.COMMENT_START.length, comment.length - g.COMMENT_START.length - g.COMMENT_END.length);
            return p.getIndex();
          } else {
            return errorHandler.fatalError("comment is not well-formed at position " + p.getIndex());
          }
        case "[":
          var cdata = p.getMatch(g.CDSect);
          if (cdata) {
            if (!isHTML && !domBuilder.currentElement) {
              return errorHandler.fatalError("CDATA outside of element");
            }
            domBuilder.startCDATA();
            domBuilder.characters(cdata, g.CDATA_START.length, cdata.length - g.CDATA_START.length - g.CDATA_END.length);
            domBuilder.endCDATA();
            return p.getIndex();
          } else {
            return errorHandler.fatalError("Invalid CDATA starting at position " + start);
          }
        case "D": {
          if (domBuilder.doc && domBuilder.doc.documentElement) {
            return errorHandler.fatalError("Doctype not allowed inside or after documentElement at position " + p.getIndex());
          }
          if (isHTML ? !p.substringStartsWithCaseInsensitive(g.DOCTYPE_DECL_START) : !p.substringStartsWith(g.DOCTYPE_DECL_START)) {
            return errorHandler.fatalError("Expected " + g.DOCTYPE_DECL_START + " at position " + p.getIndex());
          }
          p.skip(g.DOCTYPE_DECL_START.length);
          if (p.skipBlanks() < 1) {
            return errorHandler.fatalError("Expected whitespace after " + g.DOCTYPE_DECL_START + " at position " + p.getIndex());
          }
          var doctype = {
            name: void 0,
            publicId: void 0,
            systemId: void 0,
            internalSubset: void 0
          };
          doctype.name = p.getMatch(g.Name);
          if (!doctype.name)
            return errorHandler.fatalError("doctype name missing or contains unexpected characters at position " + p.getIndex());
          if (isHTML && doctype.name.toLowerCase() !== "html") {
            errorHandler.warning("Unexpected DOCTYPE in HTML document at position " + p.getIndex());
          }
          p.skipBlanks();
          if (p.substringStartsWith(g.PUBLIC) || p.substringStartsWith(g.SYSTEM)) {
            var match = g.ExternalID_match.exec(p.substringFromIndex());
            if (!match) {
              return errorHandler.fatalError("doctype external id is not well-formed at position " + p.getIndex());
            }
            if (match.groups.SystemLiteralOnly !== void 0) {
              doctype.systemId = match.groups.SystemLiteralOnly;
            } else {
              doctype.systemId = match.groups.SystemLiteral;
              doctype.publicId = match.groups.PubidLiteral;
            }
            p.skip(match[0].length);
          } else if (isHTML && p.substringStartsWithCaseInsensitive(g.SYSTEM)) {
            p.skip(g.SYSTEM.length);
            if (p.skipBlanks() < 1) {
              return errorHandler.fatalError("Expected whitespace after " + g.SYSTEM + " at position " + p.getIndex());
            }
            doctype.systemId = p.getMatch(g.ABOUT_LEGACY_COMPAT_SystemLiteral);
            if (!doctype.systemId) {
              return errorHandler.fatalError(
                "Expected " + g.ABOUT_LEGACY_COMPAT + " in single or double quotes after " + g.SYSTEM + " at position " + p.getIndex()
              );
            }
          }
          if (isHTML && doctype.systemId && !g.ABOUT_LEGACY_COMPAT_SystemLiteral.test(doctype.systemId)) {
            errorHandler.warning("Unexpected doctype.systemId in HTML document at position " + p.getIndex());
          }
          if (!isHTML) {
            p.skipBlanks();
            doctype.internalSubset = parseDoctypeInternalSubset(p, errorHandler);
          }
          p.skipBlanks();
          if (p.char() !== ">") {
            return errorHandler.fatalError("doctype not terminated with > at position " + p.getIndex());
          }
          p.skip(1);
          domBuilder.startDTD(doctype.name, doctype.publicId, doctype.systemId, doctype.internalSubset);
          domBuilder.endDTD();
          return p.getIndex();
        }
        default:
          return errorHandler.fatalError('Not well-formed XML starting with "<!" at position ' + start);
      }
    }
    function parseProcessingInstruction(source, start, domBuilder, errorHandler) {
      var match = source.substring(start).match(g.PI);
      if (!match) {
        return errorHandler.fatalError("Invalid processing instruction starting at position " + start);
      }
      if (match[1].toLowerCase() === "xml") {
        if (start > 0) {
          return errorHandler.fatalError(
            "processing instruction at position " + start + " is an xml declaration which is only at the start of the document"
          );
        }
        if (!g.XMLDecl.test(source.substring(start))) {
          return errorHandler.fatalError("xml declaration is not well-formed");
        }
      }
      domBuilder.processingInstruction(match[1], match[2]);
      return start + match[0].length;
    }
    function ElementAttributes() {
      this.attributeNames = /* @__PURE__ */ Object.create(null);
    }
    ElementAttributes.prototype = {
      setTagName: function(tagName) {
        if (!g.QName_exact.test(tagName)) {
          throw new Error("invalid tagName:" + tagName);
        }
        this.tagName = tagName;
      },
      addValue: function(qName, value, offset) {
        if (!g.QName_exact.test(qName)) {
          throw new Error("invalid attribute:" + qName);
        }
        this.attributeNames[qName] = this.length;
        this[this.length++] = { qName, value, offset };
      },
      length: 0,
      getLocalName: function(i) {
        return this[i].localName;
      },
      getLocator: function(i) {
        return this[i].locator;
      },
      getQName: function(i) {
        return this[i].qName;
      },
      getURI: function(i) {
        return this[i].uri;
      },
      getValue: function(i) {
        return this[i].value;
      }
      //	,getIndex:function(uri, localName)){
      //		if(localName){
      //
      //		}else{
      //			var qName = uri
      //		}
      //	},
      //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
      //	getType:function(uri,localName){}
      //	getType:function(i){},
    };
    exports.XMLReader = XMLReader;
    exports.parseUtils = parseUtils;
    exports.parseDoctypeCommentOrCData = parseDoctypeCommentOrCData;
  }
});

// node_modules/@xmldom/xmldom/lib/dom-parser.js
var require_dom_parser = __commonJS({
  "node_modules/@xmldom/xmldom/lib/dom-parser.js"(exports) {
    "use strict";
    var conventions = require_conventions();
    var dom = require_dom();
    var errors = require_errors();
    var entities = require_entities();
    var sax = require_sax();
    var DOMImplementation = dom.DOMImplementation;
    var hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
    var isHTMLMimeType = conventions.isHTMLMimeType;
    var isValidMimeType = conventions.isValidMimeType;
    var MIME_TYPE = conventions.MIME_TYPE;
    var NAMESPACE = conventions.NAMESPACE;
    var ParseError = errors.ParseError;
    var XMLReader = sax.XMLReader;
    function normalizeLineEndings(input) {
      return input.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028\u2029]/g, "\n");
    }
    function DOMParser(options) {
      options = options || {};
      if (options.locator === void 0) {
        options.locator = true;
      }
      this.assign = options.assign || conventions.assign;
      this.domHandler = options.domHandler || DOMHandler;
      this.onError = options.onError || options.errorHandler;
      if (options.errorHandler && typeof options.errorHandler !== "function") {
        throw new TypeError("errorHandler object is no longer supported, switch to onError!");
      } else if (options.errorHandler) {
        options.errorHandler("warning", "The `errorHandler` option has been deprecated, use `onError` instead!", this);
      }
      this.normalizeLineEndings = options.normalizeLineEndings || normalizeLineEndings;
      this.locator = !!options.locator;
      this.xmlns = this.assign(/* @__PURE__ */ Object.create(null), options.xmlns);
    }
    DOMParser.prototype.parseFromString = function(source, mimeType) {
      if (!isValidMimeType(mimeType)) {
        throw new TypeError('DOMParser.parseFromString: the provided mimeType "' + mimeType + '" is not valid.');
      }
      var defaultNSMap = this.assign(/* @__PURE__ */ Object.create(null), this.xmlns);
      var entityMap = entities.XML_ENTITIES;
      var defaultNamespace = defaultNSMap[""] || null;
      if (hasDefaultHTMLNamespace(mimeType)) {
        entityMap = entities.HTML_ENTITIES;
        defaultNamespace = NAMESPACE.HTML;
      } else if (mimeType === MIME_TYPE.XML_SVG_IMAGE) {
        defaultNamespace = NAMESPACE.SVG;
      }
      defaultNSMap[""] = defaultNamespace;
      defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
      var domBuilder = new this.domHandler({
        mimeType,
        defaultNamespace,
        onError: this.onError
      });
      var locator = this.locator ? {} : void 0;
      if (this.locator) {
        domBuilder.setDocumentLocator(locator);
      }
      var sax2 = new XMLReader();
      sax2.errorHandler = domBuilder;
      sax2.domBuilder = domBuilder;
      var isXml = !conventions.isHTMLMimeType(mimeType);
      if (isXml && typeof source !== "string") {
        sax2.errorHandler.fatalError("source is not a string");
      }
      sax2.parse(this.normalizeLineEndings(String(source)), defaultNSMap, entityMap);
      if (!domBuilder.doc.documentElement) {
        sax2.errorHandler.fatalError("missing root element");
      }
      return domBuilder.doc;
    };
    function DOMHandler(options) {
      var opt = options || {};
      this.mimeType = opt.mimeType || MIME_TYPE.XML_APPLICATION;
      this.defaultNamespace = opt.defaultNamespace || null;
      this.cdata = false;
      this.currentElement = void 0;
      this.doc = void 0;
      this.locator = void 0;
      this.onError = opt.onError;
    }
    function position(locator, node) {
      node.lineNumber = locator.lineNumber;
      node.columnNumber = locator.columnNumber;
    }
    DOMHandler.prototype = {
      /**
       * Either creates an XML or an HTML document and stores it under `this.doc`.
       * If it is an XML document, `this.defaultNamespace` is used to create it,
       * and it will not contain any `childNodes`.
       * If it is an HTML document, it will be created without any `childNodes`.
       *
       * @see http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
       */
      startDocument: function() {
        var impl = new DOMImplementation();
        this.doc = isHTMLMimeType(this.mimeType) ? impl.createHTMLDocument(false) : impl.createDocument(this.defaultNamespace, "");
      },
      startElement: function(namespaceURI, localName, qName, attrs) {
        var doc = this.doc;
        var el = doc.createElementNS(namespaceURI, qName || localName);
        var len = attrs.length;
        appendElement(this, el);
        this.currentElement = el;
        this.locator && position(this.locator, el);
        for (var i = 0; i < len; i++) {
          var namespaceURI = attrs.getURI(i);
          var value = attrs.getValue(i);
          var qName = attrs.getQName(i);
          var attr = doc.createAttributeNS(namespaceURI, qName);
          this.locator && position(attrs.getLocator(i), attr);
          attr.value = attr.nodeValue = value;
          el.setAttributeNode(attr);
        }
      },
      endElement: function(namespaceURI, localName, qName) {
        this.currentElement = this.currentElement.parentNode;
      },
      startPrefixMapping: function(prefix, uri) {
      },
      endPrefixMapping: function(prefix) {
      },
      processingInstruction: function(target, data) {
        var ins = this.doc.createProcessingInstruction(target, data);
        this.locator && position(this.locator, ins);
        appendElement(this, ins);
      },
      ignorableWhitespace: function(ch, start, length) {
      },
      characters: function(chars, start, length) {
        chars = _toString.apply(this, arguments);
        if (chars) {
          if (this.cdata) {
            var charNode = this.doc.createCDATASection(chars);
          } else {
            var charNode = this.doc.createTextNode(chars);
          }
          if (this.currentElement) {
            this.currentElement.appendChild(charNode);
          } else if (/^\s*$/.test(chars)) {
            this.doc.appendChild(charNode);
          }
          this.locator && position(this.locator, charNode);
        }
      },
      skippedEntity: function(name) {
      },
      endDocument: function() {
        this.doc.normalize();
      },
      /**
       * Stores the locator to be able to set the `columnNumber` and `lineNumber`
       * on the created DOM nodes.
       *
       * @param {Locator} locator
       */
      setDocumentLocator: function(locator) {
        if (locator) {
          locator.lineNumber = 0;
        }
        this.locator = locator;
      },
      //LexicalHandler
      comment: function(chars, start, length) {
        chars = _toString.apply(this, arguments);
        var comm = this.doc.createComment(chars);
        this.locator && position(this.locator, comm);
        appendElement(this, comm);
      },
      startCDATA: function() {
        this.cdata = true;
      },
      endCDATA: function() {
        this.cdata = false;
      },
      startDTD: function(name, publicId, systemId, internalSubset) {
        var impl = this.doc.implementation;
        if (impl && impl.createDocumentType) {
          var dt = impl.createDocumentType(name, publicId, systemId, internalSubset);
          this.locator && position(this.locator, dt);
          appendElement(this, dt);
          this.doc.doctype = dt;
        }
      },
      reportError: function(level, message) {
        if (typeof this.onError === "function") {
          try {
            this.onError(level, message, this);
          } catch (e) {
            throw new ParseError("Reporting " + level + ' "' + message + '" caused ' + e, this.locator);
          }
        } else {
          console.error("[xmldom " + level + "]	" + message, _locator(this.locator));
        }
      },
      /**
       * @see http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
       */
      warning: function(message) {
        this.reportError("warning", message);
      },
      error: function(message) {
        this.reportError("error", message);
      },
      /**
       * This function reports a fatal error and throws a ParseError.
       *
       * @param {string} message
       * - The message to be used for reporting and throwing the error.
       * @returns {never}
       * This function always throws an error and never returns a value.
       * @throws {ParseError}
       * Always throws a ParseError with the provided message.
       */
      fatalError: function(message) {
        this.reportError("fatalError", message);
        throw new ParseError(message, this.locator);
      }
    };
    function _locator(l) {
      if (l) {
        return "\n@#[line:" + l.lineNumber + ",col:" + l.columnNumber + "]";
      }
    }
    function _toString(chars, start, length) {
      if (typeof chars == "string") {
        return chars.substr(start, length);
      } else {
        if (chars.length >= start + length || start) {
          return new java.lang.String(chars, start, length) + "";
        }
        return chars;
      }
    }
    "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(
      /\w+/g,
      function(key) {
        DOMHandler.prototype[key] = function() {
          return null;
        };
      }
    );
    function appendElement(handler, node) {
      if (!handler.currentElement) {
        handler.doc.appendChild(node);
      } else {
        handler.currentElement.appendChild(node);
      }
    }
    function onErrorStopParsing(level) {
      if (level === "error") throw "onErrorStopParsing";
    }
    function onWarningStopParsing() {
      throw "onWarningStopParsing";
    }
    exports.__DOMHandler = DOMHandler;
    exports.DOMParser = DOMParser;
    exports.normalizeLineEndings = normalizeLineEndings;
    exports.onErrorStopParsing = onErrorStopParsing;
    exports.onWarningStopParsing = onWarningStopParsing;
  }
});

// node_modules/@xmldom/xmldom/lib/index.js
var require_lib = __commonJS({
  "node_modules/@xmldom/xmldom/lib/index.js"(exports) {
    "use strict";
    var conventions = require_conventions();
    exports.assign = conventions.assign;
    exports.hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
    exports.isHTMLMimeType = conventions.isHTMLMimeType;
    exports.isValidMimeType = conventions.isValidMimeType;
    exports.MIME_TYPE = conventions.MIME_TYPE;
    exports.NAMESPACE = conventions.NAMESPACE;
    var errors = require_errors();
    exports.DOMException = errors.DOMException;
    exports.DOMExceptionName = errors.DOMExceptionName;
    exports.ExceptionCode = errors.ExceptionCode;
    exports.ParseError = errors.ParseError;
    var dom = require_dom();
    exports.Attr = dom.Attr;
    exports.CDATASection = dom.CDATASection;
    exports.CharacterData = dom.CharacterData;
    exports.Comment = dom.Comment;
    exports.Document = dom.Document;
    exports.DocumentFragment = dom.DocumentFragment;
    exports.DocumentType = dom.DocumentType;
    exports.DOMImplementation = dom.DOMImplementation;
    exports.Element = dom.Element;
    exports.Entity = dom.Entity;
    exports.EntityReference = dom.EntityReference;
    exports.LiveNodeList = dom.LiveNodeList;
    exports.NamedNodeMap = dom.NamedNodeMap;
    exports.Node = dom.Node;
    exports.NodeList = dom.NodeList;
    exports.Notation = dom.Notation;
    exports.ProcessingInstruction = dom.ProcessingInstruction;
    exports.Text = dom.Text;
    exports.XMLSerializer = dom.XMLSerializer;
    var domParser = require_dom_parser();
    exports.DOMParser = domParser.DOMParser;
    exports.normalizeLineEndings = domParser.normalizeLineEndings;
    exports.onErrorStopParsing = domParser.onErrorStopParsing;
    exports.onWarningStopParsing = domParser.onWarningStopParsing;
  }
});

// bundle/.tmp/miku-docx2md-bundle-entry.mjs
var import_xmldom = __toESM(require_lib(), 1);
import { Blob as NodeBlob } from "node:buffer";
import { createRequire } from "node:module";
import { DecompressionStream as NodeDecompressionStream } from "node:stream/web";
import fs from "node:fs/promises";
import path from "node:path";
var nodeRequire = createRequire(import.meta.url);
var DOCX2MD_EMBEDDED_CORE_SOURCES = [{ "path": "dist/js/module-registry.js", "source": "/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    var _a;\n    function createModuleRegistry() {\n        const modules = new Map();\n        return {\n            registerModule(name, moduleApi) {\n                modules.set(name, moduleApi);\n            },\n            getModule(name) {\n                var _a;\n                return ((_a = modules.get(name)) !== null && _a !== void 0 ? _a : null);\n            }\n        };\n    }\n    const globalObject = globalThis;\n    (_a = globalObject.__docx2mdModuleRegistry) !== null && _a !== void 0 ? _a : (globalObject.__docx2mdModuleRegistry = createModuleRegistry());\n    globalObject.getDocx2mdModuleRegistry = function getDocx2mdModuleRegistry() {\n        return globalObject.__docx2mdModuleRegistry;\n    };\n})();\n" }, { "path": "dist/js/ms-office-core.js", "source": 'var __mikuMsOfficeCoreRelease = (() => {\n  var __defProp = Object.defineProperty;\n  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;\n  var __getOwnPropNames = Object.getOwnPropertyNames;\n  var __hasOwnProp = Object.prototype.hasOwnProperty;\n  var __export = (target, all) => {\n    for (var name in all)\n      __defProp(target, name, { get: all[name], enumerable: true });\n  };\n  var __copyProps = (to, from, except, desc) => {\n    if (from && typeof from === "object" || typeof from === "function") {\n      for (let key of __getOwnPropNames(from))\n        if (!__hasOwnProp.call(to, key) && key !== except)\n          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n    }\n    return to;\n  };\n  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n  var stdin_exports = {};\n  __export(stdin_exports, {\n    asBytes: () => asBytes,\n    buildOpcContentTypesXml: () => buildOpcContentTypesXml,\n    buildOpcRelationshipsPath: () => buildOpcRelationshipsPath,\n    buildOpcRelationshipsXml: () => buildOpcRelationshipsXml,\n    compareOpcPartPaths: () => compareOpcPartPaths,\n    concatBytes: () => concatBytes,\n    createDiagnostic: () => createDiagnostic,\n    decodeXmlEntities: () => decodeXmlEntities,\n    escapeXmlAttribute: () => escapeXmlAttribute,\n    escapeXmlText: () => escapeXmlText,\n    getDefaultZipEntryTimestamp: () => getDefaultZipEntryTimestamp,\n    getZipEntry: () => getZipEntry,\n    getZipTextEntry: () => getZipTextEntry,\n    listOfficeMediaParts: () => listOfficeMediaParts,\n    normalizeOpcPartPath: () => normalizeOpcPartPath,\n    parseOpcContentTypesXml: () => parseOpcContentTypesXml,\n    parseOpcRelationshipsXml: () => parseOpcRelationshipsXml,\n    parseXmlAttributes: () => parseXmlAttributes,\n    readOfficePackage: () => readOfficePackage,\n    readOfficePackageAsync: () => readOfficePackageAsync,\n    readOfficePartRelationships: () => readOfficePartRelationships,\n    readUint16: () => readUint16,\n    readUint32: () => readUint32,\n    readZipPackage: () => readZipPackage,\n    readZipPackageAsync: () => readZipPackageAsync,\n    relationshipArrayToMap: () => relationshipArrayToMap,\n    resolveOpcContentType: () => resolveOpcContentType,\n    resolveOpcRelationshipTarget: () => resolveOpcRelationshipTarget,\n    resolveOpcRelationships: () => resolveOpcRelationships,\n    sanitizeXmlText: () => sanitizeXmlText,\n    textDecoder: () => textDecoder,\n    textEncoder: () => textEncoder,\n    upsertZipEntry: () => upsertZipEntry,\n    writeUint16: () => writeUint16,\n    writeUint32: () => writeUint32,\n    writeZipPackage: () => writeZipPackage\n  });\n  var textEncoder = new TextEncoder();\n  var textDecoder = new TextDecoder();\n  function readUint16(data, offset) {\n    return data[offset] | data[offset + 1] << 8;\n  }\n  function readUint32(data, offset) {\n    return (data[offset] | data[offset + 1] << 8 | data[offset + 2] << 16 | data[offset + 3] << 24) >>> 0;\n  }\n  function writeUint16(buffer, offset, value) {\n    buffer[offset] = value & 255;\n    buffer[offset + 1] = value >>> 8 & 255;\n  }\n  function writeUint32(buffer, offset, value) {\n    buffer[offset] = value & 255;\n    buffer[offset + 1] = value >>> 8 & 255;\n    buffer[offset + 2] = value >>> 16 & 255;\n    buffer[offset + 3] = value >>> 24 & 255;\n  }\n  function concatBytes(parts) {\n    const total = parts.reduce((sum, part) => sum + part.length, 0);\n    const output = new Uint8Array(total);\n    let offset = 0;\n    for (const part of parts) {\n      output.set(part, offset);\n      offset += part.length;\n    }\n    return output;\n  }\n  function asBytes(data) {\n    return typeof data === "string" ? textEncoder.encode(data) : data;\n  }\n  function createDiagnostic(severity, code, message, path) {\n    return path === void 0 ? { severity, code, message } : { severity, code, message, path };\n  }\n  function normalizeOpcPartPath(partPath) {\n    var _a;\n    const withoutHash = (_a = partPath.split("#", 1)[0]) != null ? _a : "";\n    const raw = withoutHash.replace(/\\\\/g, "/").replace(/^\\/+/, "");\n    const parts = [];\n    for (const part of raw.split("/")) {\n      if (part === "" || part === ".") {\n        continue;\n      }\n      if (part === "..") {\n        if (parts.length === 0) {\n          throw new Error(`OPC part path escapes package root: ${partPath}`);\n        }\n        parts.pop();\n        continue;\n      }\n      parts.push(part);\n    }\n    if (parts.length === 0) {\n      throw new Error(`OPC part path is empty: ${partPath}`);\n    }\n    return parts.join("/");\n  }\n  function resolveOpcRelationshipTarget(sourcePartPath, target, targetMode = "") {\n    if (targetMode.toLowerCase() === "external") {\n      return target;\n    }\n    if (/^[a-z][a-z0-9+.-]*:/i.test(target)) {\n      return target;\n    }\n    if (target.startsWith("/")) {\n      return normalizeOpcPartPath(target);\n    }\n    const source = normalizeOpcPartPath(sourcePartPath);\n    const sourceDirectory = source.includes("/") ? source.slice(0, source.lastIndexOf("/")) : "";\n    return normalizeOpcPartPath(sourceDirectory === "" ? target : `${sourceDirectory}/${target}`);\n  }\n  function compareOpcPartPaths(a, b) {\n    return a < b ? -1 : a > b ? 1 : 0;\n  }\n  function buildOpcRelationshipsPath(sourcePartPath) {\n    const source = normalizeOpcPartPath(sourcePartPath);\n    const slashIndex = source.lastIndexOf("/");\n    const directory = slashIndex < 0 ? "" : source.slice(0, slashIndex);\n    const fileName = slashIndex < 0 ? source : source.slice(slashIndex + 1);\n    return directory === "" ? `_rels/${fileName}.rels` : `${directory}/_rels/${fileName}.rels`;\n  }\n  function escapeXmlText(value) {\n    return sanitizeXmlText(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");\n  }\n  function escapeXmlAttribute(value) {\n    return escapeXmlText(value).replace(/"/g, "&quot;").replace(/\'/g, "&apos;");\n  }\n  function sanitizeXmlText(value) {\n    return value.replace(/[^\\u0009\\u000A\\u000D\\u0020-\\uD7FF\\uE000-\\uFFFD]/g, "");\n  }\n  function parseXmlAttributes(tag) {\n    var _a, _b;\n    const attributes = /* @__PURE__ */ new Map();\n    const pattern = /([A-Za-z_][\\w:.-]*)\\s*=\\s*(?:"([^"]*)"|\'([^\']*)\')/g;\n    for (const match of tag.matchAll(pattern)) {\n      attributes.set(match[1], decodeXmlEntities((_b = (_a = match[2]) != null ? _a : match[3]) != null ? _b : ""));\n    }\n    return attributes;\n  }\n  function decodeXmlEntities(value) {\n    return value.replace(/&quot;/g, \'"\').replace(/&apos;/g, "\'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");\n  }\n  function parseOpcContentTypesXml(xml) {\n    var _a, _b;\n    const defaults = [];\n    const overrides = [];\n    for (const match of xml.matchAll(/<Default\\b([^>]*)\\/?>/g)) {\n      const attributes = parseXmlAttributes((_a = match[1]) != null ? _a : "");\n      const extension = attributes.get("Extension");\n      const contentType = attributes.get("ContentType");\n      if (extension !== void 0 && contentType !== void 0) {\n        defaults.push({ extension, contentType });\n      }\n    }\n    for (const match of xml.matchAll(/<Override\\b([^>]*)\\/?>/g)) {\n      const attributes = parseXmlAttributes((_b = match[1]) != null ? _b : "");\n      const partName = attributes.get("PartName");\n      const contentType = attributes.get("ContentType");\n      if (partName !== void 0 && contentType !== void 0) {\n        overrides.push({ partName: normalizeOpcPartPath(partName), contentType });\n      }\n    }\n    return { defaults, overrides };\n  }\n  function resolveOpcContentType(contentTypes, partPath) {\n    var _a;\n    const normalized = normalizeOpcPartPath(partPath);\n    const override = contentTypes.overrides.find((item) => item.partName === normalized);\n    if (override !== void 0) {\n      return override.contentType;\n    }\n    const extension = normalized.includes(".") ? normalized.slice(normalized.lastIndexOf(".") + 1) : "";\n    return (_a = contentTypes.defaults.find((item) => item.extension === extension)) == null ? void 0 : _a.contentType;\n  }\n  function buildOpcContentTypesXml(contentTypes) {\n    const defaults = contentTypes.defaults.map((item) => `<Default Extension="${escapeXmlAttribute(item.extension)}" ContentType="${escapeXmlAttribute(item.contentType)}"/>`).join("");\n    const overrides = contentTypes.overrides.map((item) => `<Override PartName="/${escapeXmlAttribute(normalizeOpcPartPath(item.partName))}" ContentType="${escapeXmlAttribute(item.contentType)}"/>`).join("");\n    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">${defaults}${overrides}</Types>`;\n  }\n  function parseOpcRelationshipsXml(xml) {\n    var _a;\n    const relationships = [];\n    const pattern = /<Relationship\\b([^>]*)\\/?>/g;\n    for (const match of xml.matchAll(pattern)) {\n      const attributes = parseXmlAttributes((_a = match[1]) != null ? _a : "");\n      const id = attributes.get("Id");\n      const type = attributes.get("Type");\n      const target = attributes.get("Target");\n      if (id === void 0 || type === void 0 || target === void 0) {\n        continue;\n      }\n      const targetMode = attributes.get("TargetMode");\n      relationships.push(\n        targetMode === void 0 ? { id, type, target } : { id, type, target, targetMode }\n      );\n    }\n    return relationships;\n  }\n  function buildOpcRelationshipsXml(relationships) {\n    const rels = relationships.map((relationship) => {\n      const targetMode = relationship.targetMode === void 0 ? "" : ` TargetMode="${escapeXmlAttribute(relationship.targetMode)}"`;\n      return `<Relationship Id="${escapeXmlAttribute(relationship.id)}" Type="${escapeXmlAttribute(relationship.type)}" Target="${escapeXmlAttribute(relationship.target)}"${targetMode}/>`;\n    }).join("");\n    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${rels}</Relationships>`;\n  }\n  function resolveOpcRelationships(relationships, sourcePartPath) {\n    return relationships.map((relationship) => ({\n      ...relationship,\n      target: resolveOpcRelationshipTarget(sourcePartPath, relationship.target, relationship.targetMode)\n    }));\n  }\n  function relationshipArrayToMap(relationships) {\n    return new Map(relationships.map((relationship) => [relationship.id, relationship]));\n  }\n  var crcTable = new Uint32Array(256);\n  for (let i = 0; i < 256; i += 1) {\n    let c = i;\n    for (let k = 0; k < 8; k += 1) {\n      c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;\n    }\n    crcTable[i] = c >>> 0;\n  }\n  function crc32(data) {\n    let crc = 4294967295;\n    for (const value of data) {\n      crc = crcTable[(crc ^ value) & 255] ^ crc >>> 8;\n    }\n    return (crc ^ 4294967295) >>> 0;\n  }\n  var EOCD_SIGNATURE = 101010256;\n  var CENTRAL_DIRECTORY_SIGNATURE = 33639248;\n  var LOCAL_FILE_SIGNATURE = 67324752;\n  var FIXED_TIMESTAMP = new Date(Date.UTC(1980, 0, 1, 0, 0, 0));\n  function getDefaultZipEntryTimestamp() {\n    return new Date(FIXED_TIMESTAMP.getTime());\n  }\n  function readZipPackage(data) {\n    const diagnostics = [];\n    const entries = [];\n    const centralDirectory = readCentralDirectory(data, diagnostics);\n    for (const central of centralDirectory) {\n      try {\n        const localNameLength = readUint16(data, central.localHeaderOffset + 26);\n        const localExtraLength = readUint16(data, central.localHeaderOffset + 28);\n        const dataStart = central.localHeaderOffset + 30 + localNameLength + localExtraLength;\n        const compressed = data.slice(dataStart, dataStart + central.compressedSize);\n        const entryData = central.method === 0 ? compressed : getNodeZlib().inflateRawSync(compressed);\n        entries.push({\n          path: central.path,\n          data: new Uint8Array(entryData),\n          compression: central.method === 0 ? "store" : "deflate",\n          compressedSize: central.compressedSize,\n          uncompressedSize: central.uncompressedSize,\n          crc32: central.crc,\n          modifiedAt: central.modifiedAt\n        });\n      } catch (error) {\n        diagnostics.push(\n          createDiagnostic(\n            "error",\n            "zip.entry.read_failed",\n            error instanceof Error ? error.message : String(error),\n            central.path\n          )\n        );\n      }\n    }\n    return { entries, diagnostics };\n  }\n  async function readZipPackageAsync(data, options = {}) {\n    const diagnostics = [];\n    const entries = [];\n    const centralDirectory = readCentralDirectory(data, diagnostics);\n    for (const central of centralDirectory) {\n      try {\n        const localNameLength = readUint16(data, central.localHeaderOffset + 26);\n        const localExtraLength = readUint16(data, central.localHeaderOffset + 28);\n        const dataStart = central.localHeaderOffset + 30 + localNameLength + localExtraLength;\n        const compressed = data.slice(dataStart, dataStart + central.compressedSize);\n        const entryData = central.method === 0 ? compressed : await inflateZipRawAsync(compressed, central.uncompressedSize, central.path, options.inflateRaw);\n        entries.push({\n          path: central.path,\n          data: new Uint8Array(entryData),\n          compression: central.method === 0 ? "store" : "deflate",\n          compressedSize: central.compressedSize,\n          uncompressedSize: central.uncompressedSize,\n          crc32: central.crc,\n          modifiedAt: central.modifiedAt\n        });\n      } catch (error) {\n        diagnostics.push(\n          createDiagnostic(\n            "error",\n            "zip.entry.read_failed",\n            error instanceof Error ? error.message : String(error),\n            central.path\n          )\n        );\n      }\n    }\n    return { entries, diagnostics };\n  }\n  function writeZipPackage(entries, options = {}) {\n    var _a, _b, _c, _d;\n    const timestamp = (_a = options.timestamp) != null ? _a : FIXED_TIMESTAMP;\n    const compression = (_b = options.compression) != null ? _b : "store";\n    const order = (_c = options.order) != null ? _c : "stable";\n    const prepared = entries.map((entry) => {\n      var _a2, _b2;\n      return {\n        path: normalizeOpcPartPath(entry.path),\n        data: asBytes(entry.data),\n        compression: (_a2 = entry.compression) != null ? _a2 : compression,\n        modifiedAt: (_b2 = entry.modifiedAt) != null ? _b2 : timestamp\n      };\n    });\n    if (order === "stable") {\n      prepared.sort((a, b) => compareOpcPartPaths(a.path, b.path));\n    }\n    const localParts = [];\n    const centralParts = [];\n    let offset = 0;\n    for (const entry of prepared) {\n      const nameBytes = textEncoder.encode(entry.path);\n      const method = entry.compression === "store" ? 0 : 8;\n      const compressed = entry.compression === "store" ? entry.data : new Uint8Array(getNodeZlib().deflateRawSync(entry.data, { level: (_d = options.compressionLevel) != null ? _d : 9 }));\n      const crc = crc32(entry.data);\n      const dosTime = toDosTime(entry.modifiedAt);\n      const dosDate = toDosDate(entry.modifiedAt);\n      const localHeader = new Uint8Array(30 + nameBytes.length);\n      writeUint32(localHeader, 0, LOCAL_FILE_SIGNATURE);\n      writeUint16(localHeader, 4, 20);\n      writeUint16(localHeader, 6, 2048);\n      writeUint16(localHeader, 8, method);\n      writeUint16(localHeader, 10, dosTime);\n      writeUint16(localHeader, 12, dosDate);\n      writeUint32(localHeader, 14, crc);\n      writeUint32(localHeader, 18, compressed.length);\n      writeUint32(localHeader, 22, entry.data.length);\n      writeUint16(localHeader, 26, nameBytes.length);\n      writeUint16(localHeader, 28, 0);\n      localHeader.set(nameBytes, 30);\n      localParts.push(localHeader, compressed);\n      const centralHeader = new Uint8Array(46 + nameBytes.length);\n      writeUint32(centralHeader, 0, CENTRAL_DIRECTORY_SIGNATURE);\n      writeUint16(centralHeader, 4, 20);\n      writeUint16(centralHeader, 6, 20);\n      writeUint16(centralHeader, 8, 2048);\n      writeUint16(centralHeader, 10, method);\n      writeUint16(centralHeader, 12, dosTime);\n      writeUint16(centralHeader, 14, dosDate);\n      writeUint32(centralHeader, 16, crc);\n      writeUint32(centralHeader, 20, compressed.length);\n      writeUint32(centralHeader, 24, entry.data.length);\n      writeUint16(centralHeader, 28, nameBytes.length);\n      writeUint16(centralHeader, 30, 0);\n      writeUint16(centralHeader, 32, 0);\n      writeUint16(centralHeader, 34, 0);\n      writeUint16(centralHeader, 36, 0);\n      writeUint32(centralHeader, 38, 0);\n      writeUint32(centralHeader, 42, offset);\n      centralHeader.set(nameBytes, 46);\n      centralParts.push(centralHeader);\n      offset += localHeader.length + compressed.length;\n    }\n    const centralDirectory = concatBytes(centralParts);\n    const end = new Uint8Array(22);\n    writeUint32(end, 0, EOCD_SIGNATURE);\n    writeUint16(end, 4, 0);\n    writeUint16(end, 6, 0);\n    writeUint16(end, 8, prepared.length);\n    writeUint16(end, 10, prepared.length);\n    writeUint32(end, 12, centralDirectory.length);\n    writeUint32(end, 16, offset);\n    writeUint16(end, 20, 0);\n    return concatBytes([...localParts, centralDirectory, end]);\n  }\n  function getZipEntry(entries, entryPath) {\n    const normalized = normalizeOpcPartPath(entryPath);\n    return entries.find((entry) => entry.path === normalized);\n  }\n  function getZipTextEntry(entries, entryPath) {\n    const entry = getZipEntry(entries, entryPath);\n    return entry === void 0 ? void 0 : textDecoder.decode(entry.data);\n  }\n  function upsertZipEntry(entries, entry) {\n    const normalized = normalizeOpcPartPath(entry.path);\n    const next = entries.filter((item) => normalizeOpcPartPath(item.path) !== normalized);\n    next.push({ ...entry, path: normalized });\n    return next;\n  }\n  function readCentralDirectory(data, diagnostics) {\n    const eocdOffset = findEndOfCentralDirectory(data);\n    if (eocdOffset < 0) {\n      diagnostics.push(createDiagnostic("error", "zip.eocd.missing", "End of central directory was not found."));\n      return [];\n    }\n    const entryCount = readUint16(data, eocdOffset + 10);\n    const centralDirectoryOffset = readUint32(data, eocdOffset + 16);\n    const entries = [];\n    let offset = centralDirectoryOffset;\n    for (let index = 0; index < entryCount; index += 1) {\n      if (readUint32(data, offset) !== CENTRAL_DIRECTORY_SIGNATURE) {\n        diagnostics.push(createDiagnostic("error", "zip.central_directory.invalid", "Central directory entry signature is invalid."));\n        break;\n      }\n      const flags = readUint16(data, offset + 8);\n      const method = readUint16(data, offset + 10);\n      const time = readUint16(data, offset + 12);\n      const date = readUint16(data, offset + 14);\n      const crc = readUint32(data, offset + 16);\n      const compressedSize = readUint32(data, offset + 20);\n      const uncompressedSize = readUint32(data, offset + 24);\n      const fileNameLength = readUint16(data, offset + 28);\n      const extraLength = readUint16(data, offset + 30);\n      const commentLength = readUint16(data, offset + 32);\n      const localHeaderOffset = readUint32(data, offset + 42);\n      const nameStart = offset + 46;\n      const path = textDecoder.decode(data.slice(nameStart, nameStart + fileNameLength));\n      if (method !== 0 && method !== 8) {\n        diagnostics.push(createDiagnostic("error", "zip.compression.unsupported", `Unsupported ZIP compression method: ${method}`, path));\n      } else {\n        entries.push({\n          path: normalizeOpcPartPath(path),\n          method,\n          flags,\n          crc,\n          compressedSize,\n          uncompressedSize,\n          localHeaderOffset,\n          modifiedAt: fromDosDateTime(date, time)\n        });\n      }\n      offset = nameStart + fileNameLength + extraLength + commentLength;\n    }\n    return entries;\n  }\n  function findEndOfCentralDirectory(data) {\n    const minOffset = Math.max(0, data.length - 65535 - 22);\n    for (let offset = data.length - 22; offset >= minOffset; offset -= 1) {\n      if (readUint32(data, offset) === EOCD_SIGNATURE) {\n        return offset;\n      }\n    }\n    return -1;\n  }\n  function toDosTime(date) {\n    return date.getUTCHours() << 11 | date.getUTCMinutes() << 5 | Math.floor(date.getUTCSeconds() / 2);\n  }\n  function toDosDate(date) {\n    const year = Math.max(1980, date.getUTCFullYear());\n    return year - 1980 << 9 | date.getUTCMonth() + 1 << 5 | date.getUTCDate();\n  }\n  function fromDosDateTime(date, time) {\n    const year = 1980 + (date >>> 9 & 127);\n    const month = date >>> 5 & 15;\n    const day = date & 31;\n    const hour = time >>> 11 & 31;\n    const minute = time >>> 5 & 63;\n    const second = (time & 31) * 2;\n    return new Date(Date.UTC(year, month - 1, day, hour, minute, second));\n  }\n  async function inflateZipRawAsync(compressed, expectedSize, path, customInflateRaw) {\n    const inflated = customInflateRaw === void 0 ? await defaultInflateZipRawAsync(compressed) : await customInflateRaw(compressed, expectedSize, path);\n    const bytes = new Uint8Array(inflated);\n    if (bytes.length !== expectedSize) {\n      throw new Error(`Deflated ZIP entry size mismatch: ${path}`);\n    }\n    return bytes;\n  }\n  async function defaultInflateZipRawAsync(compressed) {\n    const runtime = globalThis;\n    if (typeof runtime.DecompressionStream === "function") {\n      try {\n        const stream = new Blob([compressed]).stream().pipeThrough(new runtime.DecompressionStream("deflate-raw"));\n        const buffer = await new Response(stream).arrayBuffer();\n        return new Uint8Array(buffer);\n      } catch (_error) {\n      }\n    }\n    return new Uint8Array(getNodeZlib().inflateRawSync(compressed));\n  }\n  function getNodeZlib() {\n    var _a, _b;\n    const runtime = globalThis;\n    const getBuiltinModule = (_a = runtime.process) == null ? void 0 : _a.getBuiltinModule;\n    const zlib = typeof getBuiltinModule === "function" ? (_b = getBuiltinModule("node:zlib")) != null ? _b : getBuiltinModule("zlib") : void 0;\n    if (zlib !== void 0 && typeof zlib.deflateRawSync === "function" && typeof zlib.inflateRawSync === "function") {\n      return zlib;\n    }\n    throw new Error("Node zlib is required for synchronous ZIP deflate operations. Use stored entries, readZipPackageAsync with DecompressionStream, or inject an async inflater.");\n  }\n  function readOfficePackage(data) {\n    const zip = readZipPackage(data);\n    return buildOfficePackageFromZipReadResult(zip.entries, zip.diagnostics);\n  }\n  async function readOfficePackageAsync(data, options = {}) {\n    const zip = await readZipPackageAsync(data, options);\n    return buildOfficePackageFromZipReadResult(zip.entries, zip.diagnostics);\n  }\n  function buildOfficePackageFromZipReadResult(entries, zipDiagnostics) {\n    const diagnostics = [...zipDiagnostics];\n    const contentTypesXml = getZipTextEntry(entries, "[Content_Types].xml");\n    let contentTypes;\n    if (contentTypesXml === void 0) {\n      diagnostics.push(\n        createDiagnostic(\n          "warning",\n          "opc.content_types.missing",\n          "The package does not contain [Content_Types].xml.",\n          "[Content_Types].xml"\n        )\n      );\n    } else {\n      contentTypes = parseOpcContentTypesXml(contentTypesXml);\n    }\n    return contentTypes === void 0 ? { entries, diagnostics } : { entries, contentTypes, diagnostics };\n  }\n  function listOfficeMediaParts(entries) {\n    return entries.filter((entry) => normalizeOpcPartPath(entry.path).includes("/media/"));\n  }\n  function readOfficePartRelationships(entries, sourcePartPath, options = {}) {\n    const relsXml = getZipTextEntry(entries, buildOpcRelationshipsPath(sourcePartPath));\n    if (relsXml === void 0) {\n      return [];\n    }\n    const relationships = parseOpcRelationshipsXml(relsXml);\n    return options.resolveTargets === false ? relationships : resolveOpcRelationships(relationships, sourcePartPath);\n  }\n  return __toCommonJS(stdin_exports);\n})();\n\n(() => {\n  const moduleRegistry = getDocx2mdModuleRegistry();\n  moduleRegistry.registerModule("msOfficeCore", __mikuMsOfficeCoreRelease);\n})();\n' }, { "path": "dist/js/zip-io.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const msOfficeCore = moduleRegistry.getModule("msOfficeCore");\n    const nodeRequire = (() => {\n        const candidate = globalThis.__docx2mdNodeRequire;\n        return typeof candidate === "function" ? candidate : null;\n    })();\n    async function inflateRaw(data) {\n        if (typeof DecompressionStream === "function") {\n            try {\n                const stream = new Blob([data]).stream().pipeThrough(new DecompressionStream("deflate-raw"));\n                const buffer = await new Response(stream).arrayBuffer();\n                return new Uint8Array(buffer);\n            }\n            catch (_error) {\n                // Fall through to node:zlib if available.\n            }\n        }\n        if (nodeRequire) {\n            const zlib = nodeRequire("node:zlib");\n            return Uint8Array.from(zlib.inflateRawSync(data));\n        }\n        throw new Error("This environment does not support ZIP deflate decompression.");\n    }\n    async function unzipEntries(arrayBuffer) {\n        if (!msOfficeCore) {\n            throw new Error("miku-ms-office-core module is not loaded.");\n        }\n        const result = await msOfficeCore.readZipPackageAsync(new Uint8Array(arrayBuffer), {\n            inflateRaw\n        });\n        const errors = result.diagnostics.filter((diagnostic) => diagnostic.severity === "error");\n        if (errors.length > 0) {\n            throw new Error(errors.map((diagnostic) => diagnostic.path ? `${diagnostic.path}: ${diagnostic.message}` : diagnostic.message).join("\\n"));\n        }\n        const files = new Map();\n        for (const entry of result.entries) {\n            files.set(entry.path, entry.data);\n        }\n        return files;\n    }\n    moduleRegistry.registerModule("zipIo", {\n        unzipEntries\n    });\n})();\n' }, { "path": "dist/js/xml-utils.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const textDecoder = new TextDecoder("utf-8");\n    function decodeXmlText(bytes) {\n        return textDecoder.decode(bytes);\n    }\n    function parseXml(bytes) {\n        const xmlText = decodeXmlText(bytes);\n        return new DOMParser().parseFromString(xmlText, "application/xml");\n    }\n    function getChildrenByLocalName(parent, localName) {\n        const results = [];\n        const childNodes = parent.childNodes || [];\n        for (let index = 0; index < childNodes.length; index += 1) {\n            const child = childNodes[index];\n            if (child.nodeType === 1 && child.localName === localName) {\n                results.push(child);\n            }\n        }\n        return results;\n    }\n    function findDescendantsByLocalName(parent, localName) {\n        const results = [];\n        const stack = [parent];\n        while (stack.length > 0) {\n            const current = stack.pop();\n            const childNodes = current.childNodes || [];\n            for (let index = 0; index < childNodes.length; index += 1) {\n                const child = childNodes[index];\n                if (child.nodeType === 1) {\n                    const element = child;\n                    if (element.localName === localName) {\n                        results.push(element);\n                    }\n                    stack.push(element);\n                }\n            }\n        }\n        return results;\n    }\n    function getTextContent(node) {\n        return String((node === null || node === void 0 ? void 0 : node.textContent) || "");\n    }\n    function getAttributeValue(element, name, fallback = "") {\n        return (element === null || element === void 0 ? void 0 : element.getAttribute(name)) || fallback;\n    }\n    function getWordAttributeValue(element, localName, fallback = "") {\n        return (element === null || element === void 0 ? void 0 : element.getAttribute(`w:${localName}`)) || (element === null || element === void 0 ? void 0 : element.getAttribute(localName)) || fallback;\n    }\n    function getNamespacedAttributeValue(element, namespacePrefix, localName, fallback = "") {\n        return (element === null || element === void 0 ? void 0 : element.getAttribute(`${namespacePrefix}:${localName}`)) || (element === null || element === void 0 ? void 0 : element.getAttribute(localName)) || fallback;\n    }\n    moduleRegistry.registerModule("xmlUtils", {\n        decodeXmlText,\n        parseXml,\n        getChildrenByLocalName,\n        findDescendantsByLocalName,\n        getTextContent,\n        getAttributeValue,\n        getWordAttributeValue,\n        getNamespacedAttributeValue\n    });\n})();\n' }, { "path": "dist/js/rels-parser.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const xmlUtils = moduleRegistry.getModule("xmlUtils");\n    function resolveZipPath(sourcePath, target) {\n        if (!target)\n            return target;\n        if (target.startsWith("#"))\n            return target;\n        if (target.startsWith("/")) {\n            return target.replace(/^\\/+/, "");\n        }\n        const baseParts = sourcePath.split("/").slice(0, -1);\n        for (const part of target.split("/")) {\n            if (!part || part === ".")\n                continue;\n            if (part === "..") {\n                baseParts.pop();\n            }\n            else {\n                baseParts.push(part);\n            }\n        }\n        return baseParts.join("/");\n    }\n    function parseRelationshipElement(element, sourcePath) {\n        const id = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getAttributeValue(element, "Id")) || "";\n        const rawTarget = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getAttributeValue(element, "Target")) || "";\n        const type = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getAttributeValue(element, "Type")) || "";\n        const mode = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getAttributeValue(element, "TargetMode")) || "";\n        return {\n            id,\n            relationship: {\n                target: mode === "External" ? rawTarget : resolveZipPath(sourcePath, rawTarget),\n                type,\n                mode\n            }\n        };\n    }\n    function parseRelationships(bytes, sourcePath) {\n        const document = xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.parseXml(bytes);\n        const relationshipElements = document ? (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.findDescendantsByLocalName(document, "Relationship")) || [] : [];\n        const map = new Map();\n        for (const element of relationshipElements) {\n            const parsedRelationship = parseRelationshipElement(element, sourcePath);\n            map.set(parsedRelationship.id, parsedRelationship.relationship);\n        }\n        return map;\n    }\n    moduleRegistry.registerModule("relsParser", {\n        resolveZipPath,\n        parseRelationships\n    });\n})();\n' }, { "path": "dist/js/styles-parser.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const xmlUtils = moduleRegistry.getModule("xmlUtils");\n    function parseInteger(value) {\n        if (!value)\n            return null;\n        const parsed = Number.parseInt(value, 10);\n        return Number.isFinite(parsed) ? parsed : null;\n    }\n    function parseStyleFlag(parent, localName) {\n        if (!parent)\n            return null;\n        const element = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(parent, localName)[0]) || null;\n        if (!element)\n            return null;\n        const value = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(element, "val")) || "";\n        if (!value)\n            return true;\n        return value !== "false" && value !== "0";\n    }\n    function parseStyles(bytes) {\n        const styles = new Map();\n        if (!bytes)\n            return styles;\n        const document = xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.parseXml(bytes);\n        if (!document)\n            return styles;\n        const styleElements = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.findDescendantsByLocalName(document, "style")) || [];\n        for (const styleElement of styleElements) {\n            const styleId = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(styleElement, "styleId")) || "";\n            if (!styleId)\n                continue;\n            const styleType = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(styleElement, "type")) || "";\n            const nameElement = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(styleElement, "name")[0]) || null;\n            const basedOnElement = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(styleElement, "basedOn")[0]) || null;\n            const paragraphProperties = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(styleElement, "pPr")[0]) || null;\n            const runProperties = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(styleElement, "rPr")[0]) || null;\n            const outlineLevelElement = paragraphProperties\n                ? ((xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(paragraphProperties, "outlineLvl")[0]) || null)\n                : null;\n            styles.set(styleId, {\n                styleId,\n                styleType,\n                name: (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(nameElement, "val")) || "",\n                basedOn: (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(basedOnElement, "val")) || "",\n                outlineLevel: parseInteger(xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(outlineLevelElement, "val")),\n                textStyle: {\n                    bold: parseStyleFlag(runProperties, "b"),\n                    italic: parseStyleFlag(runProperties, "i"),\n                    strike: parseStyleFlag(runProperties, "strike"),\n                    underline: parseStyleFlag(runProperties, "u")\n                }\n            });\n        }\n        return styles;\n    }\n    function resolveStyleChain(styles, styleId) {\n        const chain = [];\n        const visited = new Set();\n        let cursor = styleId;\n        while (cursor && styles.has(cursor) && !visited.has(cursor)) {\n            visited.add(cursor);\n            const style = styles.get(cursor);\n            chain.push(style);\n            cursor = style.basedOn;\n        }\n        return chain;\n    }\n    moduleRegistry.registerModule("stylesParser", {\n        parseStyles,\n        resolveStyleChain\n    });\n})();\n' }, { "path": "dist/js/numbering-parser.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const xmlUtils = moduleRegistry.getModule("xmlUtils");\n    function parseInteger(value) {\n        if (!value)\n            return null;\n        const parsed = Number.parseInt(value, 10);\n        return Number.isFinite(parsed) ? parsed : null;\n    }\n    function parseNumbering(bytes) {\n        const abstractNums = new Map();\n        const nums = new Map();\n        if (!bytes) {\n            return { abstractNums, nums };\n        }\n        const document = xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.parseXml(bytes);\n        if (!document) {\n            return { abstractNums, nums };\n        }\n        for (const abstractNumElement of (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.findDescendantsByLocalName(document, "abstractNum")) || []) {\n            const abstractNumId = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(abstractNumElement, "abstractNumId")) || "";\n            if (!abstractNumId)\n                continue;\n            const levels = new Map();\n            for (const levelElement of (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(abstractNumElement, "lvl")) || []) {\n                const level = parseInteger(xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(levelElement, "ilvl"));\n                if (level === null)\n                    continue;\n                const numFmtElement = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(levelElement, "numFmt")[0]) || null;\n                const lvlTextElement = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(levelElement, "lvlText")[0]) || null;\n                levels.set(level, {\n                    level,\n                    format: (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(numFmtElement, "val")) || "",\n                    text: (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(lvlTextElement, "val")) || ""\n                });\n            }\n            abstractNums.set(abstractNumId, {\n                abstractNumId,\n                levels\n            });\n        }\n        for (const numElement of (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.findDescendantsByLocalName(document, "num")) || []) {\n            const numId = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(numElement, "numId")) || "";\n            if (!numId)\n                continue;\n            const abstractNumIdElement = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(numElement, "abstractNumId")[0]) || null;\n            const abstractNumId = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(abstractNumIdElement, "val")) || "";\n            if (abstractNumId) {\n                nums.set(numId, abstractNumId);\n            }\n        }\n        return { abstractNums, nums };\n    }\n    function resolveListKind(numbering, numId, ilvl) {\n        const abstractNumId = numbering.nums.get(numId);\n        if (!abstractNumId)\n            return null;\n        const abstractNum = numbering.abstractNums.get(abstractNumId);\n        if (!abstractNum)\n            return null;\n        const level = abstractNum.levels.get(ilvl);\n        if (!level)\n            return null;\n        return level.format === "bullet" ? "bullet" : "ordered";\n    }\n    moduleRegistry.registerModule("numberingParser", {\n        parseNumbering,\n        resolveListKind\n    });\n})();\n' }, { "path": "dist/js/document-summary.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    function createEmptySummary() {\n        return {\n            paragraphs: 0,\n            headings: 0,\n            listItems: 0,\n            tables: 0,\n            images: 0,\n            imageAssets: 0,\n            drawingLikeUnsupported: 0,\n            links: 0,\n            internalLinks: 0,\n            externalLinks: 0,\n            unsupportedElements: 0,\n            unsupportedCommentTraces: 0\n        };\n    }\n    function createEmptyParsedDocument() {\n        return {\n            blocks: [],\n            summary: createEmptySummary()\n        };\n    }\n    function isDrawingLikeUnsupported(type) {\n        return type.startsWith("drawing");\n    }\n    function isResolvedImageUnsupported(type) {\n        return type.startsWith("drawing:image(");\n    }\n    function recordUnsupportedSummary(summary, type) {\n        if (isDrawingLikeUnsupported(type)) {\n            summary.drawingLikeUnsupported += 1;\n        }\n        if (isResolvedImageUnsupported(type)) {\n            summary.images += 1;\n        }\n        summary.unsupportedElements += 1;\n        summary.unsupportedCommentTraces += 1;\n    }\n    moduleRegistry.registerModule("documentSummary", {\n        createEmptySummary,\n        createEmptyParsedDocument,\n        recordUnsupportedSummary\n    });\n})();\n' }, { "path": "dist/js/document-anchor-parser.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const xmlUtils = moduleRegistry.getModule("xmlUtils");\n    function normalizeAnchorName(name) {\n        const normalized = String(name || "")\n            .trim()\n            .toLowerCase()\n            .replace(/\\s+/g, "-")\n            .replace(/[^a-z0-9._:-]+/g, "-")\n            .replace(/-+/g, "-")\n            .replace(/^[-:.]+|[-:.]+$/g, "");\n        return normalized;\n    }\n    function extractParagraphAnchors(paragraph) {\n        const anchors = [];\n        const bookmarks = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.findDescendantsByLocalName(paragraph, "bookmarkStart")) || [];\n        for (const bookmark of bookmarks) {\n            const rawName = ((xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(bookmark, "name")) || "").trim();\n            if (!rawName || rawName.startsWith("_"))\n                continue;\n            const normalizedName = normalizeAnchorName(rawName);\n            if (!normalizedName)\n                continue;\n            if (!anchors.includes(normalizedName)) {\n                anchors.push(normalizedName);\n            }\n        }\n        return anchors;\n    }\n    function normalizeRelationshipAnchorTarget(target) {\n        const normalizedTarget = String(target || "").trim();\n        if (!normalizedTarget)\n            return "";\n        if (normalizedTarget.startsWith("#")) {\n            return normalizeAnchorName(normalizedTarget.slice(1));\n        }\n        const fragmentIndex = normalizedTarget.indexOf("#");\n        if (fragmentIndex < 0)\n            return "";\n        const targetPath = normalizedTarget.slice(0, fragmentIndex);\n        if (targetPath && targetPath !== "word/document.xml")\n            return "";\n        return normalizeAnchorName(normalizedTarget.slice(fragmentIndex + 1));\n    }\n    function claimUniqueAnchorIds(anchorIds, emittedAnchorIds) {\n        const uniqueAnchorIds = [];\n        for (const anchorId of anchorIds) {\n            if (emittedAnchorIds.has(anchorId))\n                continue;\n            emittedAnchorIds.add(anchorId);\n            uniqueAnchorIds.push(anchorId);\n        }\n        return uniqueAnchorIds;\n    }\n    moduleRegistry.registerModule("documentAnchorParser", {\n        normalizeAnchorName,\n        extractParagraphAnchors,\n        normalizeRelationshipAnchorTarget,\n        claimUniqueAnchorIds\n    });\n})();\n' }, { "path": "dist/js/document-drawing-parser.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const xmlUtils = moduleRegistry.getModule("xmlUtils");\n    function classifyUnsupportedType(localName) {\n        switch (localName) {\n            case "drawing":\n            case "pict":\n            case "object":\n                return "drawing";\n            case "txbxContent":\n            case "textbox":\n            case "textBox":\n                return "textbox";\n            case "chart":\n                return "chart";\n            default:\n                return localName || "unknown";\n        }\n    }\n    function resolveImageTargetFromUnsupportedElement(element, relationships) {\n        const blips = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.findDescendantsByLocalName(element, "blip")) || [];\n        for (const blip of blips) {\n            const relationshipId = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getNamespacedAttributeValue(blip, "r", "embed")) || "";\n            if (!relationshipId)\n                continue;\n            const relationship = relationships.get(relationshipId);\n            if (!relationship)\n                continue;\n            if (relationship.type.includes("/image")) {\n                return relationship.target;\n            }\n        }\n        return "";\n    }\n    function readTrimmedAttribute(element, name) {\n        return ((xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getAttributeValue(element, name)) || "").trim();\n    }\n    function resolveImageAltTextFromUnsupportedElement(element) {\n        const metadataElements = [\n            ...((xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.findDescendantsByLocalName(element, "docPr")) || []),\n            ...((xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.findDescendantsByLocalName(element, "cNvPr")) || [])\n        ];\n        for (const metadataElement of metadataElements) {\n            const description = readTrimmedAttribute(metadataElement, "descr");\n            if (description)\n                return description;\n            const title = readTrimmedAttribute(metadataElement, "title");\n            if (title)\n                return title;\n        }\n        return "";\n    }\n    function resolveImageExtentFromUnsupportedElement(element) {\n        const extentElements = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.findDescendantsByLocalName(element, "extent")) || [];\n        for (const extentElement of extentElements) {\n            const cx = readTrimmedAttribute(extentElement, "cx");\n            const cy = readTrimmedAttribute(extentElement, "cy");\n            if (cx && cy) {\n                return `${cx}x${cy}`;\n            }\n        }\n        return "";\n    }\n    function formatDrawingImageTrace(imageTarget, imageAltText, imageExtent) {\n        const parts = [`drawing:image(${imageTarget})`];\n        if (imageAltText) {\n            parts.push(`alt(${imageAltText})`);\n        }\n        if (imageExtent) {\n            parts.push(`size-emu(${imageExtent})`);\n        }\n        return parts.join(":");\n    }\n    function describeUnsupportedElement(element, relationships) {\n        const type = classifyUnsupportedType(element.localName || "unknown");\n        if (type === "drawing") {\n            const imageTarget = resolveImageTargetFromUnsupportedElement(element, relationships);\n            const imageAltText = resolveImageAltTextFromUnsupportedElement(element);\n            const imageExtent = resolveImageExtentFromUnsupportedElement(element);\n            if (imageTarget) {\n                return formatDrawingImageTrace(imageTarget, imageAltText, imageExtent);\n            }\n        }\n        return type;\n    }\n    moduleRegistry.registerModule("documentDrawingParser", {\n        describeUnsupportedElement\n    });\n})();\n' }, { "path": "dist/js/document-text-style-parser.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const xmlUtils = moduleRegistry.getModule("xmlUtils");\n    const stylesParser = moduleRegistry.getModule("stylesParser");\n    function readStyleValue(parent, localName) {\n        if (!parent)\n            return null;\n        const element = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(parent, localName)[0]) || null;\n        if (!element)\n            return null;\n        const value = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(element, "val")) || "";\n        if (!value)\n            return true;\n        return value !== "false" && value !== "0";\n    }\n    function emptyStyle() {\n        return {\n            bold: false,\n            italic: false,\n            strike: false,\n            underline: false\n        };\n    }\n    function applyTextStyle(text, style) {\n        if (!text)\n            return "";\n        let result = text;\n        if (style.underline)\n            result = `<ins>${result}</ins>`;\n        if (style.strike)\n            result = `~~${result}~~`;\n        if (style.italic)\n            result = `*${result}*`;\n        if (style.bold)\n            result = `**${result}**`;\n        return result;\n    }\n    function applyStyleOverride(base, override) {\n        return {\n            bold: override.bold === null ? base.bold : override.bold,\n            italic: override.italic === null ? base.italic : override.italic,\n            strike: override.strike === null ? base.strike : override.strike,\n            underline: override.underline === null ? base.underline : override.underline\n        };\n    }\n    function readStyleOverrideFromRunProperties(properties) {\n        return {\n            bold: readStyleValue(properties, "b"),\n            italic: readStyleValue(properties, "i"),\n            strike: readStyleValue(properties, "strike"),\n            underline: readStyleValue(properties, "u")\n        };\n    }\n    function resolveTextStyleOverrideFromStyleId(styles, styleId, expectedStyleType) {\n        if (!styleId) {\n            return {\n                bold: null,\n                italic: null,\n                strike: null,\n                underline: null\n            };\n        }\n        const chain = (stylesParser === null || stylesParser === void 0 ? void 0 : stylesParser.resolveStyleChain(styles, styleId)) || [];\n        let resolved = {\n            bold: null,\n            italic: null,\n            strike: null,\n            underline: null\n        };\n        for (const style of chain.slice().reverse()) {\n            if (expectedStyleType && style.styleType && style.styleType !== expectedStyleType) {\n                continue;\n            }\n            resolved = {\n                bold: style.textStyle.bold === null ? resolved.bold : style.textStyle.bold,\n                italic: style.textStyle.italic === null ? resolved.italic : style.textStyle.italic,\n                strike: style.textStyle.strike === null ? resolved.strike : style.textStyle.strike,\n                underline: style.textStyle.underline === null ? resolved.underline : style.textStyle.underline\n            };\n        }\n        return resolved;\n    }\n    function getParagraphTextStyle(paragraph, styles) {\n        const paragraphProperties = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(paragraph, "pPr")[0]) || null;\n        const paragraphStyleElement = paragraphProperties ? ((xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(paragraphProperties, "pStyle")[0]) || null) : null;\n        const paragraphStyleId = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(paragraphStyleElement, "val")) || "";\n        const styleFromParagraphStyle = applyStyleOverride(emptyStyle(), resolveTextStyleOverrideFromStyleId(styles, paragraphStyleId, "paragraph"));\n        const paragraphRunProperties = paragraphProperties ? ((xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(paragraphProperties, "rPr")[0]) || null) : null;\n        return applyStyleOverride(styleFromParagraphStyle, readStyleOverrideFromRunProperties(paragraphRunProperties));\n    }\n    function resolveRunTextStyle(runElement, styles, inheritedStyle, suppressUnderline) {\n        const properties = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(runElement, "rPr")[0]) || null;\n        const runStyleElement = properties ? ((xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(properties, "rStyle")[0]) || null) : null;\n        const runStyleId = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(runStyleElement, "val")) || "";\n        const styleFromRunStyle = resolveTextStyleOverrideFromStyleId(styles, runStyleId, "character");\n        const style = applyStyleOverride(applyStyleOverride(inheritedStyle, styleFromRunStyle), readStyleOverrideFromRunProperties(properties));\n        return suppressUnderline ? { ...style, underline: false } : style;\n    }\n    moduleRegistry.registerModule("documentTextStyleParser", {\n        emptyStyle,\n        applyTextStyle,\n        getParagraphTextStyle,\n        resolveRunTextStyle\n    });\n})();\n' }, { "path": "dist/js/document-hyperlink-parser.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const xmlUtils = moduleRegistry.getModule("xmlUtils");\n    const documentAnchorParser = moduleRegistry.getModule("documentAnchorParser");\n    function normalizeAnchorName(name) {\n        return (documentAnchorParser === null || documentAnchorParser === void 0 ? void 0 : documentAnchorParser.normalizeAnchorName(name)) || "";\n    }\n    function normalizeRelationshipAnchorTarget(target) {\n        return (documentAnchorParser === null || documentAnchorParser === void 0 ? void 0 : documentAnchorParser.normalizeRelationshipAnchorTarget(target)) || "";\n    }\n    function renderHyperlink(hyperlinkElement, linkText, relationships, context) {\n        const relationshipId = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getNamespacedAttributeValue(hyperlinkElement, "r", "id")) || "";\n        const anchor = normalizeAnchorName((xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(hyperlinkElement, "anchor")) || "");\n        const relationship = relationshipId ? relationships.get(relationshipId) || null : null;\n        const relationshipAnchor = relationship ? normalizeRelationshipAnchorTarget(relationship.target) : "";\n        if ((relationship === null || relationship === void 0 ? void 0 : relationship.mode) === "External") {\n            context.summary.links += 1;\n            context.summary.externalLinks += 1;\n            return `[${linkText}](${relationship.target})`;\n        }\n        if (relationshipAnchor && context.knownAnchorIds.has(relationshipAnchor)) {\n            context.summary.links += 1;\n            context.summary.internalLinks += 1;\n            return `[${linkText}](#${relationshipAnchor})`;\n        }\n        if (anchor && context.knownAnchorIds.has(anchor)) {\n            context.summary.links += 1;\n            context.summary.internalLinks += 1;\n            return `[${linkText}](#${anchor})`;\n        }\n        return linkText;\n    }\n    moduleRegistry.registerModule("documentHyperlinkParser", {\n        renderHyperlink\n    });\n})();\n' }, { "path": "dist/js/document-paragraph-parser.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const xmlUtils = moduleRegistry.getModule("xmlUtils");\n    const stylesParser = moduleRegistry.getModule("stylesParser");\n    const numberingParser = moduleRegistry.getModule("numberingParser");\n    function isHeadingName(name) {\n        const match = /^(Heading|\u898B\u51FA\u3057)\\s*([1-6])$/i.exec(name.trim());\n        if (!match)\n            return null;\n        return Number.parseInt(match[2], 10);\n    }\n    function getParagraphProperties(paragraph) {\n        return (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(paragraph, "pPr")[0]) || null;\n    }\n    function getParagraphStyleId(paragraphProperties) {\n        const paragraphStyle = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(paragraphProperties, "pStyle")[0]) || null;\n        return (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(paragraphStyle, "val")) || "";\n    }\n    function getOutlineLevel(paragraphProperties) {\n        const outlineLevel = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(paragraphProperties, "outlineLvl")[0]) || null;\n        const value = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(outlineLevel, "val")) || "";\n        const parsed = value ? Number.parseInt(value, 10) : Number.NaN;\n        return Number.isFinite(parsed) ? Math.min(parsed + 1, 6) : null;\n    }\n    function getNumberingProperties(paragraphProperties) {\n        return (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(paragraphProperties, "numPr")[0]) || null;\n    }\n    function getHeadingLevel(paragraph, styles) {\n        const paragraphProperties = getParagraphProperties(paragraph);\n        if (!paragraphProperties)\n            return null;\n        const styleId = getParagraphStyleId(paragraphProperties);\n        if (styleId) {\n            const directLevel = isHeadingName(styleId);\n            if (directLevel)\n                return directLevel;\n            const chain = (stylesParser === null || stylesParser === void 0 ? void 0 : stylesParser.resolveStyleChain(styles, styleId)) || [];\n            for (const style of chain) {\n                const nameLevel = isHeadingName(style.name) || isHeadingName(style.styleId);\n                if (nameLevel)\n                    return nameLevel;\n                if (style.outlineLevel !== null)\n                    return Math.min(style.outlineLevel + 1, 6);\n            }\n        }\n        return getOutlineLevel(paragraphProperties);\n    }\n    function getListMetadata(paragraph, numbering) {\n        const paragraphProperties = getParagraphProperties(paragraph);\n        if (!paragraphProperties)\n            return null;\n        const numberingProperties = getNumberingProperties(paragraphProperties);\n        if (!numberingProperties)\n            return null;\n        const numIdElement = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(numberingProperties, "numId")[0]) || null;\n        const ilvlElement = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(numberingProperties, "ilvl")[0]) || null;\n        const numId = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(numIdElement, "val")) || "";\n        const indent = Number.parseInt((xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(ilvlElement, "val", "0")) || "0", 10);\n        if (!numId)\n            return null;\n        const listKind = (numberingParser === null || numberingParser === void 0 ? void 0 : numberingParser.resolveListKind(numbering, numId, Number.isFinite(indent) ? indent : 0)) || null;\n        if (!listKind)\n            return null;\n        return {\n            listKind,\n            indent: Number.isFinite(indent) ? indent : 0\n        };\n    }\n    function renderStructuredParagraphText(paragraph, text, styles, numbering, unsupportedTypes) {\n        const listMetadata = getListMetadata(paragraph, numbering);\n        if (!listMetadata) {\n            const level = getHeadingLevel(paragraph, styles);\n            if (level) {\n                return `${"#".repeat(Math.max(1, Math.min(level, 6)))} ${text}`;\n            }\n            return text;\n        }\n        const indent = "&nbsp;&nbsp;&nbsp;&nbsp;".repeat(Math.max(0, listMetadata.indent));\n        const marker = listMetadata.listKind === "ordered" ? "1." : "-";\n        return `${indent}${marker} ${text}`;\n    }\n    moduleRegistry.registerModule("documentParagraphParser", {\n        getHeadingLevel,\n        getListMetadata,\n        renderStructuredParagraphText\n    });\n})();\n' }, { "path": "dist/js/document-inline-parser.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const xmlUtils = moduleRegistry.getModule("xmlUtils");\n    const documentDrawingParser = moduleRegistry.getModule("documentDrawingParser");\n    const documentSummary = moduleRegistry.getModule("documentSummary");\n    const documentTextStyleParser = moduleRegistry.getModule("documentTextStyleParser");\n    const documentHyperlinkParser = moduleRegistry.getModule("documentHyperlinkParser");\n    function emptyStyle() {\n        return (documentTextStyleParser === null || documentTextStyleParser === void 0 ? void 0 : documentTextStyleParser.emptyStyle()) || {\n            bold: false,\n            italic: false,\n            strike: false,\n            underline: false\n        };\n    }\n    function getParagraphTextStyle(paragraph, styles) {\n        return (documentTextStyleParser === null || documentTextStyleParser === void 0 ? void 0 : documentTextStyleParser.getParagraphTextStyle(paragraph, styles)) || emptyStyle();\n    }\n    function normalizeInlineText(text) {\n        return text.replace(/\\t/g, "    ").replace(/ {2,}/g, " ").trim();\n    }\n    function describeUnsupportedElement(element, relationships) {\n        return (documentDrawingParser === null || documentDrawingParser === void 0 ? void 0 : documentDrawingParser.describeUnsupportedElement(element, relationships))\n            || (element.localName || "unknown");\n    }\n    function recordUnsupportedTrace(context, traces, type) {\n        documentSummary === null || documentSummary === void 0 ? void 0 : documentSummary.recordUnsupportedSummary(context.summary, type);\n        traces.push(type);\n    }\n    function extractTextboxText(textboxContent, relationships, styles, numbering, context, unsupportedTypes, renderStructuredParagraphText) {\n        const paragraphs = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(textboxContent, "p")) || [];\n        const parts = paragraphs\n            .map((paragraph) => {\n            const text = extractTextRuns(paragraph, relationships, styles, numbering, context, unsupportedTypes, renderStructuredParagraphText, getParagraphTextStyle(paragraph, styles));\n            if (!text)\n                return "";\n            return renderStructuredParagraphText(paragraph, text, styles, numbering, unsupportedTypes);\n        })\n            .filter((text) => !!text);\n        return parts.join("<br><br>").trim();\n    }\n    function renderRunElement(runElement, relationships, styles, context, unsupportedTypes, inheritedStyle, suppressUnderline) {\n        const pieces = [];\n        const effectiveStyle = (documentTextStyleParser === null || documentTextStyleParser === void 0 ? void 0 : documentTextStyleParser.resolveRunTextStyle(runElement, styles, inheritedStyle, suppressUnderline))\n            || inheritedStyle;\n        for (const child of Array.from(runElement.childNodes || [])) {\n            if (child.nodeType !== 1)\n                continue;\n            const element = child;\n            if (element.localName === "t") {\n                const text = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getTextContent(element)) || "";\n                pieces.push((documentTextStyleParser === null || documentTextStyleParser === void 0 ? void 0 : documentTextStyleParser.applyTextStyle(text, effectiveStyle)) || text);\n            }\n            else if (element.localName === "br") {\n                pieces.push("<br>");\n            }\n            else if (element.localName === "drawing" || element.localName === "pict" || element.localName === "object") {\n                recordUnsupportedTrace(context, unsupportedTypes, describeUnsupportedElement(element, relationships));\n            }\n        }\n        return pieces.join("");\n    }\n    function renderHyperlinkElement(hyperlinkElement, relationships, styles, numbering, context, unsupportedTypes, renderStructuredParagraphText, inheritedStyle) {\n        const linkText = extractTextRuns(hyperlinkElement, relationships, styles, numbering, context, unsupportedTypes, renderStructuredParagraphText, inheritedStyle, true);\n        return (documentHyperlinkParser === null || documentHyperlinkParser === void 0 ? void 0 : documentHyperlinkParser.renderHyperlink(hyperlinkElement, linkText, relationships, context)) || linkText;\n    }\n    function extractTextRuns(paragraph, relationships, styles, numbering, context, unsupportedTypes, renderStructuredParagraphText, inheritedStyle = emptyStyle(), suppressUnderline = false) {\n        const pieces = [];\n        for (const child of Array.from(paragraph.childNodes || [])) {\n            if (child.nodeType !== 1)\n                continue;\n            const element = child;\n            if (element.localName === "r") {\n                pieces.push(renderRunElement(element, relationships, styles, context, unsupportedTypes, inheritedStyle, suppressUnderline));\n            }\n            else if (element.localName === "txbxContent") {\n                const textboxText = extractTextboxText(element, relationships, styles, numbering, context, unsupportedTypes, renderStructuredParagraphText);\n                if (textboxText) {\n                    if (pieces.length > 0) {\n                        pieces.push("<br><br>");\n                    }\n                    pieces.push(textboxText);\n                }\n            }\n            else if (element.localName === "hyperlink") {\n                pieces.push(renderHyperlinkElement(element, relationships, styles, numbering, context, unsupportedTypes, renderStructuredParagraphText, inheritedStyle));\n            }\n            else if (element.localName === "bookmarkStart" || element.localName === "bookmarkEnd" || element.localName === "pPr" || element.localName === "proofErr") {\n                continue;\n            }\n            else {\n                recordUnsupportedTrace(context, unsupportedTypes, describeUnsupportedElement(element, relationships));\n            }\n        }\n        return normalizeInlineText(pieces.join(""));\n    }\n    moduleRegistry.registerModule("documentInlineParser", {\n        getParagraphTextStyle,\n        extractTextRuns\n    });\n})();\n' }, { "path": "dist/js/document-cell-parser.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const xmlUtils = moduleRegistry.getModule("xmlUtils");\n    const documentInlineParser = moduleRegistry.getModule("documentInlineParser");\n    const documentParagraphParser = moduleRegistry.getModule("documentParagraphParser");\n    function renderStructuredParagraphText(paragraph, text, styles, numbering, unsupportedTypes) {\n        return (documentParagraphParser === null || documentParagraphParser === void 0 ? void 0 : documentParagraphParser.renderStructuredParagraphText(paragraph, text, styles, numbering, unsupportedTypes)) || text;\n    }\n    function renderCellParagraph(paragraph, relationships, styles, numbering, context, unsupportedTypes) {\n        const text = (documentInlineParser === null || documentInlineParser === void 0 ? void 0 : documentInlineParser.extractTextRuns(paragraph, relationships, styles, numbering, context, unsupportedTypes, renderStructuredParagraphText, documentInlineParser.getParagraphTextStyle(paragraph, styles))) || "";\n        if (!text)\n            return "";\n        return renderStructuredParagraphText(paragraph, text, styles, numbering, unsupportedTypes);\n    }\n    function extractCellText(cell, relationships, styles, numbering, context, tableUnsupportedTypes) {\n        const paragraphs = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(cell, "p")) || [];\n        const parts = paragraphs\n            .map((paragraph) => renderCellParagraph(paragraph, relationships, styles, numbering, context, tableUnsupportedTypes))\n            .filter((text) => !!text);\n        return parts.join("<br><br>").trim();\n    }\n    moduleRegistry.registerModule("documentCellParser", {\n        extractCellText\n    });\n})();\n' }, { "path": "dist/js/document-table-parser.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const xmlUtils = moduleRegistry.getModule("xmlUtils");\n    function getGridSpan(cell) {\n        const cellProperties = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(cell, "tcPr")[0]) || null;\n        const gridSpan = cellProperties ? ((xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(cellProperties, "gridSpan")[0]) || null) : null;\n        const value = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(gridSpan, "val", "1")) || "1";\n        const parsed = Number.parseInt(value, 10);\n        return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;\n    }\n    function getVerticalMergeState(cell) {\n        const cellProperties = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(cell, "tcPr")[0]) || null;\n        const verticalMerge = cellProperties ? ((xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(cellProperties, "vMerge")[0]) || null) : null;\n        if (!verticalMerge)\n            return null;\n        const value = (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getWordAttributeValue(verticalMerge, "val")) || "";\n        if (!value || value === "continue")\n            return "continue";\n        if (value === "restart")\n            return "restart";\n        return null;\n    }\n    function normalizeRows(rows) {\n        const columnCount = rows.reduce((max, row) => Math.max(max, row.length), 0);\n        for (const row of rows) {\n            while (row.length < columnCount) {\n                row.push("");\n            }\n        }\n    }\n    function appendMergedCellPlaceholders(row, span) {\n        for (let index = 0; index < span; index += 1) {\n            row.push(index === 0 ? "\u2191M\u2191" : "\u2190M\u2190");\n        }\n    }\n    function appendHorizontalSpanPlaceholders(row, span) {\n        for (let index = 1; index < span; index += 1) {\n            row.push("\u2190M\u2190");\n        }\n    }\n    function parseTableRow(rowElement, unsupportedTypes, extractCellText) {\n        const row = [];\n        for (const cellElement of (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(rowElement, "tc")) || []) {\n            const span = getGridSpan(cellElement);\n            const verticalMergeState = getVerticalMergeState(cellElement);\n            const text = extractCellText(cellElement, unsupportedTypes);\n            if (verticalMergeState === "continue") {\n                appendMergedCellPlaceholders(row, span);\n                continue;\n            }\n            row.push(text);\n            appendHorizontalSpanPlaceholders(row, span);\n        }\n        return row;\n    }\n    function parseTableElement(table, extractCellText) {\n        const rows = [];\n        const unsupportedTypes = [];\n        for (const rowElement of (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(table, "tr")) || []) {\n            rows.push(parseTableRow(rowElement, unsupportedTypes, extractCellText));\n        }\n        normalizeRows(rows);\n        return {\n            kind: "table",\n            rows,\n            unsupportedTypes: unsupportedTypes.length ? unsupportedTypes : undefined\n        };\n    }\n    moduleRegistry.registerModule("documentTableParser", {\n        parseTableElement\n    });\n})();\n' }, { "path": "dist/js/document-block-parser.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const xmlUtils = moduleRegistry.getModule("xmlUtils");\n    const documentDrawingParser = moduleRegistry.getModule("documentDrawingParser");\n    const documentAnchorParser = moduleRegistry.getModule("documentAnchorParser");\n    const documentTableParser = moduleRegistry.getModule("documentTableParser");\n    const documentCellParser = moduleRegistry.getModule("documentCellParser");\n    const documentInlineParser = moduleRegistry.getModule("documentInlineParser");\n    const documentParagraphParser = moduleRegistry.getModule("documentParagraphParser");\n    const documentSummary = moduleRegistry.getModule("documentSummary");\n    function recordUnsupported(context, type) {\n        documentSummary === null || documentSummary === void 0 ? void 0 : documentSummary.recordUnsupportedSummary(context.summary, type);\n        return {\n            kind: "unsupported",\n            type\n        };\n    }\n    function describeUnsupportedElement(element, relationships) {\n        return (documentDrawingParser === null || documentDrawingParser === void 0 ? void 0 : documentDrawingParser.describeUnsupportedElement(element, relationships))\n            || (element.localName || "unknown");\n    }\n    function extractParagraphAnchors(paragraph) {\n        return (documentAnchorParser === null || documentAnchorParser === void 0 ? void 0 : documentAnchorParser.extractParagraphAnchors(paragraph)) || [];\n    }\n    function claimUniqueAnchorIds(anchorIds, emittedAnchorIds) {\n        return (documentAnchorParser === null || documentAnchorParser === void 0 ? void 0 : documentAnchorParser.claimUniqueAnchorIds(anchorIds, emittedAnchorIds)) || [];\n    }\n    function getHeadingLevel(paragraph, styles) {\n        return (documentParagraphParser === null || documentParagraphParser === void 0 ? void 0 : documentParagraphParser.getHeadingLevel(paragraph, styles)) || null;\n    }\n    function getListMetadata(paragraph, numbering) {\n        return (documentParagraphParser === null || documentParagraphParser === void 0 ? void 0 : documentParagraphParser.getListMetadata(paragraph, numbering)) || null;\n    }\n    function renderStructuredParagraphText(paragraph, text, styles, numbering, unsupportedTypes) {\n        return (documentParagraphParser === null || documentParagraphParser === void 0 ? void 0 : documentParagraphParser.renderStructuredParagraphText(paragraph, text, styles, numbering, unsupportedTypes)) || text;\n    }\n    function requireDocumentSummary() {\n        if (!documentSummary) {\n            throw new Error("DOCX document summary module is not loaded.");\n        }\n        return documentSummary;\n    }\n    function parseTableElement(table, relationships, styles, numbering, context) {\n        return (documentTableParser === null || documentTableParser === void 0 ? void 0 : documentTableParser.parseTableElement(table, (cell, tableUnsupportedTypes) => (documentCellParser === null || documentCellParser === void 0 ? void 0 : documentCellParser.extractCellText(cell, relationships, styles, numbering, context, tableUnsupportedTypes)) || "")) || { kind: "table", rows: [] };\n    }\n    function collectKnownAnchorIds(body) {\n        const knownAnchorIds = new Set();\n        for (const paragraphElement of (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getChildrenByLocalName(body, "p")) || []) {\n            for (const anchorId of extractParagraphAnchors(paragraphElement)) {\n                knownAnchorIds.add(anchorId);\n            }\n        }\n        return knownAnchorIds;\n    }\n    function parseParagraphBlock(element, relationships, styles, numbering, context, emittedAnchorIds) {\n        const unsupportedTypes = [];\n        const text = (documentInlineParser === null || documentInlineParser === void 0 ? void 0 : documentInlineParser.extractTextRuns(element, relationships, styles, numbering, context, unsupportedTypes, renderStructuredParagraphText, documentInlineParser.getParagraphTextStyle(element, styles))) || "";\n        const level = getHeadingLevel(element, styles);\n        const listMetadata = getListMetadata(element, numbering);\n        if (!text) {\n            return unsupportedTypes.length ? { kind: "unsupported", type: unsupportedTypes[0] } : null;\n        }\n        const anchorIds = claimUniqueAnchorIds(extractParagraphAnchors(element), emittedAnchorIds);\n        if (listMetadata) {\n            context.summary.listItems += 1;\n        }\n        else if (level) {\n            context.summary.headings += 1;\n        }\n        else {\n            context.summary.paragraphs += 1;\n        }\n        return {\n            kind: listMetadata ? "listItem" : (level ? "heading" : "paragraph"),\n            text,\n            level: level || undefined,\n            listKind: listMetadata === null || listMetadata === void 0 ? void 0 : listMetadata.listKind,\n            indent: listMetadata === null || listMetadata === void 0 ? void 0 : listMetadata.indent,\n            anchorIds,\n            unsupportedTypes: unsupportedTypes.length ? unsupportedTypes : undefined\n        };\n    }\n    function parseBodyElement(element, relationships, styles, numbering, context, emittedAnchorIds) {\n        if (element.localName === "p") {\n            return parseParagraphBlock(element, relationships, styles, numbering, context, emittedAnchorIds);\n        }\n        if (element.localName === "tbl") {\n            context.summary.tables += 1;\n            return parseTableElement(element, relationships, styles, numbering, context);\n        }\n        return recordUnsupported(context, describeUnsupportedElement(element, relationships));\n    }\n    function parseDocumentBody(body, relationships, styles, numbering) {\n        const summary = requireDocumentSummary().createEmptySummary();\n        const blocks = [];\n        if (!body) {\n            return { blocks, summary };\n        }\n        const emittedAnchorIds = new Set();\n        const context = {\n            summary,\n            knownAnchorIds: collectKnownAnchorIds(body)\n        };\n        for (const child of Array.from(body.childNodes || [])) {\n            if (child.nodeType !== 1)\n                continue;\n            const element = child;\n            const block = parseBodyElement(element, relationships, styles, numbering, context, emittedAnchorIds);\n            if (block) {\n                blocks.push(block);\n            }\n        }\n        return { blocks, summary };\n    }\n    moduleRegistry.registerModule("documentBlockParser", {\n        parseDocumentBody\n    });\n})();\n' }, { "path": "dist/js/document-parser.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const xmlUtils = moduleRegistry.getModule("xmlUtils");\n    const relsParser = moduleRegistry.getModule("relsParser");\n    const stylesParser = moduleRegistry.getModule("stylesParser");\n    const numberingParser = moduleRegistry.getModule("numberingParser");\n    const documentBlockParser = moduleRegistry.getModule("documentBlockParser");\n    const documentSummary = moduleRegistry.getModule("documentSummary");\n    function requireDocumentSummary() {\n        if (!documentSummary) {\n            throw new Error("DOCX document summary module is not loaded.");\n        }\n        return documentSummary;\n    }\n    function parseDocumentXml(documentXmlBytes, relationshipsBytes, stylesBytes, numberingBytes) {\n        const document = xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.parseXml(documentXmlBytes);\n        const body = document ? (xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.findDescendantsByLocalName(document, "body")[0]) || null : null;\n        const relationships = relationshipsBytes ? (relsParser === null || relsParser === void 0 ? void 0 : relsParser.parseRelationships(relationshipsBytes, "word/document.xml")) || new Map() : new Map();\n        const styles = (stylesParser === null || stylesParser === void 0 ? void 0 : stylesParser.parseStyles(stylesBytes)) || new Map();\n        const numbering = (numberingParser === null || numberingParser === void 0 ? void 0 : numberingParser.parseNumbering(numberingBytes)) || { abstractNums: new Map(), nums: new Map() };\n        return (documentBlockParser === null || documentBlockParser === void 0 ? void 0 : documentBlockParser.parseDocumentBody(body, relationships, styles, numbering))\n            || requireDocumentSummary().createEmptyParsedDocument();\n    }\n    moduleRegistry.registerModule("documentParser", {\n        parseDocumentXml\n    });\n})();\n' }, { "path": "dist/js/image-trace.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const imageTracePrefix = "drawing:image(";\n    function findSourcePathEnd(afterPrefix) {\n        const suffixMarkerIndexes = [\n            afterPrefix.indexOf("):alt("),\n            afterPrefix.indexOf("):size-emu(")\n        ].filter((index) => index >= 0);\n        return suffixMarkerIndexes.length > 0\n            ? Math.min(...suffixMarkerIndexes)\n            : (afterPrefix.endsWith(")") ? afterPrefix.length - 1 : -1);\n    }\n    function isSizeSuffix(suffix) {\n        return /^:size-emu\\([^)]+\\)$/.test(suffix);\n    }\n    function parseAltSuffix(suffix) {\n        const altAndRest = suffix.slice(":alt(".length);\n        const sizeMarkerIndex = altAndRest.lastIndexOf("):size-emu(");\n        const altEnd = sizeMarkerIndex >= 0\n            ? sizeMarkerIndex\n            : (altAndRest.endsWith(")") ? altAndRest.length - 1 : -1);\n        if (altEnd < 0)\n            return null;\n        const rest = altAndRest.slice(altEnd + 1);\n        if (rest && !isSizeSuffix(rest))\n            return null;\n        return altAndRest.slice(0, altEnd);\n    }\n    function parseImageTraceSuffix(suffix) {\n        if (!suffix)\n            return "";\n        if (suffix.startsWith(":alt(")) {\n            return parseAltSuffix(suffix);\n        }\n        return isSizeSuffix(suffix) ? "" : null;\n    }\n    function parseImageTrace(type) {\n        if (!type.startsWith(imageTracePrefix))\n            return null;\n        const afterPrefix = type.slice(imageTracePrefix.length);\n        const sourcePathEnd = findSourcePathEnd(afterPrefix);\n        if (sourcePathEnd < 0)\n            return null;\n        const sourcePath = afterPrefix.slice(0, sourcePathEnd);\n        if (!sourcePath)\n            return null;\n        const altText = parseImageTraceSuffix(afterPrefix.slice(sourcePathEnd + 1));\n        if (altText === null) {\n            return null;\n        }\n        return {\n            sourcePath,\n            altText\n        };\n    }\n    moduleRegistry.registerModule("imageTrace", {\n        parseImageTrace\n    });\n})();\n' }, { "path": "dist/js/asset-path.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    function getSafeDocxAssetPath(sourcePath) {\n        const normalized = String(sourcePath || "").replace(/\\\\/g, "/").replace(/^\\/+/, "");\n        const parts = normalized.split("/");\n        if (parts.length < 3\n            || parts[0] !== "word"\n            || parts[1] !== "media"\n            || parts.some((part) => !part || part === "." || part === "..")) {\n            return "";\n        }\n        return parts.join("/");\n    }\n    moduleRegistry.registerModule("assetPath", {\n        getSafeDocxAssetPath\n    });\n})();\n' }, { "path": "dist/js/docx-assets.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const imageTrace = moduleRegistry.getModule("imageTrace");\n    const xmlUtils = moduleRegistry.getModule("xmlUtils");\n    const assetPath = moduleRegistry.getModule("assetPath");\n    const textDecoder = new TextDecoder("utf-8");\n    function inferImageMediaType(sourcePath) {\n        const normalized = sourcePath.toLowerCase();\n        if (normalized.endsWith(".png"))\n            return "image/png";\n        if (normalized.endsWith(".jpg") || normalized.endsWith(".jpeg"))\n            return "image/jpeg";\n        if (normalized.endsWith(".gif"))\n            return "image/gif";\n        if (normalized.endsWith(".bmp"))\n            return "image/bmp";\n        if (normalized.endsWith(".webp"))\n            return "image/webp";\n        if (normalized.endsWith(".svg"))\n            return "image/svg+xml";\n        if (normalized.endsWith(".tif") || normalized.endsWith(".tiff"))\n            return "image/tiff";\n        return "application/octet-stream";\n    }\n    function normalizePackagePath(filePath) {\n        return String(filePath || "").replace(/^\\/+/, "");\n    }\n    function getPathExtension(filePath) {\n        const normalized = normalizePackagePath(filePath);\n        const lastSegment = normalized.split("/").pop() || "";\n        const extensionIndex = lastSegment.lastIndexOf(".");\n        if (extensionIndex < 0)\n            return "";\n        return lastSegment.slice(extensionIndex + 1).toLowerCase();\n    }\n    function addContentTypeDefault(parsed, element) {\n        const extension = ((xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getAttributeValue(element, "Extension")) || "").trim().toLowerCase();\n        const contentType = ((xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getAttributeValue(element, "ContentType")) || "").trim();\n        if (!extension || !contentType)\n            return;\n        parsed.defaults.set(extension, contentType);\n    }\n    function addContentTypeOverride(parsed, element) {\n        const partName = normalizePackagePath(((xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getAttributeValue(element, "PartName")) || "").trim());\n        const contentType = ((xmlUtils === null || xmlUtils === void 0 ? void 0 : xmlUtils.getAttributeValue(element, "ContentType")) || "").trim();\n        if (!partName || !contentType)\n            return;\n        parsed.overrides.set(partName, contentType);\n    }\n    function parseContentTypes(contentTypesBytes) {\n        const parsed = {\n            defaults: new Map(),\n            overrides: new Map()\n        };\n        if (!contentTypesBytes || typeof DOMParser !== "function") {\n            return parsed;\n        }\n        const xml = textDecoder.decode(contentTypesBytes);\n        const document = new DOMParser().parseFromString(xml, "application/xml");\n        const defaultElements = Array.from(document.getElementsByTagName("Default"));\n        const overrideElements = Array.from(document.getElementsByTagName("Override"));\n        for (const element of defaultElements) {\n            addContentTypeDefault(parsed, element);\n        }\n        for (const element of overrideElements) {\n            addContentTypeOverride(parsed, element);\n        }\n        return parsed;\n    }\n    function resolveImageMediaType(sourcePath, contentTypes) {\n        const normalizedSourcePath = normalizePackagePath(sourcePath);\n        const overrideType = contentTypes.overrides.get(normalizedSourcePath);\n        if (overrideType)\n            return overrideType;\n        const extensionType = contentTypes.defaults.get(getPathExtension(normalizedSourcePath));\n        if (extensionType)\n            return extensionType;\n        return inferImageMediaType(normalizedSourcePath);\n    }\n    function getBlockTraceTypes(block) {\n        return block.kind === "unsupported"\n            ? [block.type]\n            : (block.unsupportedTypes || []);\n    }\n    function createImageAsset(parsedTrace, traceType, block, blockIndex, traceIndex, safeSourcePath, bytes, contentTypes) {\n        return {\n            kind: "image",\n            sourcePath: safeSourcePath,\n            mediaType: resolveImageMediaType(safeSourcePath, contentTypes),\n            altText: parsedTrace.altText,\n            sourceTrace: traceType,\n            blockIndex,\n            documentPosition: {\n                blockIndex,\n                blockKind: block.kind,\n                traceIndex\n            },\n            bytes\n        };\n    }\n    function collectImageAssets(blocks, files, contentTypesBytes) {\n        const contentTypes = parseContentTypes(contentTypesBytes);\n        const assets = [];\n        const seen = new Set();\n        for (const [blockIndex, block] of blocks.entries()) {\n            for (const [traceIndex, traceType] of getBlockTraceTypes(block).entries()) {\n                const parsedTrace = imageTrace === null || imageTrace === void 0 ? void 0 : imageTrace.parseImageTrace(traceType);\n                if (!parsedTrace)\n                    continue;\n                const safeSourcePath = (assetPath === null || assetPath === void 0 ? void 0 : assetPath.getSafeDocxAssetPath(parsedTrace.sourcePath)) || "";\n                if (!safeSourcePath)\n                    continue;\n                if (seen.has(safeSourcePath))\n                    continue;\n                const bytes = files.get(safeSourcePath);\n                if (!bytes)\n                    continue;\n                seen.add(safeSourcePath);\n                assets.push(createImageAsset(parsedTrace, traceType, block, blockIndex, traceIndex, safeSourcePath, bytes, contentTypes));\n            }\n        }\n        return assets;\n    }\n    moduleRegistry.registerModule("docxAssets", {\n        collectImageAssets\n    });\n})();\n' }, { "path": "dist/js/markdown-renderer.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const imageTrace = moduleRegistry.getModule("imageTrace");\n    function escapeTableCell(text) {\n        return String(text || "").replace(/\\|/g, "\\\\|");\n    }\n    function renderTable(rows) {\n        if (!rows.length)\n            return "";\n        const header = rows[0];\n        const separator = header.map(() => "---");\n        const bodyRows = rows.slice(1);\n        return [\n            `| ${header.map((cell) => escapeTableCell(cell)).join(" | ")} |`,\n            `| ${separator.join(" | ")} |`,\n            ...bodyRows.map((row) => `| ${row.map((cell) => escapeTableCell(cell)).join(" | ")} |`)\n        ].join("\\n");\n    }\n    function renderAnchors(anchorIds) {\n        if (!anchorIds || anchorIds.length === 0)\n            return "";\n        return anchorIds.map((anchorId) => `<a id="${String(anchorId)}"></a>`).join("\\n");\n    }\n    function escapeHtmlCommentText(text) {\n        return String(text || "")\n            .replace(/--/g, "- -")\n            .replace(/>/g, "&gt;");\n    }\n    function renderUnsupportedComment(type) {\n        return `<!-- unsupported: ${escapeHtmlCommentText(type)} -->`;\n    }\n    function renderUnsupportedComments(unsupportedTypes) {\n        if (!unsupportedTypes || unsupportedTypes.length === 0)\n            return "";\n        return unsupportedTypes.map((type) => renderUnsupportedComment(type)).join("\\n");\n    }\n    function escapeMarkdownImageAltText(text) {\n        return String(text || "")\n            .replace(/\\s+/g, " ")\n            .replace(/[\\[\\]]/g, "")\n            .trim();\n    }\n    function formatImagePlaceholderAltText(text) {\n        return String(text || "").replace(/\\s+/g, " ").trim();\n    }\n    function escapeMarkdownLinkDestination(destination) {\n        return String(destination || "")\n            .replace(/%/g, "%25")\n            .replace(/\\s/g, (match) => encodeURIComponent(match))\n            .replace(/\\(/g, "%28")\n            .replace(/\\)/g, "%29")\n            .replace(/</g, "%3C")\n            .replace(/>/g, "%3E");\n    }\n    function renderImagePlaceholder(type, options) {\n        var _a;\n        const parsedImageTrace = imageTrace === null || imageTrace === void 0 ? void 0 : imageTrace.parseImageTrace(type);\n        if (!parsedImageTrace)\n            return "";\n        const resolvedPath = ((_a = options === null || options === void 0 ? void 0 : options.imagePathResolver) === null || _a === void 0 ? void 0 : _a.call(options, parsedImageTrace.sourcePath)) || "";\n        if (resolvedPath) {\n            return `![${escapeMarkdownImageAltText(parsedImageTrace.altText)}](${escapeMarkdownLinkDestination(resolvedPath)})`;\n        }\n        if (!parsedImageTrace.altText)\n            return "";\n        return `[Image: ${formatImagePlaceholderAltText(parsedImageTrace.altText)}]`;\n    }\n    function renderUnsupportedPlaceholders(unsupportedTypes, options) {\n        if (!unsupportedTypes || unsupportedTypes.length === 0)\n            return "";\n        return unsupportedTypes\n            .map((type) => renderImagePlaceholder(type, options))\n            .filter((text) => text !== "")\n            .join("\\n");\n    }\n    function appendUnsupportedArtifacts(content, unsupportedTypes, includeUnsupportedComments, options) {\n        const placeholders = renderUnsupportedPlaceholders(unsupportedTypes, options);\n        const comments = includeUnsupportedComments ? renderUnsupportedComments(unsupportedTypes) : "";\n        const withPlaceholders = placeholders ? `${content}\\n${placeholders}` : content;\n        return comments ? `${withPlaceholders}\\n${comments}` : withPlaceholders;\n    }\n    function renderSupportedBlockContent(block) {\n        if (block.kind === "heading") {\n            const anchors = renderAnchors(block.anchorIds);\n            const headingLine = `${"#".repeat(Math.max(1, Math.min(block.level || 1, 6)))} ${block.text}`;\n            return anchors ? `${anchors}\\n${headingLine}` : headingLine;\n        }\n        if (block.kind === "listItem") {\n            const indent = "    ".repeat(Math.max(0, block.indent || 0));\n            const marker = block.listKind === "ordered" ? "1." : "-";\n            const listLine = `${indent}${marker} ${block.text}`;\n            const anchors = renderAnchors(block.anchorIds);\n            return anchors ? `${anchors}\\n${listLine}` : listLine;\n        }\n        const anchors = renderAnchors(block.anchorIds);\n        return anchors ? `${anchors}\\n${block.text}` : block.text;\n    }\n    function renderUnsupportedBlock(block, includeUnsupportedComments, options) {\n        const placeholder = renderImagePlaceholder(block.type, options);\n        if (includeUnsupportedComments) {\n            const comment = renderUnsupportedComment(block.type);\n            return placeholder ? `${placeholder}\\n${comment}` : comment;\n        }\n        return placeholder;\n    }\n    function renderMarkdownBlock(block, includeUnsupportedComments, options) {\n        if (block.kind === "table") {\n            const table = renderTable(block.rows);\n            return appendUnsupportedArtifacts(table, block.unsupportedTypes, includeUnsupportedComments, options);\n        }\n        if (block.kind === "unsupported") {\n            return renderUnsupportedBlock(block, includeUnsupportedComments, options);\n        }\n        const content = renderSupportedBlockContent(block);\n        return appendUnsupportedArtifacts(content, block.unsupportedTypes, includeUnsupportedComments, options);\n    }\n    function renderMarkdown(parsedDocument, options) {\n        const includeUnsupportedComments = !!(options === null || options === void 0 ? void 0 : options.includeUnsupportedComments);\n        const renderedBlocks = parsedDocument.blocks\n            .map((block) => ({\n            kind: block.kind,\n            markdown: renderMarkdownBlock(block, includeUnsupportedComments, options)\n        }))\n            .filter((block) => block.markdown !== "");\n        return renderedBlocks.reduce((markdown, block, index) => {\n            if (index === 0)\n                return block.markdown;\n            const previousBlock = renderedBlocks[index - 1];\n            const separator = previousBlock.kind === "listItem" && block.kind === "listItem" ? "\\n" : "\\n\\n";\n            return `${markdown}${separator}${block.markdown}`;\n        }, "");\n    }\n    moduleRegistry.registerModule("markdownRenderer", {\n        renderMarkdown\n    });\n})();\n' }, { "path": "dist/js/summary.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const summaryFields = [\n        "paragraphs",\n        "headings",\n        "listItems",\n        "tables",\n        "images",\n        "imageAssets",\n        "drawingLikeUnsupported",\n        "links",\n        "internalLinks",\n        "externalLinks",\n        "unsupportedElements",\n        "unsupportedCommentTraces"\n    ];\n    function createSummary(parsedDocument) {\n        return {\n            ...parsedDocument.summary\n        };\n    }\n    function createSummaryText(parsedDocument) {\n        const summary = createSummary(parsedDocument);\n        return summaryFields.map((field) => `${field}: ${summary[field]}`).join("\\n");\n    }\n    moduleRegistry.registerModule("docxSummary", {\n        createSummary,\n        createSummaryText\n    });\n})();\n' }, { "path": "dist/js/asset-manifest.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    function createAssetManifestEntry(asset) {\n        return {\n            kind: asset.kind,\n            sourcePath: asset.sourcePath,\n            mediaType: asset.mediaType,\n            altText: asset.altText,\n            sourceTrace: asset.sourceTrace,\n            blockIndex: asset.blockIndex,\n            documentPosition: asset.documentPosition,\n            size: asset.bytes.length\n        };\n    }\n    function createAssetsManifestText(parsedDocument) {\n        return JSON.stringify({\n            version: 1,\n            assets: (parsedDocument.assets || []).map((asset) => createAssetManifestEntry(asset))\n        }, null, 2);\n    }\n    moduleRegistry.registerModule("assetManifest", {\n        createAssetsManifestText\n    });\n})();\n' }, { "path": "dist/js/docx-package-loader.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const zipIo = moduleRegistry.getModule("zipIo");\n    async function loadDocxPackage(arrayBuffer) {\n        const files = await (zipIo === null || zipIo === void 0 ? void 0 : zipIo.unzipEntries(arrayBuffer));\n        if (!files) {\n            throw new Error("ZIP module is not loaded.");\n        }\n        const documentXmlBytes = files.get("word/document.xml");\n        if (!documentXmlBytes) {\n            throw new Error("word/document.xml was not found.");\n        }\n        return {\n            files,\n            documentXmlBytes,\n            relationshipsBytes: files.get("word/_rels/document.xml.rels"),\n            stylesBytes: files.get("word/styles.xml"),\n            numberingBytes: files.get("word/numbering.xml"),\n            contentTypesBytes: files.get("[Content_Types].xml")\n        };\n    }\n    moduleRegistry.registerModule("docxPackageLoader", {\n        loadDocxPackage\n    });\n})();\n' }, { "path": "dist/js/core.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getDocx2mdModuleRegistry();\n    const docxPackageLoader = moduleRegistry.getModule("docxPackageLoader");\n    const documentParser = moduleRegistry.getModule("documentParser");\n    const docxAssets = moduleRegistry.getModule("docxAssets");\n    const markdownRenderer = moduleRegistry.getModule("markdownRenderer");\n    const docxSummary = moduleRegistry.getModule("docxSummary");\n    const assetManifest = moduleRegistry.getModule("assetManifest");\n    const documentSummary = moduleRegistry.getModule("documentSummary");\n    function requireDocumentSummary() {\n        if (!documentSummary) {\n            throw new Error("DOCX document summary module is not loaded.");\n        }\n        return documentSummary;\n    }\n    async function parseDocx(arrayBuffer) {\n        const loadedPackage = await (docxPackageLoader === null || docxPackageLoader === void 0 ? void 0 : docxPackageLoader.loadDocxPackage(arrayBuffer));\n        if (!loadedPackage) {\n            throw new Error("DOCX package loader module is not loaded.");\n        }\n        const parsedDocument = (documentParser === null || documentParser === void 0 ? void 0 : documentParser.parseDocumentXml(loadedPackage.documentXmlBytes, loadedPackage.relationshipsBytes, loadedPackage.stylesBytes, loadedPackage.numberingBytes))\n            || requireDocumentSummary().createEmptyParsedDocument();\n        const assets = (docxAssets === null || docxAssets === void 0 ? void 0 : docxAssets.collectImageAssets(parsedDocument.blocks, loadedPackage.files, loadedPackage.contentTypesBytes)) || [];\n        return {\n            ...parsedDocument,\n            summary: {\n                ...parsedDocument.summary,\n                imageAssets: assets.length\n            },\n            assets\n        };\n    }\n    moduleRegistry.registerModule("docx2md", {\n        parseDocx,\n        renderMarkdown: markdownRenderer === null || markdownRenderer === void 0 ? void 0 : markdownRenderer.renderMarkdown,\n        createSummary: docxSummary === null || docxSummary === void 0 ? void 0 : docxSummary.createSummary,\n        createSummaryText: docxSummary === null || docxSummary === void 0 ? void 0 : docxSummary.createSummaryText,\n        createAssetsManifestText: assetManifest === null || assetManifest === void 0 ? void 0 : assetManifest.createAssetsManifestText\n    });\n})();\n' }];
var cachedApi = null;
function installNodeDomGlobals() {
  if (typeof globalThis.DOMParser !== "function") {
    globalThis.DOMParser = import_xmldom.DOMParser;
    globalThis.Node = import_xmldom.Node;
    globalThis.Document = import_xmldom.Document;
    globalThis.Element = import_xmldom.Element;
    globalThis.XMLSerializer ??= import_xmldom.XMLSerializer;
  }
  if (typeof globalThis.Blob === "undefined" || typeof globalThis.Blob.prototype?.stream !== "function") {
    globalThis.Blob = NodeBlob;
  }
  globalThis.DecompressionStream ??= NodeDecompressionStream;
  globalThis.__docx2mdNodeRequire ??= nodeRequire;
}
function loadDocx2mdNodeApi() {
  if (cachedApi) return cachedApi;
  installNodeDomGlobals();
  delete globalThis.__docx2mdModuleRegistry;
  delete globalThis.getDocx2mdModuleRegistry;
  for (const entry of DOCX2MD_EMBEDDED_CORE_SOURCES) {
    new Function(entry.source)();
  }
  const api = globalThis.__docx2mdModuleRegistry?.getModule("docx2md");
  if (!api) {
    throw new Error("docx2md core API failed to initialize.");
  }
  cachedApi = api;
  return api;
}
var FLAG_OPTIONS = {
  "--summary"(options) {
    options.summary = true;
  },
  "--debug"(options) {
    options.includeUnsupportedComments = true;
  },
  "--include-unsupported-comments"(options) {
    options.includeUnsupportedComments = true;
  },
  "--verbose"(options) {
    options.verbose = true;
  }
};
var VALUE_OPTIONS = {
  "--out": {
    apply(options, value) {
      options.outPath = value;
    }
  },
  "--assets-dir": {
    apply(options, value) {
      options.assetsDir = value;
    }
  },
  "--summary-out": {
    apply(options, value) {
      options.summaryOutPath = value;
    }
  }
};
function printHelp() {
  console.log(`miku-docx2md - local-first DOCX to Markdown converter

USAGE
  node scripts/miku-docx2md-cli.mjs <input.docx> [options]
  node scripts/miku-docx2md-cli.mjs --version
  node scripts/miku-docx2md-cli.mjs --help

CONTRACT
  Input is exactly one local .docx file path.
  Primary output is Markdown.
  If --out is set, Markdown is written to that file.
  If --out is omitted, Markdown is written to stdout.
  --summary prints conversion summary text to stdout.
  --summary-out writes conversion summary text to a file.
  If --out is omitted, avoid --summary unless mixed stdout output is acceptable.
  --verbose writes progress and timing diagnostics to stderr.
  --help and --version are metadata commands and must be used without other arguments.

OPTIONS
  --out <file>
      Write Markdown to this file. Parent directories are created.

  --assets-dir <dir>
      Export resolved embedded image assets into this directory.
      Also writes <dir>/manifest.json.
      Markdown image links are made relative to --out, or to the current directory
      when --out is omitted.

  --summary
      Print summary text to stdout.

  --summary-out <file>
      Write summary text to this file. Parent directories are created.

  --debug
      Include unsupported-element HTML comment traces in Markdown.

  --include-unsupported-comments
      Alias for --debug.

  --verbose
      Write progress and timing diagnostics to stderr with a "verbose:" prefix.
      Primary Markdown and summary outputs are unchanged.

  --version
      Show product name and package version, then exit.

  --help
      Show this help, then exit.

OUTPUTS
  Markdown:
      Main converted document structure.

  Summary:
      Text counts and diagnostics for converted document content.

  Asset directory:
      Contains resolved embedded image files at package-relative paths such as
      word/media/example.png, plus manifest.json.

  Asset manifest:
      JSON with asset path, media type, alt text, byte size, source trace,
      block index, and document position.

EXAMPLES
  Write Markdown to a file:
    node scripts/miku-docx2md-cli.mjs ./sample.docx --out ./sample.md

  Print Markdown to stdout:
    node scripts/miku-docx2md-cli.mjs ./sample.docx

  Write Markdown and summary files:
    node scripts/miku-docx2md-cli.mjs ./sample.docx --out ./sample.md --summary-out ./sample.summary.txt

  Write Markdown and export image assets:
    node scripts/miku-docx2md-cli.mjs ./sample.docx --out ./sample.md --assets-dir ./sample.assets

  Include unsupported-element debug traces:
    node scripts/miku-docx2md-cli.mjs ./sample.docx --out ./sample.md --debug

  Show progress diagnostics on stderr:
    node scripts/miku-docx2md-cli.mjs ./sample.docx --out ./sample.md --verbose

  Show version:
    node scripts/miku-docx2md-cli.mjs --version

EXIT CODES
  0  Success, or explicit metadata command such as --version / --help.
  1  CLI usage error, file I/O error, parse error, or unexpected runtime error.
`);
}
async function readPackageVersion() {
  return "1.1.0";
}
function parseArgs(argv) {
  if (argv.length === 1 && argv[0] === "--help") {
    return { help: true };
  }
  if (argv.length === 1 && argv[0] === "--version") {
    return { version: true };
  }
  if (argv.includes("--help") || argv.includes("--version")) {
    throw new Error("Use --help or --version without other arguments.");
  }
  const options = {
    inputPath: null,
    outPath: null,
    assetsDir: null,
    summaryOutPath: null,
    summary: false,
    includeUnsupportedComments: false,
    verbose: false
  };
  const positionals = [];
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg.startsWith("--")) {
      positionals.push(arg);
      continue;
    }
    const flagHandler = FLAG_OPTIONS[arg];
    if (flagHandler) {
      flagHandler(options);
      continue;
    }
    const valueOption = VALUE_OPTIONS[arg];
    if (valueOption) {
      const value = argv[index + 1];
      if (!value) {
        throw new Error(`Missing value for ${arg}`);
      }
      index += 1;
      valueOption.apply(options, value);
      continue;
    }
    throw new Error(`Unknown option: ${arg}`);
  }
  if (positionals.length === 1) {
    [options.inputPath] = positionals;
  } else if (positionals.length > 1) {
    throw new Error("Specify exactly one input .docx file.");
  }
  return options;
}
function toArrayBuffer(buffer) {
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}
async function writeTextFile(outputPath, content) {
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, content, "utf8");
}
async function writeBinaryFile(outputPath, content) {
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, content);
}
function toPosixPath(filePath) {
  return filePath.split(path.sep).join("/");
}
function createVerboseLogger(enabled, startedAt) {
  return (message) => {
    if (!enabled) return;
    const elapsedMs = Date.now() - startedAt;
    console.error(`verbose: +${elapsedMs}ms ${message}`);
  };
}
function formatDocumentError(inputPath, stage, error) {
  const inputName = path.basename(inputPath || "input.docx");
  const message = error instanceof Error ? error.message : String(error);
  return `[${inputName}] ${stage}: ${message}`;
}
function requireAssetPathApi() {
  const assetPath = globalThis.__docx2mdModuleRegistry?.getModule("assetPath");
  if (!assetPath || typeof assetPath.getSafeDocxAssetPath !== "function") {
    throw new Error("DOCX asset path module is not loaded.");
  }
  return assetPath;
}
function resolveAssetOutputPath(assetsRootDir, sourcePath, assetPathApi) {
  const safeSourcePath = assetPathApi.getSafeDocxAssetPath(sourcePath);
  if (!safeSourcePath) {
    throw new Error(`Unsafe DOCX asset path: ${sourcePath}`);
  }
  const outputPath = path.resolve(assetsRootDir, ...safeSourcePath.split("/"));
  const relativePath = path.relative(assetsRootDir, outputPath);
  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    throw new Error(`DOCX asset path escapes assets directory: ${sourcePath}`);
  }
  return outputPath;
}
async function main() {
  const startedAt = Date.now();
  const options = parseArgs(process.argv.slice(2));
  const verbose = createVerboseLogger(options.verbose, startedAt);
  if (options.version) {
    const version = await readPackageVersion();
    console.log(`miku-docx2md ${version}`);
    process.exit(0);
  }
  if (options.help || !options.inputPath) {
    printHelp();
    process.exit(options.help ? 0 : 1);
  }
  const api = loadDocx2mdNodeApi();
  const assetPathApi = requireAssetPathApi();
  const inputPath = path.resolve(options.inputPath);
  const resolvedOutputPath = options.outPath ? path.resolve(options.outPath) : null;
  const resolvedAssetsDir = options.assetsDir ? path.resolve(options.assetsDir) : null;
  try {
    verbose(`input=${options.inputPath}`);
    verbose(`output=${options.outPath || "stdout"}`);
    verbose(`summary=${options.summaryOutPath || (options.summary ? "stdout" : "disabled")}`);
    verbose(`assets=${options.assetsDir || "disabled"}`);
    let inputBytes;
    try {
      inputBytes = await fs.readFile(inputPath);
    } catch (error) {
      throw new Error(formatDocumentError(inputPath, "read failed", error));
    }
    verbose(`input-bytes=${inputBytes.byteLength}`);
    let parsed;
    try {
      parsed = await api.parseDocx(toArrayBuffer(inputBytes));
    } catch (error) {
      throw new Error(formatDocumentError(inputPath, "parse failed", error));
    }
    verbose(`parsed blocks=${parsed.blocks.length} assets=${parsed.assets.length}`);
    const markdown = api.renderMarkdown(parsed, {
      includeUnsupportedComments: options.includeUnsupportedComments,
      imagePathResolver: resolvedAssetsDir ? (sourcePath) => {
        const safeSourcePath = assetPathApi.getSafeDocxAssetPath(sourcePath);
        if (!safeSourcePath) return "";
        const exportedAssetPath = path.resolve(resolvedAssetsDir, ...safeSourcePath.split("/"));
        const relativeBase = resolvedOutputPath ? path.dirname(resolvedOutputPath) : process.cwd();
        return toPosixPath(path.relative(relativeBase, exportedAssetPath) || path.basename(exportedAssetPath));
      } : void 0
    });
    const summaryText = api.createSummaryText(parsed);
    const assetsManifestText = api.createAssetsManifestText(parsed);
    if (resolvedAssetsDir) {
      try {
        await writeTextFile(path.join(resolvedAssetsDir, "manifest.json"), assetsManifestText);
        for (const asset of parsed.assets || []) {
          await writeBinaryFile(resolveAssetOutputPath(resolvedAssetsDir, asset.sourcePath, assetPathApi), asset.bytes);
        }
      } catch (error) {
        throw new Error(formatDocumentError(inputPath, "asset write failed", error));
      }
      verbose(`assets-written count=${parsed.assets.length}`);
    }
    if (options.summary) {
      console.log(summaryText);
      verbose("summary-written stdout");
    }
    if (options.summaryOutPath) {
      try {
        await writeTextFile(path.resolve(options.summaryOutPath), summaryText);
      } catch (error) {
        throw new Error(formatDocumentError(inputPath, "summary write failed", error));
      }
      verbose(`summary-written ${options.summaryOutPath}`);
    }
    if (resolvedOutputPath) {
      try {
        await writeTextFile(resolvedOutputPath, markdown);
      } catch (error) {
        throw new Error(formatDocumentError(inputPath, "markdown write failed", error));
      }
      verbose(`markdown-written ${options.outPath}`);
    } else {
      process.stdout.write(markdown);
      verbose("markdown-written stdout");
    }
    verbose(`done total-ms=${Date.now() - startedAt}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (message.startsWith(`[${path.basename(inputPath)}] `)) {
      throw error;
    }
    throw new Error(formatDocumentError(inputPath, "failed", error));
  }
}
main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exit(1);
});
