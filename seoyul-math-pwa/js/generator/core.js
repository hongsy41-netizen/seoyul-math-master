// 공통 유틸
function randInt(min, max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function choice(arr){
  return arr[randInt(0, arr.length-1)];
}

function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function gcd(a,b){
  a=Math.abs(a); b=Math.abs(b);
  while(b){ [a,b]=[b,a%b]; }
  return a;
}

function lcm(a,b){
  return Math.abs(a*b)/gcd(a,b);
}

function isPrime(n){
  if(n<2) return false;
  for(let i=2;i*i<=n;i++) if(n%i===0) return false;
  return true;
}

function primeFactors(n){
  let x = n;
  const f = {};
  let p=2;
  while(p*p<=x){
    while(x%p===0){
      f[p]=(f[p]||0)+1;
      x/=p;
    }
    p++;
  }
  if(x>1) f[x]=(f[x]||0)+1;
  return f; // {prime: exp}
}

function factorsToString(f){
  const parts = Object.entries(f).sort((a,b)=>Number(a[0])-Number(b[0])).map(([p,e])=> e===1? `${p}` : `${p}^${e}`);
  return parts.join(' × ');
}

function parseNumber(text){
  const m = String(text).trim().match(/^([+-]?\d+(?:\.\d+)?)$/);
  if(!m) return null;
  return Number(m[1]);
}

window.GenCore = { randInt, choice, shuffle, gcd, lcm, isPrime, primeFactors, factorsToString, parseNumber };
