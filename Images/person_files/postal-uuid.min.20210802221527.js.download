/*
 MIT license
 @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
*/
define("postal.uuid",["postal"],function(f){var g=function(){for(var b={},a=[],c=0;256>c;c++)a[c]=(16>c?"0":"")+c.toString(16);b.create=function(){var b=4294967295*Math.random()|0,c=4294967295*Math.random()|0,d=4294967295*Math.random()|0,e=4294967295*Math.random()|0;return a[b&255]+a[b>>8&255]+a[b>>16&255]+a[b>>24&255]+"-"+a[c&255]+a[c>>8&255]+"-"+a[c>>16&15|64]+a[c>>24&255]+"-"+a[d&63|128]+a[d>>8&255]+"-"+a[d>>16&255]+a[d>>24&255]+a[e&255]+a[e>>8&255]+a[e>>16&255]+a[e>>24&255]};return b}(),h=f.publish;
f.publish=function(b){b&&b.headers&&!b.headers.uuid&&(b.headers.uuid=g.create());h.apply(this,arguments)};return f});