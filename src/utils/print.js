// 打印类属性、方法定义
/* eslint-disable */
const Print = function (dom, options) {
	console.log(dom);
	if (!(this instanceof Print)) return new Print(dom, options);

	this.options = this.extend({
		'noPrint': '.no-print'
	}, options);

	if ((typeof dom) === "string") {
		try {
			this.dom = document.querySelector(dom);
		} catch {
			var createDom = document.createElement("div")
			createDom.innerHTML = dom
			this.dom = createDom;
		};
	} else {
		this.isDOM(dom)
		this.dom = this.isDOM(dom) ? dom : dom.$el;
	}

	this.init();
};
Print.prototype = {
	init: function () {
		var content = this.getStyle() + this.getHtml();
		this.writeIframe(content);
	},
	extend: function (obj, obj2) {
		for (var k in obj2) {
			obj[k] = obj2[k];
		}
		return obj;
	},

	getStyle: function () {
		var str = "",
			styles = document.querySelectorAll('style,link');
		for (var i = 0; i < styles.length; i++) {
			str += styles[i].outerHTML;
		}
		str += "<style>" + (this.options.noPrint ? this.options.noPrint : '.no-print') +
			"{display:none;}</style>";
		str += "<style>html,body{background-color:#fff;}</style>";
		return str;
	},

	getHtml: function () {
		var inputs = document.querySelectorAll('input');
		var textareas = document.querySelectorAll('textarea');
		var selects = document.querySelectorAll('select');

		for (var k = 0; k < inputs.length; k++) {
			if (inputs[k].type == "checkbox" || inputs[k].type == "radio") {
				if (inputs[k].checked == true) {
					inputs[k].setAttribute('checked', "checked")
				} else {
					inputs[k].removeAttribute('checked')
				}
			} else if (inputs[k].type == "text") {
				inputs[k].setAttribute('value', inputs[k].value)
			} else {
				inputs[k].setAttribute('value', inputs[k].value)
			}
		}

		for (var k2 = 0; k2 < textareas.length; k2++) {
			if (textareas[k2].type == 'textarea') {
				textareas[k2].innerHTML = textareas[k2].value
			}
		}

		for (var k3 = 0; k3 < selects.length; k3++) {
			if (selects[k3].type == 'select-one') {
				var child = selects[k3].children;
				for (var i in child) {
					if (child[i].tagName == 'OPTION') {
						if (child[i].selected == true) {
							child[i].setAttribute('selected', "selected")
						} else {
							child[i].removeAttribute('selected')
						}
					}
				}
			}
		}

		return this.dom.outerHTML;
	},

	writeIframe: function (content) {
		var w, doc, iframe = document.createElement('iframe'),
			f = document.body.appendChild(iframe);
		iframe.id = "myIframe";
		//iframe.style = "position:absolute;width:0;height:0;top:-10px;left:-10px;";
		iframe.setAttribute('style', 'position:absolute;width:0;height:0;top:-10px;left:-10px;');
		w = f.contentWindow || f.contentDocument;
		doc = f.contentDocument || f.contentWindow.document;
		doc.open();
		doc.write(content);
		doc.close();
		var _this = this
		iframe.onload = function () {
			_this.toPrint(w);
			setTimeout(function () {
				document.body.removeChild(iframe)
			}, 100)
		}
	},

	toPrint: function (frameWindow) {
		try {
			setTimeout(function () {
				frameWindow.focus();
				try {
					if (!frameWindow.document.execCommand('print', false, null)) {
						frameWindow.print();
					}
				} catch (e) {
					frameWindow.print();
				}
				frameWindow.close();
			}, 10);
		} catch (err) {
			console.log('err', err);
		}
	},
	isDOM: (typeof HTMLElement === 'object') ?
		function (obj) {
			return obj instanceof HTMLElement;
		} : function (obj) {
			return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
		}
};

export default Print


/**
 * 
这段代码是一个用于打印页面内容的JavaScript工具。让我来解释一下它的主要功能和结构：

1. **构造函数 Print**:
   - 这是一个构造函数，用于创建一个打印对象。它接受两个参数：`dom`（要打印的内容）和`options`（选项）。
   - 在构造函数中，它会检查是否使用了 `new` 关键字，如果没有则会自动创建一个新的实例，并设置默认选项。

2. **初始化方法 init**:
   - 在`Print`的原型对象中定义了`init`方法，用于初始化打印操作。
   - 它会获取页面样式和HTML内容，并将其写入一个隐藏的iframe中。

3. **扩展方法 extend**:
   - 这是一个用于合并对象的辅助函数，用于将一个对象中的属性和方法合并到另一个对象中。

4. **获取页面样式方法 getStyle**:
   - 这个方法用于获取页面中的样式表和外部链接的样式，并添加一些自定义的打印样式。

5. **获取HTML内容方法 getHtml**:
   - 这个方法用于获取页面中的HTML内容，并对其中的输入框、文本域和下拉框进行处理，以便在打印时能正确显示它们的值。

6. **写入iframe方法 writeIframe**:
   - 这个方法用于创建一个隐藏的iframe，并将内容写入其中，然后触发打印操作。

7. **执行打印方法 toPrint**:
   - 这个方法用于执行实际的打印操作，它会将内容显示在iframe中，并触发打印命令。

8. **辅助方法 isDOM**:
   - 这个方法用于检查一个对象是否是DOM元素。

最后，通过`export default Print`语句，将`Print`对象导出，以便其他模块可以引入并使用它。

总的来说，这段代码是一个用于在浏览器中打印页面内容的工具，它通过创建隐藏的iframe，并将页面内容写入其中，然后触发打印命令来实现打印功能。

 */