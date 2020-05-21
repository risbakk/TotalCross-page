(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2AtL":function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return i})),n.d(e,"default",(function(){return d}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var a=n("7ljp"),r=n("hhGP");n("qKvR");function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/aligned-labels-container.md"}});var b={_frontmatter:i},o=r.a;function d(t){var e=t.components,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["components"]);return Object(a.b)(o,l({},b,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"aligned-labels"},"Aligned Labels"),Object(a.b)("h3",{id:"overview"},"Overview"),Object(a.b)("p",null,'Aligned Label is a Container used to align all controls to the maximum width of a set of labels.\n{% hint style="info" %}\nIn Totalcross this component is called ',Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"AlignedLabelContainer")),".\n{% endhint %}"),Object(a.b)("p",null,Object(a.b)("img",{alt:"aligned label animation",src:n("MO0n")})),Object(a.b)("h3",{id:"source-code"},"Source Code"),Object(a.b)("p",null,'{% code title="AlignedLabelsSample.java" %}'),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-java"}),'import totalcross.ui.AlignedLabelsContainer;\nimport totalcross.ui.Button;\nimport totalcross.ui.ComboBox;\nimport totalcross.ui.Edit;\nimport totalcross.ui.Label;\nimport totalcross.ui.ListBox;\nimport totalcross.ui.ScrollContainer;\nimport totalcross.util.UnitsConverter;\n\npublic class extends ScrollContainer {\n    private int gap = UnitsConverter.toPixels(10 + DP);\n    private boolean canInsert = true;\n    private ListBox lb;\n    private Label output;\n\n    @Override\n    public void initUI() {\n        uiAdjustmentsBasedOnFontHeightIsSupported = false;\n        setBackForeColors(0xF7F7F7, 0x000000);\n        setScrollBars(false, true);\n\n        String[] labels = { "Name", "Born date", "Telephone", "Address", "City", "Country" };\n        Edit edits[] = new Edit[5];\n        edits[0].transparentBackground = true;\n        Edit.useNativeNumericPad = true;\n\n        for (int i = 0; i < edits.length; i++) {\n            switch (i) {\n            case 1:\n                edits[i] = new Edit("99/99/9999");\n                edits[i].setMode(Edit.NORMAL, true);\n                edits[i].setValidChars(Edit.numbersSet);\n                edits[i].setKeyboard(Edit.KBD_NUMERIC);\n                break;\n            case 2:\n                edits[i] = new Edit("(99)9999-99999");\n                edits[i].setMode(Edit.NORMAL, true);\n                edits[i].setValidChars(Edit.numbersSet);\n                edits[i].setKeyboard(Edit.KBD_NUMERIC);\n                break;\n            default:\n                edits[i] = new Edit();\n            }\n        }\n\n        Label title = new Label("This is an AlignedLabelsContainer.\\nAll the content will be automatically aligned.",\n                CENTER, 0, true);\n        title.autoSplit = true;\n        add(title, LEFT + gap, TOP + gap, FILL - gap, PREFERRED);\n\n        AlignedLabelsContainer alc = new AlignedLabelsContainer();\n        alc.uiAdjustmentsBasedOnFontHeightIsSupported = false;\n        alc.labelAlign = RIGHT;\n\n        alc.setInsets(gap, gap, 0, 0);\n        alc.setLabels(labels, edits[0].getPreferredHeight());\n        add(alc, LEFT, AFTER, FILL, PREFERRED);\n        int i;\n        for (i = 0; i < edits.length - 1; i++) {\n            alc.add(edits[i], LEFT + gap, alc.getLineY(i), FILL - gap, PREFERRED);\n        }\n\n        Button btnInsert = new Button("Insert data", (byte) 0);\n        btnInsert.setBackForeColors(0x4583d4, 0xFFFFFF);\n        alc.add(edits[edits.length - 1], LEFT + gap, alc.getLineY(i), edits[3].getWidth() / 2 - gap / 2, PREFERRED);\n        alc.add(btnInsert, RIGHT - gap, CENTER_OF, SAME, PREFERRED, edits[edits.length - 1]);\n\n        ComboBox cbCountry = new ComboBox(new String[] { "Brazil", "USA" });\n        alc.add(cbCountry, LEFT + gap, alc.getLineY(++i), SAME, PREFERRED, edits[edits.length - 1]);\n\n        Button btnClear = new Button("CLEAR DATA", (byte) 0);\n        alc.add(btnClear, RIGHT - gap, CENTER_OF, SAME, PREFERRED);\n\n        btnInsert.addPressListener(e -> {\n            if (canInsert) {\n                lb = new ListBox();\n                for (int j = 0; j < edits.length; j++)\n                    lb.add(labels[j] + ": " + edits[j].getText());\n                if (cbCountry.getSelectedIndex() != -1)\n                    lb.add("Country: " + cbCountry.getSelectedItem());\n                else\n                    lb.add("Country: ");\n\n                output = new Label("OUTPUT:");\n                output.setFont(font.asBold());\n                add(output, CENTER, AFTER);\n                add(lb, CENTER, AFTER + gap, SCREENSIZE + 80, PREFERRED);\n                canInsert = false;\n\n                scrollToControl(lb);\n            } else {\n                lb.removeAll();\n                for (int j = 0; j < edits.length; j++)\n                    lb.add(labels[j] + ": " + edits[j].getText());\n                if (cbCountry.getSelectedIndex() != -1)\n                    lb.add("Country: " + cbCountry.getSelectedItem());\n                else\n                    lb.add("Country: ");\n            }\n            // reposition(); reposition bugando o edit\n        });\n\n        btnClear.addPressListener(e -> {\n\n            // Cleaning the labels\' content\n            for (Edit edit : edits)\n                edit.clear();\n            cbCountry.setSelectedIndex(-1);\n            if (!canInsert) {\n                // Cleaning the output\n                remove(lb);\n                remove(output);\n                canInsert = true;\n            }\n        });\n    }\n}\n')),Object(a.b)("p",null,"{% endcode %}"),Object(a.b)("h3",{id:"attributes"},"Attributes"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",l({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",l({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"Font")),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"childrenFont"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Set this member to the font you want to set to the controls that are added to this container")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"int","["," ","]")),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"foreColors"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Sets an array with the same number of labels and the colors you want to show for each label")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"int")),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"labelAlign"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"The alignment of the labels")))),Object(a.b)("h3",{id:"methods"},"Methods"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:"left"}),"ype"),Object(a.b)("th",l({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",l({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"Construtor")),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"AlignedLabelsContainer","("," ",")"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Creates a new AlignedLabelsContainer without labels")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"Construtor")),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"AlignedLabelsContainer","(","String","[","]"," labels",")"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Creates a new AlignedLabelsContainer with the given labels")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"Construtor")),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"AlignedLabelsContainer","(","String","[","]"," labels, int vgap",")"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Creates a new AlignedLabelsContainer with the given labels and a vertical gap between the labels")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"void")),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"add","(","Control c",")"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Since this is an AlignedLabelsContainer, use this to add a label")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"int")),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"getLineY","(","int line",")"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Given a line ","(","staring from 0",")",", returns the y position")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"void")),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"setLabels","(","String","["," ","]"," labels, int vgap",")"),Object(a.b)("td",l({parentName:"tr"},{align:"left"}),"Sets the labels and the extra gap between rows ","(","which may be 0",")")))))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/aligned-labels-container.md"}}),d.isMDXComponent=!0},MO0n:function(t,e,n){t.exports=n.p+"static/alignedlabels-sample.gif.pagespeed.ce.d4badoy8p-7786da74ecbc3fe5cbd8fe8a85df4c9f.gif"}}]);
//# sourceMappingURL=component---docs-aligned-labels-container-md-baba7bec44be4c178a78.js.map