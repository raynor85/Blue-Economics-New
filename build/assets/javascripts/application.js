/*!
 * jQuery JavaScript Library v2.1.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-23T21:10Z
 */


(function(global,factory){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document")}return factory(w)}}else{factory(global)}})(typeof window!=="undefined"?window:this,function(window,noGlobal){var arr=[];var slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var trim="".trim;var support={};var document=window.document,version="2.1.0",jQuery=function(selector,context){return new jQuery.fn.init(selector,context)},rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase()};jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,selector:"",length:0,toArray:function(){return slice.call(this)},get:function(num){return num!=null?num<0?this[num+this.length]:this[num]:slice.call(this)},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context;return ret},each:function(callback,args){return jQuery.each(this,callback,args)},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem)}))},slice:function(){return this.pushStack(slice.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++}if(typeof target!=="object"&&!jQuery.isFunction(target)){target={}}if(i===length){target=this;i--}for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue}if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[]}else{clone=src&&jQuery.isPlainObject(src)?src:{}}target[name]=jQuery.extend(deep,clone,copy)}else if(copy!==undefined){target[name]=copy}}}}return target};jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){throw new Error(msg)},noop:function(){},isFunction:function(obj){return jQuery.type(obj)==="function"},isArray:Array.isArray,isWindow:function(obj){return obj!=null&&obj===obj.window},isNumeric:function(obj){return obj-parseFloat(obj)>=0},isPlainObject:function(obj){if(jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false}try{if(obj.constructor&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false}}catch(e){return false}return true},isEmptyObject:function(obj){var name;for(name in obj){return false}return true},type:function(obj){if(obj==null){return obj+""}return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj},globalEval:function(code){var script,indirect=eval;code=jQuery.trim(code);if(code){if(code.indexOf("use strict")===1){script=document.createElement("script");script.text=code;document.head.appendChild(script).parentNode.removeChild(script)}else{indirect(code)}}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase)},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase()},each:function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i<length;i++){value=callback.apply(obj[i],args);if(value===false){break}}}else{for(i in obj){value=callback.apply(obj[i],args);if(value===false){break}}}}else{if(isArray){for(;i<length;i++){value=callback.call(obj[i],i,obj[i]);if(value===false){break}}}else{for(i in obj){value=callback.call(obj[i],i,obj[i]);if(value===false){break}}}}return obj},trim:function(text){return text==null?"":trim.call(text)},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr)}else{push.call(ret,arr)}}return ret},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i)},merge:function(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j]}first.length=i;return first},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i])}}return matches},map:function(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[];if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value)}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value)}}}return concat.apply([],ret)},guid:1,proxy:function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp}if(!jQuery.isFunction(fn)){return undefined}args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)))};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy},now:Date.now,support:support});jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase()});function isArraylike(obj){var length=obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false}if(obj.nodeType===1&&length){return true}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj}var Sizzle=function(window){var i,support,Expr,getText,isXML,compile,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+-new Date,preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true}return 0},strundefined=typeof undefined,MAX_NEGATIVE=1<<31,hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=arr.indexOf||function(elem){var i=0,len=this.length;for(;i<len;i++){if(this[i]===elem){return i}}return-1},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",identifier=characterEncoding.replace("w","w#"),attributes="\\["+whitespace+"*("+characterEncoding+")"+whitespace+"*(?:([*^$|!~]?=)"+whitespace+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+identifier+")|)|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+attributes.replace(3,8)+")*)|.*)\\)|)",rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={ID:new RegExp("^#("+characterEncoding+")"),CLASS:new RegExp("^\\.("+characterEncoding+")"),TAG:new RegExp("^("+characterEncoding.replace("w","w*")+")"),ATTR:new RegExp("^"+attributes),PSEUDO:new RegExp("^"+pseudos),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),bool:new RegExp("^(?:"+booleans+")$","i"),needsContext:new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-65536;return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+65536):String.fromCharCode(high>>10|55296,high&1023|56320)};try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els))}:function(target,els){var j=target.length,i=0;while(target[j++]=els[i++]){}target.length=j-1}}}function Sizzle(selector,context,results,seed){var match,elem,m,nodeType,i,groups,old,nid,newContext,newSelector;if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context)}context=context||document;results=results||[];if(!selector||typeof selector!=="string"){return results}if((nodeType=context.nodeType)!==1&&nodeType!==9){return[]}if(documentIsHTML&&!seed){if(match=rquickExpr.exec(selector)){if(m=match[1]){if(nodeType===9){elem=context.getElementById(m);if(elem&&elem.parentNode){if(elem.id===m){results.push(elem);return results}}else{return results}}else{if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results}}if(support.qsa&&(!rbuggyQSA||!rbuggyQSA.test(selector))){nid=old=expando;newContext=context;newSelector=nodeType===9&&selector;if(nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);if(old=context.getAttribute("id")){nid=old.replace(rescape,"\\$&")}else{context.setAttribute("id",nid)}nid="[id='"+nid+"'] ";i=groups.length;while(i--){groups[i]=nid+toSelector(groups[i])}newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;newSelector=groups.join(",")}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results}catch(qsaError){}finally{if(!old){context.removeAttribute("id")}}}}}return select(selector.replace(rtrim,"$1"),context,results,seed)}function createCache(){var keys=[];function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()]}return cache[key+" "]=value}return cache}function markFunction(fn){fn[expando]=true;return fn}function assert(fn){var div=document.createElement("div");try{return!!fn(div)}catch(e){return false}finally{if(div.parentNode){div.parentNode.removeChild(div)}div=null}}function addHandle(attrs,handler){var arr=attrs.split("|"),i=attrs.length;while(i--){Expr.attrHandle[arr[i]]=handler}}function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-(~a.sourceIndex||MAX_NEGATIVE);if(diff){return diff}if(cur){while(cur=cur.nextSibling){if(cur===b){return-1}}}return a?1:-1}function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type}}function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type}}function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j])}}})})}function testContext(context){return context&&typeof context.getElementsByTagName!==strundefined&&context}support=Sizzle.support={};isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false};setDocument=Sizzle.setDocument=function(node){var hasCompare,doc=node?node.ownerDocument||node:preferredDoc,parent=doc.defaultView;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document}document=doc;docElem=doc.documentElement;documentIsHTML=!isXML(doc);if(parent&&parent!==parent.top){if(parent.addEventListener){parent.addEventListener("unload",function(){setDocument()},false)}else if(parent.attachEvent){parent.attachEvent("onunload",function(){setDocument()})}}support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className")});support.getElementsByTagName=assert(function(div){div.appendChild(doc.createComment(""));return!div.getElementsByTagName("*").length});support.getElementsByClassName=rnative.test(doc.getElementsByClassName)&&assert(function(div){div.innerHTML="<div class='a'></div><div class='a i'></div>";div.firstChild.className="i";return div.getElementsByClassName("i").length===2});support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!doc.getElementsByName||!doc.getElementsByName(expando).length});if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!==strundefined&&documentIsHTML){var m=context.getElementById(id);return m&&m.parentNode?[m]:[]}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId}}}else{delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!==strundefined&&elem.getAttributeNode("id");return node&&node.value===attrId}}}Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!==strundefined){return context.getElementsByTagName(tag)}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem)}}return tmp}return results};Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!==strundefined&&documentIsHTML){return context.getElementsByClassName(className)}};rbuggyMatches=[];rbuggyQSA=[];if(support.qsa=rnative.test(doc.querySelectorAll)){assert(function(div){div.innerHTML="<select t=''><option selected=''></option></select>";if(div.querySelectorAll("[t^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")")}if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")")}if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked")}});assert(function(div){var input=doc.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D");if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=")}if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled")}div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:")})}if(support.matchesSelector=rnative.test(matches=docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(div){support.disconnectedMatch=matches.call(div,"div");matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos)})}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));hasCompare=rnative.test(docElem.compareDocumentPosition);contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16))}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true}}}return false};sortOrder=hasCompare?function(a,b){if(a===b){hasDuplicate=true;return 0}var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare}compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){if(a===doc||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1}if(b===doc||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1}return sortInput?indexOf.call(sortInput,a)-indexOf.call(sortInput,b):0}return compare&4?-1:1}:function(a,b){if(a===b){hasDuplicate=true;return 0}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(!aup||!bup){return a===doc?-1:b===doc?1:aup?-1:bup?1:sortInput?indexOf.call(sortInput,a)-indexOf.call(sortInput,b):0}else if(aup===bup){return siblingCheck(a,b)}cur=a;while(cur=cur.parentNode){ap.unshift(cur)}cur=b;while(cur=cur.parentNode){bp.unshift(cur)}while(ap[i]===bp[i]){i++}return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0};return doc};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements)};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem)}expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context)}return contains(context,elem)};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem)}var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg)};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i)}}while(j--){results.splice(duplicates[j],1)}}sortInput=null;return results};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){while(node=elem[i++]){ret+=getText(node)}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem)}}}else if(nodeType===3||nodeType===4){return elem.nodeValue}return ret};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" "}return match.slice(0,4)},CHILD:function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0])}match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd")}else if(match[3]){Sizzle.error(match[0])}return match},PSEUDO:function(match){var excess,unquoted=!match[5]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null}if(match[3]&&match[4]!==undefined){match[2]=match[4]}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess)}return match.slice(0,3)}},filter:{TAG:function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName}},CLASS:function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!==strundefined&&elem.getAttribute("class")||"")})},ATTR:function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!="}if(!operator){return true}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false}},CHILD:function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode}:function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType;if(parent){if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false}}start=dir=type==="only"&&!start&&"nextSibling"}return true}start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){outerCache=parent[expando]||(parent[expando]={});cache=outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=cache[0]===dirruns&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];break}}}else if(useCache&&(cache=(elem[expando]||(elem[expando]={}))[type])&&cache[0]===dirruns){diff=cache[1]}else{while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){(node[expando]||(node[expando]={}))[type]=[dirruns,diff]}if(node===elem){break}}}}diff-=last;return diff===first||diff%first===0&&diff/first>=0}}},PSEUDO:function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument)}if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf.call(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i])}}):function(elem){return fn(elem,0,args)}}return fn}},pseudos:{not:markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem)}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);return!results.pop()}}),has:markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0}}),contains:markFunction(function(text){return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1}}),lang:markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang)}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0}}while((elem=elem.parentNode)&&elem.nodeType===1);return false}}),target:function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id},root:function(elem){return elem===docElem},focus:function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex)},enabled:function(elem){return elem.disabled===false},disabled:function(elem){return elem.disabled===true},checked:function(elem){var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected},selected:function(elem){if(elem.parentNode){elem.parentNode.selectedIndex}return elem.selected===true},empty:function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false}}return true},parent:function(elem){return!Expr.pseudos["empty"](elem)},header:function(elem){return rheader.test(elem.nodeName)},input:function(elem){return rinputs.test(elem.nodeName)},button:function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button"},text:function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text")},first:createPositionalPseudo(function(){return[0]}),last:createPositionalPseudo(function(matchIndexes,length){return[length-1]}),eq:createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument]}),even:createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i)}return matchIndexes}),odd:createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i)}return matchIndexes}),lt:createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i)}return matchIndexes}),gt:createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i)}return matchIndexes})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i)}for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i)}function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters;function tokenize(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0)}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar}groups.push(tokens=[])}matched=false;if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length)}for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length)}}if(!matched){break}}return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0)}function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value}return selector}function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml)}}}:function(elem,context,xml){var oldCache,outerCache,newCache=[dirruns,doneName];if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true}}}}else{while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});if((oldCache=outerCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return newCache[2]=oldCache[2]}else{outerCache[dir]=newCache;if(newCache[2]=matcher(elem,context,xml)){return true}}}}}}}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false}}return true}:matchers[0]}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i)}}}}return newUnmatched}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter)}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector)}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml)}if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem)}}}if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){temp.push(matcherIn[i]=elem)}}postFinder(null,matcherOut=[],temp,xml)}i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf.call(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem)}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml)}else{push.apply(results,matcherOut)}}})}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf.call(checkContext,elem)>-1},implicitRelative,true),matchers=[function(elem,context,xml){return!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml))}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)]}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens))}matchers.push(matcher)}}return elementMatcher(matchers)}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",outermost),dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||.1,len=elems.length;
if(outermost){outermostContext=context!==document&&context}for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;while(matcher=elementMatchers[j++]){if(matcher(elem,context,xml)){results.push(elem);break}}if(outermost){dirruns=dirrunsUnique}}if(bySet){if(elem=!matcher&&elem){matchedCount--}if(seed){unmatched.push(elem)}}}matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml)}if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results)}}}setMatched=condense(setMatched)}push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results)}}if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup}return unmatched};return bySet?markFunction(superMatcher):superMatcher}compile=Sizzle.compile=function(selector,group){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!group){group=tokenize(selector)}i=group.length;while(i--){cached=matcherFromTokens(group[i]);if(cached[expando]){setMatchers.push(cached)}else{elementMatchers.push(cached)}}cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers))}return cached};function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results)}return results}function select(selector,context,results,seed){var i,tokens,token,type,find,match=tokenize(selector);if(!seed){if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results}selector=selector.slice(tokens.shift().value.length)}i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[type=token.type]){break}if(find=Expr.find[type]){if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results}break}}}}}compile(selector,match)(seed,context,!documentIsHTML,results,rsibling.test(selector)&&testContext(context.parentNode)||context);return results}support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=!!hasDuplicate;setDocument();support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1});if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#"})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2)}})}if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")===""})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue}})}if(!assert(function(div){return div.getAttribute("disabled")==null})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null}})}return Sizzle}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/;var risSimple=/^.[^:#\[\.,]*$/;function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not})}if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not})}if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not)}qualifier=jQuery.filter(qualifier,elements)}return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>=0!==not})}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")"}return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1}))};jQuery.fn.extend({find:function(selector){var i,len=this.length,ret=[],self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true}}}))}for(i=0;i<len;i++){jQuery.find(selector,self[i],ret)}ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret},filter:function(selector){return this.pushStack(winnow(this,selector||[],false))},not:function(selector){return this.pushStack(winnow(this,selector||[],true))},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length}});var rootjQuery,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context){var match,elem;if(!selector){return this}if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){match=[null,selector,null]}else{match=rquickExpr.exec(selector)}if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match])}else{this.attr(match,context[match])}}}return this}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){this.length=1;this[0]=elem}this.context=document;this.selector=selector;return this}}else if(!context||context.jquery){return(context||rootjQuery).find(selector)}else{return this.constructor(context).find(selector)}}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this}else if(jQuery.isFunction(selector)){return typeof rootjQuery.ready!=="undefined"?rootjQuery.ready(selector):selector(jQuery)}if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context}return jQuery.makeArray(selector,this)};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.extend({dir:function(elem,dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break}matched.push(elem)}}return matched},sibling:function(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n)}}return matched}});jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true}}})},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break}}}return this.pushStack(matched.length>1?jQuery.unique(matched):matched)},index:function(elem){if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1}if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0])}return indexOf.call(this,elem.jquery?elem[0]:elem)},add:function(selector,context){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),jQuery(selector,context))))},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector))}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur}jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null},parents:function(elem){return jQuery.dir(elem,"parentNode")},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until)},next:function(elem){return sibling(elem,"nextSibling")},prev:function(elem){return sibling(elem,"previousSibling")},nextAll:function(elem){return jQuery.dir(elem,"nextSibling")},prevAll:function(elem){return jQuery.dir(elem,"previousSibling")},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until)},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until)},siblings:function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem)},children:function(elem){return jQuery.sibling(elem.firstChild)},contents:function(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes)}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched)}if(this.length>1){if(!guaranteedUnique[name]){jQuery.unique(matched)}if(rparentsprev.test(name)){matched.reverse()}}return this.pushStack(matched)}});var rnotwhite=/\S+/g;var optionsCache={};function createOptions(options){var object=optionsCache[options]={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true});return object}jQuery.Callbacks=function(options){options=typeof options==="string"?optionsCache[options]||createOptions(options):jQuery.extend({},options);var memory,fired,firing,firingStart,firingLength,firingIndex,list=[],stack=!options.once&&[],fire=function(data){memory=options.memory&&data;fired=true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;firing=true;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false;break}}firing=false;if(list){if(stack){if(stack.length){fire(stack.shift())}}else if(memory){list=[]}else{self.disable()}}},self={add:function(){if(list){var start=list.length;(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg)}}else if(arg&&arg.length&&type!=="string"){add(arg)}})})(arguments);if(firing){firingLength=list.length}else if(memory){firingStart=start;fire(memory)}}return this},remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(firing){if(index<=firingLength){firingLength--}if(index<=firingIndex){firingIndex--}}}})}return this},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length)},empty:function(){list=[];firingLength=0;return this},disable:function(){list=stack=memory=undefined;return this},disabled:function(){return!list},lock:function(){stack=undefined;if(!memory){self.disable()}return this},locked:function(){return!stack},fireWith:function(context,args){if(list&&(!fired||stack)){args=args||[];args=[context,args.slice?args.slice():args];if(firing){stack.push(args)}else{fire(args)}}return this},fire:function(){self.fireWith(this,arguments);return this},fired:function(){return!!fired}};return self};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state},always:function(){deferred.done(arguments).fail(arguments);return this},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify)}else{newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments)}})});fns=null}).promise()},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise}},deferred={};promise.pipe=promise.then;jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString},tuples[i^1][2].disable,tuples[2][2].lock)}deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);return this};deferred[tuple[0]+"With"]=list.fireWith});promise.promise(deferred);if(func){func.call(deferred,deferred)}return deferred},when:function(subordinate){var i=0,resolveValues=slice.call(arguments),length=resolveValues.length,remaining=length!==1||subordinate&&jQuery.isFunction(subordinate.promise)?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values)}else if(!--remaining){deferred.resolveWith(contexts,values)}}},progressValues,progressContexts,resolveContexts;if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues))}else{--remaining}}}if(!remaining){deferred.resolveWith(resolveContexts,resolveValues)}return deferred.promise()}});var readyList;jQuery.fn.ready=function(fn){jQuery.ready.promise().done(fn);return this};jQuery.extend({isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++}else{jQuery.ready(true)}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return}jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return}readyList.resolveWith(document,[jQuery]);if(jQuery.fn.trigger){jQuery(document).trigger("ready").off("ready")}}});function completed(){document.removeEventListener("DOMContentLoaded",completed,false);window.removeEventListener("load",completed,false);jQuery.ready()}jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();if(document.readyState==="complete"){setTimeout(jQuery.ready)}else{document.addEventListener("DOMContentLoaded",completed,false);window.addEventListener("load",completed,false)}}return readyList.promise(obj)};jQuery.ready.promise();var access=jQuery.access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;if(jQuery.type(key)==="object"){chainable=true;for(i in key){jQuery.access(elems,fn,i,key[i],true,emptyGet,raw)}}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true}if(bulk){if(raw){fn.call(elems,value);fn=null}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value)}}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)))}}}return chainable?elems:bulk?fn.call(elems):len?fn(elems[0],key):emptyGet};jQuery.acceptData=function(owner){return owner.nodeType===1||owner.nodeType===9||!+owner.nodeType};function Data(){Object.defineProperty(this.cache={},0,{get:function(){return{}}});this.expando=jQuery.expando+Math.random()}Data.uid=1;Data.accepts=jQuery.acceptData;Data.prototype={key:function(owner){if(!Data.accepts(owner)){return 0}var descriptor={},unlock=owner[this.expando];if(!unlock){unlock=Data.uid++;try{descriptor[this.expando]={value:unlock};Object.defineProperties(owner,descriptor)}catch(e){descriptor[this.expando]=unlock;jQuery.extend(owner,descriptor)}}if(!this.cache[unlock]){this.cache[unlock]={}}return unlock},set:function(owner,data,value){var prop,unlock=this.key(owner),cache=this.cache[unlock];if(typeof data==="string"){cache[data]=value}else{if(jQuery.isEmptyObject(cache)){jQuery.extend(this.cache[unlock],data)}else{for(prop in data){cache[prop]=data[prop]}}}return cache},get:function(owner,key){var cache=this.cache[this.key(owner)];return key===undefined?cache:cache[key]},access:function(owner,key,value){var stored;if(key===undefined||key&&typeof key==="string"&&value===undefined){stored=this.get(owner,key);return stored!==undefined?stored:this.get(owner,jQuery.camelCase(key))}this.set(owner,key,value);return value!==undefined?value:key},remove:function(owner,key){var i,name,camel,unlock=this.key(owner),cache=this.cache[unlock];if(key===undefined){this.cache[unlock]={}}else{if(jQuery.isArray(key)){name=key.concat(key.map(jQuery.camelCase))}else{camel=jQuery.camelCase(key);if(key in cache){name=[key,camel]}else{name=camel;name=name in cache?[name]:name.match(rnotwhite)||[]}}i=name.length;while(i--){delete cache[name[i]]}}},hasData:function(owner){return!jQuery.isEmptyObject(this.cache[owner[this.expando]]||{})},discard:function(owner){if(owner[this.expando]){delete this.cache[owner[this.expando]]}}};var data_priv=new Data;var data_user=new Data;var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/([A-Z])/g;function dataAttr(elem,key,data){var name;if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data}catch(e){}data_user.set(elem,key,data)}else{data=undefined}}return data}jQuery.extend({hasData:function(elem){return data_user.hasData(elem)||data_priv.hasData(elem)},data:function(elem,name,data){return data_user.access(elem,name,data)},removeData:function(elem,name){data_user.remove(elem,name)},_data:function(elem,name,data){return data_priv.access(elem,name,data)},_removeData:function(elem,name){data_priv.remove(elem,name)}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;if(key===undefined){if(this.length){data=data_user.get(elem);if(elem.nodeType===1&&!data_priv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name])}}data_priv.set(elem,"hasDataAttrs",true)}}return data}if(typeof key==="object"){return this.each(function(){data_user.set(this,key)})}return access(this,function(value){var data,camelKey=jQuery.camelCase(key);if(elem&&value===undefined){data=data_user.get(elem,key);if(data!==undefined){return data}data=data_user.get(elem,camelKey);if(data!==undefined){return data}data=dataAttr(elem,camelKey,undefined);if(data!==undefined){return data}return}this.each(function(){var data=data_user.get(this,camelKey);data_user.set(this,camelKey,value);if(key.indexOf("-")!==-1&&data!==undefined){data_user.set(this,key,value)}})},null,value,arguments.length>1,null,true)},removeData:function(key){return this.each(function(){data_user.remove(this,key)})}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=data_priv.get(elem,type);if(data){if(!queue||jQuery.isArray(data)){queue=data_priv.access(elem,type,jQuery.makeArray(data))}else{queue.push(data)}}return queue||[]}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type)};if(fn==="inprogress"){fn=queue.shift();startLength--}if(fn){if(type==="fx"){queue.unshift("inprogress")}delete hooks.stop;fn.call(elem,next,hooks)}if(!startLength&&hooks){hooks.empty.fire()}},_queueHooks:function(elem,type){var key=type+"queueHooks";return data_priv.get(elem,key)||data_priv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){data_priv.remove(elem,[type+"queue",key])})})}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--}if(arguments.length<setter){return jQuery.queue(this[0],type)}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type)}})},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type)})},clearQueue:function(type){return this.queue(type||"fx",[])},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!--count){defer.resolveWith(elements,[elements])}};if(typeof type!=="string"){obj=type;type=undefined}type=type||"fx";while(i--){tmp=data_priv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve)}}resolve();return defer.promise(obj)}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function(elem,el){elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem)};var rcheckableType=/^(?:checkbox|radio)$/i;(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div"));div.innerHTML="<input type='radio' checked='checked' name='t'/>";support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue})();var strundefined=typeof undefined;support.focusinBubbles="onfocusin"in window;var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;function returnTrue(){return true}function returnFalse(){return false}function safeActiveElement(){try{return document.activeElement}catch(err){}}jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=data_priv.get(elem);if(!elemData){return}if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector}if(!handler.guid){handler.guid=jQuery.guid++}if(!(events=elemData.events)){events=elemData.events={}}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!==strundefined&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined}}types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false)}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid}}if(selector){handlers.splice(handlers.delegateCount++,0,handleObj)}else{handlers.push(handleObj)}jQuery.event.global[type]=true}},remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=data_priv.hasData(elem)&&data_priv.get(elem);if(!elemData||!(events=elemData.events)){return}types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true)}continue}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--}if(special.remove){special.remove.call(elem,handleObj)}}}if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle)}delete events[type]}}if(jQuery.isEmptyObject(events)){delete elemData.handle;data_priv.remove(elem,"events")}},trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return}if(rfocusMorph.test(type+jQuery.event.triggered)){return}if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort()}ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem}data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return}if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur}if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window)}}i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;handle=(data_priv.get(cur,"events")||{})[event.type]&&data_priv.get(cur,"handle");if(handle){handle.apply(cur,data)}handle=ontype&&cur[ontype];if(handle&&handle.apply&&jQuery.acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault()}}}event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&jQuery.acceptData(elem)){if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null}jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp}}}}return event.result},dispatch:function(event){event=jQuery.event.fix(event);var i,j,ret,matched,handleObj,handlerQueue=[],args=slice.call(arguments),handlers=(data_priv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return}handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation()}}}}}if(special.postDispatch){special.postDispatch.call(this,event)}return event.result},handlers:function(event,handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&(!event.button||event.type!=="click")){for(;cur!==this;cur=cur.parentNode||this){if(cur.disabled!==true||event.type!=="click"){matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length}if(matches[sel]){matches.push(handleObj)}}if(matches.length){handlerQueue.push({elem:cur,handlers:matches})}}}}if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)})}return handlerQueue},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode}return event}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var eventDoc,doc,body,button=original.button;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0)}if(!event.which&&button!==undefined){event.which=button&1?1:button&2?3:button&4?2:0}return event}},fix:function(event){if(event[jQuery.expando]){return event}var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{}}copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop]}if(!event.target){event.target=document}if(event.target.nodeType===3){event.target=event.target.parentNode}return fixHook.filter?fixHook.filter(event,originalEvent):event},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){this.focus();return false}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();return false}},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();return false}},_default:function(event){return jQuery.nodeName(event.target,"a")}},beforeunload:{postDispatch:function(event){if(event.result!==undefined){event.originalEvent.returnValue=event.result}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event,event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem)}else{jQuery.event.dispatch.call(elem,e)}if(e.isDefaultPrevented()){event.preventDefault()}}};jQuery.removeEvent=function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false)}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props)}if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.getPreventDefault&&src.getPreventDefault()?returnTrue:returnFalse
}else{this.type=src}if(props){jQuery.extend(this,props)}this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=true};jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&e.preventDefault){e.preventDefault()}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&e.stopPropagation){e.stopPropagation()}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation()}};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix}return ret}}});if(!support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true)};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=data_priv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true)}data_priv.access(doc,fix,(attaches||0)+1)},teardown:function(){var doc=this.ownerDocument||this,attaches=data_priv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);data_priv.remove(doc,fix)}else{data_priv.access(doc,fix,attaches)}}}})}jQuery.fn.extend({on:function(types,selector,data,fn,one){var origFn,type;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined}for(type in types){this.on(type,selector,data,types[type],one)}return this}if(data==null&&fn==null){fn=selector;data=selector=undefined}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined}else{fn=data;data=selector;selector=undefined}}if(fn===false){fn=returnFalse}else if(!fn){return this}if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments)};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++)}return this.each(function(){jQuery.event.add(this,types,fn,data,selector)})},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1)},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this}if(typeof types==="object"){for(type in types){this.off(type,selector,types[type])}return this}if(selector===false||typeof selector==="function"){fn=selector;selector=undefined}if(fn===false){fn=returnFalse}return this.each(function(){jQuery.event.remove(this,types,fn,selector)})},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this)})},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true)}}});var rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem}function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1]}else{elem.removeAttribute("type")}return elem}function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){data_priv.set(elems[i],"globalEval",!refElements||data_priv.get(refElements[i],"globalEval"))}}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return}if(data_priv.hasData(src)){pdataOld=data_priv.access(src);pdataCur=data_priv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i])}}}}if(data_user.hasData(src)){udataOld=data_user.access(src);udataCur=jQuery.extend({},udataOld);data_user.set(dest,udataCur)}}function getAll(context,tag){var ret=context.getElementsByTagName?context.getElementsByTagName(tag||"*"):context.querySelectorAll?context.querySelectorAll(tag||"*"):[];return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret}function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue}}jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i])}}if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i])}}else{cloneCopyEvent(elem,clone)}}destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"))}return clone},buildFragment:function(elems,context,scripts,selection){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem)}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem))}else{tmp=tmp||fragment.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+elem.replace(rxhtmlTag,"<$1></$2>")+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild}jQuery.merge(nodes,tmp.childNodes);tmp=fragment.firstChild;tmp.textContent=""}}}fragment.textContent="";i=0;while(elem=nodes[i++]){if(selection&&jQuery.inArray(elem,selection)!==-1){continue}contains=jQuery.contains(elem.ownerDocument,elem);tmp=getAll(fragment.appendChild(elem),"script");if(contains){setGlobalEval(tmp)}if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem)}}}}return fragment},cleanData:function(elems){var data,elem,events,type,key,j,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(jQuery.acceptData(elem)){key=elem[data_priv.expando];if(key&&(data=data_priv.cache[key])){events=Object.keys(data.events||{});if(events.length){for(j=0;(type=events[j])!==undefined;j++){if(special[type]){jQuery.event.remove(elem,type)}else{jQuery.removeEvent(elem,type,data.handle)}}}if(data_priv.cache[key]){delete data_priv.cache[key]}}}delete data_user.cache[elem[data_user.expando]]}}});jQuery.fn.extend({text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value}})},null,value,arguments.length)},append:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem)}})},prepend:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild)}})},before:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this)}})},after:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling)}})},remove:function(selector,keepData){var elem,elems=selector?jQuery.filter(selector,this):this,i=0;for(;(elem=elems[i])!=null;i++){if(!keepData&&elem.nodeType===1){jQuery.cleanData(getAll(elem))}if(elem.parentNode){if(keepData&&jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"))}elem.parentNode.removeChild(elem)}}return this},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.textContent=""}}return this},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents)})},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML}if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value}}elem=0}catch(e){}}if(elem){this.empty().append(value)}},null,value,arguments.length)},replaceWith:function(){var arg=arguments[0];this.domManip(arguments,function(elem){arg=this.parentNode;jQuery.cleanData(getAll(this));if(arg){arg.replaceChild(elem,this)}});return arg&&(arg.length||arg.nodeType)?this:this.remove()},detach:function(selector){return this.remove(selector,true)},domManip:function(args,callback){args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=this.length,set=this,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);if(isFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return this.each(function(index){var self=set.eq(index);if(isFunction){args[0]=value.call(this,index,self.html())}self.domManip(args,callback)})}if(l){fragment=jQuery.buildFragment(args,this[0].ownerDocument,false,this);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first}if(first){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"))}}callback.call(this[i],node,i)}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!data_priv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){if(jQuery._evalUrl){jQuery._evalUrl(node.src)}}else{jQuery.globalEval(node.textContent.replace(rcleanScript,""))}}}}}}return this}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);push.apply(ret,elems.get())}return this.pushStack(ret)}});var iframe,elemdisplay={};function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=window.getDefaultComputedStyle?window.getDefaultComputedStyle(elem[0]).display:jQuery.css(elem[0],"display");elem.detach();return display}function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc);if(display==="none"||!display){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);doc=iframe[0].contentDocument;doc.write();doc.close();display=actualDisplay(nodeName,doc);iframe.detach()}elemdisplay[nodeName]=display}return display}var rmargin=/^margin/;var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function(elem){return elem.ownerDocument.defaultView.getComputedStyle(elem,null)};function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);if(computed){ret=computed.getPropertyValue(name)||computed[name]}if(computed){if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name)}if(rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth}}return ret!==undefined?ret+"":ret}function addGetHookIf(conditionFn,hookFn){return{get:function(){if(conditionFn()){delete this.get;return}return(this.get=hookFn).apply(this,arguments)}}}(function(){var pixelPositionVal,boxSizingReliableVal,divReset="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;"+"-moz-box-sizing:content-box;box-sizing:content-box",docElem=document.documentElement,container=document.createElement("div"),div=document.createElement("div");div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;"+"margin-top:1px";container.appendChild(div);function computePixelPositionAndBoxSizingReliable(){div.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;"+"box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;"+"position:absolute;top:1%";docElem.appendChild(container);var divStyle=window.getComputedStyle(div,null);pixelPositionVal=divStyle.top!=="1%";boxSizingReliableVal=divStyle.width==="4px";docElem.removeChild(container)}if(window.getComputedStyle){jQuery.extend(support,{pixelPosition:function(){computePixelPositionAndBoxSizingReliable();return pixelPositionVal},boxSizingReliable:function(){if(boxSizingReliableVal==null){computePixelPositionAndBoxSizingReliable()}return boxSizingReliableVal},reliableMarginRight:function(){var ret,marginDiv=div.appendChild(document.createElement("div"));marginDiv.style.cssText=div.style.cssText=divReset;marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";docElem.appendChild(container);ret=!parseFloat(window.getComputedStyle(marginDiv,null).marginRight);docElem.removeChild(container);div.innerHTML="";return ret}})}})();jQuery.swap=function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name]}ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name]}return ret};var rdisplayswap=/^(none|table(?!-c[ea]).+)/,rnumsplit=new RegExp("^("+pnum+")(.*)$","i"),rrelNum=new RegExp("^([+-])=("+pnum+")","i"),cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:0,fontWeight:400},cssPrefixes=["Webkit","O","Moz","ms"];function vendorPropName(style,name){if(name in style){return name}var capName=name[0].toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in style){return name}}return origName}function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles)}if(isBorderBox){if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles)}if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles)}}else{val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles)}}}return val}function getWidthOrHeight(elem,name,extra){var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";if(val<=0||val==null){val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name]}if(rnumnonpx.test(val)){return val}valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);val=parseFloat(val)||0}return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px"}function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue}values[index]=data_priv.get(elem,"olddisplay");display=elem.style.display;if(show){if(!values[index]&&display==="none"){elem.style.display=""}if(elem.style.display===""&&isHidden(elem)){values[index]=data_priv.access(elem,"olddisplay",defaultDisplay(elem.nodeName))}}else{if(!values[index]){hidden=isHidden(elem);if(display&&display!=="none"||!hidden){data_priv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"))}}}}for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue}if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none"}}return elements}jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret}}}},cssNumber:{columnCount:true,fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":"cssFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return}var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*ret[2]+parseFloat(jQuery.css(elem,name));type="number"}if(value==null||value!==value){return}if(type==="number"&&!jQuery.cssNumber[origName]){value+="px"}if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit"}if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]="";style[name]=value}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret}return style[name]}},css:function(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra)}if(val===undefined){val=curCSS(elem,name,styles)}if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name]}if(extra===""||extra){num=parseFloat(val);return extra===true||jQuery.isNumeric(num)?num||0:val}return val}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){return elem.offsetWidth===0&&rdisplayswap.test(jQuery.css(elem,"display"))?jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra)}):getWidthOrHeight(elem,name,extra)}},set:function(elem,value,extra){var styles=extra&&getStyles(elem);return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles):0)}}});jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return jQuery.swap(elem,{display:"inline-block"},curCSS,[elem,"marginRight"])}});jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0]}return expanded}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles)}return map}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name)},name,value,arguments.length>1)},show:function(){return showHide(this,true)},hide:function(){return showHide(this)},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide()}return this.each(function(){if(isHidden(this)){jQuery(this).show()}else{jQuery(this).hide()}})}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing)}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||"swing";this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px")},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this)},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration)}else{this.pos=eased=percent}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(hooks&&hooks.set){hooks.set(this)}else{Tween.propHooks._default.set(this)}return this}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop]}result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween)}else if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit)}else{tween.elem[tween.prop]=tween.now}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now}}};jQuery.easing={linear:function(p){return p},swing:function(p){return.5-Math.cos(p*Math.PI)/2}};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var tween=this.createTween(prop,value),target=tween.cur(),parts=rfxnum.exec(value),unit=parts&&parts[3]||(jQuery.cssNumber[prop]?"":"px"),start=(jQuery.cssNumber[prop]||unit!=="px"&&+target)&&rfxnum.exec(jQuery.css(tween.elem,prop)),scale=1,maxIterations=20;if(start&&start[3]!==unit){unit=unit||start[3];parts=parts||[];start=+target||1;do{scale=scale||".5";start=start/scale;jQuery.style(tween.elem,prop,start+unit)}while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations)}if(parts){start=tween.start=+start||+target||0;tween.unit=unit;tween.end=parts[1]?start+(parts[1]+1)*parts[2]:+parts[2]}return tween}]};function createFxNow(){setTimeout(function(){fxNow=undefined});return fxNow=jQuery.now()}function genFx(type,includeWidth){var which,i=0,attrs={height:type};includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type}if(includeWidth){attrs.opacity=attrs.width=type}return attrs}function createTween(value,prop,animation){var tween,collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){return tween}}}function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,display,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=data_priv.get(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire()}}}hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire()}})})}if(elem.nodeType===1&&("height"in props||"width"in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];display=jQuery.css(elem,"display");if(display==="none"){display=defaultDisplay(elem.nodeName)}if(display==="inline"&&jQuery.css(elem,"float")==="none"){style.display="inline-block"}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2]})}for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true}else{continue}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop)}}if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden}}else{dataShow=data_priv.access(elem,"fxshow",{})}if(toggle){dataShow.hidden=!hidden}if(hidden){jQuery(elem).show()}else{anim.done(function(){jQuery(elem).hide()})}anim.done(function(){var prop;data_priv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop])}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0}}}}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0]}if(index!==name){props[name]=value;delete props[index]}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing}}}else{specialEasing[name]=easing}}}function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem}),tick=function(){if(stopped){return false}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent)}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining}else{deferred.resolveWith(elem,[animation]);return false}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this}stopped=true;for(;index<length;index++){animation.tweens[index].run(1)}if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd])}else{deferred.rejectWith(elem,[animation,gotoEnd])}return this}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation)}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)}jQuery.Animation=jQuery.extend(Animation,{tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"]}else{props=props.split(" ")}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];tweeners[prop]=tweeners[prop]||[];tweeners[prop].unshift(callback)}},prefilter:function(callback,prepend){if(prepend){animationPrefilters.unshift(callback)}else{animationPrefilters.push(callback)}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx"}opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this)}if(opt.queue){jQuery.dequeue(this,opt.queue)}};return opt};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback)},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||data_priv.get(this,"finish")){anim.stop(true)}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation)},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd)};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined}if(clearQueue&&type!==false){this.queue(type||"fx",[])}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=data_priv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index])}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index])}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1)}}if(dequeue||!gotoEnd){jQuery.dequeue(this,type)}})},finish:function(type){if(type!==false){type=type||"fx"}return this.each(function(){var index,data=data_priv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true)}for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);
timers.splice(index,1)}}for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this)}}delete data.finish})}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback)}});jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback)}});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1)}}if(!timers.length){jQuery.fx.stop()}fxNow=undefined};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start()}else{jQuery.timers.pop()}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval)}};jQuery.fx.stop=function(){clearInterval(timerId);timerId=null};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout)}})};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";support.checkOn=input.value!=="";support.optSelected=opt.selected;select.disabled=true;support.optDisabled=!opt.disabled;input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t"})();var nodeHook,boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1)},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name)})}});jQuery.extend({attr:function(elem,name,value){var hooks,ret,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return}if(typeof elem.getAttribute===strundefined){return jQuery.prop(elem,name,value)}if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:nodeHook)}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name)}else if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret}else{elem.setAttribute(name,value+"");return value}}else if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret}else{ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){propName=jQuery.propFix[name]||name;if(jQuery.expr.match.bool.test(name)){elem[propName]=false}elem.removeAttribute(name)}}},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val}return value}}}}});boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name)}else{elem.setAttribute(name,name)}return name}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle;if(!isXML){handle=attrHandle[name];attrHandle[name]=ret;ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;attrHandle[name]=handle}return ret}});var rfocusable=/^(?:input|select|textarea|button)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1)},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name]})}});jQuery.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return}notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name]}if(value!==undefined){return hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined?ret:elem[name]=value}else{return hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null?ret:elem[name]}},propHooks:{tabIndex:{get:function(elem){return elem.hasAttribute("tabindex")||rfocusable.test(elem.nodeName)||elem.href?elem.tabIndex:-1}}}});if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex}return null}}}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this});var rclass=/[\t\r\n\f]/g;jQuery.fn.extend({addClass:function(value){var classes,elem,cur,clazz,j,finalValue,proceed=typeof value==="string"&&value,i=0,len=this.length;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className))})}if(proceed){classes=(value||"").match(rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):" ");if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" "}}finalValue=jQuery.trim(cur);if(elem.className!==finalValue){elem.className=finalValue}}}}return this},removeClass:function(value){var classes,elem,cur,clazz,j,finalValue,proceed=arguments.length===0||typeof value==="string"&&value,i=0,len=this.length;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className))})}if(proceed){classes=(value||"").match(rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):"");if(cur){j=0;while(clazz=classes[j++]){while(cur.indexOf(" "+clazz+" ")>=0){cur=cur.replace(" "+clazz+" "," ")}}finalValue=value?jQuery.trim(cur):"";if(elem.className!==finalValue){elem.className=finalValue}}}}return this},toggleClass:function(value,stateVal){var type=typeof value;if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value)}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal)})}return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),classNames=value.match(rnotwhite)||[];while(className=classNames[i++]){if(self.hasClass(className)){self.removeClass(className)}else{self.addClass(className)}}}else if(type===strundefined||type==="boolean"){if(this.className){data_priv.set(this,"__className__",this.className)}this.className=this.className||value===false?"":data_priv.get(this,"__className__")||""}})},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true}}return false}});var rreturn=/\r/g;jQuery.fn.extend({val:function(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret}ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret}return}isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return}if(isFunction){val=value.call(this,i,jQuery(this).val())}else{val=value}if(val==null){val=""}else if(typeof val==="number"){val+=""}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+""})}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val}})}});jQuery.extend({valHooks:{select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value}values.push(value)}}return values},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(option.selected=jQuery.inArray(jQuery(option).val(),values)>=0){optionSet=true}}if(!optionSet){elem.selectedIndex=-1}return values}}}});jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value}}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name)}});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver)},bind:function(types,data,fn){return this.on(types,null,data,fn)},unbind:function(types,fn){return this.off(types,null,fn)},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn)},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn)}});var nonce=jQuery.now();var rquery=/\?/;jQuery.parseJSON=function(data){return JSON.parse(data+"")};jQuery.parseXML=function(data){var xml,tmp;if(!data||typeof data!=="string"){return null}try{tmp=new DOMParser;xml=tmp.parseFromString(data,"text/xml")}catch(e){xml=undefined}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data)}return xml};var ajaxLocParts,ajaxLocation,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/gm,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,prefilters={},transports={},allTypes="*/".concat("*");try{ajaxLocation=location.href}catch(e){ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href}ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*"}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){while(dataType=dataTypes[i++]){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func)}else{(structure[dataType]=structure[dataType]||[]).push(func)}}}}}function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false}else if(seekingTransport){return!(selected=dataTypeOrTransport)}});return selected}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*")}function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key]}}if(deep){jQuery.extend(true,target,deep)}return target}function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type")}}if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break}}}if(dataTypes[0]in responses){finalDataType=dataTypes[0]}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break}if(!firstDataType){firstDataType=type}}finalDataType=finalDataType||firstDataType}if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType)}return responses[finalDataType]}}function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv]}}current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response}if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType)}prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2]}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1])}break}}}}if(conv!==true){if(conv&&s["throws"]){response=conv(response)}else{try{response=conv(response)}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current}}}}}}}return{state:"success",data:response}}jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target)},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined}options=options||{};var transport,cacheURL,responseHeadersString,responseHeaders,timeoutTimer,parts,fireGlobals,i,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2]}}match=responseHeaders[key.toLowerCase()]}return match==null?null:match},getAllResponseHeaders:function(){return state===2?responseHeadersString:null},setRequestHeader:function(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value}return this},overrideMimeType:function(type){if(!state){s.mimeType=type}return this},statusCode:function(map){var code;if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]]}}else{jqXHR.always(map[jqXHR.status])}}return this},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText)}done(0,finalText);return this}};deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?"80":"443"))!==(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443"))))}if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional)}inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return jqXHR}fireGlobals=s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart")}s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url;if(!s.hasContent){if(s.data){cacheURL=s.url+=(rquery.test(cacheURL)?"&":"?")+s.data;delete s.data}if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+nonce++):cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++}}if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL])}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL])}}if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType)}jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i])}if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort()}strAbort="abort";for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i])}transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport")}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s])}if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout")},s.timeout)}try{state=1;transport.send(requestHeaders,done)}catch(e){if(state<2){done(-1,e)}else{throw e}}}function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(state===2){return}state=2;if(timeoutTimer){clearTimeout(timeoutTimer)}transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses)}response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified}}if(status===204||s.type==="HEAD"){statusText="nocontent"}else if(status===304){statusText="notmodified"}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0}}}jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR])}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error])}jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error])}completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!--jQuery.active){jQuery.event.trigger("ajaxStop")}}}return jqXHR},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json")},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script")}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined}return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback})}});jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn)}});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true})};jQuery.fn.extend({wrapAll:function(html){var wrap;if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i))})}if(this[0]){wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0])}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild}return elem}).append(this)}return this},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i))})}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html)}else{self.append(html)}})},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html)})},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes)}}).end()}});jQuery.expr.filters.hidden=function(elem){return elem.offsetWidth<=0&&elem.offsetHeight<=0};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem)};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v)}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add)}})}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add)}}else{add(prefix,obj)}}jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():value==null?"":value;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value)};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional}if(jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){jQuery.each(a,function(){add(this.name,this.value)})}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add)}}return s.join("&").replace(r20,"+")};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type))}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")}}):{name:elem.name,value:val.replace(rCRLF,"\r\n")}}).get()}});jQuery.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var xhrId=0,xhrCallbacks={},xhrSuccessStatus={0:200,1223:204},xhrSupported=jQuery.ajaxSettings.xhr();if(window.ActiveXObject){jQuery(window).on("unload",function(){for(var key in xhrCallbacks){xhrCallbacks[key]()}})}support.cors=!!xhrSupported&&"withCredentials"in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var callback;if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr(),id=++xhrId;xhr.open(options.type,options.url,options.async,options.username,options.password);if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i]}}if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType)}if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest"}for(i in headers){xhr.setRequestHeader(i,headers[i])}callback=function(type){return function(){if(callback){delete xhrCallbacks[id];callback=xhr.onload=xhr.onerror=null;if(type==="abort"){xhr.abort()}else if(type==="error"){complete(xhr.status,xhr.statusText)}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,typeof xhr.responseText==="string"?{text:xhr.responseText}:undefined,xhr.getAllResponseHeaders())}}}};xhr.onload=callback();xhr.onerror=callback("error");callback=xhrCallbacks[id]=callback("abort");xhr.send(options.hasContent&&options.data||null)},abort:function(){if(callback){callback()}}}}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(text){jQuery.globalEval(text);return text}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false}if(s.crossDomain){s.type="GET"}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,callback;return{send:function(_,complete){script=jQuery("<script>").prop({async:true,charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();callback=null;if(evt){complete(evt.type==="error"?404:200,evt.type)}});document.head.appendChild(script[0])},abort:function(){if(callback){callback()}}}}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;this[callback]=true;return callback}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName)}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName}s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called")}return responseContainer[0]};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments};jqXHR.always(function(){window[callbackName]=overwritten;if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName)}if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0])}responseContainer=overwritten=undefined});return"script"}});jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null}if(typeof context==="boolean"){keepScripts=context;context=false}context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])]}parsed=jQuery.buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove()}return jQuery.merge([],parsed.childNodes)};var _load=jQuery.fn.load;jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments)}var selector,type,response,self=this,off=url.indexOf(" ");if(off>=0){selector=url.slice(off);url=url.slice(0,off)}if(jQuery.isFunction(params)){callback=params;params=undefined}else if(params&&typeof params==="object"){type="POST"}if(self.length>0){jQuery.ajax({url:url,type:type,dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText)}).complete(callback&&function(jqXHR,status){self.each(callback,response||[jqXHR.responseText,status,jqXHR])})}return this};jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem}).length};var docElem=window.document.documentElement;function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView}jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};if(position==="static"){elem.style.position="relative"}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0}if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset)}if(options.top!=null){props.top=options.top-curOffset.top+curTop}if(options.left!=null){props.left=options.left-curOffset.left+curLeft}if("using"in options){options.using.call(elem,props)}else{curElem.css(props)}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i)})}var docElem,win,elem=this[0],box={top:0,left:0},doc=elem&&elem.ownerDocument;if(!doc){return}docElem=doc.documentElement;if(!jQuery.contains(docElem,elem)){return box}if(typeof elem.getBoundingClientRect!==strundefined){box=elem.getBoundingClientRect()}win=getWindow(doc);return{top:box.top+win.pageYOffset-docElem.clientTop,left:box.left+win.pageXOffset-docElem.clientLeft}},position:function(){if(!this[0]){return}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect()}else{offsetParent=this.offsetParent();offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset()}parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true)}return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)}},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||docElem;while(offsetParent&&(!jQuery.nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent}return offsetParent||docElem})}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?win[prop]:elem[method]}if(win){win.scrollTo(!top?val:window.pageXOffset,top?val:window.pageYOffset)}else{elem[method]=val}},method,val,arguments.length,null)}});jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);
return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed}})});jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name]}if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name])}return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra)},type,chainable?margin:undefined,chainable,null)}})});jQuery.fn.size=function(){return this.length};jQuery.fn.andSelf=jQuery.fn.addBack;if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery})}var _jQuery=window.jQuery,_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery}return jQuery};if(typeof noGlobal===strundefined){window.jQuery=window.$=jQuery}return jQuery});
/*!
 * jQuery UI 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */

