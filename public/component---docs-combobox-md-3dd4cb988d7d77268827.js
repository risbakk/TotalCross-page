(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{ETIh:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return r})),a.d(e,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("FlsD"),a("q1tI");var n=a("7ljp"),o=a("hhGP");a("qKvR");function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/combobox.md"}});var i={_frontmatter:r},l=o.a;function c(t){var e=t.components,o=function(t,e){if(null==t)return{};var a,n,o={},b=Object.keys(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,["components"]);return Object(n.b)(l,b({},i,o,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"combobox"},"ComboBox"),Object(n.b)("h3",{id:"overview"},"Overview"),Object(n.b)("p",null,"It is a compressed checkbox that, when clicked, expands, allowing the user to choose an item from several possible options"),Object(n.b)("p",null,Object(n.b)("img",{alt:"combobox",src:a("l4AO")})),Object(n.b)("p",null,'{% hint style="info" %}\nThis sample code is only from the ComboBox, to see the complete sample, including the ListBox, go to ',Object(n.b)("a",b({parentName:"p"},{href:"https://github.com/TotalCross/TCSample/blob/master/src/main/java/totalcross/sample/components/ui/ComboListSample.java"}),"github"),".\n{% endhint %}"),Object(n.b)("h3",{id:"source-code"},"Source Code"),Object(n.b)("p",null,'{% code title="ComboBoxSample.java" %}'),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{className:"language-java"}),'import totalcross.sys.Settings;\nimport totalcross.ui.ComboBox;\nimport totalcross.ui.Label;\nimport totalcross.ui.ScrollContainer;\nimport totalcross.ui.dialog.MessageBox;\n\npublic class ComboBoxSample extends ScrollContainer {\n\n    private ComboBox simpleComboBox;\n    private ComboBox popupComboBox;\n\n    private int gap = (int) (Settings.screenDensity * 20);\n\n    @Override\n    public void initUI() {\n        try {\n            setScrollBars(false, true);\n            setBackForeColors(0xF7F7F7, 0x000000);\n\n            String[] items = { "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten" };\n\n            Label lbCombos = new Label("Combos", CENTER);\n            lbCombos.setFont(lbCombos.getFont().asBold());\n            add(lbCombos, LEFT + gap, AFTER + gap * 2, FILL - gap, PREFERRED);\n\n            ComboBox.usePopupMenu = false;\n            simpleComboBox = new ComboBox(items);\n            simpleComboBox.caption = "Numbers with Dropdown";\n            simpleComboBox.setForeColor(0x000000);\n\n            add(simpleComboBox, LEFT + gap, AFTER + gap / 2, FILL - gap, PREFERRED);\n\n            ComboBox.usePopupMenu = true;\n            popupComboBox = new ComboBox(items);\n            popupComboBox.caption = "Numbers with Popup";\n            popupComboBox.setForeColor(0x000000);\n\n            add(popupComboBox, LEFT + gap, AFTER + gap / 2, FILL - gap, PREFERRED);\n\n        } catch (Exception e) {\n            MessageBox.showException(e, true);\n        }\n    }\n}\n')),Object(n.b)("p",null,"{% endcode %}"),Object(n.b)("h3",{id:"attributes"},"Attributes"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",b({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",b({parentName:"tr"},{align:"left"}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"int")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"checkColor"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Changing the value of this variable will change the color of the RadioButton, that only appears in the Android environment, or the color of the arrow in other evironments where MaterialUI is enabled")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"Boolean")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"enableSearch"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"When the number of items in a ComboBox is greater than 10, an area above the popup list is intended for item searching. By default, the value of this attribute is true, set it to false if you do not want this item search area")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"String")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"popupTitle"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Changes the popup list title")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"Boolean")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"usePopMenu"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Assign true to this variable before instanciate a new Combobox to show items in a popup window menu.")))),Object(n.b)("h3",{id:"methods"},"Methods"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",b({parentName:"tr"},{align:"left"}),"Name"),Object(n.b)("th",b({parentName:"tr"},{align:"left"}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"Constructor")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"ComboBox","("," ",")"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Creates an empty ComboBox")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"Constructor")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"ComboBox","(","Object","["," ","]"," items",")"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Creates a ComboBox with the given items")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"Constructor")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"ComboBox","(","ListBox userListBox",")"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Creates a ComboBox with a popup list containing the given ListBox. You can create a class that extends a ListBox to draw the items by yourself and then pass it as parameter to this constructor, so the popup list will use your class instead")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"Constructor")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"ComboBox","(","ComboBoxDropDown userPopList",")"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Creates a ComboBox with the given PopList")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"void")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"add","(","Object item",")"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Adds an object to the Listbox")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"void")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"add","(","Object","["," ","]"," items",")"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Adds an array of Objects to the Listbox")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"void")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"clear","("," ",")"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Resets the selected index to the value of the defaultClearValueInt attribute; the default value is 0")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"Object")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"getItemAt","(","int i",")"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Get the object at the given index")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"Object","["," ","]")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"getItems","("," ",")"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Returns all items in this ComboBox")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"ListBox")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"getListBox","("," ",")"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Returns the ListBox used to show the items of the ComboBox")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"Object")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"getSelectedItem","("," ",")"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Returns the selected item of the ListBox")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"void")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"remove","(","int itemIndex",")"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Removes an object from the Listbox at the given index")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"void")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"remove","(","Object item",")"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Removes an object from the Listbox")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"void")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"removeAll","("," ",")"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Empties the items of the ComboBox")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"void")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"setItemAt","(","int i, Object s",")"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Sets the object at the given index")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"void")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"setSelectedIndex","(","int i",")"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Select the given index")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"void")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"setSelectedIndex","(","int i, boolean sendPressEvent",")"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Select the given index, and optionally sends a PRESSED event")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:"left"}),Object(n.b)("strong",{parentName:"td"},"void")),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"setSelectedItem","(","Object name, boolean sendPress",")"),Object(n.b)("td",b({parentName:"tr"},{align:"left"}),"Select an item, and optionally sends a PRESSED event")))),Object(n.b)("h3",{id:"references"},"References"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"See also our ",Object(n.b)("a",b({parentName:"li"},{href:"https://www.youtube.com/watch?v=UN67cUHuD7M"}),"quick tutorial video")," on creating Combo and List Box."),Object(n.b)("li",{parentName:"ul"},"See the ",Object(n.b)("a",b({parentName:"li"},{href:"https://rs.totalcross.com/doc/totalcross/ui/Button.html"}),"Java Docs")," for more information.")))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/combobox.md"}}),c.isMDXComponent=!0},l4AO:function(t,e,a){t.exports=a.p+"static/combobox-sample-e9440c8ded02892c353643b419d5d3db.gif"}}]);
//# sourceMappingURL=component---docs-combobox-md-3dd4cb988d7d77268827.js.map