ne.util.defineNamespace("fedoc.content", {});
fedoc.content["module-model_renderer-smart.html"] = "<div id=\"main\" class=\"main\">\n\n\n\n\n<section>\n\n<header>\n    \n        \n            \n        \n            \n                <h2>model/renderer-smart</h2>\n            \n        \n    \n</header>\n\n<article>\n    \n    <div class=\"container-overview\">\n    \n        \n            <div class=\"description\"><p>View 에서 Rendering 시 사용할 객체<br> Smart Rendering 을 지원한다.</p></div>\n        \n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"module:model/renderer-smart\">\n            <span class=\"type-signature\"></span>new (require(\"model/renderer-smart\"))<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 20</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n\n    \n        <h5>Extends:</h5>\n        \n\n\n    <ul>\n        <li><a href=\"module-model_renderer.html\">module:model/renderer</a></li>\n    </ul>\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n</dt>\n<dd>\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n    \n    </div>\n    \n\n    \n\n    \n\n    \n\n     \n\n    \n\n    \n\n    \n    <div class=\"container-methods\">\n        <h3 class=\"subsection-title\">Methods</h3>\n\n        <dl>\n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_destroy\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_destroy<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 305</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Destroys itself</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-model_renderer.html#_destroy\">module:model/renderer#_destroy</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-model_renderer.html#_destroy\">module:model/renderer#_destroy</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_getCollectionByColumnName\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_getCollectionByColumnName<span class=\"signature\">(columnName)</span><span class=\"type-signature\"> &rarr; {Collection}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 242</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>columnName 으로 lside 와 rside rendering collection 중 하나를 반환한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>columnName</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">String</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>컬럼명</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>컬럼명에 해당하는 영역의 콜랙션</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-model_renderer.html#_getCollectionByColumnName\">module:model/renderer#_getCollectionByColumnName</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-model_renderer.html#_getCollectionByColumnName\">module:model/renderer#_getCollectionByColumnName</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_getEndRowSpanMaxCount\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_getEndRowSpanMaxCount<span class=\"signature\">(endIndex)</span><span class=\"type-signature\"> &rarr; {number}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 92</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>렌더링할 마지막 행에 rowSpan 정보가 있으면, count 값이 가장 큰 행의 값을 반환한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>endIndex</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">number</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>마지막 행의 Index</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>rowSpan의 count 값 (0 이상)</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_getStartRowSpanMinCount\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_getStartRowSpanMinCount<span class=\"signature\">(startIndex)</span><span class=\"type-signature\"> &rarr; {number}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 73</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>렌더링을 시작하는 행에 rowSpan 정보가 있으면, count 값이 가장 작은 행의 값을 반환한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>startIndex</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">number</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>시작하는 행의 Index</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>rowSpan의 count 값 (0 이하)</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_isRenderable\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_isRenderable<span class=\"signature\">(scrollTop)</span><span class=\"type-signature\"> &rarr; {boolean}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 110</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>scrollTop 값 에 따라 rendering 해야하는지 판단한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>scrollTop</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">Number</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>랜더링 범위를 결정하기 위한 현재 scrollTop 위치 값</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>랜더링 해야할지 여부</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_onChange\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_onChange<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 34</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>bodyHeight 가 변경 되었을때 이벤트 핸들러</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_onColumnModelChange\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_onColumnModelChange<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 118</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Data.ColumnModel 이 변경되었을 때 열고정 영역 frame, 열고정 영역이 아닌 frame 의 list 를 재생성 하기 위한 이벤트 핸들러</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-model_renderer.html#_onColumnModelChange\">module:model/renderer#_onColumnModelChange</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-model_renderer.html#_onColumnModelChange\">module:model/renderer#_onColumnModelChange</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_onRowListChange\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_onRowListChange<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 134</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Data.RowList 가 변경되었을 때 열고정 영역 frame, 열고정 영역이 아닌 frame 의 list 를 재생성 하기 위한 이벤트 핸들러</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-model_renderer.html#_onRowListChange\">module:model/renderer#_onRowListChange</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-model_renderer.html#_onRowListChange\">module:model/renderer#_onRowListChange</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_onValueChange\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_onValueChange<span class=\"signature\">(rowIndex)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 66</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>lside 와 rside collection 에서 value 값이 변경되었을 시 executeRelation 을 수행하기 위한 이벤트 핸들러</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>rowIndex</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">number</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>row 의 index 값</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-model_renderer.html#_onValueChange\">module:model/renderer#_onValueChange</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-model_renderer.html#_onValueChange\">module:model/renderer#_onValueChange</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_setRenderingRange\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_setRenderingRange<span class=\"signature\">(scrollTop)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 45</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>SmartRendering 을 사용하여 rendering 할 index 범위를 결정한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>scrollTop</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">Number</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>랜더링 범위를 결정하기 위한 현재 scrollTop 위치 값</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    -->\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_updateMaxScrollLeft\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_updateMaxScrollLeft<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 74</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Event handler for 'chage:width' event on Dimension.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-model_renderer.html#_updateMaxScrollLeft\">module:model/renderer#_updateMaxScrollLeft</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-model_renderer.html#_updateMaxScrollLeft\">module:model/renderer#_updateMaxScrollLeft</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"_updateMaxScrollTop\">\n            <span class=\"type-signature\"><span class=\"icon green\">private</span> </span>_updateMaxScrollTop<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 83</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>Event handler to reset 'maxScrollTop' attribute.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-model_renderer.html#_updateMaxScrollTop\">module:model/renderer#_updateMaxScrollTop</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-model_renderer.html#_updateMaxScrollTop\">module:model/renderer#_updateMaxScrollTop</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"executeRelation\">\n            <span class=\"type-signature\"></span>executeRelation<span class=\"signature\">(rowIndex)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 287</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>rowIndex 에 해당하는 relation 을 수행한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>rowIndex</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">Number</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>row 의 index 값</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-model_renderer.html#executeRelation\">module:model/renderer#executeRelation</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-model_renderer.html#executeRelation\">module:model/renderer#executeRelation</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"getCellData\">\n            <span class=\"type-signature\"></span>getCellData<span class=\"signature\">(rowKey, columnName)</span><span class=\"type-signature\"> &rarr; {object}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 275</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>셀 데이터를 반환한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>rowKey</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">number</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>데이터의 키값</p></td>\n        </tr>\n\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>columnName</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">String</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>컬럼명</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>cellData 셀 데이터</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-model_renderer.html#getCellData\">module:model/renderer#getCellData</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-model_renderer.html#getCellData\">module:model/renderer#getCellData</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n        <h5>Example</h5>\n        \n    <pre class=\"prettyprint\"><code>=>\n     {\n         rowKey: rowKey,\n         columnName: columnName,\n         value: value,\n         rowSpan: rowSpanData.count,\n         isMainRow: rowSpanData.isMainRow,\n         mainRowKey: rowSpanData.mainRowKey,\n         isEditable: isEditable,\n         isDisabled: isDisabled,\n         optionList: [],\n         className: row.getClassNameList(columnName).join(' '),\n         changed: []    //변경된 프로퍼티 목록들\n     }</code></pre>\n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"getCollection\">\n            <span class=\"type-signature\"></span>getCollection<span class=\"signature\">(whichSide<span class=\"signature-attributes\">opt</span>)</span><span class=\"type-signature\"> &rarr; {Object}</span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 110</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>열고정 영역 또는 열고정이 아닌 영역에 대한 Render Collection 을 반환한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n        <th>Attributes</th>\n        \n\n        \n        <th>Default</th>\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>whichSide</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">String</span>\n\n\n            \n            </td>\n\n            \n                <td class=\"attributes\">\n                \n                    &lt;optional><br>\n                \n\n                \n\n                \n                </td>\n            \n\n            \n                <td class=\"default\">\n                \n                    'R'\n                \n                </td>\n            \n\n            <td class=\"description last\"><p>어느 영역인지 여부. 'L|R' 중에 하나의 값을 넘긴다.</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n    <div class=\"container-returns\">\n        <div class=\"returns\">\n        <h5>Returns:</h5>\n        <div class=\"details\">\n        \n                \n<div class=\"param-desc\">\n    <p>collection  해당 영역의 랜더 데이터 콜랙션</p>\n</div>\n\n            \n        </div>\n        </div>\n    </div>\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-model_renderer.html#getCollection\">module:model/renderer#getCollection</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-model_renderer.html#getCollection\">module:model/renderer#getCollection</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"initializeVariables\">\n            <span class=\"type-signature\"></span>initializeVariables<span class=\"signature\">()</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 93</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>내부 변수를 초기화 한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-model_renderer.html#initializeVariables\">module:model/renderer#initializeVariables</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-model_renderer.html#initializeVariables\">module:model/renderer#initializeVariables</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"refresh\">\n            <span class=\"type-signature\"></span>refresh<span class=\"signature\">(isDataModelChanged)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 155</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>rendering 할 데이터를 생성한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>isDataModelChanged</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">boolean</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>The boolean value whether dataModel has changed</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-model_renderer.html#refresh\">module:model/renderer#refresh</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-model_renderer.html#refresh\">module:model/renderer#refresh</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        \n            \n<dt>\n    \n        <h4 class=\"name\" id=\"setOwnProperties\">\n            <span class=\"type-signature\"></span>setOwnProperties<span class=\"signature\">(properties)</span><span class=\"type-signature\"></span>\n            \n                <div class=\"container-source method\">\n                    <code>file</code>,\n                    <code>line 17</code>\n                </div>\n            \n        </h4>\n\n\n\n        \n    \n</dt>\n<dd>\n\n    \n    <div class=\"description\">\n        <p>주어진 객체의 프라퍼티들을 this에 복사해서 추가한다.</p>\n    </div>\n    \n\n    \n\n    \n\n    \n\n    \n    <div class=\"container-params\">\n        <div class=\"params\">\n\n<table class=\"params\">\n    <thead>\n    <tr>\n        \n        <th>Name</th>\n        \n\n        <th>Type</th>\n\n        \n\n        \n\n        <th class=\"last\">Description</th>\n    </tr>\n    </thead>\n\n    <tbody>\n    \n\n        <tr>\n            \n                <td class=\"name first\"><code>properties</code></td>\n            \n\n            <td class=\"type\">\n            \n                \n<span class=\"param-type\">object</span>\n\n\n            \n            </td>\n\n            \n\n            \n\n            <td class=\"description last\"><p>추가할 프라퍼티 객체</p></td>\n        </tr>\n\n    \n    </tbody>\n</table></div>\n    </div>\n    \n\n    \n\n    \n\n\n<dl class=\"details\">\n\n    \n\n    \n\n    <!--\n    \n    <dt class=\"inherited-from\">Inherited From:</dt>\n    <dd class=\"inherited-from\"><ul class=\"dummy\"><li>\n        <a href=\"module-base_model.html#setOwnProperties\">module:base/model#setOwnProperties</a>\n    </li></dd>\n    \n    -->\n\n    \n    <div class=\"container-inherits\">\n        <div class=\"inherits\">\n            <h5>Inherited From:</h5>\n            <div class=\"details\">\n            <div class=\"inherits-desc\">\n                <a href=\"module-base_model.html#setOwnProperties\">module:base/model#setOwnProperties</a>\n            </div>\n            </div>\n        </div>\n    </div>\n    \n\n    \n\n    \n\n    \n        <dt class=\"mixes\">Mixes In:</dt>\n\n        <dd class=\"mixes\"><ul>\n        \n            <li><a href=\"module-base_common.html#.setOwnProperties\">module:base/common.setOwnProperties</a></li>\n        \n        </ul></dd>\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dl>\n\n\n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n</dd>\n\n        </dl>\n    </div>\n    \n\n    \n\n    \n</article>\n\n</section>\n\n\n\n</div>"