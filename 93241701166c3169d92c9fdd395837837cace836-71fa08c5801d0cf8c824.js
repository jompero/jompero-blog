/*! For license information please see 93241701166c3169d92c9fdd395837837cace836-71fa08c5801d0cf8c824.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0x0X":function(e,t,r){"use strict";t.a=function(e){function t(e,t,n){var o=t.trim().split(h);t=o;var i=o.length,a=e.length;switch(a){case 0:case 1:var s=0;for(e=0===a?"":e[0]+" ";s<i;++s)t[s]=r(e,t[s],n).trim();break;default:var c=s=0;for(t=[];s<i;++s)for(var l=0;l<a;++l)t[c++]=r(e[l]+" ",o[s],n).trim()}return t}function r(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(m,"$1"+e.trim());case 58:return e.trim()+t.replace(m,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(m,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function n(e,t,r,i){var a=e+";",s=2*t+3*r+4*i;if(944===s){e=a.indexOf(":",9)+1;var c=a.substring(e,a.length-1).trim();return c=a.substring(0,e).trim()+c+";",1===P||2===P&&o(c,1)?"-webkit-"+c+c:c}if(0===P||2===P&&!o(a,1))return a;switch(s){case 1015:return 97===a.charCodeAt(10)?"-webkit-"+a+a:a;case 951:return 116===a.charCodeAt(3)?"-webkit-"+a+a:a;case 963:return 110===a.charCodeAt(5)?"-webkit-"+a+a:a;case 1009:if(100!==a.charCodeAt(4))break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(45===a.charCodeAt(8))return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(A,"$1-webkit-$2")+a;break;case 932:if(45===a.charCodeAt(4))switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(99!==a.charCodeAt(8))break;return"-webkit-box-pack"+(c=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+a+"-ms-flex-pack"+c+a;case 1005:return d.test(a)?a.replace(f,":-webkit-")+a.replace(f,":-moz-")+a:a;case 1e3:switch(t=(c=a.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=a.replace(v,"tb");break;case 232:c=a.replace(v,"tb-rl");break;case 220:c=a.replace(v,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+c+a;case 1017:if(-1===a.indexOf("sticky",9))break;case 975:switch(t=(a=e).length-10,s=(c=(33===a.charCodeAt(t)?a.substring(0,t):a).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:a=a.replace(c,"-webkit-"+c)+";"+a;break;case 207:case 102:a=a.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+a.replace(c,"-webkit-"+c)+";"+a.replace(c,"-ms-"+c+"box")+";"+a}return a+";";case 938:if(45===a.charCodeAt(5))switch(a.charCodeAt(6)){case 105:return c=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+c+"-ms-flex-"+c+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(k,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(k,"")+a}break;case 973:case 989:if(45!==a.charCodeAt(3)||122===a.charCodeAt(4))break;case 931:case 953:if(!0===C.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?n(e.replace("stretch","fill-available"),t,r,i).replace(":fill-available",":stretch"):a.replace(c,"-webkit-"+c)+a.replace(c,"-moz-"+c.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(102===a.charCodeAt(5)?"-ms-"+a:"")+a,211===r+i&&105===a.charCodeAt(13)&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+a}return a}function o(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),$(2!==t?n:n.replace(x,"$1"),r,t)}function i(e,t){var r=n(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(S," or ($1)").substring(4):"("+t+")"}function a(e,t,r,n,o,i,a,s,l,u){for(var f,d=0,p=t;d<R;++d)switch(f=j[d].call(c,e,p,r,n,o,i,a,s,l,u)){case void 0:case!1:case!0:case null:break;default:p=f}if(p!==t)return p}function s(e){return void 0!==(e=e.prefix)&&($=null,e?"function"!=typeof e?P=1:(P=2,$=e):P=0),s}function c(e,r){var s=e;if(33>s.charCodeAt(0)&&(s=s.trim()),s=[s],0<R){var c=a(-1,r,s,s,I,O,0,0,0,0);void 0!==c&&"string"==typeof c&&(r=c)}var f=function e(r,s,c,f,d){for(var p,h,m,v,S,k=0,x=0,C=0,A=0,j=0,$=0,z=m=p=0,N=0,M=0,D=0,L=0,F=c.length,B=F-1,G="",q="",H="",W="";N<F;){if(h=c.charCodeAt(N),N===B&&0!==x+A+C+k&&(0!==x&&(h=47===x?10:47),A=C=k=0,F++,B++),0===x+A+C+k){if(N===B&&(0<M&&(G=G.replace(u,"")),0<G.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:G+=c.charAt(N)}h=59}switch(h){case 123:for(p=(G=G.trim()).charCodeAt(0),m=1,L=++N;N<F;){switch(h=c.charCodeAt(N)){case 123:m++;break;case 125:m--;break;case 47:switch(h=c.charCodeAt(N+1)){case 42:case 47:e:{for(z=N+1;z<B;++z)switch(c.charCodeAt(z)){case 47:if(42===h&&42===c.charCodeAt(z-1)&&N+2!==z){N=z+1;break e}break;case 10:if(47===h){N=z+1;break e}}N=z}}break;case 91:h++;case 40:h++;case 34:case 39:for(;N++<B&&c.charCodeAt(N)!==h;);}if(0===m)break;N++}switch(m=c.substring(L,N),0===p&&(p=(G=G.replace(l,"").trim()).charCodeAt(0)),p){case 64:switch(0<M&&(G=G.replace(u,"")),h=G.charCodeAt(1)){case 100:case 109:case 115:case 45:M=s;break;default:M=T}if(L=(m=e(s,M,m,h,d+1)).length,0<R&&(S=a(3,m,M=t(T,G,D),s,I,O,L,h,d,f),G=M.join(""),void 0!==S&&0===(L=(m=S.trim()).length)&&(h=0,m="")),0<L)switch(h){case 115:G=G.replace(w,i);case 100:case 109:case 45:m=G+"{"+m+"}";break;case 107:m=(G=G.replace(g,"$1 $2"))+"{"+m+"}",m=1===P||2===P&&o("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=G+m,112===f&&(q+=m,m="")}else m="";break;default:m=e(s,t(s,G,D),m,f,d+1)}H+=m,m=D=M=z=p=0,G="",h=c.charCodeAt(++N);break;case 125:case 59:if(1<(L=(G=(0<M?G.replace(u,""):G).trim()).length))switch(0===z&&(p=G.charCodeAt(0),45===p||96<p&&123>p)&&(L=(G=G.replace(" ",":")).length),0<R&&void 0!==(S=a(1,G,s,r,I,O,q.length,f,d,f))&&0===(L=(G=S.trim()).length)&&(G="\0\0"),p=G.charCodeAt(0),h=G.charCodeAt(1),p){case 0:break;case 64:if(105===h||99===h){W+=G+c.charAt(N);break}default:58!==G.charCodeAt(L-1)&&(q+=n(G,p,h,G.charCodeAt(2)))}D=M=z=p=0,G="",h=c.charCodeAt(++N)}}switch(h){case 13:case 10:47===x?x=0:0===1+p&&107!==f&&0<G.length&&(M=1,G+="\0"),0<R*_&&a(0,G,s,r,I,O,q.length,f,d,f),O=1,I++;break;case 59:case 125:if(0===x+A+C+k){O++;break}default:switch(O++,v=c.charAt(N),h){case 9:case 32:if(0===A+k+x)switch(j){case 44:case 58:case 9:case 32:v="";break;default:32!==h&&(v=" ")}break;case 0:v="\\0";break;case 12:v="\\f";break;case 11:v="\\v";break;case 38:0===A+x+k&&(M=D=1,v="\f"+v);break;case 108:if(0===A+x+k+E&&0<z)switch(N-z){case 2:112===j&&58===c.charCodeAt(N-3)&&(E=j);case 8:111===$&&(E=$)}break;case 58:0===A+x+k&&(z=N);break;case 44:0===x+C+A+k&&(M=1,v+="\r");break;case 34:case 39:0===x&&(A=A===h?0:0===A?h:A);break;case 91:0===A+x+C&&k++;break;case 93:0===A+x+C&&k--;break;case 41:0===A+x+k&&C--;break;case 40:if(0===A+x+k){if(0===p)switch(2*j+3*$){case 533:break;default:p=1}C++}break;case 64:0===x+C+A+k+z+m&&(m=1);break;case 42:case 47:if(!(0<A+k+C))switch(x){case 0:switch(2*h+3*c.charCodeAt(N+1)){case 235:x=47;break;case 220:L=N,x=42}break;case 42:47===h&&42===j&&L+2!==N&&(33===c.charCodeAt(L+2)&&(q+=c.substring(L,N+1)),v="",x=0)}}0===x&&(G+=v)}$=j,j=h,N++}if(0<(L=q.length)){if(M=s,0<R&&(void 0!==(S=a(2,q,M,r,I,O,L,f,d,f))&&0===(q=S).length))return W+q+H;if(q=M.join(",")+"{"+q+"}",0!=P*E){switch(2!==P||o(q,2)||(E=0),E){case 111:q=q.replace(b,":-moz-$1")+q;break;case 112:q=q.replace(y,"::-webkit-input-$1")+q.replace(y,"::-moz-$1")+q.replace(y,":-ms-input-$1")+q}E=0}}return W+q+H}(T,s,r,0,0);return 0<R&&(void 0!==(c=a(-2,f,s,s,I,O,f.length,0,0,0))&&(f=c)),"",E=0,O=I=1,f}var l=/^\0+/g,u=/[\0\r\f]/g,f=/: */g,d=/zoo|gra/,p=/([,: ])(transform)/g,h=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,b=/:(read-only)/g,v=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,S=/([\s\S]*?);/g,k=/-self|flex-/g,x=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,A=/([^-])(image-set\()/,O=1,I=1,E=0,P=1,T=[],j=[],R=0,$=null,_=0;return c.use=function e(t){switch(t){case void 0:case null:R=j.length=0;break;default:if("function"==typeof t)j[R++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else _=0|!!t}return e},c.set=s,void 0!==e&&s(e),c}},"2mql":function(e,t,r){"use strict";var n=r("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?a:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=a;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var o=p(r);o&&o!==h&&e(t,o,n)}var a=u(r);f&&(a=a.concat(f(r)));for(var s=c(t),m=c(r),g=0;g<a.length;++g){var y=a[g];if(!(i[y]||n&&n[y]||m&&m[y]||s&&s[y])){var b=d(r,y);try{l(t,y,b)}catch(v){}}}}return t}},"8oxB":function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var c,l=[],u=!1,f=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&p())}function p(){if(!u){var e=s(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new h(e,t)),1!==l.length||u||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9uj6":function(e,t,r){"use strict";var n=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return n.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));t.a=o},Bl7J:function(e,t,r){"use strict";var n,o=r("q1tI"),i=r.n(o),a=r("Wbzz"),s=r("vOnD");r("IIwj");var c,l,u=Object(s.a)(n||(c=["\n  html {\n    font-size:calc(16px + 1vw);\n\n  }\n\n  body {\n    color: #444444;\n    background-color: #FFFFB4;\n    padding: 2rem;\n    font-family: Open Sans, Roboto, sans-serif, serif;\n    max-width: 900px;\n\n    @media (max-width: 768px) {\n        padding: 1.5rem;\n      }\n  }\n\n  a {\n    color: #444444;\n    font-weight: bold;\n    vertical-align: 5%;\n    background-color: #FFB6B9;\n    border-radius: 0.25rem;\n    padding: 0.1rem 0.2rem 0.1rem 0.2rem;\n    -webkit-box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.5); \n    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.5);\n    transition: box-shadow 0.1s\n  }\n\n  a:hover {\n    -webkit-box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.4); \n    box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.4);\n  }\n\n  a:active {\n    margin-top: 5;\n    -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.5); \n    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.5);\n  }\n\n  .footnote-ref {\n    border-bottom: none;\n    background-color: rgba(255, 255, 255, 0.3);\n    line-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  code {\n    color: white;\n    font-size: inherit;\n    vertical-align: 0.6rem;\n    background-color: #444444;\n    padding: 0.3rem 0.6rem 0.3rem 0.6rem;\n  }\n\n  p > code,\n  li > code,\n  dd > code,\n  td > code {\n    vertical-align: 0.1rem;\n    word-wrap: break-word;\n    box-decoration-break: clone;\n    padding: 0.1rem 0.2rem 0.1rem 0.2rem;\n    border-radius: .25rem;\n  }\n\n  pre code {\n    display: block;\n    white-space: pre;\n    -webkit-overflow-scrolling: touch;\n    overflow-x: scroll;\n    max-width: 100%;\n    min-width: 100px;\n    padding: 0.3rem 0.6rem 0.3rem 0.6rem;\n  }\n\n  blockquote {\n    background: #ededa7;\n    border-left: 10px solid #dada9a;\n    margin: 1.5em 10px;\n    padding: 0.5em 10px;\n    \n  }\n\n  blockquote:before {\n    content: open-quote;\n    font-size: 4em;\n    line-height: 0.1em;\n    margin-right: 0.25em;\n    vertical-align: -0.4em;\n  }\n  \n  blockquote p {\n    display: inline;\n  }\n\n  hr.solid {\n    border: 0;\n    height: 1px;\n    background: #444444;\n  }\n\n\n"],l||(l=c.slice(0)),c.raw=l,n=c)),f=s.b.h1.withConfig({displayName:"layout__StyledTitle",componentId:"ml39rt-0"})(["@media (max-width:768px){width:100%;text-align:center;line-height:2.5rem;}"]),d=s.b.span.withConfig({displayName:"layout__StyledSubTitle",componentId:"ml39rt-1"})(["font-size:60%;font-weight:normal;vertical-align:top;"]),p=Object(s.b)(a.Link).withConfig({displayName:"layout__StyledLink",componentId:"ml39rt-2"})(["font-weight:normal;background:none;text-decoration:none;box-shadow:none;"]);t.a=function(e){var t=e.children,r=Object(a.useStaticQuery)("3159585216");return i.a.createElement("main",null,i.a.createElement(u,null),i.a.createElement("title",null,r.site.siteMetadata.title),i.a.createElement("header",null,i.a.createElement(p,{to:"/about/"},"About")),i.a.createElement(f,null,i.a.createElement(p,{to:"/"},"Dani Jompero"),i.a.createElement("br",null),i.a.createElement(d,null,"Game Designer")),i.a.createElement("hr",{class:"solid"}),t)}},Gytx:function(e,t){e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var l=i[c];if(!s(l))return!1;var u=e[l],f=t[l];if(!1===(o=r?r.call(n,u,f,l):void 0)||void 0===o&&u!==f)return!1}return!0}},IIwj:function(e,t,r){},ME5O:function(e,t,r){"use strict";t.a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},qT12:function(e,t,r){"use strict";var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,g=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.responder"):60118,S=n?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case d:case a:case c:case s:case h:return e;default:switch(e=e&&e.$$typeof){case u:case p:case y:case g:case l:return e;default:return t}}case i:return t}}}function x(e){return k(e)===d}t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=l,t.Element=o,t.ForwardRef=p,t.Fragment=a,t.Lazy=y,t.Memo=g,t.Portal=i,t.Profiler=c,t.StrictMode=s,t.Suspense=h,t.isAsyncMode=function(e){return x(e)||k(e)===f},t.isConcurrentMode=x,t.isContextConsumer=function(e){return k(e)===u},t.isContextProvider=function(e){return k(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return k(e)===p},t.isFragment=function(e){return k(e)===a},t.isLazy=function(e){return k(e)===y},t.isMemo=function(e){return k(e)===g},t.isPortal=function(e){return k(e)===i},t.isProfiler=function(e){return k(e)===c},t.isStrictMode=function(e){return k(e)===s},t.isSuspense=function(e){return k(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===d||e===c||e===s||e===h||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===g||e.$$typeof===l||e.$$typeof===u||e.$$typeof===p||e.$$typeof===v||e.$$typeof===w||e.$$typeof===S||e.$$typeof===b)},t.typeOf=k},vOnD:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return $e}));r("E9XD");var n=r("TOwV"),o=r("q1tI"),i=r.n(o),a=r("Gytx"),s=r.n(a),c=r("0x0X"),l=r("ME5O"),u=r("9uj6"),f=r("2mql"),d=r.n(f);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var h=function(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r},m=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!Object(n.typeOf)(e)},g=Object.freeze([]),y=Object.freeze({});function b(e){return"function"==typeof e}function v(e){return e.displayName||e.name||"Component"}function w(e){return e&&"string"==typeof e.styledComponentId}var S=void 0!==e&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",k="undefined"!=typeof window&&"HTMLElement"in window,x=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==e&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:void 0!==e&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),C={};function A(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var O=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)(o<<=1)<0&&A(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=n;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=0,c=t.length;s<c;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,i=n;i<o;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),I=new Map,E=new Map,P=1,T=function(e){if(I.has(e))return I.get(e);for(;E.has(P);)P++;var t=P++;return I.set(e,t),E.set(t,e),t},j=function(e){return E.get(e)},R=function(e,t){I.set(e,t),E.set(t,e)},$="style["+S+'][data-styled-version="5.2.1"]',_=new RegExp("^"+S+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),z=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},N=function(e,t){for(var r=t.innerHTML.split("/*!sc*/\n"),n=[],o=0,i=r.length;o<i;o++){var a=r[o].trim();if(a){var s=a.match(_);if(s){var c=0|parseInt(s[1],10),l=s[2];0!==c&&(R(l,c),z(e,l,s[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(a)}}},M=function(){return r.nc},D=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(e){for(var t=e.childNodes,r=t.length;r>=0;r--){var n=t[r];if(n&&1===n.nodeType&&n.hasAttribute(S))return n}}(r),i=void 0!==o?o.nextSibling:null;n.setAttribute(S,"active"),n.setAttribute("data-styled-version","5.2.1");var a=M();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},L=function(){function e(e){var t=this.element=D(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}A(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),F=function(){function e(e){var t=this.element=D(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t),n=this.nodes[e];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),B=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),G=k,q={isServer:!k,useCSSOMInjection:!x},H=function(){function e(e,t,r){void 0===e&&(e=y),void 0===t&&(t={}),this.options=p({},q,{},e),this.gs=t,this.names=new Map(r),!this.options.isServer&&k&&G&&(G=!1,function(e){for(var t=document.querySelectorAll($),r=0,n=t.length;r<n;r++){var o=t[r];o&&"active"!==o.getAttribute(S)&&(N(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return T(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(p({},this.options,{},t),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(r=(t=this.options).isServer,n=t.useCSSOMInjection,o=t.target,e=r?new B(o):n?new L(o):new F(o),new O(e)));var e,t,r,n,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(T(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},t.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(T(e),r)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(T(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=0;o<r;o++){var i=j(o);if(void 0!==i){var a=e.names.get(i),s=t.getGroup(o);if(void 0!==a&&0!==s.length){var c=S+".g"+o+'[id="'+i+'"]',l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+=e+",")})),n+=""+s+c+'{content:"'+l+'"}/*!sc*/\n'}}}return n}(this)},e}(),W=/(a)(d)/gi,Y=function(e){return String.fromCharCode(e+(e>25?39:97))};function U(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Y(t%52)+r;return(Y(t%52)+r).replace(W,"$1-$2")}var V=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},X=function(e){return V(5381,e)};function J(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(b(r)&&!w(r))return!1}return!0}var Z=X("5.2.1"),K=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&J(e),this.componentId=t,this.baseHash=V(Z,t),this.baseStyle=r,H.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))o.push(this.staticRulesId);else{var i=ge(this.rules,e,t,r).join(""),a=U(V(this.baseHash,i.length)>>>0);if(!t.hasNameForId(n,a)){var s=r(i,"."+a,void 0,n);t.insertRules(n,a,s)}o.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,l=V(this.baseHash,r.hash),u="",f=0;f<c;f++){var d=this.rules[f];if("string"==typeof d)u+=d;else if(d){var p=ge(d,e,t,r),h=Array.isArray(p)?p.join(""):p;l=V(l,h+f),u+=h}}if(u){var m=U(l>>>0);if(!t.hasNameForId(n,m)){var g=r(u,"."+m,void 0,n);t.insertRules(n,m,g)}o.push(m)}}return o.join(" ")},e}(),Q=/^\s*\/\/.*$/gm,ee=[":","[",".","#"];function te(e){var t,r,n,o,i=void 0===e?y:e,a=i.options,s=void 0===a?y:a,l=i.plugins,u=void 0===l?g:l,f=new c.a(s),d=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(r,n,o,i,a,s,c,l,u,f){switch(r){case 1:if(0===u&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===l)return n+"/*|*/";break;case 3:switch(l){case 102:case 112:return e(o[0]+n),"";default:return n+(0===f?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),h=function(e,n,i){return 0===n&&ee.includes(i[r.length])||i.match(o)?e:"."+t};function m(e,i,a,s){void 0===s&&(s="&");var c=e.replace(Q,""),l=i&&a?a+" "+i+" { "+c+" }":c;return t=s,r=i,n=new RegExp("\\"+r+"\\b","g"),o=new RegExp("(\\"+r+"\\b){2,}"),f(a||!i?"":i,l)}return f.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(r)>0&&(o[0]=o[0].replace(n,h))},p,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||A(15),V(e,t.name)}),5381).toString():"",m}var re=i.a.createContext(),ne=(re.Consumer,i.a.createContext()),oe=(ne.Consumer,new H),ie=te();function ae(){return Object(o.useContext)(re)||oe}function se(){return Object(o.useContext)(ne)||ie}function ce(e){var t=Object(o.useState)(e.stylisPlugins),r=t[0],n=t[1],a=ae(),c=Object(o.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=Object(o.useMemo)((function(){return te({options:{prefix:!e.disableVendorPrefixes},plugins:r})}),[e.disableVendorPrefixes,r]);return Object(o.useEffect)((function(){s()(r,e.stylisPlugins)||n(e.stylisPlugins)}),[e.stylisPlugins]),i.a.createElement(re.Provider,{value:c},i.a.createElement(ne.Provider,{value:l},e.children))}var le=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=ie);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.toString=function(){return A(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=ie),this.name+e.hash},e}(),ue=/([A-Z])/,fe=/([A-Z])/g,de=/^ms-/,pe=function(e){return"-"+e.toLowerCase()};function he(e){return ue.test(e)?e.replace(fe,pe).replace(de,"-ms-"):e}var me=function(e){return null==e||!1===e||""===e};function ge(e,t,r,n){if(Array.isArray(e)){for(var o,i=[],a=0,s=e.length;a<s;a+=1)""!==(o=ge(e[a],t,r,n))&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}return me(e)?"":w(e)?"."+e.styledComponentId:b(e)?"function"!=typeof(c=e)||c.prototype&&c.prototype.isReactComponent||!t?e:ge(e(t),t,r,n):e instanceof le?r?(e.inject(r,n),e.getName(n)):e:m(e)?function e(t,r){var n,o,i=[];for(var a in t)t.hasOwnProperty(a)&&!me(t[a])&&(m(t[a])?i.push.apply(i,e(t[a],a)):b(t[a])?i.push(he(a)+":",t[a],";"):i.push(he(a)+": "+(n=a,(null==(o=t[a])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||n in l.a?String(o).trim():o+"px")+";")));return r?[r+" {"].concat(i,["}"]):i}(e):e.toString();var c}function ye(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return b(e)||m(e)?ge(h(g,[e].concat(r))):0===r.length&&1===e.length&&"string"==typeof e[0]?e:ge(h(e,r))}new Set;var be=function(e,t,r){return void 0===r&&(r=y),e.theme!==r.theme&&e.theme||t||r.theme},ve=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,we=/(^-|-$)/g;function Se(e){return e.replace(ve,"-").replace(we,"")}var ke=function(e){return U(X(e)>>>0)};function xe(e){return"string"==typeof e&&!0}var Ce=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ae=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Oe(e,t,r){var n=e[r];Ce(t)&&Ce(n)?Ie(n,t):e[r]=t}function Ie(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var o=0,i=r;o<i.length;o++){var a=i[o];if(Ce(a))for(var s in a)Ae(s)&&Oe(e,a[s],s)}return e}var Ee=i.a.createContext();Ee.Consumer;var Pe={};function Te(e,t,r){var n=w(e),a=!xe(e),s=t.attrs,c=void 0===s?g:s,l=t.componentId,f=void 0===l?function(e,t){var r="string"!=typeof e?"sc":Se(e);Pe[r]=(Pe[r]||0)+1;var n=r+"-"+ke("5.2.1"+r+Pe[r]);return t?t+"-"+n:n}(t.displayName,t.parentComponentId):l,h=t.displayName,m=void 0===h?function(e){return xe(e)?"styled."+e:"Styled("+v(e)+")"}(e):h,S=t.displayName&&t.componentId?Se(t.displayName)+"-"+t.componentId:t.componentId||f,k=n&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,x=t.shouldForwardProp;n&&e.shouldForwardProp&&(x=t.shouldForwardProp?function(r,n){return e.shouldForwardProp(r,n)&&t.shouldForwardProp(r,n)}:e.shouldForwardProp);var C,A=new K(r,S,n?e.componentStyle:void 0),O=A.isStatic&&0===c.length,I=function(e,t){return function(e,t,r,n){var i=e.attrs,a=e.componentStyle,s=e.defaultProps,c=e.foldedComponentIds,l=e.shouldForwardProp,f=e.styledComponentId,d=e.target,h=function(e,t,r){void 0===e&&(e=y);var n=p({},t,{theme:e}),o={};return r.forEach((function(e){var t,r,i,a=e;for(t in b(a)&&(a=a(n)),a)n[t]=o[t]="className"===t?(r=o[t],i=a[t],r&&i?r+" "+i:r||i):a[t]})),[n,o]}(be(t,Object(o.useContext)(Ee),s)||y,t,i),m=h[0],g=h[1],v=function(e,t,r,n){var o=ae(),i=se();return t?e.generateAndInjectStyles(y,o,i):e.generateAndInjectStyles(r,o,i)}(a,n,m),w=r,S=g.$as||t.$as||g.as||t.as||d,k=xe(S),x=g!==t?p({},t,{},g):t,C={};for(var A in x)"$"!==A[0]&&"as"!==A&&("forwardedAs"===A?C.as=x[A]:(l?l(A,u.a):!k||Object(u.a)(A))&&(C[A]=x[A]));return t.style&&g.style!==t.style&&(C.style=p({},t.style,{},g.style)),C.className=Array.prototype.concat(c,f,v!==f?v:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,Object(o.createElement)(S,C)}(C,e,t,O)};return I.displayName=m,(C=i.a.forwardRef(I)).attrs=k,C.componentStyle=A,C.displayName=m,C.shouldForwardProp=x,C.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):g,C.styledComponentId=S,C.target=n?e.target:e,C.withComponent=function(e){var n=t.componentId,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(t,["componentId"]),i=n&&n+"-"+(xe(e)?e:Se(v(e)));return Te(e,p({},o,{attrs:k,componentId:i}),r)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=n?Ie({},e.defaultProps,t):t}}),C.toString=function(){return"."+C.styledComponentId},a&&d()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var je=function(e){return function e(t,r,o){if(void 0===o&&(o=y),!Object(n.isValidElementType)(r))return A(1,String(r));var i=function(){return t(r,o,ye.apply(void 0,arguments))};return i.withConfig=function(n){return e(t,r,p({},o,{},n))},i.attrs=function(n){return e(t,r,p({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},i}(Te,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){je[e]=je(e)}));var Re=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=J(e),H.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,r,n){var o=n(ge(this.rules,t,r,n).join(""),""),i=this.componentId+e;r.insertRules(i,i,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,r,n){e>2&&H.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();function $e(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=ye.apply(void 0,[e].concat(r)),s="sc-global-"+ke(JSON.stringify(a)),c=new Re(a,s);function l(e){var t=ae(),r=se(),n=Object(o.useContext)(Ee),i=Object(o.useRef)(t.allocateGSInstance(s)).current;return Object(o.useLayoutEffect)((function(){return u(i,e,t,n,r),function(){return c.removeStyles(i,t)}}),[i,e,t,n,r]),null}function u(e,t,r,n,o){if(c.isStatic)c.renderStyles(e,C,r,o);else{var i=p({},t,{theme:be(t,n,l.defaultProps)});c.renderStyles(e,i,r,o)}}return i.a.memo(l)}!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),r=M();return"<style "+[r&&'nonce="'+r+'"',S+'="true"','data-styled-version="5.2.1"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?A(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return A(2);var r=((t={})[S]="",t["data-styled-version"]="5.2.1",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),n=M();return n&&(r.nonce=n),[i.a.createElement("style",p({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new H({isServer:!0}),this.sealed=!1}var t=e.prototype;t.collectStyles=function(e){return this.sealed?A(2):i.a.createElement(ce,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return A(3)}}();t.b=je}).call(this,r("8oxB"))}}]);
//# sourceMappingURL=93241701166c3169d92c9fdd395837837cace836-71fa08c5801d0cf8c824.js.map