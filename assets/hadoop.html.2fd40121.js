import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as r,a as e,b as t,d as n,w as s,f as o,e as l,r as p}from"./app.b30f4060.js";const c={},u=e("h1",{id:"hadoop-connector",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hadoop-connector","aria-hidden":"true"},"#"),t(" Hadoop connector")],-1),h=l(`<h2 id="main-function" tabindex="-1"><a class="header-anchor" href="#main-function" aria-hidden="true">#</a> Main function</h2><p>Hadoop connector can be used to read hdfs files in batch scenarios. Its function points mainly include:</p><ul><li>Support reading files in multiple hdfs directories at the same time</li><li>Support reading hdfs files of various formats</li></ul><h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bitsail-connector-hadoop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="supported-data-types" tabindex="-1"><a class="header-anchor" href="#supported-data-types" aria-hidden="true">#</a> Supported data types</h2><ul><li>Basic data types supported by Hadoop connectors: <ul><li>Integer type: <ul><li>short</li><li>int</li><li>long</li><li>biginterger</li></ul></li><li>Float type: <ul><li>float</li><li>double</li><li>bigdecimal</li></ul></li><li>Time type: <ul><li>timestamp</li><li>date</li><li>time</li></ul></li><li>String type: <ul><li>string</li></ul></li><li>Bool type: <ul><li>boolean</li></ul></li><li>Binary type: <ul><li>binary</li></ul></li></ul></li><li>Composited data types supported by Hadoop connectors: <ul><li>map</li><li>list</li></ul></li></ul><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><p>The following mentioned parameters should be added to <code>job.reader</code> block when using, for example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;path_list&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hdfs://test_path/test.csv&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h3><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Class name of hadoop connector, <code>com.bytedance.bitsail.connector.hadoop.source.HadoopInputFormat</code></td></tr><tr><td style="text-align:left;">path_list</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Specifies the path of the read in file. Multiple paths can be specified, separated by <code>&#39;,&#39;</code></td></tr><tr><td style="text-align:left;">content_type</td><td style="text-align:left;">Yes</td><td style="text-align:left;">JSON<br>CSV</td><td style="text-align:left;">Specify the format of the read in file. For details, refer to<a href="#jump_format">支持的文件格式</a></td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Describing fields&#39; names and types</td></tr></tbody></table><h3 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional parameters</h3><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">hadoop_conf</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Specify the read configuration of hadoop in the standard json format string</td></tr><tr><td style="text-align:left;">reader_parallelism_num</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Reader parallelism</td></tr></tbody></table><h2 id="supported-format" tabindex="-1"><a class="header-anchor" href="#supported-format" aria-hidden="true">#</a> <span id="jump_format">Supported format</span></h2><p>Support the following formats:</p><ul><li><a href="#jump_json">JSON</a></li><li><a href="#jump_csv">CSV</a></li></ul>`,17),m=l('<h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> <span id="jump_json">JSON</span></h3><p>It supports parsing text files in json format. Each line is required to be a standard json string.</p><p>The following parameters are supported to adjust the json parsing stype:</p><table><thead><tr><th>Parameter name</th><th>Default value</th><th>Description</th></tr></thead><tbody><tr><td><code>job.common.case_insensitive</code></td><td>true</td><td>Whether to be sensitive to the case of the key in the json field</td></tr><tr><td><code>job.common.json_serializer_features</code></td><td></td><td>Specify the mode when &#39;FastJsonUtil&#39; is parsed. The format is <code>&#39;,&#39;</code> separated string, for example<code>&quot;QuoteFieldNames,UseSingleQuotes&quot;</code></td></tr><tr><td><code>job.common.convert_error_column_as_null</code></td><td>false</td><td>Whether to set the field with parsing error to null</td></tr></tbody></table><h3 id="csv" tabindex="-1"><a class="header-anchor" href="#csv" aria-hidden="true">#</a> <span id="jump_csv">CSV</span></h3><p>Support parsing of text files in csv format. Each line is required to be a standard csv string.</p><p>The following parameters are supported to adjust the csv parsing style:</p><table><thead><tr><th>Parameter name</th><th>Default value</th><th>Description</th></tr></thead><tbody><tr><td><code>job.common.csv_delimiter</code></td><td><code>&#39;,&#39;</code></td><td>csv delimiter</td></tr><tr><td><code>job.common.csv_escape</code></td><td></td><td>escape character</td></tr><tr><td><code>job.common.csv_quote</code></td><td></td><td>quote character</td></tr><tr><td><code>job.common.csv_with_null_string</code></td><td></td><td>Specify the conversion value of null field. It is not converted by default</td></tr></tbody></table>',8),f=e("h2",{id:"related-documents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#related-documents","aria-hidden":"true"},"#"),t(" Related documents")],-1);function g(b,y){const a=p("RouterLink");return d(),r("div",null,[u,e("p",null,[t("Parent document: "),n(a,{to:"/en/documents/connectors/"},{default:s(()=>[t("Connectors")]),_:1})]),h,o(" - [PROTOBUF]&#40;#jump_protobuf&#41; ) "),m,o(`
### <span id="jump_protobuf">PROTOBUF</span>

支持对protobuf格式文件进行解析。

解析protobuf格式文件时，必需以下参数:


| 参数名称 | 参数是否必需   | 参数说明 |
|--------|----------|---------|
|\`job.common.proto.descriptor\`| 是 |base64方式存储protobufm描述文件|
|\`job.common.proto.class_name\`| 是 |指定protobuf描述文件中用于解析的类名|
`),f,e("p",null,[t("Configuration examples: "),n(a,{to:"/en/documents/connectors/hadoop/hadoop-example.html"},{default:s(()=>[t("Hadoop connector example")]),_:1})])])}const _=i(c,[["render",g],["__file","hadoop.html.vue"]]);export{_ as default};
