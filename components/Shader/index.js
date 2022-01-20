import { useEffect } from 'react'
import ShaderToy from './ShaderToy.js'

export default function Shader(p) {
  const rootId = `shader-root-${p.shaderId}`
  const canvasId = `shader-canvas-${p.shaderId}`

  useEffect(() => loadShader(p.shaderId, canvasId, rootId), [])

  return pug`
    div(...p id=rootId)
      canvas.w-full.h-full(id=canvasId tabIndex=-1)
  `
}

function loadShader(shaderId, canvasId, parentId) {
  const parent = document.getElementById(parentId)
  const shaderToy = new ShaderToy(parent, canvasId)

  if (!shaderToy.mCreated) {
    // failed - show backup
    return
  }

  const shader = Config[shaderId]
  if (shader) shaderToy.compileAndStart(shader)
  else console.warn('no shader found for:', shaderId)
}

const Config = {
  'sdscWS': [
    {
      "ver": "0.1",
      "info": {
      },
      "renderpass": [
        {
          "inputs": [],
          "outputs": [
            {
              "id": "4dfGRr",
              "channel": 0
            }
          ],
          "code": "// variant of https://www.shadertoy.com/view/4sGXDK\n// compact version of https://www.shadertoy.com/view/4dcSWs\n\nvoid mainImage(out vec4 O,  vec2 U){\n\n    vec2 z = iResolution.xy;                                // normalized coordinates\n         U = (U+U - z) / z.y;\n    \n\tz = U - vec2(-1,0);  U.x -= .5;                         // Moebius transform\n    U *= mat2(z,-z.y,z.x) / dot(U,U);\n    U+=.5;  // offset. not included as length(U+=.5) because of an ATI bug\n    \n                     //  spiral, zoom       phase     // spiraling\n    U =   log(length(U))*vec2(.5, -.5) + iTime/18.\n        + atan(U.y, U.x)/6.3 * vec2(5, 1);        \n\t                                 // n  \n  //O += length(fract(U*3.)) -O;\n  //O  = texture(iChannel0, fract(U*3.));  // U*1. is also nice\n  //O += length(sin(U*30.)) -O;\n    O = .5+.5*sin(6.*3.14159*U.y+vec4(0,2.1,-2.1,0));\n                 // try also U.x\n  //O /= max(O.x,max(O.y,O.z)); // saturates the rainbow\n}",
          "name": "Image",
          "description": "",
          "type": "image"
        }
      ]
    }
  ],
  fdscR8: [
    {
      "ver": "0.1",
      "info": {
      },
      "renderpass": [
        {
          "inputs": [],
          "outputs": [
            {
              "id": "4dfGRr",
              "channel": 0
            }
          ],
          "code": "// Created by Alex Kluchikov viscosity klk\n// tweaked by PyThrrrone\n\n#define PI 3.141592654\nvec2 rot(vec2 p,float a)\n{\n    float c=sin(a*35.83);\n    float s=cos(a*35.83);\n    return p*mat2(s,c,c,-s);\n}\nvoid mainImage(out vec4 o, in vec2 uv)\n{\n    uv/=iResolution.xy;\n    uv=vec2(.125,.75)+(uv-vec2(.125,.5))*.003;\n    float T=iTime*.01;\n\n    vec3 c = clamp(1.-.7*vec3(\n        length(uv-vec2(1.1,1)),\n        length(uv-vec2(1.1,1)),\n        length(uv-vec2(1.1,1))\n        ),0.,1.)*2.-1.;\n    vec3 c0=vec3(0);\n    float w0=0.;\n    const float N=5.;\n    for(float i=0.;i<N;i++)\n    {\n        float wt=(i*i/N/N-.2)*.3;\n        float wp=0.5+(i+1.)*(i+1.5)*0.000001;\n        float wb=.05+i/N*0.1;\n    \tc.zx=rot(c.zx,1.6+T*0.65*wt+(uv.x+.7)*23.*wp);\n    \tc.xy=rot(c.xy,c.z*c.x*wb+1.7+T*wt+(uv.y+1.1)*15.*wp);\n    \tc.yz=rot(c.yz,c.x*c.y*wb+2.4-T*0.79*wt+(uv.x+uv.y*(fract(i/2.)-0.25)*4.)*17.*wp);\n    \tc.zx=rot(c.zx,c.y*c.z*wb+1.6-T*0.65*wt+(uv.x+.7)*23.*wp);\n    \tc.xy=rot(c.xy,c.z*c.x*wb+1.7-T*wt+(uv.y+1.1)*15.*wp);\n        float w=(1.5-i/N);\n        c0+=c*w;\n        w0+=w;\n    }\n    c0=c0/w0*2.+.5;//*(1.-pow(uv.y-.5,2.)*2.)*2.+.5;\n    c0*=.5+dot(c0,vec3(1,1,1))/sqrt(3.)*.5;\n    c0+=pow(length(sin(c0*PI*4.))/sqrt(3.)*1.0,20.)*(.3+.7*c0);\n\to=vec4(c0,1.0);\n}\n",
          "name": "Image",
          "description": "",
          "type": "image"
        }
      ]
    }
  ],
  '7dXczN': [
    {
      "ver": "0.1",
      "info": {},
      "renderpass": [
        {
          "inputs": [],
          "outputs": [],
          "code": "#define frequency 2.0\n\n//\tSource 1\n#define useSource1\n#define source1pos cos(1.0 * t), sin(2.31 * t)\n#define source1amp 2.0\n#define source1phase 0.0\n\n//\tSource 2\n#define useSource2\n#define source2pos cos(1.43 * t), sin(1.17 * t)\n#define source2amp 1.0\n#define source2phase 0.0\n\n//\tSource 3\n#define useSource3\n#define source3pos cos(0.65 * t), sin(0.72 * t)\n#define source3amp 1.0\n#define source3phase 0.5\n\n//\tSource 4\n//#define useSource4\n#define source4pos cos(1.89 * t), sin(0.92 * t)\n#define source4amp 1.0\n#define source4phase 0.25\n\n//\tMouse\n#define mouseAmp 4.0\n#define mousePhase 0.0\n\n//\tSource circles\n#define circleRadius 0.015\n#define circleColor 0.6, 0.0, 0.0\n\n//\tColor scheme\n#define colorGamma 4.0, 1.0, 0.3\n\n\nvec4 addSource(vec4 total, vec2 pos, vec2 sourcePos, float sourceAmp, float sourcePhase) {\n    float dist = distance(pos, sourcePos);\n    float amp = sourceAmp / (dist * dist);\n    float angle = dist * frequency + 6.2831853 * sourcePhase;\n    return vec4(total.xyz + vec3(amp * sin(angle), amp * cos(angle), amp), min(total.w, dist));\n}\n\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord) {\n    float screenHeight = iResolution.y / iResolution.x;\n    float border = 1.0 / iResolution.x;\n\tvec2 pos = (2.0 * fragCoord.xy - iResolution.xy) / iResolution.x;\n    \n    vec2 window = 0.8 * vec2(1.0, screenHeight);\n    \n    float t = iTime / 5.;\n    vec4 total = vec4(0.0, 0.0, 0.0, 2.0 * circleRadius);\n    \n    #ifdef useSource1\n    total = addSource(total, pos, window * vec2(source1pos), source1amp, source1phase);\n    #endif\n    \n    #ifdef useSource2\n    total = addSource(total, pos, window * vec2(source2pos), source2amp, source2phase);\n    #endif\n    \n    #ifdef useSource3\n    total = addSource(total, pos, window * vec2(source3pos), source3amp, source3phase);\n    #endif\n    \n    #ifdef useSource4\n    total = addSource(total, pos, window * vec2(source4pos), source4amp, source4phase);\n    #endif\n    \n    if (iMouse.z > 0.0) {\n        vec2 mousePos = vec2((2.0 * iMouse.xy - iResolution.xy) / iResolution.x);\n        total = addSource(total, pos, mousePos, mouseAmp, mousePhase);\n    }\n    \n    vec3 color = vec3(length(total.xy) / total.z);\n    color = pow(color, vec3(colorGamma));\n    \n    float circle = smoothstep(circleRadius + border,  circleRadius - border, total.w);\n    color = mix(color, vec3(circleColor), circle);\n    \n    fragColor = vec4(color, 1.0);\n}",
          "name": "Image",
          "description": "",
          "type": "image"
        }
      ]
    }
  ],
  fsfczH: [
    {
      "ver": "0.1",
      "info": {},
      "renderpass": [
        {
          "inputs": [
            {
              "id": "4dXGzn",
              "filepath": "/media/a/0c7bf5fe9462d5bffbd11126e82908e39be3ce56220d900f633d58fb432e56f5.png",
              "previewfilepath": "/media/ap/0c7bf5fe9462d5bffbd11126e82908e39be3ce56220d900f633d58fb432e56f5.png",
              "type": "texture",
              "channel": 0,
              "sampler": {
                "filter": "mipmap",
                "wrap": "repeat",
                "vflip": "true",
                "srgb": "false",
                "internal": "byte"
              },
              "published": 1
            }
          ],
          "outputs": [
            {
              "id": "4dfGRr",
              "channel": 0
            }
          ],
          "code": "float colormap_red(float x) {\n    if (x < 0.0) {\n        return 54.0 / 255.0;\n    } else if (x < 20049.0 / 82979.0) {\n        return (829.79 * x + 54.51) / 255.0;\n    } else {\n        return 1.0;\n    }\n}\n\nfloat colormap_green(float x) {\n    if (x < 20049.0 / 82979.0) {\n        return 0.0;\n    } else if (x < 327013.0 / 810990.0) {\n        return (8546482679670.0 / 10875673217.0 * x - 2064961390770.0 / 10875673217.0) / 255.0;\n    } else if (x <= 1.0) {\n        return (103806720.0 / 483977.0 * x + 19607415.0 / 483977.0) / 255.0;\n    } else {\n        return 1.0;\n    }\n}\n\nfloat colormap_blue(float x) {\n    if (x < 0.0) {\n        return 54.0 / 255.0;\n    } else if (x < 7249.0 / 82979.0) {\n        return (829.79 * x + 54.51) / 255.0;\n    } else if (x < 20049.0 / 82979.0) {\n        return 127.0 / 255.0;\n    } else if (x < 327013.0 / 810990.0) {\n        return (792.02249341361393720147485376583 * x - 64.364790735602331034989206222672) / 255.0;\n    } else {\n        return 1.0;\n    }\n}\n\nvec4 colormap(float x) {\n    return vec4(colormap_red(x), colormap_green(x), colormap_blue(x), 1.0);\n}\n\n// http://www.iquilezles.org/www/articles/warp/warp.htm\n/*float noise( in vec2 x )\n{\n    vec2 p = floor(x);\n    vec2 f = fract(x);\n    f = f*f*(3.0-2.0*f);\n    float a = textureLod(iChannel0,(p+vec2(0.5,0.5))/256.0,0.0).x;\n\tfloat b = textureLod(iChannel0,(p+vec2(1.5,0.5))/256.0,0.0).x;\n\tfloat c = textureLod(iChannel0,(p+vec2(0.5,1.5))/256.0,0.0).x;\n\tfloat d = textureLod(iChannel0,(p+vec2(1.5,1.5))/256.0,0.0).x;\n    return mix(mix( a, b,f.x), mix( c, d,f.x),f.y);\n}*/\n\n\nfloat rand(vec2 n) { \n    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n}\n\nfloat noise(vec2 p){\n    vec2 ip = floor(p);\n    vec2 u = fract(p);\n    u = u*u*(3.0-2.0*u);\n\n    float res = mix(\n        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),\n        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);\n    return res*res;\n}\n\nconst mat2 mtx = mat2( 0.80,  0.60, -0.60,  0.80 );\n\nfloat fbm( vec2 p )\n{\n    float f = 0.0;\n\n    f += 0.500000*noise( p + (iTime/36.)  ); p = mtx*p*4.02;\n    f += 0.031250*noise( p ); p = mtx*p*2.01;\n    f += 0.250000*noise( p ); p = mtx*p*2.03;\n    f += 0.125000*noise( p ); p = mtx*p*2.01;\n    f += 0.062500*noise( p ); p = mtx*p*2.04;\n    f += 0.015625*noise( p + sin(iTime) );\n\n    return f/0.96875;\n}\n\nfloat pattern( in vec2 p )\n{\n\treturn fbm( p + fbm( p + fbm( p ) ) );\n}\n\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n    vec2 uv = fragCoord/iResolution.x;\n\tfloat shade = pattern(uv);\n    fragColor = vec4(colormap(shade).rgb, shade);\n}\n\n/** SHADERDATA\n{\n\t\"title\": \"Base warp fBM\",\n\t\"description\": \"Noise but Pink\",\n\t\"model\": \"person\"\n}\n*/",
          "name": "Image",
          "description": "",
          "type": "image"
        }
      ]
    }
  ],
  '7dlyDS': [
    {
      "ver": "0.1",
      "info": {},
      "renderpass": [
        {
          "inputs": [
            {
              "id": "XdX3Rn",
              "filepath": "/media/a/52d2a8f514c4fd2d9866587f4d7b2a5bfa1a11a0e772077d7682deb8b3b517e5.jpg",
              "previewfilepath": "/media/ap/52d2a8f514c4fd2d9866587f4d7b2a5bfa1a11a0e772077d7682deb8b3b517e5.jpg",
              "type": "texture",
              "channel": 0,
              "sampler": {
                "filter": "mipmap",
                "wrap": "repeat",
                "vflip": "true",
                "srgb": "false",
                "internal": "byte"
              },
              "published": 1
            },
            {
              "id": "4sf3Rr",
              "filepath": "/media/a/ad56fba948dfba9ae698198c109e71f118a54d209c0ea50d77ea546abad89c57.png",
              "previewfilepath": "/media/ap/ad56fba948dfba9ae698198c109e71f118a54d209c0ea50d77ea546abad89c57.png",
              "type": "texture",
              "channel": 1,
              "sampler": {
                "filter": "mipmap",
                "wrap": "repeat",
                "vflip": "true",
                "srgb": "false",
                "internal": "byte"
              },
              "published": 1
            }
          ],
          "outputs": [
            {
              "id": "4dfGRr",
              "channel": 0
            }
          ],
          "code": "const vec3 sunColor = vec3(1.5,.9,.7);const vec3 lightColor = vec3(1.,.8,.7);const vec3 darkColor = vec3(.2,.2,.3);const vec3 baseSkyColor = vec3(.6,.7,.8);const vec3 seaColor = vec3(.1,.3,.5);const vec3 seaLight = vec3(.1,.45,.55);vec3 gamma( vec3 col, float g){    return pow(col,vec3(g));}        float noiseLayer(vec2 uv){        float t = (iTime+iMouse.x)/9.;    uv.y -= t/60.;    float e = 0.;    for(float j=1.; j<9.; j++){        float timeOffset = t*mod(j,2.989)*.02 - t*.015;        e += 1.-texture(iChannel0, uv * (j*1.789) + j*159.45 + timeOffset).r / j ;    }    e /= 3.5;    return e;}float waterHeight(vec2 uv){    float t = (iTime+iMouse.x);    float e = 0.;    for(float j=1.; j<6.; j++){float timeOffset = t*mod(j,.789)*.1 - t*.05;        e += texture(iChannel1, uv * (j*1.789) + j*159.45 + timeOffset).r / j ;    }    e /= 6.;    return e;}vec3 waterNormals(vec2 uv){    uv.x *= .25;    float eps = 0.008;        vec3 n=vec3( waterHeight(uv) - waterHeight(uv+vec2(eps,0.)),                 1.,                 waterHeight(uv) - waterHeight(uv+vec2(0.,eps)));   return normalize(n);}vec3 drawSky( vec2 uv, vec2 uvInit){         float clouds = noiseLayer(uv);        float eps = 0.1;    vec3 n = vec3(clouds - noiseLayer(uv+vec2(eps,0.)),            -.3,             clouds - noiseLayer(uv+vec2(0.,eps)));    n = normalize(n);     float l = dot(n, normalize(vec3(uv.x,-.2,uv.y+.5)));    l = clamp(l,0.,1.);     vec3 cloudColor = mix(baseSkyColor, darkColor, length(uvInit)*1.7);    cloudColor = mix( cloudColor,sunColor, l );        vec3 skyColor = mix(lightColor , baseSkyColor, clamp(uvInit.y*2.,0.,1.) );    skyColor = mix ( skyColor, darkColor, clamp(uvInit.y*3.-.8,0.,1.) );    skyColor = mix ( skyColor, sunColor, clamp(-uvInit.y*10.+1.1,0.,1.) );    if(length(uvInit-vec2(0.,.04) )<.03){     skyColor += vec3(2.,1.,.8);    }          float cloudMix = clamp(0.,1.,clouds*4.-8.);    vec3 color = mix( cloudColor, skyColor, clamp(cloudMix,0.,1.) );      uvInit.y = abs(uvInit.y);    float islandHeight = texture(iChannel1, uvInit.xx/2.+.67).r/15. - uvInit.y + .978;    islandHeight += texture(iChannel1, uvInit.xx*2.).r/60.;    islandHeight = clamp(floor(islandHeight),0.,1.);        vec3 landColor = mix(baseSkyColor, darkColor, length(uvInit)*1.5);    color = mix(color, landColor, islandHeight);    return color;}void mainImage( out vec4 fragColor, in vec2 fragCoord ){vec2 uvInit = fragCoord.xy / iResolution.xy;    uvInit.x -= .5;    uvInit.x *= iResolution.x/iResolution.y;    uvInit.y -= 0.35;        vec2 uv = uvInit;    uv.y -=.01;uv.y = abs(uv.y);    uv.y = log(uv.y)/2.;    uv.x *= 1.-uv.y;    uv *= .2;        vec3 col = vec3(1.,1.,1.);        if(uvInit.y < 0.){                      vec3 n = waterNormals(uv);        vec3 waterReflections = drawSky(uv+n.xz, uvInit+n.xz);        float transparency = dot(n, vec3(0.,.2,1.5));                transparency -= length ( (uvInit - vec2(0.,-.35)) * vec2(.2,1.) );transparency = (transparency*12.+1.5);                waterReflections = mix( waterReflections, seaColor, clamp(transparency,0.,1.) );        waterReflections = mix( waterReflections, seaLight, max(0.,transparency-1.5) );       col = waterReflections;                col = mix(col, col*vec3(.6,.8,1.), -uv.y);                col += max(0.,.02-abs(uv.x+n.x))* 8000. * vec3(1.,.7,.3) * -uv.y * max(0.,-n.z);            }else{                    col = drawSky(uv, uvInit);    }    col += vec3(1.,.8,.6) * (0.55-length(uvInit)) ;    col *= .75;    col = gamma(col,1.3);        fragColor = vec4(col,1.);}",
          "name": "Image",
          "description": "",
          "type": "image"
        }
      ]
    }
  ],
  '7sfyzN': [
    {
      "ver": "0.1",
      "info": {},
      "renderpass": [
        {
          "inputs": [],
          "outputs": [
            {
              "id": "4dfGRr",
              "channel": 0
            }
          ],
          "code": "// forked from https://www.shadertoy.com/view/4tl3Rn\n\nfloat roundLookingBlob(vec2 fragCoord, vec2 tPos, float r) {\n    vec2 pos = fragCoord.xy/iResolution.yy - vec2(0.5);\n    pos.x -= ((iResolution.x-iResolution.y)/iResolution.y)/2.0;\n    return pow(max(1.0-length(pos-tPos), 0.0) , r);\n}\n\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n    float time = iTime / 7.;\n\tfloat v = 0.0 \n        + roundLookingBlob(fragCoord * 0.2,vec2(sin(time)* 2.0, cos(time)*0.004), 10.0)\n    \t+ roundLookingBlob(fragCoord,vec2(sin(time*0.6)*0.2, cos(time)*0.3), 7.0)\n    \t+ roundLookingBlob(fragCoord,vec2(cos(time*0.8)*0.3, sin(time*1.1)*0.04), 5.0)\n    \t+ roundLookingBlob(fragCoord,vec2(cos(time*0.2)*0.2, sin(time*0.9)*0.05), 8.0)\n    \t+ roundLookingBlob(fragCoord,vec2(cos(time*1.2)*0.2, 2.0 *sin(time*0.9)*0.05), 8.0)\n        + roundLookingBlob(fragCoord,vec2(cos(time*0.3)*0.4, sin(time*1.1)*0.4), 5.0)\n    \t+ roundLookingBlob(fragCoord,vec2(sin(time*0.6)*0.9, cos(time)*0.3), 7.0)\n    \t+ roundLookingBlob(fragCoord,vec2(sin(time*0.6)*0.3, cos(time)*0.8), 7.0)\n        + roundLookingBlob(fragCoord,vec2(cos(time*0.3)*0.9, sin(time*0.1)*0.4), 3.0)\n        ;\n    v = clamp((v-0.5)*1000.0, 0.0, 1.0);\n    //v = 1.0;\n    //float color = cos(iTime * fragCoord.x) * 1.0;\n    //v *= color;\n    //float r = 1.0 + fragCoord.y *sin(iTime * 0.5) +  0.0001 * (2.0 * sin(iTime * 1.0)) ;\n    float r = \n        -1.0 * 1.0 *sin(time) \n        - 2.0* cos(1.0 * time) * fragCoord.x / iResolution.x * fragCoord.y / iResolution.y;\n    float g = 0.0 - 0.5 * cos(2.0 * time) *  fragCoord.y / iResolution.y; //1.0* sin(iTime) - r + 0.8;\n    float b = 4.0 + sin(time) - g + 0.8;\n\tfragColor = vec4(r * v, v * g, v * b, 0.0);\n}\n\n//* fragCoord.y * fragCoord.x",
          "name": "Image",
          "description": "",
          "type": "image"
        }
      ]
    }
  ],
  '7dfyzN': [
    {
      "ver": "0.1",
      "info": {},
      "renderpass": [
        {
          "inputs": [],
          "outputs": [
            {
              "id": "4dfGRr",
              "channel": 0
            }
          ],
          "code": "#define PI 3.14159265\n\nfloat f(vec2 u)\n{\n    float time = iTime / 8.;\n    return mod(abs(u.y*sin(time*0.21) + \n                   u.x*u.y*sin(time*0.13+2.) + \n                   u.y*u.y*sin(time*0.14+3.) + \n                   u.x*u.x*sin(time*0.22+4.)), 0.3*length(u*u*u));\n}\n\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n    vec2 uv = (fragCoord/iResolution.xy)*2. - 1.;\n    uv.y *= iResolution.y / iResolution.x;\n    uv *= 2.5;\n        \n    vec3 ca = (iTime +uv.x+vec3(0,2.*PI/3.,4.*PI/3.));\n    ca.g = 0.;\n    \n    vec3 col = 0.525 + 0.625*cos(ca);\n    col /= exp(length(uv*uv));\n    col = col * 10.;\n    \n    float p = 2.0 / iResolution.x;\n    \n    float ssx = smoothstep(uv.x-p, uv.x+p, uv.x);\n    float ssy = smoothstep(uv.y-p, uv.y+p, uv.y);\n    \n    vec3 col1 = col * mix(vec3(f(vec2(uv.x-p, uv.y))), vec3(f(vec2(uv.x+p, uv.y))), ssx);\n    vec3 col2 = col * mix(vec3(f(vec2(uv.x, uv.y-p))), vec3(f(vec2(uv.x, uv.y+p))), ssy);\n    vec3 col3 = col * mix(vec3(f(vec2(uv.x-p, uv.y-p))), vec3(f(vec2(uv.x+p, uv.y+p))), sqrt(ssx*ssx + ssy*ssy));\n    vec3 col4 = col * mix(vec3(f(vec2(uv.x-p, uv.y+p))), vec3(f(vec2(uv.x+p, uv.y-p))), sqrt(ssx*ssx + (1.-ssy)*(1.-ssy)));\n    \n    col = (col1 + col2 + col3 + col4) * 0.25;\n    \n    fragColor = vec4(col, 1.0);\n}\n",
          "name": "Image",
          "description": "",
          "type": "image"
        }
      ]
    }
  ],
  sdsyRS: [
    {
      "ver": "0.1",
      "info": {},
      "renderpass": [
        {
          "inputs": [],
          "outputs": [],
          "code": "vec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  { \n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i); \n  vec4 p = permute( permute( permute( \n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nfloat normnoise(float noise) {\n\treturn 0.5*(noise+1.0);\n}\n\nfloat clouds(vec2 uv) {\n    uv += vec2(iTime*0.0005, + iTime*0.0001);\n    \n    vec2 off1 = vec2(50.0,33.0);\n    vec2 off2 = vec2(0.0, 0.0);\n    vec2 off3 = vec2(-300.0, 50.0);\n    vec2 off4 = vec2(-100.0, 200.0);\n    vec2 off5 = vec2(400.0, -200.0);\n    vec2 off6 = vec2(100.0, -1000.0);\n\tfloat scale1 = 3.0;\n    float scale2 = 6.0;\n    float scale3 = 12.0;\n    float scale4 = 24.0;\n    float scale5 = 48.0;\n    float scale6 = 96.0;\n    return normnoise(snoise(vec3((uv+off1)*scale1,iTime*0.5))*0.8 + \n                     snoise(vec3((uv+off2)*scale2,iTime*0.4))*0.4 +\n                     snoise(vec3((uv+off3)*scale3,iTime*0.1))*0.2 +\n                     snoise(vec3((uv+off4)*scale4,iTime*0.7))*0.1 +\n                     snoise(vec3((uv+off5)*scale5,iTime*0.2))*0.05 +\n                     snoise(vec3((uv+off6)*scale6,iTime*0.3))*0.025);\n}\n\n\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n    float time = iTime / 10.;\n\tvec2 uv =  fragCoord.xy/iResolution.x;\n    \n    vec2 center = vec2(0.5,0.5*(iResolution.y/iResolution.x));\n    \n    vec2 light1 = vec2(sin(time*1.2+50.0)*1.0 + cos(time*0.4+10.0)*0.6,sin(time*1.2+100.0)*0.8 + cos(time*0.2+20.0)*-0.2)*0.2+center;\n    vec3 lightColor1 = vec3(1.0, 0.3, 0.3);\n    \n    vec2 light2 = vec2(sin(time+3.0)*-2.0,cos(time+7.0)*1.0)*0.2+center;\n    vec3 lightColor2 = vec3(0.3, 1.0, 0.3);\n    \n    vec2 light3 = vec2(sin(time+3.0)*2.0,cos(time+14.0)*-1.0)*0.2+center;\n    vec3 lightColor3 = vec3(0.3, 0.3, 1.0);\n\n    \n    float cloudIntensity1 = 0.7*(1.0-(2.5*distance(uv, light1)));\n    float lighIntensity1 = 1.0/(100.0*distance(uv,light1));\n\n    float cloudIntensity2 = 0.7*(1.0-(2.5*distance(uv, light2)));\n    float lighIntensity2 = 1.0/(100.0*distance(uv,light2));\n    \n    float cloudIntensity3 = 0.7*(1.0-(2.5*distance(uv, light3)));\n    float lighIntensity3 = 1.0/(100.0*distance(uv,light3));\n    \n    \n\tfragColor = vec4(vec3(cloudIntensity1*clouds(uv))*lightColor1 + lighIntensity1*lightColor1 +\n                     vec3(cloudIntensity2*clouds(uv))*lightColor2 + lighIntensity2*lightColor2 +\n                     vec3(cloudIntensity3*clouds(uv))*lightColor3 + lighIntensity3*lightColor3 \n                     ,1.0);\n}",
          "name": "Image",
          "description": "",
          "type": "image"
        }
      ]
    }
  ],
  Nslyz8: [
    {
      "ver": "0.1",
      "info": {},
      "renderpass": [
        {
          "inputs": [],
          "outputs": [
            {
              "id": "4dfGRr",
              "channel": 0
            }
          ],
          "code": "void mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n    \n    vec2 O=vec2(iResolution.x/2.,iResolution.y/2.);\n    vec2 p=vec2(fragCoord.x,fragCoord.y);\n    vec2 pnorm=normalize(p-O);\n    \n    vec2 up=vec2(0,1.);\n    vec2 down=vec2(0,-1.);\n    vec2 left=vec2(1.,0.);\n    vec2 right=vec2(-1.,0.);\n    \n    \n \n       \n    float c=fract((length(p-O)+50.*dot(up,pnorm))/length(vec2(0,0)-O)*10.-iTime*0.06);\n    \n    float d=fract((length(p-O)+100.*dot(up,pnorm))/length(vec2(0,0)-O)*10.-iTime*.18);\n    \n    float g=fract((length(p-O)+150.*dot(up,pnorm))/length(vec2(0,0)-O)*10.-iTime*.54);\n    \n   \n\tfragColor = vec4(1./c,d/2.,g,1.0);\n    \n    //fragColor = vec4(c/2.,d/3.,g,1.0);\n    \n   \n    \n    \n}\n",
          "name": "Image",
          "description": "",
          "type": "image"
        }
      ]
    }
  ],
  '7slyRS': [
    {
      "ver": "0.1",
      "info": {},
      "renderpass": [
        {
          "inputs": [],
          "outputs": [
            {
              "id": "4dfGRr",
              "channel": 0
            }
          ],
          "code": "vec2 center = vec2(0.5,0.5);\nfloat speed = 0.01;\n\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n    float invAr = iResolution.y / iResolution.x;\n\n    vec2 uv = fragCoord.xy / iResolution.xy;\n\t\t\n\tvec3 col = vec4(uv,1.5+1.5*sin(iTime / 10.),5.0).xyz;\n   \n     vec3 texcol;\n\t\t\t\n\tfloat x = (center.x-uv.x);\n\tfloat y = (center.y-uv.y) *invAr;\n\tfloat r = -(x*x + y*y);\n\tfloat z = 2.0 + 2.0*sin((r+iTime*speed)/0.05);\n\t\n\ttexcol.x = z;\n\ttexcol.y = z;\n\ttexcol.z = z;\n\t\n\tfragColor = vec4(col*texcol,1);\n}",
          "name": "Image",
          "description": "",
          "type": "image"
        }
      ]
    }
  ]
}