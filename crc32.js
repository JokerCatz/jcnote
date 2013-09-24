//JavaScript CRC32 lib
//support utf-8 and Ruby Zlib tested
var crc32 = function(e){e=unescape(encodeURI(e));var d=4294967295,f=[],a,c,b,g=function(a,b){for(var c=0;b;)c=2*c+a%2,a/=2,a-=a%1,b--;return c;};for(a=255;0<=a;a--){b=g(a,32);for(c=0;8>c;c++)b=(2*b^79764919*((b>>>31)%2))>>>0;f[a]=g(b,32);}for(a=0;a<e.length;a++){b=e.charCodeAt(a);if(255<b)throw new RangeError;c=d%256^b;d=(d/256^f[c])>>>0;}return(d^4294967295)>>>0;};
