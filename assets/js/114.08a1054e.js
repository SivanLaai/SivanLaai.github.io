(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{557:function(s,a,t){"use strict";t.r(a);var e=t(17),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-modulenotfounderror-no-module-named-lzma"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-modulenotfounderror-no-module-named-lzma"}},[s._v("#")]),s._v(" 1.ModuleNotFoundError: No module named '_lzma'")]),s._v(" "),t("h3",{attrs:{id:"ubuntu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[s._v("#")]),s._v(" Ubuntu")]),s._v(" "),t("h4",{attrs:{id:"_1-安装依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装依赖"}},[s._v("#")]),s._v(" （1）安装依赖")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" liblzma-dev -y\npip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" backports.lzma\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"_2-打开lzma-py"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-打开lzma-py"}},[s._v("#")]),s._v(" （2）打开"),t("code",[s._v("lzma.py")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/a/b/python3.7/lzma.py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_3-修改代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改代码"}},[s._v("#")]),s._v(" （3）修改代码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改前")]),s._v("\nfrom _lzma "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" *\nfrom _lzma "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" _encode_filter_properties, _decode_filter_properties\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改后")]),s._v("\ntry:\n    from _lzma "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" *\n    from _lzma "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" _encode_filter_properties, _decode_filter_properties\nexcept ImportError:\n    from backports.lzma "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" *\n    from backports.lzma "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" _encode_filter_properties, _decode_filter_properties\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);