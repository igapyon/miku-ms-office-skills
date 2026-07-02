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

// bundle/.miku-xlsx2md-cli-entry.mjs
var import_xmldom = __toESM(require_lib(), 1);
import { Blob as NodeBlob } from "node:buffer";
import { createRequire } from "node:module";
import { DecompressionStream as NodeDecompressionStream } from "node:stream/web";

// scripts/lib/xlsx2md-cli-runner.mjs
import fs from "node:fs/promises";
import path from "node:path";
var SHAPE_DETAILS_MODES = ["include", "exclude"];
var FRONT_MATTER_MODES = ["include", "exclude"];
var ENCODINGS = ["utf-8", "shift_jis", "utf-16le", "utf-16be", "utf-32le", "utf-32be"];
var BOM_MODES = ["off", "on"];
var FLAG_OPTIONS = {
  "--help"(options) {
    options.help = true;
  },
  "--version"(options) {
    options.version = true;
  },
  "--include-shape-details"(options) {
    options.includeShapeDetails = true;
  },
  "--no-header-row"(options) {
    options.treatFirstRowAsHeader = false;
  },
  "--no-trim-text"(options) {
    options.trimText = false;
  },
  "--keep-empty-rows"(options) {
    options.removeEmptyRows = false;
  },
  "--keep-empty-columns"(options) {
    options.removeEmptyColumns = false;
  },
  "--summary"(options) {
    options.summary = true;
  }
};
function printHelp(stdout = console.log) {
  stdout(`Usage:
  node scripts/miku-xlsx2md-cli.mjs <input.xlsx> [options]

Purpose:
  Convert one local Excel .xlsx workbook into AI-friendly, human-reviewable Markdown.
  The conversion extracts workbook structure and semantic content; it does not try to
  reproduce the exact Excel visual layout.

Options:
  --out <file>                  Write combined Markdown to this file
  --zip <file>                  Write ZIP export to this file
  --encoding <value>            utf-8 | shift_jis | utf-16le | utf-16be | utf-32le | utf-32be (default: utf-8)
  --bom <value>                 off | on (default: off; shift_jis does not allow on)
  --output-mode <mode>          display | raw | both (default: display)
  --formatting-mode <mode>      plain | github (default: github)
  --table-detection-mode <mode> balanced | border | planner-aware (default: balanced)
  --shape-details <mode>        include | exclude (default: exclude)
  --front-matter <mode>         include | exclude (default: include)
  --include-shape-details       Alias for --shape-details include
  --no-header-row               Do not treat the first row as a table header
  --no-trim-text                Preserve surrounding whitespace
  --keep-empty-rows             Keep empty rows
  --keep-empty-columns          Keep empty columns
  --summary                     Print per-sheet summary to stdout
  --version                     Show version and exit
  --help                        Show this help and exit

GUI-aligned defaults:
  output-mode=display, formatting-mode=github, table-detection-mode=balanced, shape-details=exclude, front-matter=include

Output contract for agents:
  - The primary Markdown output is one workbook-level combined Markdown document.
  - ZIP output contains output/<workbook>.md plus extracted assets under output/assets/.
  - Combined Markdown starts with YAML front matter unless --front-matter exclude is specified.
  - The Markdown body starts with "# Book: <workbook>", followed by "## Sheet: <sheet>"
    sections in workbook sheet order.
  - Use --summary for machine-readable-ish progress logs; use the Markdown front
    matter and body as the durable conversion artifact.

Front matter fields:
  title, type, conversion

Conversion fields:
  tool, version, output_mode, formatting_mode, table_detection_mode, shape_details

Exit codes:
  0                             Success
  1                             Error
`);
}
function normalizeEnumOption(value, allowedValues, label, aliases = {}) {
  const normalized = aliases[value] || value;
  if (!allowedValues.includes(normalized)) {
    throw new Error(`Invalid ${label}: ${value}`);
  }
  return normalized;
}
function createValueOptions(markdownOptions) {
  return {
    "--out": {
      apply(options, value) {
        options.outPath = value;
      }
    },
    "--zip": {
      apply(options, value) {
        options.zipPath = value;
      }
    },
    "--output-mode": {
      validate: (value) => normalizeEnumOption(value, markdownOptions.OUTPUT_MODES, "output mode"),
      apply(options, value) {
        options.outputMode = value;
      }
    },
    "--formatting-mode": {
      validate: (value) => normalizeEnumOption(value, markdownOptions.FORMATTING_MODES, "formatting mode"),
      apply(options, value) {
        options.formattingMode = value;
      }
    },
    "--table-detection-mode": {
      validate: (value) => normalizeEnumOption(
        value,
        markdownOptions.TABLE_DETECTION_MODES,
        "table detection mode",
        markdownOptions.TABLE_DETECTION_MODE_ALIASES
      ),
      apply(options, value) {
        options.tableDetectionMode = value;
      }
    },
    "--shape-details": {
      validate: (value) => normalizeEnumOption(value, SHAPE_DETAILS_MODES, "shape details mode"),
      apply(options, value) {
        options.includeShapeDetails = value === "include";
      }
    },
    "--front-matter": {
      validate: (value) => normalizeEnumOption(value, FRONT_MATTER_MODES, "front matter mode"),
      apply(options, value) {
        options.includeFrontMatter = value === "include";
      }
    },
    "--encoding": {
      validate: (value) => normalizeEnumOption(value, ENCODINGS, "encoding"),
      apply(options, value) {
        options.encoding = value;
      }
    },
    "--bom": {
      validate: (value) => normalizeEnumOption(value, BOM_MODES, "BOM mode"),
      apply(options, value) {
        options.bom = value;
      }
    }
  };
}
function parseArgs(argv, markdownOptions) {
  const valueOptions = createValueOptions(markdownOptions);
  const options = {
    treatFirstRowAsHeader: true,
    trimText: true,
    removeEmptyRows: true,
    removeEmptyColumns: true,
    includeShapeDetails: false,
    includeFrontMatter: true,
    outputMode: "display",
    formattingMode: "github",
    tableDetectionMode: "balanced",
    encoding: "utf-8",
    bom: "off",
    summary: false,
    outPath: null,
    zipPath: null
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
    const optionDefinition = valueOptions[arg];
    if (optionDefinition) {
      const value = argv[index + 1];
      if (!value) {
        throw new Error(`Missing value for ${arg}`);
      }
      index += 1;
      const normalizedValue = typeof optionDefinition.validate === "function" ? optionDefinition.validate(value) : value;
      optionDefinition.apply(options, normalizedValue);
      continue;
    }
    throw new Error(`Unknown option: ${arg}`);
  }
  if (positionals.length === 0) {
    options.inputPath = null;
  } else if (positionals.length === 1) {
    [options.inputPath] = positionals;
  } else {
    throw new Error("Specify exactly one input workbook.");
  }
  return options;
}
function toArrayBuffer(buffer) {
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}
async function writeBinaryFile(outputPath, content) {
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, content);
}
function formatWorkbookError(inputPath, stage, error) {
  const message = error instanceof Error ? error.message : String(error);
  return `[${path.basename(inputPath)}] ${stage}: ${message}`;
}
function printWorkbookSummary(api, workbookName, files) {
  console.log(`[workbook] ${workbookName}`);
  for (const file of files) {
    console.log(api.createSummaryText(file));
    console.log("");
  }
}
async function runXlsx2mdCli({ argv, loadApi, readPackageVersion }) {
  const api = loadApi();
  const options = parseArgs(argv, api.markdownOptions);
  if (options.version) {
    console.log(await readPackageVersion());
    return 0;
  }
  if (options.help || !options.inputPath) {
    printHelp();
    return options.help ? 0 : 1;
  }
  const inputPath = path.resolve(options.inputPath);
  try {
    if (options.encoding === "shift_jis" && options.bom === "on") {
      throw new Error(formatWorkbookError(inputPath, "option validation failed", "BOM cannot be enabled for shift_jis."));
    }
    let inputBytes;
    try {
      inputBytes = await fs.readFile(inputPath);
    } catch (error) {
      throw new Error(formatWorkbookError(inputPath, "read failed", error));
    }
    let workbook;
    try {
      workbook = await api.parseWorkbook(toArrayBuffer(inputBytes), path.basename(inputPath));
    } catch (error) {
      throw new Error(formatWorkbookError(inputPath, "parse failed", error));
    }
    let files;
    try {
      files = api.convertWorkbookToMarkdownFiles(workbook, {
        treatFirstRowAsHeader: options.treatFirstRowAsHeader,
        trimText: options.trimText,
        removeEmptyRows: options.removeEmptyRows,
        removeEmptyColumns: options.removeEmptyColumns,
        includeShapeDetails: options.includeShapeDetails,
        outputMode: options.outputMode,
        formattingMode: options.formattingMode,
        tableDetectionMode: options.tableDetectionMode
      });
    } catch (error) {
      throw new Error(formatWorkbookError(inputPath, "convert failed", error));
    }
    if (options.summary) {
      printWorkbookSummary(api, path.basename(inputPath), files);
    }
    const packageVersion = await readPackageVersion();
    const combined = api.createCombinedMarkdownExportPayload(workbook, files, {
      encoding: options.encoding,
      bom: options.bom,
      toolVersion: packageVersion,
      shapeDetails: options.includeShapeDetails ? "include" : "exclude",
      frontMatter: options.includeFrontMatter ? "include" : "exclude"
    });
    if (options.zipPath) {
      try {
        const zipBytes = api.createWorkbookExportArchive(workbook, files, {
          encoding: options.encoding,
          bom: options.bom,
          toolVersion: packageVersion,
          shapeDetails: options.includeShapeDetails ? "include" : "exclude",
          frontMatter: options.includeFrontMatter ? "include" : "exclude"
        });
        await writeBinaryFile(path.resolve(options.zipPath), zipBytes);
      } catch (error) {
        throw new Error(formatWorkbookError(inputPath, "zip write failed", error));
      }
    }
    if (!options.zipPath || options.outPath) {
      const markdownOutputPath = options.outPath ? path.resolve(options.outPath) : path.resolve(combined.fileName);
      try {
        await writeBinaryFile(markdownOutputPath, combined.data);
      } catch (error) {
        throw new Error(formatWorkbookError(inputPath, "markdown write failed", error));
      }
    }
  } catch (error) {
    if (error instanceof Error && error.message.startsWith(`[${path.basename(inputPath)}] `)) {
      throw error;
    }
    throw new Error(formatWorkbookError(inputPath, "failed", error));
  }
  return 0;
}

// bundle/.miku-xlsx2md-cli-entry.mjs
var XLSX2MD_RUNTIME_CORE_SOURCES = [{ "path": "dist/js/module-registry.js", "source": "/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    var _a;\n    var _b;\n    const registry = ((_a = (_b = globalThis).__xlsx2mdModuleRegistryStore) !== null && _a !== void 0 ? _a : (_b.__xlsx2mdModuleRegistryStore = {}));\n    function getModule(name) {\n        return registry[name];\n    }\n    function requireModule(name, errorMessage) {\n        const moduleValue = getModule(name);\n        if (!moduleValue) {\n            throw new Error(errorMessage);\n        }\n        return moduleValue;\n    }\n    function registerModule(name, moduleValue) {\n        registry[name] = moduleValue;\n        return moduleValue;\n    }\n    globalThis.__xlsx2mdModuleRegistry = {\n        getModule,\n        requireModule,\n        registerModule\n    };\n})();\n" }, { "path": "dist/js/module-registry-access.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    globalThis.getXlsx2mdModuleRegistry = function getXlsx2mdModuleRegistry() {\n        const moduleRegistry = globalThis.__xlsx2mdModuleRegistry;\n        if (!moduleRegistry) {\n            throw new Error("xlsx2md module registry is not loaded");\n        }\n        return moduleRegistry;\n    };\n    globalThis.requireXlsx2mdRuntimeEnv = function requireXlsx2mdRuntimeEnv() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("runtimeEnv", "xlsx2md runtime env module is not loaded");\n    };\n    globalThis.requireXlsx2mdMarkdownNormalize = function requireXlsx2mdMarkdownNormalize() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("markdownNormalize", "xlsx2md markdown normalize module is not loaded");\n    };\n    globalThis.requireXlsx2mdZipIo = function requireXlsx2mdZipIo() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("zipIo", "xlsx2md zip io module is not loaded");\n    };\n    globalThis.requireXlsx2mdTextEncoding = function requireXlsx2mdTextEncoding() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("textEncoding", "xlsx2md text encoding module is not loaded");\n    };\n    globalThis.requireXlsx2mdMarkdownOptions = function requireXlsx2mdMarkdownOptions() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("markdownOptions", "xlsx2md markdown options module is not loaded");\n    };\n    globalThis.requireXlsx2mdMarkdownEscape = function requireXlsx2mdMarkdownEscape() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("markdownEscape", "xlsx2md markdown escape module is not loaded");\n    };\n    globalThis.requireXlsx2mdMarkdownTableEscape = function requireXlsx2mdMarkdownTableEscape() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("markdownTableEscape", "xlsx2md markdown table escape module is not loaded");\n    };\n    globalThis.requireXlsx2mdRichTextPlainFormatterModule = function requireXlsx2mdRichTextPlainFormatterModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("richTextPlainFormatter", "xlsx2md rich text plain formatter module is not loaded");\n    };\n    globalThis.getXlsx2mdDrawingHelperModule = function getXlsx2mdDrawingHelperModule() {\n        return globalThis.getXlsx2mdModuleRegistry().getModule("officeDrawing") || null;\n    };\n    globalThis.requireXlsx2mdNarrativeStructureModule = function requireXlsx2mdNarrativeStructureModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("narrativeStructure", "xlsx2md narrative structure module is not loaded");\n    };\n    globalThis.requireXlsx2mdRichTextParserModule = function requireXlsx2mdRichTextParserModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("richTextParser", "xlsx2md rich text parser module is not loaded");\n    };\n    globalThis.requireXlsx2mdRichTextGithubFormatterModule = function requireXlsx2mdRichTextGithubFormatterModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("richTextGithubFormatter", "xlsx2md rich text github formatter module is not loaded");\n    };\n    globalThis.requireXlsx2mdRichTextRendererModule = function requireXlsx2mdRichTextRendererModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("richTextRenderer", "xlsx2md rich text renderer module is not loaded");\n    };\n    globalThis.requireXlsx2mdTableDetectorModule = function requireXlsx2mdTableDetectorModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("tableDetector", "xlsx2md table detector module is not loaded");\n    };\n    globalThis.requireXlsx2mdMarkdownExportModule = function requireXlsx2mdMarkdownExportModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("markdownExport", "xlsx2md markdown export module is not loaded");\n    };\n    globalThis.requireXlsx2mdStylesParserModule = function requireXlsx2mdStylesParserModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("stylesParser", "xlsx2md styles parser module is not loaded");\n    };\n    globalThis.requireXlsx2mdSharedStringsModule = function requireXlsx2mdSharedStringsModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("sharedStrings", "xlsx2md shared strings module is not loaded");\n    };\n    globalThis.requireXlsx2mdWorksheetTablesModule = function requireXlsx2mdWorksheetTablesModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("worksheetTables", "xlsx2md worksheet tables module is not loaded");\n    };\n    globalThis.requireXlsx2mdCellFormatModule = function requireXlsx2mdCellFormatModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("cellFormat", "xlsx2md cell format module is not loaded");\n    };\n    globalThis.requireXlsx2mdXmlUtilsModule = function requireXlsx2mdXmlUtilsModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("xmlUtils", "xlsx2md xml utils module is not loaded");\n    };\n    globalThis.requireXlsx2mdAddressUtilsModule = function requireXlsx2mdAddressUtilsModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("addressUtils", "xlsx2md address utils module is not loaded");\n    };\n    globalThis.requireXlsx2mdRelsParserModule = function requireXlsx2mdRelsParserModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("relsParser", "xlsx2md rels parser module is not loaded");\n    };\n    globalThis.requireXlsx2mdFormulaReferenceUtilsModule = function requireXlsx2mdFormulaReferenceUtilsModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("formulaReferenceUtils", "xlsx2md formula reference utils module is not loaded");\n    };\n    globalThis.requireXlsx2mdSheetMarkdownModule = function requireXlsx2mdSheetMarkdownModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("sheetMarkdown", "xlsx2md sheet markdown module is not loaded");\n    };\n    globalThis.requireXlsx2mdFormulaEngineModule = function requireXlsx2mdFormulaEngineModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("formulaEngine", "xlsx2md formula engine module is not loaded");\n    };\n    globalThis.requireXlsx2mdSheetAssetsModule = function requireXlsx2mdSheetAssetsModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("sheetAssets", "xlsx2md sheet assets module is not loaded");\n    };\n    globalThis.requireXlsx2mdWorksheetParserModule = function requireXlsx2mdWorksheetParserModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("worksheetParser", "xlsx2md worksheet parser module is not loaded");\n    };\n    globalThis.requireXlsx2mdWorkbookLoaderModule = function requireXlsx2mdWorkbookLoaderModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("workbookLoader", "xlsx2md workbook loader module is not loaded");\n    };\n    globalThis.requireXlsx2mdFormulaResolverModule = function requireXlsx2mdFormulaResolverModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("formulaResolver", "xlsx2md formula resolver module is not loaded");\n    };\n    globalThis.requireXlsx2mdFormulaLegacyModule = function requireXlsx2mdFormulaLegacyModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("formulaLegacy", "xlsx2md formula legacy module is not loaded");\n    };\n    globalThis.requireXlsx2mdFormulaAstModule = function requireXlsx2mdFormulaAstModule() {\n        return globalThis.getXlsx2mdModuleRegistry().requireModule("formulaAst", "xlsx2md formula ast module is not loaded");\n    };\n})();\n' }, { "path": "dist/js/ms-office-core.js", "source": 'var __mikuMsOfficeCoreRelease = (() => {\n  var __defProp = Object.defineProperty;\n  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;\n  var __getOwnPropNames = Object.getOwnPropertyNames;\n  var __hasOwnProp = Object.prototype.hasOwnProperty;\n  var __export = (target, all) => {\n    for (var name in all)\n      __defProp(target, name, { get: all[name], enumerable: true });\n  };\n  var __copyProps = (to, from, except, desc) => {\n    if (from && typeof from === "object" || typeof from === "function") {\n      for (let key of __getOwnPropNames(from))\n        if (!__hasOwnProp.call(to, key) && key !== except)\n          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n    }\n    return to;\n  };\n  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n  var stdin_exports = {};\n  __export(stdin_exports, {\n    asBytes: () => asBytes,\n    buildOpcContentTypesXml: () => buildOpcContentTypesXml,\n    buildOpcRelationshipsPath: () => buildOpcRelationshipsPath,\n    buildOpcRelationshipsXml: () => buildOpcRelationshipsXml,\n    compareOpcPartPaths: () => compareOpcPartPaths,\n    concatBytes: () => concatBytes,\n    createDiagnostic: () => createDiagnostic,\n    decodeXmlEntities: () => decodeXmlEntities,\n    escapeXmlAttribute: () => escapeXmlAttribute,\n    escapeXmlText: () => escapeXmlText,\n    getDefaultZipEntryTimestamp: () => getDefaultZipEntryTimestamp,\n    getZipEntry: () => getZipEntry,\n    getZipTextEntry: () => getZipTextEntry,\n    listOfficeMediaParts: () => listOfficeMediaParts,\n    normalizeOpcPartPath: () => normalizeOpcPartPath,\n    parseOpcContentTypesXml: () => parseOpcContentTypesXml,\n    parseOpcRelationshipsXml: () => parseOpcRelationshipsXml,\n    parseXmlAttributes: () => parseXmlAttributes,\n    readOfficePackage: () => readOfficePackage,\n    readOfficePackageAsync: () => readOfficePackageAsync,\n    readOfficePartRelationships: () => readOfficePartRelationships,\n    readUint16: () => readUint16,\n    readUint32: () => readUint32,\n    readZipPackage: () => readZipPackage,\n    readZipPackageAsync: () => readZipPackageAsync,\n    relationshipArrayToMap: () => relationshipArrayToMap,\n    resolveOpcContentType: () => resolveOpcContentType,\n    resolveOpcRelationshipTarget: () => resolveOpcRelationshipTarget,\n    resolveOpcRelationships: () => resolveOpcRelationships,\n    sanitizeXmlText: () => sanitizeXmlText,\n    textDecoder: () => textDecoder,\n    textEncoder: () => textEncoder,\n    upsertZipEntry: () => upsertZipEntry,\n    writeUint16: () => writeUint16,\n    writeUint32: () => writeUint32,\n    writeZipPackage: () => writeZipPackage\n  });\n  var textEncoder = new TextEncoder();\n  var textDecoder = new TextDecoder();\n  function readUint16(data, offset) {\n    return data[offset] | data[offset + 1] << 8;\n  }\n  function readUint32(data, offset) {\n    return (data[offset] | data[offset + 1] << 8 | data[offset + 2] << 16 | data[offset + 3] << 24) >>> 0;\n  }\n  function writeUint16(buffer, offset, value) {\n    buffer[offset] = value & 255;\n    buffer[offset + 1] = value >>> 8 & 255;\n  }\n  function writeUint32(buffer, offset, value) {\n    buffer[offset] = value & 255;\n    buffer[offset + 1] = value >>> 8 & 255;\n    buffer[offset + 2] = value >>> 16 & 255;\n    buffer[offset + 3] = value >>> 24 & 255;\n  }\n  function concatBytes(parts) {\n    const total = parts.reduce((sum, part) => sum + part.length, 0);\n    const output = new Uint8Array(total);\n    let offset = 0;\n    for (const part of parts) {\n      output.set(part, offset);\n      offset += part.length;\n    }\n    return output;\n  }\n  function asBytes(data) {\n    return typeof data === "string" ? textEncoder.encode(data) : data;\n  }\n  function createDiagnostic(severity, code, message, path) {\n    return path === void 0 ? { severity, code, message } : { severity, code, message, path };\n  }\n  function normalizeOpcPartPath(partPath) {\n    var _a;\n    const withoutHash = (_a = partPath.split("#", 1)[0]) != null ? _a : "";\n    const raw = withoutHash.replace(/\\\\/g, "/").replace(/^\\/+/, "");\n    const parts = [];\n    for (const part of raw.split("/")) {\n      if (part === "" || part === ".") {\n        continue;\n      }\n      if (part === "..") {\n        if (parts.length === 0) {\n          throw new Error(`OPC part path escapes package root: ${partPath}`);\n        }\n        parts.pop();\n        continue;\n      }\n      parts.push(part);\n    }\n    if (parts.length === 0) {\n      throw new Error(`OPC part path is empty: ${partPath}`);\n    }\n    return parts.join("/");\n  }\n  function resolveOpcRelationshipTarget(sourcePartPath, target, targetMode = "") {\n    if (targetMode.toLowerCase() === "external") {\n      return target;\n    }\n    if (/^[a-z][a-z0-9+.-]*:/i.test(target)) {\n      return target;\n    }\n    if (target.startsWith("/")) {\n      return normalizeOpcPartPath(target);\n    }\n    const source = normalizeOpcPartPath(sourcePartPath);\n    const sourceDirectory = source.includes("/") ? source.slice(0, source.lastIndexOf("/")) : "";\n    return normalizeOpcPartPath(sourceDirectory === "" ? target : `${sourceDirectory}/${target}`);\n  }\n  function compareOpcPartPaths(a, b) {\n    return a < b ? -1 : a > b ? 1 : 0;\n  }\n  function buildOpcRelationshipsPath(sourcePartPath) {\n    const source = normalizeOpcPartPath(sourcePartPath);\n    const slashIndex = source.lastIndexOf("/");\n    const directory = slashIndex < 0 ? "" : source.slice(0, slashIndex);\n    const fileName = slashIndex < 0 ? source : source.slice(slashIndex + 1);\n    return directory === "" ? `_rels/${fileName}.rels` : `${directory}/_rels/${fileName}.rels`;\n  }\n  function escapeXmlText(value) {\n    return sanitizeXmlText(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");\n  }\n  function escapeXmlAttribute(value) {\n    return escapeXmlText(value).replace(/"/g, "&quot;").replace(/\'/g, "&apos;");\n  }\n  function sanitizeXmlText(value) {\n    return value.replace(/[^\\u0009\\u000A\\u000D\\u0020-\\uD7FF\\uE000-\\uFFFD]/g, "");\n  }\n  function parseXmlAttributes(tag) {\n    var _a, _b;\n    const attributes = /* @__PURE__ */ new Map();\n    const pattern = /([A-Za-z_][\\w:.-]*)\\s*=\\s*(?:"([^"]*)"|\'([^\']*)\')/g;\n    for (const match of tag.matchAll(pattern)) {\n      attributes.set(match[1], decodeXmlEntities((_b = (_a = match[2]) != null ? _a : match[3]) != null ? _b : ""));\n    }\n    return attributes;\n  }\n  function decodeXmlEntities(value) {\n    return value.replace(/&quot;/g, \'"\').replace(/&apos;/g, "\'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");\n  }\n  function parseOpcContentTypesXml(xml) {\n    var _a, _b;\n    const defaults = [];\n    const overrides = [];\n    for (const match of xml.matchAll(/<Default\\b([^>]*)\\/?>/g)) {\n      const attributes = parseXmlAttributes((_a = match[1]) != null ? _a : "");\n      const extension = attributes.get("Extension");\n      const contentType = attributes.get("ContentType");\n      if (extension !== void 0 && contentType !== void 0) {\n        defaults.push({ extension, contentType });\n      }\n    }\n    for (const match of xml.matchAll(/<Override\\b([^>]*)\\/?>/g)) {\n      const attributes = parseXmlAttributes((_b = match[1]) != null ? _b : "");\n      const partName = attributes.get("PartName");\n      const contentType = attributes.get("ContentType");\n      if (partName !== void 0 && contentType !== void 0) {\n        overrides.push({ partName: normalizeOpcPartPath(partName), contentType });\n      }\n    }\n    return { defaults, overrides };\n  }\n  function resolveOpcContentType(contentTypes, partPath) {\n    var _a;\n    const normalized = normalizeOpcPartPath(partPath);\n    const override = contentTypes.overrides.find((item) => item.partName === normalized);\n    if (override !== void 0) {\n      return override.contentType;\n    }\n    const extension = normalized.includes(".") ? normalized.slice(normalized.lastIndexOf(".") + 1) : "";\n    return (_a = contentTypes.defaults.find((item) => item.extension === extension)) == null ? void 0 : _a.contentType;\n  }\n  function buildOpcContentTypesXml(contentTypes) {\n    const defaults = contentTypes.defaults.map((item) => `<Default Extension="${escapeXmlAttribute(item.extension)}" ContentType="${escapeXmlAttribute(item.contentType)}"/>`).join("");\n    const overrides = contentTypes.overrides.map((item) => `<Override PartName="/${escapeXmlAttribute(normalizeOpcPartPath(item.partName))}" ContentType="${escapeXmlAttribute(item.contentType)}"/>`).join("");\n    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">${defaults}${overrides}</Types>`;\n  }\n  function parseOpcRelationshipsXml(xml) {\n    var _a;\n    const relationships = [];\n    const pattern = /<Relationship\\b([^>]*)\\/?>/g;\n    for (const match of xml.matchAll(pattern)) {\n      const attributes = parseXmlAttributes((_a = match[1]) != null ? _a : "");\n      const id = attributes.get("Id");\n      const type = attributes.get("Type");\n      const target = attributes.get("Target");\n      if (id === void 0 || type === void 0 || target === void 0) {\n        continue;\n      }\n      const targetMode = attributes.get("TargetMode");\n      relationships.push(\n        targetMode === void 0 ? { id, type, target } : { id, type, target, targetMode }\n      );\n    }\n    return relationships;\n  }\n  function buildOpcRelationshipsXml(relationships) {\n    const rels = relationships.map((relationship) => {\n      const targetMode = relationship.targetMode === void 0 ? "" : ` TargetMode="${escapeXmlAttribute(relationship.targetMode)}"`;\n      return `<Relationship Id="${escapeXmlAttribute(relationship.id)}" Type="${escapeXmlAttribute(relationship.type)}" Target="${escapeXmlAttribute(relationship.target)}"${targetMode}/>`;\n    }).join("");\n    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${rels}</Relationships>`;\n  }\n  function resolveOpcRelationships(relationships, sourcePartPath) {\n    return relationships.map((relationship) => ({\n      ...relationship,\n      target: resolveOpcRelationshipTarget(sourcePartPath, relationship.target, relationship.targetMode)\n    }));\n  }\n  function relationshipArrayToMap(relationships) {\n    return new Map(relationships.map((relationship) => [relationship.id, relationship]));\n  }\n  var crcTable = new Uint32Array(256);\n  for (let i = 0; i < 256; i += 1) {\n    let c = i;\n    for (let k = 0; k < 8; k += 1) {\n      c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;\n    }\n    crcTable[i] = c >>> 0;\n  }\n  function crc32(data) {\n    let crc = 4294967295;\n    for (const value of data) {\n      crc = crcTable[(crc ^ value) & 255] ^ crc >>> 8;\n    }\n    return (crc ^ 4294967295) >>> 0;\n  }\n  var EOCD_SIGNATURE = 101010256;\n  var CENTRAL_DIRECTORY_SIGNATURE = 33639248;\n  var LOCAL_FILE_SIGNATURE = 67324752;\n  var FIXED_TIMESTAMP = new Date(Date.UTC(1980, 0, 1, 0, 0, 0));\n  function getDefaultZipEntryTimestamp() {\n    return new Date(FIXED_TIMESTAMP.getTime());\n  }\n  function readZipPackage(data) {\n    const diagnostics = [];\n    const entries = [];\n    const centralDirectory = readCentralDirectory(data, diagnostics);\n    for (const central of centralDirectory) {\n      try {\n        const localNameLength = readUint16(data, central.localHeaderOffset + 26);\n        const localExtraLength = readUint16(data, central.localHeaderOffset + 28);\n        const dataStart = central.localHeaderOffset + 30 + localNameLength + localExtraLength;\n        const compressed = data.slice(dataStart, dataStart + central.compressedSize);\n        const entryData = central.method === 0 ? compressed : getNodeZlib().inflateRawSync(compressed);\n        entries.push({\n          path: central.path,\n          data: new Uint8Array(entryData),\n          compression: central.method === 0 ? "store" : "deflate",\n          compressedSize: central.compressedSize,\n          uncompressedSize: central.uncompressedSize,\n          crc32: central.crc,\n          modifiedAt: central.modifiedAt\n        });\n      } catch (error) {\n        diagnostics.push(\n          createDiagnostic(\n            "error",\n            "zip.entry.read_failed",\n            error instanceof Error ? error.message : String(error),\n            central.path\n          )\n        );\n      }\n    }\n    return { entries, diagnostics };\n  }\n  async function readZipPackageAsync(data, options = {}) {\n    const diagnostics = [];\n    const entries = [];\n    const centralDirectory = readCentralDirectory(data, diagnostics);\n    for (const central of centralDirectory) {\n      try {\n        const localNameLength = readUint16(data, central.localHeaderOffset + 26);\n        const localExtraLength = readUint16(data, central.localHeaderOffset + 28);\n        const dataStart = central.localHeaderOffset + 30 + localNameLength + localExtraLength;\n        const compressed = data.slice(dataStart, dataStart + central.compressedSize);\n        const entryData = central.method === 0 ? compressed : await inflateZipRawAsync(compressed, central.uncompressedSize, central.path, options.inflateRaw);\n        entries.push({\n          path: central.path,\n          data: new Uint8Array(entryData),\n          compression: central.method === 0 ? "store" : "deflate",\n          compressedSize: central.compressedSize,\n          uncompressedSize: central.uncompressedSize,\n          crc32: central.crc,\n          modifiedAt: central.modifiedAt\n        });\n      } catch (error) {\n        diagnostics.push(\n          createDiagnostic(\n            "error",\n            "zip.entry.read_failed",\n            error instanceof Error ? error.message : String(error),\n            central.path\n          )\n        );\n      }\n    }\n    return { entries, diagnostics };\n  }\n  function writeZipPackage(entries, options = {}) {\n    var _a, _b, _c, _d;\n    const timestamp = (_a = options.timestamp) != null ? _a : FIXED_TIMESTAMP;\n    const compression = (_b = options.compression) != null ? _b : "store";\n    const order = (_c = options.order) != null ? _c : "stable";\n    const prepared = entries.map((entry) => {\n      var _a2, _b2;\n      return {\n        path: normalizeOpcPartPath(entry.path),\n        data: asBytes(entry.data),\n        compression: (_a2 = entry.compression) != null ? _a2 : compression,\n        modifiedAt: (_b2 = entry.modifiedAt) != null ? _b2 : timestamp\n      };\n    });\n    if (order === "stable") {\n      prepared.sort((a, b) => compareOpcPartPaths(a.path, b.path));\n    }\n    const localParts = [];\n    const centralParts = [];\n    let offset = 0;\n    for (const entry of prepared) {\n      const nameBytes = textEncoder.encode(entry.path);\n      const method = entry.compression === "store" ? 0 : 8;\n      const compressed = entry.compression === "store" ? entry.data : new Uint8Array(getNodeZlib().deflateRawSync(entry.data, { level: (_d = options.compressionLevel) != null ? _d : 9 }));\n      const crc = crc32(entry.data);\n      const dosTime = toDosTime(entry.modifiedAt);\n      const dosDate = toDosDate(entry.modifiedAt);\n      const localHeader = new Uint8Array(30 + nameBytes.length);\n      writeUint32(localHeader, 0, LOCAL_FILE_SIGNATURE);\n      writeUint16(localHeader, 4, 20);\n      writeUint16(localHeader, 6, 2048);\n      writeUint16(localHeader, 8, method);\n      writeUint16(localHeader, 10, dosTime);\n      writeUint16(localHeader, 12, dosDate);\n      writeUint32(localHeader, 14, crc);\n      writeUint32(localHeader, 18, compressed.length);\n      writeUint32(localHeader, 22, entry.data.length);\n      writeUint16(localHeader, 26, nameBytes.length);\n      writeUint16(localHeader, 28, 0);\n      localHeader.set(nameBytes, 30);\n      localParts.push(localHeader, compressed);\n      const centralHeader = new Uint8Array(46 + nameBytes.length);\n      writeUint32(centralHeader, 0, CENTRAL_DIRECTORY_SIGNATURE);\n      writeUint16(centralHeader, 4, 20);\n      writeUint16(centralHeader, 6, 20);\n      writeUint16(centralHeader, 8, 2048);\n      writeUint16(centralHeader, 10, method);\n      writeUint16(centralHeader, 12, dosTime);\n      writeUint16(centralHeader, 14, dosDate);\n      writeUint32(centralHeader, 16, crc);\n      writeUint32(centralHeader, 20, compressed.length);\n      writeUint32(centralHeader, 24, entry.data.length);\n      writeUint16(centralHeader, 28, nameBytes.length);\n      writeUint16(centralHeader, 30, 0);\n      writeUint16(centralHeader, 32, 0);\n      writeUint16(centralHeader, 34, 0);\n      writeUint16(centralHeader, 36, 0);\n      writeUint32(centralHeader, 38, 0);\n      writeUint32(centralHeader, 42, offset);\n      centralHeader.set(nameBytes, 46);\n      centralParts.push(centralHeader);\n      offset += localHeader.length + compressed.length;\n    }\n    const centralDirectory = concatBytes(centralParts);\n    const end = new Uint8Array(22);\n    writeUint32(end, 0, EOCD_SIGNATURE);\n    writeUint16(end, 4, 0);\n    writeUint16(end, 6, 0);\n    writeUint16(end, 8, prepared.length);\n    writeUint16(end, 10, prepared.length);\n    writeUint32(end, 12, centralDirectory.length);\n    writeUint32(end, 16, offset);\n    writeUint16(end, 20, 0);\n    return concatBytes([...localParts, centralDirectory, end]);\n  }\n  function getZipEntry(entries, entryPath) {\n    const normalized = normalizeOpcPartPath(entryPath);\n    return entries.find((entry) => entry.path === normalized);\n  }\n  function getZipTextEntry(entries, entryPath) {\n    const entry = getZipEntry(entries, entryPath);\n    return entry === void 0 ? void 0 : textDecoder.decode(entry.data);\n  }\n  function upsertZipEntry(entries, entry) {\n    const normalized = normalizeOpcPartPath(entry.path);\n    const next = entries.filter((item) => normalizeOpcPartPath(item.path) !== normalized);\n    next.push({ ...entry, path: normalized });\n    return next;\n  }\n  function readCentralDirectory(data, diagnostics) {\n    const eocdOffset = findEndOfCentralDirectory(data);\n    if (eocdOffset < 0) {\n      diagnostics.push(createDiagnostic("error", "zip.eocd.missing", "End of central directory was not found."));\n      return [];\n    }\n    const entryCount = readUint16(data, eocdOffset + 10);\n    const centralDirectoryOffset = readUint32(data, eocdOffset + 16);\n    const entries = [];\n    let offset = centralDirectoryOffset;\n    for (let index = 0; index < entryCount; index += 1) {\n      if (readUint32(data, offset) !== CENTRAL_DIRECTORY_SIGNATURE) {\n        diagnostics.push(createDiagnostic("error", "zip.central_directory.invalid", "Central directory entry signature is invalid."));\n        break;\n      }\n      const flags = readUint16(data, offset + 8);\n      const method = readUint16(data, offset + 10);\n      const time = readUint16(data, offset + 12);\n      const date = readUint16(data, offset + 14);\n      const crc = readUint32(data, offset + 16);\n      const compressedSize = readUint32(data, offset + 20);\n      const uncompressedSize = readUint32(data, offset + 24);\n      const fileNameLength = readUint16(data, offset + 28);\n      const extraLength = readUint16(data, offset + 30);\n      const commentLength = readUint16(data, offset + 32);\n      const localHeaderOffset = readUint32(data, offset + 42);\n      const nameStart = offset + 46;\n      const path = textDecoder.decode(data.slice(nameStart, nameStart + fileNameLength));\n      if (method !== 0 && method !== 8) {\n        diagnostics.push(createDiagnostic("error", "zip.compression.unsupported", `Unsupported ZIP compression method: ${method}`, path));\n      } else {\n        entries.push({\n          path: normalizeOpcPartPath(path),\n          method,\n          flags,\n          crc,\n          compressedSize,\n          uncompressedSize,\n          localHeaderOffset,\n          modifiedAt: fromDosDateTime(date, time)\n        });\n      }\n      offset = nameStart + fileNameLength + extraLength + commentLength;\n    }\n    return entries;\n  }\n  function findEndOfCentralDirectory(data) {\n    const minOffset = Math.max(0, data.length - 65535 - 22);\n    for (let offset = data.length - 22; offset >= minOffset; offset -= 1) {\n      if (readUint32(data, offset) === EOCD_SIGNATURE) {\n        return offset;\n      }\n    }\n    return -1;\n  }\n  function toDosTime(date) {\n    return date.getUTCHours() << 11 | date.getUTCMinutes() << 5 | Math.floor(date.getUTCSeconds() / 2);\n  }\n  function toDosDate(date) {\n    const year = Math.max(1980, date.getUTCFullYear());\n    return year - 1980 << 9 | date.getUTCMonth() + 1 << 5 | date.getUTCDate();\n  }\n  function fromDosDateTime(date, time) {\n    const year = 1980 + (date >>> 9 & 127);\n    const month = date >>> 5 & 15;\n    const day = date & 31;\n    const hour = time >>> 11 & 31;\n    const minute = time >>> 5 & 63;\n    const second = (time & 31) * 2;\n    return new Date(Date.UTC(year, month - 1, day, hour, minute, second));\n  }\n  async function inflateZipRawAsync(compressed, expectedSize, path, customInflateRaw) {\n    const inflated = customInflateRaw === void 0 ? await defaultInflateZipRawAsync(compressed) : await customInflateRaw(compressed, expectedSize, path);\n    const bytes = new Uint8Array(inflated);\n    if (bytes.length !== expectedSize) {\n      throw new Error(`Deflated ZIP entry size mismatch: ${path}`);\n    }\n    return bytes;\n  }\n  async function defaultInflateZipRawAsync(compressed) {\n    const runtime = globalThis;\n    if (typeof runtime.DecompressionStream === "function") {\n      try {\n        const stream = new Blob([compressed]).stream().pipeThrough(new runtime.DecompressionStream("deflate-raw"));\n        const buffer = await new Response(stream).arrayBuffer();\n        return new Uint8Array(buffer);\n      } catch (_error) {\n      }\n    }\n    return new Uint8Array(getNodeZlib().inflateRawSync(compressed));\n  }\n  function getNodeZlib() {\n    var _a, _b;\n    const runtime = globalThis;\n    const getBuiltinModule = (_a = runtime.process) == null ? void 0 : _a.getBuiltinModule;\n    const zlib = typeof getBuiltinModule === "function" ? (_b = getBuiltinModule("node:zlib")) != null ? _b : getBuiltinModule("zlib") : void 0;\n    if (zlib !== void 0 && typeof zlib.deflateRawSync === "function" && typeof zlib.inflateRawSync === "function") {\n      return zlib;\n    }\n    throw new Error("Node zlib is required for synchronous ZIP deflate operations. Use stored entries, readZipPackageAsync with DecompressionStream, or inject an async inflater.");\n  }\n  function readOfficePackage(data) {\n    const zip = readZipPackage(data);\n    return buildOfficePackageFromZipReadResult(zip.entries, zip.diagnostics);\n  }\n  async function readOfficePackageAsync(data, options = {}) {\n    const zip = await readZipPackageAsync(data, options);\n    return buildOfficePackageFromZipReadResult(zip.entries, zip.diagnostics);\n  }\n  function buildOfficePackageFromZipReadResult(entries, zipDiagnostics) {\n    const diagnostics = [...zipDiagnostics];\n    const contentTypesXml = getZipTextEntry(entries, "[Content_Types].xml");\n    let contentTypes;\n    if (contentTypesXml === void 0) {\n      diagnostics.push(\n        createDiagnostic(\n          "warning",\n          "opc.content_types.missing",\n          "The package does not contain [Content_Types].xml.",\n          "[Content_Types].xml"\n        )\n      );\n    } else {\n      contentTypes = parseOpcContentTypesXml(contentTypesXml);\n    }\n    return contentTypes === void 0 ? { entries, diagnostics } : { entries, contentTypes, diagnostics };\n  }\n  function listOfficeMediaParts(entries) {\n    return entries.filter((entry) => normalizeOpcPartPath(entry.path).includes("/media/"));\n  }\n  function readOfficePartRelationships(entries, sourcePartPath, options = {}) {\n    const relsXml = getZipTextEntry(entries, buildOpcRelationshipsPath(sourcePartPath));\n    if (relsXml === void 0) {\n      return [];\n    }\n    const relationships = parseOpcRelationshipsXml(relsXml);\n    return options.resolveTargets === false ? relationships : resolveOpcRelationships(relationships, sourcePartPath);\n  }\n  return __toCommonJS(stdin_exports);\n})();\n\n(() => {\n  const moduleRegistry = getXlsx2mdModuleRegistry();\n  moduleRegistry.registerModule("msOfficeCore", __mikuMsOfficeCoreRelease);\n})();\n' }, { "path": "dist/js/runtime-env.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const ELEMENT_NODE = 1;\n    const TEXT_NODE = 3;\n    function createDomParser() {\n        if (typeof DOMParser !== "function") {\n            throw new Error("This environment does not provide DOMParser.");\n        }\n        return new DOMParser();\n    }\n    function xmlToDocument(xmlText) {\n        return createDomParser().parseFromString(xmlText, "application/xml");\n    }\n    const runtimeEnvApi = {\n        ELEMENT_NODE,\n        TEXT_NODE,\n        xmlToDocument\n    };\n    moduleRegistry.registerModule("runtimeEnv", runtimeEnvApi);\n})();\n' }, { "path": "dist/js/office-drawing.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const textEncoder = new TextEncoder();\n    const runtimeEnv = requireXlsx2mdRuntimeEnv();\n    function getDirectChildByLocalName(root, localName) {\n        if (!root)\n            return null;\n        for (const node of Array.from(root.childNodes)) {\n            if (node.nodeType === runtimeEnv.ELEMENT_NODE && node.localName === localName) {\n                return node;\n            }\n        }\n        return null;\n    }\n    function getElementsByLocalName(root, localName) {\n        if (!root)\n            return [];\n        const elements = Array.from(root.getElementsByTagName("*"));\n        return elements.filter((element) => element.localName === localName);\n    }\n    function getTextContent(node) {\n        return ((node === null || node === void 0 ? void 0 : node.textContent) || "").replace(/\\r\\n/g, "\\n");\n    }\n    function createSafeSheetAssetDir(sheetName) {\n        return sheetName.replace(/[\\\\/:*?"<>|]+/g, "_").trim() || "Sheet";\n    }\n    function escapeXml(text) {\n        return String(text || "")\n            .replace(/&/g, "&amp;")\n            .replace(/</g, "&lt;")\n            .replace(/>/g, "&gt;")\n            .replace(/"/g, "&quot;")\n            .replace(/\'/g, "&apos;");\n    }\n    function emuToPx(emu, fallback) {\n        if (!Number.isFinite(emu) || emu <= 0)\n            return fallback;\n        return Math.max(1, Math.round(emu / 9525));\n    }\n    function parseHexColor(root) {\n        const srgb = getElementsByLocalName(root, "srgbClr")[0] || null;\n        if (srgb === null || srgb === void 0 ? void 0 : srgb.getAttribute("val")) {\n            return `#${String(srgb.getAttribute("val")).trim()}`;\n        }\n        const scheme = getElementsByLocalName(root, "schemeClr")[0] || null;\n        const schemeVal = String((scheme === null || scheme === void 0 ? void 0 : scheme.getAttribute("val")) || "").trim();\n        const schemeMap = {\n            accent1: "#4472C4",\n            accent2: "#ED7D31",\n            accent3: "#A5A5A5",\n            accent4: "#FFC000",\n            accent5: "#5B9BD5",\n            accent6: "#70AD47",\n            tx1: "#000000",\n            tx2: "#44546A",\n            lt1: "#FFFFFF",\n            lt2: "#E7E6E6"\n        };\n        return schemeMap[schemeVal] || null;\n    }\n    function parseShapeText(shapeNode) {\n        return getElementsByLocalName(shapeNode, "t")\n            .map((node) => getTextContent(node).trim())\n            .filter(Boolean)\n            .join("\\n")\n            .trim();\n    }\n    function parseShapeKind(shapeNode) {\n        if (!shapeNode)\n            return null;\n        if (shapeNode.localName === "cxnSp") {\n            return "connector";\n        }\n        if (shapeNode.localName !== "sp") {\n            return null;\n        }\n        const nvSpPr = getDirectChildByLocalName(shapeNode, "nvSpPr");\n        const cNvSpPr = getDirectChildByLocalName(nvSpPr, "cNvSpPr");\n        if ((cNvSpPr === null || cNvSpPr === void 0 ? void 0 : cNvSpPr.getAttribute("txBox")) === "1") {\n            return "textbox";\n        }\n        const spPr = getDirectChildByLocalName(shapeNode, "spPr");\n        const prstGeom = getDirectChildByLocalName(spPr, "prstGeom");\n        if (String((prstGeom === null || prstGeom === void 0 ? void 0 : prstGeom.getAttribute("prst")) || "").trim() === "rect") {\n            return "rect";\n        }\n        return null;\n    }\n    function parseShapeDimensions(anchor, shapeNode) {\n        const extNode = getDirectChildByLocalName(anchor, "ext")\n            || getDirectChildByLocalName(getDirectChildByLocalName(getDirectChildByLocalName(shapeNode || anchor, "spPr"), "xfrm"), "ext");\n        const widthEmu = Number((extNode === null || extNode === void 0 ? void 0 : extNode.getAttribute("cx")) || "");\n        const heightEmu = Number((extNode === null || extNode === void 0 ? void 0 : extNode.getAttribute("cy")) || "");\n        return {\n            widthPx: emuToPx(widthEmu, 160),\n            heightPx: emuToPx(heightEmu, 48)\n        };\n    }\n    function renderRectLikeSvg(shapeNode, anchor, text, treatAsTextbox) {\n        const { widthPx, heightPx } = parseShapeDimensions(anchor, shapeNode);\n        const spPr = getDirectChildByLocalName(shapeNode, "spPr");\n        const fillColor = parseHexColor(getDirectChildByLocalName(spPr, "solidFill")) || (treatAsTextbox ? "#FFFFFF" : "#F3F3F3");\n        const lineNode = getDirectChildByLocalName(spPr, "ln");\n        const strokeColor = parseHexColor(lineNode) || "#333333";\n        const strokeWidth = Math.max(1, Math.round(Number((lineNode === null || lineNode === void 0 ? void 0 : lineNode.getAttribute("w")) || "") / 9525) || 1);\n        const safeText = escapeXml(text);\n        const textMarkup = safeText\n            ? `<text x="${Math.round(widthPx / 2)}" y="${Math.round(heightPx / 2)}" text-anchor="middle" dominant-baseline="middle" font-size="14" font-family="sans-serif" fill="#000000">${safeText}</text>`\n            : "";\n        return [\n            `<svg xmlns="http://www.w3.org/2000/svg" width="${widthPx}" height="${heightPx}" viewBox="0 0 ${widthPx} ${heightPx}">`,\n            `  <rect x="1" y="1" width="${Math.max(1, widthPx - 2)}" height="${Math.max(1, heightPx - 2)}" fill="${fillColor}" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>`,\n            textMarkup ? `  ${textMarkup}` : "",\n            `</svg>`\n        ].filter(Boolean).join("\\n");\n    }\n    function renderConnectorSvg(shapeNode, anchor) {\n        const { widthPx, heightPx } = parseShapeDimensions(anchor, shapeNode);\n        const spPr = getDirectChildByLocalName(shapeNode, "spPr");\n        const lineNode = getDirectChildByLocalName(spPr, "ln");\n        const strokeColor = parseHexColor(lineNode) || "#333333";\n        const strokeWidth = Math.max(1, Math.round(Number((lineNode === null || lineNode === void 0 ? void 0 : lineNode.getAttribute("w")) || "") / 9525) || 1);\n        const effectiveHeight = Math.max(heightPx, 24);\n        const y = Math.round(effectiveHeight / 2);\n        return [\n            `<svg xmlns="http://www.w3.org/2000/svg" width="${widthPx}" height="${effectiveHeight}" viewBox="0 0 ${widthPx} ${effectiveHeight}">`,\n            `  <defs>`,\n            `    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">`,\n            `      <path d="M0,0 L0,6 L9,3 z" fill="${strokeColor}"/>`,\n            `    </marker>`,\n            `  </defs>`,\n            `  <line x1="2" y1="${y}" x2="${Math.max(2, widthPx - 4)}" y2="${y}" stroke="${strokeColor}" stroke-width="${strokeWidth}" marker-end="url(#arrow)"/>`,\n            `</svg>`\n        ].join("\\n");\n    }\n    function renderShapeSvg(shapeNode, anchor, sheetName, shapeIndex) {\n        const kind = parseShapeKind(shapeNode);\n        if (!kind)\n            return null;\n        let svg = "";\n        if (kind === "connector") {\n            svg = renderConnectorSvg(shapeNode, anchor);\n        }\n        else {\n            svg = renderRectLikeSvg(shapeNode, anchor, parseShapeText(shapeNode), kind === "textbox");\n        }\n        const safeDir = createSafeSheetAssetDir(sheetName);\n        const filename = `shape_${String(shapeIndex).padStart(3, "0")}.svg`;\n        return {\n            filename,\n            path: `assets/${safeDir}/${filename}`,\n            data: textEncoder.encode(`${svg}\\n`)\n        };\n    }\n    const officeDrawingApi = {\n        renderShapeSvg\n    };\n    moduleRegistry.registerModule("officeDrawing", officeDrawingApi);\n})();\n' }, { "path": "dist/js/zip-io.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const msOfficeCore = moduleRegistry.getModule("msOfficeCore");\n    const textEncoder = new TextEncoder();\n    const nodeRequire = (() => {\n        const candidate = globalThis.__xlsx2mdNodeRequire;\n        return typeof candidate === "function" ? candidate : null;\n    })();\n    const crcTable = buildCrc32Table();\n    const fixedZipEntryTimestamp = toDosDateTime(2025, 1, 1, 0, 0, 0);\n    const utf8FileNameFlag = 0x0800;\n    function buildCrc32Table() {\n        const table = new Uint32Array(256);\n        for (let i = 0; i < 256; i += 1) {\n            let value = i;\n            for (let bit = 0; bit < 8; bit += 1) {\n                value = (value & 1) === 1 ? (0xedb88320 ^ (value >>> 1)) : (value >>> 1);\n            }\n            table[i] = value >>> 0;\n        }\n        return table;\n    }\n    function crc32(bytes) {\n        let crc = 0xffffffff;\n        for (const byte of bytes) {\n            crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);\n        }\n        return (crc ^ 0xffffffff) >>> 0;\n    }\n    function hasNonAsciiCharacters(value) {\n        return /[^\\x00-\\x7f]/.test(value);\n    }\n    function toDosDateTime(year, month, day, hour, minute, second) {\n        const clampedYear = Math.max(1980, Math.min(2107, year));\n        const dosTime = ((hour & 0x1f) << 11) | ((minute & 0x3f) << 5) | (Math.floor(second / 2) & 0x1f);\n        const dosDate = (((clampedYear - 1980) & 0x7f) << 9) | ((month & 0x0f) << 5) | (day & 0x1f);\n        return {\n            dosTime,\n            dosDate\n        };\n    }\n    async function inflateRaw(data) {\n        if (typeof DecompressionStream === "function") {\n            try {\n                const stream = new Blob([data]).stream().pipeThrough(new DecompressionStream("deflate-raw"));\n                const buffer = await new Response(stream).arrayBuffer();\n                return new Uint8Array(buffer);\n            }\n            catch (_error) {\n                // Fall through to the Node zlib path when the runtime exposes\n                // DecompressionStream but lacks "deflate-raw" support.\n            }\n        }\n        if (nodeRequire) {\n            const zlib = nodeRequire("node:zlib");\n            return Uint8Array.from(zlib.inflateRawSync(data));\n        }\n        throw new Error("This environment does not support ZIP deflate decompression.");\n    }\n    async function unzipEntries(arrayBuffer) {\n        if (!msOfficeCore) {\n            throw new Error("miku-ms-office-core module is not loaded.");\n        }\n        const result = await msOfficeCore.readZipPackageAsync(new Uint8Array(arrayBuffer), {\n            inflateRaw\n        });\n        const errors = result.diagnostics.filter((diagnostic) => diagnostic.severity === "error");\n        if (errors.length > 0) {\n            throw new Error(errors.map((diagnostic) => {\n                if (diagnostic.code === "zip.eocd.missing") {\n                    return "ZIP end-of-central-directory record was not found.";\n                }\n                return diagnostic.path ? `${diagnostic.path}: ${diagnostic.message}` : diagnostic.message;\n            }).join("\\n"));\n        }\n        const files = new Map();\n        for (const entry of result.entries) {\n            files.set(entry.path, entry.data);\n        }\n        return files;\n    }\n    function createStoredZip(entries) {\n        const localChunks = [];\n        const centralChunks = [];\n        let offset = 0;\n        for (const entry of entries) {\n            const nameBytes = textEncoder.encode(entry.name);\n            const dataBytes = entry.data;\n            const entryCrc32 = crc32(dataBytes);\n            const generalPurposeBitFlag = hasNonAsciiCharacters(entry.name) ? utf8FileNameFlag : 0;\n            const localHeader = new Uint8Array(30 + nameBytes.length);\n            const localView = new DataView(localHeader.buffer);\n            localView.setUint32(0, 0x04034b50, true);\n            localView.setUint16(4, 20, true);\n            localView.setUint16(6, generalPurposeBitFlag, true);\n            localView.setUint16(8, 0, true);\n            localView.setUint16(10, fixedZipEntryTimestamp.dosTime, true);\n            localView.setUint16(12, fixedZipEntryTimestamp.dosDate, true);\n            localView.setUint32(14, entryCrc32, true);\n            localView.setUint32(18, dataBytes.length, true);\n            localView.setUint32(22, dataBytes.length, true);\n            localView.setUint16(26, nameBytes.length, true);\n            localView.setUint16(28, 0, true);\n            localHeader.set(nameBytes, 30);\n            localChunks.push(localHeader, dataBytes);\n            const centralHeader = new Uint8Array(46 + nameBytes.length);\n            const centralView = new DataView(centralHeader.buffer);\n            centralView.setUint32(0, 0x02014b50, true);\n            centralView.setUint16(4, 20, true);\n            centralView.setUint16(6, 20, true);\n            centralView.setUint16(8, generalPurposeBitFlag, true);\n            centralView.setUint16(10, 0, true);\n            centralView.setUint16(12, fixedZipEntryTimestamp.dosTime, true);\n            centralView.setUint16(14, fixedZipEntryTimestamp.dosDate, true);\n            centralView.setUint32(16, entryCrc32, true);\n            centralView.setUint32(20, dataBytes.length, true);\n            centralView.setUint32(24, dataBytes.length, true);\n            centralView.setUint16(28, nameBytes.length, true);\n            centralView.setUint16(30, 0, true);\n            centralView.setUint16(32, 0, true);\n            centralView.setUint16(34, 0, true);\n            centralView.setUint16(36, 0, true);\n            centralView.setUint32(38, 0, true);\n            centralView.setUint32(42, offset, true);\n            centralHeader.set(nameBytes, 46);\n            centralChunks.push(centralHeader);\n            offset += localHeader.length + dataBytes.length;\n        }\n        const centralDirectoryStart = offset;\n        const centralDirectorySize = centralChunks.reduce((sum, chunk) => sum + chunk.length, 0);\n        const eocd = new Uint8Array(22);\n        const eocdView = new DataView(eocd.buffer);\n        eocdView.setUint32(0, 0x06054b50, true);\n        eocdView.setUint16(4, 0, true);\n        eocdView.setUint16(6, 0, true);\n        eocdView.setUint16(8, entries.length, true);\n        eocdView.setUint16(10, entries.length, true);\n        eocdView.setUint32(12, centralDirectorySize, true);\n        eocdView.setUint32(16, centralDirectoryStart, true);\n        eocdView.setUint16(20, 0, true);\n        const totalLength = localChunks.reduce((sum, chunk) => sum + chunk.length, 0) + centralDirectorySize + eocd.length;\n        const output = new Uint8Array(totalLength);\n        let cursor = 0;\n        for (const chunk of localChunks) {\n            output.set(chunk, cursor);\n            cursor += chunk.length;\n        }\n        for (const chunk of centralChunks) {\n            output.set(chunk, cursor);\n            cursor += chunk.length;\n        }\n        output.set(eocd, cursor);\n        return output;\n    }\n    const zipIoApi = {\n        unzipEntries,\n        createStoredZip,\n        fixedZipEntryTimestamp\n    };\n    moduleRegistry.registerModule("zipIo", zipIoApi);\n})();\n' }, { "path": "dist/js/border-grid.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    function getCellAt(cellMap, row, col) {\n        return cellMap.get(`${row}:${col}`);\n    }\n    function hasNormalizedBorderOnSide(cellMap, row, col, side) {\n        const cell = getCellAt(cellMap, row, col);\n        if (side === "top") {\n            const above = getCellAt(cellMap, row - 1, col);\n            return !!(cell === null || cell === void 0 ? void 0 : cell.borders.top) || !!(above === null || above === void 0 ? void 0 : above.borders.bottom);\n        }\n        if (side === "bottom") {\n            const below = getCellAt(cellMap, row + 1, col);\n            return !!(cell === null || cell === void 0 ? void 0 : cell.borders.bottom) || !!(below === null || below === void 0 ? void 0 : below.borders.top);\n        }\n        if (side === "left") {\n            const left = getCellAt(cellMap, row, col - 1);\n            return !!(cell === null || cell === void 0 ? void 0 : cell.borders.left) || !!(left === null || left === void 0 ? void 0 : left.borders.right);\n        }\n        const right = getCellAt(cellMap, row, col + 1);\n        return !!(cell === null || cell === void 0 ? void 0 : cell.borders.right) || !!(right === null || right === void 0 ? void 0 : right.borders.left);\n    }\n    function hasAnyNormalizedBorder(cellMap, row, col) {\n        return hasNormalizedBorderOnSide(cellMap, row, col, "top")\n            || hasNormalizedBorderOnSide(cellMap, row, col, "bottom")\n            || hasNormalizedBorderOnSide(cellMap, row, col, "left")\n            || hasNormalizedBorderOnSide(cellMap, row, col, "right");\n    }\n    function collectTableEdgeStats(cellMap, row, startCol, endCol) {\n        let nonEmptyCount = 0;\n        let borderCount = 0;\n        let rawBorderCount = 0;\n        let topCount = 0;\n        let bottomCount = 0;\n        let maxTextLength = 0;\n        for (let col = startCol; col <= endCol; col += 1) {\n            const cell = getCellAt(cellMap, row, col);\n            const text = String((cell === null || cell === void 0 ? void 0 : cell.outputValue) || "").trim();\n            if (text) {\n                nonEmptyCount += 1;\n                maxTextLength = Math.max(maxTextLength, text.length);\n            }\n            if (hasAnyNormalizedBorder(cellMap, row, col)) {\n                borderCount += 1;\n            }\n            if (cell && (cell.borders.top || cell.borders.bottom || cell.borders.left || cell.borders.right)) {\n                rawBorderCount += 1;\n            }\n            if (hasNormalizedBorderOnSide(cellMap, row, col, "top")) {\n                topCount += 1;\n            }\n            if (hasNormalizedBorderOnSide(cellMap, row, col, "bottom")) {\n                bottomCount += 1;\n            }\n        }\n        return { nonEmptyCount, borderCount, rawBorderCount, topCount, bottomCount, maxTextLength };\n    }\n    function countNormalizedBorderedCells(cellMap, startRow, startCol, endRow, endCol) {\n        let count = 0;\n        for (let row = startRow; row <= endRow; row += 1) {\n            for (let col = startCol; col <= endCol; col += 1) {\n                if (hasAnyNormalizedBorder(cellMap, row, col)) {\n                    count += 1;\n                }\n            }\n        }\n        return count;\n    }\n    const borderGridApi = {\n        getCellAt,\n        hasNormalizedBorderOnSide,\n        hasAnyNormalizedBorder,\n        collectTableEdgeStats,\n        countNormalizedBorderedCells\n    };\n    moduleRegistry.registerModule("borderGrid", borderGridApi);\n})();\n' }, { "path": "dist/js/markdown-normalize.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const MARKDOWN_UNSAFE_UNICODE_REGEX = /[\\u0000-\\u0008\\u000B\\u000C\\u000E-\\u001F\\u007F-\\u009F\\u00AD\\u200B-\\u200F\\u2028\\u2029\\u202A-\\u202E\\u2060-\\u206F\\uFEFF\\uFDD0-\\uFDEF\\uFFFE\\uFFFF]/g;\n    const MARKDOWN_LINE_BREAK_REGEX = /\\r\\n?|\\n/g;\n    function normalizeMarkdownNewlines(text, replacement = "\\n") {\n        return String(text || "").replace(MARKDOWN_LINE_BREAK_REGEX, replacement);\n    }\n    function normalizeMarkdownText(text) {\n        return normalizeMarkdownNewlines(String(text || ""), " ")\n            .replace(MARKDOWN_UNSAFE_UNICODE_REGEX, " ")\n            .replace(/\\t/g, " ");\n    }\n    function escapeMarkdownPipes(text) {\n        return String(text || "").replace(/\\|/g, "\\\\|");\n    }\n    function normalizeMarkdownTableCell(text) {\n        return escapeMarkdownPipes(normalizeMarkdownText(text));\n    }\n    function normalizeMarkdownHeadingText(text) {\n        return normalizeMarkdownText(text).replace(/^#+\\s*/, "");\n    }\n    function normalizeMarkdownListItemText(text) {\n        return normalizeMarkdownText(text).replace(/^([-*+]|\\d+\\.)\\s+/, "");\n    }\n    const markdownNormalizeApi = {\n        normalizeMarkdownNewlines,\n        normalizeMarkdownText,\n        escapeMarkdownPipes,\n        normalizeMarkdownTableCell,\n        normalizeMarkdownHeadingText,\n        normalizeMarkdownListItemText\n    };\n    moduleRegistry.registerModule("markdownNormalize", markdownNormalizeApi);\n})();\n' }, { "path": "dist/js/markdown-escape.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const markdownNormalizeHelper = requireXlsx2mdMarkdownNormalize();\n    function escapeMarkdownLineStartSegment(text) {\n        return String(text || "")\n            .replace(/^(\\s*)([#>])/u, "$1\\\\$2")\n            .replace(/^(\\s*)([-+*])(\\s+)/u, "$1\\\\$2$3")\n            .replace(/^(\\s*)(\\d+)\\.(\\s+)/u, "$1$2\\\\.$3");\n    }\n    function escapeMarkdownLineStart(text) {\n        return markdownNormalizeHelper\n            .normalizeMarkdownNewlines(text)\n            .split("\\n")\n            .map((line) => escapeMarkdownLineStartSegment(line))\n            .join("\\n");\n    }\n    function getEscapedMarkdownLiteralText(ch, atLineStart, nextChar) {\n        if (ch === "\\\\")\n            return "\\\\\\\\";\n        if (ch === "&")\n            return "&amp;";\n        if (ch === "<")\n            return "&lt;";\n        if (ch === ">")\n            return "&gt;";\n        if (/[`*_{}\\[\\]()!|~]/.test(ch))\n            return `\\\\${ch}`;\n        if (atLineStart && ch === "#")\n            return `\\\\${ch}`;\n        if (atLineStart && /[-+*]/.test(ch) && /\\s/u.test(nextChar))\n            return `\\\\${ch}`;\n        return null;\n    }\n    function parseOrderedListMarker(source, index, atLineStart) {\n        if (!atLineStart || !/\\d/u.test(source[index] || "")) {\n            return null;\n        }\n        let digits = source[index];\n        let cursor = index + 1;\n        while (cursor < source.length && /\\d/u.test(source[cursor])) {\n            digits += source[cursor];\n            cursor += 1;\n        }\n        if (source[cursor] !== "." || !/\\s/u.test(source[cursor + 1] || "")) {\n            return null;\n        }\n        return {\n            digits,\n            dotIndex: cursor\n        };\n    }\n    function escapeMarkdownLiteralParts(text) {\n        const source = String(text || "");\n        const parts = [];\n        let buffer = "";\n        function pushTextBuffer() {\n            if (!buffer)\n                return;\n            parts.push({ kind: "text", text: buffer, rawText: buffer });\n            buffer = "";\n        }\n        function pushEscaped(textValue, rawText) {\n            pushTextBuffer();\n            if (!textValue)\n                return;\n            parts.push({ kind: "escaped", text: textValue, rawText });\n        }\n        for (let index = 0; index < source.length; index += 1) {\n            const ch = source[index];\n            const atLineStart = index === 0;\n            const next = source[index + 1] || "";\n            const escapedText = getEscapedMarkdownLiteralText(ch, atLineStart, next);\n            if (escapedText) {\n                pushEscaped(escapedText, ch);\n                continue;\n            }\n            const orderedListMarker = parseOrderedListMarker(source, index, atLineStart);\n            if (orderedListMarker) {\n                pushTextBuffer();\n                parts.push({ kind: "text", text: orderedListMarker.digits, rawText: orderedListMarker.digits });\n                parts.push({ kind: "escaped", text: "\\\\.", rawText: "." });\n                index = orderedListMarker.dotIndex;\n                continue;\n            }\n            buffer += ch;\n        }\n        pushTextBuffer();\n        return parts;\n    }\n    function escapeMarkdownLiteralText(text) {\n        return markdownNormalizeHelper\n            .normalizeMarkdownNewlines(text)\n            .split("\\n")\n            .map((line) => escapeMarkdownLiteralParts(line).map((part) => part.text).join(""))\n            .join("\\n");\n    }\n    const markdownEscapeApi = {\n        escapeMarkdownLineStart,\n        escapeMarkdownLiteralParts,\n        escapeMarkdownLiteralText\n    };\n    moduleRegistry.registerModule("markdownEscape", markdownEscapeApi);\n})();\n' }, { "path": "dist/js/markdown-table-escape.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const markdownNormalizeHelper = requireXlsx2mdMarkdownNormalize();\n    function escapeMarkdownTableCell(text) {\n        return markdownNormalizeHelper.normalizeMarkdownTableCell(text);\n    }\n    const markdownTableEscapeApi = {\n        escapeMarkdownTableCell\n    };\n    moduleRegistry.registerModule("markdownTableEscape", markdownTableEscapeApi);\n})();\n' }, { "path": "dist/js/text-encoding.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const utf8Encoder = new TextEncoder();\n    const nodeRequire = (() => {\n        const candidate = globalThis.__xlsx2mdNodeRequire;\n        return typeof candidate === "function" ? candidate : null;\n    })();\n    function normalizeEncoding(value) {\n        const normalized = String(value || "utf-8").toLowerCase();\n        if (normalized === "utf-8" ||\n            normalized === "shift_jis" ||\n            normalized === "utf-16le" ||\n            normalized === "utf-16be" ||\n            normalized === "utf-32le" ||\n            normalized === "utf-32be") {\n            return normalized;\n        }\n        throw new Error(`Unsupported encoding: ${String(value)}`);\n    }\n    function normalizeBom(value) {\n        const normalized = String(value || "off").toLowerCase();\n        if (normalized === "off" || normalized === "on") {\n            return normalized;\n        }\n        throw new Error(`Unsupported BOM mode: ${String(value)}`);\n    }\n    function concatBytes(parts) {\n        const totalLength = parts.reduce((sum, part) => sum + part.length, 0);\n        const result = new Uint8Array(totalLength);\n        let offset = 0;\n        for (const part of parts) {\n            result.set(part, offset);\n            offset += part.length;\n        }\n        return result;\n    }\n    function getBomBytes(encoding) {\n        if (encoding === "utf-8")\n            return new Uint8Array([0xef, 0xbb, 0xbf]);\n        if (encoding === "utf-16le")\n            return new Uint8Array([0xff, 0xfe]);\n        if (encoding === "utf-16be")\n            return new Uint8Array([0xfe, 0xff]);\n        if (encoding === "utf-32le")\n            return new Uint8Array([0xff, 0xfe, 0x00, 0x00]);\n        if (encoding === "utf-32be")\n            return new Uint8Array([0x00, 0x00, 0xfe, 0xff]);\n        throw new Error(`Encoding does not support BOM: ${encoding}`);\n    }\n    function encodeUtf16(text, littleEndian) {\n        const result = new Uint8Array(text.length * 2);\n        for (let index = 0; index < text.length; index += 1) {\n            const codeUnit = text.charCodeAt(index);\n            const offset = index * 2;\n            if (littleEndian) {\n                result[offset] = codeUnit & 0xff;\n                result[offset + 1] = codeUnit >>> 8;\n            }\n            else {\n                result[offset] = codeUnit >>> 8;\n                result[offset + 1] = codeUnit & 0xff;\n            }\n        }\n        return result;\n    }\n    function encodeUtf32(text, littleEndian) {\n        const codePoints = [];\n        for (let index = 0; index < text.length; index += 1) {\n            const first = text.charCodeAt(index);\n            if (first >= 0xd800 && first <= 0xdbff && index + 1 < text.length) {\n                const second = text.charCodeAt(index + 1);\n                if (second >= 0xdc00 && second <= 0xdfff) {\n                    codePoints.push(((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000);\n                    index += 1;\n                    continue;\n                }\n            }\n            codePoints.push(first);\n        }\n        const result = new Uint8Array(codePoints.length * 4);\n        codePoints.forEach((codePoint, index) => {\n            const offset = index * 4;\n            if (littleEndian) {\n                result[offset] = codePoint & 0xff;\n                result[offset + 1] = (codePoint >>> 8) & 0xff;\n                result[offset + 2] = (codePoint >>> 16) & 0xff;\n                result[offset + 3] = (codePoint >>> 24) & 0xff;\n            }\n            else {\n                result[offset] = (codePoint >>> 24) & 0xff;\n                result[offset + 1] = (codePoint >>> 16) & 0xff;\n                result[offset + 2] = (codePoint >>> 8) & 0xff;\n                result[offset + 3] = codePoint & 0xff;\n            }\n        });\n        return result;\n    }\n    function encodeText(text, options = {}) {\n        const encoding = normalizeEncoding(options.encoding);\n        const bom = normalizeBom(options.bom);\n        if (encoding === "shift_jis") {\n            if (bom === "on") {\n                throw new Error("BOM cannot be enabled for shift_jis.");\n            }\n            if (!nodeRequire) {\n                throw new Error("Shift_JIS encoding is not available in this runtime.");\n            }\n            const iconvLite = nodeRequire("iconv-lite");\n            return Uint8Array.from(iconvLite.encode(text, "shift_jis"));\n        }\n        const body = encoding === "utf-8"\n            ? utf8Encoder.encode(text)\n            : encoding === "utf-16le"\n                ? encodeUtf16(text, true)\n                : encoding === "utf-16be"\n                    ? encodeUtf16(text, false)\n                    : encoding === "utf-32le"\n                        ? encodeUtf32(text, true)\n                        : encodeUtf32(text, false);\n        if (bom === "off") {\n            return body;\n        }\n        return concatBytes([getBomBytes(encoding), body]);\n    }\n    function isEncodingAvailable(value) {\n        const encoding = normalizeEncoding(value);\n        if (encoding === "shift_jis") {\n            return !!nodeRequire;\n        }\n        return true;\n    }\n    function createTextMimeType(options = {}) {\n        return `text/markdown;charset=${normalizeEncoding(options.encoding)}`;\n    }\n    const textEncodingApi = {\n        normalizeEncoding,\n        normalizeBom,\n        getBomBytes,\n        isEncodingAvailable,\n        encodeText,\n        createTextMimeType\n    };\n    moduleRegistry.registerModule("textEncoding", textEncodingApi);\n})();\n' }, { "path": "dist/js/markdown-options.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const OUTPUT_MODES = ["display", "raw", "both"];\n    const FORMATTING_MODES = ["plain", "github"];\n    const TABLE_DETECTION_MODES = ["balanced", "border", "planner-aware"];\n    const TABLE_DETECTION_MODE_ALIASES = {\n        "border-priority": "border"\n    };\n    function normalizeEnum(value, allowedValues, fallback, aliases = {}) {\n        const normalizedInput = String(value || "").trim().toLowerCase();\n        if (!normalizedInput) {\n            return fallback;\n        }\n        const normalizedValue = aliases[normalizedInput] || normalizedInput;\n        return allowedValues.includes(normalizedValue)\n            ? normalizedValue\n            : fallback;\n    }\n    function resolveBoolean(value, fallback) {\n        return value === undefined || value === null ? fallback : value !== false;\n    }\n    function normalizeOutputMode(value) {\n        return normalizeEnum(value, OUTPUT_MODES, "display");\n    }\n    function normalizeFormattingMode(value) {\n        return normalizeEnum(value, FORMATTING_MODES, "plain");\n    }\n    function normalizeTableDetectionMode(value) {\n        return normalizeEnum(value, TABLE_DETECTION_MODES, "balanced", TABLE_DETECTION_MODE_ALIASES);\n    }\n    function resolveMarkdownOptions(options = {}) {\n        return {\n            treatFirstRowAsHeader: resolveBoolean(options.treatFirstRowAsHeader, true),\n            trimText: resolveBoolean(options.trimText, true),\n            removeEmptyRows: resolveBoolean(options.removeEmptyRows, true),\n            removeEmptyColumns: resolveBoolean(options.removeEmptyColumns, true),\n            includeShapeDetails: resolveBoolean(options.includeShapeDetails, true),\n            outputMode: normalizeOutputMode(options.outputMode),\n            formattingMode: normalizeFormattingMode(options.formattingMode),\n            tableDetectionMode: normalizeTableDetectionMode(options.tableDetectionMode)\n        };\n    }\n    moduleRegistry.registerModule("markdownOptions", {\n        OUTPUT_MODES,\n        FORMATTING_MODES,\n        TABLE_DETECTION_MODES,\n        TABLE_DETECTION_MODE_ALIASES,\n        normalizeOutputMode,\n        normalizeFormattingMode,\n        normalizeTableDetectionMode,\n        resolveMarkdownOptions\n    });\n})();\n' }, { "path": "dist/js/rich-text-parser.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    function createRichTextParserApi(deps = {}) {\n        const markdownEscapeHelper = requireXlsx2mdMarkdownEscape();\n        const normalizeInlineText = deps.normalizeMarkdownText || ((text) => String(text || "").replace(/\\r\\n?|\\n/g, " ").replace(/\\t/g, " "));\n        function compactText(text) {\n            return normalizeInlineText(markdownEscapeHelper.escapeMarkdownLiteralText(text)).replace(/\\s+/g, " ").trim();\n        }\n        function splitRawTextWithLineBreaks(text) {\n            const normalized = String(text || "")\n                .replace(/\\r\\n?/g, "\\n")\n                .replace(/\\t/g, " ");\n            if (!normalized)\n                return [];\n            const parts = normalized.split("\\n");\n            const tokens = [];\n            for (let index = 0; index < parts.length; index += 1) {\n                if (parts[index]) {\n                    tokens.push({\n                        kind: "text",\n                        rawText: parts[index]\n                    });\n                }\n                if (index < parts.length - 1) {\n                    tokens.push({ kind: "lineBreak" });\n                }\n            }\n            return tokens;\n        }\n        function splitTextWithLineBreaks(text) {\n            return splitRawTextWithLineBreaks(text).map((token) => {\n                if (token.kind === "lineBreak")\n                    return token;\n                return {\n                    kind: "text",\n                    text: markdownEscapeHelper.escapeMarkdownLiteralText(token.rawText)\n                };\n            });\n        }\n        function createStyledTextToken(text, style) {\n            return {\n                kind: "styledText",\n                parts: markdownEscapeHelper.escapeMarkdownLiteralParts(text),\n                style\n            };\n        }\n        function tokenizePlainCellText(text) {\n            const compacted = compactText(text);\n            if (!compacted)\n                return [];\n            return [{ kind: "text", text: compacted }];\n        }\n        function tokenizeGithubCellText(text, style) {\n            const tokens = splitRawTextWithLineBreaks(text);\n            if (!tokens.length)\n                return [];\n            return tokens.map((token) => {\n                if (token.kind !== "text")\n                    return token;\n                return createStyledTextToken(token.rawText, style);\n            });\n        }\n        function tokenizeGithubRichTextRuns(runs) {\n            return runs.flatMap((run) => splitRawTextWithLineBreaks(run.text).map((token) => {\n                if (token.kind !== "text")\n                    return token;\n                return createStyledTextToken(token.rawText, {\n                    bold: run.bold,\n                    italic: run.italic,\n                    strike: run.strike,\n                    underline: run.underline\n                });\n            }));\n        }\n        function tokenizeCellDisplayText(cell, formattingMode = "plain") {\n            if (!cell)\n                return [];\n            if (formattingMode !== "github") {\n                return tokenizePlainCellText(String(cell.outputValue || ""));\n            }\n            const displayValue = compactText(String(cell.outputValue || ""));\n            if (cell.richTextRuns && displayValue === compactText(cell.richTextRuns.map((run) => run.text).join(""))) {\n                return tokenizeGithubRichTextRuns(cell.richTextRuns);\n            }\n            return tokenizeGithubCellText(String(cell.outputValue || ""), cell.textStyle);\n        }\n        return {\n            compactText,\n            splitRawTextWithLineBreaks,\n            splitTextWithLineBreaks,\n            createStyledTextToken,\n            tokenizePlainCellText,\n            tokenizeGithubCellText,\n            tokenizeGithubRichTextRuns,\n            tokenizeCellDisplayText\n        };\n    }\n    const richTextParserApi = {\n        createRichTextParserApi\n    };\n    moduleRegistry.registerModule("richTextParser", richTextParserApi);\n})();\n' }, { "path": "dist/js/rich-text-plain-formatter.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    function createRichTextPlainFormatterApi() {\n        function renderStyledTextPart(part) {\n            if (part.kind === "escaped") {\n                return part.text;\n            }\n            return part.text;\n        }\n        function renderStyledTextParts(parts) {\n            return parts.map((part) => renderStyledTextPart(part)).join("");\n        }\n        function renderPlainTokens(tokens) {\n            if (!tokens.length)\n                return "";\n            return tokens\n                .map((token) => {\n                if (token.kind === "lineBreak")\n                    return " ";\n                if (token.kind === "styledText")\n                    return renderStyledTextParts(token.parts);\n                return token.text;\n            })\n                .join("")\n                .replace(/ {2,}/g, " ")\n                .trim();\n        }\n        return {\n            renderStyledTextPart,\n            renderStyledTextParts,\n            renderPlainTokens\n        };\n    }\n    const richTextPlainFormatterApi = {\n        createRichTextPlainFormatterApi\n    };\n    moduleRegistry.registerModule("richTextPlainFormatter", richTextPlainFormatterApi);\n})();\n' }, { "path": "dist/js/rich-text-github-formatter.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    function createRichTextGithubFormatterApi() {\n        function applyTextStyle(text, style) {\n            if (!text)\n                return "";\n            let result = text;\n            if (style.underline)\n                result = `<ins>${result}</ins>`;\n            if (style.strike)\n                result = `~~${result}~~`;\n            if (style.italic)\n                result = `*${result}*`;\n            if (style.bold)\n                result = `**${result}**`;\n            return result;\n        }\n        function renderStyledTextPart(part) {\n            if (part.kind === "escaped") {\n                return part.text;\n            }\n            return part.text;\n        }\n        function renderStyledTextParts(parts) {\n            return parts.map((part) => renderStyledTextPart(part)).join("");\n        }\n        function renderGithubTokens(tokens) {\n            if (!tokens.length)\n                return "";\n            return tokens\n                .map((token) => {\n                if (token.kind === "lineBreak")\n                    return "<br>";\n                if (token.kind === "styledText")\n                    return applyTextStyle(renderStyledTextParts(token.parts), token.style);\n                return token.text;\n            })\n                .join("")\n                .replace(/ {2,}/g, " ")\n                .trim();\n        }\n        return {\n            applyTextStyle,\n            renderStyledTextPart,\n            renderStyledTextParts,\n            renderGithubTokens\n        };\n    }\n    const richTextGithubFormatterApi = {\n        createRichTextGithubFormatterApi\n    };\n    moduleRegistry.registerModule("richTextGithubFormatter", richTextGithubFormatterApi);\n})();\n' }, { "path": "dist/js/rich-text-renderer.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    function createRichTextRendererApi(deps = {}) {\n        const richTextParser = requireXlsx2mdRichTextParserModule().createRichTextParserApi({\n            normalizeMarkdownText: deps.normalizeMarkdownText\n        });\n        const plainFormatter = requireXlsx2mdRichTextPlainFormatterModule().createRichTextPlainFormatterApi();\n        const githubFormatter = requireXlsx2mdRichTextGithubFormatterModule().createRichTextGithubFormatterApi();\n        function normalizeGithubSegment(text) {\n            return githubFormatter.renderGithubTokens(richTextParser.splitTextWithLineBreaks(text));\n        }\n        function normalizeGithubCellText(text) {\n            return normalizeGithubSegment(text)\n                .replace(/ {2,}/g, " ")\n                .trim();\n        }\n        function renderTokens(tokens, formattingMode) {\n            if (!tokens.length)\n                return "";\n            if (formattingMode !== "github") {\n                return plainFormatter.renderPlainTokens(tokens);\n            }\n            return githubFormatter.renderGithubTokens(tokens);\n        }\n        function tokenizeCellDisplayText(cell, formattingMode = "plain") {\n            return richTextParser.tokenizeCellDisplayText(cell, formattingMode);\n        }\n        function renderCellDisplayText(cell, formattingMode = "plain") {\n            return renderTokens(tokenizeCellDisplayText(cell, formattingMode), formattingMode);\n        }\n        return {\n            compactText: richTextParser.compactText,\n            normalizeGithubSegment,\n            normalizeGithubCellText,\n            applyTextStyle: githubFormatter.applyTextStyle,\n            renderStyledTextParts: plainFormatter.renderStyledTextParts,\n            splitTextWithLineBreaks: richTextParser.splitTextWithLineBreaks,\n            tokenizePlainCellText: richTextParser.tokenizePlainCellText,\n            tokenizeGithubCellText: richTextParser.tokenizeGithubCellText,\n            tokenizeGithubRichTextRuns: richTextParser.tokenizeGithubRichTextRuns,\n            tokenizeCellDisplayText,\n            renderPlainTokens: plainFormatter.renderPlainTokens,\n            renderGithubTokens: githubFormatter.renderGithubTokens,\n            renderTokens,\n            renderCellDisplayText\n        };\n    }\n    const richTextRendererApi = {\n        createRichTextRendererApi\n    };\n    moduleRegistry.registerModule("richTextRenderer", richTextRendererApi);\n})();\n' }, { "path": "dist/js/narrative-structure.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const markdownNormalizeHelper = requireXlsx2mdMarkdownNormalize();\n    function normalizeNarrativeText(text) {\n        return markdownNormalizeHelper.normalizeMarkdownText(text);\n    }\n    function formatNarrativeHeading(text) {\n        return `### ${markdownNormalizeHelper.normalizeMarkdownHeadingText(text)}`;\n    }\n    function formatNarrativeBullet(text) {\n        return `- ${markdownNormalizeHelper.normalizeMarkdownListItemText(text)}`;\n    }\n    function isIndentedChildItem(parent, child) {\n        return !!(parent && child && child.startCol > parent.startCol);\n    }\n    function isWeekdayToken(value) {\n        const normalized = String(value || "").trim();\n        return ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F", "\u65E5\u66DC\u65E5", "\u6708\u66DC\u65E5", "\u706B\u66DC\u65E5", "\u6C34\u66DC\u65E5", "\u6728\u66DC\u65E5", "\u91D1\u66DC\u65E5", "\u571F\u66DC\u65E5"].includes(normalized);\n    }\n    function isIsoDateToken(value) {\n        return /^\\d{4}-\\d{2}-\\d{2}$/.test(String(value || "").trim());\n    }\n    function isCalendarLikeItem(item) {\n        if (!item || !Array.isArray(item.cellValues)) {\n            return false;\n        }\n        const values = item.cellValues.map((value) => String(value || "").trim()).filter(Boolean);\n        if (values.length < 5) {\n            return false;\n        }\n        const weekdayCount = values.filter(isWeekdayToken).length;\n        const dateCount = values.filter(isIsoDateToken).length;\n        return weekdayCount >= 5 || dateCount >= 5 || values.length >= 7;\n    }\n    function isCalendarLikeNarrativeBlock(block) {\n        if (!block.items || block.items.length < 2) {\n            return false;\n        }\n        const calendarLikeItems = block.items.filter((item) => isCalendarLikeItem(item));\n        return calendarLikeItems.length >= 2;\n    }\n    function renderCalendarLikeItem(item) {\n        const values = item.cellValues.map((value) => String(value || "").trim()).filter(Boolean);\n        if (values.length === 0) {\n            return normalizeNarrativeText(item.text);\n        }\n        if (values.every(isWeekdayToken)) {\n            return formatNarrativeHeading(values.join(" "));\n        }\n        if (values.every((value) => isIsoDateToken(value) || isWeekdayToken(value))) {\n            return values.join(" | ");\n        }\n        return values.join(" | ");\n    }\n    function renderCalendarLikeNarrativeBlock(block) {\n        return block.items\n            .map((item) => {\n            const values = item.cellValues.map((value) => String(value || "").trim()).filter(Boolean);\n            if (isCalendarLikeItem(item) || values.length >= 2) {\n                return renderCalendarLikeItem(item);\n            }\n            return normalizeNarrativeText(item.text);\n        })\n            .join("\\n\\n");\n    }\n    function renderNarrativeBlock(block) {\n        if (!block.items || block.items.length === 0) {\n            return block.lines.map((line) => normalizeNarrativeText(line)).join("\\n");\n        }\n        if (isCalendarLikeNarrativeBlock(block)) {\n            return renderCalendarLikeNarrativeBlock(block);\n        }\n        const parts = [];\n        let index = 0;\n        while (index < block.items.length) {\n            const current = block.items[index];\n            const next = block.items[index + 1];\n            if (isIndentedChildItem(current, next)) {\n                let childEnd = index + 1;\n                while (childEnd < block.items.length && isIndentedChildItem(current, block.items[childEnd])) {\n                    childEnd += 1;\n                }\n                const childLines = block.items\n                    .slice(index + 1, childEnd)\n                    .map((item) => formatNarrativeBullet(item.text));\n                parts.push(formatNarrativeHeading(current.text));\n                if (childLines.length > 0) {\n                    parts.push(childLines.join("\\n"));\n                }\n                index = childEnd;\n                continue;\n            }\n            parts.push(normalizeNarrativeText(current.text));\n            index += 1;\n        }\n        return parts.join("\\n\\n");\n    }\n    function isSectionHeadingNarrativeBlock(block) {\n        if (!block || !block.items || block.items.length < 2) {\n            return false;\n        }\n        return isIndentedChildItem(block.items[0], block.items[1]);\n    }\n    const narrativeStructureApi = {\n        renderNarrativeBlock,\n        isSectionHeadingNarrativeBlock,\n        isCalendarLikeNarrativeBlock\n    };\n    moduleRegistry.registerModule("narrativeStructure", narrativeStructureApi);\n})();\n' }, { "path": "dist/js/table-detector.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const DEFAULT_TABLE_SCORE_WEIGHTS = {\n        minGrid: 2,\n        borderPresence: 3,\n        densityHigh: 2,\n        densityVeryHigh: 1,\n        headerish: 2,\n        mergeHeavyPenalty: -1,\n        prosePenalty: -2,\n        threshold: 4\n    };\n    const borderGridHelper = moduleRegistry === null || moduleRegistry === void 0 ? void 0 : moduleRegistry.getModule("borderGrid");\n    if (!borderGridHelper) {\n        throw new Error("xlsx2md border grid module is not loaded");\n    }\n    function collectTableSeedCells(sheet) {\n        return sheet.cells.filter((cell) => {\n            const hasValue = !!String(cell.outputValue || "").trim();\n            const hasBorder = cell.borders.top || cell.borders.bottom || cell.borders.left || cell.borders.right;\n            return hasValue || hasBorder;\n        });\n    }\n    function collectBorderSeedCells(sheet) {\n        return sheet.cells.filter((cell) => (cell.borders.top || cell.borders.bottom || cell.borders.left || cell.borders.right));\n    }\n    function areBorderAdjacent(current, next) {\n        if (current.row === next.row && Math.abs(current.col - next.col) === 1) {\n            return (current.borders.top && next.borders.top)\n                || (current.borders.bottom && next.borders.bottom)\n                || (current.col < next.col ? current.borders.right && next.borders.left : current.borders.left && next.borders.right);\n        }\n        if (current.col === next.col && Math.abs(current.row - next.row) === 1) {\n            return (current.borders.left && next.borders.left)\n                || (current.borders.right && next.borders.right)\n                || (current.row < next.row ? current.borders.bottom && next.borders.top : current.borders.top && next.borders.bottom);\n        }\n        return false;\n    }\n    function collectConnectedComponents(seedCells, adjacencyMode = "grid") {\n        const positionMap = new Map();\n        for (const cell of seedCells) {\n            positionMap.set(`${cell.row}:${cell.col}`, cell);\n        }\n        const visited = new Set();\n        const components = [];\n        for (const cell of seedCells) {\n            const key = `${cell.row}:${cell.col}`;\n            if (visited.has(key))\n                continue;\n            const queue = [cell];\n            const component = [];\n            visited.add(key);\n            while (queue.length > 0) {\n                const current = queue.shift();\n                component.push(current);\n                for (const [rowDelta, colDelta] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {\n                    const nextKey = `${current.row + rowDelta}:${current.col + colDelta}`;\n                    const nextCell = positionMap.get(nextKey);\n                    if (!nextCell || visited.has(nextKey))\n                        continue;\n                    if (adjacencyMode === "border" && !areBorderAdjacent(current, nextCell))\n                        continue;\n                    visited.add(nextKey);\n                    queue.push(nextCell);\n                }\n            }\n            components.push(component);\n        }\n        return components;\n    }\n    function isWithinBounds(bounds, candidate) {\n        return candidate.startRow >= bounds.startRow\n            && candidate.startCol >= bounds.startCol\n            && candidate.endRow <= bounds.endRow\n            && candidate.endCol <= bounds.endCol;\n    }\n    function getBoundsArea(bounds) {\n        return Math.max(1, (bounds.endRow - bounds.startRow + 1) * (bounds.endCol - bounds.startCol + 1));\n    }\n    function getCombinedCandidateArea(candidates) {\n        return candidates.reduce((sum, candidate) => sum + getBoundsArea(candidate), 0);\n    }\n    function pruneRedundantCandidates(candidates) {\n        return candidates.filter((candidate, candidateIndex) => {\n            const candidateArea = getBoundsArea(candidate);\n            const hasSingleDominatingContainedCandidate = candidates.some((other, otherIndex) => {\n                if (candidateIndex === otherIndex)\n                    return false;\n                if (!isWithinBounds(candidate, other))\n                    return false;\n                const otherArea = getBoundsArea(other);\n                if (otherArea < candidateArea * 0.4)\n                    return false;\n                return candidateArea > otherArea;\n            });\n            if (hasSingleDominatingContainedCandidate) {\n                return false;\n            }\n            const containedCandidates = candidates.filter((other, otherIndex) => {\n                if (candidateIndex === otherIndex)\n                    return false;\n                if (!isWithinBounds(candidate, other))\n                    return false;\n                return getBoundsArea(other) < candidateArea;\n            });\n            if (containedCandidates.length >= 2 && getCombinedCandidateArea(containedCandidates) >= candidateArea * 0.6) {\n                return false;\n            }\n            return true;\n        });\n    }\n    function pruneCalendarLikeColumnCandidates(candidates) {\n        const dropKeys = new Set();\n        const sorted = [...candidates].sort((left, right) => {\n            if (left.startRow !== right.startRow)\n                return left.startRow - right.startRow;\n            if (left.endRow !== right.endRow)\n                return left.endRow - right.endRow;\n            return left.startCol - right.startCol;\n        });\n        let cluster = [];\n        function flushCluster() {\n            if (cluster.length < 3) {\n                cluster = [];\n                return;\n            }\n            for (const candidate of cluster) {\n                dropKeys.add(`${candidate.startRow}:${candidate.startCol}:${candidate.endRow}:${candidate.endCol}`);\n            }\n            cluster = [];\n        }\n        function isCalendarLikeColumn(candidate) {\n            const rowCount = candidate.endRow - candidate.startRow + 1;\n            const colCount = candidate.endCol - candidate.startCol + 1;\n            return rowCount >= 4 && colCount <= 3;\n        }\n        for (const candidate of sorted) {\n            if (!isCalendarLikeColumn(candidate)) {\n                flushCluster();\n                continue;\n            }\n            const previous = cluster[cluster.length - 1];\n            if (!previous) {\n                cluster.push(candidate);\n                continue;\n            }\n            const sameBand = candidate.startRow === previous.startRow && candidate.endRow === previous.endRow;\n            const horizontalGap = candidate.startCol - previous.endCol;\n            if (sameBand && horizontalGap >= 1 && horizontalGap <= 2) {\n                cluster.push(candidate);\n            }\n            else {\n                flushCluster();\n                cluster.push(candidate);\n            }\n        }\n        flushCluster();\n        return candidates.filter((candidate) => !dropKeys.has(`${candidate.startRow}:${candidate.startCol}:${candidate.endRow}:${candidate.endCol}`));\n    }\n    function detectTableCandidates(sheet, buildCellMap, scoreWeights = DEFAULT_TABLE_SCORE_WEIGHTS, tableDetectionMode = "balanced") {\n        const cellMap = buildCellMap(sheet);\n        const allSeedCells = collectTableSeedCells(sheet);\n        const borderSeedCells = collectBorderSeedCells(sheet);\n        const candidates = [];\n        const candidateKeys = new Set();\n        function countSparseRows(component, startRow, endRow) {\n            let sparseRows = 0;\n            for (let row = startRow; row <= endRow; row += 1) {\n                const nonEmptyCount = component.filter((entry) => entry.row === row && entry.outputValue.trim()).length;\n                if (nonEmptyCount <= 2) {\n                    sparseRows += 1;\n                }\n            }\n            return sparseRows;\n        }\n        function maybePushCandidate(component, sourceKind = "border") {\n            const rows = component.map((entry) => entry.row);\n            const cols = component.map((entry) => entry.col);\n            const startRow = Math.min(...rows);\n            const endRow = Math.max(...rows);\n            const startCol = Math.min(...cols);\n            const endCol = Math.max(...cols);\n            const area = Math.max(1, (endRow - startRow + 1) * (endCol - startCol + 1));\n            const density = component.filter((entry) => entry.outputValue.trim()).length / area;\n            const rowCount = endRow - startRow + 1;\n            const colCount = endCol - startCol + 1;\n            const sparseRowCount = countSparseRows(component, startRow, endRow);\n            const nonEmptyCells = component.filter((entry) => entry.outputValue.trim());\n            if (rowCount < 2 || colCount < 2) {\n                return;\n            }\n            let score = 0;\n            const reasons = [];\n            const normalizedBorderedCellCount = borderGridHelper.countNormalizedBorderedCells(cellMap, startRow, startCol, endRow, endCol);\n            if (rowCount >= 2 && colCount >= 2) {\n                score += scoreWeights.minGrid;\n                reasons.push(`At least 2x2 (+${scoreWeights.minGrid})`);\n            }\n            if (normalizedBorderedCellCount >= Math.max(2, Math.ceil(component.length * 0.3))) {\n                score += scoreWeights.borderPresence;\n                reasons.push(`Has borders (+${scoreWeights.borderPresence})`);\n            }\n            if (density >= 0.55) {\n                score += scoreWeights.densityHigh;\n                reasons.push(`High density (+${scoreWeights.densityHigh})`);\n            }\n            if (density >= 0.8) {\n                score += scoreWeights.densityVeryHigh;\n                reasons.push(`Very high density (+${scoreWeights.densityVeryHigh})`);\n            }\n            const firstRowCells = component.filter((entry) => entry.row === startRow).sort((a, b) => a.col - b.col);\n            const headerishCount = firstRowCells.filter((entry) => {\n                const value = entry.outputValue.trim();\n                return value.length > 0 && value.length <= 24 && !/^\\d+(?:\\.\\d+)?$/.test(value);\n            }).length;\n            if (headerishCount >= 2) {\n                score += scoreWeights.headerish;\n                reasons.push(`Header-like first row (+${scoreWeights.headerish})`);\n            }\n            const mergedArea = sheet.merges.filter((merge) => {\n                return !(merge.endRow < startRow || merge.startRow > endRow || merge.endCol < startCol || merge.startCol > endCol);\n            }).length;\n            if (mergedArea >= Math.max(2, Math.ceil(area * 0.08))) {\n                score += scoreWeights.mergeHeavyPenalty;\n                reasons.push(`Many merged cells (${scoreWeights.mergeHeavyPenalty})`);\n            }\n            const plannerAwareMode = tableDetectionMode === "planner-aware";\n            if (sourceKind === "border") {\n                const looksLikeTinyMergedLabelStub = (rowCount <= 2\n                    && colCount <= 2\n                    && mergedArea >= 1\n                    && nonEmptyCells.length <= 2\n                    && headerishCount <= 1);\n                if (looksLikeTinyMergedLabelStub) {\n                    return;\n                }\n                if (mergedArea >= 2 && density < 0.25 && headerishCount < 2) {\n                    return;\n                }\n                if (plannerAwareMode) {\n                    const looksLikeWideSparseMergeForm = (colCount >= 8\n                        && rowCount >= 4\n                        && density < 0.45\n                        && mergedArea >= Math.max(4, rowCount - 1)\n                        && sparseRowCount >= Math.ceil(rowCount * 0.7));\n                    if (looksLikeWideSparseMergeForm) {\n                        return;\n                    }\n                }\n            }\n            else {\n                if (mergedArea >= 2 && rowCount <= 6 && colCount >= 10 && density < 0.25) {\n                    return;\n                }\n                if (plannerAwareMode) {\n                    const looksLikeMixedLayoutSheet = (rowCount >= 20\n                        && colCount >= 8\n                        && mergedArea >= 4\n                        && sparseRowCount >= 4\n                        && density < 0.8);\n                    if (looksLikeMixedLayoutSheet) {\n                        return;\n                    }\n                }\n            }\n            const avgTextLength = nonEmptyCells\n                .reduce((sum, entry) => sum + entry.outputValue.trim().length, 0) / Math.max(1, nonEmptyCells.length);\n            if (avgTextLength > 36 && density < 0.7) {\n                score += scoreWeights.prosePenalty;\n                reasons.push(`Mostly long prose (${scoreWeights.prosePenalty})`);\n            }\n            if (score >= scoreWeights.threshold) {\n                const normalizedBounds = trimTableCandidateBounds(cellMap, {\n                    startRow,\n                    startCol,\n                    endRow,\n                    endCol\n                });\n                if (normalizedBounds.endRow - normalizedBounds.startRow + 1 < 2\n                    || normalizedBounds.endCol - normalizedBounds.startCol + 1 < 2) {\n                    return;\n                }\n                const key = `${normalizedBounds.startRow}:${normalizedBounds.startCol}:${normalizedBounds.endRow}:${normalizedBounds.endCol}`;\n                if (candidateKeys.has(key)) {\n                    return;\n                }\n                candidateKeys.add(key);\n                candidates.push({\n                    startRow: normalizedBounds.startRow,\n                    startCol: normalizedBounds.startCol,\n                    endRow: normalizedBounds.endRow,\n                    endCol: normalizedBounds.endCol,\n                    score,\n                    reasonSummary: reasons\n                });\n            }\n        }\n        for (const component of collectConnectedComponents(borderSeedCells, tableDetectionMode === "border" ? "border" : "grid")) {\n            maybePushCandidate(component, "border");\n        }\n        if (tableDetectionMode !== "border") {\n            for (const component of collectConnectedComponents(allSeedCells)) {\n                const rows = component.map((entry) => entry.row);\n                const cols = component.map((entry) => entry.col);\n                const bounds = {\n                    startRow: Math.min(...rows),\n                    startCol: Math.min(...cols),\n                    endRow: Math.max(...rows),\n                    endCol: Math.max(...cols)\n                };\n                const containingBorderCandidates = candidates.filter((candidate) => isWithinBounds(candidate, bounds));\n                const fallbackArea = getBoundsArea(bounds);\n                const shadowedByBorderCandidate = containingBorderCandidates.some((candidate) => (getBoundsArea(candidate) >= fallbackArea * 0.4));\n                const shadowedByMultipleBorderCandidates = containingBorderCandidates.length >= 2\n                    && getCombinedCandidateArea(containingBorderCandidates) >= fallbackArea * 0.6;\n                if (shadowedByBorderCandidate || shadowedByMultipleBorderCandidates) {\n                    continue;\n                }\n                maybePushCandidate(component, "fallback");\n            }\n        }\n        const prunedCandidates = pruneRedundantCandidates(candidates);\n        const finalCandidates = tableDetectionMode === "planner-aware"\n            ? pruneCalendarLikeColumnCandidates(prunedCandidates)\n            : prunedCandidates;\n        return finalCandidates.sort((left, right) => {\n            if (left.startRow !== right.startRow)\n                return left.startRow - right.startRow;\n            return left.startCol - right.startCol;\n        });\n    }\n    function trimTableCandidateBounds(cellMap, bounds) {\n        let { startRow, startCol, endRow, endCol } = bounds;\n        const minBorderedCells = Math.max(2, Math.ceil((endCol - startCol + 1) * 0.5));\n        while (endRow - startRow + 1 >= 2) {\n            const topStats = borderGridHelper.collectTableEdgeStats(cellMap, startRow, startCol, endCol);\n            const nextStats = borderGridHelper.collectTableEdgeStats(cellMap, startRow + 1, startCol, endCol);\n            const shouldTrimTop = (topStats.nonEmptyCount <= 2\n                && topStats.rawBorderCount === 0\n                && nextStats.borderCount >= minBorderedCells\n                && nextStats.nonEmptyCount >= Math.max(2, Math.ceil((endCol - startCol + 1) * 0.5)));\n            if (!shouldTrimTop) {\n                break;\n            }\n            startRow += 1;\n        }\n        for (let row = startRow + 1; row <= endRow; row += 1) {\n            const currentStats = borderGridHelper.collectTableEdgeStats(cellMap, row, startCol, endCol);\n            const previousStats = borderGridHelper.collectTableEdgeStats(cellMap, row - 1, startCol, endCol);\n            const shouldBreakAtCurrentRow = ((previousStats.borderCount >= minBorderedCells\n                || previousStats.bottomCount >= minBorderedCells\n                || currentStats.topCount >= minBorderedCells)\n                && currentStats.rawBorderCount === 0\n                && currentStats.nonEmptyCount <= 1);\n            if (shouldBreakAtCurrentRow) {\n                endRow = row - 1;\n                break;\n            }\n        }\n        while (endRow - startRow + 1 >= 2) {\n            const bottomStats = borderGridHelper.collectTableEdgeStats(cellMap, endRow, startCol, endCol);\n            const previousStats = borderGridHelper.collectTableEdgeStats(cellMap, endRow - 1, startCol, endCol);\n            const shouldTrimBottom = ((previousStats.borderCount >= minBorderedCells\n                || previousStats.bottomCount >= minBorderedCells\n                || bottomStats.topCount >= minBorderedCells)\n                && bottomStats.rawBorderCount === 0\n                && bottomStats.nonEmptyCount <= 1) || (bottomStats.nonEmptyCount <= 1\n                && bottomStats.rawBorderCount === 0\n                && bottomStats.maxTextLength >= 12\n                && previousStats.nonEmptyCount >= Math.max(2, Math.ceil((endCol - startCol + 1) * 0.5)));\n            if (!shouldTrimBottom) {\n                break;\n            }\n            endRow -= 1;\n        }\n        return { startRow, startCol, endRow, endCol };\n    }\n    function matrixFromCandidate(sheet, candidate, options, buildCellMap, formatCellForMarkdown) {\n        const cellMap = buildCellMap(sheet);\n        const rows = [];\n        for (let row = candidate.startRow; row <= candidate.endRow; row += 1) {\n            const currentRow = [];\n            for (let col = candidate.startCol; col <= candidate.endCol; col += 1) {\n                const cell = cellMap.get(`${row}:${col}`);\n                let value = formatCellForMarkdown(cell, options);\n                if (options.trimText !== false) {\n                    value = value.trim();\n                }\n                currentRow.push(value);\n            }\n            rows.push(currentRow);\n        }\n        applyMergeTokens(rows, sheet.merges, candidate.startRow, candidate.startCol, candidate.endRow, candidate.endCol);\n        let normalizedRows = rows;\n        if (options.removeEmptyRows !== false) {\n            normalizedRows = normalizedRows.filter((row) => row.some((cell) => isMeaningfulMarkdownCell(cell)));\n        }\n        if (options.removeEmptyColumns !== false && normalizedRows.length > 0) {\n            const keepColumnFlags = normalizedRows[0].map((_, colIndex) => normalizedRows.some((row) => isMeaningfulMarkdownCell(row[colIndex])));\n            normalizedRows = normalizedRows.map((row) => row.filter((_cell, colIndex) => keepColumnFlags[colIndex]));\n        }\n        return normalizedRows;\n    }\n    function isMeaningfulMarkdownCell(value) {\n        const text = String(value || "").trim();\n        if (!text)\n            return false;\n        return text !== "[\u2190M\u2190]" && text !== "[\u2191M\u2191]";\n    }\n    function applyMergeTokens(matrix, merges, startRow, startCol, endRow, endCol) {\n        for (const merge of merges) {\n            if (merge.endRow < startRow || merge.startRow > endRow || merge.endCol < startCol || merge.startCol > endCol) {\n                continue;\n            }\n            for (let row = merge.startRow; row <= merge.endRow; row += 1) {\n                for (let col = merge.startCol; col <= merge.endCol; col += 1) {\n                    if (row === merge.startRow && col === merge.startCol)\n                        continue;\n                    const matrixRow = row - startRow;\n                    const matrixCol = col - startCol;\n                    if (!matrix[matrixRow] || typeof matrix[matrixRow][matrixCol] === "undefined") {\n                        continue;\n                    }\n                    matrix[matrixRow][matrixCol] = row === merge.startRow ? "[\u2190M\u2190]" : "[\u2191M\u2191]";\n                }\n            }\n        }\n    }\n    const tableDetectorApi = {\n        collectTableSeedCells,\n        collectBorderSeedCells,\n        pruneRedundantCandidates,\n        pruneCalendarLikeColumnCandidates,\n        detectTableCandidates,\n        trimTableCandidateBounds,\n        matrixFromCandidate,\n        isMeaningfulMarkdownCell,\n        applyMergeTokens,\n        defaultTableScoreWeights: DEFAULT_TABLE_SCORE_WEIGHTS\n    };\n    moduleRegistry.registerModule("tableDetector", tableDetectorApi);\n})();\n' }, { "path": "dist/js/markdown-export.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const textEncoder = new TextEncoder();\n    const zipIoHelper = requireXlsx2mdZipIo();\n    const textEncodingHelper = requireXlsx2mdTextEncoding();\n    const markdownNormalizeHelper = requireXlsx2mdMarkdownNormalize();\n    const markdownTableEscapeHelper = requireXlsx2mdMarkdownTableEscape();\n    const FORMULA_STATUSES = ["resolved", "fallback_formula", "unsupported_external"];\n    function normalizeMarkdownLineBreaks(text) {\n        return markdownNormalizeHelper.normalizeMarkdownText(text);\n    }\n    function escapeMarkdownCell(text) {\n        return markdownTableEscapeHelper.escapeMarkdownTableCell(text);\n    }\n    function createBlankRow(columnCount) {\n        return new Array(columnCount).fill("");\n    }\n    function renderMarkdownTable(rows, treatFirstRowAsHeader) {\n        if (rows.length === 0) {\n            return "";\n        }\n        const workingRows = rows.map((row) => row.map((cell) => escapeMarkdownCell(cell)));\n        if (workingRows.length === 1 && treatFirstRowAsHeader) {\n            workingRows.push(createBlankRow(workingRows[0].length));\n        }\n        const header = treatFirstRowAsHeader ? workingRows[0] : createBlankRow(workingRows[0].length);\n        const body = treatFirstRowAsHeader ? workingRows.slice(1) : workingRows;\n        const lines = [\n            `| ${header.join(" | ")} |`,\n            `| ${header.map(() => "---").join(" | ")} |`\n        ];\n        for (const row of body) {\n            lines.push(`| ${row.join(" | ")} |`);\n        }\n        return lines.join("\\n");\n    }\n    function sanitizeFileNameSegment(value, fallback) {\n        const normalized = String(value || "").normalize("NFKC");\n        const sanitized = normalized\n            .replace(/[\\\\/:*?"<>|]/g, "_")\n            .replace(/\\s+/g, "_")\n            .replace(/[^\\p{L}\\p{N}._-]+/gu, "_")\n            .replace(/_+/g, "_")\n            .replace(/^[_ .-]+|[_ .-]+$/g, "");\n        return sanitized || fallback;\n    }\n    function stripWorkbookExtension(workbookName) {\n        return String(workbookName || "").replace(/\\.xlsx$/i, "");\n    }\n    function createCombinedMarkdownFileName(workbookName) {\n        const baseName = stripWorkbookExtension(String(workbookName || "workbook")) || "workbook";\n        return `${baseName}.md`;\n    }\n    function createExportEntryName(relativePath) {\n        return `output/${relativePath}`;\n    }\n    function quoteYamlString(value) {\n        return `"${String(value).replace(/\\\\/g, "\\\\\\\\").replace(/"/g, "\\\\\\"").replace(/\\r/g, "\\\\r").replace(/\\n/g, "\\\\n")}"`;\n    }\n    function createOutputFileName(workbookName, sheetIndex, sheetName, outputMode = "display", formattingMode = "plain") {\n        const bookBase = sanitizeFileNameSegment(stripWorkbookExtension(workbookName), "workbook");\n        const safeSheetName = sanitizeFileNameSegment(sheetName, `Sheet${sheetIndex}`);\n        void outputMode;\n        void formattingMode;\n        return `${bookBase}_${String(sheetIndex).padStart(3, "0")}_${safeSheetName}.md`;\n    }\n    function countFormulaStatuses(formulaDiagnostics) {\n        const counts = {\n            resolved: 0,\n            fallback_formula: 0,\n            unsupported_external: 0\n        };\n        for (const item of formulaDiagnostics) {\n            if (item.status && item.status in counts) {\n                counts[item.status] += 1;\n            }\n        }\n        return counts;\n    }\n    function createSummaryText(markdownFile) {\n        const formulaCounts = countFormulaStatuses(markdownFile.summary.formulaDiagnostics);\n        return [\n            `Output file: ${markdownFile.fileName}`,\n            `Output mode: ${markdownFile.summary.outputMode}`,\n            `Formatting mode: ${markdownFile.summary.formattingMode}`,\n            `Table detection mode: ${markdownFile.summary.tableDetectionMode}`,\n            `Sections: ${markdownFile.summary.sections}`,\n            `Tables: ${markdownFile.summary.tables}`,\n            `Narrative blocks: ${markdownFile.summary.narrativeBlocks}`,\n            `Merged ranges: ${markdownFile.summary.merges}`,\n            `Images: ${markdownFile.summary.images}`,\n            `Charts: ${markdownFile.summary.charts}`,\n            `Comments: ${markdownFile.summary.comments || 0}`,\n            `Analyzed cells: ${markdownFile.summary.cells}`,\n            ...FORMULA_STATUSES.map((status) => `Formula ${status}: ${formulaCounts[status]}`),\n            ...markdownFile.summary.tableScores.map((detail) => `Table candidate ${detail.range}: score ${detail.score} / ${detail.reasons.join(", ")}`)\n        ].join("\\n");\n    }\n    function stripBookHeading(markdown, bookHeading) {\n        const lines = String(markdown || "").split("\\n");\n        if (lines[0] === bookHeading) {\n            lines.shift();\n            while (lines[0] === "") {\n                lines.shift();\n            }\n        }\n        return lines.join("\\n");\n    }\n    function createFrontMatter(workbook, markdownFiles, options = {}) {\n        var _a;\n        const firstSummary = (_a = markdownFiles[0]) === null || _a === void 0 ? void 0 : _a.summary;\n        const workbookName = String(workbook.name || "workbook.xlsx");\n        const shapeDetails = String(options.shapeDetails || "exclude");\n        return [\n            "---",\n            `title: ${quoteYamlString(workbookName)}`,\n            "type: converted",\n            "conversion:",\n            "  tool: miku-xlsx2md",\n            `  version: ${quoteYamlString(String(options.toolVersion || "unknown"))}`,\n            `  output_mode: ${(firstSummary === null || firstSummary === void 0 ? void 0 : firstSummary.outputMode) || "display"}`,\n            `  formatting_mode: ${(firstSummary === null || firstSummary === void 0 ? void 0 : firstSummary.formattingMode) || "github"}`,\n            `  table_detection_mode: ${(firstSummary === null || firstSummary === void 0 ? void 0 : firstSummary.tableDetectionMode) || "balanced"}`,\n            `  shape_details: ${shapeDetails}`,\n            "---"\n        ].join("\\n");\n    }\n    function shouldIncludeFrontMatter(options = {}) {\n        return String(options.frontMatter || "include") !== "exclude";\n    }\n    function createCombinedMarkdownExportFile(workbook, markdownFiles, options = {}) {\n        const fileName = createCombinedMarkdownFileName(workbook.name);\n        const bookHeading = `# Book: ${String(workbook.name || "workbook.xlsx")}`;\n        const content = [\n            ...(shouldIncludeFrontMatter(options) ? [createFrontMatter(workbook, markdownFiles, options)] : []),\n            bookHeading,\n            ...markdownFiles\n                .map((markdownFile) => stripBookHeading(markdownFile.markdown, bookHeading))\n                .filter((markdown) => markdown.trim().length > 0)\n        ].join("\\n\\n");\n        return { fileName, content };\n    }\n    function encodeMarkdownText(text, options = {}) {\n        return textEncodingHelper.encodeText(text, options);\n    }\n    function createCombinedMarkdownExportPayload(workbook, markdownFiles, options = {}) {\n        const combined = createCombinedMarkdownExportFile(workbook, markdownFiles, options);\n        return {\n            ...combined,\n            data: encodeMarkdownText(`${combined.content}\\n`, options),\n            mimeType: textEncodingHelper.createTextMimeType(options)\n        };\n    }\n    function createMarkdownExportEntry(workbook, markdownFiles, options = {}) {\n        if (markdownFiles.length === 0) {\n            return null;\n        }\n        const combined = createCombinedMarkdownExportPayload(workbook, markdownFiles, options);\n        return {\n            name: createExportEntryName(combined.fileName),\n            data: combined.data\n        };\n    }\n    function createAssetExportEntries(workbook) {\n        const entries = [];\n        for (const sheet of workbook.sheets) {\n            for (const image of sheet.images) {\n                entries.push({\n                    name: createExportEntryName(image.path),\n                    data: image.data\n                });\n            }\n            for (const shape of sheet.shapes || []) {\n                if (!shape.svgPath || !shape.svgData)\n                    continue;\n                entries.push({\n                    name: createExportEntryName(shape.svgPath),\n                    data: shape.svgData\n                });\n            }\n        }\n        return entries;\n    }\n    function createExportEntries(workbook, markdownFiles, options = {}) {\n        const entries = createAssetExportEntries(workbook);\n        const markdownEntry = createMarkdownExportEntry(workbook, markdownFiles, options);\n        if (markdownEntry) {\n            entries.unshift(markdownEntry);\n        }\n        return entries;\n    }\n    function createWorkbookExportArchive(workbook, markdownFiles, options = {}) {\n        return zipIoHelper.createStoredZip(createExportEntries(workbook, markdownFiles, options));\n    }\n    const markdownExportApi = {\n        encodeMarkdownText,\n        createCombinedMarkdownExportPayload,\n        escapeMarkdownCell,\n        renderMarkdownTable,\n        sanitizeFileNameSegment,\n        stripWorkbookExtension,\n        createCombinedMarkdownFileName,\n        createExportEntryName,\n        createOutputFileName,\n        createSummaryText,\n        createFrontMatter,\n        createCombinedMarkdownExportFile,\n        createMarkdownExportEntry,\n        createAssetExportEntries,\n        createExportEntries,\n        createWorkbookExportArchive,\n        normalizeMarkdownLineBreaks,\n        textEncoder\n    };\n    moduleRegistry.registerModule("markdownExport", markdownExportApi);\n})();\n' }, { "path": "dist/js/sheet-markdown.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    function createSheetMarkdownApi(deps) {\n        const markdownOptions = requireXlsx2mdMarkdownOptions();\n        const richTextRenderer = requireXlsx2mdRichTextRendererModule().createRichTextRendererApi({\n            normalizeMarkdownText: deps.normalizeMarkdownText\n        });\n        function buildCellMap(sheet) {\n            const map = new Map();\n            for (const cell of sheet.cells) {\n                map.set(`${cell.row}:${cell.col}`, cell);\n            }\n            return map;\n        }\n        function createHeadingFragment(text) {\n            return String(text || "")\n                .trim()\n                .toLowerCase()\n                .replace(/<[^>]+>/g, "")\n                .replace(/[^\\p{L}\\p{N}\\s_-]+/gu, "")\n                .replace(/\\s+/g, "-");\n        }\n        function parseInternalHyperlinkLocation(location, currentSheetName) {\n            const normalized = String(location || "").trim().replace(/^#/, "");\n            if (!normalized) {\n                return { sheetName: currentSheetName, refText: "" };\n            }\n            const match = normalized.match(/^(?:\'((?:[^\']|\'\')+)\'|([^!]+))!(.+)$/);\n            if (match) {\n                return {\n                    sheetName: (match[1] || match[2] || currentSheetName).replace(/\'\'/g, "\'"),\n                    refText: (match[3] || "").trim()\n                };\n            }\n            return {\n                sheetName: currentSheetName,\n                refText: normalized\n            };\n        }\n        function renderHyperlinkMarkdown(cell, text, workbook, sheet, options) {\n            const hyperlink = cell.hyperlink;\n            const label = String(text || "").trim();\n            if (!hyperlink || !label)\n                return text;\n            if (hyperlink.kind === "external") {\n                const href = String(hyperlink.target || "").trim();\n                return href ? `[${label}](${href})` : label;\n            }\n            const currentSheetName = (sheet === null || sheet === void 0 ? void 0 : sheet.name) || "";\n            const { sheetName, refText } = parseInternalHyperlinkLocation(hyperlink.location || hyperlink.target, currentSheetName);\n            const traceText = [sheetName, refText].filter(Boolean).join("!");\n            const targetSheet = (workbook === null || workbook === void 0 ? void 0 : workbook.sheets.find((entry) => entry.name === sheetName)) || null;\n            if (!targetSheet || !workbook) {\n                return traceText ? `${label} (${traceText})` : label;\n            }\n            const href = `#${createHeadingFragment(targetSheet.name)}`;\n            return traceText && traceText !== targetSheet.name\n                ? `[${label}](${href}) (${traceText})`\n                : `[${label}](${href})`;\n        }\n        function createDisplayCellForFormatting(cell, formattingMode) {\n            var _a;\n            if (formattingMode !== "github" || !cell.hyperlink) {\n                return cell;\n            }\n            return {\n                ...cell,\n                textStyle: {\n                    ...cell.textStyle,\n                    underline: false\n                },\n                richTextRuns: ((_a = cell.richTextRuns) === null || _a === void 0 ? void 0 : _a.map((run) => ({\n                    ...run,\n                    underline: false\n                }))) || null\n            };\n        }\n        function createCellMarkdownValues(cell, formattingMode) {\n            const displayCell = createDisplayCellForFormatting(cell, formattingMode);\n            return {\n                displayValue: richTextRenderer.compactText(String(cell.outputValue || "")),\n                rawValue: richTextRenderer.compactText(String(cell.rawValue || "")),\n                displayMarkdown: richTextRenderer.renderCellDisplayText(displayCell, formattingMode)\n            };\n        }\n        function renderCellWithHyperlink(cell, text, context) {\n            return renderHyperlinkMarkdown(cell, text, context.workbook, context.sheet, context.options);\n        }\n        function renderDisplayModeCell(cell, values, context) {\n            return renderCellWithHyperlink(cell, values.displayMarkdown, context);\n        }\n        function renderRawModeCell(cell, values, context) {\n            return renderCellWithHyperlink(cell, values.rawValue || values.displayValue, context);\n        }\n        function renderBothModeCell(cell, values, context) {\n            if (values.rawValue && values.rawValue !== values.displayValue) {\n                if (values.displayMarkdown) {\n                    return `${renderCellWithHyperlink(cell, values.displayMarkdown, context)} [raw=${values.rawValue}]`;\n                }\n                return `[raw=${values.rawValue}]`;\n            }\n            return renderCellWithHyperlink(cell, values.displayMarkdown || values.rawValue, context);\n        }\n        function getCellMarkdownRenderer(outputMode) {\n            if (outputMode === "raw") {\n                return renderRawModeCell;\n            }\n            if (outputMode === "both") {\n                return renderBothModeCell;\n            }\n            return renderDisplayModeCell;\n        }\n        function formatCellForMarkdown(cell, options, workbook = null, sheet = null) {\n            if (!cell)\n                return "";\n            const resolvedOptions = markdownOptions.resolveMarkdownOptions(options);\n            const formattingMode = resolvedOptions.formattingMode;\n            const values = createCellMarkdownValues(cell, formattingMode);\n            const renderCell = getCellMarkdownRenderer(resolvedOptions.outputMode);\n            return renderCell(cell, values, {\n                workbook,\n                sheet,\n                options\n            });\n        }\n        function isCellInAnyTable(row, col, tables) {\n            return tables.some((table) => row >= table.startRow && row <= table.endRow && col >= table.startCol && col <= table.endCol);\n        }\n        function splitNarrativeRowSegments(cells, options, workbook = null, sheet = null) {\n            const segments = [];\n            let current = null;\n            for (const cell of cells) {\n                const value = formatCellForMarkdown(cell, options, workbook, sheet).trim();\n                if (!value)\n                    continue;\n                if (!current || cell.col - current.lastCol > 4) {\n                    current = {\n                        startCol: cell.col,\n                        values: [value],\n                        lastCol: cell.col\n                    };\n                    segments.push(current);\n                }\n                else {\n                    current.values.push(value);\n                    current.lastCol = cell.col;\n                }\n            }\n            return segments.map((segment) => ({\n                startCol: segment.startCol,\n                values: segment.values\n            }));\n        }\n        function collectNarrativeCellsByRow(sheet, tables) {\n            const rowMap = new Map();\n            for (const cell of sheet.cells) {\n                if (!cell.outputValue)\n                    continue;\n                if (isCellInAnyTable(cell.row, cell.col, tables))\n                    continue;\n                const entries = rowMap.get(cell.row) || [];\n                entries.push(cell);\n                rowMap.set(cell.row, entries);\n            }\n            return rowMap;\n        }\n        function createNarrativeItem(rowNumber, segment) {\n            const text = segment.values.join(" ").trim();\n            return {\n                row: rowNumber,\n                startCol: segment.startCol,\n                text,\n                cellValues: segment.values\n            };\n        }\n        function createNarrativeItemsForRow(rowNumber, cells, options, workbook = null, sheet = null) {\n            return splitNarrativeRowSegments(cells, options, workbook, sheet)\n                .map((segment) => createNarrativeItem(rowNumber, segment))\n                .filter((item) => !!item.text);\n        }\n        function buildNarrativeItems(workbook, sheet, tables, options = {}) {\n            const rowMap = collectNarrativeCellsByRow(sheet, tables);\n            const rowNumbers = Array.from(rowMap.keys()).sort((a, b) => a - b);\n            const items = [];\n            for (const rowNumber of rowNumbers) {\n                const cells = (rowMap.get(rowNumber) || []).slice().sort((a, b) => a.col - b.col);\n                items.push(...createNarrativeItemsForRow(rowNumber, cells, options, workbook, sheet));\n            }\n            return items;\n        }\n        function shouldStartNarrativeBlock(current, rowNumber, previousRow, startCol) {\n            return !current || rowNumber - previousRow > 1 || Math.abs(startCol - current.startCol) > 3;\n        }\n        function isIsoDateToken(value) {\n            return /^\\d{4}-\\d{2}-\\d{2}$/.test(String(value || "").trim());\n        }\n        function isWeekdayToken(value) {\n            const normalized = String(value || "").trim();\n            return ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F", "\u65E5\u66DC\u65E5", "\u6708\u66DC\u65E5", "\u706B\u66DC\u65E5", "\u6C34\u66DC\u65E5", "\u6728\u66DC\u65E5", "\u91D1\u66DC\u65E5", "\u571F\u66DC\u65E5"].includes(normalized);\n        }\n        function isCalendarDateItem(item) {\n            if (!item)\n                return false;\n            const values = (item.cellValues || []).map((value) => String(value || "").trim()).filter(Boolean);\n            return values.length >= 5 && values.every((value) => isIsoDateToken(value) || isWeekdayToken(value));\n        }\n        function blockHasCalendarDateItem(block) {\n            var _a;\n            return !!((_a = block === null || block === void 0 ? void 0 : block.items) === null || _a === void 0 ? void 0 : _a.some((item) => isCalendarDateItem(item)));\n        }\n        function shouldAppendToCalendarNarrativeBlock(current, item, previousRow) {\n            if (!current || !blockHasCalendarDateItem(current)) {\n                return false;\n            }\n            const rowGap = item.row - previousRow;\n            if (rowGap < 0 || rowGap > 4) {\n                return false;\n            }\n            const startColDelta = Math.abs(item.startCol - current.startCol);\n            return startColDelta <= 24 || isCalendarDateItem(item);\n        }\n        function createNarrativeBlockFromItem(item) {\n            return {\n                startRow: item.row,\n                startCol: item.startCol,\n                endRow: item.row,\n                lines: [item.text],\n                items: [item]\n            };\n        }\n        function appendNarrativeItem(block, item) {\n            block.lines.push(item.text);\n            block.endRow = item.row;\n            block.items.push(item);\n        }\n        function extractNarrativeBlocks(workbook, sheet, tables, options = {}) {\n            const items = buildNarrativeItems(workbook, sheet, tables, options);\n            const blocks = [];\n            let current = null;\n            let previousRow = -100;\n            for (const item of items) {\n                if (shouldAppendToCalendarNarrativeBlock(current, item, previousRow)) {\n                    appendNarrativeItem(current, item);\n                }\n                else if (shouldStartNarrativeBlock(current, item.row, previousRow, item.startCol)) {\n                    current = createNarrativeBlockFromItem(item);\n                    blocks.push(current);\n                }\n                else {\n                    appendNarrativeItem(current, item);\n                }\n                previousRow = item.row;\n            }\n            return blocks;\n        }\n        function createNarrativeSectionAnchors(narrativeBlocks) {\n            return narrativeBlocks.map((block) => ({\n                startRow: block.startRow,\n                startCol: block.startCol,\n                endRow: block.endRow,\n                endCol: Math.max(block.startCol, ...block.items.map((item) => item.startCol)),\n                calendarLike: blockHasCalendarDateItem(block)\n            }));\n        }\n        function createTableSectionAnchors(tables) {\n            return tables.map((table) => ({\n                startRow: table.startRow,\n                startCol: table.startCol,\n                endRow: table.endRow,\n                endCol: table.endCol\n            }));\n        }\n        function createPointSectionAnchor(address) {\n            const anchor = deps.parseCellAddress(address);\n            if (anchor.row > 0 && anchor.col > 0) {\n                return { startRow: anchor.row, startCol: anchor.col, endRow: anchor.row, endCol: anchor.col };\n            }\n            return null;\n        }\n        function createImageSectionAnchors(sheet) {\n            return sheet.images\n                .map((image) => createPointSectionAnchor(image.anchor))\n                .filter((anchor) => !!anchor);\n        }\n        function createChartSectionAnchors(charts) {\n            return charts\n                .map((chart) => createPointSectionAnchor(chart.anchor))\n                .filter((anchor) => !!anchor);\n        }\n        function createSectionAnchors(sheet, tables, narrativeBlocks) {\n            const charts = sheet.charts || [];\n            return [\n                ...createNarrativeSectionAnchors(narrativeBlocks),\n                ...createTableSectionAnchors(tables),\n                ...createImageSectionAnchors(sheet),\n                ...createChartSectionAnchors(charts)\n            ];\n        }\n        function sortSectionAnchors(anchors) {\n            return anchors.sort((left, right) => {\n                if (left.startRow !== right.startRow)\n                    return left.startRow - right.startRow;\n                return left.startCol - right.startCol;\n            });\n        }\n        function createSectionBlockFromAnchor(anchor) {\n            return {\n                startRow: anchor.startRow,\n                startCol: anchor.startCol,\n                endRow: anchor.endRow,\n                endCol: anchor.endCol\n            };\n        }\n        function shouldStartNewSectionBlock(current, anchor, previousEndRow, previousAnchor) {\n            const verticalGapThreshold = 4;\n            const horizontalGapThreshold = 3;\n            const gap = anchor.startRow - previousEndRow;\n            if (!current) {\n                return true;\n            }\n            if (gap > verticalGapThreshold) {\n                const bothCalendarLike = !!(anchor.calendarLike && (previousAnchor === null || previousAnchor === void 0 ? void 0 : previousAnchor.calendarLike));\n                const horizontalGap = anchor.startCol - current.endCol;\n                if (!(bothCalendarLike && gap <= 8 && horizontalGap <= 24)) {\n                    return true;\n                }\n            }\n            const overlapsCurrentRows = anchor.startRow <= current.endRow + 1;\n            const horizontalGap = anchor.startCol - current.endCol;\n            const bothCalendarLike = !!(anchor.calendarLike && (previousAnchor === null || previousAnchor === void 0 ? void 0 : previousAnchor.calendarLike));\n            if (bothCalendarLike && horizontalGap <= 24 && (overlapsCurrentRows || gap <= 8)) {\n                return false;\n            }\n            if (overlapsCurrentRows && horizontalGap > horizontalGapThreshold) {\n                return true;\n            }\n            return false;\n        }\n        function extendSectionBlock(section, anchor) {\n            section.startRow = Math.min(section.startRow, anchor.startRow);\n            section.startCol = Math.min(section.startCol, anchor.startCol);\n            section.endRow = Math.max(section.endRow, anchor.endRow);\n            section.endCol = Math.max(section.endCol, anchor.endCol);\n        }\n        function extractSectionBlocks(sheet, tables, narrativeBlocks) {\n            const anchors = sortSectionAnchors(createSectionAnchors(sheet, tables, narrativeBlocks));\n            if (anchors.length === 0) {\n                return [];\n            }\n            const sections = [];\n            let current = null;\n            let previousEndRow = -100;\n            let previousAnchor = null;\n            for (const anchor of anchors) {\n                if (shouldStartNewSectionBlock(current, anchor, previousEndRow, previousAnchor)) {\n                    current = createSectionBlockFromAnchor(anchor);\n                    sections.push(current);\n                }\n                else {\n                    extendSectionBlock(current, anchor);\n                }\n                previousEndRow = Math.max(previousEndRow, anchor.endRow);\n                previousAnchor = anchor;\n            }\n            return sections;\n        }\n        function createDefaultShapeSvgFilename(shapeIndex) {\n            return `shape_${String(shapeIndex + 1).padStart(3, "0")}.svg`;\n        }\n        function createImageSectionEntry(image, index) {\n            return [\n                `### Image: ${String(index + 1).padStart(3, "0")} (${image.anchor})`,\n                `- File: ${image.path}`,\n                "",\n                `![${image.filename}](${image.path})`\n            ].join("\\n");\n        }\n        function createChartSeriesLines(chart) {\n            if (chart.series.length === 0) {\n                return [];\n            }\n            const lines = ["- Series:"];\n            for (const series of chart.series) {\n                lines.push(`  - ${series.name}`);\n                if (series.axis === "secondary")\n                    lines.push("    - Axis: secondary");\n                if (series.categoriesRef)\n                    lines.push(`    - categories: ${series.categoriesRef}`);\n                if (series.valuesRef)\n                    lines.push(`    - values: ${series.valuesRef}`);\n            }\n            return lines;\n        }\n        function createChartSectionEntry(chart, index) {\n            return [\n                `### Chart: ${String(index + 1).padStart(3, "0")} (${chart.anchor})`,\n                `- Title: ${chart.title || "(none)"}`,\n                `- Type: ${chart.chartType}`,\n                ...createChartSeriesLines(chart)\n            ].join("\\n");\n        }\n        function renderShapeDetails(shape, shapeIndex) {\n            const lines = [\n                `#### Shape: ${String(shapeIndex + 1).padStart(3, "0")} (${shape.anchor})`,\n                ...deps.renderHierarchicalRawEntries(shape.rawEntries)\n            ];\n            if (shape.svgPath) {\n                lines.push(`- SVG: ${shape.svgPath}`);\n                lines.push("");\n                lines.push(`![${shape.svgFilename || createDefaultShapeSvgFilename(shapeIndex)}](${shape.svgPath})`);\n            }\n            return lines.join("\\n");\n        }\n        function createShapeBlockSummaryLine(shapeIndexes) {\n            return shapeIndexes.map((shapeIndex) => `Shape ${String(shapeIndex + 1).padStart(3, "0")}`).join(", ");\n        }\n        function createShapeBlockEntry(block, blockIndex, shapes) {\n            const shapeDetails = block.shapeIndexes\n                .map((shapeIndex) => {\n                const shape = shapes[shapeIndex];\n                if (!shape)\n                    return "";\n                return renderShapeDetails(shape, shapeIndex);\n            })\n                .filter(Boolean)\n                .join("\\n\\n");\n            return [\n                `### Shape Block: ${String(blockIndex + 1).padStart(3, "0")} (${deps.formatRange(block.startRow, block.startCol, block.endRow, block.endCol)})`,\n                `- Shapes: ${createShapeBlockSummaryLine(block.shapeIndexes)}`,\n                `- anchorRange: ${deps.colToLetters(block.startCol)}${block.startRow}-${deps.colToLetters(block.endCol)}${block.endRow}`,\n                ...(shapeDetails ? ["", shapeDetails] : [])\n            ].join("\\n");\n        }\n        function collectUngroupedShapes(shapes, shapeBlocks) {\n            const grouped = new Set(shapeBlocks.flatMap((block) => block.shapeIndexes));\n            return shapes\n                .map((shape, index) => ({ shape, index }))\n                .filter(({ index }) => !grouped.has(index));\n        }\n        function renderImageSection(sheet) {\n            return sheet.images.length > 0\n                ? [\n                    "",\n                    ...sheet.images.map((image, index) => createImageSectionEntry(image, index))\n                ].join("\\n\\n")\n                : "";\n        }\n        function renderChartSection(charts) {\n            return charts.length > 0\n                ? [\n                    "",\n                    ...charts.map((chart, index) => createChartSectionEntry(chart, index))\n                ].join("\\n\\n")\n                : "";\n        }\n        function renderShapeSection(shapes, shapeBlocks, includeShapeDetails) {\n            const ungrouped = collectUngroupedShapes(shapes, shapeBlocks);\n            return includeShapeDetails && shapes.length > 0\n                ? [\n                    "",\n                    ...shapeBlocks.map((block, blockIndex) => createShapeBlockEntry(block, blockIndex, shapes)),\n                    ...(ungrouped.length === 0\n                        ? []\n                        : [\n                            "",\n                            "### Ungrouped Shapes",\n                            "",\n                            ...ungrouped.map(({ shape, index }) => renderShapeDetails(shape, index))\n                        ])\n                ].join("\\n\\n")\n                : "";\n        }\n        function createCommentSectionEntry(comment, index) {\n            const label = `comment-${index + 1}`;\n            const metadata = [\n                comment.address,\n                comment.kind,\n                comment.author ? `author=${comment.author}` : "",\n                comment.dateTime ? `date=${comment.dateTime}` : ""\n            ].filter(Boolean).join("; ");\n            return `- [${label}] (${metadata}) ${comment.text}`;\n        }\n        function renderCommentSection(comments = []) {\n            return comments.length > 0\n                ? [\n                    "",\n                    "### Comments",\n                    "",\n                    ...comments.map((comment, index) => createCommentSectionEntry(comment, index))\n                ].join("\\n\\n")\n                : "";\n        }\n        function createFormulaDiagnostics(sheet) {\n            return sheet.cells\n                .filter((cell) => !!cell.formulaText && cell.resolutionStatus !== null)\n                .map((cell) => ({\n                address: cell.address,\n                formulaText: cell.formulaText,\n                status: cell.resolutionStatus,\n                source: cell.resolutionSource,\n                outputValue: cell.outputValue\n            }));\n        }\n        function createNarrativeSections(narrativeBlocks) {\n            return narrativeBlocks.map((block) => ({\n                sortRow: block.startRow,\n                sortCol: block.startCol,\n                markdown: `${deps.renderNarrativeBlock(block)}\\n`,\n                kind: "narrative",\n                narrativeBlock: block\n            }));\n        }\n        function createTableSections(workbook, sheet, tables, options, treatFirstRowAsHeader) {\n            var _a;\n            const sections = [];\n            let tableCounter = 1;\n            for (const table of tables) {\n                const rows = deps.matrixFromCandidate(sheet, table, options, buildCellMap, (cell, tableOptions) => formatCellForMarkdown(cell, tableOptions, workbook, sheet));\n                if (rows.length === 0 || ((_a = rows[0]) === null || _a === void 0 ? void 0 : _a.length) === 0)\n                    continue;\n                const tableMarkdown = deps.renderMarkdownTable(rows, treatFirstRowAsHeader);\n                sections.push({\n                    sortRow: table.startRow,\n                    sortCol: table.startCol,\n                    markdown: `### Table: ${String(tableCounter).padStart(3, "0")} (${deps.formatRange(table.startRow, table.startCol, table.endRow, table.endCol)})\\n\\n${tableMarkdown}\\n`,\n                    kind: "table"\n                });\n                tableCounter += 1;\n            }\n            return sections;\n        }\n        function sortContentSections(sections) {\n            return sections.sort((left, right) => {\n                if (left.sortRow !== right.sortRow)\n                    return left.sortRow - right.sortRow;\n                return left.sortCol - right.sortCol;\n            });\n        }\n        function createFallbackSectionBlock() {\n            return {\n                startRow: -1,\n                startCol: -1,\n                endRow: Number.MAX_SAFE_INTEGER,\n                endCol: Number.MAX_SAFE_INTEGER\n            };\n        }\n        function isSectionInsideBlock(section, block) {\n            return section.sortRow >= block.startRow\n                && section.sortRow <= block.endRow\n                && section.sortCol >= block.startCol\n                && section.sortCol <= block.endCol;\n        }\n        function createGroupedSections(sectionBlocks, sections) {\n            const blocks = sectionBlocks.length > 0\n                ? sectionBlocks\n                : [createFallbackSectionBlock()];\n            return blocks.map((block) => ({\n                block,\n                entries: sections.filter((section) => isSectionInsideBlock(section, block))\n            })).filter((group) => group.entries.length > 0);\n        }\n        function renderGroupedSectionEntries(entries) {\n            return createCalendarAwareSectionEntries(entries).map((section) => section.markdown.trimEnd()).join("\\n\\n").trim();\n        }\n        function isIsoDateToken(value) {\n            return /^\\d{4}-\\d{2}-\\d{2}$/.test(String(value || "").trim());\n        }\n        function isWeekdayToken(value) {\n            const normalized = String(value || "").trim();\n            return ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F", "\u65E5\u66DC\u65E5", "\u6708\u66DC\u65E5", "\u706B\u66DC\u65E5", "\u6C34\u66DC\u65E5", "\u6728\u66DC\u65E5", "\u91D1\u66DC\u65E5", "\u571F\u66DC\u65E5"].includes(normalized);\n        }\n        function getNarrativeValues(section) {\n            var _a;\n            return ((_a = section.narrativeBlock) === null || _a === void 0 ? void 0 : _a.items.flatMap((item) => item.cellValues || []).map((value) => String(value || "").trim()).filter(Boolean)) || [];\n        }\n        function isCalendarBodySection(section) {\n            if (section.kind !== "narrative" || !section.narrativeBlock)\n                return false;\n            return section.narrativeBlock.items.some((item) => {\n                const values = (item.cellValues || []).map((value) => String(value || "").trim()).filter(Boolean);\n                return values.length >= 5 && values.every((value) => isIsoDateToken(value) || isWeekdayToken(value));\n            });\n        }\n        function isCalendarHeaderSection(section) {\n            if (section.kind !== "narrative" || !section.narrativeBlock)\n                return false;\n            const values = getNarrativeValues(section);\n            if (values.length === 0 || values.length > 10)\n                return false;\n            const allWeekdays = values.length >= 5 && values.every((value) => isWeekdayToken(value));\n            const hasMonthTitle = values.some((value) => /^\\d{4}\u5E74\\d{1,2}\u6708$/.test(value));\n            const hasPlannerLabel = values.includes("\u76EE\u6A19\u3068\u512A\u5148\u4E8B\u9805") || values.includes("\u305D\u306E\u4ED6");\n            return allWeekdays || hasMonthTitle || hasPlannerLabel;\n        }\n        function createSyntheticSection(markdown, sortRow, sortCol) {\n            return {\n                sortRow,\n                sortCol,\n                markdown,\n                kind: "narrative"\n            };\n        }\n        function createCalendarAwareSectionEntries(entries) {\n            const mainCalendarEntries = entries.filter((entry) => isCalendarBodySection(entry))\n                .sort((left, right) => {\n                if (left.sortCol !== right.sortCol)\n                    return left.sortCol - right.sortCol;\n                return left.sortRow - right.sortRow;\n            });\n            if (mainCalendarEntries.length === 0) {\n                return entries;\n            }\n            const main = mainCalendarEntries[0];\n            const headerEntries = entries.filter((entry) => (entry !== main\n                && isCalendarHeaderSection(entry)\n                && entry.sortRow <= main.sortRow + 1));\n            const sidebarEntries = entries.filter((entry) => (entry !== main\n                && !headerEntries.includes(entry)\n                && isCalendarBodySection(entry)\n                && entry.sortCol >= main.sortCol + 10));\n            const remainingEntries = entries.filter((entry) => (entry !== main\n                && !headerEntries.includes(entry)\n                && !sidebarEntries.includes(entry)));\n            if (headerEntries.length === 0 && sidebarEntries.length === 0) {\n                return entries;\n            }\n            const reordered = [];\n            reordered.push(...headerEntries);\n            reordered.push(main);\n            if (sidebarEntries.length > 0) {\n                const firstSidebar = sidebarEntries[0];\n                reordered.push(createSyntheticSection("### Sidebar\\n", firstSidebar.sortRow - 0.1, firstSidebar.sortCol));\n                reordered.push(...sidebarEntries);\n            }\n            reordered.push(...remainingEntries);\n            return reordered;\n        }\n        function renderGroupedSectionBody(groupedSections) {\n            return groupedSections\n                .map((group) => renderGroupedSectionEntries(group.entries))\n                .filter(Boolean)\n                .join("\\n\\n---\\n\\n")\n                .trim();\n        }\n        function collectSheetRenderState(workbook, sheet, options = {}) {\n            const resolvedOptions = markdownOptions.resolveMarkdownOptions(options);\n            const charts = sheet.charts || [];\n            const shapes = sheet.shapes || [];\n            const shapeBlocks = deps.extractShapeBlocks(shapes, {\n                defaultCellWidthEmu: deps.defaultCellWidthEmu,\n                defaultCellHeightEmu: deps.defaultCellHeightEmu,\n                shapeBlockGapXEmu: deps.shapeBlockGapXEmu,\n                shapeBlockGapYEmu: deps.shapeBlockGapYEmu\n            });\n            const treatFirstRowAsHeader = resolvedOptions.treatFirstRowAsHeader;\n            const tableDetectionMode = resolvedOptions.tableDetectionMode;\n            const tables = deps.detectTableCandidates(sheet, buildCellMap, tableDetectionMode);\n            const narrativeBlocks = extractNarrativeBlocks(workbook, sheet, tables, resolvedOptions);\n            const sectionBlocks = extractSectionBlocks(sheet, tables, narrativeBlocks);\n            const formulaDiagnostics = createFormulaDiagnostics(sheet);\n            const sections = [\n                ...createNarrativeSections(narrativeBlocks),\n                ...createTableSections(workbook, sheet, tables, resolvedOptions, treatFirstRowAsHeader)\n            ];\n            sortContentSections(sections);\n            const groupedSections = createGroupedSections(sectionBlocks, sections);\n            const body = renderGroupedSectionBody(groupedSections);\n            const imageSection = renderImageSection(sheet);\n            const chartSection = renderChartSection(charts);\n            const includeShapeDetails = resolvedOptions.includeShapeDetails;\n            const shapeSection = renderShapeSection(shapes, shapeBlocks, includeShapeDetails);\n            const commentSection = renderCommentSection(sheet.comments || []);\n            return {\n                resolvedOptions,\n                charts,\n                shapes,\n                shapeBlocks,\n                tables,\n                narrativeBlocks,\n                sectionBlocks,\n                formulaDiagnostics,\n                sections,\n                groupedSections,\n                body,\n                imageSection,\n                chartSection,\n                shapeSection,\n                commentSection\n            };\n        }\n        function createSheetMarkdownText(workbook, sheet, state) {\n            const markdown = [\n                `# Book: ${workbook.name}`,\n                "",\n                `## Sheet: ${sheet.name}`,\n                "",\n                state.body || "_No extractable body content was found._",\n                state.commentSection,\n                state.chartSection,\n                state.shapeSection,\n                state.imageSection\n            ].join("\\n");\n            return markdown;\n        }\n        function createSheetSummary(sheet, state) {\n            return {\n                outputMode: state.resolvedOptions.outputMode,\n                formattingMode: state.resolvedOptions.formattingMode,\n                tableDetectionMode: state.resolvedOptions.tableDetectionMode,\n                sections: state.sectionBlocks.length,\n                tables: state.tables.length,\n                narrativeBlocks: state.narrativeBlocks.length,\n                merges: sheet.merges.length,\n                images: sheet.images.length,\n                charts: state.charts.length,\n                comments: (sheet.comments || []).length,\n                cells: sheet.cells.length,\n                tableScores: state.tables.map((table) => ({\n                    range: deps.formatRange(table.startRow, table.startCol, table.endRow, table.endCol),\n                    score: table.score,\n                    reasons: [...table.reasonSummary]\n                })),\n                formulaDiagnostics: state.formulaDiagnostics\n            };\n        }\n        function convertSheetToMarkdown(workbook, sheet, options = {}) {\n            const state = collectSheetRenderState(workbook, sheet, options);\n            const fileName = deps.createOutputFileName(workbook.name, sheet.index, sheet.name, state.resolvedOptions.outputMode, state.resolvedOptions.formattingMode);\n            return {\n                fileName,\n                sheetName: sheet.name,\n                markdown: createSheetMarkdownText(workbook, sheet, state),\n                summary: createSheetSummary(sheet, state)\n            };\n        }\n        function convertWorkbookToMarkdownFiles(workbook, options = {}) {\n            return workbook.sheets.map((sheet) => convertSheetToMarkdown(workbook, sheet, options));\n        }\n        return {\n            buildCellMap,\n            formatCellForMarkdown,\n            isCellInAnyTable,\n            splitNarrativeRowSegments,\n            collectNarrativeCellsByRow,\n            buildNarrativeItems,\n            extractNarrativeBlocks,\n            extractSectionBlocks,\n            sortContentSections,\n            createGroupedSections,\n            createCalendarAwareSectionEntries,\n            renderGroupedSectionBody,\n            collectSheetRenderState,\n            createSheetMarkdownText,\n            createSheetSummary,\n            renderImageSection,\n            renderChartSection,\n            renderShapeSection,\n            renderCommentSection,\n            convertSheetToMarkdown,\n            convertWorkbookToMarkdownFiles\n        };\n    }\n    const sheetMarkdownApi = {\n        createSheetMarkdownApi\n    };\n    moduleRegistry.registerModule("sheetMarkdown", sheetMarkdownApi);\n})();\n' }, { "path": "dist/js/styles-parser.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const EMPTY_BORDERS = {\n        top: false,\n        bottom: false,\n        left: false,\n        right: false\n    };\n    const EMPTY_TEXT_STYLE = {\n        bold: false,\n        italic: false,\n        strike: false,\n        underline: false\n    };\n    const runtimeEnv = requireXlsx2mdRuntimeEnv();\n    const textDecoder = new TextDecoder("utf-8");\n    const BUILTIN_FORMAT_CODES = {\n        0: "General",\n        1: "0",\n        2: "0.00",\n        3: "#,##0",\n        4: "#,##0.00",\n        9: "0%",\n        10: "0.00%",\n        11: "0.00E+00",\n        12: "# ?/?",\n        13: "# ??/??",\n        14: "yyyy/m/d",\n        15: "d-mmm-yy",\n        16: "d-mmm",\n        17: "mmm-yy",\n        18: "h:mm AM/PM",\n        19: "h:mm:ss AM/PM",\n        20: "h:mm",\n        21: "h:mm:ss",\n        22: "m/d/yy h:mm",\n        45: "mm:ss",\n        46: "[h]:mm:ss",\n        47: "mmss.0",\n        49: "@",\n        56: "m\u6708d\u65E5"\n    };\n    function decodeXmlText(bytes) {\n        return textDecoder.decode(bytes);\n    }\n    function xmlToDocument(xmlText) {\n        return runtimeEnv.xmlToDocument(xmlText);\n    }\n    function hasBorderSide(side) {\n        if (!side)\n            return false;\n        return side.hasAttribute("style") || side.children.length > 0;\n    }\n    function hasEnabledBooleanValue(node) {\n        if (!node)\n            return false;\n        const value = (node.getAttribute("val") || "").trim().toLowerCase();\n        return value !== "false" && value !== "0" && value !== "none";\n    }\n    function parseFontStyle(fontElement) {\n        return {\n            bold: hasEnabledBooleanValue(fontElement === null || fontElement === void 0 ? void 0 : fontElement.getElementsByTagName("b")[0]),\n            italic: hasEnabledBooleanValue(fontElement === null || fontElement === void 0 ? void 0 : fontElement.getElementsByTagName("i")[0]),\n            strike: hasEnabledBooleanValue(fontElement === null || fontElement === void 0 ? void 0 : fontElement.getElementsByTagName("strike")[0]),\n            underline: hasEnabledBooleanValue(fontElement === null || fontElement === void 0 ? void 0 : fontElement.getElementsByTagName("u")[0])\n        };\n    }\n    function parseCellStyles(files) {\n        const stylesBytes = files.get("xl/styles.xml");\n        if (!stylesBytes) {\n            return [{\n                    borders: EMPTY_BORDERS,\n                    numFmtId: 0,\n                    formatCode: "General",\n                    textStyle: EMPTY_TEXT_STYLE\n                }];\n        }\n        const doc = xmlToDocument(decodeXmlText(stylesBytes));\n        const borderElements = Array.from(doc.getElementsByTagName("border"));\n        const borders = borderElements.map((borderElement) => {\n            const top = borderElement.getElementsByTagName("top")[0] || null;\n            const bottom = borderElement.getElementsByTagName("bottom")[0] || null;\n            const left = borderElement.getElementsByTagName("left")[0] || null;\n            const right = borderElement.getElementsByTagName("right")[0] || null;\n            return {\n                top: hasBorderSide(top),\n                bottom: hasBorderSide(bottom),\n                left: hasBorderSide(left),\n                right: hasBorderSide(right)\n            };\n        });\n        const fontElements = Array.from(doc.getElementsByTagName("font"));\n        const fontStyles = fontElements.map((fontElement) => parseFontStyle(fontElement));\n        const numFmtMap = new Map();\n        const numFmtParent = doc.getElementsByTagName("numFmts")[0];\n        if (numFmtParent) {\n            for (const numFmtElement of Array.from(numFmtParent.getElementsByTagName("numFmt"))) {\n                const numFmtId = Number(numFmtElement.getAttribute("numFmtId") || 0);\n                const formatCode = numFmtElement.getAttribute("formatCode") || "";\n                if (!Number.isNaN(numFmtId) && formatCode) {\n                    numFmtMap.set(numFmtId, formatCode);\n                }\n            }\n        }\n        const xfsParent = doc.getElementsByTagName("cellXfs")[0];\n        if (!xfsParent) {\n            return [{\n                    borders: borders[0] || EMPTY_BORDERS,\n                    numFmtId: 0,\n                    formatCode: "General",\n                    textStyle: fontStyles[0] || EMPTY_TEXT_STYLE\n                }];\n        }\n        const xfElements = Array.from(xfsParent.getElementsByTagName("xf"));\n        const styles = xfElements.map((xfElement) => {\n            const borderId = Number(xfElement.getAttribute("borderId") || 0);\n            const numFmtId = Number(xfElement.getAttribute("numFmtId") || 0);\n            const fontId = Number(xfElement.getAttribute("fontId") || 0);\n            return {\n                borders: borders[borderId] || EMPTY_BORDERS,\n                numFmtId,\n                formatCode: numFmtMap.get(numFmtId) || BUILTIN_FORMAT_CODES[numFmtId] || "General",\n                textStyle: fontStyles[fontId] || EMPTY_TEXT_STYLE\n            };\n        });\n        return styles.length > 0 ? styles : [{\n                borders: EMPTY_BORDERS,\n                numFmtId: 0,\n                formatCode: "General",\n                textStyle: EMPTY_TEXT_STYLE\n            }];\n    }\n    const stylesParserApi = {\n        EMPTY_BORDERS,\n        EMPTY_TEXT_STYLE,\n        BUILTIN_FORMAT_CODES,\n        hasBorderSide,\n        parseFontStyle,\n        parseCellStyles\n    };\n    moduleRegistry.registerModule("stylesParser", stylesParserApi);\n})();\n' }, { "path": "dist/js/shared-strings.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const textDecoder = new TextDecoder("utf-8");\n    const runtimeEnv = requireXlsx2mdRuntimeEnv();\n    function decodeXmlText(bytes) {\n        return textDecoder.decode(bytes);\n    }\n    function xmlToDocument(xmlText) {\n        return runtimeEnv.xmlToDocument(xmlText);\n    }\n    function getTextContent(node) {\n        return ((node === null || node === void 0 ? void 0 : node.textContent) || "").replace(/\\r\\n/g, "\\n");\n    }\n    function hasEnabledBooleanValue(node) {\n        if (!node)\n            return false;\n        const value = (node.getAttribute("val") || "").trim().toLowerCase();\n        return value !== "false" && value !== "0" && value !== "none";\n    }\n    function parseRichTextRuns(item) {\n        const runElements = Array.from(item.childNodes).filter((node) => (node.nodeType === runtimeEnv.ELEMENT_NODE && node.localName === "r"));\n        if (runElements.length === 0) {\n            return null;\n        }\n        const runs = [];\n        for (const runElement of runElements) {\n            const text = Array.from(runElement.getElementsByTagName("t")).map((node) => getTextContent(node)).join("");\n            if (!text)\n                continue;\n            const properties = runElement.getElementsByTagName("rPr")[0] || null;\n            const run = {\n                text,\n                bold: hasEnabledBooleanValue(properties === null || properties === void 0 ? void 0 : properties.getElementsByTagName("b")[0]),\n                italic: hasEnabledBooleanValue(properties === null || properties === void 0 ? void 0 : properties.getElementsByTagName("i")[0]),\n                strike: hasEnabledBooleanValue(properties === null || properties === void 0 ? void 0 : properties.getElementsByTagName("strike")[0]),\n                underline: hasEnabledBooleanValue(properties === null || properties === void 0 ? void 0 : properties.getElementsByTagName("u")[0])\n            };\n            const previous = runs[runs.length - 1];\n            if (previous\n                && previous.bold === run.bold\n                && previous.italic === run.italic\n                && previous.strike === run.strike\n                && previous.underline === run.underline) {\n                previous.text += run.text;\n            }\n            else {\n                runs.push(run);\n            }\n        }\n        return runs.length > 0 && runs.some((run) => run.bold || run.italic || run.strike || run.underline) ? runs : null;\n    }\n    function parseSharedStringEntry(item) {\n        const runs = parseRichTextRuns(item);\n        if (runs) {\n            return {\n                text: runs.map((run) => run.text).join(""),\n                runs\n            };\n        }\n        const parts = [];\n        const walk = (node) => {\n            if (node.nodeType === runtimeEnv.ELEMENT_NODE) {\n                const element = node;\n                if (element.localName === "rPh" || element.localName === "phoneticPr") {\n                    return;\n                }\n                if (element.localName === "t") {\n                    parts.push(getTextContent(element));\n                    return;\n                }\n            }\n            for (const child of Array.from(node.childNodes)) {\n                walk(child);\n            }\n        };\n        walk(item);\n        return {\n            text: parts.join(""),\n            runs: null\n        };\n    }\n    function parseSharedStrings(files) {\n        const sharedStringsBytes = files.get("xl/sharedStrings.xml");\n        if (!sharedStringsBytes) {\n            return [];\n        }\n        const doc = xmlToDocument(decodeXmlText(sharedStringsBytes));\n        const items = Array.from(doc.getElementsByTagName("si"));\n        return items.map((item) => parseSharedStringEntry(item));\n    }\n    const sharedStringsApi = {\n        parseSharedStringEntry,\n        parseSharedStrings\n    };\n    moduleRegistry.registerModule("sharedStrings", sharedStringsApi);\n})();\n' }, { "path": "dist/js/address-utils.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    function colToLetters(col) {\n        let current = col;\n        let result = "";\n        while (current > 0) {\n            const remainder = (current - 1) % 26;\n            result = String.fromCharCode(65 + remainder) + result;\n            current = Math.floor((current - 1) / 26);\n        }\n        return result;\n    }\n    function lettersToCol(letters) {\n        let result = 0;\n        for (const ch of String(letters || "").toUpperCase()) {\n            result = result * 26 + (ch.charCodeAt(0) - 64);\n        }\n        return result;\n    }\n    function parseCellAddress(address) {\n        const normalized = String(address || "").trim().replace(/\\$/g, "");\n        const match = normalized.match(/^([A-Z]+)(\\d+)$/i);\n        if (!match) {\n            return { row: 0, col: 0 };\n        }\n        return {\n            col: lettersToCol(match[1]),\n            row: Number(match[2])\n        };\n    }\n    function normalizeFormulaAddress(address) {\n        return String(address || "").trim().replace(/\\$/g, "").toUpperCase();\n    }\n    function formatRange(startRow, startCol, endRow, endCol) {\n        return `${colToLetters(startCol)}${startRow}-${colToLetters(endCol)}${endRow}`;\n    }\n    function parseRangeRef(ref) {\n        const parts = String(ref || "").split(":");\n        const start = parseCellAddress(parts[0] || "");\n        const end = parseCellAddress(parts[1] || parts[0] || "");\n        return {\n            startRow: start.row,\n            startCol: start.col,\n            endRow: end.row,\n            endCol: end.col,\n            ref\n        };\n    }\n    function parseRangeAddress(rawRange) {\n        const match = String(rawRange || "").trim().match(/^(\\$?[A-Z]+\\$?\\d+):(\\$?[A-Z]+\\$?\\d+)$/i);\n        if (!match)\n            return null;\n        return {\n            start: normalizeFormulaAddress(match[1]),\n            end: normalizeFormulaAddress(match[2])\n        };\n    }\n    const addressUtilsApi = {\n        colToLetters,\n        lettersToCol,\n        parseCellAddress,\n        normalizeFormulaAddress,\n        formatRange,\n        parseRangeRef,\n        parseRangeAddress\n    };\n    moduleRegistry.registerModule("addressUtils", addressUtilsApi);\n})();\n' }, { "path": "dist/js/rels-parser.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    function createRelsParserApi(deps) {\n        function normalizeRelationshipTarget(baseFilePath, targetPath, targetMode = "") {\n            if ((targetMode || "").toLowerCase() === "external") {\n                return targetPath;\n            }\n            return normalizeZipPath(baseFilePath, targetPath);\n        }\n        function normalizeZipPath(baseFilePath, targetPath) {\n            const baseDirParts = baseFilePath.split("/").slice(0, -1);\n            const inputParts = targetPath.split("/");\n            const parts = targetPath.startsWith("/") ? [] : baseDirParts;\n            for (const part of inputParts) {\n                if (!part || part === ".")\n                    continue;\n                if (part === "..") {\n                    parts.pop();\n                }\n                else {\n                    parts.push(part);\n                }\n            }\n            return parts.join("/");\n        }\n        function parseRelationshipEntries(files, relsPath, sourcePath) {\n            const relBytes = files.get(relsPath);\n            const relations = new Map();\n            if (!relBytes) {\n                return relations;\n            }\n            const doc = deps.xmlToDocument(deps.decodeXmlText(relBytes));\n            const nodes = Array.from(doc.getElementsByTagName("Relationship"));\n            for (const node of nodes) {\n                const id = node.getAttribute("Id") || "";\n                const target = node.getAttribute("Target") || "";\n                if (!id || !target)\n                    continue;\n                const targetMode = node.getAttribute("TargetMode") || "";\n                relations.set(id, {\n                    target: normalizeRelationshipTarget(sourcePath, target, targetMode),\n                    targetMode,\n                    type: node.getAttribute("Type") || ""\n                });\n            }\n            return relations;\n        }\n        function parseRelationships(files, relsPath, sourcePath) {\n            const relations = new Map();\n            const entries = parseRelationshipEntries(files, relsPath, sourcePath);\n            for (const [id, entry] of entries.entries()) {\n                relations.set(id, entry.target);\n            }\n            return relations;\n        }\n        function buildRelsPath(sourcePath) {\n            const parts = sourcePath.split("/");\n            const fileName = parts.pop() || "";\n            const dir = parts.join("/");\n            return `${dir}/_rels/${fileName}.rels`;\n        }\n        return {\n            normalizeRelationshipTarget,\n            normalizeZipPath,\n            parseRelationshipEntries,\n            parseRelationships,\n            buildRelsPath\n        };\n    }\n    const relsParserApi = {\n        createRelsParserApi\n    };\n    moduleRegistry.registerModule("relsParser", relsParserApi);\n})();\n' }, { "path": "dist/js/worksheet-tables.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const textDecoder = new TextDecoder("utf-8");\n    const runtimeEnv = requireXlsx2mdRuntimeEnv();\n    function decodeXmlText(bytes) {\n        return textDecoder.decode(bytes);\n    }\n    function xmlToDocument(xmlText) {\n        return runtimeEnv.xmlToDocument(xmlText);\n    }\n    function getElementsByLocalName(root, localName) {\n        const elements = Array.from(root.getElementsByTagName("*"));\n        return elements.filter((element) => element.localName === localName);\n    }\n    function normalizeZipPath(baseFilePath, targetPath) {\n        const baseDirParts = baseFilePath.split("/").slice(0, -1);\n        const inputParts = targetPath.split("/");\n        const parts = targetPath.startsWith("/") ? [] : baseDirParts;\n        for (const part of inputParts) {\n            if (!part || part === ".")\n                continue;\n            if (part === "..") {\n                parts.pop();\n            }\n            else {\n                parts.push(part);\n            }\n        }\n        return parts.join("/");\n    }\n    function parseRelationships(files, relsPath, sourcePath) {\n        const relBytes = files.get(relsPath);\n        const relations = new Map();\n        if (!relBytes) {\n            return relations;\n        }\n        const doc = xmlToDocument(decodeXmlText(relBytes));\n        const nodes = Array.from(doc.getElementsByTagName("Relationship"));\n        for (const node of nodes) {\n            const id = node.getAttribute("Id") || "";\n            const target = node.getAttribute("Target") || "";\n            if (!id || !target)\n                continue;\n            relations.set(id, normalizeZipPath(sourcePath, target));\n        }\n        return relations;\n    }\n    function buildRelsPath(sourcePath) {\n        const parts = sourcePath.split("/");\n        const fileName = parts.pop() || "";\n        const dir = parts.join("/");\n        return `${dir}/_rels/${fileName}.rels`;\n    }\n    function normalizeFormulaAddress(address) {\n        return String(address || "").trim().replace(/\\$/g, "").toUpperCase();\n    }\n    function parseRangeAddress(rawRange) {\n        const match = String(rawRange || "").trim().match(/^(\\$?[A-Z]+\\$?\\d+):(\\$?[A-Z]+\\$?\\d+)$/i);\n        if (!match)\n            return null;\n        return {\n            start: normalizeFormulaAddress(match[1]),\n            end: normalizeFormulaAddress(match[2])\n        };\n    }\n    function normalizeStructuredTableKey(value) {\n        return String(value || "").normalize("NFKC").trim().toUpperCase();\n    }\n    function parseWorksheetTables(files, worksheetDoc, sheetName, sheetPath) {\n        const sheetRels = parseRelationships(files, buildRelsPath(sheetPath), sheetPath);\n        const tablePartElements = getElementsByLocalName(worksheetDoc, "tablePart");\n        const tables = [];\n        for (const tablePartElement of tablePartElements) {\n            const relId = tablePartElement.getAttribute("r:id") || tablePartElement.getAttribute("id") || "";\n            if (!relId)\n                continue;\n            const tablePath = sheetRels.get(relId) || "";\n            if (!tablePath)\n                continue;\n            const tableBytes = files.get(tablePath);\n            if (!tableBytes)\n                continue;\n            const tableDoc = xmlToDocument(decodeXmlText(tableBytes));\n            const tableElement = getElementsByLocalName(tableDoc, "table")[0] || null;\n            if (!tableElement)\n                continue;\n            const ref = tableElement.getAttribute("ref") || "";\n            const range = parseRangeAddress(ref);\n            if (!range)\n                continue;\n            const columns = getElementsByLocalName(tableElement, "tableColumn")\n                .map((columnElement) => String(columnElement.getAttribute("name") || "").trim())\n                .filter(Boolean);\n            tables.push({\n                sheetName,\n                name: tableElement.getAttribute("name") || "",\n                displayName: tableElement.getAttribute("displayName") || tableElement.getAttribute("name") || "",\n                start: range.start,\n                end: range.end,\n                columns,\n                headerRowCount: Number(tableElement.getAttribute("headerRowCount") || 1) || 1,\n                totalsRowCount: Number(tableElement.getAttribute("totalsRowCount") || 0) || 0\n            });\n        }\n        return tables;\n    }\n    const worksheetTablesApi = {\n        normalizeStructuredTableKey,\n        parseWorksheetTables\n    };\n    moduleRegistry.registerModule("worksheetTables", worksheetTablesApi);\n})();\n' }, { "path": "dist/js/cell-format.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    function isDateFormatCode(formatCode) {\n        const normalized = String(formatCode || "")\n            .toLowerCase()\n            .replace(/\\[[^\\]]*]/g, "")\n            .replace(/"[^"]*"/g, "")\n            .replace(/\\\\./g, "");\n        if (!normalized)\n            return false;\n        if (normalized.includes("general"))\n            return false;\n        return /[ymdhs]/.test(normalized);\n    }\n    function normalizeNumericFormatCode(formatCode) {\n        return String(formatCode || "")\n            .trim()\n            .replace(/\\[[^\\]]*]/g, "")\n            .replace(/"([^"]*)"/g, "$1")\n            .replace(/\\\\(.)/g, "$1")\n            .replace(/_.?/g, "")\n            .replace(/\\*/g, "");\n    }\n    function excelSerialToIsoText(serial) {\n        if (!Number.isFinite(serial))\n            return String(serial);\n        const wholeDays = Math.floor(serial);\n        const fractional = serial - wholeDays;\n        const utcDays = wholeDays > 59 ? wholeDays - 1 : wholeDays;\n        const baseUtcMs = Date.UTC(1899, 11, 31);\n        const msPerDay = 24 * 60 * 60 * 1000;\n        const date = new Date(baseUtcMs + utcDays * msPerDay + Math.round(fractional * msPerDay));\n        const yyyy = String(date.getUTCFullYear()).padStart(4, "0");\n        const mm = String(date.getUTCMonth() + 1).padStart(2, "0");\n        const dd = String(date.getUTCDate()).padStart(2, "0");\n        const hh = String(date.getUTCHours()).padStart(2, "0");\n        const mi = String(date.getUTCMinutes()).padStart(2, "0");\n        const ss = String(date.getUTCSeconds()).padStart(2, "0");\n        if (hh === "00" && mi === "00" && ss === "00") {\n            return `${yyyy}-${mm}-${dd}`;\n        }\n        return `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}`;\n    }\n    function excelSerialToDateParts(serial) {\n        if (!Number.isFinite(serial))\n            return null;\n        const wholeDays = Math.floor(serial);\n        const fractional = serial - wholeDays;\n        const excelEpochOffsetDays = 25569;\n        const msPerDay = 24 * 60 * 60 * 1000;\n        const utcDays = wholeDays - excelEpochOffsetDays;\n        const baseUtcMs = Date.UTC(1970, 0, 1);\n        const date = new Date(baseUtcMs + utcDays * msPerDay + Math.round(fractional * msPerDay));\n        return {\n            year: date.getUTCFullYear(),\n            month: date.getUTCMonth() + 1,\n            day: date.getUTCDate(),\n            hour: date.getUTCHours(),\n            minute: date.getUTCMinutes(),\n            second: date.getUTCSeconds(),\n            yyyy: String(date.getUTCFullYear()).padStart(4, "0"),\n            mm: String(date.getUTCMonth() + 1).padStart(2, "0"),\n            dd: String(date.getUTCDate()).padStart(2, "0"),\n            hh: String(date.getUTCHours()).padStart(2, "0"),\n            mi: String(date.getUTCMinutes()).padStart(2, "0"),\n            ss: String(date.getUTCSeconds()).padStart(2, "0")\n        };\n    }\n    function formatTextFunctionValue(value, formatText) {\n        const format = String(formatText || "").trim();\n        if (!format)\n            return null;\n        const numericValue = Number(value);\n        const normalized = format.toLowerCase();\n        if (!Number.isNaN(numericValue)) {\n            if (/(^|[^a-z])yyyy/.test(normalized) || normalized.includes("hh:") || normalized.includes("mm/") || normalized.includes("mm-")) {\n                const parts = excelSerialToDateParts(numericValue);\n                if (!parts)\n                    return null;\n                if (normalized === "yyyy-mm-dd")\n                    return `${parts.yyyy}-${parts.mm}-${parts.dd}`;\n                if (normalized === "yyyy/mm/dd")\n                    return `${parts.yyyy}/${parts.mm}/${parts.dd}`;\n                if (normalized === "hh:mm:ss")\n                    return `${parts.hh}:${parts.mi}:${parts.ss}`;\n                if (normalized === "yyyy-mm-dd hh:mm:ss")\n                    return `${parts.yyyy}-${parts.mm}-${parts.dd} ${parts.hh}:${parts.mi}:${parts.ss}`;\n            }\n            if (/^0(?:\\.0+)?$/.test(format)) {\n                const decimalPlaces = (format.split(".")[1] || "").length;\n                return numericValue.toFixed(decimalPlaces);\n            }\n            if (/^#,##0(?:\\.0+)?$/.test(format)) {\n                const decimalPlaces = (format.split(".")[1] || "").length;\n                return numericValue.toLocaleString("en-US", {\n                    minimumFractionDigits: decimalPlaces,\n                    maximumFractionDigits: decimalPlaces,\n                    useGrouping: true\n                });\n            }\n        }\n        return null;\n    }\n    function formatNumberByPattern(value, pattern) {\n        const normalizedPattern = pattern.trim();\n        const decimalPlaces = (normalizedPattern.split(".")[1] || "").replace(/[^0#]/g, "").length;\n        const useGrouping = normalizedPattern.includes(",");\n        return value.toLocaleString("en-US", {\n            minimumFractionDigits: decimalPlaces,\n            maximumFractionDigits: decimalPlaces,\n            useGrouping\n        });\n    }\n    function formatDateByPattern(parts, formatCode) {\n        const normalized = normalizeNumericFormatCode(formatCode).toLowerCase();\n        if (normalized === "yyyy/m/d") {\n            return `${parts.year}/${parts.month}/${parts.day}`;\n        }\n        if (normalized === "m\u6708d\u65E5") {\n            return `${parts.month}\u6708${parts.day}\u65E5`;\n        }\n        if (normalized === "yyyy-mm-dd") {\n            return `${parts.yyyy}-${parts.mm}-${parts.dd}`;\n        }\n        if (normalized === "yyyy/mm/dd") {\n            return `${parts.year}/${parts.month}/${parts.day}`;\n        }\n        if (normalized === "hh:mm:ss") {\n            return `${parts.hh}:${parts.mi}:${parts.ss}`;\n        }\n        if (normalized.includes("ggge\u5E74m\u6708d\u65E5")) {\n            if (parts.year >= 2019) {\n                const reiwaYear = parts.year - 2018;\n                return `\u4EE4\u548C${reiwaYear}\u5E74${parts.month}\u6708${parts.day}\u65E5`;\n            }\n            if (parts.year >= 1989) {\n                const heiseiYear = parts.year - 1988;\n                return `\u5E73\u6210${heiseiYear}\u5E74${parts.month}\u6708${parts.day}\u65E5`;\n            }\n            return `${parts.year}\u5E74${parts.month}\u6708${parts.day}\u65E5`;\n        }\n        return null;\n    }\n    function formatFractionPattern(value) {\n        if (!Number.isFinite(value))\n            return null;\n        const tolerance = 1e-9;\n        for (let denominator = 1; denominator <= 100; denominator += 1) {\n            const numerator = Math.round(value * denominator);\n            if (Math.abs(value - (numerator / denominator)) < tolerance) {\n                return `${numerator}/${denominator}`;\n            }\n        }\n        return null;\n    }\n    function formatDbNum3Pattern(rawValue) {\n        return rawValue.split("").join(" ");\n    }\n    function splitFormatSections(formatCode) {\n        const sections = [];\n        let current = "";\n        let inQuotes = false;\n        for (let index = 0; index < formatCode.length; index += 1) {\n            const char = formatCode[index];\n            if (char === "\\"") {\n                inQuotes = !inQuotes;\n                current += char;\n                continue;\n            }\n            if (char === ";" && !inQuotes) {\n                sections.push(current);\n                current = "";\n                continue;\n            }\n            current += char;\n        }\n        sections.push(current);\n        return sections;\n    }\n    function formatZeroSection(section) {\n        const normalizedSection = String(section || "");\n        if (!normalizedSection)\n            return null;\n        const compact = normalizedSection.replace(/_.|\\\\.|[*?]/g, "").trim();\n        const hasDashLiteral = /"-"|(^|[^a-z0-9])-($|[^a-z0-9])/i.test(compact);\n        if (!hasDashLiteral)\n            return null;\n        if (compact.includes("\xA5"))\n            return "\xA5 -";\n        if (compact.includes("$"))\n            return "$ -";\n        return "-";\n    }\n    function formatCellDisplayValue(rawValue, cellStyle) {\n        var _a;\n        if (rawValue === "")\n            return null;\n        const numericValue = Number(rawValue);\n        const formatCode = normalizeNumericFormatCode(cellStyle.formatCode);\n        const normalized = formatCode.toLowerCase();\n        const formatSections = splitFormatSections(formatCode);\n        if (!Number.isNaN(numericValue) && isDateFormatCode(formatCode)) {\n            const parts = excelSerialToDateParts(numericValue);\n            if (!parts)\n                return null;\n            const directFormatted = formatDateByPattern(parts, formatCode);\n            if (directFormatted !== null) {\n                return directFormatted;\n            }\n            const hasDate = /y/.test(normalized)\n                || /d/.test(normalized)\n                || /(^|[^a-z])m(?:\\/|-)/.test(normalized)\n                || /(?:\\/|-)m(?:[^a-z]|$)/.test(normalized);\n            const hasTime = /h/.test(normalized) || /s/.test(normalized) || normalized.includes(":") || normalized.includes("am/pm");\n            if (hasDate && hasTime) {\n                return `${parts.yyyy}-${parts.mm}-${parts.dd} ${parts.hh}:${parts.mi}:${parts.ss}`;\n            }\n            if (hasTime && !hasDate) {\n                return `${parts.hh}:${parts.mi}:${parts.ss}`;\n            }\n            return `${parts.yyyy}-${parts.mm}-${parts.dd}`;\n        }\n        if (Number.isNaN(numericValue)) {\n            return null;\n        }\n        if (numericValue === 0 && formatSections[2]) {\n            const zeroText = formatZeroSection(formatSections[2]);\n            if (zeroText) {\n                return zeroText;\n            }\n        }\n        if (normalized.includes("%")) {\n            const percentPattern = normalized.split(";")[0] || normalized;\n            const decimalPlaces = (percentPattern.split(".")[1] || "").replace(/[^0#]/g, "").length;\n            return `${(numericValue * 100).toFixed(decimalPlaces)}%`;\n        }\n        if (cellStyle.numFmtId === 186 || /dbnum3/i.test(formatCode)) {\n            return formatDbNum3Pattern(rawValue);\n        }\n        if (cellStyle.numFmtId === 42) {\n            return `\xA5 ${formatNumberByPattern(numericValue, "#,##0").replace(/^-/, "")}`;\n        }\n        if (/[#0][^;]*e\\+0+/i.test(formatCode)) {\n            const scientificPattern = formatCode.split(";")[0] || formatCode;\n            const decimalPartMatch = scientificPattern.match(/\\.([0#]+)e\\+/i);\n            const decimalPlaces = ((decimalPartMatch === null || decimalPartMatch === void 0 ? void 0 : decimalPartMatch[1]) || "").length;\n            const exponentDigits = (((_a = scientificPattern.match(/e\\+([0#]+)/i)) === null || _a === void 0 ? void 0 : _a[1]) || "").length;\n            const [mantissa, exponentPart] = numericValue.toExponential(decimalPlaces).split("e");\n            const exponent = Number(exponentPart || 0);\n            const sign = exponent >= 0 ? "+" : "-";\n            const paddedExponent = String(Math.abs(exponent)).padStart(exponentDigits, "0");\n            return `${mantissa}E${sign}${paddedExponent}`;\n        }\n        if (normalized.includes("?/?")) {\n            return formatFractionPattern(numericValue);\n        }\n        if (/^[^;]*[#0,]+(?:\\.[#0]+)?/.test(formatCode)) {\n            const primaryPattern = (formatCode.split(";")[0] || formatCode).trim();\n            if (primaryPattern.includes("\xA5")) {\n                const numericText = formatNumberByPattern(numericValue, primaryPattern.replace(/[^#0,.\\-]/g, ""));\n                const withCurrency = primaryPattern.includes("*") ? `\xA5 ${numericText.replace(/^-/, "")}` : `\xA5${numericText.replace(/^-/, "")}`;\n                return `${numericValue < 0 ? "-" : ""}${withCurrency}`;\n            }\n            return formatNumberByPattern(numericValue, primaryPattern.replace(/[^#0,.\\-]/g, ""));\n        }\n        return null;\n    }\n    function applyResolvedFormulaValue(cell, resolvedValue, resolutionSource = "legacy_resolver") {\n        const rawValue = String(resolvedValue || "");\n        const formattedValue = formatCellDisplayValue(rawValue, {\n            borders: cell.borders,\n            numFmtId: cell.numFmtId,\n            formatCode: cell.formatCode\n        });\n        cell.rawValue = rawValue;\n        cell.outputValue = formattedValue !== null && formattedValue !== void 0 ? formattedValue : rawValue;\n        cell.resolutionStatus = "resolved";\n        cell.resolutionSource = resolutionSource;\n    }\n    function parseDateLikeParts(value) {\n        const trimmed = String(value || "").trim();\n        const numericValue = Number(trimmed);\n        if (!Number.isNaN(numericValue)) {\n            return excelSerialToDateParts(numericValue);\n        }\n        const isoMatch = trimmed.match(/^(\\d{4})[-/](\\d{1,2})[-/](\\d{1,2})(?:[ T](\\d{1,2}):(\\d{1,2})(?::(\\d{1,2}))?)?$/);\n        if (isoMatch) {\n            return {\n                yyyy: isoMatch[1],\n                mm: isoMatch[2].padStart(2, "0"),\n                dd: isoMatch[3].padStart(2, "0"),\n                hh: (isoMatch[4] || "00").padStart(2, "0"),\n                mi: (isoMatch[5] || "00").padStart(2, "0"),\n                ss: (isoMatch[6] || "00").padStart(2, "0")\n            };\n        }\n        const japaneseMatch = trimmed.match(/^(\\d{4})\u5E74(\\d{1,2})\u6708(\\d{1,2})\u65E5(?:\\s*(\\d{1,2}):(\\d{1,2})(?::(\\d{1,2}))?)?$/);\n        if (japaneseMatch) {\n            return {\n                yyyy: japaneseMatch[1],\n                mm: japaneseMatch[2].padStart(2, "0"),\n                dd: japaneseMatch[3].padStart(2, "0"),\n                hh: (japaneseMatch[4] || "00").padStart(2, "0"),\n                mi: (japaneseMatch[5] || "00").padStart(2, "0"),\n                ss: (japaneseMatch[6] || "00").padStart(2, "0")\n            };\n        }\n        const japaneseYearMonthMatch = trimmed.match(/^(\\d{4})\u5E74(\\d{1,2})\u6708$/);\n        if (japaneseYearMonthMatch) {\n            return {\n                yyyy: japaneseYearMonthMatch[1],\n                mm: japaneseYearMonthMatch[2].padStart(2, "0"),\n                dd: "01",\n                hh: "00",\n                mi: "00",\n                ss: "00"\n            };\n        }\n        const japaneseMonthDayMatch = trimmed.match(/^(\\d{1,2})\u6708(\\d{1,2})\u65E5$/);\n        if (japaneseMonthDayMatch) {\n            return {\n                yyyy: "2000",\n                mm: japaneseMonthDayMatch[1].padStart(2, "0"),\n                dd: japaneseMonthDayMatch[2].padStart(2, "0"),\n                hh: "00",\n                mi: "00",\n                ss: "00"\n            };\n        }\n        const isoYearMonthMatch = trimmed.match(/^(\\d{4})[-/](\\d{1,2})$/);\n        if (isoYearMonthMatch) {\n            return {\n                yyyy: isoYearMonthMatch[1],\n                mm: isoYearMonthMatch[2].padStart(2, "0"),\n                dd: "01",\n                hh: "00",\n                mi: "00",\n                ss: "00"\n            };\n        }\n        return null;\n    }\n    function datePartsToExcelSerial(year, month, day, hour = 0, minute = 0, second = 0) {\n        if (![year, month, day, hour, minute, second].every(Number.isFinite))\n            return null;\n        const baseUtcMs = Date.UTC(1899, 11, 31);\n        const targetUtcMs = Date.UTC(year, month - 1, day, hour, minute, second);\n        const msPerDay = 24 * 60 * 60 * 1000;\n        let serial = (targetUtcMs - baseUtcMs) / msPerDay;\n        if (serial >= 60) {\n            serial += 1;\n        }\n        return serial;\n    }\n    function parseValueFunctionText(value) {\n        const trimmed = String(value || "").trim();\n        if (!trimmed)\n            return null;\n        const numericValue = Number(trimmed.replace(/,/g, ""));\n        if (!Number.isNaN(numericValue)) {\n            return numericValue;\n        }\n        const parts = parseDateLikeParts(trimmed);\n        if (!parts)\n            return null;\n        return datePartsToExcelSerial(Number(parts.yyyy), Number(parts.mm), Number(parts.dd), Number(parts.hh), Number(parts.mi), Number(parts.ss));\n    }\n    const cellFormatApi = {\n        isDateFormatCode,\n        normalizeNumericFormatCode,\n        excelSerialToIsoText,\n        excelSerialToDateParts,\n        formatTextFunctionValue,\n        formatNumberByPattern,\n        formatDateByPattern,\n        formatFractionPattern,\n        formatDbNum3Pattern,\n        splitFormatSections,\n        formatZeroSection,\n        formatCellDisplayValue,\n        applyResolvedFormulaValue,\n        parseDateLikeParts,\n        datePartsToExcelSerial,\n        parseValueFunctionText\n    };\n    moduleRegistry.registerModule("cellFormat", cellFormatApi);\n})();\n' }, { "path": "dist/js/xml-utils.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const textDecoder = new TextDecoder("utf-8");\n    const runtimeEnv = requireXlsx2mdRuntimeEnv();\n    function xmlToDocument(xmlText) {\n        return runtimeEnv.xmlToDocument(xmlText);\n    }\n    function getElementsByLocalName(root, localName) {\n        const elements = Array.from(root.getElementsByTagName("*"));\n        return elements.filter((element) => element.localName === localName);\n    }\n    function getFirstChildByLocalName(root, localName) {\n        return getElementsByLocalName(root, localName)[0] || null;\n    }\n    function getDirectChildByLocalName(root, localName) {\n        if (!root)\n            return null;\n        for (const node of Array.from(root.childNodes)) {\n            if (node.nodeType === runtimeEnv.ELEMENT_NODE && node.localName === localName) {\n                return node;\n            }\n        }\n        return null;\n    }\n    function decodeXmlText(bytes) {\n        return textDecoder.decode(bytes);\n    }\n    function getTextContent(node) {\n        return ((node === null || node === void 0 ? void 0 : node.textContent) || "").replace(/\\r\\n/g, "\\n");\n    }\n    const xmlUtilsApi = {\n        xmlToDocument,\n        getElementsByLocalName,\n        getFirstChildByLocalName,\n        getDirectChildByLocalName,\n        decodeXmlText,\n        getTextContent\n    };\n    moduleRegistry.registerModule("xmlUtils", xmlUtilsApi);\n})();\n' }, { "path": "dist/js/sheet-assets.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const runtimeEnv = moduleRegistry === null || moduleRegistry === void 0 ? void 0 : moduleRegistry.getModule("runtimeEnv");\n    if (!runtimeEnv) {\n        throw new Error("xlsx2md runtime env module is not loaded");\n    }\n    function createSafeSheetAssetDir(sheetName) {\n        return sheetName.replace(/[\\\\/:*?"<>|]+/g, "_").trim() || "Sheet";\n    }\n    function getImageExtension(mediaPath) {\n        const match = mediaPath.match(/\\.([a-z0-9]+)$/i);\n        return match ? match[1].toLowerCase() : "bin";\n    }\n    function parseDrawingImages(files, sheetName, sheetPath, deps) {\n        const sheetRels = deps.parseRelationships(files, deps.buildRelsPath(sheetPath), sheetPath);\n        const imageAssets = [];\n        let imageCounter = 1;\n        for (const drawingPath of sheetRels.values()) {\n            if (!/\\/drawings\\/.+\\.xml$/i.test(drawingPath))\n                continue;\n            const drawingBytes = files.get(drawingPath);\n            if (!drawingBytes)\n                continue;\n            const drawingDoc = deps.xmlToDocument(deps.decodeXmlText(drawingBytes));\n            const drawingRels = deps.parseRelationships(files, deps.buildRelsPath(drawingPath), drawingPath);\n            const anchors = deps.getElementsByLocalName(drawingDoc, "oneCellAnchor").concat(deps.getElementsByLocalName(drawingDoc, "twoCellAnchor"));\n            for (const anchor of anchors) {\n                const from = deps.getFirstChildByLocalName(anchor, "from");\n                const colNode = deps.getFirstChildByLocalName(from || anchor, "col");\n                const rowNode = deps.getFirstChildByLocalName(from || anchor, "row");\n                const col = Number(deps.getTextContent(colNode)) + 1;\n                const row = Number(deps.getTextContent(rowNode)) + 1;\n                if (!Number.isFinite(col) || !Number.isFinite(row) || col <= 0 || row <= 0) {\n                    continue;\n                }\n                const blip = deps.getElementsByLocalName(anchor, "blip")[0] || null;\n                const embedId = (blip === null || blip === void 0 ? void 0 : blip.getAttribute("r:embed")) || (blip === null || blip === void 0 ? void 0 : blip.getAttribute("embed")) || "";\n                const mediaPath = drawingRels.get(embedId) || "";\n                if (!mediaPath)\n                    continue;\n                const mediaBytes = files.get(mediaPath);\n                if (!mediaBytes)\n                    continue;\n                const extension = getImageExtension(mediaPath);\n                const safeDir = createSafeSheetAssetDir(sheetName);\n                const filename = `image_${String(imageCounter).padStart(3, "0")}.${extension}`;\n                imageAssets.push({\n                    sheetName,\n                    filename,\n                    path: `assets/${safeDir}/${filename}`,\n                    anchor: `${deps.colToLetters(col)}${row}`,\n                    data: new Uint8Array(mediaBytes),\n                    mediaPath\n                });\n                imageCounter += 1;\n            }\n        }\n        return imageAssets;\n    }\n    function parseChartType(chartDoc, deps) {\n        const typeMap = [\n            { localName: "barChart", label: "Bar Chart" },\n            { localName: "lineChart", label: "Line Chart" },\n            { localName: "pieChart", label: "Pie Chart" },\n            { localName: "doughnutChart", label: "Doughnut Chart" },\n            { localName: "areaChart", label: "Area Chart" },\n            { localName: "scatterChart", label: "Scatter Chart" },\n            { localName: "radarChart", label: "Radar Chart" },\n            { localName: "bubbleChart", label: "Bubble Chart" }\n        ];\n        const matched = typeMap\n            .filter((entry) => deps.getElementsByLocalName(chartDoc, entry.localName).length > 0)\n            .map((entry) => entry.label);\n        if (matched.length === 0)\n            return "Chart";\n        if (matched.length === 1)\n            return matched[0];\n        return `${matched.join(" + ")} (Combined)`;\n    }\n    function parseChartTitle(chartDoc, deps) {\n        const richText = deps.getElementsByLocalName(chartDoc, "t")\n            .map((node) => deps.getTextContent(node))\n            .filter(Boolean);\n        if (richText.length > 0) {\n            return richText.join("").trim();\n        }\n        return "";\n    }\n    function parseChartSeries(chartDoc, deps) {\n        const plotArea = deps.getFirstChildByLocalName(chartDoc, "plotArea") || chartDoc.documentElement;\n        const axisPositionById = new Map();\n        for (const axisNode of deps.getElementsByLocalName(plotArea, "valAx")) {\n            const axisIdNode = deps.getFirstChildByLocalName(axisNode, "axId");\n            const axisPosNode = deps.getFirstChildByLocalName(axisNode, "axPos");\n            const axisId = (axisIdNode === null || axisIdNode === void 0 ? void 0 : axisIdNode.getAttribute("val")) || deps.getTextContent(axisIdNode);\n            const axisPos = (axisPosNode === null || axisPosNode === void 0 ? void 0 : axisPosNode.getAttribute("val")) || deps.getTextContent(axisPosNode);\n            if (axisId) {\n                axisPositionById.set(axisId, axisPos || "");\n            }\n        }\n        const chartContainerNames = [\n            "barChart",\n            "lineChart",\n            "pieChart",\n            "doughnutChart",\n            "areaChart",\n            "scatterChart",\n            "radarChart",\n            "bubbleChart"\n        ];\n        const series = [];\n        for (const localName of chartContainerNames) {\n            for (const chartNode of deps.getElementsByLocalName(plotArea, localName)) {\n                const axisIds = deps.getElementsByLocalName(chartNode, "axId")\n                    .map((node) => node.getAttribute("val") || deps.getTextContent(node))\n                    .filter(Boolean);\n                const isSecondary = axisIds.some((axisId) => axisPositionById.get(axisId) === "r");\n                for (const seriesNode of deps.getElementsByLocalName(chartNode, "ser")) {\n                    const txNode = deps.getFirstChildByLocalName(seriesNode, "tx") || seriesNode;\n                    const nameRef = deps.getFirstChildByLocalName(txNode, "f");\n                    const nameValue = deps.getFirstChildByLocalName(txNode, "v");\n                    const nameText = deps.getElementsByLocalName(txNode, "t")\n                        .map((node) => deps.getTextContent(node))\n                        .join("")\n                        .trim();\n                    const catRef = deps.getFirstChildByLocalName(deps.getFirstChildByLocalName(deps.getFirstChildByLocalName(seriesNode, "cat") || seriesNode, "strRef") || seriesNode, "f")\n                        || deps.getFirstChildByLocalName(deps.getFirstChildByLocalName(deps.getFirstChildByLocalName(seriesNode, "cat") || seriesNode, "numRef") || seriesNode, "f");\n                    const valRef = deps.getFirstChildByLocalName(deps.getFirstChildByLocalName(seriesNode, "val") || seriesNode, "f")\n                        || deps.getFirstChildByLocalName(deps.getFirstChildByLocalName(deps.getFirstChildByLocalName(seriesNode, "val") || seriesNode, "numRef") || seriesNode, "f");\n                    series.push({\n                        name: nameText || deps.getTextContent(nameValue) || deps.getTextContent(nameRef) || "Series",\n                        categoriesRef: deps.getTextContent(catRef),\n                        valuesRef: deps.getTextContent(valRef),\n                        axis: isSecondary ? "secondary" : "primary"\n                    });\n                }\n            }\n        }\n        return series;\n    }\n    function parseDrawingCharts(files, sheetName, sheetPath, deps) {\n        const sheetRels = deps.parseRelationships(files, deps.buildRelsPath(sheetPath), sheetPath);\n        const charts = [];\n        for (const drawingPath of sheetRels.values()) {\n            if (!/\\/drawings\\/.+\\.xml$/i.test(drawingPath))\n                continue;\n            const drawingBytes = files.get(drawingPath);\n            if (!drawingBytes)\n                continue;\n            const drawingDoc = deps.xmlToDocument(deps.decodeXmlText(drawingBytes));\n            const drawingRels = deps.parseRelationships(files, deps.buildRelsPath(drawingPath), drawingPath);\n            const anchors = deps.getElementsByLocalName(drawingDoc, "oneCellAnchor").concat(deps.getElementsByLocalName(drawingDoc, "twoCellAnchor"));\n            for (const anchor of anchors) {\n                const from = deps.getFirstChildByLocalName(anchor, "from");\n                const colNode = deps.getFirstChildByLocalName(from || anchor, "col");\n                const rowNode = deps.getFirstChildByLocalName(from || anchor, "row");\n                const col = Number(deps.getTextContent(colNode)) + 1;\n                const row = Number(deps.getTextContent(rowNode)) + 1;\n                if (!Number.isFinite(col) || !Number.isFinite(row) || col <= 0 || row <= 0) {\n                    continue;\n                }\n                const chartNode = deps.getFirstChildByLocalName(anchor, "graphicFrame");\n                const chartRef = deps.getElementsByLocalName(chartNode || anchor, "chart")[0] || null;\n                const relId = (chartRef === null || chartRef === void 0 ? void 0 : chartRef.getAttribute("r:id")) || (chartRef === null || chartRef === void 0 ? void 0 : chartRef.getAttribute("id")) || "";\n                const chartPath = drawingRels.get(relId) || "";\n                if (!chartPath)\n                    continue;\n                const chartBytes = files.get(chartPath);\n                if (!chartBytes)\n                    continue;\n                const chartDoc = deps.xmlToDocument(deps.decodeXmlText(chartBytes));\n                charts.push({\n                    sheetName,\n                    anchor: `${deps.colToLetters(col)}${row}`,\n                    chartPath,\n                    title: parseChartTitle(chartDoc, deps),\n                    chartType: parseChartType(chartDoc, deps),\n                    series: parseChartSeries(chartDoc, deps)\n                });\n            }\n        }\n        return charts;\n    }\n    function parseShapeKind(shapeNode, deps) {\n        if (!shapeNode)\n            return "Shape";\n        if (shapeNode.localName === "cxnSp") {\n            const geomNode = deps.getFirstChildByLocalName(deps.getFirstChildByLocalName(shapeNode, "spPr") || shapeNode, "prstGeom");\n            const prst = String((geomNode === null || geomNode === void 0 ? void 0 : geomNode.getAttribute("prst")) || "").trim();\n            if (prst === "straightConnector1") {\n                return "Straight Arrow Connector";\n            }\n            return prst ? `Connector (${prst})` : "Connector";\n        }\n        if (shapeNode.localName !== "sp") {\n            return "Shape";\n        }\n        const nvSpPr = deps.getFirstChildByLocalName(shapeNode, "nvSpPr");\n        const cNvSpPr = deps.getFirstChildByLocalName(nvSpPr || shapeNode, "cNvSpPr");\n        if ((cNvSpPr === null || cNvSpPr === void 0 ? void 0 : cNvSpPr.getAttribute("txBox")) === "1") {\n            return "Text Box";\n        }\n        const geomNode = deps.getFirstChildByLocalName(deps.getFirstChildByLocalName(shapeNode, "spPr") || shapeNode, "prstGeom");\n        const prst = String((geomNode === null || geomNode === void 0 ? void 0 : geomNode.getAttribute("prst")) || "").trim();\n        if (prst === "rect") {\n            return "Rectangle";\n        }\n        return prst ? `Shape (${prst})` : "Shape";\n    }\n    function parseShapeText(shapeNode, deps) {\n        if (!shapeNode)\n            return "";\n        return deps.getElementsByLocalName(shapeNode, "t")\n            .map((node) => deps.getTextContent(node))\n            .filter(Boolean)\n            .join("")\n            .trim();\n    }\n    function parseShapeExt(anchor, shapeNode, deps) {\n        const extNode = deps.getDirectChildByLocalName(anchor, "ext")\n            || deps.getDirectChildByLocalName(deps.getDirectChildByLocalName(deps.getDirectChildByLocalName(shapeNode || anchor, "spPr") || shapeNode || anchor, "xfrm"), "ext");\n        const widthEmu = Number((extNode === null || extNode === void 0 ? void 0 : extNode.getAttribute("cx")) || "");\n        const heightEmu = Number((extNode === null || extNode === void 0 ? void 0 : extNode.getAttribute("cy")) || "");\n        return {\n            widthEmu: Number.isFinite(widthEmu) ? widthEmu : null,\n            heightEmu: Number.isFinite(heightEmu) ? heightEmu : null\n        };\n    }\n    function flattenXmlNodeEntries(node, deps, path = "", entries = []) {\n        if (!node)\n            return entries;\n        const nodeName = node.tagName || node.nodeName || node.localName || "node";\n        const currentPath = path ? `${path}/${nodeName}` : nodeName;\n        for (const attribute of Array.from(node.attributes)) {\n            entries.push({\n                key: `${currentPath}@${attribute.name}`,\n                value: attribute.value\n            });\n        }\n        const directText = Array.from(node.childNodes)\n            .filter((child) => child.nodeType === runtimeEnv.TEXT_NODE)\n            .map((child) => (child.textContent || "").trim())\n            .filter(Boolean)\n            .join(" ");\n        if (directText) {\n            entries.push({\n                key: `${currentPath}#text`,\n                value: directText\n            });\n        }\n        for (const child of Array.from(node.childNodes)) {\n            if (child.nodeType === runtimeEnv.ELEMENT_NODE) {\n                flattenXmlNodeEntries(child, deps, currentPath, entries);\n            }\n        }\n        return entries;\n    }\n    function parseShapeRawEntries(anchor, deps) {\n        const entries = [];\n        return flattenXmlNodeEntries(anchor, deps, "", entries);\n    }\n    function renderHierarchicalRawEntries(entries) {\n        const root = {\n            children: new Map(),\n            value: null\n        };\n        for (const entry of entries) {\n            const parts = entry.key.split("/").filter(Boolean);\n            let current = root;\n            for (const part of parts) {\n                if (!current.children.has(part)) {\n                    current.children.set(part, {\n                        children: new Map(),\n                        value: null\n                    });\n                }\n                current = current.children.get(part);\n            }\n            current.value = entry.value;\n        }\n        const lines = [];\n        function visit(node, depth) {\n            for (const [key, child] of node.children.entries()) {\n                const indent = " ".repeat(depth * 4);\n                if (child.value !== null) {\n                    lines.push(`${indent}- \\`${key}\\`: \\`${child.value}\\``);\n                }\n                else {\n                    lines.push(`${indent}- \\`${key}\\``);\n                }\n                visit(child, depth + 1);\n            }\n        }\n        visit(root, 0);\n        return lines;\n    }\n    function parseAnchorInt(anchor, parentName, childName, deps) {\n        if (!anchor)\n            return null;\n        const parent = deps.getFirstChildByLocalName(anchor, parentName);\n        const child = deps.getFirstChildByLocalName(parent || anchor, childName);\n        const value = Number(deps.getTextContent(child));\n        return Number.isFinite(value) ? value : null;\n    }\n    function parseShapeBoundingBox(anchor, shapeNode, widthEmu, heightEmu, deps) {\n        const fromCol = parseAnchorInt(anchor, "from", "col", deps) || 0;\n        const fromRow = parseAnchorInt(anchor, "from", "row", deps) || 0;\n        const fromColOff = parseAnchorInt(anchor, "from", "colOff", deps) || 0;\n        const fromRowOff = parseAnchorInt(anchor, "from", "rowOff", deps) || 0;\n        const toCol = parseAnchorInt(anchor, "to", "col", deps);\n        const toRow = parseAnchorInt(anchor, "to", "row", deps);\n        const toColOff = parseAnchorInt(anchor, "to", "colOff", deps) || 0;\n        const toRowOff = parseAnchorInt(anchor, "to", "rowOff", deps) || 0;\n        const left = fromCol * deps.defaultCellWidthEmu + fromColOff;\n        const top = fromRow * deps.defaultCellHeightEmu + fromRowOff;\n        if (toCol !== null && toRow !== null) {\n            return {\n                left,\n                top,\n                right: toCol * deps.defaultCellWidthEmu + toColOff,\n                bottom: toRow * deps.defaultCellHeightEmu + toRowOff\n            };\n        }\n        const ext = parseShapeExt(anchor, shapeNode, deps);\n        return {\n            left,\n            top,\n            right: left + Math.max(1, ext.widthEmu || widthEmu || deps.defaultCellWidthEmu),\n            bottom: top + Math.max(1, ext.heightEmu || heightEmu || deps.defaultCellHeightEmu)\n        };\n    }\n    function bboxGap(a, b) {\n        const dx = a.right < b.left\n            ? b.left - a.right\n            : b.right < a.left\n                ? a.left - b.right\n                : 0;\n        const dy = a.bottom < b.top\n            ? b.top - a.bottom\n            : b.bottom < a.top\n                ? a.top - b.bottom\n                : 0;\n        return { dx, dy };\n    }\n    function extractShapeBlocks(shapes, deps) {\n        if (shapes.length === 0)\n            return [];\n        const visited = new Array(shapes.length).fill(false);\n        const blocks = [];\n        for (let i = 0; i < shapes.length; i += 1) {\n            if (visited[i])\n                continue;\n            const queue = [i];\n            visited[i] = true;\n            const shapeIndexes = [];\n            while (queue.length > 0) {\n                const currentIndex = queue.shift();\n                shapeIndexes.push(currentIndex);\n                const current = shapes[currentIndex];\n                for (let j = 0; j < shapes.length; j += 1) {\n                    if (visited[j])\n                        continue;\n                    const other = shapes[j];\n                    const { dx, dy } = bboxGap(current.bbox, other.bbox);\n                    if (dx <= deps.shapeBlockGapXEmu && dy <= deps.shapeBlockGapYEmu) {\n                        visited[j] = true;\n                        queue.push(j);\n                    }\n                }\n            }\n            let minLeft = Number.POSITIVE_INFINITY;\n            let minTop = Number.POSITIVE_INFINITY;\n            let maxRight = 0;\n            let maxBottom = 0;\n            for (const index of shapeIndexes) {\n                const bbox = shapes[index].bbox;\n                minLeft = Math.min(minLeft, bbox.left);\n                minTop = Math.min(minTop, bbox.top);\n                maxRight = Math.max(maxRight, bbox.right);\n                maxBottom = Math.max(maxBottom, bbox.bottom);\n            }\n            blocks.push({\n                startCol: Math.floor(minLeft / deps.defaultCellWidthEmu) + 1,\n                startRow: Math.floor(minTop / deps.defaultCellHeightEmu) + 1,\n                endCol: Math.floor(maxRight / deps.defaultCellWidthEmu) + 1,\n                endRow: Math.floor(maxBottom / deps.defaultCellHeightEmu) + 1,\n                shapeIndexes: shapeIndexes.sort((a, b) => a - b)\n            });\n        }\n        return blocks.sort((a, b) => (a.startRow - b.startRow) || (a.startCol - b.startCol));\n    }\n    function parseDrawingShapes(files, sheetName, sheetPath, deps) {\n        var _a, _b;\n        const sheetRels = deps.parseRelationships(files, deps.buildRelsPath(sheetPath), sheetPath);\n        const shapes = [];\n        let shapeCounter = 1;\n        for (const drawingPath of sheetRels.values()) {\n            if (!/\\/drawings\\/.+\\.xml$/i.test(drawingPath))\n                continue;\n            const drawingBytes = files.get(drawingPath);\n            if (!drawingBytes)\n                continue;\n            const drawingDoc = deps.xmlToDocument(deps.decodeXmlText(drawingBytes));\n            const anchors = deps.getElementsByLocalName(drawingDoc, "oneCellAnchor").concat(deps.getElementsByLocalName(drawingDoc, "twoCellAnchor"));\n            for (const anchor of anchors) {\n                const from = deps.getFirstChildByLocalName(anchor, "from");\n                const colNode = deps.getFirstChildByLocalName(from || anchor, "col");\n                const rowNode = deps.getFirstChildByLocalName(from || anchor, "row");\n                const col = Number(deps.getTextContent(colNode)) + 1;\n                const row = Number(deps.getTextContent(rowNode)) + 1;\n                if (!Number.isFinite(col) || !Number.isFinite(row) || col <= 0 || row <= 0) {\n                    continue;\n                }\n                if (deps.getElementsByLocalName(anchor, "blip").length > 0)\n                    continue;\n                if (deps.getElementsByLocalName(anchor, "chart").length > 0)\n                    continue;\n                const shapeNode = deps.getFirstChildByLocalName(anchor, "sp") || deps.getFirstChildByLocalName(anchor, "cxnSp");\n                if (!shapeNode)\n                    continue;\n                const cNvPr = deps.getFirstChildByLocalName(deps.getFirstChildByLocalName(shapeNode, shapeNode.localName === "sp" ? "nvSpPr" : "nvCxnSpPr") || shapeNode, "cNvPr");\n                const { widthEmu, heightEmu } = parseShapeExt(anchor, shapeNode, deps);\n                const svgAsset = ((_b = (_a = deps.drawingHelper) === null || _a === void 0 ? void 0 : _a.renderShapeSvg) === null || _b === void 0 ? void 0 : _b.call(_a, shapeNode, anchor, sheetName, shapeCounter)) || null;\n                shapes.push({\n                    sheetName,\n                    anchor: `${deps.colToLetters(col)}${row}`,\n                    name: String((cNvPr === null || cNvPr === void 0 ? void 0 : cNvPr.getAttribute("name")) || "").trim() || "Shape",\n                    kind: parseShapeKind(shapeNode, deps),\n                    text: parseShapeText(shapeNode, deps),\n                    widthEmu,\n                    heightEmu,\n                    elementName: `xdr:${shapeNode.localName}`,\n                    anchorElementName: anchor.tagName || anchor.nodeName || anchor.localName || "anchor",\n                    rawEntries: parseShapeRawEntries(anchor, deps),\n                    bbox: parseShapeBoundingBox(anchor, shapeNode, widthEmu, heightEmu, deps),\n                    svgFilename: (svgAsset === null || svgAsset === void 0 ? void 0 : svgAsset.filename) || null,\n                    svgPath: (svgAsset === null || svgAsset === void 0 ? void 0 : svgAsset.path) || null,\n                    svgData: (svgAsset === null || svgAsset === void 0 ? void 0 : svgAsset.data) || null\n                });\n                shapeCounter += 1;\n            }\n        }\n        return shapes;\n    }\n    const sheetAssetsApi = {\n        createSafeSheetAssetDir,\n        parseDrawingImages,\n        parseDrawingCharts,\n        parseDrawingShapes,\n        extractShapeBlocks,\n        renderHierarchicalRawEntries\n    };\n    moduleRegistry.registerModule("sheetAssets", sheetAssetsApi);\n})();\n' }, { "path": "dist/js/worksheet-parser.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    function expandRangeAddresses(ref, deps) {\n        const range = deps.parseRangeRef(ref);\n        const addresses = [];\n        for (let row = Math.max(1, range.startRow); row <= Math.max(range.startRow, range.endRow); row += 1) {\n            for (let col = Math.max(1, range.startCol); col <= Math.max(range.startCol, range.endCol); col += 1) {\n                addresses.push(`${deps.colToLetters(col)}${row}`);\n            }\n        }\n        return addresses;\n    }\n    function parseWorksheetHyperlinks(files, worksheetDoc, sheetPath, deps) {\n        var _a;\n        const hyperlinks = new Map();\n        const relsPath = deps.buildRelsPath(sheetPath);\n        const relEntries = deps.parseRelationshipEntries(files, relsPath, sheetPath);\n        const hyperlinkNodes = Array.from(worksheetDoc.getElementsByTagName("hyperlink"));\n        for (const node of hyperlinkNodes) {\n            const ref = (node.getAttribute("ref") || "").trim();\n            if (!ref)\n                continue;\n            const relId = (node.getAttribute("r:id") || node.getAttribute("id") || "").trim();\n            const relEntry = relId ? relEntries.get(relId) : null;\n            const display = (node.getAttribute("display") || "").trim();\n            const tooltip = (node.getAttribute("tooltip") || "").trim();\n            const location = (node.getAttribute("location") || "").trim().replace(/^#/, "");\n            const rawTarget = ((_a = relEntry === null || relEntry === void 0 ? void 0 : relEntry.target) === null || _a === void 0 ? void 0 : _a.trim()) || "";\n            const kind = (relEntry === null || relEntry === void 0 ? void 0 : relEntry.targetMode.toLowerCase()) === "external"\n                ? "external"\n                : location\n                    ? "internal"\n                    : rawTarget.startsWith("#")\n                        ? "internal"\n                        : rawTarget\n                            ? "external"\n                            : null;\n            if (!kind)\n                continue;\n            const target = kind === "internal"\n                ? (location || rawTarget.replace(/^#/, ""))\n                : rawTarget;\n            if (!target)\n                continue;\n            const hyperlink = {\n                kind,\n                target,\n                location: location || (kind === "internal" ? target : ""),\n                tooltip,\n                display\n            };\n            for (const address of expandRangeAddresses(ref, deps)) {\n                hyperlinks.set(address, hyperlink);\n            }\n        }\n        return hyperlinks;\n    }\n    function extractRichTextPlainText(element, deps) {\n        if (!element)\n            return "";\n        const textNodes = Array.from(element.getElementsByTagName("t"));\n        if (textNodes.length > 0) {\n            return textNodes.map((node) => deps.getTextContent(node)).join("");\n        }\n        return deps.getTextContent(element);\n    }\n    function parseLegacyCommentsXml(xmlText, deps) {\n        const doc = deps.xmlToDocument(xmlText);\n        const authors = Array.from(doc.getElementsByTagName("author")).map((node) => deps.getTextContent(node).trim());\n        return Array.from(doc.getElementsByTagName("comment")).map((commentElement) => {\n            const authorId = Number(commentElement.getAttribute("authorId") || 0);\n            return {\n                address: (commentElement.getAttribute("ref") || "").trim(),\n                kind: "note",\n                author: authors[authorId] || "",\n                text: extractRichTextPlainText(commentElement.getElementsByTagName("text")[0] || null, deps).trim(),\n                dateTime: ""\n            };\n        }).filter((comment) => !!comment.address && !!comment.text);\n    }\n    function parsePersonDisplayNames(files, deps) {\n        const persons = new Map();\n        for (const [path, bytes] of files.entries()) {\n            if (!/^xl\\/persons\\/person[^/]*\\.xml$/u.test(path))\n                continue;\n            const doc = deps.xmlToDocument(deps.decodeXmlText(bytes));\n            for (const personElement of Array.from(doc.getElementsByTagName("person"))) {\n                const id = (personElement.getAttribute("id") || "").trim();\n                const displayName = (personElement.getAttribute("displayName") || "").trim();\n                if (id && displayName) {\n                    persons.set(id, displayName);\n                }\n            }\n        }\n        return persons;\n    }\n    function parseThreadedCommentsXml(xmlText, persons, deps) {\n        const doc = deps.xmlToDocument(xmlText);\n        return Array.from(doc.getElementsByTagName("threadedComment")).map((commentElement) => {\n            const personId = (commentElement.getAttribute("personId") || "").trim();\n            return {\n                address: (commentElement.getAttribute("ref") || "").trim(),\n                kind: "threaded",\n                author: persons.get(personId) || personId,\n                text: extractRichTextPlainText(commentElement, deps).trim(),\n                dateTime: (commentElement.getAttribute("dT") || "").trim()\n            };\n        }).filter((comment) => !!comment.address && !!comment.text);\n    }\n    function isLegacyCommentRelationship(type) {\n        return /\\/comments$/u.test(type);\n    }\n    function isThreadedCommentRelationship(type) {\n        return /\\/threadedComment$/u.test(type) || /\\/threadedComments$/u.test(type);\n    }\n    function parseWorksheetComments(files, sheetPath, deps) {\n        const comments = [];\n        const relsPath = deps.buildRelsPath(sheetPath);\n        const relEntries = deps.parseRelationshipEntries(files, relsPath, sheetPath);\n        const persons = parsePersonDisplayNames(files, deps);\n        for (const entry of relEntries.values()) {\n            const bytes = files.get(entry.target);\n            if (!bytes)\n                continue;\n            const xmlText = deps.decodeXmlText(bytes);\n            if (isLegacyCommentRelationship(entry.type)) {\n                comments.push(...parseLegacyCommentsXml(xmlText, deps));\n            }\n            else if (isThreadedCommentRelationship(entry.type)) {\n                comments.push(...parseThreadedCommentsXml(xmlText, persons, deps));\n            }\n        }\n        return comments.sort((left, right) => {\n            const leftPos = deps.parseCellAddress(left.address);\n            const rightPos = deps.parseCellAddress(right.address);\n            if (leftPos.row !== rightPos.row)\n                return leftPos.row - rightPos.row;\n            if (leftPos.col !== rightPos.col)\n                return leftPos.col - rightPos.col;\n            return left.kind.localeCompare(right.kind);\n        });\n    }\n    function hasEnabledBooleanValue(node) {\n        if (!node)\n            return false;\n        const value = (node.getAttribute("val") || "").trim().toLowerCase();\n        return value !== "false" && value !== "0" && value !== "none";\n    }\n    function mergeTextStyle(base, override) {\n        return {\n            bold: base.bold || override.bold,\n            italic: base.italic || override.italic,\n            strike: base.strike || override.strike,\n            underline: base.underline || override.underline\n        };\n    }\n    function hasTextStyle(style) {\n        return style.bold || style.italic || style.strike || style.underline;\n    }\n    function parseRichTextStyle(runProperties) {\n        return {\n            bold: hasEnabledBooleanValue(runProperties === null || runProperties === void 0 ? void 0 : runProperties.getElementsByTagName("b")[0]),\n            italic: hasEnabledBooleanValue(runProperties === null || runProperties === void 0 ? void 0 : runProperties.getElementsByTagName("i")[0]),\n            strike: hasEnabledBooleanValue(runProperties === null || runProperties === void 0 ? void 0 : runProperties.getElementsByTagName("strike")[0]),\n            underline: hasEnabledBooleanValue(runProperties === null || runProperties === void 0 ? void 0 : runProperties.getElementsByTagName("u")[0])\n        };\n    }\n    function mergeAdjacentRuns(runs) {\n        const merged = [];\n        for (const run of runs) {\n            if (!run.text)\n                continue;\n            const previous = merged[merged.length - 1];\n            if (previous\n                && previous.bold === run.bold\n                && previous.italic === run.italic\n                && previous.strike === run.strike\n                && previous.underline === run.underline) {\n                previous.text += run.text;\n            }\n            else {\n                merged.push({ ...run });\n            }\n        }\n        return merged.length > 0 && merged.some((run) => hasTextStyle(run)) ? merged : null;\n    }\n    function createStyledRuns(text, style) {\n        if (!text || !hasTextStyle(style)) {\n            return null;\n        }\n        return [{\n                text,\n                ...style\n            }];\n    }\n    function parseInlineRichTextRuns(cellElement, cellStyle, deps) {\n        const inlineStringElement = cellElement.getElementsByTagName("is")[0] || null;\n        if (!inlineStringElement) {\n            return null;\n        }\n        const runElements = Array.from(inlineStringElement.childNodes).filter((node) => (node.nodeType === Node.ELEMENT_NODE && node.localName === "r"));\n        if (runElements.length === 0) {\n            return null;\n        }\n        return mergeAdjacentRuns(runElements.map((runElement) => ({\n            text: Array.from(runElement.getElementsByTagName("t")).map((node) => deps.getTextContent(node)).join(""),\n            ...mergeTextStyle(cellStyle, parseRichTextStyle(runElement.getElementsByTagName("rPr")[0] || null))\n        })));\n    }\n    function extractCellOutputValue(cellElement, sharedStrings, cellStyle, deps, formulaOverride = "") {\n        const type = (cellElement.getAttribute("t") || "").trim();\n        const valueNode = cellElement.getElementsByTagName("v")[0] || null;\n        const valueText = deps.getTextContent(valueNode);\n        const formulaText = formulaOverride || deps.getTextContent(cellElement.getElementsByTagName("f")[0]);\n        const cachedValueState = !formulaText\n            ? null\n            : !valueNode\n                ? "absent"\n                : valueText === ""\n                    ? "present_empty"\n                    : "present_nonempty";\n        if (formulaText) {\n            const normalizedFormula = formulaText.startsWith("=") ? formulaText : `=${formulaText}`;\n            if (/\\[[^\\]]+\\.xlsx\\]/i.test(normalizedFormula)) {\n                return {\n                    valueType: type || "formula",\n                    rawValue: valueText || normalizedFormula,\n                    outputValue: normalizedFormula,\n                    formulaText: normalizedFormula,\n                    resolutionStatus: "unsupported_external",\n                    resolutionSource: "external_unsupported",\n                    cachedValueState,\n                    richTextRuns: null\n                };\n            }\n            if (valueNode) {\n                const formattedValue = deps.formatCellDisplayValue(valueText, cellStyle);\n                return {\n                    valueType: type || "formula",\n                    rawValue: valueText,\n                    outputValue: formattedValue !== null && formattedValue !== void 0 ? formattedValue : valueText,\n                    formulaText: normalizedFormula,\n                    resolutionStatus: "resolved",\n                    resolutionSource: "cached_value",\n                    cachedValueState,\n                    richTextRuns: null\n                };\n            }\n            return {\n                valueType: type || "formula",\n                rawValue: normalizedFormula,\n                outputValue: normalizedFormula,\n                formulaText: normalizedFormula,\n                resolutionStatus: "fallback_formula",\n                resolutionSource: "formula_text",\n                cachedValueState,\n                richTextRuns: null\n            };\n        }\n        if (type === "s") {\n            const sharedIndex = Number(valueText || 0);\n            const sharedEntry = sharedStrings[sharedIndex] || { text: "", runs: null };\n            return {\n                valueType: type,\n                rawValue: valueText,\n                outputValue: sharedEntry.text,\n                formulaText: "",\n                resolutionStatus: null,\n                resolutionSource: null,\n                cachedValueState: null,\n                richTextRuns: sharedEntry.runs\n                    ? mergeAdjacentRuns(sharedEntry.runs.map((run) => ({\n                        text: run.text,\n                        ...mergeTextStyle(cellStyle.textStyle, run)\n                    })))\n                    : createStyledRuns(sharedEntry.text, cellStyle.textStyle)\n            };\n        }\n        if (type === "inlineStr") {\n            const inlineText = Array.from(cellElement.getElementsByTagName("t")).map((node) => deps.getTextContent(node)).join("");\n            return {\n                valueType: type,\n                rawValue: inlineText,\n                outputValue: inlineText,\n                formulaText: "",\n                resolutionStatus: null,\n                resolutionSource: null,\n                cachedValueState: null,\n                richTextRuns: parseInlineRichTextRuns(cellElement, cellStyle.textStyle, deps) || createStyledRuns(inlineText, cellStyle.textStyle)\n            };\n        }\n        if (type === "b") {\n            return {\n                valueType: type,\n                rawValue: valueText,\n                outputValue: valueText === "1" ? "TRUE" : "FALSE",\n                formulaText: "",\n                resolutionStatus: null,\n                resolutionSource: null,\n                cachedValueState: null,\n                richTextRuns: createStyledRuns(valueText === "1" ? "TRUE" : "FALSE", cellStyle.textStyle)\n            };\n        }\n        if (type === "str" || type === "e") {\n            return {\n                valueType: type,\n                rawValue: valueText,\n                outputValue: valueText,\n                formulaText: "",\n                resolutionStatus: null,\n                resolutionSource: null,\n                cachedValueState: null,\n                richTextRuns: createStyledRuns(valueText, cellStyle.textStyle)\n            };\n        }\n        if (valueText) {\n            const formattedValue = deps.formatCellDisplayValue(valueText, cellStyle);\n            if (formattedValue !== null) {\n                return {\n                    valueType: type,\n                    rawValue: valueText,\n                    outputValue: formattedValue,\n                    formulaText: "",\n                    resolutionStatus: null,\n                    resolutionSource: null,\n                    cachedValueState: null,\n                    richTextRuns: createStyledRuns(formattedValue, cellStyle.textStyle)\n                };\n            }\n        }\n        return {\n            valueType: type,\n            rawValue: valueText,\n            outputValue: valueText,\n            formulaText: "",\n            resolutionStatus: null,\n            resolutionSource: null,\n            cachedValueState: null,\n            richTextRuns: createStyledRuns(valueText, cellStyle.textStyle)\n        };\n    }\n    function shiftReferenceAddress(addressText, rowOffset, colOffset, deps) {\n        const match = String(addressText || "").match(/^(\\$?)([A-Z]+)(\\$?)(\\d+)$/i);\n        if (!match)\n            return addressText;\n        const colAbsolute = match[1] === "$";\n        const rowAbsolute = match[3] === "$";\n        const baseCol = deps.lettersToCol(match[2]);\n        const baseRow = Number(match[4]);\n        const shiftedCol = colAbsolute ? baseCol : baseCol + colOffset;\n        const shiftedRow = rowAbsolute ? baseRow : baseRow + rowOffset;\n        const safeCol = Math.max(1, shiftedCol);\n        const safeRow = Math.max(1, shiftedRow);\n        return `${colAbsolute ? "$" : ""}${deps.colToLetters(safeCol)}${rowAbsolute ? "$" : ""}${safeRow}`;\n    }\n    function translateSharedFormula(baseFormulaText, baseAddress, targetAddress, deps) {\n        const basePos = deps.parseCellAddress(baseAddress);\n        const targetPos = deps.parseCellAddress(targetAddress);\n        if (!basePos.row || !basePos.col || !targetPos.row || !targetPos.col) {\n            return baseFormulaText;\n        }\n        const rowOffset = targetPos.row - basePos.row;\n        const colOffset = targetPos.col - basePos.col;\n        const normalized = String(baseFormulaText || "").replace(/^=/, "");\n        const translated = normalized.replace(/(?:\'((?:[^\']|\'\')+)\'|([A-Za-z0-9_ ]+))!(\\$?[A-Z]+\\$?\\d+)|(\\$?[A-Z]+\\$?\\d+)/g, (full, quotedSheet, plainSheet, qualifiedAddress, localAddress) => {\n            const address = qualifiedAddress || localAddress;\n            if (!address)\n                return full;\n            const shifted = shiftReferenceAddress(address, rowOffset, colOffset, deps);\n            if (qualifiedAddress) {\n                const sheetPrefix = quotedSheet ? `\'${quotedSheet}\'` : plainSheet;\n                return `${sheetPrefix}!${shifted}`;\n            }\n            return shifted;\n        });\n        return translated.startsWith("=") ? translated : `=${translated}`;\n    }\n    function parseWorksheet(files, sheetName, sheetPath, sheetIndex, sharedStrings, cellStyles, deps) {\n        const bytes = files.get(sheetPath);\n        if (!bytes) {\n            throw new Error(`Sheet XML not found: ${sheetPath}`);\n        }\n        const doc = deps.xmlToDocument(deps.decodeXmlText(bytes));\n        const sharedFormulaMap = new Map();\n        const hyperlinks = parseWorksheetHyperlinks(files, doc, sheetPath, deps);\n        const cells = Array.from(doc.getElementsByTagName("c")).map((cellElement) => {\n            const address = cellElement.getAttribute("r") || "";\n            const position = deps.parseCellAddress(address);\n            const styleIndex = Number(cellElement.getAttribute("s") || 0);\n            const cellStyle = cellStyles[styleIndex] || {\n                borders: deps.EMPTY_BORDERS,\n                numFmtId: 0,\n                formatCode: "General",\n                textStyle: {\n                    bold: false,\n                    italic: false,\n                    strike: false,\n                    underline: false\n                }\n            };\n            let formulaOverride = "";\n            const formulaElement = cellElement.getElementsByTagName("f")[0] || null;\n            const formulaType = (formulaElement === null || formulaElement === void 0 ? void 0 : formulaElement.getAttribute("t")) || "";\n            const spillRef = (formulaElement === null || formulaElement === void 0 ? void 0 : formulaElement.getAttribute("ref")) || "";\n            const sharedIndex = (formulaElement === null || formulaElement === void 0 ? void 0 : formulaElement.getAttribute("si")) || "";\n            const formulaText = deps.getTextContent(formulaElement);\n            if (formulaType === "shared" && sharedIndex) {\n                if (formulaText) {\n                    const normalizedFormula = formulaText.startsWith("=") ? formulaText : `=${formulaText}`;\n                    sharedFormulaMap.set(sharedIndex, { address, formulaText: normalizedFormula });\n                    formulaOverride = normalizedFormula;\n                }\n                else {\n                    const sharedBase = sharedFormulaMap.get(sharedIndex);\n                    if (sharedBase) {\n                        formulaOverride = translateSharedFormula(sharedBase.formulaText, sharedBase.address, address, deps);\n                    }\n                }\n            }\n            const output = extractCellOutputValue(cellElement, sharedStrings, cellStyle, deps, formulaOverride);\n            return {\n                address,\n                row: position.row,\n                col: position.col,\n                valueType: output.valueType,\n                rawValue: output.rawValue,\n                outputValue: output.outputValue,\n                formulaText: output.formulaText,\n                resolutionStatus: output.resolutionStatus,\n                resolutionSource: output.resolutionSource,\n                cachedValueState: output.cachedValueState,\n                styleIndex,\n                borders: cellStyle.borders,\n                numFmtId: cellStyle.numFmtId,\n                formatCode: cellStyle.formatCode,\n                textStyle: cellStyle.textStyle,\n                richTextRuns: output.richTextRuns,\n                formulaType,\n                spillRef,\n                hyperlink: hyperlinks.get(address) || null\n            };\n        });\n        const merges = Array.from(doc.getElementsByTagName("mergeCell")).map((mergeElement) => deps.parseRangeRef(mergeElement.getAttribute("ref") || ""));\n        const tables = deps.parseWorksheetTables(files, doc, sheetName, sheetPath);\n        const assetDeps = deps.buildAssetDeps();\n        const images = deps.parseDrawingImages(files, sheetName, sheetPath, assetDeps);\n        const charts = deps.parseDrawingCharts(files, sheetName, sheetPath, assetDeps);\n        const shapes = deps.parseShapes === false\n            ? []\n            : deps.parseDrawingShapes(files, sheetName, sheetPath, assetDeps);\n        const comments = parseWorksheetComments(files, sheetPath, deps);\n        let maxRow = 0;\n        let maxCol = 0;\n        for (const cell of cells) {\n            if (cell.row > maxRow)\n                maxRow = cell.row;\n            if (cell.col > maxCol)\n                maxCol = cell.col;\n        }\n        for (const merge of merges) {\n            if (merge.endRow > maxRow)\n                maxRow = merge.endRow;\n            if (merge.endCol > maxCol)\n                maxCol = merge.endCol;\n        }\n        return {\n            name: sheetName,\n            index: sheetIndex,\n            path: sheetPath,\n            cells,\n            merges,\n            tables,\n            images,\n            charts,\n            shapes,\n            comments,\n            maxRow,\n            maxCol\n        };\n    }\n    const worksheetParserApi = {\n        extractCellOutputValue,\n        expandRangeAddresses,\n        parseWorksheetHyperlinks,\n        parseLegacyCommentsXml,\n        parsePersonDisplayNames,\n        parseThreadedCommentsXml,\n        parseWorksheetComments,\n        shiftReferenceAddress,\n        translateSharedFormula,\n        parseWorksheet\n    };\n    moduleRegistry.registerModule("worksheetParser", worksheetParserApi);\n})();\n' }, { "path": "dist/js/workbook-loader.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    function parseDefinedNames(workbookDoc, sheetNames, getTextContent) {\n        const result = [];\n        const definedNameElements = Array.from(workbookDoc.getElementsByTagName("definedName"));\n        for (const element of definedNameElements) {\n            const name = element.getAttribute("name") || "";\n            if (!name || name.startsWith("_xlnm."))\n                continue;\n            const formulaText = getTextContent(element).trim();\n            if (!formulaText)\n                continue;\n            const localSheetIdText = element.getAttribute("localSheetId");\n            const localSheetId = localSheetIdText == null || localSheetIdText === "" ? Number.NaN : Number(localSheetIdText);\n            result.push({\n                name,\n                formulaText: formulaText.startsWith("=") ? formulaText : `=${formulaText}`,\n                localSheetName: Number.isNaN(localSheetId) ? null : (sheetNames[localSheetId] || null)\n            });\n        }\n        return result;\n    }\n    async function parseWorkbook(arrayBuffer, workbookName, deps) {\n        var _a;\n        const files = await deps.unzipEntries(arrayBuffer);\n        const workbookBytes = files.get("xl/workbook.xml");\n        if (!workbookBytes) {\n            throw new Error("xl/workbook.xml was not found.");\n        }\n        const sharedStrings = deps.parseSharedStrings(files);\n        const cellStyles = deps.parseCellStyles(files);\n        const rels = deps.parseRelationships(files, "xl/_rels/workbook.xml.rels", "xl/workbook.xml");\n        const workbookDoc = deps.xmlToDocument(deps.decodeXmlText(workbookBytes));\n        const sheetNodes = Array.from(workbookDoc.getElementsByTagName("sheet"));\n        const sheetNames = sheetNodes.map((sheetNode, index) => sheetNode.getAttribute("name") || `Sheet${index + 1}`);\n        const definedNames = parseDefinedNames(workbookDoc, sheetNames, deps.getTextContent);\n        const sheets = sheetNodes.map((sheetNode, index) => {\n            const name = sheetNode.getAttribute("name") || `Sheet${index + 1}`;\n            const relId = sheetNode.getAttribute("r:id") || "";\n            const sheetPath = rels.get(relId) || "";\n            return deps.parseWorksheet(files, name, sheetPath, index + 1, sharedStrings, cellStyles);\n        });\n        const workbook = {\n            name: workbookName,\n            sheets,\n            sharedStrings,\n            definedNames\n        };\n        (_a = deps.postProcessWorkbook) === null || _a === void 0 ? void 0 : _a.call(deps, workbook);\n        return workbook;\n    }\n    const workbookLoaderApi = {\n        parseDefinedNames,\n        parseWorkbook\n    };\n    moduleRegistry.registerModule("workbookLoader", workbookLoaderApi);\n})();\n' }, { "path": "dist/js/formula-reference-utils.js", "source": `/*
 * Copyright 2026 Toshiki Iga
 * SPDX-License-Identifier: Apache-2.0
 */
(() => {
    const moduleRegistry = getXlsx2mdModuleRegistry();
    function createFormulaReferenceUtilsApi(deps) {
        function parseSimpleFormulaReference(formulaText, currentSheetName) {
            const normalizedFormula = String(formulaText || "").trim().replace(/^=/, "");
            const quotedSheetMatch = normalizedFormula.match(/^'((?:[^']|'')+)'!(\\$?[A-Z]+\\$?\\d+)$/i);
            if (quotedSheetMatch) {
                return {
                    sheetName: quotedSheetMatch[1].replace(/''/g, "'"),
                    address: deps.normalizeFormulaAddress(quotedSheetMatch[2])
                };
            }
            const sheetMatch = normalizedFormula.match(/^([^'=][^!]*)!(\\$?[A-Z]+\\$?\\d+)$/i);
            if (sheetMatch) {
                return {
                    sheetName: sheetMatch[1],
                    address: deps.normalizeFormulaAddress(sheetMatch[2])
                };
            }
            const localMatch = normalizedFormula.match(/^(\\$?[A-Z]+\\$?\\d+)$/i);
            if (localMatch) {
                return {
                    sheetName: currentSheetName,
                    address: deps.normalizeFormulaAddress(localMatch[1])
                };
            }
            return null;
        }
        function normalizeFormulaSheetName(rawName) {
            return String(rawName || "").replace(/^'/, "").replace(/'$/, "").replace(/''/g, "'");
        }
        function normalizeDefinedNameKey(name) {
            return String(name || "").trim().toUpperCase();
        }
        function parseSheetScopedDefinedNameReference(expression, currentSheetName) {
            const normalizedExpression = String(expression || "").trim();
            const quotedSheetMatch = normalizedExpression.match(/^'((?:[^']|'')+)'!([A-Za-z_][A-Za-z0-9_.]*)$/);
            if (quotedSheetMatch) {
                return {
                    sheetName: normalizeFormulaSheetName(quotedSheetMatch[1].replace(/''/g, "'")),
                    name: quotedSheetMatch[2]
                };
            }
            const sheetMatch = normalizedExpression.match(/^([^'=][^!]*)!([A-Za-z_][A-Za-z0-9_.]*)$/);
            if (!sheetMatch) {
                return null;
            }
            if (/^\\$?[A-Z]+\\$?\\d+$/i.test(sheetMatch[2])) {
                return null;
            }
            return {
                sheetName: normalizeFormulaSheetName(sheetMatch[1] || currentSheetName),
                name: sheetMatch[2]
            };
        }
        return {
            parseSimpleFormulaReference,
            parseSheetScopedDefinedNameReference,
            normalizeFormulaSheetName,
            normalizeDefinedNameKey
        };
    }
    const formulaReferenceUtilsApi = {
        createFormulaReferenceUtilsApi
    };
    moduleRegistry.registerModule("formulaReferenceUtils", formulaReferenceUtilsApi);
})();
` }, { "path": "dist/js/formula-engine.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    function createFormulaEngineApi(deps) {\n        function tryResolveFormulaExpressionDetailed(formulaText, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries, currentAddress) {\n            var _a;\n            const normalized = String(formulaText || "").trim().replace(/^=/, "");\n            if (!normalized)\n                return null;\n            const directDefinedNameValue = ((_a = deps.getDefinedNameScalarValue()) === null || _a === void 0 ? void 0 : _a(currentSheetName, normalized)) || null;\n            if (directDefinedNameValue != null) {\n                return {\n                    value: directDefinedNameValue,\n                    source: "legacy_resolver"\n                };\n            }\n            const astResolved = deps.tryResolveFormulaExpressionWithAst(normalized, currentSheetName, resolveCellValue, resolveRangeEntries, currentAddress);\n            if (astResolved != null) {\n                return {\n                    value: astResolved,\n                    source: "ast_evaluator"\n                };\n            }\n            const legacyResolved = deps.tryResolveFormulaExpressionLegacy(normalized, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (legacyResolved == null) {\n                return null;\n            }\n            return {\n                value: legacyResolved,\n                source: "legacy_resolver"\n            };\n        }\n        function tryResolveFormulaExpression(formulaText, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries, currentAddress) {\n            var _a, _b;\n            return (_b = (_a = tryResolveFormulaExpressionDetailed(formulaText, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries, currentAddress)) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null;\n        }\n        return {\n            tryResolveFormulaExpressionDetailed,\n            tryResolveFormulaExpression\n        };\n    }\n    const formulaEngineApi = {\n        createFormulaEngineApi\n    };\n    moduleRegistry.registerModule("formulaEngine", formulaEngineApi);\n})();\n' }, { "path": "dist/js/formula-legacy.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    function createFormulaLegacyApi(deps) {\n        function tryResolveFormulaExpressionLegacy(normalized, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries) {\n            const ifResult = tryResolveIfFunction(normalized, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (ifResult != null)\n                return ifResult;\n            const ifErrorResult = tryResolveIfErrorFunction(normalized, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (ifErrorResult != null)\n                return ifErrorResult;\n            const logicalResult = tryResolveLogicalFunction(normalized, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (logicalResult != null)\n                return logicalResult;\n            const concatResult = tryResolveConcatenationExpression(normalized, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (concatResult != null)\n                return concatResult;\n            const numericFunctionResult = tryResolveNumericFunction(normalized, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (numericFunctionResult != null)\n                return numericFunctionResult;\n            const datePartFunctionResult = tryResolveDatePartFunction(normalized, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (datePartFunctionResult != null)\n                return datePartFunctionResult;\n            const predicateFunctionResult = tryResolvePredicateFunction(normalized, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (predicateFunctionResult != null)\n                return predicateFunctionResult;\n            const chooseFunctionResult = tryResolveChooseFunction(normalized, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (chooseFunctionResult != null)\n                return chooseFunctionResult;\n            const textFunctionResult = tryResolveTextFunction(normalized, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (textFunctionResult != null)\n                return textFunctionResult;\n            const lookupFunctionResult = tryResolveLookupFunction(normalized, currentSheetName, resolveCellValue);\n            if (lookupFunctionResult != null)\n                return lookupFunctionResult;\n            const stringFunctionResult = tryResolveStringFunction(normalized, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (stringFunctionResult != null)\n                return stringFunctionResult;\n            const conditionalAggregateResult = tryResolveConditionalAggregateFunction(normalized, currentSheetName, resolveCellValue);\n            if (conditionalAggregateResult != null)\n                return conditionalAggregateResult;\n            const aggregateResult = tryResolveAggregateFunction(normalized, currentSheetName, resolveRangeValues, resolveRangeEntries);\n            if (aggregateResult != null)\n                return aggregateResult;\n            const comparisonResult = tryResolveComparisonExpression(normalized, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (comparisonResult != null)\n                return comparisonResult;\n            if (/:/.test(normalized)) {\n                return null;\n            }\n            const replacedRefs = normalized.replace(/(?:\'((?:[^\']|\'\')+)\'|([A-Za-z0-9_ ]+))!(\\$?[A-Z]+\\$?\\d+)|(\\$?[A-Z]+\\$?\\d+)/g, (_full, quotedSheet, plainSheet, qualifiedAddress, localAddress) => {\n                const sheetName = qualifiedAddress\n                    ? deps.normalizeFormulaSheetName(quotedSheet || plainSheet || currentSheetName)\n                    : currentSheetName;\n                const address = deps.normalizeFormulaAddress(qualifiedAddress || localAddress || "");\n                const rawValue = resolveCellValue(sheetName, address);\n                const numericValue = Number(rawValue);\n                if (rawValue === "" || Number.isNaN(numericValue)) {\n                    throw new Error("__FORMULA_UNRESOLVED__");\n                }\n                return String(numericValue);\n            });\n            const replaced = replaceNumericDefinedNames(replacedRefs, currentSheetName);\n            const replacedFunctions = replaceEmbeddedNumericFunctions(replaced, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (!/^[0-9+\\-*/().\\s]+$/.test(replacedFunctions)) {\n                return null;\n            }\n            try {\n                const value = evaluateArithmeticExpression(replacedFunctions);\n                if (!Number.isFinite(value)) {\n                    return null;\n                }\n                const rounded = Math.abs(value - Math.round(value)) < 1e-10 ? Math.round(value) : value;\n                return String(rounded);\n            }\n            catch (error) {\n                if (error instanceof Error && error.message === "__FORMULA_UNRESOLVED__") {\n                    return null;\n                }\n                return null;\n            }\n        }\n        function tryResolveIfFunction(normalizedFormula, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries) {\n            const call = parseWholeFunctionCall(normalizedFormula, ["IF"]);\n            if (!call)\n                return null;\n            const args = splitFormulaArguments(call.argsText.trim());\n            if (args.length !== 3)\n                return null;\n            const condition = evaluateFormulaCondition(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (condition == null)\n                return null;\n            return resolveScalarFormulaValue(condition ? args[1] : args[2], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n        }\n        function tryResolveIfErrorFunction(normalizedFormula, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries) {\n            const call = parseWholeFunctionCall(normalizedFormula, ["IFERROR"]);\n            if (!call)\n                return null;\n            const args = splitFormulaArguments(call.argsText.trim());\n            if (args.length !== 2)\n                return null;\n            const primary = resolveScalarFormulaValue(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (primary != null && !/^#(?:[A-Z]+\\/[A-Z]+|[A-Z]+[!?]?)/i.test(primary.trim())) {\n                return primary;\n            }\n            return resolveScalarFormulaValue(args[1], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n        }\n        function tryResolveLogicalFunction(normalizedFormula, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries) {\n            const call = parseWholeFunctionCall(normalizedFormula, ["AND", "OR", "NOT"]);\n            if (!call)\n                return null;\n            const functionName = call.name;\n            const args = splitFormulaArguments(call.argsText.trim());\n            if (functionName === "NOT") {\n                if (args.length !== 1)\n                    return null;\n                const value = evaluateFormulaCondition(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                if (value == null)\n                    return null;\n                return value ? "FALSE" : "TRUE";\n            }\n            if (args.length === 0)\n                return null;\n            const evaluations = args.map((arg) => evaluateFormulaCondition(arg, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries));\n            if (functionName === "AND") {\n                if (evaluations.some((value) => value === false))\n                    return "FALSE";\n                if (evaluations.some((value) => value == null))\n                    return null;\n                return evaluations.every(Boolean) ? "TRUE" : "FALSE";\n            }\n            if (functionName === "OR") {\n                if (evaluations.some((value) => value === true))\n                    return "TRUE";\n                if (evaluations.some((value) => value == null))\n                    return null;\n                return evaluations.some(Boolean) ? "TRUE" : "FALSE";\n            }\n            return null;\n        }\n        function tryResolveTextFunction(normalizedFormula, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries) {\n            const call = parseWholeFunctionCall(normalizedFormula, ["TEXT"]);\n            if (!call)\n                return null;\n            const args = splitFormulaArguments(call.argsText.trim());\n            if (args.length !== 2)\n                return null;\n            const value = resolveScalarFormulaValue(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            const formatText = resolveScalarFormulaValue(args[1], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (value == null || formatText == null)\n                return null;\n            return deps.cellFormat.formatTextFunctionValue(value, formatText);\n        }\n        function tryResolveLookupFunction(normalizedFormula, currentSheetName, resolveCellValue) {\n            var _a;\n            const xlookupCall = parseWholeFunctionCall(normalizedFormula, ["XLOOKUP"]);\n            if (xlookupCall) {\n                const args = splitFormulaArguments(xlookupCall.argsText.trim());\n                if (args.length < 3 || args.length > 6)\n                    return null;\n                const lookupValue = resolveScalarFormulaValue(args[0], currentSheetName, resolveCellValue);\n                const lookupRange = parseQualifiedRangeReference(args[1], currentSheetName);\n                const returnRange = parseQualifiedRangeReference(args[2], currentSheetName);\n                if (lookupValue == null || !lookupRange || !returnRange)\n                    return null;\n                const lookupCells = collectRangeCells(lookupRange, resolveCellValue);\n                const returnCells = collectRangeCells(returnRange, resolveCellValue);\n                if (lookupCells.length === 0 || lookupCells.length !== returnCells.length)\n                    return null;\n                if (args.length >= 5) {\n                    const matchMode = resolveScalarFormulaValue(args[4], currentSheetName, resolveCellValue);\n                    if (matchMode == null || !["0", ""].includes(matchMode.trim()))\n                        return null;\n                }\n                if (args.length >= 6) {\n                    const searchMode = resolveScalarFormulaValue(args[5], currentSheetName, resolveCellValue);\n                    if (searchMode == null || !["1", ""].includes(searchMode.trim()))\n                        return null;\n                }\n                for (let index = 0; index < lookupCells.length; index += 1) {\n                    const value = lookupCells[index];\n                    if (value === lookupValue || (!Number.isNaN(Number(value)) && !Number.isNaN(Number(lookupValue)) && Number(value) === Number(lookupValue))) {\n                        return (_a = returnCells[index]) !== null && _a !== void 0 ? _a : "";\n                    }\n                }\n                if (args.length >= 4) {\n                    return resolveScalarFormulaValue(args[3], currentSheetName, resolveCellValue);\n                }\n                return null;\n            }\n            const matchCall = parseWholeFunctionCall(normalizedFormula, ["MATCH"]);\n            if (matchCall) {\n                const args = splitFormulaArguments(matchCall.argsText.trim());\n                if (args.length < 2 || args.length > 3)\n                    return null;\n                const lookupValue = resolveScalarFormulaValue(args[0], currentSheetName, resolveCellValue);\n                const rangeRef = parseQualifiedRangeReference(args[1], currentSheetName);\n                if (lookupValue == null || !rangeRef)\n                    return null;\n                if (args.length === 3) {\n                    const matchType = resolveScalarFormulaValue(args[2], currentSheetName, resolveCellValue);\n                    if (matchType == null || !["0", ""].includes(matchType.trim()))\n                        return null;\n                }\n                const cells = collectRangeCells(rangeRef, resolveCellValue);\n                if (cells.length === 0)\n                    return null;\n                for (let index = 0; index < cells.length; index += 1) {\n                    const value = cells[index];\n                    if (value === lookupValue || (!Number.isNaN(Number(value)) && !Number.isNaN(Number(lookupValue)) && Number(value) === Number(lookupValue))) {\n                        return String(index + 1);\n                    }\n                }\n                return null;\n            }\n            const indexCall = parseWholeFunctionCall(normalizedFormula, ["INDEX"]);\n            if (indexCall) {\n                const args = splitFormulaArguments(indexCall.argsText.trim());\n                if (args.length < 2 || args.length > 3)\n                    return null;\n                const rangeRef = parseQualifiedRangeReference(args[0], currentSheetName);\n                const rowIndex = Number(resolveScalarFormulaValue(args[1], currentSheetName, resolveCellValue));\n                const colIndex = args.length === 3\n                    ? Number(resolveScalarFormulaValue(args[2], currentSheetName, resolveCellValue))\n                    : 1;\n                if (!rangeRef || Number.isNaN(rowIndex) || Number.isNaN(colIndex) || rowIndex < 1 || colIndex < 1)\n                    return null;\n                const start = deps.parseCellAddress(rangeRef.start);\n                const end = deps.parseCellAddress(rangeRef.end);\n                if (!start.row || !start.col || !end.row || !end.col)\n                    return null;\n                const startRow = Math.min(start.row, end.row);\n                const endRow = Math.max(start.row, end.row);\n                const startCol = Math.min(start.col, end.col);\n                const endCol = Math.max(start.col, end.col);\n                const targetRow = startRow + Math.trunc(rowIndex) - 1;\n                const targetCol = startCol + Math.trunc(colIndex) - 1;\n                if (targetRow > endRow || targetCol > endCol)\n                    return null;\n                return resolveCellValue(rangeRef.sheetName, `${deps.colToLetters(targetCol)}${targetRow}`);\n            }\n            const hlookupCall = parseWholeFunctionCall(normalizedFormula, ["HLOOKUP"]);\n            if (hlookupCall) {\n                const args = splitFormulaArguments(hlookupCall.argsText.trim());\n                if (args.length < 3 || args.length > 4)\n                    return null;\n                const lookupValue = resolveScalarFormulaValue(args[0], currentSheetName, resolveCellValue);\n                const rangeRef = parseQualifiedRangeReference(args[1], currentSheetName);\n                const rowIndex = Number(resolveScalarFormulaValue(args[2], currentSheetName, resolveCellValue));\n                if (lookupValue == null || !rangeRef || Number.isNaN(rowIndex) || rowIndex < 1)\n                    return null;\n                if (args.length === 4) {\n                    const rangeLookup = resolveScalarFormulaValue(args[3], currentSheetName, resolveCellValue);\n                    if (rangeLookup == null)\n                        return null;\n                    const normalizedLookup = rangeLookup.trim().toUpperCase();\n                    if (!(normalizedLookup === "FALSE" || normalizedLookup === "0" || normalizedLookup === ""))\n                        return null;\n                }\n                const start = deps.parseCellAddress(rangeRef.start);\n                const end = deps.parseCellAddress(rangeRef.end);\n                if (!start.row || !start.col || !end.row || !end.col)\n                    return null;\n                const startRow = Math.min(start.row, end.row);\n                const endRow = Math.max(start.row, end.row);\n                const startCol = Math.min(start.col, end.col);\n                const endCol = Math.max(start.col, end.col);\n                const targetRow = startRow + Math.trunc(rowIndex) - 1;\n                if (targetRow > endRow)\n                    return null;\n                for (let col = startCol; col <= endCol; col += 1) {\n                    const keyValue = resolveCellValue(rangeRef.sheetName, `${deps.colToLetters(col)}${startRow}`);\n                    if (keyValue === "")\n                        continue;\n                    if (keyValue === lookupValue || (!Number.isNaN(Number(keyValue)) && !Number.isNaN(Number(lookupValue)) && Number(keyValue) === Number(lookupValue))) {\n                        return resolveCellValue(rangeRef.sheetName, `${deps.colToLetters(col)}${targetRow}`);\n                    }\n                }\n                return null;\n            }\n            const call = parseWholeFunctionCall(normalizedFormula, ["VLOOKUP"]);\n            if (!call)\n                return null;\n            const args = splitFormulaArguments(call.argsText.trim());\n            if (args.length < 3 || args.length > 4)\n                return null;\n            const lookupValue = resolveScalarFormulaValue(args[0], currentSheetName, resolveCellValue);\n            const rangeRef = parseQualifiedRangeReference(args[1], currentSheetName);\n            const columnIndex = Number(resolveScalarFormulaValue(args[2], currentSheetName, resolveCellValue));\n            if (lookupValue == null || !rangeRef || Number.isNaN(columnIndex) || columnIndex < 1)\n                return null;\n            if (args.length === 4) {\n                const rangeLookup = resolveScalarFormulaValue(args[3], currentSheetName, resolveCellValue);\n                if (rangeLookup == null)\n                    return null;\n                const normalizedLookup = rangeLookup.trim().toUpperCase();\n                if (!(normalizedLookup === "FALSE" || normalizedLookup === "0" || normalizedLookup === ""))\n                    return null;\n            }\n            const start = deps.parseCellAddress(rangeRef.start);\n            const end = deps.parseCellAddress(rangeRef.end);\n            if (!start.row || !start.col || !end.row || !end.col)\n                return null;\n            const startRow = Math.min(start.row, end.row);\n            const endRow = Math.max(start.row, end.row);\n            const startCol = Math.min(start.col, end.col);\n            const endCol = Math.max(start.col, end.col);\n            const targetCol = startCol + Math.trunc(columnIndex) - 1;\n            if (targetCol > endCol)\n                return null;\n            for (let row = startRow; row <= endRow; row += 1) {\n                const keyValue = resolveCellValue(rangeRef.sheetName, `${deps.colToLetters(startCol)}${row}`);\n                if (keyValue === "")\n                    continue;\n                if (keyValue === lookupValue || (!Number.isNaN(Number(keyValue)) && !Number.isNaN(Number(lookupValue)) && Number(keyValue) === Number(lookupValue))) {\n                    return resolveCellValue(rangeRef.sheetName, `${deps.colToLetters(targetCol)}${row}`);\n                }\n            }\n            return null;\n        }\n        function tryResolveDatePartFunction(normalizedFormula, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries) {\n            const call = parseWholeFunctionCall(normalizedFormula, ["YEAR", "MONTH", "DAY", "WEEKDAY"]);\n            if (!call)\n                return null;\n            const fnName = call.name;\n            const args = splitFormulaArguments(call.argsText.trim());\n            if ((fnName === "WEEKDAY" && (args.length < 1 || args.length > 2)) || (fnName !== "WEEKDAY" && args.length !== 1)) {\n                return null;\n            }\n            const value = resolveScalarFormulaValue(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (value == null)\n                return null;\n            const parts = deps.cellFormat.parseDateLikeParts(value);\n            if (!parts)\n                return null;\n            if (fnName === "YEAR")\n                return String(Number(parts.yyyy));\n            if (fnName === "MONTH")\n                return String(Number(parts.mm));\n            if (fnName === "DAY")\n                return String(Number(parts.dd));\n            const returnType = args.length === 2\n                ? resolveNumericFormulaArgument(args[1], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries)\n                : 1;\n            if (returnType == null)\n                return null;\n            const weekday = new Date(Date.UTC(Number(parts.yyyy), Number(parts.mm) - 1, Number(parts.dd))).getUTCDay();\n            return Math.trunc(returnType) === 2\n                ? String(weekday === 0 ? 7 : weekday)\n                : String(weekday + 1);\n        }\n        function tryResolvePredicateFunction(normalizedFormula, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries) {\n            const call = parseWholeFunctionCall(normalizedFormula, ["ISBLANK", "ISNUMBER", "ISTEXT", "ISERROR", "ISNA"]);\n            if (!call)\n                return null;\n            const fnName = call.name;\n            const args = splitFormulaArguments(call.argsText.trim());\n            if (args.length !== 1)\n                return null;\n            if (fnName === "ISBLANK") {\n                const simpleRef = deps.parseSimpleFormulaReference(`=${args[0].trim()}`, currentSheetName);\n                if (simpleRef) {\n                    const value = resolveCellValue(simpleRef.sheetName, simpleRef.address);\n                    return value.trim() === "" ? "TRUE" : "FALSE";\n                }\n                const value = resolveScalarFormulaValue(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                return value == null || value.trim() === "" ? "TRUE" : "FALSE";\n            }\n            const value = resolveScalarFormulaValue(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (fnName === "ISERROR") {\n                if (value == null)\n                    return "TRUE";\n                return /^#(?:[A-Z]+\\/[A-Z]+|[A-Z]+[!?]?)/i.test(value.trim()) ? "TRUE" : "FALSE";\n            }\n            if (fnName === "ISNA") {\n                if (/^\\s*VLOOKUP\\(/i.test(args[0]))\n                    return value == null ? "TRUE" : "FALSE";\n                if (value == null)\n                    return "FALSE";\n                return /^#N\\/A$/i.test(value.trim()) ? "TRUE" : "FALSE";\n            }\n            if (value == null)\n                return "FALSE";\n            if (fnName === "ISNUMBER") {\n                if (value.trim() === "")\n                    return "FALSE";\n                return !Number.isNaN(Number(value)) ? "TRUE" : "FALSE";\n            }\n            if (fnName === "ISTEXT") {\n                const normalized = value.trim().toUpperCase();\n                if (normalized === "" || normalized === "TRUE" || normalized === "FALSE")\n                    return "FALSE";\n                return Number.isNaN(Number(value)) ? "TRUE" : "FALSE";\n            }\n            return null;\n        }\n        function tryResolveChooseFunction(normalizedFormula, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries) {\n            const call = parseWholeFunctionCall(normalizedFormula, ["CHOOSE"]);\n            if (!call)\n                return null;\n            const args = splitFormulaArguments(call.argsText.trim());\n            if (args.length < 2)\n                return null;\n            const indexValue = resolveNumericFormulaArgument(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (indexValue == null)\n                return null;\n            const index = Math.trunc(indexValue);\n            if (index < 1 || index >= args.length)\n                return null;\n            return resolveScalarFormulaValue(args[index], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n        }\n        function tryResolveConcatenationExpression(normalizedFormula, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries) {\n            const segments = splitConcatenationExpression(normalizedFormula);\n            if (!segments || segments.length < 2)\n                return null;\n            const values = [];\n            for (const segment of segments) {\n                const resolved = resolveScalarFormulaValue(segment, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                if (resolved == null)\n                    return null;\n                values.push(resolved);\n            }\n            return values.join("");\n        }\n        function evaluateFormulaCondition(expression, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries) {\n            const logical = tryResolveLogicalFunction(expression.trim(), currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (logical != null)\n                return logical === "TRUE";\n            const comparison = tryResolveComparisonExpression(expression, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (comparison != null)\n                return comparison === "TRUE";\n            const scalar = resolveScalarFormulaValue(expression, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (scalar == null)\n                return null;\n            const normalized = scalar.trim().toUpperCase();\n            if (normalized === "TRUE")\n                return true;\n            if (normalized === "FALSE")\n                return false;\n            const numeric = Number(scalar);\n            return Number.isNaN(numeric) ? scalar.trim() !== "" : numeric !== 0;\n        }\n        function tryResolveComparisonExpression(normalizedFormula, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries) {\n            const comparison = splitComparisonExpression(normalizedFormula);\n            if (!comparison)\n                return null;\n            const left = resolveScalarFormulaValue(comparison.left, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            const right = resolveScalarFormulaValue(comparison.right, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (left == null || right == null)\n                return null;\n            const leftNum = Number(left);\n            const rightNum = Number(right);\n            const numericComparable = !Number.isNaN(leftNum) && !Number.isNaN(rightNum);\n            let result = false;\n            if (comparison.operator === "=") {\n                result = numericComparable ? leftNum === rightNum : left === right;\n            }\n            else if (comparison.operator === "<>") {\n                result = numericComparable ? leftNum !== rightNum : left !== right;\n            }\n            else if (!numericComparable) {\n                return null;\n            }\n            else if (comparison.operator === ">") {\n                result = leftNum > rightNum;\n            }\n            else if (comparison.operator === "<") {\n                result = leftNum < rightNum;\n            }\n            else if (comparison.operator === ">=") {\n                result = leftNum >= rightNum;\n            }\n            else if (comparison.operator === "<=") {\n                result = leftNum <= rightNum;\n            }\n            return result ? "TRUE" : "FALSE";\n        }\n        function splitComparisonExpression(expression) {\n            const operators = ["<=", ">=", "<>", "=", ">", "<"];\n            let depth = 0;\n            let inSingleQuote = false;\n            let inDoubleQuote = false;\n            for (let i = 0; i < expression.length; i += 1) {\n                const ch = expression[i];\n                if (ch === "\'" && !inDoubleQuote) {\n                    inSingleQuote = !inSingleQuote;\n                    continue;\n                }\n                if (ch === "\\"" && !inSingleQuote) {\n                    inDoubleQuote = !inDoubleQuote;\n                    continue;\n                }\n                if (inSingleQuote || inDoubleQuote)\n                    continue;\n                if (ch === "(") {\n                    depth += 1;\n                    continue;\n                }\n                if (ch === ")") {\n                    depth = Math.max(0, depth - 1);\n                    continue;\n                }\n                if (depth !== 0)\n                    continue;\n                for (const operator of operators) {\n                    if (expression.slice(i, i + operator.length) === operator) {\n                        return {\n                            left: expression.slice(0, i).trim(),\n                            operator,\n                            right: expression.slice(i + operator.length).trim()\n                        };\n                    }\n                }\n            }\n            return null;\n        }\n        function findTopLevelOperatorIndex(expression, operator) {\n            const target = String(operator || "");\n            if (!target)\n                return -1;\n            let depth = 0;\n            let inSingleQuote = false;\n            let inDoubleQuote = false;\n            for (let i = 0; i <= expression.length - target.length; i += 1) {\n                const ch = expression[i];\n                if (ch === "\'" && !inDoubleQuote) {\n                    inSingleQuote = !inSingleQuote;\n                    continue;\n                }\n                if (ch === "\\"" && !inSingleQuote) {\n                    inDoubleQuote = !inDoubleQuote;\n                    continue;\n                }\n                if (inSingleQuote || inDoubleQuote)\n                    continue;\n                if (ch === "(") {\n                    depth += 1;\n                    continue;\n                }\n                if (ch === ")") {\n                    depth = Math.max(0, depth - 1);\n                    continue;\n                }\n                if (depth === 0 && expression.slice(i, i + target.length) === target) {\n                    return i;\n                }\n            }\n            return -1;\n        }\n        function splitConcatenationExpression(expression) {\n            const parts = [];\n            let start = 0;\n            let depth = 0;\n            let inSingleQuote = false;\n            let inDoubleQuote = false;\n            for (let i = 0; i < expression.length; i += 1) {\n                const ch = expression[i];\n                if (ch === "\'" && !inDoubleQuote) {\n                    inSingleQuote = !inSingleQuote;\n                    continue;\n                }\n                if (ch === "\\"" && !inSingleQuote) {\n                    inDoubleQuote = !inDoubleQuote;\n                    continue;\n                }\n                if (inSingleQuote || inDoubleQuote)\n                    continue;\n                if (ch === "(") {\n                    depth += 1;\n                    continue;\n                }\n                if (ch === ")") {\n                    depth = Math.max(0, depth - 1);\n                    continue;\n                }\n                if (depth === 0 && ch === "&") {\n                    parts.push(expression.slice(start, i).trim());\n                    start = i + 1;\n                }\n            }\n            if (parts.length === 0)\n                return null;\n            parts.push(expression.slice(start).trim());\n            return parts.every(Boolean) ? parts : null;\n        }\n        function parseWholeFunctionCall(expression, allowedNames) {\n            const trimmed = String(expression || "").trim();\n            const nameMatch = trimmed.match(/^([A-Z][A-Z0-9]*)\\(/i);\n            if (!nameMatch)\n                return null;\n            const name = nameMatch[1].toUpperCase();\n            if (!allowedNames.includes(name))\n                return null;\n            let depth = 0;\n            let inSingleQuote = false;\n            let inDoubleQuote = false;\n            for (let i = name.length; i < trimmed.length; i += 1) {\n                const ch = trimmed[i];\n                if (ch === "\'" && !inDoubleQuote) {\n                    inSingleQuote = !inSingleQuote;\n                    continue;\n                }\n                if (ch === "\\"" && !inSingleQuote) {\n                    inDoubleQuote = !inDoubleQuote;\n                    continue;\n                }\n                if (inSingleQuote || inDoubleQuote)\n                    continue;\n                if (ch === "(") {\n                    depth += 1;\n                    continue;\n                }\n                if (ch !== ")")\n                    continue;\n                depth -= 1;\n                if (depth > 0)\n                    continue;\n                if (depth < 0 || i !== trimmed.length - 1)\n                    return null;\n                return {\n                    name,\n                    argsText: trimmed.slice(name.length + 1, i)\n                };\n            }\n            return null;\n        }\n        function replaceNumericDefinedNames(expression, currentSheetName) {\n            var _a;\n            let result = "";\n            let i = 0;\n            let inSingleQuote = false;\n            let inDoubleQuote = false;\n            while (i < expression.length) {\n                const ch = expression[i];\n                if (ch === "\'" && !inDoubleQuote) {\n                    inSingleQuote = !inSingleQuote;\n                    result += ch;\n                    i += 1;\n                    continue;\n                }\n                if (ch === "\\"" && !inSingleQuote) {\n                    inDoubleQuote = !inDoubleQuote;\n                    result += ch;\n                    i += 1;\n                    continue;\n                }\n                if (inSingleQuote || inDoubleQuote) {\n                    result += ch;\n                    i += 1;\n                    continue;\n                }\n                if (!/[\\p{L}_]/u.test(ch)) {\n                    result += ch;\n                    i += 1;\n                    continue;\n                }\n                const start = i;\n                i += 1;\n                while (i < expression.length && /[\\p{L}\\p{N}_.]/u.test(expression[i])) {\n                    i += 1;\n                }\n                const token = expression.slice(start, i);\n                if ((expression[i] || "") === "(") {\n                    result += token;\n                    continue;\n                }\n                const scalar = ((_a = deps.getDefinedNameScalarValue()) === null || _a === void 0 ? void 0 : _a(currentSheetName, token)) || null;\n                if (scalar != null) {\n                    const numeric = Number(scalar);\n                    if (!Number.isNaN(numeric)) {\n                        result += String(numeric);\n                        continue;\n                    }\n                }\n                result += token;\n            }\n            return result;\n        }\n        function replaceEmbeddedNumericFunctions(expression, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries) {\n            let current = expression;\n            let changed = true;\n            while (changed) {\n                changed = false;\n                current = current.replace(/[A-Z][A-Z0-9]*\\([^()]*\\)/gi, (segment) => {\n                    var _a, _b, _c, _d;\n                    const resolved = (_d = (_c = (_b = (_a = tryResolveNumericFunction(segment, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries)) !== null && _a !== void 0 ? _a : tryResolveDatePartFunction(segment, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries)) !== null && _b !== void 0 ? _b : tryResolveAggregateFunction(segment, currentSheetName, resolveRangeValues, resolveRangeEntries)) !== null && _c !== void 0 ? _c : tryResolveConditionalAggregateFunction(segment, currentSheetName, resolveCellValue)) !== null && _d !== void 0 ? _d : tryResolveLookupFunction(segment, currentSheetName, resolveCellValue);\n                    if (resolved == null)\n                        return segment;\n                    const numericValue = Number(resolved);\n                    if (Number.isNaN(numericValue))\n                        return segment;\n                    changed = true;\n                    return String(numericValue);\n                });\n            }\n            return current;\n        }\n        function resolveScalarFormulaValue(expression, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries) {\n            var _a, _b;\n            const trimmed = String(expression || "").trim();\n            if (!trimmed)\n                return null;\n            const quotedString = trimmed.match(/^"(.*)"$/);\n            if (quotedString) {\n                return quotedString[1].replace(/""/g, "\\"");\n            }\n            const numeric = Number(trimmed);\n            if (!Number.isNaN(numeric)) {\n                return String(numeric);\n            }\n            const simpleRef = deps.parseSimpleFormulaReference(`=${trimmed}`, currentSheetName);\n            if (simpleRef) {\n                return resolveCellValue(simpleRef.sheetName, simpleRef.address);\n            }\n            const scopedDefinedNameRef = deps.parseSheetScopedDefinedNameReference(trimmed, currentSheetName);\n            if (scopedDefinedNameRef) {\n                const scopedValue = ((_a = deps.getDefinedNameScalarValue()) === null || _a === void 0 ? void 0 : _a(scopedDefinedNameRef.sheetName, scopedDefinedNameRef.name)) || null;\n                if (scopedValue != null)\n                    return scopedValue;\n            }\n            const definedNameValue = ((_b = deps.getDefinedNameScalarValue()) === null || _b === void 0 ? void 0 : _b(currentSheetName, trimmed)) || null;\n            if (definedNameValue != null)\n                return definedNameValue;\n            if (/^(TRUE|FALSE)$/i.test(trimmed)) {\n                return trimmed.toUpperCase();\n            }\n            return deps.tryResolveFormulaExpression(`=${trimmed}`, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n        }\n        function tryResolveAggregateFunction(normalizedFormula, currentSheetName, resolveRangeValues, resolveRangeEntries) {\n            if (!resolveRangeValues || !resolveRangeEntries)\n                return null;\n            const call = parseWholeFunctionCall(normalizedFormula, ["SUM", "AVERAGE", "MIN", "MAX", "COUNT", "COUNTA"]);\n            if (!call)\n                return null;\n            const fnName = call.name;\n            const args = splitFormulaArguments(call.argsText.trim());\n            if (args.length === 0)\n                return null;\n            const resolvedArgs = args.map((arg) => resolveAggregateArgument(arg, currentSheetName, resolveRangeValues, resolveRangeEntries));\n            if (resolvedArgs.some((entry) => entry == null))\n                return null;\n            const values = resolvedArgs.flatMap((entry) => (entry === null || entry === void 0 ? void 0 : entry.numericValues) || []);\n            const valueCount = resolvedArgs.reduce((sum, entry) => sum + ((entry === null || entry === void 0 ? void 0 : entry.valueCount) || 0), 0);\n            if ((fnName !== "COUNTA" && values.length === 0) || valueCount === 0)\n                return null;\n            if (fnName === "SUM")\n                return String(values.reduce((sum, value) => sum + value, 0));\n            if (fnName === "AVERAGE")\n                return String(values.reduce((sum, value) => sum + value, 0) / values.length);\n            if (fnName === "MIN")\n                return String(Math.min(...values));\n            if (fnName === "MAX")\n                return String(Math.max(...values));\n            if (fnName === "COUNT")\n                return String(values.length);\n            if (fnName === "COUNTA")\n                return String(valueCount);\n            return null;\n        }\n        function tryResolveConditionalAggregateFunction(normalizedFormula, currentSheetName, resolveCellValue) {\n            const averageifsCall = parseWholeFunctionCall(normalizedFormula, ["AVERAGEIFS"]);\n            if (averageifsCall) {\n                const args = splitFormulaArguments(averageifsCall.argsText.trim());\n                if (args.length < 3 || args.length % 2 === 0)\n                    return null;\n                const averageRange = parseQualifiedRangeReference(args[0], currentSheetName);\n                if (!averageRange)\n                    return null;\n                const averageCells = collectRangeCells(averageRange, resolveCellValue);\n                if (averageCells.length === 0)\n                    return null;\n                const rangeCriteriaPairs = [];\n                for (let index = 1; index < args.length; index += 2) {\n                    const rangeRef = parseQualifiedRangeReference(args[index], currentSheetName);\n                    const criteria = resolveScalarFormulaValue(args[index + 1], currentSheetName, resolveCellValue);\n                    if (!rangeRef || criteria == null)\n                        return null;\n                    const cells = collectRangeCells(rangeRef, resolveCellValue);\n                    if (cells.length !== averageCells.length)\n                        return null;\n                    rangeCriteriaPairs.push({ cells, criteria });\n                }\n                let sum = 0;\n                let count = 0;\n                for (let i = 0; i < averageCells.length; i += 1) {\n                    if (!rangeCriteriaPairs.every((entry) => matchesCountIfCriteria(entry.cells[i], entry.criteria)))\n                        continue;\n                    const numeric = Number(averageCells[i]);\n                    if (!Number.isNaN(numeric)) {\n                        sum += numeric;\n                        count += 1;\n                    }\n                }\n                return count > 0 ? String(sum / count) : null;\n            }\n            const sumifsCall = parseWholeFunctionCall(normalizedFormula, ["SUMIFS"]);\n            if (sumifsCall) {\n                const args = splitFormulaArguments(sumifsCall.argsText.trim());\n                if (args.length < 3 || args.length % 2 === 0)\n                    return null;\n                const sumRange = parseQualifiedRangeReference(args[0], currentSheetName);\n                if (!sumRange)\n                    return null;\n                const sumCells = collectRangeCells(sumRange, resolveCellValue);\n                if (sumCells.length === 0)\n                    return null;\n                const rangeCriteriaPairs = [];\n                for (let index = 1; index < args.length; index += 2) {\n                    const rangeRef = parseQualifiedRangeReference(args[index], currentSheetName);\n                    const criteria = resolveScalarFormulaValue(args[index + 1], currentSheetName, resolveCellValue);\n                    if (!rangeRef || criteria == null)\n                        return null;\n                    const cells = collectRangeCells(rangeRef, resolveCellValue);\n                    if (cells.length !== sumCells.length)\n                        return null;\n                    rangeCriteriaPairs.push({ cells, criteria });\n                }\n                let sum = 0;\n                for (let i = 0; i < sumCells.length; i += 1) {\n                    if (!rangeCriteriaPairs.every((entry) => matchesCountIfCriteria(entry.cells[i], entry.criteria)))\n                        continue;\n                    const numeric = Number(sumCells[i]);\n                    if (!Number.isNaN(numeric)) {\n                        sum += numeric;\n                    }\n                }\n                return String(sum);\n            }\n            const countifsCall = parseWholeFunctionCall(normalizedFormula, ["COUNTIFS"]);\n            if (countifsCall) {\n                const args = splitFormulaArguments(countifsCall.argsText.trim());\n                if (args.length < 2 || args.length % 2 !== 0)\n                    return null;\n                const rangeCriteriaPairs = [];\n                for (let index = 0; index < args.length; index += 2) {\n                    const rangeRef = parseQualifiedRangeReference(args[index], currentSheetName);\n                    const criteria = resolveScalarFormulaValue(args[index + 1], currentSheetName, resolveCellValue);\n                    if (!rangeRef || criteria == null)\n                        return null;\n                    const cells = collectRangeCells(rangeRef, resolveCellValue);\n                    if (cells.length === 0)\n                        return null;\n                    rangeCriteriaPairs.push({ cells, criteria });\n                }\n                const length = rangeCriteriaPairs[0].cells.length;\n                if (rangeCriteriaPairs.some((entry) => entry.cells.length !== length))\n                    return null;\n                let count = 0;\n                for (let i = 0; i < length; i += 1) {\n                    if (rangeCriteriaPairs.every((entry) => matchesCountIfCriteria(entry.cells[i], entry.criteria))) {\n                        count += 1;\n                    }\n                }\n                return String(count);\n            }\n            const call = parseWholeFunctionCall(normalizedFormula, ["COUNTIF", "SUMIF", "AVERAGEIF"]);\n            if (!call)\n                return null;\n            const fnName = call.name;\n            const args = splitFormulaArguments(call.argsText.trim());\n            if ((fnName === "COUNTIF" && args.length !== 2) || ((fnName === "SUMIF" || fnName === "AVERAGEIF") && args.length !== 2 && args.length !== 3)) {\n                return null;\n            }\n            const criteriaRange = parseQualifiedRangeReference(args[0], currentSheetName);\n            if (!criteriaRange)\n                return null;\n            const criteria = resolveScalarFormulaValue(args[1], currentSheetName, resolveCellValue);\n            if (criteria == null)\n                return null;\n            const criteriaCells = collectRangeCells(criteriaRange, resolveCellValue);\n            if (criteriaCells.length === 0)\n                return null;\n            const sumRange = fnName === "COUNTIF"\n                ? criteriaRange\n                : parseQualifiedRangeReference(args[2] || args[0], currentSheetName);\n            if (!sumRange)\n                return null;\n            const sumCells = collectRangeCells(sumRange, resolveCellValue);\n            if (sumCells.length !== criteriaCells.length)\n                return null;\n            let count = 0;\n            let sum = 0;\n            for (let i = 0; i < criteriaCells.length; i += 1) {\n                if (!matchesCountIfCriteria(criteriaCells[i], criteria))\n                    continue;\n                count += 1;\n                const numeric = Number(sumCells[i]);\n                if (!Number.isNaN(numeric)) {\n                    sum += numeric;\n                }\n            }\n            if (fnName === "COUNTIF")\n                return String(count);\n            if (fnName === "SUMIF")\n                return String(sum);\n            return count > 0 ? String(sum / count) : null;\n        }\n        function tryResolveNumericFunction(normalizedFormula, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries) {\n            const call = parseWholeFunctionCall(normalizedFormula, ["ROUND", "ROUNDUP", "ROUNDDOWN", "INT", "DATE", "VALUE", "DATEVALUE", "ROW", "COLUMN", "EOMONTH"]);\n            if (!call)\n                return null;\n            const fnName = call.name;\n            const args = splitFormulaArguments(call.argsText.trim());\n            if (fnName === "ROW" || fnName === "COLUMN") {\n                if (args.length !== 1)\n                    return null;\n                const rangeRef = parseQualifiedRangeReference(args[0], currentSheetName);\n                if (rangeRef) {\n                    const start = deps.parseCellAddress(rangeRef.start);\n                    if (!start.row || !start.col)\n                        return null;\n                    return String(fnName === "ROW" ? start.row : start.col);\n                }\n                const simpleRef = deps.parseSimpleFormulaReference(`=${args[0]}`, currentSheetName);\n                if (!simpleRef)\n                    return null;\n                const parsed = deps.parseCellAddress(simpleRef.address);\n                if (!parsed.row || !parsed.col)\n                    return null;\n                return String(fnName === "ROW" ? parsed.row : parsed.col);\n            }\n            if (fnName === "VALUE" || fnName === "DATEVALUE") {\n                if (args.length !== 1)\n                    return null;\n                const source = resolveScalarFormulaValue(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                if (source == null)\n                    return null;\n                const parsed = deps.cellFormat.parseValueFunctionText(source);\n                return parsed == null ? null : String(parsed);\n            }\n            if (fnName === "DATE") {\n                if (args.length !== 3)\n                    return null;\n                const year = resolveNumericFormulaArgument(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                const month = resolveNumericFormulaArgument(args[1], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                const day = resolveNumericFormulaArgument(args[2], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                if (year == null || month == null || day == null)\n                    return null;\n                const serial = deps.cellFormat.datePartsToExcelSerial(Math.trunc(year), Math.trunc(month), Math.trunc(day));\n                return serial == null ? null : String(serial);\n            }\n            if (fnName === "EOMONTH") {\n                if (args.length !== 2)\n                    return null;\n                const startValue = resolveScalarFormulaValue(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                const monthOffset = resolveNumericFormulaArgument(args[1], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                if (startValue == null || monthOffset == null)\n                    return null;\n                const parts = deps.cellFormat.parseDateLikeParts(startValue);\n                if (!parts)\n                    return null;\n                const baseYear = Number(parts.yyyy);\n                const baseMonthIndex = Number(parts.mm) - 1 + Math.trunc(monthOffset);\n                const targetYear = baseYear + Math.floor(baseMonthIndex / 12);\n                const targetMonth = ((baseMonthIndex % 12) + 12) % 12 + 1;\n                const serial = deps.cellFormat.datePartsToExcelSerial(targetYear, targetMonth + 1, 0);\n                return serial == null ? null : String(serial);\n            }\n            if (fnName === "INT") {\n                if (args.length !== 1)\n                    return null;\n                const value = resolveNumericFormulaArgument(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                if (value == null)\n                    return null;\n                return String(Math.floor(value));\n            }\n            if (args.length !== 2)\n                return null;\n            const value = resolveNumericFormulaArgument(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            const digits = resolveNumericFormulaArgument(args[1], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (value == null || digits == null)\n                return null;\n            const roundedDigits = Math.trunc(digits);\n            const factor = 10 ** roundedDigits;\n            if (!Number.isFinite(factor) || factor === 0)\n                return null;\n            if (fnName === "ROUND")\n                return String(Math.round(value * factor) / factor);\n            if (fnName === "ROUNDUP") {\n                const scaled = value * factor;\n                return String((scaled >= 0 ? Math.ceil(scaled) : Math.floor(scaled)) / factor);\n            }\n            if (fnName === "ROUNDDOWN") {\n                const scaled = value * factor;\n                return String((scaled >= 0 ? Math.floor(scaled) : Math.ceil(scaled)) / factor);\n            }\n            return null;\n        }\n        function tryResolveStringFunction(normalizedFormula, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries) {\n            const call = parseWholeFunctionCall(normalizedFormula, ["LEFT", "RIGHT", "MID", "LEN", "TRIM", "SUBSTITUTE", "REPLACE", "REPT"]);\n            if (!call)\n                return null;\n            const fnName = call.name;\n            const args = splitFormulaArguments(call.argsText.trim());\n            if (fnName === "LEN" || fnName === "TRIM") {\n                if (args.length !== 1)\n                    return null;\n                const source = resolveScalarFormulaValue(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                if (source == null)\n                    return null;\n                return fnName === "LEN" ? String(source.length) : source.trim().replace(/\\s+/g, " ");\n            }\n            if (fnName === "LEFT" || fnName === "RIGHT") {\n                if (args.length < 1 || args.length > 2)\n                    return null;\n                const source = resolveScalarFormulaValue(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                if (source == null)\n                    return null;\n                const count = args.length === 2\n                    ? resolveNumericFormulaArgument(args[1], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries)\n                    : 1;\n                if (count == null)\n                    return null;\n                const length = Math.max(0, Math.trunc(count));\n                return fnName === "LEFT" ? source.slice(0, length) : source.slice(Math.max(0, source.length - length));\n            }\n            if (fnName === "MID") {\n                if (args.length !== 3)\n                    return null;\n                const source = resolveScalarFormulaValue(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                const start = resolveNumericFormulaArgument(args[1], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                const count = resolveNumericFormulaArgument(args[2], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                if (source == null || start == null || count == null)\n                    return null;\n                const startIndex = Math.max(0, Math.trunc(start) - 1);\n                const length = Math.max(0, Math.trunc(count));\n                return source.slice(startIndex, startIndex + length);\n            }\n            if (fnName === "SUBSTITUTE") {\n                if (args.length < 3 || args.length > 4)\n                    return null;\n                const source = resolveScalarFormulaValue(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                const oldText = resolveScalarFormulaValue(args[1], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                const newText = resolveScalarFormulaValue(args[2], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                if (source == null || oldText == null || newText == null || oldText === "")\n                    return null;\n                if (args.length === 3)\n                    return source.split(oldText).join(newText);\n                const instanceNum = resolveNumericFormulaArgument(args[3], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                if (instanceNum == null)\n                    return null;\n                const targetIndex = Math.trunc(instanceNum);\n                if (targetIndex <= 0)\n                    return source;\n                let occurrence = 0;\n                let cursor = 0;\n                let result = "";\n                while (cursor < source.length) {\n                    const found = source.indexOf(oldText, cursor);\n                    if (found === -1) {\n                        result += source.slice(cursor);\n                        break;\n                    }\n                    occurrence += 1;\n                    result += source.slice(cursor, found);\n                    if (occurrence === targetIndex) {\n                        result += newText;\n                        result += source.slice(found + oldText.length);\n                        return result;\n                    }\n                    result += oldText;\n                    cursor = found + oldText.length;\n                }\n                return result || source;\n            }\n            if (fnName === "REPLACE") {\n                if (args.length !== 4)\n                    return null;\n                const source = resolveScalarFormulaValue(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                const start = resolveNumericFormulaArgument(args[1], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                const count = resolveNumericFormulaArgument(args[2], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                const replacement = resolveScalarFormulaValue(args[3], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                if (source == null || start == null || count == null || replacement == null)\n                    return null;\n                const startIndex = Math.max(0, Math.trunc(start) - 1);\n                const length = Math.max(0, Math.trunc(count));\n                return source.slice(0, startIndex) + replacement + source.slice(startIndex + length);\n            }\n            if (fnName === "REPT") {\n                if (args.length !== 2)\n                    return null;\n                const source = resolveScalarFormulaValue(args[0], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                const countValue = resolveScalarFormulaValue(args[1], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                if (source == null)\n                    return null;\n                const normalizedCount = countValue == null\n                    ? (() => {\n                        const evaluatedCondition = evaluateFormulaCondition(args[1], currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n                        if (evaluatedCondition == null)\n                            return null;\n                        return evaluatedCondition ? "TRUE" : "FALSE";\n                    })()\n                    : countValue.trim().toUpperCase();\n                if (normalizedCount == null)\n                    return null;\n                const count = normalizedCount === "TRUE"\n                    ? 1\n                    : normalizedCount === "FALSE"\n                        ? 0\n                        : Number(countValue);\n                if (!Number.isFinite(count))\n                    return null;\n                return source.repeat(Math.max(0, Math.trunc(count)));\n            }\n            return null;\n        }\n        function splitFormulaArguments(argText) {\n            const args = [];\n            let current = "";\n            let depth = 0;\n            let inSingleQuote = false;\n            let inDoubleQuote = false;\n            for (let i = 0; i < argText.length; i += 1) {\n                const ch = argText[i];\n                if (ch === "\'" && !inDoubleQuote) {\n                    inSingleQuote = !inSingleQuote;\n                    current += ch;\n                    continue;\n                }\n                if (ch === "\\"" && !inSingleQuote) {\n                    inDoubleQuote = !inDoubleQuote;\n                    current += ch;\n                    continue;\n                }\n                if (!inSingleQuote && !inDoubleQuote) {\n                    if (ch === "(") {\n                        depth += 1;\n                    }\n                    else if (ch === ")") {\n                        depth = Math.max(0, depth - 1);\n                    }\n                    else if (ch === "," && depth === 0) {\n                        args.push(current.trim());\n                        current = "";\n                        continue;\n                    }\n                }\n                current += ch;\n            }\n            if (current.trim())\n                args.push(current.trim());\n            return args;\n        }\n        function resolveAggregateArgument(argText, currentSheetName, resolveRangeValues, resolveRangeEntries) {\n            const rangeRef = parseQualifiedRangeReference(argText, currentSheetName);\n            if (rangeRef) {\n                const rangeEntries = resolveRangeEntries(rangeRef.sheetName, `${rangeRef.start}:${rangeRef.end}`);\n                return {\n                    numericValues: rangeEntries.numericValues,\n                    valueCount: rangeEntries.rawValues.filter((value) => String(value || "").trim() !== "").length\n                };\n            }\n            const numericLiteral = Number(argText);\n            if (!Number.isNaN(numericLiteral)) {\n                return { numericValues: [numericLiteral], valueCount: 1 };\n            }\n            const cellRef = deps.parseSimpleFormulaReference(`=${argText}`, currentSheetName);\n            if (!cellRef)\n                return null;\n            const values = resolveRangeValues(cellRef.sheetName, `${cellRef.address}:${cellRef.address}`);\n            const entryCount = resolveRangeEntries(cellRef.sheetName, `${cellRef.address}:${cellRef.address}`).rawValues\n                .filter((value) => String(value || "").trim() !== "").length;\n            return { numericValues: values, valueCount: entryCount };\n        }\n        function resolveNumericFormulaArgument(expression, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries) {\n            const scalar = resolveScalarFormulaValue(expression, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries);\n            if (scalar == null)\n                return null;\n            const numeric = Number(scalar);\n            return Number.isNaN(numeric) ? null : numeric;\n        }\n        function collectRangeCells(rangeRef, resolveCellValue) {\n            const start = deps.parseCellAddress(rangeRef.start);\n            const end = deps.parseCellAddress(rangeRef.end);\n            if (!start.row || !start.col || !end.row || !end.col)\n                return [];\n            const startRow = Math.min(start.row, end.row);\n            const endRow = Math.max(start.row, end.row);\n            const startCol = Math.min(start.col, end.col);\n            const endCol = Math.max(start.col, end.col);\n            const values = [];\n            for (let row = startRow; row <= endRow; row += 1) {\n                for (let col = startCol; col <= endCol; col += 1) {\n                    values.push(resolveCellValue(rangeRef.sheetName, `${deps.colToLetters(col)}${row}`));\n                }\n            }\n            return values;\n        }\n        function matchesCountIfCriteria(value, criteria) {\n            const trimmedCriteria = String(criteria || "").trim();\n            const operatorMatch = trimmedCriteria.match(/^(<=|>=|<>|=|<|>)(.*)$/);\n            const operator = operatorMatch ? operatorMatch[1] : "=";\n            const operandText = operatorMatch ? operatorMatch[2].trim() : trimmedCriteria;\n            const leftNum = Number(value);\n            const rightNum = Number(operandText);\n            const numericComparable = !Number.isNaN(leftNum) && !Number.isNaN(rightNum);\n            if (operator === "=")\n                return numericComparable ? leftNum === rightNum : value === operandText;\n            if (operator === "<>")\n                return numericComparable ? leftNum !== rightNum : value !== operandText;\n            if (!numericComparable)\n                return false;\n            if (operator === ">")\n                return leftNum > rightNum;\n            if (operator === "<")\n                return leftNum < rightNum;\n            if (operator === ">=")\n                return leftNum >= rightNum;\n            if (operator === "<=")\n                return leftNum <= rightNum;\n            return false;\n        }\n        function parseQualifiedRangeReference(argText, currentSheetName) {\n            var _a, _b, _c;\n            const qualifiedRangeMatch = argText.match(/^(?:\'((?:[^\']|\'\')+)\'|([^\'=][^!]*))!(\\$?[A-Z]+\\$?\\d+:\\$?[A-Z]+\\$?\\d+)$/i);\n            const localRangeMatch = argText.match(/^(\\$?[A-Z]+\\$?\\d+:\\$?[A-Z]+\\$?\\d+)$/i);\n            if (!qualifiedRangeMatch && !localRangeMatch) {\n                const scopedDefinedName = deps.parseSheetScopedDefinedNameReference(String(argText || "").trim(), currentSheetName);\n                if (scopedDefinedName) {\n                    const scopedRange = ((_a = deps.getDefinedNameRangeRef()) === null || _a === void 0 ? void 0 : _a(scopedDefinedName.sheetName, scopedDefinedName.name)) || null;\n                    if (scopedRange)\n                        return scopedRange;\n                }\n                const structuredRange = ((_b = deps.getStructuredRangeRef()) === null || _b === void 0 ? void 0 : _b(currentSheetName, String(argText || "").trim())) || null;\n                if (structuredRange)\n                    return structuredRange;\n                const definedRange = ((_c = deps.getDefinedNameRangeRef()) === null || _c === void 0 ? void 0 : _c(currentSheetName, String(argText || "").trim())) || null;\n                if (definedRange)\n                    return definedRange;\n                return null;\n            }\n            const sheetName = qualifiedRangeMatch\n                ? deps.normalizeFormulaSheetName(qualifiedRangeMatch[1] || qualifiedRangeMatch[2] || currentSheetName)\n                : currentSheetName;\n            const rangeText = String(qualifiedRangeMatch ? qualifiedRangeMatch[3] : (localRangeMatch === null || localRangeMatch === void 0 ? void 0 : localRangeMatch[1]) || "");\n            const range = deps.parseRangeAddress(rangeText);\n            if (!range)\n                return null;\n            return { sheetName, start: range.start, end: range.end };\n        }\n        function evaluateArithmeticExpression(expression) {\n            const tokens = tokenizeArithmeticExpression(expression);\n            let index = 0;\n            function parseExpression() {\n                let value = parseTerm();\n                while (tokens[index] === "+" || tokens[index] === "-") {\n                    const operator = tokens[index];\n                    index += 1;\n                    const right = parseTerm();\n                    value = operator === "+" ? value + right : value - right;\n                }\n                return value;\n            }\n            function parseTerm() {\n                let value = parseFactor();\n                while (tokens[index] === "*" || tokens[index] === "/") {\n                    const operator = tokens[index];\n                    index += 1;\n                    const right = parseFactor();\n                    value = operator === "*" ? value * right : value / right;\n                }\n                return value;\n            }\n            function parseFactor() {\n                const token = tokens[index];\n                if (token === "+") {\n                    index += 1;\n                    return parseFactor();\n                }\n                if (token === "-") {\n                    index += 1;\n                    return -parseFactor();\n                }\n                if (token === "(") {\n                    index += 1;\n                    const value = parseExpression();\n                    if (tokens[index] !== ")")\n                        throw new Error("Unbalanced parentheses");\n                    index += 1;\n                    return value;\n                }\n                if (token == null)\n                    throw new Error("Unexpected end of expression");\n                index += 1;\n                const numericValue = Number(token);\n                if (Number.isNaN(numericValue))\n                    throw new Error("Invalid token");\n                return numericValue;\n            }\n            const result = parseExpression();\n            if (index !== tokens.length)\n                throw new Error("Unexpected trailing tokens");\n            return result;\n        }\n        function tokenizeArithmeticExpression(expression) {\n            const tokens = [];\n            let index = 0;\n            while (index < expression.length) {\n                const ch = expression[index];\n                if (/\\s/.test(ch)) {\n                    index += 1;\n                    continue;\n                }\n                if (/[+\\-*/()]/.test(ch)) {\n                    tokens.push(ch);\n                    index += 1;\n                    continue;\n                }\n                const numberMatch = expression.slice(index).match(/^\\d+(?:\\.\\d+)?/);\n                if (!numberMatch)\n                    throw new Error("Invalid arithmetic expression");\n                tokens.push(numberMatch[0]);\n                index += numberMatch[0].length;\n            }\n            return tokens;\n        }\n        return {\n            tryResolveFormulaExpressionLegacy,\n            findTopLevelOperatorIndex,\n            parseWholeFunctionCall,\n            splitFormulaArguments,\n            parseQualifiedRangeReference,\n            resolveScalarFormulaValue\n        };\n    }\n    const formulaLegacyApi = {\n        createFormulaLegacyApi\n    };\n    moduleRegistry.registerModule("formulaLegacy", formulaLegacyApi);\n})();\n' }, { "path": "dist/js/formula-ast.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    function createFormulaAstApi(deps) {\n        function tryResolveFormulaExpressionWithAst(expression, currentSheetName, resolveCellValue, resolveDefinedNameScalarValue, resolveDefinedNameRangeRef, resolveStructuredRangeRef, resolveSpillRange, resolveRangeEntries, currentAddress) {\n            const formulaApi = moduleRegistry.getModule("formulaRuntime");\n            if (!(formulaApi === null || formulaApi === void 0 ? void 0 : formulaApi.parseFormula) || !(formulaApi === null || formulaApi === void 0 ? void 0 : formulaApi.evaluateFormulaAst)) {\n                return null;\n            }\n            try {\n                const ast = formulaApi.parseFormula(`=${expression}`);\n                const evaluated = formulaApi.evaluateFormulaAst(ast, {\n                    resolveCell(ref, sheet) {\n                        return coerceFormulaAstScalar(resolveCellValue(sheet || currentSheetName, deps.normalizeFormulaAddress(ref)));\n                    },\n                    resolveName(name) {\n                        var _a, _b, _c;\n                        const scopedRef = deps.parseSheetScopedDefinedNameReference(name, currentSheetName);\n                        if (scopedRef) {\n                            const scopedValue = (_a = resolveDefinedNameScalarValue === null || resolveDefinedNameScalarValue === void 0 ? void 0 : resolveDefinedNameScalarValue(scopedRef.sheetName, scopedRef.name)) !== null && _a !== void 0 ? _a : null;\n                            if (scopedValue != null) {\n                                return coerceFormulaAstScalar(scopedValue);\n                            }\n                        }\n                        const scalarValue = (_b = resolveDefinedNameScalarValue === null || resolveDefinedNameScalarValue === void 0 ? void 0 : resolveDefinedNameScalarValue(currentSheetName, name)) !== null && _b !== void 0 ? _b : null;\n                        if (scalarValue != null) {\n                            return coerceFormulaAstScalar(scalarValue);\n                        }\n                        const rangeRef = (_c = resolveDefinedNameRangeRef === null || resolveDefinedNameRangeRef === void 0 ? void 0 : resolveDefinedNameRangeRef(currentSheetName, name)) !== null && _c !== void 0 ? _c : null;\n                        if (rangeRef && resolveRangeEntries) {\n                            return createFormulaAstRangeMatrix(rangeRef.sheetName, rangeRef.start, rangeRef.end, resolveRangeEntries);\n                        }\n                        return null;\n                    },\n                    resolveScopedName(sheet, name) {\n                        var _a, _b;\n                        const scopedValue = (_a = resolveDefinedNameScalarValue === null || resolveDefinedNameScalarValue === void 0 ? void 0 : resolveDefinedNameScalarValue(sheet, name)) !== null && _a !== void 0 ? _a : null;\n                        if (scopedValue != null) {\n                            return coerceFormulaAstScalar(scopedValue);\n                        }\n                        const rangeRef = (_b = resolveDefinedNameRangeRef === null || resolveDefinedNameRangeRef === void 0 ? void 0 : resolveDefinedNameRangeRef(sheet, name)) !== null && _b !== void 0 ? _b : null;\n                        if (rangeRef && resolveRangeEntries) {\n                            return createFormulaAstRangeMatrix(rangeRef.sheetName, rangeRef.start, rangeRef.end, resolveRangeEntries);\n                        }\n                        return null;\n                    },\n                    resolveStructuredRef(table, column) {\n                        var _a;\n                        const rangeRef = (_a = resolveStructuredRangeRef === null || resolveStructuredRangeRef === void 0 ? void 0 : resolveStructuredRangeRef(currentSheetName, `${table}[${column}]`)) !== null && _a !== void 0 ? _a : null;\n                        if (!rangeRef || !resolveRangeEntries) {\n                            return null;\n                        }\n                        return createFormulaAstRangeMatrix(rangeRef.sheetName, rangeRef.start, rangeRef.end, resolveRangeEntries);\n                    },\n                    resolveRange(startRef, endRef, sheet) {\n                        if (!resolveRangeEntries) {\n                            return [];\n                        }\n                        return createFormulaAstRangeMatrix(sheet || currentSheetName, deps.normalizeFormulaAddress(startRef), deps.normalizeFormulaAddress(endRef), resolveRangeEntries);\n                    },\n                    resolveSpill(ref, sheet) {\n                        if (!resolveRangeEntries) {\n                            return [];\n                        }\n                        const spillRange = resolveSpillRange(sheet || currentSheetName, ref);\n                        if (!spillRange) {\n                            return [];\n                        }\n                        return createFormulaAstRangeMatrix(spillRange.sheetName, spillRange.start, spillRange.end, resolveRangeEntries);\n                    },\n                    currentCellRef: currentAddress ? deps.normalizeFormulaAddress(currentAddress) : undefined\n                });\n                return serializeFormulaAstResult(evaluated);\n            }\n            catch (_error) {\n                return null;\n            }\n        }\n        function coerceFormulaAstScalar(value) {\n            const trimmed = String(value || "").trim();\n            if (!trimmed) {\n                return "";\n            }\n            if (trimmed === "TRUE") {\n                return true;\n            }\n            if (trimmed === "FALSE") {\n                return false;\n            }\n            const numeric = Number(trimmed.replace(/,/g, ""));\n            if (!Number.isNaN(numeric)) {\n                return numeric;\n            }\n            return trimmed;\n        }\n        function createFormulaAstRangeMatrix(sheetName, startAddress, endAddress, resolveRangeEntries) {\n            const range = deps.parseRangeAddress(`${deps.normalizeFormulaAddress(startAddress)}:${deps.normalizeFormulaAddress(endAddress)}`);\n            if (!range) {\n                return [];\n            }\n            const start = deps.parseCellAddress(range.start);\n            const end = deps.parseCellAddress(range.end);\n            if (!start.row || !start.col || !end.row || !end.col) {\n                return [];\n            }\n            const startRow = Math.min(start.row, end.row);\n            const endRow = Math.max(start.row, end.row);\n            const startCol = Math.min(start.col, end.col);\n            const endCol = Math.max(start.col, end.col);\n            const entries = resolveRangeEntries(sheetName, `${range.start}:${range.end}`).rawValues;\n            const matrix = [];\n            let index = 0;\n            for (let row = startRow; row <= endRow; row += 1) {\n                const rowValues = [];\n                for (let col = startCol; col <= endCol; col += 1) {\n                    rowValues.push(coerceFormulaAstScalar(entries[index] || ""));\n                    index += 1;\n                }\n                matrix.push(rowValues);\n            }\n            return matrix;\n        }\n        function serializeFormulaAstResult(value) {\n            if (value == null) {\n                return null;\n            }\n            if (Array.isArray(value)) {\n                return null;\n            }\n            if (typeof value === "boolean") {\n                return value ? "TRUE" : "FALSE";\n            }\n            return String(value);\n        }\n        return {\n            tryResolveFormulaExpressionWithAst,\n            coerceFormulaAstScalar,\n            createFormulaAstRangeMatrix,\n            serializeFormulaAstResult\n        };\n    }\n    const formulaAstApi = {\n        createFormulaAstApi\n    };\n    moduleRegistry.registerModule("formulaAst", formulaAstApi);\n})();\n' }, { "path": "dist/js/formula-resolver.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    function normalizeCellRect(start, end) {\n        if (!start.row || !start.col || !end.row || !end.col) {\n            return null;\n        }\n        return {\n            startRow: Math.min(start.row, end.row),\n            endRow: Math.max(start.row, end.row),\n            startCol: Math.min(start.col, end.col),\n            endCol: Math.max(start.col, end.col)\n        };\n    }\n    function getResolvedFormulaCellValue(cell) {\n        const rawValue = String(cell.rawValue || "");\n        const outputValue = String(cell.outputValue || "");\n        if (rawValue && rawValue !== cell.formulaText) {\n            return rawValue;\n        }\n        return outputValue || rawValue;\n    }\n    function getUnresolvedFormulaCellValue(cell) {\n        const rawValue = String(cell.rawValue || "");\n        const outputValue = String(cell.outputValue || "");\n        if (rawValue && rawValue !== cell.formulaText) {\n            return rawValue;\n        }\n        if (outputValue && outputValue !== cell.formulaText) {\n            return outputValue;\n        }\n        return "";\n    }\n    function buildFormulaResolver(workbook, deps) {\n        const sheetMap = new Map();\n        const cellMaps = new Map();\n        const tableMap = new Map();\n        for (const sheet of workbook.sheets) {\n            sheetMap.set(sheet.name, sheet);\n            const cellMap = new Map();\n            for (const cell of sheet.cells) {\n                cellMap.set(cell.address.toUpperCase(), cell);\n            }\n            cellMaps.set(sheet.name, cellMap);\n            for (const table of sheet.tables) {\n                if (table.name) {\n                    tableMap.set(deps.normalizeStructuredTableKey(table.name), table);\n                }\n                if (table.displayName) {\n                    tableMap.set(deps.normalizeStructuredTableKey(table.displayName), table);\n                }\n            }\n        }\n        const resolvingKeys = new Set();\n        const definedNameMap = new Map();\n        for (const entry of workbook.definedNames) {\n            const key = entry.localSheetName\n                ? `${deps.normalizeFormulaSheetName(entry.localSheetName)}::${deps.normalizeDefinedNameKey(entry.name)}`\n                : `::${deps.normalizeDefinedNameKey(entry.name)}`;\n            definedNameMap.set(key, entry.formulaText);\n        }\n        function lookupDefinedNameFormula(sheetName, name) {\n            const normalizedName = deps.normalizeDefinedNameKey(name);\n            return definedNameMap.get(`${deps.normalizeFormulaSheetName(sheetName)}::${normalizedName}`)\n                || definedNameMap.get(`::${normalizedName}`)\n                || null;\n        }\n        function resolveCellValue(sheetName, address) {\n            var _a;\n            const sheet = sheetMap.get(sheetName);\n            if (!sheet)\n                return "#REF!";\n            const cell = ((_a = cellMaps.get(sheetName)) === null || _a === void 0 ? void 0 : _a.get(address.toUpperCase())) || null;\n            if (!cell)\n                return "";\n            const key = `${sheetName}!${address.toUpperCase()}`;\n            if (resolvingKeys.has(key)) {\n                return "";\n            }\n            if (cell.formulaText && (!cell.outputValue || cell.resolutionStatus !== "resolved")) {\n                resolvingKeys.add(key);\n                try {\n                    try {\n                        const result = deps.tryResolveFormulaExpressionDetailed(cell.formulaText, sheetName, resolveCellValue, undefined, undefined, cell.address);\n                        if ((result === null || result === void 0 ? void 0 : result.value) != null) {\n                            deps.applyResolvedFormulaValue(cell, result.value, result.source || "legacy_resolver");\n                        }\n                    }\n                    catch (error) {\n                        if (!(error instanceof Error) || error.message !== "__FORMULA_UNRESOLVED__") {\n                            throw error;\n                        }\n                    }\n                }\n                finally {\n                    resolvingKeys.delete(key);\n                }\n            }\n            if (cell.formulaText) {\n                if (cell.resolutionStatus === "resolved") {\n                    return getResolvedFormulaCellValue(cell);\n                }\n                return getUnresolvedFormulaCellValue(cell);\n            }\n            if (["s", "inlineStr", "str", "e", "b"].includes(cell.valueType)) {\n                return String(cell.outputValue || cell.rawValue || "");\n            }\n            return String(cell.rawValue || cell.outputValue || "");\n        }\n        function resolveRangeEntries(sheetName, rangeText) {\n            const range = deps.parseRangeAddress(rangeText);\n            if (!range) {\n                return { rawValues: [], numericValues: [] };\n            }\n            const cellRect = normalizeCellRect(deps.parseCellAddress(range.start), deps.parseCellAddress(range.end));\n            if (!cellRect) {\n                return { rawValues: [], numericValues: [] };\n            }\n            const rawValues = [];\n            const numericValues = [];\n            for (let row = cellRect.startRow; row <= cellRect.endRow; row += 1) {\n                for (let col = cellRect.startCol; col <= cellRect.endCol; col += 1) {\n                    const rawValue = resolveCellValue(sheetName, `${deps.colToLetters(col)}${row}`);\n                    rawValues.push(rawValue);\n                    if (String(rawValue || "").trim() === "")\n                        continue;\n                    const numericValue = Number(rawValue);\n                    if (!Number.isNaN(numericValue)) {\n                        numericValues.push(numericValue);\n                    }\n                }\n            }\n            return { rawValues, numericValues };\n        }\n        function resolveDefinedNameValue(sheetName, name) {\n            const formulaText = lookupDefinedNameFormula(sheetName, name);\n            if (!formulaText)\n                return null;\n            const directRef = deps.parseSimpleFormulaReference(formulaText, sheetName);\n            if (directRef) {\n                const value = resolveCellValue(directRef.sheetName, directRef.address);\n                return value === "" ? null : value;\n            }\n            const scalar = deps.resolveScalarFormulaValue(formulaText.replace(/^=/, ""), sheetName, resolveCellValue);\n            return scalar == null || scalar === "" ? null : scalar;\n        }\n        function resolveDefinedNameRange(sheetName, name) {\n            const formulaText = lookupDefinedNameFormula(sheetName, name);\n            if (!formulaText)\n                return null;\n            const normalized = formulaText.replace(/^=/, "").trim();\n            const directRange = deps.parseQualifiedRangeReference(normalized, sheetName);\n            if (directRange) {\n                return directRange;\n            }\n            const separatorIndex = deps.findTopLevelOperatorIndex(normalized, ":");\n            if (separatorIndex <= 0)\n                return null;\n            const leftText = normalized.slice(0, separatorIndex).trim();\n            const rightText = normalized.slice(separatorIndex + 1).trim();\n            const startRef = deps.parseSimpleFormulaReference(`=${leftText}`, sheetName);\n            const indexCall = deps.parseWholeFunctionCall(rightText, ["INDEX"]);\n            if (!startRef || !indexCall)\n                return null;\n            const args = deps.splitFormulaArguments(indexCall.argsText.trim());\n            if (args.length < 2 || args.length > 3)\n                return null;\n            const rangeRef = deps.parseQualifiedRangeReference(args[0], sheetName);\n            const resolveRangeValues = (targetSheetName, rangeText) => resolveRangeEntries(targetSheetName, rangeText).numericValues;\n            const rowIndex = Number(deps.resolveScalarFormulaValue(args[1], sheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries));\n            const colIndex = args.length === 3\n                ? Number(deps.resolveScalarFormulaValue(args[2], sheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries))\n                : 1;\n            if (!rangeRef || Number.isNaN(rowIndex) || Number.isNaN(colIndex) || rowIndex < 1 || colIndex < 1)\n                return null;\n            const cellRect = normalizeCellRect(deps.parseCellAddress(rangeRef.start), deps.parseCellAddress(rangeRef.end));\n            if (!cellRect)\n                return null;\n            const targetRow = cellRect.startRow + Math.trunc(rowIndex) - 1;\n            const targetCol = cellRect.startCol + Math.trunc(colIndex) - 1;\n            if (targetRow > cellRect.endRow || targetCol > cellRect.endCol)\n                return null;\n            return {\n                sheetName: startRef.sheetName,\n                start: startRef.address,\n                end: `${deps.colToLetters(targetCol)}${targetRow}`\n            };\n        }\n        function resolveStructuredRange(sheetName, text) {\n            const match = String(text || "").trim().match(/^(.+?)\\[([^\\]]+)\\]$/);\n            if (!match)\n                return null;\n            const tableKey = deps.normalizeStructuredTableKey(match[1].replace(/^\'(.*)\'$/, "$1"));\n            const columnKey = deps.normalizeStructuredTableKey(match[2]);\n            if (!tableKey || !columnKey || columnKey.startsWith("#") || columnKey.startsWith("@"))\n                return null;\n            const table = tableMap.get(tableKey);\n            if (!table)\n                return null;\n            const columnIndex = table.columns.findIndex((columnName) => deps.normalizeStructuredTableKey(columnName) === columnKey);\n            if (columnIndex < 0)\n                return null;\n            const cellRect = normalizeCellRect(deps.parseCellAddress(table.start), deps.parseCellAddress(table.end));\n            if (!cellRect)\n                return null;\n            const firstDataRow = cellRect.startRow + Math.max(0, table.headerRowCount);\n            const lastDataRow = cellRect.endRow - Math.max(0, table.totalsRowCount);\n            if (firstDataRow > lastDataRow)\n                return null;\n            const col = cellRect.startCol + columnIndex;\n            const colLetters = deps.colToLetters(col);\n            return {\n                sheetName: table.sheetName || sheetName,\n                start: `${colLetters}${firstDataRow}`,\n                end: `${colLetters}${lastDataRow}`\n            };\n        }\n        return {\n            resolveCellValue,\n            resolveRangeValues: (sheetName, rangeText) => resolveRangeEntries(sheetName, rangeText).numericValues,\n            resolveRangeEntries,\n            resolveDefinedNameValue,\n            resolveDefinedNameRange,\n            resolveStructuredRange\n        };\n    }\n    function resolveSimpleFormulaReferences(workbook, deps) {\n        var _a, _b, _c, _d;\n        const resolver = buildFormulaResolver(workbook, deps);\n        (_a = deps.setDefinedNameResolvers) === null || _a === void 0 ? void 0 : _a.call(deps, resolver.resolveDefinedNameValue, resolver.resolveDefinedNameRange, resolver.resolveStructuredRange);\n        try {\n            for (let pass = 0; pass < 8; pass += 1) {\n                let resolvedInPass = 0;\n                for (const sheet of workbook.sheets) {\n                    for (const cell of sheet.cells) {\n                        if (!cell.formulaText)\n                            continue;\n                        if (cell.resolutionStatus === "unsupported_external")\n                            continue;\n                        if (cell.resolutionStatus === "resolved")\n                            continue;\n                        const reference = deps.parseSimpleFormulaReference(cell.formulaText, sheet.name);\n                        if (reference) {\n                            const targetValue = String(resolver.resolveCellValue(reference.sheetName, reference.address) || "").trim();\n                            if (targetValue) {\n                                deps.applyResolvedFormulaValue(cell, targetValue, "legacy_resolver");\n                                resolvedInPass += 1;\n                                continue;\n                            }\n                        }\n                        let evaluated = null;\n                        let evaluatedSource = null;\n                        try {\n                            const result = deps.tryResolveFormulaExpressionDetailed(cell.formulaText, sheet.name, resolver.resolveCellValue, resolver.resolveRangeValues, resolver.resolveRangeEntries, cell.address);\n                            evaluated = (_b = result === null || result === void 0 ? void 0 : result.value) !== null && _b !== void 0 ? _b : null;\n                            evaluatedSource = (_c = result === null || result === void 0 ? void 0 : result.source) !== null && _c !== void 0 ? _c : null;\n                        }\n                        catch (error) {\n                            if (!(error instanceof Error) || error.message !== "__FORMULA_UNRESOLVED__") {\n                                throw error;\n                            }\n                        }\n                        if (evaluated != null) {\n                            deps.applyResolvedFormulaValue(cell, evaluated, evaluatedSource || "legacy_resolver");\n                            resolvedInPass += 1;\n                        }\n                    }\n                }\n                if (resolvedInPass === 0)\n                    break;\n            }\n        }\n        finally {\n            (_d = deps.setDefinedNameResolvers) === null || _d === void 0 ? void 0 : _d.call(deps, null, null, null);\n        }\n    }\n    const formulaResolverApi = {\n        buildFormulaResolver,\n        resolveSimpleFormulaReferences\n    };\n    moduleRegistry.registerModule("formulaResolver", formulaResolverApi);\n})();\n' }, { "path": "dist/js/formula/tokenizer.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(function initXlsx2mdFormulaTokenizer(global) {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const api = moduleRegistry.getModule("formulaRuntime") || {};\n    const CELL_REF_RE = /^\\$?[A-Za-z]{1,3}\\$?\\d+$/;\n    const IDENTIFIER_START_RE = /[\\p{L}_\\\\$]/u;\n    const IDENTIFIER_PART_RE = /[\\p{L}\\p{N}_.\\\\$?]/u;\n    function tokenizeFormula(input) {\n        var _a, _b;\n        const source = normalizeFormulaInput(input);\n        const tokens = [];\n        let index = 0;\n        while (index < source.length) {\n            const char = source[index];\n            if (/\\s/.test(char)) {\n                const whitespaceStart = index;\n                while (index < source.length && /\\s/.test(source[index])) {\n                    index += 1;\n                }\n                const previousToken = (_a = tokens[tokens.length - 1]) !== null && _a !== void 0 ? _a : null;\n                const nextChar = (_b = source[index]) !== null && _b !== void 0 ? _b : "";\n                if (shouldEmitIntersectionOperator(previousToken, nextChar)) {\n                    tokens.push({\n                        type: "operator",\n                        value: " ",\n                        start: whitespaceStart,\n                        end: index\n                    });\n                }\n                continue;\n            }\n            const start = index;\n            if (char === "\\"") {\n                const parsed = readStringLiteral(source, index);\n                tokens.push({\n                    type: "string",\n                    value: parsed.value,\n                    start,\n                    end: parsed.end\n                });\n                index = parsed.end;\n                continue;\n            }\n            if (char === "\'") {\n                const parsed = readQuotedIdentifier(source, index);\n                tokens.push({\n                    type: "quoted_identifier",\n                    value: parsed.value,\n                    start,\n                    end: parsed.end\n                });\n                index = parsed.end;\n                continue;\n            }\n            if (char === "#") {\n                if (shouldReadErrorLiteral(source, index)) {\n                    const parsed = readErrorLiteral(source, index);\n                    tokens.push({\n                        type: "error",\n                        value: parsed.value,\n                        start,\n                        end: parsed.end\n                    });\n                    index = parsed.end;\n                    continue;\n                }\n                tokens.push({\n                    type: "operator",\n                    value: "#",\n                    start,\n                    end: start + 1\n                });\n                index += 1;\n                continue;\n            }\n            if (/[0-9.]/.test(char)) {\n                const parsed = readNumberLiteral(source, index);\n                if (parsed) {\n                    tokens.push({\n                        type: "number",\n                        value: parsed.value,\n                        start,\n                        end: parsed.end\n                    });\n                    index = parsed.end;\n                    continue;\n                }\n            }\n            if ("(),;:{}![]".includes(char)) {\n                tokens.push({\n                    type: punctuationTypeFor(char),\n                    value: char,\n                    start,\n                    end: start + 1\n                });\n                index += 1;\n                continue;\n            }\n            const operator = readOperator(source, index);\n            if (operator) {\n                tokens.push({\n                    type: "operator",\n                    value: operator,\n                    start,\n                    end: start + operator.length\n                });\n                index += operator.length;\n                continue;\n            }\n            if (isIdentifierStart(char)) {\n                const parsed = readIdentifierLike(source, index);\n                const upperValue = parsed.value.toUpperCase();\n                tokens.push({\n                    type: upperValue === "TRUE" || upperValue === "FALSE"\n                        ? "boolean"\n                        : isCellReference(parsed.value)\n                            ? "cell"\n                            : "identifier",\n                    value: parsed.value,\n                    start,\n                    end: parsed.end\n                });\n                index = parsed.end;\n                continue;\n            }\n            throw new Error(`Unexpected formula token at ${index}: ${char}`);\n        }\n        return tokens;\n    }\n    function normalizeFormulaInput(input) {\n        return input.startsWith("=") ? input.slice(1) : input;\n    }\n    function readStringLiteral(source, start) {\n        let index = start + 1;\n        let value = "";\n        while (index < source.length) {\n            const char = source[index];\n            if (char === "\\"") {\n                if (source[index + 1] === "\\"") {\n                    value += "\\"";\n                    index += 2;\n                    continue;\n                }\n                return { value, end: index + 1 };\n            }\n            value += char;\n            index += 1;\n        }\n        throw new Error(`Unterminated string literal at ${start}`);\n    }\n    function readQuotedIdentifier(source, start) {\n        let index = start + 1;\n        let value = "";\n        while (index < source.length) {\n            const char = source[index];\n            if (char === "\'") {\n                if (source[index + 1] === "\'") {\n                    value += "\'";\n                    index += 2;\n                    continue;\n                }\n                return { value, end: index + 1 };\n            }\n            value += char;\n            index += 1;\n        }\n        throw new Error(`Unterminated quoted identifier at ${start}`);\n    }\n    function readErrorLiteral(source, start) {\n        let index = start + 1;\n        while (index < source.length && /[A-Za-z0-9/!?#]/.test(source[index])) {\n            index += 1;\n        }\n        return { value: source.slice(start, index), end: index };\n    }\n    function readNumberLiteral(source, start) {\n        const slice = source.slice(start);\n        const match = slice.match(/^(?:\\d+\\.\\d*|\\.\\d+|\\d+)(?:[Ee][+\\-]?\\d+)?/);\n        if (!match) {\n            return null;\n        }\n        return {\n            value: match[0],\n            end: start + match[0].length\n        };\n    }\n    function punctuationTypeFor(char) {\n        switch (char) {\n            case "(":\n                return "lparen";\n            case ")":\n                return "rparen";\n            case "{":\n                return "lbrace";\n            case "}":\n                return "rbrace";\n            case ",":\n                return "comma";\n            case ";":\n                return "semicolon";\n            case ":":\n                return "colon";\n            case "!":\n                return "bang";\n            case "[":\n                return "lbracket";\n            case "]":\n                return "rbracket";\n            default:\n                throw new Error(`Unknown punctuation: ${char}`);\n        }\n    }\n    function readOperator(source, start) {\n        const twoChar = source.slice(start, start + 2);\n        if (twoChar === "<>" || twoChar === "<=" || twoChar === ">=") {\n            return twoChar;\n        }\n        const oneChar = source[start];\n        return "+-*/&=<>%#".includes(oneChar) ? oneChar : null;\n    }\n    function shouldReadErrorLiteral(source, start) {\n        return /^#(?:N\\/A|REF!|VALUE!|NULL!|NUM!|NAME\\?|DIV\\/0!|CALC!|SPILL!|GETTING_DATA)/i.test(source.slice(start));\n    }\n    function shouldEmitIntersectionOperator(previousToken, nextChar) {\n        if (!previousToken) {\n            return false;\n        }\n        const leftTokenTypes = new Set([\n            "cell",\n            "identifier",\n            "quoted_identifier",\n            "rparen",\n            "rbracket",\n            "rbrace"\n        ]);\n        if (!leftTokenTypes.has(previousToken.type)) {\n            return false;\n        }\n        return nextChar === "\'" || nextChar === "(" || isIdentifierStart(nextChar);\n    }\n    function isIdentifierStart(char) {\n        return IDENTIFIER_START_RE.test(char);\n    }\n    function isIdentifierPart(char) {\n        return IDENTIFIER_PART_RE.test(char);\n    }\n    function readIdentifierLike(source, start) {\n        let index = start;\n        while (index < source.length && isIdentifierPart(source[index])) {\n            index += 1;\n        }\n        return {\n            value: source.slice(start, index),\n            end: index\n        };\n    }\n    function isCellReference(value) {\n        return CELL_REF_RE.test(value);\n    }\n    api.tokenizeFormula = tokenizeFormula;\n    api.normalizeFormulaInput = normalizeFormulaInput;\n    api.isCellReference = isCellReference;\n    moduleRegistry.registerModule("formulaRuntime", api);\n})(globalThis);\n' }, { "path": "dist/js/formula/parser.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(function initXlsx2mdFormulaParser(global) {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const api = moduleRegistry.getModule("formulaRuntime");\n    if (!api) {\n        throw new Error("xlsx2md formula runtime module is not loaded");\n    }\n    function parseFormula(input) {\n        var _a;\n        const tokens = api.tokenizeFormula(input);\n        const state = { tokens, index: 0 };\n        const ast = parseComparison(state);\n        if (peek(state)) {\n            throw new Error(`Unexpected trailing token: ${(_a = peek(state)) === null || _a === void 0 ? void 0 : _a.value}`);\n        }\n        return ast;\n    }\n    function parseComparison(state) {\n        let left = parseConcat(state);\n        while (matchOperator(state, ["=", "<>", "<", "<=", ">", ">="])) {\n            const operator = consume(state).value;\n            const right = parseConcat(state);\n            left = { type: "binary_op", operator, left, right };\n        }\n        return left;\n    }\n    function parseConcat(state) {\n        let left = parseAdditive(state);\n        while (matchOperator(state, ["&"])) {\n            const operator = consume(state).value;\n            const right = parseAdditive(state);\n            left = { type: "binary_op", operator, left, right };\n        }\n        return left;\n    }\n    function parseAdditive(state) {\n        let left = parseMultiplicative(state);\n        while (matchOperator(state, ["+", "-"])) {\n            const operator = consume(state).value;\n            const right = parseMultiplicative(state);\n            left = { type: "binary_op", operator, left, right };\n        }\n        return left;\n    }\n    function parseMultiplicative(state) {\n        let left = parseIntersection(state);\n        while (matchOperator(state, ["*", "/"])) {\n            const operator = consume(state).value;\n            const right = parseIntersection(state);\n            left = { type: "binary_op", operator, left, right };\n        }\n        return left;\n    }\n    function parseIntersection(state) {\n        let left = parseUnary(state);\n        while (matchOperator(state, [" "])) {\n            const operator = consume(state).value;\n            const right = parseUnary(state);\n            left = { type: "binary_op", operator, left, right };\n        }\n        return left;\n    }\n    function parseUnary(state) {\n        if (matchOperator(state, ["+", "-"])) {\n            const operator = consume(state).value;\n            return {\n                type: "unary_op",\n                operator,\n                operand: parseUnary(state)\n            };\n        }\n        return parsePostfix(state);\n    }\n    function parsePostfix(state) {\n        let node = parsePrimary(state);\n        while (matchOperator(state, ["%", "#"])) {\n            const operator = consume(state).value;\n            node = {\n                type: "postfix_op",\n                operator,\n                operand: node\n            };\n        }\n        return node;\n    }\n    function parsePrimary(state) {\n        const token = peek(state);\n        if (!token) {\n            throw new Error("Unexpected end of formula");\n        }\n        if (token.type === "number") {\n            consume(state);\n            return {\n                type: "number",\n                value: Number(token.value),\n                raw: token.value\n            };\n        }\n        if (token.type === "string") {\n            consume(state);\n            return {\n                type: "string",\n                value: token.value\n            };\n        }\n        if (token.type === "boolean") {\n            consume(state);\n            return {\n                type: "boolean",\n                value: token.value.toUpperCase() === "TRUE",\n                raw: token.value\n            };\n        }\n        if (token.type === "error") {\n            consume(state);\n            return {\n                type: "error",\n                value: token.value\n            };\n        }\n        if (token.type === "lbrace") {\n            return parseArrayConstant(state);\n        }\n        if (token.type === "lparen") {\n            consume(state);\n            const expression = parseComparison(state);\n            expect(state, "rparen");\n            return expression;\n        }\n        if (token.type === "identifier" || token.type === "cell" || token.type === "quoted_identifier") {\n            return parseReferenceLike(state);\n        }\n        throw new Error(`Unexpected token in formula: ${token.value}`);\n    }\n    function parseReferenceLike(state) {\n        var _a, _b, _c, _d, _e, _f;\n        const first = consume(state);\n        if (first.type === "identifier" && ((_a = peek(state)) === null || _a === void 0 ? void 0 : _a.type) === "lparen") {\n            return parseFunctionCall(state, first.value);\n        }\n        if ((first.type === "identifier" || first.type === "quoted_identifier") && ((_b = peek(state)) === null || _b === void 0 ? void 0 : _b.type) === "lbracket") {\n            return parseStructuredReference(state, first.value);\n        }\n        if (((_c = peek(state)) === null || _c === void 0 ? void 0 : _c.type) === "bang") {\n            consume(state);\n            const next = consume(state);\n            if (!next || (next.type !== "cell" && next.type !== "identifier")) {\n                throw new Error(`Expected reference after !, got ${(_d = next === null || next === void 0 ? void 0 : next.value) !== null && _d !== void 0 ? _d : "EOF"}`);\n            }\n            let node = next.type === "cell"\n                ? { type: "cell", ref: next.value, sheet: first.value }\n                : { type: "scoped_name", sheet: first.value, name: next.value };\n            if (((_e = peek(state)) === null || _e === void 0 ? void 0 : _e.type) === "colon") {\n                consume(state);\n                const end = parseRangeEndpoint(state, first.value);\n                node = { type: "range", start: node, end };\n            }\n            return node;\n        }\n        if (first.type === "cell") {\n            const cellNode = { type: "cell", ref: first.value, sheet: null };\n            if (((_f = peek(state)) === null || _f === void 0 ? void 0 : _f.type) === "colon") {\n                consume(state);\n                const end = parseRangeEndpoint(state, null);\n                return { type: "range", start: cellNode, end };\n            }\n            return cellNode;\n        }\n        return { type: "name", name: first.value };\n    }\n    function parseStructuredReference(state, tableName) {\n        expect(state, "lbracket");\n        if (matchAndConsume(state, "lbracket")) {\n            const qualifier = readStructuredReferenceSegment(state);\n            expect(state, "rbracket");\n            expect(state, "comma");\n            expect(state, "lbracket");\n            const column = readStructuredReferenceSegment(state);\n            expect(state, "rbracket");\n            expect(state, "rbracket");\n            return {\n                type: "structured_ref",\n                table: tableName,\n                qualifier,\n                column\n            };\n        }\n        const column = readStructuredReferenceSegment(state);\n        expect(state, "rbracket");\n        return {\n            type: "structured_ref",\n            table: tableName,\n            column\n        };\n    }\n    function readStructuredReferenceSegment(state) {\n        var _a, _b;\n        let text = "";\n        while (peek(state) && ((_a = peek(state)) === null || _a === void 0 ? void 0 : _a.type) !== "rbracket") {\n            const token = consume(state);\n            if (!token || !["identifier", "quoted_identifier", "cell", "error", "number", "boolean", "operator"].includes(token.type)) {\n                throw new Error(`Expected structured reference column, got ${(_b = token === null || token === void 0 ? void 0 : token.value) !== null && _b !== void 0 ? _b : "EOF"}`);\n            }\n            if (token.type === "operator" && token.value !== "#" && token.value !== " ") {\n                throw new Error(`Expected structured reference column, got ${token.value}`);\n            }\n            text += token.value;\n        }\n        if (!text.length) {\n            throw new Error("Expected structured reference column, got EOF");\n        }\n        return text.startsWith("#")\n            ? `#${text.slice(1).replace(/\\s+/g, " ").trim()}`\n            : text;\n    }\n    function parseFunctionCall(state, name) {\n        var _a;\n        expect(state, "lparen");\n        const args = [];\n        if (((_a = peek(state)) === null || _a === void 0 ? void 0 : _a.type) !== "rparen") {\n            do {\n                args.push(parseComparison(state));\n            } while (matchAndConsume(state, "comma"));\n        }\n        expect(state, "rparen");\n        return {\n            type: "function_call",\n            name,\n            args\n        };\n    }\n    function parseArrayConstant(state) {\n        var _a;\n        expect(state, "lbrace");\n        const rows = [];\n        if (((_a = peek(state)) === null || _a === void 0 ? void 0 : _a.type) !== "rbrace") {\n            while (true) {\n                const row = [];\n                row.push(parseComparison(state));\n                while (matchAndConsume(state, "comma")) {\n                    row.push(parseComparison(state));\n                }\n                rows.push(row);\n                if (!matchAndConsume(state, "semicolon")) {\n                    break;\n                }\n            }\n        }\n        expect(state, "rbrace");\n        return {\n            type: "array_constant",\n            rows\n        };\n    }\n    function parseRangeEndpoint(state, defaultSheet) {\n        var _a;\n        const token = consume(state);\n        if (!token || (token.type !== "cell" && token.type !== "identifier")) {\n            throw new Error(`Expected range endpoint, got ${(_a = token === null || token === void 0 ? void 0 : token.value) !== null && _a !== void 0 ? _a : "EOF"}`);\n        }\n        if (token.type === "cell") {\n            return {\n                type: "cell",\n                ref: token.value,\n                sheet: defaultSheet\n            };\n        }\n        return {\n            type: defaultSheet ? "scoped_name" : "name",\n            ...(defaultSheet\n                ? { sheet: defaultSheet, name: token.value }\n                : { name: token.value })\n        };\n    }\n    function peek(state) {\n        var _a;\n        return (_a = state.tokens[state.index]) !== null && _a !== void 0 ? _a : null;\n    }\n    function consume(state) {\n        var _a;\n        const token = (_a = state.tokens[state.index]) !== null && _a !== void 0 ? _a : null;\n        if (token) {\n            state.index += 1;\n        }\n        return token;\n    }\n    function expect(state, type) {\n        var _a;\n        const token = consume(state);\n        if (!token || token.type !== type) {\n            throw new Error(`Expected ${type}, got ${(_a = token === null || token === void 0 ? void 0 : token.type) !== null && _a !== void 0 ? _a : "EOF"}`);\n        }\n        return token;\n    }\n    function matchOperator(state, operators) {\n        const token = peek(state);\n        return (token === null || token === void 0 ? void 0 : token.type) === "operator" && operators.includes(token.value);\n    }\n    function matchAndConsume(state, type) {\n        var _a;\n        if (((_a = peek(state)) === null || _a === void 0 ? void 0 : _a.type) === type) {\n            consume(state);\n            return true;\n        }\n        return false;\n    }\n    api.parseFormula = parseFormula;\n    moduleRegistry.registerModule("formulaRuntime", api);\n})(globalThis);\n' }, { "path": "dist/js/formula/evaluator.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(function initXlsx2mdFormulaEvaluator(global) {\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    const api = moduleRegistry.getModule("formulaRuntime");\n    if (!api) {\n        throw new Error("xlsx2md formula runtime module is not loaded");\n    }\n    function evaluateFormulaAst(ast, context = {}) {\n        switch (ast.type) {\n            case "number":\n                return ast.value;\n            case "string":\n                return ast.value;\n            case "boolean":\n                return ast.value;\n            case "error":\n                return ast.value;\n            case "array_constant":\n                return ast.rows.map((row) => row.map((item) => evaluateFormulaAst(item, context)));\n            case "cell":\n                return context.resolveCell ? context.resolveCell(ast.ref, ast.sheet) : null;\n            case "name":\n                return context.resolveName ? context.resolveName(ast.name) : null;\n            case "scoped_name":\n                if (context.resolveScopedName) {\n                    return context.resolveScopedName(ast.sheet, ast.name);\n                }\n                return context.resolveName ? context.resolveName(`${ast.sheet}!${ast.name}`) : null;\n            case "range":\n                return evaluateRangeAst(ast, context);\n            case "structured_ref":\n                if (ast.qualifier) {\n                    return null;\n                }\n                return context.resolveStructuredRef ? context.resolveStructuredRef(ast.table, ast.column) : null;\n            case "unary_op":\n                return evaluateUnaryOp(ast.operator, evaluateFormulaAst(ast.operand, context));\n            case "postfix_op":\n                if (ast.operator === "#" && ast.operand.type === "cell") {\n                    return context.resolveSpill ? context.resolveSpill(ast.operand.ref, ast.operand.sheet) : null;\n                }\n                return evaluatePostfixOp(ast.operator, evaluateFormulaAst(ast.operand, context));\n            case "binary_op":\n                if (ast.operator === " ") {\n                    return evaluateIntersectionAst(ast, context);\n                }\n                return evaluateBinaryOp(ast.operator, evaluateFormulaAst(ast.left, context), evaluateFormulaAst(ast.right, context));\n            case "function_call":\n                return evaluateFunctionCall(ast.name, ast.args, context);\n            default:\n                throw new Error(`Unsupported AST node: ${ast.type}`);\n        }\n    }\n    function evaluateRangeAst(ast, context) {\n        var _a, _b;\n        if (ast.start.type === "cell" && ast.end.type === "cell") {\n            const sheet = (_b = (_a = ast.start.sheet) !== null && _a !== void 0 ? _a : ast.end.sheet) !== null && _b !== void 0 ? _b : null;\n            if (context.resolveRange) {\n                return context.resolveRange(ast.start.ref, ast.end.ref, sheet);\n            }\n            return [\n                evaluateFormulaAst(ast.start, context),\n                evaluateFormulaAst(ast.end, context)\n            ];\n        }\n        return [\n            evaluateFormulaAst(ast.start, context),\n            evaluateFormulaAst(ast.end, context)\n        ];\n    }\n    function evaluateIntersectionAst(ast, context) {\n        var _a, _b, _c, _d;\n        const leftArea = toCellArea(ast.left);\n        const rightArea = toCellArea(ast.right);\n        if (!leftArea || !rightArea) {\n            throw new Error("Unsupported intersection operands");\n        }\n        const leftSheet = (_b = (_a = leftArea.sheet) !== null && _a !== void 0 ? _a : rightArea.sheet) !== null && _b !== void 0 ? _b : null;\n        const rightSheet = (_d = (_c = rightArea.sheet) !== null && _c !== void 0 ? _c : leftArea.sheet) !== null && _d !== void 0 ? _d : null;\n        if (leftSheet !== rightSheet) {\n            return "#NULL!";\n        }\n        const startRow = Math.max(leftArea.startRow, rightArea.startRow);\n        const endRow = Math.min(leftArea.endRow, rightArea.endRow);\n        const startCol = Math.max(leftArea.startCol, rightArea.startCol);\n        const endCol = Math.min(leftArea.endCol, rightArea.endCol);\n        if (startRow > endRow || startCol > endCol) {\n            return "#NULL!";\n        }\n        const startRef = `${colToLetters(startCol)}${startRow}`;\n        const endRef = `${colToLetters(endCol)}${endRow}`;\n        if (context.resolveRange) {\n            return context.resolveRange(startRef, endRef, leftSheet);\n        }\n        return [[`${startRef}:${endRef}`]];\n    }\n    function evaluateUnaryOp(operator, operand) {\n        const numericValue = toNumber(operand);\n        if (operator === "+") {\n            return numericValue;\n        }\n        if (operator === "-") {\n            return -numericValue;\n        }\n        throw new Error(`Unsupported unary operator: ${operator}`);\n    }\n    function evaluatePostfixOp(operator, operand) {\n        if (operator === "%") {\n            return toNumber(operand) / 100;\n        }\n        throw new Error(`Unsupported postfix operator: ${operator}`);\n    }\n    function evaluateBinaryOp(operator, left, right) {\n        switch (operator) {\n            case "+":\n                return toNumber(left) + toNumber(right);\n            case "-":\n                return toNumber(left) - toNumber(right);\n            case "*":\n                return toNumber(left) * toNumber(right);\n            case "/":\n                return toNumber(left) / toNumber(right);\n            case "&":\n                return `${toText(left)}${toText(right)}`;\n            case "=":\n                return looselyEquals(left, right);\n            case "<>":\n                return !looselyEquals(left, right);\n            case "<":\n                return compareValues(left, right) < 0;\n            case "<=":\n                return compareValues(left, right) <= 0;\n            case ">":\n                return compareValues(left, right) > 0;\n            case ">=":\n                return compareValues(left, right) >= 0;\n            default:\n                throw new Error(`Unsupported binary operator: ${operator}`);\n        }\n    }\n    function toCellArea(node) {\n        var _a, _b;\n        if (node.type === "cell") {\n            const position = parseCellRef(node.ref);\n            if (!position) {\n                return null;\n            }\n            return {\n                sheet: node.sheet,\n                startRow: position.row,\n                endRow: position.row,\n                startCol: position.col,\n                endCol: position.col\n            };\n        }\n        if (node.type === "range" && node.start.type === "cell" && node.end.type === "cell") {\n            const start = parseCellRef(node.start.ref);\n            const end = parseCellRef(node.end.ref);\n            if (!start || !end) {\n                return null;\n            }\n            return {\n                sheet: (_b = (_a = node.start.sheet) !== null && _a !== void 0 ? _a : node.end.sheet) !== null && _b !== void 0 ? _b : null,\n                startRow: Math.min(start.row, end.row),\n                endRow: Math.max(start.row, end.row),\n                startCol: Math.min(start.col, end.col),\n                endCol: Math.max(start.col, end.col)\n            };\n        }\n        return null;\n    }\n    function parseCellRef(ref) {\n        const match = String(ref).toUpperCase().match(/^\\$?([A-Z]{1,3})\\$?(\\d+)$/);\n        if (!match) {\n            return null;\n        }\n        return {\n            col: lettersToCol(match[1]),\n            row: Number(match[2])\n        };\n    }\n    function lettersToCol(letters) {\n        let value = 0;\n        for (const char of letters) {\n            value = value * 26 + (char.charCodeAt(0) - 64);\n        }\n        return value;\n    }\n    function colToLetters(column) {\n        let current = column;\n        let result = "";\n        while (current > 0) {\n            const remainder = (current - 1) % 26;\n            result = String.fromCharCode(65 + remainder) + result;\n            current = Math.floor((current - 1) / 26);\n        }\n        return result;\n    }\n    function evaluateFunctionCall(name, args, context) {\n        const upperName = name.toUpperCase();\n        const evaluator = FORMULA_FUNCTION_EVALUATORS[upperName];\n        if (!evaluator) {\n            throw new Error(`Unsupported formula function: ${name}`);\n        }\n        return evaluator(args, context);\n    }\n    const LOGICAL_FUNCTION_EVALUATORS = {\n        IF: evaluateIf,\n        IFERROR: evaluateIfError,\n        AND: evaluateAnd,\n        OR: evaluateOr,\n        NOT: evaluateNot\n    };\n    const NUMERIC_FUNCTION_EVALUATORS = {\n        ABS: evaluateAbs,\n        INT: evaluateInt,\n        ROUND: (args, context) => evaluateRound(args, context, "round"),\n        ROUNDUP: (args, context) => evaluateRound(args, context, "up"),\n        ROUNDDOWN: (args, context) => evaluateRound(args, context, "down"),\n        SUM: evaluateSum,\n        SUMPRODUCT: evaluateSumProduct,\n        MIN: evaluateMin,\n        MAX: evaluateMax,\n        AVERAGE: evaluateAverage,\n        COUNT: evaluateCount,\n        COUNTA: evaluateCountA,\n        COUNTIF: evaluateCountIf,\n        COUNTIFS: evaluateCountIfs,\n        SUMIF: evaluateSumIf,\n        SUMIFS: evaluateSumIfs,\n        AVERAGEIF: evaluateAverageIf,\n        AVERAGEIFS: evaluateAverageIfs,\n        SUBTOTAL: evaluateSubtotal\n    };\n    const DATE_FUNCTION_EVALUATORS = {\n        DATE: evaluateDate,\n        DATEVALUE: evaluateDateValue,\n        TODAY: (_args, context) => evaluateToday(context),\n        WEEKDAY: evaluateWeekday,\n        DAY: evaluateDay,\n        MONTH: evaluateMonth,\n        YEAR: evaluateYear,\n        EDATE: evaluateEDate,\n        EOMONTH: evaluateEoMonth\n    };\n    const TEXT_FUNCTION_EVALUATORS = {\n        VALUE: evaluateValue,\n        REPT: evaluateRept,\n        SUBSTITUTE: evaluateSubstitute,\n        TEXT: evaluateText,\n        LEN: evaluateLen,\n        LOWER: evaluateLower,\n        UPPER: evaluateUpper,\n        FIND: (args, context) => evaluateFind(args, context, false),\n        SEARCH: (args, context) => evaluateFind(args, context, true),\n        LEFT: evaluateLeft,\n        RIGHT: evaluateRight,\n        MID: evaluateMid,\n        TRIM: evaluateTrim,\n        REPLACE: evaluateReplace,\n        CONCATENATE: evaluateConcatenate\n    };\n    const LOOKUP_FUNCTION_EVALUATORS = {\n        MATCH: evaluateMatch,\n        INDEX: evaluateIndex,\n        VLOOKUP: evaluateVLookup,\n        HLOOKUP: evaluateHLookup,\n        XLOOKUP: evaluateXLookup,\n        COLUMN: evaluateColumn,\n        ROW: evaluateRow\n    };\n    const INFORMATION_FUNCTION_EVALUATORS = {\n        ISBLANK: evaluateIsBlank,\n        ISNUMBER: evaluateIsNumber,\n        ISTEXT: evaluateIsText,\n        ISERROR: evaluateIsError,\n        ISNA: evaluateIsNa,\n        NA: () => evaluateNa()\n    };\n    const FORMULA_FUNCTION_EVALUATORS = {\n        ...LOGICAL_FUNCTION_EVALUATORS,\n        ...NUMERIC_FUNCTION_EVALUATORS,\n        ...DATE_FUNCTION_EVALUATORS,\n        ...TEXT_FUNCTION_EVALUATORS,\n        ...LOOKUP_FUNCTION_EVALUATORS,\n        ...INFORMATION_FUNCTION_EVALUATORS\n    };\n    function evaluateIf(args, context) {\n        const condition = toBoolean(evaluateFormulaAst(args[0], context));\n        if (condition) {\n            return args[1] ? evaluateFormulaAst(args[1], context) : true;\n        }\n        return args[2] ? evaluateFormulaAst(args[2], context) : false;\n    }\n    function evaluateIfError(args, context) {\n        const primary = evaluateFormulaAst(args[0], context);\n        if (isFormulaError(primary)) {\n            return args[1] ? evaluateFormulaAst(args[1], context) : "";\n        }\n        return primary;\n    }\n    function evaluateAnd(args, context) {\n        return args.every((arg) => toBoolean(evaluateFormulaAst(arg, context)));\n    }\n    function evaluateOr(args, context) {\n        return args.some((arg) => toBoolean(evaluateFormulaAst(arg, context)));\n    }\n    function evaluateNot(args, context) {\n        return !toBoolean(evaluateFormulaAst(args[0], context));\n    }\n    function evaluateDate(args, context) {\n        const year = toNumber(evaluateFormulaAst(args[0], context));\n        const month = toNumber(evaluateFormulaAst(args[1], context));\n        const day = toNumber(evaluateFormulaAst(args[2], context));\n        return excelSerialFromDate(year, month, day);\n    }\n    function evaluateValue(args, context) {\n        const rawValue = evaluateFormulaAst(args[0], context);\n        if (typeof rawValue === "number") {\n            return rawValue;\n        }\n        const text = toText(rawValue).trim();\n        if (!text) {\n            return 0;\n        }\n        const dateValue = parseDateLikeString(text);\n        if (dateValue !== null) {\n            return dateValue;\n        }\n        const normalized = text.replace(/,/g, "");\n        const parsed = Number(normalized);\n        if (!Number.isNaN(parsed)) {\n            return parsed;\n        }\n        throw new Error(`Unsupported VALUE input: ${text}`);\n    }\n    function evaluateRound(args, context, mode) {\n        const value = toNumber(evaluateFormulaAst(args[0], context));\n        const digits = args[1] ? Math.trunc(toNumber(evaluateFormulaAst(args[1], context))) : 0;\n        const factor = Math.pow(10, digits);\n        const scaled = value * factor;\n        if (mode === "round") {\n            return Math.round(scaled) / factor;\n        }\n        if (mode === "up") {\n            return (scaled >= 0 ? Math.ceil(scaled) : Math.floor(scaled)) / factor;\n        }\n        return (scaled >= 0 ? Math.floor(scaled) : Math.ceil(scaled)) / factor;\n    }\n    function evaluateInt(args, context) {\n        return Math.floor(toNumber(evaluateFormulaAst(args[0], context)));\n    }\n    function evaluateAbs(args, context) {\n        return Math.abs(toNumber(evaluateFormulaAst(args[0], context)));\n    }\n    function evaluateSum(args, context) {\n        return args\n            .flatMap((arg) => flattenValues(evaluateFormulaAst(arg, context)))\n            .reduce((sum, value) => sum + toNumber(value), 0);\n    }\n    function evaluateSumProduct(args, context) {\n        var _a;\n        const vectors = args.map((arg) => flattenValues(evaluateFormulaAst(arg, context)));\n        if (!vectors.length) {\n            return 0;\n        }\n        const lengths = vectors.map((vector) => vector.length);\n        const maxLength = Math.max(...lengths);\n        const normalized = vectors.map((vector) => {\n            if (vector.length === maxLength) {\n                return vector;\n            }\n            if (vector.length === 1) {\n                return Array.from({ length: maxLength }, () => vector[0]);\n            }\n            throw new Error("SUMPRODUCT arguments must have the same length");\n        });\n        let total = 0;\n        for (let index = 0; index < maxLength; index += 1) {\n            let product = 1;\n            for (const vector of normalized) {\n                product *= toNumber((_a = vector[index]) !== null && _a !== void 0 ? _a : 0);\n            }\n            total += product;\n        }\n        return total;\n    }\n    function evaluateRept(args, context) {\n        const text = toText(evaluateFormulaAst(args[0], context));\n        const countValue = evaluateFormulaAst(args[1], context);\n        const count = Math.max(0, Math.floor(toNumber(countValue)));\n        return text.repeat(count);\n    }\n    function evaluateSubstitute(args, context) {\n        const text = toText(evaluateFormulaAst(args[0], context));\n        const oldText = toText(evaluateFormulaAst(args[1], context));\n        const newText = toText(evaluateFormulaAst(args[2], context));\n        const instanceNum = args[3] ? Math.floor(toNumber(evaluateFormulaAst(args[3], context))) : null;\n        if (!oldText) {\n            return text;\n        }\n        if (!instanceNum || instanceNum < 1) {\n            return text.split(oldText).join(newText);\n        }\n        let occurrence = 0;\n        let searchIndex = 0;\n        let result = "";\n        while (true) {\n            const foundIndex = text.indexOf(oldText, searchIndex);\n            if (foundIndex === -1) {\n                result += text.slice(searchIndex);\n                break;\n            }\n            occurrence += 1;\n            result += text.slice(searchIndex, foundIndex);\n            if (occurrence === instanceNum) {\n                result += newText;\n            }\n            else {\n                result += oldText;\n            }\n            searchIndex = foundIndex + oldText.length;\n        }\n        return result;\n    }\n    function evaluateMatch(args, context) {\n        const lookupValue = evaluateFormulaAst(args[0], context);\n        const lookupArray = flattenValues(evaluateFormulaAst(args[1], context));\n        for (let index = 0; index < lookupArray.length; index += 1) {\n            if (looselyEquals(lookupArray[index], lookupValue)) {\n                return index + 1;\n            }\n        }\n        return "#N/A";\n    }\n    function evaluateIndex(args, context) {\n        var _a, _b, _c, _d;\n        const source = evaluateFormulaAst(args[0], context);\n        const rowNumber = args[1] ? Math.max(1, Math.floor(toNumber(evaluateFormulaAst(args[1], context)))) : 1;\n        const columnNumber = args[2] ? Math.max(1, Math.floor(toNumber(evaluateFormulaAst(args[2], context)))) : 1;\n        if (!Array.isArray(source)) {\n            return source;\n        }\n        if (source.length > 0 && Array.isArray(source[0])) {\n            const row = (_a = source[rowNumber - 1]) !== null && _a !== void 0 ? _a : [];\n            return (_b = row[columnNumber - 1]) !== null && _b !== void 0 ? _b : null;\n        }\n        if (columnNumber === 1) {\n            return (_c = source[rowNumber - 1]) !== null && _c !== void 0 ? _c : null;\n        }\n        return (_d = source[columnNumber - 1]) !== null && _d !== void 0 ? _d : null;\n    }\n    function evaluateVLookup(args, context) {\n        var _a, _b, _c;\n        const lookupValue = evaluateFormulaAst(args[0], context);\n        const table = normalizeToMatrix(evaluateFormulaAst(args[1], context));\n        const columnNumber = Math.max(1, Math.floor(toNumber(evaluateFormulaAst(args[2], context))));\n        const approximate = args[3] ? toBoolean(evaluateFormulaAst(args[3], context)) : true;\n        if (approximate) {\n            let matchedRow = null;\n            for (const row of table) {\n                if (looselyEquals(row[0], lookupValue)) {\n                    return (_a = row[columnNumber - 1]) !== null && _a !== void 0 ? _a : "#N/A";\n                }\n                if (compareValues(row[0], lookupValue) <= 0) {\n                    matchedRow = row;\n                }\n            }\n            return matchedRow ? (_b = matchedRow[columnNumber - 1]) !== null && _b !== void 0 ? _b : "#N/A" : "#N/A";\n        }\n        for (const row of table) {\n            if (looselyEquals(row[0], lookupValue)) {\n                return (_c = row[columnNumber - 1]) !== null && _c !== void 0 ? _c : "#N/A";\n            }\n        }\n        return "#N/A";\n    }\n    function evaluateHLookup(args, context) {\n        var _a, _b, _c, _d, _e;\n        const lookupValue = evaluateFormulaAst(args[0], context);\n        const table = normalizeToMatrix(evaluateFormulaAst(args[1], context));\n        const rowNumber = Math.max(1, Math.floor(toNumber(evaluateFormulaAst(args[2], context))));\n        const approximate = args[3] ? toBoolean(evaluateFormulaAst(args[3], context)) : true;\n        const headerRow = (_a = table[0]) !== null && _a !== void 0 ? _a : [];\n        const targetRow = (_b = table[rowNumber - 1]) !== null && _b !== void 0 ? _b : [];\n        if (approximate) {\n            let matchedIndex = -1;\n            for (let index = 0; index < headerRow.length; index += 1) {\n                if (looselyEquals(headerRow[index], lookupValue)) {\n                    return (_c = targetRow[index]) !== null && _c !== void 0 ? _c : "#N/A";\n                }\n                if (compareValues(headerRow[index], lookupValue) <= 0) {\n                    matchedIndex = index;\n                }\n            }\n            return matchedIndex >= 0 ? (_d = targetRow[matchedIndex]) !== null && _d !== void 0 ? _d : "#N/A" : "#N/A";\n        }\n        for (let index = 0; index < headerRow.length; index += 1) {\n            if (looselyEquals(headerRow[index], lookupValue)) {\n                return (_e = targetRow[index]) !== null && _e !== void 0 ? _e : "#N/A";\n            }\n        }\n        return "#N/A";\n    }\n    function evaluateXLookup(args, context) {\n        var _a, _b, _c, _d, _e;\n        const lookupValue = evaluateFormulaAst(args[0], context);\n        const lookupArray = flattenValues(evaluateFormulaAst(args[1], context));\n        const returnArray = flattenValues(evaluateFormulaAst(args[2], context));\n        const notFoundValue = args[3] ? evaluateFormulaAst(args[3], context) : "#N/A";\n        const matchMode = args[4] ? Math.trunc(toNumber(evaluateFormulaAst(args[4], context))) : 0;\n        const searchMode = args[5] ? Math.trunc(toNumber(evaluateFormulaAst(args[5], context))) : 1;\n        if (searchMode === 2 || searchMode === -2) {\n            const matchedIndex = findXLookupBinaryIndex(lookupArray, lookupValue, matchMode, searchMode);\n            return matchedIndex >= 0 ? (_a = returnArray[matchedIndex]) !== null && _a !== void 0 ? _a : notFoundValue : notFoundValue;\n        }\n        const indices = searchMode === -1\n            ? Array.from({ length: lookupArray.length }, (_, index) => lookupArray.length - 1 - index)\n            : Array.from({ length: lookupArray.length }, (_, index) => index);\n        for (const index of indices) {\n            if (looselyEquals(lookupArray[index], lookupValue)) {\n                return (_b = returnArray[index]) !== null && _b !== void 0 ? _b : notFoundValue;\n            }\n        }\n        if (matchMode === 2) {\n            const matcher = createExcelWildcardMatcher(lookupValue);\n            if (!matcher) {\n                return notFoundValue;\n            }\n            for (const index of indices) {\n                if (matcher(toText(lookupArray[index]))) {\n                    return (_c = returnArray[index]) !== null && _c !== void 0 ? _c : notFoundValue;\n                }\n            }\n            return notFoundValue;\n        }\n        if (matchMode === -1) {\n            let matchedIndex = -1;\n            for (const index of indices) {\n                if (compareValues(lookupArray[index], lookupValue) <= 0) {\n                    matchedIndex = index;\n                    if (searchMode === -1) {\n                        break;\n                    }\n                }\n            }\n            return matchedIndex >= 0 ? (_d = returnArray[matchedIndex]) !== null && _d !== void 0 ? _d : notFoundValue : notFoundValue;\n        }\n        if (matchMode === 1) {\n            let matchedIndex = -1;\n            for (const index of indices) {\n                if (compareValues(lookupArray[index], lookupValue) >= 0) {\n                    matchedIndex = index;\n                    break;\n                }\n            }\n            return matchedIndex >= 0 ? (_e = returnArray[matchedIndex]) !== null && _e !== void 0 ? _e : notFoundValue : notFoundValue;\n        }\n        return notFoundValue;\n    }\n    function findXLookupBinaryIndex(lookupArray, lookupValue, matchMode, searchMode) {\n        const descending = searchMode === -2;\n        let low = 0;\n        let high = lookupArray.length - 1;\n        let fallbackIndex = -1;\n        while (low <= high) {\n            const mid = Math.floor((low + high) / 2);\n            const compare = compareValues(lookupArray[mid], lookupValue);\n            if (looselyEquals(lookupArray[mid], lookupValue)) {\n                return mid;\n            }\n            if (matchMode === -1) {\n                if (compare <= 0 && (fallbackIndex < 0 || compareValues(lookupArray[mid], lookupArray[fallbackIndex]) > 0)) {\n                    fallbackIndex = mid;\n                }\n            }\n            else if (matchMode === 1) {\n                if (compare >= 0 && (fallbackIndex < 0 || compareValues(lookupArray[mid], lookupArray[fallbackIndex]) < 0)) {\n                    fallbackIndex = mid;\n                }\n            }\n            if ((!descending && compare < 0) || (descending && compare > 0)) {\n                low = mid + 1;\n            }\n            else {\n                high = mid - 1;\n            }\n        }\n        return fallbackIndex;\n    }\n    function evaluateText(args, context) {\n        const value = evaluateFormulaAst(args[0], context);\n        const format = toText(evaluateFormulaAst(args[1], context)).toLowerCase();\n        if (format === "0000") {\n            const number = Math.floor(Math.abs(toNumber(value)));\n            const sign = toNumber(value) < 0 ? "-" : "";\n            return `${sign}${String(number).padStart(4, "0")}`;\n        }\n        if (format === "0" || format === "0.0" || format === "0.00") {\n            const digits = format.includes(".") ? format.split(".")[1].length : 0;\n            return toNumber(value).toFixed(digits);\n        }\n        if (format === "#,##0" || format === "#,##0.00") {\n            const digits = format.includes(".") ? format.split(".")[1].length : 0;\n            return toNumber(value).toLocaleString("en-US", {\n                minimumFractionDigits: digits,\n                maximumFractionDigits: digits\n            });\n        }\n        if (format === "yyyy/mm/dd" || format === "yyyy-mm-dd") {\n            const parts = excelSerialToDateParts(toNumber(value));\n            const separator = format.includes("/") ? "/" : "-";\n            return `${parts.year}${separator}${parts.month}${separator}${parts.day}`;\n        }\n        return toText(value);\n    }\n    function createExcelWildcardMatcher(patternValue) {\n        const pattern = toText(patternValue);\n        if (!pattern) {\n            return null;\n        }\n        let regexText = "^";\n        for (let index = 0; index < pattern.length; index += 1) {\n            const char = pattern[index];\n            if (char === "~" && index + 1 < pattern.length) {\n                regexText += escapeRegExp(pattern[index + 1]);\n                index += 1;\n                continue;\n            }\n            if (char === "*") {\n                regexText += ".*";\n                continue;\n            }\n            if (char === "?") {\n                regexText += ".";\n                continue;\n            }\n            regexText += escapeRegExp(char);\n        }\n        regexText += "$";\n        const regex = new RegExp(regexText, "i");\n        return (value) => regex.test(String(value !== null && value !== void 0 ? value : ""));\n    }\n    function escapeRegExp(value) {\n        return String(value).replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&");\n    }\n    function evaluateToday(context) {\n        var _a;\n        const now = (_a = context.currentDate) !== null && _a !== void 0 ? _a : new Date();\n        return excelSerialFromDate(now.getUTCFullYear(), now.getUTCMonth() + 1, now.getUTCDate());\n    }\n    function evaluateWeekday(args, context) {\n        const serial = toNumber(evaluateFormulaAst(args[0], context));\n        const returnType = args[1] ? Math.max(1, Math.floor(toNumber(evaluateFormulaAst(args[1], context)))) : 1;\n        const excelEpoch = Date.UTC(1899, 11, 30);\n        const utcDate = new Date(excelEpoch + Math.floor(serial) * 86400000);\n        const jsDay = utcDate.getUTCDay(); // 0=Sun..6=Sat\n        switch (returnType) {\n            case 1:\n                return jsDay + 1;\n            case 2:\n                return jsDay === 0 ? 7 : jsDay;\n            case 3:\n                return jsDay === 0 ? 6 : jsDay - 1;\n            default:\n                return jsDay + 1;\n        }\n    }\n    function evaluateDateValue(args, context) {\n        const text = toText(evaluateFormulaAst(args[0], context)).trim();\n        const dateValue = parseDateLikeString(text);\n        if (dateValue === null) {\n            throw new Error(`Unsupported DATEVALUE input: ${text}`);\n        }\n        return dateValue;\n    }\n    function evaluateLen(args, context) {\n        return toText(evaluateFormulaAst(args[0], context)).length;\n    }\n    function evaluateLower(args, context) {\n        return toText(evaluateFormulaAst(args[0], context)).toLowerCase();\n    }\n    function evaluateFind(args, context, ignoreCase) {\n        const findTextRaw = toText(evaluateFormulaAst(args[0], context));\n        const withinTextRaw = toText(evaluateFormulaAst(args[1], context));\n        const start = args[2] ? Math.max(1, Math.floor(toNumber(evaluateFormulaAst(args[2], context)))) : 1;\n        const findText = ignoreCase ? findTextRaw.toLowerCase() : findTextRaw;\n        const withinText = ignoreCase ? withinTextRaw.toLowerCase() : withinTextRaw;\n        const index = withinText.indexOf(findText, start - 1);\n        return index === -1 ? "#VALUE!" : index + 1;\n    }\n    function evaluateLeft(args, context) {\n        const text = toText(evaluateFormulaAst(args[0], context));\n        const count = args[1] ? Math.max(0, Math.floor(toNumber(evaluateFormulaAst(args[1], context)))) : 1;\n        return text.slice(0, count);\n    }\n    function evaluateRight(args, context) {\n        const text = toText(evaluateFormulaAst(args[0], context));\n        const count = args[1] ? Math.max(0, Math.floor(toNumber(evaluateFormulaAst(args[1], context)))) : 1;\n        return count === 0 ? "" : text.slice(-count);\n    }\n    function evaluateMid(args, context) {\n        const text = toText(evaluateFormulaAst(args[0], context));\n        const start = Math.max(1, Math.floor(toNumber(evaluateFormulaAst(args[1], context))));\n        const count = Math.max(0, Math.floor(toNumber(evaluateFormulaAst(args[2], context))));\n        return text.slice(start - 1, start - 1 + count);\n    }\n    function evaluateTrim(args, context) {\n        const text = toText(evaluateFormulaAst(args[0], context));\n        return text.trim().replace(/\\s+/g, " ");\n    }\n    function evaluateReplace(args, context) {\n        const text = toText(evaluateFormulaAst(args[0], context));\n        const start = Math.max(1, Math.floor(toNumber(evaluateFormulaAst(args[1], context))));\n        const count = Math.max(0, Math.floor(toNumber(evaluateFormulaAst(args[2], context))));\n        const newText = toText(evaluateFormulaAst(args[3], context));\n        const prefix = text.slice(0, start - 1);\n        const suffix = text.slice(start - 1 + count);\n        return `${prefix}${newText}${suffix}`;\n    }\n    function evaluateDay(args, context) {\n        const serial = coerceDateSerial(evaluateFormulaAst(args[0], context));\n        return excelSerialToDateParts(serial).day;\n    }\n    function evaluateMonth(args, context) {\n        const serial = coerceDateSerial(evaluateFormulaAst(args[0], context));\n        return excelSerialToDateParts(serial).month;\n    }\n    function evaluateYear(args, context) {\n        const serial = coerceDateSerial(evaluateFormulaAst(args[0], context));\n        return excelSerialToDateParts(serial).year;\n    }\n    function evaluateSubtotal(args, context) {\n        const functionNum = Math.floor(toNumber(evaluateFormulaAst(args[0], context)));\n        const values = args.slice(1).flatMap((arg) => flattenValues(evaluateFormulaAst(arg, context)));\n        switch (functionNum) {\n            case 1:\n            case 101:\n                return values.length ? values.reduce((sum, value) => sum + toNumber(value), 0) / values.length : "#DIV/0!";\n            case 4:\n            case 104:\n                return values.reduce((max, value) => Math.max(max, toNumber(value)), Number.NEGATIVE_INFINITY);\n            case 5:\n            case 105:\n                return values.reduce((min, value) => Math.min(min, toNumber(value)), Number.POSITIVE_INFINITY);\n            case 9:\n            case 109:\n                return values.reduce((sum, value) => sum + toNumber(value), 0);\n            default:\n                throw new Error(`Unsupported SUBTOTAL function_num: ${functionNum}`);\n        }\n    }\n    function evaluateUpper(args, context) {\n        return toText(evaluateFormulaAst(args[0], context)).toUpperCase();\n    }\n    function evaluateConcatenate(args, context) {\n        return args.map((arg) => toText(evaluateFormulaAst(arg, context))).join("");\n    }\n    function evaluateIsBlank(args, context) {\n        const value = evaluateFormulaAst(args[0], context);\n        return value === null || value === undefined || value === "";\n    }\n    function evaluateIsNumber(args, context) {\n        const value = evaluateFormulaAst(args[0], context);\n        if (typeof value === "number") {\n            return true;\n        }\n        if (typeof value === "string") {\n            if (!value.trim()) {\n                return false;\n            }\n            const parsed = Number(value.replace(/,/g, ""));\n            return !Number.isNaN(parsed);\n        }\n        return false;\n    }\n    function evaluateIsText(args, context) {\n        const value = evaluateFormulaAst(args[0], context);\n        return typeof value === "string";\n    }\n    function evaluateIsError(args, context) {\n        return isFormulaError(evaluateFormulaAst(args[0], context));\n    }\n    function evaluateIsNa(args, context) {\n        return evaluateFormulaAst(args[0], context) === "#N/A";\n    }\n    function evaluateNa() {\n        return "#N/A";\n    }\n    function evaluateMin(args, context) {\n        const values = args.flatMap((arg) => flattenValues(evaluateFormulaAst(arg, context))).map((value) => toNumber(value));\n        return values.length ? Math.min(...values) : 0;\n    }\n    function evaluateMax(args, context) {\n        const values = args.flatMap((arg) => flattenValues(evaluateFormulaAst(arg, context))).map((value) => toNumber(value));\n        return values.length ? Math.max(...values) : 0;\n    }\n    function evaluateAverage(args, context) {\n        const values = args.flatMap((arg) => flattenValues(evaluateFormulaAst(arg, context))).map((value) => toNumber(value));\n        if (!values.length) {\n            return "#DIV/0!";\n        }\n        return values.reduce((sum, value) => sum + value, 0) / values.length;\n    }\n    function evaluateColumn(args, context) {\n        if (!args.length) {\n            if (context.currentCellRef) {\n                return columnNumberFromRef(context.currentCellRef);\n            }\n            throw new Error("COLUMN without explicit reference is not supported");\n        }\n        const node = args[0];\n        if (node.type === "cell") {\n            return columnNumberFromRef(node.ref);\n        }\n        if (node.type === "range" && node.start.type === "cell") {\n            return columnNumberFromRef(node.start.ref);\n        }\n        const value = evaluateFormulaAst(node, context);\n        if (typeof value === "string" && /\\$?[A-Za-z]{1,3}\\$?\\d+/.test(value)) {\n            return columnNumberFromRef(value);\n        }\n        throw new Error("Unsupported COLUMN argument");\n    }\n    function evaluateRow(args, context) {\n        if (!args.length) {\n            if (context.currentCellRef) {\n                return rowNumberFromRef(context.currentCellRef);\n            }\n            throw new Error("ROW without explicit reference is not supported");\n        }\n        const node = args[0];\n        if (node.type === "cell") {\n            return rowNumberFromRef(node.ref);\n        }\n        if (node.type === "range" && node.start.type === "cell") {\n            return rowNumberFromRef(node.start.ref);\n        }\n        const value = evaluateFormulaAst(node, context);\n        if (typeof value === "string" && /\\$?[A-Za-z]{1,3}\\$?\\d+/.test(value)) {\n            return rowNumberFromRef(value);\n        }\n        throw new Error("Unsupported ROW argument");\n    }\n    function evaluateEDate(args, context) {\n        const startSerial = coerceDateSerial(evaluateFormulaAst(args[0], context));\n        const months = Math.trunc(toNumber(evaluateFormulaAst(args[1], context)));\n        const parts = excelSerialToDateParts(startSerial);\n        const jsDate = new Date(Date.UTC(parts.year, parts.month - 1 + months, parts.day));\n        return excelSerialFromDate(jsDate.getUTCFullYear(), jsDate.getUTCMonth() + 1, jsDate.getUTCDate());\n    }\n    function evaluateEoMonth(args, context) {\n        const startSerial = coerceDateSerial(evaluateFormulaAst(args[0], context));\n        const months = Math.trunc(toNumber(evaluateFormulaAst(args[1], context)));\n        const parts = excelSerialToDateParts(startSerial);\n        const jsDate = new Date(Date.UTC(parts.year, parts.month + months, 0));\n        return excelSerialFromDate(jsDate.getUTCFullYear(), jsDate.getUTCMonth() + 1, jsDate.getUTCDate());\n    }\n    function evaluateCountIf(args, context) {\n        const values = flattenValues(evaluateFormulaAst(args[0], context));\n        const criteria = toText(evaluateFormulaAst(args[1], context));\n        return values.filter((value) => matchesCriteria(value, criteria)).length;\n    }\n    function evaluateCount(args, context) {\n        return args\n            .flatMap((arg) => flattenValues(evaluateFormulaAst(arg, context)))\n            .filter((value) => isCountableNumber(value))\n            .length;\n    }\n    function evaluateCountA(args, context) {\n        return args\n            .flatMap((arg) => flattenValues(evaluateFormulaAst(arg, context)))\n            .filter((value) => value !== null && value !== undefined && String(value) !== "")\n            .length;\n    }\n    function evaluateSumIf(args, context) {\n        var _a;\n        const criteriaValues = flattenValues(evaluateFormulaAst(args[0], context));\n        const criteria = toText(evaluateFormulaAst(args[1], context));\n        const sumValues = args[2]\n            ? flattenValues(evaluateFormulaAst(args[2], context))\n            : criteriaValues;\n        let total = 0;\n        for (let index = 0; index < criteriaValues.length; index += 1) {\n            if (matchesCriteria(criteriaValues[index], criteria)) {\n                total += toNumber((_a = sumValues[index]) !== null && _a !== void 0 ? _a : 0);\n            }\n        }\n        return total;\n    }\n    function evaluateCountIfs(args, context) {\n        const criteriaPairs = [];\n        for (let index = 0; index + 1 < args.length; index += 2) {\n            criteriaPairs.push({\n                values: flattenValues(evaluateFormulaAst(args[index], context)),\n                criteria: toText(evaluateFormulaAst(args[index + 1], context))\n            });\n        }\n        const maxLength = criteriaPairs.reduce((max, pair) => Math.max(max, pair.values.length), 0);\n        let count = 0;\n        for (let index = 0; index < maxLength; index += 1) {\n            const matched = criteriaPairs.every((pair) => matchesCriteria(pair.values[index], pair.criteria));\n            if (matched) {\n                count += 1;\n            }\n        }\n        return count;\n    }\n    function evaluateSumIfs(args, context) {\n        var _a;\n        const sumValues = flattenValues(evaluateFormulaAst(args[0], context));\n        const criteriaPairs = [];\n        for (let index = 1; index + 1 < args.length; index += 2) {\n            criteriaPairs.push({\n                values: flattenValues(evaluateFormulaAst(args[index], context)),\n                criteria: toText(evaluateFormulaAst(args[index + 1], context))\n            });\n        }\n        let total = 0;\n        for (let index = 0; index < sumValues.length; index += 1) {\n            const matched = criteriaPairs.every((pair) => matchesCriteria(pair.values[index], pair.criteria));\n            if (matched) {\n                total += toNumber((_a = sumValues[index]) !== null && _a !== void 0 ? _a : 0);\n            }\n        }\n        return total;\n    }\n    function evaluateAverageIf(args, context) {\n        var _a;\n        const criteriaValues = flattenValues(evaluateFormulaAst(args[0], context));\n        const criteria = toText(evaluateFormulaAst(args[1], context));\n        const averageValues = args[2]\n            ? flattenValues(evaluateFormulaAst(args[2], context))\n            : criteriaValues;\n        let total = 0;\n        let count = 0;\n        for (let index = 0; index < criteriaValues.length; index += 1) {\n            if (matchesCriteria(criteriaValues[index], criteria)) {\n                total += toNumber((_a = averageValues[index]) !== null && _a !== void 0 ? _a : 0);\n                count += 1;\n            }\n        }\n        return count === 0 ? "#DIV/0!" : total / count;\n    }\n    function evaluateAverageIfs(args, context) {\n        var _a;\n        const averageValues = flattenValues(evaluateFormulaAst(args[0], context));\n        const criteriaPairs = [];\n        for (let index = 1; index + 1 < args.length; index += 2) {\n            criteriaPairs.push({\n                values: flattenValues(evaluateFormulaAst(args[index], context)),\n                criteria: toText(evaluateFormulaAst(args[index + 1], context))\n            });\n        }\n        let total = 0;\n        let count = 0;\n        for (let index = 0; index < averageValues.length; index += 1) {\n            const matched = criteriaPairs.every((pair) => matchesCriteria(pair.values[index], pair.criteria));\n            if (matched) {\n                total += toNumber((_a = averageValues[index]) !== null && _a !== void 0 ? _a : 0);\n                count += 1;\n            }\n        }\n        return count === 0 ? "#DIV/0!" : total / count;\n    }\n    function excelSerialFromDate(year, month, day) {\n        const utcDate = Date.UTC(year, month - 1, day);\n        const excelEpoch = Date.UTC(1899, 11, 30);\n        return Math.floor((utcDate - excelEpoch) / 86400000);\n    }\n    function excelSerialToDateParts(serial) {\n        const excelEpoch = Date.UTC(1899, 11, 30);\n        const utcDate = new Date(excelEpoch + Math.floor(serial) * 86400000);\n        return {\n            year: utcDate.getUTCFullYear(),\n            month: utcDate.getUTCMonth() + 1,\n            day: utcDate.getUTCDate()\n        };\n    }\n    function parseDateLikeString(value) {\n        const normalized = value.replace(/[\u5E74\\/.-]/g, "/").replace(/\u6708/g, "/").replace(/\u65E5/g, "");\n        const match = normalized.match(/^(\\d{4})\\/(\\d{1,2})\\/(\\d{1,2})$/);\n        if (!match) {\n            return null;\n        }\n        return excelSerialFromDate(Number(match[1]), Number(match[2]), Number(match[3]));\n    }\n    function coerceDateSerial(value) {\n        if (typeof value === "number") {\n            return value;\n        }\n        const text = toText(value).trim();\n        const parsed = parseDateLikeString(text);\n        if (parsed !== null) {\n            return parsed;\n        }\n        return toNumber(value);\n    }\n    function columnNumberFromRef(ref) {\n        const match = String(ref).match(/\\$?([A-Za-z]{1,3})\\$?\\d+/);\n        if (!match) {\n            throw new Error(`Invalid cell reference for COLUMN: ${ref}`);\n        }\n        const letters = match[1].toUpperCase();\n        let number = 0;\n        for (const char of letters) {\n            number = number * 26 + (char.charCodeAt(0) - 64);\n        }\n        return number;\n    }\n    function rowNumberFromRef(ref) {\n        const match = String(ref).match(/\\$?[A-Za-z]{1,3}\\$?(\\d+)/);\n        if (!match) {\n            throw new Error(`Invalid cell reference for ROW: ${ref}`);\n        }\n        return Number(match[1]);\n    }\n    function toBoolean(value) {\n        if (typeof value === "boolean") {\n            return value;\n        }\n        if (typeof value === "number") {\n            return value !== 0;\n        }\n        if (typeof value === "string") {\n            if (!value) {\n                return false;\n            }\n            const upper = value.toUpperCase();\n            if (upper === "TRUE") {\n                return true;\n            }\n            if (upper === "FALSE") {\n                return false;\n            }\n            return true;\n        }\n        if (Array.isArray(value)) {\n            return value.length > 0;\n        }\n        return Boolean(value);\n    }\n    function toNumber(value) {\n        if (typeof value === "number") {\n            return value;\n        }\n        if (typeof value === "boolean") {\n            return value ? 1 : 0;\n        }\n        if (typeof value === "string") {\n            const normalized = value.replace(/,/g, "");\n            const parsed = Number(normalized);\n            if (!Number.isNaN(parsed)) {\n                return parsed;\n            }\n            if (value.toUpperCase() === "TRUE") {\n                return 1;\n            }\n            if (value.toUpperCase() === "FALSE") {\n                return 0;\n            }\n        }\n        if (Array.isArray(value)) {\n            return value.length;\n        }\n        return 0;\n    }\n    function toText(value) {\n        if (value === null || value === undefined) {\n            return "";\n        }\n        if (Array.isArray(value)) {\n            return value.map((item) => toText(item)).join(":");\n        }\n        return String(value);\n    }\n    function flattenValues(value) {\n        if (!Array.isArray(value)) {\n            return [value];\n        }\n        if (value.length > 0 && Array.isArray(value[0])) {\n            return value.flat();\n        }\n        return value;\n    }\n    function normalizeToMatrix(value) {\n        if (!Array.isArray(value)) {\n            return [[value]];\n        }\n        if (value.length > 0 && Array.isArray(value[0])) {\n            return value;\n        }\n        return [value];\n    }\n    function matchesCriteria(value, criteria) {\n        const trimmedCriteria = criteria.trim();\n        const match = trimmedCriteria.match(/^(<=|>=|<>|=|<|>)(.*)$/);\n        if (!match) {\n            return looselyEquals(value, trimmedCriteria);\n        }\n        const operator = match[1];\n        const rightRaw = match[2].trim();\n        const leftNumeric = toNumber(value);\n        const rightNumeric = Number(rightRaw.replace(/,/g, ""));\n        if (!Number.isNaN(leftNumeric) && !Number.isNaN(rightNumeric)) {\n            switch (operator) {\n                case "<":\n                    return leftNumeric < rightNumeric;\n                case "<=":\n                    return leftNumeric <= rightNumeric;\n                case ">":\n                    return leftNumeric > rightNumeric;\n                case ">=":\n                    return leftNumeric >= rightNumeric;\n                case "=":\n                    return leftNumeric === rightNumeric;\n                case "<>":\n                    return leftNumeric !== rightNumeric;\n            }\n        }\n        const leftText = toText(value);\n        switch (operator) {\n            case "=":\n                return leftText === rightRaw;\n            case "<>":\n                return leftText !== rightRaw;\n            case "<":\n                return leftText < rightRaw;\n            case "<=":\n                return leftText <= rightRaw;\n            case ">":\n                return leftText > rightRaw;\n            case ">=":\n                return leftText >= rightRaw;\n            default:\n                return false;\n        }\n    }\n    function isCountableNumber(value) {\n        if (typeof value === "number") {\n            return true;\n        }\n        if (typeof value === "string") {\n            const trimmed = value.trim();\n            if (!trimmed) {\n                return false;\n            }\n            return !Number.isNaN(Number(trimmed.replace(/,/g, "")));\n        }\n        return false;\n    }\n    function isFormulaError(value) {\n        return typeof value === "string" && /^#(?:N\\/A|REF!|VALUE!|DIV\\/0!|NAME\\?|NUM!|NULL!)/.test(value);\n    }\n    function looselyEquals(left, right) {\n        if (typeof left === "number" || typeof right === "number") {\n            return toNumber(left) === toNumber(right);\n        }\n        if (typeof left === "boolean" || typeof right === "boolean") {\n            return toBoolean(left) === toBoolean(right);\n        }\n        return toText(left) === toText(right);\n    }\n    function compareValues(left, right) {\n        if (typeof left === "number" || typeof right === "number") {\n            return toNumber(left) - toNumber(right);\n        }\n        const leftText = toText(left);\n        const rightText = toText(right);\n        if (leftText === rightText) {\n            return 0;\n        }\n        return leftText < rightText ? -1 : 1;\n    }\n    api.evaluateFormulaAst = evaluateFormulaAst;\n    moduleRegistry.registerModule("formulaRuntime", api);\n})(globalThis);\n' }, { "path": "dist/js/core.js", "source": '/*\n * Copyright 2026 Toshiki Iga\n * SPDX-License-Identifier: Apache-2.0\n */\n(() => {\n    const EMPTY_BORDERS = {\n        top: false,\n        bottom: false,\n        left: false,\n        right: false\n    };\n    const moduleRegistry = getXlsx2mdModuleRegistry();\n    function requireCoreNarrativeStructure() {\n        return requireXlsx2mdNarrativeStructureModule();\n    }\n    function requireCoreTableDetector() {\n        return requireXlsx2mdTableDetectorModule();\n    }\n    function requireCoreMarkdownExport() {\n        return requireXlsx2mdMarkdownExportModule();\n    }\n    function requireCoreStylesParser() {\n        return requireXlsx2mdStylesParserModule();\n    }\n    function requireCoreWorksheetTables() {\n        return requireXlsx2mdWorksheetTablesModule();\n    }\n    function requireCoreCellFormat() {\n        return requireXlsx2mdCellFormatModule();\n    }\n    function requireCoreAddressUtils() {\n        return requireXlsx2mdAddressUtilsModule();\n    }\n    function requireCoreSheetMarkdown() {\n        return requireXlsx2mdSheetMarkdownModule();\n    }\n    function requireCoreFormulaEngine() {\n        return requireXlsx2mdFormulaEngineModule();\n    }\n    function requireCoreSheetAssets() {\n        return requireXlsx2mdSheetAssetsModule();\n    }\n    function requireCoreWorksheetParser() {\n        return requireXlsx2mdWorksheetParserModule();\n    }\n    function requireCoreWorkbookLoader() {\n        return requireXlsx2mdWorkbookLoaderModule();\n    }\n    function requireCoreFormulaResolver() {\n        return requireXlsx2mdFormulaResolverModule();\n    }\n    const drawingHelper = getXlsx2mdDrawingHelperModule();\n    const markdownNormalizeHelper = requireXlsx2mdMarkdownNormalize();\n    const narrativeStructureHelper = requireCoreNarrativeStructure();\n    const tableDetectorHelper = requireCoreTableDetector();\n    const markdownExportHelper = requireCoreMarkdownExport();\n    const stylesParserHelper = requireCoreStylesParser();\n    const sharedStringsHelper = requireXlsx2mdSharedStringsModule();\n    const worksheetTablesHelper = requireCoreWorksheetTables();\n    const cellFormatHelper = requireCoreCellFormat();\n    const xmlUtilsHelper = requireXlsx2mdXmlUtilsModule();\n    const addressUtilsHelper = requireCoreAddressUtils();\n    const relsParserModule = requireXlsx2mdRelsParserModule();\n    const formulaReferenceUtilsModule = requireXlsx2mdFormulaReferenceUtilsModule();\n    const sheetMarkdownModule = requireCoreSheetMarkdown();\n    const formulaEngineModule = requireCoreFormulaEngine();\n    const sheetAssetsHelper = requireCoreSheetAssets();\n    const worksheetParserHelper = requireCoreWorksheetParser();\n    const workbookLoaderHelper = requireCoreWorkbookLoader();\n    const formulaResolverHelper = requireCoreFormulaResolver();\n    const markdownOptionsHelper = requireXlsx2mdMarkdownOptions();\n    const formulaLegacyModule = requireXlsx2mdFormulaLegacyModule();\n    const formulaAstModule = requireXlsx2mdFormulaAstModule();\n    const zipIoHelper = moduleRegistry.requireModule("zipIo", "xlsx2md zip io module is not loaded");\n    let resolveDefinedNameScalarValue = null;\n    let resolveDefinedNameRangeRef = null;\n    let resolveStructuredRangeRef = null;\n    const DEFAULT_CELL_WIDTH_EMU = 609600;\n    const DEFAULT_CELL_HEIGHT_EMU = 190500;\n    const SHAPE_BLOCK_GAP_X_EMU = DEFAULT_CELL_WIDTH_EMU * 4;\n    const SHAPE_BLOCK_GAP_Y_EMU = DEFAULT_CELL_HEIGHT_EMU * 6;\n    const { colToLetters, lettersToCol, parseCellAddress, normalizeFormulaAddress, formatRange, parseRangeRef, parseRangeAddress } = addressUtilsHelper;\n    const { xmlToDocument, getElementsByLocalName, getFirstChildByLocalName, getDirectChildByLocalName, decodeXmlText, getTextContent } = xmlUtilsHelper;\n    const relsParserHelper = relsParserModule.createRelsParserApi({\n        xmlToDocument,\n        decodeXmlText\n    });\n    const { normalizeZipPath, parseRelationshipEntries, parseRelationships, buildRelsPath } = relsParserHelper;\n    const formulaReferenceUtilsHelper = formulaReferenceUtilsModule.createFormulaReferenceUtilsApi({\n        normalizeFormulaAddress\n    });\n    const { parseSimpleFormulaReference, parseSheetScopedDefinedNameReference, normalizeFormulaSheetName, normalizeDefinedNameKey } = formulaReferenceUtilsHelper;\n    const formulaLegacyHelper = formulaLegacyModule.createFormulaLegacyApi({\n        normalizeFormulaSheetName,\n        normalizeFormulaAddress,\n        parseSimpleFormulaReference,\n        parseSheetScopedDefinedNameReference,\n        parseRangeAddress,\n        parseCellAddress,\n        colToLetters,\n        tryResolveFormulaExpression: (formulaText, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries, currentAddress) => tryResolveFormulaExpression(formulaText, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries, currentAddress),\n        getDefinedNameScalarValue: () => resolveDefinedNameScalarValue,\n        getDefinedNameRangeRef: () => resolveDefinedNameRangeRef,\n        getStructuredRangeRef: () => resolveStructuredRangeRef,\n        cellFormat: cellFormatHelper\n    });\n    const formulaAstHelper = formulaAstModule.createFormulaAstApi({\n        normalizeFormulaAddress,\n        parseSheetScopedDefinedNameReference,\n        parseRangeAddress,\n        parseCellAddress\n    });\n    const sheetMarkdownHelper = sheetMarkdownModule.createSheetMarkdownApi({\n        renderNarrativeBlock: narrativeStructureHelper.renderNarrativeBlock,\n        detectTableCandidates: (sheet, buildCellMapForSheet, tableDetectionMode = "balanced") => tableDetectorHelper.detectTableCandidates(sheet, buildCellMapForSheet, undefined, tableDetectionMode),\n        matrixFromCandidate: tableDetectorHelper.matrixFromCandidate,\n        renderMarkdownTable: markdownExportHelper.renderMarkdownTable,\n        createOutputFileName: markdownExportHelper.createOutputFileName,\n        extractShapeBlocks: sheetAssetsHelper.extractShapeBlocks,\n        renderHierarchicalRawEntries: sheetAssetsHelper.renderHierarchicalRawEntries,\n        parseCellAddress,\n        formatRange,\n        colToLetters,\n        normalizeMarkdownText: markdownNormalizeHelper.normalizeMarkdownText,\n        defaultCellWidthEmu: DEFAULT_CELL_WIDTH_EMU,\n        defaultCellHeightEmu: DEFAULT_CELL_HEIGHT_EMU,\n        shapeBlockGapXEmu: SHAPE_BLOCK_GAP_X_EMU,\n        shapeBlockGapYEmu: SHAPE_BLOCK_GAP_Y_EMU\n    });\n    const formulaEngineHelper = formulaEngineModule.createFormulaEngineApi({\n        getDefinedNameScalarValue: () => resolveDefinedNameScalarValue,\n        tryResolveFormulaExpressionWithAst: (expression, currentSheetName, resolveCellValue, resolveRangeEntries, currentAddress) => tryResolveFormulaExpressionWithAst(expression, currentSheetName, resolveCellValue, resolveRangeEntries, currentAddress),\n        tryResolveFormulaExpressionLegacy: (normalized, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries) => tryResolveFormulaExpressionLegacy(normalized, currentSheetName, resolveCellValue, resolveRangeValues, resolveRangeEntries)\n    });\n    const { findTopLevelOperatorIndex, parseWholeFunctionCall, splitFormulaArguments, parseQualifiedRangeReference, resolveScalarFormulaValue } = formulaLegacyHelper;\n    const { buildCellMap, formatCellForMarkdown, isCellInAnyTable, extractNarrativeBlocks, splitNarrativeRowSegments, extractSectionBlocks, convertSheetToMarkdown, convertWorkbookToMarkdownFiles } = sheetMarkdownHelper;\n    const tryResolveFormulaExpressionLegacy = formulaLegacyHelper.tryResolveFormulaExpressionLegacy;\n    const tryResolveFormulaExpressionDetailed = formulaEngineHelper.tryResolveFormulaExpressionDetailed;\n    const tryResolveFormulaExpression = formulaEngineHelper.tryResolveFormulaExpression;\n    const tryResolveFormulaExpressionWithAst = (expression, currentSheetName, resolveCellValue, resolveRangeEntries, currentAddress) => formulaAstHelper.tryResolveFormulaExpressionWithAst(expression, currentSheetName, resolveCellValue, resolveDefinedNameScalarValue, resolveDefinedNameRangeRef, resolveStructuredRangeRef, resolveSpillRange, resolveRangeEntries, currentAddress);\n    function resolveSpillRange(_sheetName, _ref) {\n        return null;\n    }\n    function setDefinedNameResolvers(scalar, range, structured) {\n        resolveDefinedNameScalarValue = scalar;\n        resolveDefinedNameRangeRef = range;\n        resolveStructuredRangeRef = structured;\n    }\n    function buildDrawingAssetDeps() {\n        return {\n            parseRelationships,\n            buildRelsPath,\n            xmlToDocument,\n            decodeXmlText,\n            getElementsByLocalName,\n            getFirstChildByLocalName,\n            getDirectChildByLocalName,\n            getTextContent,\n            colToLetters,\n            drawingHelper,\n            defaultCellWidthEmu: DEFAULT_CELL_WIDTH_EMU,\n            defaultCellHeightEmu: DEFAULT_CELL_HEIGHT_EMU,\n            shapeBlockGapXEmu: SHAPE_BLOCK_GAP_X_EMU,\n            shapeBlockGapYEmu: SHAPE_BLOCK_GAP_Y_EMU\n        };\n    }\n    function createWorksheetParseDeps() {\n        return {\n            EMPTY_BORDERS,\n            xmlToDocument,\n            decodeXmlText,\n            getTextContent,\n            parseCellAddress,\n            parseRangeRef,\n            parseWorksheetTables: worksheetTablesHelper.parseWorksheetTables,\n            parseDrawingImages: sheetAssetsHelper.parseDrawingImages,\n            parseDrawingCharts: sheetAssetsHelper.parseDrawingCharts,\n            parseDrawingShapes: sheetAssetsHelper.parseDrawingShapes,\n            parseRelationshipEntries,\n            buildRelsPath,\n            formatCellDisplayValue: cellFormatHelper.formatCellDisplayValue,\n            buildAssetDeps: buildDrawingAssetDeps,\n            lettersToCol,\n            colToLetters\n        };\n    }\n    function createFormulaResolverDeps() {\n        return {\n            normalizeStructuredTableKey: worksheetTablesHelper.normalizeStructuredTableKey,\n            normalizeFormulaSheetName,\n            normalizeDefinedNameKey,\n            normalizeFormulaAddress,\n            parseSimpleFormulaReference,\n            resolveScalarFormulaValue,\n            parseQualifiedRangeReference,\n            findTopLevelOperatorIndex,\n            parseWholeFunctionCall,\n            splitFormulaArguments,\n            parseCellAddress,\n            colToLetters,\n            parseRangeAddress,\n            tryResolveFormulaExpressionDetailed,\n            applyResolvedFormulaValue: cellFormatHelper.applyResolvedFormulaValue,\n            setDefinedNameResolvers\n        };\n    }\n    async function parseWorkbook(arrayBuffer, workbookName = "workbook.xlsx", options = {}) {\n        const worksheetParseDeps = createWorksheetParseDeps();\n        const formulaResolverDeps = createFormulaResolverDeps();\n        const parseShapes = options.includeShapeDetails !== false;\n        return workbookLoaderHelper.parseWorkbook(arrayBuffer, workbookName, {\n            unzipEntries: zipIoHelper.unzipEntries,\n            parseSharedStrings: sharedStringsHelper.parseSharedStrings,\n            parseCellStyles: stylesParserHelper.parseCellStyles,\n            parseRelationships,\n            xmlToDocument,\n            decodeXmlText,\n            getTextContent,\n            parseWorksheet: (files, name, sheetPath, sheetIndex, sharedStrings, cellStyles) => worksheetParserHelper.parseWorksheet(files, name, sheetPath, sheetIndex, sharedStrings, cellStyles, {\n                ...worksheetParseDeps,\n                parseShapes\n            }),\n            postProcessWorkbook: (workbook) => {\n                formulaResolverHelper.resolveSimpleFormulaReferences(workbook, formulaResolverDeps);\n            }\n        });\n    }\n    const xlsx2mdApi = {\n        parseWorkbook,\n        unzipEntries: zipIoHelper.unzipEntries,\n        parseRangeRef,\n        applyMergeTokens: tableDetectorHelper.applyMergeTokens,\n        detectTableCandidates: (sheet, tableDetectionMode = "balanced") => tableDetectorHelper.detectTableCandidates(sheet, buildCellMap, undefined, markdownOptionsHelper.normalizeTableDetectionMode(tableDetectionMode)),\n        markdownOptions: markdownOptionsHelper,\n        extractNarrativeBlocks,\n        convertSheetToMarkdown,\n        convertWorkbookToMarkdownFiles,\n        encodeMarkdownText: markdownExportHelper.encodeMarkdownText,\n        createSummaryText: markdownExportHelper.createSummaryText,\n        createCombinedMarkdownExportFile: markdownExportHelper.createCombinedMarkdownExportFile,\n        createCombinedMarkdownExportPayload: markdownExportHelper.createCombinedMarkdownExportPayload,\n        createExportEntries: markdownExportHelper.createExportEntries,\n        createWorkbookExportArchive: markdownExportHelper.createWorkbookExportArchive,\n        formatRange,\n        colToLetters,\n        lettersToCol,\n        textEncoder: markdownExportHelper.textEncoder\n    };\n    moduleRegistry.registerModule("xlsx2md", xlsx2mdApi);\n})();\n' }];
var PACKAGE_VERSION = "1.3.0";
var nodeRequire = createRequire(import.meta.url);
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
  globalThis.__xlsx2mdNodeRequire ??= nodeRequire;
}
function loadBundledXlsx2mdApi() {
  if (cachedApi) {
    return cachedApi;
  }
  installNodeDomGlobals();
  delete globalThis.__xlsx2mdModuleRegistry;
  delete globalThis.__xlsx2mdModuleRegistryStore;
  delete globalThis.getXlsx2mdModuleRegistry;
  for (const entry of XLSX2MD_RUNTIME_CORE_SOURCES) {
    new Function(entry.source)();
  }
  const api = globalThis.__xlsx2mdModuleRegistry?.getModule("xlsx2md");
  if (!api) {
    throw new Error("xlsx2md bundled CLI API failed to initialize.");
  }
  cachedApi = api;
  return api;
}
runXlsx2mdCli({
  argv: process.argv.slice(2),
  loadApi: loadBundledXlsx2mdApi,
  readPackageVersion: async () => PACKAGE_VERSION
}).then((exitCode) => {
  process.exit(exitCode);
}).catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