(function(b,d){function e(g){return!b(g).parents().andSelf().filter(function(){return b.curCSS(this,"visibility")==="hidden"||b.expr.filters.hidden(this)}).length}b.ui=b.ui||{};if(!b.ui.version){b.extend(b.ui,{version:"1.8.11",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,
NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});b.fn.extend({_focus:b.fn.focus,focus:function(g,f){return typeof g==="number"?this.each(function(){var a=this;setTimeout(function(){b(a).focus();f&&f.call(a)},g)}):this._focus.apply(this,arguments)},scrollParent:function(){var g;g=b.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(b.curCSS(this,
"position",1))&&/(auto|scroll)/.test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!g.length?b(document):g},zIndex:function(g){if(g!==d)return this.css("zIndex",g);if(this.length){g=b(this[0]);for(var f;g.length&&g[0]!==document;){f=g.css("position");
if(f==="absolute"||f==="relative"||f==="fixed"){f=parseInt(g.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}g=g.parent()}}return 0},disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(g){g.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});b.each(["Width","Height"],function(g,f){function a(j,n,p,l){b.each(c,function(){n-=parseFloat(b.curCSS(j,"padding"+this,true))||0;if(p)n-=parseFloat(b.curCSS(j,
"border"+this+"Width",true))||0;if(l)n-=parseFloat(b.curCSS(j,"margin"+this,true))||0});return n}var c=f==="Width"?["Left","Right"]:["Top","Bottom"],h=f.toLowerCase(),i={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};b.fn["inner"+f]=function(j){if(j===d)return i["inner"+f].call(this);return this.each(function(){b(this).css(h,a(this,j)+"px")})};b.fn["outer"+f]=function(j,n){if(typeof j!=="number")return i["outer"+f].call(this,j);return this.each(function(){b(this).css(h,
a(this,j,true,n)+"px")})}});b.extend(b.expr[":"],{data:function(g,f,a){return!!b.data(g,a[3])},focusable:function(g){var f=g.nodeName.toLowerCase(),a=b.attr(g,"tabindex");if("area"===f){f=g.parentNode;a=f.name;if(!g.href||!a||f.nodeName.toLowerCase()!=="map")return false;g=b("img[usemap=#"+a+"]")[0];return!!g&&e(g)}return(/input|select|textarea|button|object/.test(f)?!g.disabled:"a"==f?g.href||!isNaN(a):!isNaN(a))&&e(g)},tabbable:function(g){var f=b.attr(g,"tabindex");return(isNaN(f)||f>=0)&&b(g).is(":focusable")}});
b(function(){var g=document.body,f=g.appendChild(f=document.createElement("div"));b.extend(f.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});b.support.minHeight=f.offsetHeight===100;b.support.selectstart="onselectstart"in f;g.removeChild(f).style.display="none"});b.extend(b.ui,{plugin:{add:function(g,f,a){g=b.ui[g].prototype;for(var c in a){g.plugins[c]=g.plugins[c]||[];g.plugins[c].push([f,a[c]])}},call:function(g,f,a){if((f=g.plugins[f])&&g.element[0].parentNode)for(var c=0;c<f.length;c++)g.options[f[c][0]]&&
f[c][1].apply(g.element,a)}},contains:function(g,f){return document.compareDocumentPosition?g.compareDocumentPosition(f)&16:g!==f&&g.contains(f)},hasScroll:function(g,f){if(b(g).css("overflow")==="hidden")return false;f=f&&f==="left"?"scrollLeft":"scrollTop";var a=false;if(g[f]>0)return true;g[f]=1;a=g[f]>0;g[f]=0;return a},isOverAxis:function(g,f,a){return g>f&&g<f+a},isOver:function(g,f,a,c,h,i){return b.ui.isOverAxis(g,a,h)&&b.ui.isOverAxis(f,c,i)}})}})(jQuery);
(function(b,d){if(b.cleanData){var e=b.cleanData;b.cleanData=function(f){for(var a=0,c;(c=f[a])!=null;a++)b(c).triggerHandler("remove");e(f)}}else{var g=b.fn.remove;b.fn.remove=function(f,a){return this.each(function(){if(!a)if(!f||b.filter(f,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return g.call(b(this),f,a)})}}b.widget=function(f,a,c){var h=f.split(".")[0],i;f=f.split(".")[1];i=h+"-"+f;if(!c){c=a;a=b.Widget}b.expr[":"][i]=function(j){return!!b.data(j,
f)};b[h]=b[h]||{};b[h][f]=function(j,n){arguments.length&&this._createWidget(j,n)};a=new a;a.options=b.extend(true,{},a.options);b[h][f].prototype=b.extend(true,a,{namespace:h,widgetName:f,widgetEventPrefix:b[h][f].prototype.widgetEventPrefix||f,widgetBaseClass:i},c);b.widget.bridge(f,b[h][f])};b.widget.bridge=function(f,a){b.fn[f]=function(c){var h=typeof c==="string",i=Array.prototype.slice.call(arguments,1),j=this;c=!h&&i.length?b.extend.apply(null,[true,c].concat(i)):c;if(h&&c.charAt(0)==="_")return j;
h?this.each(function(){var n=b.data(this,f),p=n&&b.isFunction(n[c])?n[c].apply(n,i):n;if(p!==n&&p!==d){j=p;return false}}):this.each(function(){var n=b.data(this,f);n?n.option(c||{})._init():b.data(this,f,new a(c,this))});return j}};b.Widget=function(f,a){arguments.length&&this._createWidget(f,a)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(f,a){b.data(a,this.widgetName,this);this.element=b(a);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),f);var c=this;this.element.bind("remove."+this.widgetName,function(){c.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(f,a){var c=f;if(arguments.length===0)return b.extend({},this.options);if(typeof f==="string"){if(a===d)return this.options[f];c={};c[f]=a}this._setOptions(c);return this},_setOptions:function(f){var a=this;b.each(f,function(c,h){a._setOption(c,h)});return this},_setOption:function(f,a){this.options[f]=a;if(f==="disabled")this.widget()[a?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",a);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(f,a,c){var h=this.options[f];a=b.Event(a);a.type=(f===this.widgetEventPrefix?f:this.widgetEventPrefix+f).toLowerCase();c=c||{};if(a.originalEvent){f=b.event.props.length;for(var i;f;){i=b.event.props[--f];a[i]=a.originalEvent[i]}}this.element.trigger(a,c);return!(b.isFunction(h)&&h.call(this.element[0],a,c)===false||a.isDefaultPrevented())}}})(jQuery);
(function(b){b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var d=this;this.element.bind("mousedown."+this.widgetName,function(e){return d._mouseDown(e)}).bind("click."+this.widgetName,function(e){if(true===b.data(e.target,d.widgetName+".preventClickEvent")){b.removeData(e.target,d.widgetName+".preventClickEvent");e.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(d){d.originalEvent=
d.originalEvent||{};if(!d.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(d);this._mouseDownEvent=d;var e=this,g=d.which==1,f=typeof this.options.cancel=="string"?b(d.target).parents().add(d.target).filter(this.options.cancel).length:false;if(!g||f||!this._mouseCapture(d))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=
this._mouseStart(d)!==false;if(!this._mouseStarted){d.preventDefault();return true}}true===b.data(d.target,this.widgetName+".preventClickEvent")&&b.removeData(d.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(a){return e._mouseMove(a)};this._mouseUpDelegate=function(a){return e._mouseUp(a)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);d.preventDefault();return d.originalEvent.mouseHandled=
true}},_mouseMove:function(d){if(b.browser.msie&&!(document.documentMode>=9)&&!d.button)return this._mouseUp(d);if(this._mouseStarted){this._mouseDrag(d);return d.preventDefault()}if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,d)!==false)?this._mouseDrag(d):this._mouseUp(d);return!this._mouseStarted},_mouseUp:function(d){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;d.target==this._mouseDownEvent.target&&b.data(d.target,this.widgetName+".preventClickEvent",true);this._mouseStop(d)}return false},_mouseDistanceMet:function(d){return Math.max(Math.abs(this._mouseDownEvent.pageX-d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
(function(b){b.widget("ui.draggable",b.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(d){var e=
this.options;if(this.helper||e.disabled||b(d.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(d);if(!this.handle)return false;return true},_mouseStart:function(d){var e=this.options;this.helper=this._createHelper(d);this._cacheHelperProportions();if(b.ui.ddmanager)b.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-
this.margins.top,left:this.offset.left-this.margins.left};b.extend(this.offset,{click:{left:d.pageX-this.offset.left,top:d.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(d);this.originalPageX=d.pageX;this.originalPageY=d.pageY;e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt);e.containment&&this._setContainment();if(this._trigger("start",d)===false){this._clear();return false}this._cacheHelperProportions();
b.ui.ddmanager&&!e.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,d);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(d,true);return true},_mouseDrag:function(d,e){this.position=this._generatePosition(d);this.positionAbs=this._convertPositionTo("absolute");if(!e){e=this._uiHash();if(this._trigger("drag",d,e)===false){this._mouseUp({});return false}this.position=e.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||
this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";b.ui.ddmanager&&b.ui.ddmanager.drag(this,d);return false},_mouseStop:function(d){var e=false;if(b.ui.ddmanager&&!this.options.dropBehaviour)e=b.ui.ddmanager.drop(this,d);if(this.dropped){e=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!e||this.options.revert=="valid"&&e||this.options.revert===true||b.isFunction(this.options.revert)&&
this.options.revert.call(this.element,e)){var g=this;b(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){g._trigger("stop",d)!==false&&g._clear()})}else this._trigger("stop",d)!==false&&this._clear();return false},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(d){var e=!this.options.handle||!b(this.options.handle,this.element).length?true:false;b(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==
d.target)e=true});return e},_createHelper:function(d){var e=this.options;d=b.isFunction(e.helper)?b(e.helper.apply(this.element[0],[d])):e.helper=="clone"?this.element.clone():this.element;d.parents("body").length||d.appendTo(e.appendTo=="parent"?this.element[0].parentNode:e.appendTo);d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute");return d},_adjustOffsetFromHelper:function(d){if(typeof d=="string")d=d.split(" ");if(b.isArray(d))d={left:+d[0],top:+d[1]||
0};if("left"in d)this.offset.click.left=d.left+this.margins.left;if("right"in d)this.offset.click.left=this.helperProportions.width-d.right+this.margins.left;if("top"in d)this.offset.click.top=d.top+this.margins.top;if("bottom"in d)this.offset.click.top=this.helperProportions.height-d.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var d=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],
this.offsetParent[0])){d.left+=this.scrollParent.scrollLeft();d.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&b.browser.msie)d={top:0,left:0};return{top:d.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:d.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var d=this.element.position();return{top:d.top-
(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:d.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),
height:this.helper.outerHeight()}},_setContainment:function(){var d=this.options;if(d.containment=="parent")d.containment=this.helper[0].parentNode;if(d.containment=="document"||d.containment=="window")this.containment=[(d.containment=="document"?0:b(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(d.containment=="document"?0:b(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(d.containment=="document"?0:b(window).scrollLeft())+b(d.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(d.containment=="document"?0:b(window).scrollTop())+(b(d.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(d.containment)&&d.containment.constructor!=Array){var e=b(d.containment)[0];if(e){d=b(d.containment).offset();var g=b(e).css("overflow")!="hidden";this.containment=[d.left+(parseInt(b(e).css("borderLeftWidth"),
10)||0)+(parseInt(b(e).css("paddingLeft"),10)||0),d.top+(parseInt(b(e).css("borderTopWidth"),10)||0)+(parseInt(b(e).css("paddingTop"),10)||0),d.left+(g?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(b(e).css("borderLeftWidth"),10)||0)-(parseInt(b(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,d.top+(g?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(b(e).css("borderTopWidth"),10)||0)-(parseInt(b(e).css("paddingBottom"),
10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom]}}else if(d.containment.constructor==Array)this.containment=d.containment},_convertPositionTo:function(d,e){if(!e)e=this.position;d=d=="absolute"?1:-1;var g=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(g[0].tagName);return{top:e.top+this.offset.relative.top*d+this.offset.parent.top*d-(b.browser.safari&&
b.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:g.scrollTop())*d),left:e.left+this.offset.relative.left*d+this.offset.parent.left*d-(b.browser.safari&&b.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:g.scrollLeft())*d)}},_generatePosition:function(d){var e=this.options,g=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],
this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(g[0].tagName),a=d.pageX,c=d.pageY;if(this.originalPosition){if(this.containment){if(d.pageX-this.offset.click.left<this.containment[0])a=this.containment[0]+this.offset.click.left;if(d.pageY-this.offset.click.top<this.containment[1])c=this.containment[1]+this.offset.click.top;if(d.pageX-this.offset.click.left>this.containment[2])a=this.containment[2]+this.offset.click.left;if(d.pageY-this.offset.click.top>this.containment[3])c=
this.containment[3]+this.offset.click.top}if(e.grid){c=this.originalPageY+Math.round((c-this.originalPageY)/e.grid[1])*e.grid[1];c=this.containment?!(c-this.offset.click.top<this.containment[1]||c-this.offset.click.top>this.containment[3])?c:!(c-this.offset.click.top<this.containment[1])?c-e.grid[1]:c+e.grid[1]:c;a=this.originalPageX+Math.round((a-this.originalPageX)/e.grid[0])*e.grid[0];a=this.containment?!(a-this.offset.click.left<this.containment[0]||a-this.offset.click.left>this.containment[2])?
a:!(a-this.offset.click.left<this.containment[0])?a-e.grid[0]:a+e.grid[0]:a}}return{top:c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(b.browser.safari&&b.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:g.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(b.browser.safari&&b.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():
f?0:g.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(d,e,g){g=g||this._uiHash();b.ui.plugin.call(this,d,[e,g]);if(d=="drag")this.positionAbs=this._convertPositionTo("absolute");return b.Widget.prototype._trigger.call(this,d,e,g)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,
offset:this.positionAbs}}});b.extend(b.ui.draggable,{version:"1.8.11"});b.ui.plugin.add("draggable","connectToSortable",{start:function(d,e){var g=b(this).data("draggable"),f=g.options,a=b.extend({},e,{item:g.element});g.sortables=[];b(f.connectToSortable).each(function(){var c=b.data(this,"sortable");if(c&&!c.options.disabled){g.sortables.push({instance:c,shouldRevert:c.options.revert});c.refreshPositions();c._trigger("activate",d,a)}})},stop:function(d,e){var g=b(this).data("draggable"),f=b.extend({},
e,{item:g.element});b.each(g.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;g.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(d);this.instance.options.helper=this.instance.options._helper;g.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",d,f)}})},drag:function(d,e){var g=
b(this).data("draggable"),f=this;b.each(g.sortables,function(){this.instance.positionAbs=g.positionAbs;this.instance.helperProportions=g.helperProportions;this.instance.offset.click=g.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=b(f).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return e.helper[0]};
d.target=this.instance.currentItem[0];this.instance._mouseCapture(d,true);this.instance._mouseStart(d,true,true);this.instance.offset.click.top=g.offset.click.top;this.instance.offset.click.left=g.offset.click.left;this.instance.offset.parent.left-=g.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=g.offset.parent.top-this.instance.offset.parent.top;g._trigger("toSortable",d);g.dropped=this.instance.element;g.currentItem=g.element;this.instance.fromOutside=g}this.instance.currentItem&&
this.instance._mouseDrag(d)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",d,this.instance._uiHash(this.instance));this.instance._mouseStop(d,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();g._trigger("fromSortable",d);g.dropped=false}})}});b.ui.plugin.add("draggable","cursor",
{start:function(){var d=b("body"),e=b(this).data("draggable").options;if(d.css("cursor"))e._cursor=d.css("cursor");d.css("cursor",e.cursor)},stop:function(){var d=b(this).data("draggable").options;d._cursor&&b("body").css("cursor",d._cursor)}});b.ui.plugin.add("draggable","iframeFix",{start:function(){var d=b(this).data("draggable").options;b(d.iframeFix===true?"iframe":d.iframeFix).each(function(){b('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+
"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(b(this).offset()).appendTo("body")})},stop:function(){b("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});b.ui.plugin.add("draggable","opacity",{start:function(d,e){d=b(e.helper);e=b(this).data("draggable").options;if(d.css("opacity"))e._opacity=d.css("opacity");d.css("opacity",e.opacity)},stop:function(d,e){d=b(this).data("draggable").options;d._opacity&&b(e.helper).css("opacity",
d._opacity)}});b.ui.plugin.add("draggable","scroll",{start:function(){var d=b(this).data("draggable");if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML")d.overflowOffset=d.scrollParent.offset()},drag:function(d){var e=b(this).data("draggable"),g=e.options,f=false;if(e.scrollParent[0]!=document&&e.scrollParent[0].tagName!="HTML"){if(!g.axis||g.axis!="x")if(e.overflowOffset.top+e.scrollParent[0].offsetHeight-d.pageY<g.scrollSensitivity)e.scrollParent[0].scrollTop=f=e.scrollParent[0].scrollTop+
g.scrollSpeed;else if(d.pageY-e.overflowOffset.top<g.scrollSensitivity)e.scrollParent[0].scrollTop=f=e.scrollParent[0].scrollTop-g.scrollSpeed;if(!g.axis||g.axis!="y")if(e.overflowOffset.left+e.scrollParent[0].offsetWidth-d.pageX<g.scrollSensitivity)e.scrollParent[0].scrollLeft=f=e.scrollParent[0].scrollLeft+g.scrollSpeed;else if(d.pageX-e.overflowOffset.left<g.scrollSensitivity)e.scrollParent[0].scrollLeft=f=e.scrollParent[0].scrollLeft-g.scrollSpeed}else{if(!g.axis||g.axis!="x")if(d.pageY-b(document).scrollTop()<
g.scrollSensitivity)f=b(document).scrollTop(b(document).scrollTop()-g.scrollSpeed);else if(b(window).height()-(d.pageY-b(document).scrollTop())<g.scrollSensitivity)f=b(document).scrollTop(b(document).scrollTop()+g.scrollSpeed);if(!g.axis||g.axis!="y")if(d.pageX-b(document).scrollLeft()<g.scrollSensitivity)f=b(document).scrollLeft(b(document).scrollLeft()-g.scrollSpeed);else if(b(window).width()-(d.pageX-b(document).scrollLeft())<g.scrollSensitivity)f=b(document).scrollLeft(b(document).scrollLeft()+
g.scrollSpeed)}f!==false&&b.ui.ddmanager&&!g.dropBehaviour&&b.ui.ddmanager.prepareOffsets(e,d)}});b.ui.plugin.add("draggable","snap",{start:function(){var d=b(this).data("draggable"),e=d.options;d.snapElements=[];b(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var g=b(this),f=g.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:g.outerWidth(),height:g.outerHeight(),top:f.top,left:f.left})})},drag:function(d,e){for(var g=b(this).data("draggable"),
f=g.options,a=f.snapTolerance,c=e.offset.left,h=c+g.helperProportions.width,i=e.offset.top,j=i+g.helperProportions.height,n=g.snapElements.length-1;n>=0;n--){var p=g.snapElements[n].left,l=p+g.snapElements[n].width,k=g.snapElements[n].top,m=k+g.snapElements[n].height;if(p-a<c&&c<l+a&&k-a<i&&i<m+a||p-a<c&&c<l+a&&k-a<j&&j<m+a||p-a<h&&h<l+a&&k-a<i&&i<m+a||p-a<h&&h<l+a&&k-a<j&&j<m+a){if(f.snapMode!="inner"){var o=Math.abs(k-j)<=a,q=Math.abs(m-i)<=a,s=Math.abs(p-h)<=a,r=Math.abs(l-c)<=a;if(o)e.position.top=
g._convertPositionTo("relative",{top:k-g.helperProportions.height,left:0}).top-g.margins.top;if(q)e.position.top=g._convertPositionTo("relative",{top:m,left:0}).top-g.margins.top;if(s)e.position.left=g._convertPositionTo("relative",{top:0,left:p-g.helperProportions.width}).left-g.margins.left;if(r)e.position.left=g._convertPositionTo("relative",{top:0,left:l}).left-g.margins.left}var u=o||q||s||r;if(f.snapMode!="outer"){o=Math.abs(k-i)<=a;q=Math.abs(m-j)<=a;s=Math.abs(p-c)<=a;r=Math.abs(l-h)<=a;if(o)e.position.top=
g._convertPositionTo("relative",{top:k,left:0}).top-g.margins.top;if(q)e.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,left:0}).top-g.margins.top;if(s)e.position.left=g._convertPositionTo("relative",{top:0,left:p}).left-g.margins.left;if(r)e.position.left=g._convertPositionTo("relative",{top:0,left:l-g.helperProportions.width}).left-g.margins.left}if(!g.snapElements[n].snapping&&(o||q||s||r||u))g.options.snap.snap&&g.options.snap.snap.call(g.element,d,b.extend(g._uiHash(),
{snapItem:g.snapElements[n].item}));g.snapElements[n].snapping=o||q||s||r||u}else{g.snapElements[n].snapping&&g.options.snap.release&&g.options.snap.release.call(g.element,d,b.extend(g._uiHash(),{snapItem:g.snapElements[n].item}));g.snapElements[n].snapping=false}}}});b.ui.plugin.add("draggable","stack",{start:function(){var d=b(this).data("draggable").options;d=b.makeArray(b(d.stack)).sort(function(g,f){return(parseInt(b(g).css("zIndex"),10)||0)-(parseInt(b(f).css("zIndex"),10)||0)});if(d.length){var e=
parseInt(d[0].style.zIndex)||0;b(d).each(function(g){this.style.zIndex=e+g});this[0].style.zIndex=e+d.length}}});b.ui.plugin.add("draggable","zIndex",{start:function(d,e){d=b(e.helper);e=b(this).data("draggable").options;if(d.css("zIndex"))e._zIndex=d.css("zIndex");d.css("zIndex",e.zIndex)},stop:function(d,e){d=b(this).data("draggable").options;d._zIndex&&b(e.helper).css("zIndex",d._zIndex)}})})(jQuery);
(function(b){b.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var d=this.options,e=d.accept;this.isover=0;this.isout=1;this.accept=b.isFunction(e)?e:function(g){return g.is(e)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};b.ui.ddmanager.droppables[d.scope]=b.ui.ddmanager.droppables[d.scope]||[];b.ui.ddmanager.droppables[d.scope].push(this);
d.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var d=b.ui.ddmanager.droppables[this.options.scope],e=0;e<d.length;e++)d[e]==this&&d.splice(e,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(d,e){if(d=="accept")this.accept=b.isFunction(e)?e:function(g){return g.is(e)};b.Widget.prototype._setOption.apply(this,arguments)},_activate:function(d){var e=b.ui.ddmanager.current;this.options.activeClass&&
this.element.addClass(this.options.activeClass);e&&this._trigger("activate",d,this.ui(e))},_deactivate:function(d){var e=b.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);e&&this._trigger("deactivate",d,this.ui(e))},_over:function(d){var e=b.ui.ddmanager.current;if(!(!e||(e.currentItem||e.element)[0]==this.element[0]))if(this.accept.call(this.element[0],e.currentItem||e.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",d,this.ui(e))}},_out:function(d){var e=b.ui.ddmanager.current;if(!(!e||(e.currentItem||e.element)[0]==this.element[0]))if(this.accept.call(this.element[0],e.currentItem||e.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",d,this.ui(e))}},_drop:function(d,e){var g=e||b.ui.ddmanager.current;if(!g||(g.currentItem||g.element)[0]==this.element[0])return false;var f=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var a=
b.data(this,"droppable");if(a.options.greedy&&!a.options.disabled&&a.options.scope==g.options.scope&&a.accept.call(a.element[0],g.currentItem||g.element)&&b.ui.intersect(g,b.extend(a,{offset:a.element.offset()}),a.options.tolerance)){f=true;return false}});if(f)return false;if(this.accept.call(this.element[0],g.currentItem||g.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
d,this.ui(g));return this.element}return false},ui:function(d){return{draggable:d.currentItem||d.element,helper:d.helper,position:d.position,offset:d.positionAbs}}});b.extend(b.ui.droppable,{version:"1.8.11"});b.ui.intersect=function(d,e,g){if(!e.offset)return false;var f=(d.positionAbs||d.position.absolute).left,a=f+d.helperProportions.width,c=(d.positionAbs||d.position.absolute).top,h=c+d.helperProportions.height,i=e.offset.left,j=i+e.proportions.width,n=e.offset.top,p=n+e.proportions.height;
switch(g){case "fit":return i<=f&&a<=j&&n<=c&&h<=p;case "intersect":return i<f+d.helperProportions.width/2&&a-d.helperProportions.width/2<j&&n<c+d.helperProportions.height/2&&h-d.helperProportions.height/2<p;case "pointer":return b.ui.isOver((d.positionAbs||d.position.absolute).top+(d.clickOffset||d.offset.click).top,(d.positionAbs||d.position.absolute).left+(d.clickOffset||d.offset.click).left,n,i,e.proportions.height,e.proportions.width);case "touch":return(c>=n&&c<=p||h>=n&&h<=p||c<n&&h>p)&&(f>=
i&&f<=j||a>=i&&a<=j||f<i&&a>j);default:return false}};b.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(d,e){var g=b.ui.ddmanager.droppables[d.options.scope]||[],f=e?e.type:null,a=(d.currentItem||d.element).find(":data(droppable)").andSelf(),c=0;a:for(;c<g.length;c++)if(!(g[c].options.disabled||d&&!g[c].accept.call(g[c].element[0],d.currentItem||d.element))){for(var h=0;h<a.length;h++)if(a[h]==g[c].element[0]){g[c].proportions.height=0;continue a}g[c].visible=g[c].element.css("display")!=
"none";if(g[c].visible){f=="mousedown"&&g[c]._activate.call(g[c],e);g[c].offset=g[c].element.offset();g[c].proportions={width:g[c].element[0].offsetWidth,height:g[c].element[0].offsetHeight}}}},drop:function(d,e){var g=false;b.each(b.ui.ddmanager.droppables[d.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&b.ui.intersect(d,this,this.options.tolerance))g=g||this._drop.call(this,e);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],d.currentItem||
d.element)){this.isout=1;this.isover=0;this._deactivate.call(this,e)}}});return g},drag:function(d,e){d.options.refreshPositions&&b.ui.ddmanager.prepareOffsets(d,e);b.each(b.ui.ddmanager.droppables[d.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var g=b.ui.intersect(d,this,this.options.tolerance);if(g=!g&&this.isover==1?"isout":g&&this.isover==0?"isover":null){var f;if(this.options.greedy){var a=this.element.parents(":data(droppable):eq(0)");if(a.length){f=
b.data(a[0],"droppable");f.greedyChild=g=="isover"?1:0}}if(f&&g=="isover"){f.isover=0;f.isout=1;f._out.call(f,e)}this[g]=1;this[g=="isout"?"isover":"isout"]=0;this[g=="isover"?"_over":"_out"].call(this,e);if(f&&g=="isout"){f.isout=0;f.isover=1;f._over.call(f,e)}}}})}}})(jQuery);
(function(b){b.widget("ui.resizable",b.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var g=this,f=this.options;this.element.addClass("ui-resizable");b.extend(this,{_aspectRatio:!!f.aspectRatio,aspectRatio:f.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:f.helper||f.ghost||f.animate?f.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&b.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(b('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=f.handles||(!b(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var a=this.handles.split(",");this.handles={};for(var c=0;c<a.length;c++){var h=b.trim(a[c]),i=b('<div class="ui-resizable-handle '+("ui-resizable-"+h)+'"></div>');/sw|se|ne|nw/.test(h)&&i.css({zIndex:++f.zIndex});"se"==h&&i.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[h]=".ui-resizable-"+h;this.element.append(i)}}this._renderAxis=function(j){j=j||this.element;for(var n in this.handles){if(this.handles[n].constructor==
String)this.handles[n]=b(this.handles[n],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var p=b(this.handles[n],this.element),l=0;l=/sw|ne|nw|se|n|s/.test(n)?p.outerHeight():p.outerWidth();p=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");j.css(p,l);this._proportionallyResize()}b(this.handles[n])}};this._renderAxis(this.element);this._handles=b(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!g.resizing){if(this.className)var j=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);g.axis=j&&j[1]?j[1]:"se"}});if(f.autoHide){this._handles.hide();b(this.element).addClass("ui-resizable-autohide").hover(function(){b(this).removeClass("ui-resizable-autohide");g._handles.show()},function(){if(!g.resizing){b(this).addClass("ui-resizable-autohide");g._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var g=function(a){b(a).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};
if(this.elementIsWrapper){g(this.element);var f=this.element;f.after(this.originalElement.css({position:f.css("position"),width:f.outerWidth(),height:f.outerHeight(),top:f.css("top"),left:f.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);g(this.originalElement);return this},_mouseCapture:function(g){var f=false;for(var a in this.handles)if(b(this.handles[a])[0]==g.target)f=true;return!this.options.disabled&&f},_mouseStart:function(g){var f=this.options,a=this.element.position(),
c=this.element;this.resizing=true;this.documentScroll={top:b(document).scrollTop(),left:b(document).scrollLeft()};if(c.is(".ui-draggable")||/absolute/.test(c.css("position")))c.css({position:"absolute",top:a.top,left:a.left});b.browser.opera&&/relative/.test(c.css("position"))&&c.css({position:"relative",top:"auto",left:"auto"});this._renderProxy();a=d(this.helper.css("left"));var h=d(this.helper.css("top"));if(f.containment){a+=b(f.containment).scrollLeft()||0;h+=b(f.containment).scrollTop()||0}this.offset=
this.helper.offset();this.position={left:a,top:h};this.size=this._helper?{width:c.outerWidth(),height:c.outerHeight()}:{width:c.width(),height:c.height()};this.originalSize=this._helper?{width:c.outerWidth(),height:c.outerHeight()}:{width:c.width(),height:c.height()};this.originalPosition={left:a,top:h};this.sizeDiff={width:c.outerWidth()-c.width(),height:c.outerHeight()-c.height()};this.originalMousePosition={left:g.pageX,top:g.pageY};this.aspectRatio=typeof f.aspectRatio=="number"?f.aspectRatio:
this.originalSize.width/this.originalSize.height||1;f=b(".ui-resizable-"+this.axis).css("cursor");b("body").css("cursor",f=="auto"?this.axis+"-resize":f);c.addClass("ui-resizable-resizing");this._propagate("start",g);return true},_mouseDrag:function(g){var f=this.helper,a=this.originalMousePosition,c=this._change[this.axis];if(!c)return false;a=c.apply(this,[g,g.pageX-a.left||0,g.pageY-a.top||0]);if(this._aspectRatio||g.shiftKey)a=this._updateRatio(a,g);a=this._respectSize(a,g);this._propagate("resize",
g);f.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(a);this._trigger("resize",g,this.ui());return false},_mouseStop:function(g){this.resizing=false;var f=this.options,a=this;if(this._helper){var c=this._proportionallyResizeElements,h=c.length&&/textarea/i.test(c[0].nodeName);c=h&&b.ui.hasScroll(c[0],"left")?0:a.sizeDiff.height;
h=h?0:a.sizeDiff.width;h={width:a.helper.width()-h,height:a.helper.height()-c};c=parseInt(a.element.css("left"),10)+(a.position.left-a.originalPosition.left)||null;var i=parseInt(a.element.css("top"),10)+(a.position.top-a.originalPosition.top)||null;f.animate||this.element.css(b.extend(h,{top:i,left:c}));a.helper.height(a.size.height);a.helper.width(a.size.width);this._helper&&!f.animate&&this._proportionallyResize()}b("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",g);this._helper&&this.helper.remove();return false},_updateCache:function(g){this.offset=this.helper.offset();if(e(g.left))this.position.left=g.left;if(e(g.top))this.position.top=g.top;if(e(g.height))this.size.height=g.height;if(e(g.width))this.size.width=g.width},_updateRatio:function(g){var f=this.position,a=this.size,c=this.axis;if(g.height)g.width=a.height*this.aspectRatio;else if(g.width)g.height=a.width/this.aspectRatio;if(c=="sw"){g.left=f.left+(a.width-g.width);g.top=
null}if(c=="nw"){g.top=f.top+(a.height-g.height);g.left=f.left+(a.width-g.width)}return g},_respectSize:function(g){var f=this.options,a=this.axis,c=e(g.width)&&f.maxWidth&&f.maxWidth<g.width,h=e(g.height)&&f.maxHeight&&f.maxHeight<g.height,i=e(g.width)&&f.minWidth&&f.minWidth>g.width,j=e(g.height)&&f.minHeight&&f.minHeight>g.height;if(i)g.width=f.minWidth;if(j)g.height=f.minHeight;if(c)g.width=f.maxWidth;if(h)g.height=f.maxHeight;var n=this.originalPosition.left+this.originalSize.width,p=this.position.top+
this.size.height,l=/sw|nw|w/.test(a);a=/nw|ne|n/.test(a);if(i&&l)g.left=n-f.minWidth;if(c&&l)g.left=n-f.maxWidth;if(j&&a)g.top=p-f.minHeight;if(h&&a)g.top=p-f.maxHeight;if((f=!g.width&&!g.height)&&!g.left&&g.top)g.top=null;else if(f&&!g.top&&g.left)g.left=null;return g},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var g=this.helper||this.element,f=0;f<this._proportionallyResizeElements.length;f++){var a=this._proportionallyResizeElements[f];if(!this.borderDif){var c=
[a.css("borderTopWidth"),a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")],h=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")];this.borderDif=b.map(c,function(i,j){i=parseInt(i,10)||0;j=parseInt(h[j],10)||0;return i+j})}b.browser.msie&&(b(g).is(":hidden")||b(g).parents(":hidden").length)||a.css({height:g.height()-this.borderDif[0]-this.borderDif[2]||0,width:g.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var g=
this.options;this.elementOffset=this.element.offset();if(this._helper){this.helper=this.helper||b('<div style="overflow:hidden;"></div>');var f=b.browser.msie&&b.browser.version<7,a=f?1:0;f=f?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+f,height:this.element.outerHeight()+f,position:"absolute",left:this.elementOffset.left-a+"px",top:this.elementOffset.top-a+"px",zIndex:++g.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(g,
f){return{width:this.originalSize.width+f}},w:function(g,f){return{left:this.originalPosition.left+f,width:this.originalSize.width-f}},n:function(g,f,a){return{top:this.originalPosition.top+a,height:this.originalSize.height-a}},s:function(g,f,a){return{height:this.originalSize.height+a}},se:function(g,f,a){return b.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[g,f,a]))},sw:function(g,f,a){return b.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[g,f,
a]))},ne:function(g,f,a){return b.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[g,f,a]))},nw:function(g,f,a){return b.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[g,f,a]))}},_propagate:function(g,f){b.ui.plugin.call(this,g,[f,this.ui()]);g!="resize"&&this._trigger(g,f,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,
originalPosition:this.originalPosition}}});b.extend(b.ui.resizable,{version:"1.8.11"});b.ui.plugin.add("resizable","alsoResize",{start:function(){var g=b(this).data("resizable").options,f=function(a){b(a).each(function(){var c=b(this);c.data("resizable-alsoresize",{width:parseInt(c.width(),10),height:parseInt(c.height(),10),left:parseInt(c.css("left"),10),top:parseInt(c.css("top"),10),position:c.css("position")})})};if(typeof g.alsoResize=="object"&&!g.alsoResize.parentNode)if(g.alsoResize.length){g.alsoResize=
g.alsoResize[0];f(g.alsoResize)}else b.each(g.alsoResize,function(a){f(a)});else f(g.alsoResize)},resize:function(g,f){var a=b(this).data("resizable");g=a.options;var c=a.originalSize,h=a.originalPosition,i={height:a.size.height-c.height||0,width:a.size.width-c.width||0,top:a.position.top-h.top||0,left:a.position.left-h.left||0},j=function(n,p){b(n).each(function(){var l=b(this),k=b(this).data("resizable-alsoresize"),m={},o=p&&p.length?p:l.parents(f.originalElement[0]).length?["width","height"]:["width",
"height","top","left"];b.each(o,function(q,s){if((q=(k[s]||0)+(i[s]||0))&&q>=0)m[s]=q||null});if(b.browser.opera&&/relative/.test(l.css("position"))){a._revertToRelativePosition=true;l.css({position:"absolute",top:"auto",left:"auto"})}l.css(m)})};typeof g.alsoResize=="object"&&!g.alsoResize.nodeType?b.each(g.alsoResize,function(n,p){j(n,p)}):j(g.alsoResize)},stop:function(){var g=b(this).data("resizable"),f=g.options,a=function(c){b(c).each(function(){var h=b(this);h.css({position:h.data("resizable-alsoresize").position})})};
if(g._revertToRelativePosition){g._revertToRelativePosition=false;typeof f.alsoResize=="object"&&!f.alsoResize.nodeType?b.each(f.alsoResize,function(c){a(c)}):a(f.alsoResize)}b(this).removeData("resizable-alsoresize")}});b.ui.plugin.add("resizable","animate",{stop:function(g){var f=b(this).data("resizable"),a=f.options,c=f._proportionallyResizeElements,h=c.length&&/textarea/i.test(c[0].nodeName),i=h&&b.ui.hasScroll(c[0],"left")?0:f.sizeDiff.height;h={width:f.size.width-(h?0:f.sizeDiff.width),height:f.size.height-
i};i=parseInt(f.element.css("left"),10)+(f.position.left-f.originalPosition.left)||null;var j=parseInt(f.element.css("top"),10)+(f.position.top-f.originalPosition.top)||null;f.element.animate(b.extend(h,j&&i?{top:j,left:i}:{}),{duration:a.animateDuration,easing:a.animateEasing,step:function(){var n={width:parseInt(f.element.css("width"),10),height:parseInt(f.element.css("height"),10),top:parseInt(f.element.css("top"),10),left:parseInt(f.element.css("left"),10)};c&&c.length&&b(c[0]).css({width:n.width,
height:n.height});f._updateCache(n);f._propagate("resize",g)}})}});b.ui.plugin.add("resizable","containment",{start:function(){var g=b(this).data("resizable"),f=g.element,a=g.options.containment;if(f=a instanceof b?a.get(0):/parent/.test(a)?f.parent().get(0):a){g.containerElement=b(f);if(/document/.test(a)||a==document){g.containerOffset={left:0,top:0};g.containerPosition={left:0,top:0};g.parentData={element:b(document),left:0,top:0,width:b(document).width(),height:b(document).height()||document.body.parentNode.scrollHeight}}else{var c=
b(f),h=[];b(["Top","Right","Left","Bottom"]).each(function(n,p){h[n]=d(c.css("padding"+p))});g.containerOffset=c.offset();g.containerPosition=c.position();g.containerSize={height:c.innerHeight()-h[3],width:c.innerWidth()-h[1]};a=g.containerOffset;var i=g.containerSize.height,j=g.containerSize.width;j=b.ui.hasScroll(f,"left")?f.scrollWidth:j;i=b.ui.hasScroll(f)?f.scrollHeight:i;g.parentData={element:f,left:a.left,top:a.top,width:j,height:i}}}},resize:function(g){var f=b(this).data("resizable"),a=f.options,
c=f.containerOffset,h=f.position;g=f._aspectRatio||g.shiftKey;var i={top:0,left:0},j=f.containerElement;if(j[0]!=document&&/static/.test(j.css("position")))i=c;if(h.left<(f._helper?c.left:0)){f.size.width+=f._helper?f.position.left-c.left:f.position.left-i.left;if(g)f.size.height=f.size.width/a.aspectRatio;f.position.left=a.helper?c.left:0}if(h.top<(f._helper?c.top:0)){f.size.height+=f._helper?f.position.top-c.top:f.position.top;if(g)f.size.width=f.size.height*a.aspectRatio;f.position.top=f._helper?
c.top:0}f.offset.left=f.parentData.left+f.position.left;f.offset.top=f.parentData.top+f.position.top;a=Math.abs((f._helper?f.offset.left-i.left:f.offset.left-i.left)+f.sizeDiff.width);c=Math.abs((f._helper?f.offset.top-i.top:f.offset.top-c.top)+f.sizeDiff.height);h=f.containerElement.get(0)==f.element.parent().get(0);i=/relative|absolute/.test(f.containerElement.css("position"));if(h&&i)a-=f.parentData.left;if(a+f.size.width>=f.parentData.width){f.size.width=f.parentData.width-a;if(g)f.size.height=
f.size.width/f.aspectRatio}if(c+f.size.height>=f.parentData.height){f.size.height=f.parentData.height-c;if(g)f.size.width=f.size.height*f.aspectRatio}},stop:function(){var g=b(this).data("resizable"),f=g.options,a=g.containerOffset,c=g.containerPosition,h=g.containerElement,i=b(g.helper),j=i.offset(),n=i.outerWidth()-g.sizeDiff.width;i=i.outerHeight()-g.sizeDiff.height;g._helper&&!f.animate&&/relative/.test(h.css("position"))&&b(this).css({left:j.left-c.left-a.left,width:n,height:i});g._helper&&!f.animate&&
/static/.test(h.css("position"))&&b(this).css({left:j.left-c.left-a.left,width:n,height:i})}});b.ui.plugin.add("resizable","ghost",{start:function(){var g=b(this).data("resizable"),f=g.options,a=g.size;g.ghost=g.originalElement.clone();g.ghost.css({opacity:0.25,display:"block",position:"relative",height:a.height,width:a.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof f.ghost=="string"?f.ghost:"");g.ghost.appendTo(g.helper)},resize:function(){var g=b(this).data("resizable");
g.ghost&&g.ghost.css({position:"relative",height:g.size.height,width:g.size.width})},stop:function(){var g=b(this).data("resizable");g.ghost&&g.helper&&g.helper.get(0).removeChild(g.ghost.get(0))}});b.ui.plugin.add("resizable","grid",{resize:function(){var g=b(this).data("resizable"),f=g.options,a=g.size,c=g.originalSize,h=g.originalPosition,i=g.axis;f.grid=typeof f.grid=="number"?[f.grid,f.grid]:f.grid;var j=Math.round((a.width-c.width)/(f.grid[0]||1))*(f.grid[0]||1);f=Math.round((a.height-c.height)/
(f.grid[1]||1))*(f.grid[1]||1);if(/^(se|s|e)$/.test(i)){g.size.width=c.width+j;g.size.height=c.height+f}else if(/^(ne)$/.test(i)){g.size.width=c.width+j;g.size.height=c.height+f;g.position.top=h.top-f}else{if(/^(sw)$/.test(i)){g.size.width=c.width+j;g.size.height=c.height+f}else{g.size.width=c.width+j;g.size.height=c.height+f;g.position.top=h.top-f}g.position.left=h.left-j}}});var d=function(g){return parseInt(g,10)||0},e=function(g){return!isNaN(parseInt(g,10))}})(jQuery);
(function(b){b.widget("ui.selectable",b.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var d=this;this.element.addClass("ui-selectable");this.dragged=false;var e;this.refresh=function(){e=b(d.options.filter,d.element[0]);e.each(function(){var g=b(this),f=g.offset();b.data(this,"selectable-item",{element:this,$element:g,left:f.left,top:f.top,right:f.left+g.outerWidth(),bottom:f.top+g.outerHeight(),startselected:false,selected:g.hasClass("ui-selected"),
selecting:g.hasClass("ui-selecting"),unselecting:g.hasClass("ui-unselecting")})})};this.refresh();this.selectees=e.addClass("ui-selectee");this._mouseInit();this.helper=b("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(d){var e=this;this.opos=[d.pageX,
d.pageY];if(!this.options.disabled){var g=this.options;this.selectees=b(g.filter,this.element[0]);this._trigger("start",d);b(g.appendTo).append(this.helper);this.helper.css({left:d.clientX,top:d.clientY,width:0,height:0});g.autoRefresh&&this.refresh();this.selectees.filter(".ui-selected").each(function(){var f=b.data(this,"selectable-item");f.startselected=true;if(!d.metaKey){f.$element.removeClass("ui-selected");f.selected=false;f.$element.addClass("ui-unselecting");f.unselecting=true;e._trigger("unselecting",
d,{unselecting:f.element})}});b(d.target).parents().andSelf().each(function(){var f=b.data(this,"selectable-item");if(f){var a=!d.metaKey||!f.$element.hasClass("ui-selected");f.$element.removeClass(a?"ui-unselecting":"ui-selected").addClass(a?"ui-selecting":"ui-unselecting");f.unselecting=!a;f.selecting=a;(f.selected=a)?e._trigger("selecting",d,{selecting:f.element}):e._trigger("unselecting",d,{unselecting:f.element});return false}})}},_mouseDrag:function(d){var e=this;this.dragged=true;if(!this.options.disabled){var g=
this.options,f=this.opos[0],a=this.opos[1],c=d.pageX,h=d.pageY;if(f>c){var i=c;c=f;f=i}if(a>h){i=h;h=a;a=i}this.helper.css({left:f,top:a,width:c-f,height:h-a});this.selectees.each(function(){var j=b.data(this,"selectable-item");if(!(!j||j.element==e.element[0])){var n=false;if(g.tolerance=="touch")n=!(j.left>c||j.right<f||j.top>h||j.bottom<a);else if(g.tolerance=="fit")n=j.left>f&&j.right<c&&j.top>a&&j.bottom<h;if(n){if(j.selected){j.$element.removeClass("ui-selected");j.selected=false}if(j.unselecting){j.$element.removeClass("ui-unselecting");
j.unselecting=false}if(!j.selecting){j.$element.addClass("ui-selecting");j.selecting=true;e._trigger("selecting",d,{selecting:j.element})}}else{if(j.selecting)if(d.metaKey&&j.startselected){j.$element.removeClass("ui-selecting");j.selecting=false;j.$element.addClass("ui-selected");j.selected=true}else{j.$element.removeClass("ui-selecting");j.selecting=false;if(j.startselected){j.$element.addClass("ui-unselecting");j.unselecting=true}e._trigger("unselecting",d,{unselecting:j.element})}if(j.selected)if(!d.metaKey&&
!j.startselected){j.$element.removeClass("ui-selected");j.selected=false;j.$element.addClass("ui-unselecting");j.unselecting=true;e._trigger("unselecting",d,{unselecting:j.element})}}}});return false}},_mouseStop:function(d){var e=this;this.dragged=false;b(".ui-unselecting",this.element[0]).each(function(){var g=b.data(this,"selectable-item");g.$element.removeClass("ui-unselecting");g.unselecting=false;g.startselected=false;e._trigger("unselected",d,{unselected:g.element})});b(".ui-selecting",this.element[0]).each(function(){var g=
b.data(this,"selectable-item");g.$element.removeClass("ui-selecting").addClass("ui-selected");g.selecting=false;g.selected=true;g.startselected=true;e._trigger("selected",d,{selected:g.element})});this._trigger("stop",d);this.helper.remove();return false}});b.extend(b.ui.selectable,{version:"1.8.11"})})(jQuery);
(function(b){b.widget("ui.sortable",b.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var d=this.items.length-1;d>=0;d--)this.items[d].item.removeData("sortable-item");return this},_setOption:function(d,e){if(d==="disabled"){this.options[d]=
e;this.widget()[e?"addClass":"removeClass"]("ui-sortable-disabled")}else b.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(d,e){if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(d);var g=null,f=this;b(d.target).parents().each(function(){if(b.data(this,"sortable-item")==f){g=b(this);return false}});if(b.data(d.target,"sortable-item")==f)g=b(d.target);if(!g)return false;if(this.options.handle&&!e){var a=false;
b(this.options.handle,g).find("*").andSelf().each(function(){if(this==d.target)a=true});if(!a)return false}this.currentItem=g;this._removeCurrentsFromItems();return true},_mouseStart:function(d,e,g){e=this.options;var f=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(d);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-
this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");b.extend(this.offset,{click:{left:d.pageX-this.offset.left,top:d.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(d);this.originalPageX=d.pageX;this.originalPageY=d.pageY;e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();e.containment&&this._setContainment();if(e.cursor){if(b("body").css("cursor"))this._storedCursor=b("body").css("cursor");b("body").css("cursor",e.cursor)}if(e.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",e.opacity)}if(e.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",e.zIndex)}if(this.scrollParent[0]!=
document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",d,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!g)for(g=this.containers.length-1;g>=0;g--)this.containers[g]._trigger("activate",d,f._uiHash(this));if(b.ui.ddmanager)b.ui.ddmanager.current=this;b.ui.ddmanager&&!e.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,d);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(d);
return true},_mouseDrag:function(d){this.position=this._generatePosition(d);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){var e=this.options,g=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-d.pageY<e.scrollSensitivity)this.scrollParent[0].scrollTop=g=this.scrollParent[0].scrollTop+e.scrollSpeed;else if(d.pageY-this.overflowOffset.top<
e.scrollSensitivity)this.scrollParent[0].scrollTop=g=this.scrollParent[0].scrollTop-e.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-d.pageX<e.scrollSensitivity)this.scrollParent[0].scrollLeft=g=this.scrollParent[0].scrollLeft+e.scrollSpeed;else if(d.pageX-this.overflowOffset.left<e.scrollSensitivity)this.scrollParent[0].scrollLeft=g=this.scrollParent[0].scrollLeft-e.scrollSpeed}else{if(d.pageY-b(document).scrollTop()<e.scrollSensitivity)g=b(document).scrollTop(b(document).scrollTop()-
e.scrollSpeed);else if(b(window).height()-(d.pageY-b(document).scrollTop())<e.scrollSensitivity)g=b(document).scrollTop(b(document).scrollTop()+e.scrollSpeed);if(d.pageX-b(document).scrollLeft()<e.scrollSensitivity)g=b(document).scrollLeft(b(document).scrollLeft()-e.scrollSpeed);else if(b(window).width()-(d.pageX-b(document).scrollLeft())<e.scrollSensitivity)g=b(document).scrollLeft(b(document).scrollLeft()+e.scrollSpeed)}g!==false&&b.ui.ddmanager&&!e.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,
d)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(e=this.items.length-1;e>=0;e--){g=this.items[e];var f=g.item[0],a=this._intersectsWithPointer(g);if(a)if(f!=this.currentItem[0]&&this.placeholder[a==1?"next":"prev"]()[0]!=f&&!b.ui.contains(this.placeholder[0],f)&&(this.options.type=="semi-dynamic"?!b.ui.contains(this.element[0],
f):true)){this.direction=a==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(g))this._rearrange(d,g);else break;this._trigger("change",d,this._uiHash());break}}this._contactContainers(d);b.ui.ddmanager&&b.ui.ddmanager.drag(this,d);this._trigger("sort",d,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(d,e){if(d){b.ui.ddmanager&&!this.options.dropBehaviour&&b.ui.ddmanager.drop(this,d);if(this.options.revert){var g=this;e=g.placeholder.offset();
g.reverting=true;b(this.helper).animate({left:e.left-this.offset.parent.left-g.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-g.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){g._clear(d)})}else this._clear(d,e);return false}},cancel:function(){var d=this;if(this.dragging){this._mouseUp({target:null});this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):
this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--){this.containers[e]._trigger("deactivate",null,d._uiHash(this));if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",null,d._uiHash(this));this.containers[e].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();b.extend(this,{helper:null,
dragging:false,reverting:false,_noFinalSort:null});this.domPosition.prev?b(this.domPosition.prev).after(this.currentItem):b(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(d){var e=this._getItemsAsjQuery(d&&d.connected),g=[];d=d||{};b(e).each(function(){var f=(b(d.item||this).attr(d.attribute||"id")||"").match(d.expression||/(.+)[-=_](.+)/);if(f)g.push((d.key||f[1]+"[]")+"="+(d.key&&d.expression?f[1]:f[2]))});!g.length&&d.key&&g.push(d.key+"=");return g.join("&")},
toArray:function(d){var e=this._getItemsAsjQuery(d&&d.connected),g=[];d=d||{};e.each(function(){g.push(b(d.item||this).attr(d.attribute||"id")||"")});return g},_intersectsWith:function(d){var e=this.positionAbs.left,g=e+this.helperProportions.width,f=this.positionAbs.top,a=f+this.helperProportions.height,c=d.left,h=c+d.width,i=d.top,j=i+d.height,n=this.offset.click.top,p=this.offset.click.left;n=f+n>i&&f+n<j&&e+p>c&&e+p<h;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||
this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>d[this.floating?"width":"height"]?n:c<e+this.helperProportions.width/2&&g-this.helperProportions.width/2<h&&i<f+this.helperProportions.height/2&&a-this.helperProportions.height/2<j},_intersectsWithPointer:function(d){var e=b.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top,d.height);d=b.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left,d.width);e=e&&d;d=this._getDragVerticalDirection();
var g=this._getDragHorizontalDirection();if(!e)return false;return this.floating?g&&g=="right"||d=="down"?2:1:d&&(d=="down"?2:1)},_intersectsWithSides:function(d){var e=b.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top+d.height/2,d.height);d=b.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left+d.width/2,d.width);var g=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();return this.floating&&f?f=="right"&&d||f=="left"&&!d:g&&(g=="down"&&e||g=="up"&&!e)},
_getDragVerticalDirection:function(){var d=this.positionAbs.top-this.lastPositionAbs.top;return d!=0&&(d>0?"down":"up")},_getDragHorizontalDirection:function(){var d=this.positionAbs.left-this.lastPositionAbs.left;return d!=0&&(d>0?"right":"left")},refresh:function(d){this._refreshItems(d);this.refreshPositions();return this},_connectWith:function(){var d=this.options;return d.connectWith.constructor==String?[d.connectWith]:d.connectWith},_getItemsAsjQuery:function(d){var e=[],g=[],f=this._connectWith();
if(f&&d)for(d=f.length-1;d>=0;d--)for(var a=b(f[d]),c=a.length-1;c>=0;c--){var h=b.data(a[c],"sortable");if(h&&h!=this&&!h.options.disabled)g.push([b.isFunction(h.options.items)?h.options.items.call(h.element):b(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])}g.push([b.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):b(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
this]);for(d=g.length-1;d>=0;d--)g[d][0].each(function(){e.push(this)});return b(e)},_removeCurrentsFromItems:function(){for(var d=this.currentItem.find(":data(sortable-item)"),e=0;e<this.items.length;e++)for(var g=0;g<d.length;g++)d[g]==this.items[e].item[0]&&this.items.splice(e,1)},_refreshItems:function(d){this.items=[];this.containers=[this];var e=this.items,g=[[b.isFunction(this.options.items)?this.options.items.call(this.element[0],d,{item:this.currentItem}):b(this.options.items,this.element),
this]],f=this._connectWith();if(f)for(var a=f.length-1;a>=0;a--)for(var c=b(f[a]),h=c.length-1;h>=0;h--){var i=b.data(c[h],"sortable");if(i&&i!=this&&!i.options.disabled){g.push([b.isFunction(i.options.items)?i.options.items.call(i.element[0],d,{item:this.currentItem}):b(i.options.items,i.element),i]);this.containers.push(i)}}for(a=g.length-1;a>=0;a--){d=g[a][1];f=g[a][0];h=0;for(c=f.length;h<c;h++){i=b(f[h]);i.data("sortable-item",d);e.push({item:i,instance:d,width:0,height:0,left:0,top:0})}}},refreshPositions:function(d){if(this.offsetParent&&
this.helper)this.offset.parent=this._getParentOffset();for(var e=this.items.length-1;e>=0;e--){var g=this.items[e],f=this.options.toleranceElement?b(this.options.toleranceElement,g.item):g.item;if(!d){g.width=f.outerWidth();g.height=f.outerHeight()}f=f.offset();g.left=f.left;g.top=f.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(e=this.containers.length-1;e>=0;e--){f=this.containers[e].element.offset();this.containers[e].containerCache.left=
f.left;this.containers[e].containerCache.top=f.top;this.containers[e].containerCache.width=this.containers[e].element.outerWidth();this.containers[e].containerCache.height=this.containers[e].element.outerHeight()}return this},_createPlaceholder:function(d){var e=d||this,g=e.options;if(!g.placeholder||g.placeholder.constructor==String){var f=g.placeholder;g.placeholder={element:function(){var a=b(document.createElement(e.currentItem[0].nodeName)).addClass(f||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
if(!f)a.style.visibility="hidden";return a},update:function(a,c){if(!(f&&!g.forcePlaceholderSize)){c.height()||c.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10));c.width()||c.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10))}}}}e.placeholder=b(g.placeholder.element.call(e.element,e.currentItem));e.currentItem.after(e.placeholder);
g.placeholder.update(e,e.placeholder)},_contactContainers:function(d){for(var e=null,g=null,f=this.containers.length-1;f>=0;f--)if(!b.ui.contains(this.currentItem[0],this.containers[f].element[0]))if(this._intersectsWith(this.containers[f].containerCache)){if(!(e&&b.ui.contains(this.containers[f].element[0],e.element[0]))){e=this.containers[f];g=f}}else if(this.containers[f].containerCache.over){this.containers[f]._trigger("out",d,this._uiHash(this));this.containers[f].containerCache.over=0}if(e)if(this.containers.length===
1){this.containers[g]._trigger("over",d,this._uiHash(this));this.containers[g].containerCache.over=1}else if(this.currentContainer!=this.containers[g]){e=1E4;f=null;for(var a=this.positionAbs[this.containers[g].floating?"left":"top"],c=this.items.length-1;c>=0;c--)if(b.ui.contains(this.containers[g].element[0],this.items[c].item[0])){var h=this.items[c][this.containers[g].floating?"left":"top"];if(Math.abs(h-a)<e){e=Math.abs(h-a);f=this.items[c]}}if(f||this.options.dropOnEmpty){this.currentContainer=
this.containers[g];f?this._rearrange(d,f,null,true):this._rearrange(d,null,this.containers[g].element,true);this._trigger("change",d,this._uiHash());this.containers[g]._trigger("change",d,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[g]._trigger("over",d,this._uiHash(this));this.containers[g].containerCache.over=1}}},_createHelper:function(d){var e=this.options;d=b.isFunction(e.helper)?b(e.helper.apply(this.element[0],[d,this.currentItem])):
e.helper=="clone"?this.currentItem.clone():this.currentItem;d.parents("body").length||b(e.appendTo!="parent"?e.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]);if(d[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(d[0].style.width==""||e.forceHelperSize)d.width(this.currentItem.width());if(d[0].style.height==
""||e.forceHelperSize)d.height(this.currentItem.height());return d},_adjustOffsetFromHelper:function(d){if(typeof d=="string")d=d.split(" ");if(b.isArray(d))d={left:+d[0],top:+d[1]||0};if("left"in d)this.offset.click.left=d.left+this.margins.left;if("right"in d)this.offset.click.left=this.helperProportions.width-d.right+this.margins.left;if("top"in d)this.offset.click.top=d.top+this.margins.top;if("bottom"in d)this.offset.click.top=this.helperProportions.height-d.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=
this.helper.offsetParent();var d=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0])){d.left+=this.scrollParent.scrollLeft();d.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&b.browser.msie)d={top:0,left:0};return{top:d.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:d.left+(parseInt(this.offsetParent.css("borderLeftWidth"),
10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var d=this.currentItem.position();return{top:d.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:d.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions=
{width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var d=this.options;if(d.containment=="parent")d.containment=this.helper[0].parentNode;if(d.containment=="document"||d.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,b(d.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b(d.containment=="document"?document:window).height()||
document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(d.containment)){var e=b(d.containment)[0];d=b(d.containment).offset();var g=b(e).css("overflow")!="hidden";this.containment=[d.left+(parseInt(b(e).css("borderLeftWidth"),10)||0)+(parseInt(b(e).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(b(e).css("borderTopWidth"),10)||0)+(parseInt(b(e).css("paddingTop"),10)||0)-this.margins.top,d.left+(g?Math.max(e.scrollWidth,
e.offsetWidth):e.offsetWidth)-(parseInt(b(e).css("borderLeftWidth"),10)||0)-(parseInt(b(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(g?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(b(e).css("borderTopWidth"),10)||0)-(parseInt(b(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(d,e){if(!e)e=this.position;d=d=="absolute"?1:-1;var g=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=
document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(g[0].tagName);return{top:e.top+this.offset.relative.top*d+this.offset.parent.top*d-(b.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:g.scrollTop())*d),left:e.left+this.offset.relative.left*d+this.offset.parent.left*d-(b.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():
f?0:g.scrollLeft())*d)}},_generatePosition:function(d){var e=this.options,g=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(g[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();var a=d.pageX,c=d.pageY;if(this.originalPosition){if(this.containment){if(d.pageX-
this.offset.click.left<this.containment[0])a=this.containment[0]+this.offset.click.left;if(d.pageY-this.offset.click.top<this.containment[1])c=this.containment[1]+this.offset.click.top;if(d.pageX-this.offset.click.left>this.containment[2])a=this.containment[2]+this.offset.click.left;if(d.pageY-this.offset.click.top>this.containment[3])c=this.containment[3]+this.offset.click.top}if(e.grid){c=this.originalPageY+Math.round((c-this.originalPageY)/e.grid[1])*e.grid[1];c=this.containment?!(c-this.offset.click.top<
this.containment[1]||c-this.offset.click.top>this.containment[3])?c:!(c-this.offset.click.top<this.containment[1])?c-e.grid[1]:c+e.grid[1]:c;a=this.originalPageX+Math.round((a-this.originalPageX)/e.grid[0])*e.grid[0];a=this.containment?!(a-this.offset.click.left<this.containment[0]||a-this.offset.click.left>this.containment[2])?a:!(a-this.offset.click.left<this.containment[0])?a-e.grid[0]:a+e.grid[0]:a}}return{top:c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(b.browser.safari&&
this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:g.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(b.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:g.scrollLeft())}},_rearrange:function(d,e,g,f){g?g[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?e.item[0]:e.item[0].nextSibling);this.counter=
this.counter?++this.counter:1;var a=this,c=this.counter;window.setTimeout(function(){c==a.counter&&a.refreshPositions(!f)},0)},_clear:function(d,e){this.reverting=false;var g=[];!this._noFinalSort&&this.currentItem[0].parentNode&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var f in this._storedCSS)if(this._storedCSS[f]=="auto"||this._storedCSS[f]=="static")this._storedCSS[f]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();
this.fromOutside&&!e&&g.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!e)g.push(function(a){this._trigger("update",a,this._uiHash())});if(!b.ui.contains(this.element[0],this.currentItem[0])){e||g.push(function(a){this._trigger("remove",a,this._uiHash())});for(f=this.containers.length-1;f>=0;f--)if(b.ui.contains(this.containers[f].element[0],
this.currentItem[0])&&!e){g.push(function(a){return function(c){a._trigger("receive",c,this._uiHash(this))}}.call(this,this.containers[f]));g.push(function(a){return function(c){a._trigger("update",c,this._uiHash(this))}}.call(this,this.containers[f]))}}for(f=this.containers.length-1;f>=0;f--){e||g.push(function(a){return function(c){a._trigger("deactivate",c,this._uiHash(this))}}.call(this,this.containers[f]));if(this.containers[f].containerCache.over){g.push(function(a){return function(c){a._trigger("out",
c,this._uiHash(this))}}.call(this,this.containers[f]));this.containers[f].containerCache.over=0}}this._storedCursor&&b("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!e){this._trigger("beforeStop",d,this._uiHash());for(f=0;f<g.length;f++)g[f].call(this,d);this._trigger("stop",d,this._uiHash())}return false}e||
this._trigger("beforeStop",d,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!e){for(f=0;f<g.length;f++)g[f].call(this,d);this._trigger("stop",d,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){b.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()},_uiHash:function(d){var e=d||this;return{helper:e.helper,placeholder:e.placeholder||b([]),position:e.position,
originalPosition:e.originalPosition,offset:e.positionAbs,item:e.currentItem,sender:d?d.element:null}}});b.extend(b.ui.sortable,{version:"1.8.11"})})(jQuery);
jQuery.effects||function(b,d){function e(l){var k;if(l&&l.constructor==Array&&l.length==3)return l;if(k=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(l))return[parseInt(k[1],10),parseInt(k[2],10),parseInt(k[3],10)];if(k=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(l))return[parseFloat(k[1])*2.55,parseFloat(k[2])*2.55,parseFloat(k[3])*2.55];if(k=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(l))return[parseInt(k[1],
16),parseInt(k[2],16),parseInt(k[3],16)];if(k=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(l))return[parseInt(k[1]+k[1],16),parseInt(k[2]+k[2],16),parseInt(k[3]+k[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(l))return j.transparent;return j[b.trim(l).toLowerCase()]}function g(l,k){var m;do{m=b.curCSS(l,k);if(m!=""&&m!="transparent"||b.nodeName(l,"body"))break;k="backgroundColor"}while(l=l.parentNode);return e(m)}function f(){var l=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
k={},m,o;if(l&&l.length&&l[0]&&l[l[0]])for(var q=l.length;q--;){m=l[q];if(typeof l[m]=="string"){o=m.replace(/\-(\w)/g,function(s,r){return r.toUpperCase()});k[o]=l[m]}}else for(m in l)if(typeof l[m]==="string")k[m]=l[m];return k}function a(l){var k,m;for(k in l){m=l[k];if(m==null||b.isFunction(m)||k in p||/scrollbar/.test(k)||!/color/i.test(k)&&isNaN(parseFloat(m)))delete l[k]}return l}function c(l,k){var m={_:0},o;for(o in k)if(l[o]!=k[o])m[o]=k[o];return m}function h(l,k,m,o){if(typeof l=="object"){o=
k;m=null;k=l;l=k.effect}if(b.isFunction(k)){o=k;m=null;k={}}if(typeof k=="number"||b.fx.speeds[k]){o=m;m=k;k={}}if(b.isFunction(m)){o=m;m=null}k=k||{};m=m||k.duration;m=b.fx.off?0:typeof m=="number"?m:m in b.fx.speeds?b.fx.speeds[m]:b.fx.speeds._default;o=o||k.complete;return[l,k,m,o]}function i(l){if(!l||typeof l==="number"||b.fx.speeds[l])return true;if(typeof l==="string"&&!b.effects[l])return true;return false}b.effects={};b.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(l,k){b.fx.step[k]=function(m){if(!m.colorInit){m.start=g(m.elem,k);m.end=e(m.end);m.colorInit=true}m.elem.style[k]="rgb("+Math.max(Math.min(parseInt(m.pos*(m.end[0]-m.start[0])+m.start[0],10),255),0)+","+Math.max(Math.min(parseInt(m.pos*(m.end[1]-m.start[1])+m.start[1],10),255),0)+","+Math.max(Math.min(parseInt(m.pos*(m.end[2]-m.start[2])+m.start[2],10),255),0)+")"}});var j={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},n=["add","remove","toggle"],p={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};b.effects.animateClass=function(l,k,m,
o){if(b.isFunction(m)){o=m;m=null}return this.queue("fx",function(){var q=b(this),s=q.attr("style")||" ",r=a(f.call(this)),u,v=q.attr("className");b.each(n,function(w,y){l[y]&&q[y+"Class"](l[y])});u=a(f.call(this));q.attr("className",v);q.animate(c(r,u),k,m,function(){b.each(n,function(w,y){l[y]&&q[y+"Class"](l[y])});if(typeof q.attr("style")=="object"){q.attr("style").cssText="";q.attr("style").cssText=s}else q.attr("style",s);o&&o.apply(this,arguments)});r=b.queue(this);u=r.splice(r.length-1,1)[0];
r.splice(1,0,u);b.dequeue(this)})};b.fn.extend({_addClass:b.fn.addClass,addClass:function(l,k,m,o){return k?b.effects.animateClass.apply(this,[{add:l},k,m,o]):this._addClass(l)},_removeClass:b.fn.removeClass,removeClass:function(l,k,m,o){return k?b.effects.animateClass.apply(this,[{remove:l},k,m,o]):this._removeClass(l)},_toggleClass:b.fn.toggleClass,toggleClass:function(l,k,m,o,q){return typeof k=="boolean"||k===d?m?b.effects.animateClass.apply(this,[k?{add:l}:{remove:l},m,o,q]):this._toggleClass(l,
k):b.effects.animateClass.apply(this,[{toggle:l},k,m,o])},switchClass:function(l,k,m,o,q){return b.effects.animateClass.apply(this,[{add:k,remove:l},m,o,q])}});b.extend(b.effects,{version:"1.8.11",save:function(l,k){for(var m=0;m<k.length;m++)k[m]!==null&&l.data("ec.storage."+k[m],l[0].style[k[m]])},restore:function(l,k){for(var m=0;m<k.length;m++)k[m]!==null&&l.css(k[m],l.data("ec.storage."+k[m]))},setMode:function(l,k){if(k=="toggle")k=l.is(":hidden")?"show":"hide";return k},getBaseline:function(l,
k){var m;switch(l[0]){case "top":m=0;break;case "middle":m=0.5;break;case "bottom":m=1;break;default:m=l[0]/k.height}switch(l[1]){case "left":l=0;break;case "center":l=0.5;break;case "right":l=1;break;default:l=l[1]/k.width}return{x:l,y:m}},createWrapper:function(l){if(l.parent().is(".ui-effects-wrapper"))return l.parent();var k={width:l.outerWidth(true),height:l.outerHeight(true),"float":l.css("float")},m=b("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",
border:"none",margin:0,padding:0});l.wrap(m);m=l.parent();if(l.css("position")=="static"){m.css({position:"relative"});l.css({position:"relative"})}else{b.extend(k,{position:l.css("position"),zIndex:l.css("z-index")});b.each(["top","left","bottom","right"],function(o,q){k[q]=l.css(q);if(isNaN(parseInt(k[q],10)))k[q]="auto"});l.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return m.css(k).show()},removeWrapper:function(l){if(l.parent().is(".ui-effects-wrapper"))return l.parent().replaceWith(l);
return l},setTransition:function(l,k,m,o){o=o||{};b.each(k,function(q,s){unit=l.cssUnit(s);if(unit[0]>0)o[s]=unit[0]*m+unit[1]});return o}});b.fn.extend({effect:function(l){var k=h.apply(this,arguments),m={options:k[1],duration:k[2],callback:k[3]};k=m.options.mode;var o=b.effects[l];if(b.fx.off||!o)return k?this[k](m.duration,m.callback):this.each(function(){m.callback&&m.callback.call(this)});return o.call(this,m)},_show:b.fn.show,show:function(l){if(i(l))return this._show.apply(this,arguments);
else{var k=h.apply(this,arguments);k[1].mode="show";return this.effect.apply(this,k)}},_hide:b.fn.hide,hide:function(l){if(i(l))return this._hide.apply(this,arguments);else{var k=h.apply(this,arguments);k[1].mode="hide";return this.effect.apply(this,k)}},__toggle:b.fn.toggle,toggle:function(l){if(i(l)||typeof l==="boolean"||b.isFunction(l))return this.__toggle.apply(this,arguments);else{var k=h.apply(this,arguments);k[1].mode="toggle";return this.effect.apply(this,k)}},cssUnit:function(l){var k=this.css(l),
m=[];b.each(["em","px","%","pt"],function(o,q){if(k.indexOf(q)>0)m=[parseFloat(k),q]});return m}});b.easing.jswing=b.easing.swing;b.extend(b.easing,{def:"easeOutQuad",swing:function(l,k,m,o,q){return b.easing[b.easing.def](l,k,m,o,q)},easeInQuad:function(l,k,m,o,q){return o*(k/=q)*k+m},easeOutQuad:function(l,k,m,o,q){return-o*(k/=q)*(k-2)+m},easeInOutQuad:function(l,k,m,o,q){if((k/=q/2)<1)return o/2*k*k+m;return-o/2*(--k*(k-2)-1)+m},easeInCubic:function(l,k,m,o,q){return o*(k/=q)*k*k+m},easeOutCubic:function(l,
k,m,o,q){return o*((k=k/q-1)*k*k+1)+m},easeInOutCubic:function(l,k,m,o,q){if((k/=q/2)<1)return o/2*k*k*k+m;return o/2*((k-=2)*k*k+2)+m},easeInQuart:function(l,k,m,o,q){return o*(k/=q)*k*k*k+m},easeOutQuart:function(l,k,m,o,q){return-o*((k=k/q-1)*k*k*k-1)+m},easeInOutQuart:function(l,k,m,o,q){if((k/=q/2)<1)return o/2*k*k*k*k+m;return-o/2*((k-=2)*k*k*k-2)+m},easeInQuint:function(l,k,m,o,q){return o*(k/=q)*k*k*k*k+m},easeOutQuint:function(l,k,m,o,q){return o*((k=k/q-1)*k*k*k*k+1)+m},easeInOutQuint:function(l,
k,m,o,q){if((k/=q/2)<1)return o/2*k*k*k*k*k+m;return o/2*((k-=2)*k*k*k*k+2)+m},easeInSine:function(l,k,m,o,q){return-o*Math.cos(k/q*(Math.PI/2))+o+m},easeOutSine:function(l,k,m,o,q){return o*Math.sin(k/q*(Math.PI/2))+m},easeInOutSine:function(l,k,m,o,q){return-o/2*(Math.cos(Math.PI*k/q)-1)+m},easeInExpo:function(l,k,m,o,q){return k==0?m:o*Math.pow(2,10*(k/q-1))+m},easeOutExpo:function(l,k,m,o,q){return k==q?m+o:o*(-Math.pow(2,-10*k/q)+1)+m},easeInOutExpo:function(l,k,m,o,q){if(k==0)return m;if(k==
q)return m+o;if((k/=q/2)<1)return o/2*Math.pow(2,10*(k-1))+m;return o/2*(-Math.pow(2,-10*--k)+2)+m},easeInCirc:function(l,k,m,o,q){return-o*(Math.sqrt(1-(k/=q)*k)-1)+m},easeOutCirc:function(l,k,m,o,q){return o*Math.sqrt(1-(k=k/q-1)*k)+m},easeInOutCirc:function(l,k,m,o,q){if((k/=q/2)<1)return-o/2*(Math.sqrt(1-k*k)-1)+m;return o/2*(Math.sqrt(1-(k-=2)*k)+1)+m},easeInElastic:function(l,k,m,o,q){l=1.70158;var s=0,r=o;if(k==0)return m;if((k/=q)==1)return m+o;s||(s=q*0.3);if(r<Math.abs(o)){r=o;l=s/4}else l=
s/(2*Math.PI)*Math.asin(o/r);return-(r*Math.pow(2,10*(k-=1))*Math.sin((k*q-l)*2*Math.PI/s))+m},easeOutElastic:function(l,k,m,o,q){l=1.70158;var s=0,r=o;if(k==0)return m;if((k/=q)==1)return m+o;s||(s=q*0.3);if(r<Math.abs(o)){r=o;l=s/4}else l=s/(2*Math.PI)*Math.asin(o/r);return r*Math.pow(2,-10*k)*Math.sin((k*q-l)*2*Math.PI/s)+o+m},easeInOutElastic:function(l,k,m,o,q){l=1.70158;var s=0,r=o;if(k==0)return m;if((k/=q/2)==2)return m+o;s||(s=q*0.3*1.5);if(r<Math.abs(o)){r=o;l=s/4}else l=s/(2*Math.PI)*Math.asin(o/
r);if(k<1)return-0.5*r*Math.pow(2,10*(k-=1))*Math.sin((k*q-l)*2*Math.PI/s)+m;return r*Math.pow(2,-10*(k-=1))*Math.sin((k*q-l)*2*Math.PI/s)*0.5+o+m},easeInBack:function(l,k,m,o,q,s){if(s==d)s=1.70158;return o*(k/=q)*k*((s+1)*k-s)+m},easeOutBack:function(l,k,m,o,q,s){if(s==d)s=1.70158;return o*((k=k/q-1)*k*((s+1)*k+s)+1)+m},easeInOutBack:function(l,k,m,o,q,s){if(s==d)s=1.70158;if((k/=q/2)<1)return o/2*k*k*(((s*=1.525)+1)*k-s)+m;return o/2*((k-=2)*k*(((s*=1.525)+1)*k+s)+2)+m},easeInBounce:function(l,
k,m,o,q){return o-b.easing.easeOutBounce(l,q-k,0,o,q)+m},easeOutBounce:function(l,k,m,o,q){return(k/=q)<1/2.75?o*7.5625*k*k+m:k<2/2.75?o*(7.5625*(k-=1.5/2.75)*k+0.75)+m:k<2.5/2.75?o*(7.5625*(k-=2.25/2.75)*k+0.9375)+m:o*(7.5625*(k-=2.625/2.75)*k+0.984375)+m},easeInOutBounce:function(l,k,m,o,q){if(k<q/2)return b.easing.easeInBounce(l,k*2,0,o,q)*0.5+m;return b.easing.easeOutBounce(l,k*2-q,0,o,q)*0.5+o*0.5+m}})}(jQuery);
(function(b){b.effects.blind=function(d){return this.queue(function(){var e=b(this),g=["position","top","bottom","left","right"],f=b.effects.setMode(e,d.options.mode||"hide"),a=d.options.direction||"vertical";b.effects.save(e,g);e.show();var c=b.effects.createWrapper(e).css({overflow:"hidden"}),h=a=="vertical"?"height":"width";a=a=="vertical"?c.height():c.width();f=="show"&&c.css(h,0);var i={};i[h]=f=="show"?a:0;c.animate(i,d.duration,d.options.easing,function(){f=="hide"&&e.hide();b.effects.restore(e,
g);b.effects.removeWrapper(e);d.callback&&d.callback.apply(e[0],arguments);e.dequeue()})})}})(jQuery);
(function(b){b.effects.bounce=function(d){return this.queue(function(){var e=b(this),g=["position","top","bottom","left","right"],f=b.effects.setMode(e,d.options.mode||"effect"),a=d.options.direction||"up",c=d.options.distance||20,h=d.options.times||5,i=d.duration||250;/show|hide/.test(f)&&g.push("opacity");b.effects.save(e,g);e.show();b.effects.createWrapper(e);var j=a=="up"||a=="down"?"top":"left";a=a=="up"||a=="left"?"pos":"neg";c=d.options.distance||(j=="top"?e.outerHeight({margin:true})/3:e.outerWidth({margin:true})/
3);if(f=="show")e.css("opacity",0).css(j,a=="pos"?-c:c);if(f=="hide")c/=h*2;f!="hide"&&h--;if(f=="show"){var n={opacity:1};n[j]=(a=="pos"?"+=":"-=")+c;e.animate(n,i/2,d.options.easing);c/=2;h--}for(n=0;n<h;n++){var p={},l={};p[j]=(a=="pos"?"-=":"+=")+c;l[j]=(a=="pos"?"+=":"-=")+c;e.animate(p,i/2,d.options.easing).animate(l,i/2,d.options.easing);c=f=="hide"?c*2:c/2}if(f=="hide"){n={opacity:0};n[j]=(a=="pos"?"-=":"+=")+c;e.animate(n,i/2,d.options.easing,function(){e.hide();b.effects.restore(e,g);b.effects.removeWrapper(e);
d.callback&&d.callback.apply(this,arguments)})}else{p={};l={};p[j]=(a=="pos"?"-=":"+=")+c;l[j]=(a=="pos"?"+=":"-=")+c;e.animate(p,i/2,d.options.easing).animate(l,i/2,d.options.easing,function(){b.effects.restore(e,g);b.effects.removeWrapper(e);d.callback&&d.callback.apply(this,arguments)})}e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);
(function(b){b.effects.clip=function(d){return this.queue(function(){var e=b(this),g=["position","top","bottom","left","right","height","width"],f=b.effects.setMode(e,d.options.mode||"hide"),a=d.options.direction||"vertical";b.effects.save(e,g);e.show();var c=b.effects.createWrapper(e).css({overflow:"hidden"});c=e[0].tagName=="IMG"?c:e;var h={size:a=="vertical"?"height":"width",position:a=="vertical"?"top":"left"};a=a=="vertical"?c.height():c.width();if(f=="show"){c.css(h.size,0);c.css(h.position,
a/2)}var i={};i[h.size]=f=="show"?a:0;i[h.position]=f=="show"?0:a/2;c.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){f=="hide"&&e.hide();b.effects.restore(e,g);b.effects.removeWrapper(e);d.callback&&d.callback.apply(e[0],arguments);e.dequeue()}})})}})(jQuery);
(function(b){b.effects.drop=function(d){return this.queue(function(){var e=b(this),g=["position","top","bottom","left","right","opacity"],f=b.effects.setMode(e,d.options.mode||"hide"),a=d.options.direction||"left";b.effects.save(e,g);e.show();b.effects.createWrapper(e);var c=a=="up"||a=="down"?"top":"left";a=a=="up"||a=="left"?"pos":"neg";var h=d.options.distance||(c=="top"?e.outerHeight({margin:true})/2:e.outerWidth({margin:true})/2);if(f=="show")e.css("opacity",0).css(c,a=="pos"?-h:h);var i={opacity:f==
"show"?1:0};i[c]=(f=="show"?a=="pos"?"+=":"-=":a=="pos"?"-=":"+=")+h;e.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){f=="hide"&&e.hide();b.effects.restore(e,g);b.effects.removeWrapper(e);d.callback&&d.callback.apply(this,arguments);e.dequeue()}})})}})(jQuery);
(function(b){b.effects.explode=function(d){return this.queue(function(){var e=d.options.pieces?Math.round(Math.sqrt(d.options.pieces)):3,g=d.options.pieces?Math.round(Math.sqrt(d.options.pieces)):3;d.options.mode=d.options.mode=="toggle"?b(this).is(":visible")?"hide":"show":d.options.mode;var f=b(this).show().css("visibility","hidden"),a=f.offset();a.top-=parseInt(f.css("marginTop"),10)||0;a.left-=parseInt(f.css("marginLeft"),10)||0;for(var c=f.outerWidth(true),h=f.outerHeight(true),i=0;i<e;i++)for(var j=
0;j<g;j++)f.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*(c/g),top:-i*(h/e)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:c/g,height:h/e,left:a.left+j*(c/g)+(d.options.mode=="show"?(j-Math.floor(g/2))*(c/g):0),top:a.top+i*(h/e)+(d.options.mode=="show"?(i-Math.floor(e/2))*(h/e):0),opacity:d.options.mode=="show"?0:1}).animate({left:a.left+j*(c/g)+(d.options.mode=="show"?0:(j-Math.floor(g/2))*(c/g)),top:a.top+
i*(h/e)+(d.options.mode=="show"?0:(i-Math.floor(e/2))*(h/e)),opacity:d.options.mode=="show"?1:0},d.duration||500);setTimeout(function(){d.options.mode=="show"?f.css({visibility:"visible"}):f.css({visibility:"visible"}).hide();d.callback&&d.callback.apply(f[0]);f.dequeue();b("div.ui-effects-explode").remove()},d.duration||500)})}})(jQuery);
(function(b){b.effects.fade=function(d){return this.queue(function(){var e=b(this),g=b.effects.setMode(e,d.options.mode||"hide");e.animate({opacity:g},{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){d.callback&&d.callback.apply(this,arguments);e.dequeue()}})})}})(jQuery);
(function(b){b.effects.fold=function(d){return this.queue(function(){var e=b(this),g=["position","top","bottom","left","right"],f=b.effects.setMode(e,d.options.mode||"hide"),a=d.options.size||15,c=!!d.options.horizFirst,h=d.duration?d.duration/2:b.fx.speeds._default/2;b.effects.save(e,g);e.show();var i=b.effects.createWrapper(e).css({overflow:"hidden"}),j=f=="show"!=c,n=j?["width","height"]:["height","width"];j=j?[i.width(),i.height()]:[i.height(),i.width()];var p=/([0-9]+)%/.exec(a);if(p)a=parseInt(p[1],
10)/100*j[f=="hide"?0:1];if(f=="show")i.css(c?{height:0,width:a}:{height:a,width:0});c={};p={};c[n[0]]=f=="show"?j[0]:a;p[n[1]]=f=="show"?j[1]:0;i.animate(c,h,d.options.easing).animate(p,h,d.options.easing,function(){f=="hide"&&e.hide();b.effects.restore(e,g);b.effects.removeWrapper(e);d.callback&&d.callback.apply(e[0],arguments);e.dequeue()})})}})(jQuery);
(function(b){b.effects.highlight=function(d){return this.queue(function(){var e=b(this),g=["backgroundImage","backgroundColor","opacity"],f=b.effects.setMode(e,d.options.mode||"show"),a={backgroundColor:e.css("backgroundColor")};if(f=="hide")a.opacity=0;b.effects.save(e,g);e.show().css({backgroundImage:"none",backgroundColor:d.options.color||"#ffff99"}).animate(a,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){f=="hide"&&e.hide();b.effects.restore(e,g);f=="show"&&!b.support.opacity&&
this.style.removeAttribute("filter");d.callback&&d.callback.apply(this,arguments);e.dequeue()}})})}})(jQuery);
(function(b){b.effects.pulsate=function(d){return this.queue(function(){var e=b(this),g=b.effects.setMode(e,d.options.mode||"show");times=(d.options.times||5)*2-1;duration=d.duration?d.duration/2:b.fx.speeds._default/2;isVisible=e.is(":visible");animateTo=0;if(!isVisible){e.css("opacity",0).show();animateTo=1}if(g=="hide"&&isVisible||g=="show"&&!isVisible)times--;for(g=0;g<times;g++){e.animate({opacity:animateTo},duration,d.options.easing);animateTo=(animateTo+1)%2}e.animate({opacity:animateTo},duration,
d.options.easing,function(){animateTo==0&&e.hide();d.callback&&d.callback.apply(this,arguments)});e.queue("fx",function(){e.dequeue()}).dequeue()})}})(jQuery);
(function(b){b.effects.puff=function(d){return this.queue(function(){var e=b(this),g=b.effects.setMode(e,d.options.mode||"hide"),f=parseInt(d.options.percent,10)||150,a=f/100,c={height:e.height(),width:e.width()};b.extend(d.options,{fade:true,mode:g,percent:g=="hide"?f:100,from:g=="hide"?c:{height:c.height*a,width:c.width*a}});e.effect("scale",d.options,d.duration,d.callback);e.dequeue()})};b.effects.scale=function(d){return this.queue(function(){var e=b(this),g=b.extend(true,{},d.options),f=b.effects.setMode(e,
d.options.mode||"effect"),a=parseInt(d.options.percent,10)||(parseInt(d.options.percent,10)==0?0:f=="hide"?0:100),c=d.options.direction||"both",h=d.options.origin;if(f!="effect"){g.origin=h||["middle","center"];g.restore=true}h={height:e.height(),width:e.width()};e.from=d.options.from||(f=="show"?{height:0,width:0}:h);a={y:c!="horizontal"?a/100:1,x:c!="vertical"?a/100:1};e.to={height:h.height*a.y,width:h.width*a.x};if(d.options.fade){if(f=="show"){e.from.opacity=0;e.to.opacity=1}if(f=="hide"){e.from.opacity=
1;e.to.opacity=0}}g.from=e.from;g.to=e.to;g.mode=f;e.effect("size",g,d.duration,d.callback);e.dequeue()})};b.effects.size=function(d){return this.queue(function(){var e=b(this),g=["position","top","bottom","left","right","width","height","overflow","opacity"],f=["position","top","bottom","left","right","overflow","opacity"],a=["width","height","overflow"],c=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],i=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
j=b.effects.setMode(e,d.options.mode||"effect"),n=d.options.restore||false,p=d.options.scale||"both",l=d.options.origin,k={height:e.height(),width:e.width()};e.from=d.options.from||k;e.to=d.options.to||k;if(l){l=b.effects.getBaseline(l,k);e.from.top=(k.height-e.from.height)*l.y;e.from.left=(k.width-e.from.width)*l.x;e.to.top=(k.height-e.to.height)*l.y;e.to.left=(k.width-e.to.width)*l.x}var m={from:{y:e.from.height/k.height,x:e.from.width/k.width},to:{y:e.to.height/k.height,x:e.to.width/k.width}};
if(p=="box"||p=="both"){if(m.from.y!=m.to.y){g=g.concat(h);e.from=b.effects.setTransition(e,h,m.from.y,e.from);e.to=b.effects.setTransition(e,h,m.to.y,e.to)}if(m.from.x!=m.to.x){g=g.concat(i);e.from=b.effects.setTransition(e,i,m.from.x,e.from);e.to=b.effects.setTransition(e,i,m.to.x,e.to)}}if(p=="content"||p=="both")if(m.from.y!=m.to.y){g=g.concat(c);e.from=b.effects.setTransition(e,c,m.from.y,e.from);e.to=b.effects.setTransition(e,c,m.to.y,e.to)}b.effects.save(e,n?g:f);e.show();b.effects.createWrapper(e);
e.css("overflow","hidden").css(e.from);if(p=="content"||p=="both"){h=h.concat(["marginTop","marginBottom"]).concat(c);i=i.concat(["marginLeft","marginRight"]);a=g.concat(h).concat(i);e.find("*[width]").each(function(){child=b(this);n&&b.effects.save(child,a);var o={height:child.height(),width:child.width()};child.from={height:o.height*m.from.y,width:o.width*m.from.x};child.to={height:o.height*m.to.y,width:o.width*m.to.x};if(m.from.y!=m.to.y){child.from=b.effects.setTransition(child,h,m.from.y,child.from);
child.to=b.effects.setTransition(child,h,m.to.y,child.to)}if(m.from.x!=m.to.x){child.from=b.effects.setTransition(child,i,m.from.x,child.from);child.to=b.effects.setTransition(child,i,m.to.x,child.to)}child.css(child.from);child.animate(child.to,d.duration,d.options.easing,function(){n&&b.effects.restore(child,a)})})}e.animate(e.to,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){e.to.opacity===0&&e.css("opacity",e.from.opacity);j=="hide"&&e.hide();b.effects.restore(e,
n?g:f);b.effects.removeWrapper(e);d.callback&&d.callback.apply(this,arguments);e.dequeue()}})})}})(jQuery);
(function(b){b.effects.shake=function(d){return this.queue(function(){var e=b(this),g=["position","top","bottom","left","right"];b.effects.setMode(e,d.options.mode||"effect");var f=d.options.direction||"left",a=d.options.distance||20,c=d.options.times||3,h=d.duration||d.options.duration||140;b.effects.save(e,g);e.show();b.effects.createWrapper(e);var i=f=="up"||f=="down"?"top":"left",j=f=="up"||f=="left"?"pos":"neg";f={};var n={},p={};f[i]=(j=="pos"?"-=":"+=")+a;n[i]=(j=="pos"?"+=":"-=")+a*2;p[i]=
(j=="pos"?"-=":"+=")+a*2;e.animate(f,h,d.options.easing);for(a=1;a<c;a++)e.animate(n,h,d.options.easing).animate(p,h,d.options.easing);e.animate(n,h,d.options.easing).animate(f,h/2,d.options.easing,function(){b.effects.restore(e,g);b.effects.removeWrapper(e);d.callback&&d.callback.apply(this,arguments)});e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);
(function(b){b.effects.slide=function(d){return this.queue(function(){var e=b(this),g=["position","top","bottom","left","right"],f=b.effects.setMode(e,d.options.mode||"show"),a=d.options.direction||"left";b.effects.save(e,g);e.show();b.effects.createWrapper(e).css({overflow:"hidden"});var c=a=="up"||a=="down"?"top":"left";a=a=="up"||a=="left"?"pos":"neg";var h=d.options.distance||(c=="top"?e.outerHeight({margin:true}):e.outerWidth({margin:true}));if(f=="show")e.css(c,a=="pos"?isNaN(h)?"-"+h:-h:h);
var i={};i[c]=(f=="show"?a=="pos"?"+=":"-=":a=="pos"?"-=":"+=")+h;e.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){f=="hide"&&e.hide();b.effects.restore(e,g);b.effects.removeWrapper(e);d.callback&&d.callback.apply(this,arguments);e.dequeue()}})})}})(jQuery);
(function(b){b.effects.transfer=function(d){return this.queue(function(){var e=b(this),g=b(d.options.to),f=g.offset();g={top:f.top,left:f.left,height:g.innerHeight(),width:g.innerWidth()};f=e.offset();var a=b('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(d.options.className).css({top:f.top,left:f.left,height:e.innerHeight(),width:e.innerWidth(),position:"absolute"}).animate(g,d.duration,d.options.easing,function(){a.remove();d.callback&&d.callback.apply(e[0],arguments);
e.dequeue()})})}})(jQuery);
(function(b){b.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var d=this,e=d.options;d.running=0;d.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");d.headers=
d.element.find(e.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){e.disabled||b(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){e.disabled||b(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){e.disabled||b(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){e.disabled||b(this).removeClass("ui-state-focus")});d.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(e.navigation){var g=d.element.find("a").filter(e.navigationFilter).eq(0);if(g.length){var f=g.closest(".ui-accordion-header");d.active=f.length?f:g.closest(".ui-accordion-content").prev()}}d.active=d._findActive(d.active||e.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");d.active.next().addClass("ui-accordion-content-active");d._createIcons();d.resize();d.element.attr("role","tablist");d.headers.attr("role","tab").bind("keydown.accordion",
function(a){return d._keydown(a)}).next().attr("role","tabpanel");d.headers.not(d.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();d.active.length?d.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):d.headers.eq(0).attr("tabIndex",0);b.browser.safari||d.headers.find("a").attr("tabIndex",-1);e.event&&d.headers.bind(e.event.split(" ").join(".accordion ")+".accordion",function(a){d._clickHandler.call(d,a,this);a.preventDefault()})},_createIcons:function(){var d=
this.options;if(d.icons){b("<span></span>").addClass("ui-icon "+d.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(d.icons.header).toggleClass(d.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var d=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var e=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(d.autoHeight||d.fillHeight)e.css("height","");return b.Widget.prototype.destroy.call(this)},_setOption:function(d,e){b.Widget.prototype._setOption.apply(this,arguments);d=="active"&&this.activate(e);if(d=="icons"){this._destroyIcons();
e&&this._createIcons()}if(d=="disabled")this.headers.add(this.headers.next())[e?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(d){if(!(this.options.disabled||d.altKey||d.ctrlKey)){var e=b.ui.keyCode,g=this.headers.length,f=this.headers.index(d.target),a=false;switch(d.keyCode){case e.RIGHT:case e.DOWN:a=this.headers[(f+1)%g];break;case e.LEFT:case e.UP:a=this.headers[(f-1+g)%g];break;case e.SPACE:case e.ENTER:this._clickHandler({target:d.target},d.target);
d.preventDefault()}if(a){b(d.target).attr("tabIndex",-1);b(a).attr("tabIndex",0);a.focus();return false}return true}},resize:function(){var d=this.options,e;if(d.fillSpace){if(b.browser.msie){var g=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}e=this.element.parent().height();b.browser.msie&&this.element.parent().css("overflow",g);this.headers.each(function(){e-=b(this).outerHeight(true)});this.headers.next().each(function(){b(this).height(Math.max(0,e-b(this).innerHeight()+
b(this).height()))}).css("overflow","auto")}else if(d.autoHeight){e=0;this.headers.next().each(function(){e=Math.max(e,b(this).height("").height())}).height(e)}return this},activate:function(d){this.options.active=d;d=this._findActive(d)[0];this._clickHandler({target:d},d);return this},_findActive:function(d){return d?typeof d==="number"?this.headers.filter(":eq("+d+")"):this.headers.not(this.headers.not(d)):d===false?b([]):this.headers.filter(":eq(0)")},_clickHandler:function(d,e){var g=this.options;
if(!g.disabled)if(d.target){d=b(d.currentTarget||e);e=d[0]===this.active[0];g.active=g.collapsible&&e?false:this.headers.index(d);if(!(this.running||!g.collapsible&&e)){var f=this.active;i=d.next();c=this.active.next();h={options:g,newHeader:e&&g.collapsible?b([]):d,oldHeader:this.active,newContent:e&&g.collapsible?b([]):i,oldContent:c};var a=this.headers.index(this.active[0])>this.headers.index(d[0]);this.active=e?b([]):d;this._toggle(i,c,h,e,a);f.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(g.icons.headerSelected).addClass(g.icons.header);
if(!e){d.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(g.icons.header).addClass(g.icons.headerSelected);d.next().addClass("ui-accordion-content-active")}}}else if(g.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(g.icons.headerSelected).addClass(g.icons.header);this.active.next().addClass("ui-accordion-content-active");var c=this.active.next(),
h={options:g,newHeader:b([]),oldHeader:g.active,newContent:b([]),oldContent:c},i=this.active=b([]);this._toggle(i,c,h)}},_toggle:function(d,e,g,f,a){var c=this,h=c.options;c.toShow=d;c.toHide=e;c.data=g;var i=function(){if(c)return c._completed.apply(c,arguments)};c._trigger("changestart",null,c.data);c.running=e.size()===0?d.size():e.size();if(h.animated){g={};g=h.collapsible&&f?{toShow:b([]),toHide:e,complete:i,down:a,autoHeight:h.autoHeight||h.fillSpace}:{toShow:d,toHide:e,complete:i,down:a,autoHeight:h.autoHeight||
h.fillSpace};if(!h.proxied)h.proxied=h.animated;if(!h.proxiedDuration)h.proxiedDuration=h.duration;h.animated=b.isFunction(h.proxied)?h.proxied(g):h.proxied;h.duration=b.isFunction(h.proxiedDuration)?h.proxiedDuration(g):h.proxiedDuration;f=b.ui.accordion.animations;var j=h.duration,n=h.animated;if(n&&!f[n]&&!b.easing[n])n="slide";f[n]||(f[n]=function(p){this.slide(p,{easing:n,duration:j||700})});f[n](g)}else{if(h.collapsible&&f)d.toggle();else{e.hide();d.show()}i(true)}e.prev().attr({"aria-expanded":"false",
"aria-selected":"false",tabIndex:-1}).blur();d.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(d){this.running=d?0:--this.running;if(!this.running){this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length)this.toHide.parent()[0].className=this.toHide.parent()[0].className;this._trigger("change",null,this.data)}}});b.extend(b.ui.accordion,{version:"1.8.11",
animations:{slide:function(d,e){d=b.extend({easing:"swing",duration:300},d,e);if(d.toHide.size())if(d.toShow.size()){var g=d.toShow.css("overflow"),f=0,a={},c={},h;e=d.toShow;h=e[0].style.width;e.width(parseInt(e.parent().width(),10)-parseInt(e.css("paddingLeft"),10)-parseInt(e.css("paddingRight"),10)-(parseInt(e.css("borderLeftWidth"),10)||0)-(parseInt(e.css("borderRightWidth"),10)||0));b.each(["height","paddingTop","paddingBottom"],function(i,j){c[j]="hide";i=(""+b.css(d.toShow[0],j)).match(/^([\d+-.]+)(.*)$/);
a[j]={value:i[1],unit:i[2]||"px"}});d.toShow.css({height:0,overflow:"hidden"}).show();d.toHide.filter(":hidden").each(d.complete).end().filter(":visible").animate(c,{step:function(i,j){if(j.prop=="height")f=j.end-j.start===0?0:(j.now-j.start)/(j.end-j.start);d.toShow[0].style[j.prop]=f*a[j.prop].value+a[j.prop].unit},duration:d.duration,easing:d.easing,complete:function(){d.autoHeight||d.toShow.css("height","");d.toShow.css({width:h,overflow:g});d.complete()}})}else d.toHide.animate({height:"hide",
paddingTop:"hide",paddingBottom:"hide"},d);else d.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},d)},bounceslide:function(d){this.slide(d,{easing:d.down?"easeOutBounce":"swing",duration:d.down?1E3:200})}}})})(jQuery);
(function(b){var d=0;b.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var e=this,g=this.element[0].ownerDocument,f;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(a){if(!(e.options.disabled||e.element.attr("readonly"))){f=
false;var c=b.ui.keyCode;switch(a.keyCode){case c.PAGE_UP:e._move("previousPage",a);break;case c.PAGE_DOWN:e._move("nextPage",a);break;case c.UP:e._move("previous",a);a.preventDefault();break;case c.DOWN:e._move("next",a);a.preventDefault();break;case c.ENTER:case c.NUMPAD_ENTER:if(e.menu.active){f=true;a.preventDefault()}case c.TAB:if(!e.menu.active)return;e.menu.select(a);break;case c.ESCAPE:e.element.val(e.term);e.close(a);break;default:clearTimeout(e.searching);e.searching=setTimeout(function(){if(e.term!=
e.element.val()){e.selectedItem=null;e.search(null,a)}},e.options.delay);break}}}).bind("keypress.autocomplete",function(a){if(f){f=false;a.preventDefault()}}).bind("focus.autocomplete",function(){if(!e.options.disabled){e.selectedItem=null;e.previous=e.element.val()}}).bind("blur.autocomplete",function(a){if(!e.options.disabled){clearTimeout(e.searching);e.closing=setTimeout(function(){e.close(a);e._change(a)},150)}});this._initSource();this.response=function(){return e._response.apply(e,arguments)};
this.menu=b("<ul></ul>").addClass("ui-autocomplete").appendTo(b(this.options.appendTo||"body",g)[0]).mousedown(function(a){var c=e.menu.element[0];b(a.target).closest(".ui-menu-item").length||setTimeout(function(){b(document).one("mousedown",function(h){h.target!==e.element[0]&&h.target!==c&&!b.ui.contains(c,h.target)&&e.close()})},1);setTimeout(function(){clearTimeout(e.closing)},13)}).menu({focus:function(a,c){c=c.item.data("item.autocomplete");false!==e._trigger("focus",a,{item:c})&&/^key/.test(a.originalEvent.type)&&
e.element.val(c.value)},selected:function(a,c){var h=c.item.data("item.autocomplete"),i=e.previous;if(e.element[0]!==g.activeElement){e.element.focus();e.previous=i;setTimeout(function(){e.previous=i;e.selectedItem=h},1)}false!==e._trigger("select",a,{item:h})&&e.element.val(h.value);e.term=e.element.val();e.close(a);e.selectedItem=h},blur:function(){e.menu.element.is(":visible")&&e.element.val()!==e.term&&e.element.val(e.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
b.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();b.Widget.prototype.destroy.call(this)},_setOption:function(e,g){b.Widget.prototype._setOption.apply(this,arguments);e==="source"&&this._initSource();if(e==="appendTo")this.menu.element.appendTo(b(g||"body",this.element[0].ownerDocument)[0]);e==="disabled"&&
g&&this.xhr&&this.xhr.abort()},_initSource:function(){var e=this,g,f;if(b.isArray(this.options.source)){g=this.options.source;this.source=function(a,c){c(b.ui.autocomplete.filter(g,a.term))}}else if(typeof this.options.source==="string"){f=this.options.source;this.source=function(a,c){e.xhr&&e.xhr.abort();e.xhr=b.ajax({url:f,data:a,dataType:"json",autocompleteRequest:++d,success:function(h){this.autocompleteRequest===d&&c(h)},error:function(){this.autocompleteRequest===d&&c([])}})}}else this.source=
this.options.source},search:function(e,g){e=e!=null?e:this.element.val();this.term=this.element.val();if(e.length<this.options.minLength)return this.close(g);clearTimeout(this.closing);if(this._trigger("search",g)!==false)return this._search(e)},_search:function(e){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:e},this.response)},_response:function(e){if(!this.options.disabled&&e&&e.length){e=this._normalize(e);this._suggest(e);this._trigger("open")}else this.close();
this.pending--;this.pending||this.element.removeClass("ui-autocomplete-loading")},close:function(e){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",e)}},_change:function(e){this.previous!==this.element.val()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(e){if(e.length&&e[0].label&&e[0].value)return e;return b.map(e,function(g){if(typeof g==="string")return{label:g,value:g};return b.extend({label:g.label||
g.value,value:g.value||g.label},g)})},_suggest:function(e){var g=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(g,e);this.menu.deactivate();this.menu.refresh();g.show();this._resizeMenu();g.position(b.extend({of:this.element},this.options.position));this.options.autoFocus&&this.menu.next(new b.Event("mouseover"))},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(e,g){var f=this;
b.each(g,function(a,c){f._renderItem(e,c)})},_renderItem:function(e,g){return b("<li></li>").data("item.autocomplete",g).append(b("<a></a>").text(g.label)).appendTo(e)},_move:function(e,g){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(e)||this.menu.last()&&/^next/.test(e)){this.element.val(this.term);this.menu.deactivate()}else this.menu[e](g);else this.search(null,g)},widget:function(){return this.menu.element}});b.extend(b.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
"\\$&")},filter:function(e,g){var f=new RegExp(b.ui.autocomplete.escapeRegex(g),"i");return b.grep(e,function(a){return f.test(a.label||a.value||a)})}})})(jQuery);
(function(b){b.widget("ui.menu",{_create:function(){var d=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(e){if(b(e.target).closest(".ui-menu-item a").length){e.preventDefault();d.select(e)}});this.refresh()},refresh:function(){var d=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(e){d.activate(e,b(this).parent())}).mouseleave(function(){d.deactivate()})},activate:function(d,e){this.deactivate();if(this.hasScroll()){var g=e.offset().top-this.element.offset().top,f=this.element.attr("scrollTop"),a=this.element.height();if(g<0)this.element.attr("scrollTop",f+g);else g>=a&&this.element.attr("scrollTop",f+g-a+e.height())}this.active=e.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",d,{item:e})},
deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null}},next:function(d){this.move("next",".ui-menu-item:first",d)},previous:function(d){this.move("prev",".ui-menu-item:last",d)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(d,e,g){if(this.active){d=this.active[d+"All"](".ui-menu-item").eq(0);
d.length?this.activate(g,d):this.activate(g,this.element.children(e))}else this.activate(g,this.element.children(e))},nextPage:function(d){if(this.hasScroll())if(!this.active||this.last())this.activate(d,this.element.children(".ui-menu-item:first"));else{var e=this.active.offset().top,g=this.element.height(),f=this.element.children(".ui-menu-item").filter(function(){var a=b(this).offset().top-e-g+b(this).height();return a<10&&a>-10});f.length||(f=this.element.children(".ui-menu-item:last"));this.activate(d,
f)}else this.activate(d,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(d){if(this.hasScroll())if(!this.active||this.first())this.activate(d,this.element.children(".ui-menu-item:last"));else{var e=this.active.offset().top,g=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var f=b(this).offset().top-e+g-b(this).height();return f<10&&f>-10});result.length||(result=this.element.children(".ui-menu-item:first"));
this.activate(d,result)}else this.activate(d,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(d){this._trigger("selected",d,{item:this.active})}})})(jQuery);
(function(b){var d,e=function(f){b(":ui-button",f.target.form).each(function(){var a=b(this).data("button");setTimeout(function(){a.refresh()},1)})},g=function(f){var a=f.name,c=f.form,h=b([]);if(a)h=c?b(c).find("[name='"+a+"']"):b("[name='"+a+"']",f.ownerDocument).filter(function(){return!this.form});return h};b.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",
e);if(typeof this.options.disabled!=="boolean")this.options.disabled=this.element.attr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var f=this,a=this.options,c=this.type==="checkbox"||this.type==="radio",h="ui-state-hover"+(!c?" ui-state-active":"");if(a.label===null)a.label=this.buttonElement.html();if(this.element.is(":disabled"))a.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",
function(){if(!a.disabled){b(this).addClass("ui-state-hover");this===d&&b(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){a.disabled||b(this).removeClass(h)}).bind("focus.button",function(){b(this).addClass("ui-state-focus")}).bind("blur.button",function(){b(this).removeClass("ui-state-focus")});c&&this.element.bind("change.button",function(){f.refresh()});if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(a.disabled)return false;b(this).toggleClass("ui-state-active");
f.buttonElement.attr("aria-pressed",f.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(a.disabled)return false;b(this).addClass("ui-state-active");f.buttonElement.attr("aria-pressed",true);var i=f.element[0];g(i).not(i).map(function(){return b(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed",false)});else{this.buttonElement.bind("mousedown.button",function(){if(a.disabled)return false;b(this).addClass("ui-state-active");
d=this;b(document).one("mouseup",function(){d=null})}).bind("mouseup.button",function(){if(a.disabled)return false;b(this).removeClass("ui-state-active")}).bind("keydown.button",function(i){if(a.disabled)return false;if(i.keyCode==b.ui.keyCode.SPACE||i.keyCode==b.ui.keyCode.ENTER)b(this).addClass("ui-state-active")}).bind("keyup.button",function(){b(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(i){i.keyCode===b.ui.keyCode.SPACE&&b(this).click()})}this._setOption("disabled",
a.disabled)},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type==="radio"){var f=this.element.parents().filter(":last"),a="label[for="+this.element.attr("id")+"]";this.buttonElement=f.find(a);if(!this.buttonElement.length){f=f.length?f.siblings():this.element.siblings();this.buttonElement=f.filter(a);if(!this.buttonElement.length)this.buttonElement=f.find(a)}this.element.addClass("ui-helper-hidden-accessible");
(f=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",f)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
this.hasTitle||this.buttonElement.removeAttr("title");b.Widget.prototype.destroy.call(this)},_setOption:function(f,a){b.Widget.prototype._setOption.apply(this,arguments);if(f==="disabled")a?this.element.attr("disabled",true):this.element.removeAttr("disabled");this._resetButton()},refresh:function(){var f=this.element.is(":disabled");f!==this.options.disabled&&this._setOption("disabled",f);if(this.type==="radio")g(this.element[0]).each(function(){b(this).is(":checked")?b(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
true):b(this).button("widget").removeClass("ui-state-active").attr("aria-pressed",false)});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed",true):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",false)},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var f=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
a=b("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(f.empty()).text(),c=this.options.icons,h=c.primary&&c.secondary,i=[];if(c.primary||c.secondary){if(this.options.text)i.push("ui-button-text-icon"+(h?"s":c.primary?"-primary":"-secondary"));c.primary&&f.prepend("<span class='ui-button-icon-primary ui-icon "+c.primary+"'></span>");c.secondary&&f.append("<span class='ui-button-icon-secondary ui-icon "+c.secondary+"'></span>");if(!this.options.text){i.push(h?"ui-button-icons-only":
"ui-button-icon-only");this.hasTitle||f.attr("title",a)}}else i.push("ui-button-text-only");f.addClass(i.join(" "))}}});b.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(f,a){f==="disabled"&&this.buttons.button("option",f,a);b.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return b(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()},
destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return b(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");b.Widget.prototype.destroy.call(this)}})})(jQuery);
(function(b,d){function e(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass=
"ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su",
"Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false};b.extend(this._defaults,this.regional[""]);this.dpDiv=b('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')}function g(a,c){b.extend(a,c);for(var h in c)if(c[h]==
null||c[h]==d)a[h]=c[h];return a}b.extend(b.ui,{datepicker:{version:"1.8.11"}});var f=(new Date).getTime();b.extend(e.prototype,{markerClassName:"hasDatepicker",log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){g(this._defaults,a||{});return this},_attachDatepicker:function(a,c){var h=null;for(var i in this._defaults){var j=a.getAttribute("date:"+i);if(j){h=h||{};try{h[i]=eval(j)}catch(n){h[i]=j}}}i=a.nodeName.toLowerCase();
j=i=="div"||i=="span";if(!a.id){this.uuid+=1;a.id="dp"+this.uuid}var p=this._newInst(b(a),j);p.settings=b.extend({},c||{},h||{});if(i=="input")this._connectDatepicker(a,p);else j&&this._inlineDatepicker(a,p)},_newInst:function(a,c){return{id:a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:c,dpDiv:!c?this.dpDiv:b('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')}},
_connectDatepicker:function(a,c){var h=b(a);c.append=b([]);c.trigger=b([]);if(!h.hasClass(this.markerClassName)){this._attachments(h,c);h.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(i,j,n){c.settings[j]=n}).bind("getData.datepicker",function(i,j){return this._get(c,j)});this._autoSize(c);b.data(a,"datepicker",c)}},_attachments:function(a,c){var h=this._get(c,"appendText"),i=this._get(c,"isRTL");c.append&&
c.append.remove();if(h){c.append=b('<span class="'+this._appendClass+'">'+h+"</span>");a[i?"before":"after"](c.append)}a.unbind("focus",this._showDatepicker);c.trigger&&c.trigger.remove();h=this._get(c,"showOn");if(h=="focus"||h=="both")a.focus(this._showDatepicker);if(h=="button"||h=="both"){h=this._get(c,"buttonText");var j=this._get(c,"buttonImage");c.trigger=b(this._get(c,"buttonImageOnly")?b("<img/>").addClass(this._triggerClass).attr({src:j,alt:h,title:h}):b('<button type="button"></button>').addClass(this._triggerClass).html(j==
""?h:b("<img/>").attr({src:j,alt:h,title:h})));a[i?"before":"after"](c.trigger);c.trigger.click(function(){b.datepicker._datepickerShowing&&b.datepicker._lastInput==a[0]?b.datepicker._hideDatepicker():b.datepicker._showDatepicker(a[0]);return false})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var c=new Date(2009,11,20),h=this._get(a,"dateFormat");if(h.match(/[DM]/)){var i=function(j){for(var n=0,p=0,l=0;l<j.length;l++)if(j[l].length>n){n=j[l].length;p=l}return p};c.setMonth(i(this._get(a,
h.match(/MM/)?"monthNames":"monthNamesShort")));c.setDate(i(this._get(a,h.match(/DD/)?"dayNames":"dayNamesShort"))+20-c.getDay())}a.input.attr("size",this._formatDate(a,c).length)}},_inlineDatepicker:function(a,c){var h=b(a);if(!h.hasClass(this.markerClassName)){h.addClass(this.markerClassName).append(c.dpDiv).bind("setData.datepicker",function(i,j,n){c.settings[j]=n}).bind("getData.datepicker",function(i,j){return this._get(c,j)});b.data(a,"datepicker",c);this._setDate(c,this._getDefaultDate(c),
true);this._updateDatepicker(c);this._updateAlternate(c);c.dpDiv.show()}},_dialogDatepicker:function(a,c,h,i,j){a=this._dialogInst;if(!a){this.uuid+=1;this._dialogInput=b('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);b("body").append(this._dialogInput);a=this._dialogInst=this._newInst(this._dialogInput,false);a.settings={};b.data(this._dialogInput[0],"datepicker",a)}g(a.settings,i||{});
c=c&&c.constructor==Date?this._formatDate(a,c):c;this._dialogInput.val(c);this._pos=j?j.length?j:[j.pageX,j.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=h;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);b.blockUI&&b.blockUI(this.dpDiv);b.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var c=b(a),h=b.data(a,"datepicker");if(c.hasClass(this.markerClassName)){var i=a.nodeName.toLowerCase();b.removeData(a,"datepicker");if(i=="input"){h.append.remove();h.trigger.remove();c.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",
this._doKeyUp)}else if(i=="div"||i=="span")c.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(a){var c=b(a),h=b.data(a,"datepicker");if(c.hasClass(this.markerClassName)){var i=a.nodeName.toLowerCase();if(i=="input"){a.disabled=false;h.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(i=="div"||i=="span")c.children("."+this._inlineClass).children().removeClass("ui-state-disabled");this._disabledInputs=b.map(this._disabledInputs,
function(j){return j==a?null:j})}},_disableDatepicker:function(a){var c=b(a),h=b.data(a,"datepicker");if(c.hasClass(this.markerClassName)){var i=a.nodeName.toLowerCase();if(i=="input"){a.disabled=true;h.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(i=="div"||i=="span")c.children("."+this._inlineClass).children().addClass("ui-state-disabled");this._disabledInputs=b.map(this._disabledInputs,function(j){return j==a?null:
j});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return false;for(var c=0;c<this._disabledInputs.length;c++)if(this._disabledInputs[c]==a)return true;return false},_getInst:function(a){try{return b.data(a,"datepicker")}catch(c){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,c,h){var i=this._getInst(a);if(arguments.length==2&&typeof c=="string")return c=="defaults"?b.extend({},b.datepicker._defaults):i?c=="all"?b.extend({},
i.settings):this._get(i,c):null;var j=c||{};if(typeof c=="string"){j={};j[c]=h}if(i){this._curInst==i&&this._hideDatepicker();var n=this._getDateDatepicker(a,true),p=this._getMinMaxDate(i,"min"),l=this._getMinMaxDate(i,"max");g(i.settings,j);if(p!==null&&j.dateFormat!==d&&j.minDate===d)i.settings.minDate=this._formatDate(i,p);if(l!==null&&j.dateFormat!==d&&j.maxDate===d)i.settings.maxDate=this._formatDate(i,l);this._attachments(b(a),i);this._autoSize(i);this._setDateDatepicker(a,n);this._updateDatepicker(i)}},
_changeDatepicker:function(a,c,h){this._optionDatepicker(a,c,h)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,c){if(a=this._getInst(a)){this._setDate(a,c);this._updateDatepicker(a);this._updateAlternate(a)}},_getDateDatepicker:function(a,c){(a=this._getInst(a))&&!a.inline&&this._setDateFromField(a,c);return a?this._getDate(a):null},_doKeyDown:function(a){var c=b.datepicker._getInst(a.target),h=true,i=c.dpDiv.is(".ui-datepicker-rtl");
c._keyEvent=true;if(b.datepicker._datepickerShowing)switch(a.keyCode){case 9:b.datepicker._hideDatepicker();h=false;break;case 13:h=b("td."+b.datepicker._dayOverClass+":not(."+b.datepicker._currentClass+")",c.dpDiv);h[0]?b.datepicker._selectDay(a.target,c.selectedMonth,c.selectedYear,h[0]):b.datepicker._hideDatepicker();return false;case 27:b.datepicker._hideDatepicker();break;case 33:b.datepicker._adjustDate(a.target,a.ctrlKey?-b.datepicker._get(c,"stepBigMonths"):-b.datepicker._get(c,"stepMonths"),
"M");break;case 34:b.datepicker._adjustDate(a.target,a.ctrlKey?+b.datepicker._get(c,"stepBigMonths"):+b.datepicker._get(c,"stepMonths"),"M");break;case 35:if(a.ctrlKey||a.metaKey)b.datepicker._clearDate(a.target);h=a.ctrlKey||a.metaKey;break;case 36:if(a.ctrlKey||a.metaKey)b.datepicker._gotoToday(a.target);h=a.ctrlKey||a.metaKey;break;case 37:if(a.ctrlKey||a.metaKey)b.datepicker._adjustDate(a.target,i?+1:-1,"D");h=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)b.datepicker._adjustDate(a.target,a.ctrlKey?
-b.datepicker._get(c,"stepBigMonths"):-b.datepicker._get(c,"stepMonths"),"M");break;case 38:if(a.ctrlKey||a.metaKey)b.datepicker._adjustDate(a.target,-7,"D");h=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)b.datepicker._adjustDate(a.target,i?-1:+1,"D");h=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)b.datepicker._adjustDate(a.target,a.ctrlKey?+b.datepicker._get(c,"stepBigMonths"):+b.datepicker._get(c,"stepMonths"),"M");break;case 40:if(a.ctrlKey||a.metaKey)b.datepicker._adjustDate(a.target,
+7,"D");h=a.ctrlKey||a.metaKey;break;default:h=false}else if(a.keyCode==36&&a.ctrlKey)b.datepicker._showDatepicker(this);else h=false;if(h){a.preventDefault();a.stopPropagation()}},_doKeyPress:function(a){var c=b.datepicker._getInst(a.target);if(b.datepicker._get(c,"constrainInput")){c=b.datepicker._possibleChars(b.datepicker._get(c,"dateFormat"));var h=String.fromCharCode(a.charCode==d?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||h<" "||!c||c.indexOf(h)>-1}},_doKeyUp:function(a){a=b.datepicker._getInst(a.target);
if(a.input.val()!=a.lastVal)try{if(b.datepicker.parseDate(b.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,b.datepicker._getFormatConfig(a))){b.datepicker._setDateFromField(a);b.datepicker._updateAlternate(a);b.datepicker._updateDatepicker(a)}}catch(c){b.datepicker.log(c)}return true},_showDatepicker:function(a){a=a.target||a;if(a.nodeName.toLowerCase()!="input")a=b("input",a.parentNode)[0];if(!(b.datepicker._isDisabledDatepicker(a)||b.datepicker._lastInput==a)){var c=b.datepicker._getInst(a);
b.datepicker._curInst&&b.datepicker._curInst!=c&&b.datepicker._curInst.dpDiv.stop(true,true);var h=b.datepicker._get(c,"beforeShow");g(c.settings,h?h.apply(a,[a,c]):{});c.lastVal=null;b.datepicker._lastInput=a;b.datepicker._setDateFromField(c);if(b.datepicker._inDialog)a.value="";if(!b.datepicker._pos){b.datepicker._pos=b.datepicker._findPos(a);b.datepicker._pos[1]+=a.offsetHeight}var i=false;b(a).parents().each(function(){i|=b(this).css("position")=="fixed";return!i});if(i&&b.browser.opera){b.datepicker._pos[0]-=
document.documentElement.scrollLeft;b.datepicker._pos[1]-=document.documentElement.scrollTop}h={left:b.datepicker._pos[0],top:b.datepicker._pos[1]};b.datepicker._pos=null;c.dpDiv.empty();c.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});b.datepicker._updateDatepicker(c);h=b.datepicker._checkOffset(c,h,i);c.dpDiv.css({position:b.datepicker._inDialog&&b.blockUI?"static":i?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"});if(!c.inline){h=b.datepicker._get(c,"showAnim");
var j=b.datepicker._get(c,"duration"),n=function(){b.datepicker._datepickerShowing=true;var p=c.dpDiv.find("iframe.ui-datepicker-cover");if(p.length){var l=b.datepicker._getBorders(c.dpDiv);p.css({left:-l[0],top:-l[1],width:c.dpDiv.outerWidth(),height:c.dpDiv.outerHeight()})}};c.dpDiv.zIndex(b(a).zIndex()+1);b.effects&&b.effects[h]?c.dpDiv.show(h,b.datepicker._get(c,"showOptions"),j,n):c.dpDiv[h||"show"](h?j:null,n);if(!h||!j)n();c.input.is(":visible")&&!c.input.is(":disabled")&&c.input.focus();b.datepicker._curInst=
c}}},_updateDatepicker:function(a){var c=this,h=b.datepicker._getBorders(a.dpDiv);a.dpDiv.empty().append(this._generateHTML(a));var i=a.dpDiv.find("iframe.ui-datepicker-cover");i.length&&i.css({left:-h[0],top:-h[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()});a.dpDiv.find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",function(){b(this).removeClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&b(this).removeClass("ui-datepicker-prev-hover");
this.className.indexOf("ui-datepicker-next")!=-1&&b(this).removeClass("ui-datepicker-next-hover")}).bind("mouseover",function(){if(!c._isDisabledDatepicker(a.inline?a.dpDiv.parent()[0]:a.input[0])){b(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");b(this).addClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&b(this).addClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!=-1&&b(this).addClass("ui-datepicker-next-hover")}}).end().find("."+
this._dayOverClass+" a").trigger("mouseover").end();h=this._getNumberOfMonths(a);i=h[1];i>1?a.dpDiv.addClass("ui-datepicker-multi-"+i).css("width",17*i+"em"):a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");a.dpDiv[(h[0]!=1||h[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a==b.datepicker._curInst&&b.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&
a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var j=a.yearshtml;setTimeout(function(){j===a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);j=a.yearshtml=null},0)}},_getBorders:function(a){var c=function(h){return{thin:1,medium:2,thick:3}[h]||h};return[parseFloat(c(a.css("border-left-width"))),parseFloat(c(a.css("border-top-width")))]},_checkOffset:function(a,c,h){var i=a.dpDiv.outerWidth(),j=a.dpDiv.outerHeight(),n=a.input?a.input.outerWidth():
0,p=a.input?a.input.outerHeight():0,l=document.documentElement.clientWidth+b(document).scrollLeft(),k=document.documentElement.clientHeight+b(document).scrollTop();c.left-=this._get(a,"isRTL")?i-n:0;c.left-=h&&c.left==a.input.offset().left?b(document).scrollLeft():0;c.top-=h&&c.top==a.input.offset().top+p?b(document).scrollTop():0;c.left-=Math.min(c.left,c.left+i>l&&l>i?Math.abs(c.left+i-l):0);c.top-=Math.min(c.top,c.top+j>k&&k>j?Math.abs(j+p):0);return c},_findPos:function(a){for(var c=this._get(this._getInst(a),
"isRTL");a&&(a.type=="hidden"||a.nodeType!=1||b.expr.filters.hidden(a));)a=a[c?"previousSibling":"nextSibling"];a=b(a).offset();return[a.left,a.top]},_hideDatepicker:function(a){var c=this._curInst;if(!(!c||a&&c!=b.data(a,"datepicker")))if(this._datepickerShowing){a=this._get(c,"showAnim");var h=this._get(c,"duration"),i=function(){b.datepicker._tidyDialog(c);this._curInst=null};b.effects&&b.effects[a]?c.dpDiv.hide(a,b.datepicker._get(c,"showOptions"),h,i):c.dpDiv[a=="slideDown"?"slideUp":a=="fadeIn"?
"fadeOut":"hide"](a?h:null,i);a||i();if(a=this._get(c,"onClose"))a.apply(c.input?c.input[0]:null,[c.input?c.input.val():"",c]);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(b.blockUI){b.unblockUI();b("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(b.datepicker._curInst){a=
b(a.target);a[0].id!=b.datepicker._mainDivId&&a.parents("#"+b.datepicker._mainDivId).length==0&&!a.hasClass(b.datepicker.markerClassName)&&!a.hasClass(b.datepicker._triggerClass)&&b.datepicker._datepickerShowing&&!(b.datepicker._inDialog&&b.blockUI)&&b.datepicker._hideDatepicker()}},_adjustDate:function(a,c,h){a=b(a);var i=this._getInst(a[0]);if(!this._isDisabledDatepicker(a[0])){this._adjustInstDate(i,c+(h=="M"?this._get(i,"showCurrentAtPos"):0),h);this._updateDatepicker(i)}},_gotoToday:function(a){a=
b(a);var c=this._getInst(a[0]);if(this._get(c,"gotoCurrent")&&c.currentDay){c.selectedDay=c.currentDay;c.drawMonth=c.selectedMonth=c.currentMonth;c.drawYear=c.selectedYear=c.currentYear}else{var h=new Date;c.selectedDay=h.getDate();c.drawMonth=c.selectedMonth=h.getMonth();c.drawYear=c.selectedYear=h.getFullYear()}this._notifyChange(c);this._adjustDate(a)},_selectMonthYear:function(a,c,h){a=b(a);var i=this._getInst(a[0]);i._selectingMonthYear=false;i["selected"+(h=="M"?"Month":"Year")]=i["draw"+(h==
"M"?"Month":"Year")]=parseInt(c.options[c.selectedIndex].value,10);this._notifyChange(i);this._adjustDate(a)},_clickMonthYear:function(a){var c=this._getInst(b(a)[0]);c.input&&c._selectingMonthYear&&setTimeout(function(){c.input.focus()},0);c._selectingMonthYear=!c._selectingMonthYear},_selectDay:function(a,c,h,i){var j=b(a);if(!(b(i).hasClass(this._unselectableClass)||this._isDisabledDatepicker(j[0]))){j=this._getInst(j[0]);j.selectedDay=j.currentDay=b("a",i).html();j.selectedMonth=j.currentMonth=
c;j.selectedYear=j.currentYear=h;this._selectDate(a,this._formatDate(j,j.currentDay,j.currentMonth,j.currentYear))}},_clearDate:function(a){a=b(a);this._getInst(a[0]);this._selectDate(a,"")},_selectDate:function(a,c){a=this._getInst(b(a)[0]);c=c!=null?c:this._formatDate(a);a.input&&a.input.val(c);this._updateAlternate(a);var h=this._get(a,"onSelect");if(h)h.apply(a.input?a.input[0]:null,[c,a]);else a.input&&a.input.trigger("change");if(a.inline)this._updateDatepicker(a);else{this._hideDatepicker();
this._lastInput=a.input[0];typeof a.input[0]!="object"&&a.input.focus();this._lastInput=null}},_updateAlternate:function(a){var c=this._get(a,"altField");if(c){var h=this._get(a,"altFormat")||this._get(a,"dateFormat"),i=this._getDate(a),j=this.formatDate(h,i,this._getFormatConfig(a));b(c).each(function(){b(this).val(j)})}},noWeekends:function(a){a=a.getDay();return[a>0&&a<6,""]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var c=a.getTime();a.setMonth(0);
a.setDate(1);return Math.floor(Math.round((c-a)/864E5)/7)+1},parseDate:function(a,c,h){if(a==null||c==null)throw"Invalid arguments";c=typeof c=="object"?c.toString():c+"";if(c=="")return null;var i=(h?h.shortYearCutoff:null)||this._defaults.shortYearCutoff;i=typeof i!="string"?i:(new Date).getFullYear()%100+parseInt(i,10);for(var j=(h?h.dayNamesShort:null)||this._defaults.dayNamesShort,n=(h?h.dayNames:null)||this._defaults.dayNames,p=(h?h.monthNamesShort:null)||this._defaults.monthNamesShort,l=(h?
h.monthNames:null)||this._defaults.monthNames,k=h=-1,m=-1,o=-1,q=false,s=function(x){(x=y+1<a.length&&a.charAt(y+1)==x)&&y++;return x},r=function(x){var C=s(x);x=new RegExp("^\\d{1,"+(x=="@"?14:x=="!"?20:x=="y"&&C?4:x=="o"?3:2)+"}");x=c.substring(w).match(x);if(!x)throw"Missing number at position "+w;w+=x[0].length;return parseInt(x[0],10)},u=function(x,C,J){x=s(x)?J:C;for(C=0;C<x.length;C++)if(c.substr(w,x[C].length).toLowerCase()==x[C].toLowerCase()){w+=x[C].length;return C+1}throw"Unknown name at position "+
w;},v=function(){if(c.charAt(w)!=a.charAt(y))throw"Unexpected literal at position "+w;w++},w=0,y=0;y<a.length;y++)if(q)if(a.charAt(y)=="'"&&!s("'"))q=false;else v();else switch(a.charAt(y)){case "d":m=r("d");break;case "D":u("D",j,n);break;case "o":o=r("o");break;case "m":k=r("m");break;case "M":k=u("M",p,l);break;case "y":h=r("y");break;case "@":var B=new Date(r("@"));h=B.getFullYear();k=B.getMonth()+1;m=B.getDate();break;case "!":B=new Date((r("!")-this._ticksTo1970)/1E4);h=B.getFullYear();k=B.getMonth()+
1;m=B.getDate();break;case "'":if(s("'"))v();else q=true;break;default:v()}if(h==-1)h=(new Date).getFullYear();else if(h<100)h+=(new Date).getFullYear()-(new Date).getFullYear()%100+(h<=i?0:-100);if(o>-1){k=1;m=o;do{i=this._getDaysInMonth(h,k-1);if(m<=i)break;k++;m-=i}while(1)}B=this._daylightSavingAdjust(new Date(h,k-1,m));if(B.getFullYear()!=h||B.getMonth()+1!=k||B.getDate()!=m)throw"Invalid date";return B},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",
RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,formatDate:function(a,c,h){if(!c)return"";var i=(h?h.dayNamesShort:null)||this._defaults.dayNamesShort,j=(h?h.dayNames:null)||this._defaults.dayNames,n=(h?h.monthNamesShort:null)||this._defaults.monthNamesShort;h=(h?h.monthNames:null)||this._defaults.monthNames;var p=function(s){(s=q+1<a.length&&
a.charAt(q+1)==s)&&q++;return s},l=function(s,r,u){r=""+r;if(p(s))for(;r.length<u;)r="0"+r;return r},k=function(s,r,u,v){return p(s)?v[r]:u[r]},m="",o=false;if(c)for(var q=0;q<a.length;q++)if(o)if(a.charAt(q)=="'"&&!p("'"))o=false;else m+=a.charAt(q);else switch(a.charAt(q)){case "d":m+=l("d",c.getDate(),2);break;case "D":m+=k("D",c.getDay(),i,j);break;case "o":m+=l("o",(c.getTime()-(new Date(c.getFullYear(),0,0)).getTime())/864E5,3);break;case "m":m+=l("m",c.getMonth()+1,2);break;case "M":m+=k("M",
c.getMonth(),n,h);break;case "y":m+=p("y")?c.getFullYear():(c.getYear()%100<10?"0":"")+c.getYear()%100;break;case "@":m+=c.getTime();break;case "!":m+=c.getTime()*1E4+this._ticksTo1970;break;case "'":if(p("'"))m+="'";else o=true;break;default:m+=a.charAt(q)}return m},_possibleChars:function(a){for(var c="",h=false,i=function(n){(n=j+1<a.length&&a.charAt(j+1)==n)&&j++;return n},j=0;j<a.length;j++)if(h)if(a.charAt(j)=="'"&&!i("'"))h=false;else c+=a.charAt(j);else switch(a.charAt(j)){case "d":case "m":case "y":case "@":c+=
"0123456789";break;case "D":case "M":return null;case "'":if(i("'"))c+="'";else h=true;break;default:c+=a.charAt(j)}return c},_get:function(a,c){return a.settings[c]!==d?a.settings[c]:this._defaults[c]},_setDateFromField:function(a,c){if(a.input.val()!=a.lastVal){var h=this._get(a,"dateFormat"),i=a.lastVal=a.input?a.input.val():null,j,n;j=n=this._getDefaultDate(a);var p=this._getFormatConfig(a);try{j=this.parseDate(h,i,p)||n}catch(l){this.log(l);i=c?"":i}a.selectedDay=j.getDate();a.drawMonth=a.selectedMonth=
j.getMonth();a.drawYear=a.selectedYear=j.getFullYear();a.currentDay=i?j.getDate():0;a.currentMonth=i?j.getMonth():0;a.currentYear=i?j.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,c,h){var i=function(n){var p=new Date;p.setDate(p.getDate()+n);return p},j=function(n){try{return b.datepicker.parseDate(b.datepicker._get(a,"dateFormat"),n,b.datepicker._getFormatConfig(a))}catch(p){}var l=
(n.toLowerCase().match(/^c/)?b.datepicker._getDate(a):null)||new Date,k=l.getFullYear(),m=l.getMonth();l=l.getDate();for(var o=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,q=o.exec(n);q;){switch(q[2]||"d"){case "d":case "D":l+=parseInt(q[1],10);break;case "w":case "W":l+=parseInt(q[1],10)*7;break;case "m":case "M":m+=parseInt(q[1],10);l=Math.min(l,b.datepicker._getDaysInMonth(k,m));break;case "y":case "Y":k+=parseInt(q[1],10);l=Math.min(l,b.datepicker._getDaysInMonth(k,m));break}q=o.exec(n)}return new Date(k,
m,l)};if(c=(c=c==null||c===""?h:typeof c=="string"?j(c):typeof c=="number"?isNaN(c)?h:i(c):new Date(c.getTime()))&&c.toString()=="Invalid Date"?h:c){c.setHours(0);c.setMinutes(0);c.setSeconds(0);c.setMilliseconds(0)}return this._daylightSavingAdjust(c)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(a.getHours()>12?a.getHours()+2:0);return a},_setDate:function(a,c,h){var i=!c,j=a.selectedMonth,n=a.selectedYear;c=this._restrictMinMax(a,this._determineDate(a,c,new Date));a.selectedDay=
a.currentDay=c.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=c.getMonth();a.drawYear=a.selectedYear=a.currentYear=c.getFullYear();if((j!=a.selectedMonth||n!=a.selectedYear)&&!h)this._notifyChange(a);this._adjustInstDate(a);if(a.input)a.input.val(i?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))},_generateHTML:function(a){var c=new Date;c=this._daylightSavingAdjust(new Date(c.getFullYear(),
c.getMonth(),c.getDate()));var h=this._get(a,"isRTL"),i=this._get(a,"showButtonPanel"),j=this._get(a,"hideIfNoPrevNext"),n=this._get(a,"navigationAsDateFormat"),p=this._getNumberOfMonths(a),l=this._get(a,"showCurrentAtPos"),k=this._get(a,"stepMonths"),m=p[0]!=1||p[1]!=1,o=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),q=this._getMinMaxDate(a,"min"),s=this._getMinMaxDate(a,"max");l=a.drawMonth-l;var r=a.drawYear;if(l<0){l+=12;r--}if(s){var u=
this._daylightSavingAdjust(new Date(s.getFullYear(),s.getMonth()-p[0]*p[1]+1,s.getDate()));for(u=q&&u<q?q:u;this._daylightSavingAdjust(new Date(r,l,1))>u;){l--;if(l<0){l=11;r--}}}a.drawMonth=l;a.drawYear=r;u=this._get(a,"prevText");u=!n?u:this.formatDate(u,this._daylightSavingAdjust(new Date(r,l-k,1)),this._getFormatConfig(a));u=this._canAdjustMonth(a,-1,r,l)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+f+".datepicker._adjustDate('#"+a.id+"', -"+k+", 'M');\" title=\""+u+'"><span class="ui-icon ui-icon-circle-triangle-'+
(h?"e":"w")+'">'+u+"</span></a>":j?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+u+'"><span class="ui-icon ui-icon-circle-triangle-'+(h?"e":"w")+'">'+u+"</span></a>";var v=this._get(a,"nextText");v=!n?v:this.formatDate(v,this._daylightSavingAdjust(new Date(r,l+k,1)),this._getFormatConfig(a));j=this._canAdjustMonth(a,+1,r,l)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+f+".datepicker._adjustDate('#"+a.id+"', +"+k+", 'M');\" title=\""+v+'"><span class="ui-icon ui-icon-circle-triangle-'+
(h?"w":"e")+'">'+v+"</span></a>":j?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+v+'"><span class="ui-icon ui-icon-circle-triangle-'+(h?"w":"e")+'">'+v+"</span></a>";k=this._get(a,"currentText");v=this._get(a,"gotoCurrent")&&a.currentDay?o:c;k=!n?k:this.formatDate(k,v,this._getFormatConfig(a));n=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+f+'.datepicker._hideDatepicker();">'+this._get(a,
"closeText")+"</button>":"";i=i?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(h?n:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+f+".datepicker._gotoToday('#"+a.id+"');\">"+k+"</button>":"")+(h?"":n)+"</div>":"";n=parseInt(this._get(a,"firstDay"),10);n=isNaN(n)?0:n;k=this._get(a,"showWeek");v=this._get(a,"dayNames");this._get(a,"dayNamesShort");var w=this._get(a,"dayNamesMin"),y=
this._get(a,"monthNames"),B=this._get(a,"monthNamesShort"),x=this._get(a,"beforeShowDay"),C=this._get(a,"showOtherMonths"),J=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var M=this._getDefaultDate(a),K="",G=0;G<p[0];G++){for(var N="",H=0;H<p[1];H++){var O=this._daylightSavingAdjust(new Date(r,l,a.selectedDay)),A=" ui-corner-all",D="";if(m){D+='<div class="ui-datepicker-group';if(p[1]>1)switch(H){case 0:D+=" ui-datepicker-group-first";A=" ui-corner-"+(h?"right":"left");break;case p[1]-
1:D+=" ui-datepicker-group-last";A=" ui-corner-"+(h?"left":"right");break;default:D+=" ui-datepicker-group-middle";A="";break}D+='">'}D+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+A+'">'+(/all|left/.test(A)&&G==0?h?j:u:"")+(/all|right/.test(A)&&G==0?h?u:j:"")+this._generateMonthYearHeader(a,l,r,q,s,G>0||H>0,y,B)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var E=k?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(A=0;A<7;A++){var z=
(A+n)%7;E+="<th"+((A+n+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+v[z]+'">'+w[z]+"</span></th>"}D+=E+"</tr></thead><tbody>";E=this._getDaysInMonth(r,l);if(r==a.selectedYear&&l==a.selectedMonth)a.selectedDay=Math.min(a.selectedDay,E);A=(this._getFirstDayOfMonth(r,l)-n+7)%7;E=m?6:Math.ceil((A+E)/7);z=this._daylightSavingAdjust(new Date(r,l,1-A));for(var P=0;P<E;P++){D+="<tr>";var Q=!k?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(z)+"</td>";for(A=0;A<7;A++){var I=
x?x.apply(a.input?a.input[0]:null,[z]):[true,""],F=z.getMonth()!=l,L=F&&!J||!I[0]||q&&z<q||s&&z>s;Q+='<td class="'+((A+n+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(z.getTime()==O.getTime()&&l==a.selectedMonth&&a._keyEvent||M.getTime()==z.getTime()&&M.getTime()==O.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!C?"":" "+I[1]+(z.getTime()==o.getTime()?" "+this._currentClass:"")+(z.getTime()==c.getTime()?" ui-datepicker-today":
""))+'"'+((!F||C)&&I[2]?' title="'+I[2]+'"':"")+(L?"":' onclick="DP_jQuery_'+f+".datepicker._selectDay('#"+a.id+"',"+z.getMonth()+","+z.getFullYear()+', this);return false;"')+">"+(F&&!C?"&#xa0;":L?'<span class="ui-state-default">'+z.getDate()+"</span>":'<a class="ui-state-default'+(z.getTime()==c.getTime()?" ui-state-highlight":"")+(z.getTime()==o.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+'" href="#">'+z.getDate()+"</a>")+"</td>";z.setDate(z.getDate()+1);z=this._daylightSavingAdjust(z)}D+=
Q+"</tr>"}l++;if(l>11){l=0;r++}D+="</tbody></table>"+(m?"</div>"+(p[0]>0&&H==p[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");N+=D}K+=N}K+=i+(b.browser.msie&&parseInt(b.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");a._keyEvent=false;return K},_generateMonthYearHeader:function(a,c,h,i,j,n,p,l){var k=this._get(a,"changeMonth"),m=this._get(a,"changeYear"),o=this._get(a,"showMonthAfterYear"),q='<div class="ui-datepicker-title">',
s="";if(n||!k)s+='<span class="ui-datepicker-month">'+p[c]+"</span>";else{p=i&&i.getFullYear()==h;var r=j&&j.getFullYear()==h;s+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+f+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" onclick=\"DP_jQuery_"+f+".datepicker._clickMonthYear('#"+a.id+"');\">";for(var u=0;u<12;u++)if((!p||u>=i.getMonth())&&(!r||u<=j.getMonth()))s+='<option value="'+u+'"'+(u==c?' selected="selected"':"")+">"+l[u]+"</option>";s+="</select>"}o||(q+=s+(n||!(k&&
m)?"&#xa0;":""));a.yearshtml="";if(n||!m)q+='<span class="ui-datepicker-year">'+h+"</span>";else{l=this._get(a,"yearRange").split(":");var v=(new Date).getFullYear();p=function(w){w=w.match(/c[+-].*/)?h+parseInt(w.substring(1),10):w.match(/[+-].*/)?v+parseInt(w,10):parseInt(w,10);return isNaN(w)?v:w};c=p(l[0]);l=Math.max(c,p(l[1]||""));c=i?Math.max(c,i.getFullYear()):c;l=j?Math.min(l,j.getFullYear()):l;for(a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+f+".datepicker._selectMonthYear('#"+
a.id+"', this, 'Y');\" onclick=\"DP_jQuery_"+f+".datepicker._clickMonthYear('#"+a.id+"');\">";c<=l;c++)a.yearshtml+='<option value="'+c+'"'+(c==h?' selected="selected"':"")+">"+c+"</option>";a.yearshtml+="</select>";if(b.browser.mozilla)q+='<select class="ui-datepicker-year"><option value="'+h+'" selected="selected">'+h+"</option></select>";else{q+=a.yearshtml;a.yearshtml=null}}q+=this._get(a,"yearSuffix");if(o)q+=(n||!(k&&m)?"&#xa0;":"")+s;q+="</div>";return q},_adjustInstDate:function(a,c,h){var i=
a.drawYear+(h=="Y"?c:0),j=a.drawMonth+(h=="M"?c:0);c=Math.min(a.selectedDay,this._getDaysInMonth(i,j))+(h=="D"?c:0);i=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(i,j,c)));a.selectedDay=i.getDate();a.drawMonth=a.selectedMonth=i.getMonth();a.drawYear=a.selectedYear=i.getFullYear();if(h=="M"||h=="Y")this._notifyChange(a)},_restrictMinMax:function(a,c){var h=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");c=h&&c<h?h:c;return c=a&&c>a?a:c},_notifyChange:function(a){var c=this._get(a,
"onChangeMonthYear");if(c)c.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,"numberOfMonths");return a==null?[1,1]:typeof a=="number"?[1,a]:a},_getMinMaxDate:function(a,c){return this._determineDate(a,this._get(a,c+"Date"),null)},_getDaysInMonth:function(a,c){return 32-this._daylightSavingAdjust(new Date(a,c,32)).getDate()},_getFirstDayOfMonth:function(a,c){return(new Date(a,c,1)).getDay()},_canAdjustMonth:function(a,c,h,i){var j=this._getNumberOfMonths(a);
h=this._daylightSavingAdjust(new Date(h,i+(c<0?c:j[0]*j[1]),1));c<0&&h.setDate(this._getDaysInMonth(h.getFullYear(),h.getMonth()));return this._isInRange(a,h)},_isInRange:function(a,c){var h=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");return(!h||c.getTime()>=h.getTime())&&(!a||c.getTime()<=a.getTime())},_getFormatConfig:function(a){var c=this._get(a,"shortYearCutoff");c=typeof c!="string"?c:(new Date).getFullYear()%100+parseInt(c,10);return{shortYearCutoff:c,dayNamesShort:this._get(a,
"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,c,h,i){if(!c){a.currentDay=a.selectedDay;a.currentMonth=a.selectedMonth;a.currentYear=a.selectedYear}c=c?typeof c=="object"?c:this._daylightSavingAdjust(new Date(i,h,c)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),c,this._getFormatConfig(a))}});b.fn.datepicker=
function(a){if(!this.length)return this;if(!b.datepicker.initialized){b(document).mousedown(b.datepicker._checkExternalClick).find("body").append(b.datepicker.dpDiv);b.datepicker.initialized=true}var c=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return b.datepicker["_"+a+"Datepicker"].apply(b.datepicker,[this[0]].concat(c));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return b.datepicker["_"+a+"Datepicker"].apply(b.datepicker,
[this[0]].concat(c));return this.each(function(){typeof a=="string"?b.datepicker["_"+a+"Datepicker"].apply(b.datepicker,[this].concat(c)):b.datepicker._attachDatepicker(this,a)})};b.datepicker=new e;b.datepicker.initialized=false;b.datepicker.uuid=(new Date).getTime();b.datepicker.version="1.8.11";window["DP_jQuery_"+f]=b})(jQuery);
(function(b,d){var e={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},g={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};b.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",collision:"fit",using:function(f){var a=b(this).css(f).offset().top;a<0&&
b(this).css("top",f.top-a)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var f=this,a=f.options,c=a.title||"&#160;",h=b.ui.dialog.getTitleId(f.element),i=(f.uiDialog=b("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+a.dialogClass).css({zIndex:a.zIndex}).attr("tabIndex",
-1).css("outline",0).keydown(function(p){if(a.closeOnEscape&&p.keyCode&&p.keyCode===b.ui.keyCode.ESCAPE){f.close(p);p.preventDefault()}}).attr({role:"dialog","aria-labelledby":h}).mousedown(function(p){f.moveToTop(false,p)});f.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(i);var j=(f.uiDialogTitlebar=b("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(i),n=b('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role",
"button").hover(function(){n.addClass("ui-state-hover")},function(){n.removeClass("ui-state-hover")}).focus(function(){n.addClass("ui-state-focus")}).blur(function(){n.removeClass("ui-state-focus")}).click(function(p){f.close(p);return false}).appendTo(j);(f.uiDialogTitlebarCloseText=b("<span></span>")).addClass("ui-icon ui-icon-closethick").text(a.closeText).appendTo(n);b("<span></span>").addClass("ui-dialog-title").attr("id",h).html(c).prependTo(j);if(b.isFunction(a.beforeclose)&&!b.isFunction(a.beforeClose))a.beforeClose=
a.beforeclose;j.find("*").add(j).disableSelection();a.draggable&&b.fn.draggable&&f._makeDraggable();a.resizable&&b.fn.resizable&&f._makeResizable();f._createButtons(a.buttons);f._isOpen=false;b.fn.bgiframe&&i.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var f=this;f.overlay&&f.overlay.destroy();f.uiDialog.hide();f.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");f.uiDialog.remove();f.originalTitle&&
f.element.attr("title",f.originalTitle);return f},widget:function(){return this.uiDialog},close:function(f){var a=this,c,h;if(false!==a._trigger("beforeClose",f)){a.overlay&&a.overlay.destroy();a.uiDialog.unbind("keypress.ui-dialog");a._isOpen=false;if(a.options.hide)a.uiDialog.hide(a.options.hide,function(){a._trigger("close",f)});else{a.uiDialog.hide();a._trigger("close",f)}b.ui.dialog.overlay.resize();if(a.options.modal){c=0;b(".ui-dialog").each(function(){if(this!==a.uiDialog[0]){h=b(this).css("z-index");
isNaN(h)||(c=Math.max(c,h))}});b.ui.dialog.maxZ=c}return a}},isOpen:function(){return this._isOpen},moveToTop:function(f,a){var c=this,h=c.options;if(h.modal&&!f||!h.stack&&!h.modal)return c._trigger("focus",a);if(h.zIndex>b.ui.dialog.maxZ)b.ui.dialog.maxZ=h.zIndex;if(c.overlay){b.ui.dialog.maxZ+=1;c.overlay.$el.css("z-index",b.ui.dialog.overlay.maxZ=b.ui.dialog.maxZ)}f={scrollTop:c.element.attr("scrollTop"),scrollLeft:c.element.attr("scrollLeft")};b.ui.dialog.maxZ+=1;c.uiDialog.css("z-index",b.ui.dialog.maxZ);
c.element.attr(f);c._trigger("focus",a);return c},open:function(){if(!this._isOpen){var f=this,a=f.options,c=f.uiDialog;f.overlay=a.modal?new b.ui.dialog.overlay(f):null;f._size();f._position(a.position);c.show(a.show);f.moveToTop(true);a.modal&&c.bind("keypress.ui-dialog",function(h){if(h.keyCode===b.ui.keyCode.TAB){var i=b(":tabbable",this),j=i.filter(":first");i=i.filter(":last");if(h.target===i[0]&&!h.shiftKey){j.focus(1);return false}else if(h.target===j[0]&&h.shiftKey){i.focus(1);return false}}});
b(f.element.find(":tabbable").get().concat(c.find(".ui-dialog-buttonpane :tabbable").get().concat(c.get()))).eq(0).focus();f._isOpen=true;f._trigger("open");return f}},_createButtons:function(f){var a=this,c=false,h=b("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),i=b("<div></div>").addClass("ui-dialog-buttonset").appendTo(h);a.uiDialog.find(".ui-dialog-buttonpane").remove();typeof f==="object"&&f!==null&&b.each(f,function(){return!(c=true)});if(c){b.each(f,function(j,
n){n=b.isFunction(n)?{click:n,text:j}:n;j=b('<button type="button"></button>').attr(n,true).unbind("click").click(function(){n.click.apply(a.element[0],arguments)}).appendTo(i);b.fn.button&&j.button()});h.appendTo(a.uiDialog)}},_makeDraggable:function(){function f(j){return{position:j.position,offset:j.offset}}var a=this,c=a.options,h=b(document),i;a.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(j,n){i=
c.height==="auto"?"auto":b(this).height();b(this).height(b(this).height()).addClass("ui-dialog-dragging");a._trigger("dragStart",j,f(n))},drag:function(j,n){a._trigger("drag",j,f(n))},stop:function(j,n){c.position=[n.position.left-h.scrollLeft(),n.position.top-h.scrollTop()];b(this).removeClass("ui-dialog-dragging").height(i);a._trigger("dragStop",j,f(n));b.ui.dialog.overlay.resize()}})},_makeResizable:function(f){function a(j){return{originalPosition:j.originalPosition,originalSize:j.originalSize,
position:j.position,size:j.size}}f=f===d?this.options.resizable:f;var c=this,h=c.options,i=c.uiDialog.css("position");f=typeof f==="string"?f:"n,e,s,w,se,sw,ne,nw";c.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:c.element,maxWidth:h.maxWidth,maxHeight:h.maxHeight,minWidth:h.minWidth,minHeight:c._minHeight(),handles:f,start:function(j,n){b(this).addClass("ui-dialog-resizing");c._trigger("resizeStart",j,a(n))},resize:function(j,n){c._trigger("resize",j,a(n))},stop:function(j,
n){b(this).removeClass("ui-dialog-resizing");h.height=b(this).height();h.width=b(this).width();c._trigger("resizeStop",j,a(n));b.ui.dialog.overlay.resize()}}).css("position",i).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var f=this.options;return f.height==="auto"?f.minHeight:Math.min(f.minHeight,f.height)},_position:function(f){var a=[],c=[0,0],h;if(f){if(typeof f==="string"||typeof f==="object"&&"0"in f){a=f.split?f.split(" "):[f[0],f[1]];if(a.length===
1)a[1]=a[0];b.each(["left","top"],function(i,j){if(+a[i]===a[i]){c[i]=a[i];a[i]=j}});f={my:a.join(" "),at:a.join(" "),offset:c.join(" ")}}f=b.extend({},b.ui.dialog.prototype.options.position,f)}else f=b.ui.dialog.prototype.options.position;(h=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(b.extend({of:window},f));h||this.uiDialog.hide()},_setOptions:function(f){var a=this,c={},h=false;b.each(f,function(i,j){a._setOption(i,j);if(i in e)h=true;if(i in
g)c[i]=j});h&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",c)},_setOption:function(f,a){var c=this,h=c.uiDialog;switch(f){case "beforeclose":f="beforeClose";break;case "buttons":c._createButtons(a);break;case "closeText":c.uiDialogTitlebarCloseText.text(""+a);break;case "dialogClass":h.removeClass(c.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+a);break;case "disabled":a?h.addClass("ui-dialog-disabled"):h.removeClass("ui-dialog-disabled");
break;case "draggable":var i=h.is(":data(draggable)");i&&!a&&h.draggable("destroy");!i&&a&&c._makeDraggable();break;case "position":c._position(a);break;case "resizable":(i=h.is(":data(resizable)"))&&!a&&h.resizable("destroy");i&&typeof a==="string"&&h.resizable("option","handles",a);!i&&a!==false&&c._makeResizable(a);break;case "title":b(".ui-dialog-title",c.uiDialogTitlebar).html(""+(a||"&#160;"));break}b.Widget.prototype._setOption.apply(c,arguments)},_size:function(){var f=this.options,a,c,h=
this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(f.minWidth>f.width)f.width=f.minWidth;a=this.uiDialog.css({height:"auto",width:f.width}).height();c=Math.max(0,f.minHeight-a);if(f.height==="auto")if(b.support.minHeight)this.element.css({minHeight:c,height:"auto"});else{this.uiDialog.show();f=this.element.css("height","auto").height();h||this.uiDialog.hide();this.element.height(Math.max(f,c))}else this.element.height(Math.max(f.height-a,0));this.uiDialog.is(":data(resizable)")&&
this.uiDialog.resizable("option","minHeight",this._minHeight())}});b.extend(b.ui.dialog,{version:"1.8.11",uuid:0,maxZ:0,getTitleId:function(f){f=f.attr("id");if(!f){this.uuid+=1;f=this.uuid}return"ui-dialog-title-"+f},overlay:function(f){this.$el=b.ui.dialog.overlay.create(f)}});b.extend(b.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:b.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(f){return f+".dialog-overlay"}).join(" "),create:function(f){if(this.instances.length===
0){setTimeout(function(){b.ui.dialog.overlay.instances.length&&b(document).bind(b.ui.dialog.overlay.events,function(c){if(b(c.target).zIndex()<b.ui.dialog.overlay.maxZ)return false})},1);b(document).bind("keydown.dialog-overlay",function(c){if(f.options.closeOnEscape&&c.keyCode&&c.keyCode===b.ui.keyCode.ESCAPE){f.close(c);c.preventDefault()}});b(window).bind("resize.dialog-overlay",b.ui.dialog.overlay.resize)}var a=(this.oldInstances.pop()||b("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),
height:this.height()});b.fn.bgiframe&&a.bgiframe();this.instances.push(a);return a},destroy:function(f){var a=b.inArray(f,this.instances);a!=-1&&this.oldInstances.push(this.instances.splice(a,1)[0]);this.instances.length===0&&b([document,window]).unbind(".dialog-overlay");f.remove();var c=0;b.each(this.instances,function(){c=Math.max(c,this.css("z-index"))});this.maxZ=c},height:function(){var f,a;if(b.browser.msie&&b.browser.version<7){f=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
a=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return f<a?b(window).height()+"px":f+"px"}else return b(document).height()+"px"},width:function(){var f,a;if(b.browser.msie&&b.browser.version<7){f=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);a=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return f<a?b(window).width()+"px":f+"px"}else return b(document).width()+"px"},resize:function(){var f=b([]);b.each(b.ui.dialog.overlay.instances,
function(){f=f.add(this)});f.css({width:0,height:0}).css({width:b.ui.dialog.overlay.width(),height:b.ui.dialog.overlay.height()})}});b.extend(b.ui.dialog.overlay.prototype,{destroy:function(){b.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
(function(b){b.ui=b.ui||{};var d=/left|center|right/,e=/top|center|bottom/,g=b.fn.position,f=b.fn.offset;b.fn.position=function(a){if(!a||!a.of)return g.apply(this,arguments);a=b.extend({},a);var c=b(a.of),h=c[0],i=(a.collision||"flip").split(" "),j=a.offset?a.offset.split(" "):[0,0],n,p,l;if(h.nodeType===9){n=c.width();p=c.height();l={top:0,left:0}}else if(h.setTimeout){n=c.width();p=c.height();l={top:c.scrollTop(),left:c.scrollLeft()}}else if(h.preventDefault){a.at="left top";n=p=0;l={top:a.of.pageY,
left:a.of.pageX}}else{n=c.outerWidth();p=c.outerHeight();l=c.offset()}b.each(["my","at"],function(){var k=(a[this]||"").split(" ");if(k.length===1)k=d.test(k[0])?k.concat(["center"]):e.test(k[0])?["center"].concat(k):["center","center"];k[0]=d.test(k[0])?k[0]:"center";k[1]=e.test(k[1])?k[1]:"center";a[this]=k});if(i.length===1)i[1]=i[0];j[0]=parseInt(j[0],10)||0;if(j.length===1)j[1]=j[0];j[1]=parseInt(j[1],10)||0;if(a.at[0]==="right")l.left+=n;else if(a.at[0]==="center")l.left+=n/2;if(a.at[1]==="bottom")l.top+=
p;else if(a.at[1]==="center")l.top+=p/2;l.left+=j[0];l.top+=j[1];return this.each(function(){var k=b(this),m=k.outerWidth(),o=k.outerHeight(),q=parseInt(b.curCSS(this,"marginLeft",true))||0,s=parseInt(b.curCSS(this,"marginTop",true))||0,r=m+q+(parseInt(b.curCSS(this,"marginRight",true))||0),u=o+s+(parseInt(b.curCSS(this,"marginBottom",true))||0),v=b.extend({},l),w;if(a.my[0]==="right")v.left-=m;else if(a.my[0]==="center")v.left-=m/2;if(a.my[1]==="bottom")v.top-=o;else if(a.my[1]==="center")v.top-=
o/2;v.left=Math.round(v.left);v.top=Math.round(v.top);w={left:v.left-q,top:v.top-s};b.each(["left","top"],function(y,B){b.ui.position[i[y]]&&b.ui.position[i[y]][B](v,{targetWidth:n,targetHeight:p,elemWidth:m,elemHeight:o,collisionPosition:w,collisionWidth:r,collisionHeight:u,offset:j,my:a.my,at:a.at})});b.fn.bgiframe&&k.bgiframe();k.offset(b.extend(v,{using:a.using}))})};b.ui.position={fit:{left:function(a,c){var h=b(window);h=c.collisionPosition.left+c.collisionWidth-h.width()-h.scrollLeft();a.left=
h>0?a.left-h:Math.max(a.left-c.collisionPosition.left,a.left)},top:function(a,c){var h=b(window);h=c.collisionPosition.top+c.collisionHeight-h.height()-h.scrollTop();a.top=h>0?a.top-h:Math.max(a.top-c.collisionPosition.top,a.top)}},flip:{left:function(a,c){if(c.at[0]!=="center"){var h=b(window);h=c.collisionPosition.left+c.collisionWidth-h.width()-h.scrollLeft();var i=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,j=c.at[0]==="left"?c.targetWidth:-c.targetWidth,n=-2*c.offset[0];a.left+=
c.collisionPosition.left<0?i+j+n:h>0?i+j+n:0}},top:function(a,c){if(c.at[1]!=="center"){var h=b(window);h=c.collisionPosition.top+c.collisionHeight-h.height()-h.scrollTop();var i=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,j=c.at[1]==="top"?c.targetHeight:-c.targetHeight,n=-2*c.offset[1];a.top+=c.collisionPosition.top<0?i+j+n:h>0?i+j+n:0}}}};if(!b.offset.setOffset){b.offset.setOffset=function(a,c){if(/static/.test(b.curCSS(a,"position")))a.style.position="relative";var h=b(a),
i=h.offset(),j=parseInt(b.curCSS(a,"top",true),10)||0,n=parseInt(b.curCSS(a,"left",true),10)||0;i={top:c.top-i.top+j,left:c.left-i.left+n};"using"in c?c.using.call(a,i):h.css(i)};b.fn.offset=function(a){var c=this[0];if(!c||!c.ownerDocument)return null;if(a)return this.each(function(){b.offset.setOffset(this,a)});return f.call(this)}}})(jQuery);
(function(b,d){b.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();b.Widget.prototype.destroy.apply(this,arguments)},value:function(e){if(e===d)return this._value();this._setOption("value",e);return this},_setOption:function(e,g){if(e==="value"){this.options.value=g;this._refreshValue();this._value()===this.options.max&&this._trigger("complete")}b.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var e=this.options.value;if(typeof e!=="number")e=0;return Math.min(this.options.max,Math.max(this.min,e))},_percentage:function(){return 100*
this._value()/this.options.max},_refreshValue:function(){var e=this.value(),g=this._percentage();if(this.oldValue!==e){this.oldValue=e;this._trigger("change")}this.valueDiv.toggleClass("ui-corner-right",e===this.options.max).width(g.toFixed(0)+"%");this.element.attr("aria-valuenow",e)}});b.extend(b.ui.progressbar,{version:"1.8.11"})})(jQuery);
(function(b){b.widget("ui.slider",b.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var d=this,e=this.options;this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");e.disabled&&this.element.addClass("ui-slider-disabled ui-disabled");
this.range=b([]);if(e.range){if(e.range===true){this.range=b("<div></div>");if(!e.values)e.values=[this._valueMin(),this._valueMin()];if(e.values.length&&e.values.length!==2)e.values=[e.values[0],e.values[0]]}else this.range=b("<div></div>");this.range.appendTo(this.element).addClass("ui-slider-range");if(e.range==="min"||e.range==="max")this.range.addClass("ui-slider-range-"+e.range);this.range.addClass("ui-widget-header")}b(".ui-slider-handle",this.element).length===0&&b("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
if(e.values&&e.values.length)for(;b(".ui-slider-handle",this.element).length<e.values.length;)b("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");this.handles=b(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(g){g.preventDefault()}).hover(function(){e.disabled||b(this).addClass("ui-state-hover")},function(){b(this).removeClass("ui-state-hover")}).focus(function(){if(e.disabled)b(this).blur();
else{b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");b(this).addClass("ui-state-focus")}}).blur(function(){b(this).removeClass("ui-state-focus")});this.handles.each(function(g){b(this).data("index.ui-slider-handle",g)});this.handles.keydown(function(g){var f=true,a=b(this).data("index.ui-slider-handle"),c,h,i;if(!d.options.disabled){switch(g.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:f=
false;if(!d._keySliding){d._keySliding=true;b(this).addClass("ui-state-active");c=d._start(g,a);if(c===false)return}break}i=d.options.step;c=d.options.values&&d.options.values.length?(h=d.values(a)):(h=d.value());switch(g.keyCode){case b.ui.keyCode.HOME:h=d._valueMin();break;case b.ui.keyCode.END:h=d._valueMax();break;case b.ui.keyCode.PAGE_UP:h=d._trimAlignValue(c+(d._valueMax()-d._valueMin())/5);break;case b.ui.keyCode.PAGE_DOWN:h=d._trimAlignValue(c-(d._valueMax()-d._valueMin())/5);break;case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(c===
d._valueMax())return;h=d._trimAlignValue(c+i);break;case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(c===d._valueMin())return;h=d._trimAlignValue(c-i);break}d._slide(g,a,h);return f}}).keyup(function(g){var f=b(this).data("index.ui-slider-handle");if(d._keySliding){d._keySliding=false;d._stop(g,f);d._change(g,f);b(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
this._mouseDestroy();return this},_mouseCapture:function(d){var e=this.options,g,f,a,c,h;if(e.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();g=this._normValueFromMouse({x:d.pageX,y:d.pageY});f=this._valueMax()-this._valueMin()+1;c=this;this.handles.each(function(i){var j=Math.abs(g-c.values(i));if(f>j){f=j;a=b(this);h=i}});if(e.range===true&&this.values(1)===e.min){h+=1;a=b(this.handles[h])}if(this._start(d,
h)===false)return false;this._mouseSliding=true;c._handleIndex=h;a.addClass("ui-state-active").focus();e=a.offset();this._clickOffset=!b(d.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:d.pageX-e.left-a.width()/2,top:d.pageY-e.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(d,h,g);return this._animateOff=true},_mouseStart:function(){return true},
_mouseDrag:function(d){var e=this._normValueFromMouse({x:d.pageX,y:d.pageY});this._slide(d,this._handleIndex,e);return false},_mouseStop:function(d){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(d,this._handleIndex);this._change(d,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(d){var e;
if(this.orientation==="horizontal"){e=this.elementSize.width;d=d.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{e=this.elementSize.height;d=d.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}e=d/e;if(e>1)e=1;if(e<0)e=0;if(this.orientation==="vertical")e=1-e;d=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+e*d)},_start:function(d,e){var g={handle:this.handles[e],value:this.value()};if(this.options.values&&this.options.values.length){g.value=
this.values(e);g.values=this.values()}return this._trigger("start",d,g)},_slide:function(d,e,g){var f;if(this.options.values&&this.options.values.length){f=this.values(e?0:1);if(this.options.values.length===2&&this.options.range===true&&(e===0&&g>f||e===1&&g<f))g=f;if(g!==this.values(e)){f=this.values();f[e]=g;d=this._trigger("slide",d,{handle:this.handles[e],value:g,values:f});this.values(e?0:1);d!==false&&this.values(e,g,true)}}else if(g!==this.value()){d=this._trigger("slide",d,{handle:this.handles[e],
value:g});d!==false&&this.value(g)}},_stop:function(d,e){var g={handle:this.handles[e],value:this.value()};if(this.options.values&&this.options.values.length){g.value=this.values(e);g.values=this.values()}this._trigger("stop",d,g)},_change:function(d,e){if(!this._keySliding&&!this._mouseSliding){var g={handle:this.handles[e],value:this.value()};if(this.options.values&&this.options.values.length){g.value=this.values(e);g.values=this.values()}this._trigger("change",d,g)}},value:function(d){if(arguments.length){this.options.value=
this._trimAlignValue(d);this._refreshValue();this._change(null,0)}return this._value()},values:function(d,e){var g,f,a;if(arguments.length>1){this.options.values[d]=this._trimAlignValue(e);this._refreshValue();this._change(null,d)}if(arguments.length)if(b.isArray(arguments[0])){g=this.options.values;f=arguments[0];for(a=0;a<g.length;a+=1){g[a]=this._trimAlignValue(f[a]);this._change(null,a)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(d):this.value();
else return this._values()},_setOption:function(d,e){var g,f=0;if(b.isArray(this.options.values))f=this.options.values.length;b.Widget.prototype._setOption.apply(this,arguments);switch(d){case "disabled":if(e){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(g=0;g<f;g+=1)this._change(null,g);this._animateOff=false;break}},_value:function(){var d=this.options.value;return d=this._trimAlignValue(d)},_values:function(d){var e,g;if(arguments.length){e=this.options.values[d];
return e=this._trimAlignValue(e)}else{e=this.options.values.slice();for(g=0;g<e.length;g+=1)e[g]=this._trimAlignValue(e[g]);return e}},_trimAlignValue:function(d){if(d<=this._valueMin())return this._valueMin();if(d>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,g=(d-this._valueMin())%e;alignValue=d-g;if(Math.abs(g)*2>=e)alignValue+=g>0?e:-e;return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},
_refreshValue:function(){var d=this.options.range,e=this.options,g=this,f=!this._animateOff?e.animate:false,a,c={},h,i,j,n;if(this.options.values&&this.options.values.length)this.handles.each(function(p){a=(g.values(p)-g._valueMin())/(g._valueMax()-g._valueMin())*100;c[g.orientation==="horizontal"?"left":"bottom"]=a+"%";b(this).stop(1,1)[f?"animate":"css"](c,e.animate);if(g.options.range===true)if(g.orientation==="horizontal"){if(p===0)g.range.stop(1,1)[f?"animate":"css"]({left:a+"%"},e.animate);
if(p===1)g.range[f?"animate":"css"]({width:a-h+"%"},{queue:false,duration:e.animate})}else{if(p===0)g.range.stop(1,1)[f?"animate":"css"]({bottom:a+"%"},e.animate);if(p===1)g.range[f?"animate":"css"]({height:a-h+"%"},{queue:false,duration:e.animate})}h=a});else{i=this.value();j=this._valueMin();n=this._valueMax();a=n!==j?(i-j)/(n-j)*100:0;c[g.orientation==="horizontal"?"left":"bottom"]=a+"%";this.handle.stop(1,1)[f?"animate":"css"](c,e.animate);if(d==="min"&&this.orientation==="horizontal")this.range.stop(1,
1)[f?"animate":"css"]({width:a+"%"},e.animate);if(d==="max"&&this.orientation==="horizontal")this.range[f?"animate":"css"]({width:100-a+"%"},{queue:false,duration:e.animate});if(d==="min"&&this.orientation==="vertical")this.range.stop(1,1)[f?"animate":"css"]({height:a+"%"},e.animate);if(d==="max"&&this.orientation==="vertical")this.range[f?"animate":"css"]({height:100-a+"%"},{queue:false,duration:e.animate})}}});b.extend(b.ui.slider,{version:"1.8.11"})})(jQuery);
(function(b,d){function e(){return++f}function g(){return++a}var f=0,a=0;b.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(c,h){if(c=="selected")this.options.collapsible&&
h==this.options.selected||this.select(h);else{this.options[c]=h;this._tabify()}},_tabId:function(c){return c.title&&c.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+e()},_sanitizeSelector:function(c){return c.replace(/:/g,"\\:")},_cookie:function(){var c=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+g());return b.cookie.apply(null,[c].concat(b.makeArray(arguments)))},_ui:function(c,h){return{tab:c,panel:h,index:this.anchors.index(c)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var c=
b(this);c.html(c.data("label.tabs")).removeData("label.tabs")})},_tabify:function(c){function h(r,u){r.css("display","");!b.support.opacity&&u.opacity&&r[0].style.removeAttribute("filter")}var i=this,j=this.options,n=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=b(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return b("a",this)[0]});this.panels=b([]);this.anchors.each(function(r,u){var v=b(u).attr("href"),w=v.split("#")[0],y;if(w&&(w===location.toString().split("#")[0]||
(y=b("base")[0])&&w===y.href)){v=u.hash;u.href=v}if(n.test(v))i.panels=i.panels.add(i.element.find(i._sanitizeSelector(v)));else if(v&&v!=="#"){b.data(u,"href.tabs",v);b.data(u,"load.tabs",v.replace(/#.*$/,""));v=i._tabId(u);u.href="#"+v;u=i.element.find("#"+v);if(!u.length){u=b(j.panelTemplate).attr("id",v).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(i.panels[r-1]||i.list);u.data("destroy.tabs",true)}i.panels=i.panels.add(u)}else j.disabled.push(r)});if(c){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(j.selected===d){location.hash&&this.anchors.each(function(r,u){if(u.hash==location.hash){j.selected=r;return false}});if(typeof j.selected!=="number"&&j.cookie)j.selected=parseInt(i._cookie(),10);if(typeof j.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length)j.selected=
this.lis.index(this.lis.filter(".ui-tabs-selected"));j.selected=j.selected||(this.lis.length?0:-1)}else if(j.selected===null)j.selected=-1;j.selected=j.selected>=0&&this.anchors[j.selected]||j.selected<0?j.selected:0;j.disabled=b.unique(j.disabled.concat(b.map(this.lis.filter(".ui-state-disabled"),function(r){return i.lis.index(r)}))).sort();b.inArray(j.selected,j.disabled)!=-1&&j.disabled.splice(b.inArray(j.selected,j.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");
if(j.selected>=0&&this.anchors.length){i.element.find(i._sanitizeSelector(i.anchors[j.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(j.selected).addClass("ui-tabs-selected ui-state-active");i.element.queue("tabs",function(){i._trigger("show",null,i._ui(i.anchors[j.selected],i.element.find(i._sanitizeSelector(i.anchors[j.selected].hash))[0]))});this.load(j.selected)}b(window).bind("unload",function(){i.lis.add(i.anchors).unbind(".tabs");i.lis=i.anchors=i.panels=null})}else j.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
this.element[j.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");j.cookie&&this._cookie(j.selected,j.cookie);c=0;for(var p;p=this.lis[c];c++)b(p)[b.inArray(c,j.disabled)!=-1&&!b(p).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");j.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(j.event!=="mouseover"){var l=function(r,u){u.is(":not(.ui-state-disabled)")&&u.addClass("ui-state-"+r)},k=function(r,u){u.removeClass("ui-state-"+
r)};this.lis.bind("mouseover.tabs",function(){l("hover",b(this))});this.lis.bind("mouseout.tabs",function(){k("hover",b(this))});this.anchors.bind("focus.tabs",function(){l("focus",b(this).closest("li"))});this.anchors.bind("blur.tabs",function(){k("focus",b(this).closest("li"))})}var m,o;if(j.fx)if(b.isArray(j.fx)){m=j.fx[0];o=j.fx[1]}else m=o=j.fx;var q=o?function(r,u){b(r).closest("li").addClass("ui-tabs-selected ui-state-active");u.hide().removeClass("ui-tabs-hide").animate(o,o.duration||"normal",
function(){h(u,o);i._trigger("show",null,i._ui(r,u[0]))})}:function(r,u){b(r).closest("li").addClass("ui-tabs-selected ui-state-active");u.removeClass("ui-tabs-hide");i._trigger("show",null,i._ui(r,u[0]))},s=m?function(r,u){u.animate(m,m.duration||"normal",function(){i.lis.removeClass("ui-tabs-selected ui-state-active");u.addClass("ui-tabs-hide");h(u,m);i.element.dequeue("tabs")})}:function(r,u){i.lis.removeClass("ui-tabs-selected ui-state-active");u.addClass("ui-tabs-hide");i.element.dequeue("tabs")};
this.anchors.bind(j.event+".tabs",function(){var r=this,u=b(r).closest("li"),v=i.panels.filter(":not(.ui-tabs-hide)"),w=i.element.find(i._sanitizeSelector(r.hash));if(u.hasClass("ui-tabs-selected")&&!j.collapsible||u.hasClass("ui-state-disabled")||u.hasClass("ui-state-processing")||i.panels.filter(":animated").length||i._trigger("select",null,i._ui(this,w[0]))===false){this.blur();return false}j.selected=i.anchors.index(this);i.abort();if(j.collapsible)if(u.hasClass("ui-tabs-selected")){j.selected=
-1;j.cookie&&i._cookie(j.selected,j.cookie);i.element.queue("tabs",function(){s(r,v)}).dequeue("tabs");this.blur();return false}else if(!v.length){j.cookie&&i._cookie(j.selected,j.cookie);i.element.queue("tabs",function(){q(r,w)});i.load(i.anchors.index(this));this.blur();return false}j.cookie&&i._cookie(j.selected,j.cookie);if(w.length){v.length&&i.element.queue("tabs",function(){s(r,v)});i.element.queue("tabs",function(){q(r,w)});i.load(i.anchors.index(this))}else throw"jQuery UI Tabs: Mismatching fragment identifier.";
b.browser.msie&&this.blur()});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(c){if(typeof c=="string")c=this.anchors.index(this.anchors.filter("[href$="+c+"]"));return c},destroy:function(){var c=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var h=
b.data(this,"href.tabs");if(h)this.href=h;var i=b(this).unbind(".tabs");b.each(["href","load","cache"],function(j,n){i.removeData(n+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){b.data(this,"destroy.tabs")?b(this).remove():b(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")});c.cookie&&this._cookie(null,c.cookie);return this},add:function(c,
h,i){if(i===d)i=this.anchors.length;var j=this,n=this.options;h=b(n.tabTemplate.replace(/#\{href\}/g,c).replace(/#\{label\}/g,h));c=!c.indexOf("#")?c.replace("#",""):this._tabId(b("a",h)[0]);h.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var p=j.element.find("#"+c);p.length||(p=b(n.panelTemplate).attr("id",c).data("destroy.tabs",true));p.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(i>=this.lis.length){h.appendTo(this.list);p.appendTo(this.list[0].parentNode)}else{h.insertBefore(this.lis[i]);
p.insertBefore(this.panels[i])}n.disabled=b.map(n.disabled,function(l){return l>=i?++l:l});this._tabify();if(this.anchors.length==1){n.selected=0;h.addClass("ui-tabs-selected ui-state-active");p.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){j._trigger("show",null,j._ui(j.anchors[0],j.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[i],this.panels[i]));return this},remove:function(c){c=this._getIndex(c);var h=this.options,i=this.lis.eq(c).remove(),j=this.panels.eq(c).remove();
if(i.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(c+(c+1<this.anchors.length?1:-1));h.disabled=b.map(b.grep(h.disabled,function(n){return n!=c}),function(n){return n>=c?--n:n});this._tabify();this._trigger("remove",null,this._ui(i.find("a")[0],j[0]));return this},enable:function(c){c=this._getIndex(c);var h=this.options;if(b.inArray(c,h.disabled)!=-1){this.lis.eq(c).removeClass("ui-state-disabled");h.disabled=b.grep(h.disabled,function(i){return i!=c});this._trigger("enable",null,
this._ui(this.anchors[c],this.panels[c]));return this}},disable:function(c){c=this._getIndex(c);var h=this.options;if(c!=h.selected){this.lis.eq(c).addClass("ui-state-disabled");h.disabled.push(c);h.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[c],this.panels[c]))}return this},select:function(c){c=this._getIndex(c);if(c==-1)if(this.options.collapsible&&this.options.selected!=-1)c=this.options.selected;else return this;this.anchors.eq(c).trigger(this.options.event+".tabs");return this},
load:function(c){c=this._getIndex(c);var h=this,i=this.options,j=this.anchors.eq(c)[0],n=b.data(j,"load.tabs");this.abort();if(!n||this.element.queue("tabs").length!==0&&b.data(j,"cache.tabs"))this.element.dequeue("tabs");else{this.lis.eq(c).addClass("ui-state-processing");if(i.spinner){var p=b("span",j);p.data("label.tabs",p.html()).html(i.spinner)}this.xhr=b.ajax(b.extend({},i.ajaxOptions,{url:n,success:function(l,k){h.element.find(h._sanitizeSelector(j.hash)).html(l);h._cleanup();i.cache&&b.data(j,
"cache.tabs",true);h._trigger("load",null,h._ui(h.anchors[c],h.panels[c]));try{i.ajaxOptions.success(l,k)}catch(m){}},error:function(l,k){h._cleanup();h._trigger("load",null,h._ui(h.anchors[c],h.panels[c]));try{i.ajaxOptions.error(l,k,c,j)}catch(m){}}}));h.element.dequeue("tabs");return this}},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},
url:function(c,h){this.anchors.eq(c).removeData("cache.tabs").data("load.tabs",h);return this},length:function(){return this.anchors.length}});b.extend(b.ui.tabs,{version:"1.8.11"});b.extend(b.ui.tabs.prototype,{rotation:null,rotate:function(c,h){var i=this,j=this.options,n=i._rotate||(i._rotate=function(p){clearTimeout(i.rotation);i.rotation=setTimeout(function(){var l=j.selected;i.select(++l<i.anchors.length?l:0)},c);p&&p.stopPropagation()});h=i._unrotate||(i._unrotate=!h?function(p){p.clientX&&
i.rotate(null)}:function(){t=j.selected;n()});if(c){this.element.bind("tabsshow",n);this.anchors.bind(j.event+".tabs",h);n()}else{clearTimeout(i.rotation);this.element.unbind("tabsshow",n);this.anchors.unbind(j.event+".tabs",h);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
$(document).ready(function() {
  if(screen.width < 480) {
    // $('#fullpage').fullpage({
    //   anchors: ['firstPage', 'secondPage', 'thirdPage'],
    //   slidesNavigation: true,
    //   continuousVertical: false,
    //   setAutoScrolling: false
    // });
    return;
  } 
  else {
    $('#fullpage').fullpage({
      anchors: ['firstPage', 'secondPage', 'thirdPage'],
      slidesNavigation: true,
      continuousVertical: false
    });
  }
});

/**
 * model.js - start
 */

/**
 * Contains the API for retrieving data from the database
 */

/**
 * Retrieve the industries list from an input search string
 */


var getIndustries = function(searchQuery, parentElement) {
  var url = '/search/:' + searchQuery;
  var createList = function(parentElement, data) {
    parentElement.html('');
    $(data.industries).each(function(i, elem) {
      parentElement.append('<li>' + elem.name + '</li>');
    });
  };
  $.getJSON(url, {}, function(data) {
    createList(parentElement, data);
  });
};

var getIndustriesListener = function() {
  var parentElement = $('.input-group ul');
  parentElement = parentElement.length ? parentElement : $('<ul>').appendTo('.input-group');
  $('#section1 .awesome-form input').keydown(function(e) {
    getIndustries(e.currentTarget.value, parentElement);
  });
};

$(document).ready(function($) {
  getIndustriesListener();
});

/**
 * model.js - end
 */
;
$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
});
/*! jQuery UI - v1.9.2 - 2014-03-21
* http://jqueryui.com
* Includes: jquery.ui.effect.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */


jQuery.effects||function(e,t){var i=e.uiBackCompat!==!1,a="ui-effects-";e.effects={effect:{}},function(t,i){function a(e,t,i){var a=c[t.type]||{};return null==e?i||!t.def?null:t.def:(e=a.floor?~~e:parseFloat(e),isNaN(e)?t.def:a.mod?(e+a.mod)%a.mod:0>e?0:e>a.max?a.max:e)}function s(e){var a=u(),s=a._rgba=[];return e=e.toLowerCase(),m(l,function(t,n){var r,o=n.re.exec(e),h=o&&n.parse(o),l=n.space||"rgba";return h?(r=a[l](h),a[d[l].cache]=r[d[l].cache],s=a._rgba=r._rgba,!1):i}),s.length?("0,0,0,0"===s.join()&&t.extend(s,r.transparent),a):r[e]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var r,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),h=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],u=t.Color=function(e,i,a,s){return new t.Color.fn.parse(e,i,a,s)},d={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},c={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},p=u.support={},f=t("<p>")[0],m=t.each;f.style.cssText="background-color:rgba(1,1,1,.5)",p.rgba=f.style.backgroundColor.indexOf("rgba")>-1,m(d,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),u.fn=t.extend(u.prototype,{parse:function(n,o,h,l){if(n===i)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=i);var c=this,p=t.type(n),f=this._rgba=[];return o!==i&&(n=[n,o,h,l],p="array"),"string"===p?this.parse(s(n)||r._default):"array"===p?(m(d.rgba.props,function(e,t){f[t.idx]=a(n[t.idx],t)}),this):"object"===p?(n instanceof u?m(d,function(e,t){n[t.cache]&&(c[t.cache]=n[t.cache].slice())}):m(d,function(t,i){var s=i.cache;m(i.props,function(e,t){if(!c[s]&&i.to){if("alpha"===e||null==n[e])return;c[s]=i.to(c._rgba)}c[s][t.idx]=a(n[e],t,!0)}),c[s]&&0>e.inArray(null,c[s].slice(0,3))&&(c[s][3]=1,i.from&&(c._rgba=i.from(c[s])))}),this):i},is:function(e){var t=u(e),a=!0,s=this;return m(d,function(e,n){var r,o=t[n.cache];return o&&(r=s[n.cache]||n.to&&n.to(s._rgba)||[],m(n.props,function(e,t){return null!=o[t.idx]?a=o[t.idx]===r[t.idx]:i})),a}),a},_space:function(){var e=[],t=this;return m(d,function(i,a){t[a.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var i=u(e),s=i._space(),n=d[s],r=0===this.alpha()?u("transparent"):this,o=r[n.cache]||n.to(r._rgba),h=o.slice();return i=i[n.cache],m(n.props,function(e,s){var n=s.idx,r=o[n],l=i[n],u=c[s.type]||{};null!==l&&(null===r?h[n]=l:(u.mod&&(l-r>u.mod/2?r+=u.mod:r-l>u.mod/2&&(r-=u.mod)),h[n]=a((l-r)*t+r,s)))}),this[s](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),a=i.pop(),s=u(e)._rgba;return u(t.map(i,function(e,t){return(1-a)*s[t]+a*e}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),a=i.pop();return e&&i.push(~~(255*a)),"#"+t.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),u.fn.parse.prototype=u.fn,d.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,a=e[0]/255,s=e[1]/255,n=e[2]/255,r=e[3],o=Math.max(a,s,n),h=Math.min(a,s,n),l=o-h,u=o+h,d=.5*u;return t=h===o?0:a===o?60*(s-n)/l+360:s===o?60*(n-a)/l+120:60*(a-s)/l+240,i=0===d||1===d?d:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==r?1:r]},d.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],a=e[2],s=e[3],r=.5>=a?a*(1+i):a+i-a*i,o=2*a-r;return[Math.round(255*n(o,r,t+1/3)),Math.round(255*n(o,r,t)),Math.round(255*n(o,r,t-1/3)),s]},m(d,function(e,s){var n=s.props,r=s.cache,o=s.to,l=s.from;u.fn[e]=function(e){if(o&&!this[r]&&(this[r]=o(this._rgba)),e===i)return this[r].slice();var s,h=t.type(e),d="array"===h||"object"===h?e:arguments,c=this[r].slice();return m(n,function(e,t){var i=d["object"===h?e:t.idx];null==i&&(i=c[t.idx]),c[t.idx]=a(i,t)}),l?(s=u(l(c)),s[r]=c,s):u(c)},m(n,function(i,a){u.fn[i]||(u.fn[i]=function(s){var n,r=t.type(s),o="alpha"===i?this._hsla?"hsla":"rgba":e,l=this[o](),u=l[a.idx];return"undefined"===r?u:("function"===r&&(s=s.call(this,u),r=t.type(s)),null==s&&a.empty?this:("string"===r&&(n=h.exec(s),n&&(s=u+parseFloat(n[2])*("+"===n[1]?1:-1))),l[a.idx]=s,this[o](l)))})})}),m(o,function(e,i){t.cssHooks[i]={set:function(e,a){var n,r,o="";if("string"!==t.type(a)||(n=s(a))){if(a=u(n||a),!p.rgba&&1!==a._rgba[3]){for(r="backgroundColor"===i?e.parentNode:e;(""===o||"transparent"===o)&&r&&r.style;)try{o=t.css(r,"backgroundColor"),r=r.parentNode}catch(h){}a=a.blend(o&&"transparent"!==o?o:"_default")}a=a.toRgbaString()}try{e.style[i]=a}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=u(e.elem,i),e.end=u(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}}),t.cssHooks.borderColor={expand:function(e){var t={};return m(["Top","Right","Bottom","Left"],function(i,a){t["border"+a+"Color"]=e}),t}},r=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(){var t,i,a=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,s={};if(a&&a.length&&a[0]&&a[a[0]])for(i=a.length;i--;)t=a[i],"string"==typeof a[t]&&(s[e.camelCase(t)]=a[t]);else for(t in a)"string"==typeof a[t]&&(s[t]=a[t]);return s}function a(t,i){var a,s,r={};for(a in i)s=i[a],t[a]!==s&&(n[a]||(e.fx.step[a]||!isNaN(parseFloat(s)))&&(r[a]=s));return r}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(jQuery.style(e.elem,i,e.end),e.setAttr=!0)}}),e.effects.animateClass=function(t,n,r,o){var h=e.speed(n,r,o);return this.queue(function(){var n,r=e(this),o=r.attr("class")||"",l=h.children?r.find("*").andSelf():r;l=l.map(function(){var t=e(this);return{el:t,start:i.call(this)}}),n=function(){e.each(s,function(e,i){t[i]&&r[i+"Class"](t[i])})},n(),l=l.map(function(){return this.end=i.call(this.el[0]),this.diff=a(this.start,this.end),this}),r.attr("class",o),l=l.map(function(){var t=this,i=e.Deferred(),a=jQuery.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,a),i.promise()}),e.when.apply(e,l.get()).done(function(){n(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,i,a,s){return i?e.effects.animateClass.call(this,{add:t},i,a,s):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,i,a,s){return i?e.effects.animateClass.call(this,{remove:t},i,a,s):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(i,a,s,n,r){return"boolean"==typeof a||a===t?s?e.effects.animateClass.call(this,a?{add:i}:{remove:i},s,n,r):this._toggleClass(i,a):e.effects.animateClass.call(this,{toggle:i},a,s,n)},switchClass:function(t,i,a,s,n){return e.effects.animateClass.call(this,{add:i,remove:t},a,s,n)}})}(),function(){function s(t,i,a,s){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(s=i,a=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(s=a,a=i,i={}),e.isFunction(a)&&(s=a,a=null),i&&e.extend(t,i),a=a||i.duration,t.duration=e.fx.off?0:"number"==typeof a?a:a in e.fx.speeds?e.fx.speeds[a]:e.fx.speeds._default,t.complete=s||i.complete,t}function n(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?!1:i&&e.effects[t]?!1:!0}e.extend(e.effects,{version:"1.9.2",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(a+t[i],e[0].style[t[i]])},restore:function(e,i){var s,n;for(n=0;i.length>n;n++)null!==i[n]&&(s=e.data(a+i[n]),s===t&&(s=""),e.css(i[n],s))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,a;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":a=0;break;case"center":a=.5;break;case"right":a=1;break;default:a=e[1]/t.width}return{x:a,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},a=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),s={width:t.width(),height:t.height()},n=document.activeElement;try{n.id}catch(r){n=document.body}return t.wrap(a),(t[0]===n||e.contains(t[0],n))&&e(n).focus(),a=t.parent(),"static"===t.css("position")?(a.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,a){i[a]=t.css(a),isNaN(parseInt(i[a],10))&&(i[a]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(s),a.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,a,s){return s=s||{},e.each(i,function(e,i){var n=t.cssUnit(i);n[0]>0&&(s[i]=n[0]*a+n[1])}),s}}),e.fn.extend({effect:function(){function t(t){function i(){e.isFunction(n)&&n.call(s[0]),e.isFunction(t)&&t()}var s=e(this),n=a.complete,r=a.mode;(s.is(":hidden")?"hide"===r:"show"===r)?i():o.call(s[0],a,i)}var a=s.apply(this,arguments),n=a.mode,r=a.queue,o=e.effects.effect[a.effect],h=!o&&i&&e.effects[a.effect];return e.fx.off||!o&&!h?n?this[n](a.duration,a.complete):this.each(function(){a.complete&&a.complete.call(this)}):o?r===!1?this.each(t):this.queue(r||"fx",t):h.call(this,{options:a,duration:a.duration,callback:a.complete,mode:a.mode})},_show:e.fn.show,show:function(e){if(n(e))return this._show.apply(this,arguments);var t=s.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(n(e))return this._hide.apply(this,arguments);var t=s.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(n(t)||"boolean"==typeof t||e.isFunction(t))return this.__toggle.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)},cssUnit:function(t){var i=this.css(t),a=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(a=[parseFloat(i),t])}),a}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}()}(jQuery);
/**
 * fullPage 2.6.5
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */

(function(global, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
          return factory($, global, global.document, global.Math);
        });
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'), global, global.document, global.Math);
    } else {
        factory(jQuery, global, global.document, global.Math);
    }
})(typeof window !== 'undefined' ? window : this, function($, window, document, Math, undefined) {
    'use strict';

    // keeping central set of classnames and selectors
    var WRAPPER =               'fullpage-wrapper';
    var WRAPPER_SEL =           '.' + WRAPPER;

    // slimscroll
    var SCROLLABLE =            'fp-scrollable';
    var SCROLLABLE_SEL =        '.' + SCROLLABLE;
    var SLIMSCROLL_BAR_SEL =    '.slimScrollBar';
    var SLIMSCROLL_RAIL_SEL =   '.slimScrollRail';

    // util
    var RESPONSIVE =            'fp-responsive';
    var NO_TRANSITION =         'fp-notransition';
    var DESTROYED =             'fp-destroyed';
    var ENABLED =               'fp-enabled';
    var VIEWING_PREFIX =        'fp-viewing';
    var ACTIVE =                'active';
    var ACTIVE_SEL =            '.' + ACTIVE;

    // section
    var SECTION_DEFAULT_SEL =   '.section';
    var SECTION =               'fp-section';
    var SECTION_SEL =           '.' + SECTION;
    var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;
    var SECTION_FIRST_SEL =     SECTION_SEL + ':first';
    var SECTION_LAST_SEL =      SECTION_SEL + ':last';
    var TABLE_CELL =            'fp-tableCell';
    var TABLE_CELL_SEL =        '.' + TABLE_CELL;

    // section nav
    var SECTION_NAV =           'fp-nav';
    var SECTION_NAV_SEL =       '#' + SECTION_NAV;
    var SECTION_NAV_TOOLTIP =   'fp-tooltip';
    var SHOW_ACTIVE_TOOLTIP =   'fp-show-active';

    // slide
    var SLIDE_DEFAULT_SEL =     '.slide';
    var SLIDE =                 'fp-slide';
    var SLIDE_SEL =             '.' + SLIDE;
    var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER =        'fp-slides';
    var SLIDES_WRAPPER_SEL =    '.' + SLIDES_WRAPPER;
    var SLIDES_CONTAINER =      'fp-slidesContainer';
    var SLIDES_CONTAINER_SEL =  '.' + SLIDES_CONTAINER;
    var TABLE =                 'fp-table';

    // slide nav
    var SLIDES_NAV =            'fp-slidesNav';
    var SLIDES_NAV_SEL =        '.' + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL =   SLIDES_NAV_SEL + ' a';
    var SLIDES_ARROW =          'fp-controlArrow';
    var SLIDES_ARROW_SEL =      '.' + SLIDES_ARROW;
    var SLIDES_PREV =           'fp-prev';
    var SLIDES_PREV_SEL =       '.' + SLIDES_PREV;
    var SLIDES_ARROW_PREV =     SLIDES_ARROW + ' ' + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT =           'fp-next';
    var SLIDES_NEXT_SEL =       '.' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT =     SLIDES_ARROW + ' ' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

    var $window = $(window);
    var $document = $(document);

    $.fn.fullpage = function(options) {

        // common jQuery objects
        var $htmlBody = $('html, body');
        var $body = $('body');

        var FP = $.fn.fullpage;
        // Create some defaults, extending them with any options that were provided
        options = $.extend({
            //navigation
            menu: false,
            anchors:[],
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: [],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            scrollBar: false,

            //scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            normalScrollElements: null,
            scrollOverflow: false,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //design
            controlArrows: true,
            controlArrowColor: '#fff',
            verticalCentered: true,
            resize: false,
            sectionsColor : [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,

            //Custom selectors
            sectionSelector: SECTION_DEFAULT_SEL,
            slideSelector: SLIDE_DEFAULT_SEL,


            //events
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null
        }, options);

        displayWarnings();


        //easeInOutCubic animation included in the plugin
        $.extend($.easing,{ easeInOutCubic: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;}});

        //TO BE REMOVED in future versions. Maintained temporaly for backwards compatibility.
        $.extend($.easing,{ easeInQuart: function (x, t, b, c, d) { return c*(t/=d)*t*t*t + b; }});

        /**
        * Sets the autoScroll option.
        * It changes the scroll bar visibility and the history of the site as a result.
        */
        FP.setAutoScrolling = function(value, type){
            setVariableState('autoScrolling', value, type);

            var element = $(SECTION_ACTIVE_SEL);

            if(options.autoScrolling && !options.scrollBar){
                $htmlBody.css({
                    'overflow' : 'hidden',
                    'height' : '100%'
                });

                FP.setRecordHistory(options.recordHistory, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': 'none',
                    'touch-action': 'none'
                });

                if(element.length){
                    //moving the container up
                    silentScroll(element.position().top);
                }

            }else{
                $htmlBody.css({
                    'overflow' : 'visible',
                    'height' : 'initial'
                });

                FP.setRecordHistory(false, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': '',
                    'touch-action': ''
                });

                silentScroll(0);

                //scrolling the page to the section with no animation
                if (element.length) {
                    $htmlBody.scrollTop(element.position().top);
                }
            }

        };

        /**
        * Defines wheter to record the history for each hash change in the URL.
        */
        FP.setRecordHistory = function(value, type){
            setVariableState('recordHistory', value, type);
        };

        /**
        * Defines the scrolling speed
        */
        FP.setScrollingSpeed = function(value, type){
            setVariableState('scrollingSpeed', value, type);
        };

        /**
        * Sets fitToSection
        */
        FP.setFitToSection = function(value, type){
            setVariableState('fitToSection', value, type);
        };

        /**
        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel or the trackpad.
        */
        FP.setMouseWheelScrolling = function (value){
            if(value){
                addMouseWheelHandler();
            }else{
                removeMouseWheelHandler();
            }
        };

        /**
        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
        *
        * @param directions string containing the direction or directions separated by comma.
        */
        FP.setAllowScrolling = function (value, directions){
            if(typeof directions != 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                $.each(directions, function (index, direction){
                    setIsScrollable(value, direction);
                });
            }
            else if(value){
                FP.setMouseWheelScrolling(true);
                addTouchHandler();
            }else{
                FP.setMouseWheelScrolling(false);
                removeTouchHandler();
            }
        };

        /**
        * Adds or remove the possiblity of scrolling through sections by using the keyboard arrow keys
        */
        FP.setKeyboardScrolling = function (value){
            options.keyboardScrolling = value;
        };

        /**
        * Moves the page up one section.
        */
        FP.moveSectionUp = function(){
            var prev = $(SECTION_ACTIVE_SEL).prev(SECTION_SEL);

            //looping to the bottom if there's no more sections above
            if (!prev.length && (options.loopTop || options.continuousVertical)) {
                prev = $(SECTION_SEL).last();
            }

            if (prev.length) {
                scrollPage(prev, null, true);
            }
        };

        /**
        * Moves the page down one section.
        */
        FP.moveSectionDown = function (){
            var next = $(SECTION_ACTIVE_SEL).next(SECTION_SEL);

            //looping to the top if there's no more sections below
            if(!next.length &&
                (options.loopBottom || options.continuousVertical)){
                next = $(SECTION_SEL).first();
            }

            if(next.length){
                scrollPage(next, null, false);
            }
        };

        /**
        * Moves the page to the given section and slide with no animation.
        * Anchors or index positions can be used as params.
        */
        FP.silentMoveTo = function(sectionAnchor, slideAnchor){
            FP.setScrollingSpeed (0, 'internal');
            FP.moveTo(sectionAnchor, slideAnchor)
            FP.setScrollingSpeed (originals.scrollingSpeed, 'internal');
        };

        /**
        * Moves the page to the given section and slide.
        * Anchors or index positions can be used as params.
        */
        FP.moveTo = function (sectionAnchor, slideAnchor){
            var destiny = getSectionByAnchor(sectionAnchor);

            if (typeof slideAnchor !== 'undefined'){
                scrollPageAndSlide(sectionAnchor, slideAnchor);
            }else if(destiny.length > 0){
                scrollPage(destiny);
            }
        };

        /**
        * Slides right the slider of the active section.
        */
        FP.moveSlideRight = function(){
            moveSlide('next');
        };

        /**
        * Slides left the slider of the active section.
        */
        FP.moveSlideLeft = function(){
            moveSlide('prev');
        };

        /**
         * When resizing is finished, we adjust the slides sizes and positions
         */
        FP.reBuild = function(resizing){
            if(container.hasClass(DESTROYED)){ return; }  //nothing to do if the plugin was destroyed

            isResizing = true;

            var windowsWidth = $window.width();
            windowsHeight = $window.height();  //updating global var

            //text resizing
            if (options.resize) {
                resizeMe(windowsHeight, windowsWidth);
            }

            $(SECTION_SEL).each(function(){
                var slidesWrap = $(this).find(SLIDES_WRAPPER_SEL);
                var slides = $(this).find(SLIDE_SEL);

                //adjusting the height of the table-cell for IE and Firefox
                if(options.verticalCentered){
                    $(this).find(TABLE_CELL_SEL).css('height', getTableHeight($(this)) + 'px');
                }

                $(this).css('height', windowsHeight + 'px');

                //resizing the scrolling divs
                if(options.scrollOverflow){
                    if(slides.length){
                        slides.each(function(){
                            createSlimScrolling($(this));
                        });
                    }else{
                        createSlimScrolling($(this));
                    }
                }

                //adjusting the position fo the FULL WIDTH slides...
                if (slides.length > 1) {
                    landscapeScroll(slidesWrap, slidesWrap.find(SLIDE_ACTIVE_SEL));
                }
            });

            var activeSection = $(SECTION_ACTIVE_SEL);
            var sectionIndex = activeSection.index(SECTION_SEL);

            //isn't it the first section?
            if(sectionIndex){
                //adjusting the position for the current section
                FP.silentMoveTo(sectionIndex + 1);
            }

            isResizing = false;
            $.isFunction( options.afterResize ) && resizing && options.afterResize.call(container);
            $.isFunction( options.afterReBuild ) && !resizing && options.afterReBuild.call(container);
        };

        //flag to avoid very fast sliding for landscape sliders
        var slideMoving = false;

        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
        var container = $(this);
        var windowsHeight = $window.height();
        var isResizing = false;
        var lastScrolledDestiny;
        var lastScrolledSlide;
        var canScroll = true;
        var scrollings = [];
        var nav;
        var controlPressed;
        var isScrollAllowed = { 'up':true, 'down':true, 'left':true, 'right':true };
        var originals = $.extend(true, {}, options); //deep copy

        if($(this).length){
            container.css({
                'height': '100%',
                'position': 'relative'
            });

            //adding a class to recognize the container internally in the code
            container.addClass(WRAPPER);
            $('html').addClass(ENABLED);
        }
        //trying to use fullpage without a selector?
        else{
            showError('error', 'Error! Fullpage.js needs to be initialized with a selector. For example: $(\'#myContainer\').fullpage();');
        }

        //if css3 is not supported, it will use jQuery animations
        if(options.css3){
            options.css3 = support3d();
        }

        FP.setAllowScrolling(true);
        container.removeClass(DESTROYED); //in case it was destroyed before initilizing it again


        //adding internal class names to void problem with common ones
        $(options.sectionSelector).each(function(){
            $(this).addClass(SECTION);
        });
        $(options.slideSelector).each(function(){
            $(this).addClass(SLIDE);
        });

        //creating the navigation dots
        if (options.navigation) {
            addVerticalNavigation();
        }

        //styling the sections
        $(SECTION_SEL).each(function(index){
            var that = $(this);
            var slides = $(this).find(SLIDE_SEL);
            var numSlides = slides.length;

            //if no active section is defined, the 1st one will be the default one
            if(!index && $(SECTION_ACTIVE_SEL).length === 0) {
                $(this).addClass(ACTIVE);
            }

            $(this).css('height', windowsHeight + 'px');

            if(options.paddingTop){
                $(this).css('padding-top', options.paddingTop);
            }

            if(options.paddingBottom){
                $(this).css('padding-bottom', options.paddingBottom);
            }

            if (typeof options.sectionsColor[index] !==  'undefined') {
                $(this).css('background-color', options.sectionsColor[index]);
            }

            if (typeof options.anchors[index] !== 'undefined') {
                $(this).attr('data-anchor', options.anchors[index]);

                //activating the menu / nav element on load
                if($(this).hasClass(ACTIVE)){
                    activateMenuAndNav(options.anchors[index], index);
                }
            }

            // if there's any slide
            if (numSlides > 0) {
                var sliderWidth = numSlides * 100;
                var slideWidth = 100 / numSlides;

                slides.wrapAll('<div class="' + SLIDES_CONTAINER + '" />');
                slides.parent().wrap('<div class="' + SLIDES_WRAPPER + '" />');

                $(this).find(SLIDES_CONTAINER_SEL).css('width', sliderWidth + '%');

                if(options.controlArrows && numSlides > 1){
                    createSlideArrows($(this));
                }

                if(options.slidesNavigation){
                    addSlidesNavigation($(this), numSlides);
                }

                slides.each(function(index) {
                    $(this).css('width', slideWidth + '%');

                    if(options.verticalCentered){
                        addTableClass($(this));
                    }
                });

                var startingSlide = that.find(SLIDE_ACTIVE_SEL);

                //if the slide won#t be an starting point, the default will be the first one
                if(!startingSlide.length){
                    slides.eq(0).addClass(ACTIVE);
                }

                //is there a starting point for a non-starting section?
                else{
                    silentLandscapeScroll(startingSlide);
                }

            }else{
                if(options.verticalCentered){
                    addTableClass($(this));
                }
            }

        }).promise().done(function(){
            FP.setAutoScrolling(options.autoScrolling, 'internal');

            //the starting point is a slide?
            var activeSlide = $(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL);

            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
            if( activeSlide.length &&  ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && activeSlide.index() !== 0))){
                silentLandscapeScroll(activeSlide);
            }

            //fixed elements need to be moved out of the plugin container due to problems with CSS3.
            if(options.fixedElements && options.css3){
                $(options.fixedElements).appendTo($body);
            }

            //vertical centered of the navigation + first bullet active
            if(options.navigation){
                nav.css('margin-top', '-' + (nav.height()/2) + 'px');
                nav.find('li').eq($(SECTION_ACTIVE_SEL).index(SECTION_SEL)).find('a').addClass(ACTIVE);
            }

            //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
            if(options.menu && options.css3 && $(options.menu).closest(WRAPPER_SEL).length){
                $(options.menu).appendTo($body);
            }

            if(options.scrollOverflow){
                if(document.readyState === 'complete'){
                    createSlimScrollingHandler();
                }
                //after DOM and images are loaded
                $window.on('load', createSlimScrollingHandler);
            }else{
                afterRenderActions();
            }

            responsive();

            //for animateAnchor:false
            if(!options.animateAnchor){
                //getting the anchor link in the URL and deleting the `#`
                var value =  window.location.hash.replace('#', '').split('/');
                var destiny = value[0];

                if(destiny.length){
                    var section = $('[data-anchor="'+destiny+'"]');

                    if(section.length){
                        if(options.autoScrolling){
                            silentScroll(section.position().top);
                        }
                        else{
                            silentScroll(0);

                            //scrolling the page to the section with no animation
                            $htmlBody.scrollTop(section.position().top);
                        }
                        activateMenuAndNav(destiny, null);

                        $.isFunction( options.afterLoad ) && options.afterLoad.call( section, destiny, (section.index(SECTION_SEL) + 1));

                        //updating the active class
                        section.addClass(ACTIVE).siblings().removeClass(ACTIVE);
                    }
                }
            }

            //setting the class for the body element
            setBodyClass();

            $window.on('load', function() {
                scrollToAnchor();
            });

        });


        /**
        * Creates the control arrows for the given section
        */
        function createSlideArrows(section){
            section.find(SLIDES_WRAPPER_SEL).after('<div class="' + SLIDES_ARROW_PREV + '"></div><div class="' + SLIDES_ARROW_NEXT + '"></div>');

            if(options.controlArrowColor!='#fff'){
                section.find(SLIDES_ARROW_NEXT_SEL).css('border-color', 'transparent transparent transparent '+options.controlArrowColor);
                section.find(SLIDES_ARROW_PREV_SEL).css('border-color', 'transparent '+ options.controlArrowColor + ' transparent transparent');
            }

            if(!options.loopHorizontal){
                section.find(SLIDES_ARROW_PREV_SEL).hide();
            }
        }

        /**
        * Creates a vertical navigation bar.
        */
        function addVerticalNavigation(){
            $body.append('<div id="' + SECTION_NAV + '"><ul></ul></div>');
            nav = $(SECTION_NAV_SEL);

            nav.addClass(function() {
                return options.showActiveTooltip ? SHOW_ACTIVE_TOOLTIP + ' ' + options.navigationPosition : options.navigationPosition;
            });

            for (var i = 0; i < $(SECTION_SEL).length; i++) {
                var link = '';
                if (options.anchors.length) {
                    link = options.anchors[i];
                }

                var li = '<li><a href="#' + link + '"><span></span></a>';

                // Only add tooltip if needed (defined by user)
                var tooltip = options.navigationTooltips[i];

                if (typeof tooltip !== 'undefined' && tooltip !== '') {
                    li += '<div class="' + SECTION_NAV_TOOLTIP + ' ' + options.navigationPosition + '">' + tooltip + '</div>';
                }

                li += '</li>';

                nav.find('ul').append(li);
            }
        }

        /**
        * Creates the slim scroll scrollbar for the sections and slides inside them.
        */
        function createSlimScrollingHandler(){
            $(SECTION_SEL).each(function(){
                var slides = $(this).find(SLIDE_SEL);

                if(slides.length){
                    slides.each(function(){
                        createSlimScrolling($(this));
                    });
                }else{
                    createSlimScrolling($(this));
                }

            });
            afterRenderActions();
        }

        /**
        * Actions and callbacks to fire afterRender
        */
        function afterRenderActions(){
            var section = $(SECTION_ACTIVE_SEL);

            //to solve a bug with slimScroll vendor #1037, #553
            section.find('.fp-scrollable').mouseover();

            $.isFunction( options.afterLoad ) && options.afterLoad.call(section, section.data('anchor'), (section.index(SECTION_SEL) + 1));
            $.isFunction( options.afterRender ) && options.afterRender.call( this);
        }

        var scrollId;
        var scrollId2;
        var isScrolling = false;

        //when scrolling...
        $window.on('scroll', scrollHandler);

        function scrollHandler(){
            var currentSection;

            if(!options.autoScrolling || options.scrollBar){
                var currentScroll = $window.scrollTop();
                var visibleSectionIndex = 0;
                var initial = Math.abs(currentScroll - document.querySelectorAll(SECTION_SEL)[0].offsetTop);

                //taking the section which is showing more content in the viewport
                var sections =  document.querySelectorAll(SECTION_SEL);
                for (var i = 0; i < sections.length; ++i) {
                    var section = sections[i];

                    var current = Math.abs(currentScroll - section.offsetTop);

                    if(current < initial){
                        visibleSectionIndex = i;
                        initial = current;
                    }
                }

                //geting the last one, the current one on the screen
                currentSection = $(sections).eq(visibleSectionIndex);
            }

            if(!options.autoScrolling || options.scrollBar){
                //executing only once the first time we reach the section
                if(!currentSection.hasClass(ACTIVE)){
                    isScrolling = true;
                    var leavingSection = $(SECTION_ACTIVE_SEL);
                    var leavingSectionIndex = leavingSection.index(SECTION_SEL) + 1;
                    var yMovement = getYmovement(currentSection);
                    var anchorLink  = currentSection.data('anchor');
                    var sectionIndex = currentSection.index(SECTION_SEL) + 1;
                    var activeSlide = currentSection.find(SLIDE_ACTIVE_SEL);

                    if(activeSlide.length){
                        var slideAnchorLink = activeSlide.data('anchor');
                        var slideIndex = activeSlide.index();
                    }

                    if(canScroll){
                        currentSection.addClass(ACTIVE).siblings().removeClass(ACTIVE);

                        $.isFunction( options.onLeave ) && options.onLeave.call( leavingSection, leavingSectionIndex, sectionIndex, yMovement);

                        $.isFunction( options.afterLoad ) && options.afterLoad.call( currentSection, anchorLink, sectionIndex);

                        activateMenuAndNav(anchorLink, sectionIndex - 1);

                        if(options.anchors.length){
                            //needed to enter in hashChange event when using the menu with anchor links
                            lastScrolledDestiny = anchorLink;

                            setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
                        }
                    }

                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
                    clearTimeout(scrollId);
                    scrollId = setTimeout(function(){
                        isScrolling = false;
                    }, 100);
                }

                if(options.fitToSection){
                    //for the auto adjust of the viewport to fit a whole section
                    clearTimeout(scrollId2);

                    scrollId2 = setTimeout(function(){
                        if(canScroll){
                            //allows to scroll to an active section and
                            //if the section is already active, we prevent firing callbacks
                            if($(SECTION_ACTIVE_SEL).is(currentSection)){
                                isResizing = true;
                            }
                            scrollPage(currentSection);
                            isResizing = false;
                        }
                    }, 1000);
                }
            }
        }


        /**
        * Determines whether the active section or slide is scrollable through and scrolling bar
        */
        function isScrollable(activeSection){
            //if there are landscape slides, we check if the scrolling bar is in the current one or not
            if(activeSection.find(SLIDES_WRAPPER_SEL).length){
                return activeSection.find(SLIDE_ACTIVE_SEL).find(SCROLLABLE_SEL);
            }

            return activeSection.find(SCROLLABLE_SEL);
        }

        /**
        * Determines the way of scrolling up or down:
        * by 'automatically' scrolling a section or by using the default and normal scrolling.
        */
        function scrolling(type, scrollable){
            if (!isScrollAllowed[type]){
                return;
            }
            var check, scrollSection;

            if(type == 'down'){
                check = 'bottom';
                scrollSection = FP.moveSectionDown;
            }else{
                check = 'top';
                scrollSection = FP.moveSectionUp;
            }

            if(scrollable.length > 0 ){
                //is the scrollbar at the start/end of the scroll?
                if(isScrolled(check, scrollable)){
                    scrollSection();
                }else{
                    return true;
                }
            }else{
                // moved up/down
                scrollSection();
            }
        }


        var touchStartY = 0;
        var touchStartX = 0;
        var touchEndY = 0;
        var touchEndX = 0;

        /* Detecting touch events

        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
        * This way, the touchstart and the touch moves shows an small difference between them which is the
        * used one to determine the direction.
        */
        function touchMoveHandler(event){
            var e = event.originalEvent;

            // additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
            if (!checkParentForNormalScrollElement(event.target) && isReallyTouch(e) ) {

                if(options.autoScrolling){
                    //preventing the easing on iOS devices
                    event.preventDefault();
                }

                var activeSection = $(SECTION_ACTIVE_SEL);
                var scrollable = isScrollable(activeSection);

                if (canScroll && !slideMoving) { //if theres any #
                    var touchEvents = getEventsPage(e);

                    touchEndY = touchEvents.y;
                    touchEndX = touchEvents.x;

                    //if movement in the X axys is greater than in the Y and the currect section has slides...
                    if (activeSection.find(SLIDES_WRAPPER_SEL).length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {

                        //is the movement greater than the minimum resistance to scroll?
                        if (Math.abs(touchStartX - touchEndX) > ($window.width() / 100 * options.touchSensitivity)) {
                            if (touchStartX > touchEndX) {
                                if(isScrollAllowed.right){
                                    FP.moveSlideRight(); //next
                                }
                            } else {
                                if(isScrollAllowed.left){
                                    FP.moveSlideLeft(); //prev
                                }
                            }
                        }
                    }

                    //vertical scrolling (only when autoScrolling is enabled)
                    else if(options.autoScrolling){

                        //is the movement greater than the minimum resistance to scroll?
                        if (Math.abs(touchStartY - touchEndY) > ($window.height() / 100 * options.touchSensitivity)) {
                            if (touchStartY > touchEndY) {
                                scrolling('down', scrollable);
                            } else if (touchEndY > touchStartY) {
                                scrolling('up', scrollable);
                            }
                        }
                    }
                }
            }

        }

        /**
         * recursive function to loop up the parent nodes to check if one of them exists in options.normalScrollElements
         * Currently works well for iOS - Android might need some testing
         * @param  {Element} el  target element / jquery selector (in subsequent nodes)
         * @param  {int}     hop current hop compared to options.normalScrollElementTouchThreshold
         * @return {boolean} true if there is a match to options.normalScrollElements
         */
        function checkParentForNormalScrollElement (el, hop) {
            hop = hop || 0;
            var parent = $(el).parent();

            if (hop < options.normalScrollElementTouchThreshold &&
                parent.is(options.normalScrollElements) ) {
                return true;
            } else if (hop == options.normalScrollElementTouchThreshold) {
                return false;
            } else {
                return checkParentForNormalScrollElement(parent, ++hop);
            }
        }

        /**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event what IE is detecting.
        */
        function isReallyTouch(e){
            //if is not IE   ||  IE is detecting `touch` or `pen`
            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
        }

        /**
        * Handler for the touch start event.
        */
        function touchStartHandler(event){
            var e = event.originalEvent;

            //stopping the auto scroll to adjust to a section
            if(options.fitToSection){
                $htmlBody.stop();
            }

            if(isReallyTouch(e)){
                var touchEvents = getEventsPage(e);
                touchStartY = touchEvents.y;
                touchStartX = touchEvents.x;
            }
        }

        /**
        * Gets the average of the last `number` elements of the given array.
        */
        function getAverage(elements, number){
            var sum = 0;

            //taking `number` elements from the end to make the average, if there are not enought, 1
            var lastElements = elements.slice(Math.max(elements.length - number, 1));

            for(var i = 0; i < lastElements.length; i++){
                sum = sum + lastElements[i];
            }

            return Math.ceil(sum/number);
        }

        /**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */
        var prevTime = new Date().getTime();

        function MouseWheelHandler(e) {
            var curTime = new Date().getTime();

            //autoscrolling and not zooming?
            if(options.autoScrolling && !controlPressed){
                // cross-browser wheel delta
                e = window.event || e;
                var value = e.wheelDelta || -e.deltaY || -e.detail;
                var delta = Math.max(-1, Math.min(1, value));

                //Limiting the array to 150 (lets not waist memory!)
                if(scrollings.length > 149){
                    scrollings.shift();
                }

                //keeping record of the previous scrollings
                scrollings.push(Math.abs(value));

                //preventing to scroll the site on mouse wheel when scrollbar is present
                if(options.scrollBar){
                    e.preventDefault ? e.preventDefault() : e.returnValue = false;
                }

                var activeSection = $(SECTION_ACTIVE_SEL);
                var scrollable = isScrollable(activeSection);

                //time difference between the last scroll and the current one
                var timeDiff = curTime-prevTime;
                prevTime = curTime;

                //haven't they scrolled in a while?
                //(enough to be consider a different scrolling action to scroll another section)
                if(timeDiff > 200){
                    //emptying the array, we dont care about old scrollings for our averages
                    scrollings = [];
                }

                if(canScroll){
                    var averageEnd = getAverage(scrollings, 10);
                    var averageMiddle = getAverage(scrollings, 70);
                    var isAccelerating = averageEnd >= averageMiddle;

                    //to avoid double swipes...
                    if(isAccelerating){
                        //scrolling down?
                        if (delta < 0) {
                            scrolling('down', scrollable);

                        //scrolling up?
                        }else {
                            scrolling('up', scrollable);
                        }
                    }
                }

                return false;
            }

            if(options.fitToSection){
                //stopping the auto scroll to adjust to a section
                $htmlBody.stop();
            }
        }

        /**
        * Slides a slider to the given direction.
        */
        function moveSlide(direction){
            var activeSection = $(SECTION_ACTIVE_SEL);
            var slides = activeSection.find(SLIDES_WRAPPER_SEL);

            // more than one slide needed and nothing should be sliding
            if (!slides.length || slideMoving) {
                return;
            }

            var currentSlide = slides.find(SLIDE_ACTIVE_SEL);
            var destiny = null;

            if(direction === 'prev'){
                destiny = currentSlide.prev(SLIDE_SEL);
            }else{
                destiny = currentSlide.next(SLIDE_SEL);
            }

            //isn't there a next slide in the secuence?
            if(!destiny.length){
                //respect loopHorizontal settin
                if (!options.loopHorizontal) return;

                if(direction === 'prev'){
                    destiny = currentSlide.siblings(':last');
                }else{
                    destiny = currentSlide.siblings(':first');
                }
            }

            slideMoving = true;

            landscapeScroll(slides, destiny);
        }

        /**
        * Maintains the active slides in the viewport
        * (Because he `scroll` animation might get lost with some actions, such as when using continuousVertical)
        */
        function keepSlidesPosition(){
            $(SLIDE_ACTIVE_SEL).each(function(){
                silentLandscapeScroll($(this), 'internal');
            });
        }

        /**
        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
        */
        function scrollPage(element, callback, isMovementUp){
            var dest = element.position();
            if(typeof dest === 'undefined'){ return; } //there's no element to scroll, leaving the function

            //local variables
            var v = {
                element: element,
                callback: callback,
                isMovementUp: isMovementUp,
                dest: dest,
                dtop: dest.top,
                yMovement: getYmovement(element),
                anchorLink: element.data('anchor'),
                sectionIndex: element.index(SECTION_SEL),
                activeSlide: element.find(SLIDE_ACTIVE_SEL),
                activeSection: $(SECTION_ACTIVE_SEL),
                leavingSection: $(SECTION_ACTIVE_SEL).index(SECTION_SEL) + 1,

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };

            //quiting when destination scroll is the same as the current one
            if((v.activeSection.is(element) && !isResizing) || (options.scrollBar && $window.scrollTop() === v.dtop)){ return; }

            if(v.activeSlide.length){
                var slideAnchorLink = v.activeSlide.data('anchor');
                var slideIndex = v.activeSlide.index();
            }

            // If continuousVertical && we need to wrap around
            if (options.autoScrolling && options.continuousVertical && typeof (v.isMovementUp) !== "undefined" &&
                ((!v.isMovementUp && v.yMovement == 'up') || // Intending to scroll down but about to go up or
                (v.isMovementUp && v.yMovement == 'down'))) { // intending to scroll up but about to go down

                v = createInfiniteSections(v);
            }

            element.addClass(ACTIVE).siblings().removeClass(ACTIVE);

            //preventing from activating the MouseWheelHandler event
            //more than once if the page is scrolling
            canScroll = false;

            setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);

            //callback (onLeave) if the site is not just resizing and readjusting the slides
            $.isFunction(options.onLeave) && !v.localIsResizing && options.onLeave.call(v.activeSection, v.leavingSection, (v.sectionIndex + 1), v.yMovement);

            performMovement(v);

            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
            lastScrolledDestiny = v.anchorLink;

            //avoid firing it twice (as it does also on scroll)
            activateMenuAndNav(v.anchorLink, v.sectionIndex);
        }

        /**
        * Performs the movement (by CSS3 or by jQuery)
        */
        function performMovement(v){
            // using CSS3 translate functionality
            if (options.css3 && options.autoScrolling && !options.scrollBar) {

                var translate3d = 'translate3d(0px, -' + v.dtop + 'px, 0px)';
                transformContainer(translate3d, true);

                //even when the scrollingSpeed is 0 there's a little delay, which might cause the
                //scrollingSpeed to change in case of using silentMoveTo();
                if(options.scrollingSpeed){
                    setTimeout(function () {
                        afterSectionLoads(v);
                    }, options.scrollingSpeed);
                }else{
                    afterSectionLoads(v);
                }
            }

            // using jQuery animate
            else{
                var scrollSettings = getScrollSettings(v);

                $(scrollSettings.element).animate(
                    scrollSettings.options,
                options.scrollingSpeed, options.easing).promise().done(function () { //only one single callback in case of animating  `html, body`
                    afterSectionLoads(v);
                });
            }
        }

        /**
        * Gets the scrolling settings depending on the plugin autoScrolling option
        */
        function getScrollSettings(v){
            var scroll = {};

            if(options.autoScrolling && !options.scrollBar){
                scroll.options = { 'top': -v.dtop};
                scroll.element = WRAPPER_SEL;
            }else{
                scroll.options = { 'scrollTop': v.dtop};
                scroll.element = 'html, body';
            }

            return scroll;
        }

        /**
        * Adds sections before or after the current one to create the infinite effect.
        */
        function createInfiniteSections(v){
            // Scrolling down
            if (!v.isMovementUp) {
                // Move all previous sections to after the active section
                $(SECTION_ACTIVE_SEL).after(v.activeSection.prevAll(SECTION_SEL).get().reverse());
            }
            else { // Scrolling up
                // Move all next sections to before the active section
                $(SECTION_ACTIVE_SEL).before(v.activeSection.nextAll(SECTION_SEL));
            }

            // Maintain the displayed position (now that we changed the element order)
            silentScroll($(SECTION_ACTIVE_SEL).position().top);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();

            // save for later the elements that still need to be reordered
            v.wrapAroundElements = v.activeSection;

            // Recalculate animation variables
            v.dest = v.element.position();
            v.dtop = v.dest.top;
            v.yMovement = getYmovement(v.element);

            return v;
        }

        /**
        * Fix section order after continuousVertical changes have been animated
        */
        function continuousVerticalFixSectionOrder (v) {
            // If continuousVertical is in effect (and autoScrolling would also be in effect then),
            // finish moving the elements around so the direct navigation will function more simply
            if (!v.wrapAroundElements || !v.wrapAroundElements.length) {
                return;
            }

            if (v.isMovementUp) {
                $(SECTION_FIRST_SEL).before(v.wrapAroundElements);
            }
            else {
                $(SECTION_LAST_SEL).after(v.wrapAroundElements);
            }

            silentScroll($(SECTION_ACTIVE_SEL).position().top);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();
        }


        /**
        * Actions to do once the section is loaded
        */
        function afterSectionLoads (v){
            continuousVerticalFixSectionOrder(v);

            v.element.find('.fp-scrollable').mouseover();

            //callback (afterLoad) if the site is not just resizing and readjusting the slides
            $.isFunction(options.afterLoad) && !v.localIsResizing && options.afterLoad.call(v.element, v.anchorLink, (v.sectionIndex + 1));

            canScroll = true;

            $.isFunction(v.callback) && v.callback.call(this);
        }

        /**
        * Scrolls to the anchor in the URL when loading the site
        */
        function scrollToAnchor(){
            //getting the anchor link in the URL and deleting the `#`
            var value =  window.location.hash.replace('#', '').split('/');
            var section = value[0];
            var slide = value[1];

            if(section){  //if theres any #
                scrollPageAndSlide(section, slide);
            }
        }

        //detecting any change on the URL to scroll to the given anchor link
        //(a way to detect back history button as we play with the hashes on the URL)
        $window.on('hashchange', hashChangeHandler);

        function hashChangeHandler(){
            if(!isScrolling){
                var value =  window.location.hash.replace('#', '').split('/');
                var section = value[0];
                var slide = value[1];

                if(section.length){
                    //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
                    var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');
                    var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slide === 'undefined' && !slideMoving);

                    /*in order to call scrollpage() only once for each destination at a time
                    It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
                    event is fired on every scroll too.*/
                    if ((section && section !== lastScrolledDestiny) && !isFirstSlideMove || isFirstScrollMove || (!slideMoving && lastScrolledSlide != slide ))  {
                        scrollPageAndSlide(section, slide);
                    }
                }
            }
        }

        /**
         * Sliding with arrow keys, both, vertical and horizontal
         */
        $document.keydown(keydownHandler);

        //to prevent scrolling while zooming
        $document.keyup(function(e){
            controlPressed = e.ctrlKey;
        });

        var keydownId;
        function keydownHandler(e) {
            clearTimeout(keydownId);
            controlPressed = e.ctrlKey;

            var activeElement = $(document.activeElement);

            if(!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select') &&
                options.keyboardScrolling && options.autoScrolling){
                var keyCode = e.which;

                //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
                var keyControls = [40, 38, 32, 33, 34];
                if($.inArray(keyCode, keyControls) > -1){
                    e.preventDefault();
                }

                keydownId = setTimeout(function(){
                    onkeydown(e);
                },150);
            }
        }

        /**
        * Keydown event
        */
        function onkeydown(e){
            var shiftPressed = e.shiftKey;
            switch (e.which) {
                //up
                case 38:
                case 33:
                    FP.moveSectionUp();
                    break;

                //down
                case 32: //spacebar
                    if(shiftPressed){
                        FP.moveSectionUp();
                        break;
                    }
                case 40:
                case 34:
                    FP.moveSectionDown();
                    break;

                //Home
                case 36:
                    FP.moveTo(1);
                    break;

                //End
                case 35:
                    FP.moveTo( $(SECTION_SEL).length );
                    break;

                //left
                case 37:
                    FP.moveSlideLeft();
                    break;

                //right
                case 39:
                    FP.moveSlideRight();
                    break;

                default:
                    return; // exit this handler for other keys
            }
        }

        //binding the mousemove when the mouse's middle button is released
        container.mousedown(function(e){
            //middle button
            if (e.which == 2){
                oldPageY = e.pageY;
                container.on('mousemove', mouseMoveHandler);
            }
        });

        //unbinding the mousemove when the mouse's middle button is released
        container.mouseup(function(e){
            //middle button
            if (e.which == 2){
                container.off('mousemove');
            }
        });

        /**
        * Detecting the direction of the mouse movement.
        * Used only for the middle button of the mouse.
        */
        var oldPageY = 0;
        function mouseMoveHandler(e){
            // moving up
            if(canScroll){
                if (e.pageY < oldPageY){
                    FP.moveSectionUp();

                // moving downw
                }else if(e.pageY > oldPageY){
                    FP.moveSectionDown();
                }
            }
            oldPageY = e.pageY;
        }

        /**
        * Scrolls to the section when clicking the navigation bullet
        */
        $document.on('click touchstart', SECTION_NAV_SEL + ' a', function(e){
            e.preventDefault();
            var index = $(this).parent().index();
            scrollPage($(SECTION_SEL).eq(index));
        });

        /**
        * Scrolls the slider to the given slide destination for the given section
        */
        $document.on('click touchstart', SLIDES_NAV_LINK_SEL, function(e){
            e.preventDefault();
            var slides = $(this).closest(SECTION_SEL).find(SLIDES_WRAPPER_SEL);
            var destiny = slides.find(SLIDE_SEL).eq($(this).closest('li').index());

            landscapeScroll(slides, destiny);
        });

        /**
        * Applying normalScroll elements.
        * Ignoring the scrolls over the specified selectors.
        */
        if(options.normalScrollElements){
            $document.on('mouseenter', options.normalScrollElements, function () {
                FP.setMouseWheelScrolling(false);
            });

            $document.on('mouseleave', options.normalScrollElements, function(){
                FP.setMouseWheelScrolling(true);
            });
        }

        /**
         * Scrolling horizontally when clicking on the slider controls.
         */
        $(SECTION_SEL).on('click touchstart', SLIDES_ARROW_SEL, function() {
            if ($(this).hasClass(SLIDES_PREV)) {
                if(isScrollAllowed.left){
                    FP.moveSlideLeft();
                }
            } else {
                if(isScrollAllowed.right){
                    FP.moveSlideRight();
                }
            }
        });

        /**
        * Scrolls horizontal sliders.
        */
        function landscapeScroll(slides, destiny){
            var destinyPos = destiny.position();
            var slideIndex = destiny.index();
            var section = slides.closest(SECTION_SEL);
            var sectionIndex = section.index(SECTION_SEL);
            var anchorLink = section.data('anchor');
            var slidesNav = section.find(SLIDES_NAV_SEL);
            var slideAnchor = getSlideAnchor(destiny);

            //caching the value of isResizing at the momment the function is called
            //because it will be checked later inside a setTimeout and the value might change
            var localIsResizing = isResizing;

            if(options.onSlideLeave){
                var prevSlide = section.find(SLIDE_ACTIVE_SEL);
                var prevSlideIndex = prevSlide.index();
                var xMovement = getXmovement(prevSlideIndex, slideIndex);

                //if the site is not just resizing and readjusting the slides
                if(!localIsResizing && xMovement!=='none'){
                    $.isFunction( options.onSlideLeave ) && options.onSlideLeave.call( prevSlide, anchorLink, (sectionIndex + 1), prevSlideIndex, xMovement);
                }
            }

            destiny.addClass(ACTIVE).siblings().removeClass(ACTIVE);

            if(!options.loopHorizontal && options.controlArrows){
                //hidding it for the fist slide, showing for the rest
                section.find(SLIDES_ARROW_PREV_SEL).toggle(slideIndex!==0);

                //hidding it for the last slide, showing for the rest
                section.find(SLIDES_ARROW_NEXT_SEL).toggle(!destiny.is(':last-child'));
            }

            //only changing the URL if the slides are in the current section (not for resize re-adjusting)
            if(section.hasClass(ACTIVE)){
                setState(slideIndex, slideAnchor, anchorLink, sectionIndex);
            }

            var afterSlideLoads = function(){
                //if the site is not just resizing and readjusting the slides
                if(!localIsResizing){
                    $.isFunction( options.afterSlideLoad ) && options.afterSlideLoad.call( destiny, anchorLink, (sectionIndex + 1), slideAnchor, slideIndex);
                }
                //letting them slide again
                slideMoving = false;
            };

            if(options.css3){
                var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';

                addAnimation(slides.find(SLIDES_CONTAINER_SEL), options.scrollingSpeed>0).css(getTransforms(translate3d));

                setTimeout(function(){
                    afterSlideLoads();
                }, options.scrollingSpeed, options.easing);
            }else{
                slides.animate({
                    scrollLeft : Math.round(destinyPos.left)
                }, options.scrollingSpeed, options.easing, function() {

                    afterSlideLoads();
                });
            }

            slidesNav.find(ACTIVE_SEL).removeClass(ACTIVE);
            slidesNav.find('li').eq(slideIndex).find('a').addClass(ACTIVE);
        }

        //when resizing the site, we adjust the heights of the sections, slimScroll...
        $window.resize(resizeHandler);

        var previousHeight = windowsHeight;
        var resizeId;
        function resizeHandler(){
            //checking if it needs to get responsive
            responsive();

            // rebuild immediately on touch devices
            if (isTouchDevice) {
                var activeElement = $(document.activeElement);

                //if the keyboard is NOT visible
                if (!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select')) {
                    var currentHeight = $window.height();

                    //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
                    if( Math.abs(currentHeight - previousHeight) > (20 * Math.max(previousHeight, currentHeight) / 100) ){
                        FP.reBuild(true);
                        previousHeight = currentHeight;
                    }
                }
            }else{
                //in order to call the functions only when the resize is finished
                //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
                clearTimeout(resizeId);

                resizeId = setTimeout(function(){
                    FP.reBuild(true);
                }, 350);
            }
        }

        /**
        * Checks if the site needs to get responsive and disables autoScrolling if so.
        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
        */
        function responsive(){
            if(options.responsive){
                var isResponsive = container.hasClass(RESPONSIVE);
                if ($window.width() < options.responsive ){
                    if(!isResponsive){
                        FP.setAutoScrolling(false, 'internal');
                        FP.setFitToSection(false, 'internal');
                        $(SECTION_NAV_SEL).hide();
                        container.addClass(RESPONSIVE);
                    }
                }else if(isResponsive){
                    FP.setAutoScrolling(originals.autoScrolling, 'internal');
                    FP.setFitToSection(originals.autoScrolling, 'internal');
                    $(SECTION_NAV_SEL).show();
                    container.removeClass(RESPONSIVE);
                }
            }
        }

        /**
        * Adds transition animations for the given element
        */
        function addAnimation(element){
            var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;

            element.removeClass(NO_TRANSITION);
            return element.css({
                '-webkit-transition': transition,
                'transition': transition
            });
        }

        /**
        * Remove transition animations for the given element
        */
        function removeAnimation(element){
            return element.addClass(NO_TRANSITION);
        }

        /**
         * Resizing of the font size depending on the window size as well as some of the images on the site.
         */
        function resizeMe(displayHeight, displayWidth) {
            //Standard dimensions, for which the body font size is correct
            var preferredHeight = 825;
            var preferredWidth = 900;

            if (displayHeight < preferredHeight || displayWidth < preferredWidth) {
                var heightPercentage = (displayHeight * 100) / preferredHeight;
                var widthPercentage = (displayWidth * 100) / preferredWidth;
                var percentage = Math.min(heightPercentage, widthPercentage);
                var newFontSize = percentage.toFixed(2);

                $body.css('font-size', newFontSize + '%');
            } else {
                $body.css('font-size', '100%');
            }
        }

        /**
         * Activating the website navigation dots according to the given slide name.
         */
        function activateNavDots(name, sectionIndex){
            if(options.navigation){
                $(SECTION_NAV_SEL).find(ACTIVE_SEL).removeClass(ACTIVE);
                if(name){
                    $(SECTION_NAV_SEL).find('a[href="#' + name + '"]').addClass(ACTIVE);
                }else{
                    $(SECTION_NAV_SEL).find('li').eq(sectionIndex).find('a').addClass(ACTIVE);
                }
            }
        }

        /**
         * Activating the website main menu elements according to the given slide name.
         */
        function activateMenuElement(name){
            if(options.menu){
                $(options.menu).find(ACTIVE_SEL).removeClass(ACTIVE);
                $(options.menu).find('[data-menuanchor="'+name+'"]').addClass(ACTIVE);
            }
        }

        function activateMenuAndNav(anchor, index){
            activateMenuElement(anchor);
            activateNavDots(anchor, index);
        }

        /**
        * Return a boolean depending on whether the scrollable element is at the end or at the start of the scrolling
        * depending on the given type.
        */
        function isScrolled(type, scrollable){
            if(type === 'top'){
                return !scrollable.scrollTop();
            }else if(type === 'bottom'){
                return scrollable.scrollTop() + 1 + scrollable.innerHeight() >= scrollable[0].scrollHeight;
            }
        }

        /**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from the current section.
        */
        function getYmovement(destiny){
            var fromIndex = $(SECTION_ACTIVE_SEL).index(SECTION_SEL);
            var toIndex = destiny.index(SECTION_SEL);
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'up';
            }
            return 'down';
        }

        /**
        * Retuns `right` or `left` depending on the scrolling movement to reach its destination
        * from the current slide.
        */
        function getXmovement(fromIndex, toIndex){
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'left';
            }
            return 'right';
        }


        function createSlimScrolling(element){
            //needed to make `scrollHeight` work under Opera 12
            element.css('overflow', 'hidden');

            //in case element is a slide
            var section = element.closest(SECTION_SEL);
            var scrollable = element.find(SCROLLABLE_SEL);
            var contentHeight;

            //if there was scroll, the contentHeight will be the one in the scrollable section
            if(scrollable.length){
                contentHeight = scrollable.get(0).scrollHeight;
            }else{
                contentHeight = element.get(0).scrollHeight;
                if(options.verticalCentered){
                    contentHeight = element.find(TABLE_CELL_SEL).get(0).scrollHeight;
                }
            }

            var scrollHeight = windowsHeight - parseInt(section.css('padding-bottom')) - parseInt(section.css('padding-top'));

            //needs scroll?
            if ( contentHeight > scrollHeight) {
                //was there already an scroll ? Updating it
                if(scrollable.length){
                    scrollable.css('height', scrollHeight + 'px').parent().css('height', scrollHeight + 'px');
                }
                //creating the scrolling
                else{
                    if(options.verticalCentered){
                        element.find(TABLE_CELL_SEL).wrapInner('<div class="' + SCROLLABLE + '" />');
                    }else{
                        element.wrapInner('<div class="' + SCROLLABLE + '" />');
                    }

                    element.find(SCROLLABLE_SEL).slimScroll({
                        allowPageScroll: true,
                        height: scrollHeight + 'px',
                        size: '10px',
                        alwaysVisible: true
                    });
                }
            }

            //removing the scrolling when it is not necessary anymore
            else{
                removeSlimScroll(element);
            }

            //undo
            element.css('overflow', '');
        }

        function removeSlimScroll(element){
            element.find(SCROLLABLE_SEL).children().first().unwrap().unwrap();
            element.find(SLIMSCROLL_BAR_SEL).remove();
            element.find(SLIMSCROLL_RAIL_SEL).remove();
        }

        function addTableClass(element){
            element.addClass(TABLE).wrapInner('<div class="' + TABLE_CELL + '" style="height:' + getTableHeight(element) + 'px;" />');
        }

        function getTableHeight(element){
            var sectionHeight = windowsHeight;

            if(options.paddingTop || options.paddingBottom){
                var section = element;
                if(!section.hasClass(SECTION)){
                    section = element.closest(SECTION_SEL);
                }

                var paddings = parseInt(section.css('padding-top')) + parseInt(section.css('padding-bottom'));
                sectionHeight = (windowsHeight - paddings);
            }

            return sectionHeight;
        }

        /**
        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
        */
        function transformContainer(translate3d, animated){
            if(animated){
                addAnimation(container);
            }else{
                removeAnimation(container);
            }

            container.css(getTransforms(translate3d));

            //syncronously removing the class after the animation has been applied.
            setTimeout(function(){
                container.removeClass(NO_TRANSITION);
            },10);
        }

        /**
        * Gets a section by its anchor / index
        */
        function getSectionByAnchor(sectionAnchor){
            //section
            var section = $(SECTION_SEL + '[data-anchor="'+sectionAnchor+'"]');
            if(!section.length){
                section = $(SECTION_SEL).eq( (sectionAnchor -1) );
            }

            return section;
        }

        /**
        * Gets a slide inside a given section by its anchor / index
        */
        function getSlideByAnchor(slideAnchor, section){
            var slides = section.find(SLIDES_WRAPPER_SEL);
            var slide =  slides.find(SLIDE_SEL + '[data-anchor="'+slideAnchor+'"]');

            if(!slide.length){
                slide = slides.find(SLIDE_SEL).eq(slideAnchor);
            }

            return slide;
        }

        /**
        * Scrolls to the given section and slide anchors
        */
        function scrollPageAndSlide(destiny, slide){
            var section = getSectionByAnchor(destiny);

            //default slide
            if (typeof slide === 'undefined') {
                slide = 0;
            }

            //we need to scroll to the section and then to the slide
            if (destiny !== lastScrolledDestiny && !section.hasClass(ACTIVE)){
                scrollPage(section, function(){
                    scrollSlider(section, slide);
                });
            }
            //if we were already in the section
            else{
                scrollSlider(section, slide);
            }
        }

        /**
        * Scrolls the slider to the given slide destination for the given section
        */
        function scrollSlider(section, slideAnchor){
            if(typeof slideAnchor !== 'undefined'){
                var slides = section.find(SLIDES_WRAPPER_SEL);
                var destiny =  getSlideByAnchor(slideAnchor, section);

                if(destiny.length){
                    landscapeScroll(slides, destiny);
                }
            }
        }

        /**
        * Creates a landscape navigation bar with dots for horizontal sliders.
        */
        function addSlidesNavigation(section, numSlides){
            section.append('<div class="' + SLIDES_NAV + '"><ul></ul></div>');
            var nav = section.find(SLIDES_NAV_SEL);

            //top or bottom
            nav.addClass(options.slidesNavPosition);

            for(var i=0; i< numSlides; i++){
                nav.find('ul').append('<li><a href="#"><span></span></a></li>');
            }

            //centering it
            nav.css('margin-left', '-' + (nav.width()/2) + 'px');

            nav.find('li').first().find('a').addClass(ACTIVE);
        }


        /**
        * Sets the state of the website depending on the active section/slide.
        * It changes the URL hash when needed and updates the body class.
        */
        function setState(slideIndex, slideAnchor, anchorLink, sectionIndex){
            var sectionHash = '';

            if(options.anchors.length){

                //isn't it the first slide?
                if(slideIndex){
                    if(typeof anchorLink !== 'undefined'){
                        sectionHash = anchorLink;
                    }

                    //slide without anchor link? We take the index instead.
                    if(typeof slideAnchor === 'undefined'){
                        slideAnchor = slideIndex;
                    }

                    lastScrolledSlide = slideAnchor;
                    setUrlHash(sectionHash + '/' + slideAnchor);

                //first slide won't have slide anchor, just the section one
                }else if(typeof slideIndex !== 'undefined'){
                    lastScrolledSlide = slideAnchor;
                    setUrlHash(anchorLink);
                }

                //section without slides
                else{
                    setUrlHash(anchorLink);
                }
            }

            setBodyClass();
        }

        /**
        * Sets the URL hash.
        */
        function setUrlHash(url){
            if(options.recordHistory){
                location.hash = url;
            }else{
                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
                if(isTouchDevice || isTouch){
                    history.replaceState(undefined, undefined, '#' + url);
                }else{
                    var baseUrl = window.location.href.split('#')[0];
                    window.location.replace( baseUrl + '#' + url );
                }
            }
        }

        /**
        * Gets the anchor for the given slide. Its index will be used if there's none.
        */
        function getSlideAnchor(slide){
            var slideAnchor = slide.data('anchor');
            var slideIndex = slide.index();

            //Slide without anchor link? We take the index instead.
            if(typeof slideAnchor === 'undefined'){
                slideAnchor = slideIndex;
            }

            return slideAnchor;
        }

        /**
        * Sets a class for the body of the page depending on the active section / slide
        */
        function setBodyClass(){
            var section = $(SECTION_ACTIVE_SEL);
            var slide = section.find(SLIDE_ACTIVE_SEL);

            var sectionAnchor = section.data('anchor');
            var slideAnchor = getSlideAnchor(slide);

            var sectionIndex = section.index(SECTION_SEL);

            var text = String(sectionIndex);

            if(options.anchors.length){
                text = sectionAnchor;
            }

            if(slide.length){
                text = text + '-' + slideAnchor;
            }

            //changing slash for dash to make it a valid CSS style
            text = text.replace('/', '-').replace('#','');

            //removing previous anchor classes
            var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
            $body[0].className = $body[0].className.replace(classRe, '');

            //adding the current anchor
            $body.addClass(VIEWING_PREFIX + '-' + text);
        }

        /**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        */
        function support3d() {
            var el = document.createElement('p'),
                has3d,
                transforms = {
                    'webkitTransform':'-webkit-transform',
                    'OTransform':'-o-transform',
                    'msTransform':'-ms-transform',
                    'MozTransform':'-moz-transform',
                    'transform':'transform'
                };

            // Add it to the body to get the computed style.
            document.body.insertBefore(el, null);

            for (var t in transforms) {
                if (el.style[t] !== undefined) {
                    el.style[t] = 'translate3d(1px,1px,1px)';
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }

            document.body.removeChild(el);

            return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
        }

        /**
        * Removes the auto scrolling action fired by the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
        */
        function removeMouseWheelHandler(){
            if (document.addEventListener) {
                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
            } else {
                document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
        * Adds the auto scrolling action for the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements will scroll through sections
        */
        function addMouseWheelHandler(){
            if (document.addEventListener) {
                document.addEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.addEventListener('wheel', MouseWheelHandler, false); //Firefox
            } else {
                document.attachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
        * Adds the possibility to auto scroll through sections on touch devices.
        */
        function addTouchHandler(){
            if(isTouchDevice || isTouch){
                //Microsoft pointers
                var MSPointer = getMSPointer();

                $(WRAPPER_SEL).off('touchstart ' +  MSPointer.down).on('touchstart ' + MSPointer.down, touchStartHandler);
                $(WRAPPER_SEL).off('touchmove ' + MSPointer.move).on('touchmove ' + MSPointer.move, touchMoveHandler);
            }
        }

        /**
        * Removes the auto scrolling for touch devices.
        */
        function removeTouchHandler(){
            if(isTouchDevice || isTouch){
                //Microsoft pointers
                var MSPointer = getMSPointer();

                $(WRAPPER_SEL).off('touchstart ' + MSPointer.down);
                $(WRAPPER_SEL).off('touchmove ' + MSPointer.move);
            }
        }

        /*
        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
        */
        function getMSPointer(){
            var pointer;

            //IE >= 11 & rest of browsers
            if(window.PointerEvent){
                pointer = { down: 'pointerdown', move: 'pointermove'};
            }

            //IE < 11
            else{
                pointer = { down: 'MSPointerDown', move: 'MSPointerMove'};
            }

            return pointer;
        }

        /**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
        */
        function getEventsPage(e){
            var events = [];

            events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
            events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);

            //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
            if(isTouch && isReallyTouch(e)){
                events.y = e.touches[0].pageY;
                events.x = e.touches[0].pageX;
            }

            return events;
        }

        /**
        * Slides silently (with no animation) the active slider to the given slide.
        */
        function silentLandscapeScroll(activeSlide, noCallbacks){
            FP.setScrollingSpeed (0, 'internal');

            if(typeof noCallbacks !== 'undefined'){
                //preventing firing callbacks afterSlideLoad etc.
                isResizing = true;
            }

            landscapeScroll(activeSlide.closest(SLIDES_WRAPPER_SEL), activeSlide);

            if(typeof noCallbacks !== 'undefined'){
                isResizing = false;
            }

            FP.setScrollingSpeed(originals.scrollingSpeed, 'internal');
        }

        /**
        * Scrolls silently (with no animation) the page to the given Y position.
        */
        function silentScroll(top){
            if(options.scrollBar){
                container.scrollTop(top);
            }
            else if (options.css3) {
                var translate3d = 'translate3d(0px, -' + top + 'px, 0px)';
                transformContainer(translate3d, false);
            }
            else {
                container.css('top', -top);
            }
        }

        /**
        * Returns the cross-browser transform string.
        */
        function getTransforms(translate3d){
            return {
                '-webkit-transform': translate3d,
                '-moz-transform': translate3d,
                '-ms-transform':translate3d,
                'transform': translate3d
            };
        }

        /**
        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
        */
        function setIsScrollable(value, direction){
            switch (direction){
                case 'up': isScrollAllowed.up = value; break;
                case 'down': isScrollAllowed.down = value; break;
                case 'left': isScrollAllowed.left = value; break;
                case 'right': isScrollAllowed.right = value; break;
                case 'all': FP.setAllowScrolling(value);
            }
        }

        /*
        * Destroys fullpage.js plugin events and optinally its html markup and styles
        */
        FP.destroy = function(all){
            FP.setAutoScrolling(false, 'internal');
            FP.setAllowScrolling(false);
            FP.setKeyboardScrolling(false);
            container.addClass(DESTROYED);

            $window
                .off('scroll', scrollHandler)
                .off('hashchange', hashChangeHandler)
                .off('resize', resizeHandler);

            $document
                .off('click', SECTION_NAV_SEL + ' a')
                .off('mouseenter', SECTION_NAV_SEL + ' li')
                .off('mouseleave', SECTION_NAV_SEL + ' li')
                .off('click', SLIDES_NAV_LINK_SEL)
                .off('mouseover', options.normalScrollElements)
                .off('mouseout', options.normalScrollElements);

            $(SECTION_SEL)
                .off('click', SLIDES_ARROW_SEL);

            //lets make a mess!
            if(all){
                destroyStructure();
            }
        };

        /*
        * Removes inline styles added by fullpage.js
        */
        function destroyStructure(){
            //reseting the `top` or `translate` properties to 0
            silentScroll(0);

            $(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL +  ', ' + SLIDES_ARROW_SEL).remove();

            //removing inline styles
            $(SECTION_SEL).css( {
                'height': '',
                'background-color' : '',
                'padding': ''
            });

            $(SLIDE_SEL).css( {
                'width': ''
            });

            container.css({
                'height': '',
                'position': '',
                '-ms-touch-action': '',
                'touch-action': ''
            });

            //removing added classes
            $(SECTION_SEL + ', ' + SLIDE_SEL).each(function(){
                removeSlimScroll($(this));
                $(this).removeClass(TABLE + ' ' + ACTIVE);
            });

            removeAnimation(container);

            //Unwrapping content
            container.find(TABLE_CELL_SEL + ', ' + SLIDES_CONTAINER_SEL + ', ' + SLIDES_WRAPPER_SEL).each(function(){
                //unwrap not being use in case there's no child element inside and its just text
                $(this).replaceWith(this.childNodes);
            });

            //scrolling the page to the top with no animation
            $htmlBody.scrollTop(0);
        }

        /*
        * Sets the state for a variable with multiple states (original, and temporal)
        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
        * This function is used to keep track of both states, the original and the temporal one.
        * If type is not 'internal', then we assume the user is globally changing the variable.
        */
        function setVariableState(variable, value, type){
            options[variable] = value;
            if(type !== 'internal'){
                originals[variable] = value;
            }
        }

        /**
        * Displays warnings
        */
        function displayWarnings(){
            // Disable mutually exclusive settings
            if (options.continuousVertical &&
                (options.loopTop || options.loopBottom)) {
                options.continuousVertical = false;
                showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }
            if(options.continuousVertical && options.scrollBar){
                options.continuousVertical = false;
                showError('warn', 'Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            //anchors can not have the same value as any element ID or NAME
            $.each(options.anchors, function(index, name){
                if($('#' + name).length || $('[name="'+name+'"]').length ){
                    showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
                }
            });
        }

        /**
        * Shows a message in the console of the given type.
        */
        function showError(type, text){
            console && console[type] && console[type]('fullPage: ' + text);
        }
    };
});
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.2 (modified for fullpage.js)
 *
 */

(function($) {

  jQuery.fn.extend({
    slimScroll: function(options) {

      var defaults = {

        // width in pixels of the visible scroll area
        width : 'auto',

        // height in pixels of the visible scroll area
        height : '250px',

        // width in pixels of the scrollbar and rail
        size : '7px',

        // scrollbar color, accepts any hex/color value
        color: '#000',

        // scrollbar position - left/right
        position : 'right',

        // distance in pixels between the side edge and the scrollbar
        distance : '1px',

        // default scroll position on load - top / bottom / $('selector')
        start : 'top',

        // sets scrollbar opacity
        opacity : .4,

        // enables always-on mode for the scrollbar
        alwaysVisible : false,

        // check if we should hide the scrollbar when user is hovering over
        disableFadeOut : false,

        // sets visibility of the rail
        railVisible : false,

        // sets rail color
        railColor : '#333',

        // sets rail opacity
        railOpacity : .2,

        // whether  we should use jQuery UI Draggable to enable bar dragging
        railDraggable : true,

        // defautlt CSS class of the slimscroll rail
        railClass : 'slimScrollRail',

        // defautlt CSS class of the slimscroll bar
        barClass : 'slimScrollBar',

        // defautlt CSS class of the slimscroll wrapper
        wrapperClass : 'slimScrollDiv',

        // check if mousewheel should scroll the window if we reach top/bottom
        allowPageScroll : false,

        // scroll amount applied to each mouse wheel step
        wheelStep : 20,

        // scroll amount applied when user is using gestures
        touchScrollStep : 200,

        // sets border radius
        borderRadius: '7px',

        // sets border radius of the rail
        railBorderRadius : '7px'
      };

      var o = $.extend(defaults, options);

      // do it for every element that matches selector
      this.each(function(){

      var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
        barHeight, percentScroll, lastScroll,
        divS = '<div></div>',
        minBarHeight = 30,
        releaseScroll = false;

        // used in event handlers and for better minification
        var me = $(this);

        // ensure we are not binding it again
        if (me.parent().hasClass(o.wrapperClass))
        {
            // start from last bar position
            var offset = me.scrollTop();

            // find bar and rail
            bar = me.parent().find('.' + o.barClass);
            rail = me.parent().find('.' + o.railClass);

            getBarHeight();

            // check if we should scroll existing instance
            if ($.isPlainObject(options))
            {
              // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
              if ( 'height' in options && options.height == 'auto' ) {
                me.parent().css('height', 'auto');
                me.css('height', 'auto');
                var height = me.parent().parent().height();
                me.parent().css('height', height);
                me.css('height', height);
              }

              if ('scrollTo' in options)
              {
                // jump to a static point
                offset = parseInt(o.scrollTo);
              }
              else if ('scrollBy' in options)
              {
                // jump by value pixels
                offset += parseInt(o.scrollBy);
              }
              else if ('destroy' in options)
              {
                // clear slimscroll mouse event listeners
                detachWheel();

                // remove slimscroll elements
                bar.remove();
                rail.remove();
                me.unwrap();
                return;
              }

              // scroll content by the given offset
              scrollContent(offset, false, true);
            }

            return;
        }

        // optionally set height to the parent's height
        o.height = (options.height == 'auto') ? me.parent().height() : options.height;

        // wrap content
        var wrapper = $(divS)
          .addClass(o.wrapperClass)
          .css({
            position: 'relative',
            overflow: 'hidden',
            width: o.width,
            height: o.height
          });

        // update style for the div
        me.css({
          overflow: 'hidden',
          width: o.width,
          height: o.height
        });

        // create scrollbar rail
        var rail = $(divS)
          .addClass(o.railClass)
          .css({
            width: o.size,
            height: '100%',
            position: 'absolute',
            top: 0,
            display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
            'border-radius': o.railBorderRadius,
            background: o.railColor,
            opacity: o.railOpacity,
            zIndex: 90
          });

        // create scrollbar
        var bar = $(divS)
          .addClass(o.barClass)
          .css({
            background: o.color,
            width: o.size,
            position: 'absolute',
            top: 0,
            opacity: o.opacity,
            display: o.alwaysVisible ? 'block' : 'none',
            'border-radius' : o.borderRadius,
            BorderRadius: o.borderRadius,
            MozBorderRadius: o.borderRadius,
            WebkitBorderRadius: o.borderRadius,
            zIndex: 99
          });

        // set position
        var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
        rail.css(posCss);
        bar.css(posCss);

        // wrap it
        me.wrap(wrapper);

        // append to parent div
        me.parent().append(bar);
        me.parent().append(rail);

        // make it draggable and no longer dependent on the jqueryUI
        if (o.railDraggable){
          bar.bind("mousedown", function(e) {
            var $doc = $(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;

            $doc.bind("mousemove.slimscroll", function(e){
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false);// scroll content
            });

            $doc.bind("mouseup.slimscroll", function(e) {
              isDragg = false;hideBar();
              $doc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function(e){
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        }

        // on rail over
        rail.hover(function(){
          showBar();
        }, function(){
          hideBar();
        });

        // on bar over
        bar.hover(function(){
          isOverBar = true;
        }, function(){
          isOverBar = false;
        });

        // show on parent mouseover
        me.hover(function(){
          isOverPanel = true;
          showBar();
          hideBar();
        }, function(){
          isOverPanel = false;
          hideBar();
        });

        // support for mobile
        me.bind('touchstart', function(e,b){
          if (e.originalEvent.touches.length)
          {
            // record where touch started
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        me.bind('touchmove', function(e){
          // prevent scrolling the page if necessary
          if(!releaseScroll)
          {
  		      e.originalEvent.preventDefault();
		      }
          if (e.originalEvent.touches.length)
          {
            // see how far user swiped
            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
            // scroll content
            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        // set up initial height
        getBarHeight();

        // check start position
        if (o.start === 'bottom')
        {
          // scroll content to bottom
          bar.css({ top: me.outerHeight() - bar.outerHeight() });
          scrollContent(0, true);
        }
        else if (o.start !== 'top')
        {
          // assume jQuery selector
          scrollContent($(o.start).position().top, null, true);

          // make sure bar stays hidden
          if (!o.alwaysVisible) { bar.hide(); }
        }

        // attach scroll events
        attachWheel();

        function _onWheel(e)
        {
          // use mouse wheel only when mouse is over
          if (!isOverPanel) { return; }

          var e = e || window.event;

          var delta = 0;
          if (e.wheelDelta) { delta = -e.wheelDelta/120; }
          if (e.detail) { delta = e.detail / 3; }

          var target = e.target || e.srcTarget || e.srcElement;
          if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          }

          // stop window scroll
          if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
          if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump)
        {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();

          if (isWheel)
          {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

            // move bar, make sure it doesn't go out
            delta = Math.min(Math.max(delta, 0), maxTop);

            // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

            // scroll the scrollbar
            bar.css({ top: delta + 'px' });
          }

          // calculate actual scroll amount
          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump)
          {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({ top: offsetTop + 'px' });
          }

          // scroll content
          me.scrollTop(delta);

          // fire scrolling event
          me.trigger('slimscrolling', ~~delta);

          // ensure bar is visible
          showBar();

          // trigger hide when scroll is stopped
          hideBar();
        }

        function attachWheel()
        {
          if (window.addEventListener)
          {
            this.addEventListener('DOMMouseScroll', _onWheel, false );
            this.addEventListener('mousewheel', _onWheel, false );
          }
          else
          {
            document.attachEvent("onmousewheel", _onWheel)
          }
        }

        function detachWheel()
        {
          if (window.removeEventListener)
          {
            this.removeEventListener('DOMMouseScroll', _onWheel);
            this.removeEventListener('mousewheel', _onWheel);
          }
          else
          {
            document.detachEvent('onmousewheel', _onWheel);
          }
        }

        function getBarHeight()
        {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
          bar.css({ height: barHeight + 'px' });

          // hide scrollbar if content is not long enough
          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({ display: display });
        }

        function showBar()
        {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide);

          // when bar reached top or bottom
          if (percentScroll == ~~percentScroll)
          {
            //release wheel
            releaseScroll = o.allowPageScroll;

            // publish approporiate event
            if (lastScroll != percentScroll)
            {
                var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                me.trigger('slimscroll', msg);
            }
          }
          else
          {
            releaseScroll = false;
          }
          lastScroll = percentScroll;

          // show only when required
          if(barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }
          bar.stop(true,true).fadeIn('fast');
          if (o.railVisible) { rail.stop(true,true).fadeIn('fast'); }
        }

        function hideBar()
        {
          // only hide when options allow it
          if (!o.alwaysVisible)
          {
            queueHide = setTimeout(function(){
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg)
              {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }

      });

      // maintain chainability
      return this;
    }
  });

  jQuery.fn.extend({
    slimscroll: jQuery.fn.slimScroll
  });

})(jQuery);
(function() {


}).call(this);
