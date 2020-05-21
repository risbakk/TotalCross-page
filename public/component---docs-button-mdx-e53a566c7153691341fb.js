(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{bqlM:function(t,e,n){t.exports=n.p+"static/buttons-sample-21dd1f08d15ccd52960ef1abfe9d6d5c.gif"},cQAy:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return b})),n.d(e,"default",(function(){return s}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var r=n("7ljp"),a=n("hhGP");n("qKvR");function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/button.mdx"}});var l={_frontmatter:b},i=a.a;function s(t){var e=t.components,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["components"]);return Object(r.b)(i,o({},l,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"button"},"Button"),Object(r.b)("h3",{id:"overview"},"Overview"),Object(r.b)("p",null,"Buttons are an essential way to interact with and navigate through an app, and should clearly communicate what action will occur after the user taps them, like invoke an action to confirm ","[","ok","]"," or cancel ","[","cancel","]"," something. The Buttons can consist of text and/or icon/image, and can be enhanced with a variety of attributes. Here is a sample with some buttons using the Material Design style from Google ","(","now inside the UI package from the TotalCrossAPI sample",")","."),Object(r.b)("p",null,Object(r.b)("img",{alt:"button sample",src:n("bqlM")})),Object(r.b)("h3",{id:"source-code"},"Source Code"),Object(r.b)("p",null,'{% code title="ButtonSample.java" %}'),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-java"}),'import totalcross.sys.Settings;\nimport totalcross.ui.Button;\nimport totalcross.ui.Label;\nimport totalcross.ui.ScrollContainer;\nimport totalcross.ui.font.Font;\nimport totalcross.ui.gfx.Color;\nimport totalcross.ui.image.Image;\nimport totalcross.util.UnitsConverter;\n\npublic class ButtonSample extends ScrollContainer {\n\n    private Button btnDefaultColor;\n    private Button btnRed;\n    private Button btnGreen;\n    private Button btnBlue;\n    private Button btnFull;\n    private Button btnRounded;\n    private Button btnBorderless;\n    private Button btnLeftImage;\n    private Button btnRightImage;\n    private Button btnImage;\n    private Button btnLarge;\n    private Button btnOutlined;\n    private Button btnDefaultSize;\n    private Button btnSmall;\n    private int center;\n    private Label lImages = new Label("Images", CENTER);\n\n    public ButtonSample() {\n        center = Settings.screenWidth / 2;\n    }\n\n    @Override\n    public void initUI() {\n        super.initUI();\n\n        try {\n            setInsets(0, 0, 0, UnitsConverter.toPixels(DP + 8));\n            setBackForeColors(0xF7F7F7, 0x000000);\n            setScrollBars(false, true);\n            // Colors\n            Label lColors = new Label("Colors", CENTER);\n            Font bold = lColors.getFont().asBold();\n            lColors.setFont(bold);\n            btnDefaultColor = new Button("Default");\n            btnRed = new Button("Red");\n            btnRed.setBackForeColors(Color.getRGB("d34419"), Color.WHITE);\n            btnGreen = new Button("Green");\n            btnGreen.setBackForeColors(Color.getRGB("18d25a"), Color.WHITE);\n            btnBlue = new Button("Blue");\n            btnBlue.setBackForeColors(Color.getRGB("1878d1"), Color.WHITE);\n            // Shapes\n            Label lShapes = new Label("Shapes", CENTER);\n            lShapes.setFont(bold);\n            btnFull = new Button("Full Button");\n            btnFull.setBackForeColors(0x3e72c1, Color.WHITE);\n            btnRounded = new Button("Rounded Corners Button", Button.BORDER_ROUND);\n            btnRounded.roundBorderFactor = 7;\n            btnRounded.setBackForeColors(0x3e72c1, Color.WHITE);\n            btnBorderless = new Button("Borderless Button", Button.BORDER_NONE);\n            btnBorderless.setForeColor(0x3e72c1);\n            btnOutlined = new Button("Outlined Button", Button.BORDER_OUTLINED);\n\n            btnOutlined.setBackForeColors(0x3e72c1, Color.WHITE);\n            // Images\n            lImages.setFont(bold);\n            Image img = new Image("images/bt_info.png").getHwScaledInstance(UnitsConverter.toPixels(DP + 18),\n                    UnitsConverter.toPixels(DP + 18));\n            btnLeftImage = new Button("Left Image", img, RIGHT, UnitsConverter.toPixels(DP + 8));\n            btnLeftImage.setBackForeColors(0x3e72c1, Color.WHITE);\n            btnRightImage = new Button("Right Image", img, LEFT, UnitsConverter.toPixels(DP + 8));\n            btnRightImage.setBackForeColors(0x3e72c1, Color.WHITE);\n            btnImage = new Button(\n                    img.getHwScaledInstance(UnitsConverter.toPixels(DP + 24), UnitsConverter.toPixels(DP + 24)));\n            btnImage.setBackForeColors(0x3e72c1, Color.WHITE);\n            // Sizes\n            Label lSizes = new Label("Sizes", CENTER);\n            lSizes.setFont(bold);\n            btnLarge = new Button("Large");\n            btnLarge.setBackForeColors(0x3e72c1, Color.WHITE);\n            btnLarge.setFont(Font.getFont(btnLarge.getFont().size * 3 / 2));\n            btnDefaultSize = new Button("Default");\n            btnDefaultSize.setBackForeColors(0x3e72c1, Color.WHITE);\n            btnSmall = new Button("Small");\n            btnSmall.setFont(Font.getFont(btnLarge.getFont().size * 3 / 4));\n            btnSmall.setBackForeColors(0x3e72c1, Color.WHITE);\n\n            add(lColors, LEFT, TOP + UnitsConverter.toPixels(DP + 8), FILL, DP + 36);\n            add(btnDefaultColor, CENTER, AFTER + UnitsConverter.toPixels(DP + 8));\n            add(btnGreen, CENTER, AFTER + UnitsConverter.toPixels(DP + 8));\n            add(btnRed, BEFORE - UnitsConverter.toPixels(DP + 8), SAME);\n            add(btnBlue, AFTER + UnitsConverter.toPixels(DP + 8), SAME, btnGreen);\n            add(lShapes, LEFT, AFTER + UnitsConverter.toPixels(DP + 8), FILL, DP + 36);\n            add(btnFull, CENTER, AFTER + UnitsConverter.toPixels(DP + 8), PARENTSIZE + 95, PREFERRED);\n            add(btnRounded, CENTER, AFTER + UnitsConverter.toPixels(DP + 8), PARENTSIZE + 95, PREFERRED);\n            add(btnOutlined, CENTER, AFTER + UnitsConverter.toPixels(DP + 8));\n            add(btnBorderless, CENTER, AFTER + UnitsConverter.toPixels(DP + 8));\n            add(lImages, LEFT, AFTER + UnitsConverter.toPixels(DP + 8), FILL, DP + 36);\n            add(btnRightImage, center + UnitsConverter.toPixels(DP + 4), AFTER + UnitsConverter.toPixels(DP + 8));\n            add(btnLeftImage, BEFORE - UnitsConverter.toPixels(DP + 4), SAME);\n            add(btnImage, CENTER, AFTER + UnitsConverter.toPixels(DP + 8));\n            add(lSizes, LEFT, AFTER + UnitsConverter.toPixels(DP + 8), FILL, DP + 36);\n            add(btnLarge, LEFT + UnitsConverter.toPixels(DP + 8), AFTER + UnitsConverter.toPixels(DP + 8),\n                    btnLarge.getPreferredWidth() <= 48 ? DP + 96\n                            : btnLarge.getPreferredWidth() + UnitsConverter.toPixels(DP + 48),\n                    DP + 54);\n            add(btnDefaultSize, AFTER + UnitsConverter.toPixels(DP + 8), CENTER_OF);\n            add(btnSmall, AFTER + UnitsConverter.toPixels(DP + 8), CENTER_OF, btnSmall.getPreferredWidth() <= 24\n                    ? DP + 48 : btnSmall.getPreferredWidth() + UnitsConverter.toPixels(DP + 24), DP + 27,\n                    btnDefaultSize);\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n\n    @Override\n    public void reposition() {\n        center = Settings.screenWidth / 2;\n        btnRightImage\n                .setRect(center + UnitsConverter.toPixels(DP + 4), AFTER + UnitsConverter.toPixels(DP + 8),\n                        btnRightImage.getPreferredWidth() <= 32 ? DP + 64\n                                : btnRightImage.getPreferredWidth() + UnitsConverter.toPixels(DP + 32),\n                        DP + 36, lImages);\n        btnLeftImage\n                .setRect(BEFORE - UnitsConverter.toPixels(DP + 4), SAME,\n                        btnLeftImage.getPreferredWidth() <= 32 ? DP + 64\n                                : btnLeftImage.getPreferredWidth() + UnitsConverter.toPixels(DP + 32),\n                        DP + 36, btnRightImage);\n    }\n}\n')),Object(r.b)("p",null,"{% endcode %}"),Object(r.b)("p",null,'{% hint style="warning" %}\nDo not forget ',Object(r.b)("strong",{parentName:"p"},"to create a folder"),' called "',Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"images")),'" inside ',Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"/src/main/resources"))," and ",Object(r.b)("strong",{parentName:"p"},"save the")," ",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/TotalCross/TCSample/blob/master/src/main/resources/images/bt_info.png"}),Object(r.b)("strong",{parentName:"a"},"bt_info.png"))," ",Object(r.b)("strong",{parentName:"p"},"image inside it")," ","[","images","]",".\n{% endhint %}"),Object(r.b)("h3",{id:"methods"},"Methods"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",o({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",o({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",o({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Button","("," ",")"),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Creates a simple button")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Button","(","Image img",")"),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Creates a simple button with the referred image")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Button","(","Image img, byte border",")"),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Creates a button with the referreds image and border")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Button","(","String text",")"),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Creates a button with the referred text")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Button","(","String text, byte border",")"),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Creates a button with the referreds text and border")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Button","(","String text, Image img, int textPosition, int gap",")"),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Creates a button with the referred text and image")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Image")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"getImage","("," ",")"),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Return the button image")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"String")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"getText","("," ",")"),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Return the button text")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Boolean")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"isPressed","("," ",")"),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Return true if button is pressed")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"void")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"press","(","boolean pressed",")"),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"If true, press the button")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"void")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"setBorder","(","byte border",")"),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Set the button border style")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"void")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"setImage","(","Image img",")"),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Set the button image")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"void")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"setPressedColor","(","int newColor",")"),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Return the button text")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"void")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"setText","(","String text",")"),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Set the button text")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"void")),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"simulatePress","("," ",")"),Object(r.b)("td",o({parentName:"tr"},{align:"left"}),"Press and depress the button")))),Object(r.b)("h4",{id:"atributos"},Object(r.b)("strong",{parentName:"h4"},"Atributos")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Button.CENTRALIZE")," ",Object(r.b)("strong",{parentName:"li"},"-")," Centralizar imagem e texto no botão.")),Object(r.b)("h3",{id:"references"},Object(r.b)("strong",{parentName:"h3"},"References")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"See also our ",Object(r.b)("a",o({parentName:"li"},{href:"https://www.youtube.com/watch?v=xjqd3g1IYco"}),"quick tutorial video")," on creating buttons."),Object(r.b)("li",{parentName:"ul"},"See the ",Object(r.b)("a",o({parentName:"li"},{href:"https://rs.totalcross.com/doc/totalcross/ui/Button.html"}),"Java Docs")," for more information.")))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/button.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-button-mdx-e53a566c7153691341fb.js.map