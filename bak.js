Timeblocks1 = type=http-response,pattern=^http:\/\/box\.gettimeblocks\.com\/api,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/iganymede/GYMD/master/TBS.js
Timeblocks2 = type=http-response,pattern=^https:\/\/timeblocks\.com\/api,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/iganymede/GYMD/master/TBS.js
WangYi = requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wnyd.js,type=http-response,pattern=^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json

timeblocks.com,box.gettimeblocks.com,p.du.163.com