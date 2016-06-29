## Classes

<dl>
<dt><a href="#LightLib">LightLib</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#lightlib">lightlib(selector)</a></dt>
<dd><p><a href="#LightLib">LightLib</a> initializer</p>
</dd>
</dl>

<a name="LightLib"></a>

## LightLib
**Kind**: global class  

* [LightLib](#LightLib)
    * [new LightLib()](#new_LightLib_new)
    * [.map(callback)](#LightLib.map) ⇒ <code>[LightLib](#LightLib)</code>
    * [.forEach(callback)](#LightLib.forEach)
    * [.html(contents)](#LightLib.html)
    * [.val(contents)](#LightLib.val)
    * [.html(key, val)](#LightLib.html)

<a name="new_LightLib_new"></a>

### new LightLib()
The [LightLib](#LightLib) object. Please use the [lightlib](#lightlib) global function.

<a name="LightLib.map"></a>

### LightLib.map(callback) ⇒ <code>[LightLib](#LightLib)</code>
Returns an array containing the elements of the [LightLib](#LightLib) object afterbeing passed to the callback function

**Kind**: static method of <code>[LightLib](#LightLib)</code>  
**Returns**: <code>[LightLib](#LightLib)</code> - The LightLib object  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>requestCallback</code> | The function accepting the DOM elements. |

<a name="LightLib.forEach"></a>

### LightLib.forEach(callback)
Same as [map](#LightLib.map), but returns the [LightLib](#LightLib) object instead.

**Kind**: static method of <code>[LightLib](#LightLib)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>requestCallback</code> | The function accepting the DOM elements. |

<a name="LightLib.html"></a>

### LightLib.html(contents)
Gets or sets the innerHTML of the selected DOM element.

**Kind**: static method of <code>[LightLib](#LightLib)</code>  

| Param | Type | Description |
| --- | --- | --- |
| contents | <code>string</code> | The HTML string to be set. |

<a name="LightLib.val"></a>

### LightLib.val(contents)
Gets or sets value of an input

**Kind**: static method of <code>[LightLib](#LightLib)</code>  

| Param | Type | Description |
| --- | --- | --- |
| contents | <code>string</code> | The string value to be set. |

<a name="LightLib.html"></a>

### LightLib.html(key, val)
Gets or sets the attribute of a DOM object.

**Kind**: static method of <code>[LightLib](#LightLib)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The name of the attribute |
| val | <code>string</code> | The value to be set. |

<a name="lightlib"></a>

## lightlib(selector)
[LightLib](#LightLib) initializer

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> &#124; <code>requestCallback</code> | If string is provided, returns a new [LightLib](#LightLib) object. If a function is provided, adds it to the window.onload callback. |

