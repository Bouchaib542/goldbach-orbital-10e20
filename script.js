document.addEventListener("DOMContentLoaded", ()=> {
  document.querySelector("button").addEventListener("click", predict);
});

function isPrime(n) {
  if (n < 2n) return false;
  if (n === 2n) return true;
  if (n % 2n === 0n) return false;
  const limit = bigintSqrt(n);
  for (let i = 3n; i <= limit; i += 2n) {
    if (n % i === 0n) return false;
  }
  return true;
}

function bigintSqrt(n) {
  if (n < 2n) return n;
  let x0 = n / 2n;
  let x1 = (x0 + n / x0) / 2n;
  while (x1 < x0) {
    x0 = x1;
    x1 = (x0 + n / x0) / 2n;
  }
  return x0;
}

function predict() {
  try {
    const s = document.getElementById("evenInput").value.trim();
    if (!/^\d+$/.test(s)) throw "Must be digits only";
    const E = BigInt(s);
    if (E % 2n !== 0n || E <= 2n) throw "E must be a valid even number > 2";
    const sqrtE = Math.sqrt(Number(E)); 
    const delta = sqrtE * Math.log(Math.log(Number(E))) / Math.log(Number(E));
    let step = 0n, half = E / 2n;
    while (step <= 1000000n) {
      const pCandidates = [half + step, half - step].filter(p => p > 1n);
      for (const p of pCandidates) {
        const q = E - p;
        if (isPrime(p) && isPrime(q)) {
          return showResult(delta, p, q);
        }
      }
      step++;
    }
    throw "No pair found within range";
  } catch(err) {
    document.getElementById("result").textContent = "Error: " + err;
  }
}

function showResult(delta, p, q) {
  document.getElementById("result").innerHTML = `
    <p><strong>δ(E) predicted:</strong> ${delta.toFixed(6)}</p>
    <p><strong>Pair found:</strong> p = ${p}, q = ${q}</p>
    <p><strong>Sum check:</strong> ${p}+${q} = ${p+q}</p>
  `;
}
