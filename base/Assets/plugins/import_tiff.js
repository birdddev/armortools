
// Fast and advanced TIFF decoder by photopea
// https://github.com/photopea/UTIF.js
var UTIF={},pako=null;function log(){console.log(arguments)}!function(x,A){function r(r,e){this.message=r,this.g=e}function e(r){this.message="JPEG error: "+r}function t(){this.M=null,this.B=-1}function U(r,e){for(var t,i,n=0,a=[],o=16;0<o&&!r[o-1];)o--;a.push({children:[],index:0});var f,s=a[0];for(t=0;t<o;t++){for(i=0;i<r[t];i++){for((s=a.pop()).children[s.index]=e[n];0<s.index;)s=a.pop();for(s.index++,a.push(s);a.length<=t;)a.push(f={children:[],index:0}),s.children[s.index]=f.children,s=f;n++}t+1<o&&(a.push(f={children:[],index:0}),s.children[s.index]=f.children,s=f)}return a[0].children}function I(t,i,n,r,e,o,f,a,s,h){function d(){if(0<I)return A>>--I&1;if(255===(A=t[i++])){var r=t[i++];if(r){if(220===r&&E){i+=2;var e=t[i++]<<8|t[i++];if(0<e&&e!==n.g)throw new O("Found DNL marker (0xFFDC) while parsing scan data",e)}throw new C("unexpected marker "+(A<<8|r).toString(16))}}return A>>>(I=7)}function u(r){for(;;){if("number"==typeof(r=r[d()]))return r;if("object"!==(void 0===r?"undefined":L(r)))throw new C("invalid huffman sequence")}}function l(r){for(var e=0;0<r;)e=e<<1|d(),r--;return e}function c(r){if(1===r)return 1===d()?1:-1;var e=l(r);return 1<<r-1<=e?e:e+(-1<<r)+1}for(var v,g,_,w,b,p,m,E=9<arguments.length&&void 0!==h&&h,y=n.P,U=i,A=0,I=0,B=0,M=0,k=r.length,D=n.S?0===o?0===a?function(r,e){var t=u(r.D);t=0===t?0:c(t)<<s,r.a[e]=r.m+=t}:function(r,e){r.a[e]|=d()<<s}:0===a?function(r,e){if(0<B)B--;else for(var t=o;t<=f;){var i=u(r.o),n=15&i;if(i>>=4,0==n){if(i<15){B=l(i)+(1<<i)-1;break}t+=16}else t+=i,r.a[e+J[t]]=c(n)*(1<<s),t++}}:function(r,e){for(var t,i=o,n=0;i<=f;){t=e+J[i];var a=r.a[t]<0?-1:1;switch(M){case 0:if(t=15&(n=u(r.o)),n>>=4,0===t)M=n<15?(B=l(n)+(1<<n),4):(n=16,1);else{if(1!==t)throw new C("invalid ACn encoding");v=c(t),M=n?2:3}continue;case 1:case 2:r.a[t]?r.a[t]+=a*(d()<<s):0===--n&&(M=2===M?3:0);break;case 3:r.a[t]?r.a[t]+=a*(d()<<s):(r.a[t]=v<<s,M=0);break;case 4:r.a[t]&&(r.a[t]+=a*(d()<<s))}i++}4!==M||0===--B&&(M=0)}:function(r,e){var t=u(r.D);for(t=0===t?0:c(t),r.a[e]=r.m+=t,t=1;t<64;){var i=u(r.o),n=15&i;if(i>>=4,0==n){if(i<15)break;t+=16}else t+=i,r.a[e+J[t]]=c(n),t++}},F=0,G=1===k?r[0].c*r[0].l:y*n.O;F<G;){var N=e?Math.min(G-F,e):G;for(g=0;g<k;g++)r[g].m=0;if(B=0,1===k){var S=r[0];for(b=0;b<N;b++)D(S,64*((S.c+1)*(F/S.c|0)+F%S.c)),F++}else for(b=0;b<N;b++){for(g=0;g<k;g++)for(p=(S=r[g]).h,m=S.j,_=0;_<m;_++)for(w=0;w<p;w++)D(S,64*((S.c+1)*((F/y|0)*S.j+_)+(F%y*S.h+w)));F++}if(I=0,(S=P(t,i))&&S.f&&((0,_util.warn)("decodeScan - unexpected MCU data, current marker is: "+S.f),i=S.offset),!(S=S&&S.F)||S<=65280)throw new C("marker was not found");if(!(65488<=S&&S<=65495))break;i+=2}return(S=P(t,i))&&S.f&&((0,_util.warn)("decodeScan - unexpected Scan data, current marker is: "+S.f),i=S.offset),i-U}function B(r,e){for(var t=e.c,i=e.l,n=new Int16Array(64),a=0;a<i;a++)for(var o=0;o<t;o++){var f=64*((e.c+1)*a+o),s=n,h=e.G,d=e.a;if(!h)throw new C("missing required Quantization Table.");for(var u=0;u<64;u+=8){var l=d[f+u],c=d[f+u+1],v=d[f+u+2],g=d[f+u+3],_=d[f+u+4],w=d[f+u+5],b=d[f+u+6],p=d[f+u+7];if(l*=h[u],0==(c|v|g|_|w|b|p))l=5793*l+512>>10,s[u]=l,s[u+1]=l,s[u+2]=l,s[u+3]=l,s[u+4]=l,s[u+5]=l,s[u+6]=l,s[u+7]=l;else{c*=h[u+1],v*=h[u+2],g*=h[u+3],_*=h[u+4],w*=h[u+5];var m=5793*l+128>>8,E=5793*_+128>>8,y=v,U=b*=h[u+6];E=(m=m+E+1>>1)-E,l=3784*y+1567*U+128>>8,y=1567*y-3784*U+128>>8,w=(_=(_=2896*(c-(p*=h[u+7]))+128>>8)+(w<<=4)+1>>1)-w,g=(p=(p=2896*(c+p)+128>>8)+(g<<=4)+1>>1)-g,U=(m=m+(U=l)+1>>1)-U,y=(E=E+y+1>>1)-y,l=2276*_+3406*p+2048>>12,_=3406*_-2276*p+2048>>12,p=l,l=799*g+4017*w+2048>>12,g=4017*g-799*w+2048>>12,w=l,s[u]=m+p,s[u+7]=m-p,s[u+1]=E+w,s[u+6]=E-w,s[u+2]=y+g,s[u+5]=y-g,s[u+3]=U+_,s[u+4]=U-_}}for(h=0;h<8;++h)l=s[h],0==((c=s[h+8])|(v=s[h+16])|(g=s[h+24])|(_=s[h+32])|(w=s[h+40])|(b=s[h+48])|(p=s[h+56]))?(l=(l=5793*l+8192>>14)<-2040?0:2024<=l?255:l+2056>>4,d[f+h]=l,d[f+h+8]=l,d[f+h+16]=l,d[f+h+24]=l,d[f+h+32]=l,d[f+h+40]=l,d[f+h+48]=l,d[f+h+56]=l):(m=5793*l+2048>>12,E=5793*_+2048>>12,l=3784*(y=v)+1567*(U=b)+2048>>12,y=1567*y-3784*U+2048>>12,U=l,w=(_=(_=2896*(c-p)+2048>>12)+w+1>>1)-w,g=(p=(p=2896*(c+p)+2048>>12)+g+1>>1)-g,l=2276*_+3406*p+2048>>12,_=3406*_-2276*p+2048>>12,p=l,l=799*g+4017*w+2048>>12,g=4017*g-799*w+2048>>12,c=(E=(E=(m=4112+(m+E+1>>1))-E)+y+1>>1)+(w=l),b=E-w,w=(y=E-y)-g,l=(l=(m=m+U+1>>1)+p)<16?0:4080<=l?255:l>>4,c=c<16?0:4080<=c?255:c>>4,v=(v=y+g)<16?0:4080<=v?255:v>>4,g=(g=(U=m-U)+_)<16?0:4080<=g?255:g>>4,_=(_=U-_)<16?0:4080<=_?255:_>>4,w=w<16?0:4080<=w?255:w>>4,b=b<16?0:4080<=b?255:b>>4,p=(p=m-p)<16?0:4080<=p?255:p>>4,d[f+h]=l,d[f+h+8]=c,d[f+h+16]=v,d[f+h+24]=g,d[f+h+32]=_,d[f+h+40]=w,d[f+h+48]=b,d[f+h+56]=p)}return e.a}function P(r,e,t){var i=2<arguments.length&&void 0!==t?t:e,n=r.length-1;if(i=i<e?i:e,n<=e)return null;var a=r[e]<<8|r[e+1];if(65472<=a&&a<=65534)return{f:null,F:a,offset:e};for(var o=r[i]<<8|r[i+1];!(65472<=o&&o<=65534);){if(++i>=n)return null;o=r[i]<<8|r[i+1]}return{f:a.toString(16),F:o,offset:i}}var J,L,C,O,m;function E(r,e,t,i,n){for(var a=0;a<n;a+=4)t[i+a]=r[e+a],t[i+a+1]=r[e+a+1],t[i+a+2]=r[e+a+2],t[i+a+3]=r[e+a+3]}L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},(e.prototype=Error()).name="JpegError",C=e.constructor=e,(r.prototype=Error()).name="DNLMarkerError",O=r.constructor=r,J=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),t.prototype={parse:function(e){function r(){var r=e[a]<<8|e[a+1];return a+=2,r}function t(r){for(var e=Math.ceil(r.v/8/r.s),t=Math.ceil(r.g/8/r.u),i=0;i<r.b.length;i++){E=r.b[i];var n=Math.ceil(Math.ceil(r.v/8)*E.h/r.s),a=Math.ceil(Math.ceil(r.g/8)*E.j/r.u);E.a=new Int16Array(64*t*E.j*(e*E.h+1)),E.c=n,E.l=a}r.P=e,r.O=t}var i=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).N,n=void 0===i?null:i,a=0,o=null,f=0;i=[];var s,h,d=[],u=[],l=r();if(65496!==l)throw new C("SOI not found");for(l=r();65497!==l;){switch(l){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var c=(s=void 0,s=r(),(h=P(e,s=a+s-2,a))&&h.f&&((0,_util.warn)("readDataBlock - incorrect length, current marker is: "+h.f),s=h.offset),s=e.subarray(a,s),a+=s.length,s);65518===l&&65===c[0]&&100===c[1]&&111===c[2]&&98===c[3]&&101===c[4]&&(o={version:c[5]<<8|c[6],Y:c[7]<<8|c[8],Z:c[9]<<8|c[10],W:c[11]});break;case 65499:l=r()+a-2;for(var v;a<l;){var g=e[a++],_=new Uint16Array(64);if(0==g>>4)for(c=0;c<64;c++)_[v=J[c]]=e[a++];else{if(1!=g>>4)throw new C("DQT - invalid table spec");for(c=0;c<64;c++)_[v=J[c]]=r()}i[15&g]=_}break;case 65472:case 65473:case 65474:if(w)throw new C("Only single frame JPEGs supported");r();var w={};for(w.X=65473===l,w.S=65474===l,w.precision=e[a++],l=r(),w.g=n||l,w.v=r(),w.b=[],w.C={},c=e[a++],l=_=g=0;l<c;l++){v=e[a];var b=e[a+1]>>4,p=15&e[a+1];g<b&&(g=b),_<p&&(_=p),b=w.b.push({h:b,j:p,T:e[a+2],G:null}),w.C[v]=b-1,a+=3}w.s=g,w.u=_,t(w);break;case 65476:for(v=r(),l=2;l<v;){for(g=e[a++],_=new Uint8Array(16),c=b=0;c<16;c++,a++)b+=_[c]=e[a];for(p=new Uint8Array(b),c=0;c<b;c++,a++)p[c]=e[a];l+=17+b,(0==g>>4?u:d)[15&g]=U(_,p)}break;case 65501:r();var m=r();break;case 65498:for(c=1==++f&&!n,r(),g=e[a++],v=[],l=0;l<g;l++){_=w.C[e[a++]];var E=w.b[_];_=e[a++],E.D=u[_>>4],E.o=d[15&_],v.push(E)}l=e[a++],g=e[a++],_=e[a++];try{var y=I(e,a,w,v,m,l,g,_>>4,15&_,c);a+=y}catch(r){if(r instanceof O)return(0,_util.warn)('Attempting to re-parse JPEG image using "scanLines" parameter found in DNL marker (0xFFDC) segment.'),this.parse(e,{N:r.g});throw r}break;case 65500:a+=4;break;case 65535:255!==e[a]&&a--;break;default:if(255===e[a-3]&&192<=e[a-2]&&e[a-2]<=254)a-=3;else{if(!(c=P(e,a-2))||!c.f)throw new C("unknown marker "+l.toString(16));(0,_util.warn)("JpegImage.parse - unexpected data, current marker is: "+c.f),a=c.offset}}l=r()}for(this.width=w.v,this.height=w.g,this.A=o,this.b=[],l=0;l<w.b.length;l++)(m=i[(E=w.b[l]).T])&&(E.G=m),this.b.push({R:B(0,E),U:E.h/w.s,V:E.j/w.u,c:E.c,l:E.l});this.i=this.b.length},L:function(r,e){var t,i,n=this.width/r,a=this.height/e,o=this.b.length,f=r*e*o,s=new Uint8ClampedArray(f),h=new Uint32Array(r);for(i=0;i<o;i++){var d=this.b[i],u=d.U*n,l=d.V*a,c=i,v=d.R,g=d.c+1<<3;for(t=0;t<r;t++)d=0|t*u,h[t]=(4294967288&d)<<3|7&d;for(u=0;u<e;u++)for(d=g*(4294967288&(d=0|u*l))|(7&d)<<3,t=0;t<r;t++)s[c]=v[d+h[t]],c+=o}if(a=this.M)for(i=0;i<f;)for(n=d=0;d<o;d++,i++,n+=2)s[i]=(s[i]*a[n]>>8)+a[n+1];return s},w:function(){return this.A?!!this.A.W:3===this.i?0!==this.B:1===this.B},I:function(r){for(var e,t,i,n=0,a=r.length;n<a;n+=3)e=r[n],t=r[n+1],i=r[n+2],r[n]=e-179.456+1.402*i,r[n+1]=e+135.459-.344*t-.714*i,r[n+2]=e-226.816+1.772*t;return r},K:function(r){for(var e,t,i,n,a=0,o=0,f=r.length;o<f;o+=4)e=r[o],t=r[o+1],i=r[o+2],n=r[o+3],r[a++]=t*(-660635669420364e-19*t+.000437130475926232*i-54080610064599e-18*e+.00048449797120281*n-.154362151871126)-122.67195406894+i*(-.000957964378445773*i+.000817076911346625*e-.00477271405408747*n+1.53380253221734)+e*(.000961250184130688*e-.00266257332283933*n+.48357088451265)+n*(-.000336197177618394*n+.484791561490776),r[a++]=107.268039397724+t*(219927104525741e-19*t-.000640992018297945*i+.000659397001245577*e+.000426105652938837*n-.176491792462875)+i*(-.000778269941513683*i+.00130872261408275*e+.000770482631801132*n-.151051492775562)+e*(.00126935368114843*e-.00265090189010898*n+.25802910206845)+n*(-.000318913117588328*n-.213742400323665),r[a++]=t*(-.000570115196973677*t-263409051004589e-19*i+.0020741088115012*e-.00288260236853442*n+.814272968359295)-20.810012546947+i*(-153496057440975e-19*i-.000132689043961446*e+.000560833691242812*n-.195152027534049)+e*(.00174418132927582*e-.00255243321439347*n+.116935020465145)+n*(-.000343531996510555*n+.24165260232407);return r.subarray(0,a)},J:function(r){for(var e,t,i,n=0,a=r.length;n<a;n+=4)e=r[n],t=r[n+1],i=r[n+2],r[n]=434.456-e-1.402*i,r[n+1]=119.541-e+.344*t+.714*i,r[n+2]=481.816-e-1.772*t;return r},H:function(r){for(var e,t,i,n,a=0,o=1/255,f=0,s=r.length;f<s;f+=4)e=r[f]*o,t=r[f+1]*o,i=r[f+2]*o,n=r[f+3]*o,r[a++]=255+e*(-4.387332384609988*e+54.48615194189176*t+18.82290502165302*i+212.25662451639585*n-285.2331026137004)+t*(1.7149763477362134*t-5.6096736904047315*i-17.873870861415444*n-5.497006427196366)+i*(-2.5217340131683033*i-21.248923337353073*n+17.5119270841813)-n*(21.86122147463605*n+189.48180835922747),r[a++]=255+e*(8.841041422036149*e+60.118027045597366*t+6.871425592049007*i+31.159100130055922*n-79.2970844816548)+t*(-15.310361306967817*t+17.575251261109482*i+131.35250912493976*n-190.9453302588951)+i*(4.444339102852739*i+9.8632861493405*n-24.86741582555878)-n*(20.737325471181034*n+187.80453709719578),r[a++]=255+e*(.8842522430003296*e+8.078677503112928*t+30.89978309703729*i-.23883238689178934*n-14.183576799673286)+t*(10.49593273432072*t+63.02378494754052*i+50.606957656360734*n-112.23884253719248)+i*(.03296041114873217*i+115.60384449646641*n-193.58209356861505)-n*(22.33816807309886*n+180.12613974708367);return r.subarray(0,a)},getData:function(r,e,t){if(4<this.i)throw new C("Unsupported color mode");if(r=this.L(r,e),1===this.i&&t){t=r.length,e=new Uint8ClampedArray(3*t);for(var i=0,n=0;n<t;n++){var a=r[n];e[i++]=a,e[i++]=a,e[i++]=a}return e}if(3===this.i&&this.w())return this.I(r);if(4===this.i){if(this.w())return t?this.K(r):this.J(r);if(t)return this.H(r)}return r}},x.JpegDecoder=t,x.decode=function(r,e){null==e&&(e={parseMN:!0,debug:!1}),x.decode._decodeG3.allow2D=null;var t=new Uint8Array(r),i=0,n=x._binBE.readASCII(t,i,2);i+=2;var a="II"==n?x._binLE:x._binBE;a.readUshort(t,i);i+=2;var o=a.readUint(t,i);i+=4;for(var f=[];;){var s=x._readIFD(a,t,o,f,0,e);if(0==(o=a.readUint(t,s))||0==s)break}return f},x.decodeImage=function(r,e,t){var i=new Uint8Array(r),n=x._binBE.readASCII(i,0,2);if(null!=e.t256){e.isLE="II"==n,e.width=e.t256[0],e.height=e.t257[0];var a,o=e.t259?e.t259[0]:1,f=e.t266?e.t266[0]:1;e.t284&&2==e.t284[0]&&log("PlanarConfiguration 2 should not be used!"),a=e.t258?Math.min(32,e.t258[0])*e.t258.length:e.t277?e.t277[0]:1,1==o&&null!=e.t279&&e.t278&&32803==e.t262[0]&&(a=Math.round(8*e.t279[0]/(e.width*e.t278[0])));var s=8*Math.ceil(e.width*a/8),h=e.t273;null==h&&(h=e.t324);var d=e.t279;1==o&&1==h.length&&(d=[e.height*(s>>>3)]),null==d&&(d=e.t325);var u=new Uint8Array(e.height*(s>>>3)),l=0;if(null!=e.t322){for(var c=e.t322[0],v=e.t323[0],g=Math.floor((e.width+c-1)/c),_=Math.floor((e.height+v-1)/v),w=new Uint8Array(0|Math.ceil(c*v*a/8)),b=0;b<_;b++)for(var p=0;p<g;p++){for(var m=b*g+p,E=0;E<w.length;E++)w[E]=0;x.decode._decompress(e,t,i,h[m],d[m],o,w,0,f),6==o?u=w:x._copyTile(w,0|Math.ceil(c*a/8),v,u,0|Math.ceil(e.width*a/8),e.height,0|Math.ceil(p*c*a/8),b*v)}l=8*u.length}else{var y=e.t278?e.t278[0]:e.height;y=Math.min(y,e.height);for(m=0;m<h.length;m++)x.decode._decompress(e,t,i,h[m],d[m],o,u,0|Math.ceil(l/8),f),l+=s*y;l=Math.min(l,8*u.length)}e.data=new Uint8Array(u.buffer,0,0|Math.ceil(l/8))}},x.decode._decompress=function(r,e,t,i,n,a,o,f,s){if(0,1==a||n==o.length&&32767!=a)for(var h=0;h<n;h++)o[f+h]=t[i+h];else if(3==a)x.decode._decodeG3(t,i,n,o,f,r.width,s);else if(4==a)x.decode._decodeG4(t,i,n,o,f,r.width,s);else if(5==a)x.decode._decodeLZW(t,i,o,f);else if(6==a)x.decode._decodeOldJPEG(r,t,i,n,o,f);else if(7==a)x.decode._decodeNewJPEG(r,t,i,n,o,f);else if(8==a)for(var d=new Uint8Array(t.buffer,i,n),u=A.inflate(d),l=0;l<u.length;l++)o[f+l]=u[l];else 32767==a?x.decode._decodeARW(r,t,i,n,o,f):32773==a?x.decode._decodePackBits(t,i,n,o,f):32809==a?x.decode._decodeThunder(t,i,n,o,f):34713==a?x.decode._decodeNikon(r,e,t,i,n,o,f):log("Unknown compression",a);var c=r.t258?Math.min(32,r.t258[0]):1,v=r.t277?r.t277[0]:1,g=c*v>>>3,_=r.t278?r.t278[0]:r.height,w=Math.ceil(c*v*r.width/8);if(16==c&&!r.isLE&&null==r.t33422)for(var b=0;b<_;b++)for(var p=f+b*w,m=1;m<w;m+=2){var E=o[p+m];o[p+m]=o[p+m-1],o[p+m-1]=E}if(r.t317&&2==r.t317[0])for(b=0;b<_;b++){var y=f+b*w;if(16==c)for(h=g;h<w;h+=2){var U=(o[y+h+1]<<8|o[y+h])+(o[y+h-g+1]<<8|o[y+h-g]);o[y+h]=255&U,o[y+h+1]=U>>>8&255}else if(3==v)for(h=3;h<w;h+=3)o[y+h]=o[y+h]+o[y+h-3]&255,o[y+h+1]=o[y+h+1]+o[y+h-2]&255,o[y+h+2]=o[y+h+2]+o[y+h-1]&255;else for(h=g;h<w;h++)o[y+h]=o[y+h]+o[y+h-g]&255}},x.decode._ljpeg_diff=function(r,e,t){var i,n,a=x.decode._getbithuff;return i=a(r,e,t[0],t),0==((n=a(r,e,i,0))&1<<i-1)&&(n-=(1<<i)-1),n},x.decode._decodeARW=function(r,e,t,i,n,a){var o=r.t256[0],f=r.t257[0],s=r.t258[0],h=r.isLE?x._binLE:x._binBE;if(o*f==i||o*f*1.5==i)if(o*f*1.5!=i){var d,u,l,c,v,g,_,w,b=new Uint16Array(16),p=new Uint8Array(o+1);for(M=0;M<f;M++){for(var m=0;m<o;m++)p[m]=e[t++];for(B=w=0;B<o-30;w+=16){for(u=2047&(d=h.readUint(p,w)),l=2047&d>>>11,c=15&d>>>22,v=15&d>>>26,g=0;g<4&&128<<g<=u-l;g++);for(_=30,E=0;E<16;E++)E==c?b[E]=u:E==v?b[E]=l:(b[E]=((h.readUshort(p,w+(_>>3))>>>(7&_)&127)<<g)+l,2047<b[E]&&(b[E]=2047),_+=7);for(E=0;E<16;E++,B+=2){J=b[E]<<1;x.decode._putsF(n,(M*o+B)*s,J<<16-s)}B-=1&B?1:31}}}else for(var E=0;E<i;E+=3){var y=e[t+E+0],U=e[t+E+1],A=e[t+E+2];n[a+E]=U<<4|y>>>4,n[a+E+1]=y<<4|A>>>4,n[a+E+2]=A<<4|U>>>4}else{f+=8;var I,B,M,k=[t,0,0,0],D=new Uint16Array(32770),F=[3857,3856,3599,3342,3085,2828,2571,2314,2057,1800,1543,1286,1029,772,771,768,514,513],G=0,N=x.decode._ljpeg_diff;for(D[0]=15,I=E=0;E<18;E++)for(var S=32768>>>(F[E]>>>8),P=0;P<S;P++)D[++I]=F[E];for(B=o;B--;)for(M=0;M<f+1;M+=2)if(M==f&&(M=1),G+=N(e,k,D),M<f){var J=4095&G;x.decode._putsF(n,(M*o+B)*s,J<<16-s)}}},x.decode._decodeNikon=function(r,e,t,i,n,a,o){var f=[[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,5,4,3,6,2,7,1,0,8,9,11,10,12],[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,57,90,56,39,22,5,4,3,2,1,0,11,12,12],[0,0,1,4,2,3,1,2,0,0,0,0,0,0,0,0,0,5,4,6,3,7,2,8,1,9,0,10,11,12],[0,0,1,4,3,1,1,1,1,1,2,0,0,0,0,0,0,5,6,4,7,8,3,9,2,1,0,10,11,12,13,14],[0,0,1,5,1,1,1,1,1,1,1,2,0,0,0,0,0,8,92,75,58,41,7,6,5,4,3,2,1,0,13,14],[0,0,1,4,2,2,3,1,2,0,0,0,0,0,0,0,0,7,6,8,5,9,4,10,3,11,12,2,0,1,13,14]],s=r.t256[0],h=r.t257[0],d=r.t258[0],u=0,l=0,c=x.decode._make_decoder,v=x.decode._getbithuff,g=e[0].exifIFD.makerNote,_=g.t150?g.t150:g.t140,w=0,b=_[w++],p=_[w++];73!=b&&88!=p||(w+=2110),70==b&&(u=2),14==d&&(u+=3);for(var m=[[0,0],[0,0]],E=r.isLE?x._binLE:x._binBE,y=0;y<2;y++)for(var U=0;U<2;U++)m[y][U]=E.readShort(_,w),w+=2;var A,I,B,M,k,D=1<<d&32767,F=0,G=E.readShort(_,w);w+=2,1<G&&(F=Math.floor(D/(G-1))),68==b&&32==p&&0<F&&(l=E.readShort(_,562));var N=[0,0],S=c(f[u]),P=[i,0,0,0];for(A=0;A<h;A++)for(l&&A==l&&(S=c(f[u+1])),I=0;I<s;I++){y=v(t,P,S[0],S),0==((k=1+(v(t,P,(B=15&y)-(M=y>>>4),0)<<1)<<M>>>1)&1<<B-1)&&(k-=(1<<B)-(0==M?1:0)),I<2?N[I]=m[1&A][I]+=k:N[1&I]+=k;var J=Math.min(Math.max(N[1&I],0),(1<<d)-1),L=(A*s+I)*d;x.decode._putsF(a,L,J<<16-d)}},x.decode._putsF=function(r,e,t){t<<=8-(7&e);var i=e>>>3;r[i]|=t>>>16,r[1+i]|=t>>>8,r[2+i]|=t},x.decode._getbithuff=function(r,e,t,i){x.decode._get_byte;var n,a=e[0],o=e[1],f=e[2],s=e[3];if(0==t||f<0)return 0;for(;!s&&f<t&&-1!=(n=r[a++])&&!(s=0);)o=(o<<8)+n,f+=8;if(n=o<<32-f>>>32-t,i?(f-=i[n+1]>>>8,n=255&i[n+1]):f-=t,f<0)throw"e";return e[0]=a,e[1]=o,e[2]=f,e[3]=s,n},x.decode._make_decoder=function(r){var e,t,i,n,a,o=[];for(e=16;0!=e&&!r[e];e--);var f=17;for(o[0]=e,i=t=1;t<=e;t++)for(n=0;n<r[t];n++,++f)for(a=0;a<1<<e-t;a++)i<=1<<e&&(o[i++]=t<<8|r[f]);return o},x.decode._decodeNewJPEG=function(r,e,t,i,n,a){var o=r.t347,f=o?o.length:0,s=new Uint8Array(f+i);if(o){for(var h=0,d=0;d<f-1&&(255!=o[d]||217!=o[d+1]);d++)s[h++]=o[d];var u=e[t],l=e[t+1];255==u&&216==l||(s[h++]=u,s[h++]=l);for(d=2;d<i;d++)s[h++]=e[t+d]}else for(d=0;d<i;d++)s[d]=e[t+d];if(32803==r.t262[0]||34892==r.t262[0]){var c=r.t258[0],v=x.LosslessJpegDecode(s),g=v.length;if(0,16==c)if(r.isLE)for(d=0;d<g;d++)n[a+(d<<1)]=255&v[d],n[a+(d<<1)+1]=v[d]>>>8;else for(d=0;d<g;d++)n[a+(d<<1)]=v[d]>>>8,n[a+(d<<1)+1]=255&v[d];else{if(14!=c&&12!=c)throw new Error("unsupported bit depth "+c);var _=16-c;for(d=0;d<g;d++)x.decode._putsF(n,d*c,v[d]<<_)}}else{var w=new x.JpegDecoder;w.parse(s);var b=w.getData(w.width,w.height);for(d=0;d<b.length;d++)n[a+d]=b[d]}6==r.t262[0]&&(r.t262[0]=2)},x.decode._decodeOldJPEGInit=function(r,e,t,i){var n,a,o,f,s,h=0,d=0,u=!1,l=r.t513,c=l?l[0]:0,v=r.t514,g=v?v[0]:0,_=r.t324||r.t273||l,w=r.t530,b=0,p=0,m=r.t277?r.t277[0]:1,E=r.t515;if(_&&(d=_[0],u=1<_.length),!u){if(255==e[t]&&216==e[t+1])return{jpegOffset:t};if(null!=l&&(255==e[t+c]&&216==e[t+c+1]?h=t+c:log("JPEGInterchangeFormat does not point to SOI"),null==v?log("JPEGInterchangeFormatLength field is missing"):(d<=c||c+g<=d)&&log("JPEGInterchangeFormatLength field value is invalid"),null!=h))return{jpegOffset:h}}if(null!=w&&(b=w[0],p=w[1]),null!=l&&null!=v)if(2<=g&&c+g<=d){for(n=255==e[t+c+g-2]&&216==e[t+c+g-1]?new Uint8Array(g-2):new Uint8Array(g),o=0;o<n.length;o++)n[o]=e[t+c+o];log("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables")}else log("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");if(null==n){var y=0,U=[];U[y++]=255,U[y++]=216;var A=r.t519;if(null==A)throw new Error("JPEGQTables tag is missing");for(o=0;o<A.length;o++)for(U[y++]=255,U[y++]=219,U[y++]=0,U[y++]=67,U[y++]=o,f=0;f<64;f++)U[y++]=e[t+A[o]+f];for(s=0;s<2;s++){var I=r[0==s?"t520":"t521"];if(null==I)throw new Error((0==s?"JPEGDCTables":"JPEGACTables")+" tag is missing");for(o=0;o<I.length;o++){U[y++]=255,U[y++]=196;var B=19;for(f=0;f<16;f++)B+=e[t+I[o]+f];for(U[y++]=B>>>8,U[y++]=255&B,U[y++]=o|s<<4,f=0;f<16;f++)U[y++]=e[t+I[o]+f];for(f=0;f<B;f++)U[y++]=e[t+I[o]+16+f]}}if(U[y++]=255,U[y++]=192,U[y++]=0,U[y++]=8+3*m,U[y++]=8,U[y++]=r.height>>>8&255,U[y++]=255&r.height,U[y++]=r.width>>>8&255,U[y++]=255&r.width,1==(U[y++]=m))U[y++]=1,U[y++]=17,U[y++]=0;else for(o=0;o<3;o++)U[y++]=o+1,U[y++]=0!=o?17:(15&b)<<4|15&p,U[y++]=o;null!=E&&0!=E[0]&&(U[y++]=255,U[y++]=221,U[y++]=0,U[y++]=4,U[y++]=E[0]>>>8&255,U[y++]=255&E[0]),n=new Uint8Array(U)}var M=-1;for(o=0;o<n.length-1;){if(255==n[o]&&192==n[o+1]){M=o;break}o++}if(-1==M){var k=new Uint8Array(n.length+10+3*m);k.set(n);var D=n.length;if(M=n.length,(n=k)[D++]=255,n[D++]=192,n[D++]=0,n[D++]=8+3*m,n[D++]=8,n[D++]=r.height>>>8&255,n[D++]=255&r.height,n[D++]=r.width>>>8&255,n[D++]=255&r.width,1==(n[D++]=m))n[D++]=1,n[D++]=17,n[D++]=0;else for(o=0;o<3;o++)n[D++]=o+1,n[D++]=0!=o?17:(15&b)<<4|15&p,n[D++]=o}if(255==e[d]&&218==e[d+1]){var F=e[d+2]<<8|e[d+3];for((a=new Uint8Array(2+F))[0]=e[d],a[1]=e[d+1],a[2]=e[d+2],a[3]=e[d+3],o=0;o<F-2;o++)a[o+4]=e[d+o+4]}else{var G=0;if((a=new Uint8Array(8+2*m))[G++]=255,a[G++]=218,a[G++]=0,a[G++]=6+2*m,1==(a[G++]=m))a[G++]=1,a[G++]=0;else for(o=0;o<3;o++)a[G++]=o+1,a[G++]=o<<4|o;a[G++]=0,a[G++]=63,a[G++]=0}return{jpegOffset:t,tables:n,sosMarker:a,sofPosition:M}},x.decode._decodeOldJPEG=function(r,e,t,i,n,a){var o,f,s,h,d=x.decode._decodeOldJPEGInit(r,e,t,i);if(null!=d.jpegOffset)for(o=t+i-d.jpegOffset,s=new Uint8Array(o),c=0;c<o;c++)s[c]=e[d.jpegOffset+c];else{for(f=d.tables.length,(s=new Uint8Array(f+d.sosMarker.length+i+2)).set(d.tables),h=f,s[d.sofPosition+5]=r.height>>>8&255,s[d.sofPosition+6]=255&r.height,s[d.sofPosition+7]=r.width>>>8&255,s[d.sofPosition+8]=255&r.width,255==e[t]&&e[t+1]==SOS||(s.set(d.sosMarker,h),h+=sosMarker.length),c=0;c<i;c++)s[h++]=e[t+c];s[h++]=255,s[h++]=EOI}var u=new x.JpegDecoder;u.parse(s);for(var l=u.getData(u.width,u.height),c=0;c<l.length;c++)n[a+c]=l[c];r.t262&&6==r.t262[0]&&(r.t262[0]=2)},x.decode._decodePackBits=function(r,e,t,i,n){for(var a=new Int8Array(r.buffer),o=new Int8Array(i.buffer),f=e+t;e<f;){var s=a[e];if(e++,0<=s&&s<128)for(var h=0;h<s+1;h++)o[n]=a[e],n++,e++;if(-127<=s&&s<0){for(h=0;h<1-s;h++)o[n]=a[e],n++;e++}}},x.decode._decodeThunder=function(r,e,t,i,n){for(var a=[0,1,0,-1],o=[0,1,2,3,0,-3,-2,-1],f=e+t,s=2*n,h=0;e<f;){var d=r[e],u=d>>>6,l=63&d;if(e++,3==u&&(h=15&l,i[s>>>1]|=h<<4*(1-s&1),s++),0==u)for(var c=0;c<l;c++)i[s>>>1]|=h<<4*(1-s&1),s++;if(2==u)for(c=0;c<2;c++){4!=(v=l>>>3*(1-c)&7)&&(h+=o[v],i[s>>>1]|=h<<4*(1-s&1),s++)}if(1==u)for(c=0;c<3;c++){var v;2!=(v=l>>>2*(2-c)&3)&&(h+=a[v],i[s>>>1]|=h<<4*(1-s&1),s++)}}},x.decode._dmap={1:0,"011":1,"000011":2,"0000011":3,"010":-1,"000010":-2,"0000010":-3},x.decode._lens=function(){function r(r,e,t,i){for(var n=0;n<e.length;n++)r[e[n]]=t+n*i}var e="00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100",t="0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111",i="11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011",n="0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101",a="00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";e=e.split(","),t=t.split(","),i=i.split(","),n=n.split(","),a=a.split(",");var o={},f={};return r(o,e,0,1),r(o,i,64,64),r(o,a,1792,64),r(f,t,0,1),r(f,n,64,64),r(f,a,1792,64),[o,f]}(),x.decode._decodeG4=function(r,e,t,i,n,a,o){for(var f=x.decode,s=e<<3,h=0,d="",u=[],l=[],c=0;c<a;c++)l.push(0);l=f._makeDiff(l);for(var v=0,g=0,_=0,w=0,b=0,p=0,m="",E=0,y=8*Math.ceil(a/8);s>>>3<e+t;){_=f._findDiff(l,v+(0==v?0:1),1-b),w=f._findDiff(l,_,b);var U=0;if(1==o&&(U=r[s>>>3]>>>7-(7&s)&1),2==o&&(U=r[s>>>3]>>>(7&s)&1),s++,d+=U,"H"==m){if(null!=f._lens[b][d]){var A=f._lens[b][d];d="",h+=A,A<64&&(f._addNtimes(u,h,b),v+=h,b=1-b,(h=0)==--E&&(m=""))}}else"0001"==d&&(d="",f._addNtimes(u,w-v,b),v=w),"001"==d&&(d="",m="H",E=2),null!=f._dmap[d]&&(g=_+f._dmap[d],f._addNtimes(u,g-v,b),v=g,d="",b=1-b);u.length==a&&""==m&&(f._writeBits(u,i,8*n+p*y),p++,v=b=0,l=f._makeDiff(u),u=[])}},x.decode._findDiff=function(r,e,t){for(var i=0;i<r.length;i+=2)if(r[i]>=e&&r[i+1]==t)return r[i]},x.decode._makeDiff=function(r){var e=[];1==r[0]&&e.push(0,1);for(var t=1;t<r.length;t++)r[t-1]!=r[t]&&e.push(t,r[t]);return e.push(r.length,0,r.length,1),e},x.decode._decodeG3=function(r,e,t,i,n,a,o){for(var f=x.decode,s=e<<3,h=0,d="",u=[],l=[],c=0;c<a;c++)u.push(0);for(var v=0,g=0,_=0,w=0,b=0,p=-1,m="",E=0,y=!1,U=8*Math.ceil(a/8);s>>>3<e+t;){_=f._findDiff(l,v+(0==v?0:1),1-b),w=f._findDiff(l,_,b);var A=0;if(1==o&&(A=r[s>>>3]>>>7-(7&s)&1),2==o&&(A=r[s>>>3]>>>(7&s)&1),s++,d+=A,y){if(null!=f._lens[b][d]){var I=f._lens[b][d];d="",h+=I,I<64&&(f._addNtimes(u,h,b),b=1-b,h=0)}}else if("H"==m){if(null!=f._lens[b][d]){I=f._lens[b][d];d="",h+=I,I<64&&(f._addNtimes(u,h,b),v+=h,b=1-b,(h=0)==--E&&(m=""))}}else"0001"==d&&(d="",f._addNtimes(u,w-v,b),v=w),"001"==d&&(d="",m="H",E=2),null!=f._dmap[d]&&(g=_+f._dmap[d],f._addNtimes(u,g-v,b),v=g,d="",b=1-b);d.endsWith("000000000001")&&(0<=p&&f._writeBits(u,i,8*n+p*U),1==o&&(y=1==(r[s>>>3]>>>7-(7&s)&1)),2==o&&(y=1==(r[s>>>3]>>>(7&s)&1)),s++,null==f._decodeG3.allow2D&&(f._decodeG3.allow2D=y),f._decodeG3.allow2D||(y=!0,s--),d="",p++,v=b=0,l=f._makeDiff(u),u=[])}u.length==a&&f._writeBits(u,i,8*n+p*U)},x.decode._addNtimes=function(r,e,t){for(var i=0;i<e;i++)r.push(t)},x.decode._writeBits=function(r,e,t){for(var i=0;i<r.length;i++)e[t+i>>>3]|=r[i]<<7-(t+i&7)},x.decode._decodeLZW=(m={},function(r,e,t,i){if(!m.c){for(var n=new Uint32Array(65535),a=new Uint16Array(65535),o=new Uint8Array(2e6),f=0;f<256;f++)n[o[f<<2]=f]=f<<2,a[f]=1;m.c=[n,a,o]}for(var s=m.c[0],h=m.c[1],d=(o=m.c[2],258),u=1032,l=9,c=e<<3,v=0,g=0;v=(r[c>>>3]<<16|r[c+8>>>3]<<8|r[c+16>>>3])>>24-(7&c)-l&(1<<l)-1,c+=l,257!=v;){if(256==v){if(l=9,d=258,u=1032,v=(r[c>>>3]<<16|r[c+8>>>3]<<8|r[c+16>>>3])>>24-(7&c)-l&(1<<l)-1,c+=l,257==v)break;t[i]=v,i++}else if(v<d){var _=s[v],w=h[v];if(E(o,_,t,i,w),i+=w,d<=g)s[d]=u,o[s[d]]=_[0],u=u+(h[d]=1)+3&-4,d++;else{s[d]=u;var b=s[g],p=h[g];E(o,b,o,u,p),o[u+p]=o[_],p++,h[d]=p,d++,u=u+p+3&-4}d+1==1<<l&&l++}else d<=g?(s[d]=u,h[d]=0,d++):(s[d]=u,b=s[g],p=h[g],E(o,b,o,u,p),o[u+p]=o[u],p++,h[d]=p,d++,E(o,u,t,i,p),i+=p,u=u+p+3&-4),d+1==1<<l&&l++;g=v}return i}),x.tags={},x.ttypes={256:3,257:3,258:3,259:3,262:3,273:4,274:3,277:3,278:4,279:4,282:5,283:5,284:3,286:5,287:5,296:3,305:2,306:2,338:3,513:4,514:4,34665:4},x._readIFD=function(r,e,t,i,n,a){var o=r.readUshort(e,t);t+=2;var f={};a.debug&&log("   ".repeat(n),i.length-1,">>>----------------");for(var s=0;s<o;s++){var h=r.readUshort(e,t);t+=2;var d=r.readUshort(e,t);t+=2;var u=r.readUint(e,t);t+=4;var l=r.readUint(e,t);t+=4;var c=[];if(1!=d&&7!=d||(c=new Uint8Array(e.buffer,u<5?t-4:l,u)),2==d){var v=u<5?t-4:l,g=e[v],_=Math.max(0,Math.min(u-1,e.length-v));g<128||0==_?c.push(r.readASCII(e,v,_)):c=new Uint8Array(e.buffer,v,_)}if(3==d)for(var w=0;w<u;w++)c.push(r.readUshort(e,(u<3?t-4:l)+2*w));if(4==d||13==d)for(w=0;w<u;w++)c.push(r.readUint(e,(u<2?t-4:l)+4*w));if(5==d)for(w=0;w<u;w++)c.push(r.readUint(e,l+8*w)/r.readUint(e,l+8*w+4));if(8==d)for(w=0;w<u;w++)c.push(r.readShort(e,(u<3?t-4:l)+2*w));if(9==d)for(w=0;w<u;w++)c.push(r.readInt(e,(u<2?t-4:l)+4*w));if(10==d)for(w=0;w<u;w++)c.push(r.readInt(e,l+8*w)/r.readInt(e,l+8*w+4));if(11==d)for(w=0;w<u;w++)c.push(r.readFloat(e,l+4*w));if(12==d)for(w=0;w<u;w++)c.push(r.readDouble(e,l+8*w));if(f["t"+h]=c,0!=u&&0==c.length)return log(h,"unknown TIFF tag type: ",d,"num:",u),0;if(a.debug&&log("   ".repeat(n),h,d,x.tags[h],c),(330!=h||!f.t272||"DSLR-A100"!=f.t272[0])&&(330==h||34665==h||50740==h&&r.readUshort(e,r.readUint(c,0))<300||61440==h)){var b=50740==h?[r.readUint(c,0)]:c,p=[];for(w=0;w<b.length;w++)x._readIFD(r,e,b[w],p,n+1,a);330==h&&(f.subIFD=p),34665==h&&(f.exifIFD=p[0]),50740==h&&(f.dngPrvt=p[0]),61440==h&&(f.fujiIFD=p[0])}if(37500==h&&a.parseMN){var m=c;if("Nikon"==r.readASCII(m,0,5))f.makerNote=x.decode(m.slice(10).buffer)[0];else if(r.readUshort(e,l)<300&&r.readUshort(e,l+4)<=12){var E=[];x._readIFD(r,e,l,E,n+1,a),f.makerNote=E[0]}}}return i.push(f),a.debug&&log("   ".repeat(n),"<<<---------------"),t},x.toRGBA8=function(r){var e=r.width,t=r.height,i=e*t,n=4*i,a=r.data,o=new Uint8Array(4*i),f=r.t262?r.t262[0]:2,s=r.t258?Math.min(32,r.t258[0]):1;if(0,0==f)for(var h=Math.ceil(s*e/8),d=0;d<t;d++){var u=d*h,l=d*e;if(1==s)for(var c=0;c<e;c++){var v=l+c<<2,g=a[u+(c>>3)]>>7-(7&c)&1;o[v]=o[v+1]=o[v+2]=255*(1-g),o[v+3]=255}if(4==s)for(c=0;c<e;c++){v=l+c<<2,g=a[u+(c>>1)]>>4-4*(1&c)&15;o[v]=o[v+1]=o[v+2]=17*(15-g),o[v+3]=255}if(8==s)for(c=0;c<e;c++){v=l+c<<2,g=a[u+c];o[v]=o[v+1]=o[v+2]=255-g,o[v+3]=255}}else if(1==f)for(h=Math.ceil(s*e/8),d=0;d<t;d++){u=d*h,l=d*e;if(1==s)for(c=0;c<e;c++){v=l+c<<2,g=a[u+(c>>3)]>>7-(7&c)&1;o[v]=o[v+1]=o[v+2]=255*g,o[v+3]=255}if(2==s)for(c=0;c<e;c++){v=l+c<<2,g=a[u+(c>>2)]>>6-2*(3&c)&3;o[v]=o[v+1]=o[v+2]=85*g,o[v+3]=255}if(8==s)for(c=0;c<e;c++){v=l+c<<2,g=a[u+c];o[v]=o[v+1]=o[v+2]=g,o[v+3]=255}if(16==s)for(c=0;c<e;c++){v=l+c<<2,g=a[u+(2*c+1)];o[v]=o[v+1]=o[v+2]=Math.min(255,g),o[v+3]=255}}else if(2==f){var _=r.t258?r.t258.length:3;if(8==s){if(4==_)for(c=0;c<n;c++)o[c]=a[c];if(3==_)for(c=0;c<i;c++){var w=3*c;o[v=c<<2]=a[w],o[v+1]=a[w+1],o[v+2]=a[w+2],o[v+3]=255}}else{if(4==_)for(c=0;c<i;c++){w=8*c+1;o[v=c<<2]=a[w],o[v+1]=a[w+2],o[v+2]=a[w+4],o[v+3]=a[w+6]}if(3==_)for(c=0;c<i;c++){w=6*c+1;o[v=c<<2]=a[w],o[v+1]=a[w+2],o[v+2]=a[w+4],o[v+3]=255}}}else if(3==f){var b=r.t320;for(c=0;c<i;c++){v=c<<2;var p=a[c];o[v]=b[p]>>8,o[v+1]=b[256+p]>>8,o[v+2]=b[512+p]>>8,o[v+3]=255}}else if(5==f){var m=4<(_=r.t258?r.t258.length:4)?1:0;for(c=0;c<i;c++){v=c<<2;var E=255-a[k=c*_],y=255-a[k+1],U=255-a[k+2],A=(255-a[k+3])*(1/255);o[v]=~~(E*A+.5),o[v+1]=~~(y*A+.5),o[v+2]=~~(U*A+.5),o[v+3]=255*(1-m)+a[k+4]*m}}else if(6==f&&r.t278){var I=r.t278[0];for(d=0;d<t;d+=I){c=d*e;for(var B=I*e,M=0;M<B;M++){v=4*(c+M),U=a[(k=3*c+4*(M>>>1))+(1&M)];var k,D=a[k+2]-128,F=a[k+3]-128,G=U+((F>>2)+(F>>3)+(F>>5)),N=U-((D>>2)+(D>>4)+(D>>5))-((F>>1)+(F>>3)+(F>>4)+(F>>5)),S=U+(D+(D>>1)+(D>>2)+(D>>6));o[v]=Math.max(0,Math.min(255,G)),o[v+1]=Math.max(0,Math.min(255,N)),o[v+2]=Math.max(0,Math.min(255,S)),o[v+3]=255}}}else log("Unknown Photometric interpretation: "+f);return o},x._binBE={nextZero:function(r,e){for(;0!=r[e];)e++;return e},readUshort:function(r,e){return r[e]<<8|r[e+1]},readShort:function(r,e){var t=x._binBE.ui8;return t[0]=r[e+1],t[1]=r[e+0],x._binBE.i16[0]},readInt:function(r,e){var t=x._binBE.ui8;return t[0]=r[e+3],t[1]=r[e+2],t[2]=r[e+1],t[3]=r[e+0],x._binBE.i32[0]},readUint:function(r,e){var t=x._binBE.ui8;return t[0]=r[e+3],t[1]=r[e+2],t[2]=r[e+1],t[3]=r[e+0],x._binBE.ui32[0]},readASCII:function(r,e,t){for(var i="",n=0;n<t;n++)i+=String.fromCharCode(r[e+n]);return i},readFloat:function(r,e){for(var t=x._binBE.ui8,i=0;i<4;i++)t[i]=r[e+3-i];return x._binBE.fl32[0]},readDouble:function(r,e){for(var t=x._binBE.ui8,i=0;i<8;i++)t[i]=r[e+7-i];return x._binBE.fl64[0]},writeUshort:function(r,e,t){r[e]=t>>8&255,r[e+1]=255&t},writeUint:function(r,e,t){r[e]=t>>24&255,r[e+1]=t>>16&255,r[e+2]=t>>8&255,r[e+3]=t>>0&255},writeASCII:function(r,e,t){for(var i=0;i<t.length;i++)r[e+i]=t.charCodeAt(i)},writeDouble:function(r,e,t){x._binBE.fl64[0]=t;for(var i=0;i<8;i++)r[e+i]=x._binBE.ui8[7-i]}},x._binBE.ui8=new Uint8Array(8),x._binBE.i16=new Int16Array(x._binBE.ui8.buffer),x._binBE.i32=new Int32Array(x._binBE.ui8.buffer),x._binBE.ui32=new Uint32Array(x._binBE.ui8.buffer),x._binBE.fl32=new Float32Array(x._binBE.ui8.buffer),x._binBE.fl64=new Float64Array(x._binBE.ui8.buffer),x._binLE={nextZero:x._binBE.nextZero,readUshort:function(r,e){return r[e+1]<<8|r[e]},readShort:function(r,e){var t=x._binBE.ui8;return t[0]=r[e+0],t[1]=r[e+1],x._binBE.i16[0]},readInt:function(r,e){var t=x._binBE.ui8;return t[0]=r[e+0],t[1]=r[e+1],t[2]=r[e+2],t[3]=r[e+3],x._binBE.i32[0]},readUint:function(r,e){var t=x._binBE.ui8;return t[0]=r[e+0],t[1]=r[e+1],t[2]=r[e+2],t[3]=r[e+3],x._binBE.ui32[0]},readASCII:x._binBE.readASCII,readFloat:function(r,e){for(var t=x._binBE.ui8,i=0;i<4;i++)t[i]=r[e+i];return x._binBE.fl32[0]},readDouble:function(r,e){for(var t=x._binBE.ui8,i=0;i<8;i++)t[i]=r[e+i];return x._binBE.fl64[0]}},x._copyTile=function(r,e,t,i,n,a,o,f){for(var s=Math.min(e,n-o),h=Math.min(t,a-f),d=0;d<h;d++)for(var u=(f+d)*n+o,l=d*e,c=0;c<s;c++)i[u+c]=r[l+c]},x.LosslessJpegDecode=function(){function e(r){this.w=r,this.N=0,this._=0,this.G=0}e.prototype={t:function(r){this.N=Math.max(0,Math.min(this.w.length,r))},i:function(){return this.w[this.N++]},l:function(){var r=this.N;return this.N+=2,this.w[r]<<8|this.w[r+1]},J:function(){return 0==this._&&(this.G=this.w[this.N],this.N+=1+(this.G+1>>>8),this._=8),this.G>>>--this._&1},Z:function(r){var e=this._,t=this.G,i=Math.min(e,r);r-=i;for(var n=t>>>(e-=i)&(1<<i)-1;0<r;)t=this.w[this.N],this.N+=1+(t+1>>>8),r-=i=Math.min(8,r),n<<=i,n|=t>>>(e=8-i)&(1<<i)-1;return this._=e,this.G=t,n}};var o={};function n(r){this.z=new e(r),this.D(this.z)}return o.X=function(){return[0,0,-1]},o.s=function(r,e,t){r[o.Y(r,0,t)+2]=e},o.Y=function(r,e,t){if(-1!=r[e+2])return 0;if(0==t)return e;for(var i=0;i<2;i++){0==r[e+i]&&(r[e+i]=r.length,r.push(0),r.push(0),r.push(-1));var n=o.Y(r,r[e+i],t-1);if(0!=n)return n}return 0},o.B=function(r,e){for(var t=0,i=0,n=e._,a=e.G,o=e.N;;)if(0==n&&(o+=1+((a=e.w[o])+1>>>8),n=8),-1!=(i=r[(t=r[t+(a>>>--n&1)])+2]))return e._=n,e.G=a,e.N=o,i;return-1},n.prototype={$:function(r,e){this.Q=r.i(),this.F=r.l(),this.o=r.l();var t=this.O=r.i();this.L=[];for(var i=0;i<t;i++){var n=r.i();r.i();r.i(),this.L[n]=i}r.t(r.N+e-(6+3*t))},e:function(){var r=0,e=this.z.i();null==this.H&&(this.H={});for(var t=this.H[e]=o.X(),i=[],n=0;n<16;n++)i[n]=this.z.i(),r+=i[n];for(n=0;n<16;n++)for(var a=0;a<i[n];a++)o.s(t,this.z.i(),n+1);return r+17},W:function(r){for(;0<r;)r-=this.e()},p:function(r,e){var t=r.i();this.U||(this.U=[]);for(var i=0;i<t;i++){var n=r.i(),a=r.i();this.U[this.L[n]]=this.H[a>>>4]}this.g=r.i(),r.t(r.N+e-(2+2*t))},D:function(r){var e=!1;if((t=r.l())===n.q)do{var t=r.l(),i=r.l()-2;switch(t){case n.m:this.$(r,i);break;case n.K:this.W(i);break;case n.V:this.p(r,i),e=!0;break;default:r.t(r.N+i)}}while(!e)},I:function(r,e){var t=o.B(e,r);if(16==t)return-32768;var i=r.Z(t);return 0==(i&1<<t-1)&&(i-=(1<<t)-1),i},B:function(r,e){for(var t=this.z,i=this.O,n=this.F,a=this.I,o=this.g,f=this.o*i,s=this.U,h=0;h<i;h++)r[h]=a(t,s[h])+(1<<this.Q-1);for(var d=i;d<f;d+=i)for(h=0;h<i;h++)r[d+h]=a(t,s[h])+r[d+h-i];for(var u=e,l=1;l<n;l++){for(h=0;h<i;h++)r[u+h]=a(t,s[h])+r[u+h-e];for(d=i;d<f;d+=i)for(h=0;h<i;h++){var c=u+d+h,v=r[c-i];6==o&&(v=r[c-e]+(v-r[c-i-e]>>>1)),r[c]=v+a(t,s[h])}u+=e}}},n.m=65475,n.K=65476,n.q=65496,n.V=65498,function(r){var e=new n(r),t=new(8<e.Q?Uint16Array:Uint8Array)(e.o*e.F*e.O),i=e.o*e.O;return e.B(t,i),t}}()}(UTIF,pako);

// Register as ArmorPaint plugin
let import_tiff = function(path, done) {
	iron.Data.getBlob(path, function(b) {
		let ifds = UTIF.decode(b.bytes.b.bufferValue);
		UTIF.decodeImage(b.bytes.b.bufferValue, ifds[0]);
		let rgba = UTIF.toRGBA8(ifds[0]);
		let image = core.Image.fromBytes(core.Bytes.ofData(rgba.buffer), ifds[0].width, ifds[0].height);
		done(image);
	});
}

let plugin = new arm.Plugin();
let formats = arm.Path.textureFormats;
let importers = arm.Path.textureImporters;
formats.push("tif");
formats.push("tiff");
importers.h["tif"] = import_tiff;
importers.h["tiff"] = import_tiff;

plugin.delete = function() {
	formats.splice(formats.indexOf("tif"), 1);
	formats.splice(formats.indexOf("tiff"), 1);
	importers.h["tif"] = null;
	importers.h["tiff"] = null;
};