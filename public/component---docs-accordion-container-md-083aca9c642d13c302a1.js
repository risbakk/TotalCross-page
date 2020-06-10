(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{KZJ8:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return i})),n.d(e,"default",(function(){return d}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var a=n("7ljp"),r=n("hhGP");n("qKvR");function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/accordion-container.md"}});var c={_frontmatter:i},b=r.a;function d(t){var e=t.components,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["components"]);return Object(a.b)(b,o({},c,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"accordion"},"Accordion"),Object(a.b)("h3",{id:"overview"},"Overview"),Object(a.b)("p",null,'Accordions are used to show and hide text through user interaction.\n{% hint style="info" %}\nIn Totalcross this component is called ',Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"AccordionContainer")),"\n{% endhint %}\n",Object(a.b)("img",{alt:"accordion example",src:n("XBEs")})),Object(a.b)("h3",{id:"source-code"},"Source Code"),Object(a.b)("p",null,'{% code title="AccordionSample.java" %}'),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-java"}),'import totalcross.sys.Settings;\nimport totalcross.ui.AccordionContainer;\nimport totalcross.ui.MainWindow;\nimport totalcross.ui.MultiEdit;\nimport totalcross.ui.font.Font;\nimport totalcross.ui.gfx.Color;\n\npublic class AccordionSample extends MainWindow {\n\n    public AccordionSample() {\n        setUIStyle(Settings.MATERIAL_UI);\n        Settings.uiAdjustmentsBasedOnFontHeight = true;\n    }\n\n    public void initUI() {\n        int gap = (int) (Settings.screenDensity * 20);\n\n        AccordionContainer.Group gr = new AccordionContainer.Group();\n        AccordionContainer ac[] = new AccordionContainer[5];\n        MultiEdit me[] = new MultiEdit[5];\n\n        for (int i = 0; i < ac.length; i++) {\n            ac[i] = new AccordionContainer(gr);\n            ac[i].setFont(font.asBold());\n            me[i] = new MultiEdit(50, gap / 4);\n            me[i].setText("Type here!");\n        }\n\n        add(ac[0], CENTER, AFTER + gap * 2, SCREENSIZE + 85, PREFERRED);\n        ac[0].setBackForeColors(0xBFDCF7, Color.BLACK);\n        ac[0].add(ac[0].new Caption("...the biggest state?"), LEFT, TOP, FILL, PREFERRED);\n        ac[0].add(me[0], LEFT + gap * 4, AFTER + gap, FILL, FONTSIZE + 600);\n        me[0].transparentBackground = true;\n        me[0].setFont(Font.getFont(false, this.getFont().size));\n\n        for (int i = 1; i < ac.length; i++) {\n            add(ac[i], CENTER, AFTER + gap / 2, SCREENSIZE + 85, PREFERRED);\n            ac[i].setBackForeColors(0xBFDCF7, Color.BLACK);\n\n            switch (i) {\n            case 1:\n                ac[i].add(ac[i].new Caption("...the most famous forest?"), LEFT, TOP, FILL, PREFERRED);\n                break;\n            case 2:\n                ac[i].add(ac[i].new Caption("...the current president?"), LEFT, TOP, FILL, PREFERRED);\n                break;\n            case 3:\n                ac[i].add(ac[i].new Caption("...the most famous river?"), LEFT, TOP, FILL, PREFERRED);\n                break;\n            case 4:\n                ac[i].add(ac[i].new Caption("...the most famous statue?"), LEFT, TOP, FILL, PREFERRED);\n                break;\n            }\n            ac[i].add(me[i], LEFT + gap * 4, AFTER + gap, FILL, FONTSIZE + 600);\n            me[i].setFont(Font.getFont(false, ac[i].getFont().size));\n            me[i].transparentBackground = true;\n        }\n    }\n\n    public int getScreenWidth() {\n        return Settings.screenWidth;\n    }\n}\n')),Object(a.b)("p",null,"{% endcode %}"),Object(a.b)("h3",{id:"attributes"},"Attributes"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",o({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",o({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"int")),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"minH")),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Minimum height of the closed accordion")))),Object(a.b)("h3",{id:"methods"},"Methods"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",o({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",o({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"Constructor")),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"AccordionContainer","("," ",")"),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Creates a empty accordion")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"Constructor")),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"AccordionContainer","(","AccordionContainer.Group g",")"),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Creates a list of accordions from the accordion group.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"void")),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"collapse","("," ",")"),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Closes the accordion")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"void")),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"collapse","(","boolean showAnimation",")"),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Closes the accordion with animation","(","depending on the parameter",")")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"void")),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"expand","("," ",")"),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Open the accordion")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"void")),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"expand","(","boolean showAnimation",")"),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Open the accordion with animation","(","depending on the parameter",")")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"int")),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"getPreferredHeight","("," ",")"),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Returns the accordion´s minimum height")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"boolean")),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"isExpanded","("," ",")"),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Retorna true if the accordion is open")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"void")),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"onAnimationFinished","(","ControlAnimation anim",")"),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"This method is called after the animation is finished")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"void")),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"setPos","(","int x, int y",")"),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Set the accordion´s x and y position")))),Object(a.b)("h3",{id:"references"},"References"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"See also our ",Object(a.b)("a",o({parentName:"li"},{href:"https://www.youtube.com/watch?v=7fl1GfuKSOw"}),"quick video tutorial")," on how to add other components within an accordion."),Object(a.b)("li",{parentName:"ul"},"See the ",Object(a.b)("a",o({parentName:"li"},{href:"https://rs.totalcross.com/doc/totalcross/ui/Button.html"}),"Java Docs")," for more information.")))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/accordion-container.md"}}),d.isMDXComponent=!0},XBEs:function(t,e,n){t.exports=n.p+"static/accordion-sample.gif.pagespeed.ce.wfbmtgt3hy-59f04cb46b77872606ca72c17dc25591.gif"}}]);
//# sourceMappingURL=component---docs-accordion-container-md-083aca9c642d13c302a1.js.map