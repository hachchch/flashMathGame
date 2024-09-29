class mathematics{
  chance(a){
    if(Math.random()*100<=a){
        return true;
        }else{
        return false;
        }
  }
  csc(a){
  return 1/Math.sin(a);
  }
  sec(a){
  return 1/Math.cos(a);
  }
  cot(a){
  return 1/Math.tan(a);
  }
  sum(K,N,gen){
  let ans=0;
  for(let k=K;k<=N;++k){
    ans+=eval(gen);
  }
  return ans;
}
prod(K,N,gen,val){
  let ans=1;
  if(!val){
  for(let k=K;k<=N;++k){
    ans=ans*eval(gen);
  }
  }else{
  let syntax ="for(var "+val+"=K;"+val+"<=N;++"+val+"){ans=ans*eval(gen);}";
  eval(syntax);
  }
  return ans;
}
fact(a){
  if(a==Math.round(a)){
  return this.prod(1,a,"k");
  }else{
  return this.gamma(a+1);
  }
}
gamma(a,b){
  if(!b){
    b=100;
  }
  return this.int(0,b,"Math.pow(x,"+(a-1)+")*Math.exp(-x)",100000);
}
nPr(n,r){
  return this.fact(n)/this.fact(n-r);
}
nCr(n,r){
  return this.fact(n)/(this.fact(r)*this.fact(n-r));
}
mean(arr){
  let ans=0;
  for(let k=0;k<arr.length;++k){
    ans+=eval("arr[k]");
  }
  return ans/arr.length;
}
geomean(arr){
  let ans=1;
  for(let k=0;k<arr.length;++k){
    ans=ans*eval("arr[k]");
  }
  return Math.pow(ans,1/arr.length);
}
  median(arr){
    return (arr[Math.floor((arr.length-1)/2)]+arr[Math.ceil((arr.length-1)/2)])/2;
  }
  euler(term,x,y,h,f){
    let Yarray=[y];
    function F(x,y){
      return eval(f);
    }
    for(let n=1; n<=term; ++n){
      Yarray[n]=Yarray[n-1]+h*F(x,Yarray[n-1]);
      x+=h;
    }
    return Yarray[term];
  }
  trapezoidal(a,b,f,n){
    if(!n){
    n=10001;
    }
    function F(x){
      return eval(f);
    }
    let an=[a];
    for(let i=1; i<=n; ++i){
      an[i]=an[i-1]+((b-a)/n);
    }
    let ans=0;
    for(let k=1; k<=n; ++k){
      ans+=(an[k]-an[k-1])*(F(an[k])+F(an[k-1]))/2;
    }
    return ans;
  }
  int(a,b,f,mix){
    function F(x){
      return eval(f);
    }
    if(!mix){
    return ((b-a)/6)*(F(a)+4*F((a+b)/2)+F(b));
    }else{
    if(mix/2!=Math.ceil(mix/2)){
      mix=2*Math.ceil(mix/2);
    }
    let an=[0];
    let h=(b-a)/mix;
    for(let i=1; i<mix; ++i){
      an[i]=a+i*h;
    }
    let ans1=0;
    for(let i=1; i<=mix/2-1; ++i){
      ans1+=F(an[2*i]);
    }
    let ans2=0;
    for(let i=1; i<=mix/2; ++i){
      ans2+=F(an[2*i-1]);
    }
    return (h/3)*(F(a)+2*ans1+4*ans2+F(b));
    }
  }
  B(N){
      if(N==0){
        return 1;
      }
      let ans=0;
      for(let k=0; k<N; ++k){
        ans+=this.nCr(N+1,k)*this.B(k);
      }
      return (-1/(N+1))*ans;
  }
  divisor(N){
    if(N!=Math.trunc(N)){
      console.error("小数に対応していません");
    }
    let ans=[];
    for(let k=1; k<=N; ++k){
      if(N/k==Math.trunc(N/k)){
        ans.push(k);
      }
    }
    return ans;
  }
  mod(a,b){
    return a-(b*Math.floor(a/b));
  }
  quartile(a){
    let mid1=(a.length+1)/2;
    let mid2=(a.length+1)/2;
    if(mid1!=Math.trunc(mid1)){
    mid1=mid1+0.5;
    mid2=mid2-0.5;
    }
    return [this.median(a.slice(0,mid1-1)),this.median(a),this.median(a.slice(mid2,a.length))];
  }
  syntax(f,vars,varsnum){
      for(let index=0; index<vars.length; ++index){
      f=f.replaceAll(vars[index],varsnum[index]);
          }
      f=f.replaceAll("--","+");
      return eval(f);
  }
    complex(f){
        let real=0;
        let imag=0;
        let i=0;
        f=f.replaceAll("i**2","(-1)");
        real=eval(f);
        i=1;
        imag=eval(f)-real;
        if(real!=0 || imag!=0){
        return [real,imag];
            }
        }
    complexAbs(input){
            return Math.sqrt(this.complex(input)[0]**2+this.complex(input)[1]**2);
        }
    imagPow(base,imag){
        imag=imag*Math.log1p(base-1);
        return this.complex("Math.cos("+imag+")+i*Math.sin("+imag+")");
        }
}